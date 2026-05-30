---
title: Atributos de formulario
description: target, novalidate, autocomplete.
module: lenguajes/html
submodule: general
order: 42
---

Al completar esta guía podrás:

- Usar target para controlar dónde se abre la respuesta
- Desactivar validación con novalidate
- Configurar autocomplete en formularios

---

## target

Controla dónde se muestra la respuesta del formulario:

```html
<!-- _self: misma pestaña (defecto) -->
<form action="/procesar" target="_self">

<!-- _blank: nueva pestaña o ventana -->
<form action="/procesar" target="_blank">

<!-- _parent: marco padre -->
<form action="/procesar" target="_parent">

<!-- _top: ventana completa (sale de iframes) -->
<form action="/procesar" target="_top">

<!-- iframe con nombre específico -->
<iframe name="resultado" width="100%" height="200"></iframe>
<form action="/procesar" target="resultado">
```

---

## novalidate

Desactiva la validación nativa del navegador:

```html
<form action="/procesar" novalidate>
  <label for="email">Correo:</label>
  <input type="email" id="email" name="email" required>

  <label for="web">Sitio web:</label>
  <input type="url" id="web" name="web">

  <button type="submit">Enviar sin validación</button>
</form>
```

Útil cuando la validación se maneja con JavaScript personalizado.

---

## autocomplete

Controla el autocompletado del navegador:

```html
<!-- Desactivar autocomplete en todo el formulario -->
<form action="/procesar" autocomplete="off">
  <input type="text" name="codigo" placeholder="Código único">
  <button type="submit">Enviar</button>
</form>
```

```html
<!-- Activar autocomplete con valores específicos -->
<form action="/registro" autocomplete="on">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" autocomplete="given-name">

  <label for="apellido">Apellido:</label>
  <input type="text" id="apellido" name="apellido" autocomplete="family-name">

  <label for="email">Correo:</label>
  <input type="email" id="email" name="email" autocomplete="email">

  <label for="pass">Contraseña:</label>
  <input type="password" id="pass" name="pass" autocomplete="new-password">

  <label for="tel">Teléfono:</label>
  <input type="tel" id="tel" name="tel" autocomplete="tel">

  <label for="cp">Código postal:</label>
  <input type="text" id="cp" name="cp" autocomplete="postal-code">

  <button type="submit">Registrarse</button>
</form>
```

---

## Resumen

| Atributo | Descripción |
|---|---|
| `target` | Dónde mostrar la respuesta (_self, _blank, _parent, _top, iframe) |
| `novalidate` | Desactiva validación nativa del navegador |
| `autocomplete` | Controla sugerencias automáticas (on, off) |

---

## Ejercicio

Crea un formulario que use target="_blank", novalidate y autocomplete="off".

**Instrucciones paso a paso:**

1. Crea `atributos-formulario.html`
2. Form con target="_blank", novalidate, autocomplete="off"
3. Campos de texto y email
4. Botón submit

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Atributos de formulario</title>
</head>
<body>
  <h1>Atributos de formulario</h1>

  <form action="/procesar" target="_blank" novalidate autocomplete="off">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>

    <label for="email">Correo:</label>
    <input type="email" id="email" name="email" required>

    <button type="submit">Enviar</button>
  </form>

  <p>El formulario se abre en nueva pestaña, sin validación nativa y sin autocomplete.</p>
</body>
</html>
```

</details>
