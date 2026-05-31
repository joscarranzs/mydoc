---
title: BODY
module: html
submodule: structure/body-element
---

El elemento `<body>` contiene todo el contenido visible del documento. Es el contenedor donde se insertan los textos, imágenes, videos, formularios, tablas y cualquier otro elemento que el usuario vea o con el que interactúe.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Página completa</title>
</head>
<body>
  <h1>Título principal</h1>
  <p>Este es el contenido visible.</p>
</body>
</html>
```

## Atributos del body

Aunque la mayoría de atributos de `<body>` están obsoletos en favor de CSS, algunos siguen siendo relevantes:

| Atributo | Estado | Propósito |
|----------|--------|-----------|
| `onload` | Válido | Ejecuta JavaScript cuando el documento termina de cargar. |
| `onbeforeunload` | Válido | Se dispara justo antes de salir de la página. |
| `onunload` | Válido | Se dispara cuando el usuario abandona la página. |
| `background` | Obsoleto | URL de imagen de fondo. Usar CSS `background-image`. |
| `bgcolor` | Obsoleto | Color de fondo. Usar CSS `background-color`. |
| `text` | Obsoleto | Color del texto. Usar CSS `color`. |
| `link` | Obsoleto | Color de enlaces no visitados. Usar CSS. |
| `vlink` | Obsoleto | Color de enlaces visitados. Usar CSS. |

```html
<body onload="console.log('Página cargada')">
  <!-- contenido -->
</body>
```

Los atributos obsoletos funcionan en la mayoría de navegadores, pero utilizarlos es una mala práctica. CSS ofrece control total sobre la presentación sin mezclar responsabilidades.

## Estructura típica del body

Un body bien organizado suele seguir esta arquitectura:

```html
<body>
  <header>
    <nav>Navegación principal</nav>
  </header>

  <main>
    <article>
      <section>Contenido principal</section>
    </article>

    <aside>Contenido complementario</aside>
  </main>

  <footer>
    <p>Copyright y enlaces legales</p>
  </footer>
</body>
```

No es obligatorio usar todos estos elementos, pero la estructura semántica mejora la accesibilidad y el mantenimiento.

## Comportamiento del body

- **Ocupa todo el ancho disponible.** Por defecto, `<body>` no tiene margen interno, pero el navegador aplica un margen externo que suele ser de 8px en la mayoría de navegadores. Se elimina con `body { margin: 0; }`.
- **Altura mínima.** `<body>` se estira para contener todo su contenido. Si el contenido es menor que la ventana, el fondo solo se ve hasta donde alcanza el body. Para un fondo de página completa: `body { min-height: 100vh; }`.
- **Es elemento contenedor de scripts.** Los scripts colocados al final del `<body>` (justo antes de `</body>`) no bloquean el renderizado del contenido.

## Reseteo básico para body

```css
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: #1a1a1a;
  background-color: #fafafa;
}
```

Este reseteo elimina los márgenes por defecto del navegador y establece valores base tipográficos consistentes.

## Body vs. document

JavaScript distingue entre `document.body` (el elemento `<body>` del DOM) y `document.documentElement` (el elemento `<html>`). Esta diferencia es relevante al acceder a propiedades como `scrollTop` o `clientHeight`:

```javascript
// Altura total del documento (body + html)
const alturaTotal = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight
);

// Scroll actual de la ventana
const scrollActual = window.scrollY;
```

---

## Ejercicio: body completo con semántica

Escribe el `<body>` completo de una página de contacto que incluya:

1. Un `<header>` con un `<nav>` de tres enlaces: Inicio, Blog, Contacto
2. Un `<main>` con un `<h1>` ("Contacto"), un párrafo de introducción y un formulario con campos para nombre, email y mensaje
3. Un `<footer>` con copyright

No uses atributos obsoletos de body.

<details>
<summary><strong>Ver solución</strong></summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contacto — Mi sitio</title>
  <style>
    body { margin: 0; min-height: 100vh; font-family: system-ui, sans-serif; }
    nav a { margin-right: 1rem; }
    main { max-width: 640px; margin: 2rem auto; padding: 0 1rem; }
    form { display: flex; flex-direction: column; gap: 1rem; }
    label { font-weight: 600; }
    input, textarea { padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; }
    button { padding: 0.5rem 1rem; background: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer; }
    footer { text-align: center; padding: 1rem; color: #666; }
  </style>
</head>
<body>

  <header>
    <nav>
      <a href="/">Inicio</a>
      <a href="/blog">Blog</a>
      <a href="/contacto">Contacto</a>
    </nav>
  </header>

  <main>
    <h1>Contacto</h1>
    <p>Completa el formulario y te responderemos a la brevedad.</p>

    <form action="/enviar" method="post">
      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre" required>

      <label for="email">Correo electrónico</label>
      <input type="email" id="email" name="email" required>

      <label for="mensaje">Mensaje</label>
      <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

      <button type="submit">Enviar mensaje</button>
    </form>
  </main>

  <footer>
    <p>&copy; 2026 — Mi sitio. Todos los derechos reservados.</p>
  </footer>

</body>
</html>
```

</details>
