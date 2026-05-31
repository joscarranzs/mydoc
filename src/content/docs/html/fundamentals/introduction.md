---
title: INTRODUCCIÓN
module: html
submodule: fundamentals/introduction
---

La web moderna descansa sobre tres pilares tecnológicos: **HTML** para la estructura, **CSS** para la presentación y **JavaScript** para el comportamiento. HTML —HyperText Markup Language— constituye la capa fundamental sobre la que se construye toda experiencia en el navegador.

## ¿Qué es HTML?

HTML es un lenguaje de marcado que define la semántica y la organización de un documento web. A diferencia de los lenguajes de programación, HTML no ejecuta instrucciones: **describe contenido**. Cada elemento HTML actúa como un contenedor con un significado específico que el navegador interpreta para renderizar texto, imágenes, formularios, tablas y otros recursos multimedia.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Mi primer documento</title>
  </head>
  <body>
    <h1>Hola, mundo</h1>
    <p>Este es un párrafo de texto.</p>
  </body>
</html>
```

La estructura del documento se compone de dos grandes bloques: `head` —metadatos, título y enlaces a recursos— y `body` —contenido visible. El navegador procesa el marcado secuencialmente y construye el **árbol DOM** (Document Object Model), una representación en memoria que permite a lenguajes como JavaScript interactuar con la página.

## Semántica y accesibilidad

Uno de los principios fundamentales del HTML moderno es la **semántica significativa**. Elegir el elemento correcto no solo mejora el posicionamiento en buscadores, sino que garantiza que tecnologías de asistencia —lectores de pantalla, navegadores por voz— interpreten correctamente el contenido.

```html
<!-- Incorrecto: usar divs genéricos para todo -->
<div class="nav">Inicio · Blog · Contacto</div>
<div class="main">Contenido principal</div>
<div class="footer">© 2026</div>

<!-- Correcto: elementos semánticos -->
<nav>Inicio · Blog · Contacto</nav>
<main>Contenido principal</main>
<footer>© 2026</footer>
```

Un documento HTML semántico es más legible, mantenible y universal. No se trata de una preocupación estética: es una decisión técnica que impacta directamente en la experiencia de usuarios con discapacidades y en la eficiencia del rastreo de motores de búsqueda.

## Estándar y evolución

HTML es mantenido por el **WHATWG** (Web Hypertext Application Technology Working Group) como un estándar vivo — _living standard_ —, lo que significa que evoluciona continuamente sin versiones discretas. La última gran revisión, comúnmente conocida como HTML5, introdujo elementos como `<section>`, `<article>`, `<header>`, `<footer>`, `<video>` y `<canvas>`, además de APIs nativas para almacenamiento local, geolocalización y renderizado gráfico.

Cada elemento HTML posee un **modelo de contenido** específico —qué tipo de hijos puede albergar— y una serie de **atributos** que modifican su comportamiento o apariencia. El estándar completo se consulta en la [especificación del WHATWG](https://html.spec.whatwg.org/).

## Tu primer documento

Escribir HTML no requiere herramientas especializadas. Cualquier editor de texto produce un documento válido. La estructura mínima es el esqueleto con el que trabajaremos durante todo el módulo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título de la página</title>
</head>
<body>

</body>
</html>
```

La declaración `<!DOCTYPE html>` instruye al navegador para que utilice el modo estándar, evitando comportamientos de retrocompatibilidad (_quirks mode_) que producen resultados inconsistentes entre navegadores. El atributo `lang="es"` en `<html>` define el idioma del documento, información crítica para la accesibilidad y el SEO.

---

## Ejercicio: construye tu primera página

Crea un documento HTML completo que incluya:

1. Un título de página que diga "Mi perfil"
2. Un encabezado principal (`<h1>`) con tu nombre
3. Un párrafo (`<p>`) que describa brevemente tu ocupación o área de estudio
4. Una lista desordenada (`<ul>`) con tres habilidades técnicas
5. Un pie de página (`<footer>`) con el año actual

Puedes apoyarte en la plantilla mínima proporcionada más arriba.

<details>
<summary><strong>Ver solución</strong></summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi perfil</title>
</head>
<body>

  <h1>Carlos Mendoza</h1>
  <p>Desarrollador frontend con interés en accesibilidad web y diseño de sistemas de componentes.</p>

  <h2>Habilidades técnicas</h2>
  <ul>
    <li>HTML semántico y estructuras accesibles</li>
    <li>CSS moderno: Flexbox, Grid, Custom Properties</li>
    <li>JavaScript (ES2024+) y TypeScript</li>
  </ul>

  <footer>
    <p>&copy; 2026</p>
  </footer>

</body>
</html>
```

</details>
