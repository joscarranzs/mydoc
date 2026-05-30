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

| Editor | Tipo | Ideal para |
|---|---|---|
| VS Code | Gratuito, multiplataforma | Principiantes y profesionales |
| Sublime Text | De pago, rápido | Proyectos grandes |
| WebStorm | De pago, completo | Desarrollo profesional |
| Vim / Neovim | Gratuito, terminal | Usuarios avanzados |
| Brackets | Gratuito, Adobe | Diseñadores web |

---

## VS Code

El editor más popular para desarrollo web.

```bash
# Descargar: https://code.visualstudio.com

# Abrir desde terminal
code .           # Abrir carpeta actual
code index.html  # Abrir archivo específico
```

Extensiones recomendadas:

- **Live Server**: recarga automática al guardar
- **Prettier**: formateo automático
- **HTML CSS Support**: autocompletado de clases
- **HTML Snippets**: fragmentos de código

---

## Emmet

Emmet permite escribir HTML rápidamente con abreviaturas.

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

```html
<!-- Escribe:  ul>li*3>a  + TAB -->
<ul>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
</ul>
```

```html
<!-- Escribe:  div.container>h1{Título}+p{Texto}  + TAB -->
<div class="container">
  <h1>Título</h1>
  <p>Texto</p>
</div>
```

---

## Live Server

```bash
# Instalar desde extensiones de VS Code
# Busca "Live Server" de Ritwick Dey

# Uso:
# 1. Abre la carpeta del proyecto
# 2. Haz clic derecho en index.html
# 3. Selecciona "Open with Live Server"
# 4. El navegador se actualiza automáticamente
```

---

## Shortcuts útiles

| Atajo | VS Code | Sublime |
|---|---|---|
| Formatear documento | Shift+Alt+F | Ctrl+Shift+P → Reindent |
| Comentar línea | Ctrl+/ | Ctrl+/ |
| Duplicar línea | Shift+Alt+↓ | Ctrl+Shift+D |
| Mover línea | Alt+↑/↓ | Ctrl+↑/↓ |
| Buscar archivo | Ctrl+P | Ctrl+P |

---

## Resumen

| Herramienta | Propósito |
|---|---|
| VS Code | Editor principal con extensiones |
| Emmet | Escritura rápida de HTML |
| Live Server | Recarga automática en navegador |
| Prettier | Formateo consistente |

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
