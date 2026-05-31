---
title: ATRIBUTOS DE FORMULARIO
module: html
submodule: forms/form-attributes
---

El elemento `<form>` acepta varios atributos que controlan cómo y dónde se envían los datos, cómo se validan y cómo se comporta el formulario en el navegador.

## `action`

Define la URL del servidor que procesa los datos:

```html
<form action="/api/usuarios">
```

- Si se omite, los datos se envían a la URL actual.
- Puede ser una ruta relativa (`/registro`) o absoluta (`https://api.ejemplo.com/usuarios`).

## `method`

Especifica el método HTTP:

```html
<form action="/buscar" method="get">
<form action="/crear" method="post">
```

- `get` — datos visibles en la URL, ideal para búsquedas.
- `post` — datos en el cuerpo de la petición, ideal para operaciones que modifican datos.

El método `dialog` está disponible para formularios dentro de un elemento `<dialog>`, y cierra el diálogo al enviar.

## `enctype`

Codificación de los datos al enviarlos (solo aplica con `method="post"`):

```html
<form action="/upload" method="post" enctype="multipart/form-data">
```

- `application/x-www-form-urlencoded` — valor por defecto.
- `multipart/form-data` — obligatorio para `<input type="file">`.
- `text/plain` — envía datos sin codificar (solo para depuración).

## `target`

Controla dónde se muestra la respuesta del servidor:

```html
<form action="/pago" method="post" target="_blank">
```

| Valor | Comportamiento |
|-------|---------------|
| `_self` | Misma pestaña (por defecto) |
| `_blank` | Nueva pestaña o ventana |
| `_parent` | Marco padre |
| `_top` | Ventana completa |

## `autocomplete`

Controla si el navegador puede autocompletar los campos del formulario:

```html
<form action="/login" method="post" autocomplete="on">
<form action="/datos-sensibles" method="post" autocomplete="off">
```

- `on` — el navegador sugiere valores previamente guardados (por defecto).
- `off` — desactiva el autocompletado para todos los campos del formulario.

## `novalidate`

Desactiva la validación HTML5 al enviar el formulario:

```html
<form action="/guardar" method="post" novalidate>
```

Útil para formularios que se validan exclusivamente desde JavaScript o que deben permitir el envío aunque los campos no cumplan las restricciones.

## `name`

Asigna un nombre al formulario para identificarlo desde JavaScript:

```html
<form name="formulario-registro" action="/registrar" method="post">

<script>
  document.forms['formulario-registro'].submit();
</script>
```

## `rel`

Define la relación entre el documento actual y el destino del formulario:

```html
<form action="/suscripcion" method="post" rel="nofollow noopener">
```

Útil para formularios que envían datos a sitios externos o para controlar el seguimiento de motores de búsqueda.

---

## Ejercicio: formulario con atributos combinados

Crea un formulario de búsqueda que:

1. Use método GET
2. Se envíe a `/resultados`
3. Abra los resultados en una nueva pestaña
4. Desactive el autocompletado
5. Incluya un campo de búsqueda y un botón

<details>
<summary><strong>Ver solución</strong></summary>

```html
<form action="/resultados" method="get" target="_blank" autocomplete="off">
  <label for="busqueda">Buscar:</label>
  <input type="search" id="busqueda" name="q" placeholder="Término de búsqueda..." required>
  <button type="submit">Buscar</button>
</form>
```

</details>
