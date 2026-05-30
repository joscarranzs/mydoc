---
title: Actualizaciones TS5
description: Novedades de TypeScript 5.
module: lenguajes/typescript
submodule: general
order: 29
---

Al completar esta guía podrás:

- Conocer las novedades de TypeScript 5.x
- Usar decoradores modernos
- Aplicar const type parameters
- Configurar --moduleResolution bundler

---

## Decoradores (TS 5.0)

TypeScript 5.0 implementa los decoradores del estágio 3 de ECMAScript.

```typescript
function sellado(constructor: Function): void {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sellado
class Logger {
  mensaje: string;

  constructor(mensaje: string) {
    this.mensaje = mensaje;
  }

  @soloLectura
  metodo(): void {
    console.log(this.mensaje);
  }
}
```

```typescript
function soloLectura(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  descriptor.writable = false;
  return descriptor;
}
```

---

## const type parameters (TS 5.0)

Permite que los genéricos infieran tipos literales.

```typescript
function obtenerValores<const T extends readonly string[]>(valores: T): T {
  return valores;
}

// Sin const, inferiría string[]
// Con const, infiere readonly ["a", "b", "c"]
const resultado = obtenerValores(["a", "b", "c"]);
// resultado: readonly ["a", "b", "c"]
```

---

## --moduleResolution bundler (TS 5.0)

Modo de resolución de módulos optimizado para bundlers.

```json
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "bundler"
  }
}
```

Permite imports sin extensión y resuelve como lo haría Webpack, Vite o esbuild.

---

## export type * (TS 5.0)

Re-exportar solo tipos.

```typescript
// tipos.ts
export interface Usuario {
  id: number;
  nombre: string;
}

// archivo.ts
export type * from "./tipos";
// Solo exporta los tipos, no genera código JS
```

---

## Glob imports en package.json (TS 5.2)

```json
{
  "exports": {
    "./*": "./src/*.ts"
  }
}
```

---

## JSDoc @satisfies (TS 5.0)

```typescript
/**
 * @satisfies {Record<string, string | string[]>}
 */
const colores = {
  rojo: "#FF0000",
  verde: "#00FF00",
  azul: ["#0000FF", "#0000CC"],
};
```

Equivalente a `satisfies` en sintaxis TypeScript.

---

## JSDoc @import (TS 5.5)

Importar tipos desde JSDoc.

```typescript
/**
 * @import { Usuario } from "./tipos"
 */

/**
 * @param {Usuario} usuario
 * @returns {string}
 */
function saludar(usuario) {
  return usuario.nombre;
}
```

---

## isolatedModules por defecto (TS 5.5)

En proyectos con `moduleResolution: "bundler"`, las reglas de `isolatedModules` se aplican automáticamente.

---

## Resumen

| Versión | Novedad |
|---|---|
| TS 5.0 | Decoradores estándar, const type params, moduleResolution bundler |
| TS 5.1 | Mejoras en inferencia de funciones |
| TS 5.2 | Decoradores en contextos adicionales |
| TS 5.3 | Import attributes |
| TS 5.4 | NoInfer type |
| TS 5.5 | @import JSDoc, inferred type predicates |

---

## Ejercicio

Usa un `const type parameter` para crear una función que reciba un array de strings y preserve los tipos literales.

**Instrucciones paso a paso:**

1. `function crearLista<const T extends readonly string[]>(items: T): T`
2. Llama con `["a", "b", "c"]` y verifica que el tipo no es `string[]`

<details>
<summary>Mostrar solución</summary>

```typescript
function crearLista<const T extends readonly string[]>(items: T): T {
  return items;
}

const lista = crearLista(["rojo", "verde", "azul"]);
// lista: readonly ["rojo", "verde", "azul"]

console.log(lista[0]);  // "rojo" (literal, no string)

// Es readonly
// lista[0] = "negro";  // Error: readonly
```

</details>
