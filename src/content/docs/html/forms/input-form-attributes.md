---
title: ATRIBUTOS DE FORM INPUT
module: html
submodule: forms/input-form-attributes
---

HTML5 introdujo un conjunto de atributos que permiten a los campos de formulario sobrescribir los valores definidos en el `<form>` contenedor. Estos atributos se aplican directamente sobre `<input>`, `<button>`, `<textarea>` y `<select>`.

## `form`

Vincula un campo a un formulario específico, incluso si el campo está fuera del contenedor `<form>`:

```html
<form id="form-principal" action="/guardar" method="post">
  <button type="submit">Guardar</button>
</form>

<!-- Este campo está fuera del <form> pero se envía con él -->
<input type="text" name="nombre" form="form-principal" required>
```

El valor de `form` debe coincidir con el `id` del formulario. Es útil para interfaces complejas donde los campos no pueden estar dentro del elemento `<form>` por razones de layout.

## `formaction`

Sobrescribe el atributo `action` del formulario para un botón o input específico:

```html
<form action="/guardar" method="post">
  <input type="text" name="nombre" required>
  <button type="submit">Guardar como borrador</button>
  <button type="submit" formaction="/publicar">Publicar</button>
</form>
```

El primer botón envía a `/guardar`. El segundo, gracias a `formaction`, envía a `/publicar`.

## `formenctype`

Sobrescribe `enctype` del formulario:

```html
<form action="/subir" method="post" enctype="application/x-www-form-urlencoded">
  <input type="text" name="titulo">
  <button type="submit">Enviar texto</button>
  <button type="submit" formenctype="multipart/form-data">Subir con archivo</button>
</form>
```

## `formmethod`

Sobrescribe `method` del formulario:

```html
<form action="/datos" method="get">
  <input type="text" name="query">
  <button type="submit">Buscar (GET)</button>
  <button type="submit" formmethod="post">Enviar como POST</button>
</form>
```

## `formtarget`

Sobrescribe `target` del formulario:

```html
<form action="/procesar" method="post" target="_self">
  <button type="submit">Procesar aquí</button>
  <button type="submit" formtarget="_blank">Abrir en nueva pestaña</button>
</form>
```

## `formnovalidate`

Sobrescribe `novalidate` del formulario. Permite que un botón específico envíe el formulario sin validación:

```html
<form action="/guardar" method="post" novalidate>
  <input type="email" name="email" required>
  <button type="submit">Guardar (sin validación)</button>
  <button type="submit" formnovalidate>Forzar envío</button>
</form>
```

También puede forzar la validación cuando el formulario tiene `novalidate`:

```html
<form action="/guardar" method="post" novalidate>
  <input type="email" name="email" required>
  <button type="submit" formnovalidate="false">Guardar con validación</button>
</form>
```

## Tabla resumen

| Atributo | Sobrescribe | Se aplica a |
|----------|-------------|-------------|
| `form` | Contenedor del campo | input, button, textarea, select |
| `formaction` | `action` | button, input[type=submit/image] |
| `formenctype` | `enctype` | button, input[type=submit/image] |
| `formmethod` | `method` | button, input[type=submit/image] |
| `formtarget` | `target` | button, input[type=submit/image] |
| `formnovalidate` | `novalidate` | button, input[type=submit/image] |

---

## Ejercicio: botones con acciones diferentes

Crea un formulario de gestión de contenidos que tenga:

1. Un campo de texto para el título
2. Un botón "Guardar borrador" que envíe a `/borrador` con POST
3. Un botón "Publicar" que envíe a `/publicar` con POST y abra en nueva pestaña
4. Un botón "Eliminar" que envíe a `/eliminar` con POST sin validación

<details>
<summary><strong>Ver solución</strong></summary>

```html
<form id="form-contenido" action="/borrador" method="post">
  <label for="titulo">Título:</label>
  <input type="text" id="titulo" name="titulo" required>

  <button type="submit">Guardar borrador</button>
  <button type="submit" formaction="/publicar" formtarget="_blank">Publicar</button>
  <button type="submit" formaction="/eliminar" formnovalidate>Eliminar</button>
</form>
```

</details>
