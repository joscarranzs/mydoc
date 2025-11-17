
# 03 - Programación: Clasificación de los datos

## Tabla de contenido

- [Introducción](#introducción)
- [Tipos de datos dinámicos](#tipos-de-datos-dinámicos)
- [Tipos de datos estáticos](#tipos-de-datos-estáticos)
- [Comparación y criterios de elección](#comparación-y-criterios-de-elección)
- [Referencias](#referencias)

## Introducción

Esta página clasifica los datos según su naturaleza y cómo se representan en memoria en distintos lenguajes: tipos dinámicos (flexibles en tamaño o tipo durante la ejecución) y tipos estáticos (estructuras fijas o con tipos decididos en tiempo de compilación). Incluye ejemplos, ventajas y cuándo preferir cada modelo.

## Tipos de datos dinámicos

Definición y características:

- Los tipos de datos dinámicos pueden cambiar su tamaño o forma en tiempo de ejecución; las variables pueden admitir distintos tipos durante la ejecución (dependiendo del lenguaje).
- Se implementan con estructuras que usan memoria dinámica (heap), referencias y metadatos para permitir crecimiento y operaciones en tiempo de ejecución.

Ejemplos comunes:

- Listas/arrays dinámicos: `list` en Python, `ArrayList` en Java, `Vec` en Rust (aunque `Vec` es tipado estáticamente, su tamaño es dinámico). Permiten agregar/quitar elementos en tiempo de ejecución.
- Diccionarios/Mapas: `dict` en Python, `HashMap` en Java.
- Strings dinámicos: cadenas que pueden crecer (p. ej. `std::string` en C++ o `String` en Java).
- Tipado dinámico: en lenguajes como Python o JavaScript, una variable puede referenciar diferentes tipos a lo largo del tiempo.

Ventajas:

- Flexibilidad para modelar dominios con tamaños variables o datos heterogéneos.
- Desarrollo rápido y menos código inicial para operaciones comunes con colecciones.
- En lenguajes dinámicos, prototipado rápido y expresividad.

Limitaciones y consideraciones:

- Overhead en memoria y CPU: estructuras dinámicas suelen requerir metadatos y reallocation.
- Errores a tiempo de ejecución por abuso del tipado dinámico (typos, invariantes rotas).
- Necesidad de buenas prácticas y tests para evitar bugs silenciosos.

Implementaciones y detalles:

- Reasignación y amortización: arrays dinámicos a menudo doblan capacidad para amortiguar el coste de push.
- Recolección de basura: muchos runtimes usan GC para gestionar memoria dinámica (Python, Java).

## Tipos de datos estáticos

Definición y características:

- Tipos estáticos se definen con un tamaño o un tipo determinado en tiempo de compilación. La memoria puede asignarse estáticamente (data segment), en la pila (stack) o en el heap pero con tipos fijados por el compilador.

Ejemplos comunes:

- Primitivos: `int`, `float`, `char` en C/Java/C++: tamaños y tipos definidos.
- Arrays de tamaño fijo: `int arr[10]` en C; la capacidad es estática.
- Tipado estático: variables con tipos determinados por el compilador (C, C++, Java, Rust). Las colecciones pueden ser tipadas estáticamente (por ejemplo `List<String>` en Java) aunque tengan tamaño dinámico.

Ventajas:

- Mayor rendimiento (menos overhead): acceso directo a memoria sin metadatos extra.
- Detección temprana de errores: el compilador detecta incompatibilidades de tipos.
- Control explícito de memoria y optimizaciones por parte del compilador.

Limitaciones:

- Menos flexibilidad para datos con tamaño variable o estructuras heterogéneas.
- Mayor verbosidad para operaciones que en dinámicos son triviales (migración y casting explícito).

Casos mixtos:

- Lenguajes modernos permiten combinar lo mejor: por ejemplo, C++ `std::vector<T>` ofrece tamaño dinámico pero con tipo estático `T`; Rust `Vec<T>` funciona igual con propiedad y sin GC.

## Comparación y criterios de elección

Preguntas para elegir:

- ¿Requieres rendimiento crítico o predictibilidad? Si sí, prefiere tipos estáticos y estructuras de tamaño fijo.
- ¿Necesitas prototipado rápido y flexibilidad? Si sí, estructuras dinámicas y tipado dinámico pueden acelerar el desarrollo.
- ¿Cuál es el coste de memoria tolerable? Las estructuras dinámicas suelen consumir más memoria por metadatos y reallocation.

Patrones prácticos:

- Usa tipos estáticos en sistemas embebidos, controladores o software que debe correr con límites estrictos.
- Prefiere estructuras dinámicas en servicios web, scripts, data analysis y prototipado.
- Para balancear, usa colecciones tipadas estáticamente con tamaño dinámico (ej.: `Vec<T>`, `ArrayList<T>`) cuando quieras seguridad de tipos y flexibilidad de tamaño.

## Referencias

### Libros (títulos)

- "Types and Programming Languages" — Benjamin C. Pierce
- "The Rust Programming Language" — Steve Klabnik and Carol Nichols
- "Effective Java" — Joshua Bloch (para prácticas sobre colecciones y tipado genérico)

### Documentación oficial (vínculos)

- Python data structures (official docs): https://docs.python.org/3/tutorial/datastructures.html
- Java Collections Framework: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/package-summary.html
- C arrays and memory: https://en.cppreference.com/w/c/language/array
- Rust collections: https://doc.rust-lang.org/std/vec/struct.Vec.html
- C++ std::vector: https://en.cppreference.com/w/cpp/container/vector

