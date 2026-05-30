---
title: Rutas de archivos
description: Rutas absolutas y relativas.
module: lenguajes/html
submodule: general
order: 28
---

Al completar esta guía podrás:

- Escribir rutas absolutas y relativas
- Usar /, ./ y ../ correctamente
- Resolver conflictos de rutas
- Organizar archivos para evitar rutas rotas

---

## Ruta absoluta

URL completa desde el protocolo:

```html
<img src="https://ejemplo.com/imagenes/foto.jpg" alt="Foto">
<a href="https://ejemplo.com/pagina.html">Enlace</a>
```

Siempre funciona, pero cambia si cambia el dominio.

---

## Ruta relativa desde la raíz

Empieza con `/` y va desde la raíz del sitio:

```html
<!-- Sitio: https://midominio.com -->

<!-- / siempre apunta a la raíz -->
<img src="/imagenes/logo.png" alt="Logo">
<a href="/productos/">Productos</a>
<a href="/blog/articulo.html">Artículo</a>
```

---

## Ruta relativa desde el archivo actual

```html
<!-- Estructura de archivos:
  /
  ├── index.html
  ├── imagenes/
  │   └── logo.png
  └── secciones/
      ├── contacto.html
      └── sub/
          └── detalle.html
-->

<!-- Desde index.html -->
<img src="imagenes/logo.png">       <!-- ./ es opcional -->
<a href="secciones/contacto.html">

<!-- Desde contacto.html (subcarpeta) -->
<img src="../imagenes/logo.png">    <!-- ../ sube un nivel -->
<a href="../index.html">

<!-- Desde detalle.html (sub/sub) -->
<img src="../../imagenes/logo.png">  <!-- ../../ sube dos niveles -->
```

---

## ./ (misma carpeta)

Explícitamente indica la carpeta actual:

```html
<!-- ./ es opcional, ambas son equivalentes -->
<img src="logo.png">
<img src="./logo.png">
```

---

## ../ (carpeta padre)

Sube un nivel en la jerarquía:

```html
<!-- Estructura:
  proyecto/
  ├── index.html
  ├── css/
  │   └── estilos.css
  └── paginas/
      └── acerca.html
-->

<!-- Desde acerca.html: ../ sube a proyecto/ -->
<link rel="stylesheet" href="../css/estilos.css">
<a href="../index.html">Volver al inicio</a>
```

---

## ../../ (dos niveles arriba)

```html
<!-- Estructura:
  sitio/
  ├── index.html
  └── blog/
      └── 2024/
          └── articulo.html
-->

<!-- Desde articulo.html -->
<a href="../../index.html">Inicio</a>
<!-- ../../ sube: blog/2024/ → blog/ → sitio/ -->
```

---

## Organización recomendada

```
mi-sitio/
├── index.html
├── css/
│   └── estilos.css
├── js/
│   └── app.js
├── imagenes/
│   ├── logo.png
│   └── fotos/
│       └── viaje.jpg
└── paginas/
    ├── contacto.html
    └── blog/
        ├── index.html
        └── posts/
            └── primer-post.html
```

---

## Errores comunes

```html
<!-- Error: falta ../ -->
<!-- Desde /secciones/contacto.html -->
<img src="imagenes/logo.png">
<!-- Busca en /secciones/imagenes/logo.png (no existe) -->

<!-- Correcto -->
<img src="../imagenes/logo.png">
<!-- Busca en /imagenes/logo.png -->
```

---

## Resumen

| Ruta | Ejemplo | Significado |
|---|---|---|
| Absoluta | `https://site.com/img.jpg` | URL completa |
| Desde raíz | `/img/foto.jpg` | Desde la raíz del sitio |
| Relativa | `img/foto.jpg` | Desde la carpeta actual |
| Misma carpeta | `./foto.jpg` | Carpeta actual explícita |
| Padre | `../foto.jpg` | Subir un nivel |
| Dos niveles | `../../foto.jpg` | Subir dos niveles |

---

## Ejercicio

Dibuja una estructura de carpetas y crea un archivo HTML que enlace a: una imagen desde la raíz, un CSS desde subcarpeta con ../, y un enlace absoluto a Google.

**Instrucciones paso a paso:**

1. Crea la estructura: `/index.html`, `/css/estilos.css`, `/imagenes/logo.png`, `/paginas/acerca.html`
2. En `index.html`, enlaza estilos.css desde css/
3. En `acerca.html`, enlaza estilos.css con ../css/estilos.css
4. En ambos, enlaza logo.png con ruta desde raíz

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Rutas de archivos</title>
  <link rel="stylesheet" href="/css/estilos.css">
</head>
<body>
  <h1>Rutas de archivos</h1>

  <!-- Ruta desde la raíz -->
  <img src="/imagenes/logo.png" alt="Logo" width="100">

  <!-- Ruta absoluta -->
  <a href="https://www.google.com">Google</a>

  <!-- Ruta relativa a otra página -->
  <a href="paginas/acerca.html">Acerca de</a>

  <h2>Estructura de carpetas</h2>
  <pre>
    /
    ├── index.html         ← estás aquí
    ├── css/
    │   └── estilos.css
    ├── imagenes/
    │   └── logo.png
    └── paginas/
        └── acerca.html
  </pre>
</body>
</html>
```

```html
<!-- paginas/acerca.html -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Acerca de</title>
  <link rel="stylesheet" href="../css/estilos.css">
</head>
<body>
  <h1>Acerca de</h1>
  <img src="/imagenes/logo.png" alt="Logo" width="100">
  <a href="../index.html">Volver al inicio</a>
</body>
</html>
```

</details>
