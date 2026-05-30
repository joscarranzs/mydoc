---
title: Input
description: La etiqueta input.
module: lenguajes/html
submodule: general
order: 42
---

Al completar esta guía podrás:

- Usar la etiqueta input para entrada de datos
- Configurar el atributo type para diferentes tipos
- Combinar name y value para envío de datos
- Diferenciar los usos de cada tipo de input

---

## Sintaxis básica

```html
<input type="text" name="usuario" id="usuario">
```

`<input>` es un elemento vacío (no tiene etiqueta de cierre).

---

## Atributos universales

```html
<input
  type="text"
  name="nombre"
  id="nombre"
  value="Valor por defecto"
  placeholder="Escribe aquí"
  required
  disabled
  readonly
  autofocus
>
```

---

## name (obligatorio para envío)

Sin el atributo `name`, el valor no se envía al servidor:

```html
<!-- El valor se envía como: nombre=Juan -->
<input type="text" name="nombre" value="Juan">

<!-- Sin name: no se envía -->
<input type="text" value="Juan">
```

---

## value

Valor por defecto o valor enviado:

```html
<input type="text" name="pais" value="España">

<input type="hidden" name="token" value="abc123">

<input type="submit" value="Enviar formulario">
```

---

## placeholder

Texto de ayuda dentro del campo:

```html
<input type="text" placeholder="Nombre completo">
<input type="email" placeholder="tu@correo.com">
<input type="password" placeholder="Mínimo 8 caracteres">
<input type="tel" placeholder="+34 123 456 789">
```

---

## disabled

Campo deshabilitado (no se envía, no se edita):

```html
<input type="text" value="No editable" disabled>

<input type="text" value="No se envía" disabled name="campo">
```

---

## readonly

Solo lectura (se envía, pero no se edita):

```html
<input type="text" value="Se envía pero no se edita" readonly name="campo">
```

---

## autofocus

Foco automático al cargar la página:

```html
<input type="text" name="busqueda" autofocus>
```

Solo un elemento por página debe tener autofocus.

---

## maxlength y minlength

```html
<input type="text" maxlength="10" placeholder="Máximo 10 caracteres">
<input type="text" minlength="3" maxlength="20" placeholder="Entre 3 y 20 caracteres">
```

---

## Resumen

| Atributo | Descripción |
|---|---|
| `type` | Tipo de entrada (text, email, etc.) |
| `name` | Clave para enviar al servidor |
| `value` | Valor por defecto |
| `placeholder` | Texto de ayuda |
| `required` | Campo obligatorio |
| `disabled` | Deshabilitado (no se envía) |
| `readonly` | Solo lectura (se envía) |
| `maxlength` | Máximo de caracteres |

---

## Ejercicio

Crea un formulario con inputs de tipo text, email y password. Cada input debe tener name, placeholder, y uno debe tener autofocus.

**Instrucciones paso a paso:**

1. Crea `input.html`
2. Crea un form con method post
3. Agrega input text con name="nombre" y placeholder
4. Agrega input email con name="email" y required
5. Agrega input password con name="clave" y minlength
6. Un input debe tener autofocus

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Input HTML</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 400px; margin: 20px auto; }
    label { display: block; margin-top: 12px; }
    input { width: 100%; padding: 8px; box-sizing: border-box; margin-top: 4px; border: 1px solid #ccc; border-radius: 4px; }
    button { margin-top: 16px; padding: 10px 24px; background: #1A73E8; color: white; border: none; border-radius: 4px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Input</h1>

  <form action="/procesar" method="post">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" autofocus>

    <label for="email">Correo:</label>
    <input type="email" id="email" name="email" placeholder="tu@correo.com" required>

    <label for="clave">Contraseña:</label>
    <input type="password" id="clave" name="clave" placeholder="Mínimo 6 caracteres" minlength="6" required>

    <button type="submit">Enviar</button>
  </form>
</body>
</html>
```

</details>
