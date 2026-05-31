---
title: RESPONSIVO
module: html
submodule: organization/responsive
---

El diseño responsivo permite que una página web se adapte al tamaño y capacidades del dispositivo que la visualiza. Aunque las técnicas de layout responsivo pertenecen a CSS, el HTML proporciona los cimientos necesarios.

## El meta viewport

La declaración `<meta name="viewport">` es el punto de partida de cualquier diseño responsivo. Sin ella, los navegadores móviles renderizan la página como si fuera un monitor de escritorio y luego la escalan para que quepa en la pantalla.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- `width=device-width` — el ancho del viewport se iguala al ancho real del dispositivo.
- `initial-scale=1.0` — el nivel de zoom inicial es 1:1.

Sin esta línea, un iPhone renderizaría una página de escritorio a 980px de ancho y la reduciría para que quepa en su pantalla de 375px, resultando en texto ilegible sin zoom.

## Imágenes responsivas con `srcset`

Para servir la imagen adecuada según la resolución de pantalla:

```html
<img
  src="foto-800.jpg"
  srcset="foto-400.jpg 400w, foto-800.jpg 800w, foto-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 800px"
  alt="Descripción"
  width="800"
  height="500"
>
```

El navegador selecciona automáticamente la imagen óptima según el tamaño del viewport y la densidad de píxeles del dispositivo.

## El elemento `<picture>` para art direction

Cuando necesitas recortar o modificar la composición de una imagen según el tamaño de pantalla:

```html
<picture>
  <source media="(max-width: 600px)" srcset="foto-movil.jpg">
  <source media="(max-width: 1024px)" srcset="foto-tablet.jpg">
  <img src="foto-escritorio.jpg" alt="Descripción">
</picture>
```

## Carga diferida (lazy loading)

`loading="lazy"` en imágenes e iframes difiere la carga de recursos fuera del viewport inicial:

```html
<img src="galeria/foto-1.jpg" alt="Foto" loading="lazy" width="400" height="300">
<iframe src="mapa.html" title="Mapa" loading="lazy"></iframe>
```

## Orden HTML para mobile-first

La regla de diseño mobile-first aplica también al HTML: el contenido más importante debe aparecer primero en el marcado, independientemente de su posición visual en escritorio.

```html
<main>
  <!-- Contenido principal primero (en móvil arriba) -->
  <article>
    <h1>Noticia importante</h1>
    <p>...</p>
  </article>

  <!-- Sidebar después (en móvil debajo) -->
  <aside>
    <h2>Noticias relacionadas</h2>
  </aside>
</main>
```

CSS Grid y Flexbox permiten reordenar visualmente los elementos sin cambiar el orden en el HTML.

---

## Ejercicio: página responsiva mínima

Crea el HTML completo de una página responsiva que incluya:

1. Meta viewport correcto
2. Una imagen con `srcset` para tres resoluciones (400w, 800w, 1200w)
3. Un `<picture>` con source para móvil y escritorio
4. Una imagen con `loading="lazy"`

<details>
<summary><strong>Ver solución</strong></summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página responsiva</title>
</head>
<body>

  <h1>Galería responsiva</h1>

  <img
    src="hero-800.jpg"
    srcset="hero-400.jpg 400w, hero-800.jpg 800w, hero-1200.jpg 1200w"
    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 80vw, 800px"
    alt="Hero image responsiva"
    width="800"
    height="500"
  >

  <picture>
    <source media="(max-width: 600px)" srcset="banner-movil.jpg">
    <img src="banner-escritorio.jpg" alt="Banner promocional" width="800" height="300">
  </picture>

  <img src="galeria/foto.jpg" alt="Foto de galería" width="400" height="300" loading="lazy">

</body>
</html>
```

</details>
