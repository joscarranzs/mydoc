---
title: Estructuras de control
description: Condicionales y bucles en JavaScript.
module: lenguajes/javascript
submodule: general
order: 5
---
---

## Condicionales

### `if` — ejecutar solo si se cumple una condición

La sintaxis básica es: `if (condición) { código }`

```javascript
const edad = 20;

if (edad >= 18) {
  console.log("Eres mayor de edad");
}
```

La condición entre paréntesis debe ser un booleano (`true` o `false`). Si es truthy (verdadero), se ejecuta el bloque. Si es falsy, se salta.

### `else` — ejecutar cuando la condición es false

```javascript
const edad = 15;

if (edad >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}
```

Solo se ejecuta **uno** de los dos bloques: el `if` o el `else`. Nunca ambos.

### `else if` — verificar múltiples condiciones

Cuando tienes más de dos opciones, encadenas `else if`:

```javascript
const edad = 20;

if (edad < 13) {
  console.log("Niño");
} else if (edad < 18) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}
```

JavaScript evalúa las condiciones **de arriba hacia abajo**. En cuanto una es true, ejecuta ese bloque y **ignora el resto**.

### `switch` — múltiples valores para una misma variable

Cuando necesitas comparar una variable contra muchos valores, `switch` es más legible que muchos `else if`:

```javascript
const dia = "lunes";

switch (dia) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "viernes":
    console.log("¡Casi fin de semana!");
    break;
  case "sabado":
  case "domingo":
    console.log("Fin de semana");
    break;
  default:
    console.log("Día normal");
}
```

**Puntos importantes:**

- Cada `case` compara con `===`
- El `break` detiene la ejecución del switch. Sin él, JavaScript "cayó" al siguiente case (fall-through)
- `default` es como el `else` final
- Puedes agrupar cases dejando uno sin `break` (como "sabado" y "domingo" arriba)

---
---

## Control de flujo

### `break` — salir del bucle completamente

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) break;  // Cuando i sea 5, sale del bucle
  console.log(i);
}
// Imprime: 0, 1, 2, 3, 4
```

`break` detiene el bucle y el código continúa después de él.

### `continue` — saltar a la siguiente iteración

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;  // Cuando i sea 2, salta al siguiente
  console.log(i);
}
// Imprime: 0, 1, 3, 4
```

`continue` no sale del bucle, sino que **salta** el resto del código de esa iteración y va directo a la siguiente.

---
---

## Ejercicio

Crea un archivo `control.js` que:

1. Use un `for` para imprimir los números del 1 al 10
2. Use un `while` para contar del 10 al 1 e imprimir solo los pares
3. Use `for...of` para iterar un array de 5 ciudades e imprimir cada una
4. Use un `switch` para evaluar un número del 1 al 7 y mostrar el día de la semana
5. Use `break` y `continue` en algún bucle

<details>
<summary>Ver solución</summary>

```javascript
'use strict';

// Números del 1 al 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Pares del 10 al 1
let n = 10;
while (n >= 1) {
  if (n % 2 === 0) {
    console.log(n);
  }
  n--;
}

// Ciudades
const ciudades = ["Lima", "Bogotá", "Santiago", "Quito", "Caracas"];
for (const ciudad of ciudades) {
  console.log(`Ciudad: ${ciudad}`);
}

// Día de la semana
const numeroDia = 3;
switch (numeroDia) {
  case 1: console.log("Lunes"); break;
  case 2: console.log("Martes"); break;
  case 3: console.log("Miércoles"); break;
  case 4: console.log("Jueves"); break;
  case 5: console.log("Viernes"); break;
  case 6: console.log("Sábado"); break;
  case 7: console.log("Domingo"); break;
  default: console.log("Número inválido");
}
```

</details>
