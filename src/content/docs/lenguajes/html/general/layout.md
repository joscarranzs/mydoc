---
title: Layout
description: Estructura de página.
module: lenguajes/html
submodule: general
order: 30
---

Al completar esta guía podrás:

- Estructurar una página con header, nav, main y footer
- Usar contenedores para layouts flexibles
- Crear diseños de una y dos columnas
- Aplicar el modelo de caja correctamente

---

## Estructura semántica básica

Un layout típico divide la página en zonas reconocibles. La estructura semántica ayuda a entender la intención del contenido:

```html
<body>
  <header>Cabecera</header>
  <nav>Navegación</nav>
  <main>Contenido principal</main>
  <footer>Pie de página</footer>
</body>
```

---

## Layout de una columna

Un layout de una columna es el más simple y sigue siendo muy útil para páginas de contenido, documentación o artículos:

```html
<style>
  body { margin: 0; font-family: Arial, sans-serif; }
  .container { max-width: 800px; margin: 0 auto; padding: 0 20px; }
  header { background: #1A73E8; color: white; padding: 20px; text-align: center; }
  main { padding: 20px; min-height: 400px; }
  footer { background: #333; color: white; padding: 16px; text-align: center; }
</style>

<body>
  <header>
    <div class="container">
      <h1>Mi sitio</h1>
    </div>
  </header>
  <main class="container">
    <h2>Contenido principal</h2>
    <p>Texto de contenido.</p>
  </main>
  <footer>
    <div class="container">
      <p>&copy; 2024 Mi sitio</p>
    </div>
  </footer>
</body>
```

---

## Layout de dos columnas

El patrón de dos columnas suele usarse para sidebar + contenido principal, muy común en documentación y blogs:

```html
<style>
  .layout { display: flex; gap: 20px; max-width: 1000px; margin: 20px auto; padding: 0 20px; }
  .sidebar { width: 250px; background: #f5f5f5; padding: 16px; border-radius: 8px; }
  .content { flex: 1; background: white; padding: 16px; border-radius: 8px; }
</style>

<body>
  <header style="background: #1A73E8; color: white; padding: 20px; text-align: center;">
    <h1>Mi sitio</h1>
  </header>

  <div class="layout">
    <aside class="sidebar">
      <h3>Menú</h3>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </aside>
    <main class="content">
      <h2>Contenido principal</h2>
      <p>Este es el área de contenido principal.</p>
    </main>
  </div>

  <footer style="background: #333; color: white; padding: 16px; text-align: center;">
    <p>&copy; 2024 Mi sitio</p>
  </footer>
</body>
```

---

## Header

El `header` suele incluir identidad del sitio, logo y navegación principal:

```html
<header>
  <div class="container">
    <a href="/" class="logo">Mi Sitio</a>
    <nav>
      <a href="/">Inicio</a>
      <a href="/blog">Blog</a>
      <a href="/contacto">Contacto</a>
    </nav>
  </div>
</header>
```

---

## Nav

`nav` agrupa enlaces de navegación principal o secundaria:

```html
<nav>
  <ul>
    <li><a href="/">Inicio</a></li>
    <li><a href="/productos">Productos</a></li>
    <li><a href="/servicios">Servicios</a></li>
    <li><a href="/contacto">Contacto</a></li>
  </ul>
</nav>
```

---

## Main

`main` debe contener el contenido principal único de la página. Idealmente debe haber uno solo por documento:

```html
<main>
  <h1>Título de la página</h1>
  <section>
    <h2>Sección 1</h2>
    <p>Contenido de la sección.</p>
  </section>
  <section>
    <h2>Sección 2</h2>
    <p>Contenido de la sección.</p>
  </section>
</main>
```

---

## Footer

`footer` suele contener enlaces secundarios, copyright o información de contacto:

```html
<footer>
  <div class="footer-content">
    <div>
      <h4>Enlaces</h4>
      <a href="/privacidad">Privacidad</a>
      <a href="/terminos">Términos</a>
    </div>
    <div>
      <h4>Contacto</h4>
      <p>info@ejemplo.com</p>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 Mi sitio. Todos los derechos reservados.</p>
  </div>
</footer>
```

---

## Box model

El box model define cómo se calcula el tamaño visual de un elemento. Es clave para entender márgenes, padding y bordes:

```css
.elemento {
  /* content: el contenido */
  width: 300px;
  height: 200px;

  /* padding: espacio interno */
  padding: 20px;

  /* border: borde */
  border: 2px solid #333;

  /* margin: espacio externo */
  margin: 16px auto;

  /* box-sizing: incluye padding y border en width */
  box-sizing: border-box;
}
```

---

## Resumen

Piensa el layout como una composición de regiones: cabecera, navegación, contenido, soporte y pie.

| Elemento | Rol |
|---|---|
| `<header>` | Cabecera de página o sección |
| `<nav>` | Navegación principal |
| `<main>` | Contenido único de la página |
| `<footer>` | Pie de página o sección |
| `<aside>` | Contenido complementario |
| `<section>` | Agrupación temática |

---

## Ejercicio

Crea una página completa con header (logo + nav), main (dos columnas con sidebar y contenido), y footer (enlaces + copyright). Usa flexbox.

**Instrucciones paso a paso:**

1. Crea `layout.html`
2. Estructura header + div.layout + footer
3. El layout usa display flex con sidebar (250px) y content (flex: 1)
4. Agrega contenido en cada sección

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Layout HTML</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f9f9f9;
    }
    header {
      background: #1A73E8;
      color: white;
      padding: 16px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    header nav a {
      color: white;
      text-decoration: none;
      margin-left: 16px;
    }
    .layout {
      display: flex;
      gap: 20px;
      max-width: 1000px;
      margin: 20px auto;
      padding: 0 20px;
    }
    .sidebar {
      width: 250px;
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .sidebar ul { list-style: none; padding: 0; }
    .sidebar li { margin-bottom: 8px; }
    .sidebar a { color: #1A73E8; text-decoration: none; }
    .content {
      flex: 1;
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    footer {
      background: #333;
      color: white;
      text-align: center;
      padding: 16px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <header>
    <strong>Mi Sitio</strong>
    <nav>
      <a href="#">Inicio</a>
      <a href="#">Blog</a>
      <a href="#">Contacto</a>
    </nav>
  </header>

  <div class="layout">
    <aside class="sidebar">
      <h3>Menú</h3>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Servicios</a></li>
      </ul>
    </aside>
    <main class="content">
      <h2>Bienvenido</h2>
      <p>Este es el contenido principal de la página. Usa flexbox para crear el layout de dos columnas.</p>
      <p>La barra lateral tiene 250px de ancho y el contenido ocupa el resto del espacio.</p>
    </main>
  </div>

  <footer>
    <p>&copy; 2024 Mi Sitio. Todos los derechos reservados.</p>
  </footer>
</body>
</html>
```

</details>
