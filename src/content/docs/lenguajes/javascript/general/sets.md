---
title: Sets
description: Colecciones de valores únicos.
module: lenguajes/javascript
submodule: general
order: 15
---

Al completar esta guía podrás:

- Crear Sets y entender su propiedad de unicidad
- Agregar, eliminar y verificar elementos
- Recorrer un Set con for...of y forEach
- Usar Sets para eliminar duplicados de un arreglo

---

## Creación

Un `Set` es una colección de valores únicos. No permite duplicados.

```javascript
let conjunto = new Set();
console.log(conjunto);  // Set(0) {}

let conValores = new Set([1, 2, 3, 3, 2]);
console.log(conValores);  // Set(3) {1, 2, 3} — los duplicados se ignoran
```

Los elementos pueden ser de cualquier tipo:

```javascript
let mixto = new Set([1, "texto", true, { a: 1 }]);
```

---

## Propiedades y métodos principales

### size

Cantidad de elementos únicos.

```javascript
let conjunto = new Set([1, 2, 3, 3]);
console.log(conjunto.size);  // 3
```

### add

Agrega un elemento. Si ya existe, no hace nada.

```javascript
let colores = new Set();
colores.add("rojo");
colores.add("verde");
colores.add("rojo");  // ignorado — ya existe

console.log(colores);  // Set(2) {"rojo", "verde"}
```

`add` retorna el mismo Set, lo que permite encadenar:

```javascript
let conjunto = new Set();
conjunto.add("a").add("b").add("c");
```

### has

Verifica si un elemento existe.

```javascript
console.log(colores.has("rojo"));   // true
console.log(colores.has("azul"));   // false
```

### delete

Elimina un elemento. Retorna `true` si existía, `false` si no.

```javascript
let eliminado = colores.delete("verde");
console.log(eliminado);  // true

let noExistia = colores.delete("azul");
console.log(noExistia);  // false
```

### clear

Elimina todos los elementos.

```javascript
colores.clear();
console.log(colores.size);  // 0
```

---

## Iteración

### for...of

```javascript
let numeros = new Set([10, 20, 30]);

for (let n of numeros) {
  console.log(n);
}
// 10, 20, 30
```

### forEach

```javascript
numeros.forEach((valor, mismoValor, set) => {
  console.log(valor);
});
```

> **Nota:** `forEach` en Set recibe el mismo valor como primer y segundo argumento. La API es consistente con Map, donde el segundo argumento es la clave.

### keys, values, entries

Por compatibilidad con Map, Set tiene estos métodos:

```javascript
let conjunto = new Set(["a", "b", "c"]);

console.log(conjunto.keys());     // SetIterator {"a", "b", "c"}
console.log(conjunto.values());   // SetIterator {"a", "b", "c"}
console.log(conjunto.entries());  // SetIterator {["a","a"], ["b","b"], ["c","c"]}
```

---

## Eliminar duplicados de un arreglo

El caso de uso más común de Set.

```javascript
let conDuplicados = [1, 2, 3, 2, 1, 4, 5, 4];
let sinDuplicados = [...new Set(conDuplicados)];

console.log(sinDuplicados);  // [1, 2, 3, 4, 5]
```

```javascript
let nombres = ["Ana", "Luis", "Ana", "Sofía", "Luis"];
let unicos = [...new Set(nombres)];

console.log(unicos);  // ["Ana", "Luis", "Sofía"]
```

---

## Operaciones entre Sets

### Unión

```javascript
let a = new Set([1, 2, 3]);
let b = new Set([3, 4, 5]);

let union = new Set([...a, ...b]);
console.log(union);  // Set(5) {1, 2, 3, 4, 5}
```

### Intersección

```javascript
let interseccion = new Set([...a].filter(x => b.has(x)));
console.log(interseccion);  // Set(1) {3}
```

### Diferencia

```javascript
let diferencia = new Set([...a].filter(x => !b.has(x)));
console.log(diferencia);  // Set(2) {1, 2}
```

---

## Valores de referencia

Los Sets comparan por referencia para objetos, no por valor.

```javascript
let conjunto = new Set();

conjunto.add({ id: 1 });
conjunto.add({ id: 1 });  // Se agrega — son objetos distintos

console.log(conjunto.size);  // 2

let obj = { id: 2 };
conjunto.add(obj);
conjunto.add(obj);  // No se agrega — misma referencia

console.log(conjunto.size);  // 3
```

---

## Set vs Array

| Característica | Set | Array |
|---|---|---|
| Duplicados | No permite | Permite |
| Orden | Por inserción | Por índice |
| Acceso por índice | No (`has()`) | Sí (`[i]`) |
| Búsqueda | `has()` — O(1) | `includes()` — O(n) |
| Iteración | `for...of`, `forEach` | `for`, `for...of`, `forEach` |
| Métodos de transformación | No tiene map/filter | `map()`, `filter()`, `reduce()` |

> **Regla:** usa Set cuando necesites garantizar unicidad y no necesites acceso por índice. Para todo lo demás, usa Array.

---

## Resumen

| Método | Descripción |
|---|---|
| `new Set()` | Crea un Set vacío o desde un iterable |
| `add(valor)` | Agrega un valor (ignora si existe) |
| `has(valor)` | Verifica existencia |
| `delete(valor)` | Elimina un valor |
| `clear()` | Vacía el Set |
| `size` | Cantidad de elementos |

- Los Sets contienen valores únicos — los duplicados se ignoran
- La búsqueda con `has()` es más rápida que `includes()` en arreglos grandes
- Convierte un arreglo con duplicados a únicos con `[...new Set(arr)]`
- Los Sets iteran en orden de inserción
- Para objetos, la unicidad se basa en la referencia, no en el valor

---

## Ejercicio

Escribe una función que reciba dos arreglos y retorne un arreglo con los elementos que están en ambos (intersección), sin duplicados.

**Instrucciones paso a paso:**

1. Crea una función `interseccion(arr1, arr2)`
2. Convierte `arr1` en un Set para búsqueda eficiente
3. Filtra `arr2` quedándote solo con elementos que están en el Set
4. Convierte el resultado a Set y luego a arreglo para eliminar duplicados de `arr2`
5. Retorna el arreglo resultante
6. Prueba con: `[1, 2, 3, 4, 5]` y `[3, 4, 5, 6, 7]`

<details>
<summary>Mostrar solución</summary>

```javascript
function interseccion(arr1, arr2) {
  let conjunto1 = new Set(arr1);
  return [...new Set(arr2.filter(x => conjunto1.has(x)))];
}

console.log(interseccion([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
// [3, 4, 5]

console.log(interseccion([1, 2, 2, 3], [2, 2, 4]));
// [2]
```

**Versión más explícita:**

```javascript
function interseccion(arr1, arr2) {
  let unicos1 = new Set(arr1);
  let resultado = new Set();

  for (let elemento of arr2) {
    if (unicos1.has(elemento)) {
      resultado.add(elemento);
    }
  }

  return [...resultado];
}
```

</details>
