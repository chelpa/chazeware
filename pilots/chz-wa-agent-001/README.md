# CHZ-WA-AGENT-001 — WhatsApp → governed GitHub PR

Estado: **código de piloto propuesto, NO desplegado, NO conectado a WhatsApp ni OpenAI.**

Este MVP corre en Cloudflare Workers, usa Meta WhatsApp Cloud API, Cloudflare Queues + D1, OpenAI Responses API y GitHub REST API. El único archivo modificable es `src/content.js` de `chelpa/chazeware`. Nunca hace merge ni publica producción. Cada cambio crea un **draft pull request** y exige revisión humana.

## Arquitectura

WhatsApp → /webhook (GET token / POST HMAC SHA-256) → Queue → D1 idempotencia → OpenAI (respuesta estructurada) → comparación de cadena exacta → rama `chz-wa-*` → draft PR de GitHub → respuesta WhatsApp.

`AYUDA` explica el alcance; `ESTADO` consulta la última tarea; una instrucción breve puede generar una propuesta de edición de texto o una respuesta. Cada orden de edición produce su propio PR; el MVP **no** continúa editando un PR pendiente en mensajes posteriores.

## Activación (requiere cuentas y secretos del propietario)

1. Instalar Node.js y usar este directorio como raíz del proyecto. Iniciar sesión: `npx wrangler@latest login`.
2. Crear cola: `npx wrangler@latest queues create chz-wa-agent-jobs`.
3. Crear D1: `npx wrangler@latest d1 create chz-wa-agent-db`. Copiar el `database_id` real a `wrangler.jsonc` (sustituir `REPLACE_WITH_D1_DATABASE_ID`).
4. Aplicar SQL: `npx wrangler@latest d1 migrations apply chz-wa-agent-db --remote`.
5. Configurar secretos, ejecutando **cada comando por separado**, sin publicarlos en chat ni Git:
   - `npx wrangler@latest secret put META_VERIFY_TOKEN`
   - `npx wrangler@latest secret put META_APP_SECRET`
   - `npx wrangler@latest secret put WA_ACCESS_TOKEN`
   - `npx wrangler@latest secret put WA_PHONE_NUMBER_ID`
   - `npx wrangler@latest secret put AUTHORIZED_WA_ID` (identificador de remitente autorizado en formato internacional, dígitos)
   - `npx wrangler@latest secret put OPENAI_API_KEY`
   - `npx wrangler@latest secret put GITHUB_TOKEN`
6. Para el piloto, el GitHub token debe ser de **grano fino y restringido solo a `chelpa/chazeware`**, con Contents lectura/escritura y Pull requests lectura/escritura (Metadata lectura implícita). Para producción migrar a GitHub App con tokens de vida corta.
7. `npx wrangler@latest deploy`. Configurar en Meta WhatsApp el webhook HTTPS `https://<worker>.workers.dev/webhook` con el mismo `META_VERIFY_TOKEN`, suscribiendo al campo `messages`.
8. Enviar desde el número de prueba autorizado: `AYUDA` y luego `Cambia una frase de presentación, sin alterar las afirmaciones de gobernanza`.
9. Revisar PR draft y CI en GitHub; no fusionarlo sin revisión humana.

## Pruebas

`node --test tests/*.test.mjs`

## Restricciones y riesgos

- No debe recibir credenciales por WhatsApp ni modificarlas mediante prompts.
- Solo permite un reemplazo exacto y único en el archivo designado. No ejecuta código generado ni scripts de terminal.
- No hace merge, no invoca Cloudflare Pages y no publica producción.
- D1 registra ID, remitente, solicitud y respuesta: esto puede contener datos personales. Para pilotos reales, definir retención y controles de acceso antes de operar.
- La entrega de Queues es al menos una vez; la rama determinística y los estados D1 reducen duplicados, pero no garantizan entrega exactamente una vez en todos los fallos.
- El contenido del repositorio es tratado como dato no confiable. La revisión humana y pruebas siguen siendo necesarias.
- El número autorizado y la firma del webhook son requisitos conjuntos; no basta solo con un número.
- Respuestas de WhatsApp fuera de la ventana de servicio pueden requerir plantillas aprobadas; este MVP no implementa la plantilla de notificación.
- Un draft PR no implica revisión ni preview disponible automáticamente. Cloudflare Pages debe estar enlazado con GitHub y configurado para builds de PR.
- La primera configuración requiere la consola de Cloudflare/Meta y credenciales legítimas del titular. No suministrar claves en conversaciones.

## Evidencia de aceptación

- Tests locales pasan.
- WhatsApp GET verifica el token y POST rechaza firmas falsas.
- Un número no autorizado no encola trabajo.
- Mensaje `AYUDA` genera respuesta.
- Cambio permitido abre un PR draft, limitado a `src/content.js`.
- Rama `main` y web de producción no cambian.
- Un fallo no se anuncia como publicación exitosa.
