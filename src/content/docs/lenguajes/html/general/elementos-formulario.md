---
title: Elementos de formulario
description: input, select, textarea.
module: lenguajes/html
submodule: general
order: 43
---

Al completar esta guía podrás:

- Usar input para entrada de datos
- Usar select para menús desplegables
- Usar textarea para texto multilínea
- Elegir el elemento adecuado para cada caso

---

## input

Entrada de datos de una sola línea:

```html
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre" placeholder="Tu nombre">

<label for="email">Correo:</label>
<input type="email" id="email" name="email" placeholder="correo@ejemplo.com" required>

<label for="edad">Edad:</label>
<input type="number" id="edad" name="edad" min="0" max="150">
```

---

## Atributos comunes de input

```html
<input
  type="text"
  name="usuario"
  id="usuario"
  value="Valor por defecto"
  placeholder="Escribe aquí"
  required
  disabled
  readonly
  autofocus
  maxlength="20"
>
```

---

## select

Menú desplegable con opciones:

```html
<label for="pais">País:</label>
<select id="pais" name="pais">
  <option value="">Selecciona un país</option>
  <option value="es">España</option>
  <option value="mx">México</option>
  <option value="ar">Argentina</option>
  <option value="co">Colombia</option>
</select>
```

---

## option y optgroup

```html
<select name="curso" required>
  <option value="" disabled selected>Elige un curso</option>

  <optgroup label="Frontend">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
  </optgroup>

  <optgroup label="Backend">
    <option value="python">Python</option>
    <option value="node">Node.js</option>
  </optgroup>
</select>
```

---

## select con multiple

```html
<select name="habilidades" multiple size="4">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
  <option value="python">Python</option>
</select>
```

Usa Ctrl+clic (Cmd+clic en Mac) para seleccionar varios.

---

## textarea

Área de texto multilínea:

```html
<label for="comentario">Comentario:</label>
<textarea
  id="comentario"
  name="comentario"
  rows="5"
  placeholder="Escribe tu mensaje..."
  maxlength="500"
></textarea>
```

---

## textarea atributos

```html
<textarea
  name="bio"
  rows="4"
  cols="50"
  placeholder="Cuéntanos sobre ti"
  maxlength="200"
  readonly
  disabled
  wrap="soft"
></textarea>
```

---

## Comparación

| Elemento | Tipo de dato | Líneas | Cuándo usarlo |
|---|---|---|---|
| `<input>` | Texto corto, email, número, etc. | Una | Campos simples |
| `<select>` | Opciones predefinidas | Desplegable | Lista cerrada de opciones |
| `<textarea>` | Texto largo | Múltiples | Comentarios, descripciones |

---

## Resumen

| Elemento | Sintaxis | Uso principal |
|---|---|---|
| `<input>` | `<input type="..." name="...">` | Datos de una línea |
| `<select>` | `<select name="..."><option>...</select>` | Selección de opciones |
| `<textarea>` | `<textarea name="..."></textarea>` | Texto multilínea |

---

## Ejercicio

Crea un formulario que use input (text, email), select (con optgroup) y textarea.

**Instrucciones paso a paso:**

1. Crea `elementos-formulario.html`
2. Form con action="/procesar"
3. Input text para nombre
4. Input email para correo
5. Select con optgroup para país
6. Textarea para comentario

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Elementos de formulario</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 400px; margin: 20px auto; }
    label { display: block; margin-top: 12px; }
    input, select, textarea { width: 100%; padding: 8px; box-sizing: border-box; margin-top: 4px; border: 1px solid #ccc; border-radius: 4px; }
    textarea { min-height: 80px; resize: vertical; }
    button { margin-top: 16px; padding: 10px 24px; background: #1A73E8; color: white; border: none; border-radius: 4px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Elementos de formulario</h1>

  <form action="/procesar" method="post">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>

    <label for="email">Correo:</label>
    <input type="email" id="email" name="email" required>

    <label for="pais">País:</label>
    <select id="pais" name="pais">
      <option value="">Selecciona</option>
      <optgroup label="Europa">
        <option value="es">España</option>
        <option value="fr">Francia</option>
      </optgroup>
      <optgroup label="América">
        <option value="mx">México</option>
        <option value="ar">Argentina</option>
      </optgroup>
    </select>

    <label for="comentario">Comentario:</label>
    <textarea id="comentario" name="comentario" rows="4" placeholder="Escribe aquí..."></textarea>

    <button type="submit">Enviar</button>
  </form>
</body>
</html>
```

</details>
