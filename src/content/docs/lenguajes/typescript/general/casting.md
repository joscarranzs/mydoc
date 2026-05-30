---
title: Casting
description: Conversión de tipos.
module: lenguajes/typescript
submodule: general
order: 14
---

Al completar esta guía podrás:

- Convertir tipos con `as`
- Usar angle bracket syntax
- Aplicar non-null assertion (`!`)
- Entender cuándo es seguro hacer casting

---

## as (recomendado)

```typescript
let valor: unknown = "Hola TypeScript";
let longitud: number = (valor as string).length;

console.log(longitud);  // 14
```

---

## Angle bracket

Alternativa sintáctica (no funciona en JSX/TSX).

```typescript
let valor: unknown = "Texto";
let longitud: number = (<string>valor).length;
```

---

## Casting seguro

Siempre verifica antes de hacer cast cuando sea posible.

```typescript
function procesar(valor: unknown): number {
  if (typeof valor === "string") {
    return (valor as string).length;
  }
  if (typeof valor === "number") {
    return valor;
  }
  return 0;
}
```

---

## Double casting

Forzar un tipo a través de `unknown`.

```typescript
let valor: string = "123";
let numero = valor as unknown as number;  // No recomendado

// Útil solo para datos externos que sabes que son seguros
let datos = JSON.parse(respuesta) as unknown as Usuario;
```

---

## as const

Casting a tipo literal inmutable.

```typescript
let colores = ["rojo", "verde"] as const;
// type: readonly ["rojo", "verde"]
// colores[0] → "rojo" (literal, no string)

let config = {
  url: "https://api.com",
  puerto: 8080,
} as const;
// Todo el objeto es readonly con tipos literales
```

---

## Non-null assertion (!)

Indica que un valor no es null ni undefined.

```typescript
let elemento = document.getElementById("app")!;
// elemento: HTMLElement (no HTMLElement | null)

let usuario = datos?.nombre!;
// "Confío en que no es undefined"
```

> **Precaución:** solo usa `!` cuando estés 100% seguro. En producción, prefiere una verificación explícita.

```typescript
// Mejor
let elemento = document.getElementById("app");
if (elemento) {
  elemento.textContent = "Cargado";
}

// Que con !
let el = document.getElementById("app")!;
el.textContent = "Cargado";
```

---

## Casting con DOM

```typescript
let input = document.querySelector("input")!;
(input as HTMLInputElement).value = "Texto";

// Más específico:
let input2 = document.querySelector("input") as HTMLInputElement;
```

---

## Resumen

| Sintaxis | Descripción |
|---|---|
| `valor as Tipo` | Casting (recomendado) |
| `<Tipo>valor` | Angle bracket (no en JSX) |
| `valor as unknown as T` | Double casting |
| `valor as const` | Tipo literal inmutable |
| `valor!` | Non-null assertion |

---

## Ejercicio

Obtén un elemento del DOM con `document.getElementById` sin usar `!`. Luego haz cast seguro usando verificación.

**Instrucciones paso a paso:**

1. Obtén elemento con `document.getElementById("titulo")` (tipo `HTMLElement | null`)
2. Verifica con `if (elemento)` que no es null
3. Haz cast a `HTMLHeadingElement` con `as`
4. Cambia su `textContent`

<details>
<summary>Mostrar solución</summary>

```typescript
let elemento = document.getElementById("titulo");

if (elemento) {
  let heading = elemento as HTMLHeadingElement;
  heading.textContent = "Nuevo título";
}
```

</details>
