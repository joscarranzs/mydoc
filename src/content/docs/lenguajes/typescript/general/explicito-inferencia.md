---
title: Explícito e inferencia
description: Anotaciones y deducción de tipos.
module: lenguajes/typescript
submodule: general
order: 4
---

Al completar esta guía podrás:

- Diferenciar entre anotaciones explícitas e inferencia
- Decidir cuándo usar cada enfoque
- Entender cómo TypeScript deduce tipos en distintos contextos
- Aplicar anotaciones en variables, parámetros y retornos

---

## Anotación explícita

Se declara el tipo después de dos puntos.

```typescript
let nombre: string = "Ana";
let edad: number = 30;
let activo: boolean = true;
```

```typescript
function saludar(nombre: string): string {
  return `Hola ${nombre}`;
}
```

---

## Inferencia

TypeScript deduce el tipo automáticamente a partir del valor asignado.

```typescript
let nombre = "Ana";      // string
let edad = 30;            // number
let activo = true;        // boolean
let numeros = [1, 2, 3];  // number[]

function sumar(a: number, b: number) {
  return a + b;           // Infiere number
}
```

---

## Cuándo usar anotación explícita

La inferencia cubre la mayoría de los casos. Usa anotación explícita cuando:

```typescript
// 1. Variable sin valor inicial
let email: string;
email = "usuario@ejemplo.com";

// 2. Parámetros de función (siempre necesarios)
function dividir(a: number, b: number): number {
  return a / b;
}

// 3. Retorno de función (opcional, mejora documentación)
function obtenerUsuario(id: number): Usuario {
  return usuarios.find(u => u.id === id);
}

// 4. Tipo no obvio desde el valor inicial
let datos: Usuario[] = JSON.parse(localStorage.getItem("usuarios") || "[]");

// 5. Variables de función que cambian de contexto
let elemento: HTMLElement | null = document.getElementById("app");
```

---

## Inferencia en contexto

TypeScript también infiere tipos desde el contexto de uso.

```typescript
// Contextual typing — el event type se infiere
document.addEventListener("click", (event) => {
  // event se infiere como MouseEvent
  console.log(event.clientX);
});

// Array methods
[1, 2, 3].forEach((num) => {
  // num se infiere como number
  console.log(num.toFixed(2));
});
```

---

## Retorno de funciones

TypeScript infiere el tipo de retorno automáticamente.

```typescript
function crearSaludo(nombre: string) {
  return `Hola ${nombre}`;  // Infiere string
}

const resultado = crearSaludo("Ana");  // resultado: string
```

Se recomienda anotar el retorno explícitamente en funciones públicas o complejas:

```typescript
function procesar(usuario: Usuario): UsuarioActualizado {
  return {
    ...usuario,
    ultimoAcceso: new Date(),
  };
}
```

---

## Resumen

| Enfoque | Cuándo usarlo |
|---|---|
| Inferencia | Variable con valor inicial, retorno simple, callbacks |
| Anotación explícita | Sin valor inicial, parámetros, APIs públicas, tipo no obvio |
| Anotación en retorno | Funciones exportadas, lógica compleja, documentación |
| Contextual typing | Eventos, métodos de arrays, promesas |

---

## Ejercicio

Declara una variable sin valor inicial con tipo `number[]`, asígnale valores, y escribe una función que reciba un parámetro sin tipo explícito para ver el error.

**Instrucciones paso a paso:**

1. Declara `let numeros: number[];` sin asignar valor
2. Asígnale `[1, 2, 3]` después
3. Crea una función que reciba un parámetro sin tipo y que el compilador infiera que es `any`
4. Activa `noImplicitAny` en tsconfig y observa el error
5. Corrige añadiendo el tipo explícito

<details>
<summary>Mostrar solución</summary>

```typescript
// explicito-vs-inferencia.ts
let numeros: number[];
numeros = [1, 2, 3];

// Sin anotación — infiere any
function duplicar(valor) {
  return valor * 2;
}

console.log(duplicar(5));

// Con noImplicitAny activo, la línea 5 da error:
// Parameter 'valor' implicitly has an 'any' type.

// Corrección:
function duplicarCorregido(valor: number): number {
  return valor * 2;
}
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

```bash
tsc explicito-vs-inferencia.ts
# Error: Parameter 'valor' implicitly has an 'any' type.
```

</details>
