---
title: Iframes
description: Incrustar contenido externo.
module: lenguajes/html
submodule: general
order: 26
---

Al completar esta guía podrás:

- Incrustar páginas externas con iframe
- Configurar dimensiones y atributos de seguridad
- Incrustar YouTube, Google Maps y otros servicios
- Aplicar buenas prácticas de seguridad

---

## Sintaxis

`<iframe>` inserta otra página o documento dentro de la página actual. Es útil, pero debe usarse con cuidado porque introduce contenido externo.

```html
<iframe src="https://ejemplo.com" title="Descripción">
  Tu navegador no soporta iframes.
</iframe>
```

El contenido entre las etiquetas se muestra si el navegador no soporta iframes.

---

## Atributos básicos

Siempre añade `title` para describir el contenido incrustado. Eso ayuda a accesibilidad y a entender el iframe sin verlo:

```html
<iframe
  src="https://ejemplo.com"
  title="Ejemplo"
  width="800"
  height="600"
>
</iframe>
```

---

## Seguridad

Los iframes pueden ejecutar contenido ajeno, así que conviene limitar permisos cuando sea posible:

```html
<!-- allow: permisos específicos -->
<iframe
  src="https://ejemplo.com"
  allow="geolocation; microphone; camera"
>
</iframe>

<!-- sandbox: restringe capacidades -->
<iframe
  src="https://ejemplo.com"
  sandbox="allow-scripts allow-same-origin"
>
</iframe>
```

Valores de `sandbox`:
- `allow-scripts`: permite JavaScript
- `allow-same-origin`: trata como mismo origen
- `allow-forms`: permite formularios
- `allow-popups`: permite ventanas emergentes
- Vacío (`sandbox`): todas las restricciones activas

---

## srcdoc

Contenido HTML directo sin archivo externo. Es útil para ejemplos cortos o contenido generado dinámicamente:

```html
<iframe
  srcdoc="<h2>Hola desde iframe</h2><p>Contenido inline.</p>"
  title="Contenido inline"
>
</iframe>
```

---

## YouTube

Los servicios como YouTube suelen ofrecer código de embed listo para pegar. Solo revisa dimensiones y permisos:

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video de YouTube"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
>
</iframe>
```

---

## Google Maps

Google Maps también se incrusta con iframe. Suele usarse en páginas de contacto:

```html
<iframe
  width="600"
  height="450"
  src="https://www.google.com/maps/embed?pb=!1m18..."
  title="Ubicación en Google Maps"
  allowfullscreen
  loading="lazy"
>
</iframe>
```

---

## loading lazy

`loading="lazy"` retrasa la carga hasta que el iframe se acerca al viewport, mejorando el rendimiento inicial:

```html
<!-- Carga el iframe solo cuando está cerca del viewport -->
<iframe
  src="https://ejemplo.com"
  loading="lazy"
  title="Carga diferida"
>
</iframe>
```

---

## name como destino

El atributo `name` permite usar el iframe como destino de un enlace. Esto evita recargar toda la página cuando solo quieres cambiar una vista integrada:

```html
<iframe name="visor" width="800" height="400"></iframe>

<p>
  <a href="https://ejemplo.com" target="visor">Cargar ejemplo</a>
  <a href="https://wikipedia.org" target="visor">Cargar Wikipedia</a>
</p>
```

---

## Resumen

Usa iframes con moderación. Son útiles para incrustar contenido, pero añaden complejidad y potenciales riesgos de seguridad.

| Atributo | Propósito |
|---|---|
| `src` | URL del contenido |
| `srcdoc` | HTML inline |
| `width` / `height` | Dimensiones |
| `sandbox` | Restricciones de seguridad |
| `allow` | Permisos específicos |
| `loading` | lazy o eager |
| `name` | Destino para enlaces |

---

## Ejercicio

Crea una página con un video de YouTube incrustado (usando embed), un iframe con srcdoc mostrando HTML personalizado, y un enlace que cargue una página en un iframe con name.

**Instrucciones paso a paso:**

1. Crea `iframes.html`
2. Incrusta un video de YouTube con iframe
3. Crea un iframe con srcdoc y contenido HTML propio
4. Crea un iframe con name y enlaces que carguen ahí

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Iframes</title>
</head>
<body>
  <h1>Iframes</h1>

  <h2>Video de YouTube</h2>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="Video de ejemplo"
    allowfullscreen
  >
  </iframe>

  <h2>Contenido inline con srcdoc</h2>
  <iframe
    srcdoc="
      <h2 style='color:#1A73E8;'>Hola desde iframe</h2>
      <p>Este contenido se escribe directamente en el atributo srcdoc.</p>
      <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
      </ul>
    "
    title="Contenido inline"
    width="400"
    height="200"
  >
  </iframe>

  <h2>Iframe como destino</h2>
  <p>
    <a href="https://es.wikipedia.org/wiki/HTML" target="visor">
      Cargar Wikipedia HTML
    </a>
    |
    <a href="https://es.wikipedia.org/wiki/CSS" target="visor">
      Cargar Wikipedia CSS
    </a>
  </p>
  <iframe name="visor" width="800" height="400"></iframe>
</body>
</html>
```

</details>
