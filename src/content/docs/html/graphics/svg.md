---
title: SVG
module: html
submodule: graphics/svg
---

SVG (Scalable Vector Graphics) es un formato de imagen vectorial basado en XML. A diferencia de los formatos raster como PNG o JPG, las imágenes SVG están compuestas por formas geométricas descritas matemáticamente, lo que permite escalarlas a cualquier resolución sin pérdida de calidad.

```html
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" fill="#0066cc" stroke="#003366" stroke-width="2" />
</svg>
```

## Formas básicas

| Elemento | Descripción | Atributos |
|----------|-------------|-----------|
| `<circle>` | Círculo | `cx`, `cy`, `r` |
| `<rect>` | Rectángulo | `x`, `y`, `width`, `height`, `rx`, `ry` |
| `<line>` | Línea | `x1`, `y1`, `x2`, `y2` |
| `<ellipse>` | Elipse | `cx`, `cy`, `rx`, `ry` |
| `<polygon>` | Polígono | `points` (lista de coordenadas) |
| `<path>` | Trayectoria personalizada | `d` (comandos de dibujo) |

```html
<svg width="300" height="200" viewBox="0 0 300 200">
  <!-- Rectángulo con bordes redondeados -->
  <rect x="10" y="10" width="100" height="80" rx="10" fill="#e74c3c" />

  <!-- Círculo -->
  <circle cx="200" cy="50" r="40" fill="#3498db" stroke="#2c3e50" stroke-width="3" />

  <!-- Línea -->
  <line x1="10" y1="150" x2="290" y2="150" stroke="#333" stroke-width="2" />

  <!-- Polígono (triángulo) -->
  <polygon points="150,120 190,180 110,180" fill="#2ecc71" />
</svg>
```

## SVG inline vs. `<img>` vs. `<object>`

| Método | Ventajas | Desventajas |
|--------|----------|-------------|
| **Inline** (`<svg>...</svg>`) | Accesible, estilizable con CSS, scripteable | Aumenta el tamaño del HTML |
| **`<img src="imagen.svg">`** | Caché del navegador, separación | No accesible, no estilizable |
| **`<object data="imagen.svg">`** | Accesible, scripteable | Sintaxis más verbosa |

```html
<!-- Inline (recomendado para iconos) -->
<svg width="24" height="24" viewBox="0 0 24 24">
  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" stroke-width="2"/>
</svg>

<!-- Como imagen -->
<img src="logo.svg" alt="Logotipo" width="200" height="50">

<!-- Como objeto -->
<object data="mapa.svg" type="image/svg+xml" width="400" height="300">
  <img src="mapa.png" alt="Mapa estático">
</object>
```

## SVG responsivo

El atributo `viewBox` define el sistema de coordenadas interno y permite que el SVG escale proporcionalmente:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- viewBox="x y width height" define el área visible -->
  <circle cx="50" cy="50" r="45" fill="#0066cc" />
</svg>
```

Con `viewBox`, el SVG se adapta al contenedor padre. Sin `width` y `height` explícitos, ocupa el 100% del ancho disponible.

## Animación SVG

SVG soporta animación nativa mediante `<animate>` y CSS:

```html
<svg width="200" height="200" viewBox="0 0 200 200">
  <circle cx="100" cy="100" r="30" fill="#0066cc">
    <animate attributeName="r" values="30;50;30" dur="2s" repeatCount="indefinite" />
  </circle>

  <rect x="50" y="150" width="100" height="20" fill="#e74c3c">
    <animate attributeName="x" values="50;20;50;80;50" dur="4s" repeatCount="indefinite" />
  </rect>
</svg>
```

También se puede animar con CSS:

```css
@keyframes girar {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

svg .icono {
  animation: girar 3s linear infinite;
}
```

---

## Ejercicio: icono SVG de usuario

Crea un SVG inline que represente un icono de usuario (cabeza y hombros) usando un círculo para la cabeza y un rectángulo con bordes redondeados para el torso.

<details>
<summary><strong>Ver solución</strong></summary>

```html
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Cabeza -->
  <circle cx="32" cy="20" r="12" fill="#0066cc" />

  <!-- Torso -->
  <rect x="12" y="36" width="40" height="24" rx="12" fill="#0066cc" />
</svg>
```

Para hacerlo más detallado, se puede usar un `<path>` para formas más complejas.

</details>
