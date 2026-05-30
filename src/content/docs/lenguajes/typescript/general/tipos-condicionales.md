---
title: Tipos condicionales
description: Tipos que dependen de condiciones.
module: lenguajes/typescript
submodule: general
order: 20
---

Al completar esta guía podrás:

- Declarar tipos condicionales con `extends ? :`
- Usar `infer` para extraer tipos
- Aplicar distributive conditional types
- Entender los built-in conditional types

---

## Sintaxis básica

```typescript
type EsString<T> = T extends string ? "Sí" : "No";

type A = EsString<string>;   // "Sí"
type B = EsString<number>;   // "No"
type C = EsString<boolean>;  // "No"
```

---

## Distributive conditional types

Cuando se aplica a una unión, se distribuye por cada miembro.

```typescript
type SinNull<T> = T extends null ? never : T;

type Resultado = SinNull<string | null | number>;
// Se distribuye:
// SinNull<string> → string
// SinNull<null> → never
// SinNull<number> → number
// Resultado: string | number
```

---

## infer

Extrae un tipo de otro tipo usando `infer` dentro de `extends`.

```typescript
type TipoRetorno<T> = T extends (...args: any[]) => infer R ? R : never;

type Fn = () => string;
type R = TipoRetorno<Fn>;  // string

type Fn2 = (a: number, b: number) => boolean;
type R2 = TipoRetorno<Fn2>;  // boolean
```

```typescript
type ElementoArray<T> = T extends (infer U)[] ? U : never;

type E1 = ElementoArray<string[]>;    // string
type E2 = ElementoArray<number[]>;    // number
type E3 = ElementoArray<string>;      // never (no es array)
```

---

## Encadenar tipos condicionales

```typescript
type TipoElemento<T> = T extends (infer U)[]
  ? U extends Promise<infer V>
    ? V
    : U
  : T;

type A = TipoElemento<string[]>;          // string
type B = TipoElemento<Promise<number>[]>; // number (extrae dentro de Promise)
type C = TipoElemento<boolean>;           // boolean
```

---

## Built-in conditional types

```typescript
// Exclude<T, U> — excluye tipos
type SinString = Exclude<string | number | boolean, string>;
// number | boolean

// Extract<T, U> — extrae tipos
type SoloString = Extract<string | number | boolean, string>;
// string

// NonNullable<T> — elimina null y undefined
type SinNullUndef = NonNullable<string | null | undefined>;
// string
```

---

## Conditional types en funciones

```typescript
type TipoRetornoPromise<T> = T extends Promise<infer R> ? R : T;

async function obtenerDatos(): Promise<string> {
  return "datos";
}

type Resultado = TipoRetornoPromise<ReturnType<typeof obtenerDatos>>;
// string
```

---

## Resumen

| Concepto | Descripción |
|---|---|
| `T extends U ? X : Y` | Tipo condicional básico |
| Distribución | Se aplica a cada miembro de uniones |
| `infer` | Extrae un tipo de otro |
| Built-in | Exclude, Extract, NonNullable, ReturnType, Parameters |

---

## Ejercicio

Crea un tipo condicional `EsArray<T>` que devuelva "es un array" si T es un array, y "no es un array" si no lo es.

**Instrucciones paso a paso:**

1. `type EsArray<T> = T extends any[] ? "es un array" : "no es un array"`
2. Prueba con `string[]` y `number`

<details>
<summary>Mostrar solución</summary>

```typescript
type EsArray<T> = T extends any[] ? "es un array" : "no es un array";

type Prueba1 = EsArray<string[]>;  // "es un array"
type Prueba2 = EsArray<number>;    // "no es un array"
type Prueba3 = EsArray<boolean[]>; // "es un array"

// Verificación en tiempo de compilación
const a: Prueba1 = "es un array";
const b: Prueba2 = "no es un array";
```

</details>
