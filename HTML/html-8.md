# Tablas en HTML: estructura, etiquetas, atributos y accesibilidad

## Tabla de contenidos

- Elementos fundamentales: `table`, `caption`, `thead`, `tbody`, `tfoot`, `tr`, `th`, `td`
- Atributos importantes: `colspan`, `rowspan`, `scope`, `headers`, `summary` (histórico)
- Encabezados de tabla y accesibilidad (scope, headers/id)
- Agrupación de filas y columnas (`colgroup`, `col`)
- Estilos y presentación (CSS para tablas, tablas responsive)
- Buenas prácticas y cuándo evitar tablas para layout
- Ejemplos prácticos
- Ejercicios
- Recursos

## Elementos fundamentales

Las tablas se usan para mostrar datos tabulares (no para diseño). Elementos clave:

- `<table>`: contenedor principal.
- `<caption>`: título de la tabla (opcional pero recomendado para accesibilidad).
- `<thead>`: grupo de filas de cabecera.
- `<tbody>`: cuerpo principal con filas de datos.
- `<tfoot>`: grupo de filas de pie (resúmenes, totales).
- `<tr>`: fila de la tabla.
- `<th>`: celda de cabecera (por defecto con `scope` implícito).
- `<td>`: celda de datos.

Estructura típica:

```html
<table>
	<caption>Ventas por trimestre</caption>
	<thead>
		<tr><th>Producto</th><th>Q1</th><th>Q2</th></tr>
	</thead>
	<tbody>
		<tr><td>Producto A</td><td>100</td><td>120</td></tr>
	</tbody>
	<tfoot>
		<tr><td>Total</td><td colspan="2">220</td></tr>
	</tfoot>
</table>
```

## Atributos importantes

- `colspan` y `rowspan`: unir celdas horizontal o verticalmente (`<td colspan="2">`).
- `scope` (en `<th>`): `col`, `row`, `colgroup`, `rowgroup` — define el alcance semántico del encabezado.
- `headers`: atributo en `<td>` que referencia IDs de `<th>` cuando la relación es compleja.
- `summary`: atributo obsoleto en HTML5 (se sustituyó por `caption` y otras técnicas accesibles).

Ejemplo de `scope`:

```html
<tr>
	<th scope="row">Producto A</th>
	<td>100</td>
	<td>120</td>
</tr>
```

## Encabezados de tabla y accesibilidad

- Para tablas sencillas, usar `<th>` en la primera fila o columna y `scope` es suficiente.
- Para tablas complejas (encabezados multi-dimensionales), usar `id` en `<th>` y `headers` en `<td>` para mapear la relación.

Ejemplo simple con `headers`:

```html
<table>
	<thead>
		<tr>
			<th id="h-product">Producto</th>
			<th id="h-q1">Q1</th>
			<th id="h-q2">Q2</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td headers="h-product">Producto A</td>
			<td headers="h-q1">100</td>
			<td headers="h-q2">120</td>
		</tr>
	</tbody>
</table>
```

Los lectores de pantalla pueden usar `headers` para leer el contexto completo de una celda.

## Agrupación de columnas: `colgroup` y `col`

`<colgroup>` y `<col>` permiten aplicar estilos o atributos a columnas enteras y mejorar la semántica:

```html
<table>
	<colgroup>
		<col span="1" style="background:#f9f9f9">
		<col span="2">
	</colgroup>
	...
</table>
```

## Estilos y tablas responsive

- CSS básico: `border-collapse`, `table-layout: fixed` (útil con `width` en celdas), `text-align`, `vertical-align`.
- Responsive strategies:
	- Scroll horizontal en pantallas pequeñas (`overflow-x:auto` en contenedor).
	- Reflow: convertir filas en bloques (cada fila se muestra como tarjeta) con CSS/JS para mejorar lectura en móvil.
	- Mostrar/ocultar columnas por prioridad usando `display:none` y `data-*` para control.

Ejemplo de contenedor scroll:

```html
<div style="overflow-x:auto;">
	<table>...</table>
</div>
```

## Buenas prácticas y cuándo evitar tablas para layout

- Las tablas deben usarse solo para datos tabulares, no para maquetación visual.
- Proporciona `caption` y usa `th` con `scope` para accesibilidad.
- Añade estilos que mejoren la legibilidad (padding, zebra-striping) y considera la experiencia móvil.

## Ejemplos prácticos

Tabla simple con `scope` y `colspan`:

```html
<table>
	<caption>Resumen de asistencia</caption>
	<thead>
		<tr>
			<th scope="col">Nombre</th>
			<th scope="col">Asistencias</th>
			<th scope="col">Faltas</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">Ana</th>
			<td>8</td>
			<td>2</td>
		</tr>
	</tbody>
</table>
```

Tabla anidada y uso de `headers` para tablas complejas:

```html
<table>
	<thead>
		<tr>
			<th id="h-prod">Producto</th>
			<th id="h-region">Región</th>
			<th id="h-sales">Ventas</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td headers="h-prod">Producto A</td>
			<td headers="h-region">Norte</td>
			<td headers="h-sales">200</td>
		</tr>
	</tbody>
</table>
```

## Ejercicios

1. Crea una tabla que muestre un calendario mensual sencillo (filas = semanas, columnas = días). Añade un `caption`.
2. Implementa un ejemplo con `colspan` y `rowspan` para agrupar encabezados de columna/filas.
3. Transforma una tabla para que sea legible en móvil usando `overflow-x:auto` y otra versión que refluya en tarjetas con CSS.
4. Crea una tabla compleja con encabezados multi-fila y usa `id` + `headers` para mapear celdas a encabezados.
5. Evalúa una página y sustituye cualquier tabla usada para layout por una solución CSS moderna (grid/flex).

## Recursos

- MDN: tablas HTML (`table`, `th`, `td`, `colgroup`).
- W3C ARIA: recomendaciones de accesibilidad para tablas.
- web.dev: patrones responsive para tablas.

---