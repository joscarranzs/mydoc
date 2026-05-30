---
title: SVG
description: Gráficos vectoriales.
module: lenguajes/html
submodule: general
order: 48
---

Al completar esta guía podrás:

- Crear gráficos vectoriales con SVG
- Dibujar formas básicas: rect, circle, path
- Aplicar estilos con atributos SVG
- Entender las ventajas de SVG frente a imágenes raster

---

## SVG en HTML

SVG se escribe directamente en HTML:

```html
<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" fill="#1A73E8" />
</svg>
```

---

## rect

Rectángulo con esquinas redondeadas:

```html
<svg width="300" height="150">
  <!-- Rectángulo básico -->
  <rect x="10" y="10" width="100" height="80"
        fill="#1A73E8" />

  <!-- Rectángulo con bordes redondeados -->
  <rect x="130" y="10" width="100" height="80"
        fill="#e8f0fe" stroke="#1A73E8" stroke-width="2"
        rx="10" ry="10" />

  <!-- Rectángulo solo borde -->
  <rect x="250" y="10" width="40" height="80"
        fill="none" stroke="#d93025" stroke-width="3" />
</svg>
```

---

## circle

```html
<svg width="300" height="120">
  <!-- Círculo relleno -->
  <circle cx="60" cy="60" r="40" fill="#1A73E8" />

  <!-- Círculo con borde -->
  <circle cx="160" cy="60" r="40"
          fill="none" stroke="#d93025" stroke-width="4" />

  <!-- Círculo semitransparente -->
  <circle cx="260" cy="60" r="40"
          fill="#1A73E8" opacity="0.3" />
</svg>
```

---

## ellipse

```html
<svg width="300" height="120">
  <ellipse cx="80" cy="60" rx="70" ry="40" fill="#1A73E8" />
  <ellipse cx="220" cy="60" rx="50" ry="30"
           fill="none" stroke="#d93025" stroke-width="3" />
</svg>
```

---

## line

```html
<svg width="300" height="120">
  <line x1="20" y1="20" x2="280" y2="100"
        stroke="#1A73E8" stroke-width="3" />

  <line x1="20" y1="100" x2="280" y2="20"
        stroke="#d93025" stroke-width="2" stroke-dasharray="5,5" />
</svg>
```

---

## polyline y polygon

```html
<svg width="300" height="150">
  <!-- Línea quebrada -->
  <polyline points="20,100 80,20 140,100 200,20 260,100"
            fill="none" stroke="#1A73E8" stroke-width="3" />

  <!-- Polígono (línea cerrada) -->
  <polygon points="20,130 60,50 100,130"
           fill="#e8f0fe" stroke="#1A73E8" stroke-width="2" />

  <polygon points="140,130 180,50 220,130"
           fill="#1A73E8" />
</svg>
```

---

## path

La forma más versátil. Combina líneas y curvas:

```html
<svg width="300" height="150">
  <!-- Curva Bézier -->
  <path d="M 20 100 Q 80 20 140 100 T 260 100"
        fill="none" stroke="#1A73E8" stroke-width="3" />

  <!-- Forma rellena -->
  <path d="M 20 20 L 100 20 L 80 80 Z"
        fill="#e8f0fe" stroke="#1A73E8" stroke-width="2" />
</svg>
```

Comandos de path:
- `M` — moveTo (mover sin dibujar)
- `L` — lineTo (línea recta)
- `Q` — quadratic Bézier
- `C` — cubic Bézier
- `Z` — cerrar trazado

---

## text

```html
<svg width="300" height="150">
  <text x="20" y="40" font-family="Arial" font-size="24"
        fill="#1A73E8">Texto SVG</text>

  <text x="20" y="80" font-family="Arial" font-size="18"
        fill="#333" font-weight="bold">Texto en negrita</text>

  <text x="20" y="120" font-family="Arial" font-size="16"
        fill="#666" text-anchor="middle" width="280">
    Texto centrado
  </text>
</svg>
```

---

## SVG responsive

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="180" height="80"
        fill="#1A73E8" rx="8" />
  <text x="100" y="60" fill="white"
        font-family="Arial" font-size="20"
        text-anchor="middle">SVG Responsive</text>
</svg>
```

`viewBox` define el sistema de coordenadas. El SVG se escala automáticamente.

---

## SVG vs Canvas

| Característica | SVG | Canvas |
|---|---|---|
| Tipo | Vectorial | Raster (píxeles) |
| Escalabilidad | Ilimitada | Se pixela al ampliar |
| Interactividad | CSS, eventos nativos | JavaScript manual |
| Animación | CSS, SMIL | JavaScript (requestAnimationFrame) |
| Uso ideal | Iconos, logos, gráficos | Juegos, visualización de datos |

---

## Resumen

| Elemento | Descripción |
|---|---|
| `<rect>` | Rectángulo |
| `<circle>` | Círculo |
| `<ellipse>` | Elipse |
| `<line>` | Línea recta |
| `<polyline>` | Línea quebrada |
| `<polygon>` | Polígono cerrado |
| `<path>` | Trazado personalizado |
| `<text>` | Texto |
| `viewBox` | Sistema de coordenadas responsive |

---

## Ejercicio

Crea un SVG con: un rectángulo azul con borde redondeado, un círculo rojo en el centro, una línea diagonal y texto. El SVG debe ser responsive con viewBox.

**Instrucciones paso a paso:**

1. Crea `svg.html`
2. SVG con viewBox="0 0 300 200"
3. Rectángulo azul con rx="10"
4. Círculo rojo en el centro
5. Línea diagonal
6. Texto en la parte inferior

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>SVG</title>
</head>
<body>
  <h1>SVG</h1>

  <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"
       style="max-width: 100%; border: 1px solid #ddd; border-radius: 8px;">
    <!-- Fondo -->
    <rect x="0" y="0" width="300" height="200" fill="#f8f9fa" rx="8" />

    <!-- Rectángulo azul -->
    <rect x="20" y="20" width="100" height="60"
          fill="#1A73E8" rx="8" />

    <!-- Círculo rojo -->
    <circle cx="200" cy="50" r="30"
            fill="#d93025" />

    <!-- Línea diagonal -->
    <line x1="20" y1="120" x2="280" y2="180"
          stroke="#333" stroke-width="2" stroke-dasharray="4,4" />

    <!-- Texto -->
    <text x="150" y="160" font-family="Arial" font-size="18"
          fill="#333" text-anchor="middle" font-weight="bold">
      Gráfico SVG
    </text>
  </svg>
</body>
</html>
```

</details>
