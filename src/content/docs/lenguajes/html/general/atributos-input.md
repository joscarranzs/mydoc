---
title: Atributos de input
description: placeholder, required, pattern.
module: lenguajes/html
submodule: general
order: 45
---

Al completar esta guía podrás:

- Usar placeholder para texto de ayuda
- Usar required para campos obligatorios
- Usar pattern para validación con expresiones regulares
- Combinar atributos de validación

---

## placeholder

Texto de ayuda dentro del campo, desaparece al escribir:

```html
<input type="text" placeholder="Nombre completo">
<input type="email" placeholder="tu@correo.com">
<input type="password" placeholder="Mínimo 8 caracteres">
<input type="tel" placeholder="+34 123 456 789">
<input type="text" placeholder="Código postal">
```

---

## required

Campo obligatorio: el formulario no se envía si está vacío:

```html
<form>
  <label for="nombre">Nombre *</label>
  <input type="text" id="nombre" name="nombre" required>

  <label for="email">Correo *</label>
  <input type="email" id="email" name="email" required>

  <label for="telefono">Teléfono (opcional)</label>
  <input type="tel" id="telefono" name="telefono">

  <button type="submit">Enviar</button>
</form>
```

El navegador muestra un mensaje de error si se intenta enviar vacío.

---

## pattern

Expresión regular para validar el formato:

```html
<!-- Solo letras (sin números ni símbolos) -->
<input
  type="text"
  pattern="[A-Za-záéíóúñÑ ]+"
  title="Solo letras"
  placeholder="Nombre y apellidos"
>

<!-- Código postal de 5 dígitos -->
<input
  type="text"
  pattern="[0-9]{5}"
  title="Código postal de 5 dígitos"
  placeholder="28001"
>

<!-- Teléfono: 9 dígitos -->
<input
  type="tel"
  pattern="[0-9]{9}"
  title="9 dígitos (sin espacios ni prefijo)"
  placeholder="612345678"
>

<!-- URL personalizada -->
<input
  type="text"
  pattern="https?://.+"
  title="URL debe comenzar con http:// o https://"
  placeholder="https://ejemplo.com"
>
```

---

## Combinar atributos

```html
<label for="codigo">Código postal:</label>
<input
  type="text"
  id="codigo"
  name="codigo"
  placeholder="Ej: 28001"
  required
  pattern="[0-9]{5}"
  title="El código postal debe tener 5 dígitos"
  maxlength="5"
>
```

---

## required + pattern + placeholder

```html
<form action="/procesar">
  <label for="nombre">Nombre (solo letras):</label>
  <input
    type="text"
    id="nombre"
    name="nombre"
    placeholder="Ej: Juan"
    required
    pattern="[A-Za-záéíóúñÑ ]+"
    title="Solo letras"
  >

  <label for="cp">Código postal:</label>
  <input
    type="text"
    id="cp"
    name="cp"
    placeholder="28001"
    required
    pattern="[0-9]{5}"
    title="5 dígitos"
  >

  <button type="submit">Enviar</button>
</form>
```

---

## Resumen

| Atributo | Descripción | Ejemplo |
|---|---|---|
| `placeholder` | Texto de ayuda dentro del campo | `placeholder="Tu nombre"` |
| `required` | Campo obligatorio | `required` |
| `pattern` | Validación por expresión regular | `pattern="[0-9]{5}"` |
| `title` | Mensaje de ayuda para pattern | `title="5 dígitos"` |

---

## Ejercicio

Crea un formulario con: campo nombre (required + pattern solo letras), campo email (required), campo código postal (required + pattern 5 dígitos + placeholder).

**Instrucciones paso a paso:**

1. Crea `atributos-input.html`
2. Campo nombre con required y pattern letras
3. Campo email con required
4. Campo código postal con pattern 5 dígitos
5. Botón submit

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Atributos de input</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 400px; margin: 20px auto; }
    label { display: block; margin-top: 12px; }
    input { width: 100%; padding: 8px; box-sizing: border-box; margin-top: 4px; border: 1px solid #ccc; border-radius: 4px; }
    button { margin-top: 16px; padding: 10px 24px; background: #1A73E8; color: white; border: none; border-radius: 4px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Atributos de input</h1>

  <form action="/procesar" method="post">
    <label for="nombre">Nombre:</label>
    <input
      type="text"
      id="nombre"
      name="nombre"
      placeholder="Ej: Juan Pérez"
      required
      pattern="[A-Za-záéíóúñÑ ]+"
      title="Solo letras"
    >

    <label for="email">Correo:</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="tu@correo.com"
      required
    >

    <label for="cp">Código postal:</label>
    <input
      type="text"
      id="cp"
      name="cp"
      placeholder="28001"
      required
      pattern="[0-9]{5}"
      title="Debe tener 5 dígitos"
    >

    <button type="submit">Enviar</button>
  </form>

  <p style="color: #666; font-size: 0.9em;">
    * Los campos con pattern muestran error si no cumplen el formato.
  </p>
</body>
</html>
```

</details>
