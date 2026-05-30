---
title: Citas
description: blockquote, q, cite.
module: lenguajes/html
submodule: general
order: 11
---

Al completar esta guía podrás:

- Usar blockquote para citas en bloque
- Usar q para citas en línea
- Usar cite para referenciar fuentes
- Aplicar buenas prácticas de accesibilidad

---

## blockquote

Cita en bloque, con sangría y separación del texto normal:

```html
<blockquote>
  <p>La mejor forma de predecir el futuro es crearlo.</p>
  <cite>— Peter Drucker</cite>
</blockquote>
```

El atributo `cite` puede indicar la URL de origen:

```html
<blockquote cite="https://www.w3.org/TR/html52/">
  <p>HTML es el lenguaje estándar para documentos diseñados para ser mostrados en un navegador web.</p>
</blockquote>
```

---

## Estilo de blockquote

Por defecto los navegadores aplican margen izquierdo y cursiva. Se puede personalizar:

```html
<blockquote style="
  border-left: 4px solid #1A73E8;
  background: #f8f9fa;
  padding: 16px;
  margin: 20px 0;
  font-style: italic;
  color: #555;
">
  <p>El diseño no es solo cómo se ve, sino cómo funciona.</p>
</blockquote>
```

---

## q

Cita en línea dentro de un párrafo:

```html
<p>
  Como dijo Alan Kay,
  <q>la mejor forma de predecir el futuro es inventarlo</q>,
  una frase que resume la innovación tecnológica.
</p>
```

El navegador añade automáticamente comillas al texto dentro de `<q>`.

---

## cite

Referencia a una fuente creativa (libro, artículo, película, etc.):

```html
<p>
  Más información en <cite>HTML: The Definitive Guide</cite>.
</p>

<p>
  <cite>Don Quijote de la Mancha</cite> fue escrito por Miguel de Cervantes.
</p>
```

---

## Anidamiento de citas

Se pueden anidar blockquote para citas dentro de citas:

```html
<blockquote>
  <p>El conocimiento es poder.</p>
  <blockquote>
    <p>Pero el conocimiento compartido es poder multiplicado.</p>
  </blockquote>
</blockquote>
```

---

## Address

Aunque no es una cita, `<address>` se relaciona con información de contacto:

```html
<address>
  Escrito por Juan Pérez<br>
  Correo: <a href="mailto:juan@ejemplo.com">juan@ejemplo.com</a><br>
  Sitio: <a href="https://ejemplo.com">ejemplo.com</a>
</address>
```

---

## Resumen

| Etiqueta | Uso | Característica |
|---|---|---|
| `<blockquote>` | Cita larga en bloque | Sangría, puede tener cite URL |
| `<q>` | Cita corta en línea | Añade comillas automáticas |
| `<cite>` | Referencia a fuente | Título de obra creativa |
| `<address>` | Información de contacto | Contexto semántico |

---

## Ejercicio

Crea una página con una cita en bloque usando blockquote con atributo cite, una cita en línea con q, y una referencia con cite.

**Instrucciones paso a paso:**

1. Crea `citas.html`
2. Agrega un blockquote con cite y un párrafo dentro
3. Agrega un párrafo con una cita en línea usando q
4. Agrega un párrafo con cite para referenciar una fuente
5. Abre en el navegador

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Citas en HTML</title>
</head>
<body>
  <h1>Citas HTML</h1>

  <h2>Cita en bloque</h2>
  <blockquote cite="https://es.wikipedia.org/wiki/HTML">
    <p>HTML es un lenguaje de marcado que permite estructurar el contenido de las páginas web.</p>
  </blockquote>

  <h2>Cita en línea</h2>
  <p>
    Como dice el refrán, <q>más vale tarde que nunca</q>, así que nunca es tarde para aprender.
  </p>

  <h2>Referencia</h2>
  <p>
    Para más detalles, consulta <cite>HTML5: The Missing Manual</cite>.
  </p>
</body>
</html>
```

</details>
