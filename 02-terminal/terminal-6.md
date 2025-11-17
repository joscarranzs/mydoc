
# 02 - Terminal: Gestión de paquetes desde la terminal

## Tabla de contenido

- [Introducción](#introducción)
- [Uso conceptual de apt, dnf, pacman](#uso-conceptual-de-apt-dnf-pacman)
- [Buscar, instalar, actualizar y remover](#buscar-instalar-actualizar-y-remover)
- [Repositorios y llaves](#repositorios-y-llaves)
- [Referencias](#referencias)

## Introducción

Los gestores de paquetes automatizan la instalación, actualización y eliminación de software y resuelven dependencias. Aquí veremos el uso conceptual de los gestores más comunes desde la terminal: `apt` (Debian/Ubuntu), `dnf` (Fedora/Red Hat) y `pacman` (Arch Linux), junto con cómo buscar paquetes, instalarlos, actualizarlos, y agregar repositorios y llaves.

## Uso conceptual de apt, dnf, pacman

- apt: frontend moderno para sistemas Debian/Ubuntu (usa dpkg como motor). Gestiona repositorios APT, descarga paquetes .deb, resuelve dependencias y aplica actualizaciones. `apt` ofrece comandos de alto nivel (instalar, actualizar, buscar) y es amigable para usuarios.
- dnf: gestor para RPM en Fedora y RHEL modernos; remplazó `yum`. Administra paquetes RPM, repositorios YUM/DNF y ofrece resolución de dependencias avanzada y transacciones seguras.
- pacman: gestor de paquetes de Arch Linux; combina instalación, actualización y manejo de repositorios con un enfoque simple y rápido. Arch también usa AUR (usuario-construido) para paquetes no oficiales; AUR no está firmado por la distro.

Conceptos comunes:

- Repositorios: colecciones de paquetes con metadatos y firmas GPG.
- Cache local: los gestores mantienen un índice local (ej. `apt update` refresca índices) para búsquedas y comparaciones.
- Transacciones: la mayoría de los gestores aplican cambios en una transacción para minimizar inconsistencias.

## Buscar, instalar, actualizar y remover

Comandos conceptuales y ejemplos breves:

- Buscar paquetes:
	- apt: `apt search <paquete>` (o `apt-cache search <paquete>`)
	- dnf: `dnf search <paquete>`
	- pacman: `pacman -Ss <paquete>`

- Instalar paquetes:
	- apt: `sudo apt update` (refrescar índices); `sudo apt install <paquete>`
	- dnf: `sudo dnf install <paquete>`
	- pacman: `sudo pacman -Syu` (sincronizar y actualizar) y `sudo pacman -S <paquete>` (instalar)

- Actualizar sistema:
	- apt: `sudo apt update && sudo apt upgrade` (o `sudo apt full-upgrade` para cambios más grandes)
	- dnf: `sudo dnf upgrade` (o `sudo dnf system-upgrade` para versiones mayores)
	- pacman: `sudo pacman -Syu`

- Remover paquetes:
	- apt: `sudo apt remove <paquete>` (o `sudo apt purge <paquete>` para configuración también)
	- dnf: `sudo dnf remove <paquete>`
	- pacman: `sudo pacman -R <paquete>` (usar `-Rs` o `-Rns` para dependencias no usadas y limpieza)

Comandos adicionales útiles:

- Simulación/preview: `apt -s install <paquete>` (simula), `dnf --assumeno install <paquete>` (no ejecutar) o revisar transacción antes de aplicar.
- Información de paquetes: `apt show <paquete>`, `dnf info <paquete>`, `pacman -Qi <paquete>`.

Buenas prácticas:

- Actualizar índices antes de buscar/instalar: `apt update`, `dnf makecache`, `pacman -Sy`.
- Revisar qué paquetes serán afectados antes de confirmar grandes actualizaciones.
- Mantener copias de seguridad en servidores críticos antes de actualizaciones mayores.

## Repositorios y llaves

Agregar repositorios y llaves con seguridad es crucial:

- Repositorios APT (Debian/Ubuntu): se definen en `/etc/apt/sources.list` o en archivos dentro de `/etc/apt/sources.list.d/`. Para añadir repositorios oficiales use `add-apt-repository` (PPA en Ubuntu) o añada un archivo `.list` y la llave GPG.
- Llaves GPG: apt verifica firmas GPG de repositorios y paquetes. Evitar `apt-key` (deprecated); mejor importar llaves a `/etc/apt/trusted.gpg.d/` o usar `signed-by` en la entrada de sources.list.

- Repositorios DNF/YUM: se definen en `/etc/yum.repos.d/`. Importar llave GPG con `rpm --import <keyfile>` o mediante archivos `.repo` con `gpgkey=`.

- Repositorios Pacman (Arch): configurados en `/etc/pacman.conf` y directorios de repos; llaves se gestionan con `pacman-key --init` y `pacman-key --recv-keys <key>` seguido de `pacman-key --lsign-key <key>` para firmar localmente.

Seguridad y recomendaciones:

- Usar solo repositorios oficiales o de confianza. Revise la firma GPG y la procedencia.
- Para repositorios de terceros, lea su documentación para procedimientos de llave y firma.
- Evite mezclar repositorios de distintas distribuciones (p. ej. repos Fedora en CentOS sin verificar compatibilidad).

## Referencias

### Libros (títulos)

- "Pro Linux System Administration" — James Turnbull, Peter Lieverdink
- "The Debian Administrator's Handbook" — Raphaël Hertzog, Roland Mas

### Documentación oficial (vínculos)

- APT (Debian): https://wiki.debian.org/Apt
- apt manpages: https://manpages.debian.org/unstable/apt/apt.8.en.html
- DNF (Fedora): https://docs.fedoraproject.org/en-US/quick-docs/dnf/
- Pacman (Arch): https://wiki.archlinux.org/title/Pacman and https://man.archlinux.org/man/pacman.8
- RPM key management: https://rpm.org/
- Arch Keyring and pacman-key: https://wiki.archlinux.org/title/pacman-key

