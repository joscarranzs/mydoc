---
title: "Null"
description: null, undefined y strictNullChecks.
module: lenguajes/typescript
submodule: general
order: 30
---

Al completar esta guía podrás:

- Diferenciar null de undefined en TypeScript
- Usar strictNullChecks correctamente
- Aplicar optional chaining y nullish coalescing
- Manejar valores nulos de forma segura

---

## null vs undefined

```typescript
let nulo: null = null;
let indefinido: undefined = undefined;

// Con strictNullChecks activado:
// let nombre: string = null;     // Error
// let edad: number = undefined;  // Error
```

Con `strict: true`, null y undefined no son asignables a otros tipos.

---

## strictNullChecks

```json
{
  "compilerOptions": {
    "strictNullChecks": true
  }
}
```

Al activarlo, todos los tipos excluyen null y undefined por defecto.

```typescript
// Sin strictNullChecks:
// string acepta null

// Con strictNullChecks:
function saludar(nombre: string): string {
  return `Hola ${nombre}`;
}

// saludar(null);  // Error
```

---

## Tipos con null explícito

Cuando un valor puede ser nulo, debe declararse explícitamente.

```typescript
function encontrarUsuario(id: number): Usuario | null {
  const usuario = usuarios.find(u => u.id === id);
  return usuario ?? null;
}

function procesar(usuario: Usuario | null): string {
  if (usuario === null) {
    return "Usuario no encontrado";
  }
  return `Usuario: ${usuario.nombre}`;
}
```

---

## Optional chaining (?.)

```typescript
interface Direccion {
  calle?: string;
  ciudad?: string;
}

interface Usuario {
  nombre: string;
  direccion?: Direccion;
}

function obtenerCalle(usuario: Usuario): string | undefined {
  return usuario.direccion?.calle;
}

// Encadenamiento múltiple
const calle = usuario?.direccion?.calle ?? "Sin dirección";
```

---

## Nullish coalescing (??)

```typescript
function mostrarLongitud(texto: string | null | undefined): number {
  return texto?.length ?? 0;
}

// ?? solo reemplaza null/undefined (no false, 0, "")
const valor = 0;
const resultado = valor ?? 42;     // 0 (0 no es nullish)
const resultado2 = valor || 42;    // 42 (0 es falsy)
```

---

## Non-null assertion (!)

```typescript
let elemento = document.getElementById("app")!;
// elemento: HTMLElement (no HTMLElement | null)

// Solo cuando estés 100% seguro
function obtenerLongitud(texto: string | undefined): number {
  return texto!.length;  // Confías en que no es undefined
}
```

---

## Manejo seguro

```typescript
function procesarUsuario(usuario: Usuario | null | undefined): string {
  // Verificación explícita
  if (usuario == null) {
    return "Sin usuario";
  }

  // Optional chaining
  const nombre = usuario?.nombre ?? "Anónimo";

  return `Hola, ${nombre}`;
}
```

---

## Resumen

| Concepto | Descripción |
|---|---|
| strictNullChecks | null/undefined no asignables a otros tipos |
| `T \| null` | Tipo que puede ser nulo |
| `?.` | Optional chaining |
| `??` | Nullish coalescing |
| `!` | Non-null assertion |
| `?? vs \|\|` | ?? solo null/undefined; \|\| cualquier falsy |

---

## Ejercicio

Escribe una función segura que reciba un objeto con `nombre?: string` y `edad?: number`, y devuelva "Nombre: X, Edad: Y" usando optional chaining y nullish coalescing.

**Instrucciones paso a paso:**

1. `interface Datos { nombre?: string; edad?: number }`
2. Función `mostrar(datos?: Datos): string`
3. Usa `?.` y `??` para valores por defecto

<details>
<summary>Mostrar solución</summary>

```typescript
interface Datos {
  nombre?: string;
  edad?: number;
}

function mostrar(datos?: Datos): string {
  const nombre = datos?.nombre ?? "Anónimo";
  const edad = datos?.edad ?? 0;
  return `Nombre: ${nombre}, Edad: ${edad}`;
}

console.log(mostrar({ nombre: "Ana", edad: 30 }));
// "Nombre: Ana, Edad: 30"

console.log(mostrar({}));
// "Nombre: Anónimo, Edad: 0"

console.log(mostrar());
// "Nombre: Anónimo, Edad: 0"
```

</details>
