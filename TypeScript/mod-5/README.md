# Programación orientada a objetos en TypeScript

La programación orientada a objetos (POO) es un paradigma de programación que organiza el código en torno a objetos, que combinan datos y comportamientos. TypeScript, al ser un superconjunto de JavaScript, amplía las capacidades de POO con características como clases, interfaces, herencia y modificadores de acceso.

## 1. **Clases**

Las clases son la base de la POO en TypeScript. Permiten definir estructuras que combinan datos (propiedades) y comportamientos (métodos).

**Ejemplo:**
```typescript
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): void {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const persona = new Persona("Juan", 30);
persona.saludar();
```

## 2. **Herencia**

La herencia permite que una clase derive de otra, reutilizando sus propiedades y métodos.

**Ejemplo:**
```typescript
class Empleado extends Persona {
  puesto: string;

  constructor(nombre: string, edad: number, puesto: string) {
    super(nombre, edad);
    this.puesto = puesto;
  }

  trabajar(): void {
    console.log(`${this.nombre} está trabajando como ${this.puesto}.`);
  }
}

const empleado = new Empleado("Ana", 25, "Desarrolladora");
empleado.saludar();
empleado.trabajar();
```

## 3. **Modificadores de acceso**

TypeScript proporciona modificadores de acceso para controlar la visibilidad de las propiedades y métodos:

- **`public`**: Accesible desde cualquier lugar (por defecto).
- **`private`**: Accesible solo dentro de la clase.
- **`protected`**: Accesible dentro de la clase y sus subclases.

**Ejemplo:**
```typescript
class CuentaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  public depositar(monto: number): void {
    this.saldo += monto;
  }

  public obtenerSaldo(): number {
    return this.saldo;
  }
}

const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);
console.log(cuenta.obtenerSaldo()); // 1500
```

## 4. **Interfaces**

Las interfaces definen contratos que las clases deben cumplir. Son útiles para garantizar que las clases implementen ciertos métodos o propiedades.

**Ejemplo:**
```typescript
interface Animal {
  nombre: string;
  hacerSonido(): void;
}

class Perro implements Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  hacerSonido(): void {
    console.log("Guau guau");
  }
}

const perro = new Perro("Firulais");
perro.hacerSonido();
```

## 5. **Clases abstractas**

Las clases abstractas no pueden ser instanciadas directamente. Se utilizan como base para otras clases y pueden contener métodos abstractos que deben ser implementados por las subclases.

**Ejemplo:**
```typescript
abstract class Figura {
  abstract calcularArea(): number;

  describir(): void {
    console.log("Soy una figura geométrica.");
  }
}

class Circulo extends Figura {
  radio: number;

  constructor(radio: number) {
    super();
    this.radio = radio;
  }

  calcularArea(): number {
    return Math.PI * this.radio ** 2;
  }
}

const circulo = new Circulo(5);
console.log(circulo.calcularArea());
```

## 6. **Polimorfismo**

El polimorfismo permite tratar objetos de diferentes clases de manera uniforme si comparten una interfaz o clase base.

**Ejemplo:**
```typescript
class Gato implements Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  hacerSonido(): void {
    console.log("Miau");
  }
}

const animales: Animal[] = [new Perro("Firulais"), new Gato("Michi")];

animales.forEach((animal) => animal.hacerSonido());
```

## 7. **Decoradores**

Los decoradores son una característica experimental que permite añadir metadatos o modificar clases, métodos, propiedades o parámetros.

**Ejemplo:**
```typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Llamando a ${propertyKey} con argumentos: ${args}`);
    return metodoOriginal.apply(this, args);
  };
}

class Calculadora {
  @log
  sumar(a: number, b: number): number {
    return a + b;
  }
}

const calculadora = new Calculadora();
calculadora.sumar(2, 3);
```

---

Con estas características, TypeScript proporciona un soporte robusto para la programación orientada a objetos, permitiendo escribir código más estructurado, reutilizable y fácil de mantener. ¡Explora estas herramientas en tus proyectos!