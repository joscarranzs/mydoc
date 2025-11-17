
# 01 - Linux: Arquitectura del sistema

## Tabla de contenido

- [Introducción](#introducción)
- [Espacio de usuario vs. espacio de kernel](#espacio-de-usuario-vs-espacio-de-kernel)
- [Cómo se organizan los servicios](#cómo-se-organizan-los-servicios)
- [Módulos del kernel](#módulos-del-kernel)
- [Referencias](#referencias)

## Introducción

Este documento explica la arquitectura básica de un sistema Linux y las capas principales que lo componen. Está diseñado como referencia concisa para entender cómo interactúan el kernel, los procesos y los servicios, y cómo se manejan los módulos del kernel.

## Espacio de usuario vs. espacio de kernel

Linux separa la ejecución en dos dominios de privilegios:

- Espacio de kernel (kernel space): donde ejecuta el núcleo del sistema operativo. El código en este espacio tiene acceso completo al hardware y memoria del sistema. Operaciones críticas, controladores de dispositivo y gestión de memoria se ejecutan aquí.
- Espacio de usuario (user space): donde se ejecutan las aplicaciones y herramientas de usuario (shells, servicios, navegadores). Los procesos en espacio de usuario no pueden acceder directamente al hardware ni a la memoria de otros procesos; deben usar llamadas al sistema (syscalls) para solicitar servicios al kernel.

Aspectos clave:

- Protección y seguridad: el aislamiento previene que fallos de aplicaciones afecten el núcleo o a otros procesos.
- Llamadas al sistema: interfaz controlada para que el espacio de usuario solicite servicios (abrir archivos, crear procesos, redes).
- Transferencia de contexto: cuando se hace una syscall o una interrupción, el CPU cambia desde modo usuario a modo kernel (user -> kernel) y regresa después de atender la petición.
- Señales y eventos: mecanismos para notificar eventos a procesos (señales POSIX); el kernel gestiona e intermedia estas notificaciones.

Ver documentación oficial para detalles sobre procesos y llamadas al sistema.

## Cómo se organizan los servicios

Los servicios (daemons) son procesos en espacio de usuario que proporcionan funcionalidades a largo plazo (ej.: servidor web, gestor de impresión, bases de datos). La organización de servicios depende del sistema de inicio (init system) que gestione el arranque y el ciclo de vida de estos procesos.

Principales modelos y conceptos:

- SysV init (scripts de inicio): organización tradicional basada en scripts en /etc/init.d y niveles de ejecución (runlevels).
- systemd (modelo moderno): usa unidades (units) descriptivas (.service, .socket, .timer) y maneja dependencias, paralelismo en arranque y objetivos (targets) en lugar de runlevels. systemd es el init más extendido actualmente.
- Otros sistemas: Upstart u OpenRC (algunas distros aún lo usan o lo ofrecen como alternativa).

Gestión de servicios:

- Arranque: el init system inicia los servicios según la configuración y las dependencias.
- Supervisión: systemd puede reiniciar servicios en fallo, gestionar sockets y timers.
- Control: herramientas como systemctl permiten iniciar, detener, habilitar (arranque automático) y consultar el estado de servicios.

La elección de un init system afecta cómo se empaquetan, despliegan y gestionan los servicios.

## Módulos del kernel

Los módulos del kernel (kernel modules) son fragmentos de código binario que pueden cargarse y descargarse dinámicamente en un kernel en ejecución sin necesidad de recompilar o reiniciar el sistema. Permiten añadir controladores o funcionalidades bajo demanda.

Conceptos importantes:

- Paquetes: un módulo implementa funciones del kernel, típicamente controladores de dispositivo o subsistemas opcionales.
- Carga/descarga: herramientas como insmod, modprobe y rmmod (y la configuración del sistema) sirven para cargar o descargar módulos. `modprobe` gestiona dependencias entre módulos.
- Interfaz: los módulos usan macros y APIs del kernel para registrarse (ej.: module_init, module_exit) y exportar símbolos a otros módulos.
- Persistencia: los módulos se pueden configurar para cargarse automáticamente al detectar hardware (udev) o al arrancar mediante archivos en /etc/modules-load.d/.
- Seguridad y estabilidad: los módulos contienen código en espacio de kernel, por lo que un fallo en un módulo puede afectar a todo el sistema; por ello, su desarrollo y firma (en sistemas con Secure Boot) se manejan con cuidado.

Herramientas y prácticas:

- Ver módulos cargados: lsmod
- Cargar módulo manualmente: modprobe nombre_modulo
- Consultar dependencias y los parámetros: modinfo nombre_modulo

Para crear e integrar módulos correctamente se usan los mecanismos de construcción del kernel y la documentación oficial del proyecto Linux.

## Referencias

### Libros (títulos)

- "Linux Kernel Development" — Robert Love
- "Understanding the Linux Kernel" — Daniel P. Bovet, Marco Cesati
- "Linux Device Drivers" — Jonathan Corbet, Alessandro Rubini, Greg Kroah-Hartman
- "How Linux Works" — Brian Ward
- "Professional Linux Kernel Architecture" — Wolfgang Mauerer

### Documentación oficial (vínculos)

- Linux Kernel (documentación principal): https://www.kernel.org/doc/html/latest/
- Kernel modules (kbuild and modules): https://www.kernel.org/doc/html/latest/kbuild/modules.html
- Systemd (manpages y guía oficial): https://www.freedesktop.org/software/systemd/man/
- GNU C Library (interfacing and system calls): https://www.gnu.org/software/libc/manual/html_node/Interfacing-with-Kernel.html
- Debian: https://www.debian.org/doc/
- Ubuntu: https://help.ubuntu.com/
