# GaloDev Portfolio

Portafolio personal de Gabriel Balbontín (GaloDev), desarrollador full stack. El sitio reúne proyectos, habilidades, datos de contacto, una sección de juegos jugables en el navegador y un reproductor de música conectado a la API de Jamendo.

Sitio en producción: [elgalo.me](https://elgalo.me)

## Stack

- [Astro](https://astro.build) 7, generación estática
- [React](https://react.dev) para componentes interactivos
- [Tailwind CSS](https://tailwindcss.com) 4, configurado en `src/styles/global.css`
- TypeScript
- [Zustand](https://github.com/pmndrs/zustand) para el estado del reproductor
- [Jamendo API](https://developer.jamendo.com) para música con licencia Creative Commons

## Funcionalidades

- Diseño adaptable: barra lateral en escritorio y navegación inferior en móviles.
- Interfaz en español e inglés, con selector de idioma persistente.
- Sección de proyectos con capturas de cada sitio.
- Sección de juegos con modo pantalla completa (API Fullscreen, con alternativa por CSS en iOS).
- Reproductor de música persistente entre páginas gracias a las View Transitions de Astro.
- Accesibilidad: enlace para saltar al contenido, foco visible, etiquetas ARIA en controles y soporte para `prefers-reduced-motion`.
- Redirecciones cortas, por ejemplo `/linkedin`.

## Estructura

```
public/
  games/              Juegos HTML autocontenidos (con sus fuentes en games/fonts/)
  .htaccess           Cabeceras de seguridad, HTTPS, 404 y redirecciones (Apache/LiteSpeed)
  img/projects/       Capturas de los proyectos
src/
  components/         Componentes Astro y React
  icons/              Iconos SVG
  layouts/            Layout principal y traducciones de la interfaz
  lib/
    portfolio.ts      Datos personales, proyectos, juegos y habilidades
    jamendo.ts        Cliente de la API de Jamendo
  pages/              Rutas del sitio (inicio, proyectos, juegos, música, 404, etc.)
  scripts/            Módulos de cliente externos (sin scripts inline nuevos)
  styles/global.css   Tailwind 4 y tokens de diseño
scripts/
  csp-hashes.mjs      Post-build: hashes SHA-256 de scripts inline para la CSP
```

## Desarrollo local

Requisitos: Node.js 26 LTS (versión fijada en `.nvmrc`). Astro 7 exige como mínimo Node 22.12.

```bash
git clone https://github.com/bagxxi/galodev-portfolio.git
cd galodev-portfolio
npm install
cp .env.example .env    # agregar PUBLIC_JAMENDO_CLIENT_ID
npm run dev
```

El `client_id` de Jamendo se obtiene creando una aplicación en [developer.jamendo.com](https://developer.jamendo.com/).

| Comando           | Descripción                                            |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`             |
| `npm run build`   | Verificación de tipos, build en `dist/` y hashes CSP   |
| `npm run preview` | Sirve localmente la build de producción                |

## Contenido

- **Proyectos y datos personales:** `src/lib/portfolio.ts`. Las capturas se guardan en `public/img/projects/` y se referencian desde el campo `cover`.
- **Juegos:** copiar el archivo HTML en `public/games/` y agregar una entrada al arreglo `games` en `src/lib/portfolio.ts`.
- **Traducciones de la interfaz:** objeto `translations` en `src/layouts/Layout.astro`. Los elementos con atributo `data-i18n` se traducen en el cliente.
- **Colores y tipografías:** bloque `@theme` en `src/styles/global.css`.

## Despliegue

El build genera un sitio estático en `dist/`, compatible con cualquier hosting de archivos estáticos.

**Hostinger (GitHub Actions).** El workflow `.github/workflows/deploy.yml` compila y sube `dist/` por FTPS en cada push a `main`. Requiere los secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` y `PUBLIC_JAMENDO_CLIENT_ID`. Más detalles en [`.github/workflows/README.md`](.github/workflows/README.md).

**Manual.** Ejecutar `npm run build` y subir solo el contenido de `dist/` a la raíz pública del hosting (por ejemplo `public_html/`). No es necesario subir el código fuente ni `node_modules`.

**Netlify u otros hostings.** Comando de build `npm run build` y directorio de publicación `dist`. Las cabeceras de seguridad (CSP, HSTS, etc.) viven en `dist/.htaccess`, que solo aplican Apache y LiteSpeed; en otro hosting hay que trasladarlas a su formato (por ejemplo `_headers` en Netlify).

## Licencia

MIT.

## Contacto

- Sitio: [elgalo.me](https://elgalo.me)
- GitHub: [bagxxi](https://github.com/bagxxi)
- LinkedIn: [galodev](https://www.linkedin.com/in/galodev/)
