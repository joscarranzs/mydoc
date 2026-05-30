---
title: Arrays
description: Tipos para arreglos.
module: lenguajes/typescript
submodule: general
order: 6
---

Al completar esta guía podrás:

- Tipar arreglos con sintaxis `type[]` y `Array<type>`
- Usar arreglos de solo lectura
- Inferir tipos en arreglos heterogéneos
- Aplicar métodos de array con tipos

---

## Sintaxis básica

```typescript
let numeros: number[] = [1, 2, 3];
let nombres: string[] = ["Ana", "Luis", "Carlos"];
let flags: boolean[] = [true, false, true];
```

Forma alternativa con genéricos:

```typescript
let numeros: Array<number> = [1, 2, 3];
let nombres: Array<string> = ["Ana", "Luis"];
```

Ambas son equivalentes. La primera (`type[]`) es más común.

---

## Inferencia

```typescript
let numeros = [1, 2, 3];            // number[]
let nombres = ["Ana", "Luis"];      // string[]
let mixto = [1, "texto", true];     // (string | number | boolean)[]
```

---

## Métodos tipados

Los métodos de array preservan los tipos.

```typescript
let numeros: number[] = [1, 2, 3, 4, 5];

let duplicados = numeros.map(n => n * 2);     // number[]
let pares = numeros.filter(n => n % 2 === 0);  // number[]
let primero = numeros.find(n => n > 3);        // number | undefined

numeros.forEach(n => console.log(n.toFixed(2))); // n es number
```

---

## Arrays de solo lectura

```typescript
let legibles: readonly number[] = [1, 2, 3];
// legibles.push(4);     // Error: push no existe en readonly
// legibles[0] = 10;    // Error: asignación a índice no permitida

// Forma alternativa
let legibles2: ReadonlyArray<number> = [1, 2, 3];
```

Útil para parámetros que no deben mutarse:

```typescript
function sumar(numeros: readonly number[]): number {
  return numeros.reduce((a, b) => a + b, 0);
}
```

---

## Arrays multidimensionales

```typescript
let matriz: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let cubo: number[][][] = [[[1]]];
```

---

## Arrays con tipos específicos

```typescript
interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

let productos: Producto[] = [
  { id: 1, nombre: "Laptop", precio: 1200 },
  { id: 2, nombre: "Mouse", precio: 25 },
];

// Métodos con tipos preservados
let nombres = productos.map(p => p.nombre);  // string[]
let caros = productos.filter(p => p.precio > 100);  // Producto[]
```

---

## Destructuring

```typescript
let numeros: number[] = [10, 20, 30];
let [a, b, c] = numeros;  // a: number, b: number, c: number

let [primero, ...resto] = numeros;  // primero: number, resto: number[]
```

---

## Resumen

| Concepto | Sintaxis |
|---|---|
| Array de números | `number[]` |
| Array genérico | `Array<type>` |
| Solo lectura | `readonly type[]` |
| Multidimensional | `type[][]` |
| Inferencia | `[1, 2]` → `number[]` |

---

## Ejercicio

Escribe una función que reciba un array de números y devuelva un nuevo array con cada número duplicado. Tipa correctamente todo.

**Instrucciones paso a paso:**

1. Declara la función `duplicar(numeros: number[]): number[]`
2. Usa `map` para duplicar cada valor
3. Llama a la función con `[1, 2, 3, 4, 5]`
4. Muestra el resultado

<details>
<summary>Mostrar solución</summary>

```typescript
function duplicar(numeros: number[]): number[] {
  return numeros.map(n => n * 2);
}

const resultado = duplicar([1, 2, 3, 4, 5]);
console.log(resultado);  // [2, 4, 6, 8, 10]
```

</details>
