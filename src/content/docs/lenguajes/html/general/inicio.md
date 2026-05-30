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

HTML (HyperText Markup Language) es el lenguaje estándar para crear páginas web. No es un lenguaje de programación, sino de **marcado**: describe la estructura y el contenido mediante etiquetas.

Cada página web que visitas está construida con HTML. Cuando abres un navegador y escribes una URL, el servidor te devuelve un archivo HTML que el navegador interpreta y muestra en pantalla.

```html
<!-- Estructura básica de cualquier página web -->
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

En este ejemplo:
- `<!DOCTYPE html>` le indica al navegador que es HTML5
- `<html>` es la raíz del documento
- `<head>` contiene información que no se ve en pantalla (como el título)
- `<body>` contiene todo lo que el usuario puede ver

---

## HTML, CSS y JavaScript

Las páginas web现代as usan tres tecnologías complementarias. Cada una tiene un rol específico:

- **HTML** define la **estructura**: qué hay en la página (títulos, párrafos, imágenes, enlaces)
- **CSS** define la **presentación**: cómo se ve (colores, fuentes, espaciado, posicionamiento)
- **JavaScript** define el **comportamiento**: qué hace (interacciones, validaciones, animaciones)

```html
<!-- HTML: estructura — define qué elemento es cada cosa -->
<button id="saludar">Haz clic</button>

<!-- CSS: presentación — define cómo se ve el botón -->
<style>
  button {
    background: #1A73E8;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
  }
</style>

<!-- JavaScript: comportamiento — define qué pasa al hacer clic -->
<script>
  document.getElementById("saludar").onclick = () => {
    alert("¡Hola!");
  };
</script>
```

---

## Cómo funciona una página web

El proceso de carga de una página web tiene cuatro pasos:

1. **El navegador solicita** una página HTML al servidor (escribes la URL o haces clic en un enlace)
2. **El servidor responde** enviando el código HTML del archivo
3. **El navegador interpreta** las etiquetas HTML y construye la estructura visual (DOM)
4. **El navegador carga** recursos adicionales: hojas de estilo CSS, scripts JavaScript, imágenes, fuentes

Este proceso ocurre cada vez que visitas una página. El HTML es la base que todo navegador entiende.

---

## Editor de código

Para escribir HTML solo necesitas dos cosas: un editor de texto y un navegador. No necesitas instalar nada especial.

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

Guarda el archivo con extensión `.html` y ábrelo haciendo doble clic. El navegador lo mostrará automáticamente. Si usas un editor como VS Code con la extensión Live Server, el navegador se actualizará cada vez que guardes cambios.

---

## Resumen

| Concepto | Descripción |
|---|---|
| HTML | Lenguaje de marcado para estructurar contenido web |
| CSS | Lenguaje de estilos para presentación visual |
| JavaScript | Lenguaje de programación para comportamiento e interacción |
| Navegador | Software que interpreta HTML y renderiza la página |

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
