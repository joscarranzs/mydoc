---
title: "Operadores y expresiones"
module: fundamentos
submodule: operadores-y-expresiones
order: 4
---
# Operadores y expresiones

## ¿Qué son los operadores y las expresiones?

Un **operador** es un símbolo que representa una operación sobre uno o más valores, denominados **operandos**. Una **expresión** es cualquier combinación válida de operandos y operadores que produce un resultado.

```
5 + 3           // operador: +, operandos: 5 y 3, resultado: 8
(10 - 2) * 4    // expresión compuesta por varios operadores
```

Los operadores pueden entenderse como **verbos** del lenguaje de programación: indican la acción que debe realizarse entre los datos. De manera análoga a la aritmética elemental, se combinan valores mediante símbolos como `+`, `-`, `*` y `/` para obtener un resultado.

Los operadores se clasifican en varias categorías según el tipo de operación que realizan.

## Operadores aritméticos

Realizan operaciones matemáticas básicas sobre valores numéricos.

```
suma           = 10 + 5    // 15
resta          = 10 - 5    // 5
multiplicacion = 10 * 5    // 50
division       = 10 / 5    // 2
modulo         = 10 % 3    // 1 (resto de la división)
potencia       = 2 ^ 3     // 8 (2 elevado a la tercera)
```

| Operador | Nombre | Ejemplo | Resultado |
|---|---|---|---|
| `+` | Suma | `5 + 3` | `8` |
| `-` | Resta | `5 - 3` | `2` |
| `*` | Multiplicación | `5 * 3` | `15` |
| `/` | División | `10 / 3` | `3.33` |
| `%` | Módulo (resto) | `10 % 3` | `1` |
| `^` / `**` | Potencia | `2 ^ 3` | `8` |

El operador **módulo** (`%`) es particularmente útil para verificar divisibilidad, implementar ciclos circulares o limitar rangos:

```
es_par       = (numero % 2 == 0)    // verdadero si el número es par
minuto_reloj = total % 60            // el valor nunca supera 59
```

## Operadores de comparación

Comparan dos valores y devuelven un resultado booleano (`verdadero` o `falso`). Constituyen la base para la toma de decisiones en un programa.

```
10 == 5     // falso      (¿10 es igual a 5?)
10 != 5     // verdadero  (¿10 es distinto de 5?)
10 > 5      // verdadero  (¿10 es mayor que 5?)
10 < 5      // falso      (¿10 es menor que 5?)
10 >= 10    // verdadero  (¿10 es mayor o igual que 10?)
10 <= 5     // falso      (¿10 es menor o igual que 5?)
```

| Operador | Significado | Ejemplo `(x = 5)` |
|---|---|---|
| `==` | Igual a | `x == 5` → `verdadero` |
| `!=` | Distinto de | `x != 3` → `verdadero` |
| `>` | Mayor que | `x > 3` → `verdadero` |
| `<` | Menor que | `x < 3` → `falso` |
| `>=` | Mayor o igual que | `x >= 5` → `verdadero` |
| `<=` | Menor o igual que | `x <= 5` → `verdadero` |

### Distinción entre `=` y `==`

Un error frecuente en programación consiste en confundir la asignación con la comparación:

```
edad = 25       // asignación: guarda el valor 25 en la variable 'edad'
edad == 25      // comparación: pregunta si 'edad' contiene el valor 25
```

El operador `=` simple es un mandato ("almacena este valor aquí"). El operador `==` doble es una interrogación ("¿este valor es igual a este otro?").

## Operadores lógicos

Combinan valores booleanos (`verdadero` / `falso`) y devuelven un nuevo valor booleano. Se utilizan para construir condiciones compuestas.

```
llueve   = verdadero
hace_frio = falso

llueve Y hace_frio       // falso     (ambos deben ser verdadero)
llueve O hace_frio       // verdadero (basta con que uno sea verdadero)
NO llueve                // falso     (invierte el valor)
```

| Operador | Nombre | Ejemplo | Resultado |
|---|---|---|---|
| `Y` / `&&` | AND (conjunción) | `v Y v` → `v` | Verdadero solo si ambos lo son |
| `O` / `\|\|` | OR (disyunción) | `v O f` → `v` | Verdadero si al menos uno lo es |
| `NO` / `!` | NOT (negación) | `NO v` → `f` | Invierte el valor |

### Tabla de verdad de AND

| A | B | A Y B |
|---|---|---|
| Falso | Falso | Falso |
| Falso | Verdadero | Falso |
| Verdadero | Falso | Falso |
| Verdadero | Verdadero | Verdadero |

AND solo produce `verdadero` cuando **ambos** operandos lo son.

### Tabla de verdad de OR

| A | B | A O B |
|---|---|---|
| Falso | Falso | Falso |
| Falso | Verdadero | Verdadero |
| Verdadero | Falso | Verdadero |
| Verdadero | Verdadero | Verdadero |

OR produce `verdadero` cuando **al menos uno** de los operandos lo es.

### Ejemplos de condiciones combinadas

```
edad = 20
usuario_logueado = verdadero
es_admin = falso

// Acceso para mayores de edad logueados
puede_acceder = (edad >= 18) Y usuario_logueado     // verdadero

// Acceso para administradores o usuarios con permiso
tiene_permiso = falso
acceso_especial = es_admin O tiene_permiso           // falso

// Menores de edad que no sean administradores
es_menor_no_admin = (edad < 18) Y (NO es_admin)     // falso
```

