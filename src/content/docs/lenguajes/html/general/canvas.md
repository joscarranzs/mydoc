---
title: Canvas
description: Dibujo con canvas.
module: lenguajes/html
submodule: general
order: 47
---

Al completar esta guía podrás:

- Crear un elemento canvas en HTML
- Dibujar formas básicas con JavaScript
- Aplicar colores y estilos
- Animar elementos en canvas

---

## Elemento canvas

```html
<canvas id="lienzo" width="400" height="300">
  Tu navegador no soporta canvas.
</canvas>
```

El contenido entre etiquetas se muestra si no hay soporte.

---

## Contexto de dibujo

Canvas se dibuja con JavaScript. El contexto 2D es el más común:

```html
<canvas id="miCanvas" width="400" height="300"></canvas>

<script>
  const canvas = document.getElementById('miCanvas');
  const ctx = canvas.getContext('2d');
</script>
```

---

## Rectángulos

```html
<canvas id="rectangulos" width="400" height="200"></canvas>

<script>
  const ctx = document.getElementById('rectangulos').getContext('2d');

  // fillRect(x, y, ancho, alto) — rectángulo relleno
  ctx.fillStyle = '#1A73E8';
  ctx.fillRect(20, 20, 150, 80);

  // strokeRect(x, y, ancho, alto) — solo borde
  ctx.strokeStyle = '#d93025';
  ctx.lineWidth = 3;
  ctx.strokeRect(200, 20, 150, 80);

  // clearRect(x, y, ancho, alto) — borra área
  ctx.clearRect(50, 40, 60, 40);
</script>
```

---

## Líneas

```html
<canvas id="lineas" width="400" height="200"></canvas>

<script>
  const ctx = document.getElementById('lineas').getContext('2d');

  ctx.beginPath();
  ctx.moveTo(20, 20);     // punto inicial
  ctx.lineTo(380, 180);   // punto final
  ctx.strokeStyle = '#1A73E8';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Línea quebrada
  ctx.beginPath();
  ctx.moveTo(50, 180);
  ctx.lineTo(150, 50);
  ctx.lineTo(250, 180);
  ctx.lineTo(350, 50);
  ctx.strokeStyle = '#d93025';
  ctx.lineWidth = 2;
  ctx.stroke();
</script>
```

---

## Círculos y arcos

```html
<canvas id="circulos" width="400" height="200"></canvas>

<script>
  const ctx = document.getElementById('circulos').getContext('2d');

  // arc(x, y, radio, anguloInicio, anguloFin)
  // ángulos en radianes: 0 a Math.PI * 2

  // Círculo relleno
  ctx.beginPath();
  ctx.arc(100, 100, 60, 0, Math.PI * 2);
  ctx.fillStyle = '#1A73E8';
  ctx.fill();

  // Círculo con borde
  ctx.beginPath();
  ctx.arc(250, 100, 60, 0, Math.PI * 2);
  ctx.strokeStyle = '#d93025';
  ctx.lineWidth = 4;
  ctx.stroke();

  // Arco (semicírculo)
  ctx.beginPath();
  ctx.arc(370, 100, 50, 0, Math.PI);
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 3;
  ctx.stroke();
</script>
```

---

## Texto

```html
<canvas id="texto" width="400" height="200"></canvas>

<script>
  const ctx = document.getElementById('texto').getContext('2d');

  ctx.font = '24px Arial';
  ctx.fillStyle = '#1A73E8';
  ctx.fillText('Texto relleno', 20, 60);

  ctx.font = '24px Arial';
  ctx.strokeStyle = '#d93025';
  ctx.strokeText('Texto con borde', 20, 120);

  ctx.font = 'bold 32px Arial';
  ctx.fillStyle = '#333';
  ctx.textAlign = 'center';
  ctx.fillText('Centrado', 200, 180);
</script>
```

---

## Colores y degradados

```html
<canvas id="degradados" width="400" height="150"></canvas>

<script>
  const ctx = document.getElementById('degradados').getContext('2d');

  // Degradado lineal
  const gradiente = ctx.createLinearGradient(0, 0, 400, 0);
  gradiente.addColorStop(0, '#1A73E8');
  gradiente.addColorStop(1, '#d93025');
  ctx.fillStyle = gradiente;
  ctx.fillRect(20, 20, 360, 50);

  // Degradado radial
  const radial = ctx.createRadialGradient(200, 110, 10, 200, 110, 50);
  radial.addColorStop(0, '#fff');
  radial.addColorStop(1, '#1A73E8');
  ctx.fillStyle = radial;
  ctx.beginPath();
  ctx.arc(200, 110, 50, 0, Math.PI * 2);
  ctx.fill();
</script>
```

---

## Animación básica

```html
<canvas id="animacion" width="400" height="200"></canvas>

<script>
  const canvas = document.getElementById('animacion');
  const ctx = canvas.getContext('2d');
  let x = 0;

  function dibujar() {
    ctx.clearRect(0, 0, 400, 200);

    ctx.fillStyle = '#1A73E8';
    ctx.beginPath();
    ctx.arc(x, 100, 20, 0, Math.PI * 2);
    ctx.fill();

    x += 2;
    if (x > 420) x = -20;

    requestAnimationFrame(dibujar);
  }

  dibujar();
</script>
```

---

## Resumen

| Método | Descripción |
|---|---|
| `fillRect(x, y, w, h)` | Rectángulo relleno |
| `strokeRect(x, y, w, h)` | Rectángulo con borde |
| `fillText(texto, x, y)` | Texto relleno |
| `arc(x, y, r, inicio, fin)` | Círculo o arco |
| `beginPath()` | Inicia un nuevo trazado |
| `moveTo(x, y)` | Mueve el lápiz sin dibujar |
| `lineTo(x, y)` | Dibuja línea hasta el punto |
| `stroke()` | Aplica el trazo |
| `fill()` | Aplica el relleno |

---

## Ejercicio

Crea un canvas que dibuje: un rectángulo azul, un círculo rojo con borde, y texto centrado. Usa degradado de fondo.

**Instrucciones paso a paso:**

1. Crea `canvas.html`
2. Canvas de 400x300
3. Degradado de fondo que cubra todo el canvas
4. Rectángulo azul en la esquina superior izquierda
5. Círculo rojo en el centro
6. Texto centrado en la parte inferior

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Canvas</title>
</head>
<body>
  <h1>Canvas</h1>
  <canvas id="dibujo" width="400" height="300"></canvas>

  <script>
    const ctx = document.getElementById('dibujo').getContext('2d');

    // Fondo degradado
    const fondo = ctx.createLinearGradient(0, 0, 400, 300);
    fondo.addColorStop(0, '#e8f0fe');
    fondo.addColorStop(1, '#fce8e6');
    ctx.fillStyle = fondo;
    ctx.fillRect(0, 0, 400, 300);

    // Rectángulo azul
    ctx.fillStyle = '#1A73E8';
    ctx.fillRect(20, 20, 120, 80);

    // Círculo rojo con borde
    ctx.beginPath();
    ctx.arc(200, 150, 60, 0, Math.PI * 2);
    ctx.fillStyle = '#d93025';
    ctx.fill();
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Texto centrado
    ctx.font = 'bold 20px Arial';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.fillText('Dibujo con Canvas', 200, 270);
  </script>
</body>
</html>
```

</details>
