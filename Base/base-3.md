# Variables y constantes

## Tabla de contenidos

- ¿Qué son las variables?
- ¿Qué son las constantes?
- Declaración e inicialización
- Tipos de alcance y hoisting (breve)
- Mutabilidad vs reasignación
- Normas de nomenclatura: datos inmutables y mutables
- Ejemplos en TypeScript
- Ejercicios
- Sugerencias (lecturas y recursos)

## ¿Qué son las variables?

Una variable es un identificador que se asocia a un valor y que representa un espacio de almacenamiento en memoria al que el programa puede referirse por nombre. Las variables permiten guardar datos temporales, intercambiar información entre partes del programa y mantener estado.

Conceptos clave:

- Nombre (identificador): la forma en que referenciamos la variable en el código.
- Valor: la información almacenada (números, cadenas, objetos, funciones, etc.).
- Alcance (scope): el contexto en el que la variable es accesible (global, local, de bloque).
- Vida/tiempo de vida: periodo durante el cual la variable existe y mantiene su valor.

## ¿Qué son las constantes?

Una constante es, en términos prácticos, una variable cuyo identificador no puede ser reasignado después de su declaración. Las constantes se usan para valores que no deben cambiar su referencia a lo largo del tiempo. Dependiendo del lenguaje, "constante" puede significar también inmutabilidad total (no solo la imposibilidad de reasignar), pero en muchos entornos (ej. JavaScript/TypeScript) const evita la reasignación de la referencia, no la mutación del valor si este es un objeto complejo.

## Declaración e inicialización

- Declaración: acto de introducir un nombre en el programa para reservar espacio o asociar el identificador a un concepto. Ejemplo (TypeScript/JavaScript):

	- `let contador;           // declaración sin inicialización`
	- `const PI = 3.1415;     // declaración con inicialización (requerida para const)`

- Inicialización: asignar por primera vez un valor a la variable/constante.

- Recomendación práctica: declarar y, cuando sea posible, inicializar en la misma línea. Para constantes, la inicialización es obligatoria en la mayoría de lenguajes que usan el modificador const.

Ejemplos (TypeScript):

```ts
let nombre: string = "Ana";    // declaración + inicialización
let edad: number;                // declaración sin inicialización
edad = 30;                       // inicialización posterior
const MAX_INTENTOS = 5;          // constante: debe inicializarse al declararla
```

## Tipos de alcance y hoisting (breve)

- Alcance global: variable accesible desde cualquier parte del programa (con precaución).
- Alcance local/funcional: variable accesible sólo dentro de una función.
- Alcance de bloque: variable accesible sólo dentro de un bloque `{ ... }` (`let`/`const` en JS/TS).

Hoisting (en JavaScript/TypeScript):

- Las declaraciones con var son "hoisted" (elevadas) al inicio de su contexto, lo que puede llevar a comportamientos inesperados.
- `let` y `const` no permiten acceder a la variable antes de su declaración (temporal dead zone), por lo que son más seguras para evitar errores de hoisting.

## Mutabilidad vs reasignación

- Reasignación: cambiar la referencia asociada a un identificador (por ejemplo, asignar un nuevo número a una variable).
- Mutabilidad: cambiar el contenido interno del valor al que se refiere la variable (por ejemplo, modificar elementos de un arreglo u propiedades de un objeto).

Importante: en entornos como JavaScript/TypeScript, declarar con const impide la reasignación del identificador, pero no evita la mutación del objeto referenciado:

```ts
const lista = [1, 2, 3];
lista.push(4);      // permitido: muta el contenido del arreglo
// lista = [1];     // error: reasignación no permitida para const

const objeto = { x: 1 };
objeto.x = 2;       // permitido: mutación de propiedad
```

Para garantizar inmutabilidad completa se deben usar técnicas o estructuras inmutables (por ejemplo, crear nuevas copias con spread, usar librerías inmutables o tipos inmutables del lenguaje).

