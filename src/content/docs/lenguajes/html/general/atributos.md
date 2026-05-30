---
title: Atributos
description: Atributos de elementos HTML.
module: lenguajes/html
submodule: general
order: 6
---

Al completar esta guía podrás:

- Usar atributos globales en cualquier elemento HTML
- Diferenciar atributos obligatorios y opcionales
- Combinar múltiples atributos correctamente
- Aplicar atributos booleanos

---

## Sintaxis

Los atributos se escriben dentro de la etiqueta de apertura:

```html
<tipo atributo="valor">Contenido</tipo>
```

```html
<a href="https://ejemplo.com" target="_blank">Enlace</a>
<img src="foto.jpg" alt="Descripción" width="400">
<input type="text" placeholder="Nombre" maxlength="20">
```

---

## Atributos globales

Funcionan en cualquier elemento HTML:

```html
<!-- class: para CSS y JavaScript -->
<div class="contenedor principal">...</div>

<!-- id: identificador único -->
<section id="introduccion">...</section>

<!-- style: estilos inline -->
<p style="color: red; font-size: 18px;">Texto rojo</p>

<!-- title: tooltip -->
<abbr title="HyperText Markup Language">HTML</abbr>

<!-- lang: idioma del elemento -->
<span lang="en">Hello</span>
```

```html
<!-- hidden: oculta el elemento -->
<div hidden>Este texto no se ve</div>

<!-- tabindex: orden de tabulación -->
<input tabindex="1" />
<input tabindex="2" />

<!-- data-*: datos personalizados -->
<button data-id="123" data-action="delete">Eliminar</button>
```

---

## Atributos obligatorios

Algunos elementos requieren ciertos atributos para funcionar:

```html
<!-- src y alt son obligatorios en img -->
<img src="foto.jpg" alt="Descripción de la imagen">

<!-- href es obligatorio en a (sin JavaScript) -->
<a href="https://ejemplo.com">Enlace</a>

<!-- type es obligatorio en input -->
<input type="text">
<input type="email">
<input type="password">
```

---

## Atributos booleanos

Se activan con solo escribir el nombre o `nombre="nombre"`:

```html
<!-- required: campo obligatorio -->
<input type="text" required>

<!-- disabled: campo deshabilitado -->
<input type="text" disabled>

<!-- checked: opción preseleccionada -->
<input type="checkbox" checked>

<!-- readonly: modo solo lectura -->
<input type="text" readonly>

<!-- autofocus: foco automático -->
<input type="text" autofocus>
```

---

## Atributos comunes por tipo de elemento

```html
<!-- Enlaces -->
<a href="url" target="_blank" rel="noopener">Enlace</a>

<!-- Imágenes -->
<img src="url" alt="texto" width="200" height="150" loading="lazy">

<!-- Formularios -->
<input type="text" name="usuario" placeholder="Nombre" required>
<textarea rows="4" cols="50"></textarea>
<select>
  <option value="1">Opción 1</option>
</select>
```

---

## Múltiples atributos

Se separan con espacios, el orden no importa:

```html
<img
  src="foto.jpg"
  alt="Paisaje"
  width="800"
  height="600"
  loading="lazy"
  class="imagen-responsive"
  id="foto-principal"
  title="Un hermoso paisaje"
>
```

---

## Resumen

| Atributo | Elementos | Descripción |
|---|---|---|
| `id` | Todos | Identificador único |
| `class` | Todos | Clase para CSS |
| `style` | Todos | Estilos inline |
| `src` | img, script, iframe | Origen del recurso |
| `href` | a, link | URL de destino |
| `alt` | img | Texto alternativo |
| `required` | input, select | Campo obligatorio |

---

## Ejercicio

Crea un enlace que se abra en una nueva pestaña, una imagen con texto alternativo, y un campo de formulario obligatorio con placeholder.

**Instrucciones paso a paso:**

1. Crea `atributos.html`
2. Agrega un `<a>` con `href`, `target="_blank"` y `title`
3. Agrega un `<img>` con `src`, `alt`, `width` y `height`
4. Agrega un `<input>` con `type`, `placeholder`, `required` y `maxlength`
5. Abre en el navegador

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Atributos HTML</title>
</head>
<body>
  <h1>Atributos HTML</h1>

  <p>
    <a href="https://ejemplo.com" target="_blank" title="Ir a ejemplo">
      Visitar ejemplo
    </a>
  </p>

  <img
    src="https://via.placeholder.com/300x200"
    alt="Imagen de placeholder"
    width="300"
    height="200"
  >

  <form>
    <label for="nombre">Nombre:</label>
    <input
      type="text"
      id="nombre"
      name="nombre"
      placeholder="Tu nombre"
      required
      maxlength="50"
    >
  </form>
</body>
</html>
```

</details>
