---
title: Head
description: Meta, title, link.
module: lenguajes/html
submodule: general
order: 29
---

Al completar esta guía podrás:

- Estructurar correctamente la sección head
- Usar meta tags para SEO y redes sociales
- Configurar Open Graph y Twitter Cards
- Vincular hojas de estilo y favicon

---

## Estructura completa

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi página web</title>
  <meta name="description" content="Descripción de la página">
  <link rel="stylesheet" href="estilos.css">
  <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
<body>
  <!-- contenido -->
</body>
</html>
```

---

## Meta tags esenciales

```html
<!-- Codificación de caracteres -->
<meta charset="UTF-8">

<!-- Viewport para responsive design -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Título (obligatorio) -->
<title>Mi página</title>

<!-- Descripción para SEO -->
<meta name="description" content="Descripción de la página entre 150-160 caracteres.">
```

---

## Meta tags SEO

```html
<!-- Palabras clave (ya no relevante para Google) -->
<meta name="keywords" content="html, css, tutorial">

<!-- Autor -->
<meta name="author" content="Tu nombre">

<!-- Robots: control de indexación -->
<meta name="robots" content="index, follow">
<meta name="robots" content="noindex, nofollow">

<!-- Revisitar después de días -->
<meta name="revisit-after" content="7 days">
```

---

## Open Graph (Facebook, LinkedIn)

```html
<meta property="og:title" content="Título para redes sociales">
<meta property="og:description" content="Descripción para compartir">
<meta property="og:image" content="https://ejemplo.com/imagen.jpg">
<meta property="og:url" content="https://ejemplo.com">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_ES">
```

---

## Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Título para Twitter">
<meta name="twitter:description" content="Descripción para Twitter">
<meta name="twitter:image" content="https://ejemplo.com/imagen.jpg">
```

---

## Link: hojas de estilo

```html
<!-- CSS principal -->
<link rel="stylesheet" href="estilos.css">

<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

<!-- Font Awesome u otros iconos -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
```

---

## Link: precarga y pre conexión

```html
<!-- Preconexión a origen externo -->
<link rel="preconnect" href="https://api.ejemplo.com">

<!-- Precarga de recursos críticos -->
<link rel="preload" href="fuente.woff2" as="font" type="font/woff2" crossorigin>

<!-- DNS-Prefetch -->
<link rel="dns-prefetch" href="https://ejemplo.com">
```

---

## Link: manifest para PWA

```html
<link rel="manifest" href="site.webmanifest">
```

```json
{
  "name": "Mi App",
  "short_name": "App",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1A73E8",
  "icons": [
    { "src": "icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

---

## Orden recomendado

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Mi página</title>
  <meta name="description" content="Descripción">
  <meta name="robots" content="index, follow">

  <!-- Open Graph -->
  <meta property="og:title" content="...">
  <meta property="og:description" content="...">

  <!-- Favicon -->
  <link rel="icon" href="favicon.ico">

  <!-- CSS -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="stylesheet" href="estilos.css">
</head>
```

---

## Resumen

| Elemento | Propósito |
|---|---|
| `<meta charset>` | Codificación de caracteres |
| `<meta viewport>` | Diseño responsive |
| `<title>` | Título en pestaña y SEO |
| `<meta description>` | Descripción en resultados |
| `<meta og:*>` | Open Graph para redes |
| `<link rel="stylesheet">` | Hojas de estilo |
| `<link rel="icon">` | Favicon |

---

## Ejercicio

Crea la sección head completa para una página que incluye: charset, viewport, title, description, Open Graph, favicon con emoji, y Google Fonts (Roboto).

**Instrucciones paso a paso:**

1. Crea `head.html`
2. Agrega todos los meta tags esenciales
3. Agrega Open Graph para compartir en redes
4. Agrega favicon con emoji SVG
5. Agrega preconnect y link a Google Fonts

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi sitio web | Aprende desarrollo</title>
  <meta name="description" content="Guía completa de desarrollo web con HTML, CSS y JavaScript. Tutoriales prácticos para principiantes.">
  <meta name="robots" content="index, follow">

  <meta property="og:title" content="Mi sitio web">
  <meta property="og:description" content="Aprende desarrollo web desde cero.">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="es_ES">

  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Mi sitio web">

  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌐</text></svg>">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <h1>Mi sitio web</h1>
  <p>Esta página tiene un head completo con SEO, Open Graph y Google Fonts.</p>
</body>
</html>
```

</details>
