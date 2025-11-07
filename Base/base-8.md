# Estructuras de control: condicionales y bucles

## Tabla de contenidos

- ¿Qué son las estructuras de control?
- Condicionales
	- `if` / `else if` / `else`
	- `switch`
- Bucles (iteración)
	- `for` clásico
	- `for...of` y `for...in`
	- `while` y `do...while`
	- Métodos de iteración funcional (`forEach`, `map`, `filter`, `reduce`)
- Control de flujo: `break`, `continue`, `return`
- Errores comunes y buenas prácticas
- Ejemplos en TypeScript
- Ejercicios
- Sugerencias (recursos)

## ¿Qué son las estructuras de control?

Las estructuras de control permiten dirigir la ejecución del programa: tomar decisiones (`condicionales`) y repetir tareas (`bucles`). Son fundamentales para escribir lógica condicional, procesar colecciones y organizar el flujo de un algoritmo.

## Condicionales

`if` / `else if` / `else`

La forma más usual de tomar decisiones. La condición se evalúa y, si es truthy, se ejecuta el bloque asociado.

```ts
if (x > 0) {
	// rama verdadera
} else if (x === 0) {
	// x es exactamente cero
} else {
	// rama por defecto
}
```

`switch`

Útil cuando hay múltiples casos discretos basados en el mismo valor. Recuerda usar `break` para evitar fallthrough, o documentar el caso intencionado.

```ts
switch (status) {
	case 'ok':
		handleOk();
		break;
	case 'error':
		handleError();
		break;
	default:
		handleDefault();
}
```

## Bucles (iteración)

`for` clásico

Control explícito del índice; útil para iteraciones con índice o cuando necesitas mayor control del ciclo.

```ts
for (let i = 0; i < arr.length; i++) {
	const item = arr[i];
}
```

`for...of` y `for...in`

- `for...of` itera sobre valores de una colección iterable (`Array`, `Map`, `Set`, `String`).
- `for...in` itera sobre las claves enumerables de un objeto (normalmente evitar para arrays).

```ts
for (const v of arr) {
	console.log(v);
}

for (const k in obj) {
	if (Object.prototype.hasOwnProperty.call(obj, k)) {
		console.log(k, obj[k]);
	}
}
```

`while` y `do...while`

`while` evalúa la condición antes de cada iteración; `do...while` ejecuta al menos una vez.

```ts
while (cond) {
	// ...
}

do {
	// ...
} while (cond);
```

Métodos de iteración funcional

Funciones como `forEach`, `map`, `filter` y `reduce` expresan la intención de manera declarativa y evitan manejo explícito de índices.

```ts
arr.forEach(x => console.log(x));
const squared = arr.map(x => x * x);
const evens = arr.filter(x => x % 2 === 0);
const sum = arr.reduce((a,b) => a + b, 0);
```

## Control de flujo: `break`, `continue`, `return`

- `break` — sale del bucle actual.
- `continue` — salta a la siguiente iteración del bucle.
- `return` — termina la ejecución de la función devolviendo un valor.

Usar `break`/`continue` con moderación; a veces es preferible estructurar el código para evitar saltos excesivos.

## Errores comunes y buenas prácticas

- Evita `for...in` para arrays porque itera propiedades enumerables (incluye prototipo si no se filtra).
- Preferir `for...of` o métodos funcionales para arrays cuando sea posible por claridad.
- Evitar bucles anidados profundos que comprometan rendimiento; considera algoritmos o estructuras de datos alternativas.
- Usar `const` para variables dentro de bucles cuando no se reasignen (por ejemplo `for (const x of arr)`), y `let` cuando necesites reasignar índices o contadores.
- Evitar condiciones complejas en la cláusula del `if`; extrae condiciones a funciones descriptivas para mejorar legibilidad.

## Ejemplos en TypeScript

```ts
// Contador simple
function countPositives(nums: number[]) {
	let count = 0;
	for (const n of nums) {
		if (n > 0) count++;
	}
	return count;
}

// Buscar primer elemento que cumpla predicado
function findFirst<T>(arr: T[], pred: (t: T) => boolean): T | undefined {
	for (const x of arr) {
		if (pred(x)) return x;
	}
	return undefined;
}

// Uso de map/filter en lugar de bucle explícito
const values = [1,2,3,4,5];
const doubled = values.map(v => v * 2);
```

## Ejercicios

1. Implementa una función que reciba un número `n` y devuelva un arreglo con los primeros `n` números pares usando `for` clásico.

2. Reescribe la función del ejercicio anterior usando `Array.from` o `map` en vez de `for`.

3. Dado un objeto `counts` de la forma `{ a: 2, b: 5, c: 1 }`, usa `for...in` y `Object.prototype.hasOwnProperty` para iterar sus propiedades y sumar los valores.

4. Escribe una función `flatten` que reciba un arreglo de arreglos y devuelva un único arreglo con todos los elementos (sin usar `flat`).

5. Explica cuándo preferirías `forEach` sobre `for...of` y viceversa.

## Sugerencias (recursos)

- MDN Web Docs — condicionales y bucles en JavaScript: https://developer.mozilla.org/
- Artículos sobre patrones de iteración, rendimiento y alternativas funcionales.

---