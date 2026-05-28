---
title: Estructuras avanzadas
description: WeakMap, WeakSet, iteradores y generadores en JavaScript.
module: lenguajes/javascript
submodule: general
order: 9
---
---

## WeakMap — mapas con garbage collection

Un `WeakMap` es como un `Map`, pero con dos restricciones importantes:

1. Las claves **deben ser objetos** (no strings, numbers, ni booleans)
2. No se puede iterar sobre él

**¿Por qué existe?** Porque permite al motor de JavaScript **eliminar** automáticamente las entradas cuando el objeto clave ya no se usa en ningún lugar del programa (garbage collection).

```javascript
const weakMap = new WeakMap();

let obj = { nombre: "data" };
weakMap.set(obj, "valor asociado");

console.log(weakMap.get(obj)); // "valor asociado"
console.log(weakMap.has(obj)); // true

// Cuando el objeto se elimina, la entrada se limpia automáticamente
obj = null;
// El garbage collector elimina la entrada del WeakMap
```

### Uso práctico: datos privados en clases

Antes de que JavaScript tuviera propiedades privadas (`#`), `WeakMap` era la forma estándar de guardar datos privados:

```javascript
const datosPrivados = new WeakMap();

class Usuario {
  constructor(nombre, password) {
    this.nombre = nombre;
    // Guardar password en WeakMap — solo accesible desde esta clase
    datosPrivados.set(this, { password });
  }

  verificarPassword(passwordIngresado) {
    return datosPrivados.get(this).password === passwordIngresado;
  }
}

const usuario = new Usuario("Carlos", "secreto123");
console.log(usuario.nombre); // "Carlos"
console.log(usuario.verificarPassword("secreto123")); // true
// console.log(datosPrivados.get(usuario)); // { password: "secreto123" }
```

**Ventaja sobre `#`:** `WeakMap` permite que los datos se limpien automáticamente cuando el objeto se destruye, liberando memoria.

---
---

## Iteradores personalizados

JavaScript te permite crear objetos que se pueden usar con `for...of` y spread (`...`). Para esto, el objeto debe tener un método `[Symbol.iterator]()`.

### Crear un iterable

```javascript
class Rango {
  constructor(inicio, fin) {
    this.inicio = inicio;
    this.fin = fin;
  }

  [Symbol.iterator]() {
    let actual = this.inicio;
    const fin = this.fin;

    return {
      next() {
        if (actual <= fin) {
          return { value: actual++, done: false };
        }
        return { done: true };
      }
    };
  }
}
```

**Explicación paso a paso:**

1. `[Symbol.iterator]()` — es un método especial que JavaScript reconoce
2. Retorna un objeto con un método `next()`
3. `next()` retorna `{ value: ..., done: false }` mientras haya elementos
4. Cuando termina, retorna `{ done: true }`

### Usar el iterable

```javascript
const rango = new Rango(1, 5);

// Con for...of
for (const num of rango) {
  console.log(num); // 1, 2, 3, 4, 5
}

// Con spread
const numeros = [...new Rango(1, 5)]; // [1, 2, 3, 4, 5]
```

---
---

## Funciones de orden superior avanzadas

### Composición de funciones

La composición combina múltiples funciones en una sola. Se aplica de **derecha a izquierda**:

```javascript
const compose = (...fns) => (x) =>
  fns.reduceRight((acc, fn) => fn(acc), x);

const doblar = x => x * 2;
const sumarTres = x => x + 3;
const alCuadrado = x => x ** 2;

// Componer: primero doblar, luego sumar 3, luego elevar al cuadrado
const transformar = compose(alCuadrado, sumarTres, doblar);

transformar(3); // ((3 * 2) + 3)² = 81
```

**Paso a paso:**
1. `doblar(3)` → 6
2. `sumarTres(6)` → 9
3. `alCuadrado(9)` → 81

### Curry (aplicación parcial)

Currying convierte una función con múltiples argumentos en una serie de funciones que reciben uno a la vez:

```javascript
const curry = (fn) => {
  const arity = fn.length; // Cantidad de parámetros originales
  return function curried(...args) {
    if (args.length >= arity) {
      return fn(...args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
};

const sumar = curry((a, b, c) => a + b + c);

// Todas estas formas son válidas:
sumar(1)(2)(3);     // 6
sumar(1, 2)(3);     // 6
sumar(1)(2, 3);     // 6
sumar(1, 2, 3);     // 6
```

**¿Para qué sirve?** Para crear funciones especializadas a partir de una general:

```javascript
const sumar = curry((a, b) => a + b);
const sumar5 = sumar(5); // Función que suma 5 a cualquier cosa

sumar5(3);  // 8
sumar5(10); // 15
```

---
---

## Ejercicio

Crea un archivo `avanzadas.js` que:

1. Cree un generador `primos` que genere los primeros N números primos
2. Cree una clase `TablaMultiplicar` que sea iterable (con `[Symbol.iterator]`) y genere las tablas del 1 al N
3. Use `WeakMap` para almacenar datos privados de una clase `Producto` (precio y stock)
4. Use compose para crear una transformación: `doblar → sumar 3 → al cuadrado`
5. Use `for...of` con el generador y con la clase iterable

<details>
<summary>Ver solución</summary>

```javascript
'use strict';

// Generador de primos
function* primos(hasta) {
  const esPrimo = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  for (let i = 2; i <= hasta; i++) {
    if (esPrimo(i)) yield i;
  }
}

console.log("Primos:");
for (const p of primos(20)) {
  console.log(p);
}

// Clase iterable
class TablaMultiplicar {
  constructor(numero) {
    this.numero = numero;
  }

  *[Symbol.iterator]() {
    for (let i = 1; i <= 10; i++) {
      yield `${this.numero} x ${i} = ${this.numero * i}`;
    }
  }
}

console.log("\nTabla del 5:");
for (const linea of new TablaMultiplicar(5)) {
  console.log(linea);
}

// WeakMap para datos privados
const datos = new WeakMap();

class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    datos.set(this, { precio, stock });
  }

  get precio() { return datos.get(this).precio; }
  get stock() { return datos.get(this).stock; }

  descontar(cantidad) {
    const d = datos.get(this);
    if (d.stock >= cantidad) {
      d.stock -= cantidad;
      return true;
    }
    return false;
  }
}

const laptop = new Producto("Laptop", 999, 5);
console.log(`\n${laptop.nombre}: $${laptop.precio} (${laptop.stock} uds)`);

// Compose
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
const doblar = x => x * 2;
const sumarTres = x => x + 3;
const alCuadrado = x => x ** 2;

const transformar = compose(alCuadrado, sumarTres, doblar);
console.log(`\nTransformación de 3: ${transformar(3)}`); // ((3*2)+3)² = 81
```

</details>
