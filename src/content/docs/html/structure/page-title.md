---
title: TITLE
module: html
submodule: structure/page-title
---

El elemento `<title>` es el único elemento obligatorio dentro de `<head>`. Define el título del documento que aparece en la pestaña del navegador, en los resultados de búsqueda y en las previsualizaciones al compartir en redes sociales.

```html
<head>
  <title>Cómo usar HTML semántico — Guía completa</title>
</head>
```

## Impacto en SEO y experiencia de usuario

Un buen título cumple múltiples funciones simultáneamente:

- **Identificación en pestañas**: cuando el usuario tiene varias pestañas abiertas, el título es la única referencia visual.
- **Resultados de búsqueda**: Google muestra el título como el encabezado principal del resultado. Es el factor más importante para decidir si un usuario hace clic.
- **Bookmarks**: cuando el usuario guarda la página, el título es el nombre predeterminado del marcador.
- **Accesibilidad**: los lectores de pantalla anuncian el título al cargar la página, orientando al usuario sobre dónde se encuentra.

## Buenas prácticas

- **Único por página**: cada página debe tener un título distinto. Los títulos duplicados confunden a los buscadores y a los usuarios.
- **Descriptivo y específico**: "Inicio" no es un buen título. "Inicio — Portal de noticias" es mejor.
- **Longitud recomendada**: entre 50 y 60 caracteres. Los motores de búsqueda truncan títulos más largos.
- **Palabra clave al inicio**: colocar el término principal al principio del título mejora la visibilidad en buscadores.
- **Separador consistente**: usar `—` (em dash) o `|` como separador entre el contenido y el sitio.

```html
<!-- Incorrecto: genérico y poco informativo -->
<title>Artículo 42</title>

<!-- Correcto: describe el contenido y el contexto -->
<title>Guía completa de CSS Grid — Blog de desarrollo web</title>

<!-- Incorrecto: demasiado largo, se truncará en resultados -->
<title>Guía completa y detallada para aprender CSS Grid desde cero con ejemplos prácticos y ejercicios resueltos</title>

<!-- Correcto: conciso y con palabra clave al inicio -->
<title>CSS Grid: guía completa con ejemplos — Blog Dev</title>
```

## Títulos para diferentes tipos de página

```html
<!-- Página de inicio -->
<title>Mi sitio — Desarrollo web profesional</title>

<!-- Página de categoría -->
<title>JavaScript — Tutoriales y guías | Mi sitio</title>

<!-- Página de artículo -->
<title>Cómo usar Fetch API — Mi sitio</title>

<!-- Página de error -->
<title>Página no encontrada (404) — Mi sitio</title>

<!-- Página de resultado de búsqueda -->
<title>Resultados para "CSS Grid" — Mi sitio</title>
```

## El título como metadato social

Aunque Open Graph tiene su propia etiqueta `og:title`, el `<title>` sigue siendo la fuente principal de la mayoría de plataformas cuando `og:title` no está presente:

```html
<head>
  <title>10 patrones de diseño en JavaScript — Mi Blog</title>
  <meta property="og:title" content="10 patrones de diseño en JavaScript — Mi Blog">
</head>
```

Ambos deben coincidir o ser muy similares para mantener consistencia en la presentación.

## Consideraciones técnicas

- Solo debe haber un `<title>` por documento.
- El título no admite etiquetas HTML. Si necesitas formato, usa el texto plano únicamente.
- No confundir con `<h1>`. El `<title>` es un metadato; el `<h1>` es contenido visible. Deben ser coherentes, pero no necesariamente idénticos.

---

## Ejercicio: escribe el título óptimo

Dado el siguiente contexto, escribe el `<title>` más efectivo:

- Es un tutorial sobre el método `array.map()` en JavaScript.
- Pertenece a un sitio llamado "JS Academy".
- El título debe aparecer en buscadores compitiendo con otros tutoriales similares.

<details>
<summary><strong>Ver solución</strong></summary>

```html
<title>array.map() en JavaScript: guía con ejemplos — JS Academy</title>
```

Justificación:
- La palabra clave `array.map()` aparece al inicio.
- Especifica el lenguaje y el tipo de contenido ("guía con ejemplos").
- Incluye la marca al final con un separador limpio.
- 53 caracteres, dentro del rango óptimo de 50–60.

</details>
