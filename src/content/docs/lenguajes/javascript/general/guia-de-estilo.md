---
title: Guía de estilo
description: Convenciones de código.
module: lenguajes/javascript
submodule: general
order: 38
---

Al completar esta guía podrás:

- Aplicar convenciones de nomenclatura consistentes
- Escribir código legible y mantenible
- Usar las reglas más aceptadas de la comunidad
- Identificar malas prácticas comunes

---

## Nomenclatura

```javascript
// Variables y funciones — camelCase
let nombreUsuario = "Ana";
let saldoTotal = 1000;
function obtenerDatos() {}

// Constantes — UPPER_SNAKE_CASE
const MAX_INTENTOS = 3;
const IVA = 0.16;
const URL_API = "https://api.ejemplo.com";

// Clases — PascalCase
class Usuario {}
class CuentaBancaria {}

// Archivos — kebab-case
// usuario-controller.js
// math-utils.js
```

---

## Declaración de variables

```javascript
// Preferir const
const maximo = 100;

// Usar let solo cuando se reasigna
let contador = 0;
contador++;

// Evitar var
// var x = 10;  // No
```

> **Regla:** declara variables lo más cerca posible de su uso. No las agrupes todas al inicio de la función.

---

## Nombres descriptivos

```javascript
// Mal
let d = new Date();
let a = obtener();
let fn = () => {};

// Bien
let fechaActual = new Date();
let usuarios = obtenerUsuarios();
let procesarPago = () => {};
```

```javascript
// Mal — abreviaturas ambiguas
let usr = "Ana";
let conf = { tema: "oscuro" };

// Bien
let usuario = "Ana";
let configuracion = { tema: "oscuro" };
```

---

## Formato

```javascript
// Espacios alrededor de operadores
let suma = a + b;
let esValido = x >= 18 && y === true;

// Espacio después de coma
let numeros = [1, 2, 3];
let fn = (a, b) => a + b;

// Punto y coma al final de cada sentencia
let x = 5;
console.log(x);
```

---

## Llaves

```javascript
// Misma línea
if (condicion) {
  ejecutar();
}

// Siempre usar llaves, incluso para una línea
if (edad >= 18) {
  console.log("Mayor");
}

// Espacio antes de abrir llaves
function saludar() {
  console.log("Hola");
}
```

---

## Longitud de líneas

```javascript
// Líneas largas — dividir después de operador
let resultado = usuarios
  .filter(u => u.activo)
  .map(u => u.nombre)
  .sort();

let mensaje = `La operación se completó exitosamente `
  + `con un total de ${total} registros procesados`;
```

---

## Comentarios

```javascript
// Mal — explica qué hace (el código debería ser obvio)
// Suma dos números
let suma = a + b;

// Bien — explica por qué
// Usar Math.round para evitar errores de precisión en facturación
let total = Math.round(subtotal * 1.16 * 100) / 100;

// Documentar funciones con JSDoc
/**
 * Calcula el descuento aplicable a un producto.
 *
 * @param {number} precio - Precio original del producto
 * @param {number} porcentaje - Porcentaje de descuento (0-100)
 * @returns {number} Precio con descuento aplicado
 */
function calcularDescuento(precio, porcentaje) {
  return precio - precio * (porcentaje / 100);
}
```

---

## Comparaciones

```javascript
// Usar siempre === y !==
if (x === 5) {}   // Bien
if (x == "5") {}  // Mal — coerción implícita

// Comparaciones booleanas directas
if (usuario.activo) {}       // Bien
if (usuario.activo === true) {}  // Mal — redundante

if (!usuario.activo) {}      // Bien
if (usuario.activo !== true) {}  // Mal
```

---

## Early return

```javascript
// Mal — anidamiento profundo
function validar(usuario) {
  if (usuario) {
    if (usuario.nombre) {
      if (usuario.edad >= 18) {
        return true;
      }
    }
  }
  return false;
}

// Bien — early return
function validar(usuario) {
  if (!usuario) return false;
  if (!usuario.nombre) return false;
  if (usuario.edad < 18) return false;
  return true;
}
```

---

## Malas prácticas comunes

```javascript
// 1. Comparar con ==
if (x == false) {}  // No

// 2. Modificar objetos que no te pertenecen
Array.prototype.mio = function() {};  // No

// 3. Funciones muy largas
function hacerTodo() {}  // No — dividir en funciones pequeñas

// 4. Parámetros mágicos
calcular(42);  // ¿Qué significa 42?

// 5. Código muerto
// console.log("debug");

// 6. Variables globales
nombreGlobal = "Ana";  // No — falta let/const
```

---

## Resumen

| Concepto | Convención |
|---|---|
| Variables | camelCase |
| Constantes | UPPER_SNAKE_CASE |
| Clases | PascalCase |
| Archivos | kebab-case |
| Comparación | `===` y `!==` siempre |
| Punto y coma | Siempre |
| Llaves | Misma línea, siempre usarlas |
| Comentarios | Explican *por qué*, no *qué* |

- Usa `const` por defecto, `let` para reasignación
- Nombres descriptivos y sin abreviaturas
- Early return para evitar anidamiento
- Funciones pequeñas con una sola responsabilidad
- No modifiques prototipos que no te pertenecen
- Sigue el estilo existente del proyecto
