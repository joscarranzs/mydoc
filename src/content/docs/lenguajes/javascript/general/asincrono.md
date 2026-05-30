---
title: Asíncrono
description: Callbacks, promesas, async/await.
module: lenguajes/javascript
submodule: general
order: 26
---

Al completar esta guía podrás:

- Explicar cómo funciona el modelo asíncrono de JavaScript
- Crear y consumir promesas
- Usar async/await para código asíncrono legible
- Manejar errores en operaciones asíncronas

---

## El problema síncrono

JavaScript ejecuta código en un solo hilo. Si una operación tarda, bloquea todo.

```javascript
function esperar(ms) {
  let inicio = Date.now();
  while (Date.now() - inicio < ms) {}
  console.log("Listo");
}

console.log("Inicio");
esperar(3000);
console.log("Fin");
// Inicio
// (pausa de 3 segundos)
// Listo
// Fin
```

El programa se congela durante 3 segundos. No puede procesar clics ni eventos.

---

## Callbacks

Un callback es una función que se pasa como argumento y se ejecuta cuando la operación asíncrona termina.

```javascript
console.log("Inicio");

setTimeout(() => {
  console.log("Pasaron 2 segundos");
}, 2000);

console.log("Fin");
// Inicio
// Fin
// (2 segundos después)
// Pasaron 2 segundos
```

### Callback hell

Cuando múltiples operaciones dependen unas de otras, los callbacks se anidan.

```javascript
obtenerUsuario(1, (usuario) => {
  obtenerPedidos(usuario.id, (pedidos) => {
    obtenerDetalle(pedidos[0].id, (detalle) => {
      console.log(detalle);
    });
  });
});
```

Este anidamiento se conoce como **callback hell**. Es difícil de leer, mantener y depurar.

---

## Promesas

Una **Promise** representa un valor futuro. Puede estar en tres estados:

- **pending:** pendiente (no se ha completado)
- **fulfilled:** completada con éxito
- **rejected:** completada con error

```javascript
let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operación completada");
  }, 1000);
});

promesa.then(resultado => {
  console.log(resultado);  // "Operación completada"
});
```

### Crear una promesa

```javascript
function esperar(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

esperar(2000).then(() => console.log("Pasaron 2 segundos"));
```

### Rechazar una promesa

```javascript
function validarEdad(edad) {
  return new Promise((resolve, reject) => {
    if (edad >= 0) {
      resolve(edad);
    } else {
      reject(new Error("Edad inválida"));
    }
  });
}
```

---

## Encadenar promesas

```javascript
function obtenerUsuario(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, nombre: "Ana" }), 500);
  });
}

function obtenerPedidos(usuarioId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(["pedido1", "pedido2"]), 500);
  });
}

obtenerUsuario(1)
  .then(usuario => {
    console.log(usuario.nombre);
    return obtenerPedidos(usuario.id);
  })
  .then(pedidos => {
    console.log(pedidos);
  });
```

Cada `then` recibe el valor retornado por el `then` anterior.

---

## Promise.all

Ejecuta múltiples promesas en paralelo y espera a que todas terminen.

```javascript
let p1 = esperar(1000).then(() => "Uno");
let p2 = esperar(2000).then(() => "Dos");
let p3 = esperar(1500).then(() => "Tres");

Promise.all([p1, p2, p3]).then(resultados => {
  console.log(resultados);  // ["Uno", "Dos", "Tres"] — después de ~2s
});
```

Si alguna falla, `Promise.all` rechaza inmediatamente.

### Promise.allSettled

Espera a todas sin importar si fallan.

```javascript
Promise.allSettled([p1, p2, p3]).then(resultados => {
  resultados.forEach(r => {
    console.log(r.status);  // "fulfilled" o "rejected"
  });
});
```

---

## async/await

`async/await` es azúcar sintáctico sobre promesas. Hace que el código asíncrono se vea síncrono.

```javascript
async function procesar() {
  let usuario = await obtenerUsuario(1);
  let pedidos = await obtenerPedidos(usuario.id);
  console.log(pedidos);
}

procesar();
```

### async

Declara que una función retorna una promesa.

