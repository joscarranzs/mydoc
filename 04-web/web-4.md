# 04 - Web: Backend — Conceptos esenciales

## Tabla de contenido

- [Introducción](#introducción)
- [Servidor web](#servidor-web)
- [Rutas y controladores](#rutas-y-controladores)
- [Lógica de negocio](#lógica-de-negocio)
- [APIs (REST y JSON)](#apis-rest-y-json)
- [Buenas prácticas y consideraciones](#buenas-prácticas-y-consideraciones)
- [Referencias](#referencias)

## Introducción

El backend es la capa responsable de almacenar y procesar datos, ejecutar la lógica de negocio y servir respuestas a clientes y aplicaciones. Aquí se explican conceptos clave: servidores que reciben peticiones, rutas que dirigen esas peticiones, controladores que orquestan la lógica, y APIs que exponen funcionalidad en formato JSON.

## Servidor web

Un servidor web es un programa que escucha en un puerto (ej. 80/443) y atiende peticiones HTTP/HTTPS. Ejemplos: Nginx, Apache, Caddy (front-facing), y servidores de aplicaciones como Node.js, uWSGI, Gunicorn, o frameworks como Express/Flask.

Roles del servidor:

- Aceptar conexiones de clientes y enrutar peticiones a la aplicación.
- Gestionar TLS (HTTPS) y seguridad.
- Servir contenido estático con mayor eficiencia o actuar como proxy inverso.

Patrones comunes:

- Reverse proxy: Nginx en frente de un servidor de aplicaciones para manejo de TLS, cache y balanceo.
- Serverless: funciones gestionadas por plataformas (AWS Lambda) frente a infra tradicional.

## Rutas y controladores

Las rutas mapean URLs y métodos HTTP (GET/POST/PUT/DELETE) a funciones o controladores que ejecutan lógica. Separar rutas de controladores mejora mantenimiento.

Estructura típica:

- Router: define endpoints y validación básica de rutas.
- Controller/Handler: traduce la petición en acciones, valida entrada y llama a servicios.
- Service/Use-case: contiene la lógica de negocio pura (sin dependencia de HTTP).

Ejemplo (Express.js):

```javascript
// router
router.post('/users', usersController.create);

// controller
exports.create = async (req, res, next) => {
	try {
		const user = await userService.createUser(req.body);
		res.status(201).json(user);
	} catch (err) {
		next(err);
	}
};

// service
async function createUser(data) { /* validaciones + persistencia */ }
```

## Lógica de negocio

La lógica de negocio representa las reglas que definen cómo opera el sistema (cálculos, descuentos, workflows). Debe permanecer desacoplada del transporte (HTTP) para facilitar testing y reutilización.

Buenas prácticas:

- Mantener servicios/handlers pequeños y composables.
- Escribir pruebas unitarias para la lógica de negocio.
- Separar la persistencia (repositorio) de los servicios para facilitar mocks en pruebas.

## APIs (REST y JSON)

REST es un estilo arquitectónico para APIs HTTP. Aunque no es un estándar estricto, la práctica común incluye:

- Rutas basadas en recursos: GET /users, POST /users
- Uso semántico de status codes: 200, 201, 404, 422, 500
- Transferencia de datos en JSON: Content-Type: application/json
- HATEOAS (opcional): incluir enlaces para navegar recursos

API design notes:

- Versionado: /api/v1/... o encabezados Accept-Version para cambios compatibles.
- Paginación: limit/offset o cursor-based para colecciones grandes.
- Validación: usa token/passport/schemas para validar entrada (Joi, zod, pydantic).
- Autenticación: JWT, OAuth2, API keys — siempre sobre HTTPS.
- Rate limiting y caching para proteger y optimizar.

Ejemplo JSON Response:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
	"id": 123,
	"name": "Alice",
	"email": "alice@example.com"
}
```

## Buenas prácticas y consideraciones

- Manejo de errores: retornar códigos claros y cuerpos JSON con `error` y `message`.
- Logging y trazabilidad: correlación de solicitudes con request-id/trace-id.
- Testing: unit tests para servicios y end-to-end tests para endpoints.
- Seguridad: CORS, CSP, XSS, SQL injection — validación y escaping.
- Escalabilidad: cache (Redis), colas (RabbitMQ), y particionamiento de bases.

## Referencias

- REST APIs: https://restfulapi.net/
- JSON API spec: https://jsonapi.org/
- Express.js guide: https://expressjs.com/
- Flask quickstart: https://flask.palletsprojects.com/
- OWASP API Security Top 10: https://owasp.org/www-project-api-security/
