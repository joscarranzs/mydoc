# Tipos de datos

## Tabla de contenidos

- ¿Qué son los tipos de datos?
- Tipado estático vs tipado dinámico
	- Ventajas y desventajas de cada enfoque
- Cómo emplear cada uno de forma adecuada y por qué
	- Buenas prácticas para `tipado estático`
	- Buenas prácticas para `tipado dinámico`
- Ejemplos (TypeScript, JavaScript, Python)
- Ejercicios
- Sugerencias (lecturas y recursos)

## ¿Qué son los tipos de datos?

Los tipos de datos son categorías que describen la naturaleza de los valores que pueden almacenarse y manipularse en un programa: números, cadenas de texto, booleanos, arreglos, objetos, funciones, entre otros. El sistema de tipos de un lenguaje define reglas sobre cómo se pueden combinar, transformar y verificar esos valores.

Funciones principales del sistema de tipos:

- Documentar intención: al declarar que una variable es de cierto tipo, el código comunica expectativas a otros desarrolladores y herramientas.
- Detectar errores: un sistema de tipos puede ayudar a detectar usos incorrectos de valores antes de ejecutar el programa.
- Optimización y seguridad: los tipos permiten optimizaciones en tiempo de compilación y reducen errores en tiempo de ejecución.

## Tipado estático vs tipado dinámico

Tipado estático

- En el `tipado estático` los tipos se conocen y comprueban en tiempo de compilación (antes de la ejecución). Ejemplos: `TypeScript` (comprobación opcional sobre JavaScript), `Java`, `Rust`.
- El compilador verifica que las operaciones entre valores sean coherentes con sus tipos.

Tipado dinámico

- En el `tipado dinámico` los tipos se determinan en tiempo de ejecución. El mismo identificador puede contener valores de distintos tipos a lo largo del tiempo. Ejemplos: `JavaScript`, `Python`, `Ruby`.

Ventajas y desventajas (resumen)

- Tipado estático — ventajas:
	- Detección temprana de errores de tipo.
	- Mejor autocompletado y refactorización en editores.
	- Posibles optimizaciones por parte del compilador.
	- Contratos más explícitos en APIs.

- Tipado estático — desventajas:
	- Mayor verbosidad/ceremonia en ciertos casos.
	- Curva de aprendizaje y carga de mantenimiento de firmas/tipos.

- Tipado dinámico — ventajas:
	- Desarrollo rápido y prototipado ágil.
	- Sintaxis más compacta en operaciones sencillas.
	- Flexibilidad para metaprogramación y DSLs ligeros.

- Tipado dinámico — desventajas:
	- Errores de tipo que aparecen en tiempo de ejecución.
	- Refactorizaciones más arriesgadas sin pruebas fuertes.
	- Puede dificultar el razonamiento en códigobase grande.

## Cómo emplear cada uno de forma adecuada y por qué

Consejo general: elegir la herramienta y el nivel de tipado según el contexto del proyecto (tamaño, equipo, requisitos de mantenimiento, rendimiento y entorno de ejecución).

Buenas prácticas para `tipado estático`

- Preferir definir interfaces y tipos para las APIs públicas del módulo o servicio.
- Usar `types`/`interfaces` en `TypeScript` para documentar estructuras complejas.
- No abusar de anotaciones `any` o castings que eludan la comprobación de tipos; en su lugar, refactoriza o define tipos más precisos.
- Usar el sistema de tipos para capturar invariantes (por ejemplo, tipos discriminados para estados mutuamente excluyentes).
- Mantener tests y contracts ligeros; el tipado estático complementa pero no sustituye pruebas runtime.

Buenas prácticas para `tipado dinámico`

- Escribir tests automáticos (unitarios y de integración) para cubrir escenarios donde el tipo esperado pueda variar.
- Validar datos en los límites (por ejemplo, entrada de usuario, payloads HTTP) con validadores o esquemas (p. ej. `zod`, `Joi` en el ecosistema JS).
- Documentar claramente las expectativas de tipo en la API (README, comentarios) y en los contratos entre módulos.
- Preferir patrones que reduzcan la exposición a valores ambiguos (p. ej. funciones puras y transformaciones explícitas).

Interoperabilidad y enfoques mixtos

- Empujar `TypeScript` sobre proyectos `JavaScript` para obtener beneficios del tipado estático sin reescribir todo.
- Usar validación runtime junto con tipos estáticos (por ejemplo, `zod` para validar input y derivar tipos).
- Adoptar una estrategia incremental: comienza tipando las partes críticas (contratos, librerías internas) y amplia progresivamente.

## Ejemplos (TypeScript, JavaScript, Python)

TypeScript (tipado estático opcional):

```ts
// Definición explícita de tipos
type User = { id: string; name: string; age?: number };

function greet(user: User) {
	return `Hola, ${user.name}`;
}

const u: User = { id: 'u1', name: 'Ana' };
greet(u);
```

JavaScript (tipado dinámico):

```js
function greet(user) {
	return `Hola, ${user.name}`; // si user es null/undefined esto falla en runtime
}

greet({ name: 'Ana' });
```

Python (tipado dinámico con anotaciones opcionales):

```py
def greet(user: dict) -> str:
		return f"Hola, {user['name']}"

greet({'name': 'Ana'})
```

## Ejercicios

1. En `TypeScript`, define un `type` o `interface` para un `Product` que tenga `id`, `name`, `price` y una propiedad opcional `discount`. Escribe una función que calcule el `finalPrice` y aproveche los tipos para evitar errores.

2. Toma un pequeño servicio en `JavaScript` que recibe JSON de usuario; describe y aplica dos defensas para prevenir errores en tiempo de ejecución debidos a tipos inválidos.

3. Compara, en una pequeña tabla o lista, cuándo elegirías `TypeScript` sobre `JavaScript` puro para un proyecto web (criterios: equipo, tamaño, mantenimiento, performance, integración con librerías externas).

## Sugerencias (lecturas y recursos)

- TypeScript Handbook — guías y patrones: https://www.typescriptlang.org/docs/
- MDN (tipos y coerción en JavaScript): https://developer.mozilla.org/
- "Programming Language Pragmatics" — libro para comprender sistemas de tipos y diseño de lenguajes (más académico).
- Bibliotecas de validación runtime: `zod`, `Joi`, `yup` (ecosistema JS) — útiles cuando convives con tipado dinámico.

---