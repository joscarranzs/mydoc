
# 02 - Terminal: Conceptos esenciales

## Tabla de contenido

- [Introducción](#introducción)
- [Qué es la shell](#qué-es-la-shell)
- [Tipos de shell (Bash, Zsh, etc.)](#tipos-de-shell-bash-zsh-etc)
- [Ciclo de entrada → interpretación → ejecución](#ciclo-de-entrada-→-interpretación-→-ejecución)
- [Referencias](#referencias)

## Introducción

La shell es el intérprete de comandos que permite comunicarse con el sistema operativo mediante texto; interpreta comandos, redirecciones y scripts. En este documento describimos conceptos básicos, los shells más usados y el ciclo que sigue una orden desde la entrada del usuario hasta su ejecución.

## Qué es la shell

Definición y responsabilidades:

- Intérprete de comandos: recibe una línea (o script), la parsea, expanden variables/globbing, maneja tuberías y redirecciones y ejecuta comandos.
- Entorno: mantiene variables de entorno, alias, funciones y estado de sesión (jobs, histórico).
- Control de trabajos: permite poner procesos en background/foreground (job control), detener y reanudar.
- Expansiones: variable expansion, pathname expansion (globbing), command substitution y quotes.
- Scripting: las shells permiten automatizar tareas con scripts que pueden contener condicionales, bucles y funciones.

Diferencia entre terminal y shell:

- Terminal (o emulador de terminal) es la aplicación gráfica o de texto que provee E/S (ej.: GNOME Terminal, xterm, alacritty). La shell es el programa que corre dentro del terminal (ej.: bash).

## Tipos de shell (Bash, Zsh, etc.)

Algunos shells importantes:

- sh (POSIX shell): especificación estandarizada (POSIX) para el intérprete de comandos. Actúa como referencia para compatibilidad entre shells.
- Bash (Bourne Again Shell): muy extendido; compatible con POSIX y añade características (arrays, coproc, mejoras en scripting). Documentación oficial: el manual de GNU Bash.
- Zsh: eficiente y configurable, con características avanzadas de autocompletado, globbing y prompt. Usado por usuarios que quieren más personalización.
- Fish: shell friendly-interactive (no POSIX); orientada a mejoras en UX y completado automático.

Elección y compatibilidad:

- Para scripts portables, usar la sintaxis POSIX (`/bin/sh`) y evitar extensiones específicas.
- Para uso interactivo, distros y preferencias personales determinan la elección (bash por defecto históricamente, zsh cada vez más popular, fish para UX).

## Ciclo de entrada → interpretación → ejecución

Resumen de las fases que ocurren cuando se introduce una orden:

1. Entrada: el usuario escribe una línea en el prompt y presiona Enter; la shell lee la línea de stdin.
2. Tokenización y parseo: la shell divide la línea en tokens (palabras y operadores), teniendo en cuenta comillas y escapes.
3. Expansiones:
	- Expansión de variables (ej.: `$HOME`).
	- Expansión de comandos (ej.: `$(date)` o backticks).
	- Pathname expansion (globbing: `*.txt`).
	- Expansiones aritméticas y arrays si aplica.
4. Interpretación de metacaracteres: `|`, `;`, `&&`, `||`, `>`, `<`, `>>` crean tuberías, secuencias, condicionales y redirecciones.
5. Resolución de comandos:
	- Shell checks builtins (ej.: `cd`, `export`) and functions first.
	- If not builtin, it searches PATH for executable files or executes a shell function/alias.
6. Fork/exec y job control:
	- La shell crea procesos (fork/exec) para ejecutar programas externos.
	- Para pipelines, conecta la salida estándar de un proceso con la entrada estándar del siguiente.
	- Si un proceso se lanza en foreground, la shell espera su terminación o gestiona señales; en background, no espera.
7. Manejo de estado y retorno:
	- La shell registra el valor de retorno (`$?`) y el historial de comandos.
	- Si hay errores o señales, se notifican y la shell puede ejecutar traps (manejadores de señal).

Ejemplo corto (conceptual):

- Comando: echo $(date) > salida.txt
  - `$(date)` se expande a la salida del comando date.
  - `echo` recibe el texto y lo escribe en `salida.txt` (redirección `>`).

## Referencias

### Libros (títulos)

- "The Linux Command Line" — William E. Shotts, Jr.
- "Learning the bash Shell" — Cameron Newham
- "Classic Shell Scripting" — Arnold Robbins, Nelson H. F. Beebe

### Documentación oficial (vínculos)

- GNU Bash manual: https://www.gnu.org/software/bash/manual/
- Bash manpage: https://man7.org/linux/man-pages/man1/bash.1.html
- POSIX Shell and Utilities: https://pubs.opengroup.org/onlinepubs/9699919799/
- Zsh official site: https://www.zsh.org/
- Fish shell docs: https://fishshell.com/docs/current/

