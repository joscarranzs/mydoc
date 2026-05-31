---
title: ALMACENAMIENTO WEB
module: html
submodule: apis/web-storage
---

La API Web Storage proporciona dos mecanismos para almacenar datos en el navegador: `localStorage` y `sessionStorage`. Ambos permiten guardar pares clave-valor de forma persistente en el cliente, sin necesidad de enviarlos al servidor en cada petición.

## localStorage

Los datos persisten incluso después de cerrar el navegador. No tienen fecha de expiración.

```javascript
// Guardar datos
localStorage.setItem('nombre', 'Ana López');
localStorage.setItem('tema', 'oscuro');
localStorage.setItem('ultima-visita', new Date().toISOString());

// Recuperar datos
const nombre = localStorage.getItem('nombre');
const tema = localStorage.getItem('tema');

// Eliminar un elemento
localStorage.removeItem('tema');

// Eliminar todos los datos
localStorage.clear();

// Obtener la cantidad de elementos
const total = localStorage.length;
```

## sessionStorage

Los datos persisten solo durante la sesión del navegador. Al cerrar la pestaña o ventana, los datos se eliminan.

```javascript
// Misma API que localStorage
sessionStorage.setItem('carrito', JSON.stringify(['item1', 'item2']));
sessionStorage.setItem('paso-formulario', '3');

const carrito = JSON.parse(sessionStorage.getItem('carrito'));
```

## Diferencias clave

| Aspecto | `localStorage` | `sessionStorage` |
|---------|---------------|------------------|
| Persistencia | Hasta que se elimine manualmente | Hasta que se cierre la pestaña |
| Ámbito | Origen (protocolo + dominio + puerto) | Pestaña o ventana específica |
| Capacidad | ~5 MB por dominio | ~5 MB por dominio |
| Compartición | Entre todas las pestañas del mismo origen | Solo en la misma pestaña |
| APIs | `setItem`, `getItem`, `removeItem`, `clear`, `key` | Ídem |

## Almacenar objetos

Web Storage solo almacena strings. Para guardar objetos, se usa `JSON.stringify` y `JSON.parse`:

```javascript
const usuario = {
  id: 42,
  nombre: 'Carlos Ruiz',
  email: 'carlos@ejemplo.com',
  preferencias: { tema: 'oscuro', idioma: 'es' }
};

// Guardar
localStorage.setItem('usuario', JSON.stringify(usuario));

// Recuperar
const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
console.log(usuarioGuardado.nombre); // "Carlos Ruiz"
```

## Escuchar cambios

El evento `storage` se dispara en otras pestañas cuando `localStorage` cambia:

```javascript
window.addEventListener('storage', event => {
  console.log('Clave modificada:', event.key);
  console.log('Valor anterior:', event.oldValue);
  console.log('Valor nuevo:', event.newValue);
  console.log('Origen:', event.url);
});
```

Este evento no se dispara en la misma pestaña que realiza el cambio. Es útil para mantener sincronizadas múltiples pestañas de la misma aplicación.

## Web Storage vs. Cookies

| Aspecto | Web Storage | Cookies |
|---------|-------------|---------|
| Capacidad | ~5 MB | ~4 KB |
| Envío al servidor | No se envía automáticamente | Se envía en cada petición HTTP |
| Acceso desde servidor | No | Sí |
| API | Simple (setItem/getItem) | Verbosa (document.cookie) |
| Expiración | Manual (localStorage) o por sesión (sessionStorage) | Configurable |
| Ámbito | Origen | Camino y dominio |

---

## Ejercicio: contador de visitas con localStorage

Crea un script que:

1. Al cargar la página, muestre cuántas veces se ha visitado
2. Incremente el contador en cada carga
3. Muestre la fecha y hora de la última visita
4. Tenga un botón para reiniciar el contador

<details>
<summary><strong>Ver solución</strong></summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Contador de visitas</title>
</head>
<body>
  <h1>Contador de visitas</h1>
  <p>Has visitado esta página <strong id="contador">0</strong> veces.</p>
  <p>Última visita: <span id="ultima-visita">—</span></p>
  <button id="reiniciar">Reiniciar contador</button>

  <script>
    const contadorEl = document.getElementById('contador');
    const ultimaVisitaEl = document.getElementById('ultima-visita');

    let visitas = parseInt(localStorage.getItem('visitas') || '0');
    visitas++;
    localStorage.setItem('visitas', visitas);
    contadorEl.textContent = visitas;

    const ultima = localStorage.getItem('ultima-visita');
    if (ultima) {
      ultimaVisitaEl.textContent = new Date(ultima).toLocaleString('es');
    }
    localStorage.setItem('ultima-visita', new Date().toISOString());

    document.getElementById('reiniciar').addEventListener('click', () => {
      localStorage.removeItem('visitas');
      localStorage.removeItem('ultima-visita');
      location.reload();
    });
  </script>
</body>
</html>
```

</details>
