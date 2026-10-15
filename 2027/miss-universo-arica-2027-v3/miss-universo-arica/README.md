# Miss Universo Arica 2027

**Versión visual actual: revisión 3.** Lee `REVISION-V3.md` para los cambios de composición. Se reconstruyeron portada y páginas interiores a partir de las seis referencias; `reference-v3.js`, `reference-v3.css` y `reference-fixes.css` implementan esta revisión. El paquete incluye 36 PNG (7 nuevos en esta revisión). Las vistas de muestra se identifican como diseño y no crean candidatas, resultados, noticias o sponsors reales. El acceso `#admin-diseno` permite revisar el aspecto del panel sin credenciales; la gestión real sigue protegida en `#admin`.

## Versión cristal / neón basada en las seis maquetas

La interfaz actual incorpora escenas por capas, 29 PNG individuales creados desde cero, cristales flotantes, partículas, parallax con puntero, cintas luminosas, transiciones al recorrer la página y pausa de efectos. Consulta `ASSETS.md` para el inventario y los prompts. La composición sigue las referencias; no es una reproducción píxel por píxel y usa imágenes nuevas con diferencias de pose y vestuario.

Además de las secciones iniciales, incorpora Certamen, Arica/turismo, Galería multimedia con filtros y ampliación, Eventos, Contacto y Recompensas. Desde Candidatas se puede abrir una **vista de diseño del perfil** sin candidatas ficticias registradas: muestra un nombre de posición, imágenes conceptuales y voto desactivado. Los perfiles publicados solo usan datos que cargue administración.

Los iconos y los elementos gráficos se entregan en PNG. Las etiquetas, campos, botones y la navegación siguen siendo elementos HTML accesibles. `neon.css`, `neon-final.css` y `experience.js` implementan la dirección visual sobre la base funcional. Los tres PNG de superficies adicionales se incluyen para reutilización; el acabado adaptable de los controles se dibuja con CSS.

La versión alojada en Sites es una **revisión visual estática**, sin la API Python. La instalación local es la que permite guardar formularios, gestionar perfiles y ejecutar las funciones de base de datos. Contacto también guarda solicitudes mediante la API local. Los pagos, verificación y recuperación por email, subida de archivos desde el navegador, agenda editable y premios comerciales siguen pendientes; no se anuncian como operativos.

Para actualizar la revisión estática después de editar, copiar el contenido de `public/` a `dist/`. No copiar `data/` ni ninguna credencial. Para pruebas locales no se necesita `dist/`.

Diseño original construido desde cero para su posterior adaptación a missuniversoarica.cl. No se ha conectado ni modificado ese dominio. No incluye información personal ni resultados inventados. El logo 27 es una interpretación vectorial nueva, no una reproducción de un original recibido.

## Instalación local

Requiere Python 3.11 o superior. Desde esta carpeta:

```sh
python -m venv .venv
# Windows
.venv\Scripts\activate
# macOS / Linux: source .venv/bin/activate
python -m pip install -r requirements.txt
python server.py --create-admin administrador@tu-dominio.cl
python server.py
```

Abrir http://127.0.0.1:8027. La contraseña se solicita sin mostrarse y no hay credenciales predeterminadas. Crear el administrador una sola vez. La base SQLite se crea en `data/arica.sqlite3`; nunca se sirve desde la carpeta pública. Puede cambiarse con `MUA_DB`. No borrar ni sustituir bases existentes.

## Uso

1. Ingresar en **Mi universo**. Las cuentas nuevas tienen rol de votante; ninguna puede asignarse permisos.
2. La futura candidata crea su cuenta. Administración entra en `#admin` y crea su ficha usando el correo registrado; esto asigna el rol candidata.
3. Añadir biografía, propósito, foto y JSON de galerías/redes. Los archivos propios se colocan en `public/assets/`; los enlaces externos deben usar HTTPS. Ejemplo:

```json
{"gallery":["/assets/foto-autorizada.jpg"],"videos":["https://www.youtube.com/watch?v=ID_REAL"],"socials":[{"label":"Instagram","url":"https://www.instagram.com/CUENTA_REAL/"}]}
```

4. Publicar la ficha con su consentimiento. El perfil queda accesible desde Candidatas. Las imágenes se amplían y los videos/redes abren su enlace original.
5. Revisar las bases y habilitar votación desde administración solo cuando corresponda. La versión local permite un voto total por cuenta y día en America/Santiago. El ranking cuenta registros confirmados y comparte posición en empates.
6. Las candidatas entregan evidencia del nivel actual. Administración aprueba o rechaza; el avance es consecutivo. Los 17 nombres y las tres misiones públicas son propuestas editoriales y deben aprobarse antes de anunciar el programa.
7. Los formularios de casting y sponsors guardan solicitudes en la base y aparecen en administración. No envían correos.

