---
title: Responsive
description: Meta viewport.
module: lenguajes/html
submodule: general
order: 31
---

Al completar esta guía podrás:

- Configurar el meta viewport para responsive
- Usar media queries para adaptar el diseño
- Crear layouts que funcionen en móvil y escritorio
- Aplicar imágenes responsive con srcset

---

## Meta viewport

La base del diseño responsive:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- `width=device-width`: el ancho del viewport iguala el del dispositivo
- `initial-scale=1.0`: escala inicial sin zoom

Sin este meta, los móviles muestran la versión de escritorio reducida.

---

## Sin vs con viewport

```html
<!-- Sin viewport: el móvil escala la página completa -->
<!-- Con viewport: el contenido se adapta al ancho del dispositivo -->
```

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive</title>
</head>
```

---

## Media queries

Adaptan los estilos según el tamaño de pantalla:

```css
/* Móvil: por defecto */
body { font-size: 16px; }
.sidebar { display: none; }

/* Tablet: 768px o más */
@media (min-width: 768px) {
  body { font-size: 18px; }
  .sidebar { display: block; }
}

/* Escritorio: 1024px o más */
@media (min-width: 1024px) {
  body { font-size: 20px; }
  .layout { display: flex; gap: 20px; }
}
```

---

## Layout responsive con flexbox

```html
<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 16px;
  }
  .card {
    flex: 1 1 100%;          /* 1 columna en móvil */
    background: #f0f0f0;
    padding: 16px;
    border-radius: 8px;
  }
  @media (min-width: 600px) {
    .card { flex: 1 1 calc(50% - 8px); }  /* 2 columnas */
  }
  @media (min-width: 900px) {
    .card { flex: 1 1 calc(33% - 11px); } /* 3 columnas */
  }
</style>

<div class="container">
  <div class="card">Tarjeta 1</div>
  <div class="card">Tarjeta 2</div>
  <div class="card">Tarjeta 3</div>
</div>
```

---

## Unidades relativas

```css
/* Porcentaje: relativo al contenedor */
.main { width: 100%; }
.sidebar { width: 30%; }

/* vw/vh: relativo al viewport */
.hero { height: 100vh; }
.titulo { font-size: 5vw; }

/* rem: relativo al tamaño de fuente raíz */
body { font-size: 16px; }
h1 { font-size: 2rem; }  /* 32px */
p { font-size: 1rem; }   /* 16px */
```

---

## Imágenes responsive

```html
<!-- max-width: 100% evita desbordamiento -->
<img src="foto.jpg" alt="" style="max-width: 100%; height: auto;">

<!-- srcset: diferentes resoluciones -->
<img
  src="foto-800.jpg"
  srcset="foto-400.jpg 400w, foto-800.jpg 800w, foto-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 800px"
  alt="Foto responsive"
>

<!-- picture: diferentes formatos -->
<picture>
  <source media="(max-width: 600px)" srcset="foto-movil.jpg">
  <source media="(max-width: 1024px)" srcset="foto-tablet.jpg">
  <img src="foto.jpg" alt="">
</picture>
```

---

## Mobile first

Diseñar primero para móvil y luego añadir mejoras:

```css
/* Móvil (base) */
.layout { padding: 8px; }
.nav { display: none; }
.menu-icon { display: block; }

/* Tablet */
@media (min-width: 768px) {
  .layout { padding: 16px; }
  .nav { display: flex; }
  .menu-icon { display: none; }
}

/* Escritorio */
@media (min-width: 1024px) {
  .layout { max-width: 1200px; margin: 0 auto; }
}
```

---

## Breakpoints comunes

```css
/* Móvil: < 576px (estilos base) */

/* Móvil grande / tablet pequeña: >= 576px */
@media (min-width: 576px) { }

/* Tablet: >= 768px */
@media (min-width: 768px) { }

/* Escritorio: >= 992px */
@media (min-width: 992px) { }

/* Escritorio grande: >= 1200px */
@media (min-width: 1200px) { }
```

---

## Resumen

| Técnica | Descripción |
|---|---|
| Meta viewport | Escala correcta en móviles |
| Media queries | Estilos condicionales por tamaño |
| Flexbox wrap | Columnas adaptables |
| Unidades relativas | %, vw, vh, rem |
| Imágenes responsive | srcset, picture, max-width |
| Mobile first | Base móvil, mejoras progresivas |

---

## Ejercicio

Crea una página con tres tarjetas que se muestren en 1 columna en móvil, 2 en tablet y 3 en escritorio. Usa flexbox, media queries y viewport.

**Instrucciones paso a paso:**

1. Crea `responsive.html`
2. Agrega meta viewport
3. Crea un contenedor flex con wrap
4. Crea tres tarjetas con flex basis según breakpoints
5. Prueba redimensionando el navegador

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Diseño responsive</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }

    .container {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    .card {
      flex: 1 1 100%;
      background: white;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .card h2 { color: #1A73E8; margin-top: 0; }

    @media (min-width: 600px) {
      .card { flex: 1 1 calc(50% - 8px); }
    }

    @media (min-width: 900px) {
      .container { max-width: 1200px; margin: 0 auto; }
      .card { flex: 1 1 calc(33.333% - 11px); }
    }
  </style>
</head>
<body>
  <h1>Diseño responsive</h1>
  <p>Redimensiona el navegador para ver cómo cambian las columnas.</p>

  <div class="container">
    <div class="card">
      <h2>Tarjeta 1</h2>
      <p>Contenido de la primera tarjeta.</p>
    </div>
    <div class="card">
      <h2>Tarjeta 2</h2>
      <p>Contenido de la segunda tarjeta.</p>
    </div>
    <div class="card">
      <h2>Tarjeta 3</h2>
      <p>Contenido de la tercera tarjeta.</p>
    </div>
  </div>
</body>
</html>
```

</details>
