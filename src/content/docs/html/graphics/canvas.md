---
title: CANVAS
module: html
submodule: graphics/canvas
---

El elemento `<canvas>` proporciona un área de dibujo bitmap manipulable mediante JavaScript. Es la base para gráficos dinámicos, visualización de datos, juegos 2D, edición de imágenes y renderizado en tiempo real.

```html
<canvas id="mi-lienzo" width="400" height="300">
  Tu navegador no soporta canvas.
</canvas>
```

## Cómo funciona

`<canvas>` crea una superficie de píxeles del tamaño especificado por `width` y `height`. No tiene API de dibujo propia; todo se hace a través de su **contexto de renderizado**, obtenido con `getContext()`.

```javascript
const canvas = document.getElementById('mi-lienzo');
const ctx = canvas.getContext('2d');

// Dibujar un rectángulo relleno
ctx.fillStyle = '#0066cc';
ctx.fillRect(50, 50, 200, 100);

// Dibujar un rectángulo con borde
ctx.strokeStyle = '#003366';
ctx.lineWidth = 4;
ctx.strokeRect(50, 50, 200, 100);
```

## API básica de dibujo 2D

### Formas simples

```javascript
const ctx = canvas.getContext('2d');

// Rectángulo
ctx.fillRect(x, y, width, height);
ctx.strokeRect(x, y, width, height);
ctx.clearRect(x, y, width, height); // Borra un área

// Ruta (líneas y curvas)
ctx.beginPath();
ctx.moveTo(50, 50);       // Punto inicial
ctx.lineTo(200, 50);      // Línea recta
ctx.arc(125, 100, 50, 0, Math.PI * 2); // Círculo
ctx.closePath();
ctx.fill();
ctx.stroke();
```

### Estilos

```javascript
ctx.fillStyle = '#ff6600';           // Color de relleno
ctx.strokeStyle = '#333';            // Color de borde
ctx.lineWidth = 2;                   // Grosor de línea
ctx.font = '20px system-ui';         // Fuente para texto
ctx.fillText('Hola Canvas', 50, 50); // Texto relleno
ctx.strokeText('Hola Canvas', 50, 80); // Texto hueco
```

### Animación

Canvas no tiene animación propia. Se usa `requestAnimationFrame` para crear bucles de renderizado:

```javascript
function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Actualizar posición y dibujar
  ctx.fillStyle = '#0066cc';
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fill();

  x += velocidad;
  requestAnimationFrame(animar);
}

requestAnimationFrame(animar);
```

## Canvas vs. SVG

| Aspecto | Canvas | SVG |
|---------|--------|-----|
| Tipo | Bitmap (píxeles) | Vectorial (formas) |
| Escalabilidad | Se pixeliza al escalar | Escala sin pérdida |
| Accesibilidad | No accesible | Accesible con etiquetas |
| Rendimiento | Mejor con muchos elementos | Mejor con pocos elementos |
| Eventos | No por elemento (solo por canvas) | Sí, por cada elemento SVG |
| Uso típico | Juegos, gráficos dinámicos, edición de imágenes | Iconos, gráficos estáticos, mapas, diagramas |

---

## Ejercicio: círculo animado

Escribe el JavaScript necesario para dibujar un círculo azul que se mueva horizontalmente a través de un canvas de 400x300, rebotando en los bordes.

<details>
<summary><strong>Ver solución</strong></summary>

```html
<canvas id="animacion" width="400" height="300">
  Tu navegador no soporta canvas.
</canvas>

<script>
  const canvas = document.getElementById('animacion');
  const ctx = canvas.getContext('2d');

  let x = 50;
  let velocidad = 3;
  const radio = 20;

  function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0066cc';
    ctx.beginPath();
    ctx.arc(x, 150, radio, 0, Math.PI * 2);
    ctx.fill();

    x += velocidad;

    if (x + radio > canvas.width || x - radio < 0) {
      velocidad = -velocidad;
    }

    requestAnimationFrame(dibujar);
  }

  dibujar();
</script>
```

</details>
