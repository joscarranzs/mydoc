---
title: WEB APIS
module: html
submodule: apis/web-apis
---

Los navegadores modernos exponen un conjunto de interfaces JavaScript conocidas como **Web APIs**. Estas APIs permiten acceder a funcionalidades del navegador y del dispositivo más allá del simple renderizado de HTML: geolocalización, almacenamiento local, gráficos, audio, video, notificaciones, arrastrar y soltar, y comunicación en tiempo real.

## API del DOM (Document Object Model)

La API más fundamental. Permite acceder y manipular la estructura del documento HTML:

```javascript
// Seleccionar elementos
const header = document.querySelector('header');
const botones = document.querySelectorAll('.btn');
const formulario = document.getElementById('form-login');

// Modificar contenido
header.textContent = 'Nuevo título';
header.innerHTML = '<span>Contenido HTML</span>';

// Modificar estilos
header.style.backgroundColor = '#0066cc';
header.classList.add('activo');

// Crear y eliminar elementos
const parrafo = document.createElement('p');
parrafo.textContent = 'Texto del nuevo párrafo';
document.body.appendChild(parrafo);
```

## API de Fetch

Realiza peticiones HTTP asíncronas de forma nativa, reemplazando al antiguo `XMLHttpRequest`:

```javascript
// Petición GET
fetch('https://api.ejemplo.com/datos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Petición POST con datos
fetch('https://api.ejemplo.com/usuarios', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nombre: 'Ana', email: 'ana@ejemplo.com' })
});
```

## API de Console

Herramienta de depuración disponible en todos los navegadores:

```javascript
console.log('Mensaje informativo');
console.warn('Advertencia');
console.error('Error crítico');
console.table([{ a: 1, b: 2 }, { a: 3, b: 4 }]);
console.time('operacion');
// ... código a medir ...
console.timeEnd('operacion');
```

## API de Timers

Controlan la ejecución diferida de código:

```javascript
// Una sola vez después de 2 segundos
setTimeout(() => alert('Tiempo cumplido'), 2000);

// Cada 3 segundos
const intervalo = setInterval(() => console.log('Tick'), 3000);

// Detener el intervalo
clearInterval(intervalo);
```

## API de Notificaciones

Permite mostrar notificaciones del sistema fuera del navegador:

```javascript
if ('Notification' in window) {
  Notification.requestPermission().then(permiso => {
    if (permiso === 'granted') {
      new Notification('Nuevo mensaje', {
        body: 'Tienes un mensaje sin leer.',
        icon: '/icono.png'
      });
    }
  });
}
```

## API de Historial

Controla la navegación del historial del navegador sin recargar la página:

```javascript
// Avanzar y retroceder
history.back();
history.forward();

// Navegación programática (SPA)
history.pushState({ page: 1 }, 'Título', '/pagina-1');
history.replaceState({ page: 2 }, 'Otro título', '/pagina-2');

// Escuchar cambios de historial
window.addEventListener('popstate', event => {
  console.log('Navegación:', event.state);
});
```

---

## Ejercicio: detección de APIs disponibles

Escribe un script que verifique cuáles de las siguientes APIs están disponibles en el navegador actual y las liste en la consola:

- Geolocalización
- Almacenamiento local
- Notificaciones
- Web Workers
- Fetch

<details>
<summary><strong>Ver solución</strong></summary>

```html
<script>
  const apis = [
    { nombre: 'Geolocalización', disponible: 'geolocation' in navigator },
    { nombre: 'Almacenamiento local', disponible: 'localStorage' in window },
    { nombre: 'Notificaciones', disponible: 'Notification' in window },
    { nombre: 'Web Workers', disponible: 'Worker' in window },
    { nombre: 'Fetch', disponible: 'fetch' in window },
  ];

  console.table(apis);
</script>
```

</details>
