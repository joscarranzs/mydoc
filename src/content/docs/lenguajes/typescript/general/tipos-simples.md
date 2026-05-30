---
title: Tipos simples
description: Tipos primitivos en TypeScript.
module: lenguajes/typescript
submodule: general
order: 3
---

Al completar esta guía podrás:

- Declarar variables con tipos primitivos
- Diferenciar entre los tipos básicos de TypeScript
- Usar anotaciones de tipo explícitas
- Entender la inferencia básica de tipos

---

## Tipos primitivos

TypeScript incluye los mismos tipos primitivos que JavaScript, más algunos adicionales.

```typescript
// string — texto
let nombre: string = "Ana";
let saludo: string = `Hola, ${nombre}`;

// number — enteros y decimales
let entero: number = 42;
let decimal: number = 3.14;
let negativo: number = -10;
let hexadecimal: number = 0xFF;

// boolean — verdadero o falso
let activo: boolean = true;
let completado: boolean = false;

// bigint — números enteros grandes
let grande: bigint = 9007199254740991n;

// symbol — valores únicos e inmutable
let id: symbol = Symbol("id");
```

---

## Inferencia

TypeScript puede deducir el tipo automáticamente sin anotación explícita.

```typescript
let mensaje = "Hola";         // TypeScript infiere string
let cantidad = 100;           // Infiere number
let esValido = true;          // Infiere boolean

// mensaje = 42;              // Error: no se puede asignar number a string
```

La inferencia funciona con valores iniciales, retorno de funciones y contexto.

---

## undefined y null

```typescript
let indefinido: undefined = undefined;
let nulo: null = null;

// Con strict mode activado:
// let nombre: string = null;  // Error
```

Con `strict: true` en tsconfig.json, `null` y `undefined` no son asignables a otros tipos.

---

## any — evitar

El tipo `any` desactiva la verificación de tipos. Debe evitarse en lo posible.

```typescript
let variable: any = "texto";
variable = 42;          // Permitido
variable = true;        // Permitido
variable.hacerAlgo();   // Sin error en compilación

// Mejor usar unknown si no se conoce el tipo
let desconocido: unknown = "texto";
```

---

## never

Representa valores que nunca ocurren. Usado en funciones que siempre lanzan error o tienen bucles infinitos.

```typescript
function error(mensaje: string): never {
  throw new Error(mensaje);
}

function bucleInfinito(): never {
  while (true) {}
}
```

---

## void

Para funciones que no retornan valor.

```typescript
function log(mensaje: string): void {
  console.log(mensaje);
  // No hay return
}

let resultado: void = undefined;
// void solo acepta undefined
```

---

## Resumen

| Tipo | Descripción | Ejemplo |
|---|---|---|
| `string` | Texto | `"hola"` |
| `number` | Números | `42`, `3.14` |
| `boolean` | Lógico | `true`, `false` |
| `bigint` | Enteros grandes | `100n` |
| `symbol` | Valor único | `Symbol("id")` |
| `undefined` | No definido | `undefined` |
| `null` | Nulo | `null` |
| `any` | Sin tipo (evitar) | — |
| `never` | Nunca ocurre | `throw` |
| `void` | Sin retorno | `undefined` |

---

## Ejercicio

Declara variables con los tipos `string`, `number`, `boolean` y `symbol`. Asigna valores incorrectos y observa los errores del compilador.

**Instrucciones paso a paso:**

1. Crea un archivo `tipos.ts`
2. Declara una variable `nombre: string = "TypeScript"`
3. Declara `version: number = 5`
4. Declara `activo: boolean = true`
5. Declara `id: symbol = Symbol("id")`
6. Intenta asignar un número a `nombre` y observa el error
7. Compila con `tsc` y lee los mensajes de error

<details>
<summary>Mostrar solución</summary>

```typescript
// tipos.ts
let nombre: string = "TypeScript";
let version: number = 5;
let activo: boolean = true;
let id: symbol = Symbol("id");

console.log(typeof nombre);
console.log(typeof version);
console.log(typeof activo);
console.log(typeof id);

// Error: Type 'number' is not assignable to type 'string'
// nombre = 42;
```

```bash
tsc tipos.ts
# Si descomentas la línea 10 verás:
# tipos.ts:10:1 - error TS2322: Type 'number' is not assignable to type 'string'
```

</details>
