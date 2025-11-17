
# 01 - Linux: Arranque y servicios

## Tabla de contenido

- [Introducción](#introducción)
- [Flujo de arranque](#flujo-de-arranque)
- [Carga del kernel](#carga-del-kernel)
- [Gestores de servicios (systemd conceptualmente)](#gestores-de-servicios-systemd-conceptualmente)
- [Referencias](#referencias)

## Introducción

Este documento describe el proceso de arranque de un sistema Linux: desde el firmware hasta el init system, pasando por el cargador de arranque y el kernel. Explica también, de forma conceptual, cómo funcionan los gestores de servicios (con énfasis en systemd) y cómo controlan el arranque y la ejecución de servicios.

## Flujo de arranque

Etapas principales del arranque en sistemas modernos (BIOS/UEFI):

- Firmware (BIOS o UEFI): ejecuta POST y configura hardware básico; en UEFI, puede iniciar un gestor de arranque EFI (p. ej. `systemd-boot` o GRUB EFI).
- Bootloader (GRUB, systemd-boot, etc.): permite seleccionar kernel y argumentos, carga el kernel y el initramfs en memoria y transfiere la ejecución al kernel.
- Initramfs / Initrd: pequeña imagen de espacio usuario (initramfs) que se monta temporalmente para cargar módulos y preparar el entorno (montar root, probar y cifrar discos, etc.). Herramientas como `dracut` o `initramfs-tools` generan estas imágenes.
- Kernel y init: el kernel descomprime y monta initramfs; a continuación ejecuta el primer proceso de espacio de usuario (`/sbin/init` o `systemd`) que continúa el proceso de arranque.
- System init: el init system (systemd, SysV init, OpenRC) arranca los servicios y objetivos (targets/runlevels) y pone el sistema en el estado de usuario final.

Puntos a recordar:

- UEFI vs BIOS afecta a donde se instala el bootloader y cómo se arranca.
- Initramfs permite que el kernel arranque sistemas con módulos y configuraciones complejas (RAID, LUKS, LVM) antes de montar la raíz real.

## Carga del kernel

Conceptos y pasos:

- Elección y passthrough de kernel: el bootloader carga la imagen del kernel (vmlinuz) y el initramfs.
- Argumentos del kernel: se pasan al kernel por el bootloader para controlar opciones (por ejemplo `root=`, `ro`, `init=/bin/bash` para modo recovery).
- Módulos y drivers: initramfs o el kernel cargan los controladores necesarios para acceder a dispositivos de almacenamiento, tarjeta de red, etc. El kernel puede cargar módulos automáticamente, o se puede usar `modprobe` desde initramfs.
- Arranque de usuarios: después de que el kernel inicializa hardware y subsistemas, ejecuta el proceso de userspace inicial (PID 1). En la mayoría de distros modernas PID 1 es `systemd`.

Kernel updates y versiones:

- El administrador gestiona múltiples kernels (conserva versiones antiguas para recuperación). Las entradas de bootloader (p. ej., GRUB) permiten elegir kernel al arrancar.

## Gestores de servicios (systemd conceptualmente)

Conceptualmente, un gestor de servicios se encarga de iniciar, supervisar y parar servicios del sistema. systemd hoy en día es el gestor de servicios más extendido en distribuciones modernas.

Conceptos clave de systemd (visión general):

- Units: systemd organiza servicios en unidades (`.service`, `.socket`, `.target`, `.mount`, `.timer`, etc.). Cada unidad declara dependencias y comportamiento de arranque.
- Targets: equivalentes conceptuales a runlevels; agrupan unidades para representar estados del sistema (por ejemplo `multi-user.target`, `graphical.target`).
- Dependency and ordering: systemd usa dependencias declaradas y paraleliza el arranque cuando es seguro hacerlo.
- Socket activation: systemd puede abrir sockets en PID 1 y activar un servicio únicamente cuando llega tráfico a ese socket (ahorra recursos y acelera arranque).
- cgroups: systemd utiliza grupos de control para aislar y contabilizar recursos por unidad.
- Journal: systemd-journald centraliza logs, lo que facilita depuración del arranque y servicios.

Gestión de servicios:

- Comandos: `systemctl start/stop/restart/enable/disable` y `systemctl status` para controlar y consultar unidades.
- Recovery: `systemd` permite targets de recuperación y `systemctl rescue` o `emergency` en situaciones críticas.

Alternativas y compatibilidad:

- SysV init: scripts tradicionales en `/etc/init.d` llamados por runlevels. Aun existe compatibilidad para usar esos scripts desde systemd.
- OpenRC/Upstart: alternativas que algunas distribuciones usan o soportaron históricamente.

Por qué systemd:

- systemd unifica muchas tareas (arranque, logging, gestión de sesiones, montajes, timers), lo que permite cooperación entre componentes y arranque más rápido en muchos casos.

## Referencias

### Libros (títulos)

- "How Linux Works" — Brian Ward
- "Linux Kernel Development" — Robert Love
- "UNIX and Linux System Administration Handbook" — Evi Nemeth, et al.

### Documentación oficial (vínculos)

- GNU GRUB: https://www.gnu.org/software/grub/
- Kernel: Booting the Kernel and initramfs: https://www.kernel.org/doc/html/latest/admin-guide/boot.html and https://www.kernel.org/doc/html/latest/admin-guide/initrd.html
- systemd: https://www.freedesktop.org/software/systemd/man/ (man pages and conceptual docs)
- dracut (initramfs tool): https://www.dracut.dev/
- UEFI specification (firmware): https://uefi.org/

