---
title: DIV
module: html
submodule: organization/div
---

El elemento `<div>` (division) es el contenedor genérico por excelencia. No tiene significado semántico propio: es un bloque neutro que existe únicamente para agrupar contenido con fines de estilo o manipulación mediante JavaScript.

```html
<div class="contenedor">
  <div class="cabecera">
    <h1>Título</h1>
  </div>
  <div class="cuerpo">
    <p>Contenido principal.</p>
  </div>
</div>
```

## Cuándo usar `<div>`

El `<div>` es apropiado cuando ningún elemento semántico existente se ajusta al propósito del grupo:

- **Agrupación para CSS**: cuando necesitas aplicar estilos a un conjunto de elementos y no hay un elemento semántico que represente esa agrupación.
- **Contenedor de layout**: para crear columnas, filas, espaciadores o wrappers de diseño.
- **Target de JavaScript**: cuando necesitas un elemento sin significado para manipularlo mediante scripts.
- **Contenido temporal o decorativo**: agrupaciones sin relevancia semántica.

```html
<!-- Uso apropiado: wrapper de layout -->
<div class="grid-columnas">
  <div class="columna-izquierda">
    <!-- contenido -->
  </div>
  <div class="columna-derecha">
    <!-- contenido -->
  </div>
</div>

<!-- Uso apropiado: contenedor para JavaScript -->
<div id="app-root"></div>
```

## Cuándo NO usar `<div>`

El abuso de `<div>` se conoce como _divitis_: una jerarquía de contenedores sin significado que dificulta la lectura, el mantenimiento y la accesibilidad.

```html
<!-- Incorrecto: usar div donde existen elementos semánticos -->
<div class="navegacion">
  <div class="enlace">Inicio</div>
  <div class="enlace">Blog</div>
</div>
<div class="contenido-principal">
  <div class="titulo">Bienvenido</div>
  <div class="texto">Texto de bienvenida.</div>
</div>

<!-- Correcto: usar elementos semánticos -->
<nav>
  <a href="/">Inicio</a>
  <a href="/blog">Blog</a>
</nav>
<main>
  <h1>Bienvenido</h1>
  <p>Texto de bienvenida.</p>
</main>
```

## `<div>` y accesibilidad

Un `<div>` no aporta información a los lectores de pantalla. Si el grupo de contenido tiene un significado (navegación, contenido principal, sección, complemento), debe usarse el elemento semántico correspondiente. Los `<div>`s sin clase ni id son ignorados por las tecnologías de asistencia, lo que los hace _invisibles_ en el árbol de accesibilidad.

---

## Ejercicio: refactorizar divs en semántica

Reescribe el siguiente HTML reemplazando los `<div>` por elementos semánticos apropiados:

```html
<div class="encabezado">
  <div class="menu">
    <a href="/">Inicio</a>
    <a href="/blog">Blog</a>
  </div>
</div>
<div class="principal">
  <div class="articulo">
    <h1>Título del artículo</h1>
    <p>Contenido...</p>
  </div>
  <div class="sidebar">
    <p>Información relacionada.</p>
  </div>
</div>
<div class="pie">
  <p>&copy; 2026</p>
</div>
```

<details>
<summary><strong>Ver solución</strong></summary>

```html
<header>
  <nav>
    <a href="/">Inicio</a>
    <a href="/blog">Blog</a>
  </nav>
</header>
<main>
  <article>
    <h1>Título del artículo</h1>
    <p>Contenido...</p>
  </article>
  <aside>
    <p>Información relacionada.</p>
  </aside>
</main>
<footer>
  <p>&copy; 2026</p>
</footer>
```

</details>
