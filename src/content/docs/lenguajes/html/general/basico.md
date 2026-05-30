---
title: Básico
description: Estructura básica de un documento HTML.
module: lenguajes/html
submodule: general
order: 4
---

Al completar esta guía podrás:

- Escribir la estructura básica de un documento HTML
- Diferenciar las secciones principales del documento
- Usar las etiquetas esenciales correctamente
- Validar tu código HTML

---

## Estructura mínima

Todo documento HTML sigue esta estructura. Es la base sobre la que se construye cualquier página web:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título de la página</title>
</head>
<body>
  <!-- Contenido visible de la página -->
</body>
</html>
```

Cada línea tiene un propósito específico. Veamos cada una.

---

## DOCTYPE

`<!DOCTYPE html>` declara que el documento usa HTML5. Debe ir siempre en la primera línea, antes de cualquier otra etiqueta.

Esta etiqueta no es una etiqueta HTML en sí misma — es una instrucción para el navegador sobre qué versión de HTML debe interpretar. Si la omites, el navegador entra en "modo quirúrgico" y puede comportarse de forma inconsistente.

```html
<!-- HTML5 — lo que debes usar siempre -->
<!DOCTYPE html>

<!-- Versiones anteriores — obsoleto, no lo uses -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
```

---

## html

La etiqueta `<html>` es la raíz del documento. Todo el contenido va dentro de ella. El atributo `lang` indica el idioma del contenido, lo cual es importante para:

- **Accesibilidad** — Los lectores de pantalla usan el atributo `lang` para pronunciar correctamente el texto
- **SEO** — Los buscadores usan este dato para mostrar resultados relevantes por idioma

```html
<html lang="es">  <!-- Español -->
<html lang="en">  <!-- Inglés -->
<html lang="fr">  <!-- Francés -->
```

---

## head

El `<head>` contiene metadatos: información sobre el documento que no se muestra directamente en pantalla. El usuario no ve estos datos, pero el navegador y los buscadores los utilizan.

```html
<head>
  <!-- Codificación de caracteres — permite tildes y ñ -->
  <meta charset="UTF-8">

  <!-- Viewport — hace que la página sea responsive en móviles -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Título — aparece en la pestaña del navegador y en resultados de Google -->
  <title>Mi página</title>

  <!-- Descripción — aparece en resultados de búsqueda -->
  <meta name="description" content="Descripción de la página">

  <!-- Palabras clave — ya no tiene tanto peso para SEO, pero se usa -->
  <meta name="keywords" content="html, tutorial, web">

  <!-- Autor — identifica al creador del documento -->
  <meta name="author" content="Tu nombre">

  <!-- CSS externo — vincula una hoja de estilos -->
  <link rel="stylesheet" href="estilos.css">

  <!-- Favicon — icono que aparece en la pestaña -->
  <link rel="icon" href="favicon.ico">
</head>
```

El `<meta charset="UTF-8">` es especialmente importante: sin él, caracteres como tildes, ñ y eñes pueden mostrarse como símbolos extraños.

---

## body

El `<body>` contiene todo el contenido visible de la página. Aquí van los encabezados, párrafos, imágenes, enlaces, listas, formularios — todo lo que el usuario puede ver e interactuar.

```html
<body>
  <h1>Encabezado principal</h1>
  <p>Un párrafo de texto.</p>
  <a href="https://ejemplo.com">Un enlace</a>
  <img src="imagen.jpg" alt="Descripción">
  <ul>
    <li>Elemento de lista</li>
  </ul>
</body>
```

---

## Indentación

La indentación (sangría) no afecta cómo se muestra la página, pero es esencial para que el código sea legible. Sin indentación, es difícil ver qué elementos están dentro de otros.

```html
<!-- Mal — sin indentación, difícil de leer -->
<body>
<h1>Título</h1>
<p>Texto</p>
<ul>
<li>Uno</li>
<li>Dos</li>
</ul>
</body>

<!-- Bien — con indentación, la estructura es clara -->
<body>
  <h1>Título</h1>
  <p>Texto</p>
  <ul>
    <li>Uno</li>
    <li>Dos</li>
  </ul>
</body>
```

La convención es usar **2 espacios** por nivel de indentación. No uses tabs ni 4 espacios — 2 espacios es lo estándar en desarrollo web.

---

## Validación

Incluso con buena práctica, es posible cometer errores. El validador del W3C detecta problemas como etiquetas sin cerrar, atributos mal escritos o elementos anidados incorrectamente.

Valida tu HTML en: https://validator.w3.org/

```html
<!-- Errores comunes que el validador detecta -->
<img src="foto.jpg">           <!-- Error: falta alt — obligatorio para accesibilidad -->
<p>Texto                        <!-- Error: falta cierre de </p> -->
<br>                            <!-- Advertencia: en HTML5 se usa <br>, no <br/> -->
<div span="texto">              <!-- Error: "span" no es un atributo válido -->
```

---

## Resumen

| Elemento | Propósito |
|---|---|
| `<!DOCTYPE html>` | Declara que el documento es HTML5 |
| `<html>` | Raíz del documento. Usa `lang` para idioma |
| `<head>` | Metadatos: título, charset, viewport, CSS |
| `<body>` | Contenido visible de la página |
| `charset` | Codificación de caracteres (usa UTF-8) |
| `viewport` | Configuración para dispositivos móviles |

---

## Ejercicio

Crea un documento HTML completo con head y body. En head incluye charset, viewport y title. En body agrega un encabezado y un párrafo.

**Instrucciones paso a paso:**

1. Crea un archivo `basico.html`
2. Escribe `<!DOCTYPE html>`
3. Agrega `<html lang="es">`
4. Dentro de `<head>`, agrega charset, viewport y title
5. Dentro de `<body>`, agrega `<h1>` y `<p>`
6. Guarda y abre en el navegador

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Básico</title>
</head>
<body>
  <h1>Aprendiendo HTML</h1>
  <p>Este es el contenido visible de la página.</p>
</body>
</html>
```

</details>
