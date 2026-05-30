---
title: Definitely Typed
description: Tipos para librerías JS.
module: lenguajes/typescript
submodule: general
order: 28
---

Al completar esta guía podrás:

- Instalar tipos para librerías JavaScript
- Encontrar tipos en DefinitelyTyped
- Declarar tipos propios para módulos sin tipos
- Publicar o contribuir con tipos

---

## ¿Qué es Definitely Typed?

DefinitelyTyped es un repositorio comunitario con definiciones de tipos para librerías JavaScript que no tienen tipos nativos.

```bash
npm install --save-dev @types/libreria
```

---

## Instalar tipos

```typescript
// Librería sin tipos nativos
// npm install lodash
// lodash funciona pero sin tipos

// Instalar tipos
// npm install --save-dev @types/lodash

import _ from "lodash";

const resultado = _.chunk([1, 2, 3, 4], 2);
// resultado: number[][]
```

---

## @types/scope

```bash
# Librerías comunes con tipos en DefinitelyTyped
npm install --save-dev @types/node
npm install --save-dev @types/express
npm install --save-dev @types/react
npm install --save-dev @types/jquery
npm install --save-dev @types/lodash
npm install --save-dev @types/axios

# Verificar disponibilidad
npm info @types/libreria version
```

---

## Declarar tipos propios

Cuando una librería no tiene tipos y no está en DefinitelyTyped:

```typescript
// types/mi-libreria.d.ts
declare module "mi-libreria" {
  export function saludar(nombre: string): string;
  export const version: string;

  export interface Config {
    debug: boolean;
    timeout: number;
  }
}
```

```typescript
// app.ts
import { saludar, version } from "mi-libreria";
console.log(saludar("Ana"), version);
```

---

## Ambient declarations

Para variables globales de scripts externos:

```typescript
// global.d.ts
declare const MI_APP: {
  version: string;
  iniciar: () => void;
};

declare function analizar(datos: unknown): string;
```

---

## Module augmentation existente

Extender tipos de una librería existente:

```typescript
// express.d.ts
import "express";

declare module "express" {
  interface Request {
    usuario?: {
      id: number;
      nombre: string;
    };
  }
}
```

---

## Publicar tipos propios

Para librerías propias escritas en TypeScript:

```json
{
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true
  }
}
```

Esto genera archivos `.d.ts` automáticamente al compilar.

Para librerías JavaScript, crea `index.d.ts` en la raíz:

```typescript
// index.d.ts
export function saludar(nombre: string): string;
export const version: string;
```

Luego en package.json:

```json
{
  "types": "index.d.ts",
  "typings": "index.d.ts"
}
```

---

## Resumen

| Concepto | Descripción |
|---|---|
| DefinitelyTyped | Repositorio comunitario de tipos |
| @types/paquete | Instalar tipos para una librería |
| declare module | Declarar tipos para módulo sin tipos |
| declare global | Tipos para variables globales |
| declaration: true | Generar .d.ts automáticamente |

---

## Ejercicio

Imagina que usas una librería llamada `formateador-fechas` sin tipos. Crea una declaración de tipos para ella con una función `formatear(fecha: Date): string` y una constante `FORMATO_POR_DEFECTO`.

**Instrucciones paso a paso:**

1. Crea un archivo `types/formateador-fechas.d.ts`
2. Declara el módulo con `declare module "formateador-fechas"`
3. Exporta la función y la constante
4. Úsala en código TypeScript

<details>
<summary>Mostrar solución</summary>

```typescript
// types/formateador-fechas.d.ts
declare module "formateador-fechas" {
  export function formatear(fecha: Date, formato?: string): string;
  export const FORMATO_POR_DEFECTO: string;

  export interface Opciones {
    locale?: string;
    utc?: boolean;
  }
}
```

```typescript
// app.ts
import { formatear, FORMATO_POR_DEFECTO } from "formateador-fechas";

const hoy = new Date();
console.log(formatear(hoy));                    // "2024-01-15"
console.log(formatear(hoy, "DD/MM/YYYY"));      // "15/01/2024"
console.log(FORMATO_POR_DEFECTO);               // "YYYY-MM-DD"
```

</details>
