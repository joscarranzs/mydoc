# Alcance y ámbito: variables y `this`

## Tabla de contenidos

- ¿Qué es el alcance / ámbito?
- Variables globales
- Variables locales
- Variables de bloque
- Ámbito estático (lexical) vs ámbito dinámico
- El objeto `this` (comportamiento y binding)
- Ejemplos en TypeScript / JavaScript
- Errores comunes y buenas prácticas
- Ejercicios
- Sugerencias (recursos)

## ¿Qué es el alcance / ámbito?

El alcance (o ámbito) define la región del código donde un identificador (variable, función) es accesible. Comprender el alcance es esencial para evitar colisiones de nombres, errores por referencias indefinidas y problemas de concurrencia/estado.

Conceptos clave:

- Resolución de nombres: cómo el entorno encuentra el valor asociado a un identificador.
- Tiempo de vida: cuánto tiempo existe la variable en memoria.

## Variables globales

Una variable global es accesible desde cualquier parte del programa (o del módulo/entorno). En entornos de navegador, declarar `var x = 1` en el scope global crea `window.x` (históricamente). En módulos modernos (`ES modules`, `Node`), el alcance global está más restringido y las variables globales deben evitarse cuando sea posible.

Problemas de variables globales:

- Colisiones de nombres entre scripts y librerías.
- Dificultad para razonar sobre estado compartido y efectos secundarios.
- Riesgo de fuga de memoria si no se liberan referencias cuando corresponda.

Buena práctica: minimizar el uso de variables globales; preferir encapsular estado en módulos, clases o closures.

## Variables locales

Las variables locales existen dentro de una función o bloque y no son visibles fuera de ese contexto. Por ejemplo, variables declaradas dentro de una función con `let`/`const` son locales a esa función o bloque.

Ejemplo:

```ts
function example() {
	const local = 1; // accesible solo dentro de example
}
// console.log(local); // Error: local is not defined
```

## Variables de bloque

El alcance de bloque (block scope) significa que las variables declaradas con `let` o `const` sólo existen dentro del bloque `{ ... }` donde se declararon. `var` no respeta el alcance de bloque en JavaScript tradicional (tiene alcance funcional), lo que ha sido fuente de errores.

Ejemplo:

```ts
if (true) {
	let x = 1;
	const y = 2;
}
// x y y no son accesibles aquí
```

## Ámbito estático (lexical) vs ámbito dinámico

Ámbito estático (lexical)

- En el `ámbito estático` (lexical), la vinculación de nombres se determina por la estructura del código en tiempo de escritura: una función busca identificadores en su propio scope y luego en los scopes exteriores donde fue definida.
- JavaScript (y TypeScript) usa ámbito léxico: las funciones recuerdan el entorno en que fueron declaradas (closures).

Ejemplo (closure lexical):

```ts
function makeCounter() {
	let count = 0;
	return function() { count++; return count; };
}
const c = makeCounter();
console.log(c()); // 1
console.log(c()); // 2
```

Ámbito dinámico

- En el `ámbito dinámico` la resolución de nombres depende de la pila de llamadas en tiempo de ejecución (qué función llamó a cuál). Algunos lenguajes antiguos o ciertos modos pueden usarlo, pero no es el comportamiento de JavaScript moderno.
- El ámbito dinámico puede hacer que el comportamiento dependa de la secuencia de llamadas, dificultando el razonamiento local.

## El objeto `this`

`this` es una referencia especial que apunta a un objeto contexto determinado en tiempo de ejecución. Su valor depende de cómo se invoque la función.

Reglas importantes en JavaScript/TypeScript:

- Llamada como función: `fn()` — en modo estricto `this` es `undefined`; en modo no estricto suele ser el objeto global (`window`/`global`).
- Método de objeto: `obj.fn()` — `this` apunta a `obj`.
- `call` / `apply` / `bind`: permiten controlar explícitamente el valor de `this`.
- Funciones flecha (`=>`) no crean su propio `this`; heredan `this` del entorno léxico donde fueron definidas.
- Al usar `new` con un constructor: `this` apunta al objeto recién creado.

Ejemplos:

```ts
const obj = {
	x: 1,
	getX() { return this.x; }
};
obj.getX(); // 1  (this -> obj)

const getX = obj.getX;
getX(); // undefined en 'strict mode' (this -> undefined)

const bound = obj.getX.bind(obj);
bound(); // 1 (this forzado a obj)

// Arrow function
const o = { x: 10, fn: () => this.x };
// En este caso 'this' es léxico (no es 'o') — cuidado con arrow en métodos
```

## Errores comunes y buenas prácticas

- Evitar usar `var`; preferir `let`/`const` para respetar alcance de bloque.
- Evitar depender de variables globales; pasar dependencias como parámetros o usar módulos.
- Al usar `this` en callbacks o handlers, asegúrate del binding correcto (usar `bind`, arrow functions o capturar referencia).
- Prefiere `const` cuando no necesites reasignar para comunicar intención.

## Ejemplos en TypeScript: patrones y anti-patrones

```ts
// Encapsular estado en módulo/closure
const Counter = (() => {
	let count = 0;
	return { inc() { count++; }, get() { return count; } };
})();

Counter.inc();
console.log(Counter.get());

// Uso correcto de this en clase
class Greeter {
	constructor(private name: string) {}
	greet() { return `Hola ${this.name}`; }
}

const g = new Greeter('Ana');
console.log(g.greet());

// Evitar: pérdida de 'this' en callback
const m = {
	x: 1,
	getX() { return this.x; }
};
setTimeout(m.getX, 0); // this undefined a menos que se haga bind
```

## Ejercicios

1. Explica con un ejemplo la diferencia entre `var`, `let` y `const` en cuanto a alcance y hoisting.

2. Escribe una función que cree y devuelva un closure que acumule valores (como `makeCounter` arriba). Demuestra que el estado es privado.

3. Dado el siguiente objeto, ¿cómo evitarías que `this` se pierda al pasar `o.method` como callback?

```ts
const o = { val: 42, method() { return this.val; } };
setTimeout(o.method, 0);
```

4. Describe por qué el ámbito léxico facilita el uso de closures y programación funcional.

5. Investiga una situación real donde una variable global causó un bug y describe cómo lo solucionarías reestructurando el código.

## Sugerencias (recursos)

- MDN Web Docs — scope y closure: https://developer.mozilla.org/
- Artículos sobre `this` en JavaScript y patrones para evitar pérdida de contexto.
- "You Don't Know JS" — capítulos sobre scope, closures y this.

---
