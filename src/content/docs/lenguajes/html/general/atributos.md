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

Los atributos se escriben dentro de la etiqueta de apertura como pares `nombre="valor"`. Se separan con espacios y el orden no importa.

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

Los atributos globales funcionan en **cualquier** elemento HTML. Son como propiedades universales que todo elemento puede tener.

```html
<!-- class: agrega una o más clases CSS. Se usan con puntos en CSS -->
<div class="contenedor principal">...</div>

<!-- id: identificador único en toda la página. Se usa con # en CSS -->
<section id="introduccion">...</section>

<!-- style: aplica estilos inline (sin CSS externo) -->
<p style="color: red; font-size: 18px;">Texto rojo</p>

<!-- title: muestra un tooltip al pasar el mouse -->
<abbr title="HyperText Markup Language">HTML</abbr>

<!-- lang: indica el idioma de ese elemento específico -->
<span lang="en">Hello</span>
```

```html
<!-- hidden: oculta el elemento (no se muestra pero sigue en el DOM) -->
<div hidden>Este texto no se ve</div>

<!-- tabindex: define el orden al presionar Tab para navegar con teclado -->
<input tabindex="1" />
<input tabindex="2" />

<!-- data-*: almacena datos personalizados accesibles con JavaScript -->
<button data-id="123" data-action="delete">Eliminar</button>
```

---

## Atributos obligatorios

Algunos elementos **necesitan** ciertos atributos para funcionar correctamente. Sin ellos, el elemento puede no renderizarse o no pasar validación:

```html
<!-- src y alt son obligatorios en img -->
<!-- src: ruta de la imagen -->
<!-- alt: texto alternativo para lectores de pantalla y si la imagen no carga -->
<img src="foto.jpg" alt="Descripción de la imagen">

<!-- href es obligatorio en a (sin JavaScript) -->
<!-- Sin href, el enlace no funciona como enlace -->
<a href="https://ejemplo.com">Enlace</a>

<!-- type es obligatorio en input — define qué tipo de campo es -->
<input type="text">    <!-- Campo de texto -->
<input type="email">   <!-- Campo de correo (valida formato) -->
<input type="password"> <!-- Campo de contraseña (oculta caracteres) -->
```

---

## Atributos booleanos

Los atributos booleanos no necesitan valor. Se activan simplemente con escribir el nombre del atributo en la etiqueta:

```html
<!-- required: el campo debe completarse antes de enviar el formulario -->
<input type="text" required>

<!-- disabled: el campo está deshabilitado, el usuario no puede interactuar -->
<input type="text" disabled>

<!-- checked: preselecciona un checkbox o radio button -->
<input type="checkbox" checked>

<!-- readonly: el usuario ve el valor pero no puede editarlo -->
<input type="text" readonly>

<!-- autofocus: el cursor se coloca automáticamente al cargar la página -->
<input type="text" autofocus>
```

Puedes escribir `required="required"` o simplemente `required`. Ambos son válidos, pero la forma corta es la convención moderna.

---

## Atributos comunes por tipo de elemento

Cada tipo de elemento tiene sus propios atributos específicos:

```html
<!-- Enlaces -->
<!-- rel="noopener" previene que la página abierta tenga acceso a tu ventana -->
<a href="url" target="_blank" rel="noopener">Enlace</a>

<!-- Imágenes -->
<!-- loading="lazy" carga la imagen solo cuando está cerca del viewport -->
<img src="url" alt="texto" width="200" height="150" loading="lazy">

<!-- Formularios -->
<!-- name: identifica el campo al enviar el formulario al servidor -->
<input type="text" name="usuario" placeholder="Nombre" required>
<textarea rows="4" cols="50"></textarea>
<select>
  <option value="1">Opción 1</option>
</select>
```

---

## Múltiples atributos

Se pueden combinar varios atributos en un solo elemento. Se separan con espacios y el orden no importa:

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

Este estilo de una línea por atributo es recomendado cuando hay más de 3 atributos. Hace el código más legible.

---

## Resumen

| Atributo | Elementos | Descripción |
|---|---|---|
| `id` | Todos | Identificador único en la página |
| `class` | Todos | Clase(s) CSS para estilos |
| `style` | Todos | Estilos inline |
| `src` | img, script, iframe | Origen del recurso |
| `href` | a, link | URL de destino |
| `alt` | img | Texto alternativo (accesibilidad) |
| `required` | input, select | Campo obligatorio |
| `disabled` | input, textarea, button | Campo deshabilitado |
| `placeholder` | input, textarea | Texto de ejemplo |

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
