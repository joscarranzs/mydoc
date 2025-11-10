# Estilos en HTML: incorporar hojas de estilo, etiqueta `<style>`, estilos en línea y aplicar estilos desde JavaScript

## Tabla de contenidos

- Formas de incorporar CSS en HTML
- `<link>` a hojas externas y `@import`
- La etiqueta `<style>` en el `head`
- Estilos en línea (`style` attribute)
- Añadir/editar estilos desde JavaScript (estilos inline, `classList`, insertar `<style>`, CSSStyleSheet)
- Prioridad y especificidad (breve)
- Buenas prácticas y performance
- Ejemplos
- Ejercicios
- Recursos

## Formas de incorporar CSS en HTML

Principales métodos para aplicar estilos a documentos HTML:

- Hojas externas mediante `<link rel="stylesheet" href="...">` (recomendado para producción).
- Etiqueta `<style>` dentro del documento (útil para estilos críticos o componentes locales).
- Estilos en línea con el atributo `style` (alto peso específico, evitar cuando sea posible).
- Añadir estilos dinámicamente desde JavaScript (manipular `classList`, `style`, o insertar reglas CSS).

## `<link>` a hojas externas y `@import`

La forma más común y recomendada para producción es usar hojas externas:

```html
<link rel="stylesheet" href="/styles/main.css">
```

Ventajas:

- Caché del navegador entre páginas.
- Separación de responsabilidades (estructura vs presentación).
- Permite paralelizar descargas (cuando se usan correctamente).

`@import` permite incluir CSS desde otra hoja:

```css
@import url('more.css');
```

Pero `@import` puede impactar la performance (bloqueo adicional en la carga) y por eso `link` suele ser preferido.

## La etiqueta `<style>` en el `head`

Se usa para estilos que deben estar presentes inmediatamente (critical CSS) o estilos específicos de la página:

```html
<style>
	body { font-family: system-ui, Arial, sans-serif; }
	.btn { background: #06c; color: #fff; }
</style>
```

Colocar CSS crítico inline puede mejorar el tiempo hasta el primer render, pero si se abusa puede aumentar el tamaño del HTML y perjudicar la caché.

## Estilos en línea (`style` attribute)

Ejemplo:

```html
<p style="color: red; margin: 0;">Texto con estilo inline</p>
```

Desventajas:

- Dificultan el mantenimiento y reuso.
- Tienen alta especificidad (pueden dificultar sobreescrituras).
- Rompen la separación de responsabilidades.

Usa estilos inline solo para casos puntuales (ej. contenido generado dinámicamente donde no hay otra alternativa).

## Añadir/editar estilos desde JavaScript

1) Modificar estilos inline (propiedad `style`):

```js
const el = document.querySelector('.box');
el.style.backgroundColor = 'tomato';
el.style.setProperty('margin-top', '8px');
```

2) Añadir / quitar clases (`classList`) — recomendado para cambios de estado:

```js
el.classList.add('is-active');
el.classList.remove('is-hidden');
el.classList.toggle('open');
```

3) Insertar un elemento `<style>` dinámicamente:

```js
const s = document.createElement('style');
 s.textContent = `.dynamic { color: purple; }`;
document.head.appendChild(s);
```

4) Usar la API de CSSOM / Constructible Stylesheets (más moderno, no soportado en todos los navegadores antiguos):

```js
// Ejemplo con constructible stylesheet (Chrome, Edge, Safari recientes)
const sheet = new CSSStyleSheet();
sheet.replaceSync('.shadow { color: teal; }');
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
```

5) `document.styleSheets` permite acceder y manipular reglas existentes (API poderosa pero más compleja).

## Prioridad y especificidad (breve)

- Orden de aplicación: estilos del navegador → estilos externos (`link`/`@import`) → `style` en `head` → estilos inline (`style` attribute) → estilos con `!important`.
- La especificidad y el orden de las reglas determinan qué estilo gana. Evita abusar de `!important`.

## Buenas prácticas y performance

- Mantener CSS modular y reutilizable (BEM, utility classes, CSS Modules, etc.).
- Evitar estilos muy grandes inline que impidan la caché.
- Colocar `link rel="preload" as="style"` o usar `media` para cargar condicionalmente si es necesario, pero con cuidado.
- Extraer critical CSS para mejorar el First Contentful Paint (FCP) y cargar el resto async o después.

## Ejemplos

Archivo `index.html` con `link` externo y `style` inline crítico:

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<link rel="preload" href="/styles/main.css" as="style">
		<link rel="stylesheet" href="/styles/main.css">
		<style>
			/* Critical CSS */
			body { margin:0; font-family: system-ui, Arial, sans-serif; }
			.hero { min-height: 40vh; display:flex; align-items:center; justify-content:center; }
		</style>
		<title>Estilos</title>
	</head>
	<body>
		<section class="hero">
			<h1>Estilos en acción</h1>
		</section>
		<script>
			// Añadir clase desde JS
			document.querySelector('.hero').classList.add('loaded');
		</script>
	</body>
</html>
```

Ejemplo de manipulación con `classList` y estilos inline:

```html
<button id="toggle">Activar</button>
<div id="box" style="width:100px;height:100px;background:#ccc"></div>

<script>
	const btn = document.getElementById('toggle');
	const box = document.getElementById('box');
	btn.addEventListener('click', () => {
		box.classList.toggle('active');
		if (box.style.backgroundColor === 'tomato') box.style.backgroundColor = '#ccc';
		else box.style.backgroundColor = 'tomato';
	});
</script>
```

## Ejercicios

1. Crea un HTML que cargue una hoja externa (`main.css`) y añada un pequeño `style` crítico en el `head`.
2. Implementa un botón que, al pulsarlo, añada una clase a un elemento y cambie su apariencia usando CSS (usa `classList`).
3. Inserta dinámicamente una regla CSS creando un elemento `<style>` desde JS.
4. Investiga y documenta la compatibilidad de Constructible Stylesheets en navegadores y crea un ejemplo si tu navegador lo soporta.
5. Explica por qué abusar de estilos inline puede perjudicar la performance y el mantenimiento.

## Recursos

- MDN: `link`, `style`, `classList`, `style` attribute.
- web.dev: critical-css y optimización de carga de CSS.
- Can I use: compatibilidad de Constructible Stylesheets y otras APIs CSSOM.

---