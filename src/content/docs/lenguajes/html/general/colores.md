---
title: Colores
description: Nombres, RGB, HEX, HSL.
module: lenguajes/html
submodule: general
order: 13
---

Al completar esta guía podrás:

- Usar nombres de color predefinidos
- Escribir colores en hexadecimal (HEX)
- Usar RGB y RGBA con transparencia
- Usar HSL y HSLA
- Elegir el formato adecuado para cada caso

---

## Nombres de color

HTML reconoce 147 nombres de color estándar:

```html
<p style="color: red;">red</p>
<p style="color: blue;">blue</p>
<p style="color: green;">green</p>
<p style="color: orange;">orange</p>
<p style="color: purple;">purple</p>
<p style="color: white; background: black;">white</p>
<p style="color: yellow; background: gray;">yellow</p>
```

---

## Color hexadecimal (HEX)

Formato: `#RRGGBB` (rojo, verde, azul de 00 a FF):

```html
<p style="color: #FF0000;">#FF0000 — Rojo puro</p>
<p style="color: #00FF00;">#00FF00 — Verde puro</p>
<p style="color: #0000FF;">#0000FF — Azul puro</p>
<p style="color: #000000;">#000000 — Negro</p>
<p style="color: #FFFFFF; background: black;">#FFFFFF — Blanco</p>
<p style="color: #1A73E8;">#1A73E8 — Azul Google</p>
<p style="color: #333333;">#333333 — Gris oscuro</p>
```

HEX abreviado (3 dígitos) cuando los pares son iguales:

```html
<p style="color: #F00;">#F00 = #FF0000</p>
<p style="color: #0F0;">#0F0 = #00FF00</p>
<p style="color: #00F;">#00F = #0000FF</p>
<p style="color: #FFF; background: black;">#FFF = #FFFFFF</p>
```

---

## RGB

Formato: `rgb(rojo, verde, azul)` con valores de 0 a 255:

```html
<p style="color: rgb(255, 0, 0);">rgb(255, 0, 0) — Rojo</p>
<p style="color: rgb(0, 255, 0);">rgb(0, 255, 0) — Verde</p>
<p style="color: rgb(0, 0, 255);">rgb(0, 0, 255) — Azul</p>
<p style="color: rgb(128, 128, 128);">rgb(128, 128, 128) — Gris medio</p>
<p style="color: rgb(26, 115, 232);">rgb(26, 115, 232) — Azul Google</p>
```

---

## RGBA — Transparencia

Añade el canal alpha (0 = transparente, 1 = opaco):

```html
<p style="background: rgba(0, 0, 0, 0.1);">10% opaco</p>
<p style="background: rgba(0, 0, 0, 0.3);">30% opaco</p>
<p style="background: rgba(0, 0, 0, 0.5);">50% opaco</p>
<p style="background: rgba(0, 0, 0, 0.8);">80% opaco</p>
<p style="background: rgba(0, 0, 0, 1);">100% opaco</p>
```

Útil para superposiciones y sombras:

```html
<div style="
  background: rgba(26, 115, 232, 0.1);
  border: 1px solid rgba(26, 115, 232, 0.3);
  padding: 16px;
  border-radius: 8px;
">
  <p style="color: #1A73E8;">Nota informativa con fondo semitransparente</p>
</div>
```

---

## HSL

Formato: `hsl(matiz, saturación%, luminosidad%)`:

```html
<p style="color: hsl(0, 100%, 50%);">hsl(0, 100%, 50%) — Rojo</p>
<p style="color: hsl(120, 100%, 50%);">hsl(120, 100%, 50%) — Verde</p>
<p style="color: hsl(240, 100%, 50%);">hsl(240, 100%, 50%) — Azul</p>
<p style="color: hsl(0, 0%, 50%);">hsl(0, 0%, 50%) — Gris medio</p>
<p style="color: hsl(0, 0%, 20%);">hsl(0, 0%, 20%) — Gris oscuro</p>
```

Matiz: 0-360 grados en la rueda de color.
Saturación: 0% (gris) a 100% (color puro).
Luminosidad: 0% (negro) a 100% (blanco).

---

## HSLA

HSL con canal alpha:

```html
<p style="background: hsla(217, 80%, 50%, 0.2);">
  Azul Google a 20% de opacidad
</p>
```

---

## Herramientas útiles

Seleccionar colores con herramientas visuales:

- **Colorzilla** (extensión de navegador)
- **Google Color Picker** (búsqueda de Google)
- **Coolors.co** (paletas de colores)
- **Adobe Color** (esquemas de color)

---

## Resumen

| Formato | Sintaxis | Cuándo usarlo |
|---|---|---|
| Nombre | `red`, `blue` | Prototipos rápidos |
| HEX | `#FF0000` | Preciso, más usado |
| HEX corto | `#F00` | Colores simples |
| RGB | `rgb(255,0,0)` | Programático |
| RGBA | `rgba(255,0,0,0.5)` | Transparencia |
| HSL | `hsl(0,100%,50%)` | Intuitivo para variaciones |
| HSLA | `hsla(0,100%,50%,0.5)` | Transparencia con HSL |

---

## Ejercicio

Crea una tarjeta con borde azul Google (#1A73E8), fondo azul muy claro (rgba con 10% de opacidad), texto en gris oscuro (#333), y un título en azul Google. Todo usando diferentes formatos de color.

**Instrucciones paso a paso:**

1. Crea `colores.html`
2. Crea un div con borde HEX, fondo RGBA, texto HSL
3. Dentro, un h2 con color nombre y un p con color HEX
4. Abre en el navegador

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Colores en HTML</title>
</head>
<body>
  <h1>Colores HTML</h1>

  <div style="
    border: 2px solid #1A73E8;
    background: rgba(26, 115, 232, 0.1);
    padding: 20px;
    border-radius: 8px;
    color: hsl(0, 0%, 20%);
  ">
    <h2 style="color: #1A73E8;">Tarjeta de colores</h2>
    <p style="color: #555;">
      Esta tarjeta combina HEX en el borde,
      RGBA en el fondo y HEX en el texto.
    </p>
  </div>
</body>
</html>
```

</details>
