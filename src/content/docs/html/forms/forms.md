---
title: FORMULARIOS
module: html
submodule: forms/forms
---

El elemento `<form>` es el contenedor que agrupa controles interactivos para la recolección y envío de datos del usuario al servidor. Es la base de cualquier funcionalidad que requiera entrada de información: registros, inicios de sesión, búsquedas, comentarios y pagos.

```html
<form action="/registrar" method="post">
  <label for="nombre">Nombre completo:</label>
  <input type="text" id="nombre" name="nombre" required>

  <label for="email">Correo electrónico:</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Registrarse</button>
</form>
```

## Atributos principales

| Atributo | Valores | Propósito |
|----------|---------|-----------|
| `action` | URL | Dirección del servidor que procesa los datos. Si se omite, se envía a la URL actual. |
| `method` | `get` / `post` | Método HTTP para el envío. |
| `enctype` | `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain` | Codificación de los datos al enviarlos. |
| `target` | `_self`, `_blank`, `_parent`, `_top` | Dónde mostrar la respuesta del servidor. |
| `autocomplete` | `on` / `off` | Controla el autocompletado del navegador. |
| `novalidate` | Booleano | Desactiva la validación HTML5 al enviar. |
| `name` | Texto | Nombre del formulario para identificación. |

## GET vs. POST

La elección entre GET y POST depende del tipo de operación:

**GET**: los datos se envían en la URL como parámetros de consulta.

```html
<form action="/buscar" method="get">
  <input type="search" name="q" placeholder="Buscar...">
  <button type="submit">Buscar</button>
</form>
```

- Los datos son visibles en la URL: `/buscar?q=html+css`
- Longitud máxima limitada (aproximadamente 2048 caracteres).
- Adecuado para búsquedas, filtros y consultas que no modifican datos.
- Puede compartirse mediante un enlace.

**POST**: los datos se envían en el cuerpo de la petición HTTP.

```html
<form action="/login" method="post">
  <input type="text" name="usuario" required>
  <input type="password" name="contrasena" required>
  <button type="submit">Iniciar sesión</button>
</form>
```

- Los datos no son visibles en la URL.
- Sin límite de tamaño.
- Adecuado para operaciones que modifican datos: registros, pagos, carga de archivos.

## Enctype

El atributo `enctype` solo tiene efecto con `method="post"`:

| Valor | Uso |
|-------|-----|
| `application/x-www-form-urlencoded` | Por defecto. Codifica los espacios como `+` y los caracteres especiales como `%XX`. |
| `multipart/form-data` | Obligatorio cuando el formulario incluye `<input type="file">`. |
| `text/plain` | Envía datos sin codificar (depuración). |

```html
<form action="/subir" method="post" enctype="multipart/form-data">
  <input type="file" name="documento" accept=".pdf">
  <button type="submit">Subir archivo</button>
</form>
```

## Envío del formulario

Un formulario se envía cuando:

- El usuario presiona un `<button type="submit">`.
- El usuario presiona Enter dentro de un campo de texto.
- Se ejecuta `form.submit()` desde JavaScript.

El navegador serializa los campos con `name` y los envía al servidor según el método y la codificación configurados.

---

## Ejercicio: formulario de contacto

Crea un formulario de contacto completo que incluya:

1. Método POST
2. Acción hacia `/enviar-mensaje`
3. Campos: nombre, email y mensaje
4. Codificación adecuada (no requiere archivos)

<details>
<summary><strong>Ver solución</strong></summary>

```html
<form action="/enviar-mensaje" method="post">
  <div>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
  </div>

  <div>
    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email" required>
  </div>

  <div>
    <label for="mensaje">Mensaje:</label>
    <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
  </div>

  <button type="submit">Enviar mensaje</button>
</form>
```

</details>
