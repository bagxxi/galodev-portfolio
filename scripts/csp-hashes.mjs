// Post-build step: allow inline <script> blocks in the CSP by hash instead of 'unsafe-inline'.
//
// Astro's built-in CSP (security.csp) is not compatible with <ClientRouter />, which this
// site uses to keep the music player alive between pages. Instead, this script scans every
// generated HTML file, hashes each inline script (SHA-256) and writes the list into the
// Content-Security-Policy header of dist/.htaccess.
//
// The build fails if it finds inline event handlers (onclick="..."), because a hash-based
// script-src would block them in production.

import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const DIST = path.resolve("dist");
const PLACEHOLDER = "__CSP_SCRIPT_HASHES__";
// Non-executable data blocks are not subject to script-src
const DATA_TYPES = new Set(["application/json", "application/ld+json", "text/plain", "text/template"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.name.endsWith(".html")) yield full;
  }
}

const hashes = new Set();
const handlerProblems = [];
let files = 0;

for await (const file of walk(DIST)) {
  files++;
  const html = await readFile(file, "utf8");

  for (const [, attrs, body] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
    if (/\ssrc\s*=/i.test(attrs)) continue;
    const type = /\stype\s*=\s*["']?([^"'\s>]+)/i.exec(attrs)?.[1]?.toLowerCase();
    if (type && DATA_TYPES.has(type)) continue;
    if (body.length === 0) continue;
    hashes.add(`'sha256-${createHash("sha256").update(body, "utf8").digest("base64")}'`);
  }

  // Inline event handler attributes inside tags (outside of script bodies)
  const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, "");
  for (const [tag] of markup.matchAll(/<[a-z][^>]*\son[a-z]+\s*=[^>]*>/gi)) {
    handlerProblems.push(`${path.relative(DIST, file)}: ${tag.slice(0, 120)}`);
  }
}

if (handlerProblems.length) {
  console.error("[csp] Inline event handlers are not allowed (move them to a script module):");
  for (const p of handlerProblems) console.error("  " + p);
  process.exit(1);
}

const htaccessPath = path.join(DIST, ".htaccess");
const htaccess = await readFile(htaccessPath, "utf8");
const occurrences = htaccess.split(PLACEHOLDER).length - 1;
if (occurrences !== 1) {
  console.error(`[csp] expected exactly one ${PLACEHOLDER} in dist/.htaccess, found ${occurrences}`);
  process.exit(1);
}

const list = [...hashes].sort().join(" ");
await writeFile(htaccessPath, htaccess.replace(PLACEHOLDER, list));
console.log(`[csp] ${hashes.size} inline script hash(es) from ${files} HTML file(s) written to dist/.htaccess`);
