---
title: Arrays
description: Listas ordenadas de valores.
module: lenguajes/javascript
submodule: general
order: 13
---

Al completar esta guía podrás:

- Crear y modificar arreglos
- Agregar y eliminar elementos en ambas puntas
- Usar los métodos principales de transformación
- Diferenciar métodos que mutan de los que no

---

## Creación

```javascript
// Literal (recomendado)
let frutas = ["manzana", "banana", "naranja"];

// Con constructor (evitar)
let numeros = new Array(1, 2, 3);

// Arreglo vacío
let vacio = [];

// Arreglo con tamaño fijo
let tamaño = new Array(5);
console.log(tamaño.length);  // 5
```

> **Convención:** usa siempre la notación literal `[]`. El constructor `new Array()` tiene comportamientos confusos: `new Array(5)` crea un arreglo vacío de longitud 5, no un arreglo con un solo elemento 5.

---

## Acceso y modificación

Los índices empiezan en 0.

```javascript
let colores = ["rojo", "verde", "azul"];

console.log(colores[0]);  // "rojo"
console.log(colores[2]);  // "azul"
console.log(colores[5]);  // undefined — fuera de rango

// Modificar un elemento
colores[1] = "amarillo";
console.log(colores);  // ["rojo", "amarillo", "azul"]
```

---

## Propiedad length

`length` indica la cantidad de elementos. También se puede modificar.

```javascript
let arr = [1, 2, 3, 4, 5];

console.log(arr.length);  // 5

// Truncar
arr.length = 3;
console.log(arr);  // [1, 2, 3]

// Vaciar
arr.length = 0;
console.log(arr);  // []
```

> **Regla:** modificar `length` es la forma más rápida de vaciar un arreglo, pero solo úsalo cuando tengas certeza de que nadie más tiene referencia al arreglo.

Último elemento:

```javascript
let arr = [10, 20, 30];
console.log(arr[arr.length - 1]);  // 30
```

---

## Agregar y eliminar elementos

### push — Agrega al final

```javascript
let frutas = ["manzana"];
frutas.push("banana");
frutas.push("naranja", "pera");
console.log(frutas);  // ["manzana", "banana", "naranja", "pera"]
```

### pop — Elimina del final

```javascript
let ultimo = frutas.pop();
console.log(ultimo);   // "pera"
console.log(frutas);   // ["manzana", "banana", "naranja"]
```

### unshift — Agrega al inicio

```javascript
frutas.unshift("fresa");
console.log(frutas);  // ["fresa", "manzana", "banana", "naranja"]
```

### shift — Elimina del inicio

```javascript
let primero = frutas.shift();
console.log(primero);  // "fresa"
console.log(frutas);   // ["manzana", "banana", "naranja"]
```

> **Rendimiento:** `push` y `pop` son O(1). `shift` y `unshift` son O(n) porque reindexan todo el arreglo. Para colas frecuentes, considera usar una estructura de datos diferente.

---

## Buscar elementos

### indexOf y lastIndexOf

```javascript
let numeros = [10, 20, 30, 20, 40];

console.log(numeros.indexOf(20));     // 1 — primera aparición
console.log(numeros.lastIndexOf(20)); // 3 — última aparición
console.log(numeros.indexOf(50));     // -1 — no existe
```

### includes

```javascript
console.log(numeros.includes(30));  // true
console.log(numeros.includes(50));  // false
```

### find y findIndex

```javascript
let usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
  { id: 3, nombre: "Ana" }
];

let usuario = usuarios.find(u => u.id === 2);
console.log(usuario);  // { id: 2, nombre: "Luis" }

let indice = usuarios.findIndex(u => u.nombre === "Ana");
console.log(indice);  // 0 — primera coincidencia
```

---

## Transformar arreglos

### map

Crea un nuevo arreglo aplicando una función a cada elemento.

```javascript
let numeros = [1, 2, 3];
let dobles = numeros.map(n => n * 2);

console.log(dobles);   // [2, 4, 6]
console.log(numeros);  // [1, 2, 3] — no muta el original
```

### filter

Crea un nuevo arreglo con los elementos que cumplen una condición.

```javascript
let edades = [15, 22, 18, 30, 12];
let mayores = edades.filter(e => e >= 18);

console.log(mayores);  // [22, 18, 30]
```

### reduce

Reduce el arreglo a un solo valor acumulando resultados.

```javascript
let numeros = [10, 20, 30];

let suma = numeros.reduce((acumulador, actual) => {
  return acumulador + actual;
}, 0);

console.log(suma);  // 60
```

`reduce` recibe dos parámetros: la función reductora y el valor inicial. La función recibe el acumulador y el valor actual.

```javascript
// Sin valor inicial — usa el primer elemento como acumulador
let suma2 = numeros.reduce((acc, n) => acc + n);
console.log(suma2);  // 60
```

> **Regla:** siempre proporciona un valor inicial a `reduce`. Sin valor inicial, un arreglo vacío lanza un error.

### sort

Ordena el arreglo **in-place** y retorna el arreglo ordenado.

```javascript
let numeros = [30, 1, 20, 5];

// Orden por defecto: convierte a string
numeros.sort();
console.log(numeros);  // [1, 20, 30, 5] — orden lexicográfico

// Orden numérico
numeros.sort((a, b) => a - b);
console.log(numeros);  // [1, 5, 20, 30]

// Orden descendente
numeros.sort((a, b) => b - a);
console.log(numeros);  // [30, 20, 5, 1]
```

### reverse

Invierte el orden del arreglo **in-place**.

```javascript
let letras = ["a", "b", "c"];
letras.reverse();
console.log(letras);  // ["c", "b", "a"]
```

---

## Métodos que mutan vs no mutan

