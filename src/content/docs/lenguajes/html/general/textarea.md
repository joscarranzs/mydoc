---
title: Textarea
description: Área de texto multilínea.
module: lenguajes/html
submodule: general
order: 46
---

Al completar esta guía podrás:

- Crear áreas de texto con textarea
- Configurar filas y columnas
- Usar placeholder, maxlength y readonly
- Redimensionar con CSS

---

## Sintaxis básica

```html
<label for="mensaje">Mensaje:</label>
<textarea id="mensaje" name="mensaje"></textarea>
```

A diferencia de `<input>`, `<textarea>` tiene etiqueta de cierre.

---

## rows y cols

Controlan el tamaño visible:

```html
<textarea name="comentario" rows="4" cols="50">
  Texto por defecto aquí.
</textarea>
```

- `rows`: número de líneas visibles
- `cols`: ancho en caracteres (obsoleto, usar CSS)

---

## placeholder

```html
<textarea
  name="mensaje"
  placeholder="Escribe tu mensaje aquí..."
  rows="4"
></textarea>
```

---

## maxlength

Límite de caracteres:

```html
<textarea
  name="bio"
  maxlength="200"
  rows="3"
  placeholder="Máximo 200 caracteres"
></textarea>
```

El texto sobrante no se puede escribir.

---

## readonly

Solo lectura (el usuario no puede modificar):

```html
<textarea name="terminos" rows="6" readonly>
Términos y condiciones del servicio.
Al usar este sitio aceptas...
</textarea>
```

---

## disabled

Deshabilitado (no se envía, no se edita):

```html
<textarea name="comentario" disabled>
Este campo está deshabilitado.
</textarea>
```

---

## wrap

Controla el salto de línea:

```html
<!-- soft: no envía saltos de línea (defecto) -->
<textarea wrap="soft"></textarea>

<!-- hard: envía saltos de línea -->
<textarea wrap="hard" cols="40"></textarea>

<!-- off: sin salto de línea horizontal -->
<textarea wrap="off"></textarea>
```

---

## Redimensionar con CSS

```html
<style>
  textarea {
    width: 100%;
    min-height: 100px;
    max-height: 300px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    box-sizing: border-box;
    resize: vertical; /* vertical, horizontal, both, none */
  }
</style>
```

---

## Contador de caracteres con JavaScript

```html
<label for="comentario">Comentario:</label>
<textarea
  id="comentario"
  name="comentario"
  maxlength="150"
  rows="4"
  oninput="actualizarContador()"
></textarea>
<p id="contador">0 / 150</p>

<script>
  function actualizarContador() {
    const textarea = document.getElementById('comentario');
    const contador = document.getElementById('contador');
    contador.textContent = textarea.value.length + ' / ' + textarea.maxLength;
  }
</script>
```

---

## Resumen

| Atributo | Descripción |
|---|---|
| `rows` | Número de filas visibles |
| `cols` | Ancho en caracteres |
| `placeholder` | Texto de ayuda |
| `maxlength` | Máximo de caracteres |
| `readonly` | Solo lectura |
| `disabled` | Deshabilitado |
| `wrap` | Comportamiento de saltos |

---

## Ejercicio

Crea un formulario de comentarios con: textarea con placeholder, maxlength, contador de caracteres con JavaScript, y estilos CSS (ancho completo, min-height 100px, resize vertical).

**Instrucciones paso a paso:**

1. Crea `textarea.html`
2. Crea textarea con rows, placeholder y maxlength
3. Agrega contador con oninput
4. Estiliza con CSS (width 100%, resize)

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Textarea</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 500px; margin: 20px auto; }
    label { display: block; margin-top: 12px; }
    textarea {
      width: 100%;
      min-height: 100px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
      box-sizing: border-box;
      resize: vertical;
    }
    #contador { color: #666; font-size: 0.85em; margin-top: 4px; }
    button { margin-top: 12px; padding: 10px 24px; background: #1A73E8; color: white; border: none; border-radius: 4px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Textarea</h1>

  <form action="/procesar" method="post">
    <label for="comentario">Comentario:</label>
    <textarea
      id="comentario"
      name="comentario"
      rows="5"
      placeholder="Escribe tu comentario aquí..."
      maxlength="200"
      oninput="actualizarContador()"
    ></textarea>
    <p id="contador">0 / 200</p>

    <button type="submit">Enviar comentario</button>
  </form>

  <script>
    function actualizarContador() {
      const textarea = document.getElementById('comentario');
      const contador = document.getElementById('contador');
      const restantes = textarea.maxLength - textarea.value.length;
      contador.textContent = textarea.value.length + ' / ' + textarea.maxLength;
      contador.style.color = restantes < 20 ? '#d93025' : '#666';
    }
  </script>
</body>
</html>
```

</details>
