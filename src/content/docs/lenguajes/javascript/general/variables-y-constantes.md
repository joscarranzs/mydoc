---
title: Variables y constantes
description: Declaración, tipos y alcance de variables en JavaScript.
module: lenguajes/javascript
submodule: general
order: 2
---
---

## Tres formas de declarar variables

JavaScript tiene tres palabras clave para crear variables: `var`, `let` y `const`. No son iguales.

### `var` — la forma antigua (evitar)

```javascript
var nombre = "Ana";
```

`var` tiene un problema grave: su **alcance** (dónde es visible la variable) es la **función completa**, no el bloque de código donde la declaraste. Esto causa bugs confusos:

```javascript
function ejemplo() {
  if (true) {
    var x = 10;  // x existe en TODA la función
  }
  console.log(x); // 10 — ¡funciona! (pero no debería)
}

ejemplo();
```

`x` se "escapa" del `if` porque `var` no respeta los bloques `{}`.

### `let` — la forma moderna para variables

```javascript
let edad = 25;
```

`let` tiene **alcance de bloque**. Solo existe dentro del `{}` donde la declaraste:

```javascript
function ejemplo() {
  if (true) {
    let y = 10;  // y solo existe DENTRO del if
  }
  // console.log(y); // ReferenceError: y is not defined
}

ejemplo();
```

Esto es más predecible y seguro.

### `const` — para valores que no cambian

```javascript
const PI = 3.14159;
```

`const` funciona igual que `let` en cuanto a alcance, pero con una regla extra: **no puedes reasignarla** una vez creada:

```javascript
const PI = 3.14159;
// PI = 3.14;  // TypeError: Assignment to constant variable.
```

Esto es útil para valores que no deberían cambiar, como configuraciones, IDs, o referencias importantes.

**¿Cuándo usar cada uno?**

- Usa `const` por defecto (la mayoría de las veces)
- Usa `let` solo cuando necesites reasignar el valor
- Nunca uses `var` en código nuevo

---
---

## Desestructuración de objetos

La desestructuración es una forma abreviada de extraer valores de un objeto o array en variables individuales.

**Sin desestructuración** (la forma larga):

```javascript
const persona = { nombre: "Carlos", edad: 30 };

const nombre = persona.nombre;
const edad = persona.edad;

console.log(nombre); // "Carlos"
console.log(edad);   // 30
```

**Con desestructuración** (la forma corta):

```javascript
const persona = { nombre: "Carlos", edad: 30 };

const { nombre, edad } = persona;

console.log(nombre); // "Carlos"
console.log(edad);   // 30
```

La línea `const { nombre, edad } = persona;` significa: "Del objeto `persona`, extrae las propiedades `nombre` y `edad` y guárdalas en variables con esos mismos nombres".

**Puedes renombrar** las variables si quieres:

```javascript
const { nombre: alias } = persona;
console.log(alias); // "Carlos" (no "nombre")
```

---
---

## Variables globales

Cuando declaras una variable con `var` en el ámbito global (fuera de cualquier función o bloque), se agrega a un objeto especial llamado `window` en el navegador:

```javascript
var global1 = "soy global";
let global2 = "también global";

console.log(window.global1); // "soy global"
console.log(window.global2); // undefined
```

`var` se agrega a `window`, pero `let` y `const` no. Esto es otra razón para evitar `var`: puede contaminar el espacio global accidentalmente.

**En Node.js** (servidor), no existe `window`, pero el principio es similar: las variables globales pueden causar conflictos entre diferentes partes de tu código.

---
---

## Preguntas

**1. ¿Cuál es la diferencia principal entre `let` y `var`?**

- a) `let` es más rápido que `var`
- b) `let` tiene alcance de bloque, `var` tiene alcance de función
- c) `var` permite reasignación, `let` no
- d) No hay diferencia

**2. ¿Qué imprime?**

```javascript
const arr = [1, 2, 3];
const [a, b] = arr;
console.log(b);
```

- a) `1`
- b) `2`
- c) `[1, 2]`
- d) `undefined`

**3. ¿Qué error se produce?**

```javascript
const x = 5;
x = 10;
```

- a) SyntaxError
- b) ReferenceError
- c) TypeError
- d) Ninguno, funciona correctamente

**4. ¿Qué valor tiene `window.global1`?**

```javascript
var global1 = "hola";
let global2 = "mundo";
```

- a) `"hola"`
- b) `"mundo"`
- c) `undefined`
- d) `ReferenceError`

**5. ¿Cómo se desestructura un objeto?**

- a) `const { a, b } = obj;`
- b) `const [a, b] = obj;`
- c) `const (a, b) = obj;`
- d) `const { a: b } = obj;`

---
