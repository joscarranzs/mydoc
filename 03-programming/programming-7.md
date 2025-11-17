
# 03 - Programación: Estructuras de control

## Tabla de contenido

- [Introducción](#introducción)
- [Condicionales](#condicionales)
- [Bucles](#bucles)
- [Control de flujo](#control-de-flujo)
- [Referencias](#referencias)

## Introducción

Las estructuras de control permiten dirigir la ejecución de un programa (tomar decisiones y repetir acciones). Las tres categorías principales son condicionales, bucles y mecanismos de control de flujo (break/continue/return/exceptions). Aquí verás semántica, patrones y ejemplos prácticos.

## Condicionales

Concepto:

- Condicionales permiten ejecutar ramas distintas según una condición booleana.

Estructuras habituales:

- `if` / `else` / `elif` (o `else if`): rama simple y alternativa.
- `switch` / `match` (según el lenguaje): selección por patrón o valor, útil cuando hay muchas ramas.

Ejemplos:

- Python:

```python
if edad >= 18:
    print("Adulto")
elif edad > 12:
    print("Adolescente")
else:
    print("Niño")
```

- Java/C:

```java
if (x > 0) {
    // ...
} else if (x == 0) {
    // ...
} else {
    // ...
}
```

- Match/Pattern (Rust/Python 3.10+):

```rust
match value {
    Some(x) => println!("Has value {}", x),
    None => println!("No value"),
}
```
 

Tipos básicos:

- `for`: recorrer rango o colección.
- `while`: repetir mientras condición sea verdadera.
- `do/while`: ejecutar al menos una vez y repetir según condición (C/Java).

Ejemplos:

- Python (for-in):

```python
for i in range(10):
    print(i)
```

- Java (for clásico):

```java
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}
```

- while:

```c
while (condicion) {
    // acciones
}
```

Patrones comunes:

- Iterar sobre colecciones, acumuladores, búsqueda y filtrado.
- Evitar bucles infinitos; usar timers o checks de seguridad en operaciones críticas.

Buenas prácticas:

- Preferir iteradores de alto nivel (`for-each`) cuando están disponibles.
- Usar funciones de orden superior (`map`, `filter`, `reduce`) para claridad cuando sea adecuado.

## Control de flujo

Operadores y statements:

- `break`: salir del bucle actual.
- `continue`: saltar a la siguiente iteración.
- `return`: salir de la función con un valor.
- Excepciones: `try/except` (Python) o `try/catch` (Java/C#) para manejar errores; lanzar excepciones para errores excepcionales.

Ejemplos y consideraciones:

- Usar `break` y `continue` con moderación; su abuso puede complicar la lógica.
- Preferir `return` temprano para simplificar la lectura (early return pattern).
- Evitar usar excepciones en flujo de control normal; emplearlas para condiciones anómalas.

Control avanzado:

- `goto` existe en C y permite saltos sin restricciones; su uso está desaconsejado por crear código difícil de seguir.
- En programación funcional, se prefieren recursión y combinadores en lugar de bucles y mutación.

## Referencias

### Libros (títulos)

- "Clean Code" — Robert C. Martin
- "Structure and Interpretation of Computer Programs" — Harold Abelson, Gerald Jay Sussman

### Documentación oficial (vínculos)

- Python flow control: https://docs.python.org/3/tutorial/controlflow.html
- Java control flow statements: https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html
- C control statements: https://en.cppreference.com/w/c/language/statement
- Rust control flow (match, if, loops): https://doc.rust-lang.org/book/ch03-05-control-flow.html

