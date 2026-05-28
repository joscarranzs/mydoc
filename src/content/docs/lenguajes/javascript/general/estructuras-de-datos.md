---
title: Estructuras de datos
description: Arrays, objetos, mapas y conjuntos en JavaScript.
module: lenguajes/javascript
submodule: general
order: 8
---
---

## Arrays — colecciones ordenadas

Un array es una **lista ordenada** de valores. Cada valor tiene un índice (posición) que empieza en 0.

### Crear un array

```javascript
const numeros = [1, 2, 3, 4, 5];
//               0  1  2  3  4  ← índices
```

También puedes crear arrays vacíos o con el constructor:

```javascript
const vacio = [];
const tres = new Array(3); // [empty × 3]
```

### Acceder a elementos

```javascript
const frutas = ["manzana", "plátano", "naranja"];

frutas[0];       // "manzana" (primer elemento)
frutas[1];       // "plátano"
frutas[2];       // "naranja"
frutas.at(-1);   // "naranja" (último elemento — método .at())
frutas.length;   // 3 (cantidad de elementos)
```

**Nota sobre `.at()`:** permite usar índices negativos para acceder desde el final. `arr.at(-1)` es lo mismo que `arr[arr.length - 1]`.

### Modificar arrays

```javascript
const arr = [1, 2, 3];

// Agregar elementos
arr.push(4);         // Agrega al final: [1, 2, 3, 4]
arr.unshift(0);      // Agrega al inicio: [0, 1, 2, 3, 4]

// Eliminar elementos
arr.pop();           // Elimina del final: [0, 1, 2, 3]
arr.shift();         // Elimina del inicio: [1, 2, 3]

// Eliminar/insertar en posición específica
arr.splice(1, 1);    // Elimina 1 elemento desde índice 1: [1, 3]
arr.splice(1, 0, 2); // Inserta 2 en índice 1: [1, 2, 3]
```

### Métodos de iteración

Estos métodos ejecutan una función **una vez por cada elemento** del array:

```javascript
const nums = [1, 2, 3, 4, 5];
```

**`.forEach()` — ejecutar algo por cada elemento (sin retorno):**

```javascript
nums.forEach((numero, indice) => {
  console.log(`${indice}: ${numero}`);
});
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// 4: 5
```

**`.map()` — transformar cada elemento y crear un nuevo array:**

```javascript
const dobles = nums.map(n => n * 2);
// [2, 4, 6, 8, 10]

const nombres = nums.map(n => `Número ${n}`);
// ["Número 1", "Número 2", ...]
```

**`.filter()` — seleccionar elementos que cumplan una condición:**

```javascript
const pares = nums.filter(n => n % 2 === 0);
// [2, 4]

const mayores = nums.filter(n => n > 3);
// [4, 5]
```

**`.find()` — encontrar el primer elemento que cumpla la condición:**

```javascript
const primero = nums.find(n => n > 3);
// 4 (retorna el valor, no un array)
```

**`.findIndex()` — encontrar el índice del primer elemento que cumpla:**

```javascript
const indice = nums.findIndex(n => n > 3);
// 3
```

**`.some()` y `.every()` — verificar si algún/todos los elementos cumplen:**

```javascript
nums.some(n => n > 4);   // true (al menos uno es mayor que 4)
nums.every(n => n > 0);  // true (todos son mayores que 0)
```

**`.includes()` — verificar si un elemento existe:**

```javascript
nums.includes(3);  // true
nums.includes(6);  // false
```

### `.reduce()` — acumular valores en uno solo

```javascript
const suma = nums.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);
// 15 (1+2+3+4+5)
```

**Explicación:**
- `acumulador` — el resultado que se va construyendo
- `numero` — el elemento actual
- `0` — valor inicial del acumulador

### `.sort()` — ordenar

```javascript
const desorden = [3, 1, 4, 1, 5, 9];

// Orden numérico ascendente (¡cuidado! sort() ordena como strings por defecto)
desorden.sort((a, b) => a - b);
// [1, 1, 3, 4, 5, 9]

// Orden descendente
desorden.sort((a, b) => b - a);
// [9, 5, 4, 3, 1, 1]
```

### Otros métodos útiles

```javascript
// .slice() — copia parcial (no modifica el original)
const sub = nums.slice(1, 3); // [2, 3]

// .flat() — aplana arrays anidados
const anidado = [1, [2, 3], [4, 5]];
anidado.flat(); // [1, 2, 3, 4, 5]

// .join() — convierte a string
nums.join(", "); // "1, 2, 3, 4, 5"

// .concat() — unir arrays
const a = [1, 2];
const b = [3, 4];
a.concat(b); // [1, 2, 3, 4]
```

---
---

## Map — colección de pares clave-valor mejorada

`Map` es como un objeto, pero con ventajas: acepta **cualquier tipo** como clave (no solo strings) y **mantiene el orden** de inserción.

```javascript
const mapa = new Map();
mapa.set("nombre", "Carlos");   // Clave string
mapa.set(42, "respuesta");      // Clave number
mapa.set(true, "activo");       // Clave boolean
```

**Acceder y verificar:**

```javascript
mapa.get("nombre");   // "Carlos"
mapa.has(42);         // true
mapa.size;            // 3
```

**Eliminar:**

```javascript
mapa.delete("nombre");
mapa.clear(); // Elimina todo
```

**Iterar:**

```javascript
for (const [clave, valor] of mapa) {
  console.log(`${clave}: ${valor}`);
}
```

**Convertir:**

```javascript
// De array a Map
const deArray = new Map([["a", 1], ["b", 2]]);

// De Map a objeto
const aObjeto = Object.fromEntries(mapa);
```

---
---

## Preguntas

**1. ¿Qué retorna `nums.filter(n => n > 3)` en `[1, 2, 3, 4, 5]`?**

- a) `4`
- b) `[4, 5]`
- c) `[1, 2, 3]`
- d) `true`

**2. ¿Cómo se accede al último elemento de un array?**

- a) `arr[arr.length]`
- b) `arr.at(-1)`
- c) `arr.last()`
- d) `arr[-1]`

**3. ¿Qué hace `Object.keys()`?**

- a) Retorna los valores del objeto
- b) Retorna las claves del objeto como array
- c) Retorna un array de pares [clave, valor]
- d) Elimina el objeto

**4. ¿Cómo se eliminan duplicados de un array?**

- a) `arr.unique()`
- b) `[...new Set(arr)]`
- c) `arr.dedup()`
- d) `arr.filter((v, i) => arr.indexOf(v) === i)`

**5. ¿Qué diferencia hay entre `Map` y un objeto regular?**

- a) `Map` solo acepta strings como claves
- b) `Map` acepta cualquier tipo como clave y mantiene el orden
- c) Los objetos son más rápidos siempre
- d) No hay diferencia

---
