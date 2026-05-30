---
title: Símbolos
description: Símbolos matemáticos y monetarios.
module: lenguajes/html
submodule: general
order: 36
---

Al completar esta guía podrás:

- Mostrar símbolos matemáticos en HTML
- Usar símbolos monetarios
- Representar flechas y formas geométricas
- Usar entidades para símbolos especiales

---

## Símbolos matemáticos

```html
<p>&sum;  — Sumatoria (∑)</p>
<p>&prod; — Producto (∏)</p>
<p>&radic; — Raíz cuadrada (√)</p>
<p>&infin; — Infinito (∞)</p>
<p>&int;  — Integral (∫)</p>
<p>&part; — Derivada parcial (∂)</p>
<p>&asymp; — Aproximadamente (≈)</p>
<p>&ne;   — No igual (≠)</p>
<p>&le;   — Menor o igual (≤)</p>
<p>&ge;   — Mayor o igual (≥)</p>
<p>&plusmn; — Más/menos (±)</p>
```

---

## Símbolos monetarios

```html
<p>&euro;  — Euro (€)</p>
<p>&pound; — Libra esterlina (£)</p>
<p>&yen;   — Yen japonés (¥)</p>
<p>&cent;  — Centavo (¢)</p>
<p>&dollar; — Dólar ($)</p>
<p>&curren; — Moneda genérica (¤)</p>
```

```html
<p>Precios: 10&pound; / 12&euro; / 14&yen;</p>
```

---

## Flechas

```html
<p>&larr;  — Flecha izquierda (←)</p>
<p>&rarr;  — Flecha derecha (→)</p>
<p>&uarr;  — Flecha arriba (↑)</p>
<p>&darr;  — Flecha abajo (↓)</p>
<p>&harr;  — Flecha bidireccional (↔)</p>
<p>&rArr;  — Flecha doble derecha (⇒)</p>
<p>&lArr;  — Flecha doble izquierda (⇐)</p>
<p>&hArr;  — Flecha doble bidireccional (⇔)</p>
```

---

## Formas geométricas

```html
<p>&spades; — Pica (♠)</p>
<p>&clubs;  — Trébol (♣)</p>
<p>&hearts; — Corazón (♥)</p>
<p>&diams;  — Diamante (♦)</p>

<p>&loz;    — Rombo (◊)</p>
<p>&bigstar; — Estrella (★)</p>
<p>&square;  — Cuadrado (□)</p>
<p>&triangle; — Triángulo (▵)</p>
```

---

## Símbolos de puntuación

```html
<p>&sect;   — Sección (§)</p>
<p>&para;   — Párrafo (¶)</p>
<p>&bull;   — Viñeta (•)</p>
<p>&hellip; — Puntos suspensivos (…)</p>
<p>&dagger; — Daga (†)</p>
<p>&Dagger; — Daga doble (‡)</p>
<p>&permil; — Por mil (‰)</p>
```

---

## Símbolos técnicos

```html
<p>&trade;  — Marca comercial (™)</p>
<p>&copy;   — Copyright (©)</p>
<p>&reg;    — Marca registrada (®)</p>
<p>&deg;    — Grado (°)</p>
<p>&micro;  — Micro (µ)</p>
<p>&prime;  — Prima (′)</p>
<p>&Prime;  — Doble prima (″)</p>
```

```html
<p>Temperatura: 25&deg;C</p>
<p>Diámetro: 10&Prime;</p>
```

---

## Fracciones

```html
<p>&frac14; — Un cuarto (¼)</p>
<p>&frac12; — Un medio (½)</p>
<p>&frac34; — Tres cuartos (¾)</p>
```

---

## Resumen

| Categoría | Entidades |
|---|---|
| Matemáticas | &sum; &prod; &radic; &infin; &int; &ne; |
| Moneda | &euro; &pound; &yen; &cent; |
| Flechas | &larr; &rarr; &uarr; &darr; |
| Figuras | &spades; &hearts; &clubs; &diams; |
| Técnicos | &trade; &copy; &reg; &deg; &micro; |

---

## Ejercicio

Crea un bloque con: temperatura en grados, un precio en euros, una flecha apuntando a la derecha, y el símbolo de infinito.

**Instrucciones paso a paso:**

1. Crea `simbolos.html`
2. Usa &deg; para grados
3. Usa &euro; para euros
4. Usa &rarr; para flecha
5. Usa &infin; para infinito

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Símbolos HTML</title>
</head>
<body>
  <h1>Símbolos HTML</h1>

  <ul>
    <li>Temperatura: 25&deg;C</li>
    <li>Precio: 19&euro;</li>
    <li>Dirección: Inicio &rarr; Productos &rarr; Detalle</li>
    <li>Resultado: &infin; (infinito)</li>
  </ul>

  <h2>Ecuación de ejemplo</h2>
  <p>
    &radic;(x&sup2; + y&sup2;) &ne; x + y
  </p>
  <p>
    &sum; de i=1 a n de i = n(n+1) / 2
  </p>
</body>
</html>
```

</details>
