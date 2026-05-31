---
title: RUTAS
module: html
submodule: fundamentals/file-paths
---

Para enlazar un archivo externo (una imagen, una hoja de estilos, un script o un enlace a otra página) el navegador necesita saber dónde está ese recurso. Las **rutas** son las direcciones que describen esa ubicación, y se clasifican en absolutas y relativas.

## Rutas absolutas

Una ruta absoluta incluye la URL completa del recurso, comenzando por el protocolo (`https://`). Apunta al mismo lugar independientemente de dónde se encuentre el documento actual:

```html
<!-- Ruta absoluta completa -->
<img src="https://cdn.ejemplo.com/imagenes/logo.png" alt="Logo">

<a href="https://ejemplo.com/blog/articulo.html">Artículo</a>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter">
```

Las rutas absolutas son necesarias cuando el recurso está en un dominio diferente. Para recursos propios se prefiere la ruta relativa, salvo en CDNs o servicios externos.

## Rutas relativas

Una ruta relativa se expresa en función de la ubicación del documento actual. El navegador la resuelve concatenándola con la base de la página.

### Mismo directorio

Si el recurso está en la misma carpeta, basta con el nombre del archivo:

```html
<img src="foto.jpg" alt="Foto">
<a href="contacto.html">Contacto</a>
```

### Subdirectorio

Para recursos dentro de una carpeta hija, se escribe el nombre de la carpeta seguido de `/`:

```html
<img src="imagenes/foto.jpg" alt="Foto">
<a href="productos/catalogo.html">Catálogo</a>
```

### Directorio padre

Para salir de la carpeta actual se usa `../`. Cada `../` asciende un nivel en la jerarquía:

```html
<!-- Desde /productos/detalle.html subir a /productos/ -->
<img src="../imagenes/foto.jpg" alt="Foto">

<!-- Desde /productos/detalle.html subir a la raíz -->
<a href="../index.html">Inicio</a>

<!-- Dos niveles arriba -->
<img src="../../recursos/foto.jpg" alt="Foto">
```

## Ruta raíz relativa

Una alternativa que comienza con `/` y referencia la raíz del sitio (el directorio donde está `index.html`):

```html
<link rel="stylesheet" href="/css/estilos.css">
<img src="/imagenes/foto.jpg" alt="Foto">
<a href="/blog/">Blog</a>
```

Respecto a las rutas relativas convencionales:

- Son más predecibles: no importa desde qué página se enlacen, siempre apuntan al mismo lugar.
- Funcionan mal en entornos sin servidor (por ejemplo, abrir `index.html` directamente desde el sistema de archivos) porque el navegador interpreta `/` como la raíz del disco, no del sitio.
- Son ideales en proyectos servidos con un servidor web o desplegados en producción.

## Buenas prácticas

- **Usar siempre minúsculas** en los nombres de archivos y directorios. El sistema de archivos puede ser _case-sensitive_ en servidores Linux, y `Foto.jpg` y `foto.jpg` son archivos distintos.
- **Sin espacios en los nombres.** `mi archivo.html` debe escribirse como `mi-archivo.html` o `mi_archivo.html`. Los espacios se codifican como `%20`, lo que hace la URL menos legible.
- **Convención de nombres**: guiones (`-`) para separar palabras. Es el estándar adoptado por la mayoría de proyectos y frameworks.
- **Incluir la extensión** del archivo en los enlaces para evitar ambigüedades.

## Resolución práctica de rutas

Dada la siguiente estructura:

```
/ (raíz del sitio)
├── index.html
├── css/
│   └── estilos.css
├── imagenes/
│   ├── logo.png
│   └── galeria/
│       └── foto1.jpg
└── productos/
    ├── index.html
    └── detalle.html
```

| Desde | Para enlazar | Ruta |
|-------|-------------|------|
| `/index.html` | `estilos.css` | `css/estilos.css` |
| `/index.html` | `logo.png` | `imagenes/logo.png` |
| `/index.html` | `foto1.jpg` | `imagenes/galeria/foto1.jpg` |
| `/index.html` | `productos/detalle.html` | `productos/detalle.html` |
| `/productos/detalle.html` | `estilos.css` | `../css/estilos.css` |
| `/productos/detalle.html` | `logo.png` | `../imagenes/logo.png` |
| `/productos/detalle.html` | `foto1.jpg` | `../imagenes/galeria/foto1.jpg` |
| `/productos/detalle.html` | `index.html` (raíz) | `../index.html` |

---

## Ejercicio: construir la ruta correcta

Dada la estructura de archivos del ejemplo anterior, escribe el HTML necesario para:

1. Desde `productos/detalle.html`, enlazar el archivo CSS `css/estilos.css`
2. Desde `productos/detalle.html`, mostrar la imagen `imagenes/logo.png`
3. Desde `productos/detalle.html`, enlazar a `productos/index.html` (mismo directorio)
4. Desde `index.html` (raíz), mostrar la imagen `imagenes/galeria/foto1.jpg`

<details>
<summary><strong>Ver solución</strong></summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejercicio de rutas</title>
  <link rel="stylesheet" href="../css/estilos.css">
</head>
<body>

  <h1>Productos</h1>

  <img src="../imagenes/logo.png" alt="Logotipo">

  <a href="index.html">Volver a productos</a>

  <hr>

  <p>Foto de la galería (desde la raíz):</p>
  <img src="imagenes/galeria/foto1.jpg" alt="Foto de galería">

</body>
</html>
```

</details>
