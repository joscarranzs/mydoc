---
title: Introducción
description: Origen, evolución y características.
module: lenguajes/javascript
submodule: general
order: 1
---

Al completar esta guía podrás:

- Explicar qué es JavaScript y para qué sirve
- Identificar dónde se puede ejecutar JavaScript
- Escribir tu primer script en una página HTML
- Manipular contenido, estilos y atributos de elementos HTML

---

## ¿Qué es JavaScript?

JavaScript es el único lenguaje de programación que los navegadores web entienden de forma nativa. Su función principal es agregar **comportamiento dinámico** a las páginas HTML.

Si HTML define la estructura y CSS define la apariencia, JavaScript define la **interacción**.

> **Nota:** A pesar del nombre, JavaScript no está relacionado con Java. Ambos son lenguajes independientes con propósitos y diseños distintos.

---

## ¿Qué puedes construir con JavaScript?

JavaScript te permite:

- Modificar el contenido de una página después de cargada
- Responder a acciones del usuario (clics, tecleo, movimientos)
- Validar datos en formularios antes de enviarlos al servidor
- Comunicarte con servidores para enviar y recibir datos
- Crear animaciones, juegos y aplicaciones web completas
- Ejecutar código en el servidor con Node.js

---

## Tu primer script

El método más básico para usar JavaScript es colocarlo dentro de una etiqueta `<script>` en HTML.

Abre cualquier editor de texto, crea un archivo `index.html` y escribe:

```html
<!DOCTYPE html>
<html lang="es">
  <body>
    <p id="mensaje">Texto original</p>
    <button onclick="cambiarTexto()">Haz clic</button>

    <script>
      function cambiarTexto() {
        document.getElementById("mensaje").innerHTML = "¡Hola, JavaScript!";
      }
    </script>
  </body>
</html>
```

Abre el archivo en tu navegador. Al hacer clic en el botón, el texto del párrafo cambiará. Acabas de escribir tu primer programa en JavaScript.

---

## ¿Cómo funciona?

Cuando el navegador carga una página HTML y encuentra una etiqueta `<script>`, ejecuta el código JavaScript inmediatamente.

El método `document.getElementById()` busca un elemento HTML por su atributo `id`. La propiedad `.innerHTML` permite leer o modificar el contenido HTML de ese elemento.

```javascript
// 1. Busca el elemento con id="mensaje"
// 2. Cambia su contenido interno
document.getElementById("mensaje").innerHTML = "¡Hola, JavaScript!";
```

---

## Lo que puedes hacer con JavaScript

### Cambiar contenido HTML

```javascript
document.getElementById("demo").innerHTML = "Nuevo contenido";
```

### Cambiar estilos CSS

```javascript
document.getElementById("demo").style.color = "blue";
document.getElementById("demo").style.fontSize = "24px";
```

### Cambiar atributos HTML

```javascript
document.getElementById("imagen").src = "nueva-imagen.png";
```

### Ocultar y mostrar elementos

```javascript
// Ocultar
document.getElementById("demo").style.display = "none";

// Mostrar
document.getElementById("demo").style.display = "block";
```

---

## Dónde se escribe JavaScript

**En el mismo archivo HTML:**

```html
<script>
  // Tu código aquí
</script>
```

**En un archivo externo:**

```html
<script src="scripts/mi-archivo.js"></script>
```

> **Recomendación:** Para proyectos reales, usa archivos externos. Separa el código JavaScript del HTML para mantener el proyecto organizado.

---

## Características principales

| Característica | Descripción |
|---|---|
| Interpretado | No necesita compilación; el navegador lo ejecuta directamente |
| Dinámico | Las variables no tienen tipo fijo |
| Débilmente tipado | JavaScript convierte tipos automáticamente cuando es necesario |
| Orientado a objetos | Soporta objetos, clases y herencia basada en prototipos |
| Funcional | Las funciones son valores que se pueden asignar, pasar y retornar |
| Asíncrono | Puede ejecutar operaciones sin bloquear el flujo principal |
| Multiplataforma | Funciona en navegadores, servidores, dispositivos móviles y más |

---

## ¿Qué necesitas para empezar?

Solo dos cosas:

1. **Un navegador web** (Chrome, Firefox, Edge o Safari)
2. **Un editor de texto** (VS Code, Sublime Text, o cualquier editor)

No necesitas instalar nada más. JavaScript ya está incluido en todos los navegadores modernos.

---

## Resumen

- JavaScript da vida a las páginas web
- Se ejecuta directamente en el navegador sin necesidad de instalación
- Permite manipular HTML, CSS y responder a eventos del usuario
- Se escribe dentro de la etiqueta `<script>` o en archivos `.js` externos
- Es el lenguaje de programación más utilizado en la web

---

## Ejercicio

Crea una página web que contenga:

1. Un encabezado `<h1>` con el texto `"Mi página"` y el id `"titulo"`
2. Un párrafo con el texto `"Este es el contenido inicial"` y el id `"contenido"`
3. Dos botones:
   - Uno con el texto `"Cambiar título"` que cambie el encabezado a `"Nuevo título"`
   - Otro con el texto `"Ocultar contenido"` que oculte el párrafo

**Instrucciones paso a paso:**

1. Crea un archivo `index.html`
2. Agrega la estructura HTML básica (`<!DOCTYPE html>`, `<html>`, `<body>`)
3. Agrega los elementos con sus respectivos `id`
4. Agrega dos botones con atributos `onclick` que llamen a las funciones `cambiarTitulo()` y `ocultarContenido()`
5. Escribe las funciones dentro de una etiqueta `<script>` al final del `<body>`
6. Usa `document.getElementById()` para acceder a cada elemento

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
  <body>
    <h1 id="titulo">Mi página</h1>
    <p id="contenido">Este es el contenido inicial</p>

    <button onclick="cambiarTitulo()">Cambiar título</button>
    <button onclick="ocultarContenido()">Ocultar contenido</button>

    <script>
      function cambiarTitulo() {
        document.getElementById("titulo").innerHTML = "Nuevo título";
      }

      function ocultarContenido() {
        document.getElementById("contenido").style.display = "none";
      }
    </script>
  </body>
</html>
```

</details>
