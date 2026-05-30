---
title: Imágenes
description: img, src, alt.
module: lenguajes/html
submodule: general
order: 16
---

Al completar esta guía podrás:

- Insertar imágenes con la etiqueta img
- Usar los atributos src y alt correctamente
- Ajustar dimensiones con width y height
- Usar formatos de imagen modernos

---

## Sintaxis básica

La etiqueta `<img>` inserta una imagen en la página. Es un elemento vacío, así que toda la información va en atributos:

```html
<img src="foto.jpg" alt="Descripción de la imagen">
```

`src` indica la ruta de la imagen y `alt` proporciona texto alternativo. Si la imagen no carga, `alt` explica su contenido.

---

## Atributos obligatorios

Estos atributos no son opcionales si quieres una imagen bien implementada:

```html
<!-- src: ruta de la imagen -->
<img src="logo.png" alt="Logo de la empresa">

<!-- alt: texto alternativo (obligatorio para accesibilidad) -->
<img src="grafico.jpg" alt="Gráfico de ventas del primer trimestre">

<!-- Juntos -->
<img src="banner.jpg" alt="Banner promocional">
```

---

## Dimensiones

Las dimensiones ayudan a reservar espacio en pantalla y a evitar saltos de diseño mientras carga la página:

```html
<!-- Ancho y alto en píxeles -->
<img src="foto.jpg" alt="Foto" width="300" height="200">

<!-- Solo ancho (alto se ajusta automáticamente) -->
<img src="foto.jpg" alt="Foto" width="300">

<!-- CSS para responsive -->
<img src="foto.jpg" alt="Foto" style="max-width: 100%; height: auto;">
```

---

## Rutas de imágenes

Las rutas pueden ser relativas o absolutas, igual que en los enlaces:

```html
<!-- Misma carpeta -->
<img src="logo.png" alt="Logo">

<!-- Subcarpeta -->
<img src="imagenes/foto.jpg" alt="Foto">

<!-- Carpeta padre -->
<img src="../img/banner.jpg" alt="Banner">

<!-- URL absoluta -->
<img src="https://ejemplo.com/imagenes/foto.jpg" alt="Foto externa">
```

---

## Formatos de imagen

No todos los formatos sirven para lo mismo. Elegir bien reduce peso y mejora calidad:

| Formato | Compresión | Transparencia | Animación | Uso ideal |
|---|---|---|---|---|
| JPEG/JPG | Con pérdida | No | No | Fotos, imágenes complejas |
| PNG | Sin pérdida | Sí | No | Logos, gráficos, capturas |
| GIF | Sin pérdida | No | Sí | Animaciones simples |
| WebP | Con y sin pérdida | Sí | Sí | Moderno, menor peso |
| SVG | Vectorial | Sí | Sí | Iconos, logos, diagramas |

```html
<!-- WebP: formato moderno recomendado -->
<img src="foto.webp" alt="Foto en WebP">

<!-- SVG: vectorial, escalable -->
<img src="icono.svg" alt="Icono" width="48" height="48">
```

---

## Imagen responsive con picture

`picture` permite servir distintas versiones según soporte o tamaño. El navegador elige la primera que entiende:

```html
<picture>
  <source srcset="foto.webp" type="image/webp">
  <source srcset="foto.avif" type="image/avif">
  <img src="foto.jpg" alt="Foto" style="max-width: 100%;">
</picture>
```

El navegador elige el primer formato que soporte.

---

## Lazy loading

La carga diferida mejora rendimiento porque la imagen no se descarga hasta que está cerca del viewport:

```html
<!-- La imagen se carga solo cuando está cerca del viewport -->
<img src="foto.jpg" alt="Foto" loading="lazy" width="800" height="600">

<!-- Carga normal (por defecto) -->
<img src="hero.jpg" alt="Hero" loading="eager">
```

---

## Imagen decorativa

Si la imagen es decorativa y no aporta información, `alt` debe estar vacío para que los lectores de pantalla la ignoren:

```html
<!-- Imagen decorativa: alt vacío -->
<img src="separador.png" alt="" role="presentation">
```

El lector de pantalla ignorará la imagen.

---

## Resumen

| Atributo | Descripción |
|---|---|
| `src` | Ruta de la imagen (obligatorio) |
| `alt` | Texto alternativo (obligatorio) |
| `width` | Ancho en píxeles |
| `height` | Alto en píxeles |
| `loading` | lazy o eager |
| `srcset` | Versiones para responsive |

---

## Ejercicio

Crea una página con tres imágenes: una con ruta relativa, una con atributo loading lazy, y una usando picture para cargar WebP con fallback JPEG.

**Instrucciones paso a paso:**

1. Crea `imagenes.html`
2. Agrega un img con src y alt a una imagen de placeholder
3. Agrega un img con loading lazy
4. Agrega un picture con source webp y fallback img jpg

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Imágenes HTML</title>
</head>
<body>
  <h1>Imágenes en HTML</h1>

  <h2>Imagen básica</h2>
  <img
    src="https://via.placeholder.com/400x300"
    alt="Placeholder de ejemplo"
    width="400"
    height="300"
  >

  <h2>Imagen con lazy loading</h2>
  <img
    src="https://via.placeholder.com/600x400"
    alt="Imagen con carga diferida"
    width="600"
    height="400"
    loading="lazy"
  >

  <h2>Picture con formatos modernos</h2>
  <picture>
    <source srcset="https://via.placeholder.com/800x400.webp" type="image/webp">
    <img
      src="https://via.placeholder.com/800x400"
      alt="Imagen responsive con fallback"
      style="max-width: 100%; height: auto;"
    >
  </picture>
</body>
</html>
```

</details>
