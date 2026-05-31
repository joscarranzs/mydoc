---
title: IMÁGENES
module: html
submodule: content/images
---

El elemento `<img>` inserta imágenes en el documento. Es un elemento vacío (void) que no necesita etiqueta de cierre y cuya información se define completamente mediante atributos.

```html
<img src="foto.jpg" alt="Descripción de la imagen">
```

## Atributos obligatorios

`src` define la ruta de la imagen. `alt` proporciona un texto alternativo que se muestra si la imagen no carga y es leído por los lectores de pantalla:

```html
<img src="logo.png" alt="Logotipo de la empresa">
```

Un `alt` descriptivo es esencial para la accesibilidad. Las imágenes decorativas deben llevar `alt=""` (vacío) para que los lectores de pantalla las ignoren:

```html
<!-- Imagen decorativa: alt vacío -->
<img src="separador.png" alt="" role="presentation">

<!-- Imagen informativa: alt descriptivo -->
<img src="grafico-ventas-2026.png" alt="Gráfico de ventas 2026: crecimiento del 23% respecto al año anterior">

<!-- Imagen con texto: alt debe repetir el texto -->
<img src="banner-oferta.png" alt="50% de descuento en todos los cursos">
```

## Atributos de dimensiones

`width` y `height` definen el espacio que la imagen ocupa en el layout. Aunque no son obligatorios, incluirlos evita el _layout shift_ (cumulative layout shift o CLS) al cargar la página:

```html
<img src="hero.jpg" alt="Hero banner" width="1200" height="600">
```

Las dimensiones deben coincidir con las proporciones reales de la imagen. El CSS puede redimensionarla manteniendo la relación de aspecto:

```css
img { max-width: 100%; height: auto; }
```

## Carga diferida (lazy loading)

`loading="lazy"` difiere la carga de imágenes que están fuera del viewport, mejorando el rendimiento inicial:

```html
<img src="galeria/foto-1.jpg" alt="Foto 1" loading="lazy" width="400" height="300">
<img src="galeria/foto-2.jpg" alt="Foto 2" loading="lazy" width="400" height="300">
<img src="galeria/foto-3.jpg" alt="Foto 3" loading="lazy" width="400" height="300">
```

Las imágenes visibles al cargar (hero, logo, etc.) deben mantener el valor por defecto `loading="eager"`.

## Imágenes responsivas con `srcset` y `sizes`

Para servir la imagen adecuada según el tamaño de pantalla:

```html
<img
  src="foto-800.jpg"
  srcset="foto-400.jpg 400w, foto-800.jpg 800w, foto-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 800px"
  alt="Paisaje montañoso"
  width="800"
  height="500"
>
```

- `srcset` lista las imágenes disponibles con su ancho real en píxeles (`400w`, `800w`).
- `sizes` indica qué espacio ocupará la imagen en cada breakpoint.
- El navegador selecciona la imagen más adecuada según la resolución y densidad de píxeles.

## El elemento `<picture>`

Para escenarios más complejos (formatos modernos, art direction):

```html
<picture>
  <source srcset="foto.avif" type="image/avif">
  <source srcset="foto.webp" type="image/webp">
  <img src="foto.jpg" alt="Descripción" width="800" height="500">
</picture>
```

El navegador elige el primer `<source>` compatible. Si ninguno lo es, usa el `<img>` como fallback. El `<img>` es obligatorio y debe incluir `alt`.

## Elemento `<figure>` y `<figcaption>`

Agrupa una imagen con su leyenda:

```html
<figure>
  <img src="arquitectura-sistema.png" alt="Diagrama de arquitectura del sistema" width="800" height="500">
  <figcaption>Figura 1: Arquitectura de microservicios con balanceador de carga.</figcaption>
</figure>
```

`<figure>` no se limita a imágenes: puede contener tablas, bloques de código, videos o citas.

---

## Ejercicio: galería de imágenes responsiva

Crea el HTML para una galería de tres imágenes que incluya:

1. Imagen principal con `srcset` para versiones 400w, 800w y 1200w
2. Dos imágenes secundarias con `loading="lazy"`
3. Un `<figure>` con `<figcaption>` para la imagen principal
4. Atributos `alt` descriptivos para cada imagen

<details>
<summary><strong>Ver solución</strong></summary>

```html
<figure>
  <img
    src="atardecer-800.jpg"
    srcset="atardecer-400.jpg 400w, atardecer-800.jpg 800w, atardecer-1200.jpg 1200w"
    sizes="(max-width: 768px) 100vw, 800px"
    alt="Atardecer sobre la montaña con tonos naranjas y violetas"
    width="800"
    height="500"
  >
  <figcaption>Atardecer en la Sierra Madre Oriental.</figcaption>
</figure>

<img src="bosque-800.jpg" alt="Sendero en el bosque con luz filtrándose entre los árboles" width="400" height="300" loading="lazy">
<img src="rio-800.jpg" alt="Río de montaña con agua cristalina y piedras" width="400" height="300" loading="lazy">
```

</details>
