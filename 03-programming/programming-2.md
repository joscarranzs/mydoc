
# 03 - Programación: Estructura básica

## Tabla de contenido

- [Introducción](#introducción)
- [Entrada → proceso → salida](#entrada-→-proceso-→-salida)
- [Flujo secuencial](#flujo-secuencial)
- [Errores comunes](#errores-comunes)
- [Referencias](#referencias)

## Introducción

Este documento explica la estructura más elemental de un programa y cómo se organiza el flujo de datos y control: entrada, procesamiento y salida. También describe el patrón de ejecución secuencial y enumera errores frecuentes que aparecen al programar — útiles como checklist para depuración inicial.

## Entrada → proceso → salida

Modelo básico:

- Entrada (Input): datos que el programa recibe — pueden provenir de usuario (stdin), ficheros, redes, sensores, o argumentos de línea de comandos.
- Proceso (Process): lógica que transforma la entrada. Incluye validación, cálculos, llamadas a librerías, acceso a bases de datos y manipulación de estructuras de datos.
- Salida (Output): resultado de la transformación — puede ser texto en pantalla, archivo, respuesta a una petición web, o control sobre hardware.

Este modelo se aplica desde scripts muy simples hasta sistemas complejos. Separar claramente cada etapa ayuda a testear y mantener el código (por ejemplo, escribir funciones puras para procesar datos facilita tests automáticos).

Ejemplo conceptual (pseudocódigo):

- input = read_input()
- validated = validate(input)
- result = compute(validated)
- write_output(result)

Buenas prácticas:

- Validar la entrada antes de procesar.
- Manejar errores y condiciones límite (inputs vacíos, valores fuera de rango).
- Mantener funciones pequeñas y con una única responsabilidad (SRP).

## Flujo secuencial

Definición:

- El flujo secuencial es el orden de ejecución línea por línea — el comportamiento predeterminado en la mayoría de los lenguajes imperativos. Cada instrucción se ejecuta después de la anterior salvo que intervengan saltos de control (condicionales, loops, excepciones o llamadas a funciones).

Elementos del flujo:

- Sentencias y expresiones: instrucciones básicas que realizan operaciones.
- Condicionales: `if/else` dirigen el flujo según condiciones.
- Bucles: `for`, `while` permiten repetir acciones hasta una condición.
- Funciones/procedimientos: abstraen y organizan partes del flujo para reutilizar y clarificar.

Ejemplo de flujo secuencial (pseudocódigo):

- inicializar variables
- leer entradas
- si (condición) entonces
	- ejecutar rama A
- sino
	- ejecutar rama B
- fin si
- bucle sobre elementos
- terminar y devolver resultados

Tips para control de flujo:

- Evitar funciones gigantes; divide en pasos claros.
- Documentar invariantes y efectos secundarios de cada función.

## Errores comunes

Errores frecuentes para revisar temprano:

- Errores de validación de entrada: asumir formato/valores y no validar. (Ej.: parseInt sin manejo de NaN.)
- Off-by-one: errores en índices al iterar arrays o rangos (común con límites inclusivos/exclusivos).
- Null/None/NoneType: no comprobar si referencias existen antes de acceder.
- Race conditions (concurrencia): compartir estado sin sincronización causa comportamientos indeterministas.
- Memory leaks / recursos no liberados: olvidar cerrar ficheros o conexiones.
- Dependencias y versiones: cambios en librerías rotas por incompatibilidades semánticas.
- Errores de tipos: pasar tipos incorrectos a funciones; mitigado por tipado (static typing) o tests.

Cómo depurar y prevenir:

- Añadir pruebas unitarias que cubran casos límite.
- Usar linters y herramientas de análisis (static analyzers, sanitizers).
- Revisar mensajes y stack traces — leer la traza completa ayuda localizar el origen.
- Aislar el problema: reducir input/ejecución hasta el origen del fallo (minimizar ejemplo reproducible).

Checklist rápido de debugging:

- ¿Qué cambió recientemente? (últimos commits, versiones)
- ¿La entrada es la esperada? Añadir logs o prints para inspeccionar.
- ¿Hay excepciones no capturadas? Revisa logs y stack traces.
- ¿El error aparece en producción y/o local? Reproducir en ambiente controlado.

## Referencias

### Libros (títulos)

- "Structure and Interpretation of Computer Programs" — Harold Abelson, Gerald Jay Sussman
- "Clean Code" — Robert C. Martin
- "Code Complete" — Steve McConnell

### Documentación oficial (vínculos)

- Python tutorial — I/O and exceptions: https://docs.python.org/3/tutorial/inputoutput.html
- C standard library (I/O functions): https://en.cppreference.com/w/c/io
- POSIX read/write: https://pubs.opengroup.org/onlinepubs/9699919799/functions/read.html
- Debugging with GDB (GNU): https://www.gnu.org/software/gdb/documentation/

