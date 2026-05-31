---
title: ARTICLE
module: html
submodule: organization/article
---

El elemento `<article>` representa contenido autocontenido que podría distribuirse o reutilizarse independientemente del resto de la página. Piensa en `<article>` como una unidad completa que tiene sentido por sí misma.

```html
<article>
  <h2>Cómo usar CSS Grid en proyectos reales</h2>
  <p>CSS Grid ha transformado la forma en que diseñamos layouts...</p>
  <a href="/articulos/css-grid">Leer más</a>
</article>
```

## Cuándo usar `<article>`

Ejemplos típicos de contenido que merece un `<article>`:

- Una entrada de blog o noticia.
- Un comentario de usuario.
- Una reseña de producto.
- Una tarjeta de producto en un catálogo.
- Un widget o componente independiente.
- Un post en un foro o red social.

```html
<article>
  <header>
    <h2>Comentario de usuario</h2>
    <p>Publicado por <span class="autor">María</span> hace 2 horas</p>
  </header>
  <p>Excelente artículo. Me gustaría ver más ejemplos de Flexbox.</p>
  <footer>
    <button>Responder</button>
    <button>Reportar</button>
  </footer>
</article>
```

## `<article>` y el estándar de sindicación

La semántica de `<article>` está diseñada pensando en la sindicación de contenido (RSS, Atom, APIs). Un lector de feeds puede extraer cada `<article>` y presentarlo como una entrada independiente, con su propio encabezado, contenido y metadatos.

## `<article>` dentro de `<article>`

Los `<article>` pueden anidarse cuando el contenido hijo también es autocontenido:

```html
<article>
  <h2>Artículo principal</h2>
  <p>Contenido del artículo...</p>

  <article>
    <h3>Comentario 1</h3>
    <p>Excelente artículo. Muy útil.</p>
  </article>

  <article>
    <h3>Comentario 2</h3>
    <p>Gracias por compartir.</p>
  </article>
</article>
```

## `<article>` vs. `<section>`

| Aspecto | `<article>` | `<section>` |
|---------|-------------|-------------|
| Autonomía | Puede existir independientemente | Forma parte de un todo |
| Sindicación | Diseñado para RSS/feed | No aplica |
| Ejemplo | Un post, un comentario | Un capítulo dentro de un post |
| Encabezado | Recomendado | Requerido semánticamente |

La decisión depende del contexto: si el contenido podría estar en una página separada o en un feed RSS, es `<article>`. Si solo agrupa contenido temático dentro de una página más grande, es `<section>`.

---

## Ejercicio: lista de artículos

Crea la estructura HTML para una página que muestre tres artículos de blog en una lista. Cada `<article>` debe contener:

1. Un `<header>` con el título (`<h2>`) y la fecha
2. Un párrafo de introducción
3. Un enlace "Leer más"
4. Un `<footer>` con el nombre del autor

<details>
<summary><strong>Ver solución</strong></summary>

```html
<main>
  <h1>Últimos artículos</h1>

  <article>
    <header>
      <h2>Introducción a TypeScript</h2>
      <p><time datetime="2026-05-28">28 de mayo de 2026</time></p>
    </header>
    <p>TypeScript añade tipos estáticos a JavaScript, permitiendo detectar errores en tiempo de compilación...</p>
    <a href="/articulos/typescript-intro">Leer más</a>
    <footer>
      <p>Por: Carlos Mendoza</p>
    </footer>
  </article>

  <article>
    <header>
      <h2>CSS Container Queries</h2>
      <p><time datetime="2026-05-25">25 de mayo de 2026</time></p>
    </header>
    <p>Las container queries permiten aplicar estilos basados en el tamaño del contenedor padre...</p>
    <a href="/articulos/container-queries">Leer más</a>
    <footer>
      <p>Por: Ana López</p>
    </footer>
  </article>

  <article>
    <header>
      <h2>Patrones de diseño en JavaScript</h2>
      <p><time datetime="2026-05-22">22 de mayo de 2026</time></p>
    </header>
    <p>Los patrones de diseño son soluciones reutilizables para problemas comunes en el desarrollo de software...</p>
    <a href="/articulos/patrones-js">Leer más</a>
    <footer>
      <p>Por: Roberto Vega</p>
    </footer>
  </article>
</main>
```

</details>
