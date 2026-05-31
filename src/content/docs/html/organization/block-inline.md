---
title: BLOQUE Y EN LÍNEA
module: html
submodule: organization/block-inline
---

Todo elemento HTML tiene un comportamiento de visualización por defecto que determina cómo se posiciona en el flujo del documento. Las dos categorías fundamentales son **block** y **inline**, y de su correcta comprensión dependen la maquetación y el comportamiento del layout.

## Elementos block

Los elementos block ocupan todo el ancho disponible de su contenedor y comienzan en una nueva línea. Apilan el contenido verticalmente.

```html
<div>Bloque 1</div>
<div>Bloque 2</div>
<div>Bloque 3</div>
<!-- Cada div ocupa el ancho completo y se apila verticalmente -->
```

Características:
- Ocupan el 100% del ancho del contenedor padre por defecto.
- Generan un salto de línea antes y después.
- Aceptan width, height, margin y padding en todas las direcciones.
- Pueden contener otros elementos block e inline.

Elementos block representativos: `<div>`, `<p>`, `<h1>`–`<h6>`, `<ul>`, `<ol>`, `<li>`, `<table>`, `<form>`, `<header>`, `<footer>`, `<section>`, `<article>`, `<main>`, `<aside>`, `<nav>`, `<blockquote>`, `<pre>`.

## Elementos inline

Los elementos inline fluyen dentro de la línea de texto sin interrumpir el flujo. Ocupan solo el espacio necesario para su contenido.

```html
<p>
  Este <strong>texto</strong> contiene elementos <em>inline</em>
  que <a href="#">fluyen</a> dentro del párrafo.
</p>
```

Características:
- Ocupan solo el ancho de su contenido.
- No generan saltos de línea.
- No aceptan width ni height (sus dimensiones las define el contenido).
- Aceptan margin y padding horizontal, pero el vertical no desplaza el contenido circundante.
- Solo pueden contener otros elementos inline.

Elementos inline representativos: `<span>`, `<strong>`, `<em>`, `<a>`, `<code>`, `<img>` (técnicamente inline-replaced), `<input>`, `<label>`, `<abbr>`, `<cite>`, `<q>`, `<small>`, `<sub>`, `<sup>`, `<b>`, `<i>`, `<u>`, `<mark>`.

## Elementos inline-block

Un tercer comportamiento híbrido: fluyen en línea como inline pero aceptan dimensiones como block.

```css
.inline-block {
  display: inline-block;
}
```

```html
<button>Botón 1</button>
<button>Botón 2</button>
<button>Botón 3</button>
<!-- Los botones se alinean horizontalmente pero respetan width y height -->
```

Útil para elementos que deben alinearse horizontalmente manteniendo control sobre sus dimensiones.

## La propiedad `display`

La propiedad CSS `display` permite cambiar el comportamiento de cualquier elemento:

```css
/* Convertir un inline en block */
span { display: block; }

/* Convertir un block en inline */
div { display: inline; }

/* Comportamiento híbrido */
button { display: inline-block; }

/* Ocultar un elemento */
.hidden { display: none; }
```

Cambiar el display de un elemento no altera su semántica. Un `<span>` con `display: block` sigue siendo un span semánticamente, aunque visualmente se comporte como un div.

---

## Ejercicio: elementos en una tarjeta de producto

Identifica si cada elemento de la siguiente tarjeta es block, inline o inline-block, y explica brevemente por qué:

```html
<div class="tarjeta">
  <h2>Auriculares Bluetooth</h2>
  <img src="producto.jpg" alt="Auriculares">
  <p>Precio: <strong>$49.99</strong></p>
  <button>Añadir al carrito</button>
</div>
```

<details>
<summary><strong>Ver solución</strong></summary>

- `<div>` — **block**: contenedor genérico que ocupa todo el ancho.
- `<h2>` — **block**: encabezado que genera salto de línea.
- `<img>` — **inline** (replaced): fluye en línea pero acepta dimensiones.
- `<p>` — **block**: párrafo que ocupa el ancho completo.
- `<strong>` — **inline**: énfasis que fluye dentro del párrafo.
- `<button>` — **inline-block**: se alinea en línea pero acepta width/height.

</details>
