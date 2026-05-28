---
title: Sintaxis
description: Estructura básica del código.
module: lenguajes/javascript
submodule: general
order: 2
---

Al completar esta guía podrás:

- Distinguir una sentencia de una expresión
- Identificar las reglas básicas de puntuación y espaciado
- Usar comentarios para documentar tu código
- Nombrar variables y funciones siguiendo las convenciones del lenguaje

---

## Sentencias

Un programa en JavaScript es una secuencia de **sentencias** (*statements*). Cada sentencia es una instrucción que el intérprete ejecuta.

```javascript
let nombre = "Ana";
let edad = 25;
let mensaje = "Hola, " + nombre;
```

Cada línea anterior es una sentencia. El intérprete las ejecuta una tras otra, en orden descendente.

Un bloque de sentencias se agrupa entre llaves `{}`:

```javascript
{
  let x = 10;
  let y = 20;
  console.log(x + y);
}
```

Los bloques se usan en estructuras de control como `if`, `for` y `function`.

---

## Punto y coma

El punto y coma `;` marca el final de una sentencia. Es opcional en muchos casos, pero su uso es una práctica recomendada.

### Correcto

```javascript
let a = 5;
let b = 10;
let suma = a + b;
```

### Correcto (sin punto y coma)

```javascript
let a = 5
let b = 10
let suma = a + b
```

> **Importante:** Omitir el punto y coma puede provocar errores inesperados. JavaScript aplica ASI (Automatic Semicolon Insertion), pero no siempre interpreta correctamente dónde deben ir.

**Ejemplo de error sin punto y coma:**

```javascript
// Incorrecto — JavaScript lo interpreta mal
let a = 5
let b = a
[1, 2, 3].forEach(x => console.log(x))
```

JavaScript une `b = a` con `[1, 2, 3]`, interpretándolo como `b = a[3]`, lo que produce un error.

> **Regla:** Usa siempre punto y coma al final de cada sentencia. Elimina ambigüedades y previene errores difíciles de depurar.

---

## Espacios y saltos de línea

JavaScript ignora los espacios en blanco adicionales y los saltos de línea.

Estas tres formas son equivalentes:

```javascript
let x = 5 + 10;
```

```javascript
let x=5+10;
```

```javascript
let
  x
  =
  5
  +
  10;
```

> **Convención:** usa espacios alrededor de operadores (`=`, `+`, `-`, `===`) y después de comas para mejorar la legibilidad.

```javascript
// Convención recomendada
function saludar(nombre, apellido) {
  let completo = nombre + " " + apellido;
  return completo;
}
```

---

## Sensibilidad a mayúsculas

JavaScript distingue entre mayúsculas y minúsculas (*case sensitive*).

```javascript
let nombre = "Ana";
let Nombre = "Luis";
let NOMBRE = "Sofía";

// Son tres variables distintas
console.log(nombre);  // "Ana"
console.log(Nombre);  // "Luis"
console.log(NOMBRE);  // "Sofía"
```

Las palabras clave del lenguaje siempre se escriben en minúsculas: `let`, `const`, `function`, `if`, `else`, `for`, `while`.

```javascript
// Incorrecto — error de sintaxis
Let x = 5;
If (x > 0) { }
```

```javascript
// Correcto
let x = 5;
if (x > 0) { }
```

> **Regla:** `NaN` y `null` se escriben exactamente así. `Undefined`, `NULL` o `Nan` son identificadores distintos que pueden causar errores difíciles de depurar.

---

## Comentarios

Los comentarios son texto que el intérprete ignora. Sirven para documentar el propósito del código.

### Comentario de una línea

```javascript
// Esto es un comentario de una línea
let saldo = 1000; // El saldo inicial de la cuenta
```

### Comentario de varias líneas

```javascript
/*
  Esta función calcula el interés compuesto.
  Recibe el capital inicial, la tasa anual y los años.
  Devuelve el monto total acumulado.
*/
function calcularInteres(capital, tasa, años) {
  return capital * Math.pow(1 + tasa, años);
}
```

> **Regla:** Los comentarios explican *por qué* existe el código, no *qué* hace. Si necesitas explicar qué hace, considera que el código debería ser más claro.

---

## Identificadores

Un identificador es el nombre que le das a una variable, función, clase o propiedad.

### Reglas

- Pueden contener letras, dígitos, `_` y `$`
- No pueden comenzar con un dígito
- No pueden ser palabras reservadas del lenguaje

```javascript
// Válidos
let nombre;
let _valor;
let $precio;
let nombreUsuario;
let producto123;

// Inválidos
let 123producto;
let mi-variable;
let class;
```

### Convenciones de nombres

