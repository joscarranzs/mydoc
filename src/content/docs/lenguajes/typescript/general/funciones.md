---
title: Funciones
description: Parámetros y retorno tipados.
module: lenguajes/typescript
submodule: general
order: 13
---

Al completar esta guía podrás:

- Tipar parámetros y retorno de funciones
- Usar parámetros opcionales y por defecto
- Declarar funciones con rest parameters y this
- Aplicar function overloads

---

## Sintaxis básica

```typescript
// Parámetros tipados, retorno tipado
function sumar(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiplicar = (a: number, b: number): number => {
  return a * b;
};

// Sin retorno
function log(mensaje: string): void {
  console.log(mensaje);
}
```

---

## Parámetros opcionales

```typescript
function saludar(nombre: string, saludo?: string): string {
  if (saludo) {
    return `${saludo}, ${nombre}!`;
  }
  return `Hola, ${nombre}!`;
}

console.log(saludar("Ana"));           // "Hola, Ana!"
console.log(saludar("Ana", "Buenos días")); // "Buenos días, Ana!"
```

Los opcionales siempre deben ir después de los obligatorios.

---

## Parámetros por defecto

```typescript
function crearUsuario(nombre: string, activo: boolean = true): object {
  return { nombre, activo };
}

console.log(crearUsuario("Ana"));       // { nombre: "Ana", activo: true }
console.log(crearUsuario("Luis", false)); // { nombre: "Luis", activo: false }
```

---

## Rest parameters

```typescript
function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((total, n) => total + n, 0);
}

console.log(sumarTodos(1, 2, 3, 4, 5));  // 15
```

---

## this en funciones

```typescript
interface Boton {
  texto: string;
  click: (this: HTMLElement) => void;
}

const boton: Boton = {
  texto: "Enviar",
  click: function (this: HTMLElement) {
    console.log(this.textContent);
  },
};
```

---

## Function overloads

Múltiples firmas para una misma función.

```typescript
function combinar(a: string, b: string): string;
function combinar(a: number, b: number): number;
function combinar(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  }
  throw new Error("Tipos incompatibles");
}

console.log(combinar("hola ", "mundo"));  // "hola mundo"
console.log(combinar(3, 4));              // 12
```

---

## Tipo función

```typescript
type Operacion = (a: number, b: number) => number;

const suma: Operacion = (a, b) => a + b;
const resta: Operacion = (a, b) => a - b;

function calcular(a: number, b: number, operacion: Operacion): number {
  return operacion(a, b);
}

console.log(calcular(10, 5, suma));   // 15
console.log(calcular(10, 5, resta));  // 5
```

---

## Resumen

| Característica | Sintaxis |
|---|---|
| Parámetros | `(a: number, b: string)` |
| Retorno | `(): boolean` |
| Opcional | `(nombre?: string)` |
| Por defecto | `(activo: boolean = true)` |
| Rest | `(...items: number[])` |
| Overloads | Múltiples firmas antes de implementación |
| Tipo función | `type Fn = (x: number) => void` |

---

## Ejercicio

Escribe una función con overloads que reciba un string (lo repite 3 veces) o un número (lo eleva al cubo).

**Instrucciones paso a paso:**

1. Declara dos overloads: `procesar(valor: string): string` y `procesar(valor: number): number`
2. Implementa según el tipo
3. Prueba ambos casos

<details>
<summary>Mostrar solución</summary>

```typescript
function procesar(valor: string): string;
function procesar(valor: number): number;
function procesar(valor: string | number): string | number {
  if (typeof valor === "string") {
    return valor.repeat(3);
  }
  return valor ** 3;
}

console.log(procesar("hola"));  // "holaholahola"
console.log(procesar(3));       // 27
```

</details>
