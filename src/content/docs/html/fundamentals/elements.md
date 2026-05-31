---
title: ELEMENTOS
module: html
submodule: fundamentals/elements
---

Los elementos son los bloques fundamentales con los que se construye todo documento HTML. Cada elemento representa una unidad semántica —un párrafo, una imagen, un encabezado, un enlace— y el navegador la interpreta según su tipo, contexto y atributos.

## Categorías de contenido

El estándar no organiza los elementos por apariencia, sino por **modelo de contenido**: qué tipo de hijos puede albergar cada elemento. Las categorías principales son:

| Categoría           | Descripción | Elementos representativos |
|---------------------|-------------|---------------------------|
| **Flow content**    | Contenido genérico que fluye dentro del `body`. | `p`, `div`, `section`, `article`, `ul`, `table` |
| **Phrasing content**| Contenido inline que forma parte de una línea de texto. | `span`, `strong`, `em`, `a`, `code`, `img` |
| **Heading content** | Encabezados de sección. | `h1`–`h6` |
| **Sectioning content**| Define secciones del documento. | `section`, `article`, `nav`, `aside` |
| **Embedded content**| Recursos externos insertados. | `img`, `video`, `audio`, `canvas`, `iframe` |
| **Interactive content**| Elementos con los que el usuario puede interactuar. | `a`, `button`, `input`, `select`, `textarea` |
| **Metadata content**| Información sobre el documento, no visible. | `title`, `meta`, `link`, `style`, `script` |

Un elemento puede pertenecer a varias categorías. Por ejemplo, `a` es phrasing content, flow content e interactive content.

## Flujo normal: block vs. inline

Dos categorías determinan el comportamiento visual por defecto:

**Elementos block** ocupan todo el ancho disponible y comienzan en una nueva línea. Modelan la estructura macro del documento.

```html
<div>Bloque 1</div>
<div>Bloque 2</div>
<!-- Se renderizan en dos líneas separadas -->
```

**Elementos inline** fluyen dentro de la línea sin interrumpir el flujo. Modelan fragmentos de texto o contenido pequeño dentro de un bloque.

```html
<p>Este texto incluye <strong>negritas</strong>, <em>énfasis</em>
y un <a href="#">enlace</a> inline.</p>
```

Esta distinción no es arbitraria: responde a la semántica de cada elemento. Un elemento block puede contener inline y otros block (según su modelo), pero un elemento inline solo puede contener otros inline.

## Elementos semánticos estructurales

HTML5 introdujo un conjunto de elementos que describen la arquitectura del documento sin recurrir a `div` genéricos:

```html
<body>
  <header>
    <nav>...</nav>
  </header>

  <main>
    <article>
      <section>
        <h2>Subtítulo</h2>
        <p>Contenido de la sección.</p>
      </section>
    </article>

    <aside>
      <p>Información complementaria.</p>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026</p>
  </footer>
</body>
```

Cada elemento tiene un propósito definido:

| Elemento    | Propósito |
|-------------|-----------|
| `<header>`  | Introducción o navegación de una sección. |
| `<nav>`     | Bloque de enlaces de navegación. |
| `<main>`    | Contenido principal y único del documento. |
| `<article>` | Contenido autocontenido (post, noticia, comentario). |
| `<section>` | Agrupación temática de contenido. |
| `<aside>`   | Contenido tangencial o complementario. |
| `<footer>`  | Información de cierre (autor, copyright, enlaces). |

Usar estos elementos no cambia la apariencia por defecto, pero transforma un documento genérico en un documento con significado. Un lector de pantalla puede saltar directamente a `<main>`, un motor de búsqueda identifica `<nav>` como navegación y un agregador puede extraer `<article>` para mostrar un resumen.

## Elementos vacíos (void elements)

Algunos elementos no pueden contener hijos ni texto. Representan una entidad única que el navegador inserta en ese punto del documento:

```html
<img src="diagrama.png" alt="Diagrama de arquitectura">
<input type="email" placeholder="Correo electrónico">
<br>
<hr>
<meta charset="UTF-8">
<link rel="stylesheet" href="estilos.css">
```

No llevan etiqueta de cierre. La sintaxis con barra (`<br />`) es válida en XHTML pero opcional en HTML5. Por consistencia, se recomienda omitirla.

---

## Ejercicio: estructura semántica de un blog

Crea un documento HTML que represente la página de un artículo de blog. Debe incluir:

1. Un `<header>` con un `<nav>` que contenga tres enlaces: Inicio, Blog, Contacto
2. Un `<main>` con un `<article>` que contenga:
   - Un `<h1>` con el título del artículo
   - Dos `<section>`: una para el contenido y otra para los comentarios
3. Un `<aside>` con una lista de artículos relacionados
4. Un `<footer>` con copyright

Usa únicamente elementos semánticos — no uses `div`.

<details>
<summary><strong>Ver solución</strong></summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Artículo: CSS Grid en la práctica</title>
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
    <article>
      <h1>CSS Grid en la práctica</h1>

      <section>
        <p>CSS Grid es un sistema de layout bidimensional que permite organizar elementos en filas y columnas simultáneamente...</p>
      </section>

      <section>
        <h2>Comentarios</h2>
        <p>No hay comentarios todavía. Sé el primero en comentar.</p>
      </section>
    </article>

    <aside>
      <h2>Artículos relacionados</h2>
      <ul>
        <li>Flexbox vs. Grid: cuándo usar cada uno</li>
        <li>Animaciones CSS con @keyframes</li>
        <li>Custom Properties: variables nativas en CSS</li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 — Blog de tecnología</p>
  </footer>

</body>
</html>
```

</details>
