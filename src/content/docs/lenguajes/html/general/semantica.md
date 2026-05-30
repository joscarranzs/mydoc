---
title: Semántica
description: header, nav, main, section.
module: lenguajes/html
submodule: general
order: 33
---

Al completar esta guía podrás:

- Usar etiquetas semánticas de HTML5
- Estructurar una página con significado
- Mejorar accesibilidad y SEO
- Diferenciar elementos semánticos de div

---

## Qué es HTML semántico

Las etiquetas semánticas describen el significado del contenido, no solo su apariencia:

```html
<!-- Sin semántica -->
<div id="header">...</div>
<div class="nav">...</div>
<div id="main">...</div>

<!-- Con semántica -->
<header>...</header>
<nav>...</nav>
<main>...</main>
```

---

## header

Cabecera de una página o sección:

```html
<header>
  <h1>Mi sitio web</h1>
  <p>Bienvenidos a mi página personal.</p>
</header>

<section>
  <header>
    <h2>Noticias recientes</h2>
  </header>
  <!-- contenido de noticias -->
</section>
```

---

## nav

Navegación principal de la página:

```html
<nav>
  <ul>
    <li><a href="/">Inicio</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/contacto">Contacto</a></li>
  </ul>
</nav>
```

---

## main

Contenido principal y único de la página:

```html
<body>
  <header>...</header>
  <nav>...</nav>

  <main>
    <h1>Título del artículo</h1>
    <p>Contenido principal de la página.</p>
  </main>

  <footer>...</footer>
</body>
```

Solo debe haber un `<main>` por página.

---

## section

Agrupación temática de contenido:

```html
<main>
  <section>
    <h2>Introducción</h2>
    <p>Texto de introducción.</p>
  </section>

  <section>
    <h2>Características</h2>
    <ul>
      <li>Característica 1</li>
      <li>Característica 2</li>
    </ul>
  </section>
</main>
```

---

## article

Contenido independiente y reutilizable:

```html
<article>
  <header>
    <h2>Cómo aprender HTML</h2>
    <p>Publicado el <time datetime="2024-01-15">15 de enero</time></p>
  </header>
  <p>Contenido del artículo...</p>
  <footer>
    <p>Categoría: Desarrollo web</p>
  </footer>
</article>

<article>
  <h2>Qué es CSS</h2>
  <p>Otro artículo independiente...</p>
</article>
```

---

## aside

Contenido relacionado indirectamente:

```html
<main>
  <article>
    <h2>Artículo principal</h2>
    <p>Contenido del artículo.</p>
  </article>

  <aside>
    <h3>Artículos relacionados</h3>
    <ul>
      <li><a href="#">Guía de CSS</a></li>
      <li><a href="#">Introducción a JavaScript</a></li>
    </ul>
  </aside>
</main>
```

---

## figure y figcaption

Contenido ilustrativo con leyenda:

```html
<figure>
  <img src="diagrama.png" alt="Diagrama de flujo">
  <figcaption>Diagrama de flujo del proceso de registro</figcaption>
</figure>

<figure>
  <pre><code>console.log("Hola");</code></pre>
  <figcaption>Código de ejemplo</figcaption>
</figure>
```

---

## time

Fecha y hora legible por máquina:

```html
<p>Publicado <time datetime="2024-03-15">15 de marzo de 2024</time></p>
<p>Evento a las <time datetime="18:00">6:00 PM</time></p>
<p>Duración: <time datetime="PT2H30M">2 horas y 30 minutos</time></p>
```

---

## Resumen

| Etiqueta | Significado | Uso principal |
|---|---|---|
| `<header>` | Cabecera | Introducción o navegación |
| `<nav>` | Navegación | Menú de enlaces |
| `<main>` | Principal | Contenido único de la página |
| `<section>` | Sección | Agrupación temática |
| `<article>` | Artículo | Contenido independiente |
| `<aside>` | Complementario | Barra lateral |
| `<figure>` | Ilustración | Imagen, código, diagrama |
| `<figcaption>` | Leyenda | Título de figure |
| `<time>` | Fecha/hora | Formato legible por máquina |

---

## Ejercicio

Crea una página de blog con: header con título y nav, main con un article (con header, time, párrafos y figure), aside con enlaces relacionados, y footer.

**Instrucciones paso a paso:**

1. Crea `semantica.html`
2. Estructura: header > nav, main > article > header + time + figure, aside, footer
3. Usa todas las etiquetas semánticas
4. Agrega contenido ficticio

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML semántico</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; background: #f9f9f9; }
    header { background: #1A73E8; color: white; padding: 20px; }
    header h1 { margin: 0; }
    nav a { color: white; margin-right: 16px; }
    .container { display: flex; gap: 20px; max-width: 1000px; margin: 20px auto; padding: 0 20px; }
    main { flex: 1; }
    aside { width: 250px; background: white; padding: 16px; border-radius: 8px; }
    article { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
    figure { margin: 0; padding: 16px; background: #f5f5f5; border-radius: 8px; text-align: center; }
    figcaption { margin-top: 8px; color: #666; font-style: italic; }
    footer { background: #333; color: white; text-align: center; padding: 16px; margin-top: 20px; }
    time { color: #666; font-size: 0.9em; }
  </style>
</head>
<body>
  <header>
    <h1>Mi Blog</h1>
    <nav>
      <a href="#">Inicio</a>
      <a href="#">Artículos</a>
      <a href="#">Contacto</a>
    </nav>
  </header>

  <div class="container">
    <main>
      <article>
        <header>
          <h2>Introducción a HTML semántico</h2>
          <p><time datetime="2024-03-15">15 de marzo de 2024</time></p>
        </header>
        <p>El HTML semántico mejora la accesibilidad y el SEO de tus páginas web.</p>
        <p>Al usar etiquetas como header, nav, main y article, los navegadores y lectores de pantalla pueden entender mejor la estructura del contenido.</p>
        <figure>
          <pre style="text-align: left;"><code>&lt;header&gt;Cabecera&lt;/header&gt;
&lt;main&gt;Contenido&lt;/main&gt;
&lt;footer&gt;Pie&lt;/footer&gt;</code></pre>
          <figcaption>Estructura semántica básica de una página HTML</figcaption>
        </figure>
      </article>
    </main>

    <aside>
      <h3>Artículos relacionados</h3>
      <ul>
        <li><a href="#">Guía de CSS</a></li>
        <li><a href="#">JavaScript moderno</a></li>
        <li><a href="#">Accesibilidad web</a></li>
      </ul>
    </aside>
  </div>

  <footer>
    <p>&copy; 2024 Mi Blog. Todos los derechos reservados.</p>
  </footer>
</body>
</html>
```

</details>
