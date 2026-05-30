---
title: Botones en formularios
description: submit, reset, button.
module: lenguajes/html
submodule: general
order: 47
---

Al completar esta guía podrás:

- Usar botones submit, reset y button
- Configurar tipos de botón correctamente
- Prevenir envíos accidentales de formularios
- Usar atributos formaction y formmethod

---

## Tipos de botón

```html
<!-- submit: envía el formulario (es el valor por defecto) -->
<button type="submit">Enviar</button>

<!-- reset: limpia todos los campos -->
<button type="reset">Restablecer</button>

<!-- button: botón genérico sin acción por defecto -->
<button type="button" onclick="calcular()">Calcular</button>
```

---

## input type submit

Alternativa a `<button type="submit">`:

```html
<!-- button: permite HTML interno -->
<button type="submit">
  <strong>Enviar</strong> formulario
</button>

<!-- input: solo texto -->
<input type="submit" value="Enviar formulario">
```

---

## Diferencia entre submit y button

```html
<form action="/procesar" method="post">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre">

  <!-- type="submit" envía el formulario -->
  <button type="submit">Guardar</button>

  <!-- type="button" no envía -->
  <button type="button" onclick="alert('¡Hola!')">Saludar</button>

  <!-- Sin type: por defecto es submit -->
  <button>Enviar (submit implícito)</button>
</form>
```

---

## Prevenir envío accidental

Botones dentro de formularios sin type explícito se comportan como submit:

```html
<form action="/procesar">
  <input type="text" name="busqueda">

  <!-- Peligro: sin type, este botón envía el formulario -->
  <button onclick="accion()">Acción</button>

  <!-- Correcto: type="button" evita el envío -->
  <button type="button" onclick="accion()">Acción</button>
</form>
```

---

## formaction

Sobrescribe el action del formulario para un botón específico:

```html
<form action="/guardar" method="post">
  <input type="text" name="nombre">

  <!-- Envía a /guardar -->
  <button type="submit">Guardar</button>

  <!-- Envía a /guardar-como-borrador -->
  <button type="submit" formaction="/guardar-borrador">
    Guardar borrador
  </button>
</form>
```

---

## formmethod

Sobrescribe el method del formulario:

```html
<form action="/procesar" method="post">
  <input type="text" name="busqueda">

  <!-- Envía con POST (defecto del form) -->
  <button type="submit">Buscar</button>

  <!-- Envía con GET -->
  <button type="submit" formmethod="get">Buscar (GET)</button>
</form>
```

---

## formnovalidate

Desactiva la validación al enviar:

```html
<form action="/procesar">
  <input type="email" required>

  <!-- Valida antes de enviar -->
  <button type="submit">Enviar</button>

  <!-- No valida antes de enviar -->
  <button type="submit" formnovalidate>Guardar borrador</button>
</form>
```

---

## Estilos de botones

```html
<style>
  input[type="submit"],
  input[type="reset"],
  button {
    padding: 10px 24px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin: 4px;
  }
  input[type="submit"] { background: #1A73E8; color: white; }
  input[type="reset"] { background: #f1f3f4; color: #333; }
  button[type="button"] { background: #e8f0fe; color: #1A73E8; }
</style>
```

---

## Resumen

| Atributo | Descripción |
|---|---|
| `type="submit"` | Envía el formulario (defecto) |
| `type="reset"` | Restablece campos |
| `type="button"` | Botón genérico sin envío |
| `formaction` | Sobrescribe action |
| `formmethod` | Sobrescribe method |
| `formnovalidate` | Desactiva validación |

---

## Ejercicio

Crea un formulario con: botón submit que envía a /guardar, botón reset que limpia campos, botón button que muestra alert, y un segundo submit con formaction diferente.

**Instrucciones paso a paso:**

1. Crea `botones-formularios.html`
2. Formulario con action="/guardar" method="post"
3. Campos de texto y email
4. Botón submit (Guardar)
5. Botón reset (Restablecer)
6. Botón button (Ayuda)
7. Botón submit con formaction="/borrador"

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Botones en formularios</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 400px; margin: 20px auto; }
    label { display: block; margin-top: 12px; }
    input { width: 100%; padding: 8px; box-sizing: border-box; margin-top: 4px; border: 1px solid #ccc; border-radius: 4px; }
    .btn-group { margin-top: 16px; display: flex; gap: 8px; }
    button, input[type="submit"], input[type="reset"] {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
    }
    .btn-submit { background: #1A73E8; color: white; }
    .btn-reset { background: #f1f3f4; color: #333; border: 1px solid #ccc; }
    .btn-helper { background: #e8f0fe; color: #1A73E8; }
    .btn-borrador { background: #f9f9f9; color: #666; border: 1px dashed #ccc; }
  </style>
</head>
<body>
  <h1>Botones en formularios</h1>

  <form action="/guardar" method="post">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>

    <label for="email">Correo:</label>
    <input type="email" id="email" name="email" required>

    <div class="btn-group">
      <button type="submit" class="btn-submit">Guardar</button>
      <button type="reset" class="btn-reset">Restablecer</button>
      <button type="button" class="btn-helper" onclick="alert('Completa los campos y pulsa Guardar')">
        Ayuda
      </button>
      <button type="submit" class="btn-borrador" formaction="/guardar-borrador">
        Borrador
      </button>
    </div>
  </form>
</body>
</html>
```

</details>
