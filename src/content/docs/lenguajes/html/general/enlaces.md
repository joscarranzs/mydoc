---
title: Enlaces
description: Hipervínculos con a.
module: lenguajes/html
submodule: general
order: 15
---

Al completar esta guía podrás:

- Crear enlaces con la etiqueta a
- Usar rutas absolutas y relativas
- Abrir enlaces en nueva pestaña
- Vincular a secciones de la misma página
- Crear enlaces de correo y teléfono

---

## Sintaxis básica

La etiqueta `<a>` con el atributo `href` crea un enlace. El texto visible debe ser claro para que el usuario sepa a dónde va:

```html
<a href="https://ejemplo.com">Visitar ejemplo</a>
```

El texto entre las etiquetas es lo que ve el usuario. Procura que describa la acción o destino.

---

## Rutas absolutas

Una ruta absoluta incluye protocolo y dominio. Se usa para enlaces externos o cuando quieres apuntar a una URL completa:

```html
<a href="https://www.google.com">Google</a>
<a href="https://es.wikipedia.org/wiki/HTML">Wikipedia</a>
<a href="https://github.com">GitHub</a>
```

---

## Rutas relativas

Una ruta relativa parte de la ubicación del archivo actual. Es la forma más común para navegar dentro del mismo sitio:

```html
<!-- Misma carpeta -->
<a href="pagina.html">Página</a>

<!-- Subcarpeta -->
<a href="secciones/contacto.html">Contacto</a>

<!-- Carpeta padre -->
<a href="../index.html">Volver al inicio</a>

<!-- Raíz del sitio -->
<a href="/">Inicio del sitio</a>
<a href="/blog/articulo.html">Artículo</a>
```

---

## target

Controla dónde se abre el enlace. El valor más usado es `_blank`, que abre una nueva pestaña:

```html
<!-- Misma pestaña (por defecto) -->
<a href="pagina.html">Abrir aquí</a>

<!-- Nueva pestaña o ventana -->
<a href="https://ejemplo.com" target="_blank">Abrir en nueva pestaña</a>

<!-- Mismo frame (obsoleto) -->
<a href="pagina.html" target="_self">Misma pestaña</a>
```

---

## rel="noopener"

Conviene usarlo siempre con `target="_blank"` por seguridad. Evita que la página abierta pueda manipular la ventana original:

```html
<a href="https://ejemplo.com" target="_blank" rel="noopener">
  Enlace seguro
</a>
```

```html
<!-- Combinaciones comunes -->
<a href="https://ejemplo.com" target="_blank" rel="noopener noreferrer">
  Máxima seguridad
</a>

<a href="/pagina.html" target="_blank" rel="noopener">
  Mismo sitio en nueva pestaña
</a>
```

---

## Anclas internas

Las anclas internas sirven para navegar dentro de una misma página, muy útil en índices largos o páginas extensas:

```html
<!-- Menú de navegación -->
<nav>
  <a href="#introduccion">Introducción</a>
  <a href="#caracteristicas">Características</a>
  <a href="#contacto">Contacto</a>
</nav>

<!-- Secciones destino -->
<h2 id="introduccion">Introducción</h2>
<p>Contenido de la introducción...</p>

<h2 id="caracteristicas">Características</h2>
<p>Contenido de características...</p>

<h2 id="contacto">Contacto</h2>
<p>Información de contacto...</p>
```

---

## Correo y teléfono

HTML también permite acciones directas como abrir el cliente de correo o iniciar una llamada:

```html
<!-- Correo electrónico -->
<a href="mailto:info@ejemplo.com">Enviar correo</a>

<!-- Con asunto predefinido -->
<a href="mailto:info@ejemplo.com?subject=Consulta">
  Enviar consulta
</a>

<!-- Teléfono (móvil) -->
<a href="tel:+34123456789">Llamar al 123 456 789</a>
```

---

## Enlaces con título

El atributo `title` muestra un tooltip al pasar el ratón. Úsalo como ayuda extra, no como único texto informativo:

```html
<a
  href="https://es.wikipedia.org/wiki/HTML"
  title="Artículo completo sobre HTML en Wikipedia"
  target="_blank"
  rel="noopener"
>
  HTML en Wikipedia
</a>
```

---

## Imagen como enlace

Un enlace puede contener una imagen. En ese caso, el `alt` debe describir la acción o destino del enlace:

```html
<a href="https://ejemplo.com">
  <img src="banner.jpg" alt="Ir a ejemplo.com">
</a>
```

---

## Resumen

| Atributo | Descripción | Ejemplo |
|---|---|---|
| `href` | URL de destino | `href="https://..."` |
| `target` | Dónde abrir | `target="_blank"` |
| `rel` | Relación con el destino | `rel="noopener"` |
| `title` | Tooltip informativo | `title="Ver más"` |
| `id` | Destino de ancla | `href="#seccion"` |

---

## Ejercicio

Crea una página con: un enlace externo que se abra en nueva pestaña, un enlace a una sección interna de la misma página, un enlace de correo electrónico, y un enlace con imagen.

**Instrucciones paso a paso:**

1. Crea `enlaces.html`
2. Agrega un enlace externo a Wikipedia con target _blank
3. Agrega un enlace interno a #contacto
4. Agrega un enlace mailto
5. Agrega un enlace con imagen

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Enlaces HTML</title>
</head>
<body>
  <h1>Tipos de enlaces</h1>

  <h2>Enlace externo (nueva pestaña)</h2>
  <a
    href="https://es.wikipedia.org/wiki/HTML"
    target="_blank"
    rel="noopener"
  >
    Wikipedia: HTML
  </a>

  <h2>Enlace interno</h2>
  <a href="#contacto">Ir a contacto</a>

  <h2>Enlace de correo</h2>
  <a href="mailto:hola@ejemplo.com">Enviar correo</a>

  <h2>Enlace con imagen</h2>
  <a href="https://ejemplo.com" target="_blank" rel="noopener">
    <img
      src="https://via.placeholder.com/200x100"
      alt="Ir a ejemplo.com"
    >
  </a>

  <!-- Sección destino del enlace interno -->
  <h2 id="contacto" style="margin-top: 200px;">Contacto</h2>
  <p>Esta es la sección de contacto.</p>
  <a href="#">Volver arriba</a>
</body>
</html>
```

</details>
