---
title: Errores
description: Tipos de errores y manejo.
module: lenguajes/javascript
submodule: general
order: 19
---

Al completar esta guía podrás:

- Identificar los tipos de error en JavaScript
- Capturar errores con try...catch
- Lanzar errores personalizados con throw
- Crear errores específicos para tu aplicación

---

## Tipos de error

JavaScript tiene varios tipos de error predefinidos.

### SyntaxError

Ocurre cuando el código tiene un error de sintaxis. El código ni siquiera se ejecuta.

```javascript
// SyntaxError: Unexpected identifier
// let a = ;
```

### ReferenceError

Ocurre cuando se intenta acceder a una variable que no existe.

```javascript
console.log(variableNoDefinida);
// ReferenceError: variableNoDefinida is not defined
```

### TypeError

Ocurre cuando se usa un valor de forma incompatible con su tipo.

```javascript
let numero = 42;
numero.toUpperCase();
// TypeError: numero.toUpperCase is not a function

let nulo = null;
console.log(nulo.propiedad);
// TypeError: Cannot read properties of null
```

### RangeError

Ocurre cuando un valor está fuera del rango permitido.

```javascript
let arr = [];
arr.length = -1;
// RangeError: Invalid array length
```

---

## try...catch

Captura errores en tiempo de ejecución para que no detengan el programa.

```javascript
try {
  let resultado = JSON.parse("{ inválido }");
  console.log(resultado);
} catch (error) {
  console.log("Error:", error.message);
}
// "Error: Expected property name or '}' in JSON at position 2"
```

### finally

Se ejecuta siempre, haya o no error.

```javascript
try {
  console.log("Intento");
  // código que puede fallar
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Esto se ejecuta siempre");
}
```

Útil para limpiar recursos:

```javascript
function leerArchivo(ruta) {
  let archivo = abrir(ruta);
  try {
    return archivo.leer();
  } catch (error) {
    console.log("Error al leer");
    return null;
  } finally {
    archivo.cerrar();  // Siempre cierra el archivo
  }
}
```

> **Regla:** usa `finally` para operaciones de limpieza que deben ejecutarse sin importar el resultado.

---

## throw

Lanza un error personalizado. Puede ser cualquier valor, pero por convención se usa un objeto Error.

```javascript
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

try {
  console.log(dividir(10, 0));
} catch (error) {
  console.log(error.message);  // "No se puede dividir por cero"
}
```

### Lanzar diferentes tipos

```javascript
function validarEdad(edad) {
  if (typeof edad !== "number") {
    throw new TypeError("La edad debe ser un número");
  }
  if (edad < 0) {
    throw new RangeError("La edad no puede ser negativa");
  }
  if (edad > 150) {
    throw new RangeError("Edad fuera de rango");
  }
  return true;
}
```

---

## Error personalizado

Puedes extender la clase Error para crear errores específicos.

```javascript
class ErrorValidacion extends Error {
  constructor(mensaje, campo) {
    super(mensaje);
    this.name = "ErrorValidacion";
    this.campo = campo;
  }
}

function validarUsuario(usuario) {
  if (!usuario.nombre) {
    throw new ErrorValidacion("Nombre requerido", "nombre");
  }
  if (!usuario.email) {
    throw new ErrorValidacion("Email requerido", "email");
  }
}

try {
  validarUsuario({ nombre: "Ana" });
} catch (error) {
  if (error instanceof ErrorValidacion) {
    console.log(`Campo ${error.campo}: ${error.message}`);
  }
}
// "Campo email: Email requerido"
```

---

## Capturar errores específicos

Puedes distinguir el tipo de error con `instanceof` o `name`.

```javascript
try {
  // código que puede lanzar diferentes errores
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Error de tipo:", error.message);
  } else if (error instanceof ReferenceError) {
    console.log("Error de referencia:", error.message);
  } else {
    console.log("Error desconocido:", error);
  }
}
```

---

## finally sin catch

Puedes usar `try...finally` sin `catch`. El error se propaga pero el finally se ejecuta.

```javascript
try {
  console.log("Intento");
  throw new Error("Algo falló");
} finally {
  console.log("Limpieza ejecutada");
}
// "Intento"
// "Limpieza ejecutada"
// Error: Algo falló (se propaga)
```

---

## Errores en async/await

Los errores en funciones async se capturan con try...catch normal.

```javascript
async function obtenerDatos() {
  try {
    let respuesta = await fetch("https://api.invalida.com");
    let datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.log("Error en la petición:", error.message);
    return null;
  }
}
```

> **Regla:** siempre envuelve operaciones asíncronas en try...catch. Una promesa rechazada no capturada es una excepción no manejada.

---

## window.onerror y errores globales

En el navegador, puedes capturar errores no manejados globalmente.

```javascript
window.onerror = function(mensaje, fuente, linea, columna, error) {
  console.log("Error global:", mensaje);
  return true;  // Evita que el error se muestre en consola
};
```

---

## Resumen

| Tipo | Causa común |
|---|---|
| `SyntaxError` | Error de sintaxis en el código |
| `ReferenceError` | Variable no definida |
| `TypeError` | Operación incompatible con el tipo |
| `RangeError` | Valor fuera de rango |
| `Error` | Error genérico o personalizado |

- `try...catch` captura errores sin detener el programa
- `finally` se ejecuta siempre (haya o no error)
- `throw` lanza errores personalizados
- Extiende `Error` para errores específicos de tu dominio
- Captura errores específicos con `instanceof`
- Las operaciones asíncronas también necesitan try...catch
- Valida datos al inicio de las funciones para evitar errores inesperados

---

## Ejercicio

Escribe una función que reciba un string JSON con datos de usuario y devuelva el objeto parseado. Si el JSON es inválido, debe retornar `null` y mostrar un mensaje. Si falta el campo `nombre`, debe lanzar un error personalizado.

**Instrucciones paso a paso:**

1. Crea una función `parsearUsuario(jsonStr)`
2. Usa try...catch con `JSON.parse()`
3. Si el JSON es inválido, muestra un mensaje y retorna `null`
4. Verifica que el resultado tenga `nombre` con `typeof`
5. Si no tiene nombre, lanza un `ErrorValidacion`
6. Retorna el objeto si todo es válido
7. Prueba con: `'{"nombre": "Ana"}'`, `'{invalido}'`, `'{"edad": 30}'`

<details>
<summary>Mostrar solución</summary>

```javascript
class ErrorValidacion extends Error {
  constructor(mensaje, campo) {
    super(mensaje);
    this.name = "ErrorValidacion";
    this.campo = campo;
  }
}

function parsearUsuario(jsonStr) {
  try {
    let usuario = JSON.parse(jsonStr);

    if (!usuario.nombre) {
      throw new ErrorValidacion("El campo nombre es requerido", "nombre");
    }

    return usuario;
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log("JSON inválido");
      return null;
    }
    throw error;  // Re-lanza errores que no manejamos aquí
  }
}

console.log(parsearUsuario('{"nombre": "Ana"}'));  // { nombre: "Ana" }
console.log(parsearUsuario('{invalido}'));          // "JSON inválido", null

try {
  parsearUsuario('{"edad": 30}');
} catch (error) {
  console.log(error.message);  // "El campo nombre es requerido"
}
```

</details>
