# Tipos primitivos y casting

## Tabla de contenidos

- Tipos de datos primitivos
- Casting implícito (coerción)
- Casting explícito (conversión de tipos)
- Peligros y buenas prácticas
- Ejemplos en JavaScript / TypeScript
- Ejercicios
- Sugerencias (lecturas y recursos)

## Tipos de datos primitivos

Los tipos primitivos son los valores atómicos básicos que ofrece un lenguaje y que no se componen directamente de otros valores mediante referencias. En muchos lenguajes web modernos (JavaScript/TypeScript) los tipos primitivos más comunes son:

- `string` — cadenas de texto.
- `number` — números (enteros y de punto flotante).
- `boolean` — `true` / `false`.
- `null` — ausencia intencional de valor.
- `undefined` — variable declarada sin valor.
- `bigint` — enteros de precisión arbitraria (en JS moderno).
- `symbol` — identificadores únicos (JS).

Nota: en TypeScript usamos estas categorías a nivel de tipos estáticos; en tiempo de ejecución JavaScript sigue manteniendo la distinción entre valores primitivos y objetos.

## Casting implícito (coerción)

La coerción implícita ocurre cuando el lenguaje convierte automáticamente un valor de un tipo a otro para satisfacer una operación. JavaScript, por ejemplo, realiza muchas coerciones implícitas:

- Suma entre `string` y `number`: `"5" + 2` produce `"52"` (el número se convierte a cadena).
- Operaciones numéricas con cadenas: `"5" * 2` produce `10` (la cadena se convierte a número).
- Comparaciones con `==` (igualdad débil) realizan coerción: `0 == false` es `true`.

Ejemplos:

```js
"5" + 2    // "52"
"5" * 2    // 10
0 == false  // true (coerción)
0 === false // false (sin coerción, comparación estricta)
```

Pros y contras de la coerción implícita:

- Pros: puede facilitar expresiones concisas en prototipado rápido.
- Contras: puede introducir errores sutiles y comportamientos inesperados en producción.

Recomendación: evita depender de coerciones implícitas en código de producción; prefiere conversiones explícitas y comparaciones estrictas (`===` / `!==`).

## Casting explícito (conversión de tipos)

El casting explícito es cuando el programador indica de forma clara la conversión de un valor a otro tipo. Esto mejora la legibilidad y reduce sorpresas.

Formas comunes en JavaScript/TypeScript:

- `Number(x)` o el operador unario `+` para convertir a número.
- `String(x)` o `x.toString()` para convertir a cadena (cuidado con `null`/`undefined`).
- `Boolean(x)` para convertir a booleano (valores "falsy": `0`, `""`, `null`, `undefined`, `NaN`, `false`).
- `parseInt(str, radix)` y `parseFloat(str)` para parseos controlados desde cadenas.

Ejemplos:

```js
Number("42")   // 42
parseInt("42px", 10) // 42 (usa radix explícito)
+"3.14"         // 3.14  (operador unario +)
String(123)     // "123"
Boolean("")   // false
Boolean("0")  // true (cadenas no vacías son truthy)

// Cuidado con NaN
Number("foo")  // NaN
```

En TypeScript existen además las aserciones de tipo (type assertions) que no cambian el valor en tiempo de ejecución, solo informan al compilador:

```ts
const input: any = "123";
const n1 = Number(input);      // conversión runtime
const n2 = (input as string);  // aserción de tipo: no cambia runtime
```

## Peligros y buenas prácticas

- Evita comparaciones con `==`; usa `===` y `!==` para evitar coerción implícita.
- Cuando conviertas entradas de usuario o datos externos, valida antes de usar: `Number`, `parseInt` y `parseFloat` pueden devolver `NaN`.
- Usa `parseInt` con el segundo parámetro `radix` para evitar ambigüedades: `parseInt(str, 10)`.
- Ten en cuenta los valores "falsy" y "truthy`" al usar conversiones booleanas.
- En TypeScript, recuerda que las `type assertions` (`as`) no son conversiones: no cambian el valor en runtime.
- Para evitar mutuas sorpresas, documenta las expectativas de tipo y añade validación en los límites (ej. con `zod`, `Joi`, validadores personalizados).

## Ejemplos en JavaScript / TypeScript (resumen práctico)

```ts
// Entrada de usuario simulada
const raw = " 42 \n";

// Conversión segura
const n = Number(raw.trim());
if (Number.isNaN(n)) {
	console.error("Valor no numérico");
} else {
	console.log(n + 1);
}

// Evitar coerción accidental
if (userInput === "") {
	// cadena vacía explícita
}

// TypeScript: aserción vs conversión
const v: unknown = "123";
const vAsString = v as string; // aserción, compilador confía en que es string
const vAsNumber = Number(v);   // conversión real en runtime
```

## Ejercicios

1. Explica con un ejemplo por qué `"" == 0` es `true` (o `false`) y qué ocurre con `"" === 0`.

2. Dado el valor `const x = "08";`, ¿qué devuelve `parseInt(x)` en diferentes entornos si no se especifica `radix`? ¿por qué conviene pasar `10` como segundo argumento?

3. Escribe una función que reciba un `string` y devuelva un `number` seguro: realiza `trim`, intenta `Number`, y si resulta `NaN` devuelve `null`.

4. En TypeScript, ¿qué diferencia hay entre `value as string` y `String(value)`? Escribe un ejemplo que muestre que la primera no modifica runtime.

## Sugerencias (lecturas y recursos)

- MDN: Guía sobre coerción y conversión de tipos en JavaScript — https://developer.mozilla.org/
- Artículo: "JavaScript type coercion and equality comparisons" — búsqueda en MDN/recursos.
- Libros y guías: "You Don't Know JS (Yet)" — capítulos sobre tipos, coerción y comparación.

---
