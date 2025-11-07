# Programación orientada a objetos (POO)

## Tabla de contenidos

- ¿Qué es la POO?
- Clases y objetos
- Herencia
- Encapsulamiento
- Polimorfismo
- Abstracción
- Métodos estáticos y de instancia
- Buenas prácticas y consideraciones
- Ejemplos en TypeScript
- Ejercicios
- Sugerencias (recursos)

## ¿Qué es la POO?

La Programación Orientada a Objetos (POO) es un paradigma que organiza el software en torno a "objetos": entidades que combinan estado (propiedades/atributos) y comportamiento (métodos). La POO facilita modelar dominios complejos, promover la reutilización y estructurar código en unidades coherentes.

Principios clave de la POO:

- Encapsulamiento: agrupar datos y comportamientos y controlar acceso.
- Herencia: derivar nuevas clases a partir de otras para reutilizar y extender comportamiento.
- Polimorfismo: tratar objetos de distintas clases a través de una interfaz común.
- Abstracción: exponer sólo lo necesario y ocultar detalles de implementación.

## Clases y objetos

- `class` — plantilla o molde que define propiedades y métodos.
- Objeto — instancia de una clase creada con `new` (o literales en lenguajes dinámicos).

Ejemplo básico en TypeScript:

```ts
class Person {
	constructor(public name: string, private age: number) {}

	greet() { return `Hola, soy ${this.name}`; }
}

const p = new Person('Ana', 30);
console.log(p.greet());
```

En el ejemplo `Person` es una clase; `p` es un objeto/instancia.

## Herencia

La herencia permite que una clase (subclase) extienda otra (superclase), heredando propiedades y métodos.

```ts
class Employee extends Person {
	constructor(name: string, age: number, public role: string) {
		super(name, age);
	}

	describe() { return `${this.name} — ${this.role}`; }
}

const e = new Employee('Luis', 28, 'Developer');
console.log(e.describe());
```

Consideraciones: la herencia favorece la reutilización pero puede introducir acoplamiento fuerte; en diseño moderno se suele preferir composición cuando corresponda.

## Encapsulamiento

Encapsular significa ocultar detalles internos y exponer una interfaz controlada. En TypeScript podemos usar `private` y `protected` para controlar acceso.

```ts
class BankAccount {
	private balance = 0;

	deposit(amount: number) { this.balance += amount; }
	getBalance() { return this.balance; }
}
```

Así evitamos que código externo modifique `balance` directamente.

## Polimorfismo

Polimorfismo permite usar objetos de distintas clases a través de la misma interfaz o supertipo.

```ts
interface Shape { area(): number }

class Circle implements Shape { constructor(public r: number) {} area() { return Math.PI * this.r * this.r } }
class Rect implements Shape { constructor(public w: number, public h: number) {} area() { return this.w * this.h } }

function totalArea(shapes: Shape[]) { return shapes.reduce((s, sh) => s + sh.area(), 0); }
```

En `totalArea` no importa la clase concreta — sólo que implemente `area()`.

## Abstracción

La abstracción consiste en exponer sólo lo necesario y definir modelos conceptuales (clases abstractas, interfaces) que capturen la esencia sin detalles de implementación.

```ts
abstract class Repository<T> {
	abstract getById(id: string): T | undefined;
}
```

Las subclases concretas implementan los detalles.

## Métodos estáticos y de instancia

- Métodos de instancia: operan sobre datos de la instancia (`this`).
- Métodos estáticos: pertenecen a la clase; se invocan sin crear una instancia (`ClassName.method()`).

```ts
class Utils {
	static clamp(v: number, lo = 0, hi = 1) { return Math.max(lo, Math.min(hi, v)); }
}

Utils.clamp(1.5); // 1
```

## Buenas prácticas y consideraciones

- Prefiere `private`/`protected` para detallar la API pública.
- Mantén las clases con responsabilidades claras y evita el "God object".
- Considera composición sobre herencia cuando la relación no es claramente "es-un(a)".
- Documenta invariantes y contratos (precondiciones/postcondiciones) para métodos públicos.
- Usa interfaces/abstract classes para definir contratos y facilitar pruebas y mocks.

## Ejemplos en TypeScript

```ts
// Clase con método estático e instancias
class Logger {
	static level = 'info';
	constructor(private prefix = '') {}
	log(msg: string) { console.log(`[${Logger.level}] ${this.prefix}${msg}`); }
}

Logger.level = 'debug';
const L = new Logger('[App] ');
L.log('arrancando');

// Herencia y polimorfismo
const shapes: Shape[] = [ new Circle(1), new Rect(2,3) ];
console.log(totalArea(shapes));
```

## Ejercicios

1. Implementa una jerarquía de `Animal` con métodos `speak()`; crea `Dog` y `Cat` que implementen `speak()` de forma distinta y demuestra polimorfismo.

2. Escribe una clase `Stack<T>` con métodos `push`, `pop`, `peek` y `size`. Asegura que el almacenamiento interno esté encapsulado.

3. Diseña una interfaz `Repository<T>` y una implementación `InMemoryRepository<T>` que permita `add`, `getById` y `remove`.

4. Explica un caso donde preferirías composición sobre herencia y refactoriza una pequeña jerarquía para usar composición.

5. Añade un método estático a la clase `Person` que permita crear una instancia a partir de un objeto plano `{ name, age }`.

## Sugerencias (recursos)

- "Design Patterns" — Gamma et al. (patrones clásicos relacionados con POO).
- TypeScript Handbook — clases, interfaces y tipos: https://www.typescriptlang.org/docs/
- Artículos sobre composición vs herencia y SOLID principles.

---