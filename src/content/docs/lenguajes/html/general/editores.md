---
title: Editores
description: Editores de código recomendados.
module: lenguajes/html
submodule: general
order: 3
---

Al completar esta guía podrás:

- Elegir un editor de código para HTML
- Configurar extensiones útiles
- Usar atajos básicos de productividad
- Escribir HTML eficientemente con Emmet

---

## Editores recomendados

Un editor de código es el programa donde escribes tu HTML. A diferencia de un procesador de texto (como Word), los editores de código muestran el texto sin formato y resaltan la sintaxis para que veas fácilmente errores.

| Editor | Tipo | Ideal para |
|---|---|---|
| VS Code | Gratuito, multiplataforma | Principiantes y profesionales |
| Sublime Text | De pago, rápido | Proyectos grandes que requieren velocidad |
| WebStorm | De pago, completo | Desarrollo profesional con soporte avanzado |
| Vim / Neovim | Gratuito, terminal | Usuarios avanzados que prefieren el teclado |
| Brackets | Gratuito, Adobe | Diseñadores web con previsualización en vivo |

La recomendación para empezar es **VS Code**: es gratuito, tiene soporte nativo para HTML, y miles de extensiones que facilitan el desarrollo.

---

## VS Code

El editor más popular para desarrollo web. Es gratuito, multiplataforma (Windows, Mac, Linux) y tiene una comunidad enorme de extensiones.

```bash
# Descargar: https://code.visualstudio.com

# Abrir desde terminal
code .           # Abrir carpeta actual en VS Code
code index.html  # Abrir archivo específico
```

### Extensiones recomendadas

- **Live Server** — Recarga automáticamente el navegador cada vez que guardas un archivo. Sin esto, tendrías que refrescar manualmente cada vez que hagas un cambio.
- **Prettier** — Formatea tu código automáticamente al guardar. Mantiene la indentación consistente y el código legible.
- **HTML CSS Support** — Te sugiere clases CSS mientras escribes atributos `class` en HTML.
- **HTML Snippets** — Fragmentos de código predefinidos que se expanden con TAB.

---

## Emmet

Emmet es una herramienta integrada en VS Code que permite escribir HTML rápidamente usando abreviaturas. En vez de escribir cada etiqueta manualmente, escribes una abreviatura y presionas TAB.

### Estructura básica

```html
<!-- Escribe:  ! + TAB  para generar la estructura básica -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
</body>
</html>
```

### Listas anidadas

```html
<!-- Escribe:  ul>li*3>a  + TAB -->
<!-- El > indica anidamiento, *3 repite 3 veces -->
<ul>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
</ul>
```

### Clases y contenido

```html
<!-- Escribe:  div.container>h1{Título}+p{Texto}  + TAB -->
<!-- .container = clase, {} = contenido de texto -->
<div class="container">
  <h1>Título</h1>
  <p>Texto</p>
</div>
```

---

## Live Server

Live Server es una extensión de VS Code que crea un servidor local y recarga el navegador automáticamente cada vez que guardas un archivo.

**Cómo funciona:**

1. Instala la extensión "Live Server" de Ritwick Dey desde el marketplace de VS Code
2. Abre la carpeta de tu proyecto
3. Haz clic derecho en `index.html`
4. Selecciona "Open with Live Server"
5. El navegador se abre en `http://127.0.0.1:5500`

Ahora cada vez que guardes un archivo, el navegador se actualizará sin que tengas que hacer nada. Esto acelera mucho el desarrollo.

---

## Atajos útiles

Estos atajos funcionan en VS Code y la mayoría de editores modernos:

| Atajo | VS Code | Sublime | Qué hace |
|---|---|---|---|
| Formatear | Shift+Alt+F | Ctrl+Shift+P → Reindent | Indenta todo el documento |
| Comentar | Ctrl+/ | Ctrl+/ | Comenta/descomenta la línea |
| Duplicar | Shift+Alt+↓ | Ctrl+Shift+D | Duplica la línea actual |
| Mover | Alt+↑/↓ | Ctrl+↑/↓ | Mueve la línea arriba/abajo |
| Buscar | Ctrl+P | Ctrl+P | Busca archivos por nombre |

---

## Resumen

| Herramienta | Propósito |
|---|---|
| VS Code | Editor principal con extensiones |
| Emmet | Escritura rápida de HTML con abreviaturas |
| Live Server | Recarga automática en navegador al guardar |
| Prettier | Formateo consistente del código |

---

## Ejercicio

Configura VS Code para desarrollo HTML. Usa Emmet para generar una lista de 5 elementos.

**Instrucciones paso a paso:**

1. Instala VS Code si no lo tienes
2. Instala la extensión Live Server
3. Crea un archivo `index.html`
4. Escribe `!` y presiona TAB para generar la estructura
5. Dentro de `<body>`, escribe `ul>li*5{Elemento $}` y presiona TAB
6. Guarda y abre con Live Server

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi proyecto</title>
</head>
<body>
  <!-- Generado con Emmet: ul>li*5{Elemento $} -->
  <ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
    <li>Elemento 4</li>
    <li>Elemento 5</li>
  </ul>
</body>
</html>
```

</details>
