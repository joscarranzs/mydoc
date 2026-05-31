---
title: CHARSET
module: html
submodule: fundamentals/charsets
---

La codificación de caracteres determina cómo el navegador traduce los bytes del archivo HTML a los caracteres que el usuario ve en pantalla. Especificar la codificación correcta es obligatorio para garantizar que acentos, eñes, símbolos y caracteres de otros alfabetos se muestren sin errores.

## Declaración del charset

Se declara dentro del `<head>` mediante el elemento `<meta>` con el atributo `charset`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Página con acentuación correcta</title>
</head>
<body>
  <p>Campeón, acción, próximo, lingüística.</p>
</body>
</html>
```

La declaración debe aparecer **antes** de cualquier contenido textual o elemento que pueda contener texto. El navegador, al encontrarla, descarta cualquier interpretación previa y reinicia el análisis con la codificación indicada.

## UTF-8: el estándar universal

UTF-8 (Unicode Transformation Format, 8-bit) es la codificación recomendada y prácticamente universal para la web. Soporta todos los caracteres del estándar Unicode: desde el alfabeto latino hasta sistemas de escritura como el cirílico, el árabe, el chino, el japonés o los emojis.

```html
<meta charset="UTF-8">
```

Sin esta línea, el navegador debe inferir la codificación a partir de otros factores (cabeceras HTTP, el BOM, o un análisis heurístico del contenido), lo que puede producir resultados incorrectos, especialmente con caracteres acentuados.

## Problemas comunes por falta de charset

Los síntomas más frecuentes de una codificación mal declarada o ausente son:

| Síntoma | Causa probable |
|---------|----------------|
| Ã¡, Ã©, Ã± en lugar de á, é, ñ | El navegador interpreta UTF-8 como ISO-8859-1 (Latin-1) |
| Cuadros o signos de interrogación | El carácter no existe en la codificación declarada |
| El validador W3C muestra advertencias | Falta `charset` o está después de los primeros 1024 bytes |

```html
<!-- Incorrecto: sin charset, los acentos pueden verse mal -->
<head>
  <title>Acción y reacción</title>
  <meta charset="UTF-8">
</head>

<!-- Correcto: charset antes del title -->
<head>
  <meta charset="UTF-8">
  <title>Acción y reacción</title>
</head>
```

## Charset vs. Content-Type

También es posible declarar la codificación mediante la directiva `http-equiv`:

```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
```

Esta forma es equivalente a `<meta charset="UTF-8">`, pero más verbosa. En HTML5 se prefiere la versión simplificada. La cabecera HTTP `Content-Type` que envía el servidor tiene prioridad sobre ambas.

---

## Ejercicio: diagnosticar y corregir charset

El siguiente fragmento contiene un problema de codificación. Identifica el error y reescribe el documento corregido:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Lección práctica: conjugación verbal</title>
</head>
<body>
  <h1>Verbos: acción, reacción y percepción</h1>
</body>
</html>
```

<details>
<summary><strong>Ver solución</strong></summary>

El error es la ausencia de `<meta charset="UTF-8">`. Sin ella, los caracteres acentuados (acción, reacción, percepción, conjugación) pueden mostrarse incorrectamente.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Lección práctica: conjugación verbal</title>
</head>
<body>
  <h1>Verbos: acción, reacción y percepción</h1>
</body>
</html>
```

</details>
