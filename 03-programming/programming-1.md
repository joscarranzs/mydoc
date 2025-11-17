
# 03 - Programación: Qué significa programar

## Tabla de contenido

- [Introducción](#introducción)
- [Propósito de un programa](#propósito-de-un-programa)
- [Código fuente y ejecución](#código-fuente-y-ejecución)
- [Compiladores vs. intérpretes](#compiladores-vs-intérpretes)
- [Referencias](#referencias)

## Introducción

Programar significa crear instrucciones claras y ejecutables que una máquina puede comprender y ejecutar para resolver problemas, automatizar tareas o construir sistemas. En este documento se exponen los conceptos básicos del propósito de un programa, la relación entre código fuente y ejecución, y las diferencias entre compiladores e intérpretes.

## Propósito de un programa

Un programa es un conjunto de instrucciones que transforma entradas en salidas según un objetivo definido. Sus propósitos incluyen:

- Automatización de tareas repetitivas (por ejemplo scripts para copias de seguridad).
- Transformación y procesamiento de datos (parsers, ETL, bases datos).
- Implementación de servicios y sistemas (servidores web, APIs, microservicios).
- Interfaces y aplicaciones (aplicaciones de escritorio, móviles o interfaces gráficas).
- Control de dispositivos y sistemas embebidos (firmware, controladores).

Un programa debe ser mantenible, legible y confiable. Por ello, el diseño (estructura, modularidad) y las pruebas automatizadas son prácticas fundamentales.

## Código fuente y ejecución

El código fuente es la representación legible por humanos del programa (archivo(s) .c, .py, .js, .rs, etc.). La ejecución es el proceso por el cual el código (o su representación intermedia) se transforma en acciones en el hardware y el sistema operativo.

Elementos clave:

- Código fuente: escrito en un lenguaje de programación con reglas (sintaxis y semántica) que el programador usa para expresar algoritmos.
- Libraries y dependencias: código reutilizable que se enlaza o importa para añadir funcionalidades.
- Construcción: proceso que transforma el código fuente en un artefacto ejecutable (compilación, enlace, empaquetado).
- Tiempo de ejecución (runtime): entorno donde corre el programa (por ejemplo, JVM para Java, intérprete de Python, o un ejecutable nativo en Linux); incluye manejo de memoria, excepciones y llamadas al sistema.

Errores y manejo: Durante el desarrollo pueden aparecer errores de sintaxis, de tipo, lógicos o de entorno; las herramientas (editors, linters, tests) ayudan a detectarlos antes de la ejecución.

## Compiladores vs. intérpretes

Compiladores e intérpretes son dos enfoques para ejecutar código escrito en un lenguaje de programación.

- Compiladores:
	- Toman el código fuente y lo transforman en un programa ejecutable (binario) o en una representación intermedia (bytecode) antes de su ejecución.
	- Ejemplos: GCC para C/C++, Rustc para Rust.
	- Ventajas: el código compilado suele ser más rápido en tiempo de ejecución; se pueden aplicar optimizaciones a nivel de compilación.
	- Desventajas: ciclo editar/compilar/ejecutar más largo; dependencias en etapas de enlace.

- Intérpretes:
	- Ejecutan el código fuente directamente o lo traducen instrucción a instrucción en tiempo de ejecución.
	- Ejemplos: CPython para Python, Node.js para JavaScript (aunque Node.js compila internamente a bytecode V8).
	- Ventajas: desarrollo rápido, feedback inmediato, útil para scripting y prototipos.
	- Desventajas: rendimiento de ejecución suele ser menor que el de programas compilados; sin embargo, JIT y optimizaciones modernas cierran la brecha.

- Modelos híbridos:
	- Lenguajes que combinan ambos: compilación a bytecode + ejecución por una VM (Java, C#), o compilación a código nativo en tiempo de ejecución (JIT).

Elección de modelo:

- Depende del caso de uso: sistemas de alto rendimiento tienden a usar lenguajes compilados; scripting, análisis de datos o desarrollo ágil suelen usar lenguajes interpretados o híbridos.

## Referencias

### Libros (títulos)

- "Structure and Interpretation of Computer Programs" — Harold Abelson, Gerald Jay Sussman
- "Introduction to Algorithms" — Thomas H. Cormen, et al.
- "Programming Languages: Concepts and Constructs" — R. Friedman & T. Wand (or other canonical references)

### Documentación oficial (vínculos)

- ISO C standard details: https://www.iso.org/standard/74528.html (reference to C standard)
- Python documentation (official): https://docs.python.org/3/
- GCC and GNU toolchain: https://gcc.gnu.org/
- Rust compiler: https://www.rust-lang.org/
- Java (Oracle / OpenJDK): https://openjdk.org/

