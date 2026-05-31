---
title: ATRIBUTOS
module: html
submodule: fundamentals/attributes
---

Los atributos modifican el comportamiento, la apariencia o la semántica de un elemento HTML. Se escriben dentro de la etiqueta de apertura como pares de clave-valor, aunque algunos solo requieren su presencia para surtir efecto.

## Sintaxis general

Un atributo se compone de un nombre, el signo `=` y un valor entre comillas:

```html
<a href="https://ejemplo.com" target="_blank" rel="noopener">
  Visitar sitio
</a>

<img src="logo.png" alt="Logotipo de la empresa" width="200" height="100">
```

Las comillas simples también son válidas, pero por convención y consistencia se usan comillas dobles. El valor puede omitirse cuando el atributo es booleano.

## Atributos globales

Ciertos atributos están disponibles en **todos** los elementos HTML, independientemente de su tipo. Son el mecanismo principal para añadir contexto, estilo e identificación al contenido.

| Atributo      | Propósito |
|---------------|-----------|
| `class`       | Asigna uno o varios nombres de clase para CSS. Múltiples clases se separan con espacio. |
| `id`          | Identificador único en el documento. Un mismo valor no puede repetirse. |
| `style`       | Estilos CSS en línea. Se recomienda usarlo solo para prototipado o valores dinámicos. |
| `lang`        | Define el idioma del contenido del elemento. Heredable. |
| `dir`         | Dirección del texto: `ltr`, `rtl` o `auto`. |
| `title`       | Texto informativo que aparece como _tooltip_ al posar el cursor. |
| `hidden`      | Oculta el elemento del renderizado sin eliminarlo del DOM. |
| `tabindex`    | Controla el orden de navegación por teclado. |
| `role`        | Define el propósito semántico para tecnologías de asistencia. |

```html
<article class="post destacado" lang="es" id="post-42">
  <h2 class="post-title" dir="auto">Título del artículo</h2>
  <p class="post-meta" title="Publicado el 30 de mayo de 2026">
    Hace 2 horas
  </p>
  <button tabindex="0" role="button">Leer más</button>
</article>
```

## Atributos booleanos

Un atributo booleano se activa por su mera presencia. Si está ausente, su valor es `false`. La práctica recomendada es escribir solo el nombre del atributo:

```html
<input type="text" required disabled readonly>

<button disabled>Enviar</button>

<details open>
  <summary>Más información</summary>
  <p>Este detalle comienza abierto por defecto.</p>
</details>
```

También es válida la forma `disabled="disabled"` o `disabled=""`, pero añade ruido visual sin beneficio técnico.

## Atributos personalizados (data-\*)

El estándar reserva el prefijo `data-` para atributos personalizados que los desarrolladores pueden usar para almacenar información adicional sin violar la validez del documento. Son accesibles desde JavaScript mediante la propiedad `dataset`:

```html
<article
  data-id="42"
  data-category="tecnologia"
  data-author="carlos"
  data-published="2026-05-30"
>
  <h2>Artículo con metadatos embebidos</h2>
</article>
```

```javascript
const article = document.querySelector('article');
console.log(article.dataset.id);       // "42"
console.log(article.dataset.category); // "tecnologia"
```

Usar `data-*` evita recurrir a clases o IDs con significado codificado y mantiene la semántica limpia.

## Atributos específicos por elemento

Cada elemento define sus propios atributos según su naturaleza:

```html
<!-- Enlaces -->
<a href="..." target="_blank" rel="noopener noreferrer" download>

<!-- Imágenes -->
<img src="foto.webp" alt="Descripción" loading="lazy" decoding="async">

<!-- Formularios -->
<input type="email" name="correo" placeholder="usuario@ejemplo.com"
       pattern="[^@\s]+@[^@\s]+\.[^@\s]+" autocomplete="email">

<!-- Video -->
<video src="presentacion.mp4" controls autoplay muted loop
       poster="miniatura.jpg" width="1280" height="720">
</video>
```

Seleccionar los atributos correctos mejora la accesibilidad, el rendimiento y la experiencia de usuario sin necesidad de escribir una línea de JavaScript.

## ARIA: atributos para accesibilidad

Los atributos ARIA (Accessible Rich Internet Applications) complementan la semántica nativa de HTML cuando esta no es suficiente. No modifican el comportamiento visual, sino la información que los lectores de pantalla presentan al usuario:

```html
<button aria-label="Cerrar ventana" aria-expanded="true">
  ×
</button>

<nav aria-label="Navegación principal">
  <ul>
    <li><a href="/" aria-current="page">Inicio</a></li>
    <li><a href="/blog">Blog</a></li>
  </ul>
</nav>

<div role="alert" aria-live="polite">
  El formulario contiene errores.
</div>
```

La regla de oro es: **no usar ARIA cuando un elemento HTML nativo cumple la misma función**. Un `<button>` no necesita `role="button"`, y un `<nav>` no necesita `role="navigation"`.

## Atributos de eventos

Los atributos `on*` permiten asociar código JavaScript directamente en el marcado. Aunque funcionales, su uso se considera una mala práctica en proyectos medianos o grandes por mezclar lógica con presentación:

```html
<!-- Evitar: mezcla lógica con marcado -->
<button onclick="alert('Hola')">Saludar</button>

<!-- Preferir: event listeners desde JavaScript -->
<button id="btn-saludar">Saludar</button>
<script>
  document.getElementById('btn-saludar')
    .addEventListener('click', () => alert('Hola'));
</script>
```

La separación de responsabilidades mejora la legibilidad, el testing y el mantenimiento del código.

---

## Ejercicio: ficha de producto con atributos

Crea el HTML de una ficha de producto para un catálogo en línea que incluya:

1. Un `<article>` con `data-*` attributes para ID, categoría y precio
2. Una imagen (`<img>`) con `src`, `alt`, `width`, `height` y `loading="lazy"`
3. Un título `<h2>` con `lang` y `dir`
4. Un `<button>` deshabilitado con `aria-label`
5. Un enlace `<a>` a una página de detalle que abra en nueva pestaña con `rel="noopener noreferrer"`

<details>
<summary><strong>Ver solución</strong></summary>

```html
<article
  data-id="128"
  data-category="electronica"
  data-price="299.99"
>
  <img
    src="auriculares.jpg"
    alt="Auriculares inalámbricos con cancelación de ruido"
    width="400"
    height="300"
    loading="lazy"
  >

  <h2 lang="en" dir="ltr">QuietComfort Ultra Headphones</h2>

  <p class="price">$299.99</p>

  <button disabled aria-label="Producto agotado, notificar cuando esté disponible">
    Agotado
  </button>

  <a href="/productos/128" target="_blank" rel="noopener noreferrer">
    Ver detalle
  </a>
</article>
```

</details>
