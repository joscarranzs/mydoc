---
title: Funciones
description: Declaración, parámetros, retorno.
module: lenguajes/javascript
submodule: general
order: 17
---

Al completar esta guía podrás:

- Declarar funciones con diferentes sintaxis
- Usar parámetros, valores por defecto y rest parameters
- Retornar valores y entender cuándo no se retorna nada
- Asignar funciones a variables y pasarlas como argumentos

---

## Declaración de funciones

### Function declaration

```javascript
function sumar(a, b) {
  return a + b;
}
```

Las function declarations tienen **hoisting**: pueden llamarse antes de su definición.

```javascript
console.log(sumar(2, 3));  // 5 — funciona por hoisting

function sumar(a, b) {
  return a + b;
}
```

### Function expression

```javascript
const multiplicar = function(a, b) {
  return a * b;
};

console.log(multiplicar(4, 5));  // 20
```

No tiene hoisting. No puede llamarse antes de la asignación.

### Arrow function

```javascript
const dividir = (a, b) => a / b;

// Con bloque
const calcular = (a, b) => {
  let resultado = a + b;
  return resultado * 2;
};
```

> **Regla:** usa arrow functions para callbacks y funciones cortas. Usa function declaration para funciones nombradas de nivel superior.

---

## Parámetros

### Parámetros por defecto

```javascript
function saludar(nombre = "Invitado") {
  console.log(`Hola, ${nombre}`);
}

saludar("Ana");    // "Hola, Ana"
saludar();         // "Hola, Invitado"
```

### Rest parameters

Agrupa argumentos sobrantes en un arreglo.

```javascript
function sumarTodos(...numeros) {
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
}

console.log(sumarTodos(1, 2, 3, 4, 5));  // 15
```

### Parámetros con destructuring

```javascript
function mostrarUsuario({ nombre, edad, ciudad = "Desconocida" }) {
  console.log(`${nombre}, ${edad} años, ${ciudad}`);
}

mostrarUsuario({ nombre: "Ana", edad: 30 });
// "Ana, 30 años, Desconocida"
```

---

## Retorno

Toda función retorna un valor. Si no hay `return`, retorna `undefined`.

```javascript
function conReturn() {
  return 42;
}

function sinReturn() {
  let x = 10;
}

console.log(conReturn());  // 42
console.log(sinReturn());  // undefined
```

El `return` detiene la ejecución inmediatamente:

```javascript
function validar(edad) {
  if (edad < 0) {
    return "Edad inválida";
  }
  if (edad < 18) {
    return "Menor de edad";
  }
  return "Mayor de edad";
}
```

---

## Arrow functions en detalle

### Sintaxis compacta

```javascript
// Sin parámetros
const hola = () => "Hola";

// Un parámetro — sin paréntesis
const cuadrado = x => x * x;

// Múltiples parámetros
const suma = (a, b) => a + b;

// Con cuerpo de bloque — requiere return explícito
const procesar = (a, b) => {
  let resultado = a * b;
  return resultado / 2;
};
```

### this léxico

Las arrow functions no tienen su propio `this`. Heredan el `this` del contexto donde se definen.

```javascript
let usuario = {
  nombre: "Ana",
  saludar: function() {
    setTimeout(() => {
      console.log(`Hola, soy ${this.nombre}`);  // this hereda de saludar
    }, 1000);
  }
};

usuario.saludar();  // "Hola, soy Ana"
```

Con function expression regular, `this` dentro de `setTimeout` sería `undefined` (o window).

---

## Funciones como valores

Las funciones son valores como cualquier otro. Pueden asignarse, pasarse y retornarse.

```javascript
function operar(a, b, callback) {
  return callback(a, b);
}

function sumar(x, y) { return x + y; }
function multiplicar(x, y) { return x * y; }

console.log(operar(5, 3, sumar));        // 8
console.log(operar(5, 3, multiplicar));  // 15
console.log(operar(5, 3, (a, b) => a - b));  // 2
```

---

## Parámetros opcionales

JavaScript no valida la cantidad de parámetros. Los que sobran se ignoran; los que faltan son `undefined`.

```javascript
function mostrar(a, b, c) {
  console.log(a, b, c);
}

mostrar(1, 2, 3);       // 1 2 3
mostrar(1, 2);          // 1 2 undefined
mostrar(1);             // 1 undefined undefined
mostrar();              // undefined undefined undefined
```

---

## arguments

Dentro de una función regular (no arrow), existe el objeto `arguments` con todos los argumentos pasados.

```javascript
function concatenar() {
  return Array.from(arguments).join(" ");
}

console.log(concatenar("Hola", "Mundo", "desde", "JS"));
// "Hola Mundo desde JS"
```

> **Regla:** prefiere rest parameters `...args` sobre `arguments`. Es más explícito y funciona en arrow functions.

---

## Resumen

| Tipo | Sintaxis | Hoisting | this propio |
|---|---|---|---|
| Function declaration | `function foo() {}` | Sí | Sí |
| Function expression | `const foo = function() {}` | No | Sí |
| Arrow function | `const foo = () => {}` | No | No (heredado) |

- Las funciones son valores y pueden pasarse como argumentos
- Parámetros por defecto evitan `undefined`
- Rest parameters `...args` capturan múltiples argumentos
- Arrow functions no tienen `arguments` ni `this` propio
- Sin `return` explícito, la función retorna `undefined`

---

## Ejercicio

Escribe una función que reciba un arreglo de números y una función de criterio, y retorne un nuevo arreglo con los elementos que cumplen el criterio.

**Instrucciones paso a paso:**

1. Crea una función `filtrar(arr, criterio)`
2. Inicializa un arreglo vacío para los resultados
3. Itera sobre el arreglo
4. Si `criterio(elemento)` es `true`, agrégalo a los resultados
5. Retorna el arreglo filtrado
6. Prueba filtrando números pares y números mayores a 10

<details>
<summary>Mostrar solución</summary>

```javascript
function filtrar(arr, criterio) {
  let resultado = [];

  for (let elemento of arr) {
    if (criterio(elemento)) {
      resultado.push(elemento);
    }
  }

  return resultado;
}

let numeros = [5, 12, 8, 15, 3, 20];

let pares = filtrar(numeros, n => n % 2 === 0);
console.log(pares);  // [12, 8, 20]

let mayores = filtrar(numeros, n => n > 10);
console.log(mayores);  // [12, 15, 20]
```

</details>
