# Arica 2027 — adaptación, diferencias y pendientes

Fecha: 15 de octubre de 2026. Alcance exclusivo: Miss Universo Arica. Los originales de la entrega V3 se conservan sin editar.

## Implementado en esta adaptación

- Diseño cristal/neón V3, portada, efectos, menú, galería, teléfono y movimiento reducido.
- Versión de publicación separada en `2027/produccion`; recursos con prefijo `/arica2027/` para no reemplazar los medios anteriores.
- Adaptador PHP/MySQL para el alojamiento existente; no requiere ejecutar el servidor Python de demostración.
- Tablas nuevas con prefijo `arica27_`; las tablas históricas no se reutilizan como si fueran 2027.
- Casting con antecedentes, consentimiento, fotografías reales, vistas previas y confirmación numerada.
- Fotografías de postulantes almacenadas fuera de la carpeta web y consultables solamente con permisos administrativos.
- Contacto y propuestas de alianzas guardados en la bandeja de gestión.
- Registro de cuentas 2027, sesiones protegidas, permisos y acceso administrativo mediante los usuarios del panel PHP existente.
- Gestión de candidatas, noticias con portada y detalle, borradores/publicación, marcas confirmadas, agenda y configuración.
- Revisión de solicitudes, estados, evidencias, auditoría y exportación CSV.
- Voto diario implementado para la nueva edición, cerrado por defecto y sujeto a confirmación explícita de reglas en administración.
- Espacio de participante y edición de su biografía, propósito y enlaces autorizados.
- Archivo 2026 con las 10 candidatas, sus 76 fotografías vinculadas, videos y la ficha de Liz Rivera como ganadora.
- 35 publicaciones históricas disponibles; otra quedó apartada para revisión, sin perder el original.
- Portada 2026 respaldada y conservada en `/legado/2026/`, con acciones de compra/voto desactivadas y sin ejecutar su antigua aplicación.
- Recursos de campaña optimizados a WEBP: aproximadamente 40 MB originales → 4,9 MB. Los PNG maestros se mantienen localmente.
- Enlaces antiguos de candidatas y algunas páginas editoriales redirigidos temporalmente a su sección equivalente; se conservan las copias originales en el respaldo.

## Diferencias que requieren decisión posterior

