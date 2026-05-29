---
title: Maps
description: Mapas clave-valor mejorados.
module: lenguajes/javascript
submodule: general
order: 16
---

Al completar esta guía podrás:

- Crear Maps y usarlos como alternativa a objetos
- Establecer, obtener y eliminar entradas
- Usar objetos como claves
- Elegir entre Map y Object según el caso

---

## Creación

Un `Map` es una colección de pares clave-valor donde las claves pueden ser de cualquier tipo.

```javascript
let mapa = new Map();
console.log(mapa);  // Map(0) {}

let conValores = new Map([
  ["nombre", "Ana"],
  ["edad", 30],
  ["activo", true]
]);

console.log(conValores);  // Map(3) {"nombre" => "Ana", "edad" => 30, ...}
```

---

## Métodos principales

### set

Agrega o actualiza una entrada. Retorna el mismo Map, permitiendo encadenamiento.

```javascript
let mapa = new Map();

mapa.set("nombre", "Ana");
mapa.set("edad", 30);
mapa.set("nombre", "Sofía");  // Sobrescribe

console.log(mapa);  // Map(2) {"nombre" => "Sofía", "edad" => 30}

// Encadenamiento
mapa.set("a", 1).set("b", 2).set("c", 3);
```

### get

Obtiene el valor asociado a una clave. Retorna `undefined` si no existe.

```javascript
console.log(mapa.get("nombre"));  // "Sofía"
console.log(mapa.get("edad"));    // 30
console.log(mapa.get("pais"));    // undefined
```

### has

Verifica si una clave existe.

```javascript
console.log(mapa.has("nombre"));  // true
console.log(mapa.has("pais"));    // false
```

### delete

Elimina una entrada por su clave. Retorna `true` si existía.

```javascript
mapa.delete("edad");
console.log(mapa.has("edad"));  // false
```

### clear

Elimina todas las entradas.

```javascript
mapa.clear();
console.log(mapa.size);  // 0
```

### size

Cantidad de entradas (propiedad, no método).

```javascript
console.log(mapa.size);  // 0
```

---

## Claves de cualquier tipo

A diferencia de los objetos, las claves en Map pueden ser números, booleanos, objetos, funciones o incluso otros Maps.

```javascript
let mapa = new Map();

mapa.set(42, "número");
mapa.set(true, "booleano");
mapa.set({ id: 1 }, "objeto");
mapa.set(function() {}, "función");

console.log(mapa.get(42));  // "número"
```

### Objetos como claves

Esta es la ventaja más importante de Map sobre Object.

```javascript
let usuarios = new Map();
let ana = { id: 1, nombre: "Ana" };
let luis = { id: 2, nombre: "Luis" };

usuarios.set(ana, { saldo: 1000 });
usuarios.set(luis, { saldo: 500 });

console.log(usuarios.get(ana));  // { saldo: 1000 }

// Cada objeto es una clave única
let copia = { id: 1, nombre: "Ana" };
console.log(usuarios.get(copia));  // undefined — es otro objeto
```

---

## Iteración

Map es iterable directamente. Los métodos de iteración devuelven pares `[clave, valor]`.

### for...of

```javascript
let mapa = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);

for (let [clave, valor] of mapa) {
  console.log(`${clave}: ${valor}`);
}
// "a: 1", "b: 2", "c: 3"
```

### forEach

```javascript
mapa.forEach((valor, clave) => {
  console.log(`${clave}: ${valor}`);
});
```

> **Nota:** en `forEach` de Map, el primer argumento es el **valor**, el segundo es la **clave** (inverso a entries).

### keys, values, entries

```javascript
console.log([...mapa.keys()]);    // ["a", "b", "c"]
console.log([...mapa.values()]);  // [1, 2, 3]
console.log([...mapa.entries()]); // [["a", 1], ["b", 2], ["c", 3]]
```

---

## Map vs Object

