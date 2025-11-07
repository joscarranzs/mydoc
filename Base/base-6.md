# Tipos de datos complejos: propiedades y métodos

## Tabla de contenidos

- ¿Qué son los tipos de datos complejos?
- Arrays (arreglos)
- Objetos (objetos literales y POJOs)
- `Map` y `Set`
- Funciones como valores y clases
- Fechas (`Date`) y expresiones regulares (`RegExp`)
- Typed Arrays y buffers (breve)
- Propiedades vs métodos: cómo distinguir y usar
- Buenas prácticas y rendimiento
- Ejemplos en TypeScript/JavaScript
- Ejercicios
- Sugerencias (recursos)

## ¿Qué son los tipos de datos complejos?

Los tipos de datos complejos (o compuestos) agrupan o estructuran varios valores y comportamientos. A diferencia de los primitivos, son referenciados por su identidad y suelen ofrecer propiedades y métodos para manipular su contenido. Ejemplos típicos en entornos web: `Array`, `Object`, `Map`, `Set`, funciones (como valores), `Date`, `RegExp`, y typed arrays (`Uint8Array`, `Float32Array`, etc.).

## Arrays (arreglos)

Un `Array` es una colección ordenada de valores indexados numéricamente. Propiedades y métodos comunes:

- Propiedades:
	- `length` — longitud del arreglo.

- Métodos (selección importante):
	- `push(...items)` / `pop()` — añadir/quitar al final.
	- `unshift(...items)` / `shift()` — añadir/quitar al inicio.
	- `slice(start, end)` — crear subarray sin mutar.
	- `splice(start, deleteCount, ...items)` — muta: insertar/eliminar.
	- `map(fn)` — transforma (devuelve nuevo arreglo).
	- `filter(fn)` — filtra (devuelve nuevo arreglo).
	- `reduce(fn, init)` — reduce a un valor acumulado.
	- `forEach(fn)` — iteración sin retorno.
	- `find`, `findIndex`, `some`, `every`, `includes`, `indexOf`.

Ejemplo:

```ts
const nums = [1, 2, 3];
nums.push(4);           // nums = [1,2,3,4]
const evens = nums.filter(n => n % 2 === 0); // [2,4]
const sum = nums.reduce((a, b) => a + b, 0); // 10
```

Nota: muchos métodos (`map`, `filter`, `slice`) son no mutantes y devuelven nuevos arreglos; `splice`, `push`, `pop` sí mutan.

## Objetos (objetos literales y POJOs)

Un `Object` es una colección de pares clave-valor (propiedades). Las claves suelen ser cadenas o símbolos.

- Propiedades y acceso:
	- Lectura/escritura por `obj.prop` o `obj['prop']`.

- Métodos y utilidades globales:
	- `Object.keys(obj)`, `Object.values(obj)`, `Object.entries(obj)`.
	- `Object.assign(target, ...sources)` — copia propiedades (muta target).
	- `Object.freeze(obj)` / `Object.seal(obj)` — limitar mutaciones.
	- `hasOwnProperty` (método prototípico) para comprobar propiedad propia.

Ejemplo:

```ts
const user = { id: 'u1', name: 'Ana', roles: ['user'] };
const keys = Object.keys(user); // ['id', 'name', 'roles']
const clone = { ...user, active: true }; // copia inmutable estilo shallow
```

## `Map` y `Set`

`Map` y `Set` son colecciones incorporadas con comportamiento distinto al de arrays/objetos:

- `Map` — colección de pares clave/valor que permite claves de cualquier tipo.
	- Métodos: `set(key, value)`, `get(key)`, `has(key)`, `delete(key)`, `clear()`, `size`.

- `Set` — colección de valores únicos.
	- Métodos: `add(value)`, `has(value)`, `delete(value)`, `clear()`, `size`.

Ejemplo:

```ts
const m = new Map<string, number>();
m.set('a', 1);
m.get('a'); // 1

const s = new Set<number>([1,2,2,3]);
s.has(2); // true
```

## Funciones como valores y clases

En JavaScript/TypeScript las funciones son valores de primera clase: pueden asignarse a variables, pasarse como argumentos y tener propiedades.

