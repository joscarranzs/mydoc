---
title: FOOTER
module: html
submodule: organization/footer
---

El elemento `<footer>` representa el pie de una sección o del documento completo. Contiene información de cierre: copyright, enlaces legales, autor, fecha de publicación o navegación secundaria.

```html
<footer>
  <p>&copy; 2026 — Todos los derechos reservados.</p>
  <nav>
    <a href="/aviso-legal">Aviso legal</a>
    <a href="/privacidad">Privacidad</a>
  </nav>
</footer>
```

## Uso como pie de página

Cuando `<footer>` es hijo directo de `<body>`, actúa como el pie de página global del documento:

```html
<body>
  <header>...</header>
  <main>...</main>

  <footer>
    <p>&copy; 2026 Mi Sitio Web</p>
    <address>
      Contacto: <a href="mailto:info@ejemplo.com">info@ejemplo.com</a>
    </address>
  </footer>
</body>
```

## Uso como pie de sección

`<footer>` también puede cerrar `<article>`, `<section>`, `<aside>` o `<nav>`, proporcionando metadatos específicos de esa sección:

```html
<article>
  <h2>Título del artículo</h2>
  <p>Contenido...</p>

  <footer>
    <p>Publicado el <time datetime="2026-05-30">30 de mayo de 2026</time></p>
    <p>Autor: María García</p>
    <p>Categoría: <a href="/css">CSS</a></p>
  </footer>
</article>
```

## Qué puede contener

- Información de copyright y año.
- Enlaces legales (aviso legal, privacidad, términos).
- Información de contacto (usando `<address>`).
- Enlaces a redes sociales.
- Navegación secundaria.
- Logotipo o nombre de la empresa.
- Fecha de publicación o actualización.
- Atribuciones y créditos.

## Qué NO debe contener

- `<footer>` no puede contener otro `<footer>` ni `<header>`.
- No debe contener contenido que forme parte del flujo principal de la sección.

## Múltiples footers por página

Al igual que `<header>`, un documento puede tener múltiples `<footer>`: uno global y otros dentro de `<article>` o `<section>`.

```html
<body>
  <article>
    <h2>Artículo</h2>
    <p>Contenido...</p>
    <footer>Pie del artículo (autor, fecha)</footer>
  </article>

  <footer>Pie global (copyright, enlaces legales)</footer>
</body>
```

---

## Ejercicio: footer completo

Crea el `<footer>` global de un sitio web que incluya:

1. Copyright con año dinámico
2. Enlaces a: Aviso legal, Política de privacidad, Cookies
3. Información de contacto con `<address>` (email y teléfono)
4. Enlaces a redes sociales (tres iconos como texto: Twitter, LinkedIn, GitHub)

<details>
<summary><strong>Ver solución</strong></summary>

```html
<footer>
  <div class="footer-grid">
    <div class="footer-seccion">
      <h3>Enlaces legales</h3>
      <nav>
        <a href="/aviso-legal">Aviso legal</a>
        <a href="/privacidad">Política de privacidad</a>
        <a href="/cookies">Política de cookies</a>
      </nav>
    </div>

    <div class="footer-seccion">
      <h3>Contacto</h3>
      <address>
        <a href="mailto:info@ejemplo.com">info@ejemplo.com</a><br>
        <a href="tel:+525512345678">+52 55 1234 5678</a>
      </address>
    </div>

    <div class="footer-seccion">
      <h3>Síguenos</h3>
      <nav>
        <a href="https://twitter.com/ejemplo">Twitter</a>
        <a href="https://linkedin.com/company/ejemplo">LinkedIn</a>
        <a href="https://github.com/ejemplo">GitHub</a>
      </nav>
    </div>
  </div>

  <hr>
  <p>&copy; 2026 Mi Sitio Web. Todos los derechos reservados.</p>
</footer>
```

</details>
