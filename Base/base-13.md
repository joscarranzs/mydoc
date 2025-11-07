# Errores y manejo de excepciones

## Tabla de contenidos

- ¿Qué es un error?
- Tipos de errores
	- Errores de sintaxis
	- Errores en tiempo de ejecución
	- Errores lógicos
	- Errores de tipo y coerción
	- Errores de red y E/S
- Excepciones y manejo de excepciones
	- `try` / `catch` / `finally`
	- Lanzar excepciones: `throw`
	- Buenas prácticas en el manejo de excepciones
- Errores vs excepciones: diferencias conceptuales
- Diseño para resiliencia: validación y defensiva
- Ejemplos en JavaScript / TypeScript
- Ejercicios
- Sugerencias (recursos)

## ¿Qué es un error?

Un error es un evento inesperado o indeseado que ocurre durante la ejecución de un programa y que impide que una operación termine correctamente. Los errores pueden deberse a fallos en el código, datos inválidos, condiciones externas (p. ej. red) o al entorno de ejecución.

## Tipos de errores

- Errores de sintaxis: ocurren cuando el código no cumple las reglas del lenguaje (p. ej. falta un `}` o paréntesis). Se detectan en tiempo de parseo/compilación.
- Errores en tiempo de ejecución: suceden cuando el programa se ejecuta (p. ej. intentar acceder a una propiedad de `undefined`).
- Errores lógicos: el programa corre pero produce resultados incorrectos por lógica equivocada.
- Errores de tipo y coerción: operaciones entre valores incompatibles (`TypeError`, coerciones inesperadas).
- Errores de E/S o red: fallos externos como `ECONNREFUSED`, timeouts o recursos no disponibles.

## Excepciones y manejo de excepciones

Una excepción es un mecanismo para señalar y propagar un error durante la ejecución. Muchos lenguajes permiten "lanzar" (`throw`) un objeto que representa la excepción y capturarla (`catch`) en un punto superior de la pila.

Estructura básica en JavaScript/TypeScript:

```ts
try {
	// código que puede lanzar
} catch (err) {
	// manejar o registrar el error
} finally {
	// siempre se ejecuta (limpieza)
}
```

- `try`: bloque donde puede ocurrir una excepción.
- `catch`: recibe la excepción; aquí decidimos si recuperarnos, reenviarla (`throw`) o registrar información.
- `finally`: bloque opcional para limpieza (se ejecuta aunque haya `return` o `throw`).

Lanzar una excepción:

```ts
if (!user) throw new Error('Usuario no encontrado');
```

### Buenas prácticas

- No usar excepciones para control de flujo normal; reservarlas para condiciones truly excepcionales.
- Atrapar la excepción más específica posible (o inspeccionar su tipo/código) antes de manejar.
- Registrar suficiente contexto (mensajes, stack trace, inputs) para depuración, sin filtrar secretos.
- Re-lanzar (`throw`) si el handler no puede resolver la situación para que capas superiores tomen acción.
- Usar `finally` para liberar recursos (cerrar archivos, limpiar timers, desconectar sockets).

## Errores vs excepciones: diferencias conceptuales

- Error: evento o condición anómala (más amplio).
- Excepción: mecanismo de lenguaje para representar y propagar un error durante la ejecución.

En la práctica, "lanzar una excepción" es la forma de informar de un error que requiere manejo fuera del contexto actual.

## Diseño para resiliencia: validación y defensiva

- Validar entradas y fronteras: nunca confiar en datos externos; validar formatos, tipos y rangos antes de operar.
- Usar contratos y aserciones para documentar expectativas de funciones (TypeScript ayuda en compile-time).
- Implementar timeouts y reintentos para operaciones externas (red, I/O) con backoff y límites.
- Degradación controlada: cuando falle una característica, proporcionar una alternativa o mensaje claro al usuario.

## Ejemplos en JavaScript / TypeScript

```ts
// Manejo básico
function parseJsonSafe(s: string) {
	try {
		return JSON.parse(s);
	} catch (err) {
		console.error('JSON inválido', err);
		return null;
	}
}

// Ejemplo con recursos y finally
function useFile(handle: { close(): void }) {
	try {
		// operaciones con handle
	} finally {
		handle.close();
	}
}

// Reintento simple para operación asíncrona
async function fetchWithRetry(url: string, attempts = 3) {
	let lastError: any;
	for (let i = 0; i < attempts; i++) {
		try {
			const r = await fetch(url);
			if (!r.ok) throw new Error(`HTTP ${r.status}`);
			return await r.json();
		} catch (err) {
			lastError = err;
			await new Promise(res => setTimeout(res, 100 * (i + 1))); // backoff simple
		}
	}
	throw lastError;
}
```

## Ejercicios

1. Escribe una función `safeDivide(a, b)` que lance una excepción si `b === 0` y escribe un bloque `try/catch` que la use e informe al usuario.

2. Implementa `parseJsonSafe` que además devuelva un mensaje de error detallado (sin exponer stack) y un flag de éxito.

3. Diseña un patrón de reintentos exponenciales para llamadas a una API y demuestra su uso con `fetch`.

4. Explica con un ejemplo la diferencia entre detectar un error con `if` (validación previa) y manejar una excepción lanzada por una librería externa.

5. Investiga cómo tu plataforma (navegador/Node) maneja errores no capturados y cómo configurar un handler global (`window.onerror`, `process.on('uncaughtException')`).

## Sugerencias (recursos)

- MDN: guía sobre manejo de errores en JavaScript — https://developer.mozilla.org/
- Artículos sobre diseño resiliente, patrones de reintento y circuit breaker.
- Libros y prácticas: "Exceptional Ruby" (conceptos transferibles) y capítulos sobre errores en "You Don't Know JS".

---