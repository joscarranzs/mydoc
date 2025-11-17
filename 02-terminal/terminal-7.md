
# 02 - Terminal: Redes desde la terminal

## Tabla de contenido

- [Introducción](#introducción)
- [Consultas de red básicas](#consultas-de-red-básicas)
- [Comprobación de conectividad](#comprobación-de-conectividad)
- [Inspección de puertos y servicios](#inspección-de-puertos-y-servicios)
- [Referencias](#referencias)

## Introducción

Este documento recoge comandos y prácticas básicas para trabajar con redes desde la terminal: consultar interfaces y direcciones, diagnosticar conectividad, y explorar puertos y servicios en hosts locales o remotos.

## Consultas de red básicas

- Ver interfaces y direcciones: `ip addr show` o `ip a` muestra direcciones IPv4/IPv6 y estado de interfaces.
- Ver rutas: `ip route show` o `ip r` para la tabla de enrutamiento.
- Consultar DNS: `dig example.com` o `host example.com` para consultar registros DNS; `resolvectl query example.com` si usas systemd-resolved.
- Comprobar nombre local: revisar `/etc/hosts` para resoluciones manuales.
- Mostrar conexiones y puertos: `ss -tuln` muestra sockets TCP/UDP escuchando (sin resolución DNS ni nombres de servicios) y `ss -tunap` agrega procesos y número de PID.

Comandos útiles y flags comunes:

- `ip -s link` muestra estadísticas de interfaz (paquetes, errores).
- `ethtool <iface>` muestra capacidades del enlace y estadísticas (requiere paquete `ethtool`).
- `nmcli device status` o `nmcli connection show` para NetworkManager.

## Comprobación de conectividad

- Ping: `ping 8.8.8.8` o `ping google.com` comprueba conectividad ICMP. Para IPv6: `ping6` o `ping -6`.
- Traceroute: `traceroute example.com` (o `tracepath`) para trazar la ruta hacia un host y ver saltos intermedios.
- Resolver y probar nombre: `dig +short example.com` para resolver un A record sin mostrar detalles; `nslookup` es otra opción heredada.
- Prueba de puerto remoto (TCP): `nc -zv host port` (netcat) intenta conectar y verifica si puerto abierto.

Diagnóstico paso a paso de conectividad:

1. Confirma que interfaz está arriba: `ip a`.
2. Comprueba ruta por defecto: `ip r`.
3. Haz ping a gateway y a un host público para ver si hay pérdida.
4. Usa `traceroute` para localizar saltos problemáticos.

Herramientas de captura y análisis:

- `tcpdump` para capturar paquetes en una interfaz y revisar tráfico (necesita privilegios). Ejemplo: `sudo tcpdump -i eth0 port 53` para capturar DNS.

## Inspección de puertos y servicios

- `ss -tuln` o `ss -tunap` para ver puertos locales en escucha y qué proceso los atiende.
- `lsof -iTCP -sTCP:LISTEN -P -n` lista procesos que escuchan en puertos TCP; `-n` evita resolución de nombres.
- Escaneo de puertos remotos: `nmap -sS -p 1-65535 host` para auditoría o diagnóstico (usar con consentimiento y en entornos controlados). Nmap ofrece muchas opciones (service/version scan, scripts).
- `systemctl status <service>` y `journalctl -u <service>` para comprobar estado y logs de servicios manejados por systemd.

Casos prácticos:

- Averiguar qué servicio escucha en el puerto 80 en local:
	- `ss -tunap | grep ':80 '`
	- `sudo lsof -i :80`
- Verificar si servidor web responde: `curl -I http://localhost` o `wget --spider http://localhost` para comprobar cabeceras HTTP.

Seguridad y saneamiento:

- Ten cuidado al escanear redes que no controlas (nmap). Respeta las políticas y legislaciones locales.
- Evita exponer servicios en interfaces públicas sin firewall (`iptables`/`nftables`) y revisa configuración de `ufw` o `firewall-cmd` si aplica.

## Referencias

### Libros (títulos)

- "TCP/IP Illustrated" — W. Richard Stevens
- "Network Warrior" — Gary A. Donahue
- "UNIX and Linux System Administration Handbook" — Evi Nemeth, et al.

### Documentación oficial (vínculos)

- iproute2 / ip manpage: https://man7.org/linux/man-pages/man8/ip.8.html
- ss manpage: https://man7.org/linux/man-pages/man8/ss.8.html
- ping manpage: https://man7.org/linux/man-pages/man8/ping.8.html
- traceroute manpage: https://man7.org/linux/man-pages/man8/traceroute.8.html and https://man7.org/linux/man-pages/man8/tracepath.8.html
- dig (ISC BIND): https://bind9.readthedocs.io/en/latest/ and https://man7.org/linux/man-pages/man1/dig.1.html
- tcpdump: https://www.tcpdump.org/
- nmap: https://nmap.org/
- lsof manpage: https://linux.die.net/man/8/lsof (note: official docs on lsof site are at https://github.com/lsof-org/lsof)

