---
title: Comentarios
description: Comentarios en HTML.
module: lenguajes/html
submodule: general
order: 12
---

Al completar esta guía podrás:

- Escribir comentarios en HTML
- Usar comentarios para organizar el código
- Depurar secciones con comentarios
- Conocer buenas prácticas con comentarios

---

## Sintaxis

Los comentarios en HTML se escriben entre `<!--` y `-->`. El navegador los ignora por completo, así que no afectan al renderizado:

```html
<!-- Esto es un comentario -->
<p>Este texto sí se ve en el navegador.</p>
<!-- <p>Este texto está comentado y no se ve.</p> -->
```

---

## Comentarios multi-línea

Cuando una explicación necesita varias líneas, puedes escribir comentarios largos sin problema:

```html
<!--
  Esto es un comentario
  de varias líneas
  que no se muestra en el navegador
-->
<p>Contenido visible.</p>
```

---

## Organizar secciones

Útil para identificar partes del documento cuando el archivo empieza a crecer:

```html
<!-- ========== HEADER ========== -->
<header>
  <h1>Mi sitio</h1>
  <nav>
    <a href="/">Inicio</a>
    <a href="/acerca">Acerca</a>
  </nav>
</header>
<!-- ========== FIN HEADER ========== -->

<!-- ========== CONTENIDO PRINCIPAL ========== -->
<main>
  <h2>Bienvenido</h2>
  <p>Contenido principal de la página.</p>
</main>
<!-- ========== FIN CONTENIDO ========== -->
```

---

## Depuración

También sirven para desactivar temporalmente partes del código mientras pruebas algo:

```html
<!--
<section class="proximamente">
  <h2>Próximamente</h2>
  <p>Sección en construcción.</p>
</section>
-->

<section class="activa">
  <h2>Sección activa</h2>
  <p>Esta sección está visible.</p>
</section>
```

---

## TODO y notas

Los comentarios pueden contener notas para desarrolladores. Son útiles para dejar pendientes o indicar algo que debe revisarse más tarde:

```html
<!-- TODO: agregar enlace a la página de productos -->
<!-- NOTA: esta sección se oculta hasta completar el diseño -->
<!-- FIXME: corregir el margen en móviles -->
```

---

## Comentarios condicionales

Para versiones antiguas de Internet Explorer (obsoleto). Hoy casi nunca se usan, pero siguen siendo parte de la historia de HTML:

```html
<!--[if IE]>
  <p>Esto solo lo ve Internet Explorer.</p>
<![endif]-->

<!--[if lt IE 9]>
  <script src="html5shiv.js"></script>
<![endif]-->
```

---

## Qué no poner en comentarios

Evita usar comentarios para información sensible o texto que debería vivir en otro lugar del código:

```html
<!-- MAL: información sensible -->
<!-- contraseña: admin123 -->
<!-- base de datos: localhost:3306 -->

<!-- MAL: datos que deben estar en otros formatos -->
<!-- El precio es $19.99, el IVA es 21% -->

<!-- BIEN: aclaraciones técnicas -->
<!-- Este script se carga diferido para no bloquear el render -->
```

---

## Resumen

| Característica | Descripción |
|---|---|
| Sintaxis | `<!-- texto -->` |
| Visibilidad | Solo en código fuente, no en navegador |
| Usos | Organizar, depurar, documentar |
| Seguridad | No poner contraseñas ni datos sensibles |

---

## Ejercicio

Crea un documento con tres secciones principales (header, main, footer). Usa comentarios para marcar el inicio y fin de cada sección. Comenta temporalmente la sección footer.

**Instrucciones paso a paso:**

1. Crea `comentarios.html`
2. Agrega estructura básica
3. Escribe header, main y footer
4. Agrega comentarios al inicio y fin de cada sección
5. Comenta todo el bloque del footer

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Comentarios HTML</title>
</head>
<body>
  <!-- INICIO HEADER -->
  <header>
    <h1>Mi sitio web</h1>
    <nav>
      <a href="/">Inicio</a>
      <a href="/blog">Blog</a>
    </nav>
  </header>
  <!-- FIN HEADER -->

  <!-- INICIO MAIN -->
  <main>
    <h2>Bienvenido</h2>
    <p>Este es el contenido principal.</p>
    <!-- TODO: agregar sección de productos destacados -->
  </main>
  <!-- FIN MAIN -->

  <!--
  <footer>
    <p>&copy; 2024 Mi sitio</p>
  </footer>
  -->
</body>
</html>
```

</details>
