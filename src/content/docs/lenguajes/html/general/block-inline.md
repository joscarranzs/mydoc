---
title: Block e inline
description: Elementos de bloque y en línea.
module: lenguajes/html
submodule: general
order: 21
---

Al completar esta guía podrás:

- Diferenciar elementos de bloque y en línea
- Elegir el tipo de elemento adecuado
- Cambiar el comportamiento con CSS
- Evitar errores comunes de anidamiento

---

## Elementos de bloque

Ocupan todo el ancho disponible y empiezan en nueva línea. Suelen usarse para agrupar secciones o párrafos completos:

```html
<div>Bloque</div>
<p>Párrafo</p>
<h1>Encabezado</h1>
<ul><li>Lista</li></ul>
<header>Header</header>
<section>Sección</section>
<footer>Footer</footer>
<table>Tabla</table>
<form>Formulario</form>
```

---

## Elementos en línea

Ocupan solo el ancho necesario y fluyen con el texto. Son ideales para contenido pequeño dentro de frases:

```html
<span>Texto</span>
<a href="#">Enlace</a>
<strong>Negrita</strong>
<em>Cursiva</em>
<img src="" alt="">
<br>
<code>código</code>
<button>Botón</button>
<label>Etiqueta</label>
<input type="text">
```

---

## Comportamiento visual

La diferencia se ve mejor cuando los colocas uno junto a otro:

```html
<!-- Elementos de bloque: cada uno en su propia línea -->
<div style="background: lightblue;">Bloque 1</div>
<div style="background: lightgreen;">Bloque 2</div>
<div style="background: lightyellow;">Bloque 3</div>

<br>

<!-- Elementos en línea: fluyen en la misma línea -->
<span style="background: lightblue;">Inline 1</span>
<span style="background: lightgreen;">Inline 2</span>
<span style="background: lightyellow;">Inline 3</span>
```

---

## Anidamiento correcto

Las reglas de anidamiento suelen ser simples: los elementos de bloque contienen bien a los en línea, pero no siempre al revés.

```html
<!-- Correcto: block contiene inline -->
<div>
  <span>Texto</span>
  <a href="#">Enlace</a>
</div>

<!-- Correcto: inline dentro de block -->
<p>Esto es un <strong>texto importante</strong>.</p>

<!-- Correcto: inline contiene inline -->
<span><strong>Texto</strong> <em>enfatizado</em></span>
```

---

## Anidamiento incorrecto

Si rompes estas reglas, el navegador puede corregir el HTML, pero el resultado será impredecible o semánticamente incorrecto.

```html
<!-- Incorrecto: inline contiene block -->
<span>
  <div>No debe hacerse</div>
</span>

<!-- Incorrecto: p contiene div -->
<p>
  <div>Div dentro de p es inválido</div>
</p>

<!-- Incorrecto: a contiene block -->
<a href="#">
  <div>Enlace con bloque dentro</div>
</a>
```

---

## display con CSS

Se puede cambiar el comportamiento con CSS. Esto es útil cuando quieres adaptar un elemento sin cambiar su etiqueta:

```html
<style>
  .inline-block {
    display: inline-block;
    width: 200px;
  }
  .block-to-inline {
    display: inline;
  }
  .inline-to-block {
    display: block;
  }
</style>

<!-- inline-block: combina lo mejor de ambos -->
<div class="inline-block" style="background: lightblue;">
  inline-block 1
</div>
<div class="inline-block" style="background: lightgreen;">
  inline-block 2
</div>
```

---

## display: none vs visibility: hidden

Ambas opciones ocultan elementos, pero no hacen lo mismo. Una elimina el espacio y la otra lo conserva:

```html
<!-- invisible y no ocupa espacio -->
<div style="display: none;">No se ve ni ocupa espacio</div>

<!-- invisible pero ocupa espacio -->
<div style="visibility: hidden;">No se ve pero ocupa su lugar</div>

<!-- visible -->
<div>Este elemento se ve normalmente</div>
```

---

## Resumen

Cuando tengas dudas, piensa en el flujo del contenido: bloque para agrupar, inline para acompañar texto, inline-block para casos intermedios.

| Característica | Bloque | En línea | inline-block |
|---|---|---|---|
| Nueva línea | Sí | No | No |
| Ancho | 100% del padre | Solo el contenido | Según width |
| height | Según contenido | No aplica | Según height |
| padding/margin vertical | Respeta | No respeta | Respeta |
| Puede contener block | Sí | No | No |

---

## Ejercicio

Crea una página que muestre tres divs en línea (usando inline-block) simulando tarjetas, y un párrafo con elementos inline (strong, em, a) para demostrar la diferencia.

**Instrucciones paso a paso:**

1. Crea `block-inline.html`
2. Crea tres divs con display inline-block, mismo alto y ancho
3. Agrega un párrafo con strong, em y a
4. Observa la diferencia en el navegador

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Block e inline</title>
  <style>
    .tarjeta {
      display: inline-block;
      width: 150px;
      height: 100px;
      margin: 10px;
      padding: 16px;
      border-radius: 8px;
      text-align: center;
      vertical-align: top;
    }
  </style>
</head>
<body>
  <h1>Block e inline</h1>

  <h2>Elementos inline-block</h2>
  <div class="tarjeta" style="background: #e8f0fe;">
    Tarjeta 1
  </div>
  <div class="tarjeta" style="background: #e6f4ea;">
    Tarjeta 2
  </div>
  <div class="tarjeta" style="background: #fce8e6;">
    Tarjeta 3
  </div>

  <h2>Elementos inline dentro de un párrafo</h2>
  <p>
    Este párrafo contiene <strong>texto en negrita</strong>,
    <em>texto en cursiva</em> y
    <a href="#">un enlace inline</a>
    que fluyen con el texto.
  </p>
</body>
</html>
```

</details>
