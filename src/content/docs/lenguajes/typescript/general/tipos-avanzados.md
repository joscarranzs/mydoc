---
title: Tipos avanzados
description: Técnicas avanzadas de tipos.
module: lenguajes/typescript
submodule: general
order: 22
---

Al completar esta guía podrás:

- Usar template literal types
- Crear branded types
- Aplicar el operador satisfies
- Usar variadic tuple types

---

## Template literal types

Combinan string literals con placeholders de tipo.

```typescript
type Evento = `on${Capitalize<string>}`;
// "onChange" | "onClick" | "onSubmit" | ...

type Ruta = `/api/${string}`;
const api: Ruta = "/api/usuarios";  // OK
// const mal: Ruta = "/login";  // Error
```

```typescript
type Color = "rojo" | "verde" | "azul";
type Brillo = "claro" | "oscuro";

type Tema = `${Brillo}-${Color}`;
// "claro-rojo" | "claro-verde" | "claro-azul" | "oscuro-rojo" | ...
```

---

## Recursive types

Tipos que se referencian a sí mismos.

```typescript
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

const datos: JSONValue = {
  nombre: "Ana",
  edad: 30,
  direccion: {
    calle: "Av. Reforma",
    numeros: [1, 2, 3],
  },
};
```

---

## Branded types

Añadir una marca para hacer tipos nominales.

```typescript
type ID = string & { readonly __brand: "ID" };
type Email = string & { readonly __brand: "Email" };

function crearID(valor: string): ID {
  return valor as ID;
}

function crearEmail(valor: string): Email {
  return valor as Email;
}

function procesarUsuario(id: ID, email: Email): void {
  console.log(id, email);
}

const id = crearID("abc123");
const email = crearEmail("user@mail.com");

procesarUsuario(id, email);
// procesarUsuario(email, id);  // Error: tipos incompatibles
```

---

## satisfies

Verifica que un valor cumple un tipo sin cambiar su tipo inferido.

```typescript
type Palette = Record<string, string | string[]>;

const colores = {
  rojo: "#FF0000",
  verde: "#00FF00",
  azul: ["#0000FF", "#0000CC"],
} satisfies Palette;

// colores.rojo → string (no string | string[])
// colores.azul → string[] (no string | string[])
```

---

## Variadic tuple types

Tuplas con spread de tipos genéricos.

```typescript
type Concatenar<T extends unknown[], U extends unknown[]> = [...T, ...U];

type Resultado = Concatenar<[string, number], [boolean]>;
// [string, number, boolean]
```

```typescript
function encadenar<T extends unknown[], U extends unknown[]>(
  a: T,
  b: U
): [...T, ...U] {
  return [...a, ...b];
}

const resultado = encadenar([1, 2] as const, ["a", "b"] as const);
// [1, 2, "a", "b"]
```

---

## Resumen

| Técnica | Descripción |
|---|---|
| Template literal | `` type R = `/${string}` `` |
| Recursive | Tipo que se referencia a sí mismo |
| Branded | Tipo nominal con marca |
| satisfies | Verificar tipo sin cambiar inferencia |
| Variadic tuples | Spread de tipos en tuplas |

---

## Ejercicio

Crea un branded type `DNI` basado en string. Crea funciones que solo acepten DNI, no cualquier string.

**Instrucciones paso a paso:**

1. `type DNI = string & { readonly __brand: "DNI" }`
2. `function crearDNI(valor: string): DNI { return valor as DNI }`
3. `function validarDNI(dni: DNI): boolean`
4. Prueba que no acepte un string común

<details>
<summary>Mostrar solución</summary>

```typescript
type DNI = string & { readonly __brand: "DNI" };

function crearDNI(valor: string): DNI {
  if (!/^\d{8}[A-Z]$/.test(valor)) {
    throw new Error("Formato de DNI inválido");
  }
  return valor as DNI;
}

function validarDNI(dni: DNI): boolean {
  return dni.length === 9;
}

const dni = crearDNI("12345678Z");
console.log(validarDNI(dni));  // true

// const error: DNI = "texto";  // Error: falta la marca
```

</details>
