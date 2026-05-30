---
title: Encabezados
description: h1 a h6.
module: lenguajes/html
submodule: general
order: 7
---

Al completar esta guía podrás:

- Usar las etiquetas de encabezado h1 a h6
- Jerarquizar correctamente el contenido
- Entender la importancia SEO de los encabezados
- Aplicar buenas prácticas de accesibilidad

---

## Jerarquía de encabezados

HTML ofrece seis niveles de encabezados, de mayor a menor importancia. La jerarquía no es solo visual: también ayuda a organizar el contenido para lectores de pantalla y motores de búsqueda.

```html
<h1>Encabezado nivel 1 — Título principal</h1>
<h2>Encabezado nivel 2 — Sección</h2>
<h3>Encabezado nivel 3 — Subsección</h3>
<h4>Encabezado nivel 4 — Detalle</h4>
<h5>Encabezado nivel 5 — Subdetalle</h5>
<h6>Encabezado nivel 6 — Mínimo</h6>
```

---

## Uso correcto de h1

Solo debe haber un `<h1>` por página. Debe representar el tema central del documento, igual que el título de un libro o el encabezado principal de un artículo.

```html
<body>
  <h1>Guía completa de HTML</h1>

  <h2>Qué es HTML</h2>
  <p>HTML es un lenguaje de marcado...</p>

  <h2>Historia</h2>
  <p>HTML fue creado en 1991...</p>

  <h3>HTML 1.0</h3>
  <p>Primera versión...</p>
</body>
```

---

## SEO y accesibilidad

Los encabezados son importantes para motores de búsqueda y lectores de pantalla. Una secuencia lógica permite entender rápidamente la estructura del contenido.

```html
<!-- Bien: jerarquía lógica -->
<h1>Título del artículo</h1>
  <h2>Introducción</h2>
  <h2>Contenido principal</h2>
    <h3>Subtema 1</h3>
    <h3>Subtema 2</h3>
  <h2>Conclusión</h2>

<!-- Mal: saltos de nivel -->
<h1>Título</h1>
  <h4>Detalle</h4>   <!-- Error: falta h2 y h3 -->
  <h6>Más detalle</h6>  <!-- Error: falta h5 -->

<!-- Mal: múltiples h1 -->
<h1>Sección 1</h1>
<h1>Sección 2</h1>
```

Cuando saltas niveles sin motivo, el documento sigue funcionando, pero pierde claridad. Eso afecta tanto la navegación por teclado como la lectura automática del contenido.

---

## Tamaños por defecto

Cada nivel tiene un tamaño de fuente predeterminado, pero no debes usar encabezados solo por tamaño. Su función principal es semántica, no visual.

```html
<h1 style="font-size: 2em;">h1 — 2em</h1>
<h2 style="font-size: 1.5em;">h2 — 1.5em</h2>
<h3 style="font-size: 1.17em;">h3 — 1.17em</h3>
<h4 style="font-size: 1em;">h4 — 1em</h4>
<h5 style="font-size: 0.83em;">h5 — 0.83em</h5>
<h6 style="font-size: 0.67em;">h6 — 0.67em</h6>
```

Estos tamaños se personalizan con CSS, pero la jerarquía del documento debe mantenerse.

---

## Encabezados con enlaces

Los encabezados también pueden contener enlaces, por ejemplo en índices o tablas de contenido:

```html
<h2>
  <a href="#seccion">Ir a sección</a>
</h2>

<h2 id="seccion">Sección destino</h2>
```

---

## Resumen

| Etiqueta | Uso | SEO |
|---|---|---|
| `<h1>` | Título principal | Máxima importancia, solo uno por página |
| `<h2>` | Título de sección | Importante |
| `<h3>` | Título de subsección | Media |
| `<h4>` a `<h6>` | Detalles | Menor |

---

## Ejercicio

Crea una página con un h1, dos h2 y un h3 como subsección del segundo h2.

**Instrucciones paso a paso:**

1. Crea `encabezados.html`
2. Agrega `<h1>` con el título principal
3. Agrega dos `<h2>` para secciones
4. Agrega un `<h3>` debajo del segundo `<h2>`
5. Agrega texto descriptivo debajo de cada encabezado

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Encabezados HTML</title>
</head>
<body>
  <h1>Guía de encabezados HTML</h1>
  <p>Aprende a usar correctamente los encabezados.</p>

  <h2>Jerarquía</h2>
  <p>Los encabezados organizan el contenido por niveles.</p>

  <h2>Buenas prácticas</h2>
  <p>Usa un solo h1 por página y no saltes niveles.</p>

  <h3>Accesibilidad</h3>
  <p>Los lectores de pantalla usan los encabezados para navegar.</p>
</body>
</html>
```

</details>
