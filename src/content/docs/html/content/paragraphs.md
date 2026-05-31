---
title: PÁRRAFOS
module: html
submodule: content/paragraphs
---

El elemento `<p>` representa un párrafo de texto. Es el contenedor básico para contenido textual y el bloque más utilizado en cualquier documento HTML.

```html
<p>Este es un párrafo de texto. El navegador lo renderiza como un bloque con espacio superior e inferior.</p>
<p>Este es un segundo párrafo. Cada <p> genera automáticamente un margen vertical.</p>
```

## Comportamiento del elemento

- **Etiqueta de cierre opcional en la práctica**, obligatoria en la especificación. El navegador cierra implícitamente un `<p>` al encontrar otro `<p>`, un encabezado, una lista, un formulario o un elemento block.
- **No puede contener elementos block**. Un `<p>` solo admite phrasing content (texto, enlaces, imágenes inline, énfasis). Poner un `<div>` dentro de un `<p>` provoca que el navegador cierre el párrafo antes del `div`.

```html
<!-- Incorrecto: div dentro de p -->
<p>Texto del párrafo<div>Esto cierra el párrafo automáticamente</div></p>

<!-- Correcto: span dentro de p -->
<p>Texto del párrafo <span class="resaltado">texto resaltado</span></p>
```

## Colapso de espacio en blanco

El navegador colapsa múltiples espacios, tabulaciones y saltos de línea en un solo espacio. Para forzar un salto de línea dentro de un párrafo se usa `<br>`:

```html
<p>
  Línea uno.<br>
  Línea dos.<br>
  Línea tres.
</p>
```

`<br>` debe usarse para saltos de línea semánticamente significativos (direcciones, poemas, líneas de código). No debe usarse para separar párrafos — para eso está `<p>`.

## Separación visual entre párrafos

Los navegadores aplican un margen vertical automático entre párrafos consecutivos. CSS permite ajustar este espaciado:

```css
p {
  margin-top: 0;
  margin-bottom: 1rem;
  line-height: 1.6;
}
```

La práctica recomendada es definir un `margin-bottom` uniforme para todos los párrafos, eliminando el `margin-top` para evitar duplicación con el elemento anterior.

## Atributos globales y accesibilidad

- `<p>` acepta todos los atributos globales (`class`, `id`, `lang`, `dir`, `title`).
- El estándar ARIA recomienda no usar `role` en párrafos, ya que su semántica nativa es suficiente.
- Párrafos muy largos (más de 5-6 líneas) deben dividirse para mejorar la legibilidad.

```html
<p lang="en" dir="ltr">This paragraph is in English.</p>
<p lang="es">Este párrafo está en español y los usuarios de lectores de pantalla escucharán la pronunciación correcta.</p>
```

---

## Ejercicio: biografía en párrafos

Escribe tres párrafos que conformen una breve biografía:

1. Primer párrafo: nombre, profesión y año de inicio
2. Segundo párrafo: logros principales (usar `<br>` para separar dos logros dentro del mismo párrafo)
3. Tercer párrafo: una frase célebre entre comillas

<details>
<summary><strong>Ver solución</strong></summary>

```html
<p>María Fernanda López es desarrolladora frontend desde 2018. Comenzó su carrera en una startup de tecnología educativa y hoy lidera el equipo de UI en una empresa de comercio electrónico.</p>

<p>Ha recibido dos reconocimientos por accesibilidad web en 2023 y 2024.<br>
Es autora del blog "Código para todos", donde publica tutoriales sobre HTML semántico y buenas prácticas de desarrollo.</p>

<p>Como ella misma dice: "El buen código no solo funciona: se entiende, se mantiene y se adapta".</p>
```

</details>
