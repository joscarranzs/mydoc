---
title: CSS
module: html
submodule: presentation/css
---

CSS (Cascading Style Sheets) es el lenguaje que controla la presentación visual de un documento HTML. Mientras HTML define la estructura y el significado, CSS define cómo se ve.

## Cómo se conecta CSS con HTML

### Enlace externo con `<link>`

El método más común y recomendado:

```html
<head>
  <link rel="stylesheet" href="css/estilos.css">
</head>
```

El atributo `rel="stylesheet"` es obligatorio. El navegador descarga el archivo en paralelo mientras continúa parseando el HTML.

### Múltiples hojas de estilo

Se pueden enlazar varias hojas, y la cascada resuelve los conflictos:

```html
<head>
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/componentes.css">
</head>
```

Las hojas declaradas después tienen mayor prioridad si la especificidad es la misma.

### Estilos condicionales con media queries

El atributo `media` permite cargar estilos solo cuando se cumple una condición:

```html
<link rel="stylesheet" href="css/movil.css" media="(max-width: 768px)">
<link rel="stylesheet" href="css/print.css" media="print">
```

### Precarga y preconnect

Para mejorar el rendimiento de carga de CSS crítico:

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preload" href="css/critico.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <link rel="stylesheet" href="css/resto.css" media="print" onload="this.media='all'">
</head>
```

## `@import` dentro de CSS

Una hoja de estilo puede importar otra mediante la directiva `@import`:

```css
/* Dentro de estilos.css */
@import url('reset.css');
@import url('base.css');
@import url('componentes.css');
```

Se recomienda evitar `@import` en producción porque las hojas importadas no se descargan en paralelo, a diferencia de múltiples etiquetas `<link>`.

## El bloque `<style>`

Para estilos embebidos directamente en el HTML:

```html
<head>
  <style>
    :root {
      --color-primario: #0066cc;
      --color-fondo: #f8f9fa;
    }

    body {
      font-family: system-ui, sans-serif;
      background: var(--color-fondo);
    }
  </style>
</head>
```

## La cascada en acción

Cuando dos reglas CSS entran en conflicto, el navegador aplica este orden:

1. **Importancia**: `!important` vence a todo.
2. **Origen**: estilos de autor > estilos de usuario > estilos de agente.
3. **Especificidad**: ID > clase > elemento.
4. **Orden**: la última declaración gana.

```html
<head>
  <style>
    .texto { color: blue; }      /* Especificidad: 0,1,0 */
    p { color: red; }             /* Especificidad: 0,0,1 */
    #parrafo { color: green; }    /* Especificidad: 1,0,0 */
  </style>
</head>
<body>
  <p id="parrafo" class="texto">Verde (gana ID)</p>
</body>
```

## Variables CSS (Custom Properties)

Las variables CSS permiten definir valores reutilizables:

```css
:root {
  --color-primario: #0066cc;
  --espaciado: 1rem;
  --radio-borde: 8px;
}

.card {
  background: var(--color-primario);
  padding: var(--espaciado);
  border-radius: var(--radio-borde);
}
```

Se heredan naturalmente y pueden sobrescribirse en contextos específicos, lo que las hace ideales para tematización.

---

## Ejercicio: enlazar CSS correctamente

Crea el `<head>` de un documento que:

1. Precargue una fuente desde Google Fonts usando `preconnect`
2. Cargue una hoja de estilos principal `css/main.css`
3. Cargue una hoja de estilos solo para impresión `css/print.css`
4. Incluya un bloque `<style>` que defina dos variables CSS (color primario y color de fondo)

<details>
<summary><strong>Ver solución</strong></summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enlazar CSS</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link rel="stylesheet" href="css/main.css">

  <link rel="stylesheet" href="css/print.css" media="print">

  <style>
    :root {
      --color-primario: #2a6f97;
      --color-fondo: #f4f7fa;
    }

    body {
      font-family: 'Inter', system-ui, sans-serif;
      background: var(--color-fondo);
    }
  </style>
</head>
<body>
  <h1>Página con estilos</h1>
</body>
</html>
```

</details>
