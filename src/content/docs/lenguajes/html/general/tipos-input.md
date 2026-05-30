---
title: Tipos de input
description: text, email, password, number.
module: lenguajes/html
submodule: general
order: 44
---

Al completar esta guía podrás:

- Usar input type text para texto general
- Usar input type email con validación nativa
- Usar input type password para contraseñas
- Usar input type number para valores numéricos

---

## text

Texto de una línea, el tipo más común:

```html
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre" placeholder="Tu nombre" maxlength="50">

<label for="usuario">Usuario:</label>
<input type="text" id="usuario" name="usuario" value="usuario123" readonly>
```

---

## email

Correo electrónico con validación nativa:

```html
<label for="email">Correo electrónico:</label>
<input type="email" id="email" name="email" placeholder="tu@correo.com" required>

<label for="email2">Confirmar correo:</label>
<input type="email" id="email2" name="email2" placeholder="tu@correo.com" required>
```

El navegador valida automáticamente el formato. En móvil muestra teclado con @.

---

## password

Contraseña con caracteres ocultos:

```html
<label for="pass">Contraseña:</label>
<input type="password" id="pass" name="pass" placeholder="Mínimo 8 caracteres" minlength="8" required>

<label for="pass2">Confirmar contraseña:</label>
<input type="password" id="pass2" name="pass2" placeholder="Repite la contraseña" required>
```

---

## number

Valores numéricos con controles arriba/abajo:

```html
<label for="edad">Edad:</label>
<input type="number" id="edad" name="edad" min="0" max="150" step="1" value="18">

<label for="cantidad">Cantidad:</label>
<input type="number" id="cantidad" name="cantidad" min="1" max="10" step="1">

<label for="precio">Precio:</label>
<input type="number" id="precio" name="precio" min="0" step="0.01" placeholder="0.00">
```

---

## Formulario completo

```html
<form action="/registro" method="post">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required>

  <label for="email">Correo:</label>
  <input type="email" id="email" name="email" required>

  <label for="pass">Contraseña:</label>
  <input type="password" id="pass" name="pass" minlength="8" required>

  <label for="edad">Edad:</label>
  <input type="number" id="edad" name="edad" min="0" max="150">

  <button type="submit">Registrarse</button>
</form>
```

---

## Resumen

| type | Propósito | Validación nativa | Teclado móvil |
|---|---|---|---|
| text | Texto general | No | Normal |
| email | Correo electrónico | Formato email | Con @ |
| password | Contraseña | No (minlength sí) | Normal |
| number | Números | Rango (min/max/step) | Numérico |

---

## Ejercicio

Crea un formulario de registro con: nombre (text), correo (email), contraseña (password) y edad (number). Todos deben tener label y placeholder.

**Instrucciones paso a paso:**

1. Crea `tipos-input.html`
2. Input type text para nombre
3. Input type email para correo (required)
4. Input type password para contraseña (minlength 8)
5. Input type number para edad (min 0, max 120)
6. Botón submit

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tipos de input</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 400px; margin: 20px auto; }
    label { display: block; margin-top: 12px; }
    input { width: 100%; padding: 8px; box-sizing: border-box; margin-top: 4px; border: 1px solid #ccc; border-radius: 4px; }
    button { margin-top: 16px; padding: 10px 24px; background: #1A73E8; color: white; border: none; border-radius: 4px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Registro</h1>

  <form action="/registro" method="post">
    <label for="nombre">Nombre completo:</label>
    <input type="text" id="nombre" name="nombre" placeholder="Ej: Juan Pérez" required>

    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email" placeholder="tu@correo.com" required>

    <label for="pass">Contraseña:</label>
    <input type="password" id="pass" name="pass" placeholder="Mínimo 8 caracteres" minlength="8" required>

    <label for="edad">Edad:</label>
    <input type="number" id="edad" name="edad" placeholder="18" min="0" max="120">

    <button type="submit">Registrarse</button>
  </form>
</body>
</html>
```

</details>
