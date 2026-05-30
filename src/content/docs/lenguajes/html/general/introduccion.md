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

HTML fue creado por Tim Berners-Lee en 1991 mientras trabajaba en el CERN, el centro de investigación nuclear europeo. Su objetivo era crear un sistema para compartir documentos científicos entre investigadores de todo el mundo.

La idea era simple pero poderosa: usar hipervínculos para conectar documentos entre sí, creando una "telaraña" de información. Así nació la World Wide Web.

```html
<!-- Este era el tipo de código que escribía Tim Berners-Lee en 1991 -->
<header>
  <title>World Wide Web</title>
</header>
<p>
  The WorldWideWeb (W3) is a wide-area
  hypermedia information retrieval initiative...
</p>
```

Como ves, las etiquetas ya eran similares a las que usamos hoy. La diferencia es que en ese momento no existían estándares formales.

---

## Versiones de HTML

A lo largo de los años, HTML ha evolucionado varias veces:

| Versión | Año | Cambios principales |
|---|---|---|
| HTML 1.0 | 1991 | Etiquetas básicas: h1-h6, p, a, img. Sin estándar formal |
| HTML 2.0 | 1995 | Primer estándar oficial del IETF. Formularios básicos |
| HTML 3.2 | 1997 | Tablas, scripts, applets Java. Más control de diseño |
| HTML 4.01 | 1999 | CSS integrado, hojas de estilo. Enfoque en separar contenido y presentación |
| XHTML 1.0 | 2000 | HTML reescrito como XML. Sintaxis más estricta |
| HTML5 | 2014 | Multimedia nativo, APIs modernas, semántica mejorada |

---

## HTML5

HTML5 es la versión actual y la más importante. Introdujo cambios fundamentales que transformaron la forma de crear páginas web.

**Etiquetas semánticas** — Antes de HTML5, todo se organizaba con `<div>`. Ahora tenemos etiquetas que describen el contenido:

```html
<!-- Antes de HTML5 -->
<div class="header">...</div>
<div class="nav">...</div>
<div class="content">...</div>

<!-- Con HTML5 semántico -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<section>...</section>
<article>...</article>
<footer>...</footer>
```

**Multimedia nativo** — Antes necesitabas plugins como Flash para reproducir video o audio. Ahora es nativo:

```html
<video src="video.mp4" controls></video>
<audio src="audio.mp3" controls></audio>
```

**APIs modernas** — HTML5 trajo nuevas capacidades como Canvas para dibujo, Geolocation para ubicación, y Drag & Drop para arrastrar elementos.

---

## W3C vs WHATWG

El estándar de HTML ha sido gestionado por dos organizaciones:

- **W3C** (World Wide Web Consortium) — Organismo que estandarizó HTML hasta la versión 4.01. Crea especificaciones formales y completas.
- **WHATWG** (Web Hypertext Application Technology Working Group) — Creado en 2004 por Apple, Mozilla y Opera. Querían evolucionar HTML más rápido que el W3C permitía.

En 2019, ambas organizaciones llegaron a un acuerdo: el WHATWG es el único responsable del estándar HTML. El W3C dejó de crear nuevas versiones de HTML.

---

## Living Standard

Desde el acuerdo de 2019, HTML ya no tiene versiones numéricas. El estándar se llama **Living Standard** (Estándar Vivo) y se actualiza continuamente.

Esto significa que nuevas características se agregan gradualmente, no en grandes lanzamientos. Los navegantes modernos implementan estas características a medida que están listas.

```html
<!-- Ejemplos de características más recientes -->

<!-- picture: imágenes responsive con múltiples formatos -->
<picture>
  <source srcset="foto.webp" type="image/webp">
  <source srcset="foto.jpg" type="image/jpeg">
  <img src="foto-fallback.jpg" alt="Foto">
</picture>

<!-- dialog: diálogos modales nativos -->
<dialog open>
  Este es un diálogo nativo sin JavaScript.
</dialog>

<!-- details/summary: contenido expandible sin JavaScript -->
<details>
  <summary>Ver más información</summary>
  <p>Este contenido se oculta hasta que el usuario hace clic.</p>
</details>
```

---

## Resumen

| Hito | Descripción |
|---|---|
| 1991 | Tim Berners-Lee crea HTML en el CERN |
| HTML 4.01 | Estándar dominante por más de una década |
| XHTML 1.0 | HTML estricto como XML |
| HTML5 | Multimedia, semántica, APIs modernas |
| Living Standard | Actualización continua, sin versiones |
| WHATWG | Organismo actual responsable del estándar |

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
