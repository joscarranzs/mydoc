---
title: Tipos mapeados
description: Transformar tipos existentes.
module: lenguajes/typescript
submodule: general
order: 21
---

Al completar esta guía podrás:

- Crear tipos mapeados con `[P in K]`
- Aplicar modificadores +/-
- Remapear claves con `as`
- Combinar con keyof y condicionales

---

## Sintaxis básica

```typescript
type Opcional<T> = {
  [P in keyof T]?: T[P];
};

type Usuario = {
  id: number;
  nombre: string;
  email: string;
};

type UsuarioOpcional = Opcional<Usuario>;
// { id?: number; nombre?: string; email?: string }
```

---

## readonly y modificadores

```typescript
type Congelar<T> = {
  readonly [P in keyof T]: T[P];
};

type UsuarioCongelado = Congelar<Usuario>;
// { readonly id: number; readonly nombre: string; readonly email: string }
```

Combinar modificadores:

```typescript
type Mutabilidad<T> = {
  -readonly [P in keyof T]: T[P];  // Quita readonly
};

type OpcionalMut<T> = {
  -readonly [P in keyof T]?: T[P];  // Quita readonly y hace opcional
};
```

---

## Mapped types con as

Desde TypeScript 4.1, se puede remapear la clave.

```typescript
type Prefijo<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: T[P];
};

type UsuarioConGetters = Prefijo<Usuario>;
// { getId: number; getNombre: string; getEmail: string }
```

```typescript
// Filtrar claves
type SoloString<T> = {
  [P in keyof T as T[P] extends string ? P : never]: T[P];
};

type UsuarioStrings = SoloString<Usuario>;
// { nombre: string; email: string }
```

---

## Built-in mapped types

```typescript
// Partial<T>
type PartialPersonalizado<T> = { [P in keyof T]?: T[P] };

// Required<T>
type RequiredPersonalizado<T> = { [P in keyof T]-?: T[P] };

// Readonly<T>
type ReadonlyPersonalizado<T> = { readonly [P in keyof T]: T[P] };
```

---

## Mapped types con union

```typescript
type Eventos = "click" | "hover" | "focus";

type Manejadores = {
  [E in Eventos]: () => void;
};

// {
//   click: () => void;
//   hover: () => void;
//   focus: () => void;
// }
```

---

## Transformar valores

```typescript
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type PromiseTodo<T> = {
  [P in keyof T]: Promise<T[P]>;
};

type UsuarioNullable = Nullable<Usuario>;
// { id: number | null; nombre: string | null; email: string | null }
```

---

## Resumen

| Sintaxis | Descripción |
|---|---|
| `[P in keyof T]: T[P]` | Mapear propiedades |
| `[P in keyof T]?: T[P]` | Propiedades opcionales |
| `readonly [P in keyof T]` | Propiedades de solo lectura |
| `-readonly` / `-?` | Quitar modificadores |
| `as \`new${P}\`` | Remapear claves |

---

## Ejercicio

Crea un mapped type `Serialize<T>` que convierta todas las propiedades de tipo Date a string.

**Instrucciones paso a paso:**

1. `type Serialize<T> = { [P in keyof T]: T[P] extends Date ? string : T[P] }`
2. Pruébalo con `interface Evento { titulo: string; fecha: Date; inicio: Date }`

<details>
<summary>Mostrar solución</summary>

```typescript
type Serialize<T> = {
  [P in keyof T]: T[P] extends Date ? string : T[P];
};

interface Evento {
  titulo: string;
  fecha: Date;
  inicio: Date;
  duracion: number;
}

type EventoSerializado = Serialize<Evento>;
// { titulo: string; fecha: string; inicio: string; duracion: number }

// Verificación
const evento: EventoSerializado = {
  titulo: "Reunión",
  fecha: "2024-01-15",
  inicio: "2024-01-15T10:00:00Z",
  duracion: 60,
};
```

</details>
