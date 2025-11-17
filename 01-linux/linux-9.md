
# 01 - Linux: Seguridad básica

## Tabla de contenido

- [Introducción](#introducción)
- [Autenticación](#autenticación)
- [Control de acceso](#control-de-acceso)
- [Registros y auditoría](#registros-y-auditoría)
- [Referencias](#referencias)

## Introducción

Esta guía resume los principios básicos de seguridad en Linux orientados a la administración diaria: autenticación de usuarios, control de acceso sobre recursos y sistemas de registro y auditoría. Enlaza únicamente a documentación oficial y fuentes reconocidas.

## Autenticación

La autenticación verifica la identidad de un usuario o servicio antes de permitirle acceso. Métodos comunes:

- Contraseñas: almacenadas en `/etc/shadow` y gestionadas por PAM (Pluggable Authentication Modules). Es importante usar contraseñas fuertes y políticas de expiración.
- Llaves públicas/privadas (SSH): autenticación basada en claves para acceso remoto (`~/.ssh/authorized_keys`) — preferible a contraseñas para servidores.
- Autenticación multifactor (MFA): combinación de contraseña + token (TOTP, U2F) mediante módulos PAM o servicios externos.
- Kerberos / LDAP: autenticación centralizada en entornos empresariales.

Buenas prácticas:

- Habilitar autenticación por clave para SSH y desactivar acceso por contraseña cuando sea posible.
- Configurar políticas de expiración, longitud y complejidad mediante PAM y herramientas de policy.
- Mantener `/etc/shadow` y `/etc/passwd` con permisos restringidos.

## Control de acceso

Modelos de control de acceso:

- Discrecional (DAC): modelo POSIX tradicional de propiedad y permisos (user/group/other) y bits especiales (`setuid`, `setgid`, `sticky`).
- Listas de Control de Acceso (ACLs): permiten permisos más detallados a usuarios/grupos específicos (`getfacl` / `setfacl`).
- Control obligatorio (MAC): sistemas como SELinux y AppArmor aplican políticas que restringen acciones más allá de DAC/ACL. Recomendado para entornos con mayores requisitos de seguridad.
- Capabilities: dividir privilegios del kernel en bits finos (por ejemplo `CAP_NET_BIND_SERVICE`) para reducir necesidad de SUID root.

Acceso a recursos comunes:

- Archivos/directorios: usar `chmod`, `chown`, `setfacl` para controlar acceso.
- Dispositivos: controlados mediante permisos en `/dev` y reglas de udev.
- Servicios: controlados mediante systemd (unidades) y segregar servicios en usuarios/grupos dedicados.

Prácticas seguras:

- Evitar dar permisos excesivos a "otros"; preferir grupos dedicados.
- Minimizar el uso de `root` y preferir `sudo` para tareas administrativas.
- Usar SELinux/AppArmor en sistemas expuestos y revisar políticas por defecto de la distribución.

## Registros y auditoría

La observabilidad y registro son claves para detectar incidentes y cumplir políticas.

- syslog/journald: `rsyslog` o `systemd-journald` recopilan logs del sistema y aplicaciones; `journalctl` permite consultar logs centralizados.
- Audit subsystem (auditd): registro detallado de eventos de seguridad (llamadas al sistema, acceso a archivos, cambios de permisos). Útil para auditoría y cumplimiento.
- Log rotation y retención: configurar rotación (`logrotate`) para evitar ocupación de disco por logs.

Monitoreo y respuesta:

- Revisar logs periódicamente, configurar alertas (SIEM) para eventos críticos.
- Usar herramientas de correlación y análisis para detectar patrones anómalos.

Buenas prácticas:

- Mantener logs centralizados y protegidos frente a modificaciones no autorizadas.
- Asegurar que `auditd` registre eventos importantes (autenticación, cambios en /etc, permisos SUID/SGID, comandos `sudo`, etc.).

## Referencias

### Libros (títulos)

- "UNIX and Linux System Administration Handbook" — Evi Nemeth, et al.
- "Practical Linux Security Cookbook" — (varios autores)
- "Linux Hardening in Hostile Networks" — (practical guides)

### Documentación oficial (vínculos)

- PAM (Pluggable Authentication Modules) project and docs: https://www.linux-pam.org/
- shadow file format and passwd manpages: https://man7.org/linux/man-pages/man5/shadow.5.html and https://man7.org/linux/man-pages/man5/passwd.5.html
- OpenSSH: https://www.openssh.com/manual.html
- SELinux Documentation: https://www.kernel.org/doc/html/latest/security/selinux/index.html
- AppArmor Documentation: https://gitlab.com/apparmor/apparmor/-/wikis/Home
- systemd journal: https://www.freedesktop.org/software/systemd/man/systemd-journald.service.html and https://www.freedesktop.org/software/systemd/man/journalctl.1.html
- Linux Audit: https://github.com/linux-audit/audit-documentation and https://www.kernel.org/doc/html/latest/admin-guide/audit/index.html
- rsyslog: https://www.rsyslog.com/

