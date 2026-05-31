---
title: TABLAS
module: html
submodule: content/tables
---

Las tablas HTML organizan datos en filas y columnas. Cada celda pertenece a una fila y una columna, y su intersección define el valor.

```html
<table>
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
    <th>Ciudad</th>
  </tr>
  <tr>
    <td>Ana López</td>
    <td>28</td>
    <td>Madrid</td>
  </tr>
  <tr>
    <td>Carlos Ruiz</td>
    <td>34</td>
    <td>Barcelona</td>
  </tr>
</table>
```

## Estructura completa

Las tablas complejas se dividen en tres secciones para facilitar el estilo y la accesibilidad:

| Elemento | Propósito |
|----------|-----------|
| `<thead>` | Encabezados de columna |
| `<tbody>` | Cuerpo con los datos |
| `<tfoot>` | Pie de tabla (totales, resúmenes) |

```html
<table>
  <thead>
    <tr>
      <th>Producto</th>
      <th>Cantidad</th>
      <th>Precio</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptop</td>
      <td>2</td>
      <td>$1,200</td>
      <td>$2,400</td>
    </tr>
    <tr>
      <td>Monitor</td>
      <td>3</td>
      <td>$450</td>
      <td>$1,350</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total general</td>
      <td>$3,750</td>
    </tr>
  </tfoot>
</table>
```

## Celdas de encabezado con `<th>`

`<th>` marca una celda como encabezado. El atributo `scope` define a qué celdas aplica:

| Valor | Significado |
|-------|-------------|
| `col` | Encabezado de columna |
| `row` | Encabezado de fila |
| `colgroup` | Encabezado de un grupo de columnas |
| `rowgroup` | Encabezado de un grupo de filas |

```html
<table>
  <thead>
    <tr>
      <th scope="col">Producto</th>
      <th scope="col">Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Laptop</th>
      <td>$1,200</td>
    </tr>
    <tr>
      <th scope="row">Monitor</th>
      <td>$450</td>
    </tr>
  </tbody>
</table>
```

`scope` es crítico para la accesibilidad: los lectores de pantalla anuncian el encabezado correspondiente al navegar por las celdas.

## Fusión de celdas

`colspan` extiende una celda a través de múltiples columnas. `rowspan` la extiende a través de múltiples filas:

```html
<table>
  <tr>
    <th colspan="2">Datos del cliente</th>
  </tr>
  <tr>
    <td>Nombre</td>
    <td>María García</td>
  </tr>
  <tr>
    <td rowspan="2">Contacto</td>
    <td>maria@ejemplo.com</td>
  </tr>
  <tr>
    <td>+52 55 1234 5678</td>
  </tr>
</table>
```

## `<caption>`

Define un título o descripción para la tabla, visible para todos los usuarios:

```html
<table>
  <caption>Ventas trimestrales por región (2026)</caption>
  <thead>
    <tr>
      <th>Región</th>
      <th>Q1</th>
      <th>Q2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Norte</td>
      <td>$50,000</td>
      <td>$65,000</td>
    </tr>
  </tbody>
</table>
```

---

## Ejercicio: tabla de horario de clases

Crea una tabla que represente un horario semanal de clases con:

1. Encabezados de columna para los días (lunes a viernes)
2. Primera columna con las horas (8:00, 9:00, 10:00)
3. Una celda de `colspan="2"` para "Receso" a las 10:00
4. Un `<caption>` que diga "Horario de clases - Semestre 2026"

<details>
<summary><strong>Ver solución</strong></summary>

```html
<table>
  <caption>Horario de clases - Semestre 2026</caption>
  <thead>
    <tr>
      <th scope="col">Hora</th>
      <th scope="col">Lunes</th>
      <th scope="col">Martes</th>
      <th scope="col">Miércoles</th>
      <th scope="col">Jueves</th>
      <th scope="col">Viernes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">8:00</th>
      <td>Matemáticas</td>
      <td>Física</td>
      <td>Matemáticas</td>
      <td>Física</td>
      <td>Programación</td>
    </tr>
    <tr>
      <th scope="row">9:00</th>
      <td>Programación</td>
      <td>Química</td>
      <td>Programación</td>
      <td>Química</td>
      <td>Matemáticas</td>
    </tr>
    <tr>
      <th scope="row">10:00</th>
      <td colspan="5" style="text-align: center;">Receso</td>
    </tr>
    <tr>
      <th scope="row">11:00</th>
      <td>Inglés</td>
      <td>Historia</td>
      <td>Inglés</td>
      <td>Historia</td>
      <td>Libre</td>
    </tr>
  </tbody>
</table>
```

</details>