## Normas de nomenclatura: datos inmutables y mutables

Buenas prácticas generales para nombrar variables y constantes:

- Nombre claro y descriptivo: usa nombres que indiquen propósito y significado (ej. `userCount`, `startDate`).
- Evita abreviaturas crípticas salvo cuando sean ampliamente reconocidas.
- Usa camelCase para variables y funciones en la mayoría de proyectos JavaScript/TypeScript (por convención): `myVariable`, `computeTotal()`.
- Usa PascalCase para nombres de clases y constructores: `UserService`, `ConfigManager`.
- Para constantes cuyo valor es verdaderamente constante a nivel de aplicación (valores inmutables y configuraciones fijas), algunas bases de código usan UPPER_SNAKE_CASE: `MAX_CONNECTIONS`, `API_URL`. En TypeScript/JavaScript esto es una convención opcional; const por sí mismo no obliga formato.

Recomendaciones específicas según mutabilidad/inalterabilidad:

- Preferir const por defecto: declara con const siempre que no necesites reasignar la referencia. Esto comunica intención (no habrá reasignación) y evita errores accidentales.
- Usa `let` para valores que sí deban reasignarse (contadores, variables temporales en bucles, estados locales que evolucionan).
- Evita `var`: var introduce alcance funcional y hoisting que suelen causar bugs; modernamente se desaconseja su uso.
- Para datos conceptualmente inmutables, considera resaltar su inmutabilidad mediante el nombre y/o el uso de UPPER_SNAKE_CASE cuando la base de código lo requiera. Otra opción es documentarlo con comentarios.

Ejemplos de nombres:

- Mutable: `let attempts = 0; // incremento en un bucle`
- Inmutable/referencial: `const DEFAULT_TIMEOUT = 3000; // valor de configuración`
- Inmutable pero objeto: `const CONFIG = { env: "prod" }; // evitar mutaciones posteriores o congelar el objeto`

## Ejemplos en TypeScript

```ts
// Preferir const por defecto
const PI = 3.14159;

let contador = 0;
contador += 1; // reasignación válida con let

// Const no permite reasignar la referencia, pero sí mutar objetos
const usuario = { nombre: "María", roles: ["user"] };
usuario.roles.push("admin"); // mutación permitida

// Para evitar mutaciones, crear nuevas copias
const usuarioActualizado = { ...usuario, nombre: "María Gomez" };

// Ejemplo de función que usa const y let adecuadamente
function procesar(items: number[]) {
	const resultados: number[] = [];
	for (let i = 0; i < items.length; i++) {
		const item = items[i];
		resultados.push(item * 2);
	}
	return resultados;
}
```

## Ejercicios

1. Identifica si las siguientes declaraciones permiten reasignación y/o mutación (responde reasignación: sí/no, mutación: sí/no):
	 - `const a = 10;`
	 - `let b = [1,2,3];`
	 - `const c = { x: 1 };`

2. Reescribe este fragmento que usa var para que siga buenas prácticas modernas (usa let/const y explica tu elección):
	 - `var i = 0; for (i = 0; i < 5; i++) { console.log(i); }`

3. Dado un objeto const, muestra dos formas de actualizar una propiedad sin mutar el objeto original (por ejemplo, usando spread y usando una función que devuelva una nueva instancia).

4. En un pequeño componente (o función) que mantiene un contador, explica por qué preferirías usar const para funciones auxiliares y let/estado para el contador.

## Sugerencias (lecturas y recursos)

- MDN Web Docs — referencias sobre variables, alcance y hoisting (JavaScript): https://developer.mozilla.org/
- TypeScript Handbook — guía oficial y ejemplos: https://www.typescriptlang.org/docs/
- "You Don't Know JS (Yet)" — serie de libros sobre JavaScript (profundo en conceptos como scope y hoisting).
- Artículos y guías de estilo: Airbnb JavaScript Style Guide (convenciones ampliamente usadas) y guías de estilo de tu equipo/proyecto.

---
