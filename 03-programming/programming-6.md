
# 03 - Programación: Operaciones esenciales

## Tabla de contenido

- [Introducción](#introducción)
- [Aritmética](#aritmética)
- [Comparación](#comparación)
- [Asignación](#asignación)
- [Lógica](#lógica)
- [Referencias](#referencias)

## Introducción

Las operaciones son los bloques básicos del procesamiento: aritmética, comparación, asignación y lógica permiten manipular datos y controlar el flujo. Aquí se definen, se muestran ejemplos y se anotan consideraciones (precisión numérica, orden de evaluación, operadores atípicos).

## Aritmética

Operadores comunes:

- Suma: `+`
- Resta: `-`
- Multiplicación: `*`
- División: `/` (división real en muchos lenguajes); división entera: `//` (Python) o usando tipos enteros en C/Java.
- Módulo (resto): `%`
- Potencia: `**` (Python) o `pow()`; en otros lenguajes `^` no es potencia (bitwise XOR en C/Java).

Consideraciones:

- División entera vs flotante: en C, Java la división de enteros descarta la fracción; en Python 3 `/` siempre retorna float, `//` es división entera.
- Overflow: operaciones en tipos con tamaño fijo pueden desbordar; ciertos lenguajes (Rust) ofrecen versiones que detectan overflow.
- Precisión flotante: operaciones con `float`/`double` pueden introducir errores de representación (IEEE 754). Para dinero o cálculos exactos, usar tipos decimales o `BigInteger`/`BigDecimal`.

Ejemplo (Python):

- 3 + 4 = 7
- 7 / 2 = 3.5
- 7 // 2 = 3
- 2 ** 10 = 1024

## Comparación

Operadores comunes:

- Igualdad: `==`
- Desigualdad: `!=`
- Menor que: `<`
- Mayor que: `>`
- Menor o igual: `<=`
- Mayor o igual: `>=`

Atención a:

- Comparaciones entre tipos diferentes pueden comportarse de forma distinta según el lenguaje (coerción en JavaScript vs error en Python cuando comparas incompatible).
- Comparaciones con coma flotante: evitar `==` para floats si buscas igualdad numérica exacta — preferir comparar diferencias absolutas `abs(a-b) < eps`.

Ejemplo (Python):

- `3 == 3.0` → True (coerción numérica)
- `0.1 + 0.2 == 0.3` → False (errores de flotantes)

## Asignación

Concepto:

- Asignar coloca un valor en una variable: `x = 5`.
- Existen asignaciones compuestas: `x += 1` (incremento), `x *= 2`.

En muchos lenguajes la asignación devuelve el valor asignado; otros (Python) no permiten este uso en expresiones.

Atajos y patrones:

- Asignaciones múltiples: `a, b = 1, 2` en Python.
- Intercambio sin temporal en Python: `a, b = b, a`.

Semántica y aliasing:

- En lenguajes con referencias, la asignación copia la referencia; mutar el objeto afectará a todas las referencias. En lenguajes por valor (p. ej. tipos primitivos en C) se copia el valor.

## Lógica

Operadores booleanos:

- AND lógico: `&&` o `and`
- OR lógico: `||` o `or`
- NOT lógico: `!` o `not`

Orden de evaluación y cortocircuito:

- `a && b`: si `a` es falso, `b` no se evalúa (short-circuit) — útil y evita errores (por ejemplo, acceder a propiedades si `a` es null).
- `a || b`: si `a` es verdadero, `b` no se evalúa.

Precedencia y combinación con comparación:

- Operadores lógicos tienen menor precedencia que comparaciones; agrupar con paréntesis para claridad.

Ejemplo (Python):

- `if (x > 0) and (x < 10):`

Tratamiento de valores truthy/falsy:

- Muchos lenguajes tratan ciertos valores como falsos en contexto booleano (`0`, `''`, `None`, `[]` en Python); esto facilita checks pero puede ocultar bugs.

## Referencias

### Libros (títulos)

- "The C Programming Language" — Brian Kernighan, Dennis Ritchie
- "Effective Java" — Joshua Bloch (sobre uso correcto de operadores y tipos)

### Documentación oficial (vínculos)

- Python operators and expressions: https://docs.python.org/3/reference/expressions.html#operator-summary
- C operators (reference): https://en.cppreference.com/w/c/language/operator_overview
- Java operators: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html (plus operators docs: https://docs.oracle.com/javase/tutorial/java/nutsandbolts/operators.html)
- IEEE 754 overview for floating point: https://en.wikipedia.org/wiki/IEEE_754 (not official, but standard reference)

