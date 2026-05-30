---
title: Tipos unión
description: Valores que pueden ser de varios tipos.
module: lenguajes/typescript
submodule: general
order: 10
---

Al completar esta guía podrás:

- Declarar tipos unión con el operador `|`
- Estrechar tipos con typeof y otros checks
- Usar uniones discriminadas
- Combinar uniones de tipos y objetos

---

## Sintaxis básica

```typescript
let id: string | number;
id = "abc123";
id = 456;
// id = true;  // Error: boolean no está en la unión
```

---

## Uniones con literales

```typescript
type Estado = "activo" | "inactivo" | "pendiente";

let estado: Estado = "activo";
// estado = "cancelado";  // Error: no está en la unión
```

---

## Type narrowing

TypeScript estrecha el tipo automáticamente tras verificar.

```typescript
function procesar(valor: string | number): string {
  if (typeof valor === "string") {
    // Dentro del if, valor es string
    return valor.toUpperCase();
  }
  // Fuera del if, valor es number
  return valor.toFixed(2);
}
```

---

## Uniones de objetos

```typescript
type Perro = {
  tipo: "perro";
  raza: string;
  ladrar: () => void;
};

type Gato = {
  tipo: "gato";
  color: string;
  ronronear: () => void;
};

type Mascota = Perro | Gato;
```

---

## Uniones discriminadas

Usar una propiedad literal como discriminante.

```typescript
type Circulo = {
  tipo: "circulo";
  radio: number;
};

type Cuadrado = {
  tipo: "cuadrado";
  lado: number;
};

type Figura = Circulo | Cuadrado;

function area(figura: Figura): number {
  switch (figura.tipo) {
    case "circulo":
      return Math.PI * figura.radio ** 2;
    case "cuadrado":
      return figura.lado ** 2;
  }
}
```

---

## Uniones con arrays

```typescript
type Mixto = (string | number)[];

let datos: Mixto = ["texto", 42, "más", 100];
```

---

## Narrowing adicional

```typescript
function formatear(valor: string | string[] | null): string {
  if (valor === null) {
    return "Sin valor";
  }
  if (Array.isArray(valor)) {
    return valor.join(", ");
  }
  return valor;
}
```

---

## Resumen

| Concepto | Descripción |
|---|---|
| `type A = X \| Y` | Valor puede ser X o Y |
| Type narrowing | Estrechar tipo tras verificación |
| `typeof` guard | Para tipos primitivos |
| Discriminated union | Propiedad literal como discriminante |
| `Array.isArray` | Verificar si es array |

---

## Ejercicio

Crea una unión discriminada para `Respuesta` que pueda ser `Exito` (con datos: string[]) o `Error` (con mensaje: string). Escribe una función que maneje ambos casos.

**Instrucciones paso a paso:**

1. Define `type Exito = { tipo: "exito"; datos: string[] }`
2. Define `type Error = { tipo: "error"; mensaje: string }`
3. Define `type Respuesta = Exito | Error`
4. Función `procesarRespuesta(r: Respuesta): string` que devuelva los datos unidos o el mensaje de error

<details>
<summary>Mostrar solución</summary>

```typescript
type Exito = {
  tipo: "exito";
  datos: string[];
};

type Error = {
  tipo: "error";
  mensaje: string;
};

type Respuesta = Exito | Error;

function procesarRespuesta(respuesta: Respuesta): string {
  switch (respuesta.tipo) {
    case "exito":
      return `Datos: ${respuesta.datos.join(", ")}`;
    case "error":
      return `Error: ${respuesta.mensaje}`;
  }
}

const exito: Respuesta = { tipo: "exito", datos: ["a", "b", "c"] };
const error: Respuesta = { tipo: "error", mensaje: "Algo salió mal" };

console.log(procesarRespuesta(exito));  // "Datos: a, b, c"
console.log(procesarRespuesta(error));  // "Error: Algo salió mal"
```

</details>
