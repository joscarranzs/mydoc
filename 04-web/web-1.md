<!--- Web fundamentals: client/server, DNS, HTTP/HTTPS, requests/responses --->
# 04 - Web: Cómo funciona la Web

## Tabla de contenido

- [Introducción](#introducción)
- [Cliente ↔ Servidor](#cliente-↔-servidor)
- [DNS](#dns)
- [HTTP/HTTPS](#httphttps)
- [Requests, responses, headers, status codes](#requests-responses-headers-status-codes)
- [Ejemplos rápidos (curl)](#ejemplos-rápidos-curl)
- [Referencias](#referencias)

## Introducción

La Web es un sistema distribuido que permite la transferencia de recursos (páginas, APIs, archivos) entre clientes y servidores a través de protocolos estándares (principalmente HTTP sobre TCP). A grandes rasgos, la comunicación se hace del cliente (navegador o script) hacia un servidor que entrega respuestas basadas en peticiones. 

## Cliente ↔ Servidor

Modelo cliente-servidor:

- Cliente: inicia sesiones; solicita recursos (HTML, JSON, imágenes) y procesa respuestas.
- Servidor: atiende peticiones, ejecuta lógica, y devuelve recursos o errores.

Patrones y consideraciones:

- Stateless: HTTP es mayoritariamente sin estado — cada petición es independiente; el estado se conserva mediante cookies, tokens, o almacenamiento en el servidor.
- Balanceo de carga: varios servidores pueden atender el mismo servicio, con un balanceador para distribuir peticiones.
- Caché CDN: para contenido estático se usan CDNs que almacenan en caché y reducen latencia.

## DNS

DNS (Domain Name System) traduce nombres (ej. example.com) a direcciones IP (ej. 93.184.216.34). Es una base de datos distribuida y jerárquica.

Conceptos importantes:

- Zona y servidores autoritativos: el servidor que responde como figura de autoridad para un dominio.
- Registros comunes: A/AAAA (dirección IP), CNAME (alias), MX (correo), TXT (información arbitraria), NS (servidores de nombres).
- TTL (Time To Live): cuánto tiempo puede durar en caché una respuesta DNS.

Proceso simplificado de resolución DNS:

1. El cliente pregunta al resolvedor local (ISP o sistema operativo).
2. Si no hay caché, el resolvedor consulta jerárquicamente: raíz → TLD → servidor autoritativo.
3. El resolvedor devuelve la IP al cliente.

## HTTP/HTTPS

HTTP (Hypertext Transfer Protocol) es el protocolo principal para la Web. Opera sobre TCP y define cómo formular peticiones y respuestas para recursos.

HTTPS = HTTP + TLS/SSL. Añade cifrado, integridad y autenticación del servidor mediante certificados x.509. HTTPS evita que intermediarios lean o modifiquen el tráfico.

Capas de la pila relevante:

- DNS: resolución de nombres
- TCP: transporte confiable (o QUIC/UDP en HTTP/3)
- TLS: cifrado y autenticación (HTTPS)
- HTTP: semántica de peticiones/respuestas

### HTTP methods (verbos)

- GET — recuperar un recurso (idempotente/safe)
- POST — enviar datos para crear o procesar (no-idempotente)
- PUT — reemplazar un recurso (idempotente)
- PATCH — actualizar parcialmente un recurso
- DELETE — eliminar

### Seguridad y TLS

- TLS (Transport Layer Security) cifra datos y autentica el servidor (y opcionalmente el cliente).
- Certificados y autoridades de certificación (CAs) validan identidad. En producción, usa certificados gestionados por proveedores o Let's Encrypt.

## Requests, responses, headers, status codes

Request — partes clave:

- Request-line: METHOD path HTTP/version (ej. GET /index.html HTTP/1.1)
- Headers: pares clave/valor que describen cliente, tipo de contenido, cookies, etc.
- Body: datos para métodos como POST (form data, JSON, archivos)

Response — partes clave:

- Status-line: HTTP/version status_code reason_phrase (ej. HTTP/1.1 200 OK)
- Headers: metadata (Content-Type, Cache-Control, Set-Cookie, etc.)
- Body: recurso (HTML/CSS/JSON/imagen)

Headers comunes:

- Host: dominio solicitado (ej. example.com)
- Content-Type: formato del body (text/html, application/json)
- Accept: qué formatos acepta el cliente
- Authorization: token o credenciales
- Set-Cookie / Cookie: manejo de sesiones
- Cache-Control / Expires: directivas de cache

Status codes (agrupados por clase):

- 1xx (Informativos) — progreso parcial
- 2xx (Éxito): 200 OK, 201 Created
- 3xx (Redirección): 301 Moved Permanently, 302 Found, 304 Not Modified
- 4xx (Errores del cliente): 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found
- 5xx (Errores del servidor): 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable

Consideraciones:

- Status codes deberían mapear semánticamente a la operación; evita abusar de 200 para errores.
- En APIs, usa cuerpos JSON con campos error + message para mayor información en 4xx/5xx.

## Ejemplos rápidos (curl)

Ver encabezados de respuesta:

```bash
curl -I https://example.com
```

Enviar JSON con POST:

```bash
curl -X POST https://api.example.com/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"a@example.com"}'
```

Ejemplo de solicitud y respuesta (simplificado):

Request:

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html

```

Response:

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 1234

<!doctype html>... (body)
```

## Referencias

- MDN Web Docs — HTTP: https://developer.mozilla.org/en-US/docs/Web/HTTP
- MDN Web Docs — DNS: https://developer.mozilla.org/en-US/docs/Web/HTTP/DNS
- IETF RFCs: HTTP/1.1 (RFC 7230-7235), RFC 7540 (HTTP/2), RFC 9114 (HTTP/3)
- TLS specs: RFC 8446 (TLS 1.3)
- DNS RFCs: RFC 1034 and RFC 1035
- Curl docs (examples): https://curl.se/docs/
