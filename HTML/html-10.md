# Buenas prácticas y el futuro de HTML — cursos y rutas de aprendizaje

## Tabla de contenidos

- Buenas prácticas en HTML
	- Semántica y estructura
	- Accesibilidad (a11y)
	- Rendimiento y carga progresiva
	- Seguridad y buenas configuraciones
	- SEO y metadatos
	- Responsive y diseño móvil primero
- El futuro de HTML y la plataforma web
	- Web Components y Shadow DOM
	- Declarative UI / Declarative Shadow DOM
	- WebAssembly, WebGPU y computación en el navegador
	- Nuevas APIs: WebTransport, Storage, Forms, Media
	- Evolución en formularios y validaciones nativas
- Cursos y recursos recomendados
- Contenido de aprendizaje y rutas de paredizaje
- Ejercicios y proyectos sugeridos
- Recursos adicionales

## Buenas prácticas en HTML

1) Semántica y estructura

- Usa etiquetas semánticas (`<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<footer>`) en lugar de `div` genéricos cuando correspondan. La semántica mejora el SEO y la accesibilidad.
- Mantén una jerarquía lógica de encabezados: `h1` (una sola vez por página o por `article`), `h2`, `h3`...

Ejemplo mínimo:

```html
<article>
	<h1>Título del artículo</h1>
	<p>Introducción...</p>
</article>
```

2) Accesibilidad (a11y)

- Proporciona `alt` en imágenes informativas; usa `role`, `aria-label`, `aria-labelledby` cuando el contenido no sea evidente.
- Asegura foco lógico con `tabindex` sólo cuando sea necesario. Evita manejar focus de forma impredecible.
- Usa elementos nativos de formulario (`<button>`, `<a>`, `<input>`) en lugar de elementos no semánticos con listeners cuando puedas.

3) Rendimiento y carga progresiva

- Entrega HTML ligero: evita HTML innecesario en la carga inicial. Prefetch/Preload y `defer`/`async` para scripts.
- Progressive enhancement: sirve contenido básico a todos y añade mejoras (JS/CSS) de forma incremental.

4) Seguridad y buenas configuraciones

- Escapa contenido generado en el servidor para evitar XSS. Prefiere APIs seguras cuando manipules HTML.
- Usa `rel="noopener noreferrer"` en enlaces externos con `target="_blank"`.

5) SEO y metadatos

- Añade `title`, `meta description`, `meta viewport` y Open Graph/Twitter cards cuando aplique.
- Usa `link rel="canonical"` para evitar contenido duplicado.

6) Responsive y móvil primero

- Diseña pensando en móviles (`meta viewport`) y utiliza consultas de media (`@media`) y unidades relativas (`rem`, `%`, `vw`).

## El futuro de HTML y la plataforma web

- Web Components: componentes reutilizables con `Custom Elements` y `Shadow DOM`. Se consolidan como forma de compartir UI sin framework.
- Declarative Shadow DOM y Declarative UI: facilitan escribir HTML que encapsula comportamiento sin JavaScript imperativo.
- WebAssembly (Wasm): permite compilar código (Rust, C/C++) para correr en el navegador, abriendo puertas a nuevas capacidades y rendimiento.
- WebGPU: sucesor moderno de WebGL para computación y gráficos acelerados por GPU con mejor rendimiento y control.
- Nuevas APIs emergentes: `WebTransport` para transporte bidireccional, mejoras en `Storage` y APIs para media y formularios.
- Mejora en formularios nativos: validaciones y controles nativos cada vez más potentes (input types, constraint validation API).

Consejo: sigue las propuestas y especificaciones en `WHATWG` y `W3C` y revisa el estado en `caniuse.com`.

## Cursos y recursos recomendados

- MDN Web Docs — referencia esencial y ejemplo de buenas prácticas.
- freeCodeCamp — ejercicios prácticos y certificados básicos.
- Coursera / edX / Udemy — cursos estructurados sobre front-end y accesibilidad.
- Documentación oficial: especificaciones de `WHATWG` y `W3C`.
- Libros y guías: "HTML and CSS: Design and Build Websites" (Jon Duckett), "Designing with Web Standards" (Zeldman) y recursos actualizados.

Canales y newsletters:

- Smashing Magazine, CSS-Tricks, web.dev (Google) y newsletters como "Frontend Focus" o "WebOps Weekly".

## Contenido de aprendizaje y rutas de aprendizaje

Ruta sugerida (principiante → avanzado):

1. Fundamentos HTML/CSS: estructura, cajas, layout, responsive.
2. Accesibilidad y semántica: roles ARIA, testing con lectores de pantalla.
3. JavaScript intermedio: manipulación DOM responsable, buen uso de eventos.
4. Build tools y performance: bundlers, optimización, lazy-loading.
5. Componentes y arquitectura: Web Components, frameworks (opcional) y patrones.
6. Avanzado: WebAssembly, WebGPU, PWA, seguridad y despliegue.

Formato de aprendizaje efectivo:

- Aprende construyendo: micro-proyectos (landing, blog, dashboard, juego simple).
- Documenta lo que construyes: README, notes y un pequeño portafolio.
- Revisión y comunidad: pide code reviews, participa en foros, contribuye a proyectos open-source.

## Ejercicios y proyectos sugeridos

1. Crea una landing accesible con una estructura semántica clara y `meta` optimizados para SEO.
2. Implementa un formulario complejo con validación nativa y custom messages, incluyendo `aria-live` para notificaciones.
3. Construye un componente reutilizable con Web Components (`Custom Elements`) y shadow DOM simple.
4. Transforma una página existente para seguir la técnica de progressive enhancement: funcional sin JS y mejorada con JS.

## Recursos adicionales

- MDN: https://developer.mozilla.org/
- web.dev (Google): https://web.dev/
- Can I Use: https://caniuse.com/
- WHATWG / W3C specs: https://whatwg.org/ and https://www.w3.org/

---