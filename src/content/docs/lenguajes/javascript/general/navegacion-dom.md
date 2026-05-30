---
title: Navegación DOM
description: Recorrer el árbol DOM.
module: lenguajes/javascript
submodule: general
order: 30
---

Al completar esta guía podrás:

- Navegar entre nodos del DOM con propiedades de relación
- Diferenciar entre nodos de elemento y nodos de texto
- Recorrer el árbol DOM de forma eficiente
- Encontrar elementos ancestros desde un nodo dado

---

## El árbol DOM

El DOM es un árbol de nodos. Cada elemento puede tener padres, hijos y hermanos.

```html
<div id="contenedor">
  <h1>Título</h1>
  <p>Párrafo <strong>destacado</strong></p>
</div>
```

```
div#contenedor
├── h1
│   └── "Título"
└── p
    ├── "Párrafo "
    └── strong
        └── "destacado"
```

---

## Navegación entre elementos

Estas propiedades ignoran nodos de texto y comentarios — solo consideran elementos HTML.

```javascript
let contenedor = document.getElementById("contenedor");

// Hijos
console.log(contenedor.children);        // HTMLCollection [h1, p]
console.log(contenedor.firstElementChild);  // <h1>
console.log(contenedor.lastElementChild);   // <p>

// Padre
console.log(contenedor.parentElement);   // <body>

// Hermanos
let h1 = contenedor.firstElementChild;
console.log(h1.nextElementSibling);     // <p>
console.log(h1.previousElementSibling); // null
```

---

## Navegación entre nodos

Estas propiedades incluyen todos los tipos de nodo (elementos, texto, comentarios).

```javascript
let contenedor = document.getElementById("contenedor");

console.log(contenedor.childNodes);    // NodeList (incluye texto, comentarios)
console.log(contenedor.firstChild);    // Primer nodo (puede ser texto)
console.log(contenedor.lastChild);     // Último nodo
console.log(contenedor.parentNode);    // Nodo padre
```

```javascript
let h1 = document.querySelector("h1");

console.log(h1.nextSibling);      // Siguiente nodo (puede ser texto vacío)
console.log(h1.previousSibling);  // Nodo anterior
```

> **Regla:** en HTML, los saltos de línea entre etiquetas se convierten en nodos de texto vacíos. Para navegar entre elementos, usa las propiedades `Element` (`children`, `firstElementChild`, `nextElementSibling`).

---

## children vs childNodes

```javascript
let lista = document.getElementById("lista");
// <ul id="lista">
//   <li>Uno</li>
//   <li>Dos</li>
//   <li>Tres</li>
// </ul>

console.log(lista.children.length);   // 3 — solo elementos <li>
console.log(lista.childNodes.length); // 7 — li + texto entre ellos
```

---

## Recorrer hijos

```javascript
let contenedor = document.getElementById("contenedor");

// Con for clásico
for (let i = 0; i < contenedor.children.length; i++) {
  let hijo = contenedor.children[i];
  console.log(hijo.tagName);
}

// Con for...of
for (let hijo of contenedor.children) {
  console.log(hijo.tagName);
}
```

---

## Navegar hacia arriba

```javascript
let strong = document.querySelector("strong");

// Elemento padre directo
console.log(strong.parentElement);  // <p>

// Elemento ancestro
console.log(strong.closest("div"));  // <div id="contenedor">
console.log(strong.closest("body")); // <body>
console.log(strong.closest("#contenedor")); // <div id="contenedor">

// closest busca hacia arriba hasta encontrar el selector
// Si no encuentra, retorna null
```

> **Regla:** `closest()` es la forma más eficiente de buscar un ancestro específico. Recibe un selector CSS y sube hasta encontrarlo.

---

## Navegar por el DOM completo

```javascript
// Desde cualquier nodo
let body = document.body;

console.log(body.children);           // Hijos directos del body
console.log(body.parentNode);         // <html>
console.log(body.parentNode.parentNode);  // Document

// document.documentElement es <html>
console.log(document.documentElement);  // <html>
console.log(document.documentElement.children);  // <head>, <body>
```

---

## nodeType

Cada nodo tiene un tipo numérico.

```javascript
let elemento = document.querySelector("h1");
let texto = elemento.firstChild;

console.log(elemento.nodeType);  // 1 — ELEMENT_NODE
console.log(texto.nodeType);     // 3 — TEXT_NODE

// Valores comunes
// 1: Element (HTML tag)
// 3: Text (contenido de texto)
// 8: Comment (<!-- -->)
// 9: Document
// 11: DocumentFragment
```

---

## tagName vs nodeName

```javascript
let elemento = document.querySelector("h1");

console.log(elemento.tagName);   // "H1" — solo elementos
console.log(elemento.nodeName);  // "H1" — todos los nodos

let texto = elemento.firstChild;
console.log(texto.nodeName);  // "#text"
```

---

## children con filtro

```javascript
let contenedor = document.getElementById("contenedor");

// Solo elementos <p>
let parrafos = contenedor.querySelectorAll("p");

// Solo hijos directos que sean <p>
let hijosParrafo = contenedor.children;
let parrafosDirectos = Array.from(hijosParrafo).filter(
  el => el.tagName === "P"
);
```

---

## Resumen

| Propiedad | Solo elementos | Incluye texto |
|---|---|---|
| `children` | Sí | No |
| `childNodes` | No | Sí |
| `firstElementChild` | Sí | No |
| `firstChild` | No | Sí |
| `lastElementChild` | Sí | No |
| `lastChild` | No | Sí |
| `nextElementSibling` | Sí | No |
| `nextSibling` | No | Sí |
| `parentElement` | Sí | No |
| `parentNode` | No | Sí |
| `closest()` | Sí (selector CSS) | No |

- Usa propiedades `Element` para navegar ignorando nodos de texto
- `children` retorna `HTMLCollection` (viva); `childNodes` retorna `NodeList`
- `closest()` busca el ancestro más cercano que coincida con un selector
- `nodeType` identifica el tipo de nodo (1: elemento, 3: texto)

---

## Ejercicio

Dado el siguiente HTML, escribe código JavaScript que muestre en consola el texto de cada `<li>` navegando desde el `<ul>` usando propiedades de navegación entre elementos.

```html
<ul id="lista">
  <li>Manzana</li>
  <li>Banana</li>
  <li>Naranja</li>
</ul>
```

**Instrucciones paso a paso:**

1. Selecciona `#lista` con `document.getElementById()`
2. Usa `.children` para obtener los `<li>`
3. Itera sobre `.children` con `for...of`
4. Muestra `hijo.textContent` de cada uno
5. Alternativa: navega manualmente con `firstElementChild` y `nextElementSibling`

<details>
<summary>Mostrar solución</summary>

```javascript
// Con children
let lista = document.getElementById("lista");

for (let item of lista.children) {
  console.log(item.textContent);
}
// "Manzana", "Banana", "Naranja"

// Navegación manual
let item = lista.firstElementChild;

while (item) {
  console.log(item.textContent);
  item = item.nextElementSibling;
}
// "Manzana", "Banana", "Naranja"
```

</details>
