---
title: MULTIMEDIA
module: html
submodule: multimedia/media
---

HTML5 introdujo soporte nativo para audio y video, eliminando la dependencia de plugins externos como Flash o Silverlight. Los elementos `<video>` y `<audio>` permiten reproducir medios directamente en el navegador con una API JavaScript completa.

## Formatos y codecs

No todos los navegadores soportan los mismos formatos. La tabla muestra la compatibilidad actual:

| Formato | Codec | Chrome | Firefox | Safari | Edge |
|---------|-------|--------|---------|--------|------|
| MP4 | H.264 + AAC | Sí | Sí | Sí | Sí |
| WebM | VP8/VP9 + Opus | Sí | Sí | No | Sí |
| OGG | Theora + Vorbis | Sí | Sí | No | No |
| AVI | Varios | No | No | No | No |

La práctica recomendada es proporcionar al menos dos fuentes: MP4 (máxima compatibilidad) y WebM (mejor compresión, formato abierto).

## Proporcionar múltiples fuentes

El elemento `<source>` permite listar varios formatos. El navegador selecciona el primero que puede reproducir:

```html
<video controls width="640" height="360">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <p>Tu navegador no soporta video HTML5.</p>
</video>
```

El atributo `type` indica el formato MIME. Sin él, el navegador descarga una parte del archivo para determinar si es compatible, lo que consume ancho de banda innecesario.

## Atributos comunes

| Atributo | Aplica a | Propósito |
|----------|----------|-----------|
| `controls` | video, audio | Muestra los controles de reproducción |
| `autoplay` | video, audio | Inicia la reproducción automáticamente |
| `loop` | video, audio | Repite el contenido al terminar |
| `muted` | video, audio | Silencia el audio por defecto |
| `preload` | video, audio | Controla la precarga: `none`, `metadata`, `auto` |
| `poster` | video | Imagen mostrada antes de reproducir |
| `width` / `height` | video | Dimensiones del reproductor |

## Accesibilidad en multimedia

- Los videos deben incluir subtítulos o transcripciones para usuarios con discapacidad auditiva.
- El elemento `<track>` permite añadir pistas de subtítulos (WebVTT):

```html
<video controls>
  <source src="tutorial.mp4" type="video/mp4">
  <track src="subtitulos.vtt" kind="subtitles" srclang="es" label="Español">
  <track src="captions.vtt" kind="captions" srclang="en" label="English">
</video>
```

- No usar `autoplay` a menos que sea estrictamente necesario, ya que puede desorientar a usuarios de lectores de pantalla.

---

## Ejercicio: reproductor multimedia completo

Crea el HTML para un reproductor de video que incluya:

1. Controles visibles
2. Dos fuentes (MP4 y WebM)
3. Poster antes de reproducir
4. Subtítulos en español
5. Texto de fallback
6. Sin autoplay

<details>
<summary><strong>Ver solución</strong></summary>

```html
<video controls width="640" height="360" poster="miniatura.jpg" preload="metadata">
  <source src="presentacion.mp4" type="video/mp4">
  <source src="presentacion.webm" type="video/webm">
  <track src="subtitulos.vtt" kind="subtitles" srclang="es" label="Español">
  <p>Tu navegador no soporta video HTML5. <a href="presentacion.mp4">Descarga el video aquí</a>.</p>
</video>
```

</details>
