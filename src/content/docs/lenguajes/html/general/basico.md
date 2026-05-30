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

Todo documento HTML sigue esta estructura:

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

---

## DOCTYPE

`<!DOCTYPE html>` declara que el documento usa HTML5. Debe ir siempre en la primera línea.

```html
<!-- HTML5 -->
<!DOCTYPE html>

<!-- Versiones anteriores (obsoleto) -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
```

---

## html

La etiqueta `<html>` es la raíz del documento. El atributo `lang` indica el idioma.

```html
<html lang="es">  <!-- Español -->
<html lang="en">  <!-- Inglés -->
<html lang="fr">  <!-- Francés -->
```

---

## head

Contiene metadatos que no se muestran directamente:

```html
<head>
  <!-- Codificación de caracteres -->
  <meta charset="UTF-8">

  <!-- Configuración de viewport para responsive -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Título (aparece en la pestaña del navegador) -->
  <title>Mi página</title>

  <!-- Descripción para SEO -->
  <meta name="description" content="Descripción de la página">

  <!-- Palabras clave -->
  <meta name="keywords" content="html, tutorial, web">

  <!-- Autor -->
  <meta name="author" content="Tu nombre">

  <!-- Vínculo a CSS -->
  <link rel="stylesheet" href="estilos.css">

  <!-- Icono de página -->
  <link rel="icon" href="favicon.ico">
</head>
```

---

## body

Contiene todo el contenido visible:

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

La indentación (sangría) hace el código legible:

```html
<!-- Mal — sin indentación -->
<body>
<h1>Título</h1>
<p>Texto</p>
<ul>
<li>Uno</li>
<li>Dos</li>
</ul>
</body>

<!-- Bien — con indentación -->
<body>
  <h1>Título</h1>
  <p>Texto</p>
  <ul>
    <li>Uno</li>
    <li>Dos</li>
  </ul>
</body>
```

---

## Validación

Puedes validar tu HTML en: https://validator.w3.org/

```html
<!-- Errores comunes que el validador detecta -->
<img src="foto.jpg">           <!-- Error: falta alt -->
<p>Texto                        <!-- Error: falta cierre -->
<br>                            <!-- Advertencia: usa <br> en HTML5 -->
<div span="texto">              <!-- Error: atributo inexistente -->
```

---

## Resumen

| Elemento | Propósito |
|---|---|
| `<!DOCTYPE html>` | Declara HTML5 |
| `<html>` | Raíz del documento |
| `<head>` | Metadatos, título, CSS |
| `<body>` | Contenido visible |
| `lang` | Idioma del documento |
| `charset` | Codificación de caracteres |

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
