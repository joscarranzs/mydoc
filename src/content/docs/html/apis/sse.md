---
title: SSE
module: html
submodule: apis/sse
---

Server-Sent Events (SSE) es una tecnología que permite al servidor enviar datos al navegador de forma unidireccional y automática a través de una conexión HTTP persistente. Es ideal para notificaciones en tiempo real, fuentes de datos en vivo y actualizaciones de estado.

```javascript
const eventSource = new EventSource('/api/notificaciones');

eventSource.onmessage = event => {
  console.log('Mensaje recibido:', event.data);
};

eventSource.onerror = event => {
  console.error('Error en la conexión SSE');
};
```

## Cómo funciona

1. El navegador crea una conexión `EventSource` a una URL del servidor.
2. El servidor mantiene la conexión abierta y envía datos con formato `text/event-stream`.
3. Cuando el servidor envía un nuevo evento, el navegador lo recibe automáticamente.
4. Si la conexión se pierde, el navegador la restablece automáticamente.

## Formato del servidor

El servidor debe responder con `Content-Type: text/event-stream` y seguir este formato:

```
data: Mensaje de texto simple\n\n

data: {"usuario": "Ana", "mensaje": "Hola"}\n\n

event: notificacion
data: {"tipo": "amigo", "usuario": "Carlos"}\n\n

event: alerta
data: Operación completada
id: 42\n\n
```

## Tipos de eventos

```javascript
const source = new EventSource('/api/eventos');

// Evento sin tipo específico
source.onmessage = event => {
  console.log('Datos:', event.data);
};

// Eventos con nombre
source.addEventListener('notificacion', event => {
  const data = JSON.parse(event.data);
  mostrarNotificacion(data);
});

source.addEventListener('actualizacion', event => {
  actualizarDashboard(JSON.parse(event.data));
});

source.addEventListener('alerta', event => {
  mostrarAlerta(event.data);
});
```

## El objeto `event`

```javascript
source.addEventListener('mensaje', event => {
  console.log('Datos:', event.data);      // Contenido del mensaje
  console.log('ID:', event.lastEventId);   // Último ID recibido
  console.log('Origen:', event.origin);    // URL de origen
});
```

## Conexión y desconexión

```javascript
const source = new EventSource('/api/stream');

source.onopen = () => {
  console.log('Conexión SSE establecida');
};

source.onerror = () => {
  console.log('Error de conexión. El navegador reintentará automáticamente.');
};

// Cerrar la conexión desde el cliente
source.close();
```

El navegador reintenta la conexión automáticamente tras un error. El servidor puede controlar el tiempo de reintento con el campo `retry`:

```
retry: 5000

data: Mensaje tras 5 segundos de espera\n\n
```

## SSE vs. WebSocket

| Aspecto | SSE | WebSocket |
|---------|-----|-----------|
| Dirección | Servidor -> Cliente | Bidireccional |
| Protocolo | HTTP estándar | ws:// o wss:// |
| Reconexión | Automática | Manual |
| Soporte | Todos los navegadores modernos | Todos los navegadores modernos |
| Casos de uso | Notificaciones, feeds, actualizaciones | Chat, juegos, colaboración en tiempo real |
| Complejidad | Baja | Media |

---

## Ejercicio: conectar a un stream SSE

Escribe el código JavaScript para:

1. Conectarse a un endpoint SSE en `/api/notificaciones`
2. Escuchar eventos de tipo `mensaje` y mostrar los datos en la consola
3. Escuchar eventos de tipo `alerta` y mostrar una alerta en la página
4. Manejar el error de conexión mostrando un mensaje en la consola

<details>
<summary><strong>Ver solución</strong></summary>

```javascript
const source = new EventSource('/api/notificaciones');

source.addEventListener('mensaje', event => {
  console.log('Mensaje recibido:', event.data);
});

source.addEventListener('alerta', event => {
  const alerta = document.createElement('div');
  alerta.className = 'alerta';
  alerta.textContent = event.data;
  document.body.appendChild(alerta);
});

source.onerror = () => {
  console.error('Error en la conexión SSE. Reintentando...');
};

// Para cerrar la conexión cuando ya no sea necesaria:
// source.close();
```

</details>
