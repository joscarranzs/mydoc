---
title: Codificación URL
description: Porcentajes en URLs.
module: lenguajes/html
submodule: general
order: 39
---

Al completar esta guía podrás:

- Entender qué es la codificación URL
- Codificar caracteres especiales en URLs
- Usar encodeURIComponent en JavaScript
- Diferenciar entre caracteres seguros y no seguros

---

## Qué es la codificación URL

Las URLs solo pueden contener ciertos caracteres. Los demás deben codificarse con `%` seguido de su valor hexadecimal:

```
Carácter original:  á
URL codificada:     %C3%A1

Carácter original:  ñ
URL codificada:     %C3%B1
```

---

## Caracteres seguros

No necesitan codificación:

```
Letras:    A-Z a-z
Números:   0-9
Símbolos:  - _ . ~
Símbolo:   / (para rutas)
Símbolo:   ? (para query params)
```

---

## Caracteres no seguros

Deben codificarse:

```
Espacio:    %20  (o +)
< >         %3C %3E
" #         %22 %23
%           %25
{ } | \     %7B %7D %7C %5C
^ ~ [ ]     %5E %7E %5B %5D
`           %60
! * ' ( )   %21 %2A %27 %28 %29
```

---

## Ejemplos prácticos

```html
<!-- Enlace con espacios -->
<a href="https://ejemplo.com/mi%20archivo.pdf">
  Descargar
</a>

<!-- Enlace con caracteres especiales -->
<a href="https://ejemplo.com/búsqueda?q=HTML%20&%20CSS">
  Buscar: HTML & CSS
</a>

<!-- Enlace con parámetros complejos -->
<a href="https://ejemplo.com/?nombre=Mar%C3%ADa&edad=25">
  Perfil
</a>
```

---

## Codificación en query params

Los parámetros de URL también deben codificarse:

```html
<!-- Query parameter con acentos -->
<a href="https://ejemplo.com/buscar?q=programaci%C3%B3n+web">
  Buscar: programación web
</a>

<!-- Múltiples parámetros -->
<a href="https://ejemplo.com/?nombre=Jos%C3%A9&ciudad=San%20Jos%C3%A9">
  Buscar
</a>
```

---

## encodeURIComponent (JavaScript)

Para codificar dinámicamente:

```html
<script>
  const texto = "programación web & más";
  const codificado = encodeURIComponent(texto);
  // Resultado: "programaci%C3%B3n%20web%20%26%20m%C3%A1s"

  const url = "https://ejemplo.com/buscar?q=" + codificado;
  console.log(url);
  // https://ejemplo.com/buscar?q=programaci%C3%B3n%20web%20%26%20m%C3%A1s
</script>
```

---

## decodeURIComponent

Para decodificar de vuelta:

```html
<script>
  const codificado = "programaci%C3%B3n%20web";
  const original = decodeURIComponent(codificado);
  console.log(original); // "programación web"
</script>
```

---

## encodeURI vs encodeURIComponent

```javascript
const url = "https://ejemplo.com/buscar?q=programación web & más";

// encodeURI: codifica toda la URL pero preserva estructura
encodeURI(url);
// "https://ejemplo.com/buscar?q=programaci%C3%B3n%20web%20&%20m%C3%A1s"
// El & no se codifica (sigue siendo separador de params)

// encodeURIComponent: codifica todo
encodeURIComponent(url);
// "https%3A%2F%2Fejemplo.com%2Fbuscar%3Fq%3Dprogramaci%C3%B3n%20web%20%26%20m%C3%A1s"
// Todo está codificado, útil solo para el valor del parámetro
```

---

## Tabla de codificaciones comunes

| Carácter | Codificado |
|---|---|
| espacio | `%20` |
| á | `%C3%A1` |
| é | `%C3%A9` |
| í | `%C3%AD` |
| ó | `%C3%B3` |
| ú | `%C3%BA` |
| ñ | `%C3%B1` |
| ü | `%C3%BC` |
| & | `%26` |
| = | `%3D` |

---

## Resumen

| Concepto | Descripción |
|---|---|
| Codificación URL | Reemplazar caracteres no seguros con %XX |
| Caracteres seguros | A-Z, a-z, 0-9, -_.~ |
| encodeURI | Codifica URL completa preservando estructura |
| encodeURIComponent | Codifica todo (para valores de parámetros) |
| decodeURIComponent | Decodifica de vuelta a texto original |

---

## Ejercicio

Crea un enlace a una búsqueda en Google con el query "programación web + HTML5" (incluyendo los signos). Usa JavaScript para mostrar la URL codificada.

**Instrucciones paso a paso:**

1. Crea `codificacion-url.html`
2. Crea un enlace a Google con query codificado manualmente
3. Agrega un script que codifique un texto con encodeURIComponent
4. Muestra la URL codificada en la página

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Codificación URL</title>
</head>
<body>
  <h1>Codificación URL</h1>

  <h2>Enlace con texto codificado</h2>
  <a
    href="https://www.google.com/search?q=programaci%C3%B3n%20web%20%26%20HTML5"
    target="_blank"
    rel="noopener"
  >
    Buscar "programación web & HTML5" en Google
  </a>

  <h2>Codificación con JavaScript</h2>
  <p>Texto original: <strong id="original">programación web & HTML5</strong></p>
  <p>Texto codificado: <strong id="codificado"></strong></p>

  <script>
    const texto = "programación web & HTML5";
    const codificado = encodeURIComponent(texto);
    document.getElementById('codificado').textContent = codificado;

    // URL completa
    const url = "https://www.google.com/search?q=" + codificado;
    console.log("URL generada:", url);
  </script>
</body>
</html>
```

</details>
