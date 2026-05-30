---
title: Firmas de índice
description: Propiedades dinámicas en objetos.
module: lenguajes/typescript
submodule: general
order: 25
---

Al completar esta guía podrás:

- Declarar propiedades dinámicas con index signatures
- Combinar propiedades fijas con dinámicas
- Usar readonly en index signatures
- Diferenciar Record de index signature

---

## Index signature básica

```typescript
interface Diccionario {
  [clave: string]: string;
}

const traducciones: Diccionario = {
  hola: "hello",
  adios: "goodbye",
  gracias: "thanks",
};

traducciones["por_favor"] = "please";
```

---

## Tipos de clave

```typescript
// string como clave
interface DiccionarioString {
  [key: string]: string;
}

// number como clave (como array asociativo)
interface DiccionarioNumerico {
  [index: number]: string;
}

const dias: DiccionarioNumerico = {
  0: "domingo",
  1: "lunes",
  2: "martes",
};
```

---

## Combinar propiedades fijas y dinámicas

```typescript
interface Usuario {
  nombre: string;
  edad: number;
  [key: string]: string | number;  // El valor debe ser compatible
}

const usuario: Usuario = {
  nombre: "Ana",
  edad: 30,
  email: "ana@mail.com",    // Dinámica
  telefono: "5512345678",   // Dinámica
};
```

> **Regla:** el tipo del index signature debe ser un supertipo de todas las propiedades fijas.

---

## Readonly index

```typescript
interface Config {
  readonly [key: string]: string;
}

const config: Config = {
  url: "https://api.com",
};

// config["url"] = "otra";  // Error: readonly
```

---

## Index signature con union

```typescript
interface Resultados {
  [key: string]: "aprobado" | "reprobado" | "pendiente";
}

const examenes: Resultados = {
  matematicas: "aprobado",
  fisica: "pendiente",
  historia: "reprobado",
};
```

---

## Record vs Index signature

```typescript
// Record — clave conocida, valor homogéneo
type Paginas = "inicio" | "acerca" | "contacto";
type Rutas = Record<Paginas, string>;

// Index signature — clave dinámica
interface Cache {
  [url: string]: { datos: unknown; timestamp: number };
}
```

| Característica | Record | Index signature |
|---|---|---|
| Claves | Conjunto conocido | Cualquier string/number |
| Flexibilidad | Limitado a claves definidas | Totalmente dinámico |
| Tipo de clave | Union literal | string, number, symbol |

---

## Iterar con index signatures

```typescript
function mostrarTraducciones(dict: { [key: string]: string }): void {
  for (const [clave, valor] of Object.entries(dict)) {
    console.log(`${clave} → ${valor}`);
  }
}
```

---

## Resumen

| Sintaxis | Descripción |
|---|---|
| `[key: string]: type` | Propiedades dinámicas string |
| `[index: number]: type` | Propiedades dinámicas numéricas |
| `readonly [key: string]: type` | Solo lectura |
| Combinación | Propiedades fijas + dinámicas |
| Record | Claves conocidas y limitadas |

---

## Ejercicio

Crea una interfaz `CacheAPI` con una propiedad fija `version: number` y un index signature que permita almacenar cualquier respuesta como `{ datos: unknown; timestamp: number }`.

**Instrucciones paso a paso:**

1. `interface CacheAPI { version: number; [endpoint: string]: { datos: unknown; timestamp: number } | number }`
2. Crea una instancia y asigna valores
3. Accede a una clave dinámica

<details>
<summary>Mostrar solución</summary>

```typescript
interface CacheAPI {
  version: number;
  [endpoint: string]: { datos: unknown; timestamp: number } | number;
}

const cache: CacheAPI = {
  version: 2,
  "/api/usuarios": {
    datos: [{ id: 1, nombre: "Ana" }],
    timestamp: Date.now(),
  },
  "/api/productos": {
    datos: [{ id: 1, nombre: "Laptop" }],
    timestamp: Date.now(),
  },
};

console.log(cache.version);            // 2
console.log(cache["/api/usuarios"]);   // { datos: [...], timestamp: ... }

// Verificar tipo al acceder
const respuesta = cache["/api/usuarios"];
if (respuesta && typeof respuesta === "object" && "datos" in respuesta) {
  console.log(respuesta.datos);
}
```

</details>
