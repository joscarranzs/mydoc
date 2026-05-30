---
title: Clases
description: POO con tipos en TypeScript.
module: lenguajes/typescript
submodule: general
order: 15
---

Al completar esta guía podrás:

- Declarar clases con propiedades tipadas
- Usar modificadores de acceso (public, private, protected)
- Implementar interfaces con clases
- Aplicar parameter properties y clases abstractas

---

## Clase básica

```typescript
class Usuario {
  nombre: string;
  edad: number;
  activo: boolean;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
    this.activo = true;
  }

  saludar(): string {
    return `Hola, soy ${this.nombre}`;
  }
}

const ana = new Usuario("Ana", 30);
console.log(ana.saludar());  // "Hola, soy Ana"
```

---

## Parameter properties

Declarar y asignar propiedades directamente en el constructor.

```typescript
class Producto {
  constructor(
    public id: number,
    public nombre: string,
    private precio: number,
    readonly codigo: string
  ) {}

  getPrecio(): number {
    return this.precio;
  }
}

const laptop = new Producto(1, "Laptop", 1200, "LAP-001");
console.log(laptop.nombre);     // "Laptop"
// console.log(laptop.precio);  // Error: private
// laptop.codigo = "nuevo";     // Error: readonly
```

---

## Modificadores de acceso

```typescript
class Cuenta {
  public titular: string;       // Accesible desde cualquier lugar
  private saldo: number;        // Solo dentro de la clase
  protected numeroCuenta: string; // Clase y subclases

  constructor(titular: string, saldoInicial: number) {
    this.titular = titular;
    this.saldo = saldoInicial;
    this.numeroCuenta = `CT-${Date.now()}`;
  }

  public depositar(monto: number): void {
    if (monto > 0) {
      this.saldo += monto;
    }
  }

  private registrarOperacion(tipo: string): void {
    console.log(`${tipo} - ${new Date().toISOString()}`);
  }
}
```

---

## implements

Una clase puede implementar una o más interfaces.

```typescript
interface Volador {
  volar(): void;
}

interface Nadador {
  nadar(): void;
}

class Pato implements Volador, Nadador {
  volar(): void {
    console.log("El pato vuela");
  }

  nadar(): void {
    console.log("El pato nada");
  }
}
```

---

## Clases abstractas

No se pueden instanciar directamente. Sirven como base.

```typescript
abstract class Animal {
  constructor(public nombre: string) {}

  abstract hacerSonido(): void;

  mover(): void {
    console.log(`${this.nombre} se mueve`);
  }
}

class Perro extends Animal {
  hacerSonido(): void {
    console.log("Guau");
  }
}

// const animal = new Animal("x");  // Error: abstracta
const perro = new Perro("Rex");
perro.hacerSonido();  // "Guau"
perro.mover();         // "Rex se mueve"
```

---

## Getters y setters

```typescript
class Temperatura {
  private _celsius: number = 0;

  get celsius(): number {
    return this._celsius;
  }

  set celsius(valor: number) {
    if (valor < -273.15) {
      throw new Error("Temperatura por debajo del cero absoluto");
    }
    this._celsius = valor;
  }

  get fahrenheit(): number {
    return this._celsius * 9/5 + 32;
  }
}

const temp = new Temperatura();
temp.celsius = 25;
console.log(temp.fahrenheit);  // 77
```

---

## Resumen

| Concepto | Descripción |
|---|---|
| Parameter properties | Declarar en constructor con public/private |
| public | Accesible desde cualquier lugar |
| private | Solo dentro de la clase |
| protected | Clase y subclases |
| implements | Contrato de interfaz |
| abstract | Clase base que no se instancia |
| get/set | Propiedades con lógica de acceso |

---

## Ejercicio

Crea una clase abstracta `Figura` con un método abstracto `area(): number` y una propiedad `nombre`. Crea `Circulo` y `Rectangulo` que la extiendan.

**Instrucciones paso a paso:**

1. `abstract class Figura { constructor(public nombre: string) {}; abstract area(): number; }`
2. `class Circulo extends Figura { constructor(nombre: string, public radio: number) { super(nombre); } area() { return Math.PI * this.radio ** 2; } }`
3. `class Rectangulo extends Figura { constructor(nombre: string, public ancho: number, public alto: number) { super(nombre); } area() { return this.ancho * this.alto; } }`
4. Crea instancias y muestra áreas

<details>
<summary>Mostrar solución</summary>

```typescript
abstract class Figura {
  constructor(public nombre: string) {}
  abstract area(): number;
}

class Circulo extends Figura {
  constructor(nombre: string, public radio: number) {
    super(nombre);
  }

  area(): number {
    return Math.PI * this.radio ** 2;
  }
}

class Rectangulo extends Figura {
  constructor(nombre: string, public ancho: number, public alto: number) {
    super(nombre);
  }

  area(): number {
    return this.ancho * this.alto;
  }
}

const circulo = new Circulo("Círculo", 5);
const rectangulo = new Rectangulo("Rectángulo", 4, 6);

console.log(`${circulo.nombre}: ${circulo.area().toFixed(2)}`);     // 78.54
console.log(`${rectangulo.nombre}: ${rectangulo.area()}`);          // 24
```

</details>
