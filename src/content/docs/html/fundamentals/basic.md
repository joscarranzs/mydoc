---
title: BÁSICO
module: html
submodule: fundamentals/basic
---

Todo documento HTML comparte una estructura raíz común. El estándar define un esqueleto obligatorio que todo navegador espera encontrar para interpretar correctamente el contenido. Comprender esta arquitectura base es el primer paso para escribir páginas predecibles y compatibles.

## Estructura mínima del documento

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título de la página</title>
</head>
<body>

</body>
</html>
```

Cada elemento cumple una función específica dentro del ciclo de vida del documento:

| Elemento                  | Propósito |
|---------------------------|-----------|
| `<!DOCTYPE html>`         | Declara el modo estándar del navegador. Sin esta línea, el navegador activa _quirks mode_, que emula el comportamiento errático de navegadores antiguos. |
| `<html lang="es">`        | Raíz del documento. El atributo `lang` define el idioma principal y es crítico para accesibilidad y SEO. |
| `<head>`                  | Contenedor de metadatos: no visible, pero esencial para el navegador y motores de búsqueda. |
| `<meta charset="UTF-8">`  | Define la codificación de caracteres. Sin ella, caracteres acentuados o símbolos pueden mostrarse incorrectamente. |
| `<meta name="viewport">`  | Controla el layout en dispositivos móviles. Sin ella, el navegador renderiza en un viewport de escritorio y escala hacia abajo. |
| `<title>`                 | Texto que aparece en la pestaña del navegador y es el primer factor que los buscadores muestran en resultados. |
| `<body>`                  | Contenedor de todo el contenido visible. |

## Anatomía de un elemento

Un elemento HTML típico se compone de tres partes: **etiqueta de apertura**, **contenido** y **etiqueta de cierre**. Algunos elementos son vacíos (_void elements_) y solo poseen etiqueta de apertura.

```html
<!-- Elemento con contenido -->
<p>Este es un párrafo de texto.</p>

<!-- Elemento vacío (void) -->
<img src="foto.jpg" alt="Descripción">
<br>
<hr>
<input type="text">
```

Los elementos vacíos no pueden albergar hijos ni texto. Su significado se completa únicamente mediante atributos.

## Reglas fundamentales de sintaxis

HTML impone pocas reglas, pero ignorarlas produce resultados impredecibles:

- **Las etiquetas se anidan, no se cruzan.** Un elemento abierto dentro de otro debe cerrarse antes que el contenedor.
  ```html
  <!-- Incorrecto: cruce de etiquetas -->
  <strong><em>Texto</strong></em>

  <!-- Correcto: anidamiento jerárquico -->
  <strong><em>Texto</em></strong>
  ```

- **Los atributos se escriben dentro de la etiqueta de apertura.**
  ```html
  <a href="https://ejemplo.com" target="_blank">Enlace</a>
  ```

- **HTML no distingue mayúsculas de minúsculas**, aunque por convención se usan minúsculas.
  ```html
  <P>Esto funciona</P>   <!-- válido, pero no recomendado -->
  <p>Esto es correcto</p> <!-- convención estándar -->
  ```

- **El espacio en blanco se colapsa.** Múltiples espacios, tabulaciones y saltos de línea se reducen a un solo espacio.
  ```html
  <p>Hola          mundo</p>
  <!-- Se renderiza como: "Hola mundo" -->
  ```

- **Los atributos booleanos** se activan por su sola presencia.
  ```html
  <input type="text" disabled>
  <input type="text" disabled="disabled"> <!-- equivalente -->
  ```

## Comentarios

Los comentarios en HTML no se renderizan, pero son visibles en el código fuente. Se usan para documentar secciones, desactivar fragmentos temporalmente o dejar notas para otros desarrolladores.

```html
<!-- Este comentario no aparece en pantalla -->
<!--
  Secciones más grandes pueden
  envolverse en comentarios
  multilínea
-->
```

---

## Ejercicio: tu primer documento completo

Crea un documento HTML válido que represente una tarjeta de presentación personal. Debe incluir:

1. La estructura mínima completa (`DOCTYPE`, `html`, `head`, `body`)
2. Un título de página que diga "Tarjeta de presentación"
3. Un encabezado principal (`<h1>`) con tu nombre completo
4. Un párrafo (`<p>`) con tu cargo o profesión
5. Una línea horizontal (`<hr>`) como separador
6. Un párrafo breve con una frase personal o mantra profesional

<details>
<summary><strong>Ver solución</strong></summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tarjeta de presentación</title>
</head>
<body>

  <h1>Ana Lucía Romero</h1>
  <p>Ingeniera de software especializada en sistemas distribuidos</p>

  <hr>

  <p>Escribo código como si quien lo mantenga después sea un psicópata que sabe dónde vivo.</p>

</body>
</html>
```

</details>
