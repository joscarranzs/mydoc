---
title: CITAS
module: html
submodule: content/quotations
---

HTML define elementos específicos para representar citas, referencias, direcciones y texto con direccionalidad especial. Usarlos correctamente mejora la semántica del documento y la accesibilidad.

## Citas en bloque

`<blockquote>` representa una cita extensa extraída de otra fuente. El contenido suele estar sangrado por el navegador y puede incluir atributo `cite` con la URL de origen:

```html
<blockquote cite="https://es.wikipedia.org/wiki/HTML">
  <p>HTML (HyperText Markup Language) es un lenguaje de marcado que define la estructura y el significado del contenido web.</p>
</blockquote>
```

El atributo `cite` no es visible en pantalla, pero los motores de búsqueda y herramientas de citación pueden leerlo. Para mostrar la fuente visualmente, añádela como texto:

```html
<blockquote cite="https://www.smashingmagazine.com">
  <p>El buen diseño es tan poco diseño como sea posible.</p>
  <footer>—Dieter Rams, <cite>Smashing Magazine</cite></footer>
</blockquote>
```

## Citas inline

`<q>` marca una cita breve dentro de un párrafo. El navegador añade automáticamente las comillas correspondientes al idioma del documento:

```html
<p>
  Como dijo Steve Jobs: <q cite="https://ejemplo.com">La innovación distingue entre un líder y un seguidor.</q>
</p>
```

No uses `<q>` para comillas genéricas sin referencia. Para eso están las comillas tipográficas directamente en el texto.

## Referencias

`<cite>` marca el título de una obra creativa (libro, película, artículo, canción, sitio web). No debe usarse para nombres de personas:

```html
<p>
  Recomiendo leer <cite>El código limpio</cite> de Robert C. Martin.
</p>

<p>
  Más información en <cite><a href="https://html.spec.whatwg.org">HTML Living Standard</a></cite>.
</p>
```

## Abreviaturas

`<abbr>` marca abreviaturas y acrónimos. El atributo `title` expande el significado:

```html
<p>
  <abbr title="HyperText Markup Language">HTML</abbr> es la base de la web.
</p>

<p>
  El servidor respondió con un error <abbr title="Internal Server Error">500</abbr>.
</p>
```

## Dirección de contacto

`<address>` marca información de contacto del autor o responsable del documento. No debe usarse para direcciones sin relación con el contexto del documento:

```html
<address>
  <a href="mailto:soporte@ejemplo.com">soporte@ejemplo.com</a><br>
  <a href="tel:+525512345678">+52 55 1234 5678</a><br>
  Ciudad de México, MX
</address>
```

## Direccionalidad del texto

`<bdo>` (bi-directional override) fuerza la dirección del texto cuando el algoritmo automático del navegador no es suficiente:

```html
<p>
  Usuario: <bdo dir="ltr">Juan Pérez</bdo>
</p>
<p>
  Texto en hebreo: <bdo dir="rtl">טקסט בעברית</bdo>
</p>
```

`<bdi>` (bi-directional isolation) aísla un fragmento de texto para que su direccionalidad no afecte al texto circundante:

```html
<p>
  Usuario <bdi>علي</bdi>: 5 comentarios.
</p>
```

---

## Ejercicio: artículo con citas

Escribe un fragmento de artículo que incluya:

1. Una cita en bloque con referencia a una fuente
2. Una cita inline dentro de un párrafo
3. Una referencia a un libro usando `<cite>`
4. Una abreviatura

<details>
<summary><strong>Ver solución</strong></summary>

```html
<article>
  <h1>La importancia de la semántica en HTML</h1>

  <p>
    Como explica <cite>MDN Web Docs</cite>, la semántica es fundamental para la accesibilidad web.
  </p>

  <blockquote cite="https://developer.mozilla.org/es/docs/Glossary/Semantics">
    <p>En HTML, la semántica se refiere al significado de un elemento, en lugar de su presentación visual.</p>
  </blockquote>

  <p>
    El <abbr title="World Wide Web Consortium">W3C</abbr> recomienda usar elementos semánticos desde la primera línea de código.
    Como dijo Tim Berners-Lee: <q cite="https://ejemplo.com">El poder de la web está en su universalidad.</q>
  </p>
</article>
```

</details>
