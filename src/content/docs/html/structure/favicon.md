---
title: FAVICON
module: html
submodule: structure/favicon
---

El favicon (contracción de _favorites icon_) es la pequeña imagen que aparece en la pestaña del navegador, junto al título de la página. También se utiliza en marcadores, en el historial y en los accesos directos del escritorio.

## Declaración básica

Se declara dentro de `<head>` mediante un elemento `<link>` con `rel="icon"`:

```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

## Formatos soportados

Cada navegador maneja distintos formatos. La tabla muestra la compatibilidad actual:

| Formato | Extensión | Type | Compatibilidad |
|---------|-----------|------|---------------|
| ICO | `.ico` | `image/x-icon` | Todos los navegadores (formato legacy) |
| PNG | `.png` | `image/png` | Navegadores modernos |
| SVG | `.svg` | `image/svg+xml` | Chrome, Firefox, Edge (recomendado) |
| GIF | `.gif` | `image/gif` | Obsoleto, no recomendado |

## Práctica recomendada

Para máxima compatibilidad se declaran dos versiones — un `.ico` como fallback y un `.svg` como moderno:

```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
```

El SVG tiene ventajas significativas: es escalable, se ve nítido en cualquier resolución (incluyendo pantallas Retina), pesa menos y puede incluir animaciones. El `.ico` es el respaldo para navegadores que no soportan SVG como favicon.

## Tamaños y apple-touch-icon

Para dispositivos Apple y pantallas de inicio se usan declaraciones adicionales:

```html
<!-- Icono para iPhone (180x180) -->
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">

<!-- Icono para iPad (152x152) -->
<link rel="apple-touch-icon" sizes="152x152" href="apple-touch-icon-152.png">

<!-- Manifest para Progressive Web Apps -->
<link rel="manifest" href="site.webmanifest">
```

El `manifest.json` permite definir iconos en múltiples tamaños, colores de fondo y nombre de la aplicación:

```json
{
  "name": "Mi Sitio Web",
  "icons": [
    { "src": "icon-192.png", "type": "image/png", "sizes": "192x192" },
    { "src": "icon-512.png", "type": "image/png", "sizes": "512x512" }
  ],
  "background_color": "#0a0a0f",
  "theme_color": "#64a5ff"
}
```

## Consideraciones de diseño

Un favicon efectivo debe ser:

- **Reconocible**: incluso a 16x16 píxeles debe identificarse sin esfuerzo.
- **Simple**: sin texto legible a tamaño reducido ni detalles finos.
- **Consistente con la marca**: usar el mismo color, logo o símbolo del sitio.
- **Fondo transparente o contrastante**: funciona bien tanto en pestañas claras como oscuras.

```html
<!-- Declaración completa mínima -->
<head>
  <meta charset="UTF-8">
  <title>Mi sitio</title>
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
</head>
```

## Generación de favicons

Existen herramientas que generan el conjunto completo de iconos a partir de una imagen base:

- [Real Favicon Generator](https://realfavicongenerator.net/) — genera todos los formatos y el HTML correspondiente.
- [Favicon.io](https://favicon.io/) — convierte texto o imágenes en favicons.
- ImageMagick (CLI): `convert logo.png -define icon:auto-resize=16,32,48 favicon.ico`

---

## Ejercicio: declara los favicons de un sitio

Escribe el `<head>` completo de un sitio web que incluya:

1. Favicon en formato ICO y SVG
2. Apple touch icon en 180x180
3. Web manifest para PWA

<details>
<summary><strong>Ver solución</strong></summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portal de tecnología</title>

  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
</head>
<body>
  <!-- contenido -->
</body>
</html>
```

</details>
