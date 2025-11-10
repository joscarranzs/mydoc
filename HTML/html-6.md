# Contenido multimedia en HTML: imágenes, video, audio y atributos

## Tabla de contenidos

- Imágenes: `<img>`, `picture`, `srcset`, `sizes` y formatos
- Multimedia semántico: `<figure>` y `<figcaption>`
- Video: `<video>`, atributos y pistas (`<track>`)
- Audio: `<audio>` y atributos
- Atributos globales y atributos propios de elementos multimedia
- Accesibilidad: `alt`, `captions`, `descriptions` y `track`
- Formatos y compatibilidad (códecs, webp, avif, mp4, webm, ogg)
- Ejemplos
- Ejercicios
- Recursos

## Imágenes: `<img>`, `picture`, `srcset`, `sizes` y formatos

El elemento básico es `<img>` con atributos principales `src` y `alt`:

```html
<img src="/images/photo.jpg" alt="Descripción de la imagen">
```

Responsive images:

- `srcset` + `sizes` permiten ofrecer varias resoluciones/formats y dejar que el navegador elija la mejor opción.
- `<picture>` permite condiciones más avanzadas (por ejemplo servir `avif` o `webp` para navegadores compatibles).

Ejemplo `picture`:

```html
<picture>
	<source srcset="/img/photo.avif" type="image/avif">
	<source srcset="/img/photo.webp" type="image/webp">
	<img src="/img/photo.jpg" alt="Descripción" loading="lazy" width="800" height="600">
</picture>
```

`loading="lazy"` es una forma simple y efectiva de deferir la carga de imágenes fuera de pantalla.

## Multimedia semántico: `<figure>` y `<figcaption>`

Usa `<figure>` para agrupar medios con su leyenda y `<figcaption>` para describirlo:

```html
<figure>
	<img src="/img/diagrama.png" alt="Diagrama">
	<figcaption>Figura 1: Diagrama de flujo.</figcaption>
</figure>
```

## Video: `<video>`, atributos y pistas (`<track>`)

El elemento `<video>` soporta múltiples atributos:

- `controls`: muestra controles nativos.
- `autoplay`: inicia reproducción automáticamente (habitualmente requiere `muted` para funcionar en móviles/browsers modernos).
- `muted`: silencia el video.
- `loop`: repetir automáticamente.
- `poster`: imagen a mostrar antes de la reproducción.
- `preload`: `auto|metadata|none`.

Ejemplo básico:

```html
<video controls width="640" poster="/img/poster.jpg">
	<source src="/media/video.webm" type="video/webm">
	<source src="/media/video.mp4" type="video/mp4">
	Tu navegador no soporta el elemento <code>video</code>.
	<track kind="captions" src="/media/captions_es.vtt" srclang="es" label="Español">
</video>
```

Pistas (`<track>`) son fundamentales para accesibilidad: captions (closed captions), subtitles y descriptions.

## Audio: `<audio>` y atributos

El elemento `<audio>` comparte atributos con `<video>` como `controls`, `autoplay`, `loop`, `preload`:

```html
<audio controls>
	<source src="/audio/song.mp3" type="audio/mpeg">
	<source src="/audio/song.ogg" type="audio/ogg">
	Tu navegador no soporta el elemento <code>audio</code>.
</audio>
```

## Atributos globales y atributos propios de elementos multimedia

Los atributos globales aplican a cualquier elemento: `id`, `class`, `style`, `hidden`, `title`, `data-*`, `lang`, `dir`, `tabindex`, entre otros.

Atributos propios a destacar:

- `alt` (obligatorio semánticamente para imágenes que transmiten información).
- `width` / `height`: ayuda al layout (evita layout shift si se declaran apropiadamente).
- `crossorigin`: `anonymous` o `use-credentials` para recursos que usan CORS (p. ej. `canvas` drawImage con imágenes remotas).
- `decoding`: `async|sync|auto` en imágenes para controlar decodificación.

## Accesibilidad: `alt`, captions, descriptions y `track`

- `alt` debe describir la imagen si es informativa; si la imagen es puramente decorativa, usar `alt=""`.
- Para video/audio, proveer captions (`<track kind="captions">`) y una pista de descripción (`descriptions`) cuando el contenido visual es importante.
- `aria-*` puede complementar; por ejemplo `aria-hidden="true"` para elementos decorativos.
- Proveer transcripciones de audio cuando sea relevante para accesibilidad y SEO.

## Formatos y compatibilidad

- Imágenes: `jpeg`, `png`, `webp`, `avif`, `svg` (vectorial).
- Video: `mp4` (h.264), `webm` (vp9/av1), `ogg` (theora) — la compatibilidad depende del navegador y del códec.
- Audio: `mp3`, `ogg`, `wav`, `aac`.

Consejo: sirve múltiples formatos para maximizar compatibilidad; `picture` y múltiples `<source>` permiten esto.

## Ejemplos

Imagen responsive con `srcset` (ejemplo sencillo):

```html
<img src="/img/photo-800.jpg" srcset="/img/photo-400.jpg 400w, /img/photo-800.jpg 800w, /img/photo-1200.jpg 1200w" sizes="(max-width:600px) 100vw, 800px" alt="Paisaje">
```

Video con subtítulos y poster:

```html
<video controls width="720" poster="/img/poster.jpg">
	<source src="/media/video.mp4" type="video/mp4">
	<track kind="captions" src="/media/captions_en.vtt" srclang="en" label="English">
</video>
```

Audio con transcripción (sugerido):

```html
<audio controls>
	<source src="/audio/episode.mp3" type="audio/mpeg">
</audio>
<p>Transcripción: (aquí va la transcripción del audio para usuarios y SEO)...</p>
```

## Ejercicios

1. Añade una imagen con `picture` que sirva `avif`/`webp`/`jpg` segun disponibilidad. Incluye `alt`, `width` y `height`.
2. Crea un reproductor `video` con `controls`, `poster`, dos `source` y una pista de `captions` en español.
3. Implementa un control de audio y añade una transcripción debajo del reproductor.
4. Muestra cómo usar `crossorigin` en una imagen y explica por qué es necesario cuando se dibuja en `canvas`.
5. Revisa una página y añade atributos `width/height` a imágenes críticas para reducir CLS (layout shift).

## Recursos

- MDN: `img`, `picture`, `video`, `audio`, `track`.
- web.dev: optimización de imágenes y multimedia para la web.
- Can I use: compatibilidad de formatos (avif, webp, webm, etc.).

---