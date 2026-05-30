---
title: HTML DOM
description: Manipulación del DOM.
module: lenguajes/javascript
submodule: general
order: 29
---

Al completar esta guía podrás:

- Crear, insertar y eliminar elementos del DOM
- Modificar contenido, atributos y estilos
- Clonar nodos y trabajar con fragmentos
- Aplicar clases CSS dinámicamente

---

## El DOM

El DOM (Document Object Model) es una representación en árbol de la página HTML. JavaScript puede modificarlo en tiempo real.

```javascript
// Seleccionar un elemento
let titulo = document.getElementById("titulo");

// Modificar contenido
titulo.textContent = "Nuevo título";

// Modificar HTML interno
titulo.innerHTML = "<span>Nuevo título</span>";

// Modificar estilo
titulo.style.color = "blue";
titulo.style.fontSize = "24px";
```

---

## Crear elementos

```javascript
// Crear un elemento
let parrafo = document.createElement("p");

// Crear texto
let texto = document.createTextNode("Hola Mundo");

// Insertar texto en el elemento
parrafo.appendChild(texto);

// Agregar atributos
parrafo.id = "saludo";
parrafo.className = "destacado";

// Insertar en el DOM
document.body.appendChild(parrafo);
```

### Crear con innerHTML

```javascript
let contenedor = document.getElementById("contenedor");
contenedor.innerHTML = "<p>Nuevo <strong>contenido</strong></p>";
```

> **Regla:** usa `createElement` + `textContent` para texto confiable. Usa `innerHTML` solo cuando el contenido sea seguro (no provenga del usuario).

---

## Insertar elementos

```javascript
let lista = document.getElementById("lista");
let item = document.createElement("li");
item.textContent = "Nuevo item";

// Al final
lista.appendChild(item);

// Al inicio
lista.prepend(item.cloneNode(true));

// Antes de un elemento específico
let referencia = lista.children[1];
lista.insertBefore(item.cloneNode(true), referencia);

// Después de un elemento (no hay insertAfter nativo)
referencia.after(item.cloneNode(true));

// En una posición específica
let posicion = 2;
let hijo = lista.children[posicion];
lista.insertBefore(item.cloneNode(true), hijo);
```

---

## Eliminar elementos

```javascript
let elemento = document.getElementById("eliminar");

// Método moderno
elemento.remove();

// Método clásico
elemento.parentNode.removeChild(elemento);
```

### Vaciar un contenedor

```javascript
let contenedor = document.getElementById("contenedor");

// Opción 1
contenedor.innerHTML = "";

// Opción 2
while (contenedor.firstChild) {
  contenedor.removeChild(contenedor.firstChild);
}

// Opción 3
contenedor.textContent = "";
```

---

## Modificar atributos

```javascript
let enlace = document.getElementById("enlace");

// Establecer
enlace.setAttribute("href", "https://ejemplo.com");
enlace.setAttribute("target", "_blank");

// Obtener
console.log(enlace.getAttribute("href"));

// Verificar
console.log(enlace.hasAttribute("target"));  // true

// Eliminar
enlace.removeAttribute("target");
```

### Atributos directamente

```javascript
enlace.href = "https://ejemplo.com";
enlace.target = "_blank";
enlace.id = "nuevo-id";
enlace.title = "Ir al sitio";
```

---

## Clases CSS

```javascript
let elemento = document.getElementById("miElemento");

// Agregar
elemento.classList.add("destacado");
elemento.classList.add("activo", "visible");  // múltiples

// Eliminar
elemento.classList.remove("oculto");

// Alternar
elemento.classList.toggle("visible");

// Verificar
console.log(elemento.classList.contains("destacado"));  // true

// Reemplazar
elemento.classList.replace("antiguo", "nuevo");
```

---

## Estilos inline

```javascript
let elemento = document.getElementById("miElemento");

// Propiedades individuales
elemento.style.color = "red";
elemento.style.backgroundColor = "#f0f0f0";
elemento.style.fontSize = "16px";
elemento.style.display = "none";
elemento.style.marginTop = "20px";

// Múltiples estilos a la vez
Object.assign(elemento.style, {
  color: "white",
  backgroundColor: "#1A73E8",
  padding: "10px",
  borderRadius: "4px"
});

// Eliminar estilo inline
elemento.style.removeProperty("color");
elemento.style.cssText = "";  // Elimina todos
```

