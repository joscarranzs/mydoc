---
title: Objetos avanzados
description: Prototipos, descriptors.
module: lenguajes/javascript
submodule: general
order: 23
---

Al completar esta guía podrás:

- Entender la cadena de prototipos en JavaScript
- Usar Object.create para establecer herencia
- Configurar property descriptors
- Prevenir modificaciones con Object methods

---

## Prototipos

Cada objeto en JavaScript tiene un **prototipo** — otro objeto del que hereda propiedades.

```javascript
let objeto = {};
console.log(Object.getPrototypeOf(objeto));  // Object.prototype
```

Cuando accedes a una propiedad, JavaScript la busca en el objeto. Si no la encuentra, la busca en el prototipo, luego en el prototipo del prototipo, hasta llegar a `null`.

```javascript
let usuario = {
  nombre: "Ana"
};

console.log(usuario.nombre);      // "Ana" — propia
console.log(usuario.toString());  // "[object Object]" — heredada de Object.prototype
console.log(usuario.hasOwnProperty("nombre"));  // true — heredada
```

---

## Cadena de prototipos

```javascript
let animal = {
  respirar() {
    return "respirando";
  }
};

let perro = Object.create(animal);
perro.ladrar = function() {
  return "guau";
};

console.log(perro.ladrar());    // "guau" — propia
console.log(perro.respirar());  // "respirando" — heredada de animal

console.log(Object.getPrototypeOf(perro));  // animal
console.log(Object.getPrototypeOf(animal)); // Object.prototype
console.log(Object.getPrototypeOf(Object.prototype)); // null
```

```
perro → animal → Object.prototype → null
```

---

## Object.create

Crea un objeto con un prototipo específico.

```javascript
let metodos = {
  saludar() {
    return `Hola, soy ${this.nombre}`;
  },
  esMayorDeEdad() {
    return this.edad >= 18;
  }
};

let ana = Object.create(metodos);
ana.nombre = "Ana";
ana.edad = 30;

console.log(ana.saludar());       // "Hola, soy Ana"
console.log(ana.esMayorDeEdad()); // true
```

### Object.create con null

Crea un objeto sin prototipo — sin métodos heredados.

```javascript
let puro = Object.create(null);
console.log(puro.toString);  // undefined — no hereda nada
```

Útil para mapas sin contaminación de prototipo.

---

## hasOwnProperty vs in

`hasOwnProperty` verifica propiedades **propias**. `in` verifica también las heredadas.

```javascript
let animal = { tipo: "mamífero" };
let perro = Object.create(animal);
perro.nombre = "Rex";

console.log(perro.hasOwnProperty("nombre"));  // true — propia
console.log(perro.hasOwnProperty("tipo"));    // false — heredada

console.log("nombre" in perro);  // true
console.log("tipo" in perro);    // true — también en el prototipo
console.log("toString" in perro); // true — en Object.prototype
```

---

## Property descriptors

Las propiedades de un objeto tienen **descriptores** que controlan su comportamiento.

```javascript
let usuario = { nombre: "Ana" };

let descriptor = Object.getOwnPropertyDescriptor(usuario, "nombre");
console.log(descriptor);
// { value: "Ana", writable: true, enumerable: true, configurable: true }
```

### Configurar propiedades

```javascript
let config = {};

Object.defineProperty(config, "MAX_USUARIOS", {
  value: 100,
  writable: false,     // No se puede reasignar
  enumerable: false,   // No aparece en Object.keys
  configurable: false  // No se puede redefinir ni eliminar
});

console.log(config.MAX_USUARIOS);  // 100
config.MAX_USUARIOS = 200;
console.log(config.MAX_USUARIOS);  // 100 — writable: false

console.log(Object.keys(config));  // [] — enumerable: false
```

| Descriptor | Descripción | Por defecto |
|---|---|---|
| `value` | Valor de la propiedad | `undefined` |
| `writable` | Permite reasignar | `false` |
| `enumerable` | Aparece en iteraciones | `false` |
| `configurable` | Permite redefinir/eliminar | `false` |

