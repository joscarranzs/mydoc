---
title: Mejores prácticas
description: Buenas prácticas con TypeScript.
module: lenguajes/typescript
submodule: general
order: 37
---

Al completar esta guía podrás:

- Aplicar las mejores prácticas de la comunidad
- Escribir TypeScript limpio y mantenible
- Evitar errores comunes
- Organizar proyectos TypeScript correctamente

---

## strict mode siempre

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

El modo estricto detecta errores potenciales en compilación. Nunca lo desactives.

---

## Evitar any

```typescript
// Mal
function procesar(datos: any): any {
  return datos.nombre;
}

// Bien — usar unknown si el tipo es desconocido
function procesar(datos: unknown): string {
  if (typeof datos === "object" && datos && "nombre" in datos) {
    return (datos as { nombre: string }).nombre;
  }
  return "Sin nombre";
}

// Mejor — definir el tipo completo
interface Datos {
  nombre: string;
  edad: number;
}

function procesar(datos: Datos): string {
  return datos.nombre;
}
```

---

## Preferir type sobre interface (para uniones)

```typescript
// Interface no puede representar uniones
// type sí
type Resultado = "exito" | "error" | "pendiente";

// Interface para APIs extensibles
interface Usuario {
  id: number;
  nombre: string;
}

// type para composición
type UsuarioConRol = Usuario & { rol: string };
type UsuarioSinEmail = Omit<Usuario, "email">;
```

Regla general:
- `interface` para APIs públicas, objetos que se extienden
- `type` para uniones, tuplas, tipos condicionales

---

## No abusar de genéricos

```typescript
// Mal — demasiado genérico sin razón
function identidad<T>(valor: T): T {
  return valor;
}

// Bien — genérico con propósito
function primerElemento<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Mal — genérico innecesario
function saludar<T extends string>(nombre: T): string {
  return `Hola ${nombre}`;
}

// Bien — sin genérico
function saludar(nombre: string): string {
  return `Hola ${nombre}`;
}
```

---

## Naming conventions

```typescript
// Tipos: PascalCase
type Usuario = {};
interface Configuracion {}
enum Direccion {}

// Variables y funciones: camelCase
let nombreUsuario = "Ana";
function obtenerDatos() {}

// Genéricos: T, U, V o descriptivos
function mapear<T, U>(items: T[], fn: (item: T) => U): U[] {}

// Event handlers: handle + nombre
function handleClick(): void {}
function handleSubmit(): void {}

// Booleanos: is, has, should
let isActivo = true;
let hasPermission = false;
```

---

## Organización de archivos

```
src/
├── types/           # Tipos compartidos
│   ├── usuario.ts
│   └── api.ts
├── utils/           # Funciones auxiliares
│   ├── format.ts
│   └── validators.ts
├── services/        # Lógica de negocio
│   ├── auth.ts
│   └── usuarios.ts
├── components/      # Componentes (si aplica)
│   ├── Header.tsx
│   └── Footer.tsx
└── index.ts         # Punto de entrada
```

---

## TypeScript con export/import

```typescript
// Re-exportar para puntos de entrada
export * from "./types/usuario";
export * from "./utils/formato";

// Preferir export named sobre default
export function procesar() {}  // Bien
export default function() {}  // Evitar
```

---

## Resumen

| Práctica | Descripción |
|---|---|
| strict: true | Siempre activado |
| Evitar any | Usar unknown o tipos concretos |
| Type vs Interface | type para uniones, interface para objetos |
| Genéricos | Solo cuando aportan valor |
| Naming | PascalCase para tipos, camelCase para valores |
| Organización | Separar por capas/servicios |

---

## Ejercicio

Refactoriza este código con malas prácticas para que siga las mejores prácticas de TypeScript:

```typescript
function procesar(datos: any): any {
  return datos.valor;
}
```

**Instrucciones paso a paso:**

1. Define una interfaz para los datos
2. Tipa el retorno correctamente
3. Elimina any

<details>
<summary>Mostrar solución</summary>

```typescript
// Definir tipo
interface DatosEntrada {
  valor: number;
  nombre: string;
}

// Refactorizar
function procesar(datos: DatosEntrada): number {
  return datos.valor;
}

// Uso tipado
const resultado = procesar({ valor: 42, nombre: "Ejemplo" });
// resultado: number
```

</details>
