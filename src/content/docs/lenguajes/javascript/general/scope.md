---
title: Scope
description: Alcance de variables.
module: lenguajes/javascript
submodule: general
order: 18
---

Al completar esta guía podrás:

- Distinguir entre scope global, de función y de bloque
- Entender las diferencias entre var, let y const
- Identificar closures y su utilidad práctica
- Evitar problemas comunes de scope

---

## Tipos de scope

El scope determina desde dónde se puede acceder a una variable.

```javascript
// Scope global
let global = "accesible desde cualquier parte";

function ejemplo() {
  // Scope de función
  let local = "solo dentro de la función";
  console.log(global);  // "accesible..."
}

if (true) {
  // Scope de bloque
  let bloque = "solo dentro del if";
  console.log(global);  // "accesible..."
}

// console.log(local);   // ReferenceError
// console.log(bloque);  // ReferenceError
```

---

## var vs let vs const

```javascript
// var — scope de función
function ejemplo() {
  if (true) {
    var x = 10;
  }
  console.log(x);  // 10 — var ignora los bloques
}

// let — scope de bloque
function ejemplo2() {
  if (true) {
    let y = 20;
  }
  // console.log(y);  // ReferenceError
}
```

| Característica | var | let | const |
|---|---|---|---|
| Scope | Función | Bloque | Bloque |
| Hoisting | Sí (inicializa undefined) | Sí (no inicializa) | Sí (no inicializa) |
| Redeclarar | Permitido | Error | Error |
| Reasignar | Permitido | Permitido | Error |
| Crear sin inicializar | undefined | Error | Error |

### Hoisting

```javascript
console.log(a);  // undefined — var se eleva e inicializa
var a = 5;

console.log(b);  // ReferenceError — let se eleva pero no inicializa
let b = 10;
```

> **Convención:** usa `const` por defecto. Usa `let` solo cuando necesites reasignar. Nunca uses `var`.

---

## Scope anidado

Los bloques internos acceden a variables de bloques externos. Los externos no acceden a los internos.

```javascript
let x = 1;

function externa() {
  let y = 2;

  function interna() {
    let z = 3;
    console.log(x);  // 1 — global
    console.log(y);  // 2 — externa
    console.log(z);  // 3 — interna
  }

  interna();
  // console.log(z);  // ReferenceError
}

externa();
```

---

## Shadowing

Cuando una variable interna tiene el mismo nombre que una externa, la interna oculta a la externa dentro de su scope.

```javascript
let nombre = "Global";

function ejemplo() {
  let nombre = "Local";
  console.log(nombre);  // "Local" — oculta a la global
}

ejemplo();
console.log(nombre);  // "Global" — la global no cambió
```

---

## Closures

Una **closure** ocurre cuando una función interna conserva acceso a las variables de su función externa, incluso después de que la externa terminó.

```javascript
function crearContador() {
  let cuenta = 0;

  return function() {
    cuenta++;
    return cuenta;
  };
}

let contador = crearContador();

console.log(contador());  // 1
console.log(contador());  // 2
console.log(contador());  // 3
```

La variable `cuenta` persiste entre llamadas porque la función interna mantiene una referencia a ella.

### Factory functions con closure

```javascript
function crearSaludo(prefijo) {
  return function(nombre) {
    console.log(`${prefijo} ${nombre}`);
  };
}

let saludarFormal = crearSaludo("Estimado");
let saludarCasual = crearSaludo("Hola");

saludarFormal("Ana");  // "Estimado Ana"
saludarCasual("Ana");  // "Hola Ana"
```

---

## IIFE (Immediately Invoked Function Expression)

Función que se ejecuta inmediatamente después de definirse. Útil para crear un scope aislado.

```javascript
(function() {
  let mensaje = "Solo dentro de la IIFE";
  console.log(mensaje);
})();

// console.log(mensaje);  // ReferenceError
```

Con arrow function:

```javascript
(() => {
  let privado = "aislado";
  console.log(privado);
})();
```

---

## El problema clásico con var en bucles

```javascript
// Con var
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// 3, 3, 3 — todas ven el mismo i

// Con let
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// 0, 1, 2 — cada iteración tiene su propio j
```

Con `var`, solo hay una variable `i` compartida. Con `let`, cada iteración crea un nuevo binding.

---

## Cadena de scope

Cuando JavaScript busca una variable, recorre la cadena de scopes desde el más interno hasta el global.

```javascript
let a = "global";

function b() {
  let a = "b";

  function c() {
    let a = "c";
    console.log(a);  // "c" — encuentra en c
  }

  function d() {
    console.log(a);  // "b" — encuentra en b (no hay a en d)
  }

  c();
  d();
}

b();
```

> **Regla:** las variables se buscan de adentro hacia afuera. El scope se determina en tiempo de definición, no de ejecución.

---

## Resumen

- `const` y `let` tienen scope de bloque; `var` tiene scope de función
- Prefiere `const`, usa `let` solo para reasignación, nunca `var`
- El hoisting eleva las declaraciones, pero `let`/`const` no se inicializan
- Una closure preserva el acceso a variables externas
- Las IIFE crean un scope aislado inmediato
- La cadena de scope busca desde el interior hacia el exterior

---

## Ejercicio

Escribe una función `crearMultiplicador(n)` que retorne una función que multiplique cualquier número por `n`.

**Instrucciones paso a paso:**

1. Crea `crearMultiplicador(n)` que reciba un número
2. Retorna una función que recibe otro número y retorna la multiplicación
3. El valor de `n` debe mantenerse accesible gracias al closure
4. Crea `duplicar = crearMultiplicador(2)` y `triplicar = crearMultiplicador(3)`
5. Prueba: `duplicar(5)` → 10, `triplicar(5)` → 15

<details>
<summary>Mostrar solución</summary>

```javascript
function crearMultiplicador(n) {
  return function(x) {
    return x * n;
  };
}

let duplicar = crearMultiplicador(2);
let triplicar = crearMultiplicador(3);
let porDiez = crearMultiplicador(10);

console.log(duplicar(5));   // 10
console.log(triplicar(5));  // 15
console.log(porDiez(5));    // 50
```

**Con arrow function:**

```javascript
function crearMultiplicador(n) {
  return x => x * n;
}
```

</details>
