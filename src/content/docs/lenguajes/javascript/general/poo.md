---
title: Programación orientada a objetos
description: Clases, prototipos, herencia y POO en JavaScript.
module: lenguajes/javascript
submodule: general
order: 7
---
---

## Crear una clase

Una clase es el **molde** para crear objetos. Define qué propiedades y métodos tendrán los objetos que cree:

```javascript
class Animal {
  // El constructor se ejecuta cuando creas un nuevo objeto
  constructor(nombre, tipo) {
    this.nombre = nombre;  // Propiedad
    this.tipo = tipo;      // Propiedad
  }

  // Método — una función que pertenece a la clase
  presentar() {
    return `Soy ${this.nombre}, un ${this.tipo}`;
  }
}
```

**Explicación paso a paso:**

1. `class Animal` — declara una clase llamada `Animal`
2. `constructor(nombre, tipo)` — función especial que se ejecuta al crear un objeto. Recibe los datos iniciales
3. `this.nombre = nombre` — `this` se refiere al objeto que se está creando. Guarda `nombre` como propiedad del objeto
4. `presentar()` — es un método que puedes llamar desde cualquier objeto creado con esta clase

**Crear un objeto (instancia):**

```javascript
const perro = new Animal("Rex", "perro");
//        ^^^^^^  ^^^^^^  ^^^^^^
//       objeto   arg1    arg2

console.log(perro.presentar()); // "Soy Rex, un perro"
```

`new` crea un nuevo objeto usando la clase como molde, y pasa los argumentos al constructor.

---
---

## Métodos estáticos

Un método estático pertenece a la **clase**, no a los objetos. Se usa para utilidades generales:

```javascript
class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }

  // Método estático — se llama en la clase, no en el objeto
  static crear(nombre, tipo) {
    return new Animal(nombre, tipo);
  }
}

// No puedes hacer: perro.crear() — no existe en el objeto

// Lo llamas en la clase:
const gato = Animal.crear("Michi", "gato");
```

Los métodos estáticos son útiles para fábricas de objetos o utilidades que no dependen de un estado específico.

---
---

## Propiedades privadas

JavaScript moderno permite crear propiedades que **no se pueden acceder desde fuera** de la clase, usando `#`:

```javascript
class Cuenta {
  #saldo; // Propiedad privada — solo accesible dentro de la clase

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  get saldo() {
    return this.#saldo;
  }

  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
      console.log(`Depósito de $${monto}. Saldo: $${this.#saldo}`);
    }
  }

  retirar(monto) {
    if (monto > 0 && monto <= this.#saldo) {
      this.#saldo -= monto;
      console.log(`Retiro de $${monto}. Saldo: $this.#saldo`);
    }
  }
}

const cuenta = new Cuenta(1000);
cuenta.depositar(500);  // "Depósito de $500. Saldo: $1500"
console.log(cuenta.saldo); // 1500

// console.log(cuenta.#saldo); // SyntaxError — no se puede acceder
```

**¿Por qué usar propiedades privadas?** Para proteger datos internos. Si alguien intenta modificar el saldo directamente, se produce un error. Solo se puede modificar a través de los métodos (`depositar`, `retirar`), que pueden validar los datos.

---
---

## Preguntas

**1. ¿Qué hace `super()` en un constructor?**

- a) Crea un objeto nuevo
- b) Llama al constructor de la clase padre
- c) Elimina la clase padre
- d) Convierte la clase en estática

**2. ¿Cómo se define una propiedad privada?**

- a) `private saldo = 0;`
- b) `#saldo = 0;`
- c) `_saldo = 0;`
- d) `this.saldo = 0;`

**3. ¿Qué retorna `Animal.crear("Rex", "perro")`?**

- a) `undefined`
- b) Un string
- c) Una nueva instancia de Animal
- d) Un error

**4. ¿Cuál es la diferencia entre `get` y un método normal?**

- a) `get` se invoca con paréntesis, el método sin ellos
- b) `get` se accede como propiedad (sin paréntesis), el método con paréntesis
- c) `get` es privado
- d) No hay diferencia

**5. ¿Cómo sobrescribe un método en una clase hija?**

- a) Se redefine el método en la clase hija
- b) Se usa `override`
- c) No se puede sobrescribir
- d) Se usa `super.metodo()`

---
