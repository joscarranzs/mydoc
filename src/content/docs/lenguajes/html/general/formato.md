---
title: Formato
description: Negrita, cursiva, subrayado.
module: lenguajes/html
submodule: general
order: 10
---

Al completar esta guía podrás:

- Aplicar formato semántico al texto
- Diferenciar etiquetas de formato físico y semántico
- Usar strong, em, mark, small, del, ins
- Combinar formatos correctamente

---

## Formato básico

HTML distingue entre formato visual y formato semántico. La diferencia importa porque no todo lo que se ve igual significa lo mismo para el navegador o un lector de pantalla.

```html
<p><b>Texto en negrita</b> (físico)</p>
<p><strong>Texto importante</strong> (semántico)</p>

<p><i>Texto en cursiva</i> (físico)</p>
<p><em>Texto enfatizado</em> (semántico)</p>

<p><u>Texto subrayado</u></p>
<p><s>Texto tachado</s></p>
```

---

## strong vs b

`<strong>` indica importancia real del contenido. `<b>` solo cambia el aspecto visual:

```html
<p><strong>Advertencia:</strong> este paso es obligatorio.</p>
<p>Este producto tiene <b>20%</b> de descuento.</p>
```

Los lectores de pantalla suelen enfatizar `<strong>` pero no `<b>`. Por eso conviene usar `strong` cuando el texto realmente aporta relevancia.

---

## em vs i

`<em>` indica énfasis real, mientras que `<i>` solo cambia el estilo tipográfico:

```html
<p>Debes <em>terminar</em> el proyecto antes del viernes.</p>
<p>El término <i>software</i> fue acuñado en 1958.</p>
```

`<i>` suele ser útil para palabras extranjeras, nombres científicos o términos técnicos cuando solo necesitas cursiva.

---

## mark

Texto resaltado, como con marcador fluorescente. Sirve para señalar coincidencias o partes relevantes del contenido:

```html
<p>
  El texto <mark>resaltado</mark> llama la atención del lector.
</p>
<p>
  Buscar: <mark>HTML</mark> en este párrafo aparece
  <mark>HTML</mark> dos veces.
</p>
```

---

## small

Texto de nota legal, aclaración o comentario secundario:

```html
<p>Precio: $19.99 <small>(impuestos no incluidos)</small></p>

<footer>
  <small>&copy; 2024 Mi Sitio. Todos los derechos reservados.</small>
</footer>
```

---

## del e ins

Texto eliminado e insertado. Es muy útil para mostrar revisiones, cambios de precios o ediciones de contenido:

```html
<p>
  Precio anterior: <del>$29.99</del>
  Precio actual: <ins>$19.99</ins>
</p>

<p>
  El evento es el <del>lunes</del> <ins>miércoles</ins>.
</p>
```

---

## sub y sup

Subíndice y superíndice. Se usan en química, matemáticas y notación especial:

```html
<p>Fórmula del agua: H<sub>2</sub>O</p>
<p>Notación científica: 10<sup>3</sup> = 1000</p>
<p>Fecha: 15<sup>o</sup> de marzo</p>
```

---

## Combinar formatos

Las etiquetas de formato pueden anidarse cuando el significado lo justifica:

```html
<p>
  <strong><em>Texto importante y enfatizado</em></strong>
</p>

<p>
  <mark><strong>Resaltado importante</strong></mark>
</p>

<p>
  <del><ins>Cambio dentro de cambio</ins></del>
</p>
```

---

## Resumen

| Etiqueta | Significado | Uso |
|---|---|---|
| `<strong>` | Importancia | Semántico, lectores de pantalla |
| `<em>` | Énfasis | Semántico, lectores de pantalla |
| `<b>` | Negrita | Visual solamente |
| `<i>` | Cursiva | Visual, palabras extranjeras |
| `<mark>` | Resaltado | Llamar atención |
| `<small>` | Nota secundaria | Letra pequeña |
| `<del>` | Eliminado | Tachado |
| `<ins>` | Insertado | Subrayado nuevo |
| `<sub>` | Subíndice | Fórmulas químicas |
| `<sup>` | Superíndice | Exponentes |

---

## Ejercicio

Crea un párrafo que incluya: una palabra importante (strong), una palabra enfatizada (em), una palabra resaltada (mark), un texto eliminado (del) y un texto insertado (ins).

**Instrucciones paso a paso:**

1. Crea `formato.html`
2. Agrega un `<h1>` con título
3. Escribe un `<p>` que use strong, em, mark, del e ins
4. Agrega un ejemplo de sub y sup
5. Abre en el navegador

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Formato de texto</title>
</head>
<body>
  <h1>Formato de texto en HTML</h1>

  <p>
    Este texto contiene una parte <strong>importante</strong>,
    una palabra <em>enfatizada</em> y un término
    <mark>resaltado</mark>. También muestra un cambio:
    <del>versión antigua</del> <ins>versión nueva</ins>.
  </p>

  <p>
    Fórmulas: H<sub>2</sub>O y 10<sup>3</sup>.
  </p>
</body>
</html>
```

</details>
