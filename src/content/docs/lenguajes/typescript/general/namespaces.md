---
title: Namespaces
description: Organización interna de código.
module: lenguajes/typescript
submodule: general
order: 16
---

Al completar esta guía podrás:

- Declarar y usar namespaces
- Exportar miembros desde un namespace
- Anidar namespaces
- Diferenciar namespaces de módulos

---

## Namespace básico

Los namespaces agrupan código relacionado bajo un mismo nombre.

```typescript
namespace Validacion {
  export function esEmail(valor: string): boolean {
    return valor.includes("@");
  }

  export function esTelefono(valor: string): boolean {
    return /^\d{10}$/.test(valor);
  }
}

console.log(Validacion.esEmail("usuario@ejemplo.com"));  // true
console.log(Validacion.esTelefono("5512345678"));         // true
```

Sin `export`, los miembros no son accesibles fuera del namespace.

---

## Namespaces anidados

```typescript
namespace App {
  export namespace Modelos {
    export interface Usuario {
      id: number;
      nombre: string;
    }
  }

  export namespace Utilidades {
    export function formatearFecha(fecha: Date): string {
      return fecha.toISOString().split("T")[0];
    }
  }
}

const usuario: App.Modelos.Usuario = { id: 1, nombre: "Ana" };
console.log(App.Utilidades.formatearFecha(new Date()));
```

---

## Namespaces multi-archivo

Se pueden dividir entre archivos usando reference tags.

```typescript
// validaciones.ts
namespace Validacion {
  export interface Regla {
    validar(valor: unknown): boolean;
    mensaje: string;
  }
}
```

```typescript
// email.ts
/// <reference path="validaciones.ts" />
namespace Validacion {
  export class EmailRegla implements Regla {
    validar(valor: unknown): boolean {
      return typeof valor === "string" && valor.includes("@");
    }
    mensaje = "Debe ser un email válido";
  }
}
```

---

## Alias de namespace

```typescript
import Validar = App.Utilidades;

console.log(Validar.formatearFecha(new Date()));
```

---

## Namespaces vs módulos

| Característica | Namespace | Módulo (ES Modules) |
|---|---|---|
| Alcance | Global | Archivo |
| Carga | Script (orden manual) | Import dinámico |
| Ámbito de uso | Legacy / scripts simples | Proyectos modernos |
| Árbol de dependencias | Manual | Automático |
| Bundle size | Todo incluido | Tree-shakeable |

> **Regla:** en proyectos modernos, usa módulos (import/export). Los namespaces quedan para scripts globales o migraciones de código legacy.

---

## Resumen

| Concepto | Descripción |
|---|---|
| `namespace X {}` | Agrupa código bajo un nombre |
| `export` | Hace accesible un miembro fuera del namespace |
| Anidamiento | `namespace A.B {}` |
| `/// <reference path>` | Vincula archivos de namespace |
| `import alias = NS` | Crea alias local |

---

## Ejercicio

Crea un namespace `Matematicas` con funciones `sumar`, `restar`, `multiplicar` y `dividir`. Úsalo desde fuera.

**Instrucciones paso a paso:**

1. Declara `namespace Matematicas { export function sumar... }` con las 4 operaciones
2. Llama a cada función desde fuera del namespace
3. Muestra los resultados

<details>
<summary>Mostrar solución</summary>

```typescript
namespace Matematicas {
  export function sumar(a: number, b: number): number {
    return a + b;
  }

  export function restar(a: number, b: number): number {
    return a - b;
  }

  export function multiplicar(a: number, b: number): number {
    return a * b;
  }

  export function dividir(a: number, b: number): number {
    if (b === 0) throw new Error("División por cero");
    return a / b;
  }
}

console.log(Matematicas.sumar(10, 5));          // 15
console.log(Matematicas.restar(10, 5));         // 5
console.log(Matematicas.multiplicar(10, 5));    // 50
console.log(Matematicas.dividir(10, 5));        // 2
```

</details>
