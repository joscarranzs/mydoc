---
title: Tablas
description: table, tr, td, th.
module: lenguajes/html
submodule: general
order: 19
---

Al completar esta guía podrás:

- Crear tablas con la estructura correcta
- Usar th para encabezados
- Combinar celdas con colspan y rowspan
- Agregar caption para accesibilidad

---

## Estructura básica

Una tabla representa datos organizados en filas y columnas. Úsala cuando la información tenga una relación clara entre campos, como inventarios, horarios o listas comparativas.

```html
<table>
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
    <th>País</th>
  </tr>
  <tr>
    <td>Ana</td>
    <td>25</td>
    <td>España</td>
  </tr>
  <tr>
    <td>Luis</td>
    <td>30</td>
    <td>México</td>
  </tr>
</table>
```

---

## table

Define la tabla completa. Normalmente se combina con CSS para controlar bordes, separación y alineación:

```html
<table style="border-collapse: collapse; width: 100%;">
  <!-- contenido -->
</table>
```

---

## tr — Fila

Cada `<tr>` es una fila de la tabla. Dentro de una fila van celdas de encabezado o de datos:

```html
<table>
  <tr>
    <td>Fila 1, Celda 1</td>
    <td>Fila 1, Celda 2</td>
  </tr>
  <tr>
    <td>Fila 2, Celda 1</td>
    <td>Fila 2, Celda 2</td>
  </tr>
</table>
```

---

## th — Encabezado

Define una celda de encabezado. Ayuda a describir qué contiene cada columna o fila:

```html
<tr>
  <th>Producto</th>
  <th>Precio</th>
  <th>Stock</th>
</tr>
```

---

## td — Celda

Define una celda de datos. Es la celda normal que contiene el contenido de la tabla:

```html
<tr>
  <td>Laptop</td>
  <td>$999</td>
  <td>12</td>
</tr>
```

---

## colspan

Combina columnas cuando una celda debe ocupar más de una columna:

```html
<table>
  <tr>
    <th colspan="2">Nombre completo</th>
    <th>Edad</th>
  </tr>
  <tr>
    <td>Ana</td>
    <td>García</td>
    <td>25</td>
  </tr>
</table>
```

---

## rowspan

Combina filas cuando una celda debe extenderse verticalmente en varias filas:

```html
<table>
  <tr>
    <th rowspan="2">España</th>
    <td>Ana</td>
    <td>25</td>
  </tr>
  <tr>
    <td>Luis</td>
    <td>30</td>
  </tr>
</table>
```

---

## caption

Título de la tabla, visible para el usuario. Es una forma sencilla de explicar de qué trata la tabla:

```html
<table>
  <caption>Lista de empleados por departamento</caption>
  <tr>
    <th>Nombre</th>
    <th>Departamento</th>
  </tr>
  <tr>
    <td>Ana</td>
    <td>Ventas</td>
  </tr>
</table>
```

---

## thead, tbody, tfoot

Agrupan filas por sección. No cambian demasiado la apariencia, pero mejoran la semántica y facilitan estilos o scripts posteriores:

```html
<table>
  <thead>
    <tr>
      <th>Producto</th>
      <th>Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptop</td>
      <td>$999</td>
    </tr>
    <tr>
      <td>Monitor</td>
      <td>$299</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$1,298</td>
    </tr>
  </tfoot>
</table>
```

---

## Resumen

En tablas reales, `th`, `caption`, `thead` y `tbody` ayudan mucho a la accesibilidad y al mantenimiento del código.

| Etiqueta | Propósito |
|---|---|
| `<table>` | Contenedor de tabla |
| `<tr>` | Fila |
| `<th>` | Celda de encabezado |
| `<td>` | Celda de datos |
| `<caption>` | Título de la tabla |
| `<thead>` | Encabezado del grupo |
| `<tbody>` | Cuerpo del grupo |
| `<tfoot>` | Pie del grupo |
| `colspan` | Combinar columnas |
| `rowspan` | Combinar filas |

---

## Ejercicio

Crea una tabla de horario de clases con: cabecera (días de la semana), al menos 3 filas con materias, y una celda combinada con colspan para "Recreo".

**Instrucciones paso a paso:**

1. Crea `tablas.html`
2. Usa thead con los días de la semana como th
3. Usa tbody con 3 filas de materias
4. Combina celdas con colspan en una fila para recreo
5. Agrega caption

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tablas HTML</title>
  <style>
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ccc; padding: 8px; text-align: center; }
    th { background: #1A73E8; color: white; }
  </style>
</head>
<body>
  <h1>Horario de clases</h1>

  <table>
    <caption>Horario semanal</caption>
    <thead>
      <tr>
        <th>Hora</th>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miércoles</th>
        <th>Jueves</th>
        <th>Viernes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>8:00</td>
        <td>Matemáticas</td>
        <td>Lengua</td>
        <td>Inglés</td>
        <td>Historia</td>
        <td>Matemáticas</td>
      </tr>
      <tr>
        <td>9:00</td>
        <td>Lengua</td>
        <td>Inglés</td>
        <td>Matemáticas</td>
        <td>Lengua</td>
        <td>Inglés</td>
      </tr>
      <tr>
        <td colspan="6">Recreo</td>
      </tr>
      <tr>
        <td>10:30</td>
        <td>Historia</td>
        <td>Matemáticas</td>
        <td>Lengua</td>
        <td>Inglés</td>
        <td>Historia</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```

</details>
