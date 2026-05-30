---
title: Id
description: El atributo id.
module: lenguajes/html
submodule: general
order: 24
---

Al completar esta guía podrás:

- Usar el atributo id para identificar elementos
- Enlazar a secciones con id
- Usar id con JavaScript
- Diferenciar id de class

---

## Sintaxis

El atributo `id` asigna un identificador único a un elemento:

```html
<p id="introduccion">Este es el primer párrafo de la introducción.</p>
```

En CSS se selecciona con `#`:

```css
#introduccion {
  font-size: 20px;
  color: #333;
}
```

---

## Unicidad

Cada id debe ser único en la página. No puede haber dos elementos con el mismo id:

```html
<!-- Correcto: cada id es único -->
<div id="cabecera">Cabecera</div>
<div id="contenido">Contenido</div>
<div id="pie">Pie</div>

<!-- Incorrecto: id duplicado -->
<div id="principal">...</div>
<div id="principal">...</div>
```

---

## id vs class

| Característica | id | class |
|---|---|---|
| Unicidad | Único por página | Puede repetirse |
| CSS selector | `#nombre` | `.nombre` |
| Especificidad | Alta | Baja |
| JavaScript | `getElementById` | `getElementsByClassName` |
| Anclas | `href="#id"` | No |
| Usos | Elemento único, anclas | Estilos reutilizables |

---

## Anclas internas

El uso más común de id: navegar a secciones de la página:

```html
<nav>
  <a href="#inicio">Inicio</a>
  <a href="#servicios">Servicios</a>
  <a href="#contacto">Contacto</a>
</nav>

<section id="inicio">
  <h2>Inicio</h2>
  <p>Sección de inicio...</p>
</section>

<section id="servicios">
  <h2>Servicios</h2>
  <p>Sección de servicios...</p>
</section>

<section id="contacto">
  <h2>Contacto</h2>
  <p>Sección de contacto...</p>
</section>
```

---

## id con JavaScript

Seleccionar un elemento por id para manipularlo:

```html
<p id="mensaje">Texto original</p>
<button onclick="cambiarTexto()">Cambiar texto</button>

<script>
  function cambiarTexto() {
    const elemento = document.getElementById('mensaje');
    elemento.textContent = 'Texto modificado';
    elemento.style.color = 'red';
  }
</script>
```

---

## id para formularios

El atributo `for` de `<label>` se vincula con el id del `<input>`:

```html
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre">

<label for="email">Correo:</label>
<input type="email" id="email" name="email">

<label for="pais">País:</label>
<select id="pais" name="pais">
  <option value="es">España</option>
  <option value="mx">México</option>
</select>
```

---

## id en URLs

Se puede enlazar a un id desde otra página:

```html
<!-- Desde otra página -->
<a href="pagina.html#seccion">
  Ir a sección en otra página
</a>

<!-- Desde la misma página (scroll suave) -->
<style>
  html {
    scroll-behavior: smooth;
  }
</style>
```

---

## Fragmentos de URL

El id aparece en la barra de direcciones:

```
https://ejemplo.com/pagina.html#contacto
```

Útil para compartir enlaces directos a secciones específicas.

---

## Resumen

| Aspecto | Descripción |
|---|---|
| Sintaxis | `id="nombre"` |
| Unicidad | Obligatoria: un id por página |
| CSS | `#nombre { estilos }` |
| JavaScript | `document.getElementById('nombre')` |
| Anclas | `<a href="#nombre">` |
| Formularios | `<label for="nombre">` |

---

## Ejercicio

Crea una página con tres secciones identificadas por id. Agrega un menú de navegación que enlace a cada sección usando anclas internas. Incluye un botón que cambie el texto de un elemento por su id usando JavaScript.

**Instrucciones paso a paso:**

1. Crea `id.html`
2. Agrega un nav con enlaces a tres secciones usando href="#id"
3. Crea tres secciones con id únicos
4. Agrega un botón que use getElementById para cambiar texto

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Atributo id</title>
  <style>
    html { scroll-behavior: smooth; }
    nav { background: #e8f0fe; padding: 16px; margin-bottom: 20px; }
    nav a { margin-right: 16px; color: #1A73E8; text-decoration: none; }
    section {
      padding: 40px 20px;
      margin-bottom: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      min-height: 200px;
    }
    #inicio { background: #f0f8ff; }
    #servicios { background: #f5f5f5; }
    #contacto { background: #fff8e1; }
  </style>
</head>
<body>
  <nav>
    <a href="#inicio">Inicio</a>
    <a href="#servicios">Servicios</a>
    <a href="#contacto">Contacto</a>
  </nav>

  <section id="inicio">
    <h2>Inicio</h2>
    <p>Bienvenido a nuestra página.</p>
  </section>

  <section id="servicios">
    <h2>Servicios</h2>
    <p>Ofrecemos soluciones web.</p>
  </section>

  <section id="contacto">
    <h2>Contacto</h2>
    <p id="info-contacto">Contáctanos por correo.</p>
    <button onclick="actualizarContacto()">Actualizar info</button>
  </section>

  <script>
    function actualizarContacto() {
      const info = document.getElementById('info-contacto');
      info.textContent = 'Escríbenos a: hola@ejemplo.com';
      info.style.color = '#1A73E8';
      info.style.fontWeight = 'bold';
    }
  </script>
</body>
</html>
```

</details>