| Característica | Map | Object |
|---|---|---|
| Claves | Cualquier tipo | Strings o Symbols |
| Orden | Orden de inserción | Orden de inserción (desde ES2015) |
| Iteración | Directa (`for...of`) | Indirecta (`Object.keys()`) |
| Tamaño | `.size` (propiedad) | `Object.keys().length` |
| Rendimiento | Mejor con muchas operaciones | Optimizado para estructuras simples |
| Herencia | No tiene prototipo | Hereda de Object.prototype |
| JSON | No serializa directamente | `JSON.stringify()` nativo |

> **Regla:** usa Map cuando necesites claves que no sean strings, cuando agregues/elimines entradas con frecuencia, o cuando trabajes con colecciones grandes. Usa Object para estructuras simples, datos planos o cuando necesites serializar a JSON.

---

## Map desde objeto

Puedes convertir un objeto a Map con `Object.entries()`:

```javascript
let usuario = {
  nombre: "Ana",
  edad: 30,
  ciudad: "México"
};

let mapa = new Map(Object.entries(usuario));
console.log(mapa.get("nombre"));  // "Ana"
```

Y de vuelta a objeto con `Object.fromEntries()`:

```javascript
let objeto = Object.fromEntries(mapa);
console.log(objeto);  // { nombre: "Ana", edad: 30, ciudad: "México" }
```

---

## Clausura sobre referencia

Como las claves pueden ser objetos, la recolección de basura puede ser relevante. WeakMap ofrece una alternativa donde las claves se recolectan si no hay otras referencias.

```javascript
let wm = new WeakMap();

let elemento = document.getElementById("boton");
wm.set(elemento, { contador: 0 });

// Cuando elemento se elimina del DOM y pierde todas las referencias,
// la entrada en WeakMap también se recolecta
```

> **Uso práctico:** WeakMap es útil para almacenar metadatos asociados a objetos DOM o instancias sin impedir su recolección de basura.

---

## Resumen

| Método | Descripción |
|---|---|
| `new Map()` | Crea un Map vacío o desde un iterable de pares |
| `set(clave, valor)` | Agrega o actualiza una entrada |
| `get(clave)` | Obtiene el valor |
| `has(clave)` | Verifica existencia |
| `delete(clave)` | Elimina una entrada |
| `clear()` | Vacía el Map |
| `size` | Cantidad de entradas |
| `keys()` | Iterador de claves |
| `values()` | Iterador de valores |
| `entries()` | Iterador de pares [clave, valor] |

- Las claves pueden ser de cualquier tipo (objetos incluidos)
- Map preserva el orden de inserción
- `size` es una propiedad, no un método
- Usa Map cuando necesites claves no-string o muchas operaciones de escritura/lectura
- Convierte entre Map y Object con `Object.entries()` y `Object.fromEntries()`

---

## Ejercicio

Escribe una función que reciba un arreglo de objetos `{ id, nombre }` y retorne un Map donde cada clave sea el `id` y cada valor sea el objeto completo.

**Instrucciones paso a paso:**

1. Crea una función `indexarPorId(usuarios)`
2. Crea un nuevo Map vacío
3. Itera sobre el arreglo de usuarios
4. Para cada usuario, usa `mapa.set(usuario.id, usuario)`
5. Retorna el Map
6. Prueba con: `[{ id: 1, nombre: "Ana" }, { id: 2, nombre: "Luis" }, { id: 3, nombre: "Sofía" }]`
7. Verifica que `mapa.get(2)` devuelva `{ id: 2, nombre: "Luis" }`

<details>
<summary>Mostrar solución</summary>

```javascript
function indexarPorId(usuarios) {
  let mapa = new Map();

  for (let usuario of usuarios) {
    mapa.set(usuario.id, usuario);
  }

  return mapa;
}

let usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
  { id: 3, nombre: "Sofía" }
];

let indexados = indexarPorId(usuarios);

console.log(indexados.get(1));  // { id: 1, nombre: "Ana" }
console.log(indexados.get(2));  // { id: 2, nombre: "Luis" }
console.log(indexados.get(3));  // { id: 3, nombre: "Sofía" }
console.log(indexados.size);    // 3
```

**Con reduce:**

```javascript
function indexarPorId(usuarios) {
  return new Map(
    usuarios.map(u => [u.id, u])
  );
}
```

</details>
