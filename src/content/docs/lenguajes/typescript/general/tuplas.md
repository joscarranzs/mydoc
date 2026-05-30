---
title: Tuplas
description: Arreglos de longitud fija.
module: lenguajes/typescript
submodule: general
order: 7
---

Al completar esta guía podrás:

- Declarar tuplas con tipos por posición
- Usar tuplas para valores de longitud fija
- Aplicar tuplas etiquetadas y readonly
- Diferenciar tuplas de arrays

---

## Tuplas básicas

Una tupla es un array con longitud y tipos fijos por posición.

```typescript
let usuario: [string, number] = ["Ana", 30];
// Posición 0: string
// Posición 1: number

usuario[0].toUpperCase();  // OK — es string
usuario[1].toFixed(2);     // OK — es number

// Error: no coincide el tipo
// usuario[0] = 42;

// Error: excede la longitud definida (en modo estricto)
// usuario[2] = true;
```

---

## Valores opcionales

```typescript
let coordenada: [number, number, string?] = [10, 20];
coordenada = [10, 20, "arriba"];  // OK
```

---

## Tuplas etiquetadas

Mejoran la legibilidad con nombres por posición.

```typescript
let usuario: [nombre: string, edad: number, activo: boolean] = ["Ana", 30, true];

// Las etiquetas no afectan el tipo, solo la documentación
```

---

## Readonly tuples

```typescript
let punto: readonly [number, number] = [10, 20];
// punto[0] = 5;   // Error
// punto.push(30); // Error (no existe push en readonly)
```

Útil para valores que no deben cambiar:

```typescript
function crearPunto(x: number, y: number): readonly [number, number] {
  return [x, y];
}
```

---

## Rest en tuplas

```typescript
let lista: [number, ...string[]] = [1, "a", "b", "c"];
// Primer elemento: number, resto: string[]

let alMenosUno: [string, ...string[]] = ["primero"];
```

---

## Tuplas vs Arrays

| Característica | Array | Tupla |
|---|---|---|
| Longitud | Variable | Fija |
| Tipos por posición | Todos iguales | Específicos por posición |
| Mutación | Permitida | readonly opcional |
| Uso típico | Colecciones | Pares clave-valor, coordenadas |

---

## Casos de uso comunes

```typescript
// Par clave-valor para Map
let entrada: [string, number] = ["edad", 30];

// Resultado de operación con estado
let resultado: [boolean, string] = [true, "Operación exitosa"];

// Coordenadas
let punto: [x: number, y: number, z?: number] = [1, 2];

// Destructuring con tipos preservados
let [nombre, edad] = usuario;
// nombre: string, edad: number
```

---

## Resumen

| Sintaxis | Descripción |
|---|---|
| `[string, number]` | Tupla básica |
| `[string, number?]` | Con elemento opcional |
| `[nombre: string, edad: number]` | Con etiquetas |
| `readonly [number, number]` | Solo lectura |
| `[number, ...string[]]` | Con rest |

---

## Ejercicio

Declara una tupla para representar un producto: nombre (string), precio (number) y disponible (boolean). Crea una función que la formatee como texto legible.

**Instrucciones paso a paso:**

1. Declara una tupla `[string, number, boolean]`
2. Crea una función `mostrarProducto(producto: [string, number, boolean]): string`
3. Si está disponible, muestra "[nombre] — $[precio]"
4. Si no, muestra "[nombre] — Agotado"
5. Prueba con un producto

<details>
<summary>Mostrar solución</summary>

```typescript
function mostrarProducto(producto: [string, number, boolean]): string {
  const [nombre, precio, disponible] = producto;
  if (disponible) {
    return `${nombre} — $${precio}`;
  }
  return `${nombre} — Agotado`;
}

const laptop: [string, number, boolean] = ["Laptop", 1200, true];
const mouse: [string, number, boolean] = ["Mouse", 25, false];

console.log(mostrarProducto(laptop));  // "Laptop — $1200"
console.log(mostrarProducto(mouse));   // "Mouse — Agotado"
```

</details>
