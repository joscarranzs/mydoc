
# 01 - Linux: Gestión de procesos

## Tabla de contenido

- [Introducción](#introducción)
- [Qué es un proceso y un servicio](#qué-es-un-proceso-y-un-servicio)
- [Estados de un proceso](#estados-de-un-proceso)
- [Señales y prioridades](#señales-y-prioridades)
- [Referencias](#referencias)

## Introducción

Esta referencia cubre los conceptos fundamentales sobre procesos y servicios en Linux: qué constituye un proceso frente a un servicio, los estados en los que puede encontrarse un proceso, y cómo funcionan las señales y prioridades para control y planificación.

## Qué es un proceso y un servicio

- Proceso: es una instancia en ejecución de un programa —programa+contexto de ejecución— que incluye espacio de direcciones, estado de pila, registros y descriptor de archivos. En Linux un proceso puede contener uno o varios hilos (threads) que comparten ciertas estructuras (memoria, archivos).
- Servicio (daemon): proceso diseñado para ejecutarse en segundo plano y ofrecer una funcionalidad persistente (por ejemplo servidor web, base de datos). Los servicios normalmente se lanzan al arranque y son gestionados por el init system (p. ej. systemd).

Operaciones comunes:

- Creación de procesos: mediante llamadas al sistema como fork() (clona el proceso) y execve() (reemplaza el espacio de usuario con un nuevo programa).
- Demonización: práctica para destacar procesos como servicios (desacoplar de terminal, manejar umask, redirigir descriptores de archivos).

## Estados de un proceso

Los procesos pueden encontrarse en distintos estados que describen su situación respecto a la CPU, I/O y gestión del sistema. Los nombres concretos varían, pero entre los estados importantes están:

- Runnable / Running (ejecución): proceso actualmente en ejecución en CPU o listo para ejecutarse (está en la runqueue).
- Interruptible sleep (espera interrumpible): proceso espera un evento (I/O, señal) y puede ser despertado por señales o eventos.
- Uninterruptible sleep (espera no interrumpible): espera de operaciones que no deben interrumpirse (por ejemplo I/O en disco); no responde a señales hasta que termina.
- Stopped (detenido): proceso detenido por una señal (SIGSTOP) o por depuración (ptrace).
- Zombie (defunct): proceso que terminó pero cuyo estado no ha sido recogido por su padre (exit status pendiente); ocupa entrada en la tabla de procesos pero no más recursos.

En la práctica el kernel agrupa estos estados con nombres técnicos (TASK_RUNNING, TASK_INTERRUPTIBLE, TASK_UNINTERRUPTIBLE, TASK_STOPPED, TASK_TRACED, EXIT_ZOMBIE, etc.). Entenderlos ayuda a interpretar `top`, `ps` o mensajes del sistema.

## Señales y prioridades

Señales:

- Las señales son un mecanismo de notificación asíncrona que el kernel o otros procesos usan para comunicar eventos (por ejemplo SIGINT, SIGTERM, SIGKILL, SIGCHLD). Se manejan en espacio de usuario mediante manejadores de señal o con acciones por defecto.
- Señales comunes:
	- SIGTERM: petición de terminación (amable) para permitir limpieza.
	- SIGKILL: terminación forzosa, no puede ser ignorada.
	- SIGINT: interrupción desde terminal (Ctrl+C).
	- SIGCHLD: notifier para procesos que han cambiado de estado (ej.: hijo finalizado).
- En general, un proceso puede bloquear o manejar señales mediante sigaction(); algunas señales no pueden ignorarse (SIGKILL, SIGSTOP).

Prioridades y planificación:

- Prioridad por defecto (nice / renice): el `nice` value (rango -20 a +19) simplifica la prioridad relativa; valores más bajos indican mayor prioridad.
- Políticas de planificación: existen políticas de tiempo compartido (SCHED_OTHER) y políticas en tiempo real (SCHED_FIFO, SCHED_RR). Las políticas en tiempo real requieren privilegios y entregan diferentes garantías de ejecución.
- El kernel mantiene runqueues y un algoritmo de scheduling que decide qué proceso recibe la CPU siguiente; detalles concretos dependen del scheduler (CFS - Completely Fair Scheduler para SCHED_OTHER en Linux) y del uso de prioridades en entornos en tiempo real.

Herramientas comunes:

- ps, top, htop: examinar estado y consumo de procesos.
- kill, pkill: enviar señales a procesos por PID o nombre.
- nice/renice: ajustar prioridad nice de procesos.
- chrt: manipular políticas en tiempo real.

## Referencias

### Libros (títulos)

- "The Linux Programming Interface" — Michael Kerrisk
- "Advanced Programming in the UNIX Environment" — W. Richard Stevens
- "Linux Kernel Development" — Robert Love
- "UNIX and Linux System Administration Handbook" — Evi Nemeth, et al.

### Documentación oficial (vínculos)

- POSIX (procesos y señales): https://pubs.opengroup.org/onlinepubs/9699919799/
- Linux manpages (signals): https://man7.org/linux/man-pages/man7/signal.7.html
- Linux manpages (scheduling): https://man7.org/linux/man-pages/man7/sched.7.html
- Fork and exec manpages: https://man7.org/linux/man-pages/man2/fork.2.html and https://man7.org/linux/man-pages/man2/execve.2.html
- Kernel documentation (processes and states): https://www.kernel.org/doc/html/latest/process/index.html
- CFS scheduler (Kernel docs): https://www.kernel.org/doc/html/latest/scheduler/index.html
- systemd service documentation: https://www.freedesktop.org/software/systemd/man/systemd.service.html

