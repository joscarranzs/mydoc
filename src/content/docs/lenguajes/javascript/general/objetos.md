---
title: Objetos
description: Pares clave-valor.
module: lenguajes/javascript
submodule: general
order: 14
---

Al completar esta guía podrás:

- Crear y modificar objetos literales
- Acceder a propiedades con notación de punto y corchetes
- Iterar sobre propiedades de un objeto
- Copiar y combinar objetos

---

## Creación

Un objeto es una colección de pares **clave: valor**. Las claves son strings (o Symbols) y los valores pueden ser cualquier tipo.

```javascript
let usuario = {
  nombre: "Ana",
  edad: 30,
  activo: true
};
```

---

## Acceso a propiedades

### Notación de punto

```javascript
console.log(usuario.nombre);  // "Ana"
console.log(usuario.edad);    // 30
```

### Notación de corchetes

```javascript
console.log(usuario["nombre"]);  // "Ana"

let clave = "edad";
console.log(usuario[clave]);     // 30
```

> **Regla:** usa punto cuando conozcas el nombre de la propiedad. Usa corchetes cuando el nombre sea dinámico o contenga caracteres especiales.

### Propiedades con caracteres especiales

```javascript
let producto = {
  "nombre-producto": "Laptop",
  "precio final": 15000
};

// Punto no funciona con guiones ni espacios
console.log(producto["nombre-producto"]);  // "Laptop"
console.log(producto["precio final"]);     // 15000
```

---

## Modificación

```javascript
let usuario = { nombre: "Ana" };

// Agregar
usuario.edad = 30;
usuario["activo"] = true;

// Modificar
usuario.nombre = "Sofía";

// Eliminar
delete usuario.activo;

console.log(usuario);  // { nombre: "Sofía", edad: 30 }
```

---

## Propiedades computadas

Puedes usar variables como nombre de propiedad al crear un objeto.

```javascript
let clave = "color";
let valor = "rojo";

let objeto = {
  [clave]: valor,
  [`${clave}Hex`]: "#FF0000"
};

console.log(objeto);  // { color: "rojo", colorHex: "#FF0000" }
```

---

## Shorthand properties

Cuando la variable tiene el mismo nombre que la clave, puedes omitir el valor.

```javascript
let nombre = "Ana";
let edad = 30;

// Sin shorthand
let usuario1 = { nombre: nombre, edad: edad };

// Con shorthand
let usuario2 = { nombre, edad };

console.log(usuario2);  // { nombre: "Ana", edad: 30 }
```

---

## Métodos en objetos

Puedes asignar funciones como propiedades.

```javascript
let usuario = {
  nombre: "Ana",
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

// Shorthand de método (recomendado)
let usuario2 = {
  nombre: "Ana",
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

usuario2.saludar();  // "Hola, soy Ana"
```

---

## this en objetos

`this` hace referencia al objeto que contiene el método.

```javascript
let usuario = {
  nombre: "Ana",
  presentarse() {
    console.log(`Me llamo ${this.nombre}`);
  }
};

usuario.presentarse();  // "Me llamo Ana"
```

> **Regla:** `this` se determina en tiempo de ejecución según cómo se llama el método, no dónde se define. Si extraes el método y lo llamas fuera del contexto, `this` cambia.

---

## in y hasOwnProperty

### Operador in

Verifica si una propiedad existe en el objeto (incluyendo propiedades heredadas).

```javascript
let usuario = { nombre: "Ana" };

console.log("nombre" in usuario);   // true
console.log("edad" in usuario);     // false
console.log("toString" in usuario); // true — heredado
```

### hasOwnProperty

Verifica si la propiedad es propia del objeto (no heredada).

```javascript
console.log(usuario.hasOwnProperty("nombre"));   // true
console.log(usuario.hasOwnProperty("toString")); // false
```

### Object.hasOwn (ES2022)

Método estático más seguro que `hasOwnProperty`.

```javascript
console.log(Object.hasOwn(usuario, "nombre"));   // true
console.log(Object.hasOwn(usuario, "toString")); // false
```

---

## keys, values, entries

```javascript
let usuario = {
  nombre: "Ana",
  edad: 30,
  ciudad: "México"
};

console.log(Object.keys(usuario));    // ["nombre", "edad", "ciudad"]
console.log(Object.values(usuario));  // ["Ana", 30, "México"]
console.log(Object.entries(usuario)); // [["nombre","Ana"], ["edad",30], ["ciudad","México"]]
```

Útiles para iterar:

