
# 02 - Terminal: Gestión de procesos desde la terminal

## Tabla de contenido

- [Introducción](#introducción)
- [Lanzar procesos](#lanzar-procesos)
- [Procesos en foreground y background](#procesos-en-foreground-y-background)
- [Señales básicas (stop, kill)](#señales-básicas-stop-kill)
- [Referencias](#referencias)

## Introducción

Este documento explica cómo lanzar y controlar procesos desde la terminal: iniciar procesos, enviarles señales y moverlos entre foreground y background. Incluye los comandos y atajos clave que se usan habitualmente en administración y scripting.

## Lanzar procesos

- Ejecutar un comando: escribe `comando` y pulsa Enter; si es un binario, la shell hará fork/exec.
- Ejecutar con parámetros: `comando -opciones arg1 arg2`.
- Ejecutar en background: añade `&` al final: `comando &` — la shell devuelve el control y muestra el PID.
- Ejecutar en background y desligar: `nohup comando &` evita que el proceso reciba SIGHUP al cerrar la sesión; `disown` (shell builtin) remueve el trabajo de la tabla de jobs.
- Ejecutar en un ámbito controlado: `systemd-run --scope comando` o `setsid comando` para iniciar procesos sin terminal dependiente.

Herramientas para localizar procesos:

- `ps aux` o `ps -ef` muestra procesos activos.
- `pgrep <nombre>`/`pidof <nombre>` para localizar procesos por nombre.

## Procesos en foreground y background

- Foreground: el proceso ocupa la terminal y recibe la entrada estándar; la shell espera a que termine.
- Background: utilizando `&` o `Ctrl-Z` + `bg` el proceso continúa en segundo plano y la shell no espera.
- Job control (bash y otros shells compatibles): `jobs` lista trabajos, `fg %1` trae el trabajo 1 al foreground, `bg %1` lo envía a background.

Atajos útiles:

- Ctrl-C: envía SIGINT al proceso foreground (interrupción).
- Ctrl-Z: envía SIGTSTP para detener temporalmente el proceso; luego `bg` para reanudar en background o `fg` para devolver al foreground.

Uso típico:

- Ejecutar un proceso, detenerlo y enviarlo a background:
	1. Ejecuta `comando`.
	2. Pulsa `Ctrl-Z` para detenerlo (SIGTSTP).
	3. Escribe `bg` para que continue en segundo plano.

## Señales básicas (stop, kill)

Señales relevantes:

- SIGINT (2): interrupción (Ctrl-C en terminal). Suele permitir al proceso limpiar y terminar.
- SIGTERM (15): petición de terminación amable; permite al proceso cerrar de forma ordenada.
- SIGKILL (9): terminación forzosa; no puede ser atrapada ni ignorada; usarlo solo si SIGTERM no funciona.
- SIGSTOP / SIGTSTP: detener proceso (TSTP desde terminal), SIGCONT reanuda.

Enviar señales:

- `kill <PID>` y `kill -TERM <PID>` para enviar SIGTERM por defecto.
- `kill -9 <PID>` para enviar SIGKILL (forzar terminación).
- `pkill nombre` o `killall nombre` para mandar señales a procesos por nombre (usar con cuidado en sistemas con múltiples instancias).

Comprobaciones y estado:

- `jobs -l` muestra PIDs y estados de jobs controlados por la shell.
- `ps aux | grep <nombre>` para confirmar procesos y sus PIDs.
- `top`/`htop` para ver el uso de CPU/memoria y administrar procesos en tiempo real.

Buenas prácticas:

- Usar SIGTERM y dejar tiempo para una terminación ordenada antes de usar SIGKILL.
- Verificar dependencias y estado antes de matar procesos críticos en servidores.
- Emplear `systemctl stop` para servicios gestionados por systemd en lugar de `kill` cuando proceda.

## Referencias

### Libros (títulos)

- "The Linux Command Line" — William E. Shotts, Jr.
- "Advanced Programming in the UNIX Environment" — W. Richard Stevens

### Documentación oficial (vínculos)

- Bash job control and builtin commands (fg/bg/jobs/disown): https://www.gnu.org/software/bash/manual/
- kill and pkill manpages: https://man7.org/linux/man-pages/man1/kill.1.html and https://man7.org/linux/man-pages/man1/pkill.1.html
- Signals: https://man7.org/linux/man-pages/man7/signal.7.html
- nohup: https://man7.org/linux/man-pages/man1/nohup.1.html
- ps: https://man7.org/linux/man-pages/man1/ps.1.html
- top: https://man7.org/linux/man-pages/man1/top.1.html

