---
title: IFRAMES
module: html
submodule: content/iframes
---

El elemento `<iframe>` (inline frame) inserta otro documento HTML dentro de la página actual. Es el mecanismo estándar para embeber contenido de terceros: videos de YouTube, mapas de Google, widgets de redes sociales o aplicaciones completas.

```html
<iframe src="https://www.youtube.com/embed/abc123" title="Video tutorial">
</iframe>
```

## Atributos esenciales

| Atributo | Propósito |
|----------|-----------|
| `src` | URL del documento a embeber |
| `title` | Descripción accesible del contenido del iframe (obligatorio para accesibilidad) |
| `width` | Ancho del iframe en píxeles |
| `height` | Alto del iframe en píxeles |
| `allow` | Permisos para APIs del navegador (cámara, micrófono, geolocalización) |
| `sandbox` | Restricciones de seguridad para el contenido embebido |
| `loading` | `lazy` para carga diferida, `eager` para carga inmediata |
| `srcdoc` | Contenido HTML inline en lugar de `src` |

```html
<iframe
  src="https://www.openstreetmap.org/export/embed.html?bbox=-99.1"
  title="Mapa de ubicación"
  width="600"
  height="450"
  loading="lazy"
  allow="geolocation"
>
</iframe>
```

## Seguridad con `sandbox`

El atributo `sandbox` sin valor aplica todas las restricciones disponibles. Los valores permiten habilitar selectivamente funcionalidades:

| Valor | Permite |
|-------|---------|
| (sin valor) | Todas las restricciones activadas |
| `allow-scripts` | Ejecutar JavaScript |
| `allow-same-origin` | Acceder al DOM del mismo origen |
| `allow-forms` | Enviar formularios |
| `allow-popups` | Abrir ventanas emergentes |
| `allow-modals` | Mostrar alertas, confirmaciones |
| `allow-presentation` | Iniciar una presentación |
| `allow-top-navigation` | Navegar el documento padre |

```html
<!-- Máxima seguridad: sin permisos -->
<iframe src="https://tercero.com" sandbox title="Widget sin permisos">
</iframe>

<!-- Permite scripts pero mantiene aislamiento -->
<iframe src="https://analytics.com" sandbox="allow-scripts" title="Analytics">
</iframe>
```

## Contenido alternativo (fallback)

El texto entre la etiqueta de apertura y cierre de `<iframe>` se muestra si el navegador no soporta iframes o no puede cargar el recurso:

```html
<iframe src="https://ejemplo.com" title="Contenido externo">
  <p>Tu navegador no soporta iframes. Visita <a href="https://ejemplo.com">ejemplo.com</a> directamente.</p>
</iframe>
```

## Consideraciones de rendimiento

- Los iframes cargan un documento completo, incluyendo sus propios scripts, estilos y recursos. Cada iframe añade latencia y consumo de memoria.
- Usar `loading="lazy"` en iframes que no están en el viewport inicial.
- Preferir siempre APIs nativas sobre iframes cuando sea posible (por ejemplo, `<video>` en lugar de un iframe de YouTube).

## Atributo `allow` para APIs

El atributo `allow` especifica qué políticas de permisos se aplican:

```html
<iframe
  src="https://app.videoconferencia.com"
  allow="camera 'src'; microphone 'src'; display-capture 'src'"
  title="Video llamada"
>
</iframe>
```

---

## Ejercicio: embeber contenido con seguridad

Crea un iframe para embeber un video de YouTube que incluya:

1. URL del video embebido (`https://www.youtube.com/embed/dQw4w9WgXcQ`)
2. Atributo `title` descriptivo
3. Dimensiones 560x315
4. `loading="lazy"`
5. Atributo `sandbox` que solo permita scripts y navegación por top

<details>
<summary><strong>Ver solución</strong></summary>

```html
<iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="Video tutorial: introducción a HTML"
  width="560"
  height="315"
  loading="lazy"
  sandbox="allow-scripts allow-top-navigation"
>
  <p>Tu navegador no soporta iframes. Ve el video en <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">YouTube</a>.</p>
</iframe>
```

</details>
