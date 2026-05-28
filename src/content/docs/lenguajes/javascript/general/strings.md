---
title: Strings
description: Manipulación de texto.
module: lenguajes/javascript
submodule: general
order: 5
---

Al completar esta guía podrás:

- Crear cadenas con comillas simples, dobles y template literals
- Usar los métodos principales de manipulación de texto
- Aplicar interpolación de variables con template strings
- Entender la inmutabilidad de las cadenas

---

## Creación de cadenas

Una cadena (*string*) representa texto. Se escribe entre comillas.

```javascript
let simple = 'Hola Mundo';
let doble = "Hola Mundo";
let template = `Hola Mundo`;
```

Las tres formas son válidas. La elección depende del contexto.

> **Convención:** elige un estilo y mantenlo consistente en todo el proyecto. En esta guía usamos comillas dobles para cadenas normales y backticks para template strings.

---

## Comillas dentro del texto

Para incluir el mismo tipo de comilla dentro del texto, escápala con `\` o usa el otro tipo de comilla.

```javascript
// Escape con backslash
let texto = "Ella dijo: \"Hola\"";

// Comilla distinta
let texto = 'Ella dijo: "Hola"';

// Con template
let texto = `Ella dijo: "Hola"`;
```

---

## Caracteres de escape

JavaScript interpreta secuencias especiales dentro de las cadenas.

```javascript
console.log("Primera línea\nSegunda línea");
// Primera línea
// Segunda línea

console.log("Columna1\tColumna2");
// Columna1  Columna2

console.log("Ruta: C:\\carpeta\\archivo");
// Ruta: C:\carpeta\archivo
```

| Secuencia | Significado |
|---|---|
| `\n` | Nueva línea |
| `\t` | Tabulación |
| `\\` | Barra invertida |
| `\"` | Comilla doble |
| `\'` | Comilla simple |

---

## Template literals

Los template literals (backticks) permiten interpolar variables y expresiones con `${}`.

```javascript
let nombre = "Ana";
let edad = 30;

let saludo = `Hola, soy ${nombre} y tengo ${edad} años.`;
console.log(saludo);  // "Hola, soy Ana y tengo 30 años."
```

Pueden contener cualquier expresión JavaScript:

```javascript
let a = 5;
let b = 10;
console.log(`La suma de ${a} y ${b} es ${a + b}`);
// "La suma de 5 y 10 es 15"
```

También admiten cadenas multilínea sin concatenar:

```javascript
let mensaje = `
  Estimado ${nombre}:
  Su pedido ha sido procesado.
  Total: $${total}.
`;
```

> **Regla:** usa template literals siempre que necesites interpolación o cadenas multilínea. Son más legibles que la concatenación con `+`.

---

## Longitud de una cadena

La propiedad `.length` devuelve la cantidad de caracteres.

```javascript
let texto = "JavaScript";
console.log(texto.length);  // 10

let vacio = "";
console.log(vacio.length);  // 0
```

---

## Acceso a caracteres

Puedes acceder a un carácter individual por su posición (índice). Los índices empiezan en 0.

```javascript
let lenguaje = "JavaScript";

console.log(lenguaje[0]);     // "J"
console.log(lenguaje[4]);     // "S"
console.log(lenguaje[10]);    // undefined — fuera del rango
```

---

## Inmutabilidad

Las cadenas en JavaScript son **inmutables**. No puedes modificar un carácter individual.

```javascript
let texto = "Hola";
texto[0] = "h";  // No genera error pero no funciona
console.log(texto);  // "Hola" — no cambió
```

Para modificar una cadena, debes crear una nueva.

```javascript
let texto = "Hola";
let nuevo = "h" + texto.slice(1);
console.log(nuevo);  // "hola"
```

---

## Métodos principales

### toUpperCase y toLowerCase

Convierten todo el texto a mayúsculas o minúsculas.

```javascript
let texto = "JavaScript";

console.log(texto.toUpperCase());  // "JAVASCRIPT"
console.log(texto.toLowerCase());  // "javascript"
```

Estos métodos son útiles para comparaciones sin distinción de mayúsculas:

```javascript
let entrada = "Hola";
let guardado = "hola";

console.log(entrada === guardado);                    // false
console.log(entrada.toLowerCase() === guardado);      // true
```

### includes

Verifica si una cadena contiene un texto específico.

```javascript
let frase = "JavaScript es un lenguaje versátil";

console.log(frase.includes("JavaScript"));  // true
console.log(frase.includes("Python"));      // false
```

### indexOf y lastIndexOf

Devuelven la posición donde comienza un texto. `-1` si no lo encuentra.

```javascript
let texto = "La casa es grande y la casa es bonita";

console.log(texto.indexOf("casa"));       // 3 — primera aparición
console.log(texto.lastIndexOf("casa"));   // 26 — última aparición
console.log(texto.indexOf("auto"));       // -1 — no existe
```

### slice

Extrae una parte de la cadena entre dos índices.

