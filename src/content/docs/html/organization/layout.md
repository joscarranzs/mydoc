---
title: DISEÑO (LAYOUT)
module: html
submodule: organization/layout
---

El layout de una página web define cómo se distribuyen y posicionan los elementos dentro del viewport. Aunque el diseño visual se controla con CSS, la estructura HTML proporciona el esqueleto sobre el que se aplica.

## Estructura semántica de un layout típico

```html
<body>
  <header>
    <nav>Navegación</nav>
  </header>

  <main>
    <article>
      <section>Contenido principal</section>
    </article>
    <aside>Barra lateral</aside>
  </main>

  <footer>
    <p>Copyright y enlaces</p>
  </footer>
</body>
```

Esta estructura es reconocible por cualquier navegador y tecnología de asistencia. Los lectores de pantalla pueden saltar directamente a `<main>`, y los motores de búsqueda identifican `<nav>` como navegación.

## Patrones de layout comunes

### Layout de una columna (centrado)

```html
<body>
  <header class="cabecera">...</header>
  <main class="contenido">...</main>
  <footer class="pie">...</footer>
</body>
```

```css
.contenido { max-width: 800px; margin: 0 auto; }
```

### Layout de dos columnas (sidebar)

```html
<main>
  <article class="principal">...</article>
  <aside class="sidebar">...</aside>
</main>
```

```css
main { display: flex; gap: 2rem; }
.principal { flex: 2; }
.sidebar { flex: 1; }
```

### Layout de tres columnas (grid)

```html
<div class="grid-tres-columnas">
  <div class="col-izquierda">...</div>
  <div class="col-centro">...</div>
  <div class="col-derecha">...</div>
</div>
```

```css
.grid-tres-columnas {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1.5rem;
}
```

## El elemento `<main>` como centro del layout

`<main>` debe contener el contenido único de la página. Solo puede haber un `<main>` por documento. No debe estar dentro de `<article>`, `<aside>`, `<header>`, `<footer>` ni `<nav>`.

```html
<!-- Correcto -->
<body>
  <header>...</header>
  <main>
    <h1>Contenido principal</h1>
    <p>...</p>
  </main>
  <footer>...</footer>
</body>

<!-- Incorrecto: main dentro de otro elemento -->
<article>
  <main>...</main>
</article>
```

## El elemento `<div>` como contenedor de layout

Aunque los elementos semánticos definen la arquitectura, los `<div>` son necesarios para crear capas de layout puramente visuales:

```html
<main>
  <div class="grid-2-columnas">
    <section class="columna">
      <h2>Noticias</h2>
      <!-- contenido -->
    </section>
    <section class="columna">
      <h2>Eventos</h2>
      <!-- contenido -->
    </section>
  </div>
</main>
```

---

## Ejercicio: layout de un dashboard

Crea la estructura HTML para un dashboard de administración con:

1. `<header>` con un `<nav>` de navegación superior
2. `<main>` que contenga un `<div>` con dos columnas (grid-2-columnas)
3. Columna izquierda: un `<section>` para "Resumen de ventas"
4. Columna derecha: un `<section>` para "Actividad reciente"
5. `<footer>` con copyright

<details>
<summary><strong>Ver solución</strong></summary>

```html
<body>
  <header>
    <nav>
      <a href="/dashboard">Dashboard</a>
      <a href="/ventas">Ventas</a>
      <a href="/usuarios">Usuarios</a>
      <a href="/configuracion">Configuración</a>
    </nav>
  </header>

  <main>
    <div class="grid-2-columnas">
      <section>
        <h2>Resumen de ventas</h2>
        <p>Ventas del día: $12,450</p>
        <p>Ventas del mes: $124,500</p>
      </section>

      <section>
        <h2>Actividad reciente</h2>
        <ul>
          <li>Nuevo usuario registrado</li>
          <li>Pedido #1042 completado</li>
          <li>Pago recibido de Cliente X</li>
        </ul>
      </section>
    </div>
  </main>

  <footer>
    <p>&copy; 2026 - Dashboard Admin</p>
  </footer>
</body>
```

</details>
