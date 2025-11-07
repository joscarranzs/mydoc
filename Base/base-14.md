# Programación asíncrona vs síncrona: callbacks, async/await y el event loop

## Tabla de contenidos

- Programación síncrona vs asíncrona
- Callbacks y problemas comunes (callback hell)
- Promises: creación, encadenamiento y manejo de errores
- `async` / `await`
- El event loop: macrotareas y microtareas
- Buenas prácticas y patrones (promisify, timeouts, cancelación)
- Ejemplos en JavaScript / TypeScript
- Ejercicios
- Sugerencias (recursos)

## Programación síncrona vs asíncrona

- Programación síncrona: las operaciones se ejecutan en orden; cada instrucción bloquea la ejecución hasta completarse. Es sencillo de razonar pero puede bloquear el hilo principal (UI o main thread).
- Programación asíncrona: las operaciones que tardan (E/S, timers, peticiones de red) se inician y su resultado se procesa más tarde sin bloquear la ejecución. Permite mantener responsividad y paralelismo lógico en entornos single-threaded como JavaScript.

Ejemplo síncrono (bloqueante):

```ts
// operación pesada síncrona (bloquea)
for (let i = 0; i < 1e9; i++); // bloqueo del hilo
console.log('fin');
```

Ejemplo asíncrono (no bloqueante):

```ts
setTimeout(() => console.log('tarea asíncrona'), 0);
console.log('continúa ejecución');
```

## Callbacks y problemas comunes (callback hell)

Un `callback` es una función pasada como argumento a otra función que será llamada cuando una operación termine. Los callbacks fueron la primera técnica común para manejar asincronía en JS.

Problemas:

- Anidamiento profundo («callback hell») y pérdida de legibilidad.
- Manejo complejo de errores cuando múltiples callbacks participan.
- Difícil reintento, timeout y composición de operaciones.

Ejemplo de callback anidado:

```js
readFile('a.txt', (err, a) => {
	if (err) return handle(err);
	readFile('b.txt', (err, b) => {
		if (err) return handle(err);
		writeFile('out.txt', a + b, (err) => { if (err) handle(err); });
	});
});
```

## Promises: creación, encadenamiento y manejo de errores

Una `Promise` representa un valor que puede estar disponible ahora, en el futuro, o nunca (rechazada). Tiene estados: `pending`, `fulfilled`, `rejected`.

- Crear: `new Promise((resolve, reject) => { ... })`.
- Encadenar: `p.then(...).catch(...)`.

Ejemplo:

```js
function wait(ms) { return new Promise(res => setTimeout(res, ms)); }

wait(1000)
	.then(() => console.log('1s'))
	.catch(err => console.error(err));
```

Errores en Promises: usar `catch` al final del encadenamiento o manejar en cada rama; un `throw` dentro de `then` convierte la promesa en rechazada.

## `async` / `await`

Azúcar sintáctica sobre Promises que permite escribir código asíncrono con estilo secuencial.

- `async function f() { ... }` siempre devuelve una `Promise`.
- `await` se usa dentro de `async` para esperar la resolución de una `Promise`.

Ejemplo:

```ts
async function getUser() {
	try {
		const res = await fetch('/user');
		const data = await res.json();
		return data;
	} catch (err) {
		console.error('error', err);
		throw err; // re-lanzar si no se puede manejar
	}
}
```

Nota: `await` pausa la ejecución de la función `async`, pero no bloquea el event loop general.

## El event loop: macrotareas y microtareas

En entornos JS (navegador, Node) existe un bucle de eventos que procesa tareas. Entender la diferencia entre macrotareas (task queue) y microtareas (microtask queue) explica el orden de ejecución.

- Macrotareas: `setTimeout`, `setInterval`, I/O, timers (cada tick del event loop consume una macrotarea).
- Microtareas: Promises (`then`), `process.nextTick` (Node), `queueMicrotask` — se ejecutan después de la macrotarea actual y antes de la siguiente macrotarea.

Ejemplo clásico de orden:

```js
console.log('start');
setTimeout(() => console.log('timeout'), 0);
Promise.resolve().then(() => console.log('promise'));
console.log('end');
// Resultado: start, end, promise, timeout
```

En Node existen fases adicionales (timers, pending callbacks, idle/prepare, poll, check, close callbacks) y helpers específicos (`setImmediate`, `process.nextTick`).

## Buenas prácticas y patrones

- Preferir `Promise`/`async-await` sobre callbacks por legibilidad y composición.
- Usar `Promise.race` para timeouts: combinar la promesa real con una promesa que rechaza tras X ms.
- Cancelación: Promises nativas no tienen cancelación built-in; usa AbortController (fetch) o bibliotecas (RxJS) o patrones con tokens.
- Convertir APIs callback-style a Promises con `util.promisify` (Node) o implementando wrapper.

Ejemplo de timeout con `Promise.race`:

```ts
function fetchWithTimeout(url, ms) {
	const controller = new AbortController();
	const signal = controller.signal;
	const fetchP = fetch(url, { signal });
	const timeoutP = new Promise((_, reject) => setTimeout(() => { controller.abort(); reject(new Error('timeout')); }, ms));
	return Promise.race([fetchP, timeoutP]);
}
```

## Ejemplos en JavaScript / TypeScript

```ts
// Promisify manual
function readFilePromise(path: string): Promise<string> {
	return new Promise((resolve, reject) => {
		readFile(path, (err, data) => err ? reject(err) : resolve(data));
	});
}

// async/await y manejo de errores
async function example() {
	try {
		const data = await readFilePromise('file.txt');
		console.log(data);
	} catch (err) {
		console.error('falló lectura', err);
	}
}
```

## Ejercicios

1. Explica, con un ejemplo, por qué `Promise.resolve().then(...)` se ejecuta antes de `setTimeout(..., 0)`.

2. Reescribe una API callback-style (por ejemplo `fs.readFile`) usando Promises y `async/await`.

3. Implementa una función `timeout(promise, ms)` que rechaza si la promesa no resuelve en `ms` milisegundos.

4. Demuestra (con código) cómo se produce "callback hell" y refactoriza el ejemplo a `async/await`.

5. Investiga y explica la diferencia entre `process.nextTick` y `setImmediate` en Node.

## Sugerencias (recursos)

- Event Loop Visualizer — ver interacciones entre microtask y macrotask.
- MDN: Promises, async/await y manejo de errores.
- Node.js docs: `timers`, `process.nextTick`, `setImmediate`, `AbortController`.
- Artículos sobre patterns (backoff exponencial, circuit breaker) y librerías (RxJS) para casos complejos.

---