- Propiedades comunes (cuando se usan funciones como objetos): `name`, `length` (número de parámetros declarados).
- Métodos útiles: `call`, `apply`, `bind` (control de contexto `this`).

Las `class` introducen una sintaxis para constructores y prototipos, y sus instancias combinan propiedades y métodos.

Ejemplo:

```ts
function greeter(name: string) { return `Hola, ${name}`; }
greeter.call(null, 'Ana');

class Counter {
	constructor(public count = 0) {}
	inc() { this.count++; }
}
```

## Fechas (`Date`) y expresiones regulares (`RegExp`)

- `Date` — objeto para manejar tiempos y fechas. Métodos frecuentes: `getTime()`, `toISOString()`, `getFullYear()`, `setHours()`.

- `RegExp` — expresiones regulares como objetos con métodos: `test`, `exec`; strings también ofrecen `.match`, `.replace`, `.search`.

Ejemplo:

```js
const d = new Date();
d.toISOString();

const r = /\d+/g;
const text = 'números 123 y 456';
text.match(r); // ['123','456']
```

## Typed Arrays y buffers (breve)

Typed Arrays (`Uint8Array`, `Float32Array`, etc.) y `ArrayBuffer` son útiles para datos binarios, multimedia o manipulación a bajo nivel. Ofrecen métodos similares a arrays y vistas sobre buffers.

## Propiedades vs métodos: cómo distinguir y usar

- Propiedad: dato asociado a la estructura (por ejemplo `arr.length`, `map.size`, `obj.name`).
- Método: función que realiza una operación y a menudo puede mutar o devolver nuevo valor (por ejemplo `arr.push()`, `map.get()`, `obj.toString()`).

Regla práctica: cuando necesites consultar estado usa propiedades; cuando quieras realizar una acción usa métodos. Revisa si un método es puro (no muta) o impuro (muta) para evitar efectos secundarios inesperados.

## Buenas prácticas y rendimiento

- Prefiere métodos no mutantes (`map`, `filter`, `slice`) cuando busques inmutabilidad y facilidad para razonar sobre el código.
- Para operaciones intensivas en datos, evita crear muchos arrays temporales; considera `for` tradicional o `reduce` con cuidado de alocaciones.
- Usa `Map` para búsquedas frecuentes con claves no-string o cuando necesites ordenar inserción; `Object` es adecuado para datos simples y acceso literal.
- Evita agregar propiedades dinámicas innecesarias a objetos si la estructura es conocida; define interfaces/types en TypeScript.

## Ejemplos en TypeScript/JavaScript

```ts
// Trabajando con objetos y arrays
type Product = { id: string; name: string; price: number };
const products: Product[] = [
	{ id: 'p1', name: 'A', price: 10 },
	{ id: 'p2', name: 'B', price: 20 }
];

const byId = new Map(products.map(p => [p.id, p]));
const total = products.reduce((s, p) => s + p.price, 0);

// Uso de Set para eliminar duplicados
const dup = [1,2,2,3];
const unique = [...new Set(dup)]; // [1,2,3]
```

## Ejercicios

1. Dado un arreglo de objetos `users`, escribe una función que devuelva un `Map` donde la clave sea `user.id` y el valor el objeto usuario.

2. Implementa una función que reciba un arreglo y devuelva un nuevo arreglo con los elementos únicos (sin mutar el original) — usa `Set`.

3. Escribe una pequeña clase `Stack<T>` con métodos `push`, `pop`, `peek` y `isEmpty`. Indica qué métodos mutan el estado y cuáles no.

4. Dado un objeto `config`, muestra tres formas de crear una copia shallow del objeto (por ejemplo `Object.assign`, spread, `JSON.parse(JSON.stringify(obj))`) y explica diferencias.

5. Explica por qué `map.get(key)` en un `Map` puede ser más rápido o más adecuado que `obj[key]` en ciertos casos.

## Sugerencias (recursos)

- MDN Web Docs — documentación sobre `Array`, `Object`, `Map`, `Set`, `Date`, `RegExp`.
- "You Don't Know JS (Yet)" — capítulos sobre tipos y estructuras de datos.
- Artículos sobre rendimiento de colecciones en JS y guías de diseño de datos.

---
