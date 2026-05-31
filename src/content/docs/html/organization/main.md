---
title: MAIN
module: html
submodule: organization/main
---

El elemento `<main>` representa el contenido principal y único del documento. Es el centro semántico de la página: todo lo que no se repite en otras páginas (barras laterales, navegación, pies de página) debe estar fuera de `<main>`.

```html
<body>
  <header>...</header>

  <main>
    <h1>Título de la página</h1>
    <p>Contenido exclusivo de esta página.</p>
  </main>

  <footer>...</footer>
</body>
```

## Reglas fundamentales

- **Único por página**: solo puede haber un `<main>` en el documento.
- **No anidable**: `<main>` no puede ser hijo de `<article>`, `<aside>`, `<header>`, `<footer>` ni `<nav>`.
- **Skip link**: los lectores de pantalla pueden saltar directamente a `<main>`, por lo que es el destino natural del enlace "Saltar al contenido".

## Skip link

Un enlace invisible al inicio de la página que permite a los usuarios de teclado y lectores de pantalla saltar la navegación e ir directamente al contenido:

```html
<body>
  <a href="#contenido" class="skip-link">Saltar al contenido</a>

  <header>...</header>

  <main id="contenido">
    <h1>Contenido principal</h1>
  </main>
</body>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
}
.skip-link:focus {
  top: 0;
}
```

## Qué incluir en `<main>`

- El `<h1>` de la página.
- El contenido único: artículos, secciones, formularios, tablas de datos.
- El propósito central de la página.

## Qué NO incluir en `<main>`

- Navegación global (`<nav>`).
- Logotipos y cabeceras de sitio (`<header>` global).
- Barras laterales con contenido promocional (`<aside>`).
- Pies de página (`<footer>` global).
- Elementos repetidos en todas las páginas.

---

## Ejercicio: identificar el contenido principal

Dado el siguiente HTML, identifica qué parte debe ir dentro de `<main>`:

```html
<body>
  <header>Cabecera con logo y nav</header>
  <section class="contenido">
    <h1>Guía de HTML semántico</h1>
    <p>Esta guía explica los beneficios del HTML semántico...</p>
    <section>
      <h2>Accesibilidad</h2>
      <p>La semántica mejora la accesibilidad...</p>
    </section>
  </section>
  <aside>Anuncios y enlaces patrocinados</aside>
  <footer>Copyright 2026</footer>
</body>
```

<details>
<summary><strong>Ver solución</strong></summary>

```html
<body>
  <header>Cabecera con logo y nav</header>

  <main>
    <h1>Guía de HTML semántico</h1>
    <p>Esta guía explica los beneficios del HTML semántico...</p>
    <section>
      <h2>Accesibilidad</h2>
      <p>La semántica mejora la accesibilidad...</p>
    </section>
  </main>

  <aside>Anuncios y enlaces patrocinados</aside>
  <footer>Copyright 2026</footer>
</body>
```

La sección de contenido con el `h1` y las subsecciones va dentro de `<main>`. El header, aside y footer quedan fuera por ser elementos repetidos o complementarios.

</details>
