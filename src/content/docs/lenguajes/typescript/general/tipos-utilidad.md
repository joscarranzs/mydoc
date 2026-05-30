---
title: Tipos de utilidad
description: Partial, Required, Pick, Omit y más.
module: lenguajes/typescript
submodule: general
order: 18
---

Al completar esta guía podrás:

- Usar los utility types más comunes
- Hacer propiedades opcionales con Partial
- Seleccionar y omitir propiedades con Pick y Omit
- Usar Record y Readonly

---

## Partial

Hace todas las propiedades opcionales.

```typescript
interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

function actualizarUsuario(id: number, cambios: Partial<Usuario>): void {
  // cambios puede tener cualquier subconjunto de propiedades
  console.log(`Actualizando ${id}:`, cambios);
}

actualizarUsuario(1, { nombre: "Ana" });
actualizarUsuario(2, { email: "nuevo@ejemplo.com", nombre: "Luis" });
```

---

## Required

Hace todas las propiedades obligatorias.

```typescript
interface Config {
  url?: string;
  puerto?: number;
  timeout?: number;
}

const config: Required<Config> = {
  url: "https://api.com",
  puerto: 8080,
  timeout: 5000,
};
// Todas son obligatorias ahora
```

---

## Readonly

Hace todas las propiedades de solo lectura.

```typescript
type UsuarioReadonly = Readonly<Usuario>;

const usuario: UsuarioReadonly = { id: 1, nombre: "Ana", email: "ana@mail.com" };
// usuario.nombre = "Luis";  // Error: readonly
```

---

## Pick

Selecciona un subconjunto de propiedades.

```typescript
type UsuarioBasico = Pick<Usuario, "id" | "nombre">;

const basico: UsuarioBasico = { id: 1, nombre: "Ana" };
// No tiene email
```

---

## Omit

Omite propiedades específicas.

```typescript
type UsuarioSinEmail = Omit<Usuario, "email">;

const sinEmail: UsuarioSinEmail = { id: 1, nombre: "Ana" };
```

---

## Record

Crea un tipo con claves y valores específicos.

```typescript
type Pagina = "inicio" | "acerca" | "contacto";
type Rutas = Record<Pagina, string>;

const rutas: Rutas = {
  inicio: "/",
  acerca: "/about",
  contacto: "/contact",
};
```

```typescript
type Diccionario = Record<string, number>;

const edades: Diccionario = {
  Ana: 30,
  Luis: 25,
};
```

---

## Exclude y Extract

```typescript
type T = "a" | "b" | "c" | "d";
type SinCD = Exclude<T, "c" | "d">;   // "a" | "b"
type SoloAB = Extract<T, "a" | "b">;  // "a" | "b"
```

---

## NonNullable

Elimina null y undefined.

```typescript
type Valor = string | null | undefined;
type SinNull = NonNullable<Valor>;  // string
```

---

## ReturnType y Parameters

```typescript
function crearUsuario(nombre: string, edad: number): Usuario {
  return { id: Date.now(), nombre, email: `${nombre}@mail.com` };
}

type Retorno = ReturnType<typeof crearUsuario>;   // Usuario
type Parametros = Parameters<typeof crearUsuario>; // [string, number]
```

---

## Resumen

| Utility | Descripción |
|---|---|
| `Partial<T>` | Todas propiedades opcionales |
| `Required<T>` | Todas propiedades obligatorias |
| `Readonly<T>` | Todas propiedades de solo lectura |
| `Pick<T, K>` | Selecciona propiedades K |
| `Omit<T, K>` | Omite propiedades K |
| `Record<K, V>` | Objeto con claves K y valores V |
| `Exclude<T, U>` | Excluye tipos U de T |
| `Extract<T, U>` | Extrae tipos U de T |
| `NonNullable<T>` | Elimina null y undefined |
| `ReturnType<T>` | Tipo de retorno de función T |
| `Parameters<T>` | Tipos de parámetros de función T |

---

## Ejercicio

Define una interface `Producto` con id, nombre, precio, descripcion y stock. Usa Pick para crear un tipo `ProductoCarrito` solo con id, nombre y precio.

**Instrucciones paso a paso:**

1. `interface Producto { id: number; nombre: string; precio: number; descripcion: string; stock: number }`
2. `type ProductoCarrito = Pick<Producto, "id" | "nombre" | "precio">`
3. Crea una variable de tipo ProductoCarrito

<details>
<summary>Mostrar solución</summary>

```typescript
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  stock: number;
}

type ProductoCarrito = Pick<Producto, "id" | "nombre" | "precio">;

const enCarrito: ProductoCarrito = {
  id: 1,
  nombre: "Laptop",
  precio: 1200,
};

console.log(enCarrito);
```

</details>
