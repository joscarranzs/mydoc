---
title: Eventos HTML
description: Event listeners.
module: lenguajes/javascript
submodule: general
order: 31
---

Al completar esta guía podrás:

- Asignar eventos con addEventListener
- Entender el flujo de captura y burbujeo
- Acceder al elemento que disparó el evento
- Prevenir comportamientos por defecto
- Delegar eventos para elementos dinámicos

---

## addEventListener

La forma moderna de asignar eventos a elementos.

```javascript
let boton = document.getElementById("miBoton");

boton.addEventListener("click", function() {
  console.log("Botón clickeado");
});
```

### Eventos comunes

```javascript
let elemento = document.getElementById("demo");

// Click
elemento.addEventListener("click", () => console.log("click"));

// Doble click
elemento.addEventListener("dblclick", () => console.log("doble click"));

// Mouse sobre el elemento
elemento.addEventListener("mouseenter", () => console.log("entró"));
elemento.addEventListener("mouseleave", () => console.log("salió"));

// Teclado
let input = document.getElementById("campo");
input.addEventListener("keydown", (e) => console.log("tecla:", e.key));
input.addEventListener("keyup", (e) => console.log("soltó:", e.key));

// Cambio en input
input.addEventListener("input", (e) => console.log("valor:", e.target.value));

// Enviar formulario
let form = document.getElementById("miForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Formulario enviado");
});
```

---

## Event object

El manejador recibe un objeto `Event` con información del evento.

```javascript
boton.addEventListener("click", function(evento) {
  console.log(evento.type);      // "click"
  console.log(evento.target);    // Elemento que disparó el evento
  console.log(evento.currentTarget);  // Elemento donde está el listener
  console.log(evento.clientX);   // Coordenada X del mouse
  console.log(evento.clientY);   // Coordenada Y del mouse
  console.log(evento.timeStamp); // Tiempo desde que se cargó la página
});
```

---

## target vs currentTarget

```javascript
document.getElementById("contenedor").addEventListener("click", function(e) {
  console.log("target:", e.target.id);           // Elemento clickeado
  console.log("currentTarget:", e.currentTarget.id);  // contenedor
});
```

| Propiedad | Descripción |
|---|---|
| `target` | Elemento que originó el evento |
| `currentTarget` | Elemento donde está registrado el listener |

---

## this en eventos

En function declaration, `this` es el elemento donde está el listener.

```javascript
boton.addEventListener("click", function() {
  console.log(this.id);  // El botón mismo
  this.style.color = "red";
});
```

En arrow functions, `this` es el contexto donde se definió (no el elemento).

```javascript
boton.addEventListener("click", () => {
  console.log(this);  // window (o undefined en módulos)
});
```

> **Regla:** usa function regular si necesitas acceder al elemento con `this`. Usa `e.currentTarget` si prefieres arrow function.

---

## preventDefault

Detiene el comportamiento por defecto del navegador.

```javascript
// Evitar que un enlace navegue
document.querySelector("a").addEventListener("click", function(e) {
  e.preventDefault();
  console.log("Enlace clickeado pero no navega");
});

// Evitar que un formulario recargue la página
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  // Procesar formulario con JavaScript
});

// Evitar clic derecho
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
  console.log("Menú contextual bloqueado");
});
```

---

## Propagación de eventos

Cuando clickeas un elemento, el evento viaja en tres fases:

1. **Captura:** desde `document` hasta el elemento
2. **Target:** llega al elemento clickeado
3. **Burbujeo:** desde el elemento hasta `document`

```html
<div id="padre">
  <button id="hijo">Clic</button>
</div>
```

```javascript
document.getElementById("padre").addEventListener("click", () => {
  console.log("Padre — burbujeo");
});

document.getElementById("hijo").addEventListener("click", () => {
  console.log("Hijo");
});

// Clic en el botón:
// "Hijo"
// "Padre — burbujeo"
```

### Captura (tercer parámetro true)

```javascript
document.getElementById("padre").addEventListener("click", () => {
  console.log("Padre — captura");
}, true);  // true = fase de captura

document.getElementById("hijo").addEventListener("click", () => {
  console.log("Hijo");
});

// Clic en el botón:
// "Padre — captura"
// "Hijo"
```

---

## stopPropagation

Detiene la propagación del evento.

