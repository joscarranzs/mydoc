
# 03 - Programación: Datos primitivos

## Tabla de contenido

- [Introducción](#introducción)
- [Inmutabilidad](#inmutabilidad)
- [Conversiones de tipos](#conversiones-de-tipos)
- [Referencias](#referencias)

## Introducción

Los datos primitivos son los tipos básicos que ofrecen los lenguajes de programación para representar valores simples: enteros, punto flotante, booleanos, caracteres y a veces cadenas (strings). Entender la mutabilidad de estos valores y cómo convertir entre tipos es esencial para evitar errores (pérdida de precisión, overflow, truncamiento) y escribir código seguro.

## Inmutabilidad

Qué significa: un valor inmutable no puede ser cambiado después de su creación. Si se necesita un valor distinto, se crea uno nuevo y la variable puede apuntar al nuevo valor.

Ejemplos por lenguaje:

- Python: tipos primitivos como int, float, bool y str son inmutables; operaciones crean nuevos objetos. Ej.: concatenar strings produce una nueva cadena.
- Java: tipos primitivos (`int`, `double`, `boolean`) son inmutables por naturaleza (valores), objetos `String` son inmutables; `StringBuilder` para mutabilidad de cadenas.
- C/C++: los tipos primitivos son valores en la memoria; la mutabilidad depende del contexto (variables en memoria pueden ser modificadas, `const` hace un objeto no modificable en C/C++).
- Rust: la mutabilidad es explícita (`let x` inmutable; `let mut y` mutable); esto lo hace seguro por diseño.

Por qué importa:

- Seguridad de estado y concurrencia: los objetos inmutables pueden compartirse sin sincronización.
- Razonamiento y pruebas: código inmutable es más fácil de razonar y testear.
- Rendimiento: en algunos casos (p. ej. concatenación intensiva) la mutabilidad ofrece mejor rendimiento con estructuras diseñadas para ello (`StringBuilder`, `io::Write`, `Vec`), pero complica el reasoning.

Buenas prácticas:

- Preferir inmutabilidad para datos por defecto; usar estructuras mutables cuando realmente se necesite rendimiento o economía de memoria.
- Para cadenas grandes o concatenaciones en bucles, usar APIs que soporten mutabilidad optimizada (ej.: `StringBuilder`, `StringBuffer`, `String::push_str`, `Vec::push`).

## Conversiones de tipos

Tipos de conversiones:

- Conversión implícita (coerción): realizada por el lenguaje automáticamente (por ejemplo, sumar `int` y `float` puede promover el `int` a `float`). Puede llevar a sorpresas si la coerción no es la esperada.
- Conversión explícita (casting): programador indica cómo convertir (p. ej. `(int)3.14` en C, `int(3.14)` en Python con int()).

Peligros y consideraciones:

- Widening vs narrowing: convertir de un rango mayor a uno menor puede causar truncamiento o overflow (`double` → `int`). Es más seguro convertir de forma explícita cuando hay posible pérdida.
- Pérdida de precisión: floats vs decimales; para cantidades monetarias, evitar `float`/`double` y usar `BigDecimal`/`decimal` o tipos enteros con mínima unidad (ej.: centavos).
- Overflow y underflow: en enteros con tamaño fijo (C `int32_t`, Java `int`), sumar puede desbordar; algunos lenguajes (Rust) ofrecen herramientas para manejar overflow (`checked_add`).
- Locale y parsing: parsing de cadenas a números puede depender de formato decimal (coma vs punto). Use funciones de parsing con control de locales.

Cómo convertir de forma segura (ejemplos conceptuales):

- Python:
	- Convertir a entero: `int('42')` o `int(3.9)` (trunca hacia cero) — envolver en try/except para manejar errores.
	- Convertir a float: `float('3.14')`.
	- Evitar `float` para dinero; usar Decimal: `from decimal import Decimal`.
- Java:
	- Parsear entero: `Integer.parseInt("42")` (lanza NumberFormatException si falla).
	- Cast explícito: `(int) 3.14` trunca hacia cero; preferir `Math.round` si quieres redondeo.
	- Para dinero: `BigDecimal` en lugar de `double`.
- C/C++:
	- Cast: `(int)3.14` y funciones `strtol`, `strtod` para parseo seguro.
- Rust:
	- `let x: i32 = "42".parse().unwrap();` — `parse()` retorna Result que debe manejarse.

Conversión entre números y cadenas:

- A número: usar funciones de parseo que devuelvan error o `Result`/exception para manejar inputs invalidos.
- A cadena: `str()` en Python, `Integer.toString(i)` o `String.valueOf(i)` en Java.

Buenas prácticas de conversión:

- Prefiere conversiones explícitas y manejo de errores: en Python usar `try/except`; en Rust usar `Result` y `match`.
- Documenta los rangos y presunciones sobre los datos; evita `silent truncate`.
- Para finanzas, usar tipos decimales o integer minor units para evitar errores por precisión.

## Referencias

### Libros (títulos)

- "Programming Pearls" — Jon Bentley
- "Effective Java" — Joshua Bloch (cap. sobre tipos y conversiones en Java)

### Documentación oficial (vínculos)

- Python built-in types and conversions: https://docs.python.org/3/library/stdtypes.html and https://docs.python.org/3/library/functions.html#int
- Java primitive types and wrapper classes: https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html and Integer.parseInt: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Integer.html#parseInt(java.lang.String)
- C conversions and strtol/strtod: https://man7.org/linux/man-pages/man3/strtol.3.html and https://man7.org/linux/man-pages/man3/strtod.3.html
- Rust primitive types and parse: https://doc.rust-lang.org/reference/types.html and https://doc.rust-lang.org/std/primitive.str.html#method.parse
- ECMAScript type conversion (ECMA spec): https://262.ecma-international.org/ (search for 'Type Conversions')

