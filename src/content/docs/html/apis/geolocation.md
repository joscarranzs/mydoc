---
title: GEOLOCALIZACIÓN
module: html
submodule: apis/geolocation
---

La API de Geolocalización permite acceder a la ubicación geográfica del dispositivo. Es útil para mapas, directorios cercanos, verificación de dirección y servicios basados en localización.

## Solicitar la ubicación actual

```javascript
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    posicion => {
      console.log('Latitud:', posicion.coords.latitude);
      console.log('Longitud:', posicion.coords.longitude);
      console.log('Precisión:', posicion.coords.accuracy, 'metros');
    },
    error => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.error('El usuario denegó el permiso.');
          break;
        case error.POSITION_UNAVAILABLE:
          console.error('No se pudo determinar la ubicación.');
          break;
        case error.TIMEOUT:
          console.error('La solicitud de ubicación expiró.');
          break;
      }
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 300000
    }
  );
} else {
  console.warn('Geolocalización no soportada.');
}
```

### Opciones de configuración

| Opción | Valor por defecto | Propósito |
|--------|-------------------|-----------|
| `enableHighAccuracy` | `false` | Solicita la máxima precisión posible (consume más batería) |
| `timeout` | `Infinity` | Tiempo máximo en ms para obtener la posición |
| `maximumAge` | `0` | Aceptar una posición en caché si es menor a esta edad (ms) |

## Seguimiento continuo

`watchPosition` llama al callback cada vez que la posición cambia, útil para navegación paso a paso:

```javascript
const watchId = navigator.geolocation.watchPosition(
  posicion => {
    document.getElementById('latitud').textContent = posicion.coords.latitude;
    document.getElementById('longitud').textContent = posicion.coords.longitude;
  },
  error => console.error('Error:', error.message),
  { enableHighAccuracy: true }
);

// Detener el seguimiento cuando ya no sea necesario
// navigator.geolocation.clearWatch(watchId);
```

## Mostrar en un mapa

Combinando geolocalización con un mapa embebido:

```html
<iframe id="mapa" width="600" height="400" title="Mapa de ubicación"></iframe>

<script>
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude, longitude } = pos.coords;
    const mapa = document.getElementById('mapa');
    mapa.src = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01},${latitude - 0.01},${longitude + 0.01},${latitude + 0.01}&layer=mapnik&marker=${latitude},${longitude}`;
  });
</script>
```

## Privacidad y permisos

- El navegador siempre solicita permiso al usuario antes de compartir la ubicación.
- La API solo funciona en contextos seguros (HTTPS) o localhost.
- El usuario puede revocar el permiso en cualquier momento desde la configuración del navegador.
- No se debe acceder a la geolocalización sin una razón clara y sin informar al usuario.

---

## Ejercicio: mostrar coordenadas en pantalla

Crea el HTML y JavaScript para:

1. Un botón "Obtener ubicación"
2. Al hacer clic, solicitar la ubicación y mostrar latitud y longitud en la página
3. Manejar el caso en que el usuario deniegue el permiso
4. Manejar el caso en que la API no esté disponible

<details>
<summary><strong>Ver solución</strong></summary>

```html
<button id="btn-ubicacion">Obtener ubicación</button>
<p id="resultado"></p>

<script>
  document.getElementById('btn-ubicacion').addEventListener('click', () => {
    const resultado = document.getElementById('resultado');

    if (!('geolocation' in navigator)) {
      resultado.textContent = 'La geolocalización no está disponible en este navegador.';
      return;
    }

    navigator.geolocation.getCurrentPosition(
      posicion => {
        resultado.innerHTML = `
          Latitud: <strong>${posicion.coords.latitude}</strong><br>
          Longitud: <strong>${posicion.coords.longitude}</strong><br>
          Precisión: ±${posicion.coords.accuracy} metros
        `;
      },
      error => {
        if (error.code === error.PERMISSION_DENIED) {
          resultado.textContent = 'Permiso denegado. Activa la geolocalización en la configuración del navegador.';
        } else {
          resultado.textContent = `Error: ${error.message}`;
        }
      }
    );
  });
</script>
```

</details>
