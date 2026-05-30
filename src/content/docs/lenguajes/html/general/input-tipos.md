---
title: Input tipos
description: Tipos de input.
module: lenguajes/html
submodule: general
order: 43
---

Al completar esta guía podrás:

- Usar los tipos de input más comunes
- Elegir el tipo adecuado para cada dato
- Aprovechar la validación nativa del navegador
- Usar type date, number, range, file

---

## text

Texto de una línea:

```html
<input type="text" name="nombre" placeholder="Nombre">
```

---

## email

Correo electrónico (validación nativa):

```html
<input type="email" name="email" placeholder="tu@correo.com" required>
```

El navegador valida que tenga formato de correo.

---

## password

Contraseña (oculta los caracteres):

```html
<input type="password" name="clave" placeholder="Contraseña" minlength="8" required>
```

---

## number

Números (con controles arriba/abajo):

```html
<input type="number" name="edad" min="0" max="150" step="1" value="18">

<input type="number" name="cantidad" min="1" max="10" step="1">
```

---

## tel

Teléfono (no valida formato, solo muestra teclado en móvil):

```html
<input type="tel" name="telefono" placeholder="+34 123 456 789">
```

---

## url

URL (validación nativa de formato):

```html
<input type="url" name="sitio" placeholder="https://ejemplo.com">
```

---

## date

Selector de fecha:

```html
<input type="date" name="fecha_nacimiento">

<input type="date" name="evento" min="2024-01-01" max="2024-12-31">
```

---

## time

Selector de hora:

```html
<input type="time" name="hora_cita">

<input type="time" name="inicio" value="09:00">
```

---

## color

Selector de color:

```html
<input type="color" name="color_fondo" value="#1A73E8">
```

---

## range

Deslizador:

```html
<input type="range" name="volumen" min="0" max="100" value="50">

<p>Valor: <span id="valor-range">50</span></p>

<script>
  const range = document.querySelector('input[type="range"]');
  const span = document.getElementById('valor-range');
  range.oninput = () => span.textContent = range.value;
</script>
```

---

## file

Selección de archivos:

```html
<input type="file" name="documento">

<!-- Aceptar solo imágenes -->
<input type="file" name="foto" accept="image/*">

<!-- Múltiples archivos -->
<input type="file" name="archivos" multiple>

<!-- Tipos específicos -->
<input type="file" accept=".pdf,.doc,.docx">
```

---

## checkbox y radio

Selección múltiple (checkbox) o única (radio):

```html
<label><input type="checkbox" name="intereses" value="html"> HTML</label>
<label><input type="checkbox" name="intereses" value="css"> CSS</label>
<label><input type="checkbox" name="intereses" value="js"> JavaScript</label>

<br>

<label><input type="radio" name="genero" value="masculino"> Masculino</label>
<label><input type="radio" name="genero" value="femenino"> Femenino</label>
<label><input type="radio" name="genero" value="otro"> Otro</label>
```

---

## Resumen

| type | Uso | Validación nativa |
|---|---|---|
| text | Texto general | No |
| email | Correo | Sí |
| password | Contraseña | No |
| number | Números | Sí (min/max/step) |
| tel | Teléfono | Solo teclado móvil |
| url | URL | Sí |
| date | Fecha | Sí |
| file | Archivos | No |
| checkbox | Múltiple | No |
| radio | Única | No |

---

## Ejercicio

Crea un formulario que use al menos 5 tipos de input distintos: text, email, number, date y file.

**Instrucciones paso a paso:**

1. Crea `input-tipos.html`
2. Usa input type text para nombre
3. Usa input type email para correo
4. Usa input type number para edad
5. Usa input type date para fecha
6. Usa input type file para adjuntar archivo

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
    input, select, textarea { width: 100%; padding: 8px; box-sizing: border-box; margin-top: 4px; border: 1px solid #ccc; border-radius: 4px; }
    button { margin-top: 16px; padding: 10px 24px; background: #1A73E8; color: white; border: none; border-radius: 4px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Tipos de input</h1>

  <form action="/procesar" method="post">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" placeholder="Nombre" required>

    <label for="email">Correo:</label>
    <input type="email" id="email" name="email" placeholder="correo@ejemplo.com" required>

    <label for="edad">Edad:</label>
    <input type="number" id="edad" name="edad" min="0" max="150">

    <label for="fecha">Fecha de nacimiento:</label>
    <input type="date" id="fecha" name="fecha">

    <label for="archivo">Adjuntar archivo:</label>
    <input type="file" id="archivo" name="archivo">

    <button type="submit">Enviar</button>
  </form>
</body>
</html>
```

</details>
