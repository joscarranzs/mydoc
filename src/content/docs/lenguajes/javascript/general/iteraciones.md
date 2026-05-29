---
title: Iteraciones
description: for...of, for...in, forEach.
module: lenguajes/javascript
submodule: general
order: 12
---

Al completar esta guía podrás:

- Recorrer arreglos con `for...of`
- Iterar sobre propiedades de objetos con `for...in`
- Usar `forEach` para ejecutar una función por cada elemento
- Elegir el método de iteración adecuado según el caso

---

## for...of

`for...of` recorre los **valores** de un objeto iterable (arreglos, strings, Sets, Maps).

```javascript
let frutas = ["manzana", "banana", "naranja"];

for (let fruta of frutas) {
  console.log(fruta);
}
// "manzana", "banana", "naranja"
```

También funciona con strings:

```javascript
let palabra = "Hola";

for (let letra of palabra) {
  console.log(letra);
}
// "H", "o", "l", "a"
```

Con arreglos de objetos:

```javascript
let usuarios = [
  { nombre: "Ana", edad: 30 },
  { nombre: "Luis", edad: 25 }
];

for (let usuario of usuarios) {
  console.log(`${usuario.nombre} tiene ${usuario.edad} años`);
}
// "Ana tiene 30 años"
// "Luis tiene 25 años"
```

> **Regla:** `for...of` es la forma más limpia de recorrer arreglos cuando solo necesitas los valores, no los índices.

---

## for...in

`for...in` recorre las **claves** (propiedades) de un objeto. No se recomienda para arreglos.

```javascript
let usuario = {
  nombre: "Ana",
  edad: 30,
  ciudad: "México"
};

for (let clave in usuario) {
  console.log(`${clave}: ${usuario[clave]}`);
}
// "nombre: Ana"
// "edad: 30"
// "ciudad: México"
```

### En arreglos

`for...in` recorre los **índices**, no los valores:

```javascript
let colores = ["rojo", "verde", "azul"];

for (let i in colores) {
  console.log(i);  // "0", "1", "2" — son strings
}
```

> **Advertencia:** no uses `for...in` en arreglos. Recorre también propiedades heredadas y devuelve los índices como strings. Usa `for...of` o `for` clásico.

### Propiedades heredadas

`for...in` recorre también propiedades del prototipo. Usa `hasOwnProperty()` para filtrar:

```javascript
for (let clave in objeto) {
  if (objeto.hasOwnProperty(clave)) {
    console.log(clave, objeto[clave]);
  }
}
```

---

## forEach

`forEach` es un método de los arreglos que ejecuta una función por cada elemento.

```javascript
let numeros = [10, 20, 30];

numeros.forEach(function(numero) {
  console.log(numero);
});
// 10, 20, 30
```

Con función flecha:

```javascript
numeros.forEach(numero => console.log(numero));
```

### Parámetros

`forEach` pasa tres argumentos a la función: valor actual, índice y el arreglo completo.

```javascript
let frutas = ["manzana", "banana", "naranja"];

frutas.forEach((fruta, indice, arreglo) => {
  console.log(`${indice}: ${fruta} (${arreglo.length} elementos)`);
});
// "0: manzana (3 elementos)"
// "1: banana (3 elementos)"
// "2: naranja (3 elementos)"
```

> **Regla:** `forEach` no retorna nada (undefined). Si necesitas transformar el arreglo, usa `map`. Si necesitas filtrar, usa `filter`.

---

## Limitaciones de forEach

### No puedes usar break ni continue

```javascript
let numeros = [1, 2, 3, 4, 5];

// Esto no funciona — error de sintaxis
// numeros.forEach(n => {
//   if (n === 3) break;
//   console.log(n);
// });

// Alternativa con for...of
for (let n of numeros) {
  if (n === 3) break;
  console.log(n);
}
// 1, 2
```

### No puedes usar await directamente

```javascript
// Esto no espera — la función async se ejecuta pero forEach no espera
// numeros.forEach(async n => { ... });

// Alternativa con for...of
for (let n of numeros) {
  await procesar(n);
}
```

