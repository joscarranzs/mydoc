---
title: Clases
description: Clases y herencia.
module: lenguajes/javascript
submodule: general
order: 21
---

Al completar esta guía podrás:

- Definir clases con constructor, métodos y propiedades
- Usar herencia con extends y super
- Aplicar encapsulamiento con campos privados
- Entender la diferencia entre clase y prototipo

---

## Declaración de clase

Una clase es una plantilla para crear objetos.

```javascript
class Usuario {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}

let ana = new Usuario("Ana", 30);
console.log(ana.saludar());  // "Hola, soy Ana"
console.log(ana.nombre);     // "Ana"
```

> **Nota:** a diferencia de las funciones, las clases no tienen hoisting. No puedes usar una clase antes de declararla.

---

## Constructor

El método `constructor` se ejecuta automáticamente al crear una instancia con `new`.

```javascript
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
  }
}

let laptop = new Producto("Laptop", 15000);
console.log(laptop);  // Producto { nombre: "Laptop", precio: 15000, disponible: true }
```

Si no defines constructor, JavaScript usa uno vacío por defecto.

---

## Métodos

Los métodos definidos en la clase se comparten entre todas las instancias.

```javascript
class Calculadora {
  constructor(valor = 0) {
    this.valor = valor;
  }

  sumar(n) {
    this.valor += n;
    return this;  // Permite encadenamiento
  }

  restar(n) {
    this.valor -= n;
    return this;
  }

  obtener() {
    return this.valor;
  }
}

let calc = new Calculadora(10);
calc.sumar(5).restar(3);
console.log(calc.obtener());  // 12
```

---

## Propiedades públicas

Puedes declarar propiedades fuera del constructor (sintaxis moderna).

```javascript
class Usuario {
  nombre = "";
  edad = 0;
  activo = true;

  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
```

---

## Campos privados

Las propiedades privadas comienzan con `#` y solo son accesibles dentro de la clase.

```javascript
class CuentaBancaria {
  #saldo = 0;

  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldo = saldoInicial;
  }

  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
    }
  }

  obtenerSaldo() {
    return this.#saldo;
  }

  #validarMonto(monto) {
    return monto > 0 && monto <= this.#saldo;
  }
}

let cuenta = new CuentaBancaria("Ana", 1000);
cuenta.depositar(500);
console.log(cuenta.obtenerSaldo());  // 1500
// console.log(cuenta.#saldo);  // SyntaxError — privado
```

---

## Getters y setters

Permiten controlar el acceso a propiedades con sintaxis de propiedad.

```javascript
class Usuario {
  #edad;

  constructor(nombre, edad) {
    this.nombre = nombre;
    this.#edad = edad;
  }

  get edad() {
    return this.#edad;
  }

  set edad(valor) {
    if (valor >= 0 && valor < 150) {
      this.#edad = valor;
    } else {
      console.log("Edad inválida");
    }
  }
}

let usuario = new Usuario("Ana", 30);
console.log(usuario.edad);  // 30 — invoca el getter
usuario.edad = 31;          // invoca el setter
usuario.edad = 200;         // "Edad inválida"
```

---

## Herencia con extends

Una clase puede heredar de otra usando `extends`.

```javascript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    return `${this.nombre} hace un sonido`;
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre);  // Llama al constructor de Animal
    this.raza = raza;
  }

  hablar() {
    return `${this.nombre} dice guau`;
  }
}

class Gato extends Animal {
  hablar() {
    return `${this.nombre} dice miau`;
  }
}

let perro = new Perro("Rex", "Pastor Alemán");
let gato = new Gato("Misu");

console.log(perro.hablar());  // "Rex dice guau"
console.log(gato.hablar());   // "Misu dice miau"
```

> **Regla:** siempre llama a `super()` en el constructor de la subclase antes de usar `this`.

---

## super

`super` permite acceder a métodos de la clase padre.

```javascript
class Empleado extends Usuario {
  constructor(nombre, edad, salario) {
    super(nombre, edad);
    this.salario = salario;
  }

  presentarse() {
    return `${super.saludar()}. Gano $${this.salario}`;
  }
}
```

---

## Métodos estáticos

Los métodos estáticos se llaman sobre la clase, no sobre las instancias.

```javascript
class MathUtils {
  static sumar(a, b) {
    return a + b;
  }

  static esPar(n) {
    return n % 2 === 0;
  }
}

console.log(MathUtils.sumar(5, 3));  // 8
console.log(MathUtils.esPar(4));     // true
// console.log(MathUtils.prototype.sumar);  // undefined — no está en el prototipo
```

---

## instanceof

Verifica si un objeto fue creado por una clase específica.

```javascript
console.log(perro instanceof Perro);  // true
console.log(perro instanceof Animal); // true — por herencia
console.log(perro instanceof Object); // true — toda clase hereda de Object
```

---

## Resumen

| Concepto | Sintaxis |
|---|---|
| Declarar clase | `class Nombre {}` |
| Constructor | `constructor(params) {}` |
| Propiedad privada | `#propiedad` |
| Getter | `get propiedad() {}` |
| Setter | `set propiedad(valor) {}` |
| Herencia | `class Hija extends Padre {}` |
| Llamar al padre | `super()`, `super.metodo()` |
| Método estático | `static metodo() {}` |

- Las clases no tienen hoisting — deben declararse antes de usarse
- Los campos privados `#` son una característica moderna (ES2022)
- `super()` debe llamarse antes de usar `this` en una subclase
- Los métodos estáticos pertenecen a la clase, no a las instancias

---

## Ejercicio

Crea una clase `Rectangulo` con propiedades `ancho` y `alto`, un método `area()` que devuelva el área, y un método `esCuadrado()` que indique si ancho y alto son iguales.

**Instrucciones paso a paso:**

1. Declara la clase `Rectangulo`
2. El constructor recibe `ancho` y `alto`
3. Implementa `area()` que retorna `ancho * alto`
4. Implementa `esCuadrado()` que retorna `ancho === alto`
5. Crea un rectángulo de 5x3 y otro de 4x4
6. Prueba ambos métodos

<details>
<summary>Mostrar solución</summary>

```javascript
class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  area() {
    return this.ancho * this.alto;
  }

  esCuadrado() {
    return this.ancho === this.alto;
  }
}

let rect1 = new Rectangulo(5, 3);
console.log(rect1.area());        // 15
console.log(rect1.esCuadrado());  // false

let rect2 = new Rectangulo(4, 4);
console.log(rect2.area());        // 16
console.log(rect2.esCuadrado());  // true
```

</details>
