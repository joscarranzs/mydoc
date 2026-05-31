---
title: GUÍA DE ESTILO
module: html
submodule: organization/style-guide
---

Una guía de estilo HTML establece las convenciones que un equipo de desarrollo sigue al escribir marcado. El objetivo es mantener el código limpio, consistente y predecible a lo largo del proyecto.

## Sintaxis general

- Usar **minúsculas** para todos los elementos y atributos.
- Usar **comillas dobles** en los valores de los atributos.
- Cerrar siempre los elementos que no son void (`<p>...</p>`, no `<p>` solo).
- Incluir el atributo `alt` en todas las imágenes.

```html
<!-- Correcto -->
<img src="logo.png" alt="Logotipo" class="header-logo">
<a href="/contacto" class="nav-link">Contacto</a>

<!-- Incorrecto -->
<A HREF='/contacto' class=nav-link>Contacto</A>
<img src="logo.png">
```

## Indentación

- Usar **2 espacios** por nivel de indentación. No usar tabs.
- Anidar los elementos hijos un nivel respecto a su padre.

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
      <h1>Título</h1>
      <p>Contenido.</p>
    </article>
  </main>
</body>
```

## Elementos vacíos (void)

No incluir la barra de cierre en elementos void:

```html
<!-- Correcto -->
<br>
<hr>
<img src="foto.jpg" alt="Foto">
<input type="text">

<!-- Incorrecto (estilo XHTML) -->
<br />
<hr />
<img src="foto.jpg" alt="Foto" />
```

## Atributos

- Colocar cada atributo en su propia línea cuando hay más de dos:

```html
<img
  src="foto.jpg"
  alt="Descripción"
  width="800"
  height="500"
  loading="lazy"
>
```

- Atributos booleanos sin valor:

```html
<input type="text" required disabled readonly>
<button disabled>Enviar</button>
```

## Elementos semánticos primero

Preferir elementos semánticos sobre `<div>` siempre que sea posible:

```html
<!-- Preferir -->
<nav>...</nav>
<main>...</main>
<article>...</article>

<!-- Evitar cuando existe alternativa semántica -->
<div class="nav">...</div>
<div class="main">...</div>
```

## Orden de los atributos

Consistencia en el orden de los atributos mejora la legibilidad:

1. `class`
2. `id`
3. Atributos de datos (`data-*`)
4. Atributos específicos del elemento (`src`, `href`, `type`)
5. Atributos de accesibilidad (`alt`, `aria-*`, `role`)
6. Atributos de evento (`onclick`, `onchange`)

```html
<a
  class="btn btn-primary"
  id="btn-enviar"
  data-action="submit"
  href="/enviar"
  aria-label="Enviar formulario"
>
  Enviar
</a>
```

## Comentarios

Usar comentarios para documentar secciones, pero no abusar:

```html
<!-- ========== HEADER ========== -->
<header>...</header>

<!-- ========== MAIN CONTENT ========== -->
<main>...</main>
```

Evitar comentarios obvios que no aportan información.

---

## Ejercicio: aplicar la guía de estilo

Reescribe el siguiente HTML siguiendo las convenciones de la guía de estilo:

```HTML
<DIV class=contenedor>
<DIV class=header>
<H1>Bienvenido</H1>
</DIV>
<DIV class=body>
<P>Este es un párrafo.</P>
<BR/>
<IMG SRC='foto.jpg'alt=Foto/>
</DIV>
</DIV>
```

<details>
<summary><strong>Ver solución</strong></summary>

```html
<div class="contenedor">
  <div class="header">
    <h1>Bienvenido</h1>
  </div>
  <div class="body">
    <p>Este es un párrafo.</p>
    <br>
    <img src="foto.jpg" alt="Foto">
  </div>
</div>
```

Principales correcciones:
- Elementos en minúsculas
- Comillas dobles en atributos
- `br` sin barra de cierre
- `alt` en la imagen con valor descriptivo
- Indentación de 2 espacios

</details>
