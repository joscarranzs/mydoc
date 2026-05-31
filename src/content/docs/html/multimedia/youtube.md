---
title: YOUTUBE
module: html
submodule: multimedia/youtube
---

Para embeber videos de YouTube en una página HTML se utiliza un `<iframe>` que apunta a la URL de inserción del video. YouTube proporciona opciones de personalización y configuraciones de privacidad.

## Inserción básica

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="Título del video de YouTube"
  allowfullscreen
>
</iframe>
```

La URL sigue el formato: `https://www.youtube.com/embed/VIDEO_ID`. El `VIDEO_ID` es el código de 11 caracteres que aparece en la URL del video (`watch?v=...`).

## Parámetros de la URL

Se pueden añadir parámetros de consulta a la URL para controlar el comportamiento:

| Parámetro | Valores | Propósito |
|-----------|---------|-----------|
| `autoplay` | 0 o 1 | Reproducir automáticamente |
| `controls` | 0 o 1 | Mostrar controles |
| `loop` | 0 o 1 | Repetir el video |
| `mute` | 0 o 1 | Iniciar silenciado |
| `rel` | 0 o 1 | Mostrar videos relacionados al final |
| `start` | Segundos | Iniciar en un punto específico |
| `end` | Segundos | Terminar en un punto específico |
| `playsinline` | 0 o 1 | Reproducir en línea (iOS) |

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&controls=0&start=30"
  title="Video musical"
  allow="autoplay; encrypted-media"
  allowfullscreen
>
</iframe>
```

## Modo de privacidad mejorada

YouTube ofrece un modo que no almacena cookies del usuario hasta que reproduce el video. Se activa usando el dominio `www.youtube-nocookie.com`:

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
  title="Video con privacidad mejorada"
  allowfullscreen
>
</iframe>
```

Este modo es recomendado para sitios que priorizan la privacidad del usuario y el cumplimiento de regulaciones como GDPR.

## Atributo `allow`

El iframe debe incluir un atributo `allow` que especifique los permisos necesarios:

```html
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
>
</iframe>
```

## Lista de reproducción

Para embeber una lista de reproducción, se usa el parámetro `list`:

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID?list=PLAYLIST_ID"
  title="Lista de reproducción"
  allowfullscreen
>
</iframe>
```

---

## Ejercicio: video de YouTube con privacidad

Crea el HTML para embeber un video de YouTube que:

1. Use el dominio de privacidad mejorada (`nocookie`)
2. Comience en el segundo 15
3. No muestre videos relacionados al final
4. Esté silenciado al inicio
5. Incluya los permisos necesarios en `allow`
6. Tenga un título descriptivo

<details>
<summary><strong>Ver solución</strong></summary>

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?start=15&rel=0&mute=1"
  title="Tutorial: introducción a HTML semántico"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
>
</iframe>
```

</details>
