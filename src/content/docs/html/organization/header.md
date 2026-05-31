---
title: HEADER
module: html
submodule: organization/header
---

El elemento `<header>` representa la cabecera de una sección o del documento completo. Contiene contenido introductorio o de navegación, como logotipos, títulos, menús, barras de búsqueda y enlaces de utilidad.

```html
<header>
  <img src="logo.svg" alt="Logotipo">
  <nav>
    <a href="/">Inicio</a>
    <a href="/blog">Blog</a>
    <a href="/contacto">Contacto</a>
  </nav>
</header>
```

## Uso como cabecera de página

Cuando `<header>` es hijo directo de `<body>`, actúa como la cabecera global del documento:

```html
<body>
  <header>
    <h1>Portal de noticias</h1>
    <nav>...</nav>
  </header>

  <main>...</main>

  <footer>...</footer>
</body>
```

## Uso como cabecera de sección

`<header>` también puede usarse dentro de `<article>`, `<section>` o `<aside>` para representar la cabecera de esa subsección:

```html
<article>
  <header>
    <h2>Título del artículo</h2>
    <p class="meta">Publicado el <time datetime="2026-05-30">30 de mayo de 2026</time></p>
  </header>

  <p>Contenido del artículo...</p>

  <footer>
    <p>Escrito por María García</p>
  </footer>
</article>
```

## Qué puede contener

- Logotipos o imágenes de marca.
- El `<h1>`–`<h6>` de la sección.
- Navegación (`<nav>`).
- Enlaces de utilidad (login, registro, idioma).
- Barras de búsqueda.
- Información introductoria.

## Qué NO debe contener

- `<header>` no puede contener otro `<header>` ni `<footer>`.
- Aunque puede contener `<nav>`, no debe contener `<main>` ni `<aside>` como hijos directos.

## Múltiples headers por página

Un documento puede tener múltiples `<header>`: uno global (hijo de `<body>`) y otros dentro de `<article>`, `<section>` o `<aside>`. Cada uno es independiente.

```html
<body>
  <header>Cabecera global</header>

  <main>
    <article>
      <header>Cabecera del artículo</header>
      <p>...</p>
    </article>
  </main>
</body>
```

---

## Ejercicio: header de un blog

Crea el `<header>` global de un blog que incluya:

1. Logotipo (imagen con alt)
2. Título del blog (`<h1>`)
3. Navegación con tres enlaces: Inicio, Artículos, Acerca de
4. Un enlace de "Iniciar sesión" alineado a la derecha (usar un `<div>` para separar)

<details>
<summary><strong>Ver solución</strong></summary>

```html
<header>
  <div class="marca">
    <img src="logo-blog.svg" alt="Blog de tecnología" width="40" height="40">
    <h1>Blog de tecnología</h1>
  </div>

  <nav>
    <a href="/">Inicio</a>
    <a href="/articulos">Artículos</a>
    <a href="/acerca">Acerca de</a>
  </nav>

  <a href="/login">Iniciar sesión</a>
</header>
```

</details>
