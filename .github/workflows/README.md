# GitHub Actions

`deploy.yml` compila el sitio y lo publica en Hostinger por FTPS en cada push a `main`. También se puede ejecutar a mano desde **Actions > Deploy to Hostinger > Run workflow**.

## Secrets requeridos

Configurar en **Settings > Secrets and variables > Actions**. El workflow falla al inicio si falta alguno.

| Secret                     | Descripción                       | Origen                                                   |
| -------------------------- | --------------------------------- | -------------------------------------------------------- |
| `FTP_SERVER`               | Host FTP de Hostinger             | Panel de Hostinger > Archivos > Cuentas FTP              |
| `FTP_USERNAME`             | Usuario FTP                       | Panel de Hostinger                                       |
| `FTP_PASSWORD`             | Contraseña FTP                    | Panel de Hostinger                                       |
| `PUBLIC_JAMENDO_CLIENT_ID` | Client ID de la API de Jamendo    | [developer.jamendo.com](https://developer.jamendo.com/)  |

`PUBLIC_JAMENDO_CLIENT_ID` queda incluido en el JavaScript público del sitio: no es un secreto real, solo se guarda como secret para no versionarlo.

## Pasos del workflow

1. Checkout del repositorio (sin persistir credenciales de Git).
2. Node.js según `.nvmrc`, con caché de npm.
3. `npm ci`.
4. `npm audit --audit-level=high`: el despliegue se detiene si hay vulnerabilidades altas o críticas.
5. Verificación de que existan los secrets (se pasan por `env:` y nunca se imprimen).
6. `npm run build`: verificación de tipos, build de Astro y generación de los hashes CSP en `dist/.htaccess`.
7. Subida de `dist/` a `public_html/` por FTPS.

## Seguridad

- `permissions: contents: read`: el token del workflow solo puede leer el repositorio.
- Las actions de terceros están fijadas a un SHA de commit; el comentario indica la versión. Para actualizarlas, reemplazar el SHA por el del nuevo tag.
- El despliegue usa FTPS con validación estricta del certificado (`security: strict`). `FTP_SERVER` debe coincidir con el nombre del certificado TLS del servidor; si Hostinger entrega un host sin certificado válido, la conexión fallará en lugar de degradarse a FTP sin cifrar.
- `concurrency` evita dos despliegues simultáneos.

## Problemas frecuentes

- **Missing repository secret**: falta uno de los secrets de la tabla.
- **npm audit** falla: actualizar las dependencias afectadas (`npm audit fix`) antes de desplegar.
- **Error TLS / certificado**: revisar que `FTP_SERVER` sea el host para el que Hostinger emite el certificado.
- **Login authentication failed**: credenciales FTP incorrectas.