## Operadores de asignación

El operador de asignación fundamental es `=`, pero existen variantes que combinan la asignación con una operación aritmética, reduciendo la repetición de código.

```
x = 10          // asignación simple: x vale 10
x += 5          // equivalente a x = x + 5  →  x = 15
x -= 3          // equivalente a x = x - 3  →  x = 12
x *= 2          // equivalente a x = x * 2  →  x = 24
x /= 4          // equivalente a x = x / 4  →  x = 6
x %= 5          // equivalente a x = x % 5  →  x = 1
```

| Operador | Significado | Ejemplo (partiendo de `x = 10`) |
|---|---|---|
| `=` | Asignación | `x = 10` |
| `+=` | Suma y asigna | `x += 5` → `15` |
| `-=` | Resta y asigna | `x -= 3` → `7` |
| `*=` | Multiplica y asigna | `x *= 2` → `20` |
| `/=` | Divide y asigna | `x /= 4` → `2.5` |
| `%=` | Módulo y asigna | `x %= 3` → `1` |

### Incremento y decremento

Dos casos particularmente frecuentes: aumentar o disminuir el valor en exactamente 1.

```
x++    // incremento: equivalente a x = x + 1
x--    // decremento: equivalente a x = x - 1
```

Se emplean principalmente en bucles y contadores:

```
contador = 0
contador++    // 1
contador++    // 2
contador--    // 1
```

## Precedencia de operadores

Cuando una expresión contiene múltiples operadores, la **precedencia** (o jerarquía) determina el orden en que se ejecutan las operaciones, de forma análoga a las reglas matemáticas.

```
resultado = 10 + 5 * 2
// Sin reglas de precedencia, el resultado sería ambiguo:
//   ¿(10 + 5) * 2 = 30?
//   ¿10 + (5 * 2) = 20?
```

### Orden de precedencia (de mayor a menor prioridad)

1. **Paréntesis** `()`
2. **Potencia** `^` / `**`
3. **Multiplicación, división, módulo** `* / %`
4. **Suma y resta** `+ -`
5. **Comparaciones** `> < >= <= == !=`
6. **AND lógico** `Y` / `&&`
7. **OR lógico** `O` / `||`
8. **Asignación** `= += -= *= /=`

```
resultado = 10 + 5 * 2            // 20  (primero 5*2, luego 10+10)
resultado = (10 + 5) * 2          // 30  (el paréntesis fuerza la suma primero)
resultado = 2 ^ 3 + 4             // 12  (primero 2^3=8, luego 8+4=12)
resultado = 10 > 5 Y 3 < 2       // falso  (10>5=v, 3<2=f, v Y f = f)
```

Se recomienda utilizar paréntesis incluso cuando se conoce la precedencia, ya que elimina la ambigüedad y mejora la legibilidad del código:

```
// Sin paréntesis: el orden depende de la precedencia
resultado = 10 + 5 * 2

// Con paréntesis: el orden es explícito e inequívoco
resultado = 10 + (5 * 2)
resultado = (10 + 5) * 2
```

---

## Ejemplo

El siguiente pseudocódigo emplea operadores aritméticos, de comparación y lógicos para calcular descuentos y determinar acceso a un sistema:

```
INICIO
    // Operadores aritméticos
    precio_original = 250
    descuento = 15
    precio_final = precio_original - (precio_original * descuento / 100)
    MOSTRAR "Precio original: " + precio_original
    MOSTRAR "Descuento: " + descuento + "%"
    MOSTRAR "Precio final: " + precio_final

    // Operadores de comparación
    presupuesto = 200
    suficiente = presupuesto >= precio_final
    MOSTRAR "¿Alcanza el presupuesto?: " + suficiente

    // Operadores lógicos
    es_mayor = verdadero
    tiene_permiso = falso
    acceso = es_mayor Y (tiene_permiso O suficiente)
    MOSTRAR "¿Acceso concedido?: " + acceso

    // Operadores de asignación compuestos
    visitas = 0
    visitas += 1
    visitas += 1
    visitas *= 2
    MOSTRAR "Total de visitas: " + visitas
FIN
```

**Salida esperada:**

```
Precio original: 250
Descuento: 15%
Precio final: 212.5
¿Alcanza el presupuesto?: falso
¿Acceso concedido?: falso
Total de visitas: 4
```

---

## Ejercicio

Escriba un programa en pseudocódigo que realice lo siguiente:

1. Declare una variable `nota1` con valor `85` y `nota2` con valor `92`.
2. Calcule el promedio usando operadores aritméticos.
3. Determine si el promedio es mayor o igual a `70` utilizando un operador de comparación. Almacene el resultado en una variable `aprobado`.
4. Declare una variable `asistencia` con valor `true` (verdadero).
5. Combine `aprobado` y `asistencia` con el operador `Y` para determinar si el estudiante cumple ambos requisitos. Almacene el resultado en `cumple_requisitos`.
6. Muestre el promedio, si aprobó y si cumple los requisitos.

A continuación, responda: ¿qué operador de asignación compuesto utilizaría para incrementar un contador en 7 en lugar de en 1? Escriba la línea de código correspondiente.
