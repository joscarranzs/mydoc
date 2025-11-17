# 04 - Web: Autenticación y seguridad

## Tabla de contenido

- [Introducción](#introducción)
- [Sessions vs. tokens](#sessions-vs-tokens)
- [Hashing de contraseñas](#hashing-de-contraseñas)
- [Autorización](#autorización)
- [Prácticas básicas de seguridad](#prácticas-básicas-de-seguridad)
- [Referencias](#referencias)

## Introducción

La autenticación y seguridad determinan quién puede acceder a los recursos (autenticación) y qué acciones pueden realizar (autorización). Una implementación segura protege datos de usuarios y evita vectores comunes de ataque.

## Sessions vs. tokens

Sessions (cookie-based):

- El servidor crea una sesión y guarda estado (por ejemplo, en memoria, Redis o BD). El cliente recibe una cookie con un identificador de sesión.
- Ventajas: control centralizado (invalidación, expiración), fácil de implementar.
- Riesgos: CSRF (Cross-Site Request Forgery) — mitigar con SameSite cookies o tokens CSRF.

Tokens (stateless, e.g., JWT):

- Cliente recibe un token firmado que contiene claims (por ejemplo user id, expiry) y lo envía en Authorization header (Bearer) o cookie.
- Ventajas: escala horizontal sin almacenamiento de estado; útil para APIs y SPAs.
- Riesgos: revocación complicada; tokens con larga duración pueden presentar riesgo si robados.

Comparativa práctica:

- Para sitios tradicionales, las sessions con cookies seguras (HttpOnly, Secure, SameSite) son sencillas y seguras si se configuran bien.
- Para APIs y microservicios, tokens son comunes; considera short-lived tokens + refresh tokens para balancear seguridad / UX.

## Hashing de contraseñas

Nunca almacenes contraseñas en texto plano.

Buenas prácticas:

- Usa un algoritmo de hashing específico para contraseñas: bcrypt, Argon2, scrypt.
- Agrega salt único por usuario para evitar ataques por rainbow tables.
- Ajusta el costo/parametros según la capacidad del hardware (más costoso = más seguro contra fuerza bruta).
- Usa almacenamiento seguro y revisa rotación de claves si usas cifrado.

Ejemplo (bcrypt — Node.js):

```javascript
const bcrypt = require('bcrypt');
const hash = await bcrypt.hash(password, 12);
const same = await bcrypt.compare(inputPassword, hash);
```

## Autorización

Autorización define lo que un usuario puede hacer:

- RBAC (Role-Based Access Control): roles (admin, user) con permisos asignados.
- ABAC (Attribute-Based Access Control): reglas basadas en atributos (tiempo, rol, propiedades del recurso).
- ACLs (Access Control Lists): permisos por recurso/usuario.

Implementación práctica:

- Centraliza la lógica de autorización en middleware (Express) o guards (NestJS/Angular) para evitar duplicación.
- Principio de menor privilegio: dar solo los permisos necesarios.
- Revisa rutas y endpoints para asegurar que están protegidos adecuadamente por rol o scope.

## Prácticas básicas de seguridad

- Usa HTTPS en todas las comunicaciones — activa HSTS para forzar HTTPS.
- Valida y sanea todas las entradas del usuario (evitar SQL injection, XSS).
- Implementa mecanismos de rate limiting y protección contra brute-force para endpoints de login.
- Protege cookies: Secure, HttpOnly, SameSite=Lax (o Strict para casos sensibles).
- Usa Content Security Policy (CSP) para reducir XSS riesgos.
- Implementa logging y alertas para accesos inusuales; usa tracing para correlacionar eventos.
- Escanea dependencias (snyk, npm audit) y aplica actualizaciones de seguridad regularmente.

Resumen de control de accesos comunes

- Autenticación: verificar identidad (passwords, MFA, tokens)
- Autorización: verificar permisos (roles, scopes)
- Auditoría: registrar quién hizo qué y cuándo

## Referencias

- OWASP Authentication Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html
- OWASP Password Storage Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
- JWT best practices: https://www.rfc-editor.org/rfc/rfc7519
- CSP basics: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

