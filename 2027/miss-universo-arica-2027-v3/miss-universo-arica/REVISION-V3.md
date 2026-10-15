# Revisión visual 3 · Comparación con las seis referencias

## Qué se rehízo

- Portada: cabecera clara de cristal en escritorio, gran marca 27, retrato de tres cuartos, mar y Morro a la izquierda, luz de cielo clara, grandes prismas laterales, cintas de cristal cruzadas y mosaico fotográfico inmediato bajo la escena. En móvil, retrato superior y logo superpuesto con seis accesos inferiores.
- Perfil: composición de tres columnas, retrato grande a la izquierda, datos en cristal en el centro, voto y redes a la derecha; siete pestañas y paneles independientes de biografía, fotos, videos, redes, misiones y progreso. La vista de diseño usa un nombre de posición y voto bloqueado.
- Candidatas: directorio de ocho espacios visuales de muestra cuando aún no hay inscripciones publicadas. Se identifican como diseño y se sustituyen por los registros de la API cuando existan.
- Votación: candidata visual a un lado, selector de perfiles, pasos de participación y pestañas de voto gratuito/compra. Los paquetes están sin cantidades ni precios; no hay checkout operativo.
- Ranking: filas con retrato y pistas de votos. Sin datos, los votos y posiciones se muestran como guiones, sin porcentajes ficticios.
- Sponsors: muro claro de ocho espacios reservados, categorías y formulario de captación. No se utilizaron logos de marcas como si fueran auspiciadores confirmados.
- Noticias: tarjetas fotográficas con cuerpo claro, siguiendo el diseño editorial de las referencias. Los ejemplos no se presentan como noticias reales.
- Casting: retrato lateral y formulario claro con controles de consentimiento. No se simula una subida de fotos; el canal de recepción de documentos sigue pendiente.
- Administración: vista de diseño `#admin-diseno` con navegación, tarjetas de métricas y paneles de gráficos sin cifras inventadas. `#admin` conserva el acceso real por permisos y las operaciones de base de datos.

## Nuevos assets

En `public/assets/neon/`: `muse-v3.png`, `arica-v3.png`, `crystal-frame-v3.png`, `profile-bg-v3.png`, `portrait-v3.png`, `coast-v3.png`, `gala-v3.png`. Se generaron con ImageGen a partir de las referencias visuales recibidas. No se recortaron las pantallas para reemplazar la interfaz.

Prompts: retrato adulto ficticio de tres cuartos con vestido de gala azul/plata y transparencia real de fondo; paisaje brillante de Arica con Morro a la izquierda, cielo perlado y marco de prismas; marco panorámico transparente con grandes cuarzos y cintas inferiores; entorno de perfil con cielo azul estrellado, costa y cintas violetas; retratos de campaña y paseo costero de la misma dirección visual. Los retratos son imágenes conceptuales y no acreditan la identidad de ninguna candidata.

## Archivos de implementación

`reference-v3.js` implementa las composiciones por pantalla y sus controles; `reference-v3.css` y `reference-fixes.css` ajustan densidad, encuadres y tamaños. Se mantiene la API Python/SQLite de la entrega anterior. La publicación privada de Sites sigue siendo estática; para guardar información se utiliza la instalación local descrita en README.

Se revisaron las pantallas en navegador a 1440 px y 390 px, sus controles y la ausencia de desbordamiento horizontal. Se conservaron las pruebas del servidor. El sitio sigue sin conectar pagos, envío de correo ni el dominio missuniversoarica.cl. El archivo 2026 no se importó ni se modificó.

La reconstrucción es más cercana a las maquetas, con nuevas imágenes y ajustes responsive. No debe describirse como una reproducción idéntica píxel por píxel.
