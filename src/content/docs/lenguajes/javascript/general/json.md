---
title: JSON
description: Intercambio de datos.
module: lenguajes/javascript
submodule: general
order: 35
---

Al completar esta guía podrás:

- Convertir objetos JavaScript a JSON
- Parsear JSON a objetos JavaScript
- Trabajar con JSON en peticiones HTTP
- Manejar errores de parseo

---

## ¿Qué es JSON?

JSON (JavaScript Object Notation) es un formato de texto para intercambio de datos. Es legible por humanos y fácil de procesar por máquinas.

```json
{
  "nombre": "Ana",
  "edad": 30,
  "activo": true,
  "hobbies": ["leer", "correr"],
  "direccion": {
    "ciudad": "México",
    "codigoPostal": 12345
  }
}
```

---

## JSON.stringify

Convierte un objeto JavaScript a string JSON.

```javascript
let usuario = {
  nombre: "Ana",
  edad: 30,
  activo: true,
  hobbies: ["leer", "correr"],
  cumpleanos: new Date("1995-03-21")
};

let json = JSON.stringify(usuario);
console.log(json);
// {"nombre":"Ana","edad":30,"activo":true,"hobbies":["leer","correr"],"cumpleanos":"1995-03-21T00:00:00.000Z"}
```

### Formatear con espacios

```javascript
let jsonFormateado = JSON.stringify(usuario, null, 2);
console.log(jsonFormateado);
// {
//   "nombre": "Ana",
//   "edad": 30,
//   ...
// }
```

### Filtrar propiedades

```javascript
let jsonFiltrado = JSON.stringify(usuario, ["nombre", "edad"]);
console.log(jsonFiltrado);
// {"nombre":"Ana","edad":30}
```

---

## JSON.parse

Convierte un string JSON a objeto JavaScript.

```javascript
let json = '{"nombre":"Ana","edad":30}';
let usuario = JSON.parse(json);

console.log(usuario.nombre);  // "Ana"
console.log(usuario.edad);    // 30
```

### Reviver

Una función que transforma los valores durante el parseo.

```javascript
let json = '{"nombre":"Ana","nacimiento":"1995-03-21T00:00:00.000Z"}';

let usuario = JSON.parse(json, (clave, valor) => {
  if (clave === "nacimiento") {
    return new Date(valor);
  }
  return valor;
});

console.log(usuario.nacimiento instanceof Date);  // true
```

---

## Lo que JSON no soporta

| Tipo JavaScript | Soporte JSON |
|---|---|
| `string` | Sí |
| `number` | Sí |
| `boolean` | Sí |
| `null` | Sí |
| `object` | Sí |
| `array` | Sí |
| `undefined` | No — se omite |
| `function` | No — se omite |
| `Symbol` | No — se omite |
| `Date` | Se convierte a string ISO |
| `Map`, `Set` | No — se convierten a objeto vacío |

```javascript
let obj = {
  nombre: "Ana",
  funcion: () => console.log("Hola"),
  valor: undefined,
  fecha: new Date()
};

console.log(JSON.stringify(obj));
// {"nombre":"Ana","fecha":"2025-..."}
// — función y undefined se omiten
```

---

## JSON en fetch

El uso más común de JSON es en peticiones HTTP.

```javascript
// Enviar JSON
async function enviarDatos(datos) {
  let respuesta = await fetch("https://api.ejemplo.com/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datos)
  });

  return await respuesta.json();
}

// Recibir JSON
async function obtenerDatos() {
  let respuesta = await fetch("https://api.ejemplo.com/usuarios");
  let datos = await respuesta.json();
  return datos;
}
```

---

## JSON en localStorage

```javascript
// Guardar objeto
let config = { tema: "oscuro", idioma: "es" };
localStorage.setItem("config", JSON.stringify(config));

// Recuperar objeto
let guardado = JSON.parse(localStorage.getItem("config"));
console.log(guardado.tema);  // "oscuro"
```

---

## Manejo de errores

`JSON.parse` lanza un `SyntaxError` si el string no es JSON válido.

```javascript
function parsearSeguro(json) {
  try {
    return JSON.parse(json);
  } catch (error) {
    console.log("JSON inválido:", error.message);
    return null;
  }
}

console.log(parsearSeguro('{"nombre": "Ana"}'));  // { nombre: "Ana" }
console.log(parsearSeguro('{nombre: "Ana"}'));    // null — JSON inválido
```

---

## Validar JSON

```javascript
function esJsonValido(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

console.log(esJsonValido('{"a":1}'));   // true
console.log(esJsonValido("{a:1}"));     // false
```

---

## Resumen

| Método | Descripción |
|---|---|
| `JSON.stringify(obj)` | Convierte objeto a string JSON |
| `JSON.parse(str)` | Convierte string JSON a objeto |
| `JSON.stringify(obj, null, 2)` | JSON formateado con indentación |

- JSON solo soporta tipos primitivos, objetos y arreglos
- `undefined`, funciones y Symbols se omiten en stringify
- `Date` se convierte a string ISO automáticamente
- Siempre usa try/catch con `JSON.parse`
- Usa `JSON.stringify` para guardar objetos en localStorage

---

## Ejercicio

Crea un objeto `producto` con propiedades `nombre`, `precio`, `disponible` y `etiquetas` (arreglo). Conviértelo a JSON string, luego parsealo de vuelta y muestra cada propiedad.

**Instrucciones paso a paso:**

1. Crea el objeto con `{ nombre: "Laptop", precio: 15000, disponible: true, etiquetas: ["electrónica", "ofertas"] }`
2. Convierte a JSON con `JSON.stringify`
3. Muestra el JSON en consola
4. Parsea con `JSON.parse`
5. Muestra cada propiedad individualmente

<details>
<summary>Mostrar solución</summary>

```javascript
let producto = {
  nombre: "Laptop",
  precio: 15000,
  disponible: true,
  etiquetas: ["electrónica", "ofertas"]
};

let json = JSON.stringify(producto, null, 2);
console.log(json);
// {
//   "nombre": "Laptop",
//   "precio": 15000,
//   "disponible": true,
//   "etiquetas": ["electrónica", "ofertas"]
// }

let recuperado = JSON.parse(json);
console.log(recuperado.nombre);       // "Laptop"
console.log(recuperado.precio);       // 15000
console.log(recuperado.disponible);   // true
console.log(recuperado.etiquetas[0]); // "electrónica"
```

</details>
