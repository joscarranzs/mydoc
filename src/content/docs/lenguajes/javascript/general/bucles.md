---
title: Bucles
description: for, while, do-while.
module: lenguajes/javascript
submodule: general
order: 11
---

Al completar esta guía podrás:

- Repetir código con `for`, `while` y `do...while`
- Controlar la ejecución con `break` y `continue`
- Evitar bucles infinitos
- Elegir el bucle adecuado según el contexto

---

## for

El bucle `for` repite un bloque un número determinado de veces. Tiene tres partes: inicialización, condición y actualización.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 0, 1, 2, 3, 4
```

Estructura:

```
for (inicialización; condición; actualización) {
  // código a repetir
}
```

1. **Inicialización:** se ejecuta una vez al inicio (`let i = 0`)
2. **Condición:** se evalúa antes de cada iteración. Si es `true`, ejecuta el bloque
3. **Actualización:** se ejecuta al final de cada iteración (`i++`)

### Recorrer un arreglo

```javascript
let frutas = ["manzana", "banana", "naranja"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
// "manzana", "banana", "naranja"
```

### Recorrer en orden inverso

```javascript
for (let i = frutas.length - 1; i >= 0; i--) {
  console.log(frutas[i]);
}
// "naranja", "banana", "manzana"
```

---

## while

El bucle `while` repite mientras una condición sea `true`. Se usa cuando no sabes de antemano cuántas iteraciones habrá.

```javascript
let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;
}
// 0, 1, 2, 3, 4
```

### Ejemplo práctico: leer hasta encontrar un valor

```javascript
let numeros = [3, 7, 1, 9, 4, 6];
let i = 0;

while (i < numeros.length && numeros[i] !== 9) {
  console.log(numeros[i]);
  i++;
}
// 3, 7, 1
```

> **Regla:** `while` es la opción correcta cuando el número de iteraciones depende de una condición dinámica, no de un contador fijo.

---

## do...while

Similar a `while`, pero garantiza que el bloque se ejecute **al menos una vez**, ya que la condición se evalúa después.

```javascript
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
// 0, 1, 2, 3, 4
```

Diferencia con `while`:

```javascript
let x = 10;

while (x < 5) {
  console.log("while");  // No se ejecuta
}

do {
  console.log("do-while");  // Se ejecuta una vez
} while (x < 5);
```

> **Regla:** usa `do...while` solo cuando necesites que el bloque se ejecute al menos una vez, independientemente de la condición. Es poco común, pero útil para menús y validaciones.

---

## break

`break` termina el bucle inmediatamente, saltando a la siguiente instrucción después del bloque.

```javascript
let numeros = [10, 20, 30, 40, 50];
let buscar = 30;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === buscar) {
    console.log(`Encontrado en índice ${i}`);
    break;  // Sale del bucle
  }
}
// "Encontrado en índice 2"
```

Sin `break`, el bucle continuaría innecesariamente.

---

## continue

`continue` salta a la siguiente iteración, ignorando el código restante del bloque actual.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;  // Salta los pares
  }
  console.log(i);
}
// 1, 3, 5, 7, 9
```

---

## Bucles infinitos

Un bucle infinito ocurre cuando la condición nunca se vuelve `false`.

```javascript
// Peligro: no ejecutes esto
// while (true) {
//   console.log("Esto nunca termina");
// }

// Otro ejemplo: olvidar actualizar el contador
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   // falta i++
// }
```

> **Regla:** asegúrate de que la variable de control cambie dentro del bucle. Si escribes un bucle infinito, el navegador se congelará o la pestaña dejará de responder. En Node.js, el proceso se bloquea.

Un bucle intencionalmente infinito con salida controlada:

```javascript
// Repetir hasta que el usuario ingrese un valor válido
let entrada;
while (true) {
  entrada = prompt("Ingresa un número mayor a 0:");

  if (entrada > 0) {
    break;  // Sale solo si es válido
  }

  console.log("Valor inválido, intenta de nuevo");
}
```

---

## for vs while

Usa `for` cuando:

- Conoces de antemano el número de iteraciones
- Recorres un arreglo por índice
- Necesitas un contador claro

Usa `while` cuando:

- No sabes cuántas iteraciones habrá
- La condición depende de un valor que cambia dentro del bucle
- Lees datos hasta que se cumple una condición

```javascript
// Caso for: recorrer un arreglo completo
for (let i = 0; i < items.length; i++) {
  procesar(items[i]);
}

// Caso while: procesar hasta encontrar un valor
while (cola.length > 0) {
  let item = cola.shift();
  procesar(item);
}
```

---

## Rendimiento y bucles

En arreglos grandes, guarda la longitud en una variable para evitar recalcularla en cada iteración:

```javascript
// Menos eficiente — calcula .length en cada iteración
for (let i = 0; i < arr.length; i++) { }

// Más eficiente — calcula .length una sola vez
for (let i = 0, len = arr.length; i < len; i++) { }
```

En la práctica, la diferencia es mínima para la mayoría de los casos. No optimices prematuramente.

---

## Resumen

| Bucle | Cuándo usarlo |
|---|---|
| `for` | Número fijo de iteraciones |
| `while` | Iteraciones basadas en una condición |
| `do...while` | Garantizar al menos una ejecución |

- `break` sale del bucle inmediatamente
- `continue` salta a la siguiente iteración
- Un bucle infinito congela la ejecución
- Guarda `.length` en una variable si el rendimiento es crítico

---

## Ejercicio

Escribe una función que reciba un número entero positivo `n` y devuelva la suma de todos los números pares desde 0 hasta `n` (inclusive).

**Instrucciones paso a paso:**

1. Crea una función `sumarPares(n)`
2. Inicializa una variable `suma` en 0
3. Usa un bucle `for` que vaya de 0 a `n`
4. Dentro del bucle, verifica si el número actual es par (`i % 2 === 0`)
5. Si es par, súmalo a `suma`
6. Al final del bucle, retorna `suma`
7. Prueba con: 10 (resultado: 30), 5 (resultado: 6), 0 (resultado: 0)

<details>
<summary>Mostrar solución</summary>

```javascript
function sumarPares(n) {
  let suma = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      suma += i;
    }
  }

  return suma;
}

console.log(sumarPares(10));  // 30 (0+2+4+6+8+10)
console.log(sumarPares(5));   // 6 (0+2+4)
console.log(sumarPares(0));   // 0
```

**Variante sin if (incremento de 2 en 2):**

```javascript
function sumarPares(n) {
  let suma = 0;

  for (let i = 0; i <= n; i += 2) {
    suma += i;
  }

  return suma;
}
```

</details>
