---
title: ELEMENTOS DE FORMULARIO
module: html
submodule: forms/form-elements
---

HTML proporciona una variedad de elementos para construir formularios. Cada uno está diseñado para un tipo específico de entrada de datos.

## `<label>`

Vincula un texto descriptivo a un campo de formulario. Mejora la accesibilidad: al hacer clic en el label, el campo asociado recibe el foco.

```html
<label for="email">Correo electrónico:</label>
<input type="email" id="email" name="email">
```

El atributo `for` debe coincidir con el `id` del campo. También es válido envolver el campo dentro del label:

```html
<label>
  Nombre:
  <input type="text" name="nombre">
</label>
```

## `<input>`

El elemento de entrada más versátil. Su comportamiento cambia según el atributo `type`. Sin `type`, el valor por defecto es `text`:

```html
<input type="text" name="usuario" placeholder="Nombre de usuario">
```

## `<textarea>`

Para texto multilínea:

```html
<label for="comentarios">Comentarios:</label>
<textarea id="comentarios" name="comentarios" rows="4" cols="50" placeholder="Escribe tus comentarios..."></textarea>
```

A diferencia de `<input>`, `<textarea>` tiene etiqueta de cierre y el texto por defecto va como contenido, no como atributo `value`.

## `<select>` y `<option>`

Menú desplegable de selección:

```html
<label for="pais">País:</label>
<select id="pais" name="pais">
  <option value="">Selecciona un país</option>
  <option value="mx">México</option>
  <option value="es">España</option>
  <option value="ar">Argentina</option>
</select>
```

Con el atributo `multiple` se permite la selección múltiple. Con `size` se controla cuántas opciones se muestran sin desplazamiento.

### `<optgroup>`

Agrupa opciones dentro de un `<select>`:

```html
<select name="curso">
  <optgroup label="Frontend">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
  </optgroup>
  <optgroup label="Backend">
    <option value="node">Node.js</option>
    <option value="python">Python</option>
  </optgroup>
</select>
```

## `<button>`

Botón que puede contener HTML anidado:

```html
<button type="submit">
  <img src="enviar.svg" alt="" width="16" height="16">
  Enviar formulario
</button>
```

## `<fieldset>` y `<legend>`

Agrupa campos relacionados y les asigna una leyenda:

```html
<fieldset>
  <legend>Datos personales</legend>

  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre">

  <label for="edad">Edad:</label>
  <input type="number" id="edad" name="edad">
</fieldset>
```

`<fieldset>` mejora la organización visual y la accesibilidad: los lectores de pantalla anuncian la leyenda al entrar en el grupo.

## `<datalist>`

Proporciona una lista de sugerencias autocompletables sin restringir la entrada del usuario:

```html
<label for="lenguaje">Lenguaje de programación:</label>
<input type="text" id="lenguaje" name="lenguaje" list="lenguajes">
<datalist id="lenguajes">
  <option value="JavaScript">
  <option value="Python">
  <option value="TypeScript">
  <option value="Go">
</datalist>
```

## `<output>`

Representa el resultado de un cálculo o acción del usuario:

```html
<form oninput="resultado.value = parseInt(a.value) + parseInt(b.value)">
  <input type="range" id="a" value="50"> +
  <input type="range" id="b" value="50"> =
  <output name="resultado" for="a b">100</output>
</form>
```

---

## Ejercicio: formulario de registro completo

Crea un formulario de registro de usuario que incluya:

1. Un `<fieldset>` con `<legend>` para "Datos de acceso" con email y contraseña
2. Un `<fieldset>` para "Información personal" con nombre, país (select) y biografía (textarea)
3. Un botón de envío

<details>
<summary><strong>Ver solución</strong></summary>

```html
<form action="/registrar" method="post">
  <fieldset>
    <legend>Datos de acceso</legend>

    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email" required>

    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password" required minlength="8">
  </fieldset>

  <fieldset>
    <legend>Información personal</legend>

    <label for="nombre">Nombre completo:</label>
    <input type="text" id="nombre" name="nombre" required>

    <label for="pais">País:</label>
    <select id="pais" name="pais">
      <option value="">Selecciona un país</option>
      <option value="mx">México</option>
      <option value="es">España</option>
      <option value="co">Colombia</option>
      <option value="ar">Argentina</option>
    </select>

    <label for="biografia">Biografía:</label>
    <textarea id="biografia" name="biografia" rows="4" placeholder="Cuéntanos sobre ti..."></textarea>
  </fieldset>

  <button type="submit">Crear cuenta</button>
</form>
```

</details>
