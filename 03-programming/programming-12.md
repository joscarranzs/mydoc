# 03 - Programación: Paradigma declarativo

## Tabla de contenido

- [Introducción](#introducción)
- [Qué se quiere lograr](#qué-se-quiere-lograr)
- [Abstracción de pasos](#abstracción-de-pasos)
- [Reglas y expresiones](#reglas-y-expresiones)
- [Ejemplos](#ejemplos)
- [Ventajas y desventajas](#ventajas-y-desventajas)
- [Referencias](#referencias)

## Introducción

El paradigma declarativo describe qué se desea como resultado en lugar de los pasos concretos para conseguirlo. Se centra en la especificación del problema: las implementaciones (el "cómo") quedan delegadas al intérprete, compilador o motor de ejecución. Lenguajes y estilos declarativos incluyen programación funcional, lógica (Prolog), y lenguajes de consultas como SQL.

## Qué se quiere lograr

En el núcleo del declarativo está la idea de expresar el objetivo de la computación:

- Declarar propiedades, relaciones o transformaciones que deben cumplirse.
- Dejar que el motor de ejecución encuentre la estrategia de evaluación más adecuada.

Esto facilita concisión, razonamiento matemático y verificación, porque el programa se puede interpretar como una descripción (o fórmula) sobre datos en lugar de una lista de instrucciones que alteren un estado.

## Abstracción de pasos

La abstracción de pasos separa la descripción lógica del problema de la implementación. En la práctica:

- En SQL: escribes qué filas quieres seleccionar, no cómo escanear tablas ni ordenar índices.
- En programación funcional: combinas funciones puras y transformaciones en pipelines (map/filter/fold) en vez de mutar estructuras con bucles.
- En DSLs declarativas: el usuario escribe reglas o configuraciones y el motor decide la ejecución.

Consecuencias:

- Menos efectos secundarios facilita pruebas y razonamiento formal.
- Potencial para optimizaciones automáticas por parte del compilador o motor (por ejemplo, optimizadores de consultas SQL o de evaluadores perezosos en Haskell).

## Reglas y expresiones

Declarativo a menudo se expresa mediante reglas, relaciones o expresiones evaluables. Tipos comunes:

- Expresiones puras: sin efectos secundarios; resultado depende solo de entradas.
- Reglas lógicas: relaciones que describen hechos y cláusulas para deducir nuevos hechos (Prolog).
- Consultas y filtros: evaluaciones que retornan datos que cumplen una condición (SQL, LINQ).

Estas construcciones favorecen la composición y reutilización y hacen que el significado del programa sea más cercano a la especificación.

## Ejemplos

- SQL — qué filas seleccionar

```sql
-- Selecciona usuarios activos mayores de 18
SELECT id, name
FROM users
WHERE active = true AND age >= 18;
```

- Haskell — uso de expresiones y funciones puras

```haskell
-- función pura que filtra y suma
sumAdults :: [Person] -> Int
sumAdults people = sum (map age (filter (ctive u -> active u && age u >= 18) people))
```

- Prolog — reglas y hechos

```prolog
parent(alice, bob).
parent(bob, carol).

grandparent(X, Z) :- parent(X, Y), parent(Y, Z).
% Query: ?- grandparent(alice, Who).
```

## Ventajas y desventajas

Ventajas:

- Mayor abstracción y concisión — el código expresa la intención.
- Menos efectos secundarios facilitan pruebas, paralelización y razonamiento formal.
- Potencial para optimizaciones automáticas.

Desventajas:

- Puede ser menos intuitivo para problemas donde el control explícito del orden es necesario (E/S, interacciones con hardware).
- A veces se sacrifican detalles de rendimiento fino; el desarrollador pierde control sobre la estrategia de ejecución.

## Referencias

### Libros

- "Programming in Haskell" — Graham Hutton (programación funcional y expresiones puras)
- "The Art of Prolog" — Leon Sterling and Ehud Shapiro (reglas y lógica)

### Documentación oficial

- SQL reference (PostgreSQL examples): https://www.postgresql.org/docs/current/sql.html
- Haskell documentation: https://www.haskell.org/documentation/
- SWI-Prolog manual (Prolog reference): https://www.swi-prolog.org/pldoc/
- CSS and declarative styling: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

