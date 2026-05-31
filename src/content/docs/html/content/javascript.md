---
title: JAVASCRIPT
module: html
submodule: content/javascript
---

El elemento `<script>` permite incluir o enlazar código JavaScript en un documento HTML. Junto con `<noscript>`, proporciona el mecanismo para añadir interactividad y contenido alternativo cuando el scripting no está disponible.

```html
<script>
  console.log('JavaScript embebido directamente en el HTML');
</script>

<script src="js/app.js"></script>
```

## Scripts embebidos vs. externos

**Script embebido**: el código se escribe directamente dentro de la etiqueta `<script>`:

```html
<script>
  document.addEventListener('DOMContentLoaded', () => {
    console.log('La página está lista');
  });
</script>
```

**Script externo**: se referencia un archivo `.js` mediante el atributo `src`. Esta es la práctica recomendada para proyectos medianos y grandes, ya que separa la lógica del marcado y permite el caché del navegador:

```html
<script src="js/main.js"></script>
```

Los scripts externos pueden cargarse desde cualquier origen:

```html
<script src="https://cdn.jsdelivr.net/npm/confetti-js@1/dist/index.min.js"></script>
```

## Posicionamiento en el documento

Tradicionalmente los scripts se colocaban en el `<head>`, pero esto bloquea el renderizado del contenido. La práctica moderna es colocarlos al final del `<body>`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Página con scripts</title>
</head>
<body>
  <!-- Contenido visible -->

  <script src="js/app.js"></script>
</body>
</html>
```

## Atributos que controlan la carga

| Atributo | Comportamiento |
|----------|---------------|
| `async` | Descarga en paralelo y ejecuta tan pronto como esté disponible (no espera al DOM) |
| `defer` | Descarga en paralelo pero ejecuta después de parsear el HTML, en orden de aparición |
| `type="module"` | Trata el script como un módulo ES6 (tiene `defer` implícito) |
| `nomodule` | Script que solo se ejecuta en navegadores que NO soportan módulos |

### `async` vs. `defer`

```html
<!-- async: ejecuta en cuanto termina la descarga -->
<script src="analytics.js" async></script>

<!-- defer: ejecuta después de parsear el HTML, en orden -->
<script src="app.js" defer></script>
<script src="ui.js" defer></script>

<!-- module: defer implícito, permite import/export -->
<script type="module" src="main.js"></script>

<!-- fallback para navegadores antiguos -->
<script nomodule src="polyfill.js"></script>
```

La regla general: `defer` para scripts que dependen del DOM o de otros scripts; `async` para scripts independientes como analytics.

## `<noscript>`

Muestra contenido alternativo cuando JavaScript está deshabilitado o no es soportado:

```html
<noscript>
  <p>JavaScript está desactivado en tu navegador. Actívalo para disfrutar de la experiencia completa.</p>
</noscript>
```

También puede cargar recursos alternativos:

```html
<noscript>
  <link rel="stylesheet" href="css/sin-js.css">
  <meta http-equiv="refresh" content="0; url=/sin-javascript">
</noscript>
```

---

## Ejercicio: carga diferida de scripts

Dados tres scripts con las siguientes características, escribe las etiquetas `<script>` adecuadas:

1. `analytics.js` — independiente, debe ejecutarse lo antes posible
2. `app.js` — depende del DOM completo
3. `components.js` — módulo ES6 con imports

<details>
<summary><strong>Ver solución</strong></summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Carga diferida de scripts</title>
</head>
<body>

  <h1>Contenido visible antes de los scripts</h1>
  <p>El contenido se renderiza sin bloqueo.</p>

  <!-- async: se ejecuta ni bien termina la descarga -->
  <script src="analytics.js" async></script>

  <!-- defer: espera al DOM completo -->
  <script src="app.js" defer></script>

  <!-- module: defer implícito -->
  <script type="module" src="components.js"></script>
</body>
</html>
```

</details>
