---
title: Fusión de declaraciones
description: Combinar múltiples declaraciones.
module: lenguajes/typescript
submodule: general
order: 26
---

Al completar esta guía podrás:

- Entender cómo se fusionan las interfaces
- Combinar namespaces con clases, funciones y enums
- Usar module augmentation para extender librerías
- Aplicar declaration merging en proyectos

---

## Interface merging

Múltiples declaraciones de la misma interfaz se fusionan.

```typescript
interface Usuario {
  nombre: string;
  edad: number;
}

interface Usuario {
  email: string;
  activo: boolean;
}

// Usuario final: { nombre: string; edad: number; email: string; activo: boolean }

const usuario: Usuario = {
  nombre: "Ana",
  edad: 30,
  email: "ana@mail.com",
  activo: true,
};
```

---

## Namespace con función

```typescript
function validar(valor: string): boolean {
  return valor.length > 0;
}

namespace validar {
  export function email(valor: string): boolean {
    return valor.includes("@");
  }

  export function telefono(valor: string): boolean {
    return /^\d{10}$/.test(valor);
  }
}

console.log(validar("texto"));     // true
console.log(validar.email("a@b")); // true
console.log(validar.telefono("5512345678")); // true
```

---

## Namespace con clase

```typescript
class Parser {
  parse(texto: string): string[] {
    return texto.split(",");
  }
}

namespace Parser {
  export function formatear(datos: string[]): string {
    return datos.join(" | ");
  }
}

const parser = new Parser();
const datos = parser.parse("a,b,c");
console.log(Parser.formatear(datos));  // "a | b | c"
```

---

## Namespace con enum

```typescript
enum Color {
  Rojo = "#FF0000",
  Verde = "#00FF00",
}

namespace Color {
  export function esCalido(color: Color): boolean {
    return color === Color.Rojo;
  }
}

console.log(Color.esCalido(Color.Rojo));  // true
```

---

## Module augmentation

Extender tipos de librerías externas.

```typescript
// express.d.ts
import "express";

declare module "express" {
  interface Request {
    usuario?: {
      id: number;
      nombre: string;
    };
  }
}

// Uso:
// app.get("/ruta", (req, res) => {
//   console.log(req.usuario?.nombre);
// });
```

---

## Global augmentation

Extender tipos globales.

```typescript
// global.d.ts
declare global {
  interface Window {
    miApp: {
      version: string;
      iniciar: () => void;
    };
  }
}

// Ahora window.miApp existe globalmente
```

---

## Limitaciones

```typescript
// type no se fusiona — error por duplicado
// type Usuario = { nombre: string };
// type Usuario = { edad: number };  // Error: Duplicate identifier

// type con intersección
type UsuarioBase = { nombre: string };
type UsuarioExtendido = UsuarioBase & { edad: number };
```

---

## Resumen

| Combinación | Resultado |
|---|---|
| interface + interface | Fusión de propiedades |
| function + namespace | Función con sub-miembros |
| class + namespace | Clase con sub-miembros |
| enum + namespace | Enum con sub-miembros |
| Module augmentation | Extender tipos externos |
| Global augmentation | Extender tipos globales |

---

## Ejercicio

Crea una interfaz `Producto` con id y nombre. Luego fusiónala con otra declaración que añada precio y stock. Crea una instancia.

**Instrucciones paso a paso:**

1. `interface Producto { id: number; nombre: string }`
2. `interface Producto { precio: number; stock: number }`
3. Crea un producto con todas las propiedades

<details>
<summary>Mostrar solución</summary>

```typescript
interface Producto {
  id: number;
  nombre: string;
}

interface Producto {
  precio: number;
  stock: number;
}

const laptop: Producto = {
  id: 1,
  nombre: "Laptop",
  precio: 1200,
  stock: 10,
};

console.log(laptop);
// { id: 1, nombre: "Laptop", precio: 1200, stock: 10 }
```

</details>
