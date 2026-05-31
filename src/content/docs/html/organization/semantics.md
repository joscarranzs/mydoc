---
title: SEMÁNTICA
module: html
submodule: organization/semantics
---

HTML semántico es la práctica de usar elementos HTML según su significado, no según su apariencia visual. Un documento semántico comunica la estructura del contenido tanto a humanos como a máquinas.

```html
<!-- No semántico: todo son divs -->
<div class="titulo">Bienvenido</div>
<div class="contenido">...</div>

<!-- Semántico: cada elemento tiene significado -->
<h1>Bienvenido</h1>
<main>...</main>
```

## Beneficios del HTML semántico

- **Accesibilidad**: los lectores de pantalla navegan por elementos semánticos. Un usuario puede saltar de `<h1>` a `<h1>`, ir directamente a `<main>` o listar todos los enlaces de `<nav>`.
- **SEO**: los motores de búsqueda entienden mejor la jerarquía y relevancia del contenido.
- **Mantenibilidad**: el código semántico es más legible para otros desarrolladores.
- **Progreso técnico**: los navegadores pueden aplicar estilos por defecto apropiados y comportamientos específicos.

## Jerarquía semántica del documento

Cada página debe seguir una jerarquía lógica que refleje la organización del contenido:

```html
<body>
  <header>
    <nav>
      <a href="/">Inicio</a>
      <a href="/blog">Blog</a>
    </nav>
  </header>

  <main>
    <article>
      <h1>Título del artículo</h1>
      <section>
        <h2>Subtema 1</h2>
        <p>Contenido del subtema.</p>
      </section>
      <section>
        <h2>Subtema 2</h2>
        <p>Contenido del subtema.</p>
      </section>
    </article>

    <aside>
      <h2>Artículos relacionados</h2>
      <ul>
        <li><a href="/articulo-1">Artículo relacionado</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026</p>
  </footer>
</body>
```

## Principios fundamentales

- **Usa el elemento que mejor describa el contenido.** Si es navegación, `<nav>`. Si es un párrafo, `<p>`. Si es un encabezado, `<h1>`–`<h6>`.
- **No sacrifiques semántica por estilo.** Si necesitas que un `<h3>` se vea como un `<h2>`, cambia el CSS, no el elemento.
- **Un solo `<h1>` por página.** Representa el título o tema principal del documento.
- **`<main>` debe ser único.** Contiene el contenido principal y exclusivo de la página.
- **`<section>` necesita un encabezado.** Cada sección debe tener un `<h1>`–`<h6>` que la describa.
- **`<article>` es autocontenido.** Puede existir independientemente del resto de la página.

## Elementos semánticos clave

| Elemento | Significado |
|----------|-------------|
| `<header>` | Cabecera de una sección o del documento |
| `<nav>` | Bloque de navegación |
| `<main>` | Contenido principal único |
| `<article>` | Contenido autocontenido |
| `<section>` | Agrupación temática |
| `<aside>` | Contenido complementario |
| `<footer>` | Pie de sección o documento |
| `<figure>` | Contenido ilustrativo con leyenda |

## ARIA como complemento

ARIA (Accessible Rich Internet Applications) complementa la semántica HTML cuando esta no es suficiente. La regla de oro: **no usar ARIA si un elemento HTML nativo cumple la misma función**.

```html
<!-- Incorrecto: ARIA innecesario -->
<div role="button" tabindex="0" onclick="...">Enviar</div>

<!-- Correcto: elemento nativo -->
<button onclick="...">Enviar</button>
```

---

## Ejercicio: convertir divs a semántica

Reescribe el siguiente HTML usando elementos semánticos apropiados:

```html
<div class="pagina">
  <div class="cabecera">
    <div class="menu">
      <a href="/">Inicio</a>
      <a href="/productos">Productos</a>
    </div>
  </div>
  <div class="principal">
    <div class="entrada">
      <h1>Nuevo producto</h1>
      <p>Descripción del producto.</p>
    </div>
    <div class="lateral">
      <p>Publicidad</p>
    </div>
  </div>
  <div class="pie">
    <p>&copy; 2026</p>
  </div>
</div>
```

<details>
<summary><strong>Ver solución</strong></summary>

```html
<body>
  <header>
    <nav>
      <a href="/">Inicio</a>
      <a href="/productos">Productos</a>
    </nav>
  </header>

  <main>
    <article>
      <h1>Nuevo producto</h1>
      <p>Descripción del producto.</p>
    </article>

    <aside>
      <p>Publicidad</p>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026</p>
  </footer>
</body>
```

</details>
