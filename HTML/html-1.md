# ¿Qué es HTML? Origen, versiones y últimas características

## Tabla de contenidos

- ¿Qué es HTML?
- Origen e historia breve
- Versiones de HTML (timeline)
- HTML como "living standard" (WHATWG) vs especificaciones W3C
- Últimas características y APIs relacionadas
- Buenas prácticas y accesibilidad
- Ejemplos básicos
- Ejercicios
- Recursos y lecturas recomendadas

## ¿Qué es HTML?

HTML (HyperText Markup Language) es un lenguaje de marcado diseñado para estructurar y representar contenido en la web. No es un lenguaje de programación: describe la semántica y la estructura del contenido (cabeceras, párrafos, listas, tablas, formularios, medios, etc.).

En una página web clásica, el navegador interpreta el `HTML` y, junto con `CSS` y `JavaScript`, presenta una experiencia interactiva al usuario.

## Origen e historia breve

- 1989–1991: Tim Berners-Lee (CERN) propuso el concepto de la World Wide Web y creó la primera versión de HTML como un formato simple para enlazar documentos.
- 1990s: el lenguaje evolucionó con implementaciones tempranas en navegadores (Mosaic, Netscape, Internet Explorer).
- 1997–1999: apareció `HTML 2.0` y posteriormente `HTML 3.2` / `HTML 4.01`, estandarizados por el W3C.
- 2000s: surgió `XHTML` (una versión XML de HTML) que buscaba mayor rigor sintáctico, pero no llegó a reemplazar completamente a HTML en la práctica.
- 2008–2014: desarrollo y estandarización de `HTML5` (W3C), que consolidó muchas APIs modernas (audio, video, canvas, semantic elements, etc.).

## Versiones de HTML (timeline)

- `HTML 1.0` (1993): primeros elementos básicos.
- `HTML 2.0` (1995): primer estándar amplio.
- `HTML 3.2` (1997) y `HTML 4.01` (1999): más elementos y mejores prácticas.
- `XHTML 1.0` (2000): sintaxis XML.
- `HTML5` (2014 como rec. W3C, aunque su desarrollo fue largo): introdujo muchas características modernas.
- Desde ~2012: el mantenimiento principal de la especificación de HTML lo lleva WHATWG como "living standard" (es decir, vivo; se actualiza continuamente). El W3C mantiene su propia versión estable/documentada.

## HTML como "living standard" (WHATWG) vs W3C

- WHATWG (Web Hypertext Application Technology Working Group) mantiene la especificación de HTML como un estándar vivo. Esto permite iterar y añadir mejoras con agilidad.
- W3C publica recomendaciones y versiones formales; ambas fuentes se complementan, pero la práctica del ecosistema web sigue principalmente la especificación WHATWG para HTML.

## Últimas características y APIs relacionadas

HTML moderno ya no es solo etiquetas: viene acompañado de APIs y patrones que permiten crear aplicaciones ricas sin depender exclusivamente de plugins.

- Elementos semánticos: `header`, `nav`, `main`, `article`, `section`, `aside`, `footer` facilitan la estructura y accesibilidad.
- Multimedia nativo: `audio`, `video` con controles y eventos.
- Canvas y gráficos 2D/3D: `canvas` y WebGL permiten dibujo y visualización acelerada.
- Formularios mejorados: nuevos tipos (`email`, `tel`, `date`, `number`), atributos (`required`, `pattern`, `novalidate`) y `fieldset`, `datalist`.
- Imágenes responsivas: `srcset`, `sizes`, y el elemento `picture` para servir varias resoluciones o formatos.
- Lazy loading: atributo `loading="lazy"` para `img` y `iframe`.
- Web Components: `Custom Elements`, `Shadow DOM`, `HTML Templates` (`<template>`) y `slot` para encapsulación y componentes reutilizables.
- Accessibility / ARIA: roles y atributos ARIA para mejorar la experiencia con tecnologías de asistencia.
- Service Workers y PWA: aunque no son parte de `HTML` per se, se integran en el stack web (offline, cache, push notifications).
- Declarative alternatives: mejoras como `dialog` o `details/summary` ofrecen comportamientos nativos.

APIs complementarias relevantes:

- Fetch API, Streams, WebSockets — para comunicación.
- IndexedDB — almacenamiento estructurado en el cliente.
- Geolocation, WebRTC, Web Audio API — capacidades multimedia y de comunicación.

## Buenas prácticas y accesibilidad

- Usar elementos semánticos en lugar de `div` genéricos cuando sea posible — facilita SEO y accesibilidad.
- Incluir `alt` descriptivo para imágenes (`<img alt="...">`).
- Declarar correctamente el `DOCTYPE` (`<!DOCTYPE html>`) y la codificación (`<meta charset="utf-8">`).
- Formularios accesibles: etiquetas `<label>` asociadas, errores claros y manejo de foco.
- Preferir progressive enhancement: servir contenido básico primero y enriquecer con JS cuando esté disponible.

## Ejemplos básicos

Documento mínimo:

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<title>Ejemplo mínimo</title>
	</head>
	<body>
		<header>
			<h1>Mi página</h1>
			<nav>
				<a href="#">Inicio</a>
			</nav>
		</header>
		<main>
			<article>
				<h2>Artículo</h2>
				<p>Contenido de ejemplo.</p>
			</article>
		</main>
		<footer>Pie de página</footer>
	</body>
</html>
```

Ejemplo de imagen responsiva y lazy loading:

```html
<picture>
	<source srcset="imagen.avif" type="image/avif">
	<source srcset="imagen.webp" type="image/webp">
	<img src="imagen.jpg" alt="Descripción" loading="lazy" width="800" height="600">
</picture>
```

Ejemplo simple de Web Component (custom element):

```html
<!-- template -->
<template id="mi-card">
	<style> :host { display:block; border:1px solid #ccc; padding:8px; }</style>
	<slot></slot>
</template>

<script>
	class MiCard extends HTMLElement {
		constructor() {
			super();
			const shadow = this.attachShadow({ mode: 'open' });
			const tpl = document.getElementById('mi-card');
			shadow.appendChild(tpl.content.cloneNode(true));
		}
	}
	customElements.define('mi-card', MiCard);
</script>

<mi-card>Contenido dentro del componente</mi-card>
```

## Ejercicios

1. Escribe un documento HTML mínimo que contenga un `header`, `main` con dos `article` y un `footer`. Añade atributos `lang` y `meta` de viewport.

2. Crea una página con una imagen responsive usando `picture` y `srcset`. Explica por qué esto puede mejorar la performance en dispositivos móviles.

3. Implementa un pequeño Web Component que muestre una tarjeta con título y contenido. Usa `Shadow DOM` para encapsular estilos.

4. Revisa una página HTML y añade mejoras de accesibilidad: etiquetas `label`, roles ARIA donde falten, textos alternativos y estructura semántica.

5. Describe las diferencias entre `HTML5` (como versión) y el `HTML Living Standard` de WHATWG. ¿Por qué existe la diferencia?

## Recursos y lecturas recomendadas

- WHATWG HTML Living Standard — especificación viva del lenguaje.
- W3C — documentación y recomendaciones formales.
- MDN Web Docs — guías prácticas y artículos sobre HTML, accesibilidad y APIs web.
- Web.dev (Google) — artículos sobre performance, PWA y buenas prácticas.
- A11Y Project / WAI-ARIA Authoring Practices — recursos de accesibilidad.

---