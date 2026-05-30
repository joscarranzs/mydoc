---
title: Formularios
description: form, action, method.
module: lenguajes/html
submodule: general
order: 41
---

Al completar esta guía podrás:

- Crear formularios con la etiqueta form
- Configurar action y method correctamente
- Enviar datos con GET y POST
- Organizar campos con fieldset y legend

---

## Estructura básica

```html
<form action="/procesar" method="post">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre">
  <button type="submit">Enviar</button>
</form>
```

---

## action

URL donde se envían los datos:

```html
<!-- Ruta relativa -->
<form action="/procesar">

<!-- Ruta absoluta -->
<form action="https://ejemplo.com/api/usuario">

<!-- Misma página (se procesa en el backend actual) -->
<form action="">

<!-- Sin action: envía a la URL actual -->
<form>
```

---

## method

Cómo se envían los datos:

```html
<!-- GET: datos visibles en la URL -->
<form action="/buscar" method="get">
  <input type="text" name="q">
  <button type="submit">Buscar</button>
</form>
<!-- Resulta en: /buscar?q=valor -->

<!-- POST: datos en el cuerpo de la petición -->
<form action="/registro" method="post">
  <input type="text" name="usuario">
  <input type="password" name="clave">
  <button type="submit">Registrar</button>
</form>
```

---

## GET vs POST

| Característica | GET | POST |
|---|---|---|
| Datos visibles | Sí (URL) | No (cuerpo) |
| Longitud máxima | ~2048 caracteres | Sin límite práctico |
| Cacheable | Sí | No |
| Historial | Guarda en URL | No guarda |
| Caso de uso | Búsquedas | Registros, login |

---

## fieldset y legend

Agrupan campos relacionados:

```html
<form action="/registro" method="post">
  <fieldset>
    <legend>Datos personales</legend>

    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">

    <label for="email">Correo:</label>
    <input type="email" id="email" name="email">
  </fieldset>

  <fieldset>
    <legend>Dirección</legend>

    <label for="calle">Calle:</label>
    <input type="text" id="calle" name="calle">

    <label for="ciudad">Ciudad:</label>
    <input type="text" id="ciudad" name="ciudad">
  </fieldset>

  <button type="submit">Enviar</button>
</form>
```

---

## label

Vincular label con input mejora la accesibilidad:

```html
<!-- Método 1: for con id -->
<label for="email">Correo:</label>
<input type="email" id="email" name="email">

<!-- Método 2: input dentro de label -->
<label>
  Correo:
  <input type="email" name="email">
</label>
```

---

## required

Campos obligatorios:

```html
<form>
  <label for="nombre">Nombre *</label>
  <input type="text" id="nombre" name="nombre" required>

  <label for="email">Correo *</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Enviar</button>
</form>
```

---

## autocomplete

```html
<form autocomplete="on">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" autocomplete="given-name">

  <label for="email">Correo:</label>
  <input type="email" id="email" name="email" autocomplete="email">

  <label for="pass">Contraseña:</label>
  <input type="password" id="pass" name="pass" autocomplete="current-password">
</form>
```

---

## Resumen

| Atributo | Descripción |
|---|---|
| `action` | URL de destino de los datos |
| `method` | GET o POST |
| `name` | Identificador del campo (clave valor) |
| `required` | Campo obligatorio |
| `autocomplete` | Sugerencias automáticas |
| `fieldset` | Agrupación visual de campos |
| `legend` | Título del fieldset |

---

## Ejercicio

Crea un formulario de registro con: action y method, fieldset para datos personales y dirección, labels vinculados, campos required y botón submit.

**Instrucciones paso a paso:**

1. Crea `formularios.html`
2. Crea un form con action="/registro" method="post"
3. Usa fieldset con legend
4. Agrega labels e inputs con id
5. Marca campos como required

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Formularios HTML</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 500px; margin: 20px auto; }
    fieldset { margin-bottom: 16px; border-radius: 8px; }
    label { display: block; margin-top: 8px; }
    input { width: 100%; padding: 8px; box-sizing: border-box; margin-top: 4px; }
    button { margin-top: 16px; padding: 10px 24px; background: #1A73E8; color: white; border: none; border-radius: 4px; cursor: pointer; }
    .required::after { content: " *"; color: red; }
  </style>
</head>
<body>
  <h1>Registro</h1>

  <form action="/registro" method="post">
    <fieldset>
      <legend>Datos personales</legend>

      <label class="required" for="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre" required>

      <label class="required" for="email">Correo</label>
      <input type="email" id="email" name="email" required>

      <label for="telefono">Teléfono</label>
      <input type="tel" id="telefono" name="telefono">
    </fieldset>

    <fieldset>
      <legend>Dirección</legend>

      <label for="calle">Calle</label>
      <input type="text" id="calle" name="calle">

      <label class="required" for="ciudad">Ciudad</label>
      <input type="text" id="ciudad" name="ciudad" required>
    </fieldset>

    <button type="submit">Registrarse</button>
  </form>
</body>
</html>
```

</details>
