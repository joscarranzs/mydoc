# 03 - Programación: Paradigma orientado a objetos

## Tabla de contenido

- [Introducción](#introducción)
- [Objetos y clases](#objetos-y-clases)
- [Herencia](#herencia)
- [Encapsulamiento](#encapsulamiento)
- [Polimorfismo](#polimorfismo)
- [Abstracción](#abstracción)
- [Ejemplos](#ejemplos)
- [Ventajas y desventajas](#ventajas-y-desventajas)
- [Referencias](#referencias)

## Introducción

El paradigma orientado a objetos (OOP) organiza software en torno a "objetos" que contienen estado (datos) y comportamiento (métodos). OOP facilita modelar dominios con entidades que poseen responsabilidades y relaciones.

## Objetos y clases

- Clase: plantilla que define propiedades (atributos) y métodos para objetos.
- Objeto (o instancia): entidad creada a partir de una clase con estado propio.

Principios:

- Cada objeto encapsula su estado y expone una interfaz.
- Los métodos definen cómo un objeto actúa y cómo interactúa con otros objetos.

## Herencia

Herencia es un mecanismo por el cual una clase puede derivar de otra, reutilizar su comportamiento y añadir o sobrescribir comportamientos. Permite modelar jerarquías y compartir funcionalidad.

Atención:

- Uso incorrecto de herencia (p. ej. herencia múltiple confusa) puede crear acoplamiento fuerte.
- Prefiere composición (tiene-un) sobre herencia cuando sea posible.

## Encapsulamiento

Encapsulamiento oculta los detalles internos de un objeto y protege su estado mediante interfaces públicas controladas (getters/setters o métodos dedicados). Reduce acoplamiento y facilita mantener invariantes.

- Control de acceso: privado/protegido/público segrega la visibilidad.
- Invariantes y validaciones deben estar dentro de la clase.

## Polimorfismo

Polimorfismo permite que una misma interfaz represente muchos tipos concretos: métodos con el mismo nombre pueden comportarse diferente según la clase del objeto. Facilita la reutilización y la extensión mediante subtipos.

- Subtipado: tratar instancias de subclases como de la superclase.
- Polimorfismo por interfaz: implementaciones diferentes bajo la misma firma.

## Abstracción

Abstracción consiste en exponer sólo lo necesario para la interacción y ocultar la complejidad. Las interfaces y clases abstractas definen contratos que las implementaciones deben cumplir.

Beneficios:

- Permite cambiar la implementación sin afectar a usuarios del contrato.
- Favorece el diseño basado en contratos y pruebas unitarias.

## Ejemplos

- Java — clases, herencia y polimorfismo

```java
class Animal {
	public void speak() {
		System.out.println("...");
	}
}

class Dog extends Animal {
	@Override
	public void speak() {
		System.out.println("Woof");
	}
}

Animal a = new Dog(); // polimorfismo: a.speak() -> "Woof"
```

- Python — encapsulamiento mínimo y composición

```python
class Counter:
	def __init__(self):
		self._count = 0  # convención de atributo privado

	def inc(self):
		self._count += 1

	def value(self):
		return self._count

counter = Counter()
counter.inc()
print(counter.value())
```

- C++ — herencia con especificadores de acceso

```cpp
class Base {
protected:
	int x;
};

class Derived : public Base {
	void setX(int v) { x = v; }
};
```

## Ventajas y desventajas

Ventajas:

- Buena correspondencia con modelos del mundo real; útil en diseño de sistemas grandes.
- Facilita la modularidad y la reutilización mediante clases y objetos.

Desventajas:

- Puede fomentar jerarquías profundas y acoplamientos frágiles.
- Sobrecarga de OO (antipatrón) puede complicar diseños simples; preferir composición cuando es más claro.

## Referencias

- "Design Patterns: Elements of Reusable Object-Oriented Software" — Gamma, Helm, Johnson, Vlissides
- "Effective Java" — Joshua Bloch
- Oracle Java Tutorial — Classes and Objects: https://docs.oracle.com/javase/tutorial/java/javaOO/classes.html
- Python OOP tutorial: https://docs.python.org/3/tutorial/classes.html

