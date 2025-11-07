# Lenguajes y paradigmas de programación

## Tabla de contenidos

- ¿Qué es un lenguaje de programación?
- Tipos de lenguajes de programación
	- Según el nivel de abstracción
	- Según el modo de ejecución
	- Según el tipado
	- Lenguajes de dominio específico
- Paradigmas de programación
	- Paradigma imperativo / procedural
	- Programación orientada a objetos (POO)
	- Programación funcional
	- Programación declarativa y lógica
	- Programación reactiva y basada en eventos
	- Concurrencia y paralelismo
- Ejercicios
- Sugerencias (sitios web, libros, recursos)

## ¿Qué es un lenguaje de programación?

Un lenguaje de programación es un sistema formal de notación y reglas que permite a las personas expresar algoritmos y estructuras de datos de manera que una máquina (como un ordenador) pueda interpretar o compilar esas instrucciones y ejecutarlas. Incluye una sintaxis (cómo se escriben las instrucciones) y una semántica (qué significan esas instrucciones). Los lenguajes de programación sirven para transformar ideas y soluciones en artefactos ejecutables que realizan tareas, procesan información y controlan dispositivos.

Funciones clave de un lenguaje de programación:

- Permitir la expresión de algoritmos y lógica de negocio.
- Proveer abstracciones sobre el hardware (memoria, CPU, IO).
- Facilitar la reutilización, modularidad y legibilidad del código.
- Soportar herramientas (compiladores, intérpretes, depuradores, analizadores estáticos).

## Tipos de lenguajes de programación

Hay muchas formas de clasificar los lenguajes. A continuación se presentan las clasificaciones más útiles para desarrolladores web y generales.

- Según el nivel de abstracción
	- Lenguajes de bajo nivel: proximidad al hardware (ej. ensamblador). Ofrecen control fino sobre memoria y CPU.
	- Lenguajes de alto nivel: mayor abstracción y facilidades sintácticas para el desarrollador (ej. Python, JavaScript, Ruby).

- Según el modo de ejecución
	- Lenguajes compilados: el código fuente se traduce a código máquina u otro formato antes de ejecutarse (ej. C, Rust, Go). Ventajas: rendimiento y optimizaciones; desventajas: ciclo de compilación.
	- Lenguajes interpretados: el código se ejecuta por un intérprete en tiempo de ejecución (ej. JavaScript en navegadores, Python en muchas implementaciones). Ventajas: desarrollo rápido; desventajas: rendimiento en algunos casos.
	- En la práctica muchos lenguajes usan modelos mixtos (ej. compilación a bytecode + VM, o JIT).

- Según el tipado
	- Tipado estático: los tipos se conocen y se comprueban en tiempo de compilación (ej. TypeScript, Java). Ayuda a detectar errores tempranos.
	- Tipado dinámico: los tipos se resuelven en tiempo de ejecución (ej. JavaScript, Python). Ofrece flexibilidad y rapidez para prototipado.
	- Tipado fuerte vs débil: describe cuánta conversión implícita de tipos permite el lenguaje.

- Lenguajes de dominio específico (DSL)
	- Diseñados para resolver problemas concretos, por ejemplo SQL (consultas a bases de datos), HTML/CSS (marcado y estilos), regex (patrones de texto), herramientas de build, etc.

Otras distinciones prácticas

- Lenguajes orientados a scripts: pensados para automatización y orquestación (ej. Bash, PowerShell, scripts en Node.js).
- Lenguajes para front-end web: HTML/CSS (marcado y estilo), JavaScript/TypeScript (lógica en navegador).
- Lenguajes para back-end y servicios: Java, C#, Python, Go, Node.js, Ruby, etc.

## Paradigmas de programación

Un paradigma de programación es un estilo o modelo para estructurar y razonar sobre programas. Muchos lenguajes soportan varios paradigmas; elegir uno u otro influye en diseño, mantenimiento y rendimiento.

- Paradigma imperativo / procedural
	- El programa se describe como una secuencia de instrucciones que cambian el estado del sistema. Se basa en procedimientos o funciones que ejecutan pasos concretos.
	- Ejemplos de características: variables mutables, bucles, asignaciones.
	- Lenguajes típicos: C, Pascal; scripts y la mayoría de lenguajes soportan este estilo.

