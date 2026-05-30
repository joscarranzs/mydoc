---
title: Tipos literales
description: Valores exactos como tipos.
module: lenguajes/typescript
submodule: general
order: 11
---

Al completar esta guía podrás:

- Usar valores literales como tipos
- Combinar literales en uniones
- Aplicar `as const` para inferencia literal
- Diferenciar tipos literales de tipos generales

---

## Literales como tipos

Un tipo literal no es solo `string`, sino un valor específico.

```typescript
let saludo: "hola" = "hola";
// saludo = "adiós";  // Error: '"adiós"' no es asignable a '"hola"'

let direccion: "norte" | "sur" | "este" | "oeste" = "norte";
```

---

## Uniones de literales

El uso más común: limitar valores posibles.

```typescript
type Color = "rojo" | "verde" | "azul";
type Estado = "activo" | "inactivo" | "pendiente";
type Numero = 1 | 2 | 3 | 4 | 5;

let fondo: Color = "rojo";
let calificacion: Numero = 5;

function cambiarEstado(estado: Estado): void {
  console.log(`Cambiando a ${estado}`);
}

cambiarEstado("activo");    // OK
// cambiarEstado("cancelado");  // Error
```

---

## as const

`as const` infiere el tipo más específico posible.

```typescript
// Sin as const — inferido como string
let colores = ["rojo", "verde", "azul"];
// colores[0] → string

// Con as const — inferido como tupla literal
let coloresConst = ["rojo", "verde", "azul"] as const;
// coloresConst → readonly ["rojo", "verde", "azul"]
// coloresConst[0] → "rojo"
```

```typescript
const config = {
  url: "https://api.ejemplo.com",
  puerto: 8080,
} as const;

// config.url → "https://api.ejemplo.com" (literal, no string)
// config.puerto → 8080 (literal, no number)
// config.puerto = 9090;  // Error: readonly
```

---

## Template literal types

```typescript
type Evento = `on${Capitalize<string>}`;
// "onChange", "onClick", "onSubmit"...

type Ruta = `/api/${string}`;
let api: Ruta = "/api/usuarios";  // OK
// api = "/login";  // Error
```

---

## Combinación con uniones

```typescript
type Talla = "S" | "M" | "L" | "XL";
type ColorCamiseta = "blanco" | "negro" | "gris";

type Camiseta = `${Talla}-${ColorCamiseta}`;
// "S-blanco" | "S-negro" | "S-gris" | "M-blanco" | ...
```

---

## Resumen

| Concepto | Ejemplo |
|---|---|
| Literal string | `type S = "hola"` |
| Literal number | `type N = 42` |
| Unión de literales | `type Color = "rojo" \| "verde"` |
| as const | `let x = "texto" as const` |
| Template literal | `` type Ruta = `/${string}` `` |

---

## Ejercicio

Define un tipo `Direccion` que solo acepte "norte", "sur", "este", "oeste". Escribe una función que reciba una dirección y devuelva el opuesto.

**Instrucciones paso a paso:**

1. Declara `type Direccion = "norte" | "sur" | "este" | "oeste"`
2. Función `opuesto(d: Direccion): Direccion`
3. Usa switch para devolver el opuesto
4. Prueba con "norte" → "sur"

<details>
<summary>Mostrar solución</summary>

```typescript
type Direccion = "norte" | "sur" | "este" | "oeste";

function opuesto(d: Direccion): Direccion {
  switch (d) {
    case "norte": return "sur";
    case "sur": return "norte";
    case "este": return "oeste";
    case "oeste": return "este";
  }
}

console.log(opuesto("norte"));  // "sur"
console.log(opuesto("este"));   // "oeste"
```

</details>
