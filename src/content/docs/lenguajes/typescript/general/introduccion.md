---
title: Introducción
description: Qué es TypeScript y por qué usarlo.
module: lenguajes/typescript
submodule: general
order: 1
---

Al completar esta guía podrás:

- Explicar qué es TypeScript y su relación con JavaScript
- Identificar las ventajas de usar tipos estáticos
- Configurar el compilador tsc
- Compilar un archivo TypeScript a JavaScript

---

## ¿Qué es TypeScript?

TypeScript es un superconjunto de JavaScript que añade tipos estáticos opcionales. Fue creado por Microsoft en 2012 y se ha convertido en el estándar de facto para proyectos JavaScript empresariales.

```typescript
let mensaje: string = "Hola TypeScript";
// mensaje = 42;  // Error: Type 'number' is not assignable to type 'string'
```

El código TypeScript no se ejecuta directamente en el navegador o Node.js. Primero debe compilarse (transpilares) a JavaScript mediante el compilador `tsc`.

---

## Ventajas principales

### Detección temprana de errores

```typescript
function sumar(a: number, b: number): number {
  return a + b;
}

// sumar("5", 10);  // Error en compilación, no en ejecución
```

### Autocompletado y documentación

Los tipos permiten a los editores ofrecer autocompletado preciso, navegación a definiciones y refactorización segura.

### Legibilidad y mantenibilidad

```typescript
// Sin tipos — ¿qué espera y qué devuelve?
function procesar(datos) {
  return datos.filter(d => d.activo).map(d => d.nombre);
}

// Con tipos — claro e inequívoco
interface Usuario {
  id: number;
  nombre: string;
  activo: boolean;
}

function procesar(datos: Usuario[]): string[] {
  return datos.filter(d => d.activo).map(d => d.nombre);
}
```

---

## TypeScript vs JavaScript

| Característica | JavaScript | TypeScript |
|---|---|---|
| Tipos | Dinámicos | Estáticos opcionales |
| Errores | En ejecución | En compilación |
| Curva de aprendizaje | Baja | Media |
| Ideal para | Scripts pequeños | Proyectos grandes |
| Configuración | Ninguna | tsconfig.json |
| Compatibilidad | Todos los entornos | Requiere compilación |

---

## Compilador tsc

```bash
# Instalación global
npm install -g typescript

# Verificar versión
tsc --version

# Compilar un archivo
tsc archivo.ts          # Genera archivo.js

# Inicializar configuración
tsc --init              # Genera tsconfig.json

# Compilar en modo vigilancia
tsc --watch
```

```typescript
// saludo.ts
function saludar(nombre: string): string {
  return `Hola, ${nombre}!`;
}

console.log(saludar("Mundo"));
```

```bash
tsc saludo.ts    # Genera saludo.js
node saludo.js   # "Hola, Mundo!"
```

---

## TypeScript no es otro lenguaje

TypeScript es JavaScript con tipos. Todo código JavaScript válido es código TypeScript válido. Puedes migrar gradualmente:

```typescript
// JavaScript válido = TypeScript válido
let x = 10;
let y = "texto";
function suma(a, b) {
  return a + b;
}
```

---

## Resumen

| Concepto | Descripción |
|---|---|
| TypeScript | Superconjunto de JS con tipos estáticos |
| tsc | Compilador de TS a JS |
| Ventajas | Errores tempranos, autocompletado, mantenibilidad |
| Compatibilidad | Todo JS es TS válido |
| Migración | Gradual, archivo por archivo |

---

## Ejercicio

Escribe una función en TypeScript que reciba dos números y devuelva su multiplicación. Luego compílala a JavaScript.

**Instrucciones paso a paso:**

1. Crea un archivo `multiplicar.ts`
2. Declara una función `multiplicar(a: number, b: number): number`
3. Llama a la función con dos números y muestra el resultado
4. Compila con `tsc multiplicar.ts`
5. Ejecuta el JS generado con Node.js

<details>
<summary>Mostrar solución</summary>

```typescript
// multiplicar.ts
function multiplicar(a: number, b: number): number {
  return a * b;
}

console.log(multiplicar(6, 7));
```

```bash
tsc multiplicar.ts
node multiplicar.js  # 42
```

</details>
