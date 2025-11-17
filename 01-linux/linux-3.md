
# 01 - Linux: Sistema de archivos

## Tabla de contenido

- [Introducción](#introducción)
- [Jerarquía estándar](#jerarquía-estándar)
- [Puntos de montaje](#puntos-de-montaje)
- [Tipos de sistemas de archivos](#tipos-de-sistemas-de-archivos)
- [Referencias](#referencias)

## Introducción

En este documento se resumen los conceptos esenciales del sistema de archivos en Linux: la jerarquía estándar (FHS), cómo se usan y administran los puntos de montaje, y los tipos de sistemas de archivos más comunes (ext4, XFS, Btrfs, etc.). Es una guía de referencia para identificar ubicaciones del sistema y saber cuándo elegir un sistema de archivos u otro.

## Jerarquía estándar

La jerarquía de archivos (Filesystem Hierarchy) define las rutas estándar del sistema Linux y su propósito. Conocerla ayuda en administración, empaquetado y despliegue de software. Puntos clave:

- / — raíz del sistema de archivos; todo parte de aquí.
- /bin — comandos esenciales para todos los usuarios (binarios ejecutables).
- /sbin — comandos del superusuario para administración del sistema.
- /usr — (user system resources) programas, bibliotecas y documentación de usuario; suele dividirse en /usr/bin, /usr/lib, /usr/share.
- /var — datos variables: registros (logs), colas de correo, bases de datos de paquetes, cachés.
- /home — directorios personales de los usuarios.
- /tmp — archivos temporales, limpiados con políticas locales.
- /boot — archivos necesarios para el arranque (kernel, initramfs, bootloader).
- /srv — datos de servicios proporcionados por el sistema (web, ftp, etc.).
- /proc y /sys — pseudo-sistemas de archivos virtuales expuestos por el kernel para información y configuración de procesos y dispositivos.
- /dev — dispositivos especiales creados por el kernel/udev.

La especificación oficial (FHS) detalla la convención de uso; muchas distribuciones extienden o adaptan la jerarquía con convenciones locales.

## Puntos de montaje

Un punto de montaje es una entrada en la jerarquía donde se ancla un sistema de archivos distinto (por ejemplo un disco, una partición o un sistema remoto). Conceptos y prácticas:

- Montar y desmontar: `mount <fuente> <punto>` y `umount <punto>`.
- Configuración persistente: `/etc/fstab` contiene sistemas de archivos que se montan automáticamente al arrancar. Modernamente, systemd también gestiona montajes y soporta ficheros `.mount` y opciones avanzadas.
- Dispositivos especiales: `/dev/sda1`, `/dev/nvme0n1p1`, o nombres en `/dev/disk/*` (por UUID o etiquetas) para mayor estabilidad.
- Puntos temporales: `/mnt` y `/media` se usan para montajes temporales y medios extraíbles (USB, CD). `/mnt` suele reservarse para montajes manuales por el administrador, `/media` para montajes automáticos por el entorno de escritorio.
- PseudoFS: `/proc` y `/sys` son montajes virtuales gestionados por el kernel; proporcionan interfaces para controlar y obtener información del sistema.
- Opciones de montaje: `ro` (read-only), `rw` (read-write), `noexec`, `nosuid`, `nodev`, y opciones de rendimiento (barreling, journaling tuning). El administrador debe elegir opciones según seguridad y rendimiento.

Consejos prácticos:

- Usar UUID en `/etc/fstab` evita cambios en nombres de dispositivos al alterar hardware.
- Separar `/home` y `/var` en particiones distintas puede prevenir que el llenado de registros bloquee el arranque o acceso a sesiones.

## Tipos de sistemas de archivos (ext4, xfs, etc.)

Existen muchos sistemas de archivos; la elección depende de uso (servidores, laptops, almacenamiento flash), características (journaling, snapshots, compresión) y soporte de la distribución.

- ext4: sistema de archivos moderno, estable y ampliamente usado en escritorios y servidores; soporta journaling y buenas tasas de rendimiento en uso general.
- XFS: escalable y eficiente para cargas de trabajo con archivos grandes (sistemas de archivos de alto rendimiento, servidores de archivos). Buen rendimiento en I/O concurrente.
- Btrfs: enfoque en características avanzadas (snapshots, subvolúmenes, compresión, checksums). Muy útil para almacenamiento con gestión avanzada, aunque su adopción en producción depende del caso de uso.
- F2FS: optimizado para memorias flash y SSDs; diseñado por Samsung para mejorar vida útil y rendimiento de dispositivos flash.
- VFAT / exFAT / NTFS: sistemas interoperables con Windows; exFAT y NTFS se usan para discos externos. En Linux, el soporte puede depender de controladores de kernel o paquetes externos (por ejemplo ntfs-3g en el pasado; exFAT ahora tiene soporte en kernel moderno).
- Otros: ZFS (no siempre distribuido en el kernel principal por licencias, pero disponible y potente para almacenamiento con snapshots y replicación), ReiserFS y otros menos comunes.

Factores a considerar:

- Rendimiento: tipo de carga (archivos pequeños vs archivos grandes), concurrencia.
- Fiabilidad: journaling, checksums, protección ante corrupción.
- Funcionalidades: snapshots, compresión, deduplicación, cifrado.
- Soporte y compatibilidad: integración con herramientas de la distribución y facilidad para recuperación.

Para elegir: compara objetivos (ej.: servidor de archivos, volumen de bases de datos, laptop con SSD) y consulta la documentación específica del sistema de archivos.

## Referencias

### Libros (títulos)

- "The Linux Programming Interface" — Michael Kerrisk
- "How Linux Works" — Brian Ward
- "UNIX and Linux System Administration Handbook" — Evi Nemeth, et al.
- "Practical Filesystem Guide" — Not an official title but similar; choose reputable sources.

### Documentación oficial (vínculos)

- Filesystem Hierarchy Standard (FHS): https://refspecs.linuxfoundation.org/fhs.shtml
- Kernel: Filesystems Documentation: https://www.kernel.org/doc/html/latest/filesystems/
- Mount and fstab manual pages (man7): https://man7.org/linux/man-pages/man8/mount.8.html and https://man7.org/linux/man-pages/man5/fstab.5.html
- ext4 documentation: https://ext4.wiki.kernel.org
- XFS project: https://xfs.org/index.php/Main_Page
- Btrfs: https://btrfs.wiki.kernel.org/
- F2FS: https://f2fs.wiki.kernel.org/
- Systemd automount/mount units: https://www.freedesktop.org/software/systemd/man/systemd.mount.html