---

## Prevenir modificaciones

| Método | Agregar | Eliminar | Modificar |
|---|---|---|---|
| `Object.preventExtensions()` | No | Sí | Sí |
| `Object.seal()` | No | No | Sí |
| `Object.freeze()` | No | No | No |

```javascript
let usuario = { nombre: "Ana" };

Object.freeze(usuario);
usuario.nombre = "Sofía";       // No cambia (silencioso en modo normal)
usuario.edad = 30;              // No se agrega
delete usuario.nombre;          // No se elimina

console.log(Object.isFrozen(usuario));  // true
```

---

## Getter y setter dinámicos

Puedes definir propiedades calculadas con get/set en `defineProperty`.

```javascript
let usuario = { nombre: "Ana", apellido: "García" };

Object.defineProperty(usuario, "nombreCompleto", {
  get() {
    return `${this.nombre} ${this.apellido}`;
  },
  set(valor) {
    [this.nombre, this.apellido] = valor.split(" ");
  },
  enumerable: true
});

console.log(usuario.nombreCompleto);  // "Ana García"
usuario.nombreCompleto = "Luis Pérez";
console.log(usuario.nombre);  // "Luis"
```

---

## Propiedades enumerables y no enumerables

```javascript
let usuario = { nombre: "Ana" };

Object.defineProperty(usuario, "id", {
  value: 12345,
  enumerable: false
});

console.log(Object.keys(usuario));       // ["nombre"] — id no aparece
console.log(usuario.id);                 // 12345 — accesible directamente
console.log(Object.getOwnPropertyNames(usuario));  // ["nombre", "id"] — todas
```

---

## Resumen

| Concepto | Descripción |
|---|---|
| Prototipo | Objeto del que se heredan propiedades |
| `Object.create(proto)` | Crea objeto con prototipo específico |
| `hasOwnProperty()` | Propiedad propia (no heredada) |
| `defineProperty()` | Configura descriptores de propiedad |
| `freeze()` | Objeto completamente inmutable |
| `seal()` | No permite agregar/eliminar, sí modificar |
| `preventExtensions()` | Solo evita agregar propiedades |

- Todo objeto tiene un prototipo (excepto `Object.create(null)`)
- La cadena de prototipos termina en `null`
- Los property descriptors controlan escritura, enumeración y configurabilidad
- `Object.keys()` solo muestra propiedades enumerables
- Usa `Object.getOwnPropertyNames()` para todas las propiedades propias

---

## Ejercicio

Usando `Object.create`, crea un objeto `vehiculo` con un método `encender()` que retorne `"Vehículo encendido"`. Luego crea un objeto `coche` que herede de `vehiculo` y agregue un método `conducir()`.

**Instrucciones paso a paso:**

1. Crea `vehiculo` con método `encender()`
2. Crea `coche` usando `Object.create(vehiculo)`
3. Agrega método `conducir()` a `coche`
4. Verifica que `coche.encender()` funcione (heredado)
5. Verifica que `coche.conducir()` funcione (propio)

<details>
<summary>Mostrar solución</summary>

```javascript
let vehiculo = {
  encender() {
    return "Vehículo encendido";
  },
  apagar() {
    return "Vehículo apagado";
  }
};

let coche = Object.create(vehiculo);
coche.conducir = function() {
  return "Conduciendo el coche";
};
coche.tipo = "Sedán";

console.log(coche.encender());   // "Vehículo encendido" — heredado
console.log(coche.conducir());   // "Conduciendo el coche" — propio
console.log(coche.tipo);         // "Sedán" — propio
console.log(coche.apagar());     // "Vehículo apagado" — heredado

console.log(coche.hasOwnProperty("encender"));  // false
console.log(coche.hasOwnProperty("conducir"));  // true
```

</details>
