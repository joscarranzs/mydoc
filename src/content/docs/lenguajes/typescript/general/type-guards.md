---
title: Type Guards
description: Estrechar tipos en tiempo de ejecución.
module: lenguajes/typescript
submodule: general
order: 23
---

Al completar esta guía podrás:

- Usar typeof, instanceof e in como type guards
- Crear type guards personalizados
- Aplicar discriminated unions
- Usar asserts para narrowing

---

## typeof guard

```typescript
function procesar(valor: string | number): string {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }
  return valor.toFixed(2);
}
```

`typeof` funciona con: `string`, `number`, `boolean`, `symbol`, `bigint`, `undefined`, `object`, `function`.

---

## instanceof guard

```typescript
class ErrorRed {
  constructor(public mensaje: string, public codigo: number) {}
}

class ErrorAuth {
  constructor(public mensaje: string) {}
}

function manejarError(error: ErrorRed | ErrorAuth): string {
  if (error instanceof ErrorRed) {
    return `Error de red [${error.codigo}]: ${error.mensaje}`;
  }
  return `Error de auth: ${error.mensaje}`;
}
```

---

## in guard

```typescript
type Perro = { raza: string; ladrar: () => void };
type Pajaro = { especie: string; volar: () => void };

function mover(animal: Perro | Pajaro): void {
  if ("ladrar" in animal) {
    animal.ladrar();  // animal es Perro
  } else {
    animal.volar();   // animal es Pajaro
  }
}
```

---

## User-defined type guards

Función que retorna un predicado de tipo.

```typescript
interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

function esUsuario(valor: unknown): valor is Usuario {
  if (typeof valor !== "object" || valor === null) return false;
  const obj = valor as Record<string, unknown>;
  return (
    typeof obj.id === "number" &&
    typeof obj.nombre === "string" &&
    typeof obj.email === "string"
  );
}

function procesar(datos: unknown): void {
  if (esUsuario(datos)) {
    console.log(datos.nombre);  // datos es Usuario aquí
  }
}
```

---

## asserts

`asserts` garantiza que una condición se cumple o lanza error.

```typescript
function afirmarString(valor: unknown): asserts valor is string {
  if (typeof valor !== "string") {
    throw new Error("No es un string");
  }
}

function procesar(valor: unknown): void {
  afirmarString(valor);
  console.log(valor.toUpperCase());  // valor es string
}
```

---

## Discriminated unions

El tipo guard más común y potente.

```typescript
type Peticion =
  | { tipo: "exito"; datos: string[] }
  | { tipo: "error"; mensaje: string }
  | { tipo: "cargando" };

function manejar(p: Peticion): string {
  switch (p.tipo) {
    case "exito":
      return `Datos: ${p.datos.join(", ")}`;
    case "error":
      return `Error: ${p.mensaje}`;
    case "cargando":
      return "Cargando...";
  }
}
```

---

## Resumen

| Guard | Sintaxis | Uso |
|---|---|---|
| typeof | `typeof x === "string"` | Primitivos |
| instanceof | `x instanceof Clase` | Instancias de clase |
| in | `"prop" in x` | Propiedades de objeto |
| User-defined | `x is Tipo` | Validación personalizada |
| asserts | `asserts x is Tipo` | Garantiza tipo o falla |

---

## Ejercicio

Crea un type guard personalizado `esNumeroValido` que verifique si un valor es un número finito.

**Instrucciones paso a paso:**

1. `function esNumeroValido(valor: unknown): valor is number`
2. Verifica `typeof valor === "number" && isFinite(valor)`
3. Úsalo en una función que procese `unknown`

<details>
<summary>Mostrar solución</summary>

```typescript
function esNumeroValido(valor: unknown): valor is number {
  return typeof valor === "number" && isFinite(valor);
}

function procesar(valor: unknown): string {
  if (esNumeroValido(valor)) {
    return `Número válido: ${valor.toFixed(2)}`;
  }
  return "No es un número válido";
}

console.log(procesar(42));         // "Número válido: 42.00"
console.log(procesar("texto"));    // "No es un número válido"
console.log(procesar(NaN));        // "No es un número válido"
console.log(procesar(Infinity));   // "No es un número válido"
```

</details>
