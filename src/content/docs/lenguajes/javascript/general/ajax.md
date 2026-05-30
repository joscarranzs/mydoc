---
title: AJAX
description: Peticiones asíncronas.
module: lenguajes/javascript
submodule: general
order: 34
---

Al completar esta guía podrás:

- Hacer peticiones asíncronas con XMLHttpRequest
- Entender la diferencia con fetch
- Manejar estados de la petición
- Procesar respuestas del servidor

---

## ¿Qué es AJAX?

AJAX (Asynchronous JavaScript and XML) permite hacer peticiones al servidor sin recargar la página. Aunque XML está en el nombre, hoy se usa principalmente JSON.

```javascript
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.ejemplo.com/datos");
xhr.send();
```

---

## XMLHttpRequest

```javascript
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

xhr.onload = function() {
  if (xhr.status === 200) {
    let data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    console.log("Error:", xhr.status);
  }
};

xhr.onerror = function() {
  console.log("Error de red");
};

xhr.send();
```

---

## Estados de la petición

`readyState` indica en qué etapa está la petición:

| Valor | Estado | Descripción |
|---|---|---|
| 0 | UNSENT | No se ha llamado a open() |
| 1 | OPENED | Se llamó a open() |
| 2 | HEADERS_RECEIVED | Se recibieron los headers |
| 3 | LOADING | Descargando respuesta |
| 4 | DONE | Operación completada |

```javascript
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
xhr.send();
```

---

## GET con parámetros

```javascript
function buscarUsuarios(query) {
  let xhr = new XMLHttpRequest();
  let url = `https://api.ejemplo.com/usuarios?q=${encodeURIComponent(query)}`;

  xhr.open("GET", url);

  xhr.onload = function() {
    if (xhr.status === 200) {
      let usuarios = JSON.parse(xhr.responseText);
      console.log(usuarios);
    }
  };

  xhr.send();
}
```

---

## POST con JSON

```javascript
function crearUsuario(datos) {
  let xhr = new XMLHttpRequest();

  xhr.open("POST", "https://api.ejemplo.com/usuarios");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function() {
    if (xhr.status === 201) {
      let nuevo = JSON.parse(xhr.responseText);
      console.log("Creado:", nuevo);
    }
  };

  xhr.send(JSON.stringify(datos));
}
```

---

## Tiempo de espera

```javascript
let xhr = new XMLHttpRequest();
xhr.timeout = 5000;  // 5 segundos

xhr.ontimeout = function() {
  console.log("La petición tardó demasiado");
};

xhr.open("GET", "https://api.ejemplo.com/datos");
xhr.send();
```

---

## AJAX vs Fetch

| Característica | XMLHttpRequest | Fetch |
|---|---|---|
| Sintaxis | Callbacks | Promesas |
| JSON | Manual (`JSON.parse`) | Automático (`.json()`) |
| Progreso | Soporta `onprogress` | No soporta nativamente |
| Tiempo de espera | `xhr.timeout` | `AbortController` |
| Abortar | `xhr.abort()` | `AbortController` |
| Soporte | Todos los navegadores | Navegadores modernos |

```javascript
// Fetch con AbortController
let controlador = new AbortController();

setTimeout(() => controlador.abort(), 5000);

fetch("https://api.ejemplo.com/datos", {
  signal: controlador.signal
}).catch(error => {
  console.log("Petición abortada");
});
```

---

## Resumen

- XMLHttpRequest es la API clásica para peticiones AJAX
- `readyState` indica el estado de la petición (0-4)
- `status` contiene el código HTTP de la respuesta
- `responseText` contiene el cuerpo de la respuesta como string
- `fetch` es la alternativa moderna con sintaxis de promesas
- XMLHttpRequest aún es útil cuando necesitas seguimiento de progreso

---

## Ejercicio

Usa XMLHttpRequest para obtener un post de `https://jsonplaceholder.typicode.com/posts/1` y mostrar su título en la consola.

**Instrucciones paso a paso:**

1. Crea un nuevo `XMLHttpRequest`
2. Usa `open("GET", url)`
3. Asigna `onload` para manejar la respuesta
4. Verifica que `status === 200`
5. Parsea `responseText` con `JSON.parse`
6. Muestra `data.title` en consola

<details>
<summary>Mostrar solución</summary>

```javascript
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

xhr.onload = function() {
  if (xhr.status === 200) {
    let post = JSON.parse(xhr.responseText);
    console.log("Título:", post.title);
  } else {
    console.log("Error:", xhr.status, xhr.statusText);
  }
};

xhr.onerror = function() {
  console.log("Error de red");
};

xhr.send();
```

</details>