```javascript
for (let clave of Object.keys(usuario)) {
  console.log(clave);
}

for (let valor of Object.values(usuario)) {
  console.log(valor);
}

for (let [clave, valor] of Object.entries(usuario)) {
  console.log(`${clave}: ${valor}`);
}
```

---

## Spread en objetos

Copia propiedades de un objeto a otro.

```javascript
let original = { a: 1, b: 2 };
let copia = { ...original };

console.log(copia);  // { a: 1, b: 2 }
console.log(copia === original);  // false — son distintos
```

Combinar objetos (las propiedades posteriores sobrescriben):

```javascript
let defaults = { tema: "claro", idioma: "es", debug: false };
let config = { ...defaults, debug: true };

console.log(config);  // { tema: "claro", idioma: "es", debug: true }
```

> **Importante:** el spread hace copia superficial (*shallow copy*). Los objetos anidados siguen siendo referencias compartidas.

---

## Object.assign

Alternativa al spread para copiar propiedades.

```javascript
let destino = {};
let fuente = { a: 1, b: 2 };

Object.assign(destino, fuente);
console.log(destino);  // { a: 1, b: 2 }
```

> **Regla:** prefiere spread `...` sobre `Object.assign`. Es más legible y menos propenso a errores.

---

## Congelar y sellar

### Object.freeze

Hace el objeto inmutable: no se pueden agregar, modificar ni eliminar propiedades.

```javascript
let config = Object.freeze({ max: 100, min: 0 });

config.max = 200;  // No hace nada (en modo estricto lanza error)
console.log(config.max);  // 100
```

### Object.seal

Permite modificar propiedades existentes, pero no agregar ni eliminar.

```javascript
let usuario = Object.seal({ nombre: "Ana" });

usuario.nombre = "Sofía";  // Permitido
usuario.edad = 30;         // No se agrega
delete usuario.nombre;     // No se elimina
```

---

## Destructuring de objetos

Extrae propiedades en variables individuales.

```javascript
let usuario = {
  nombre: "Ana",
  edad: 30,
  ciudad: "México"
};

let { nombre, edad } = usuario;
console.log(nombre);  // "Ana"
console.log(edad);    // 30
```

Con alias:

```javascript
let { nombre: nombreUsuario, edad: edadUsuario } = usuario;
console.log(nombreUsuario);  // "Ana"
console.log(edadUsuario);    // 30
```

Con valores por defecto:

```javascript
let { nombre, pais = "Desconocido" } = usuario;
console.log(pais);  // "Desconocido"
```

---

## Resumen

| Operación | Sintaxis |
|---|---|
| Crear objeto | `{ clave: valor }` |
| Acceder | `obj.clave` o `obj["clave"]` |
| Agregar/modificar | `obj.clave = valor` |
| Eliminar | `delete obj.clave` |
| Verificar existencia | `"clave" in obj` |
| Propiedades propias | `Object.hasOwn(obj, "clave")` |
| Listar claves | `Object.keys(obj)` |
| Listar valores | `Object.values(obj)` |
| Listar pares | `Object.entries(obj)` |
| Copiar | `{ ...obj }` |
| Inmutable | `Object.freeze(obj)` |

- Usa notación de punto para propiedades conocidas, corchetes para dinámicas
- `Object.hasOwn()` es más seguro que `hasOwnProperty()`
- El spread hace copia superficial
- `this` en métodos depende de cómo se invoca el método
- `delete` elimina propiedades, pero úsalo con moderación

---

## Ejercicio

Escribe una función que reciba dos objetos y retorne un nuevo objeto combinando sus propiedades. Si ambas tienen la misma clave, el segundo objeto tiene prioridad.

**Instrucciones paso a paso:**

1. Crea una función `combinarObjetos(obj1, obj2)`
2. Usa spread para combinar ambos objetos en uno nuevo
3. Asegúrate de que `obj2` vaya después para que sus propiedades sobrescriban
4. Retorna el nuevo objeto
5. Prueba con: `{ a: 1, b: 2 }` y `{ b: 3, c: 4 }`

<details>
<summary>Mostrar solución</summary>

```javascript
function combinarObjetos(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

let resultado = combinarObjetos(
  { a: 1, b: 2 },
  { b: 3, c: 4 }
);

console.log(resultado);  // { a: 1, b: 3, c: 4 }
```

**Con validación de objetos:**

```javascript
function combinarObjetos(obj1, obj2) {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    throw new Error("Ambos argumentos deben ser objetos");
  }
  return { ...obj1, ...obj2 };
}
```

</details>
