
# 03 - Programación: Estructuras de datos

## Tabla de contenido

- [Introducción](#introducción)
- [Arreglos](#arreglos)
- [Matrices](#matrices)
- [Listas](#listas)
- [Pilas](#pilas)
- [Colas](#colas)
- [Objetos literales](#objetos-literales)
- [Mapas / Diccionarios](#mapas--diccionarios)
- [Referencias](#referencias)

## Introducción

Las estructuras de datos son formas de organizar y almacenar información para permitir acceso eficiente y operaciones específicas. A continuación verás definiciones, operaciones típicas, complejidad y cuándo elegir cada estructura.

## Arreglos

Descripción: colección contigua de elementos del mismo tipo, indexada por posición.

Operaciones típicas:
- Acceso por índice: O(1).
- Búsqueda lineal: O(n).
- Inserción/eliminación en medio: O(n) (por desplazamiento).

Características:
- Tamaño fijo en arreglos estáticos (C `int arr[10]`), dinámicos en `ArrayList`/`std::vector` con realloc.
- Almacenamiento contiguo facilita caches y rápidas iteraciones.

Cuándo usar: cuando necesites acceso aleatorio rápido y conozcas (o toleres) crecimiento amortizado.

## Matrices

Descripción: arreglos bidimensionales (o N-dimensionales) usados para representar tablas, imágenes o grafos (matriz de adyacencia).

Operaciones típicas:
- Acceso a elemento: O(1) con índice [i][j].
- Iteración: O(n*m).

Detalles:
- Representación row-major vs column-major (C vs Fortran/NumPy) afecta rendimiento en accesos secuenciales.

Cuándo usar: operaciones matriciales, transformaciones lineales o almacenamiento tabular; preferir librerías optimizadas (BLAS/NumPy) para cálculos numéricos.

## Listas

Descripción: secuencias enlazadas (singly/doubly) o listas enlazadas con nodos que apuntan al siguiente.

Operaciones típicas:
- Acceso por índice: O(n) en listas enlazadas.
- Inserción/ eliminación al inicio o en medio con nodo: O(1) (si tienes la referencia al nodo).

Comparación con arreglos:
- Mejor rendimiento en inserciones y eliminaciones frecuentes; peor en acceso aleatorio.

Cuándo usar: colas con inserciones frecuentes en medio, estructuras donde mover elementos es costoso en arreglo.

## Pilas

Descripción: LIFO (Last In, First Out). Operaciones: push (apilar), pop (desapilar), peek/top.

Operaciones típicas:
- push/pop: O(1).

Uso: undo stacks, DFS, evaluadores de expresiones (postfix), llamadas recursivas.

## Colas

Descripción: FIFO (First In, First Out). Operaciones: enqueue (encolar), dequeue (desencolar), front.

Variaciones:
- Cola circular, cola con prioridad (priority queue), deque (doble extremo).

Uso: procesamiento por orden de llegada, gestores de tareas, BFS.

## Objetos literales

Descripción: estructuras de datos en forma literal que representan objetos o registros con campos nombrados; ejemplos: object literals en JavaScript `{ name: 'Alice' }`, literales dict en Python `{'k': 'v'}`.

Características:
- Acceso por clave: `obj.key` o `obj['key']`.
- Convenientes para modelado sencillo y JSON.

Uso: representación de JSON, transporte de datos, configuración.

## Mapas / Diccionarios

Descripción: colección de pares clave→valor con acceso por clave (hash map / tree map).

Implementaciones comunes:
- HashMap (Java), dict (Python) — acceso promedio O(1).
- std::map (C++) / TreeMap (Java) — implementación de árbol, acceso O(log n), ordenado.

Operaciones típicas:
- get/put/remove: O(1) promedio en tablas hash.
- Iteración por claves o valores.

Cuándo usar: cuando necesites acceso rápido por clave; evita usar objetos como claves a menos que sean inmutables o tengan hashing definido.

## Referencias

### Libros (títulos)
- "Introduction to Algorithms" — Cormen, Leiserson, Rivest, Stein (CLRS)
- "Algorithms" — Robert Sedgewick, Kevin Wayne

### Documentación oficial (vínculos)
- Python data structures: https://docs.python.org/3/tutorial/datastructures.html
- Java Collections Framework: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/package-summary.html
- C++ STL containers (vector, list, map): https://en.cppreference.com/w/cpp/container
- JavaScript objects and Map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Objects
- Rust collections: https://doc.rust-lang.org/std/collections/
