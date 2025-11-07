# Funciones: parámetros, argumentos y tipos

## Tabla de contenidos

- ¿Qué es una función?
- Parámetros vs argumentos
- Tipos de funciones
	- Declaración (function declaration)
	- Expresión de función (function expression)
	- Funciones flecha (arrow functions)
	- Funciones de orden superior
	- Funciones asíncronas (`async` / `Promise`)
- Tipos de parámetros
	- Parámetros posicionales y nombrados (objetos)
	- Parámetros opcionales
	- Parámetros por defecto
	- Parámetros rest
	- Desestructuración en parámetros
- Tipos de retorno
	- `void`, tipos concretos, `Promise<T>`, `never`
- Buenas prácticas y consideraciones (mutabilidad, pureza)
- Ejemplos en TypeScript
- Ejercicios
- Sugerencias (recursos)

## ¿Qué es una función?

Una función es una unidad de código que realiza una tarea concreta: recibe entradas (parámetros/argumentos), puede ejecutar lógica y devuelve un resultado (o no). Las funciones permiten reutilizar código, encapsular comportamiento y componer la lógica de una aplicación.

## Parámetros vs argumentos

- Parámetro: nombre que aparece en la definición de la función (por ejemplo `function f(x) {}` -> `x` es parámetro).
- Argumento: valor concreto pasado cuando se llama a la función (por ejemplo `f(2)` -> `2` es argumento).

Siempre que definas funciones, piensa en la forma, cantidad y tipo de parámetros que mejor representan la intención y la API pública.

## Tipos de funciones

- Declaración (function declaration): clásica y hoisteada.

```ts
function sum(a: number, b: number): number {
	return a + b;
}
```

- Expresión de función (function expression): se asigna a una variable.

```ts
const mul = function(a: number, b: number): number { return a * b; };
```

- Funciones flecha (arrow functions): sintaxis concisa, no tienen su propio `this`.

```ts
const add = (a: number, b: number) => a + b;
```

- Funciones de orden superior: reciben o devuelven otras funciones.

```ts
function withLogging<T>(fn: (arg: T) => void) {
	return (arg: T) => { console.log(arg); fn(arg); };
}
```

- Funciones asíncronas: usan `async`/`await` y devuelven `Promise<T>`.

```ts
async function fetchData(url: string): Promise<string> {
	const res = await fetch(url);
	return res.text();
}
```

## Tipos de parámetros

- Parámetros posicionales: los más comunes; el orden importa.
- Parámetros nombrados (emulados con objetos): pasan un objeto con propiedades — más claro cuando hay muchos parámetros opcionales.

```ts
function build(opts: { host: string; port?: number }) { /* ... */ }
```

- Parámetros opcionales: en TypeScript se indican con `?`.

```ts
function greet(name?: string) { console.log(`Hola ${name ?? 'invitado'}`); }
```

- Parámetros por defecto: asignan un valor si no se proporciona argumento.

```ts
function pow(x: number, n = 2) { return x ** n; }
```

- Parámetros rest: agrupan cero o más argumentos en un arreglo.

```ts
function sum(...nums: number[]) { return nums.reduce((s, n) => s + n, 0); }
```

- Desestructuración en parámetros: útil para recibir objetos con varias propiedades.

```ts
function configure({ host, port = 80 }: { host: string; port?: number }) { /* ... */ }
```

## Tipos de retorno

- Tipos concretos: `number`, `string`, `boolean`, objetos, etc.
- `void`: indica que la función no retorna un valor útil (puede retornar `undefined`).
- `Promise<T>`: funciones `async` devuelven promesas.
- `never`: indica que la función no retorna nunca (lanza error o entra en bucle infinito).

```ts
function fail(msg: string): never { throw new Error(msg); }
```

## Buenas prácticas y consideraciones

- Mantén funciones cortas y con una única responsabilidad (Single Responsibility Principle).
- Prefiere funciones puras cuando sea posible: mismas entradas → mismo resultado, sin efectos secundarios.
- Evita mutar los argumentos; si necesitas cambiar datos, devuelve nuevas estructuras o documenta las mutaciones.
- Tipa las funciones explícitamente en TypeScript cuando definas APIs públicas.
- Usa parámetros nombrados (objetos) cuando haya más de 2–3 parámetros o muchos opcionales.

## Ejemplos en TypeScript

```ts
// Declaración con tipos completos
function formatPrice(amount: number, currency = 'USD'): string {
	return `${amount.toFixed(2)} ${currency}`;
}

// Parámetros rest y tipos genéricos
function concat<T>(...items: T[]): T[] { return items.flat(); }

// Función de orden superior
const timer = <T extends (...args: any[]) => any>(fn: T) => (...args: Parameters<T>): ReturnType<T> => {
	const start = Date.now();
	const result = fn(...args);
	console.log(`Time: ${Date.now() - start}ms`);
	return result;
};

// Async + Promise
async function getJson<T>(url: string): Promise<T> {
	const res = await fetch(url);
	return res.json() as Promise<T>;
}
```

## Ejercicios

1. Define una función `range(start: number, end: number, step?: number): number[]` que devuelva un arreglo con los números desde `start` hasta `end` (incluido) con un `step` opcional.

2. Reescribe la función `range` para aceptar parámetros nombrados usando un objeto `{ start, end, step }`.

3. Escribe una función `memoize` que cachee los resultados de otra función pura.

4. Crea una función `pipe` que reciba varias funciones y devuelva una función que aplique cada una en secuencia al valor inicial.

5. En TypeScript, escribe la firma de una función que recibe otra función como parámetro: `apply<T, U>(fn: (x: T) => U, value: T): U` y úsala.

## Sugerencias (recursos)

- TypeScript Handbook — funciones y tipos utilitarios (`Parameters`, `ReturnType`): https://www.typescriptlang.org/docs/
- Artículos sobre diseño de APIs y funciones puras (funcional programming guidance).
- "You Don't Know JS" — capítulos sobre funciones y `this` en JavaScript.

---