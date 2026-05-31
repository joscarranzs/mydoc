---
title: ASIDE
module: html
submodule: organization/aside
---

El elemento `<aside>` representa contenido tangencial o complementario al contenido principal. Es información que podría existir independientemente pero que se relaciona de forma indirecta con el tema central.

```html
<main>
  <article>
    <h1>Guía de CSS Grid</h1>
    <p>CSS Grid es un sistema de layout bidimensional...</p>
  </article>

  <aside>
    <h2>Artículos relacionados</h2>
    <ul>
      <li><a href="/flexbox">Guía de Flexbox</a></li>
      <li><a href="/position">Posicionamiento CSS</a></li>
    </ul>
  </aside>
</main>
```

## Usos comunes

- **Barras laterales (sidebars)** con contenido relacionado.
- **Widgets** de redes sociales, calendarios, clima.
- **Publicidad** y contenido promocional.
- **Notas al margen**, definiciones, citas destacadas.
- **Enlaces relacionados** o navegación secundaria.
- **Biografía del autor** al final de un artículo.

```html
<article>
  <h1>Artículo principal</h1>
  <p>...</p>

  <aside>
    <blockquote>Dato curioso relacionado con el tema del artículo.</blockquote>
  </aside>

  <p>Más contenido del artículo...</p>
</article>
```

## Diferencias con otros elementos

| Elemento | Propósito |
|----------|-----------|
| `<aside>` | Complemento al contenido principal |
| `<section>` | Agrupación temática dentro del flujo principal |
| `<nav>` | Navegación, no contenido complementario |
| `<div>` | Contenedor sin significado |

Si el contenido es navegación (enlaces a otras secciones del sitio), usa `<nav>`, no `<aside>`. Si el contenido es parte integral del argumento principal, probablemente es `<section>`.

## Posicionamiento visual vs. semántico

El `<aside>` puede colocarse visualmente a la derecha o izquierda mediante CSS, pero su posición en el HTML debe reflejar su relación con el contenido principal:

```html
<main>
  <article>
    <!-- Contenido principal primero (importante para SEO y accesibilidad) -->
  </article>

  <aside>
    <!-- Contenido complementario después -->
  </aside>
</main>
```

---

## Ejercicio: página con sidebar

Crea la estructura HTML de una página de artículo que incluya:

1. Un `<article>` con un `<h1>` y dos párrafos
2. Un `<aside>` dentro del `<main>` con:
   - Una sección de "Artículos relacionados" (lista de enlaces)
   - Una sección de "Publicidad" (un párrafo)

<details>
<summary><strong>Ver solución</strong></summary>

```html
<body>
  <header>
    <nav>Navegación principal</nav>
  </header>

  <main>
    <article>
      <h1>Cómo funciona la memoria en JavaScript</h1>
      <p>JavaScript gestiona la memoria automáticamente mediante el garbage collector...</p>
      <p>El ciclo de vida de la memoria consta de tres fases: asignación, uso y liberación...</p>
    </article>

    <aside>
      <section>
        <h2>Artículos relacionados</h2>
        <ul>
          <li><a href="/closure">Closures y ámbito léxico</a></li>
          <li><a href="/event-loop">El event loop en detalle</a></li>
          <li><a href="/prototypes">Prototipos y herencia</a></li>
        </ul>
      </section>

      <section>
        <h2>Publicidad</h2>
        <p>Curso completo de JavaScript avanzado. 50% de descuento esta semana.</p>
      </section>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026</p>
  </footer>
</body>
```

</details>
