---
title: ENCABEZADOS
module: html
submodule: content/headings
---

HTML define seis niveles de encabezados, de `<h1>` a `<h6>`, que estructuran jerárquicamente el contenido de una página. Un encabezado no es solo texto más grande: representa el inicio de una sección temática.

```html
<h1>Título principal de la página</h1>
<h2>Capítulo o sección principal</h2>
<h3>Subsección</h3>
<h4>Detalle dentro de una subsección</h4>
<h5>Nivel de detalle fino</h5>
<h6>Nivel más específico</h6>
```

## Jerarquía y accesibilidad

La regla fundamental de los encabezados es que la jerarquía debe reflejar la estructura del contenido, no el tamaño visual. Saltarse niveles —por ejemplo, pasar de `<h1>` a `<h3>`— confunde a los lectores de pantalla, que dependen de los encabezados para navegar el documento.

```html
<!-- Incorrecto: jerarquía rota -->
<h1>Guía de CSS</h1>
<h3>Flexbox</h3>
<p>...</p>
<h3>Grid</h3>

<!-- Correcto: jerarquía continua -->
<h1>Guía de CSS</h1>
<h2>Flexbox</h2>
<p>...</p>
<h2>Grid</h2>
```

Los lectores de pantalla permiten al usuario saltar de encabezado en encabezado, listar todos los encabezados de la página o navegar por niveles. Una jerarquía correcta transforma la experiencia de navegación para usuarios con discapacidad visual.

## Un solo `<h1>` por página

El `<h1>` representa el título o tema principal del documento. Debe haber exactamente uno por página.

```html
<!-- Página de inicio -->
<h1>Portal de noticias</h1>

<!-- Página de artículo -->
<h1>Cómo funciona el modelo de caja en CSS</h1>

<!-- Página de producto -->
<h1>Auriculares inalámbricos QuietComfort</h1>
```

El `<h1>` no debe confundirse con el `<title>`. Son complementarios: el `<title>` es el metadato para pestañas y buscadores; el `<h1>` es el encabezado visual principal.

## Encabezados y SEO

Los motores de búsqueda utilizan los encabezados para entender la estructura temática de la página. Un `<h1>` descriptivo y que contenga la palabra clave principal mejora el posicionamiento. Los `<h2>` y `<h3>` organizan los subtemas.

```html
<h1>Guía completa de CSS Grid Layout</h1>

<h2>¿Qué es CSS Grid?</h2>
<p>...</p>

<h2>Propiedades del contenedor</h2>
<h3>Display: grid</h3>
<h3>Grid template columns</h3>

<h2>Propiedades de los items</h2>
<h3>Grid column y grid row</h3>
```

## Estilo por defecto

Los navegadores aplican tamaños de fuente decrecientes: `<h1>` es el más grande y `<h6>` el más pequeño. Sin embargo, el tamaño visual se controla con CSS, no cambiando el nivel del encabezado. Si necesitas texto grande pero no es un encabezado, usa un `<p>` con CSS.

```css
h1 { font-size: 2.5rem; font-weight: 700; }
h2 { font-size: 2rem; font-weight: 600; }
h3 { font-size: 1.5rem; font-weight: 600; }
```

---

## Ejercicio: estructura de encabezados para un tutorial

Crea la estructura de encabezados para una página de tutorial que cubra:

1. Título principal: "Introducción a JavaScript"
2. Sección: "Variables y tipos de datos"
3. Subsección: "Declaración con let, const y var"
4. Sección: "Funciones"
5. Subsección: "Funciones flecha"
6. Subsección: "Parámetros y argumentos"
7. Sección: "Conclusión"

<details>
<summary><strong>Ver solución</strong></summary>

```html
<h1>Introducción a JavaScript</h1>

<h2>Variables y tipos de datos</h2>
<h3>Declaración con let, const y var</h3>

<h2>Funciones</h2>
<h3>Funciones flecha</h3>
<h3>Parámetros y argumentos</h3>

<h2>Conclusión</h2>
```

</details>
