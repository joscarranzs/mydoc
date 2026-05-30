---
title: Botones
description: button y sus variantes.
module: lenguajes/html
submodule: general
order: 25
---

Al completar esta guía podrás:

- Crear botones con la etiqueta button
- Usar los atributos type, disabled y name
- Diferenciar button de input type button
- Estilizar botones con CSS

---

## Sintaxis

`<button>` representa una acción interactiva. A diferencia de `input type="button"`, puede contener texto, iconos y hasta elementos HTML pequeños dentro.

```html
<button>Haz clic</button>
<button type="submit">Enviar</button>
<button type="reset">Restablecer</button>
<button type="button">Botón genérico</button>
```

---

## Atributo type

El atributo `type` define qué hace el botón dentro de un formulario. Es importante escribirlo siempre para evitar comportamientos inesperados:

```html
<!-- submit: envía el formulario (valor por defecto) -->
<button type="submit">Enviar formulario</button>

<!-- reset: restablece el formulario -->
<button type="reset">Limpiar</button>

<!-- button: no hace nada por defecto, útil con JavaScript -->
<button type="button">Calcular</button>
```

Siempre especifica `type` si el botón está dentro de un formulario para evitar envíos accidentales.

---

## Atributos importantes

Además de `type`, hay atributos útiles para controlar estado, datos enviados y relación con formularios:

```html
<!-- disabled: botón deshabilitado -->
<button disabled>No disponible</button>

<!-- name y value: envían datos con el formulario -->
<button name="accion" value="guardar">Guardar</button>

<!-- autofocus: foco automático al cargar -->
<button type="button" autofocus>OK</button>

<!-- form: vincula un botón a un formulario específico -->
<button form="formulario-principal" type="submit">Enviar</button>
```

---

## button vs input

`<button>` es más flexible porque permite contenido HTML; `input type="button"` es más simple y solo muestra texto plano:

```html
<!-- button: puede contener HTML -->
<button>
  <img src="icono.png" alt="">
  <span>Guardar</span>
</button>

<!-- input type button: solo texto -->
<input type="button" value="Guardar">
```

Usa `<button>` cuando necesites contenido HTML (iconos, imágenes, texto formateado) o más control visual.

---

## Botones con JavaScript

Los botones suelen disparar acciones de interfaz: alertas, cambios visuales, validaciones o navegación.

```html
<button type="button" onclick="saludar()">Saludar</button>

<button type="button" id="btn-cambiar">Cambiar color</button>

<script>
  function saludar() {
    alert('¡Hola!');
  }

  document.getElementById('btn-cambiar').onclick = () => {
    document.body.style.background = '#e8f0fe';
  };
</script>
```

---

## Estilos CSS básicos

Un botón sin estilo funciona, pero suele necesitar CSS para adaptarse al diseño visual de la interfaz:

```html
<style>
  .btn {
    padding: 10px 24px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.2s;
  }
  .btn-primary { background: #1A73E8; color: white; }
  .btn-primary:hover { background: #1557b0; }
  .btn-secondary { background: #f1f3f4; color: #333; }
  .btn-secondary:hover { background: #e2e4e6; }
  .btn-danger { background: #d93025; color: white; }
  .btn-danger:hover { background: #b3261e; }
  .btn:disabled { opacity: 0.5; cursor: not-allowed; }
</style>

<button class="btn btn-primary" onclick="alert('Guardado')">Guardar</button>
<button class="btn btn-secondary">Cancelar</button>
<button class="btn btn-danger">Eliminar</button>
<button class="btn btn-primary" disabled>Deshabilitado</button>
```

---

## Botón como enlace

Aunque un botón no es un enlace, a veces se usa para disparar navegación por JavaScript:

```html
<!-- Navegar a otra página -->
<button type="button" onclick="window.location.href='/contacto'">
  Ir a contacto
</button>

<!-- Abrir en nueva pestaña -->
<button type="button" onclick="window.open('https://ejemplo.com', '_blank')">
  Visitar ejemplo
</button>
```

---

## Resumen

Si el elemento ejecuta una acción, usa `button`. Si el elemento navega, usa `a`.

| Atributo | Descripción |
|---|---|
| `type` | submit, reset, button |
| `disabled` | Deshabilita el botón |
| `name` / `value` | Datos para el formulario |
| `autofocus` | Foco automático |
| `onclick` | Evento de clic (JavaScript) |

---

## Ejercicio

Crea tres botones con estilos CSS distintos (primario, secundario, peligro) y un cuarto botón deshabilitado. El botón primario debe mostrar un alert al hacer clic.

**Instrucciones paso a paso:**

1. Crea `botones.html`
2. Define estilos .btn y variantes
3. Crea botón primario con onclick
4. Crea botón secundario y de peligro
5. Crea un botón deshabilitado

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Botones HTML</title>
  <style>
    .btn {
      padding: 10px 24px;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      margin: 4px;
    }
    .btn-primary { background: #1A73E8; color: white; }
    .btn-primary:hover { background: #1557b0; }
    .btn-secondary { background: #f1f3f4; color: #333; border: 1px solid #ccc; }
    .btn-danger { background: #d93025; color: white; }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
  </style>
</head>
<body>
  <h1>Botones</h1>
  <button class="btn btn-primary" onclick="alert('Acción realizada')">Primario</button>
  <button class="btn btn-secondary">Secundario</button>
  <button class="btn btn-danger">Peligro</button>
  <button class="btn btn-primary" disabled>Deshabilitado</button>
</body>
</html>
```

</details>
