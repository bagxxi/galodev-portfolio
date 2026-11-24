// Replaces broken images that declare data-fallback="<url>".
// Kept in an external module (instead of inline onerror="...") so the CSP
// does not need 'unsafe-inline' for scripts.

function applyFallback(img: HTMLImageElement) {
  const fallback = img.dataset.fallback;
  // Swap only once, so a missing fallback cannot cause an error loop
  if (!fallback || img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = "true";
  img.src = fallback;
}

// Errors don't bubble, so listen in the capture phase
document.addEventListener(
  "error",
  (event) => {
    const target = event.target;
    if (target instanceof HTMLImageElement) applyFallback(target);
  },
  true,
);

// Images that already failed before this module ran
function checkExisting() {
  document
    .querySelectorAll<HTMLImageElement>("img[data-fallback]")
    .forEach((img) => {
      if (img.complete && img.naturalWidth === 0) applyFallback(img);
    });
}

document.addEventListener("astro:page-load", checkExisting);
