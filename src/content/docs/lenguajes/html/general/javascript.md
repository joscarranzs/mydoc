---
title: JavaScript
description: Script en HTML.
module: lenguajes/html
submodule: general
order: 27
---

Al completar esta guía podrás:

- Insertar JavaScript en HTML con script
- Vincular archivos JS externos
- Usar defer y async para carga óptima
- Ubicar scripts correctamente

---

## Script interno

```html
<script>
  console.log('Hola desde JavaScript');
  alert('Bienvenido');
</script>
```

Se puede colocar en `<head>` o al final de `<body>`.

---

## Script externo

```html
<script src="app.js"></script>
```

```javascript
// app.js
console.log('Hola desde archivo externo');
```

---

## Ubicación recomendada

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>JavaScript en HTML</title>
</head>
<body>
  <h1>Contenido visible</h1>
  <p>El script se carga después del contenido.</p>

  <!-- Script al final del body para no bloquear el render -->
  <script src="app.js"></script>
</body>
</html>
```

---

## defer

El script se descarga en paralelo pero se ejecuta después de parsear el HTML:

```html
<head>
  <script src="app.js" defer></script>
</head>
```

Ventajas:
- No bloquea el renderizado
- Se ejecuta cuando el DOM está listo
- Respeta el orden de carga

---

## async

El script se descarga en paralelo y se ejecuta inmediatamente:

```html
<head>
  <script src="analytics.js" async></script>
</head>
```

Ideal para scripts independientes como analytics.

---

## defer vs async

```html
<!-- defer: ejecuta al final, en orden -->
<script src="lib.js" defer></script>
<script src="app.js" defer></script>

<!-- async: ejecuta cuando termina de descargar -->
<script src="analytics.js" async></script>
<script src="widget.js" async></script>
```

| Comportamiento | defer | async |
|---|---|---|
| Bloquea HTML | No | No |
| Orden de ejecución | Respeta orden | No garantiza orden |
| Momento de ejecución | Después de parsear HTML | Al terminar descarga |

---

## DOMContentLoaded

Ejecutar código cuando el DOM esté listo:

```html
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('h1');
    titulo.style.color = '#1A73E8';
  });
</script>
```

---

## Eventos inline

```html
<button onclick="alert('Clic!')">Pulsar</button>
<input type="text" onchange="console.log(this.value)">
<div onmouseover="this.style.background='yellow'">Pasa el ratón</div>
```

No recomendado para proyectos grandes. Preferir event listeners.

---

## type module

Para usar módulos ES6:

```html
<script type="module">
  import { saludar } from './utils.js';

  saludar('Mundo');
</script>

<script type="module" src="app.js"></script>
```

---

## no script

Contenido alternativo si JavaScript está deshabilitado:

```html
<noscript>
  <p>JavaScript está deshabilitado. Algunas funciones no estarán disponibles.</p>
</noscript>
```

---

## Resumen

| Método | Sintaxis | Cuándo usar |
|---|---|---|
| Interno | `<script> código </script>` | Pequeños scripts |
| Externo | `<script src="...">` | Proyectos grandes |
| defer | `<script defer src="...">` | Scripts que dependen del DOM |
| async | `<script async src="...">` | Scripts independientes |
| module | `<script type="module">` | Código modular moderno |

---

## Ejercicio

Crea una página que cargue un script externo con defer. El script debe cambiar el color del h1 cuando se cargue la página. Incluye también un botón con evento onclick.

**Instrucciones paso a paso:**

1. Crea `index.html` y `script.js`
2. En `script.js`, usa DOMContentLoaded para cambiar el h1
3. En el HTML, vincula script.js con defer
4. Agrega un botón con onclick que muestre un alert

<details>
<summary>Mostrar solución</summary>

```javascript
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const titulo = document.querySelector('h1');
  titulo.style.color = '#1A73E8';
  titulo.style.textAlign = 'center';
  console.log('Script cargado con defer');
});
```

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>JavaScript en HTML</title>
  <script src="script.js" defer></script>
</head>
<body>
  <h1>JavaScript en HTML</h1>
  <p>El título cambió de color gracias al script con defer.</p>

  <button onclick="alert('¡Hola desde onclick!')">
    Pulsar
  </button>
</body>
</html>
```

</details>
