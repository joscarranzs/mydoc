# 04 - Web: Frontend — Base técnica

## Tabla de contenido

- [Introducción](#introducción)
- [HTML: estructura y semántica](#html-estructura-y-semántica)
- [CSS: cascada, box model y layout](#css-cascada-box-model-y-layout)
- [JavaScript: manipulación del DOM y eventos](#javascript-manipulación-del-dom-y-eventos)
- [Accesibilidad y buenas prácticas](#accesibilidad-y-buenas-prácticas)
- [Referencias](#referencias)

## Introducción

El frontend combina tecnologías estándar (HTML, CSS, JavaScript) para estructurar, presentar y hacer interactiva una página. Aquí se resumen conceptos técnicos imprescindibles para escribir interfaces web robustas, accesibles y mantenibles.

## HTML: estructura y semántica

HTML describe la estructura del contenido y sus significados mediante elementos semánticos.

Puntos clave:

- Estructura básica: `<!doctype html>`, `html`, `head`, `body`.
- Elementos semánticos: `header`, `nav`, `main`, `article`, `section`, `aside`, `footer`, `figure`, `figcaption` — preferirlos sobre `<div>` cuando corresponda.
- Uso correcto de headings: `h1..h6` para crear una jerarquía lógica; solo un `h1` por página en la mayoría de los casos.
- Formularios: `label` ligado a `input` mediante `for` o envolviendo el `input`; usa tipos de input adecuados (`email`, `tel`, `number`).
- Imágenes: `alt` obligatorio para accesibilidad, `srcset` y `sizes` para responsive.

Buenas prácticas HTML:

- Evita repeticiones y usa elementos semánticos para SEO y accesibilidad.
- Valida con el W3C validator y usa linter como `htmlhint`.

## CSS: cascada, box model y layout

La hoja de estilos define la apariencia de los elementos HTML. Conceptos técnicos esenciales:

- Cascada: especificidad y orden definen qué reglas se aplican. Reglas: browser styles < user styles < author styles; especificidad se calcula por selectores.
- Box model: cada elemento tiene content, padding, border y margin. `box-sizing: border-box` suele facilitar cálculos.
- Display y posicionamiento:
  - `display`: block, inline, inline-block, flex, grid
  - `position`: static, relative, absolute, fixed, sticky
- Layouts modernos:
  - Flexbox: diseño en una dimensión (fila/columna). Ideal para navbars, centrar contenido.
  - Grid: diseño bidimensional; controla filas y columnas, áreas.
- Responsive: uso de `@media`, `min/max-width`, y unidades relativas (`%, em, rem, vw, vh`).

Buenas prácticas CSS:

- Prefiere clases sobre selectores de tipo para evitar sobrespecificidad.
- Usa variables CSS (`--variable`) para mantener consistencia.
- Mantén las reglas pequeñas y usa un sistema de diseño (tokens, componentes) para escala.

## JavaScript: manipulación del DOM y eventos

JS permite agregar lógica e interactividad. Los temas imprescindibles:

- Selección del DOM: `document.querySelector`, `document.getElementById`, `document.querySelectorAll`.
- Manipulación: `element.textContent`, `element.innerHTML`, `element.classList.toggle`, `element.setAttribute`.
- Eventos: `addEventListener('click', handler)`; eventos de formulario (`submit`), teclado (`keydown`).
- Delegación de eventos: attach event listener a un contenedor en vez de a múltiples elementos para mejor performance y menos memory leaks.
- Asincronía: `fetch` y Promises, `async/await` para llamadas a APIs.

Seguridad y performance:

- Evita usar `innerHTML` con contenido no sanitizado (riesgo XSS).
- Minimiza reflows y repaints: batch DOM updates y manipula clases en vez de estilos individuales cuando sea posible.

## Accesibilidad y buenas prácticas

Accesibilidad (a11y) implica permitir que personas con discapacidades usen tu sitio (lectores de pantalla, navegación teclado).

Recomendaciones clave:

- Usa roles ARIA con precaución: prioriza elementos semánticos antes de añadir ARIA.
- Controles de formulario deben tener `label` y `aria-describedby` cuando sea necesario.
- Todo contenido interactivo debe ser navegable con teclado (`tabindex`, `role`, `aria-*`).
- Asegura contraste de color suficiente (WCAG AA/AAA) y proporciona texto alternativo para imágenes.
- Prueba con lectores de pantalla (NVDA, VoiceOver) y herramientas de evaluación como `axe` o `Lighthouse`.

Buenas prácticas generales:

- Progressive enhancement: que el contenido básico funcione sin JS y mejora con JS.
- Separación de responsabilidades: HTML para estructura, CSS para presentación, JS para comportamiento.
- Internationalization: usa etiquetas `lang` y evita codificar texto fijo.

## Referencias

- MDN Web Docs — HTML: https://developer.mozilla.org/en-US/docs/Web/HTML
- MDN Web Docs — CSS: https://developer.mozilla.org/en-US/docs/Web/CSS
- MDN Web Docs — DOM and Events: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- WebAIM — Accessibility: https://webaim.org/
- W3C WCAG Guidelines: https://www.w3.org/WAI/standards-guidelines/wcag/
