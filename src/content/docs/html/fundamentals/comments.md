---
title: COMENTARIOS
module: html
submodule: fundamentals/comments
---

Los comentarios en HTML permiten incluir notas, documentación o fragmentos desactivados dentro del código fuente sin que el navegador los renderice. Son visibles únicamente al inspeccionar el documento o desde la opción "Ver código fuente".

## Sintaxis

Un comentario HTML se delimita con `<!--` al inicio y `-->` al final. Todo lo que aparece entre estos marcadores es ignorado por el motor de renderizado:

```html
<!-- Este texto no aparece en la página -->

<p>Este párrafo sí es visible.</p>

<!--
  Los comentarios pueden
  abarcar múltiples líneas
  sin problema.
-->
```

Los comentarios no pueden anidarse. El primer `-->` cierra el comentario, lo que hace imposible tener un comentario dentro de otro.

## Usos prácticos

### Documentación de secciones

En documentos extensos, los comentarios ayudan a identificar el propósito de cada bloque sin necesidad de recorrer el árbol DOM:

```html
<!-- ========================================== -->
<!-- HEADER: navegación principal               -->
<!-- ========================================== -->
<header>
  <nav>...</nav>
</header>

<!-- ========================================== -->
<!-- MAIN: contenido del artículo               -->
<!-- ========================================== -->
<main>
  <article>...</article>
</main>

<!-- ========================================== -->
<!-- FOOTER: copyright y enlaces legales         -->
<!-- ========================================== -->
<footer>
  <p>&copy; 2026</p>
</footer>
```

### Depuración y desarrollo

Durante el desarrollo es común comentar bloques completos para aislar problemas o desactivar funcionalidades sin eliminar el código:

```html
<!--
<div class="banner-promocional">
  <p>Oferta válida hasta agotar existencias</p>
</div>
-->
```

Esta técnica es útil durante la depuración, pero no debe llegar a producción. El código comentado incrementa el peso del documento y puede confundir a otros desarrolladores.

### Notas para otros desarrolladores

Los comentarios también comunican decisiones técnicas, advertencias o tareas pendientes:

```html
<!-- TODO: reemplazar placeholder por imagen real cuando el cliente la entregue -->
<img src="placeholder.jpg" alt="Producto">
```

## Comentarios condicionales (Internet Explorer)

Los comentarios condicionales eran una característica propietaria de Internet Explorer que permitía dirigir código específicamente a versiones antiguas del navegador. Aunque IE quedó oficialmente descontinuado en 2022, aún es posible encontrar esta sintaxis en proyectos legacy:

```html
<!--[if IE]>
  <p>Este texto solo lo ve Internet Explorer.</p>
<![endif]-->

<!--[if lt IE 9]>
  <script src="html5shiv.js"></script>
<![endif]-->
```

En proyectos nuevos no deben usarse. El soporte de los navegadores modernos es lo suficientemente consistente como para no necesitar este tipo de parches.

## Lo que no debe ir dentro de un comentario

El estándar HTML prohíbe la secuencia `--` dentro del contenido de un comentario, ya que el analizador la interpreta como parte del cierre `-->`:

```html
<!-- Incorrecto: contiene "--" en medio -->
<!-- El rango de precios es 50--100 USD -->

<!-- Correcto: evitar guiones dobles consecutivos -->
<!-- El rango de precios es 50-100 USD -->
```

Tampoco debe colocarse HTML que el navegador deba interpretar. Los comentarios son exclusivamente para el desarrollador.

---

## Ejercicio: documentar una página con comentarios

Escribe un documento HTML completo que contenga:

1. Un comentario de cabecera con el nombre del proyecto y la fecha
2. Una sección `<main>` comentada temporalmente (simulando que está en desarrollo)
3. Un comentario `TODO` dentro de una sección visible que indique una mejora pendiente
4. Un párrafo visible fuera de todo comentario

<details>
<summary><strong>Ver solución</strong></summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi proyecto</title>
</head>
<body>

  <!-- ========================================== -->
  <!-- Proyecto: Portal de noticias               -->
  <!-- Fecha:    2026-05-30                       -->
  <!-- Autor:    Equipo de desarrollo             -->
  <!-- ========================================== -->

  <!--
  <main>
    <h1>Bienvenido al portal</h1>
    <p>Contenido principal en construcción.</p>
  </main>
  -->

  <p>El sitio está en mantenimiento. Volveremos pronto.</p>

  <!-- TODO: agregar un contador regresivo con la fecha estimada de lanzamiento -->

</body>
</html>
```

</details>
