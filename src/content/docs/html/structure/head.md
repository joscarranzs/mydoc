---
title: HEAD
module: html
submodule: structure/head
---

El elemento `<head>` es el contenedor de los metadatos del documento. Su contenido no se renderiza en la ventana del navegador, pero es esencial para el comportamiento, la indexación y la presentación de la página.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi sitio web</title>
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  ...
</body>
</html>
```

## Elementos permitidos en `<head>`

No cualquier elemento puede ir dentro de `<head>`. El estándar restringe los hijos del `head` a un conjunto específico de elementos de metadatos:

| Elemento | Propósito |
|----------|-----------|
| `<title>` | Título de la página (único obligatorio). |
| `<meta>` | Metadatos diversos: charset, viewport, descripción, palabras clave. |
| `<link>` | Enlaces a recursos externos: hojas de estilo, favicons, preload. |
| `<style>` | CSS embebido directamente en el documento. |
| `<script>` | Código JavaScript (puede ir en `<head>` o `<body>`). |
| `<base>` | URL base para las rutas relativas del documento. |
| `<noscript>` | Contenido alternativo para navegadores con JavaScript desactivado. |

## Orden recomendado

Aunque el orden no afecta la validez, colocarlos en una secuencia lógica mejora la legibilidad y el rendimiento:

1. `<meta charset="UTF-8">` — debe ser lo primero para que el navegador interprete correctamente los caracteres del título y los siguientes metadatos.
2. `<meta name="viewport">` — crítica para el diseño responsive.
3. `<title>` — tan pronto como sea posible para que la pestaña muestre el nombre.
4. `<meta>` de descripción, keywords y Open Graph.
5. `<link rel="stylesheet">` — hojas de estilo.
6. `<script>` — scripts (aunque lo ideal es cargarlos al final del `<body>`).

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portal de noticias</title>
  <meta name="description" content="Noticias actualizadas todos los días.">
  <meta property="og:title" content="Portal de noticias">
  <meta property="og:description" content="Noticias actualizadas todos los días.">
  <link rel="stylesheet" href="/css/main.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
</head>
```

## Metadatos comunes para SEO y redes sociales

```html
<!-- SEO básico -->
<meta name="description" content="Descripción de la página para motores de búsqueda">
<meta name="keywords" content="html, css, javascript, tutorial">
<meta name="author" content="Nombre del autor">
<meta name="robots" content="index, follow">

<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:title" content="Título para compartir en redes">
<meta property="og:description" content="Descripción para previsualización">
<meta property="og:image" content="https://ejemplo.com/imagen.jpg">
<meta property="og:url" content="https://ejemplo.com">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Título para Twitter">
<meta name="twitter:description" content="Descripción para Twitter">
```

## El elemento `<base>`

Define la URL base para todas las rutas relativas del documento. Si se usa, debe ir antes de cualquier elemento que haga referencia a una URL:

```html
<head>
  <base href="https://ejemplo.com/blog/">
  <!-- Ahora <a href="articulo.html"> apunta a https://ejemplo.com/blog/articulo.html -->
</head>
```

Su uso es poco frecuente en páginas estáticas, pero puede ser útil en aplicaciones que se sirven desde múltiples rutas o en sistemas de plantillas.

---

## Ejercicio: head completo para un artículo

Escribe el `<head>` completo para la página de un artículo de blog que incluya:

1. Charset y viewport
2. Título descriptivo
3. Meta description de máximo 160 caracteres
4. Open Graph tags para título, descripción e imagen
5. Enlace a una hoja de estilos externa `css/articulo.css`
6. Preconnect a Google Fonts

<details>
<summary><strong>Ver solución</strong></summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cómo funciona CSS Grid — Blog de desarrollo web</title>
  <meta name="description" content="Aprende los fundamentos de CSS Grid: contenedor, items, filas, columnas y cómo crear layouts complejos con código minimalista.">
  <meta property="og:title" content="Cómo funciona CSS Grid — Blog de desarrollo web">
  <meta property="og:description" content="Aprende los fundamentos de CSS Grid: contenedor, items, filas, columnas y cómo crear layouts complejos con código minimalista.">
  <meta property="og:image" content="https://ejemplo.com/imagenes/css-grid-guia.jpg">
  <meta property="og:type" content="article">
  <link rel="stylesheet" href="css/articulo.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
</head>
<body>
  <!-- contenido del artículo -->
</body>
</html>
```

</details>
