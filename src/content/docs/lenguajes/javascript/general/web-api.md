---
title: Web API
description: APIs del navegador.
module: lenguajes/javascript
submodule: general
order: 33
---

Al completar esta guía podrás:

- Usar fetch para peticiones HTTP
- Trabajar con la API de geolocalización
- Manipular el portapapeles
- Usar APIs modernas del navegador

---

## Fetch API

`fetch` permite hacer peticiones HTTP desde el navegador. Retorna una promesa.

```javascript
fetch("https://api.ejemplo.com/datos")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error:", error));
```

### GET

```javascript
async function obtenerUsuarios() {
  try {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    let usuarios = await respuesta.json();
    console.log(usuarios);
  } catch (error) {
    console.log("Error de red:", error.message);
  }
}
```

### POST

```javascript
async function crearUsuario(datos) {
  let respuesta = await fetch("https://api.ejemplo.com/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datos)
  });

  if (!respuesta.ok) {
    throw new Error(`HTTP ${respuesta.status}`);
  }

  return await respuesta.json();
}
```

### Manejo de errores HTTP

```javascript
async function obtenerRecurso(url) {
  let respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error(`Error HTTP: ${respuesta.status} ${respuesta.statusText}`);
  }

  return await respuesta.json();
}
```

---

## Geolocalización

```javascript
function obtenerUbicacion() {
  if (!navigator.geolocation) {
    console.log("Geolocalización no soportada");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (posicion) => {
      console.log("Latitud:", posicion.coords.latitude);
      console.log("Longitud:", posicion.coords.longitude);
      console.log("Precisión:", posicion.coords.accuracy);
    },
    (error) => {
      console.log("Error:", error.message);
    }
  );
}
```

---

## Portapapeles

```javascript
// Escribir en el portapapeles
async function copiarTexto(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    console.log("Texto copiado");
  } catch (error) {
    console.log("Error al copiar:", error.message);
  }
}

// Leer del portapapeles
async function pegarTexto() {
  try {
    let texto = await navigator.clipboard.readText();
    console.log("Texto del portapapeles:", texto);
  } catch (error) {
    console.log("Error al pegar:", error.message);
  }
}
```

---

## Notificaciones

```javascript
function mostrarNotificacion(titulo, cuerpo) {
  if (!("Notification" in window)) {
    console.log("Notificaciones no soportadas");
    return;
  }

  if (Notification.permission === "granted") {
    new Notification(titulo, { body: cuerpo });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permiso => {
      if (permiso === "granted") {
        new Notification(titulo, { body: cuerpo });
      }
    });
  }
}
```

---

## Canvas API

```javascript
let canvas = document.getElementById("miCanvas");
let ctx = canvas.getContext("2d");

// Rectángulo
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 100, 50);

// Texto
ctx.font = "20px sans-serif";
ctx.fillStyle = "black";
ctx.fillText("Hola Canvas", 10, 100);

// Círculo
ctx.beginPath();
ctx.arc(200, 150, 50, 0, Math.PI * 2);
ctx.fillStyle = "blue";
ctx.fill();
```

---

## Resumen

| API | Propósito |
|---|---|
| `fetch` | Peticiones HTTP |
| `Geolocation` | Ubicación del usuario |
| `Clipboard` | Portapapeles |
| `Notification` | Notificaciones del sistema |
| `Canvas` | Gráficos 2D |

- `fetch` es la forma moderna de hacer peticiones HTTP
- Siempre verifica `respuesta.ok` después de un fetch
- Las APIs de usuario (geolocalización, notificaciones, clipboard) requieren permisos
- `fetch` retorna una promesa — usa async/await

---

## Ejercicio

Usa la API pública `https://jsonplaceholder.typicode.com/posts/1` para obtener un post y mostrar su título y cuerpo en la consola.

**Instrucciones paso a paso:**

1. Usa `fetch` para obtener el recurso
2. Convierte la respuesta a JSON con `respuesta.json()`
3. Muestra `data.title` y `data.body`
4. Maneja errores con try/catch

<details>
<summary>Mostrar solución</summary>

```javascript
async function obtenerPost(id) {
  try {
    let respuesta = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (!respuesta.ok) {
      throw new Error(`Error ${respuesta.status}`);
    }

    let post = await respuesta.json();
    console.log("Título:", post.title);
    console.log("Contenido:", post.body);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

obtenerPost(1);
// Título: sunt aut facere repellat provident occaecati ...
// Contenido: quia et suscipit ...
```

</details>
