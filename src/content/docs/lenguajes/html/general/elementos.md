---
title: Elementos
description: Etiquetas y elementos HTML.
module: lenguajes/html
submodule: general
order: 5
---

Al completar esta guía podrás:

- Identificar la sintaxis de un elemento HTML
- Diferenciar elementos de bloque y en línea
- Usar elementos vacíos correctamente
- Anidar elementos de forma válida

---

## Sintaxis

Un elemento HTML se compone de tres partes: una etiqueta de apertura, contenido y una etiqueta de cierre. Las etiquetas van entre signos de menor y mayor que.

```html
<tipo atributo="valor">Contenido</tipo>
```

```html
<p>Esto es un párrafo</p>
<a href="https://ejemplo.com">Esto es un enlace</a>
<h1>Encabezado principal</h1>
```

La etiqueta de cierre siempre lleva una barra `/` antes del nombre: `</p>`, `</a>`, `</h1>`.

---

## Elementos vacíos

Algunos elementos no tienen contenido ni etiqueta de cierre. Se escriben como una sola etiqueta, con un espacio y `/` antes del cierre:

```html
<!-- Salto de línea — fuerza un salto sin crear nuevo párrafo -->
<br>

<!-- Línea horizontal — separa secciones visualmente -->
<hr>

<!-- Imagen — muestra una imagen (el contenido es la imagen misma) -->
<img src="foto.jpg" alt="Descripción">

<!-- Entrada de formulario — campo de formulario -->
<input type="text" placeholder="Nombre">

<!-- Metadatos — información para el navegador -->
<meta charset="UTF-8">
```

Los elementos vacíos no pueden contener texto. `<br>texto</br>` no es válido.

---

## Atributos

Los atributos dan información adicional al elemento. Se escriben dentro de la etiqueta de apertura como pares `nombre="valor"`:

```html
<!-- class: identifica el elemento para CSS y JavaScript -->
<div id="principal" class="contenedor">Contenido</div>

<!-- src: obligatorio en img — indica la ruta de la imagen -->
<img src="imagen.jpg" alt="Descripción">

<!-- href: obligatorio en a — indica la URL de destino -->
<a href="https://ejemplo.com" target="_blank">Enlace</a>

<!-- Múltiples atributos en un elemento -->
<input type="email" name="correo" placeholder="tu@email.com" required>
```

---

## Elementos de bloque

Los elementos de bloque ocupan todo el ancho disponible y siempre comienzan en una nueva línea. Son como "bloques" que apilan verticalmente.

```html
<div>Bloque</div>       <!-- Contenedor genérico -->
<p>Párrafo</p>          <!-- Párrafo de texto -->
<h1>Encabezado</h1>     <!-- Encabezado de cualquier nivel -->
<ul><li>Lista</li></ul> <!-- Lista desordenada -->
<table>...</table>      <!-- Tabla -->
<header>...</header>    <!-- Cabecera semántica -->
<footer>...</footer>    <!-- Pie de página semántico -->
<section>...</section>  <!-- Sección de contenido -->
```

Los elementos de bloque no se mezclan en una línea. Si pones dos `<div>` seguidos, cada uno ocupará su propia línea.

---

## Elementos en línea

Los elementos en línea solo ocupan el espacio necesario para su contenido. Fluyen con el texto y no fuerzan saltos de línea.

```html
<span>Texto</span>        <!-- Contenedor genérico en línea -->
<a href="#">Enlace</a>     <!-- Enlace -->
<strong>Negrita</strong>   <!-- Énfasis fuerte -->
<em>Cursiva</em>           <!-- Énfasis moderado -->
<img src="" alt="">        <!-- Imagen (vacío) -->
<code>código</code>        <!-- Código en línea -->
```

Los elementos en línea pueden estar dentro de párrafos o dentro de otros elementos en línea. `<p>Hola <strong>mundo</strong></p>` es válido.

---

## Anidamiento

Los elementos pueden contener otros elementos. Esto crea una jerarquía de padres e hijos:

```html
<!-- Válido — el strong está dentro del p, que está dentro del div -->
<div>
  <p>Texto con <strong>negrita</strong> y <a href="#">enlace</a>.</p>
</div>
```

Hay reglas que debes seguir:

- **No cruzar etiquetas** — Los hijos deben cerrarse antes que los padres
- **No poner bloques dentro de enlaces** — Un `<div>` dentro de un `<a>` no es válido
- **Cerrar todas las etiquetas** — Cada etiqueta de apertura necesita su cierre

```html
<!-- Inválido — etiquetas cruzadas -->
<p><strong>Texto</p></strong>

<!-- Inválido — block dentro de inline -->
<span><div>No se puede</div></span>
```

---

## Comentarios

Los comentarios no se muestran en el navegador. Son útiles para documentar tu código o dejar notas:

```html
<!-- Esto es un comentario -->

<!-- 
  Comentario
  de varias
  líneas
-->

<!-- TODO: agregar sección de productos -->
<!-- FIXME: la imagen no carga en Safari -->
```

---

## Resumen

| Concepto | Descripción |
|---|---|
| Elemento | Etiqueta de apertura + contenido + cierre |
| Vacío | Sin contenido ni cierre (br, hr, img, input) |
| Bloque | Ocupa todo el ancho, nueva línea (div, p, h1) |
| En línea | Solo su contenido, fluye con texto (span, a, strong) |
| Atributo | Modifica el elemento (id, class, src, href) |
| Anidamiento | Elementos dentro de elementos |

---

## Ejercicio

Crea un documento que contenga un encabezado, un párrafo con texto formateado (negrita, cursiva, enlace), una imagen y una línea horizontal.

**Instrucciones paso a paso:**

1. Crea `elementos.html`
2. Agrega `<h1>` con un título
3. Dentro de un `<p>`, usa `<strong>`, `<em>` y `<a>`
4. Agrega `<img>` con src y alt
5. Agrega `<hr>` para separar
6. Abre en el navegador

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Elementos HTML</title>
</head>
<body>
  <h1>Elementos HTML</h1>

  <p>
    Este es un texto con <strong>negrita</strong>,
    <em>cursiva</em> y un
    <a href="https://ejemplo.com">enlace</a>.
  </p>

  <img src="https://via.placeholder.com/200" alt="Imagen de ejemplo">

  <hr>

  <p>Segunda sección después de la línea horizontal.</p>
</body>
</html>
```

</details>
