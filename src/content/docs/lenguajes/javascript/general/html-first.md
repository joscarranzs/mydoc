---
title: HTML First
description: Integración HTML/JS básica.
module: lenguajes/javascript
submodule: general
order: 28
---

Al completar esta guía podrás:

- Insertar JavaScript en HTML de diferentes formas
- Usar atributos de eventos HTML (onclick, onchange)
- Seleccionar elementos del DOM
- Diferenciar entre carga síncrona y diferida

---

## Etiqueta script

La forma más básica de incluir JavaScript en HTML.

```html
<script>
  console.log("Ejecutado en el navegador");
</script>
```

### Script externo

```html
<script src="js/app.js"></script>
```

> **Convención:** coloca las etiquetas `<script>` al final del `<body>`, no en `<head>`. Así el HTML se carga antes de ejecutar JavaScript.

---

## Atributos de eventos HTML

Puedes asignar eventos directamente en etiquetas HTML con atributos `on...`.

```html
<button onclick="alert('Hiciste clic')">Haz clic</button>

<input type="text" onchange="console.log(this.value)" placeholder="Escribe algo">

<div onmouseover="this.style.backgroundColor = 'yellow'">
  Pasa el mouse aquí
</div>
```

```html
<p id="mensaje">Texto original</p>
<button onclick="document.getElementById('mensaje').innerHTML = 'Cambiado'">
  Cambiar texto
</button>
```

> **Nota:** los atributos `onclick` en HTML funcionan pero mezclan lógica con presentación. En proyectos reales, usa `addEventListener` en JavaScript separado.

---

## this en atributos HTML

Dentro de un atributo de evento, `this` referencia al elemento HTML.

```html
<button onclick="this.style.display = 'none'">
  Ocultarme
</button>
```

---

## value en inputs

Para obtener o modificar el valor de inputs, usa la propiedad `value`.

```html
<input id="nombre" type="text" placeholder="Tu nombre">
<button onclick="saludar()">Saludar</button>

<script>
  function saludar() {
    let nombre = document.getElementById("nombre").value;
    alert("Hola, " + nombre);
  }
</script>
```

Para otro tipo de elementos, usa `innerHTML` o `textContent`:

```html
<p id="salida"></p>

<script>
  document.getElementById("salida").textContent = "Texto insertado";
</script>
```

---

## Seleccionar elementos

Antes de manipular el DOM, necesitas seleccionar elementos.

```javascript
// Por id
let titulo = document.getElementById("titulo");

// Por clase (retorna HTMLCollection)
let items = document.getElementsByClassName("item");

// Por etiqueta
let parrafos = document.getElementsByTagName("p");

// Selector CSS (retorna el primero)
let primero = document.querySelector(".item");

// Selector CSS (retorna todos)
let todos = document.querySelectorAll(".item");
```

---

## querySelector y querySelectorAll

Son los métodos más flexibles. Usan selectores CSS.

```html
<ul id="lista">
  <li class="item">Uno</li>
  <li class="item">Dos</li>
  <li class="item">Tres</li>
</ul>

<script>
  let lista = document.querySelector("#lista");
  let items = document.querySelectorAll(".item");

  console.log(items.length);  // 3

  items.forEach(item => {
    item.style.color = "blue";
  });
</script>
```

---

## defer y async

Controlan cuándo se descarga y ejecuta un script externo.

```html
<!-- Normal: bloquea el parsing mientras descarga y ejecuta -->
<script src="app.js"></script>

<!-- defer: descarga en paralelo, ejecuta al final del parsing -->
<script src="app.js" defer></script>

<!-- async: descarga en paralelo, ejecuta inmediatamente al terminar -->
<script src="app.js" async></script>
```

| Atributo | Descarga | Ejecución | Orden |
|---|---|---|---|
| (ninguno) | Bloquea parsing | Inmediata | En orden |
| `defer` | En paralelo | Al final del parsing | En orden |
| `async` | En paralelo | Inmediata al descargar | No garantizado |

> **Regla:** usa `defer` para scripts que manipulan el DOM. Usa `async` para scripts independientes (analytics, widgets).

---

## type="module"

Los módulos se comportan como `defer` por defecto.

```html
<script type="module" src="app.js"></script>
<!-- Equivalente a: -->
<script type="module" src="app.js" defer></script>
```

---

## document.write

Método antiguo que escribe directamente en el documento. Si se usa después de cargar, sobrescribe la página.

```html
<script>
  document.write("<p>Texto insertado</p>");
</script>
```

> **Advertencia:** no uses `document.write()` en proyectos modernos. Si se ejecuta después de que el documento terminó de cargarse, borra todo el contenido.

---

## El objeto document

`document` es el punto de entrada al DOM. Desde aquí accedes a todo el contenido de la página.

```javascript
console.log(document.title);       // Título de la página
console.log(document.URL);         // URL actual
console.log(document.body);        // El elemento <body>
console.log(document.head);        // El elemento <head>
console.log(document.documentElement);  // El elemento <html>
```

---

## Resumen

| Método | Descripción |
|---|---|
| `<script>` | JavaScript inline |
| `<script src>` | JavaScript externo (síncrono) |
| `defer` | Descarga en paralelo, ejecuta al final |
| `async` | Descarga en paralelo, ejecuta inmediata |
| `type="module"` | Módulo ES (defer implícito) |
| `onclick`, `onchange` | Atributos de evento HTML |
| `getElementById()` | Selecciona por id |
| `querySelector()` | Selecciona con selector CSS |
| `.value` | Valor de inputs |
| `.innerHTML` | Contenido HTML de un elemento |

- Coloca `<script>` al final del `<body>` o usa `defer`
- Prefiere `querySelector` sobre `getElementById`/`getElementsByClassName`
- Usa `addEventListener` en lugar de atributos `on...` en proyectos grandes
- `defer` garantiza orden; `async` no

---

## Ejercicio

Crea una página HTML con un input de texto, un botón y un párrafo vacío. Al hacer clic en el botón, el texto del input debe aparecer en el párrafo.

**Instrucciones paso a paso:**

1. Crea un archivo `index.html`
2. Agrega `<input id="entrada" type="text">`
3. Agrega `<button onclick="mostrar()">Mostrar</button>`
4. Agrega `<p id="salida"></p>`
5. Escribe la función `mostrar()` que lee el valor del input y lo asigna al párrafo
6. Prueba en el navegador

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
  <body>
    <input id="entrada" type="text" placeholder="Escribe algo">
    <button onclick="mostrar()">Mostrar</button>
    <p id="salida"></p>

    <script>
      function mostrar() {
        let texto = document.getElementById("entrada").value;
        document.getElementById("salida").textContent = texto;
      }
    </script>
  </body>
</html>
```

**Con addEventListener (mejor práctica):**

```html
<!DOCTYPE html>
<html lang="es">
  <body>
    <input id="entrada" type="text" placeholder="Escribe algo">
    <button id="btn">Mostrar</button>
    <p id="salida"></p>

    <script>
      document.getElementById("btn").addEventListener("click", () => {
        let texto = document.getElementById("entrada").value;
        document.getElementById("salida").textContent = texto;
      });
    </script>
  </body>
</html>
```

</details>
