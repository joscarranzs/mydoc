---
title: Introducción
description: Qué es HTML y su historia.
module: lenguajes/html
submodule: general
order: 2
---

Al completar esta guía podrás:

- Conocer la historia y evolución de HTML
- Identificar las versiones principales de HTML
- Entender el rol del W3C y WHATWG
- Reconocer la diferencia entre HTML y HTML5

---

## Historia

HTML fue creado por Tim Berners-Lee en 1991 como un sistema para compartir documentos científicos en el CERN.

```html
<!-- Primer documento HTML (1991) -->
<header>
  <title>World Wide Web</title>
</header>
<p>
  The WorldWideWeb (W3) is a wide-area
  hypermedia information retrieval initiative...
</p>
```

---

## Versiones de HTML

| Versión | Año | Características |
|---|---|---|
| HTML 1.0 | 1991 | Etiquetas básicas, sin estándar formal |
| HTML 2.0 | 1995 | Primer estándar del IETF |
| HTML 3.2 | 1997 | Tablas, scripts, applets |
| HTML 4.01 | 1999 | CSS, hojas de estilo, accesibilidad |
| XHTML 1.0 | 2000 | HTML como XML, estricto |
| HTML5 | 2014 | Multimedia, semántica, APIs |

---

## HTML5

HTML5 es la versión actual y más importante. Introdujo:

```html
<!-- Etiquetas semánticas -->
<header>Cabecera</header>
<nav>Navegación</nav>
<main>Contenido principal</main>
<section>Sección</section>
<article>Artículo</article>
<footer>Pie de página</footer>

<!-- Multimedia nativa -->
<video src="video.mp4" controls></video>
<audio src="audio.mp3" controls></audio>

<!-- APIs modernas -->
<canvas id="lienzo"></canvas>
```

---

## W3C vs WHATWG

El W3C (World Wide Web Consortium) fue el organismo que estandarizó HTML hasta la versión 4.

El WHATWG (Web Hypertext Application Technology Working Group) fue creado por Apple, Mozilla y Opera para evolucionar HTML más rápido.

Desde 2019, el WHATWG es el único responsable del estándar HTML vivo (Living Standard).

---

## HTML como Living Standard

HTML ya no tiene versiones numéricas. El estándar se actualiza continuamente:

```html
<!-- Características recientes -->
<picture>
  <source srcset="webp" type="image/webp">
  <img src="fallback.jpg" alt="">
</picture>

<dialog open>
  Diálogo nativo sin JavaScript
</dialog>

<details>
  <summary>Ver más</summary>
  Contenido expandible sin JavaScript
</details>
```

---

## Resumen

| Hito | Descripción |
|---|---|
| 1991 | Tim Berners-Lee crea HTML |
| HTML 4.01 | Estándar dominante por más de una década |
| HTML5 | Multimedia, semántica, APIs |
| Living Standard | Actualización continua sin versiones |
| WHATWG | Organismo actual del estándar |

---

## Ejercicio

Crea un documento HTML5 que use al menos tres etiquetas semánticas (`<header>`, `<main>`, `<footer>`).

**Instrucciones paso a paso:**

1. Crea un archivo `semantica.html`
2. Agrega `<!DOCTYPE html>` y la estructura básica
3. Usa `<header>` para el encabezado
4. Usa `<main>` para el contenido principal
5. Usa `<footer>` para el pie de página
6. Agrega texto en cada sección

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>HTML5 Semántico</title>
</head>
<body>
  <header>
    <h1>Mi sitio web</h1>
    <nav>
      <a href="/">Inicio</a>
      <a href="/acerca">Acerca</a>
    </nav>
  </header>

  <main>
    <h2>Contenido principal</h2>
    <p>Bienvenido a mi página con HTML5 semántico.</p>
  </main>

  <footer>
    <p>&copy; 2024 Mi sitio web</p>
  </footer>
</body>
</html>
```

</details>
