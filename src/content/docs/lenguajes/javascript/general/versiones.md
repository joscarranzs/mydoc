---
title: Versiones
description: Historial de ECMAScript.
module: lenguajes/javascript
submodule: general
order: 40
---

Al completar esta guía podrás:

- Identificar las características principales de cada versión de ECMAScript
- Entender la línea de tiempo del lenguaje
- Usar características modernas con conocimiento de compatibilidad

---

## ES3 (1999)

La primera versión estandarizada ampliamente adoptada.

- `try/catch`
- Expresiones regulares
- `switch`
- `do...while`

---

## ES5 (2009)

```javascript
// Array methods
[1, 2].forEach();
[1, 2].map();
[1, 2].filter();
[1, 2].reduce();
[1, 2].indexOf();

// JSON
JSON.stringify();
JSON.parse();

// Object methods
Object.keys();
Object.create();
Object.defineProperty();

// Modo estricto
"use strict";
```

---

## ES6 / ES2015

La actualización más grande en la historia del lenguaje.

```javascript
// let y const
let x = 1;
const Y = 2;

// Arrow functions
const fn = () => {};

// Clases
class Usuario {}

// Template literals
`Hola ${nombre}`;

// Destructuring
let { nombre, edad } = obj;
let [a, b] = arr;

// Spread
{ ...obj }
[...arr]

// Parámetros por defecto
function fn(x = 10) {}

// Rest parameters
function fn(...args) {}

// Promesas
new Promise((resolve) => {});

// Módulos
export default {};
import {} from "";

// Map, Set
new Map();
new Set();

// Symbol
Symbol("id");

// for...of
for (let x of arr) {}
```

---

## ES2016

```javascript
// Array.prototype.includes
[1, 2].includes(1);  // true

// Operador de exponenciación
2 ** 3;  // 8
```

---

## ES2017

```javascript
// async/await
async function fn() {
  let r = await fetch(url);
}

// Object.values / Object.entries
Object.values(obj);
Object.entries(obj);

// String padding
"5".padStart(3, "0");  // "005"
"5".padEnd(3, "0");    // "500"

// Object.getOwnPropertyDescriptors
Object.getOwnPropertyDescriptors(obj);

// Trailing commas en parámetros
function fn(a, b, c,) {}
```

---

## ES2018

```javascript
// Rest en objetos
let { a, ...resto } = obj;

// Spread en objetos
let nuevo = { ...obj1, ...obj2 };

// Promise.finally
promesa.finally(() => {});

// for-await-of
for await (let x of iterable) {}

// RegExp mejorado
/s+//s   // dotAll
/l//u    // unicode
/y       // sticky
```

---

## ES2019

```javascript
// Array.prototype.flat / flatMap
[1, [2]].flat();       // [1, 2]
[1, 2].flatMap(x => [x, x * 2]);

// Object.fromEntries
Object.fromEntries([["a", 1]]);  // { a: 1 }

// String.prototype.trimStart / trimEnd
"  hola".trimStart();
"hola  ".trimEnd();

// Optional catch binding
try {} catch {}  // Sin parámetro
```

---

## ES2020

```javascript
// Optional chaining
usuario?.direccion?.calle;

// Nullish coalescing
let x = valor ?? "default";

// Promise.allSettled
Promise.allSettled([p1, p2]);

// String.prototype.matchAll
"texto".matchAll(/t/g);

// BigInt
123n;

// globalThis
globalThis.console.log("Hola");

// import() dinámico
let mod = await import("./mod.js");
```

---

## ES2021

```javascript
// String.prototype.replaceAll
"a a".replaceAll("a", "b");  // "b b"

// Promise.any
Promise.any([p1, p2]);

// Separadores numéricos
1_000_000;  // 1000000

// Logical assignment
x &&= 10;  // x = x && 10
x ||= 10;  // x = x || 10
x ??= 10;  // x = x ?? 10

// WeakRef
new WeakRef(obj);
```

---

## ES2022

```javascript
// Campos privados
class A {
  #privado = 1;
}

// await en módulos (top-level await)
// await fetch(url);

// .at() en arreglos y strings
[1, 2].at(-1);  // 2
"hola".at(-1);  // "a"

// Object.hasOwn
Object.hasOwn(obj, "prop");

// Error cause
new Error("msg", { cause: error });
```

---

## ES2023

```javascript
// toSorted, toReversed, toSpliced (no mutan)
arr.toSorted();
arr.toReversed();
arr.toSpliced(1, 2);

// findLast, findLastIndex
arr.findLast(x => x > 3);
arr.findLastIndex(x => x > 3);
```

---

## Compatibilidad

No todas las características están disponibles en todos los entornos.

```javascript
// Verificar soporte
console.log(typeof Promise !== "undefined");
console.log(typeof fetch !== "undefined");
console.log(typeof globalThis !== "undefined");
```

Para navegadores antiguos, usa **Babel** para transpilar código moderno a ES5.

---

## Resumen

| Versión | Características clave |
|---|---|
| ES5 (2009) | `forEach`, `map`, `filter`, JSON, modo estricto |
| ES6 (2015) | `let/const`, clases, arrow, módulos, promesas, Map, Set |
| ES2017 | `async/await` |
| ES2020 | Optional chaining, nullish coalescing, BigInt |
| ES2022 | Campos privados, `at()`, top-level await |

- ES6 fue la actualización más significativa
- Desde ES2016, el estándar se actualiza anualmente
- Usa Babel para compatibilidad con navegadores antiguos
- Las características modernas mejoran legibilidad y seguridad
- Verifica soporte antes de usar APIs nuevas en producción
