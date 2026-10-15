# Assets individuales · Dirección cristal / neón

**Revisión 3:** se añadieron `muse-v3.png`, `arica-v3.png`, `crystal-frame-v3.png`, `profile-bg-v3.png`, `portrait-v3.png`, `coast-v3.png` y `gala-v3.png`. Los prompts y usos están descritos en `REVISION-V3.md`. El conjunto completo conserva los assets de las versiones anteriores; los nuevos retratos sustituyen a la primera modelo en la interfaz actual.

Todos los archivos de esta entrega se crearon desde cero. Las maquetas recibidas se usaron como referencia visual; no se recortaron sus pantallas para construir la web.

## PNG de campaña generados con ImageGen

Carpeta: `public/assets/neon/`. Los prompts describen los assets individuales, sin texto ni interfaces incrustadas.

| Archivo | Uso | Resumen del prompt |
|---|---|---|
| arica-panorama.png | Escena, fondos y turismo | Costa de Arica al atardecer, Morro con pequeña bandera, Pacífico, palmeras, cielo melocotón y azul, marcos de cuarzo azul/violeta/magenta, sin personas ni texto. Referencia visual: Belleza de Cristal. |
| campaign-muse.png | Modelo de campaña en capa independiente | Mujer adulta ficticia de 28 años, cabello castaño ondulado, vestido de gala azul zafiro cubierto con bordado plateado, fotografía editorial de cuerpo completo, iluminación azul/violeta, fondo transparente. |
| crystal-left.png | Cristales flotantes laterales | Grupo vertical de prismas de cuarzo claro, facetas azules, blancas y violetas, reflejos magenta y cinta de cristal, fondo transparente. |
| crystal-star.png | Estrella del emblema 27 | Estrella simétrica de ocho puntas de cristal zafiro/violeta, cuatro puntas principales largas, reflejos cian y magenta, fondo transparente. |
| crown-crystal.png | Corona, camino y recompensas | Corona frontal de platino, diamantes y cristal zafiro, filigrana delicada, reflejos violeta y magenta, fondo transparente. |
| gala-crystal.png | Banner y galería | Escenario futurista de cristal junto al Pacífico, pasarela azul, focos violetas y magenta, estrella suspendida, sin público identificable, palabras ni logos. |
| campaign-portrait.png | Perfil de diseño y galería conceptual | Retrato editorial de cabeza y hombros, misma modelo ficticia, vestido azul y plateado, luz de atardecer, fondo cristalino y horizonte marino. |
| campaign-coast.png | Galería conceptual | Misma modelo ficticia con vestido blanco de manga larga junto a un paseo de palmeras de la costa, luz dorada y Morro distante. |
| campaign-gala.png | Galería conceptual | Misma modelo ficticia en pasarela de cristal azul/violeta/magenta, vestido azul bordado, encuadre medio y luz cinematográfica. |

Estas imágenes no documentan un evento, una candidata, una ganadora o una actividad real. El paisaje también es una interpretación artística. Los PNG con transparencia pueden tener resplandor semitransparente alrededor de su silueta.

## PNG dibujados mediante código

`logo-27.png`: master transparente del número 27 con contornos concéntricos, compuesto con la estrella independiente en la web. Es una reconstrucción gráfica basada en las referencias, con diferencias de tipografía y geometría respecto a la maqueta.

16 iconos transparentes de 256 × 256 px: `icon-crown`, `icon-profile`, `icon-gallery`, `icon-video`, `icon-heart`, `icon-trophy`, `icon-calendar`, `icon-pin`, `icon-share`, `icon-star`, `icon-mission`, `icon-news`, `icon-sponsor`, `icon-mail`, `icon-cart`, `icon-grid`.

Tres superficies transparentes adicionales: `button-blue.png`, `button-magenta.png`, `panel-glass.png`. Se incluyen como recursos reutilizables. Los controles de la web conservan HTML, texto real y estilos CSS para responder al teclado, cambiar de tamaño y mantener legibilidad; no se sustituyen las interfaces por capturas planas.

## Movimiento

Parallax por capas al mover el puntero, partículas ligeras sobre canvas, flotación de cristales/corona, cintas luminosas, entradas al hacer scroll y estados de interacción. El botón «Pausar efectos» detiene el movimiento de campaña. `prefers-reduced-motion` desactiva animaciones. No hay sonido automático, video de fondo ni dependencia de WebGL.

La composición sigue las referencias recibidas, pero no es una reproducción píxel por píxel: se generaron imágenes nuevas, el retrato utiliza otro vestuario y las imágenes/nombres/cifras ilustrativas de las maquetas no se importaron como datos reales.
