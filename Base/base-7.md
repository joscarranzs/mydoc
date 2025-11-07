# Operadores

## Tabla de contenidos

- ¿Qué es un operador?
- Operadores aritméticos
- Operadores de asignación
- Operadores de comparación
- Operadores lógicos
- Operadores unarios
- Operador ternario (condicional)
- Operadores bit a bit (bitwise)
- Operadores de manipulación de colecciones: spread y rest
- Operadores modernos: encadenamiento opcional y nullish coalescing
- Precedencia y asociatividad
- Ejemplos en TypeScript
- Ejercicios
- Sugerencias (recursos)

## ¿Qué es un operador?

Un operador es un símbolo o palabra reservada que indica una operación sobre uno o más operandos. Los operadores realizan acciones como sumar, comparar, asignar, combinar o transformar valores.

## Operadores aritméticos

- `+` — suma (también concatenación de `string`).
- `-` — resta.
- `*` — multiplicación.
- `/` — división.
- `%` — módulo (resto de la división entera).
- `**` — exponenciación.

Ejemplo:

```ts
const a = 5 + 3; // 8
const b = 2 ** 3; // 8
const c = 7 % 4; // 3
```

Nota: en JavaScript/TypeScript `+` concatena strings si alguno de los operandos es `string`.

## Operadores de asignación

- `=` — asignación simple.
- `+=`, `-=`, `*=`, `/=`, `%=` — asignaciones combinadas.

Ejemplo:

```ts
let x = 10;
x += 5; // x = 15
```

## Operadores de comparación

- `==` — igualdad con coerción (evitar en la mayoría de casos).
- `===` — igualdad estricta (sin coerción).
- `!=`, `!==` — desigualdad (con/sin coerción).
- `>`, `<`, `>=`, `<=` — comparaciones numéricas/lexicográficas según tipos.

Recomendación: usar `===` y `!==` para evitar sorpresas por coerción implícita.

## Operadores lógicos

- `&&` — AND lógico (corta-circuito; devuelve el último valor evaluado).
- `||` — OR lógico (corta-circuito; devuelve el primer valor truthy).
- `!` — NOT lógico.

Comportamiento útil en JS:

```ts
const name = inputName || 'anónimo'; // si inputName es falsy se usa 'anónimo'
const enabled = config && config.enabled; // evita acceso si config es null/undefined
```

## Operadores unarios

- `typeof` — devuelve el tipo a nivel runtime (`'string'`, `'number'`, `'object'`, etc.).
- `void` — evalúa expresión y devuelve `undefined` (raro en código moderno).
- `+` (unario) — convierte a número.
- `-` (unario) — negativo.
- `!` — negación lógica (ya indicado en lógicos).

Ejemplo:

```ts
typeof 123; // 'number'
 +"42"; // 42
```

## Operador ternario (condicional)

Sintaxis: `cond ? exprIfTrue : exprIfFalse` — expresión condicional compacta.

```ts
const status = success ? 'OK' : 'ERROR';
```

## Operadores bit a bit (bitwise)

- `&`, `|`, `^` — AND, OR, XOR bit a bit.
- `~` — NOT bit a bit.
- `<<`, `>>`, `>>>` — desplazamientos a la izquierda / derecha (signed/unsigned).

Usos: manipulación de banderas, optimizaciones de bajo nivel. En JavaScript, los operandos se convierten a enteros de 32 bits para estas operaciones.

## Operadores de manipulación de colecciones: spread y rest

- Spread `...` en arrays/objetos: expandir elementos.
- Rest `...` en parámetros y desestructuración: agrupar elementos restantes.

Ejemplos:

```ts
const a = [1,2];
const b = [...a, 3]; // [1,2,3]

function sum(...nums: number[]) { return nums.reduce((s,n) => s+n, 0); }
```

## Operadores modernos: encadenamiento opcional y nullish coalescing

- Encadenamiento opcional `?.`: permite acceder a propiedades sin lanzar si un valor intermedio es `null`/`undefined`.
- Nullish coalescing `??`: devuelve el operando derecho sólo si el izquierdo es `null` o `undefined` (a diferencia de `||` que usa falsy).

Ejemplos:

```ts
const street = user?.address?.street;
const timeout = config.timeout ?? 3000; // si config.timeout es null/undefined usa 3000
```

## Precedencia y asociatividad

La precedencia determina qué operadores se evalúan primero; la asociatividad resuelve empates. Ejemplos prácticos:

- Multiplicación antes que suma: `2 + 3 * 4` => `2 + (3 * 4)` = `14`.
- Los operadores lógicos usan cortocircuito y tienen su propia precedencia.

Consejo: cuando haya dudas o expresiones complejas, usa paréntesis para dejar clara la intención.

## Ejemplos en TypeScript

```ts
// Mezcla de operadores
const a = 10;
const b = 3;
const result = (a % b === 1) ? a + b : a - b; // usa ternario y comparación estricta

// Uso de nullish coalescing vs OR
const val1 = 0 || 5;    // 5 (0 es falsy)
const val2 = 0 ?? 5;    // 0 (0 no es null/undefined)

// Spread y rest
const arr = [1,2,3];
const copy = [...arr];
function join(separator: string, ...parts: string[]) { return parts.join(separator); }

// Encadenamiento opcional
const len = maybeUser?.profile?.name?.length;
```

## Ejercicios

1. Explica la diferencia entre `==` y `===` con ejemplos que muestren coerción implícita.

2. Dado `const data = { a: { b: 0 } }`, ¿qué devuelve `data?.a?.b ?? 42` y por qué? ¿Qué devolvería usando `||` en su lugar?

3. Reescribe la siguiente función para evitar accesos nulos usando encadenamiento opcional y nullish coalescing:

```ts
function getStreet(user) {
	if (user && user.address && user.address.street) return user.address.street;
	return '—';
}
```

4. ¿Qué hace `~x` (NOT bitwise) sobre un entero `x`? Da un ejemplo con `x = 0` y `x = 5`.

5. Escribe una función que reciba una lista de números y use `reduce` y operadores aritméticos para devolver la media.

## Sugerencias (recursos)

- MDN Web Docs — operadores en JavaScript: https://developer.mozilla.org/
- Artículos sobre `nullish coalescing` y `optional chaining` para entender casos de uso.
- Tabla de precedencia de operadores en MDN para consultas rápidas.

---