
# 01 - Linux: Conceptos clave

## Tabla de contenido

- [Introducción](#introducción)
- [Qué es un kernel](#qué-es-un-kernel)
- [Diferencias entre kernel, shell y entorno gráfico](#diferencias-entre-kernel-shell-y-entorno-gráfico)
- [Distribuciones y sus propósitos](#distribuciones-y-sus-propósitos)
- [Referencias](#referencias)

## Introducción

Este documento recoge los fundamentos esenciales sobre Linux que conviene dominar como base para profundizar o usar sistemas GNU/Linux de forma consciente. Está pensado como referencia rápida: definiciones precisas, distinciones claras entre capas del sistema y una visión sobre por qué existen distintas distribuciones y para qué se usan.

## Qué es un kernel

El kernel (núcleo) es la parte central de un sistema operativo; gestiona recursos de hardware (CPU, memoria, dispositivos) y ofrece abstracciones y servicios a procesos de usuario. En Linux, cuando decimos "kernel" nos referimos al software desarrollado en el proyecto Linux (mantenido por Linus Torvalds y la comunidad) que proporciona:

- Gestión de procesos: creación, planificación (scheduling), señales y contexto de ejecución.
- Gestión de memoria: asignación, paginación, protección y mapeo de memoria.
- Controladores de dispositivos: código que controla hardware (discos, red, gráficos, etc.).
- Sistema de archivos: soporte y acceso a sistemas de archivos (ext4, XFS, btrfs, etc.).

El kernel no es una interfaz de usuario ni herramientas de usuario; es la capa que permite que programas y servicios interactúen con el hardware.

## Diferencias entre kernel, shell y entorno gráfico

- Kernel: como ya se explicó, el núcleo del sistema. Trabaja en modo privilegiado (kernel mode) y expone servicios al resto del sistema.

- Shell: es un intérprete de comandos (por ejemplo bash, zsh), ejecutado en espacio de usuario (user space). Permite a un usuario interactuar con el sistema, ejecutar programas y encadenar comandos. La shell está por encima del kernel: usa llamadas al sistema (syscalls) para solicitar servicios.

- Entorno gráfico (entorno de escritorio): conjunto de software que proporciona una interfaz de usuario visual (ventanas, menús, compositing). Incluye un servidor gráfico (Xorg o Wayland), un gestor de ventanas, bibliotecas, y aplicaciones (GNOME, KDE, etc.). El entorno gráfico se ejecuta en espacio de usuario y, como la shell, usa el kernel para acceder al hardware gráfico, el ratón, y la pantalla.

Resumen: kernel = núcleo y proveedor de servicios; shell = interfaz de línea de comandos; entorno gráfico = interfaz visual y conjunto de aplicaciones. Las tres capas son necesarias para distintas formas de uso: administración en consola, scripting, y experiencia de usuario en GUI.

## Distribuciones y sus propósitos

Una distribución (distro) de Linux combina un kernel Linux con herramientas, bibliotecas, instaladores y objetivos de uso. Las diferencias entre distribuciones pueden incluir gestión de paquetes, filosofía de actualización, selección de paquetes por defecto y objetivos empresariales o de usuario.

Tipos y propósitos frecuentes:

- Uso general / escritorios: distribuciones orientadas al usuario final, con entornos de escritorio y facilidades de instalación (ej.: Ubuntu, Fedora Workstation).
- Servidores y estabilidad: distribuciones que priorizan estabilidad y soporte a largo plazo (ej.: Debian Stable, CentOS/Red Hat Enterprise Linux).
- Rolling-release y control: distribuciones que actualizan paquetes con frecuencia para acceso a software más reciente (ej.: Arch Linux).
- Seguridad y anonimato: distros especializadas en auditoría, pentest o anonimato (ej.: Kali Linux, Tails).
- Educativas y ligeras: distribuciones pequeñas o diseñadas para dispositivos específicos o bajos recursos.

La elección de una distribución depende del caso de uso (servidor, desktop, embebido), la necesidad de soporte comercial, la preferencia por paquetes actualizados o estables, y la compatibilidad con hardware o software requeridos.

## Referencias

### Libros (títulos)

- "The Linux Kernel Development" — Robert Love
- "Understanding the Linux Kernel" — Daniel P. Bovet, Marco Cesati
- "Linux Device Drivers" — Jonathan Corbet, Alessandro Rubini, Greg Kroah-Hartman
- "The Linux Command Line" — William E. Shotts, Jr.
- "UNIX and Linux System Administration Handbook" — Evi Nemeth, et al.

### Documentación oficial (vínculos)

- Linux Kernel: https://www.kernel.org/
- GNU Project (utilidades y documentación): https://www.gnu.org/
- Debian: https://www.debian.org/doc/
- Ubuntu: https://help.ubuntu.com/
- Arch Linux (documentación oficial / wiki): https://wiki.archlinux.org/
- Fedora: https://docs.fedoraproject.org/
- Red Hat Enterprise Linux: https://access.redhat.com/documentation/
- freedesktop.org (especificaciones para entornos gráficos): https://www.freedesktop.org/