## Arquitectura

- `public/`: HTML, CSS, JavaScript y assets individuales. Navegación mediante rutas hash, sin compilación.
- `server.py`: API del mismo origen, autenticación, sesiones, permisos, SQLite y publicación editorial.
- `test_server.py`: pruebas integradas con una base temporal aislada. No toca los datos del sitio.
- `.openai/hosting.json`: identidad de la versión de revisión privada en Sites, de carácter **estático**. Esa publicación permite revisar el diseño, pero no ejecuta la API Python. Al faltar la API, los formularios muestran una explicación y no simulan guardados ni votos.

## Pruebas

```sh
python -m unittest test_server.py -v
node --check public/app.js
```

Se prueban permisos, CSRF, rechazo de origen externo, consentimiento, URLs inseguras, registro, asignación de candidata, votación cerrada, voto duplicado, aprobación de misión y bloqueo de pagos. Los registros de prueba solo existen en una base temporal.

## Seguridad y límites de producción

Incluye hash scrypt con sal, sesiones aleatorias de ocho horas cuyo token se almacena como hash, cookies HttpOnly/SameSite, CSRF en acciones autenticadas, validación de origen, consultas parametrizadas, controles por rol, limitación persistente de solicitudes por IP/ruta, cabeceras de seguridad, escape de contenido y auditoría de cambios administrativos. No hay ruta de borrado de archivos o datos 2026.

Este servidor estándar de Python está pensado para instalación y evaluación; **no es un despliegue de producción endurecido**. Antes de abrirlo al público, migrar el handler a un servidor/framework de producción o adapter equivalente, configurar HTTPS, proxy y límites de tráfico, `MUA_SECURE_COOKIE=1`, copias cifradas de base/medios y restauración probada, monitorización y revisión de seguridad. El host predeterminado solo escucha en el equipo local.

La cuenta registra email pero **no lo verifica**. No habilitar votación pública sin verificación de identidad/email, prevención de cuentas múltiples y estrategia contra automatización. No hay recuperación de contraseña ni MFA: integrar proveedor de identidad o correo, y MFA para administración. La limitación por IP no sustituye una solución contra fraude y requiere adaptación si hay proxy.

## Integraciones y contenido pendientes

- **Pagos:** deshabilitados. No hay precios ni paquetes. Seleccionar proveedor con API oficial, crear órdenes en servidor, verificar firma/importe/moneda del webhook, asegurar idempotencia por transacción y otorgar votos solo después de confirmación real. Probar sandbox, reintentos, reversas, conciliación y una transacción real autorizada antes de anunciar disponibilidad. No existe un checkout operativo.
- **Email:** configurar envío, verificación y recuperación; probar entrega real. Ninguna notificación sale de esta versión.
- **Medios:** se admiten enlaces y archivos desplegados. No hay subida de archivos de usuarios; integrar almacenamiento privado, análisis y publicación autorizada antes de ofrecerla.
- **Archivo 2026:** reservado y vacío. Importar una copia de los datos históricos después de validar ganadoras, permisos de imagen y resultados. Nunca sobreescribir el origen.
- **Bases/privacidad:** sustituir texto provisional, identificar responsable, canal de derechos, retención, requisitos del casting, calendario y reglas aprobadas. No hay fechas ni patrocinadores confirmados.
- **Dominio:** conectar missuniversoarica.cl únicamente con autorización posterior y copia de seguridad del sitio anterior.
- **Edición editorial:** hay creación/actualización de candidatas y publicación de noticias/sponsors; no se incluye editor visual, bandeja de correo, importación automatizada ni exportación de datos.

## Assets y diseño

`public/assets/hero.png`: imagen original generada mediante ImageGen, corona de cristal sobre el Pacífico al anochecer; no representa un evento real. Prompt: “Premium cinematic crystal crown, electric blue/violet/magenta light, Pacific ocean and arid northern Chile coastline inspired by Arica, right-aligned crown, dark left negative space, no people, words or logos.”

`27.svg`: marca vectorial editable con degradado cristalino. `orbit.svg`: ilustración vectorial del camino a la corona. El diseño usa estilos responsive a 760 y 1050 px, navegación móvil, contraste legible, foco, etiquetas y preferencia de movimiento reducido. Google Fonts es opcional y tiene fuentes de respaldo. Las galerías reales requieren fotografías autorizadas que se añadirán después; no se crearon identidades ficticias.
