# Elementos esenciales de HTML: párrafos, encabezados, enlaces, listas y formatos

## Tabla de contenidos

- Párrafos (`p`) y organización de texto
- Encabezados (`h1`–`h6`) y jerarquía
- Enlaces (`a`) y atributos importantes
- Listas: ordenadas (`ol`) y desordenadas (`ul`) y elementos de lista (`li`)
- Formatos de texto: `strong`, `em`, `code`, `pre`, `blockquote`, `hr`
- Buenas prácticas semánticas
- Ejemplos
- Ejercicios
- Recursos

## Párrafos (`p`) y organización de texto

El elemento `p` representa un párrafo de texto. Los navegadores aplican margen por defecto y lo tratan como bloque.

Ejemplo:

```html
<p>Este es un párrafo. Separa ideas y bloques de texto.</p>
```

No uses `<br>` para separar párrafos: `<br>` es para saltos de línea forzados dentro de un mismo bloque.

## Encabezados (`h1`–`h6`) y jerarquía

Los encabezados definen la estructura y jerarquía del contenido. Debes usar un único `h1` por página (típicamente el título principal) y luego `h2`, `h3`, etc., según la profundidad.

Ejemplo:

```html
<h1>Título principal</h1>
<h2>Sección</h2>
<h3>Subsección</h3>
```

Los encabezados ayudan a SEO y a usuarios que navegan mediante lectores de pantalla.

## Enlaces (`a`) y atributos importantes

El elemento `a` crea hipervínculos. Atributos relevantes:

- `href`: destino (URL, ruta o `#ancla`).
- `target`: p. ej. `_blank` abre en nueva pestaña.
- `rel`: relaciones como `noopener`, `noreferrer`, `nofollow`.
- `download`: sugiere al navegador descargar el recurso.

Ejemplo:

```html
<a href="https://example.com" target="_blank" rel="noopener">Visitar ejemplo</a>
```

Notas de seguridad: al usar `target="_blank"`, añade `rel="noopener"` (o `noreferrer`) para evitar que la página externa acceda al `window.opener`.

## Listas: `ol`, `ul` y `li`

Listas desordenadas (`ul`) y ordenadas (`ol`) contienen elementos de lista (`li`). Úsalas para agrupar elementos relacionados.

Ejemplos:

Lista desordenada:

```html
<ul>
	<li>Elemento A</li>
	<li>Elemento B</li>
</ul>
```

Lista ordenada:

```html
<ol>
	<li>Primer paso</li>
	<li>Segundo paso</li>
</ol>
```

Listas anidadas son válidas para sublistas; mantén la semántica clara.

## Formatos de texto y elementos inline

- `strong`: indica énfasis fuerte (por defecto se representa en negrita). Usar para importancia semántica, no solo estilo.
- `em`: énfasis (cursiva por defecto).
- `code`: fragmentos de código inline.
- `pre`: bloque preformateado (conserva espacios y saltos de línea). Suele combinarse con `code`.
- `blockquote`: cita larga o extracto.
- `hr`: separador temático (línea horizontal).

Ejemplos:

```html
<p>Esto es <strong>importante</strong> y esto es <em>énfasis</em>. Aquí hay <code>let x = 1;</code></p>

<pre><code>function hello() {
	console.log('hola');
}
</code></pre>

<blockquote>
	<p>Una cita notable.</p>
</blockquote>

<hr>
```

## Buenas prácticas semánticas

- Usa elementos semánticos en lugar de `div`/`span` cuando sea posible (`article`, `section`, `aside`, `nav`, etc.).
- Evita usar elementos solo por su apariencia (p. ej. no uses encabezados para agrandar texto si no representan jerarquía).
- Mantén la estructura lógica: `h1` → `h2` → `h3`... y evita saltos de nivel que confundan la jerarquía.

## Ejemplos completos

Pequeña página con encabezados, párrafos, enlaces y listas:

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<title>Ejemplo elementos esenciales</title>
	</head>
	<body>
		<h1>Guía rápida</h1>
		<p>Bienvenido a la guía. Aquí explicamos los elementos esenciales.</p>

		<h2>Recursos</h2>
		<ul>
			<li><a href="https://developer.mozilla.org/">MDN Web Docs</a></li>
			<li><a href="https://whatwg.org/">WHATWG</a></li>
		</ul>

		<h2>Paso a paso</h2>
		<ol>
			<li>Instalar herramientas</li>
			<li>Configurar proyecto</li>
			<li>Desplegar</li>
		</ol>

		<p>Fin del ejemplo.</p>
	</body>
</html>
```

## Ejercicios

1. Crea una página con un `h1`, dos `h2`, cada `h2` con dos párrafos y una lista desordenada de enlaces.
2. Reemplaza los estilos visuales (por CSS) por elementos semánticos si originalmente usaste `div` para todo.
3. Escribe un bloque `pre` con un ejemplo de función y añade un `code` inline dentro de un párrafo.
4. Explica cuándo usar `ol` vs `ul` y transforma una lista ordenada en desordenada justificando el cambio.
5. Crea un ejemplo de enlace con `target="_blank"` y `rel="noopener"`.

## Recursos

- MDN: elementos de texto y listas.
- WebAIM / ARIA: recomendaciones de accesibilidad para listas y encabezados.

---