---

## Fragmentos

`DocumentFragment` permite construir múltiples elementos en memoria antes de insertarlos, mejorando el rendimiento.

```javascript
function crearLista(items) {
  let fragmento = document.createDocumentFragment();

  for (let item of items) {
    let li = document.createElement("li");
    li.textContent = item;
    fragmento.appendChild(li);
  }

  // Una sola operación de DOM
  document.getElementById("lista").appendChild(fragmento);
}

crearLista(["Rojo", "Verde", "Azul"]);
```

---

## Clonar nodos

```javascript
let original = document.getElementById("plantilla");

// Copia superficial (solo el nodo, sin hijos)
let copiaSuperficial = original.cloneNode(false);

// Copia profunda (nodo + todos los hijos)
let copiaProfunda = original.cloneNode(true);

// Modificar la copia sin afectar el original
copiaProfunda.id = "nuevo";
document.body.appendChild(copiaProfunda);
```

---

## innerHTML vs textContent

```javascript
let elemento = document.getElementById("demo");

// innerHTML — interpreta HTML
elemento.innerHTML = "<strong>Texto</strong>";  // Renderiza negrita

// textContent — texto plano
elemento.textContent = "<strong>Texto</strong>";  // Muestra las etiquetas

// innerText — similar a textContent pero respeta estilos CSS
elemento.innerText = "Texto";
```

> **Regla:** usa `textContent` para texto seguro. Usa `innerHTML` solo cuando confíes en el contenido. `innerHTML` con datos del usuario es un riesgo de seguridad (XSS).

---

## Resumen

| Método | Descripción |
|---|---|
| `createElement()` | Crea un nuevo elemento |
| `appendChild()` | Inserta al final |
| `prepend()` | Inserta al inicio |
| `insertBefore()` | Inserta antes de un nodo |
| `remove()` | Elimina el elemento |
| `setAttribute()` | Establece un atributo |
| `classList.add/remove/toggle` | Manipula clases CSS |
| `style.propiedad` | Modifica estilos inline |
| `cloneNode()` | Clona un nodo |
| `createDocumentFragment()` | Fragmento para inserciones múltiples |

- `textContent` para texto, `innerHTML` solo con contenido seguro
- `classList` es más limpio que manipular `className`
- Los fragmentos mejoran rendimiento al agregar múltiples elementos
- Clonar con `cloneNode(true)` para copia profunda
- Las propiedades de estilo usan camelCase (`backgroundColor`)

---

## Ejercicio

Escribe una función `agregarItem(texto)` que reciba un texto, cree un elemento `<li>`, lo agregue a una lista existente con id `"lista"`, y le agregue un botón para eliminarlo.

**Instrucciones paso a paso:**

1. Crea el HTML con `<ul id="lista"></ul>` y un input + botón
2. `agregarItem(texto)` crea un `<li>` con `document.createElement`
3. Asigna el texto con `textContent`
4. Crea un botón "Eliminar" que llame a `this.parentElement.remove()`
5. Agrega el botón al `<li>` con `appendChild`
6. Agrega el `<li>` a la lista

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
  <body>
    <input id="entrada" type="text" placeholder="Nuevo item">
    <button onclick="agregar()">Agregar</button>
    <ul id="lista"></ul>

    <script>
      function agregar() {
        let texto = document.getElementById("entrada").value;
        if (texto.trim() === "") return;
        agregarItem(texto);
        document.getElementById("entrada").value = "";
      }

      function agregarItem(texto) {
        let li = document.createElement("li");
        li.textContent = texto;

        let btn = document.createElement("button");
        btn.textContent = "Eliminar";
        btn.style.marginLeft = "10px";
        btn.onclick = function() {
          this.parentElement.remove();
        };

        li.appendChild(btn);
        document.getElementById("lista").appendChild(li);
      }
    </script>
  </body>
</html>
```

</details>
