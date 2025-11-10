# Funcionamiento de HTML: estructura básica, elementos, sintaxis y atributos

## Tabla de contenidos

- ¿Cómo funciona HTML en el navegador?
- Estructura básica de un archivo HTML
- Elementos y sintaxis (etiquetas, contenido y cierre)
- Atributos: qué son y cómo se usan
- Tipos de atributos (booleanos, enumerados, URI, listas, `id`/`class`, `data-*`)
- Atributos globales y accesibilidad
- Ejemplos prácticos
- Ejercicios
- Recursos

## ¿Cómo funciona HTML en el navegador?

Cuando un navegador recibe un documento `HTML`, realiza varios pasos principales:

1. Descarga el recurso y lo interpreta como texto HTML.
2. El parser HTML construye el DOM (Document Object Model): una representación en memoria de nodos (elementos, atributos, texto).
3. Se aplica el CSSOM (CSS Object Model) para construir la información de estilos.
4. El motor de layout combina DOM + CSSOM y calcula la disposición (layout), luego pinta (paint) los píxeles en pantalla.
5. Si hay `JavaScript`, éste puede manipular el DOM y cambiar la presentación o comportamiento en tiempo de ejecución.

El parser HTML es tolerante: corrige muchos errores sintácticos para poder mostrar contenido incluso si el `HTML` no está 100% correcto.

## Estructura básica de un archivo HTML

Un documento HTML mínimo contiene algunas instrucciones y elementos clave:

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<title>Mi documento</title>
	</head>
	<body>
		<!-- contenido aquí -->
	</body>
</html>
```

- `<!DOCTYPE html>`: declara el tipo de documento y activa el modo estándar en los navegadores.
- `<html>`: raíz del documento; el atributo `lang` indica el idioma.
- `<head>`: metadatos, títulos, enlaces a estilos, scripts que se colocan antes del render.
- `<body>`: contenido visible de la página.

## Elementos y sintaxis

- Una etiqueta de apertura tiene la forma `<nombre>`; la etiqueta de cierre `</nombre>` rodea el contenido.
- Algunos elementos son vacíos/self-closing por naturaleza (por ejemplo `img`, `input`, `br`). En HTML moderno se escribe `
	<img src="..." alt="...">` sin barra de cierre obligatoria.
- El HTML distingue entre elementos y atributos, no entre mayúsculas/minúsculas en nombres (los navegadores son case-insensitive para nombres de etiquetas en HTML).

Ejemplo simple:

```html
<p>Hola, <strong>mundo</strong>!</p>
```

## Atributos: qué son y cómo se usan

Los atributos son pares nombre/valor que proporcionan información adicional a un elemento, por ejemplo:

```html
<img src="foto.jpg" alt="Una foto" width="400">
```

- Sintaxis: `nombre="valor"`. En HTML las comillas son recomendadas; para valores sin espacios a veces se permiten sin comillas, pero es mejor usarlas.
- Algunos atributos pueden aparecer sin valor (booleanos), p. ej. `disabled` en un `button`.

## Tipos comunes de atributos

- Booleanos: su presencia activa la característica. Ejemplo: `<input disabled>` o `<button disabled>`. En DOM, leer `element.disabled` devuelve `true` si está presente.
- Enumerados: aceptan un conjunto limitado de valores, p. ej. `input` con `type="text" | "email" | "number"`.
- URI/URL: `src`, `href`, `action` aceptan rutas o URIs; es buena práctica usar rutas relativas cuando corresponda.
- Listas separadas por espacios: `class` contiene una lista de nombres separados por espacios. `rel` también puede aceptar varios tokens.
- Identificadores: `id` debe ser único en el documento; útil para CSS/JS y anclas.
- `data-*`: atributos personalizados que conservan datos accesibles desde JS (`element.dataset`); ejemplo: `data-user-id="42"`.

## Atributos globales y accesibilidad

Algunos atributos son globales (pueden aparecer en cualquier elemento): `id`, `class`, `style`, `title`, `hidden`, `data-*`, `lang`, `dir`, entre otros.

Accesibilidad (a11y):

- `role` y ARIA: cuando un elemento no es semántico por sí mismo, `role` y atributos ARIA pueden ayudar a especificar comportamiento para lectores de pantalla.
- `tabindex`: controla el orden de tabulación y si un elemento es focusable.
- `aria-*`: prefijo para atributos ARIA (por ejemplo `aria-label`, `aria-hidden`, `aria-expanded`). Úsalos con conocimiento de las prácticas ARIA.

## Ejemplos prácticos

Imagen con atributos y `data-*`:

```html
<img src="avatar.png" alt="Avatar de usuario" width="80" height="80" loading="lazy" data-user-id="123" class="rounded">
```

Input con atributos enumerados y booleanos:

```html
<input type="email" name="correo" placeholder="tu@ejemplo.com" required>
```

Enlaces y rutas:

```html
<a href="/about.html" rel="noopener">Sobre nosotros</a>
```

Uso de `data-*` desde JavaScript:

```js
const img = document.querySelector('img');
console.log(img.dataset.userId); // "123"
```

## Ejercicios

1. Escribe un formulario con campos `name`, `email` y `message`. Usa atributos `required`, `type` correctos y asocia `label` a cada input.

2. Da ejemplos de tres atributos globales y explica un caso de uso para cada uno.

3. Añade atributos ARIA a un componente genérico (por ejemplo, un acordeón) y explica por qué los añadiste.

4. Implementa en HTML un `button` que esté inicialmente deshabilitado (`disabled`) y actívalo con JavaScript cuando un checkbox sea marcado.

5. Explica la diferencia entre `class` y `id`, y cuándo usar cada uno.

## Recursos

- MDN: guía de elementos y atributos HTML.
- WHATWG / W3C: especificaciones y definiciones formales.
- ARIA Authoring Practices para patrones accesibles.

---