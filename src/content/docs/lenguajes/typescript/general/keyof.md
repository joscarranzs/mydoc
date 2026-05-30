---
title: Keyof
description: Operador de claves de tipo.
module: lenguajes/typescript
submodule: general
order: 19
---

Al completar esta guía podrás:

- Usar `keyof` para obtener las claves de un tipo
- Combinar keyof con genéricos
- Aplicar indexed access types
- Crear funciones tipo seguras con keyof

---

## keyof básico

`keyof` devuelve una unión de las claves de un tipo.

```typescript
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
}

type ClavesUsuario = keyof Usuario;
// "id" | "nombre" | "email" | "activo"
```

---

## Uso con genéricos

```typescript
function obtenerPropiedad<T, K extends keyof T>(objeto: T, clave: K): T[K] {
  return objeto[clave];
}

const usuario: Usuario = { id: 1, nombre: "Ana", email: "ana@mail.com", activo: true };

const nombre = obtenerPropiedad(usuario, "nombre");  // string
const activo = obtenerPropiedad(usuario, "activo");  // boolean
// obtenerPropiedad(usuario, "inexistente");  // Error
```

---

## Indexed access types

```typescript
type TipoNombre = Usuario["nombre"];  // string
type TipoValores = Usuario[keyof Usuario];  // string | number | boolean

// Acceso anidado
interface Respuesta {
  datos: {
    usuario: Usuario;
    token: string;
  };
}

type TipoToken = Respuesta["datos"]["token"];  // string
```

---

## keyof con objetos dinámicos

```typescript
function obtenerValores<T>(objeto: T, claves: (keyof T)[]): T[keyof T][] {
  return claves.map(clave => objeto[clave]);
}

const valores = obtenerValores(usuario, ["nombre", "email"]);
// valores: (string | number | boolean)[]
```

---

## keyof con enums

```typescript
enum Direccion {
  Norte = "N",
  Sur = "S",
  Este = "E",
  Oeste = "O",
}

type ClavesDireccion = keyof typeof Direccion;
// "Norte" | "Sur" | "Este" | "Oeste"
```

---

## Validación con keyof

```typescript
function actualizar<T extends object, K extends keyof T>(
  objeto: T,
  clave: K,
  valor: T[K]
): T {
  return { ...objeto, [clave]: valor };
}

const actualizado = actualizar(usuario, "nombre", "Ana María");
console.log(actualizado.nombre);  // "Ana María"
```

---

## Resumen

| Concepto | Descripción |
|---|---|
| `keyof T` | Unión de claves del tipo T |
| `K extends keyof T` | K debe ser una clave de T |
| `T[K]` | Tipo del valor en la clave K |
| `T[keyof T]` | Unión de todos los valores de T |

---

## Ejercicio

Escribe una función genérica `pluck` que reciba un array de objetos y una clave, y devuelva un array de los valores de esa clave.

**Instrucciones paso a paso:**

1. `function pluck<T, K extends keyof T>(items: T[], clave: K): T[K][]`
2. Usa `items.map(item => item[clave])`
3. Prueba con un array de usuarios y la clave "nombre"

<details>
<summary>Mostrar solución</summary>

```typescript
interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

function pluck<T, K extends keyof T>(items: T[], clave: K): T[K][] {
  return items.map(item => item[clave]);
}

const usuarios: Usuario[] = [
  { id: 1, nombre: "Ana", email: "ana@mail.com" },
  { id: 2, nombre: "Luis", email: "luis@mail.com" },
];

const nombres = pluck(usuarios, "nombre");  // string[] — ["Ana", "Luis"]
const ids = pluck(usuarios, "id");          // number[] — [1, 2]

console.log(nombres);
console.log(ids);
```

</details>
