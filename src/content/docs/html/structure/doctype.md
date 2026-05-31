---
title: DOCTYPE
module: html
submodule: structure/doctype
---

La primera línea de todo documento HTML es una declaración que no es una etiqueta, no cierra, y no produce contenido visible. Sin embargo, su ausencia es una de las causas más frecuentes de comportamientos impredecibles entre navegadores.

```html
<!DOCTYPE html>
```

## Modo estándar vs. quirks mode

Los navegadores modernos pueden operar en tres modos de renderizado:

| Modo | Comportamiento |
|------|---------------|
| **Standards mode** | El navegador sigue las especificaciones W3C y WHATWG al pie de la letra. Es el modo predecible y correcto. |
| **Almost standards mode** | Similar al estándar, pero conserva algunas particularidades del layout de navegadores antiguos (como el tratamiento de imágenes dentro de celdas de tabla). |
| **Quirks mode** | Emula el comportamiento errático de Internet Explorer 5 y Netscape 4. Las cajas miden distinto, el padding se suma de forma diferente y el posicionamiento es impredecible. |

La presencia de `<!DOCTYPE html>` activa **standards mode**. Cualquier omisión, error tipográfico o declaración de DOCTYPE antigua dispara quirks mode o almost standards mode.

```html
<!-- Standards mode (correcto) -->
<!DOCTYPE html>

<!-- Quirks mode: sin DOCTYPE -->
<html>
...

<!-- Quirks mode: DOCTYPE mal escrito -->
<DOCTYPE html>
...

<!-- Almost standards mode: DOCTYPE obsoleto -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
```

## Evolución histórica

En HTML 4.01 existían tres DOCTYPE distintos según el nivel de rigor:

```html
<!-- Estricto: no permitía elementos obsoletos ni frameset -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!-- Transicional: permitía elementos deprecados como <font> y <center> -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!-- Frameset: para documentos con marcos -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

En XHTML, el DOCTYPE era aún más verboso e incluía referencias a DTD:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

HTML5 simplificó todo a una sola línea. La declaración no distingue entre versiones — el _living standard_ hace que el DOCTYPE sea único y suficiente para cualquier documento moderno.

## Mayúsculas y sintaxis

`<!DOCTYPE html>` no distingue mayúsculas, pero por convención se escribe en mayúsculas para mantener la visibilidad histórica. La forma `<!doctype html>` es igualmente válida, aunque menos común.

```html
<!DOCTYPE html>     <!-- Convención estándar -->
<!doctype html>     <!-- Válido, poco frecuente -->
<![if !IE]>
  ...
<![endif]>
```

No existe etiqueta de cierre. El DOCTYPE no es un elemento HTML, sino una instrucción de procesamiento que el analizador interpreta antes de leer la primera etiqueta.

---

## Ejercicio: detectar el modo de renderizado

Abre cualquier sitio web en el navegador, inspecciona el código fuente y localiza la primera línea. Si ves `<!DOCTYPE html>`, el sitio opera en standards mode. Si falta o está mal escrito, está en quirks mode.

Crea un documento HTML sin DOCTYPE y otro con `<!DOCTYPE html>`. Abre ambos en el navegador y examina la diferencia en el panel "Computed" del inspector al aplicar `box-sizing: border-box` a un `div`. ¿Observas diferencias en cómo se calculan las dimensiones?

<details>
<summary><strong>Ver solución</strong></summary>

```html
<!-- Sin DOCTYPE (quirks mode) -->
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Sin DOCTYPE</title>
  <style>
    div { width: 200px; padding: 20px; border: 5px solid; }
  </style>
</head>
<body>
  <div style="box-sizing: border-box;">Caja en quirks mode</div>
</body>
</html>
```

En quirks mode, el `box-sizing: border-box` puede no respetarse correctamente, y el ancho total de la caja superará los 200px. Con `<!DOCTYPE html>`, el navegador respeta la declaración al pie de la letra.

La solución definitiva es incluir siempre `<!DOCTYPE html>` como primera línea de cualquier documento HTML.

</details>
