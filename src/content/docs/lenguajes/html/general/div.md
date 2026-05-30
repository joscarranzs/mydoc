---
title: Div
description: Contenedor genérico.
module: lenguajes/html
submodule: general
order: 22
---

Al completar esta guía podrás:

- Usar div como contenedor genérico
- Agrupar elementos para aplicar estilos
- Diferenciar div de etiquetas semánticas
- Usar div para layouts simples

---

## Sintaxis

`<div>` es un contenedor de bloque sin significado semántico. Se usa como recurso de agrupación cuando ninguna etiqueta semántica encaja mejor:

```html
<div>
  <h2>Sección</h2>
  <p>Contenido agrupado sin significado semántico.</p>
</div>
```

---

## Agrupar para estilos

El uso más común es agrupar elementos para aplicar CSS a un conjunto entero:

```html
<style>
  .tarjeta {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    max-width: 400px;
    margin: 20px auto;
  }
  .tarjeta h2 {
    color: #1A73E8;
  }
</style>

<div class="tarjeta">
  <h2>Título de la tarjeta</h2>
  <p>Contenido de la tarjeta agrupado para aplicar estilos comunes.</p>
</div>
```

---

## Div para layouts

`div` sigue siendo muy útil para layouts, especialmente cuando quieres dividir una interfaz en columnas o zonas visuales:

```html
<style>
  .contenedor {
    display: flex;
    gap: 20px;
    padding: 20px;
  }
  .columna {
    flex: 1;
    background: #f0f0f0;
    padding: 16px;
    border-radius: 8px;
  }
</style>

<div class="contenedor">
  <div class="columna">
    <h3>Columna 1</h3>
    <p>Contenido de la primera columna.</p>
  </div>
  <div class="columna">
    <h3>Columna 2</h3>
    <p>Contenido de la segunda columna.</p>
  </div>
  <div class="columna">
    <h3>Columna 3</h3>
    <p>Contenido de la tercera columna.</p>
  </div>
</div>
```

---

## Div vs etiquetas semánticas

Siempre que exista una etiqueta semántica adecuada, conviene preferirla. `div` debe ser la opción genérica, no la primera por defecto:

```html
<!-- Sin semántica: difícil de entender -->
<div id="header">...</div>
<div id="nav">...</div>
<div id="main">...</div>
<div id="footer">...</div>

<!-- Semántico: claro para humanos y máquinas -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>
```

---

## Div anidados

Útil para estructuras complejas. A medida que una interfaz crece, los `div` ayudan a organizar bloques visuales, aunque conviene mantener nombres claros en `class`:

```html
<div class="pagina">
  <div class="cabecera">
    <div class="logo">Logo</div>
    <div class="menu">Menú</div>
  </div>
  <div class="contenido">
    <div class="sidebar">Barra lateral</div>
    <div class="principal">
      <div class="articulo">Artículo 1</div>
      <div class="articulo">Artículo 2</div>
    </div>
  </div>
</div>
```

---

## Div sin clase

Un `div` sin atributos solo añade un salto de bloque. Sin CSS o semántica, no aporta significado por sí mismo:

```html
<p>Texto antes</p>
<div>
  <p>Texto dentro del div</p>
</div>
<p>Texto después</p>
```

Sin CSS, el div no tiene efecto visual más allá del comportamiento de bloque.

---

## Centrar un div

Una técnica clásica es usar un ancho fijo y `margin: 0 auto` para centrar horizontalmente un contenedor:

```html
<div style="
  width: 300px;
  margin: 0 auto;
  background: lightgray;
  padding: 20px;
  text-align: center;
">
  Div centrado horizontalmente
</div>
```

---

## Resumen

Usa `div` para agrupar y maquetar, pero no para describir contenido cuando exista una etiqueta más precisa.

| Característica | Descripción |
|---|---|
| Tipo | Bloque |
| Semántica | Ninguna (contenedor genérico) |
| Uso principal | Agrupar elementos para CSS |
| Alternativa semántica | header, main, section, article, footer |
| Atributos comunes | class, id, style |

---

## Ejercicio

Crea una página con tres divs anidados: contenedor principal (centrado, max-width 800px), cabecera (fondo azul claro), contenido (flex con dos columnas), y pie (fondo gris).

**Instrucciones paso a paso:**

1. Crea `div.html`
2. Crea un div contenedor centrado
3. Dentro, un div cabecera con título
4. Un div contenido con display flex y dos divs columna
5. Un div pie con texto de copyright

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Div en HTML</title>
  <style>
    body { background: #f5f5f5; font-family: Arial, sans-serif; }
    .contenedor {
      max-width: 800px;
      margin: 20px auto;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .cabecera {
      background: #e8f0fe;
      padding: 20px;
      text-align: center;
    }
    .contenido {
      display: flex;
      padding: 20px;
      gap: 20px;
    }
    .columna {
      flex: 1;
      background: #f8f9fa;
      padding: 16px;
      border-radius: 8px;
    }
    .pie {
      background: #333;
      color: white;
      padding: 16px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="contenedor">
    <div class="cabecera">
      <h1>Mi sitio</h1>
    </div>
    <div class="contenido">
      <div class="columna">
        <h2>Columna izquierda</h2>
        <p>Contenido de la columna izquierda.</p>
      </div>
      <div class="columna">
        <h2>Columna derecha</h2>
        <p>Contenido de la columna derecha.</p>
      </div>
    </div>
    <div class="pie">
      <p>&copy; 2024 Mi sitio</p>
    </div>
  </div>
</body>
</html>
```

</details>