- Programación orientada a objetos (POO)
	- Organiza el código en objetos que encapsulan estado (atributos) y comportamiento (métodos). Promueve encapsulación, herencia y polimorfismo.
	- Ventajas: modelado natural de dominios complejos, reutilización mediante clases/objetos.
	- Lenguajes típicos: Java, C#, Ruby, Python (soporta POO aunque no es exclusivamente OO).

- Programación funcional
	- Trata la computación como la evaluación de funciones matemáticas y evita el estado mutable. Fomenta funciones puras, composición y uso de funciones de orden superior.
	- Beneficios: facilita razonamiento, pruebas y concurrencia segura.
	- Lenguajes típicos: Haskell, Erlang, Clojure; también JavaScript y Python soportan estilos funcionales (map, reduce, filter, funciones lambda).

- Programación declarativa y lógica
	- Declarativa: describes el qué quiere obtener en lugar del cómo (ej. SQL, expresiones en React/JSX cuando declaras UI). La ejecución queda a cargo del motor.
	- Lógica: basada en reglas y relaciones lógicas; ejemplo clásico: Prolog.

- Programación reactiva y basada en eventos
	- Centrada en flujos de datos, señales y en responder a eventos (inputs del usuario, cambios de estado). Muy usada en interfaces de usuario y sistemas en tiempo real.
	- Herramientas y bibliotecas: RxJS (reactive extensions), frameworks front-end que usan modelos reactivos.

- Concurrencia y paralelismo
	- Modelos y paradigmas que permiten ejecutar tareas simultáneamente: hilos (threads), procesos, actores (Erlang), corrutinas/async-await (JavaScript, Python, Kotlin), y modelos sin bloqueo.
	- Elegir un modelo afecta la seguridad frente a condiciones de carrera, rendimiento y complejidad del diseño.

## Ejercicios

1. Describe con tus propias palabras la diferencia entre un lenguaje compilado y uno interpretado. Da un ejemplo real de cada uno y un caso de uso adecuado.

2. Clasifica los siguientes lenguajes según el tipo de tipado (estático/dinámico) y paradigma principal: Java, JavaScript, Haskell, Python, C, SQL. Justifica cada clasificación en una o dos frases.

3. Implementa una pequeña función que calcule la suma de una lista de números en dos estilos diferentes: uno procedural/imperativo y otro funcional (usando un enfoque sin mutaciones). Usa el lenguaje que prefieras.

4. Elige una tarea sencilla para la web (por ejemplo: mostrar una lista de tareas y marcar elementos completados). Diseña una solución en POO y otra en un estilo reactivo/declarativo; compara brevemente ventajas y desventajas de cada enfoque.

5. Investiga un lenguaje de dominio específico (por ejemplo SQL o un DSL de plantillas) y escribe un ejemplo práctico que resuelva una necesidad real (consultar datos, generar un documento, etc.).

## Sugerencias (sitios web, libros, recursos)

- Sitios web
	- MDN Web Docs — documentación excelente sobre JavaScript, HTML, CSS y conceptos web: https://developer.mozilla.org/
	- freeCodeCamp — tutoriales prácticos y guías: https://www.freecodecamp.org/
	- Stack Overflow — preguntas y soluciones de la comunidad: https://stackoverflow.com/
	- IEEE, ACM y blogs técnicos (ej. Martin Fowler) para artículos sobre arquitectura y paradigmas.

- Libros recomendados
	- "Clean Code" de Robert C. Martin — buenas prácticas de escritura de código.
	- "Structure and Interpretation of Computer Programs" (SICP) — conceptos fundamentales (disponible gratis en línea).
	- "Design Patterns: Elements of Reusable Object-Oriented Software" — patrones de diseño clásico.
	- "Programming Language Pragmatics" — visión profunda sobre lenguajes y diseño de compiladores (más académico).
	- "You Don't Know JS" (serie) — profundo para JavaScript (útil en desarrollo web).

- Recursos adicionales
	- Documentación oficial de lenguajes (Python.org, nodejs.org, typescriptlang.org, rust-lang.org).
	- Cursos en línea: Coursera, edX, Platzi, Udemy (buscar cursos con buena valoración y contenidos actualizados).

---