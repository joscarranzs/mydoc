---
title: AUDIO
module: html
submodule: multimedia/audio
---

El elemento `<audio>` permite reproducir archivos de sonido directamente en el navegador. Sigue la misma filosofía que `<video>` pero sin componente visual.

```html
<audio src="musica.mp3" controls>
  Tu navegador no soporta audio HTML5.
</audio>
```

## Atributos principales

| Atributo | Propósito |
|----------|-----------|
| `src` | Ruta al archivo de audio. |
| `controls` | Muestra controles de reproducción. |
| `autoplay` | Inicia la reproducción automáticamente (restringido por el navegador). |
| `loop` | Reproduce en bucle. |
| `muted` | Silencia el audio por defecto. |
| `preload` | Controla la precarga: `none`, `metadata`, `auto`. |

```html
<audio src="podcast.mp3" controls preload="metadata">
  <p>Tu navegador no soporta audio HTML5.</p>
</audio>
```

## Múltiples fuentes con `<source>`

Diferentes navegadores soportan distintos formatos de audio:

| Formato | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| MP3 | Sí | Sí | Sí | Sí |
| WAV | Sí | Sí | Sí | Sí |
| OGG Vorbis | Sí | Sí | No | Sí |
| AAC | Sí | Sí | Sí | Sí |
| FLAC | Sí | Sí | Sí | Sí |

```html
<audio controls preload="none">
  <source src="podcast.mp3" type="audio/mpeg">
  <source src="podcast.ogg" type="audio/ogg">
  <source src="podcast.wav" type="audio/wav">
  <p>Tu navegador no soporta audio HTML5. <a href="podcast.mp3">Descargar podcast</a>.</p>
</audio>
```

## Atributo `preload`

Controla cómo el navegador gestiona la carga del audio:

- `none` — no precarga nada. El audio comienza a descargarse cuando el usuario presiona play. Ahorra ancho de banda.
- `metadata` — precarga solo la duración y metadatos (valor por defecto). Equilibrio entre rendimiento y funcionalidad.
- `auto` — precarga el archivo completo. Puede consumir ancho de banda innecesario.

```html
<audio src="efecto.mp3" preload="none" controls></audio>
```

## Audio como elemento invisible

El audio puede reproducirse sin mostrar controles, aunque las políticas de autoplay restringen esta práctica:

```html
<audio src="musica-fondo.mp3" autoplay loop>
  <p>Tu navegador no soporta audio HTML5.</p>
</audio>
```

En la mayoría de navegadores modernos, el audio sin `muted` no se reproduce automáticamente sin una interacción previa del usuario.

## API JavaScript

```javascript
const audio = document.querySelector('audio');

audio.play();
audio.pause();
audio.currentTime = 60; // Saltar al minuto 1
audio.volume = 0.3;     // 30% de volumen
```

---

## Ejercicio: reproductor de audio con fuentes múltiples

Crea el HTML para un reproductor de audio de un podcast que:

1. Muestre controles
2. Incluya fuentes MP3 y OGG
3. Precargue solo metadatos
4. Tenga un texto de fallback con enlace de descarga

<details>
<summary><strong>Ver solución</strong></summary>

```html
<audio controls preload="metadata">
  <source src="episodio-42.mp3" type="audio/mpeg">
  <source src="episodio-42.ogg" type="audio/ogg">
  <p>Tu navegador no soporta audio HTML5. <a href="episodio-42.mp3">Descarga el episodio</a> para escucharlo localmente.</p>
</audio>
```

</details>
