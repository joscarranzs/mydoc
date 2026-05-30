---
title: Párrafos
description: Etiqueta p y saltos de línea.
module: lenguajes/html
submodule: general
order: 8
---

Al completar esta guía podrás:

- Usar la etiqueta `<p>` para párrafos
- Insertar saltos de línea con `<br>`
- Entender cómo el navegador maneja los espacios
- Aplicar buenas prácticas de formato

---

## La etiqueta p

Define un párrafo de texto. Es la etiqueta más común para contenido narrativo, explicativo o informativo:

```html
<p>Este es un párrafo de texto en HTML.</p>
<p>Este es otro párrafo. El navegador añade espacio entre párrafos automáticamente.</p>
```

Cada `<p>` crea un bloque con margen superior e inferior. Por eso el navegador separa visualmente cada párrafo sin que tengas que agregar espacio manual.

---

## Saltos de línea

Usa `<br>` para saltos dentro del mismo párrafo. Es útil cuando la separación debe mantenerse dentro del mismo bloque de texto, como una dirección o un poema:

```html
<p>Primera línea<br>
Segunda línea<br>
Tercera línea</p>
```

`<br>` es un elemento vacío (no tiene etiqueta de cierre) y no debe usarse para crear espacio entre párrafos completos.

---

## Línea horizontal

`<hr>` crea una separación visual y suele marcar un cambio de tema o de sección:

```html
<p>Primera sección</p>
<hr>
<p>Segunda sección</p>
```

También es un elemento vacío. Su función es semántica y visual al mismo tiempo.

---

## Espacios en HTML

El navegador colapsa múltiples espacios y saltos de línea. Eso significa que el formato del archivo no siempre coincide con lo que se ve en pantalla:

```html
<!-- Todo esto se ve como una línea -->
<p>
  Esto      tiene    muchos      espacios
  y
  saltos
  de
  línea.
</p>

<!-- Para preservar espacios, usa &nbsp; cuando sea necesario -->
<p>Esto&nbsp;&nbsp;&nbsp;tiene&nbsp;tres&nbsp;espacios</p>

<!-- O la etiqueta pre -->
<pre>Esto   preserva
  los   espacios
  y saltos.</pre>
```

---

## pre

La etiqueta `<pre>` muestra el texto con formato predefinido. Conserva espacios, saltos de línea e indentación tal como están escritos:

```html
<pre>
  Línea 1:   con espacios
  Línea 2:   también respeta indentación
      Línea 3: con tabulación
</pre>
```

Ideal para código fuente, poesía o cualquier texto donde la distribución visual sea importante.

---

## Etiquetas de texto

Los párrafos pueden combinarse con otras etiquetas de texto para resaltar partes concretas sin romper la estructura:

```html
<p>
  <strong>Importante:</strong> este texto está en negrita.
  <em>Este texto está en cursiva.</em>
  <u>Este texto está subrayado.</u>
  <s>Este texto está tachado.</s>
</p>

<p>
  <small>Texto pequeño.</small>
  <mark>Texto resaltado.</mark>
  <del>Texto eliminado.</del>
  <ins>Texto insertado.</ins>
</p>
```

---

## Párrafos con imágenes

Una imagen puede ir dentro de un párrafo cuando forma parte del contenido en línea, aunque conviene usarlo solo si tiene sentido semántico:

```html
<p>
  <img src="icono.png" alt="Icono" width="20" height="20">
  Texto alineado con la imagen.
</p>

<p>
  Texto antes de la imagen.
  <br>
  <img src="foto.jpg" alt="Foto" style="max-width: 100%;">
  <br>
  Texto después de la imagen.
</p>
```

---

## Resumen

| Etiqueta | Función |
|---|---|
| `<p>` | Párrafo con margen automático |
| `<br>` | Salto de línea (vacío) |
| `<hr>` | Línea horizontal divisoria (vacío) |
| `<pre>` | Texto con formato preservado |

---

## Ejercicio

Crea una página con tres párrafos. El segundo debe tener dos saltos de línea y una palabra en negrita y otra en cursiva. Agrega una línea horizontal entre el segundo y tercer párrafo.

**Instrucciones paso a paso:**

1. Crea `parrafos.html`
2. Agrega tres párrafos con `<p>`
3. En el segundo párrafo, usa `<br>` dos veces
4. Usa `<strong>` y `<em>` en el segundo párrafo
5. Agrega `<hr>` entre el segundo y tercer párrafo

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Párrafos en HTML</title>
</head>
<body>
  <h1>Párrafos</h1>

  <p>Este es el primer párrafo. El navegador añade espacio entre párrafos automáticamente.</p>

  <p>
    Este es el segundo párrafo.<br>
    Contiene <strong>negrita</strong> y <em>cursiva</em>.<br>
    Y tiene tres líneas gracias a los saltos.
  </p>

  <hr>

  <p>Este es el tercer párrafo, después de la línea horizontal.</p>
</body>
</html>
```

</details>
