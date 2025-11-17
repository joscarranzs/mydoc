
# 03 - Programación: Datos y memoria

## Tabla de contenido

- [Introducción](#introducción)
- [Variables](#variables)
- [Constantes](#constantes)
- [Mutabilidad vs inmutabilidad](#mutabilidad-vs-inmutabilidad)
- [Reglas de nomenclatura](#reglas-de-nomenclatura)
- [Referencias](#referencias)

## Introducción

Entender cómo representamos datos en memoria y cómo los nombramos es fundamental para escribir código claro, eficiente y seguro. En este documento verás qué son las variables y constantes, cuándo usar estructuras mutables o inmutables, y reglas de nomenclatura que facilitan el mantenimiento.

## Variables

Definición y propósito:

- Una variable es un identificador que referencia un valor en el programa. Su valor puede cambiar (aunque en algunos lenguajes existan variables "finales" o constantes).
- Variables sirven para almacenar información temporal: entradas del usuario, resultados intermedios o estados.

Tipos y memoria:

- En lenguajes de tipado estático, las variables declaran un tipo (ej.: `int x` en C). En tipado dinámico, los tipos se infieren en tiempo de ejecución (ej.: `x = 1` en Python).
- Dependiendo del lenguaje, el valor puede almacenarse directamente (primitivas) o a través de referencias/objetos en memoria (objetos, arreglos). Por ejemplo, en Python las variables son referencias a objetos; en C algunos tipos se almacenan en la pila si son variables locales, o en el heap si se asignan dinámicamente.

Buenas prácticas:

- Nombres significativos (ver reglas de nomenclatura abajo).
- Limitar el alcance (scope) de las variables al mínimo necesario (por ejemplo, variables locales en funciones) para reducir efectos secundarios.
- Inicializar variables para evitar comportamiento indefinido (especialmente en C/C++).

## Constantes

Definición:

- Una constante es una variable cuyo valor no cambia durante la ejecución del programa. Permite expresar intención y evita reasignaciones accidentales.

Formas y keywords por lenguaje:

- C/C++: `const` para hacer un objeto inmutable; `#define` para macros (no recomendable para constantes con tipos en C++ moderno).
- Java: `final` para variables inmutables, `static final` para constantes de clase.
- JavaScript (ES6+): `const` crea bindings que no pueden reasignarse (el valor puede ser mutable si es un objeto).
- Python: no existe una keyword `const`; por convención, se usan nombres en mayúsculas (`PI = 3.1415`) para indicar constante.
- Rust: `const` y `static` definen constantes y variables inmutables; en Rust la mutabilidad es explícita (`let mut x` para mutabilidad).

Ventajas de usar constantes:

- Seguridad: evita cambios accidentales.
- Claridad: expresa valores que son propiedades del programa (configuración, límites).
- Optimización: algunos compiladores pueden optimizar constantes al tiempo de compilación.

## Mutabilidad vs inmutabilidad

Conceptos:

- Mutabilidad: los datos pueden cambiar después de su creación (por ejemplo, listas en Python, objetos modificables en Java).
- Inmutabilidad: los datos no se pueden cambiar; en su lugar, se crean nuevos valores (por ejemplo, strings y tuplas en Python, `String` en Java o tipos primitivos en muchos lenguajes).

Ventajas de inmutabilidad:

- Seguridad frente a efectos colaterales (side-effects): objetos inmutables no cambian inesperadamente.
- Concurrencia y paralelismo: facilita compartir datos entre hilos porque no requieren sincronización.
- Razonamiento y testing: facilita reproducibilidad del comportamiento y pruebas unitarias.

Ventajas de mutabilidad:

- Eficiencia en ciertos casos: actualizar un objeto existente puede ser más barato que crear uno nuevo (por ejemplo, colecciones grandes).
- Conveniencia: en algunos algoritmos, mutar estructuras simplifica la implementación.

Recomendaciones:

- Prefiere inmutabilidad por defecto; usa mutabilidad cuando sea necesario por razones de rendimiento y con cuidado explícito.
- En APIs públicas, documenta si un objeto es mutable o no y las reglas de ownership si aplica (por ejemplo, reglas en Rust).

## Reglas de nomenclatura

Objetivo: nombres claros y consistentes reducen errores y mejoran la mantenibilidad.

Convenciones comunes:

- camelCase (JavaScript, Java para variables/funciones): `myVariable`.
- PascalCase (clases en Java, C#): `MyClass`.
- snake_case (Python, C): `my_variable`.
- SCREAMING_SNAKE_CASE para constantes (Python, C): `MAX_RETRIES`.

Reglas prácticas:

- Preferir nombres descriptivos y cortos; evita abreviaturas oscuras.
- Evitar nombres de una letra salvo en bucles (`i`, `j`) o contexto matemático claro.
- No usar palabras reservadas del lenguaje (por ejemplo `class` en Java como nombre de variable).
- Mantener consistencia con la convención del proyecto/idioma.

Memoria y scope:

- Evitar variables globales salvo cuándo sean necesarias; prefiera encapsular estado en módulos/clases.
- Utilizar nombres de variables que den contexto del scope (por ejemplo, `user_count` en lugar de `count` en grandes módulos).

## Referencias

### Libros (títulos)

- "Clean Code" — Robert C. Martin
- "Programming Pearls" — Jon Bentley
- "The Rust Programming Language" — Steve Klabnik y Carol Nichols (para ownership y mutabilidad)

### Documentación oficial (vínculos)

- PEP8 (naming conventions for Python): https://peps.python.org/pep-0008/
- Python data model (immutability of types): https://docs.python.org/3/reference/datamodel.html
- Java naming conventions (Oracle): https://www.oracle.com/java/technologies/javase/codeconventions-namingconventions.html
- C `const` and memory (en cppreference): https://en.cppreference.com/w/c/language/const
- Rust book (ownership, mutability): https://doc.rust-lang.org/book/
- ECMAScript spec (let/const): https://www.ecma-international.org/publications-and-standards/standards/ecma-262/

