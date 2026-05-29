---
title: Depuración
description: Herramientas de debug.
module: lenguajes/javascript
submodule: general
order: 20
---

Al completar esta guía podrás:

- Usar console.log y sus variantes para depuración rápida
- Aplicar breakpoints con debugger
- Inspeccionar el estado del programa paso a paso
- Identificar patrones comunes de errores

---

## console.log

La herramienta de depuración más básica y más usada.

```javascript
let a = 10;
let b = 20;
console.log("Valor de a:", a, "Valor de b:", b);
```

### console.table

Muestra arreglos y objetos en formato de tabla.

```javascript
let usuarios = [
  { nombre: "Ana", edad: 30 },
  { nombre: "Luis", edad: 25 }
];

console.table(usuarios);
```

```javascript
┌─────────┬────────┬──────┐
│ (index) │ nombre │ edad │
├─────────┼────────┼──────┤
│    0    │  'Ana' │  30  │
│    1    │ 'Luis' │  25  │
└─────────┴────────┴──────┘
```

### console.group

Agrupa mensajes en una jerarquía colapsable.

```javascript
console.group("Validación de usuario");
console.log("Nombre: Ana");
console.log("Edad: 30");
console.group("Permisos");
console.log("Admin: true");
console.log("Editor: false");
console.groupEnd();
console.groupEnd();
```

### console.time

Mide el tiempo de ejecución.

```javascript
console.time("bucle");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("bucle");  // "bucle: 3.45ms"
```

---

## debugger

La sentencia `debugger` pausa la ejecución si las herramientas de desarrollo están abiertas.

```javascript
function calcularTotal(precio, cantidad) {
  let subtotal = precio * cantidad;
  debugger;  // La ejecución se pausa aquí
  let descuento = subtotal > 100 ? subtotal * 0.1 : 0;
  return subtotal - descuento;
}

calcularTotal(50, 3);
```

Cuando el intérprete encuentra `debugger`, la ejecución se detiene y puedes:

- Inspeccionar variables en el panel Sources
- Avanzar paso a paso (Step over, Step into, Step out)
- Ver la pila de llamadas (Call stack)
- Evaluar expresiones en la consola en ese contexto

---

## Breakpoints en el navegador

En DevTools > Sources:

1. Abre el archivo JavaScript
2. Haz clic en el número de línea para agregar un breakpoint
3. Recarga la página o ejecuta la función
4. La ejecución se pausa en el breakpoint

**Tipos de breakpoint:**

| Tipo | Cuándo se activa |
|---|---|
| Línea | Al alcanzar esa línea |
| Condicional | Solo si se cumple una condición |
| DOM | Al modificar un elemento del DOM |
| XHR/fetch | Al hacer una petición a una URL específica |
| Event listener | Al dispararse un evento |

---

## Call stack

La pila de llamadas muestra la secuencia de funciones que llevaron al punto actual.

```javascript
function a() {
  console.log("a");
  b();
}

function b() {
  console.log("b");
  c();
}

function c() {
  debugger;  // Call stack: a → b → c
}

a();
```

---

## Patrones comunes de errores

### Acceder a undefined

```javascript
let usuario = {};
// console.log(usuario.nombre.length);  // TypeError

// Verificar antes de acceder
if (usuario.nombre) {
  console.log(usuario.nombre.length);
}
```

### Confundir asignación con comparación

```javascript
let x = 5;

// if (x = 10) {  // Asigna 10 en lugar de comparar
//   console.log("Esto siempre se ejecuta");
// }

if (x === 10) {  // Comparación correcta
  console.log("No se ejecuta");
}
```

### Olvidar return

```javascript
function suma(a, b) {
  a + b;  // Falta return
}

console.log(suma(2, 3));  // undefined
```

### parseInt sin base

```javascript
console.log(parseInt("08"));   // 8
console.log(parseInt("08", 10));  // 8 — explícito
```

---

## Errores async

Las promesas rechazadas no capturadas pueden pasar desapercibidas.

```javascript
// Este error se pierde
// setTimeout(() => { throw new Error("Fallo"); }, 1000);

// Captura correcta
setTimeout(() => {
  try {
    throw new Error("Fallo");
  } catch (error) {
    console.log(error.message);
  }
}, 1000);
```

---

## Uso de breakpoints condicionales

En lugar de `console.log` en cada iteración de un bucle, usa breakpoints condicionales.

```javascript
for (let i = 0; i < 100; i++) {
  // Agrega breakpoint condicional: i === 50
  console.log(i);  // Solo te interesa cuando i es 50
}
```

---

## Resumen

- `console.log()` para depuración rápida
- `console.table()` para visualizar arreglos y objetos
- `console.time()` / `console.timeEnd()` para medir rendimiento
- `debugger` pausa la ejecución en DevTools
- Breakpoints permiten inspeccionar estado en cualquier punto
- Call stack muestra la secuencia de llamadas
- Verifica propiedades antes de acceder a anidadas
- No olvides `return` en funciones que deben devolver un valor

---

## Ejercicio

El siguiente código tiene dos errores. Encuéntralos y corrígelos usando depuración.

```javascript
function calcularPromedio(calificaciones) {
  let suma = 0;

  for (let i = 0; i <= calificaciones.length; i++) {
    suma += calificaciones[i];
  }

  let promedio = suma / calificaciones.length;
  return promedio;
}

let notas = [85, 90, 78, 92];
console.log(calcularPromedio(notas));
```

**Instrucciones paso a paso:**

1. Ejecuta el código y observa el resultado incorrecto
2. Agrega `debugger` dentro del bucle
3. Inspecciona el valor de `i` en cada iteración
4. Observa qué sucede en la última iteración
5. Corrige los errores
6. Verifica que el promedio sea correcto

<details>
<summary>Mostrar solución</summary>

**Error 1:** La condición del bucle es `i <= calificaciones.length`. Cuando `i` llega a 4, `calificaciones[4]` es `undefined`, y `suma += undefined` produce `NaN`.

**Error 2:** Al dividir por `calificaciones.length` el resultado incluye el `NaN`, lo que contamina el promedio.

```javascript
function calcularPromedio(calificaciones) {
  let suma = 0;

  for (let i = 0; i < calificaciones.length; i++) {
    suma += calificaciones[i];
  }

  let promedio = suma / calificaciones.length;
  return promedio;
}

console.log(calcularPromedio([85, 90, 78, 92]));  // 86.25
```

**Corrección:** cambiar `<=` por `<` para evitar acceder fuera del arreglo.

</details>
