---
title: VIDEO
module: html
submodule: multimedia/video
---

El elemento `<video>` es el estándar HTML5 para incrustar contenido de video en una página web. Proporciona reproducción nativa sin necesidad de plugins externos.

```html
<video src="presentacion.mp4" controls width="640" height="360">
  Tu navegador no soporta video HTML5.
</video>
```

## Atributos principales

| Atributo | Valores | Propósito |
|----------|---------|-----------|
| `src` | URL | Ruta al archivo de video. |
| `controls` | Booleano | Muestra controles de reproducción (play, pausa, volumen, pantalla completa). |
| `autoplay` | Booleano | Inicia la reproducción automáticamente. La mayoría de navegadores requieren `muted` para permitirlo. |
| `loop` | Booleano | Reproduce el video en bucle. |
| `muted` | Booleano | Silencia el audio por defecto. |
| `poster` | URL | Imagen de vista previa que se muestra antes de reproducir. |
| `preload` | `none`, `metadata`, `auto` | Controla qué parte del video se precarga. |
| `width` / `height` | Píxeles | Dimensiones del reproductor. |
| `playsinline` | Booleano | Reproduce en línea en dispositivos iOS sin entrar en pantalla completa. |

```html
<video
  src="video.mp4"
  controls
  muted
  loop
  poster="poster.jpg"
  preload="metadata"
  width="640"
  height="360"
  playsinline
>
  <p>Tu navegador no soporta video HTML5.</p>
</video>
```

## Múltiples fuentes con `<source>`

Para garantizar la compatibilidad entre navegadores:

```html
<video controls width="640" height="360">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <source src="video.ogv" type="video/ogg">
  <p>Tu navegador no soporta video HTML5. <a href="video.mp4">Descargar video</a>.</p>
</video>
```

## Autoplay y políticas de navegadores

Los navegadores modernos restringen el `autoplay` para evitar reproducciones no solicitadas. Las reglas generales son:

- **Autoplay con audio**: generalmente bloqueado.
- **Autoplay sin audio** (`muted`): permitido en la mayoría de navegadores.
- **Autoplay después de interacción del usuario**: siempre permitido.

```html
<!-- Generalmente bloqueado -->
<video src="video.mp4" autoplay controls></video>

<!-- Generalmente permitido (muted) -->
<video src="video.mp4" autoplay muted controls></video>
```

## El elemento `<track>`

Añade pistas de texto sincronizadas: subtítulos, descripciones, capítulos o metadatos:

```html
<video controls>
  <source src="tutorial.mp4" type="video/mp4">
  <track src="subtitulos.vtt" kind="subtitles" srclang="es" label="Español" default>
  <track src="subtitulos-en.vtt" kind="subtitles" srclang="en" label="English">
  <track src="capitulos.vtt" kind="chapters" srclang="es" label="Capítulos">
</video>
```

Los archivos `.vtt` (Web Video Text Tracks) tienen este formato:

```vtt
WEBVTT

00:00:01.000 --> 00:00:04.000
Bienvenidos al tutorial de HTML.

00:00:05.000 --> 00:00:10.000
En este video aprenderemos sobre el elemento video.
```

## API JavaScript

El elemento `<video>` expone una API rica para control programático:

```javascript
const video = document.querySelector('video');

video.play();
video.pause();
video.currentTime = 30; // Saltar al segundo 30
video.volume = 0.5;     // 50% de volumen
video.requestFullscreen();
```

---

## Ejercicio: video con controles personalizados

Crea el HTML para un reproductor de video que:

1. Use dos fuentes (MP4 y WebM)
2. Incluya un poster
3. Esté silenciado y en bucle
4. Tenga subtítulos en español
5. Incluya texto de fallback con enlace de descarga

<details>
<summary><strong>Ver solución</strong></summary>

```html
<video controls muted loop poster="demo-poster.jpg" width="640" height="360">
  <source src="demo.mp4" type="video/mp4">
  <source src="demo.webm" type="video/webm">
  <track src="subtitulos.vtt" kind="subtitles" srclang="es" label="Español" default>
  <p>Tu navegador no soporta video HTML5. <a href="demo.mp4">Descarga el video</a> para verlo localmente.</p>
</video>
```

</details>