### No retorna un nuevo arreglo

```javascript
let dobles = numeros.forEach(n => n * 2);
console.log(dobles);  // undefined
```

---

## for...of vs forEach

| Característica | for...of | forEach |
|---|---|---|
| Acceso a índice | Manual (con entries) | Disponible como segundo parámetro |
| break/continue | Sí | No |
| await | Sí | No |
| Valor de retorno | undefined | undefined |
| Legibilidad | Declarativo | Funcional |

`for...of` con índice usando `entries()`:

```javascript
let colores = ["rojo", "verde", "azul"];

for (let [indice, color] of colores.entries()) {
  console.log(`${indice}: ${color}`);
}
// "0: rojo", "1: verde", "2: azul"
```

---

## Map y Set con for...of

```javascript
let mapa = new Map([
  ["a", 1],
  ["b", 2]
]);

for (let [clave, valor] of mapa) {
  console.log(clave, valor);
}

let conjunto = new Set(["x", "y", "z"]);

for (let valor of conjunto) {
  console.log(valor);
}
```

---

## Iterar sobre objetos

Para objetos, usa `Object.keys()`, `Object.values()` o `Object.entries()` combinados con `for...of`.

```javascript
let usuario = {
  nombre: "Ana",
  edad: 30,
  ciudad: "México"
};

// Claves
for (let clave of Object.keys(usuario)) {
  console.log(clave);
}

// Valores
for (let valor of Object.values(usuario)) {
  console.log(valor);
}

// Pares [clave, valor]
for (let [clave, valor] of Object.entries(usuario)) {
  console.log(`${clave}: ${valor}`);
}
```

---

## Comparación de métodos de iteración

| Método | ¿Qué recorre? | break/continue | Retorna | Uso principal |
|---|---|---|---|---|
| `for` clásico | Índices numéricos | Sí | — | Control total sobre el índice |
| `for...of` | Valores | Sí | — | Arreglos e iterables |
| `for...in` | Claves (strings) | Sí | — | Objetos (con precaución) |
| `forEach` | Valores | No | undefined | Operaciones por elemento |
| `map` | Valores | No | Nuevo arreglo | Transformar elementos |
| `filter` | Valores | No | Nuevo arreglo | Filtrar elementos |

---

## Resumen

- `for...of` recorre **valores** de iterables — es la opción más versátil
- `for...in` recorre **claves** de objetos — no lo uses en arreglos
- `forEach` ejecuta una función por cada elemento — no soporta `break` ni `await`
- Para objetos, combina `Object.keys()`/`values()`/`entries()` con `for...of`
- `for...of` con `.entries()` da acceso al índice
- Elige el método según lo que necesites: índice, valor, break, o transformación

---

## Ejercicio

Escribe una función que reciba un objeto con calificaciones de estudiantes (nombre: nota) y devuelva un arreglo con los nombres de los estudiantes aprobados (nota >= 60).

**Instrucciones paso a paso:**

1. Crea una función `aprobados(calificaciones)`
2. Usa `Object.entries()` para obtener los pares [nombre, nota]
3. Usa un arreglo vacío para los resultados
4. Itera con `for...of` sobre las entradas
5. Si la nota es >= 60, agrega el nombre al arreglo
6. Retorna el arreglo con los nombres aprobados
7. Prueba con: `{ Ana: 85, Luis: 42, Carlos: 73, Sofía: 58 }`

<details>
<summary>Mostrar solución</summary>

```javascript
function aprobados(calificaciones) {
  let resultados = [];

  for (let [nombre, nota] of Object.entries(calificaciones)) {
    if (nota >= 60) {
      resultados.push(nombre);
    }
  }

  return resultados;
}

let calificaciones = {
  Ana: 85,
  Luis: 42,
  Carlos: 73,
  Sofía: 58
};

console.log(aprobados(calificaciones));
// ["Ana", "Carlos"]
```

**Con filter:**

```javascript
function aprobados(calificaciones) {
  return Object.entries(calificaciones)
    .filter(([nombre, nota]) => nota >= 60)
    .map(([nombre]) => nombre);
}
```

</details>
