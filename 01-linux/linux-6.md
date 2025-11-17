
# 01 - Linux: Redes

## Tabla de contenido

- [Introducción](#introducción)
- [Configuración básica](#configuración-básica)
- [Interfaces y direcciones](#interfaces-y-direcciones)
- [Cómo funcionan los servicios de red](#cómo-funcionan-los-servicios-de-red)
- [Referencias](#referencias)

## Introducción

Este documento resume los conceptos esenciales para entender y administrar redes en Linux: desde configurar interfaces y direcciones IP hasta cómo se estructuran y gestionan los servicios de red comunes (DHCP, DNS, enrutamiento, firewall). Está pensado como referencia rápida con enlaces a la documentación oficial.

## Configuración básica

Conceptos y pasos comunes:

- Interfaces: se configuran con utilidades contemporáneas como `ip` (iproute2). Evita `ifconfig` en sistemas actuales; `ip` unifica control sobre direcciones, rutas y enlaces.
- Direcciones IP: se asignan manualmente con `ip addr add <IP>/<prefix> dev <iface>` o mediante gestores de red (NetworkManager, systemd-networkd, netplan). IPv4 usa máscara (o notación CIDR), IPv6 usa prefijos.
- Rutas: la tabla de enrutamiento se maneja con `ip route` para añadir rutas estáticas; se delega al servicio o al kernel para aprendizaje vía protocolos de enrutamiento.
- DNS y resolución: se configura en `/etc/resolv.conf`, o a través de resolver locales gestionados por systemd-resolved o NetworkManager.

Herramientas importantes:

- `ip` (iproute2): https://man7.org/linux/man-pages/man8/ip.8.html
- `ss` (sockets): examina puertos y conexiones: https://man7.org/linux/man-pages/man8/ss.8.html
- `nmcli` para NetworkManager: https://docs.networkmanager.org/ (documentación oficial)
- `systemd-networkd` y `systemd-resolved` para configuraciones gestionadas por systemd: https://www.freedesktop.org/software/systemd/man/systemd-networkd.service.html

## Interfaces y direcciones

Tipos de interfaces:

- loopback (`lo`): interfaz virtual local de la máquina.
- físicas: `eth0`, `enp0s3`, `wlan0` (interfaces Ethernet o inalámbricas). Los nombres dependen de las políticas de nomenclatura de la distro.
- virtuales: `veth`, `tun`/`tap` (para contenedores o VPNs), interfaces de puente (`br0`), VLANs (`eth0.100`).

Direcciones y conceptos clave:

- IP (IPv4/IPv6): dirección y máscara/prefijo. En IPv4 se suele usar CIDR (ej.: 192.168.1.10/24).
- MAC: dirección del enlace (nivel 2), usada por ARP y en switches.
- Subredes: división del espacio de direcciones para separar dominios de difusión.
- DHCP: método para obtener dirección y parámetros de red automáticamente; cliente y servidor cooperan.
- NAT: traducción de direcciones para compartir una IP pública entre múltiples hosts; muy usado en NAT doméstico.

Comandos útiles:

- Mostrar interfaces y direcciones: `ip addr show`
- Mostrar rutas: `ip route show`
- Activar/desactivar interface: `ip link set dev <iface> up|down`

Ver documentación del kernel para details de netlink y control de interfaces.

## Cómo funcionan los servicios de red

Los servicios de red son demonios en espacio de usuario que escuchan puertos, responden solicitudes y administran estado de red. Ejemplos: DHCP client/servers (dhclient, isc-dhcp-server), DNS (bind, systemd-resolved), servidores web, OpenSSH, y servicios de gestión de red (NetworkManager, systemd-networkd).

Patrones y detalles operativos:

- Arranque y gestión: los servicios se ejecutan como unidades del init (systemd), o como demonios iniciados por SysV scripts. systemd maneja dependencias, sockets y unidades para servicios de red.
- Socket activation: systemd puede activar servicios cuando llega tráfico a un puerto, mejorando arranque y ahorro de recursos.
- DHCP: el cliente (ej.: dhclient o systemd-networkd) solicita configuración al servidor; al recibirla, el cliente aplica dirección y rutas al interface.
- DNS: un servicio escucha en el puerto 53 para resolver nombres; a menudo el sistema usa resolvers locales (systemd-resolved) que actúan como proxy para caché y seguridad.
- Firewall y filtrado: herramientas modernas (`nftables`, `iptables`) filtran tráfico según reglas; las reglas se aplican en el kernel y son gestionadas por utilidades en espacio de usuario.
- Enrutamiento avanzado: el kernel gestiona la tabla de rutas; demonios de enrutamiento (BGP/OSPF) como `bird` o `quagga` interactúan con el kernel para instalar rutas aprendidas.

Monitorización y diagnóstico:

- `ss`, `netstat` (legacy), `ip -s link`, `tcpdump`, `ethtool` para propiedades de enlace.
- `journalctl -u NetworkManager` o `systemctl status systemd-networkd` para examinar logs y fallos.

## Referencias

### Libros (títulos)

- "TCP/IP Illustrated" — W. Richard Stevens
- "UNIX and Linux System Administration Handbook" — Evi Nemeth, et al.
- "Linux Network Administrator's Guide" — Tony Bautts, et al. (clásico)

### Documentación oficial (vínculos)

- Linux kernel networking: https://www.kernel.org/doc/html/latest/networking/index.html
- iproute2 (`ip`): https://man7.org/linux/man-pages/man8/ip.8.html
- ss (sockets): https://man7.org/linux/man-pages/man8/ss.8.html
- NetworkManager documentation: https://docs.networkmanager.org/
- systemd-networkd / systemd-resolved: https://www.freedesktop.org/software/systemd/man/
- nftables: https://netfilter.org/projects/nftables/index.html
- netfilter/iptables: https://netfilter.org/
- DHCP (ISC) server/client manpages: https://man7.org/linux/man-pages/man8/dhclient.8.html
- DNS resolvers and resolv.conf: https://man7.org/linux/man-pages/man5/resolv.conf.5.html

