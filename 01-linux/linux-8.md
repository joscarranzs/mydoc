
# 01 - Linux: Gestión de paquetes

## Tabla de contenido

- [Introducción](#introducción)
- [Qué es un gestor de paquetes](#qué-es-un-gestor-de-paquetes)
- [Repositorios](#repositorios)
- [Tipos: DEB, RPM, Pacman](#tipos-deb-rpm-pacman)
- [Resolución de dependencias](#resolución-de-dependencias)
- [Referencias](#referencias)

## Introducción

Este documento explica los principios de la gestión de paquetes en sistemas Linux: qué hace un gestor de paquetes, cómo funcionan los repositorios, los formatos principales (.deb, .rpm, pacman) y cómo resuelven dependencias automáticamente.

## Qué es un gestor de paquetes

Un gestor de paquetes automatiza la instalación, actualización y eliminación de software en el sistema. Sus responsabilidades incluyen:

- Descargar paquetes desde repositorios y verificar su firma.
- Resolver y aplicar dependencias necesarias.
- Mantener una base de datos local del software instalado.
- Administrar scripts de instalación y configuración (pre/post install).
- Deshacer/actualizar transacciones cuando es posible y ofrecer herramientas de diagnóstico.

Los gestores operan sobre formatos binarios empaquetados (por ejemplo .deb, .rpm) o sobre repositorios que contienen metadatos con dependencias, versiones y firmas.

## Repositorios

Un repositorio es una colección organizada de paquetes junto con metadatos (versiones, dependencias, checksums, firmas). Algunos puntos relevantes:

- Tipos de repositorios: oficiales mantenidos por la distribución (stable, testing), repositorios comunitarios (AUR en Arch), repositorios de terceros y PPAs (en Ubuntu). Los repos oficiales suelen estar firmados y mantenidos por la distribución.
- Firmas y seguridad: los gestores validan firmas GPG para garantizar integridad y autenticidad del paquete.
- Metadatos: incluyen información de dependencias (Requires, Provides, Conflicts), versiones y prioridades; permiten que el gestor resuelva transacciones.
- Mirrors: repositorios replicados para balanceo y disponibilidad.

## Tipos: DEB, RPM, Pacman

- DEB (.deb): formato usado por Debian y derivados (Ubuntu, Mint). Herramientas: `dpkg` para operaciones a bajo nivel y `apt`/`apt-get`/`aptitude` para la gestión de repositorios, resolución y funciones de alto nivel.
- RPM (.rpm): formato usado por Red Hat, Fedora, CentOS y derivados. Herramientas: `rpm` para manejo bajo nivel y `dnf` (sucesor de yum) para gestión de repositorios y dependencias.
- Pacman (Arch Linux): gestor binario de Arch Linux que combina empaquetado y gestión de repositorios en una sola herramienta (`pacman`). Arch usa un modelo rolling-release y repos comunitarios (AUR) para paquetes adicionales.

Cada formato provee mecanismos para scripts de instalación, verificación de integridad y metadatos que describen dependencias.

## Resolución de dependencias

La resolución de dependencias es el proceso por el cual el gestor calcula qué paquetes adicionales hay que instalar, actualizar o eliminar para que una operación se complete con coherencia.

Aspectos clave:

- Dependencias explícitas vs virtuales: paquetes requieren versiones específicas o "provides" virtuales (por ejemplo `libssl` vs `libssl1.1`).
- Conflictos y alternativas: los paquetes pueden declarar conflictos (`Conflicts`) o alternativas (`Provides`), y el gestor debe elegir o rechazar acciones según las reglas.
- Backtracking y politicas de resolución: los gestores usan algoritmos (a veces con backtracking) para encontrar una combinación válida; `apt` y `dnf` manejan muchas situaciones automáticamente.
- Transacciones y revert: gestores como `dnf` y `apt` aplican cambios en transacciones para reducir el riesgo de dejar el sistema inconsistente.
- Dependencias opcionales/sugeridas: algunos paquetes declaran recomendaciones o sugerencias que no son necesarias pero pueden instalarse opcionalmente.

Buenas prácticas:

- Usar repositorios oficiales siempre que sea posible.
- Revisar cambios propuestos por el gestor antes de confirmar actualizaciones mayores.
- Mantener copias de seguridad y conocer cómo arrancar en modo de recuperación si una actualización crítica falla.

## Referencias

### Libros (títulos)

- "Pro Linux System Administration" — James Turnbull, Peter Lieverdink
- "The Debian Administrator's Handbook" — Raphaël Hertzog, Roland Mas
- "Mastering Red Hat Enterprise Linux" — (varios autores), títulos prácticos sobre gestión y paquetes RPM

### Documentación oficial (vínculos)

- Debian APT: https://wiki.debian.org/Apt
- dpkg: https://man7.org/linux/man-pages/man1/dpkg.1.html
- Ubuntu Repositories and PPAs: https://help.ubuntu.com/community/Repositories/Personal
- RPM (project): https://rpm.org/
- DNF (Fedora/RHEL): https://docs.fedoraproject.org/en-US/quick-docs/dnf/
- Pacman (Arch Linux): https://wiki.archlinux.org/title/Pacman
- AUR (Arch User Repository): https://aur.archlinux.org/ (comunidad - revisar políticas oficiales)

