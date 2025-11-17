
# 02 - Terminal: Navegación y operaciones básicas

## Tabla de contenido

- [Introducción](#introducción)
- [Rutas absolutas y relativas](#rutas-absolutas-y-relativas)
- [Exploración del sistema](#exploración-del-sistema)
- [Crear, mover, copiar y borrar archivos y carpetas](#crear-mover-copiar-y-borrar-archivos-y-carpetas)
- [Referencias](#referencias)

## Introducción

Esta página resume las operaciones fundamentales en la terminal para navegar y manipular archivos y directorios. Está pensada como referencia rápida: definiciones, comandos clave y buenas prácticas que conviene dominar.

## Rutas absolutas y relativas

- Ruta absoluta: describe el camino completo desde la raíz, empieza con `/`. Ejemplo: `/etc/passwd`.
- Ruta relativa: se interpreta desde el directorio de trabajo actual (PWD). Ejemplo: si estás en `/home/usuario`, `documents/nota.txt` apunta a `/home/usuario/documents/nota.txt`.
- Símbolos útiles:
	- `.` (punto): directorio actual.
	- `..` (dos puntos): directorio padre.
	- `~` (tilde): acceso directo al directorio home del usuario (equivale a `/home/usuario`).

Buenas prácticas:

- Emplea rutas absolutas en scripts y configuraciones de sistema para evitar errores por cambios de `PWD`.
- Usa rutas relativas para comandos interactivos cuando la referencia sea obvia y reduzca la longitud del comando.

## Exploración del sistema

Comandos esenciales:

- `pwd`: muestra el directorio actual (Print Working Directory).
- `ls`: lista el contenido de un directorio. Opciones comunes: `-l` (lista larga), `-a` (mostrar archivos ocultos), `-h` (tamaños legibles), `-R` (recursivo).
- `cd <directorio>`: cambia de directorio; `cd -` vuelve al directorio anterior.
- `tree` (si está instalado): vista de árbol del directorio; útil para visión rápida de estructuras.
- `find`: localizar archivos por nombre, tipo, permisos y más; ejemplo: `find . -name '*.md'`.
- `locate`/`updatedb`: búsqueda por base de datos (rápida); `updatedb` actualiza la base.
- `stat archivo`: muestra metadatos de un archivo (timestamps, tamaño, permisos).
- `file archivo`: detecta el tipo de archivo por contenido, no solo por extensión.

Consejos:

- Prefiere `ls -alh` para revisar archivos con permisos y tamaños cuando administras directorios.
- Usa `find` y `xargs` para tareas masivas (por ejemplo, `find . -name '*.tmp' -print0 | xargs -0 rm -f`).

## Crear, mover, copiar y borrar archivos y carpetas

Operaciones básicas y flags comunes:

- Crear directorios: `mkdir nombre` y `mkdir -p ruta/completa` (crea padres si no existen).
- Crear archivos vacíos: `touch archivo`.
- Crear con contenido: `echo 'texto' > archivo` o `printf 'texto\n' > archivo`.
- Copiar archivos: `cp origen destino`. Para copiar directorios recursivamente, usar `cp -r origen destino` o `cp -a` para preservar atributos.
- Mover/renombrar: `mv origen destino` (mover o renombrar dependiento del destino).
- Borrar archivos: `rm archivo`. Advertencia: `rm -f` fuerza borrado y `rm -r` borra recursivamente; `rm -rf` borra sin preguntar y puede producir pérdida irreversible — úsalo con extremo cuidado.
- Borrar directorios vacíos: `rmdir directorio`.
- Copiar con preservación de metadatos: `install -m 644 fuente destino` o `cp -a`.

Ejemplos y buenas prácticas:

- Para mover 100 archivos a un directorio: `mkdir backup && mv *.log backup/`.
- Para copiar árbol completo manteniendo permisos: `cp -a /etc/dirs /backup/dirs`.
- Para borrar archivos creados hace más de 30 días: `find /var/log -type f -mtime +30 -exec rm -f {} +`.
- Antes de `rm -rf` ejecutar `ls` o `find` para validar la selección de ficheros.

Rescate y recuperación:

- `trash`/`gio trash` (herramientas de entorno): envía archivos a la papelera, evitando borrado inmediato en sistemas de escritorio.
- Respaldos regulares e `rsync` para copias incrementales: `rsync -a /orig/ /backup/`.

## Referencias

### Libros (títulos)

- "The Linux Command Line" — William E. Shotts, Jr.
- "UNIX and Linux System Administration Handbook" — Evi Nemeth, et al.

### Documentación oficial (vínculos)

- pwd, ls, cd manpages: https://man7.org/linux/man-pages/man1/ls.1.html and https://man7.org/linux/man-pages/man1/pwd.1.html
- mkdir, rm, cp, mv: https://man7.org/linux/man-pages/man1/mkdir.1.html, https://man7.org/linux/man-pages/man1/rm.1.html, https://man7.org/linux/man-pages/man1/cp.1.html, https://man7.org/linux/man-pages/man1/mv.1.html
- find: https://man7.org/linux/man-pages/man1/find.1.html
- rsync: https://download.samba.org/pub/rsync/ (manual y documentación oficial)

