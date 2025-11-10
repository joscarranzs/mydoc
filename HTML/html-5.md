# Etiquetas semánticas y SEO: estructura semántica, organización del documento y metadatos

## Tabla de contenidos

- ¿Qué son las etiquetas semánticas?
- Estructura semántica básica de un documento HTML
- Organización y roles (`header`, `nav`, `main`, `article`, `section`, `aside`, `footer`)
- SEO básico y buenas prácticas (headings, contenido, rendimiento)
- Metadatos importantes (`meta`, `link`, Open Graph, JSON-LD)
- Ejemplos prácticos
- Ejercicios
- Recursos

## ¿Qué son las etiquetas semánticas?

Las etiquetas semánticas describen el propósito del contenido que contienen (por ejemplo `nav` para navegación, `article` para contenido autocontenible). A diferencia de `div` o `span`, ofrecen significado estructural que los motores de búsqueda, lectores de pantalla y otras herramientas pueden interpretar.

Beneficios:

- Mejora la accesibilidad y la experiencia con tecnologías de asistencia.
- Facilita el SEO (los motores entienden mejor la estructura y jerarquía del contenido).
- Hace el código más legible y mantenible.

## Estructura semántica básica de un documento HTML

Una estructura semántica típica sigue esta jerarquía:

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<title>Mi sitio</title>
		<meta name="description" content="Breve descripción de la página para SEO">
		<!-- otros metadatos -->
	</head>
	<body>
		<header> ... </header>
		<nav> ... </nav>
		<main>
			<article> ... </article>
			<section> ... </section>
			<aside> ... </aside>
		</main>
		<footer> ... </footer>
	</body>
</html>
```

Puntos clave:

- `main` debe contener el contenido central — solo uno por documento.
- `header` y `footer` suelen contener información del sitio/página y acciones globales.
- `nav` contiene enlaces de navegación principales.
- `article` es un contenido autocontenible (post, noticia, entrada) que puede usarse de manera independiente.

## Organización y roles de las etiquetas

- `header`: logotipo, título del sitio, elementos de cabecera.
- `nav`: menús principales y secundario (usar `aria-label` si hay varios `nav`).
- `main`: contenedor principal del contenido.
- `article`: publicaciones, entradas o piezas de contenido que tienen sentido por sí solas.
- `section`: bloques temáticos dentro de `main` o `article`.
- `aside`: contenido relacionado o complementario (barrita lateral, widgets).
- `footer`: información de cierre, enlaces legales, contacto.

Ejemplo de uso combinado:

```html
<header>
	<h1>Mi blog</h1>
	<p>Tagline o descripción</p>
</header>
<nav aria-label="principal">
	<ul><li><a href="/">Inicio</a></li><li><a href="/posts">Posts</a></li></ul>
</nav>
<main>
	<article>
		<h2>Título del post</h2>
		<p>Contenido...</p>
	</article>
	<aside>
		<h3>Sobre el autor</h3>
	</aside>
</main>
<footer>
	<p>© 2025 Mi sitio</p>
</footer>
```

## SEO básico y buenas prácticas

1. Titulares y jerarquía (`h1` → `h2` → ...): usar para organizar el contenido y facilitar el rastreo por motores.
2. Meta description: texto breve que resume la página; optimiza CTR en resultados de búsqueda.
3. URLs limpias y semánticas (slug legible, keywords relevantes).
4. Contenido de calidad y único; evita duplicados.
5. Estructura semántica y uso de `article`, `section`, `nav` — los bots entienden mejor el contenido.
6. Uso correcto de etiquetas `alt` en imágenes.
7. Rendimiento: optimiza imágenes, usa lazy-loading, minimiza CSS/JS; la velocidad impacta el ranking.
8. Mobile-first: diseño responsivo y meta viewport.
9. Uso de datos estructurados (JSON-LD) para rich results.

## Metadatos importantes

1) Básicos:

- `charset`: `<meta charset="utf-8">` — siempre al inicio del `head`.
- `viewport`: `<meta name="viewport" content="width=device-width,initial-scale=1">` — imprescindible para mobile.
- `title`: `<title>` — texto mostrado en pestañas y buscadores.
- `meta description`: `<meta name="description" content="...">`.

2) Robots / indexación:

- `<meta name="robots" content="index, follow">` o `noindex` para impedir indexación.
- `X-Robots-Tag` (cabecera HTTP) para controlar indexación a nivel servidor.

3) Canonical:

- `<link rel="canonical" href="https://example.com/pagina" />` — evita problemas de contenido duplicado.

4) Open Graph / Social:

- `<meta property="og:title" content="...">`
- `<meta property="og:description" content="...">`
- `<meta property="og:image" content="...">`
- `<meta property="og:url" content="...">`

5) Twitter Cards:

- `<meta name="twitter:card" content="summary_large_image">`

6) Hreflang (sitios multilingües):

- `<link rel="alternate" href="https://example.com/es/" hreflang="es">`

7) JSON-LD para datos estructurados (schema.org):

```html
<script type="application/ld+json">
{
	"@context": "https://schema.org",
	"@type": "Article",
	"headline": "Título del artículo",
	"author": {"@type":"Person","name":"Autor"}
}
</script>
```

## Ejemplos prácticos

Documento ejemplo con metadatos y estructura semántica:

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<title>Ejemplo semántico y SEO</title>
		<meta name="description" content="Ejemplo de estructura semántica y metadatos para SEO">
		<link rel="canonical" href="https://example.com/ejemplo">
		<meta property="og:title" content="Ejemplo semántico y SEO">
		<meta property="og:description" content="Ejemplo de estructura semántica y metadatos para SEO">
		<meta property="og:image" content="https://example.com/og-image.jpg">
		<script type="application/ld+json">
		{"@context":"https://schema.org","@type":"WebPage","name":"Ejemplo semántico"}
		</script>
	</head>
	<body>
		<header>
			<h1>Mi sitio</h1>
		</header>
		<nav aria-label="menu principal">
			<ul><li><a href="/">Inicio</a></li><li><a href="/posts">Posts</a></li></ul>
		</nav>
		<main>
			<article>
				<h2>Título del artículo</h2>
				<p>Primer párrafo con contenido relevante y bien escrito.</p>
			</article>
			<aside>
				<h3>Enlaces útiles</h3>
			</aside>
		</main>
		<footer>
			<p>© 2025 Mi sitio</p>
		</footer>
	</body>
</html>
```

## Ejercicios

1. Crea una página semántica con `header`, `nav`, `main` (con al menos un `article` y `section`), `aside` y `footer`.
2. Añade metadatos `title`, `meta description`, `canonical`, Open Graph y un pequeño JSON-LD para describir la página.
3. Analiza una página real (por ejemplo, la de un blog) y describe cómo podrías mejorar su SEO con metadatos y estructura semántica.
4. Implementa `hreflang` para un sitio con versiones en `es` y `en`.
5. Explica por qué es importante colocar `meta charset` al principio del `head`.

## Recursos

- MDN: elementos semánticos y metadatos.
- Google Search Central: guías de SEO para desarrolladores.
- Schema.org: vocabulario para datos estructurados (JSON-LD).
- Lighthouse / PageSpeed Insights: herramientas para medir rendimiento y prácticas recomendadas.

---