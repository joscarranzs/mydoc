---
title: Gráficos
description: Canvas, SVG.
module: lenguajes/javascript
submodule: general
order: 37
---

Al completar esta guía podrás:

- Dibujar formas básicas con Canvas
- Manipular píxeles en un canvas
- Crear gráficos escalables con SVG
- Elegir entre Canvas y SVG según el caso

---

## Canvas

Canvas es un elemento HTML que permite dibujar gráficos mediante JavaScript. Trabaja con píxeles.

```html
<canvas id="lienzo" width="400" height="300"></canvas>
```

```javascript
let canvas = document.getElementById("lienzo");
let ctx = canvas.getContext("2d");
```

---

## Dibujar formas

### Rectángulo

```javascript
// Relleno
ctx.fillStyle = "#1A73E8";
ctx.fillRect(50, 50, 100, 80);  // x, y, ancho, alto

// Solo borde
ctx.strokeStyle = "red";
ctx.lineWidth = 3;
ctx.strokeRect(200, 50, 100, 80);
```

### Línea

```javascript
ctx.beginPath();
ctx.moveTo(50, 200);    // Inicio
ctx.lineTo(350, 200);    // Fin
ctx.strokeStyle = "green";
ctx.lineWidth = 2;
ctx.stroke();
```

### Círculo

```javascript
ctx.beginPath();
ctx.arc(200, 150, 60, 0, Math.PI * 2);  // x, y, radio, inicio, fin
ctx.fillStyle = "#FF9800";
ctx.fill();
ctx.strokeStyle = "#333";
ctx.lineWidth = 2;
ctx.stroke();
```

### Texto

```javascript
ctx.font = "24px sans-serif";
ctx.fillStyle = "#333";
ctx.fillText("Hola Canvas", 50, 50);

ctx.strokeStyle = "#333";
ctx.strokeText("Hola Canvas", 50, 100);
```

---

## Gradientes

```javascript
let gradiente = ctx.createLinearGradient(0, 0, 400, 0);
gradiente.addColorStop(0, "#1A73E8");
gradiente.addColorStop(1, "#FF9800");

ctx.fillStyle = gradiente;
ctx.fillRect(50, 50, 300, 100);
```

---

## Imágenes

```javascript
let img = new Image();
img.src = "imagen.png";

img.onload = function() {
  ctx.drawImage(img, 50, 50);          // Posición original
  ctx.drawImage(img, 50, 50, 200, 150); // Escalado
};
```

---

## Manipular píxeles

```javascript
let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
let pixeles = imageData.data;

// Hacer todo más oscuro
for (let i = 0; i < pixeles.length; i += 4) {
  pixeles[i] *= 0.5;      // R
  pixeles[i + 1] *= 0.5;  // G
  pixeles[i + 2] *= 0.5;  // B
  // pixeles[i + 3] es alpha — no se modifica
}

ctx.putImageData(imageData, 0, 0);
```

---

## SVG

SVG (Scalable Vector Graphics) define gráficos con etiquetas XML. Es escalable sin pérdida de calidad.

```html
<svg width="400" height="300">
  <rect x="50" y="50" width="100" height="80" fill="#1A73E8" />
  <circle cx="200" cy="150" r="60" fill="#FF9800" />
  <line x1="50" y1="250" x2="350" y2="250" stroke="green" stroke-width="2" />
</svg>
```

### Crear SVG con JavaScript

```javascript
let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "400");
svg.setAttribute("height", "300");

let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect.setAttribute("x", "50");
rect.setAttribute("y", "50");
rect.setAttribute("width", "100");
rect.setAttribute("height", "80");
rect.setAttribute("fill", "#1A73E8");

svg.appendChild(rect);
document.body.appendChild(svg);
```

---

## Canvas vs SVG

| Característica | Canvas | SVG |
|---|---|---|
| Tipo | Píxeles (raster) | Vectores |
| Escalabilidad | Se pixeliza | Infinita |
| Rendimiento | Mejor con muchos elementos | Mejor con pocos elementos |
| Eventos | No por elemento | Sí por elemento |
| Accesibilidad | No | Sí (texto en etiquetas) |
| Animación | Con requestAnimationFrame | Con CSS o SMIL |

> **Regla:** usa Canvas para juegos, gráficos en tiempo real y manipulación de píxeles. Usa SVG para diagramas, iconos, gráficos interactivos y elementos que necesitan eventos individuales.

---

## requestAnimationFrame

Para animaciones suaves en Canvas.

```javascript
let x = 0;

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#1A73E8";
  ctx.fillRect(x, 150, 50, 50);
  x += 2;

  if (x < canvas.width) {
    requestAnimationFrame(animar);
  }
}

requestAnimationFrame(animar);
```

---

## Resumen

| API | Propósito |
|---|---|
| Canvas 2D | Gráficos por píxeles |
| SVG | Gráficos vectoriales |
| `getContext("2d")` | Contexto de dibujo de Canvas |
| `requestAnimationFrame` | Animaciones suaves |

- Canvas dibuja con JavaScript sobre píxeles
- SVG define gráficos con etiquetas XML
- Canvas es mejor para rendimiento con muchos elementos
- SVG es mejor para escalabilidad e interactividad
- `requestAnimationFrame` optimiza animaciones respecto a setInterval

---

## Ejercicio

Dibuja un círculo azul de radio 50 en el centro de un canvas de 400x300.

**Instrucciones paso a paso:**

1. Crea un `<canvas id="lienzo" width="400" height="300">`
2. Obtén el contexto 2D
3. Usa `beginPath()` para iniciar el trazado
4. Usa `arc(200, 150, 50, 0, Math.PI * 2)`
5. Asigna `ctx.fillStyle = "blue"`
6. Llama a `ctx.fill()` para rellenar

<details>
<summary>Mostrar solución</summary>

```html
<canvas id="lienzo" width="400" height="300"></canvas>

<script>
  let canvas = document.getElementById("lienzo");
  let ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(200, 150, 50, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
</script>
```

</details>
