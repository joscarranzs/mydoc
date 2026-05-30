---
title: Favicon
description: Icono de página.
module: lenguajes/html
submodule: general
order: 17
---

Al completar esta guía podrás:

- Agregar un favicon a una página web
- Usar diferentes formatos de favicon
- Crear favicons para distintos dispositivos
- Usar la herramienta emoji como favicon

---

## Favicon básico

El favicon es el pequeño icono que aparece en la pestaña del navegador:

```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

Se coloca dentro de `<head>`.

---

## Formatos

```html
<!-- ICO: formato clásico, compatible con todos los navegadores -->
<link rel="icon" href="favicon.ico" type="image/x-icon">

<!-- PNG: moderno, mayor calidad -->
<link rel="icon" href="favicon.png" type="image/png">

<!-- SVG: escalable, ideal para alta resolución -->
<link rel="icon" href="favicon.svg" type="image/svg+xml">
```

---

## Múltiples tamaños

```html
<!-- 16x16: estándar para pestañas -->
<link rel="icon" sizes="16x16" href="favicon-16.png" type="image/png">

<!-- 32x32: para barras de tareas -->
<link rel="icon" sizes="32x32" href="favicon-32.png" type="image/png">

<!-- 48x48: para accesos directos -->
<link rel="icon" sizes="48x48" href="favicon-48.png" type="image/png">
```

---

## Apple Touch Icon

Para la pantalla de inicio en iOS:

```html
<!-- iPhone: 180x180 -->
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">

<!-- iPad: 167x167 -->
<link rel="apple-touch-icon" sizes="167x167" href="apple-touch-icon-ipad.png">
```

---

## Emoji como favicon

Truco usando SVG con emoji:

```html
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌐</text></svg>">
```

Sin necesidad de archivos. Solo cambia el emoji.

---

## Herramientas

| Herramienta | URL | Uso |
|---|---|---|
| Favicon.io | https://favicon.io | Generar favicon desde texto o imagen |
| Real Favicon Generator | https://realfavicongenerator.net | Generar todos los formatos |
| Emoji Favicon | https://emoji-favicon.com | Favicon con emoji |

---

## Estructura completa

```html
<head>
  <meta charset="UTF-8">
  <title>Mi página</title>

  <!-- Favicon principal -->
  <link rel="icon" href="favicon.ico" type="image/x-icon">

  <!-- PNG para navegadores modernos -->
  <link rel="icon" href="favicon.png" type="image/png">

  <!-- Apple Touch Icon -->
  <link rel="apple-touch-icon" href="apple-touch-icon.png">

  <!-- Manifest para PWA -->
  <link rel="manifest" href="site.webmanifest">
</head>
```

---

## Resumen

| Elemento | Propósito |
|---|---|
| `<link rel="icon">` | Favicon para navegador |
| `favicon.ico` | Formato tradicional |
| `favicon.png` | Formato moderno |
| `apple-touch-icon` | Icono para iOS |
| Emoji SVG | Favicon sin archivos |

---

## Ejercicio

Agrega un favicon a una página HTML usando el método de emoji SVG (sin archivos externos).

**Instrucciones paso a paso:**

1. Crea `favicon.html`
2. En el head, agrega un link con emoji SVG como favicon
3. Agrega también un apple-touch-icon con emoji
4. Abre en el navegador y verifica el icono en la pestaña

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Favicon con emoji</title>

  <!-- Favicon con emoji -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📚</text></svg>">

  <!-- Apple Touch Icon -->
  <link rel="apple-touch-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📚</text></svg>">
</head>
<body>
  <h1>Favicon con emoji</h1>
  <p>Mira la pestaña del navegador para ver el icono 📚</p>
</body>
</html>
```

</details>
