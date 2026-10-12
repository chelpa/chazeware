# CHZ-LEARN / DENTISTAPP-CALENDAR-001

Fecha: 2026-10-12. Tipo: caso técnico acotado, candidato de aprendizaje.
Estado: RECORDED / REVIEW_PASS_LIMITED. No es una validación científica de CHAZEWARE ni autorización para publicar DentistApp.

## Problema observable

La demo A de DentistApp tiene Mes/Día y requiere agenda semanal con duración, dentista y sillón. Su compilación aprobada no demuestra todos los comportamientos de interfaz. La aplicación usa localStorage, de modo que una comprobación de solapamiento local no ofrece exclusión entre usuarios o pestañas.

## Sujetos y procedencia

| Sujeto | Identificador verificable | Qué acredita |
| --- | --- | --- |
| A, candidata previa | `aaa83077c462b4de8b7a509ee76946ce69fdc89a` en `chelpa/dentistapp-demo` | Código/dependencias iniciales de este incremento |
| A, revisión previa | [PR #1](https://github.com/chelpa/dentistapp-demo/pull/1) | Objeto de revisión abierto/draft al iniciar |
| A, CI previo | [run 38299044837](https://github.com/chelpa/dentistapp-demo/actions/runs/38299044837) | Instalar, typecheck y exportación PASS para el baseline |
| B | Repo local dental-portal, `fe594d947869e0d99691662a04a0109bb4c2fcff`, rama v2 | Candidata separada con Next 16/Auth.js/Prisma; no prueba de superioridad |
| B/C, comparación | Chat «Auditar versiones de DentistApp», `01a1318d-5554-7f21-a30f-425c09b88f1d` | Investigación aparte; hallazgos reportados no sustituyen reproducción |
| CHAZEWARE | main `f377ac0db1ec95b44c539dc83cf353ee0d2d7f3a` | Base de este documento; no incorpora `chz-010/presentation` local |
| Claude | CLI 2.1.296, auth `loggedIn=false` | Disponibilidad instalada, ejecución no acreditada |

La candidata semanal está registrada en `860a5115f111f5723363cda6427e0cde79a17ffb`, [PR #2 draft](https://github.com/chelpa/dentistapp-demo/pull/2). [Manifiesto inmutable](https://github.com/chelpa/dentistapp-demo/blob/860a5115f111f5723363cda6427e0cde79a17ffb/docs/calendar-001/evidence/manifest.json). Fuente histórica del override: transcripción del usuario del 12/oct/2026. Los logs originales de ese intento no se reprodujeron ahora.

## APODE aplicado

**AUDIT:** verificar identidad local/remota, diff, dependencias, almacenamiento y candidatos antes de elegir base. **PLAN:** aceptación de horas/recursos, accesibilidad, móvil, límites y concurrencia. **ORGANIZE:** ramas nuevas y docs/evidence separados de producción. **DIRECT:** usuario autoriza incremento y PR draft; implementación/revisión son roles distintos. **EXECUTE:** alternativa Codex por falta de sesión Claude, registrada como tal. **RECORD/RADO:** almacenar comando, salida, exit code, fecha, hash de sujeto y resultado; no convertir EXPECTED_OUTPUT en OBSERVATION.

## Registro de casos

| Caso | CLAIM | EVIDENCE / procedencia | FINDING | DECISION / regla candidata |
| --- | --- | --- | --- | --- |
| L01 · Fallo del override | Configurar override sustituye PostCSS interno | Transcripción usuario: Next 15.5.27 mantiene PostCSS 8.4.31 `invalid: 8.5.28`, `ELSPROBLEMS`; override ausente en baseline actual | Declaración y lock/árbol instalado pueden divergir; no se aisló causa raíz del fallo de npm | Nunca cerrar seguridad por editar package.json. Exigir árbol instalado, audit y reinstalación limpia. No declarar que overrides siempre fallan |
| L02 · Recuperación parcial | Retirar override restaura consistencia sin cerrar seguridad | Usuario reportó npm ls sin ELSPROBLEMS, types/build PASS; commit aaa8307 en GitHub; CI success | Reparación de consistencia y reparación de vulnerabilidad son resultados distintos | G2 puede pasar y G3 permanecer HOLD; conservar vulnerabilidades y su alcance |
| L03 · CI vs UI | Build PASS significa agenda correcta | CI previo solo ci/tsc/build; código no tenía vista semanal ni chair | Evidencia técnica insuficiente para la afirmación funcional | Añadir invariantes y observaciones de navegador, medir móvil y teclado; limitar cada PASS al alcance probado |
| L04 · Reserva local | No overlap local significa reserva segura | Lectura de `schedule` y persistencia localStorage en baseline | Snapshots concurrentes pueden aceptar citas incompatibles; incluso un evento storage deja una carrera check/write | Test local solo acredita un proceso. Producción requiere transacción/restricción de BD y prueba concurrente; HOLD producción |
| L05 · Baseline equivocado | Carpeta local CHAZEWARE equivale a main vigente | Local `chz-010/presentation` en 80aeacf; remoto main en f377ac0 y diff divergente | Una rama activa puede tener código no aprobado diferente de producción | Basar nueva lección en remoto explícito; conservar branch/ref y no trasladar delta ajeno |
| L06 · Autoría | Claude instaló/implementó/auditó la candidata | `claude --version` responde; auth false; sin sesión de ejecución | Tener CLI no acredita ejecución ni revisión | Registrar autor real; dejar prompt reproducible. No atribuir trabajo a Claude sin session/output/diff |
| L07 · Éxito de trazabilidad | Incremento puede revisarse sin reemplazar A ni B/C | Rama aislada, diff aditivo, PR draft y hashes a registrar | Hipótesis verificable al cerrar el paquete de evidencia | Aceptar solo si el diff y manifiesto corresponden a los mismos bytes; cambios posteriores requieren nuevo sobre |

L01/L02 son incidentes históricos reportados; L03–L06 se apoyan en observaciones actuales de código/metadata. L07 tiene ahora rama nueva, commit remoto y PR draft con evidencia concreta; eso no acredita promoción ni producción. No usar una fila de esta tabla como prueba de un resultado todavía no ejecutado.

## Invariantes de calendario propuestas

1. Citas activas se solapan si `startA < endB && endA > startB` y mismo profesional o mismo sillón asignado. Filtros no alteran la validación.
2. Fechas son días civiles; calcular semanas desde lunes sin convertirlos a UTC. Probar mes/año, domingo, bisiestos y DST.
3. Duración determina tamaño, no el intervalo de líneas visuales. 15 min continúa visible con eje de 30 min.
4. Migración no inventa hechos: las citas históricas sin sillón permanecen sin asignación. Sin sillón no prueba disponibilidad real de recursos.
5. En móvil/teclado, la información y la creación de citas siguen disponibles; color por sí solo no identifica estado.

## Semántica y límites

`CLAIM ≠ EVIDENCE ≠ FINDING ≠ DECISION ≠ AUTHORITY ≠ EXECUTION ≠ OBSERVATION`

`BUILD PASS ≠ UI PASS ≠ SECURITY PASS ≠ AUTHORITY TO PROMOTE`

**AUTHORITY:** usuario autoriza candidato y documentación; no merge, producción ni publicación. **DECISION:** mantener G5 comparación B/C y G6 publicación HOLD. **EXECUTION:** cambios únicamente en rama/copia y PR draft. **VERIFIED_OUTCOME:** se describe en el sobre de resultados, con alcance y pendientes.

Este caso propone reglas y captura evidencias de una sesión; el public shell de CHAZEWARE no aplica automáticamente estas reglas ni constituye un sistema de enforcement o registro clínico inmutable. SHA-256 vincula contenido: no prueba verdad, identidad del autor ni independencia del revisor.

## Gate de promoción de la lección

Revisor debe poder localizar baseline/candidata, repetir checks y diferenciar historial reportado de evidencia actual. Gate del caso requiere cierre del sobre de resultados e identificación del review independiente. La aceptación de una regla futura necesita una decisión humana separada; este PR no cambia políticas ni despliega el sitio.

Siguiente experimento para L04: dos clientes intentan reservar el mismo profesional/sillón simultáneamente; exigir exactamente una aceptación en una transacción real. Diseñado, NO ejecutado en un backend en este slice.

## Sobre de resultados observado

- Digest agregado de las fuentes revisadas: `880a254e754397883ab18aab1587dd7fa43c146a9d94d60412e0df2e702baab3`. El manifiesto en el commit anterior lista hashes por archivo y logs. Sus cinco fuentes de UI/lógica coinciden con las registradas por el revisor independiente.
- Instalación limpia/árbol: PASS; 19 tests UTC y Santiago, tipos y exportación estática: PASS. Registro final con Node 24.14.0/npm 11.19.1; implementador también usó Node 24.19.0 del bundle; revisor repitió tests bajo Node18.14.0 (tests compatibles, build requiere Node más nuevo).
- Review independiente Codex: [REVIEW_PASS_LIMITED](https://github.com/chelpa/dentistapp-demo/blob/860a5115f111f5723363cda6427e0cde79a17ffb/docs/calendar-001/INDEPENDENT-REVIEW.md). 3.000 combinaciones adversariales y 93.780 pares solapados comprobados. Hallazgo reparado: hora pasada del día actual aceptada al comparar solo fecha.
- [Navegador](https://github.com/chelpa/dentistapp-demo/blob/860a5115f111f5723363cda6427e0cde79a17ffb/docs/calendar-001/evidence/browser-results.json): 16 comprobaciones; exportación real, fixtures ficticias, recursos/conflictos/cancelación/recarga, Mes/Día, Tab/Enter/Escape y cuatro anchos 320/390/768/1440. No es aceptación clínica ni auditoría exhaustiva de accesibilidad.
- G1/G2 PASS; G3 HOLD (2 alertas actuales Next/PostCSS); G4 PASS_LIMITED; G5/G6 HOLD. Concurrencia local no garantizada. CI remoto de nueva candidata se registra en la entrega, distinto del CI previo.
- Claude Code no implementó ni revisó; [prompt preparado](https://github.com/chelpa/dentistapp-demo/blob/860a5115f111f5723363cda6427e0cde79a17ffb/docs/calendar-001/CLAUDE-PROMPT.md) para una sesión autenticada.

### L08 · Fallo del entorno y recuperación

**CLAIM:** mismo comando equivale a mismo runtime. **EVIDENCE:** primer RADO recibió Node18.14 del entorno elevado y el build rechazó la versión; el [sobre histórico](https://github.com/chelpa/dentistapp-demo/blob/860a5115f111f5723363cda6427e0cde79a17ffb/docs/calendar-001/evidence/initial-node18/manifest.json) conserva el fallo. Reejecución explícita con Node24.14 pasó. **FINDING:** el entorno puede cambiar entre herramientas/sesiones. **DECISION candidata:** registrar rutas/versiones de runtime y exit codes, preservar fallo y recuperación; no reinterpretar un fallo de entorno como bug de app ni ocultarlo bajo el último PASS.

[Resultados y límites completos](https://github.com/chelpa/dentistapp-demo/blob/860a5115f111f5723363cda6427e0cde79a17ffb/docs/calendar-001/RESULTS.md). Esta documentación es el slice de aprendizaje; no modifica el enforcement de CHAZEWARE ni su sitio.
