
# 02 - Terminal: Permisos y propiedad

## Tabla de contenido

- [Introducción](#introducción)
- [Lectura, escritura, ejecución](#lectura-escritura-ejecución)
- [Cambiar propietarios y permisos](#cambiar-propietarios-y-permisos)
- [Umask (concepto)](#umask-concepto)
- [Referencias](#referencias)

## Introducción

Esta referencia explica cómo funcionan los permisos y la propiedad en sistemas Unix/Linux: los bits de lectura, escritura y ejecución; cómo cambiar propietarios y permisos con `chown`/`chmod`; y qué es `umask` y cómo afecta permisos por defecto.

## Lectura, escritura, ejecución

El modelo POSIX usa tres clases y tres permisos básicos:

- Clases: propietario (user `u`), grupo (group `g`) y otros (others `o`).
- Permisos: `r` read (lectura), `w` write (escritura), `x` execute (ejecución).

Interpretación:

- Archivos: `r` permite leer, `w` modificar y `x` ejecutar un binario o script.
- Directorios: `r` permite listar archivos, `w` crear/eliminar entradas, `x` entrar al directorio y acceder a inodos (necesario para `cd` y buscar archivos).

Formas de expresar permisos:

- Simbólica: `chmod u+r file` añade permiso de lectura al propietario.
- Numérica: 3 dígitos octales, cada uno suma bits: `r=4`, `w=2`, `x=1`. Por ejemplo, `chmod 644 file` resulta en `rw-r--r--`.

Bit especiales:

- setuid (`s` en permisos de usuario): ejecuta program con privilegios del propietario.
- setgid (`s` en permisos de grupo): ejecuta con privilegios del grupo o hace que archivos creados hereden el grupo del directorio.
- sticky (`t` en otros): en directorios evita que usuarios eliminen archivos que no posean (usado en `/tmp`).

## Cambiar propietarios y permisos

Comandos básicos:

- `chmod` cambia permisos (simbólico o numérico). Ejemplo: `chmod 755 /usr/local/bin/script`.
- `chown` cambia propietario y grupo: `chown user:group file` (permite `chown user file` o `chown :group file`).
- `chgrp` cambia solo el grupo: `chgrp staff archivo`.

Herramientas extendidas:

- ACLs: `setfacl` / `getfacl` permiten reglas finas por usuario/grupo más allá de POSIX.
- `umask` afecta permisos por defecto al crear nuevos archivos/directorios.

Permisos recurrentes y recursivos:

- Usar `chmod -R` y `chown -R` con cuidado para evitar cambiar permisos en todo el sistema; preferir listas o `find` para aplicar selectivamente.

## Umask (concepto)

Definición:

- `umask` es la máscara de permisos por defecto que se resta de los permisos máximos al crear archivos/directorios. Determina qué permisos se niegan por defecto.

Comportamiento típico:

- Permisos máximos para directorios suelen ser `rwxrwxrwx` (octal 0777); para ficheros `rw-rw-rw-` (0666, normalmente sin bit ejecutable).
- Si `umask` es 022, al crear un directorio resultará con permisos 755 (0777 - 022), y un archivo con 644 (0666 - 022).

Cambio y persistencia:

- Ver umask actual: `umask` o `umask -S` (formato simbólico).
- Cambiar en la sesión: `umask 027`.
- Persistir: añadir `umask` en archivos de inicio (`/etc/profile`, `~/.profile`, o en la configuración del servicio para procesos de sistema).

Consejos:

- Elegir umask más restrictiva para servidores multiusuario (por ejemplo `077` para máxima privacidad).
- Asegurarse que scripts y servicios creen archivos con permisos adecuados; algunos programas ignoran `umask` o aplican sus propias reglas.

## Referencias

### Libros (títulos)

- "The Linux Command Line" — William E. Shotts, Jr.
- "UNIX and Linux System Administration Handbook" — Evi Nemeth, et al.
- "Linux System Programming" — Robert Love (útil para entender bits y syscalls)

### Documentación oficial (vínculos)

- chmod manpage: https://man7.org/linux/man-pages/man1/chmod.1.html
- chown manpage: https://man7.org/linux/man-pages/man1/chown.1.html and https://man7.org/linux/man-pages/man1/chgrp.1.html
- umask manpage: https://man7.org/linux/man-pages/man1/umask.1.html
- ACLs: https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/filesystems/posix_acl.rst

