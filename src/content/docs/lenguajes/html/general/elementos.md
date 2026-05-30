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

Un elemento HTML tiene etiqueta de apertura, contenido y etiqueta de cierre:

```html
<tipo atributo="valor">Contenido</tipo>
```

```html
<p>Esto es un párrafo</p>
<a href="https://ejemplo.com">Esto es un enlace</a>
<h1>Encabezado principal</h1>
```

---

## Elementos vacíos

No tienen contenido ni etiqueta de cierre:

```html
<!-- Salto de línea -->
<br>

<!-- Línea horizontal -->
<hr>

<!-- Imagen -->
<img src="foto.jpg" alt="Descripción">

<!-- Entrada de formulario -->
<input type="text" placeholder="Nombre">

<!-- Metadatos -->
<meta charset="UTF-8">
```

---

## Atributos

Modifican el comportamiento o apariencia del elemento:

```html
<!-- Atributos comunes -->
<div id="principal" class="contenedor">Contenido</div>

<!-- Atributo src obligatorio en img -->
<img src="imagen.jpg" alt="Descripción">

<!-- Atributo href obligatorio en a -->
<a href="https://ejemplo.com" target="_blank">Enlace</a>

<!-- Múltiples atributos -->
<input type="email" name="correo" placeholder="tu@email.com" required>
```

---

## Elementos de bloque

Ocupan todo el ancho disponible y comienzan en nueva línea:

```html
<div>Bloque</div>
<p>Párrafo</p>
<h1>Encabezado</h1>
<ul><li>Lista</li></ul>
<table>...</table>
<header>...</header>
<footer>...</footer>
<section>...</section>
```

---

## Elementos en línea

Ocupan solo el espacio necesario y fluyen con el texto:

```html
<span>Texto</span>
<a href="#">Enlace</a>
<strong>Negrita</strong>
<em>Cursiva</em>
<img src="" alt="">
<br>
<code>código</code>
```

---

## Anidamiento

Los elementos pueden contener otros elementos:

```html
<!-- Válido -->
<div>
  <p>Texto con <strong>negrita</strong> y <a href="#">enlace</a>.</p>
</div>

<!-- Inválido — etiquetas cruzadas -->
<p><strong>Texto</p></strong>

<!-- Inválido — block dentro de inline -->
<span><div>No se puede</div></span>
```

---

## Comentarios

No se muestran en el navegador:

```html
<!-- Esto es un comentario -->

<!-- 
  Comentario
  de varias
  líneas
-->

<!-- TODO: agregar sección de productos -->
```

---

## Resumen

| Concepto | Descripción |
|---|---|
| Elemento | Etiqueta de apertura + contenido + cierre |
| Vacío | Sin contenido ni cierre (br, hr, img, input) |
| Bloque | Ocupa todo el ancho, nueva línea |
| En línea | Ocupa solo su contenido, fluye con texto |
| Atributo | Modifica el elemento (id, class, src) |
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
