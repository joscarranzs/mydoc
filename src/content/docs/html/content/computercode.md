---
title: CÓDIGO DE COMPUTADORA
module: html
submodule: content/computercode
---

HTML proporciona elementos específicos para representar código fuente, entrada de teclado, salida de programas y variables. Cada uno comunica el tipo de contenido técnico que envuelve.

## Elementos de código

| Elemento | Propósito | Ejemplo visual |
|----------|-----------|---------------|
| `<code>` | Fragmento de código en línea | `console.log()` |
| `<pre>` | Bloque de código preformateado | Mantiene espacios y saltos de línea |
| `<kbd>` | Entrada de teclado | `Ctrl + C` |
| `<samp>` | Salida de programa | `Error 404: not found` |
| `<var>` | Variable matemática o de programación | *x* + *y* = *z* |

## `<code>` y `<pre>`

`<code>` se usa para código en línea dentro de un párrafo. `<pre>` preserva espacios y saltos de línea, ideal para bloques de código:

```html
<p>
  El método <code>console.log()</code> imprime un mensaje en la consola del navegador.
</p>

<pre>
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
</pre>
```

Combinados, `<pre><code>` es el contenedor estándar para bloques de código con formato preservado:

```html
<pre><code>function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
</code></pre>
```

## Entrada de teclado

`<kbd>` marca texto que el usuario debe introducir mediante teclado:

```html
<p>
  Para copiar: presiona <kbd><kbd>Ctrl</kbd> + <kbd>C</kbd></kbd>.
</p>

<p>
  En la terminal, escribe <kbd>npm install</kbd> para instalar las dependencias.
</p>
```

Los `<kbd>` anidados representan combinaciones de teclas individuales dentro de una secuencia.

## Salida de programa

`<samp>` representa la salida textual de un programa o script:

```html
<p>
  Al ejecutar el comando, el sistema respondió:
  <samp>Archivo no encontrado. Verifica la ruta e intenta de nuevo.</samp>
</p>
```

## Variables

`<var>` marca una variable en un contexto matemático o de programación:

```html
<p>
  La fórmula del área de un círculo es: <var>A</var> = <var>&pi;</var><var>r</var><sup>2</sup>.
</p>

<p>
  En JavaScript, la variable <var>contador</var> se incrementa en cada iteración.
</p>
```

---

## Ejercicio: documentación de una función

Escribe un fragmento de documentación técnica que incluya:

1. Un bloque de código con la definición de una función usando `<pre><code>`
2. Una instrucción de teclado para ejecutar la función
3. Un ejemplo de la salida esperada
4. Una variable dentro de una explicación

<details>
<summary><strong>Ver solución</strong></summary>

```html
<h2>Función <code>calcularPromedio</code></h2>

<p>
  Esta función recibe un array de números en la variable <var>numeros</var>
  y devuelve el promedio aritmético.
</p>

<pre><code>function calcularPromedio(numeros) {
  const suma = numeros.reduce((a, b) => a + b, 0);
  return suma / numeros.length;
}
</code></pre>

<p>
  Para probar la función, abre la consola con <kbd><kbd>F12</kbd></kbd>
  y ejecuta el siguiente código.
</p>

<p>
  Resultado esperado: <samp>El promedio es 7.5</samp>
</p>
```

</details>
