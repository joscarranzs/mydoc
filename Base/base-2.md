# Compiladores e intérpretes

## Tabla de contenidos

- Nota sobre TypeScript
- ¿Qué es un compilador?
- ¿Qué es un intérprete?
- Funcionamiento de un compilador
- Funcionamiento de un intérprete
- Modelos híbridos y transpilación
- Diferencias prácticas y consideraciones
- Ejemplos y referencias

## Nota sobre TypeScript

En esta guía usaremos TypeScript como lenguaje de referencia para ejemplos en temas futuros. TypeScript es un superconjunto de JavaScript que añade tipado estático opcional y otras facilidades; sin embargo, TypeScript no se ejecuta directamente en navegadores o en Node.js: su código se transpila a JavaScript, que luego será ejecutado por una máquina que entiende JavaScript. No entraremos en profundidad sobre TypeScript aquí: la mención sirve para contextualizar el modelo de transpilación y la diferencia entre autor y tiempo de ejecución.

## ¿Qué es un compilador?

Un compilador es una herramienta (programa) que traduce código fuente escrito en un lenguaje de alto nivel (lenguaje fuente) a otro lenguaje (frecuentemente código máquina o un lenguaje intermedio/bytecode) antes de su ejecución. El resultado de esa traducción suele ser un binario ejecutable o un artefacto intermedio que puede ser enlazado y ejecutado posteriormente.

Objetivos y responsabilidades típicas de un compilador:

- Analizar y comprobar la corrección del programa (sintaxis y, a menudo, semántica).
- Optimizar el código para mejorar rendimiento y/o tamaño.
- Generar un formato de salida ejecutable o eficiente para una máquina objetivo.

Ventajas habituales de la compilación:

- Mejor rendimiento en ejecución (código optimizado y nativo).
- Posibilidad de comprobar errores en tiempo de compilación.
- Distribución de binarios sin necesidad de compartir el código fuente.

## ¿Qué es un intérprete?

Un intérprete es un programa que ejecuta instrucciones escritas en un lenguaje de programación directamente, sin producir necesariamente un binario separado como paso intermedio. El intérprete lee el código fuente (o una representación intermedia) y realiza las operaciones indicadas en tiempo de ejecución.

Características y responsabilidades de un intérprete:

- Analizar y evaluar el código en tiempo de ejecución.
- Mantener un ciclo de lectura-evaluación-impresión (REPL) en algunos entornos.
- Facilitar retroalimentación rápida durante el desarrollo.

Ventajas habituales de la interpretación:

- Ciclo de desarrollo rápido: ejecutar cambios sin pasar por un proceso de compilación completo.
- Portabilidad: mientras exista un intérprete para la plataforma, el mismo código fuente puede ejecutarse sin recompilar.

## Funcionamiento de un compilador

Aunque existen muchas implementaciones y detalles, la mayoría de los compiladores pasan por fases conceptuales semejantes:

1. Análisis léxico (tokenización): el compilador lee el código fuente y lo transforma en tokens (identificadores, literales, operadores, etc.).

2. Análisis sintáctico (parsing): a partir de los tokens se construye una estructura sintáctica (árbol de sintaxis abstracta, AST) que representa la jerarquía del programa.

3. Análisis semántico: se verifican reglas del lenguaje que no son puramente sintácticas (tipos, resoluciones de nombres, coherencia de llamadas, alcance de variables). Aquí suelen detectarse muchos errores en tiempo de compilación.

4. Optimización intermedia: se realizan transformaciones sobre la representación intermedia (IR) para mejorar rendimiento, reducir repetición de cálculos o eliminar código muerto.

5. Generación de código: la IR optimizada se traduce a código máquina, ensamblador o bytecode para una máquina virtual objetivo.

6. Enlazado (linking) y empaquetado: se combinan piezas (librerías, módulos) para producir el resultado final ejecutable o el paquete desplegable.

Aspectos prácticos:

- Algunos compiladores producen código intermedio (por ejemplo, bytecode) que luego es ejecutado por una VM (máquina virtual). Otros generan código nativo directo.
- La optimización puede ser costosa en tiempo de compilación; los compiladores ofrecen niveles de optimización distintos (por ejemplo -O0, -O2, -O3).

## Funcionamiento de un intérprete

Modelo simple de un intérprete:

1. Lectura/Tokenización: como el compilador, el intérprete convierte el texto a tokens.

2. Parsing: crea una estructura intermedia (AST) u otra representación adecuada.

3. Evaluación directa: el intérprete recorre la estructura (por ejemplo el AST) y ejecuta las operaciones inmediatamente, gestionando el estado (variables, pila, entorno).

Variantes y optimizaciones comunes en intérpretes modernos:

- Interpretación directa del AST: método simple y fácil de implementar, pero puede ser más lento.
- Compilación a bytecode + máquina virtual: el intérprete traduce el código fuente a un bytecode compacto que una VM ejecuta; esto mejora velocidad frente a interpretar el AST directamente (ej. CPython).
- JIT (Just-In-Time): el intérprete o la VM compilan partes calientes del código a código máquina en tiempo de ejecución para mejorar rendimiento (ej. V8 para JavaScript, HotSpot para Java).

## Modelos híbridos y transpilación

No todos los sistemas son puramente compiladores o intérpretes: hay modelos intermedios importantes:

- Transpiladores: traducen código de un lenguaje a otro a nivel de alto nivel (por ejemplo, TypeScript a JavaScript, o Babel que convierte ESNext a versiones compatibles). El resultado suele requerir un intérprete o compilador posterior.
- Compilación Ahead-of-Time (AOT) vs JIT: AOT compila antes de la ejecución (mejor rendimiento inicial); JIT compila en caliente durante la ejecución (mejor adaptabilidad).
- Bytecode + VM: muchos lenguajes (Java, C#) compilan a bytecode que corre en una VM, consiguiendo un equilibrio entre portabilidad y rendimiento.

## Diferencias prácticas y consideraciones

- Rendimiento: en general, el código nativo generado por compilación suele ser más rápido que la interpretación directa; los JIT han reducido mucho esta brecha.
- Ciclo de desarrollo: la interpretación o modelos de transpilación suelen ofrecer feedback más rápido para desarrollo y prototipado.
- Portabilidad: los intérpretes y las máquinas virtuales incrementan la portabilidad del mismo binario o fuente.
- Seguridad y despliegue: la distribución de binarios compilados puede ocultar la lógica fuente; sin embargo, los binarios también pueden requerir consideraciones de compatibilidad por plataforma.
- Herramientas y ecosistema: la elección influye en herramientas disponibles (depuradores, perfiles, empaquetadores) y en el tamaño del ecosistema.

## Ejemplos y referencias

- Lenguajes compilados típicos: C, C++, Rust, Go (ejecución nativa tras compilación).
- Lenguajes interpretados típicos: Python, Ruby (aunque muchos tienen VM/bytecode o implementaciones JIT).
- Modelos híbridos: Java y C# (compilan a bytecode/IL y ejecutan en VM), JavaScript moderno (motores JIT como V8), TypeScript (transpila a JavaScript).

- Lecturas y recursos recomendados:
	- "Compilers: Principles, Techniques, and Tools" (Dragon Book) — visión clásica sobre compiladores.
	- Documentación de proyectos: V8 (motor JS), CPython (implementación de Python), TypeScript (transpilador y flujo).

---