---
title: Alias e interfaces
description: type vs interface.
module: lenguajes/typescript
submodule: general
order: 12
---

Al completar esta guía podrás:

- Crear tipos reutilizables con `type` e `interface`
- Diferenciar cuándo usar cada uno
- Extender e intersectar tipos
- Aplicar las mejores prácticas de la comunidad

---

## type alias

Define un nombre para cualquier tipo.

```typescript
type ID = string | number;
type Usuario = {
  id: ID;
  nombre: string;
  edad: number;
};
type Callback = (error: Error | null, datos: Usuario[]) => void;

let id: ID = "abc123";
```

---

## interface

Define la forma de un objeto.

```typescript
interface Usuario {
  id: string;
  nombre: string;
  edad: number;
}

let usuario: Usuario = {
  id: "1",
  nombre: "Ana",
  edad: 30,
};
```

---

## Diferencias clave

```typescript
// type puede representar cualquier tipo
type ID = string | number;
type Par<T> = [T, T];

// interface solo objetos
interface ParInterface<T> {
  primero: T;
  segundo: T;
}
```

```typescript
// interface se puede extender (declaration merging)
interface Usuario {
  email: string;
}

interface Usuario {
  telefono: string;
}
// Usuario tiene ambas propiedades: email y telefono

// type no permite reabrir — error por duplicado
// type Usuario = { email: string };
// type Usuario = { telefono: string };  // Error
```

```typescript
// Extensión
interface Empleado extends Usuario {
  salario: number;
}

// Equivalente con type (intersección)
type Empleado = Usuario & { salario: number };
```

---

## Cuándo usar cada uno

```typescript
// Usa interface para:
// - APIs públicas de librerías
// - Objetos que se extienden
// - Declaration merging (sobrescribir tipos existentes)

interface APIResponse<T> {
  datos: T;
  error: string | null;
}

// Usa type para:
// - Uniones e intersecciones
// - Tuplas
// - Primitivas con alias
// - Tipos condicionales y mapeados
// - React Props (convención popular)

type Resultado = "exito" | "error";
type ParNumerico = [number, number];
type Opcional<T> = T | null | undefined;
```

---

## Intersección con &

```typescript
type Nombrable = { nombre: string };
type Editable = { edad: number };

type Persona = Nombrable & Editable;
// Persona = { nombre: string; edad: number }

type PersonaConEmail = Persona & { email: string };
```

---

## Resumen

| Característica | type | interface |
|---|---|---|
| Objetos | Sí | Sí |
| Uniones | Sí | No |
| Primitivas | Sí | No |
| Tuplas | Sí | No |
| Extensión | `&` (intersección) | `extends` |
| Declaration merging | No | Sí |
| Computado | Sí | No (solo con index) |

---

## Ejercicio

Define una `interface Animal` con nombre y sonido. Luego define un `type` Perro que extienda Animal y añada raza. Crea una instancia.

**Instrucciones paso a paso:**

1. `interface Animal { nombre: string; sonido: string }`
2. `type Perro = Animal & { raza: string }`
3. Crea un perro y llama a una función que reciba Animal

<details>
<summary>Mostrar solución</summary>

```typescript
interface Animal {
  nombre: string;
  sonido: string;
}

type Perro = Animal & {
  raza: string;
};

function hacerSonido(animal: Animal): void {
  console.log(`${animal.nombre} hace: ${animal.sonido}`);
}

const miPerro: Perro = {
  nombre: "Rex",
  sonido: "Guau",
  raza: "Labrador",
};

hacerSonido(miPerro);  // "Rex hace: Guau"
```

</details>
