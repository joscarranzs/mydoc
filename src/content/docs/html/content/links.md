---
title: ENLACES
module: html
submodule: content/links
---

Los enlaces son el elemento que hace a la web _hipertexto_. El elemento `<a>` (anchor) permite navegar entre páginas, descargar archivos, enviar correos o desplazarse dentro del mismo documento.

```html
<a href="https://ejemplo.com">Visitar ejemplo</a>
```

## El atributo `href`

`href` define el destino del enlace. Puede apuntar a:

```html
<!-- URL absoluta -->
<a href="https://google.com">Google</a>

<!-- URL relativa -->
<a href="/blog/articulo.html">Artículo del blog</a>

<!-- Correo electrónico -->
<a href="mailto:contacto@ejemplo.com">Enviar correo</a>

<!-- Teléfono -->
<a href="tel:+525512345678">Llamar ahora</a>

<!-- Ancla en la misma página -->
<a href="#seccion-2">Ir a la sección 2</a>

<!-- Descargar archivo -->
<a href="documento.pdf" download>Descargar PDF</a>
```

## El atributo `target`

Controla dónde se abre el enlace:

| Valor | Comportamiento |
|-------|---------------|
| `_self` | Misma pestaña (por defecto) |
| `_blank` | Nueva pestaña o ventana |
| `_parent` | Marco padre (en contextos de iframe) |
| `_top` | Ventana completa (sale de todos los marcos) |

```html
<a href="https://ejemplo.com" target="_blank">Abrir en nueva pestaña</a>
```

## Seguridad en `target="_blank"`

Cuando se usa `target="_blank"`, la página destino tiene acceso parcial a la ventana origen mediante `window.opener`. Esto es un riesgo de seguridad (_tabnapping_). Siempre debe acompañarse de `rel="noopener noreferrer"`:

```html
<a href="https://ejemplo.com" target="_blank" rel="noopener noreferrer">
  Enlace seguro a nueva pestaña
</a>
```

`rel="noopener"` evita que la página destino acceda a `window.opener`. `rel="noreferrer"` adicionalmente oculta la cabecera `Referer`.

## El atributo `rel`

Define la relación entre la página actual y el destino:

| Valor | Significado |
|-------|-------------|
| `noopener` | Bloquea acceso a `window.opener` |
| `noreferrer` | No envía cabecera Referer |
| `nofollow` | Indica a buscadores que no sigan el enlace |
| `external` | Enlace a sitio externo |
| `prev` / `next` | Enlace a página anterior/siguiente en una secuencia |

```html
<a href="https://otro-sitio.com" rel="nofollow noopener">Enlace sin seguimiento SEO</a>
<a href="/articulo-2" rel="next">Artículo siguiente</a>
```

## Enlaces internos con anclas

Los anclas permiten navegar a secciones específicas del mismo documento usando `id`:

```html
<nav>
  <a href="#intro">Introducción</a>
  <a href="#instalacion">Instalación</a>
  <a href="#configuracion">Configuración</a>
</nav>

<h2 id="intro">Introducción</h2>

<h2 id="instalacion">Instalación</h2>

<h2 id="configuracion">Configuración</h2>
```

El navegador se desplaza suavemente hasta el elemento con el `id` correspondiente. CSS puede controlar este comportamiento con `scroll-behavior: smooth`.

## Atributos adicionales

```html
<!-- Descargar con nombre personalizado -->
<a href="informe.pdf" download="Informe-2026.pdf">Descargar</a>

<!-- Sugerir idioma del destino -->
<a href="https://es.wikipedia.org" hreflang="es">Wikipedia en español</a>

<!-- Sugerir tipo MIME -->
<a href="documento.pdf" type="application/pdf">Documento</a>
```

---

## Ejercicio: barra de navegación con enlaces

Crea un `<nav>` con los siguientes enlaces:

1. Inicio -> `/`
2. Blog -> `/blog` (abrir en la misma pestaña)
3. Tutoriales -> `https://tutoriales.ejemplo.com` (abrir en nueva pestaña con seguridad)
4. Descargar guia -> `guia.pdf` (con atributo download)
5. Contacto -> `mailto:info@ejemplo.com`

<details>
<summary><strong>Ver solución</strong></summary>

```html
<nav>
  <ul>
    <li><a href="/">Inicio</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="https://tutoriales.ejemplo.com" target="_blank" rel="noopener noreferrer">Tutoriales</a></li>
    <li><a href="guia.pdf" download="Guia-HTML.pdf">Descargar guia</a></li>
    <li><a href="mailto:info@ejemplo.com">Contacto</a></li>
  </ul>
</nav>
```

</details>