```javascript
document.getElementById("padre").addEventListener("click", () => {
  console.log("No se ejecuta si el hijo detiene la propagación");
});

document.getElementById("hijo").addEventListener("click", function(e) {
  e.stopPropagation();  // El padre no recibe el evento
  console.log("Solo el hijo");
});
```

> **Regla:** usa `stopPropagation` con moderación. Puede romper la delegación de eventos. Primero considera si realmente necesitas detener la propagación.

---

## Delegación de eventos

Permite manejar eventos de elementos que aún no existen en el DOM.

```javascript
// En lugar de asignar a cada <li>:
// document.querySelectorAll("li").forEach(...)

// Asigna al padre y filtra por target
document.getElementById("lista").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clic en:", e.target.textContent);
    e.target.classList.toggle("seleccionado");
  }
});

// Funciona incluso para <li> agregados después
let nuevo = document.createElement("li");
nuevo.textContent = "Dinámico";
document.getElementById("lista").appendChild(nuevo);
```

> **Regla:** la delegación es más eficiente que asignar listeners individuales, especialmente en listas grandes o elementos dinámicos.

---

## Remover eventos

```javascript
function handleClick() {
  console.log("Clic");
  boton.removeEventListener("click", handleClick);  // Se remueve a sí mismo
}

boton.addEventListener("click", handleClick);

// También puedes remover desde fuera
// boton.removeEventListener("click", handleClick);
```

> **Regla:** para poder remover un evento, la función debe tener nombre (no puede ser anónima). Las arrow functions asignadas a una variable también funcionan.

---

## Eventos de teclado

```javascript
document.addEventListener("keydown", function(e) {
  console.log("Tecla:", e.key);
  console.log("Código:", e.code);
  console.log("Ctrl:", e.ctrlKey);
  console.log("Shift:", e.shiftKey);
  console.log("Alt:", e.altKey);

  // Atajos comunes
  if (e.key === "Enter" && e.target.tagName === "INPUT") {
    console.log("Enter en un input");
  }

  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    console.log("Ctrl+S bloqueado");
  }
});
```

---

## Resumen

| Método | Descripción |
|---|---|
| `addEventListener` | Asigna un evento |
| `removeEventListener` | Remueve un evento |
| `preventDefault()` | Detiene comportamiento por defecto |
| `stopPropagation()` | Detiene propagación del evento |
| `e.target` | Elemento que originó el evento |
| `e.currentTarget` | Elemento del listener |

- Usa `addEventListener` en lugar de atributos `onclick` en HTML
- Los eventos viajan en tres fases: captura → target → burbujeo
- `e.target` y `e.currentTarget` son diferentes
- La delegación de eventos funciona por burbujeo
- Para remover eventos, la función debe tener nombre
- `preventDefault()` evita comportamientos del navegador

---

## Ejercicio

Crea una lista con varios `<li>` y un botón para agregar nuevos. Usa delegación de eventos para que al hacer clic en cualquier `<li>`, se muestre su texto en un `<p>` de salida.

**Instrucciones paso a paso:**

1. HTML: `<ul id="lista">` con 3 `<li>`, un input y un botón "Agregar"
2. Asigna un solo `click` listener al `<ul>` (delegación)
3. Dentro, verifica que `e.target.tagName === "LI"`
4. Muestra `e.target.textContent` en un `<p id="salida">`
5. El botón agrega nuevos `<li>` — la delegación funciona automáticamente

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
  <body>
    <h2>Lista de compras</h2>

    <input id="item" type="text" placeholder="Nuevo item">
    <button id="agregar">Agregar</button>

    <ul id="lista">
      <li>Manzanas</li>
      <li>Pan</li>
      <li>Leche</li>
    </ul>

    <p>Seleccionado: <span id="salida"></span></p>

    <script>
      let lista = document.getElementById("lista");
      let salida = document.getElementById("salida");

      // Delegación — un solo listener para todos los <li>
      lista.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
          salida.textContent = e.target.textContent;
        }
      });

      // Agregar nuevos items
      document.getElementById("agregar").addEventListener("click", function() {
        let input = document.getElementById("item");
        let texto = input.value.trim();

        if (texto) {
          let li = document.createElement("li");
          li.textContent = texto;
          lista.appendChild(li);
          input.value = "";
        }
      });
    </script>
  </body>
</html>
```

</details>
