# 02 - Terminal: Variables y entorno

## Tabla de contenido

- [Introducción](#introducción)
- [Variables locales y de entorno](#variables-locales-y-de-entorno)
- [PATH y su importancia](#path-y-su-importancia)
- [Exportación y persistencia](#exportación-y-persistencia)
- [Referencias](#referencias)

## Introducción

Las variables de entorno son pares nombre=valor que influyen en el comportamiento de procesos y programas. En shells Unix/Linux existen variables locales (solo en la shell) y variables exportadas que se heredan a procesos hijos. Aquí verás cómo funcionan, por qué `PATH` es importante y cómo hacer cambios persistentes.

## Variables locales y de entorno

- Variable local: definida en la shell, no se transmite automáticamente a procesos hijos. Ejemplo: `X=1`.
- Variable de entorno (exportada): disponible para procesos hijos. Se crea con `export X=1` o se exporta después: `X=1; export X`.

Comprobación y herramientas:

- `env` o `printenv` muestra variables exportadas del entorno del proceso.
- `set` muestra variables y funciones de la shell (incluye locales).
- `declare -x` (bash/zsh) muestra variables exportadas.

Expansión y sustitución:

- Referencia: `$VAR` o `${VAR}`.
- Valores por defecto y formas: `${VAR:-default}` (usar default si VAR no definido) o `${VAR:=default}` (asignar si no existe).

Ejemplo práctico:

- `FOO=bar` — variable local.
- `export FOO` — ahora `FOO` está en el entorno y disponible para `env`.

## PATH y su importancia

`PATH` es la variable de entorno que contiene una lista de directorios separados por `:` que el sistema recorre para localizar comandos ejecutables cuando no se usan rutas absolutas o relativas.

Puntos clave:

- Orden: el orden en `PATH` determina qué ejecutable se usa si hay duplicados; colocar `~/bin` al principio dará prioridad a sus scripts.
- Formato: `PATH=/usr/local/bin:/usr/bin:/bin:$HOME/bin`
- Seguridad: no incluyas `.` (directorio actual) en `PATH`, o colócalo al final; tener `.` al principio permite ejecutar binarios maliciosos localmente.
- Duplicados: puedes tener rutas repetidas; conviene limpiar PATH en scripts si se modifica mucho.

Comandos útiles:

- `echo $PATH` — mostrar PATH.
- `which comando` y `command -v comando` — mostrar ruta del ejecutable que se usaría.

Ejemplo práctico — añadir `~/bin` al principio:

- `export PATH="$HOME/bin:$PATH"`

## Exportación y persistencia

Crear variables en una sesión es temporal. Para mantenerlas entre sesiones o para todos los usuarios, hay varias opciones:

- Per il usuario (interactive login shells): añadir a `~/.profile`, `~/.bash_profile` o `~/.bash_login`.
- Per il usuario (interactive non-login shells): añadir a `~/.bashrc` y, opcionalmente, source `~/.bashrc` desde `~/.bash_profile`.
- System-wide: `/etc/profile`, `/etc/profile.d/*.sh` para variables de entorno globales.
- PAM and desktop sessions: `/etc/environment` (no ejecuta comandos ni expande `~`, pero es usado por PAM para entornos de login gráfico) — útil para variables simples.
- systemd services: `Environment=` en unidades de servicio o usar `EnvironmentFile=` para persistencia en servicios systemd.

Ejemplos de persistencia:

- Añadir PATH en `~/.profile`:
	- `echo "export PATH=\"$HOME/bin:$PATH\"" >> ~/.profile`
- Configurar una variable global en `/etc/profile.d/myenv.sh`:
	- Crear `/etc/profile.d/myenv.sh` con `export MYVAR=valor` (necesitas privilegios).

Consideraciones:

- Evita sobrescribir PATH accidentalmente en scripts de inicio; usa `PATH="$HOME/bin:$PATH"` en vez de `PATH="$HOME/bin"`.
- En scripts de sistema preferir `/etc/profile.d` o `EnvironmentFile` para mantener gestión centralizada.

## Referencias

### Libros (títulos)

- "The Linux Command Line" — William E. Shotts, Jr.
- "Learning the bash Shell" — Cameron Newham

### Documentación oficial (vínculos)

- Environment variables (man7): https://man7.org/linux/man-pages/man7/environ.7.html
- bash reference — environment variables and export: https://www.gnu.org/software/bash/manual/html_node/Environment.html
- execvp (path search semantics): https://man7.org/linux/man-pages/man3/execvp.3.html
- env and printenv manpages: https://man7.org/linux/man-pages/man1/env.1.html and https://man7.org/linux/man-pages/man1/printenv.1.html
- systemd environment: https://www.freedesktop.org/software/systemd/man/systemd.exec.html

