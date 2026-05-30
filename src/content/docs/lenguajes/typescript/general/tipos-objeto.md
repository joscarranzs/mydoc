---
title: Tipos objeto
description: Estructuras con propiedades tipadas.
module: lenguajes/typescript
submodule: general
order: 8
---

Al completar esta guía podrás:

- Definir tipos objeto con propiedades y tipos
- Usar propiedades opcionales y readonly
- Declarar métodos en tipos objeto
- Aplicar index signatures en objetos

---

## Sintaxis básica

```typescript
let usuario: {
  nombre: string;
  edad: number;
  activo: boolean;
} = {
  nombre: "Ana",
  edad: 30,
  activo: true,
};
```

---

## Propiedades opcionales

```typescript
let config: {
  url: string;
  puerto?: number;   // Opcional — puede ser number o undefined
  timeout?: number;   // Opcional
};

config = { url: "https://api.ejemplo.com" };
config = { url: "https://api.ejemplo.com", puerto: 8080 };
```

---

## Readonly

```typescript
let punto: {
  readonly x: number;
  readonly y: number;
} = { x: 10, y: 20 };

// punto.x = 5;  // Error: no se puede asignar a propiedad readonly
```

---

## Métodos

```typescript
let calculadora: {
  sumar: (a: number, b: number) => number;
  mostrar: () => void;
} = {
  sumar: (a, b) => a + b,
  mostrar: () => console.log("Calculadora lista"),
};

console.log(calculadora.sumar(3, 4));  // 7
```

---

## Tipo objeto vs interface

```typescript
// Tipo objeto en línea
let usuario: { nombre: string; edad: number };

// Equivalente con type alias
type Usuario = {
  nombre: string;
  edad: number;
};

// Equivalente con interface
interface Usuario {
  nombre: string;
  edad: number;
}
```

Para tipos reutilizables, prefiere `type` o `interface`.

---

## Anidamiento

```typescript
let empleado: {
  nombre: string;
  direccion: {
    calle: string;
    ciudad: string;
    codigoPostal: string;
  };
} = {
  nombre: "Luis",
  direccion: {
    calle: "Av. Reforma 123",
    ciudad: "CDMX",
    codigoPostal: "06600",
  },
};
```

---

## Index signatures

Para objetos con propiedades dinámicas:

```typescript
let diccionario: {
  [clave: string]: string;
} = {
  hola: "hello",
  adios: "goodbye",
};

diccionario["gracias"] = "thanks";  // OK
```

---

## Resumen

| Sintaxis | Descripción |
|---|---|
| `{ prop: type }` | Propiedad obligatoria |
| `{ prop?: type }` | Propiedad opcional |
| `{ readonly prop: type }` | Propiedad de solo lectura |
| `{ metodo: (args) => retorno }` | Método |
| `{ [key: string]: type }` | Propiedades dinámicas |

---

## Ejercicio

Define un tipo para un objeto `Libro` con título (string), autor (string), año (number, opcional) y disponible (boolean). Crea una instancia y muestra sus datos.

**Instrucciones paso a paso:**

1. Declara un objeto con tipo inline: `{ titulo: string; autor: string; año?: number; disponible: boolean }`
2. Asígnale valores
3. Imprime cada propiedad

<details>
<summary>Mostrar solución</summary>

```typescript
const libro: {
  titulo: string;
  autor: string;
  año?: number;
  disponible: boolean;
} = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  año: 1967,
  disponible: true,
};

console.log(`Título: ${libro.titulo}`);
console.log(`Autor: ${libro.autor}`);
if (libro.año) {
  console.log(`Año: ${libro.año}`);
}
console.log(`Disponible: ${libro.disponible ? "Sí" : "No"}`);
```

</details>