```javascript
async function saludar() {
  return "Hola";
}

saludar().then(console.log);  // "Hola"
```

### await

Pausa la ejecución hasta que la promesa se resuelva. Solo funciona dentro de `async`.

```javascript
async function mostrarDatos() {
  let usuario = await obtenerUsuario(1);
  let pedidos = await obtenerPedidos(usuario.id);
  return { usuario, pedidos };
}
```

---

## Manejo de errores con async/await

Usa `try...catch` como en código síncrono.

```javascript
async function cargarTodo() {
  try {
    let usuario = await obtenerUsuario(1);
    let pedidos = await obtenerPedidos(usuario.id);
    console.log(pedidos);
  } catch (error) {
    console.log("Error:", error.message);
  }
}
```

---

## Evitar la ejecución secuencial innecesaria

```javascript
// Lento — espera a que termine p1 para empezar p2
async function lento() {
  let a = await esperar(1000);
  let b = await esperar(1000);
  return a + b;  // 2 segundos total
}

// Rápido — ejecuta ambas en paralelo
async function rapido() {
  let [a, b] = await Promise.all([
    esperar(1000),
    esperar(1000)
  ]);
  return a + b;  // 1 segundo total
}
```

> **Regla:** usa `Promise.all` cuando las operaciones no dependan unas de otras. Ejecutarlas en serie cuando podrían ser paralelas es el error más común con async/await.

---

## Event loop

El event loop permite que JavaScript sea no bloqueante a pesar de ser single-thread.

```
1. Call stack: ejecuta código síncrono
2. Web APIs: operaciones asíncronas (setTimeout, fetch)
3. Task queue: callbacks esperando
4. Event loop: mueve tareas de la queue al stack cuando está vacío
```

```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");

// 1, 3, 2
```

El `setTimeout` con 0ms no se ejecuta inmediatamente. Va a la cola de tareas y espera a que el stack esté vacío.

---

## Resumen

| Concepto | Descripción |
|---|---|
| Callback | Función que se ejecuta al completar una operación |
| Promesa | Objeto que representa un valor futuro |
| `then/catch` | Consume promesas |
| `async/await` | Sintaxis que hace las promesas más legibles |
| `Promise.all` | Espera múltiples promesas en paralelo |
| Event loop | Mecanismo que maneja la concurrencia |

- Las promesas resuelven el callback hell
- `async` funciones retornan una promesa siempre
- `await` solo funciona dentro de `async`
- Usa `Promise.all` para operaciones paralelas independientes
- El event loop permite ejecución no bloqueante en un solo hilo

---

## Ejercicio

Escribe una función `obtenerUsuarioConRetraso(id)` que retorne una promesa que se resuelva después de 1 segundo con un objeto `{ id, nombre: "Usuario " + id }`. Luego usa async/await para obtener tres usuarios y mostrarlos en paralelo.

**Instrucciones paso a paso:**

1. Crea `obtenerUsuarioConRetraso(id)` que retorne una promesa
2. Dentro, usa `setTimeout` con 1000ms
3. Resuelve con `{ id, nombre: "Usuario " + id }`
4. Crea una función `async` que use `Promise.all` para obtener los usuarios 1, 2 y 3
5. Muestra los resultados

<details>
<summary>Mostrar solución</summary>

```javascript
function obtenerUsuarioConRetraso(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, nombre: `Usuario ${id}` });
    }, 1000);
  });
}

async function mostrarUsuarios() {
  let ids = [1, 2, 3];

  let usuarios = await Promise.all(
    ids.map(id => obtenerUsuarioConRetraso(id))
  );

  console.log(usuarios);
  // [{ id: 1, nombre: "Usuario 1" }, ...]
}

console.time("paralelo");
mostrarUsuarios().then(() => console.timeEnd("paralelo"));
// ~1 segundo, no 3
```

**Versión secuencial (más lenta):**

```javascript
async function mostrarUsuariosSecuencial() {
  let usuarios = [];

  for (let id of [1, 2, 3]) {
    let usuario = await obtenerUsuarioConRetraso(id);
    usuarios.push(usuario);
  }

  console.log(usuarios);
}
```

</details>
