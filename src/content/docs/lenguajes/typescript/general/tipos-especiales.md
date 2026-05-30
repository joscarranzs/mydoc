---
title: Tipos especiales
description: any, unknown, void, never.
module: lenguajes/typescript
submodule: general
order: 5
---

Al completar esta guía podrás:

- Diferenciar any, unknown, void y never
- Usar unknown de forma segura
- Evitar any en código productivo
- Aplicar never en funciones que no retornan

---

## any

Desactiva la verificación de tipos por completo.

```typescript
let datos: any = "texto";
datos = 42;
datos = true;
datos.metodoInexistente();  // Sin error de compilación
```

> **Regla:** usa `any` solo como último recurso o en migraciones graduales. Prefiere `unknown` cuando no sepas el tipo.

---

## unknown

Como `any`, pero obliga a verificar el tipo antes de usarlo.

```typescript
let datos: unknown = "texto";
datos = 42;

// Error: no se puede operar con unknown sin verificar
// datos.toFixed(2);

// Solución: estrechar el tipo
if (typeof datos === "number") {
  console.log(datos.toFixed(2));  // OK
}

if (typeof datos === "string") {
  console.log(datos.toUpperCase());  // OK
}
```

```typescript
function procesar(valor: unknown): string {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }
  if (typeof valor === "number") {
    return valor.toFixed(2);
  }
  return String(valor);
}
```

---

## void

Ausencia de valor. Usado principalmente para retorno de funciones.

```typescript
function log(mensaje: string): void {
  console.log(mensaje);
  // return explícito no es necesario
}

// void acepta undefined
let vacio: void = undefined;
```

Las funciones que retornan `void` pueden ejecutar efectos secundarios pero no devuelven valor útil.

---

## never

Indica que algo nunca ocurrirá. Una función que retorna `never` no completa su ejecución.

```typescript
function error(mensaje: string): never {
  throw new Error(mensaje);
}

function bucleInfinito(): never {
  while (true) {
    procesar();
  }
}
```

`never` también aparece en uniones vacías:

```typescript
type Unibles = string & number;  // never — no hay valor que sea ambos
```

Útil para verificaciones exhaustivas:

```typescript
type Figura = "circulo" | "cuadrado" | "triangulo";

function area(figura: Figura): number {
  switch (figura) {
    case "circulo": return Math.PI * 2;
    case "cuadrado": return 4;
    case "triangulo": return 3;
    default:
      // Si agregamos un nuevo tipo, esto forzará error
      const exhaustivo: never = figura;
      return exhaustivo;
  }
}
```

---

## Comparación

| Tipo | Se puede asignar | Se puede usar sin verificar | Uso principal |
|---|---|---|---|
| `any` | Cualquier valor | Sí | Evitar en lo posible |
| `unknown` | Cualquier valor | No | Valor de origen desconocido |
| `void` | `undefined` | — | Funciones sin retorno |
| `never` | Nada | — | Funciones que nunca terminan |

---

## Resumen

| Concepto | Descripción |
|---|---|
| any | Sin verificación de tipos — evitar |
| unknown | Tipo seguro para valores desconocidos |
| void | Funciones sin retorno |
| never | Funciones que lanzan error o nunca terminan |
| Type narrowing | Proceso de verificar unknown para usar su valor |
| Exhaustive check | Usar never para verificar switch completos |

---

## Ejercicio

Escribe una función que reciba `unknown`, verifique si es `string`, `number` o `boolean`, y devuelva un mensaje formateado para cada caso.

**Instrucciones paso a paso:**

1. Declara una función `formatear(valor: unknown): string`
2. Usa `typeof` para verificar el tipo
3. Para string: devuelve el texto en mayúsculas
4. Para number: devuelve el número con dos decimales
5. Para boolean: devuelve "verdadero" o "falso"
6. Para otros: devuelve "Tipo no soportado"

<details>
<summary>Mostrar solución</summary>

```typescript
function formatear(valor: unknown): string {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }
  if (typeof valor === "number") {
    return valor.toFixed(2);
  }
  if (typeof valor === "boolean") {
    return valor ? "verdadero" : "falso";
  }
  return "Tipo no soportado";
}

console.log(formatear("hola"));       // "HOLA"
console.log(formatear(3.14159));      // "3.14"
console.log(formatear(true));         // "verdadero"
console.log(formatear([1, 2]));       // "Tipo no soportado"
```

</details>
