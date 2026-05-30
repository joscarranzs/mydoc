---
title: Inicio
description: Visión general de HTML.
module: lenguajes/html
submodule: general
order: 1
---

Al completar esta guía podrás:

- Explicar qué es HTML y su propósito
- Reconocer la estructura básica de una página web
- Entender la relación entre HTML, CSS y JavaScript
- Navegar por la documentación de HTML

---

## ¿Qué es HTML?

HTML (HyperText Markup Language) es el lenguaje estándar para crear páginas web. No es un lenguaje de programación, sino de marcado: describe la estructura y el contenido mediante etiquetas.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi página</title>
  </head>
  <body>
    <h1>Hola, mundo</h1>
    <p>Este es mi primer documento HTML.</p>
  </body>
</html>
```

---

## HTML, CSS y JavaScript

Estas tres tecnologías trabajan juntas para construir la web:

```html
<!-- HTML: estructura -->
<button id="saludar">Haz clic</button>

<!-- CSS: presentación -->
<style>
  button {
    background: #1A73E8;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
  }
</style>

<!-- JavaScript: comportamiento -->
<script>
  document.getElementById("saludar").onclick = () => {
    alert("¡Hola!");
  };
</script>
```

---

## Cómo funciona

1. El navegador solicita una página HTML al servidor
2. El servidor devuelve el código HTML
3. El navegador interpreta las etiquetas y renderiza la página
4. El navegador carga recursos adicionales (CSS, JS, imágenes)

---

## Editor de código

Solo necesitas un editor de texto y un navegador:

```html
<!-- Guarda esto como index.html -->
<!-- Ábrelo con doble clic en el navegador -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi primera página</title>
</head>
<body>
  <h1>¡Funciona!</h1>
</body>
</html>
```

---

## Resumen

| Concepto | Descripción |
|---|---|
| HTML | Lenguaje de marcado para estructurar contenido web |
| CSS | Lenguaje de estilos para presentación |
| JavaScript | Lenguaje de programación para comportamiento |
| Navegador | Interpreta el HTML y renderiza la página |

---

## Ejercicio

Crea un archivo `index.html` con la estructura básica de un documento HTML y visualízalo en el navegador.

**Instrucciones paso a paso:**

1. Abre tu editor de texto
2. Crea un archivo llamado `index.html`
3. Escribe la estructura básica con `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
4. Agrega un título y un párrafo
5. Guarda el archivo
6. Ábrelo con tu navegador (doble clic)

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi primera página</title>
</head>
<body>
  <h1>Bienvenido a HTML</h1>
  <p>Esta es mi primera página web creada con HTML.</p>
</body>
</html>
```

</details>
