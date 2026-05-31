---
title: COLORES
module: html
submodule: presentation/colors
---

HTML proporciona varios formatos para definir colores. Aunque históricamente algunos elementos HTML tenían atributos de color (`bgcolor`, `text`, `link`), hoy en día los colores se definen exclusivamente mediante CSS.

## Formatos de color en CSS

### Nombres de color

CSS reconoce 148 nombres de color estándar:

```css
color: red;
background-color: blue;
border-color: darkgreen;
```

Los nombres son intuitivos pero limitados. Para un control preciso se usan formatos numéricos.

### Hexadecimal (#RRGGBB)

El formato más utilizado en la web. Cada par de caracteres representa un componente RGB en base 16:

```css
color: #ff0000;   /* Rojo */
color: #00ff00;   /* Verde */
color: #0000ff;   /* Azul */
color: #ffffff;   /* Blanco */
color: #000000;   /* Negro */
color: #2a6f97;   /* Azul personalizado */
```

La forma abreviada de 3 caracteres es válida cuando cada par tiene dígitos repetidos:

```css
color: #f00;  /* Equivalente a #ff0000 */
color: #0f0;  /* Equivalente a #00ff00 */
```

El formato hexadecimal con canal alfa añade dos dígitos para opacidad:

```css
color: #ff000080;  /* Rojo al 50% */
```

### RGB y RGBa

```css
color: rgb(255, 0, 0);          /* Rojo */
color: rgb(0, 128, 0);          /* Verde oscuro */
color: rgba(42, 111, 151, 0.5); /* Azul al 50% de opacidad */
```

RGBa es especialmente útil cuando solo se quiere transparencia en un color específico.

### HSL y HSLa

HSL (Hue, Saturation, Lightness) es más intuitivo para los humanos:

```css
color: hsl(0, 100%, 50%);         /* Rojo */
color: hsl(200, 60%, 40%);        /* Azul oscuro */
color: hsla(200, 60%, 40%, 0.7);  /* Azul oscuro al 70% */
```

- **Hue** (0–360): ángulo en la rueda cromática. 0 es rojo, 120 es verde, 240 es azul.
- **Saturation** (0–100%): intensidad del color. 0% es gris, 100% es puro.
- **Lightness** (0–100%): brillo. 0% es negro, 100% es blanco.

## Atributos de color obsoletos en HTML

Las versiones antiguas de HTML incluían atributos de color en varios elementos. Están obsoletos y no deben usarse en documentos nuevos:

```html
<!-- Obsoleto: no usar -->
<body bgcolor="#ffffff" text="#333333" link="#0000cc">
<font color="red">Texto rojo</font>
<table bordercolor="#ccc">...</table>
<hr color="blue">
```

Todo esto se reemplaza por CSS:

```css
body {
  background-color: #ffffff;
  color: #333333;
}
a { color: #0000cc; }
```

## Colores del sistema y currentColor

CSS también permite valores especiales:

```css
color: currentColor;  /* Hereda el color actual del elemento */
color: transparent;   /* Invisible pero ocupa espacio */
```

`currentColor` es particularmente útil para elementos como bordes o sombras que deben coincidir con el color del texto:

```css
button {
  color: #0066cc;
  border: 2px solid currentColor; /* El borde usa el mismo color del texto */
}
```

---

## Ejercicio: tarjeta con colores

Crea el CSS para una tarjeta de producto que use tres formatos de color distintos:

1. El fondo de la tarjeta en hexadecimal (`#f8f9fa`)
2. El precio en RGB (`rgb(0, 150, 0)`)
3. El nombre del producto en HSL
4. Un botón de compra con color definido y opacidad mediante RGBa

<details>
<summary><strong>Ver solución</strong></summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tarjeta de producto</title>
  <style>
    .tarjeta {
      background: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      padding: 1.5rem;
      max-width: 320px;
    }

    .tarjeta h2 {
      color: hsl(210, 60%, 40%);
      margin: 0 0 0.5rem;
    }

    .tarjeta .precio {
      color: rgb(0, 150, 0);
      font-size: 1.5rem;
      font-weight: bold;
    }

    .tarjeta button {
      background: rgba(0, 102, 204, 0.9);
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }

    .tarjeta button:hover {
      background: rgba(0, 102, 204, 1);
    }
  </style>
</head>
<body>

  <div class="tarjeta">
    <h2>Auriculares Bluetooth</h2>
    <p class="precio">$49.99</p>
    <button>Añadir al carrito</button>
  </div>

</body>
</html>
```

</details>
