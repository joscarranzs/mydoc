---
title: Operadores
description: Aritméticos, lógicos, de comparación.
module: lenguajes/javascript
submodule: general
order: 4
---

Al completar esta guía podrás:

- Usar operadores aritméticos, de asignación y comparación
- Diferenciar entre `==` y `===`
- Evaluar condiciones compuestas con operadores lógicos
- Entender la precedencia de operadores

---

## Operadores aritméticos

Realizan operaciones matemáticas con valores numéricos.

```javascript
let a = 10;
let b = 3;

console.log(a + b);   // 13 — suma
console.log(a - b);   // 7  — resta
console.log(a * b);   // 30 — multiplicación
console.log(a / b);   // 3.333... — división
console.log(a % b);   // 1  — módulo (resto de la división)
console.log(a ** b);  // 1000 — exponenciación (10³)
```

El **módulo** `%` es especialmente útil para determinar si un número es par o múltiplo de otro:

```javascript
console.log(10 % 2);  // 0 — par
console.log(11 % 2);  // 1 — impar
console.log(15 % 5);  // 0 — múltiplo de 5
```

---

## Operadores de asignación

Asignan un valor a una variable. El más básico es `=`, pero existen variantes que combinan asignación con otra operación.

```javascript
let x = 10;

x += 5;   // x = x + 5 → 15
x -= 3;   // x = x - 3 → 12
x *= 2;   // x = x * 2 → 24
x /= 4;   // x = x / 4 → 6
x %= 4;   // x = x % 4 → 2
x **= 3;  // x = x ** 3 → 8
```

```javascript
let total = 0;

total += 100;  // 100
total += 50;   // 150
total -= 30;   // 120
```

> **Convención:** usa operadores de asignación compuesta (`+=`, `-=`) en lugar de repetir la variable. Son más legibles y reducen errores.

---

## Operadores de incremento y decremento

Aumentan o disminuyen el valor de una variable en 1.

```javascript
let contador = 0;

contador++;  // contador = contador + 1 → 1
contador++;  // 2
contador--;  // 1
```

**Prefijo vs sufijo:**

```javascript
let a = 5;

// Sufijo — retorna el valor antes de incrementar
console.log(a++);  // 5
console.log(a);    // 6

// Prefijo — retorna el valor después de incrementar
let b = 5;
console.log(++b);  // 6
console.log(b);    // 6
```

---

## Operadores de comparación

Comparan dos valores y devuelven un booleano.

```javascript
let x = 5;
let y = "5";

console.log(x == y);   // true  — igualdad débil (compara valor)
console.log(x === y);  // false — igualdad estricta (compara valor y tipo)
console.log(x != y);   // false — desigualdad débil
console.log(x !== y);  // true  — desigualdad estricta
console.log(x > 3);    // true
console.log(x < 3);    // false
console.log(x >= 5);   // true
console.log(x <= 4);   // false
```

> **Regla de oro:** usa siempre `===` y `!==`. La igualdad débil (`==`) aplica coerción de tipos, lo que produce resultados inesperados.

**Ejemplo de peligro con `==`:**

```javascript
console.log(0 == false);     // true  — ¡0 es igual a false!
console.log("" == false);    // true  — ¡cadena vacía es igual a false!
console.log(null == undefined); // true

console.log(0 === false);    // false — correcto
console.log("" === false);   // false — correcto
console.log(null === undefined); // false — correcto
```

---

## Operadores lógicos

Combinan expresiones booleanas.

```javascript
let edad = 25;
let tieneLicencia = true;

// AND (&&) — ambas deben ser true
console.log(edad >= 18 && tieneLicencia);  // true

// OR (||) — al menos una debe ser true
console.log(edad < 18 || tieneLicencia);   // true

// NOT (!) — invierte el valor
console.log(!tieneLicencia);  // false
```

### Evaluación de cortocircuito

Los operadores `&&` y `||` evalúan solo lo necesario. Si el primer operando determina el resultado, el segundo no se evalúa.

```javascript
// OR: si el primero es truthy, retorna el primero
console.log("Hola" || "Mundo");    // "Hola"
console.log(0 || "Mundo");         // "Mundo"

// AND: si el primero es falsy, retorna el primero
console.log(null && "Hola");       // null
console.log("Hola" && "Mundo");    // "Mundo"
```

Este comportamiento se usa para valores por defecto:

```javascript
let nombre = usuarioInput || "Invitado";
```

---

## Operador ternario

Es una forma compacta de escribir un `if-else`. Evalúa una condición y retorna un valor u otro.

```javascript
condición ? valorSiTrue : valorSiFalse;
```

