---
title: Módulos
description: Import/export, ES Modules.
module: lenguajes/javascript
submodule: general
order: 27
---

Al completar esta guía podrás:

- Dividir código en archivos usando módulos ES
- Exportar e importar funciones, objetos y valores
- Usar export default y named exports
- Entender la diferencia entre módulos y scripts

---

## ¿Qué es un módulo?

Un módulo es un archivo JavaScript que exporta valores para que otros archivos los importen.

```javascript
// math.js
export function sumar(a, b) {
  return a + b;
}

export const PI = 3.1416;
```

```javascript
// app.js
import { sumar, PI } from "./math.js";

console.log(sumar(5, 3));  // 8
console.log(PI);           // 3.1416
```

Para usar módulos en HTML, agrega `type="module"`:

```html
<script type="module" src="app.js"></script>
```

---

## Named exports

Puedes exportar múltiples valores con nombre.

```javascript
// export individual
export function saludar(nombre) {
  return `Hola, ${nombre}`;
}

export const EDAD_MAXIMA = 150;

// export agrupado
function despedir(nombre) {
  return `Adiós, ${nombre}`;
}

const VERSION = "1.0";

export { despedir, VERSION };
```

### Import con nombre

```javascript
import { saludar, despedir, VERSION } from "./saludos.js";

console.log(saludar("Ana"));  // "Hola, Ana"
console.log(VERSION);         // "1.0"
```

### Import con alias

```javascript
import { saludar as hola, VERSION as ver } from "./saludos.js";

console.log(hola("Ana"));
```

---

## Default export

Cada módulo puede tener un único export por defecto.

```javascript
// usuario.js
export default class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// app.js
import Usuario from "./usuario.js";
```

También puede ser una función o valor:

```javascript
export default function crearUsuario(nombre) {
  return { nombre };
}
```

### Combinar default y named

```javascript
import Usuario, { validar, formatear } from "./usuario.js";
```

---

## Re-export

Puedes re-exportar valores de otros módulos.

```javascript
// index.js — punto de entrada
export { sumar, restar } from "./math.js";
export { default as Usuario } from "./usuario.js";
```

---

## Import todo

```javascript
import * as MathUtils from "./math.js";

console.log(MathUtils.sumar(5, 3));
console.log(MathUtils.PI);
```

---

## Script vs Module

| Característica | Script normal | Módulo |
|---|---|---|
| Scope | Global | Propio (cada módulo tiene su scope) |
| `type` | `text/javascript` (por defecto) | `module` |
| `use strict` | Opcional | Siempre en modo estricto |
| `this` | `window` | `undefined` |
| Hoisting de imports | No | Sí (los imports se elevan) |
| Carga | Bloqueante | Diferida por defecto |
| Export/Import | No | Sí |

```html
<script type="module" src="app.js"></script>
<!-- Equivalente a: -->
<script type="module" src="app.js" defer></script>
```

---

## Import dinámico

El `import()` dinámico permite cargar módulos bajo demanda. Retorna una promesa.

```javascript
async function cargarModulo(ruta) {
  try {
    let modulo = await import(ruta);
    modulo.hacerAlgo();
  } catch (error) {
    console.log("Error al cargar módulo:", error.message);
  }
}

// Cargar solo cuando se necesita
boton.addEventListener("click", () => {
  cargarModulo("./editor.js");
});
```

Útil para:

- Carga perezosa de componentes grandes
- Rutas en aplicaciones
- Carga condicional según el navegador o preferencias

---

## Ciclos y orden

Los módulos se ejecutan una sola vez, sin importar cuántas veces se importen.

```javascript
// contador.js
export let cuenta = 0;

export function incrementar() {
  cuenta++;
}
```

```javascript
// a.js
import { cuenta, incrementar } from "./contador.js";
incrementar();
console.log(cuenta);  // 1

// b.js
import { cuenta, incrementar } from "./contador.js";
console.log(cuenta);  // 1 — mismo módulo, mismo estado
```

---

## CommonJS vs ES Modules

| Característica | CommonJS (Node.js) | ES Modules |
|---|---|---|
| Export | `module.exports` | `export` |
| Import | `require()` | `import` |
| Carga | Síncrona | Asíncrona |
| Estático | No | Sí (análisis estático) |
| Tree-shaking | No | Sí |

```javascript
// CommonJS (Node.js)
const fs = require("fs");
module.exports = { miFuncion };

// ES Modules
import fs from "fs";
export { miFuncion };
```

---

## Resumen

| Sintaxis | Descripción |
|---|---|
| `export` | Exporta un valor con nombre |
| `export default` | Exporta el valor principal |
| `import { x } from` | Importa un valor con nombre |
| `import x from` | Importa el valor por defecto |
| `import * as x from` | Importa todo en un objeto |
| `import()` | Importa dinámicamente (retorna promesa) |

- Los módulos tienen su propio scope (no contaminan el global)
- Siempre en modo estricto
- Se cargan de forma diferida por defecto
- El orden de las importaciones no importa (se elevan)
- Usa `import()` para carga perezosa
- ES Modules permite tree-shaking y análisis estático

---

## Ejercicio

Crea tres archivos: `math.js`, `strings.js` y `app.js`. En `math.js` exporta `sumar` y `multiplicar`. En `strings.js` exporta `mayusculas` y un default `formatearNombre`. En `app.js` importa todo y úsalo.

**Instrucciones paso a paso:**

1. `math.js`: exporta funciones `sumar` y `multiplicar`
2. `strings.js`: exporta `mayusculas` (named) y `formatearNombre` (default)
3. `app.js`: importa todas las funciones
4. Usa cada función al menos una vez
5. Prueba en el navegador con `type="module"`

<details>
<summary>Mostrar solución</summary>

```javascript
// math.js
export function sumar(a, b) {
  return a + b;
}

export function multiplicar(a, b) {
  return a * b;
}
```

```javascript
// strings.js
export function mayusculas(texto) {
  return texto.toUpperCase();
}

export default function formatearNombre(nombre) {
  return nombre.trim()
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase());
}
```

```javascript
// app.js
import formatearNombre, { mayusculas } from "./strings.js";
import { sumar, multiplicar } from "./math.js";

console.log(sumar(5, 3));         // 8
console.log(multiplicar(4, 2));   // 8
console.log(formatearNombre("  jUAn péREZ  "));  // "Juan Pérez"
console.log(mayusculas("hola"));  // "HOLA"
```

```html
<!-- index.html -->
<script type="module" src="app.js"></script>
```

</details>
