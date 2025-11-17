# 03 - Programación: Paradigma imperativo

## Tabla de contenido

- [Introducción](#introducción)
- [Cambios de estado](#cambios-de-estado)
- [Secuencia de instrucciones](#secuencia-de-instrucciones)
- [Variables mutables](#variables-mutables)
- [Ejemplos](#ejemplos)
- [Ventajas y desventajas](#ventajas-y-desventajas)
- [Referencias](#referencias)

## Introducción

El paradigma imperativo se centra en describir cómo un programa debe realizar tareas mediante declaraciones que alteran el estado del sistema. Es el estilo de programación más antiguo y dominante en lenguajes como C, Java y Python. Sus elementos básicos son la asignación de variables, las sentencias de control y la ejecución secuencial de instrucciones.

## Cambios de estado

El cambio de estado ocurre cuando una operación modifica el contenido de una variable, estructura de datos o recurso (archivo, memoria). En el paradigma imperativo, los efectos secundarios (side effects) son comunes: funciones o procedimientos realizan acciones que cambian el estado del sistema.

Consecuencias y consideraciones:

- Las dependencias entre instrucciones crean acoplamiento: el resultado final depende del orden en que se ejecuta el código.
- Los side effects facilitan tareas de E/S y manipulación de estructuras mutables, pero complican razonamiento y pruebas.
- Para mitigar riesgos se usan patrones: encapsulación, invariantes y testing extensivo.

## Secuencia de instrucciones

En programación imperativa el flujo principal es una secuencia de instrucciones ejecutadas en orden (a menos que una estructura de control cambie ese orden). El programador diseña la receta paso a paso, lo que facilita a los sistemas de bajo nivel entender y optimizar el código.

Puntos clave:

- La semántica es simple: ejecutar una instrucción después de la otra.
- La colocación de una asignación o llamada que causa side effects puede cambiar toda la ejecución.
- En código concurrente, la secuencia da paso a problemas de sincronización: se necesitan locks o abstracciones más robustas.

## Variables mutables

Las variables mutables pueden cambiar durante la ejecución. Ejemplos típicos:

- Contadores (i++), acumuladores, buffers, listas y diccionarios.
- Objetos con campos modificables (en Java, Python o C++ con setters).

Consejos y prácticas:

- Controlar la visibilidad: preferir variables locales sobre globales.
- Usar constantes o tipos inmutables cuando no se necesite cambio para reducir errores.
- Documentar invariantes y utilizar pruebas que verifiquen el estado tras operaciones críticas.

## Ejemplos

- Python — reasignación y mutable vs inmutable

```python
# reasignación (cambia referencia)
count = 1
count = count + 1  # count ahora vale 2

# lista mutable: operación con side effect
items = [1, 2, 3]
items.append(4)  # cambia items en sitio
```

- C — mutación y asignación

```c
int x = 0;
x = x + 1; // modifica el estado de x

int arr[3] = {0, 0, 0};
arr[0] = 42; // Side effect en memoria
```

- Java — objetos mutables vs inmutables

```java
String s = "hola";  // inmutable: s apunta a un objeto que no cambia
String t = s + " mundo"; // crea nuevo objeto, no muta s

List<Integer> list = new ArrayList<>();
list.add(1); // muta el objeto list
```

## Ventajas y desventajas

Ventajas:

- Modelo claro para tareas secuenciales y E/S.
- Buen rendimiento en sistemas de bajo nivel, donde la mutación es natural.

Desventajas:

- Dificultad para razonar sobre programas complejos debido a side effects.
- Problemas de concurrencia y pruebas más complicadas.

## Referencias

### Libros

- "The C Programming Language" — Brian W. Kernighan, Dennis M. Ritchie (para estado y asignación de bajo nivel)
- "Structure and Interpretation of Computer Programs" — Harold Abelson, Gerald Jay Sussman (conceptos de estado, abstracción y control)

### Documentación oficial

- Python assignments & mutability: https://docs.python.org/3/reference/simple_stmts.html#assignment-statements
- Java objects & mutability: https://docs.oracle.com/javase/tutorial/essential/concurrency/sharingobjects.html
- C language statements: https://en.cppreference.com/w/c/language/statements

