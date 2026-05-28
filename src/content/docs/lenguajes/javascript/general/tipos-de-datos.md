---
title: Tipos de datos
description: Primitivos y compuestos.
module: lenguajes/javascript
submodule: general
order: 3
---

Al completar esta guía podrás:

- Identificar los siete tipos de datos primitivos de JavaScript
- Distinguir entre tipos primitivos y compuestos
- Usar el operador `typeof` para conocer el tipo de un valor
- Diferenciar entre `null` y `undefined`

---

## Clasificación de tipos

JavaScript tiene dos categorías de tipos de datos:

| Categoría | Descripción | Ejemplos |
|---|---|---|
| **Primitivos** | Valores inmutables y atómicos | `"Hola"`, `42`, `true` |
| **Compuestos** | Estructuras que agrupan múltiples valores | `[1, 2]`, `{ a: 1 }` |

Un tipo primitivo no tiene métodos ni propiedades. Cuando parece que los tiene, JavaScript lo envuelve temporalmente en su objeto equivalente.

> **Nota:** En JavaScript, todo valor que no es un objeto es un primitivo. Hay 7 tipos primitivos y 1 tipo compuesto (Object).

---

## Tipos primitivos

### `string` — Cadena de texto

Representa texto. Se escribe entre comillas simples, dobles o backticks.

```javascript
let single = 'Hola';
let double = "Hola";
let template = `Hola ${nombre}`;
```

Los **template literals** (backticks) permiten interpolar variables con `${}`:

```javascript
let nombre = "Ana";
let saludo = `Bienvenida, ${nombre}. Tienes ${2025 - 1990} años.`;
```

### `number` — Número

Representa números enteros y decimales. Todos son del mismo tipo.

```javascript
let entero = 42;
let decimal = 3.14;
let negativo = -10;
let notacion = 1.5e6;  // 1,500,000
```

Valores especiales:

```javascript
let infinito = Infinity;    // Número mayor que cualquier número finito
let menosInf = -Infinity;   // Número menor que cualquier número finito
let noNumero = NaN;         // "Not a Number" — resultado de operaciones inválidas
```

### `boolean` — Booleano

Representa valores de verdad. Solo dos valores posibles.

```javascript
let activo = true;
let completado = false;
```

### `undefined` — No definido

Valor que JavaScript asigna automáticamente a una variable declarada pero sin inicializar.

```javascript
let mensaje;
console.log(mensaje);  // undefined
```

También es el valor que retorna una función sin `return`:

```javascript
function nada() {}
console.log(nada());  // undefined
```

### `null` — Nulo

Representa la ausencia intencional de un valor. Es un valor que **asigna el programador**, no JavaScript.

```javascript
let resultado = null;  // El programador indica que no hay valor
```

> **Diferencia clave:** `undefined` significa "no se ha asignado ningún valor". `null` significa "se asignó intencionalmente la ausencia de valor".

### `bigint` — Entero grande

Permite representar enteros de cualquier tamaño. Se escribe agregando `n` al final.

```javascript
let grande = 123456789012345678901234567890n;
let otro = BigInt("9999999999999999");
```

### `symbol` — Símbolo

Valor único e inmutable, usado como clave de propiedades de objetos.

```javascript
let id = Symbol("id");
let id2 = Symbol("id");

console.log(id === id2);  // false — cada Symbol es único
```

---

## Tipo compuesto: Object

Los objetos agrupan pares de clave-valor. Se crean con llaves `{}`.

```javascript
let usuario = {
  nombre: "Ana",
  edad: 30,
  activo: true
};
```

Los **arreglos** son un subtipo especial de objeto:

```javascript
let colores = ["rojo", "verde", "azul"];
console.log(typeof colores);  // "object"
```

> **Importante:** `typeof` devuelve `"object"` para arreglos, null y objetos. No es suficiente para diferenciarlos. Para verificar arreglos usa `Array.isArray()`.

---

## El operador `typeof`

`typeof` devuelve una cadena con el tipo del valor evaluado.

```javascript
typeof "Hola";          // "string"
typeof 42;              // "number"
typeof 3.14;            // "number"
typeof NaN;             // "number" — NaN es numéricamente inválido, pero sigue siendo number
typeof true;            // "boolean"
typeof undefined;       // "undefined"
typeof 123n;            // "bigint"
typeof Symbol("id");    // "symbol"
typeof {};              // "object"
typeof [];              // "object"
typeof null;            // "object" — error histórico del lenguaje
typeof function(){};    // "function"
```