| ID | Diferencia encontrada | Tratamiento aplicado | Qué falta decidir |
|---|---|---|---|
| A01 | La entrega usa Python/SQLite; el alojamiento sirve PHP y MySQL | Adaptado a PHP/MySQL con tablas separadas | Si a futuro se unifica con una nueva plataforma dinámica |
| A02 | La entrega propone un voto por cuenta y día; el sistema anterior usaba multiplicadores, importaciones, tareas y crecimiento calculado | No se mezclan totales; 2027 permanece cerrado | Reglamento de votación 2027 y controles de verificación/antifraude antes de abrir |
| A03 | 17 niveles por misiones consecutivas versus 17 niveles por puntos del sistema anterior | Programa nuevo no habilitado públicamente | Qué reglas, nombres, niveles, recompensas y beneficios conservar |
| A04 | Paquetes y precios 2027 no están aprobados; la entrega no trae checkout | Compra de votos no habilitada | Tarifas, condiciones y adaptación del proveedor de pagos |
| A05 | Entradas y metas de venta del sistema anterior no existen en el prototipo nuevo | Los archivos y registros 2026 se preservan; no se anuncian nuevas ventas | Evento, cupos, precios, cupones, QR y recuperación por correo 2027 |
| A06 | Planes comerciales anteriores de sponsors incluyen fechas y condiciones 2026 | Se habilitan captación y publicación de marcas confirmadas, sin reutilizar una oferta antigua | Planes, precios y contraprestaciones 2027 |
| A07 | El prototipo tiene personajes, fichas y noticias de diseño | No se presentan como candidatas, patrocinadores o noticias reales | Fotografías y fichas de la selección oficial 2027 |
| A08 | La modelo y los escenarios V3 son imágenes conceptuales | Se conserva la dirección de arte con identificación de campaña conceptual | Si se reemplazarán por producción fotográfica oficial |
| A09 | Se verificó a Liz Rivera, pero faltan actas completas y fotos específicas de coronación | Se publica su ficha con material de su perfil; no se inventan otros puestos | Resultados completos, premios secundarios, actas y galería de coronación |
| A10 | Una publicación dice «candidata en espera de aceptacion» | Apartada del nuevo archivo público | Revisar/corregir el registro original; copia en `publicaciones-2026-por-revisar.json` |
| A11 | Varias publicaciones históricas son bienvenidas repetidas | Se conservan en el archivo; se evitan títulos duplicados en el bloque de portada | Curaduría editorial del archivo histórico |
| A12 | Casting anterior: varios criterios de nacionalidad, máximo de edad y formatos de fotos | Preinscripción 18+, sin afirmar aceptación; JPG/PNG/WEBP hasta 12 MB | Bases definitivas, campos finales y conversión HEIC si se desea |
| A13 | El prototipo no tiene verificación ni recuperación automática por correo | Se informa el canal de soporte; no se simulan correos enviados | Configurar y verificar correo, recuperación y validación de identidad |
| A14 | Las cuentas Next 2026 usan otro esquema y hash de contraseña | No se cambian sus contraseñas ni se reasignan perfiles; nuevas cuentas 2027 separadas | Migración de identidad y roles si se quiere acceso único |
| A15 | Las postulaciones PHP previas están en otra tabla | Se conserva el panel anterior y se ofrece acceso desde gestión | Unificar bandejas si comienzan a llegar solicitudes mediante formularios antiguos en caché |
| A16 | Mensajes privados/grupales, referidos, embajadoras, analítica avanzada y estudio foto estaban en código Next fuera del export | Se preserva el código original; no se simulan estas herramientas en la nueva interfaz | Qué módulos reactivar e integrar con las nuevas cuentas/ediciones |
| A17 | La API permite la gestión de agenda, pero no hay fechas/recintos confirmados | Se muestran vacíos informativos y el editor real | Cargar calendario oficial cuando corresponda |
| A18 | La entrega incluye una pantalla de administración de muestra accesible públicamente | El acceso se dirige al panel real protegido | Sin pendiente de seguridad en esa vista de muestra; eliminada de la navegación |
| A19 | Política de privacidad y bases del prototipo son provisionales | Se explica qué datos se guardan, uso, acceso privado y contacto | Completar responsable legal, plazos de conservación y documentos oficiales |
| A20 | Algunos videos históricos son MOV | Se conservan los originales | Convertir copias a MP4/H.264 si algún navegador no los reproduce |
| A21 | El servidor FTPS ofrece un certificado vencido y con otro nombre | Tras la última autorización del propietario se usa FTP para esta publicación | Renovar el certificado del servicio desde administración del servidor |
| A22 | Las aplicaciones móviles siguen usando parte de sus datos/funciones de demostración | No se modificaron ni publicaron aplicaciones | Integración móvil en un trabajo posterior, si se decide |
| A23 | Seis archivos de imágenes enlazados en publicaciones antiguas ya no existen ni en el servidor ni en el proyecto local; afectan a 12 publicaciones | No se muestran imágenes rotas ni se sustituye una persona por otra; se conserva el texto y se indica la ausencia en el detalle | Recuperar los originales. Lista en `medios-por-recuperar.json`; las 76 fotos de las candidatas sí están disponibles |

## Contenido y operación

Las candidatas publicadas en el sistema nuevo pertenecen exclusivamente a 2027. Las de 2026 no se convierten en postulantes nuevas. Las noticias nuevas pueden llevar etiqueta 2026 para cubrir la gestión actual de una reina de ese año.

Los formularios reciben y guardan información; no prometen envío de correo. Las fichas de candidata se publican desde administración después de que la participante cree una cuenta 2027. Las fotos del casting no se transforman automáticamente en fotografías públicas.

Se puede editar una ficha, noticia, actividad o marca existente, y retirar su publicación sin borrar sus datos. No se añadieron acciones para borrar el legado ni alterar resultados históricos.

## Respaldo y verificaciones

Ubicación privada de copias: `C:\MISS UNIVERSO\backups\arica-20261015`.

- Proyecto local original: ZIP verificado, 1.493 archivos, aproximadamente 2,9 GB.
- Historial Git: `historial-git.bundle`.
- Servidor original: 579 archivos, 1.159.637.771 bytes, manifiesto con tamaños y SHA-256, sin fallos de descarga.
- Base del alojamiento: copia JSON comprimida y manifiesto. Antes de la adaptación tenía 2 tablas y 1 registro.
- Base local histórica: 24 tablas y 14.309 registros; SQL y copias por tabla. Se comprobó la restauración en una base aislada y coincidieron los recuentos de todas las tablas.
- 17 pruebas funcionales locales aprobadas: permisos, roles, CSRF/origen, formularios, fotos privadas, borradores/publicación, CSV, cierre de votación y voto diario único.
- Los registros sintéticos de prueba no se transfieren al servidor.
- Las credenciales, copias de base, herramientas de prueba y expedientes no se incluyen entre los archivos públicos de publicación.

El archivo `.env` y las credenciales de conexión no se imprimen en este informe. Iquique queda fuera del alcance y no se publican archivos en su servidor.
