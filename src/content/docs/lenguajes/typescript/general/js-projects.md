---
title: JS Projects
description: Integrar TS en proyectos JS.
module: lenguajes/typescript
submodule: general
order: 38
---

Al completar esta guía podrás:

- Configurar TypeScript en proyectos JavaScript existentes
- Usar allowJs y checkJs para migración gradual
- Aplicar JSDoc para tipos en JS
-Controlar la verificación con @ts-check y @ts-nocheck

---

## allowJs

Permite incluir archivos JavaScript en proyectos TypeScript.

```json
{
  "compilerOptions": {
    "allowJs": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
```

Ahora puedes tener archivos .ts y .js mezclados.

---

## checkJs

Activa la verificación de tipos en archivos JavaScript.

```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "noEmit": true
  }
}
```

TypeScript analizará tus archivos JS y reportará errores.

```javascript
// usuario.js — sin tipos, pero checkJs lo analiza
function saludar(nombre) {
  return `Hola ${nombre}`;
}

// saludar(42);  // Error con checkJs: esperaba string
```

---

## JSDoc types

Añade tipos a archivos JavaScript usando comentarios JSDoc.

```javascript
/**
 * @param {string} nombre
 * @param {number} edad
 * @returns {{ nombre: string, edad: number }}
 */
function crearUsuario(nombre, edad) {
  return { nombre, edad };
}
```

```javascript
/**
 * @typedef {Object} Usuario
 * @property {number} id
 * @property {string} nombre
 * @property {string} email
 */

/**
 * @param {number} id
 * @returns {Promise<Usuario>}
 */
async function obtenerUsuario(id) {
  const res = await fetch(`/api/usuarios/${id}`);
  return res.json();
}
```

---

## @ts-check y @ts-nocheck

Control granular de la verificación.

```javascript
// @ts-nocheck — desactiva verificación en TODO el archivo
// Útil para archivos que no se migrarán pronto

// @ts-check — activa verificación en un archivo JS
// (incluso sin checkJs en tsconfig)

// @ts-ignore — ignora el error en la siguiente línea
// @ts-expect-error — similar, pero falla si no hay error
```

```javascript
// @ts-check

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sumar(a, b) {
  return a + b;
}

// @ts-expect-error — esperamos un error aquí
sumar("texto", 2);
```

---

## Declaraciones para JS

Para librerías JavaScript que otros consumirán desde TypeScript:

```typescript
// index.d.ts
export function saludar(nombre: string): string;
export const VERSION: string;
```

```json
// package.json
{
  "main": "index.js",
  "types": "index.d.ts"
}
```

---

## Migración gradual con JSDoc

```javascript
// 1. Archivo original
function calcularTotal(items) {
  return items.reduce((total, item) => total + item.precio * item.cantidad, 0);
}

// 2. Añadir JSDoc
/**
 * @param {Array<{precio: number, cantidad: number}>} items
 * @returns {number}
 */
function calcularTotal(items) {
  return items.reduce((total, item) => total + item.precio * item.cantidad, 0);
}

// 3. Eventualmente, migrar a .ts
```

---

## Resumen

| Opción | Descripción |
|---|---|
| allowJs | Incluir .js en proyecto TS |
| checkJs | Verificar tipos en .js |
| JSDoc | Tipos en comentarios JS |
| @ts-check | Verificación por archivo |
| @ts-nocheck | Sin verificación por archivo |

---

## Ejercicio

Convierte esta función JavaScript a usar JSDoc types:

```javascript
function duplicar(numeros) {
  return numeros.map(n => n * 2);
}
```

**Instrucciones paso a paso:**

1. Añade @param con tipo number[]
2. Añade @returns con tipo number[]
3. Activa checkJs o @ts-check para verificar

<details>
<summary>Mostrar solución</summary>

```javascript
// @ts-check

/**
 * Duplica cada número en un array.
 *
 * @param {number[]} numeros - Array de números a duplicar
 * @returns {number[]} Nuevo array con valores duplicados
 */
function duplicar(numeros) {
  return numeros.map(n => n * 2);
}

// Uso
const resultado = duplicar([1, 2, 3]);
console.log(resultado);  // [2, 4, 6]

// Con checkJs activo, esto daría error:
// duplicar(["texto"]);  // Error: string[] no es number[]
```

</details>