| Método | ¿Muta? | Retorna |
|---|---|---|
| `push` | Sí | Nueva longitud |
| `pop` | Sí | Elemento eliminado |
| `shift` | Sí | Elemento eliminado |
| `unshift` | Sí | Nueva longitud |
| `sort` | Sí | Arreglo modificado |
| `reverse` | Sí | Arreglo modificado |
| `splice` | Sí | Elementos eliminados |
| `map` | No | Nuevo arreglo |
| `filter` | No | Nuevo arreglo |
| `reduce` | No | Valor acumulado |
| `slice` | No | Nuevo arreglo |
| `concat` | No | Nuevo arreglo |
| `toSorted` | No | Nuevo arreglo |
| `toReversed` | No | Nuevo arreglo |

---

## slice y splice

### slice — Extrae sin mutar

```javascript
let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(1, 3));  // ["b", "c"] — del índice 1 al 2
console.log(arr.slice(2));     // ["c", "d", "e"] — del índice 2 en adelante
console.log(arr.slice(-2));    // ["d", "e"] — últimos 2
console.log(arr);              // ["a", "b", "c", "d", "e"] — intacto
```

### splice — Agrega, elimina o reemplaza (muta)

```javascript
let arr = ["a", "b", "c", "d"];

// Eliminar 2 elementos desde índice 1
let eliminados = arr.splice(1, 2);
console.log(arr);         // ["a", "d"]
console.log(eliminados);  // ["b", "c"]

// Insertar sin eliminar
arr.splice(1, 0, "x", "y");
console.log(arr);  // ["a", "x", "y", "d"]

// Reemplazar
arr.splice(1, 2, "m", "n");
console.log(arr);  // ["a", "m", "n", "d"]
```

---

## spread y destructuring

### Spread (...)

Crea una copia superficial o combina arreglos.

```javascript
let original = [1, 2, 3];
let copia = [...original];

console.log(copia);      // [1, 2, 3]
console.log(copia === original);  // false — son distintos

let combinado = [...original, 4, 5];
console.log(combinado);  // [1, 2, 3, 4, 5]
```

### Destructuring

Extrae valores en variables individuales.

```javascript
let colores = ["rojo", "verde", "azul"];

let [primero, segundo] = colores;
console.log(primero);  // "rojo"
console.log(segundo);  // "verde"

// Ignorar elementos
let [a, , b] = colores;
console.log(a);  // "rojo"
console.log(b);  // "azul"

// Valor por defecto
let [x, y, z, w = "default"] = colores;
console.log(w);  // "default"
```

---

## some, every, includes

### some

Verifica si **al menos un** elemento cumple la condición.

```javascript
let numeros = [1, 2, 3, 4, 5];

console.log(numeros.some(n => n > 4));   // true — hay mayores a 4
console.log(numeros.some(n => n > 10));  // false
```

### every

Verifica si **todos** los elementos cumplen la condición.

```javascript
console.log(numeros.every(n => n > 0));   // true — todos son positivos
console.log(numeros.every(n => n < 4));   // false
```

---

## flat y flatMap

### flat

Aplana arreglos anidados hasta la profundidad especificada.

```javascript
let anidado = [1, [2, 3], [4, [5, 6]]];

console.log(anidado.flat());      // [1, 2, 3, 4, [5, 6]] — profundidad 1
console.log(anidado.flat(2));     // [1, 2, 3, 4, 5, 6] — profundidad 2
console.log(anidado.flat(Infinity));  // [1, 2, 3, 4, 5, 6] — toda profundidad
```

### flatMap

Equivalente a `map` seguido de `flat(1)`.

```javascript
let frases = ["hola mundo", "adios sol"];

let palabras = frases.flatMap(frase => frase.split(" "));
console.log(palabras);  // ["hola", "mundo", "adios", "sol"]
```

---

## Resumen

| Operación | Método |
|---|---|
| Agregar al final | `push()` |
| Quitar del final | `pop()` |
| Agregar al inicio | `unshift()` |
| Quitar del inicio | `shift()` |
| Buscar valor | `includes()`, `indexOf()` |
| Buscar objeto | `find()`, `findIndex()` |
| Transformar | `map()` |
| Filtrar | `filter()` |
| Acumular | `reduce()` |
| Ordenar | `sort()` |
| Extraer | `slice()`, `splice()` |
| Verificar | `some()`, `every()` |
| Aplanar | `flat()`, `flatMap()` |

- Los índices empiezan en 0
- `push`/`pop` son eficientes; `shift`/`unshift` mueven todos los elementos
- Muchos métodos mutan el arreglo original — verifica la documentación
- Usa spread `[...arr]` para copiar sin mutar
- `sort()` ordena como strings por defecto — pasa una función de comparación

---

## Ejercicio

Escribe una función que reciba un arreglo de números y devuelva un nuevo arreglo con solo los números pares, elevados al cuadrado, ordenados de mayor a menor.

**Instrucciones paso a paso:**

1. Crea una función `procesarNumeros(numeros)`
2. Filtra los números pares con `filter(n => n % 2 === 0)`
3. Eleva cada par al cuadrado con `map(n => n * n)`
4. Ordena de mayor a menor con `sort((a, b) => b - a)`
5. Retorna el resultado
6. Prueba con: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`

<details>
<summary>Mostrar solución</summary>

```javascript
function procesarNumeros(numeros) {
  return numeros
    .filter(n => n % 2 === 0)    // [2, 4, 6, 8, 10]
    .map(n => n * n)              // [4, 16, 36, 64, 100]
    .sort((a, b) => b - a);       // [100, 64, 36, 16, 4]
}

console.log(procesarNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// [100, 64, 36, 16, 4]
```

</details>
