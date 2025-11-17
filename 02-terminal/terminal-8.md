
# 02 - Terminal: Personalización de la shell

## Tabla de contenido

- [Introducción](#introducción)
- [Alias](#alias)
- [Prompt](#prompt)
- [Archivos de configuración (.bashrc, .zshrc)](#archivos-de-configuración-bashrc-zshrc)
- [Referencias](#referencias)

## Introducción

Personalizar la shell hace la línea de comandos más eficiente y agradable. Esta guía cubre alias para atajos, cómo configurar el prompt (PS1 / PROMPT), y dónde poner las configuraciones (`.bashrc`, `.zshrc`, archivos de inicio). Incluye ejemplos mínimos y enlaces oficiales para profundizar.

## Alias

Alias son atajos para comandos largos o habituales. Definición y ejemplos:

- Crear alias temporal en la sesión: `alias ll='ls -alF'`.
- Eliminar alias: `unalias ll`.
- Alias con opciones seguras: `alias rm='rm -i'` para preguntar antes de borrar.

Persistencia:

- Añade alias a tu archivo de configuración de shell (`~/.bashrc` o `~/.zshrc`) para que estén siempre disponibles.

Alias vs funciones:

- Para transformaciones simples los alias son suficientes. Para lógica más compleja (parámetros, condicionales, loops), usa funciones:

	- Ejemplo de función pequeña en Bash:
		- `mkcd() { mkdir -p -- "$1" && cd -- "$1"; }`

Evita alias con efectos inesperados en scripts: los scripts deberían usar comandos explícitos o `sh -c`/`bash -c` según corresponda.

## Prompt

El prompt (PS1 en Bash, PROMPT o PS1 en Zsh) define qué muestra la shell antes de leer un comando. Se puede incluir usuario, host, directorio, hora y colores.

Bash (PS1):

- Variable principal: `PS1`.
- Ejemplo simple: `export PS1='\u@\h:\w\$ '` (usuario@host:directorio$).
- Para colores hay que insertar secuencias de escape y delimitar con `\[ ... \]` en Bash para que readline calcule correctamente el ancho: `PS1='\[\e[32m\]\u@\h\[\e[0m\]:\w\$ '`.

Zsh:

- Zsh usa `%` escapes: `PROMPT='%n@%m:%~%# '`. Zsh suele gestionar colores y anchuras automáticamente cuando se usan los escapes proporcionados.

Elementos comunes en prompts:

- Usuario `\u` / `%n`.
- Host `\h` / `%m`.
- Current working directory `\w` / `%~`.
- Exit status y git branch: se puede mostrar `$?` (estado del último comando) o invocar una función que lea la rama actual (`git rev-parse --abbrev-ref HEAD`).

Buenas prácticas:

- Evitar comandos costosos dentro del prompt (evita latencia); en su lugar, cachea información si es necesario.
- Usa escapes correctos para colores (`\[\e[...m\]` en Bash) para evitar problemas con la edición de línea.

## Archivos de configuración (.bashrc, .zshrc)

Archivos y cuándo se ejecutan (resumen):

- `~/.bashrc`: inicialización de shells interactivos no log-in. Ideal para alias, funciones, PS1 y configuración interactiva.
- `~/.bash_profile` y `~/.profile`: usados por shells de login; suelen `source ~/.bashrc` al final para cargar aliases en shells de login.
- `~/.zshrc`: equivalente para Zsh (shell interactiva). `~/.zprofile` y `~/.zlogin` existen para login shells.

Organización recomendada:

- Mantén alias, funciones y prompt en `~/.bashrc` o `~/.zshrc`.
- Pone variables de entorno que deben aplicarse en la sesión de login en `~/.profile` o `~/.bash_profile`.
- Para configuraciones por servicio (systemd) o scripts no interactivos, no dependas de archivos de shell interactivos; configura variables en el entorno del servicio (Environment= o EnvironmentFile=).

Ejemplo de fragmento en `~/.bashrc`:

- alias ll='ls -alF'
- export PS1='\[\e[33m\]\u@\h:\[\e[32m\]\w\[\e[0m\]\$ '
- Carga ~/.bash_aliases si existe
- if [ -f ~/.bash_aliases ]; then . ~/.bash_aliases; fi

Compatibilidad y portabilidad:

- Para scripts portables, no relies en aliases; prefiera funciones o comandos explícitos.
- Evita ejecutar `source ~/.bashrc` desde scripts root o entornos no interactivos: puede producir efectos secundarios.

## Referencias

### Libros (títulos)

- "Learning the bash Shell" — Cameron Newham
- "The Linux Command Line" — William E. Shotts, Jr.

### Documentación oficial (vínculos)

- Bash manual — prompt and aliases: https://www.gnu.org/software/bash/manual/html_node/Prompting.html and https://www.gnu.org/software/bash/manual/html_node/Aliases.html
- bash invocation and startup files: https://www.gnu.org/software/bash/manual/html_node/Bash-Startup-Files.html
- Zsh documentation (prompt, startup): https://zsh.sourceforge.io/Doc/ and https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html
- Readline and readline init: https://tiswww.case.edu/php/chet/readline/readline.html (official GNU Readline docs)

