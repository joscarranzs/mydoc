---
title: SECTION
module: html
submodule: organization/section
---

El elemento `<section>` agrupa contenido temáticamente relacionado dentro de un documento. Cada sección debería comenzar con un encabezado que describa su tema.

```html
<section>
  <h2>Instalación</h2>
  <p>Pasos para instalar el software...</p>
</section>
```

## Cuándo usar `<section>`

Una `<section>` agrupa contenido que forma una unidad temática coherente:

```html
<main>
  <section>
    <h2>Características del producto</h2>
    <ul>
      <li>Batería de 10 horas</li>
      <li>Conectividad Bluetooth 5.3</li>
      <li>Cancelación de ruido activa</li>
    </ul>
  </section>

  <section>
    <h2>Especificaciones técnicas</h2>
    <table>
      <tr><td>Peso</td><td>250g</td></tr>
      <tr><td>Dimensiones</td><td>15x8x3 cm</td></tr>
    </table>
  </section>
</main>
```

La regla general: si el contenido merece un encabezado en el esquema del documento, probablemente debería ir dentro de una `<section>`.

## `<section>` vs. `<article>`

La diferencia fundamental es el nivel de independencia:

- `<article>` — contenido autocontenido que podría sindicarse o distribuirse independientemente (un post, una noticia, un comentario).
- `<section>` — agrupación temática que forma parte de un todo mayor.

Un `<article>` puede contener múltiples `<section>`:

```html
<article>
  <h1>Guía completa de CSS Grid</h1>

  <section>
    <h2>Introducción</h2>
    <p>CSS Grid es un sistema de layout bidimensional...</p>
  </section>

  <section>
    <h2>Propiedades del contenedor</h2>
    <p>El contenedor grid se define con display: grid...</p>
  </section>

  <section>
    <h2>Ejemplos prácticos</h2>
    <p>A continuación se muestran ejemplos...</p>
  </section>
</article>
```

## `<section>` sin encabezado

Una `<section>` sin encabezado no tiene valor semántico. Si no hay un encabezado natural para el grupo, probablemente un `<div>` es más apropiado:

```html
<!-- Incorrecto: section sin encabezado -->
<section>
  <img src="foto.jpg" alt="Foto">
  <p>Descripción de la foto.</p>
</section>

<!-- Correcto: div para agrupación genérica -->
<div class="tarjeta">
  <img src="foto.jpg" alt="Foto">
  <p>Descripción de la foto.</p>
</div>
```

---

## Ejercicio: página de producto con secciones

Crea la estructura HTML de una página de producto que contenga tres `<section>`:

1. "Descripción del producto" con un párrafo
2. "Características" con una lista
3. "Opiniones de clientes" con dos reseñas (cada reseña en un `<article>`)

<details>
<summary><strong>Ver solución</strong></summary>

```html
<main>
  <h1>Auriculares Bluetooth Pro</h1>

  <section>
    <h2>Descripción del producto</h2>
    <p>Auriculares inalámbricos con cancelación de ruido activa y batería de larga duración. Ideales para trabajo remoto y entretenimiento.</p>
  </section>

  <section>
    <h2>Características</h2>
    <ul>
      <li>Cancelación de ruido activa (ANC)</li>
      <li>Bluetooth 5.3 con multipunto</li>
      <li>Batería: 40 horas de reproducción</li>
      <li>Carga rápida USB-C</li>
    </ul>
  </section>

  <section>
    <h2>Opiniones de clientes</h2>

    <article>
      <h3>Excelente calidad</h3>
      <p>Los uso todos los días para trabajar y la cancelación de ruido es impresionante.</p>
      <p>— Ana M.</p>
    </article>

    <article>
      <h3>Buena relación calidad-precio</h3>
      <p>Los compré en oferta y no me arrepiento. La batería dura muchísimo.</p>
      <p>— Carlos R.</p>
    </article>
  </section>
</main>
```

</details>