```javascript
let edad = 20;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje);  // "Mayor de edad"

// Equivalente con if-else:
let mensaje2;
if (edad >= 18) {
  mensaje2 = "Mayor de edad";
} else {
  mensaje2 = "Menor de edad";
}
```

> **Regla:** usa el ternario para asignaciones simples. Para lógica compleja, usa `if-else`. Un ternario anidado es difícil de leer.

---

## Operador nullish (??)

Retorna el operando derecho solo si el izquierdo es `null` o `undefined`.

```javascript
let valor = null;
let resultado = valor ?? "Valor por defecto";
console.log(resultado);  // "Valor por defecto"

let nombre = "Ana";
let saludo = nombre ?? "Invitado";
console.log(saludo);  // "Ana"
```

> **Diferencia con `||`:** `||` toma el valor derecho si el izquierdo es **falsy** (incluye `0`, `""`, `false`). `??` solo reacciona ante `null` y `undefined`.

```javascript
let puntuacion = 0;

console.log(puntuacion || 100);   // 100  — 0 es falsy
console.log(puntuacion ?? 100);   // 0    — 0 no es null ni undefined
```

---

## Precedencia de operadores

JavaScript evalúa las expresiones en un orden definido, igual que en matemáticas.

```javascript
let resultado = 2 + 3 * 4;
console.log(resultado);  // 14 — multiplicación primero
```

Tabla simplificada de precedencia (de mayor a menor):

| Prioridad | Operadores |
|---|---|
| 1 | `()` paréntesis |
| 2 | `**` exponenciación |
| 3 | `*` `/` `%` multiplicación, división, módulo |
| 4 | `+` `-` suma y resta |
| 5 | `<` `>` `<=` `>=` comparaciones |
| 6 | `===` `!==` `==` `!=` igualdad |
| 7 | `&&` AND lógico |
| 8 | `\|\|` OR lógico |
| 9 | `??` nullish coalescing |
| 10 | `=` `+=` `-=` asignación |

```javascript
let a = 5 + 3 * 2;     // 11 — multiplicación primero
let b = (5 + 3) * 2;   // 16 — paréntesis primero

let c = a > 5 && b < 20;
// 1. a > 5 → true
// 2. b < 20 → true
// 3. true && true → true
```

> **Regla:** usa paréntesis para hacer explícito el orden cuando la expresión no sea evidente. El código claro no depende de que el lector recuerde la precedencia.

---

## Operador typeof

Ya explorado en el tema anterior, pero como recordatorio:

```javascript
typeof 42;         // "number"
typeof "texto";    // "string"
typeof true;       // "boolean"
typeof undefined;  // "undefined"
typeof null;       // "object" — error histórico
```

---

## Resumen

| Categoría | Operadores clave |
|---|---|
| Aritméticos | `+` `-` `*` `/` `%` `**` |
| Asignación | `=` `+=` `-=` `*=` `/=` |
| Incremento | `++` `--` |
| Comparación | `===` `!==` `>` `<` `>=` `<=` |
| Lógicos | `&&` `\|\|` `!` |
| Ternario | `cond ? valTrue : valFalse` |
| Nullish | `??` |

- Usa `===` siempre, nunca `==`
- `||` reacciona ante cualquier falsy; `??` solo ante `null`/`undefined`
- Los paréntesis mejoran la legibilidad y evitan errores de precedencia

---

## Ejercicio

Escribe un programa que:

1. Declare `edad = 17` y `tienePermiso = false`
2. Determine si la persona puede ingresar a un evento (requiere: edad ≥ 18 o tener permiso)
3. Muestre `"Puede ingresar"` o `"No puede ingresar"` usando el operador ternario
4. Cambie la edad a 18 y verifique que el resultado cambie
5. Cambie la edad a 17 y `tienePermiso = true` y verifique

**Instrucciones paso a paso:**

1. Declara las variables con `let`
2. Escribe la condición usando `||`
3. Usa el operador ternario para asignar el mensaje
4. Muestra el resultado con `console.log()`
5. Repite con los otros valores para probar todos los casos

<details>
<summary>Mostrar solución</summary>

```javascript
let edad = 17;
let tienePermiso = false;

let mensaje = edad >= 18 || tienePermiso
  ? "Puede ingresar"
  : "No puede ingresar";

console.log(mensaje);  // "No puede ingresar"

// Caso 2: edad suficiente
edad = 18;
mensaje = edad >= 18 || tienePermiso
  ? "Puede ingresar"
  : "No puede ingresar";

console.log(mensaje);  // "Puede ingresar"

// Caso 3: permiso sin edad
edad = 17;
tienePermiso = true;
mensaje = edad >= 18 || tienePermiso
  ? "Puede ingresar"
  : "No puede ingresar";

console.log(mensaje);  // "Puede ingresar"
```

</details>
