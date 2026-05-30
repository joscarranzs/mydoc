---
title: Genéricos básicos
description: Tipos parametrizados.
module: lenguajes/typescript
submodule: general
order: 17
---

Al completar esta guía podrás:

- Declarar funciones y tipos genéricos
- Usar múltiples type parameters
- Aplicar constraints con extends
- Inferir tipos genéricos automáticamente

---

## Función genérica básica

```typescript
function identidad<T>(valor: T): T {
  return valor;
}

let numero = identidad(42);       // T inferido como number
let texto = identidad("hola");    // T inferido como string
```

---

## Genéricos en interfaces

```typescript
interface Caja<T> {
  contenido: T;
  abrir: () => T;
}

let cajaString: Caja<string> = {
  contenido: "sorpresa",
  abrir: () => cajaString.contenido,
};

let cajaNumero: Caja<number> = {
  contenido: 42,
  abrir: () => cajaNumero.contenido,
};
```

---

## Genéricos en types

```typescript
type Par<T, U> = [T, U];

let par: Par<string, number> = ["edad", 30];
```

---

## Múltiples type parameters

```typescript
function asignar<T, U>(objeto: T, valor: U): T & { valor: U } {
  return { ...objeto, valor };
}

const resultado = asignar({ nombre: "Ana" }, 100);
// resultado: { nombre: string } & { valor: number }
```

---

## Constraints con extends

Restringe qué tipos puede aceptar el genérico.

```typescript
interface Longitud {
  length: number;
}

function mostrarLongitud<T extends Longitud>(valor: T): number {
  return valor.length;
}

console.log(mostrarLongitud("Hola"));       // 4 — string tiene length
console.log(mostrarLongitud([1, 2, 3]));    // 3 — array tiene length
// mostrarLongitud(42);  // Error: number no tiene length
```

---

## Genéricos con clases

```typescript
class Pila<T> {
  private elementos: T[] = [];

  push(elemento: T): void {
    this.elementos.push(elemento);
  }

  pop(): T | undefined {
    return this.elementos.pop();
  }

  peek(): T | undefined {
    return this.elementos[this.elementos.length - 1];
  }
}

const pilaNumeros = new Pila<number>();
pilaNumeros.push(1);
pilaNumeros.push(2);
console.log(pilaNumeros.pop());  // 2
```

---

## Inferencia automática

TypeScript infiere el tipo genérico automáticamente.

```typescript
function primerElemento<T>(arr: T[]): T | undefined {
  return arr[0];
}

const num = primerElemento([1, 2, 3]);    // number | undefined
const str = primerElemento(["a", "b"]);   // string | undefined
const mixto = primerElemento([1, "a"]);   // string | number | undefined
```

---

## Resumen

| Concepto | Sintaxis |
|---|---|
| Type parameter | `<T>` |
| Múltiples params | `<T, U, V>` |
| Constraint | `<T extends TipoBase>` |
| Uso típico | Funciones, clases, interfaces, types |

---

## Ejercicio

Escribe una función genérica `invertirPar<T, U>` que reciba un par `[T, U]` y devuelva `[U, T]`.

**Instrucciones paso a paso:**

1. Declara `function invertirPar<T, U>(par: [T, U]): [U, T]`
2. Retorna `[par[1], par[0]]`
3. Prueba con `["edad", 30]` y verifica los tipos

<details>
<summary>Mostrar solución</summary>

```typescript
function invertirPar<T, U>(par: [T, U]): [U, T] {
  return [par[1], par[0]];
}

const resultado = invertirPar(["edad", 30]);
// resultado: [number, string]
console.log(resultado);  // [30, "edad"]

// Los tipos se preservan:
const strPart = resultado[1];  // string
const numPart = resultado[0];  // number
```

</details>