```javascript
let texto = "JavaScript";

console.log(texto.slice(0, 4));   // "Java" — del índice 0 al 3
console.log(texto.slice(4));      // "Script" — del índice 4 en adelante
console.log(texto.slice(-6));     // "Script" — los últimos 6 caracteres
```

### substring

Similar a `slice`, pero no acepta índices negativos.

```javascript
let texto = "JavaScript";

console.log(texto.substring(0, 4));   // "Java"
console.log(texto.substring(4, 0));   // "Java" — intercambia si inicio > fin
```

### replace

Reemplaza la primera aparición de un texto por otro.

```javascript
let texto = "Hola Mundo";

console.log(texto.replace("Mundo", "JavaScript"));  // "Hola JavaScript"
```

Para reemplazar todas las apariciones, usa una expresión regular con la bandera `g`:

```javascript
let texto = "uno, uno, uno";

console.log(texto.replace(/uno/g, "1"));  // "1, 1, 1"
```

### split

Divide la cadena en un arreglo usando un separador.

```javascript
let csv = "rojo,verde,azul";

console.log(csv.split(","));      // ["rojo", "verde", "azul"]
console.log(csv.split(",", 2));   // ["rojo", "verde"] — límite de 2
console.log("hola".split(""));    // ["h", "o", "l", "a"]
```

### trim

Elimina espacios en blanco al inicio y final de la cadena.

```javascript
let texto = "  Hola Mundo  ";

console.log(texto.trim());        // "Hola Mundo"
console.log(texto.trimStart());   // "Hola Mundo  "
console.log(texto.trimEnd());     // "  Hola Mundo"
```

---

## Concatenación

Hay tres formas de unir cadenas:

```javascript
let a = "Hola";
let b = "Mundo";

// Con el operador +
console.log(a + " " + b);     // "Hola Mundo"

// Con template literals
console.log(`${a} ${b}`);     // "Hola Mundo"

// Con el método concat
console.log(a.concat(" ", b)); // "Hola Mundo"
```

> **Regla:** usa template literals. El operador `+` se vuelve ilegible con más de dos valores.

---

## Comparación de cadenas

Las cadenas se comparan carácter por carácter usando el valor Unicode de cada uno.

```javascript
console.log("a" < "b");    // true — "a" tiene código 97, "b" tiene 98
console.log("A" < "a");    // true — "A" tiene código 65, "a" tiene 97
console.log("abc" < "abd"); // true — compara hasta encontrar la diferencia
```

Para comparar sin distinguir mayúsculas, normaliza ambas cadenas:

```javascript
let usuario = "Admin";
let esperado = "admin";

console.log(usuario.toLowerCase() === esperado.toLowerCase());  // true
```

---

## Resumen

| Operación | Método | Ejemplo |
|---|---|---|
| Longitud | `.length` | `"Hola".length` → 4 |
| Mayúsculas | `.toUpperCase()` | `"hola".toUpperCase()` → "HOLA" |
| Minúsculas | `.toLowerCase()` | `"HOLA".toLowerCase()` → "hola" |
| Buscar texto | `.includes()` | `"abc".includes("b")` → true |
| Posición | `.indexOf()` | `"abc".indexOf("b")` → 1 |
| Extraer | `.slice()` | `"abc".slice(1,3)` → "bc" |
| Reemplazar | `.replace()` | `"a".replace("a","b")` → "b" |
| Dividir | `.split()` | `"a,b".split(",")` → ["a","b"] |
| Recortar | `.trim()` | `" a ".trim()` → "a" |

- Las cadenas son inmutables: cada método devuelve una cadena nueva
- Los índices empiezan en 0
- Usa template literals para interpolación y multilínea
- Normaliza a minúsculas antes de comparar si la capitalización no es relevante

---

## Ejercicio

Escribe una función que reciba un nombre completo (por ejemplo, `"carlos garcía"`) y devuelva el nombre formateado con la primera letra de cada palabra en mayúscula.

**Instrucciones paso a paso:**

1. Crea una función llamada `capitalizarNombre`
2. Recibe un string como parámetro
3. Convierte todo el texto a minúsculas (por si viene mal escrito)
4. Divide el string en palabras usando `split(" ")`
5. Para cada palabra, toma la primera letra con `[0]`, conviértela a mayúscula, y concatena el resto con `slice(1)`
6. Une las palabras nuevamente con `join(" ")`
7. Retorna el resultado
8. Prueba con `"carlos garcía"`, `"MARÍA LOPEZ"`, `"jUAn péREZ"`

<details>
<summary>Mostrar solución</summary>

```javascript
function capitalizarNombre(nombre) {
  let palabras = nombre.toLowerCase().split(" ");
  let resultado = [];

  for (let palabra of palabras) {
    let capitalizada = palabra[0].toUpperCase() + palabra.slice(1);
    resultado.push(capitalizada);
  }

  return resultado.join(" ");
}

console.log(capitalizarNombre("carlos garcía"));    // "Carlos García"
console.log(capitalizarNombre("MARÍA LOPEZ"));      // "María Lopez"
console.log(capitalizarNombre("jUAn péREZ"));       // "Juan Pérez"
```

</details>