| Elemento | Convención | Ejemplo |
|---|---|---|
| Variables | camelCase | `nombreUsuario`, `saldoTotal` |
| Funciones | camelCase | `calcularTotal()`, `obtenerDatos()` |
| Clases | PascalCase | `Usuario`, `CuentaBancaria` |
| Constantes | UPPER_SNAKE_CASE | `MAX_LIMITE`, `PI` |
| Métodos privados | _camelCase | `_validarDatos()` |

```javascript
// Variables
let nombreUsuario = "Ana";
let fechaNacimiento = "1995-03-21";

// Constantes
const IVA = 0.16;
const MAX_INTENTOS = 3;

// Función
function calcularEdad(fechaNacimiento) {
  // ...
}

// Clase
class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }
}
```

---

## Literales

Un literal es un valor escrito directamente en el código.

```javascript
// Literal numérico
2024

// Literal de cadena
"Hola Mundo"

// Literal booleano
true

// Literal de arreglo
[1, 2, 3]

// Literal de objeto
{ nombre: "Ana", edad: 30 }

// Literal de expresión regular
/\d+/
```

Cada literal produce un valor que puedes asignar o usar directamente:

```javascript
let numero = 42;              // 42 es un literal numérico
let texto = "Hola";           // "Hola" es un literal de cadena
let activo = true;            // true es un literal booleano
let colores = ["rojo", "verde"];  // ["rojo", "verde"] es un literal de arreglo
```

---

## Palabras reservadas

JavaScript tiene palabras que no puedes usar como identificadores porque tienen un significado especial en el lenguaje.

```
let    const    var    function    return
if     else     for    while       do
class  new      this   delete      typeof
try    catch    throw  finally     switch
case   break    continue  default  import
export extends super  yield       await
```

```javascript
// Incorrecto — "return" es palabra reservada
let return = 5;

// Correcto
let retorno = 5;
```

> **Nota:** Las palabras reservadas están escritas en minúsculas. Escribirlas en mayúsculas las convierte en identificadores válidos, pero es una mala práctica que debes evitar.

---

## Expresiones

Una **expresión** es cualquier fragmento de código que produce un valor. Una **sentencia** es una instrucción completa que realiza una acción.

```javascript
// Expresiones
5 + 3               // → 8
"Ho" + "la"         // → "Hola"
x * 2               // → depende del valor de x
saludar("Ana")      // → depende del retorno de saludar
true && false       // → false

// Sentencias
let suma = 5 + 3;   // sentencia que contiene una expresión
if (x > 0) { }      // sentencia que contiene una expresión
return x * 2;       // sentencia que contiene una expresión
```

Toda sentencia puede contener una o más expresiones, pero una expresión por sí sola no siempre es una sentencia válida:

```javascript
5 + 3;      // Sentencia válida (aunque no hace nada útil)
```

---

## Resumen

- Las sentencias son instrucciones individuales que el intérprete ejecuta
- El punto y coma cierra cada sentencia — úsalo siempre
- JavaScript ignora espacios y saltos de línea adicionales
- Es sensible a mayúsculas: `variable`, `Variable` y `VARIABLE` son distintas
- Los comentarios se escriben con `//` o `/* */`
- Los identificadores siguen la convención camelCase, PascalCase o UPPER_SNAKE_CASE
- No uses palabras reservadas como identificadores
- Una expresión produce un valor; una sentencia ejecuta una acción

---

## Ejercicio

Corrige el siguiente código que contiene errores de sintaxis:

```javascript
let nombre = "Carlos
Let apellido = "Ruiz"
let 1erNombre = "Carlos"
let nombre-completo = nombre + apellido
var class = "programacion"

IF (nombre === "Carlos") {
  console.log "Bienvenido"
}
```

**Instrucciones paso a paso:**

1. Identifica cada error de sintaxis en el código
2. Copia el código a tu editor y corrígelo
3. Usa `let` o `const` según corresponda
4. Aplica camelCase a todos los identificadores
5. Asegúrate de que las cadenas estén correctamente cerradas
6. Verifica que todas las sentencias terminen con punto y coma
7. Corrige las palabras reservadas escritas incorrectamente

<details>
<summary>Mostrar solución</summary>

```javascript
let nombre = "Carlos";
let apellido = "Ruiz";
let primerNombre = "Carlos";
let nombreCompleto = nombre + apellido;
let curso = "programacion";

if (nombre === "Carlos") {
  console.log("Bienvenido");
}
```

**Errores corregidos:**

1. Cadena sin cerrar: `"Carlos` → `"Carlos"`
2. `Let` → `let` (mayúscula incorrecta)
3. `1erNombre` → `primerNombre` (comienza con dígito)
4. `nombre-completo` → `nombreCompleto` (guiones no permitidos)
5. `class` → `curso` (palabra reservada)
6. `IF` → `if` (mayúscula incorrecta)
7. `console.log "Bienvenido"` → `console.log("Bienvenido")` (faltaban paréntesis)

</details>
