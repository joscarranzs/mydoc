---
title: Inferencia de tipos
description: Cómo TypeScript deduce tipos.
module: lenguajes/typescript
submodule: general
order: 24
---

Al completar esta guía podrás:

- Entender cómo TypeScript infiere tipos
- Diferenciar widening y narrowing
- Usar contextual typing
- Aplicar const context para inferencia literal

---

## Inferencia básica

TypeScript deduce el tipo a partir del valor asignado.

```typescript
let x = 42;           // number
let y = "hola";       // string
let z = true;         // boolean
let arr = [1, 2, 3]; // number[]

function suma(a: number, b: number) {
  return a + b;       // infiere number
}
```

---

## Widening (ampliación)

TypeScript amplía tipos literales a tipos más generales.

```typescript
let x = "hola";  // string (no "hola")
let y = 42;      // number (no 42)

// Con let → amplía
// Con const → no amplía
const c = "hola";  // "hola" (literal)
const n = 42;      // 42 (literal)
```

---

## Contextual typing

TypeScript infiere tipos desde el contexto de uso.

```typescript
// El evento se infiere como MouseEvent
document.addEventListener("click", (event) => {
  console.log(event.clientX);  // event es MouseEvent
});

// El parámetro se infiere del tipo del array
[1, 2, 3].forEach((num) => {
  console.log(num.toFixed(2));  // num es number
});
```

---

## Best common type

Cuando hay múltiples elementos en un array, TypeScript busca el mejor tipo común.

```typescript
let arr = [1, 2, 3];           // number[]
let mixto = [1, "a", true];    // (string | number | boolean)[]

// Con objetos
let objetos = [
  { nombre: "Ana", edad: 30 },
  { nombre: "Luis", edad: 25, activo: true },
];
// { nombre: string; edad: number; activo?: boolean }[]
```

---

## const context

`as const` evita el widening y hace tipos literales readonly.

```typescript
let colores = ["rojo", "verde", "azul"];
// colores: string[]

const coloresConst = ["rojo", "verde", "azul"] as const;
// coloresConst: readonly ["rojo", "verde", "azul"]
// coloresConst[0]: "rojo" (literal)
```

```typescript
const config = {
  url: "https://api.com",
  puerto: 8080,
} as const;
// config: { readonly url: "https://api.com"; readonly puerto: 8080 }
```

---

## Fresh object literals

TypeScript es más estricto con objetos literales (excess property checking).

```typescript
interface Usuario {
  nombre: string;
  edad: number;
}

function saludar(u: Usuario): void {}

// Error: propiedad extra no permitida en objeto literal
// saludar({ nombre: "Ana", edad: 30, email: "ana@mail.com" });

// Permitido si se asigna a variable primero
const usuario = { nombre: "Ana", edad: 30, email: "ana@mail.com" };
saludar(usuario);  // OK — excess property check solo en literales
```

---

## Inferencia en genéricos

```typescript
function identidad<T>(valor: T): T {
  return valor;
}

const a = identidad("hola");   // string
const b = identidad(42);       // number
const c = identidad(true);     // boolean
```

---

## Resumen

| Concepto | Descripción |
|---|---|
| Inferencia básica | Tipo desde el valor |
| Widening | let amplía literales |
| Contextual typing | Tipo desde el contexto |
| Best common type | Mejor tipo común en arrays |
| as const | Evita widening |
| Fresh object literal | Excess property check |

---

## Ejercicio

Declara una variable con `let` y otra con `const as const`. Compara los tipos inferidos.

**Instrucciones paso a paso:**

1. `let ciudad = "CDMX";` — mira el tipo inferido
2. `const pais = "México";` — mira el tipo inferido
3. Verifica que `ciudad` es `string` y `pais` es `"México"`

<details>
<summary>Mostrar solución</summary>

```typescript
let ciudad = "CDMX";
const pais = "México";

// ciudad: string — puede reasignarse a cualquier string
ciudad = "Monterrey";  // OK

// pais: "México" — literal, no puede cambiar
// pais = "España";  // Error

const coordenadas = [10, 20] as const;
// coordenadas: readonly [10, 20]
// coordenadas[0] = 5;  // Error: readonly
```

</details>
