---
title: Código de computadora
description: code, pre, kbd.
module: lenguajes/html
submodule: general
order: 32
---

Al completar esta guía podrás:

- Usar code para fragmentos de código
- Usar pre para bloques de código con formato
- Usar kbd para entradas de teclado
- Usar samp para salida de programas

---

## code

Texto en fuente monoespaciada para código inline:

```html
<p>Usa la función <code>console.log()</code> para depurar.</p>
<p>La etiqueta <code>&lt;h1&gt;</code> define un encabezado.</p>
```

---

## pre

Bloque de código con formato preservado:

```html
<pre>
function saludar(nombre) {
  console.log("Hola, " + nombre);
}
</pre>
```

Combina pre y code:

```html
<pre><code>
function saludar(nombre) {
  console.log("Hola, " + nombre);
}
</code></pre>
```

---

## kbd

Entrada de teclado del usuario:

```html
<p>Presiona <kbd>Ctrl</kbd> + <kbd>C</kbd> para copiar.</p>
<p>Presiona <kbd>F12</kbd> para abrir las herramientas de desarrollo.</p>
```

---

## samp

Salida de un programa o comando:

```html
<p>El comando devolvió: <samp>Error 404: archivo no encontrado</samp></p>

<pre><samp>
$ node app.js
Servidor iniciado en puerto 3000
Conectado a la base de datos
</samp></pre>
```

---

## var

Variable matemática o de programación:

```html
<p>La variable <var>nombre</var> contiene el valor del usuario.</p>
<p>La fórmula <var>E</var> = <var>mc</var><sup>2</sup> es famosa.</p>
```

---

## Combinaciones comunes

```html
<pre><code>
// Código de ejemplo
function sumar(a, b) {
  return a + b;
}

const resultado = sumar(5, 3);
console.log(resultado);  // 8
</code></pre>

<p>Salida: <samp>8</samp></p>
<p>Ejecutar con: <kbd>node app.js</kbd></p>
```

---

## Estilos CSS

```html
<style>
  code {
    background: #f4f4f4;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 0.9em;
    color: #d93025;
  }
  pre {
    background: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    overflow-x: auto;
  }
  pre code {
    background: none;
    padding: 0;
    color: inherit;
  }
  kbd {
    background: #f1f3f4;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 2px 6px;
    font-size: 0.9em;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
  }
  samp {
    background: #333;
    color: #0f0;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: monospace;
  }
</style>
```

---

## Resumen

| Etiqueta | Uso | Ejemplo |
|---|---|---|
| `<code>` | Código inline | `const x = 1` |
| `<pre>` | Bloque con formato | Código multi-línea |
| `<kbd>` | Entrada de teclado | Ctrl+C |
| `<samp>` | Salida de programa | Error 404 |
| `<var>` | Variable | `nombre` |

---

## Ejercicio

Crea una página que muestre: un bloque de código JavaScript con pre y code, un atajo de teclado con kbd, y la salida esperada con samp.

**Instrucciones paso a paso:**

1. Crea `codigo.html`
2. Usa pre + code para un bloque de función
3. Usa kbd para atajos de teclado
4. Usa samp para mostrar la salida
5. Agrega estilos CSS

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Código de computadora</title>
  <style>
    code { background: #f4f4f4; padding: 2px 6px; border-radius: 3px; color: #d93025; }
    pre { background: #f8f9fa; border: 1px solid #ddd; border-radius: 8px; padding: 16px; overflow-x: auto; }
    pre code { background: none; padding: 0; color: #333; }
    kbd { background: #f1f3f4; border: 1px solid #ccc; border-radius: 3px; padding: 2px 6px; box-shadow: 0 1px 1px rgba(0,0,0,0.1); }
    samp { background: #1e1e1e; color: #4ec9b0; padding: 4px 8px; border-radius: 4px; display: inline-block; }
  </style>
</head>
<body>
  <h1>Código de computadora</h1>

  <h2>Bloque de código</h2>
  <pre><code>function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));</code></pre>

  <h2>Atajo de teclado</h2>
  <p>Presiona <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> para abrir DevTools.</p>

  <h2>Salida del programa</h2>
  <p>El resultado de <code>fibonacci(10)</code> es:</p>
  <samp>55</samp>
</body>
</html>
```

</details>
