
# 01 - Linux: Usuarios y permisos

## Tabla de contenido

- [Introducción](#introducción)
- [Tipos de usuarios](#tipos-de-usuarios)
- [Modelo de permisos](#modelo-de-permisos)
- [Grupos y roles comunes](#grupos-y-roles-comunes)
- [Referencias](#referencias)

## Introducción

Este documento resume los conceptos básicos sobre usuarios, permisos y grupos en Linux. Su objetivo es servir de referencia rápida para entender los tipos de usuarios, el modelo de permisos del sistema y los grupos/roles más habituales que encontrarás al administrar un sistema GNU/Linux.

## Tipos de usuarios

- Usuario root (superusuario): tiene privilegios completos sobre el sistema; puede realizar cualquier operación administrativa.
- Usuarios humanos (cuentas personales): creadas para personas; típicamente tienen un directorio home (`/home/usuario`) y permisos limitados.
- Cuentas de sistema / de servicio: creadas para ejecutar servicios y demonios (ej.: `www-data`, `mysql`, `postgres`). Suelen no tener acceso para iniciar sesión y tienen permisos mínimos requeridos para su servicio.
- Usuarios bloqueados o con shell nologin: cuentas que existen solo para propósitos administrativos o de servicio y que no permiten acceso interactivo (shell `/bin/false` o `/sbin/nologin`).

La separación entre usuarios ayuda a aplicar el principio de privilegios mínimos y a auditar actividades.

## Modelo de permisos

Linux utiliza un modelo clásico combinando permisos POSIX básicos y mecanismos extendidos (ACLs, SELinux/AppArmor) para controlar el acceso a recursos.

- Permisos POSIX (rwx): cada archivo y directorio tiene permisos para propietario (user), grupo (group) y otros (others). Los bits son `r` (read), `w` (write), `x` (execute). Por ejemplo, `chmod 755 archivo` establece permisos de lectura/ejecución para todos y escritura sólo para el propietario.
- Propietario y grupo: `chown usuario:grupo archivo` cambia el propietario y grupo del archivo. Los grupos facilitan compartir recursos entre un conjunto limitado de usuarios.
- Bit setuid / setgid / sticky:
	- setuid (`s` en permisos) ejecuta programa con los privilegios del propietario; suele usarse en binarios que necesitan privilegios temporales.
	- setgid en directorios asegura que ficheros creados heredarán el grupo del directorio.
	- sticky bit en directorios (por ejemplo `/tmp`) evita que usuarios borren archivos que no poseen.
- ACLs (Access Control Lists): extensión que permite reglas más finas por usuario y grupo. Herramientas: `getfacl`, `setfacl`.
- Controles obligatorios (MAC): sistemas como SELinux o AppArmor aplican políticas adicionales que restringen acciones más allá de los permisos tradicionales.

Comprender este modelo es vital para configurar servidores seguros y gestionar el acceso a datos críticos.

## Grupos y roles comunes

- `root`: cuenta y a menudo grupo con control total del sistema.
- `wheel` o `sudo` (según distro): grupo cuyas cuentas pueden ejecutar comandos privilegiados usando `sudo` o tienen privilegios adicionales; `sudo` se configura en `/etc/sudoers`.
- `adm` y `syslog`: en algunas distros, `adm` permite leer logs; `syslog` es usado por sistemas de logging.
- `www-data`, `http`, `apache`: cuentas/grupos para servidores web (Nginx/Apache), que limitan acceso a los recursos web.
- `mysql`, `postgres`, `mongodb`: cuentas de servicio para bases de datos; ejecutadas con privilegios mínimos necesarios.
- `nogroup`/`nobody`: cuentas con mínimos privilegios, usadas para servicios que deben ser lo más restringidos posible.

Buenas prácticas:

- Usar grupos para compartir accesos entre usuarios en lugar de abrir permisos a "otros".
- Evitar ejecutar servicios como `root` cuando no es necesario; preferir cuentas de servicio dedicadas.
- Revisión periódica de miembros del grupo `sudo` o `wheel` para controlar acceso administrativo.

## Referencias

### Libros (títulos)

- "UNIX and Linux System Administration Handbook" — Evi Nemeth, et al.
- "How Linux Works" — Brian Ward
- "The Linux Programming Interface" — Michael Kerrisk

### Documentación oficial (vínculos)

- passwd, group: https://man7.org/linux/man-pages/man5/passwd.5.html and https://man7.org/linux/man-pages/man5/group.5.html
- chmod, chown, umask: https://man7.org/linux/man-pages/man1/chmod.1.html and https://man7.org/linux/man-pages/man1/chown.1.html
- sudo: https://www.sudo.ws/man/1.8.27/sudo.man.html (documentación oficial de sudo)
- ACLs: https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/filesystems/acl.txt and https://man7.org/linux/man-pages/man1/getfacl.1.html
- SELinux (proyecto y documentación): https://selinuxproject.org/page/Main_Page and https://www.kernel.org/doc/html/latest/security/selinux/index.html
- AppArmor: https://gitlab.com/apparmor/apparmor/-/wikis/Home

