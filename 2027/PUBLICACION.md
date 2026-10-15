# Miss Universo Arica 2027 — publicación

Publicado el 15 de octubre de 2026 en https://missuniversoarica.cl/.

## Accesos

- Portada: https://missuniversoarica.cl/
- Preinscripción: https://missuniversoarica.cl/#casting
- Legado: https://missuniversoarica.cl/#archivo
- Liz Rivera: https://missuniversoarica.cl/#reina-2026
- Administración: https://missuniversoarica.cl/#admin

La administración acepta el usuario y contraseña del panel PHP de postulaciones que ya existía. No se cambió esa contraseña. Las cuentas de participantes 2027 se registran desde «Mi universo» y no heredan permisos administrativos. Las cuentas antiguas de Next no se migraron automáticamente.

## Qué se publica y dónde trabajar

`produccion/index.html` es la portada. `produccion/arica2027` contiene estilos, scripts, recursos WEBP, API PHP y el archivo de contenido histórico público. `produccion/legado/2026/index.html` conserva la antigua portada sin ejecutar sus scripts de venta/votación.

La entrega original sigue en `miss-universo-arica-2027-v3` y `assets-cristal-neon-v3`, con sus ZIP intactos. Las adaptaciones están en una carpeta independiente; no ejecutar `npm run build` suponiendo que genera esta publicación nueva.

`herramientas/publicar.py` prepara la subida de los archivos permitidos y `herramientas/sincronizar-revision.py` sincroniza los cambios de esa revisión. `publicar.py activate` activa el índice preparado. Se verifican las copias anteriores antes de publicar. El archivo de conexión está fuera del proyecto público; no contiene credenciales este documento.

Para próximas modificaciones, editar la versión de producción y mantener su historial. Los scripts de preparación/optimización son herramientas de adaptación inicial: cualquier regeneración debe revisarse antes de subir para no reemplazar ediciones manuales posteriores.

## Datos y seguridad

- La API utiliza la conexión PHP que ya existía en el servidor.
- Los datos nuevos se guardan en tablas `arica27_*` de la base del alojamiento.
- No se reemplazaron ni reinicializaron las tablas antiguas.
- Los archivos privados del casting se guardan fuera de la carpeta pública del dominio. Las próximas copias deben incluir también ese directorio privado mediante el servidor o un respaldo autorizado de la aplicación; la cuenta FTP restringida a la carpeta pública no lo enumera.
- Los cambios editoriales quedan auditados.
- Los formularios guardan solicitudes; no anuncian envío de correos automáticos.
- La votación y las misiones 2027 están cerradas hasta confirmar sus reglas. No hay cobros ni entradas 2027 activos.
- Las publicaciones históricas sin imagen original muestran la ausencia en su detalle; no se sustituye una fotografía documental por otra persona.

La lista completa de diferencias y decisiones está en `DIFERENCIAS-Y-PENDIENTES.md`. Los archivos `medios-por-recuperar.json` y `publicaciones-2026-por-revisar.json` conservan las incidencias detectadas para su revisión.

## Respaldo y reversión

Las copias se guardaron en `C:\MISS UNIVERSO\backups\arica-20261015`, fuera del directorio publicado. Contienen el proyecto local original, historial Git, todos los archivos del servidor, manifiestos SHA-256 y copias de ambas bases. Se verificó la restauración de la base local histórica en una base aislada.

Para una reversión de portada, `herramientas/revertir-portada.py --restaurar-portada` vuelve a subir únicamente el índice y las reglas originales desde el respaldo. No lo ejecutar sin querer revertir: sustituye la portada pública. No borra tablas nuevas, solicitudes, imágenes ni el archivo histórico.

Los detalles de subida y comprobación están en `manifiesto-publicacion-2027.json`, `verificacion-publicacion.json` y `preflight-servidor.json` dentro de la carpeta privada de respaldo. Cloudflare añade su propio script de medición al HTML servido por HTTP; por ello la integridad byte a byte del índice se comprobó también sobre el archivo FTP.

## Validación realizada

17 pruebas funcionales aprobadas en base aislada. Comprobaciones de sintaxis PHP/JavaScript, versión de escritorio y 390 px, archivos históricos, fotos y navegación pública. En el servidor se verificaron API, almacenamiento privado, formatos de archivo disponibles, redirecciones y bloqueo de accesos administrativos anónimos. No se enviaron registros de prueba a la base de producción ni se hicieron cobros.

Iquique y sus aplicaciones no se modificaron ni se publicaron.