> **Nota:** `typeof null` devuelve `"object"`. Es un error conocido desde la primera versión de JavaScript que no se corrigió por compatibilidad.

---

## Tipado dinámico

JavaScript es de **tipado dinámico**: una variable puede contener cualquier tipo de dato y puede cambiar de tipo durante la ejecución.

```javascript
let valor = "Hola";
console.log(typeof valor);  // "string"

valor = 42;
console.log(typeof valor);  // "number"

valor = true;
console.log(typeof valor);  // "boolean"

valor = { mensaje: "Hola" };
console.log(typeof valor);  // "object"
```

Esto ofrece flexibilidad, pero requiere cuidado. El mismo código puede comportarse de forma distinta según el tipo del valor en cada momento.

---

## Conversión de tipos

### Conversión implícita (coerción)

JavaScript convierte tipos automáticamente cuando los operandos no coinciden:

```javascript
"5" - 2;    // 3 (string "5" se convierte a número)
"5" + 2;    // "52" (number 2 se convierte a string)
"5" * "2";  // 10 (ambos strings se convierten a números)
```

> **Regla:** El operador `+` prioriza la concatenación si un operando es string. Los demás operadores (`-`, `*`, `/`) convierten a número.

### Conversión explícita

Usa funciones constructoras para convertir de forma intencional:

```javascript
String(123);        // "123"
Number("123");      // 123
Boolean(1);         // true
Boolean(0);         // false
Boolean("");        // false
Boolean("texto");   // true
```

---

## Valores falsy y truthy

En contextos booleanos (como `if`), JavaScript evalúa los valores como verdaderos o falsos.

### Falsy — Se evalúan como `false`

```javascript
false
0
-0
""          // cadena vacía
null
undefined
NaN
```

### Truthy — Se evalúan como `true`

Todo lo demás:

```javascript
true
"texto"       // cualquier cadena no vacía
42            // cualquier número distinto de 0
[]            // arreglo vacío
{}            // objeto vacío
Infinity
```

```javascript
if ("Hola") {
  console.log("Se ejecuta");  // "Se ejecuta" — string no vacío es truthy
}

if (0) {
  console.log("No se ejecuta");  // 0 es falsy
}
```

---

## Resumen

- JavaScript tiene 7 tipos primitivos: `string`, `number`, `boolean`, `undefined`, `null`, `bigint`, `symbol`
- El tipo compuesto principal es `object` (incluye arreglos y objetos literales)
- `typeof` revela el tipo de un valor, pero tiene casos especiales (`typeof null`, `typeof NaN`)
- JavaScript es dinámicamente tipado: las variables pueden cambiar de tipo
- La coerción convierte tipos automáticamente; usa conversión explícita para más control
- Todo valor es truthy o falsy en contextos booleanos

---

## Ejercicio

Escribe un programa que:

1. Declare una variable `dato` sin asignarle valor
2. Muestre el tipo de `dato` con `console.log()`
3. Asigne a `dato` el valor `"JavaScript"`
4. Muestre el tipo nuevamente
5. Asigne a `dato` el valor `2025`
6. Muestre el tipo
7. Asigne a `dato` el valor `null`
8. Muestre el tipo
9. Asigne a `dato` el valor `true`
10. Muestre el tipo

**Instrucciones paso a paso:**

1. Crea un archivo `tipos.js`
2. Declara `let dato;` sin asignar valor
3. Usa `console.log(typeof dato)` para cada paso
4. Reasigna `dato` con los valores indicados
5. Observa cómo cambia el tipo en cada reasignación
6. Ejecuta con Node.js o pega el código en la consola del navegador

<details>
<summary>Mostrar solución</summary>

```javascript
let dato;

console.log(typeof dato);  // "undefined"

dato = "JavaScript";
console.log(typeof dato);  // "string"

dato = 2025;
console.log(typeof dato);  // "number"

dato = null;
console.log(typeof dato);  // "object" — error histórico del lenguaje

dato = true;
console.log(typeof dato);  // "boolean"
```

**Pregunta de análisis:** ¿Por qué `typeof null` devuelve `"object"`?

Es un error conocido desde la primera versión de ECMAScript. El estándar no lo corrigió porque millones de sitios web dependen de este comportamiento. En la práctica, usa `dato === null` para verificar valores nulos.

</details>
