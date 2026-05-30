---
title: Título de página
description: Etiqueta title.
module: lenguajes/html
submodule: general
order: 18
---

Al completar esta guía podrás:

- Usar la etiqueta title correctamente
- Escribir títulos descriptivos y útiles
- Entender el impacto SEO del título
- Diferenciar title de otros metadatos

---

## Sintaxis

La etiqueta `<title>` va dentro de `<head>`:

```html
<head>
  <title>Mi página web</title>
</head>
```

El texto aparece en la pestaña del navegador y en los resultados de búsqueda.

---

## Ubicación

Siempre dentro de `<head>`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Guía completa de HTML | Mi Sitio</title>
</head>
<body>
  <!-- contenido -->
</body>
</html>
```

---

## Buenas prácticas SEO

```html
<!-- Bien: descriptivo y con palabras clave -->
<title>Curso de HTML para principiantes | Mi Sitio</title>

<!-- Bien: título de página + nombre del sitio -->
<title>Contacto | Mi Sitio</title>

<!-- Mal: muy corto y genérico -->
<title>Inicio</title>

<!-- Mal: demasiado largo (se corta en resultados) -->
<title>Bienvenido a la página principal de mi sitio web donde encontrarás cursos de HTML, CSS y JavaScript para desarrolladores web</title>
```

---

## Longitud recomendada

```html
<!-- 50-60 caracteres es el rango ideal -->
<title>Cómo aprender HTML en 2024 | Guía para principiantes</title>
<!-- 57 caracteres -->

<!-- Máximo recomendado: 60 caracteres -->
<title>Guía de HTML: todo lo que necesitas saber</title>
<!-- 48 caracteres -->
```

---

## Título vs h1

El `<title>` es para SEO y navegador. El `<h1>` es para el contenido visible:

```html
<head>
  <!-- Para buscadores y pestaña -->
  <title>Guía de HTML5 | Tutorial completo</title>
</head>
<body>
  <!-- Para el usuario en la página -->
  <h1>Aprende HTML5 desde cero</h1>
</body>
</html>

<!-- Ideal: title y h1 relacionados pero no idénticos -->
```

---

## Sin título

Si no hay `<title>`, el navegador muestra el nombre del archivo:

```html
<!-- Sin title -->
<head>
  <meta charset="UTF-8">
</head>
<!-- El navegador mostrará: "index.html" o "Sin título" -->
```

---

## Título dinámico con JavaScript

```html
<script>
  // Cambiar el título dinámicamente
  document.title = "Nuevo título";
</script>
```

Útil para aplicaciones web que actualizan el título según la sección:

```html
<script>
  function cambiarTitulo(seccion) {
    document.title = seccion + " | Mi App";
  }
</script>
```

---

## Resumen

| Aspecto | Recomendación |
|---|---|
| Longitud | 50-60 caracteres |
| Contenido | Descriptivo, con palabras clave |
| Formato | "Título de página | Nombre del sitio" |
| Obligatorio | Sí, toda página debe tener title |
| SEO | Alto impacto en posicionamiento |

---

## Ejercicio

Crea tres páginas (inicio.html, blog.html, contacto.html) cada una con un title optimizado para SEO. Usa el formato "Título | Nombre del sitio".

**Instrucciones paso a paso:**

1. Crea un archivo `titulo.html`
2. Agrega un title descriptivo de 50-60 caracteres
3. Agrega un h1 relacionado pero diferente
4. Verifica que el título se vea correcto en la pestaña

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Guía completa de HTML5 | Aprende desarrollo web</title>
  <!-- 51 caracteres -->
</head>
<body>
  <h1>Bienvenido a la guía de HTML5</h1>
  <p>Aprende los fundamentos del lenguaje de marcado web.</p>

  <nav>
    <a href="inicio.html">Inicio</a>
    <a href="blog.html">Blog</a>
    <a href="contacto.html">Contacto</a>
  </nav>

  <h2>Títulos recomendados para las otras páginas:</h2>
  <ul>
    <li><strong>Blog:</strong> "Artículos sobre HTML y CSS | Blog de desarrollo"</li>
    <li><strong>Contacto:</strong> "Contacto | Aprende desarrollo web"</li>
  </ul>
</body>
</html>
```

</details>
