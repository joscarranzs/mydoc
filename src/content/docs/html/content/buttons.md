---
title: BOTONES
module: html
submodule: content/buttons
---

El elemento `<button>` representa un control interactivo que el usuario puede presionar para ejecutar una acción. Es el componente fundamental de cualquier formulario o interfaz de usuario.

```html
<button type="submit">Enviar formulario</button>
<button type="button">Abrir modal</button>
<button type="reset">Limpiar campos</button>
```

## El atributo `type`

Define el comportamiento del botón dentro de un formulario:

| Valor | Comportamiento |
|-------|---------------|
| `submit` | Envía el formulario (valor por defecto si está dentro de un `<form>`) |
| `button` | Botón genérico sin comportamiento predeterminado |
| `reset` | Restablece todos los campos del formulario a sus valores iniciales |

```html
<form action="/registro" method="post">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre">

  <button type="submit">Registrarse</button>
  <button type="reset">Limpiar</button>
  <button type="button" onclick="history.back()">Volver atrás</button>
</form>
```

Si no se especifica `type` y el botón está dentro de un formulario, el valor por defecto es `submit`. Fuera de un formulario, el valor por defecto es `button`.

## Diferencias con `<input type="button">`

Ambos crean botones, pero con diferencias importantes:

```html
<button type="submit">
  <img src="icono-enviar.svg" alt="">
  <strong>Enviar</strong>
</button>

<input type="submit" value="Enviar">
```

`<button>` permite contenido HTML anidado (imágenes, íconos, texto con formato). `<input>` solo acepta texto plano en el atributo `value`.

## Atributos importantes

| Atributo | Propósito |
|----------|-----------|
| `disabled` | Deshabilita el botón (no se puede presionar ni recibe foco) |
| `name` | Nombre del botón para el envío del formulario |
| `value` | Valor enviado al servidor cuando se presiona |
| `autofocus` | El botón recibe el foco automáticamente al cargar la página |
| `form` | Asocia el botón a un formulario específico (por ID) |
| `formaction` | URL de envío (sobrescribe `action` del formulario) |
| `formmethod` | Método HTTP (sobrescribe `method` del formulario) |

```html
<button type="submit" disabled>Enviar (deshabilitado)</button>

<button type="submit" formaction="/admin" formmethod="post">
  Enviar como administrador
</button>

<button type="button" autofocus>
  Comenzar tutorial
</button>
```

---

## Ejercicio: grupo de botones con diferentes acciones

Crea un `div` que contenga tres botones con las siguientes acciones:

1. Un botón "Guardar cambios" de tipo submit
2. Un botón "Cancelar" de tipo button con un atributo `disabled`
3. Un botón "Eliminar" de tipo submit que envíe a una URL diferente (`/eliminar`)

<details>
<summary><strong>Ver solución</strong></summary>

```html
<form action="/guardar" method="post">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre">

  <div class="acciones">
    <button type="submit">Guardar cambios</button>
    <button type="button" disabled>Cancelar</button>
    <button type="submit" formaction="/eliminar">Eliminar</button>
  </div>
</form>
```

</details>
