---
title: Meta y Proxy
description: Reflect y Proxy.
module: lenguajes/javascript
submodule: general
order: 24
---

Al completar esta guía podrás:

- Crear proxies para interceptar operaciones en objetos
- Usar Reflect para delegar operaciones al comportamiento por defecto
- Aplicar proxies para validación, registro y caching
- Entender las trampas (traps) disponibles

---

## Proxy

Un `Proxy` envuelve un objeto y permite interceptar sus operaciones fundamentales.

```javascript
let objetivo = { mensaje: "Hola" };

let manipulador = {
  get(objetivo, propiedad) {
    console.log(`Accediendo a: ${propiedad}`);
    return objetivo[propiedad];
  }
};

let proxy = new Proxy(objetivo, manipulador);

console.log(proxy.mensaje);
// "Accediendo a: mensaje"
// "Hola"
```

---

## Validación con Proxy

```javascript
let usuario = {
  nombre: "Ana",
  edad: 30
};

let validar = {
  set(objetivo, propiedad, valor) {
    if (propiedad === "edad" && (typeof valor !== "number" || valor < 0 || valor > 150)) {
      throw new Error("Edad inválida");
    }
    if (propiedad === "nombre" && typeof valor !== "string") {
      throw new Error("Nombre debe ser texto");
    }
    objetivo[propiedad] = valor;
    return true;
  }
};

let proxy = new Proxy(usuario, validar);

proxy.edad = 31;          // Correcto
// proxy.edad = -5;       // Error: Edad inválida
// proxy.edad = "treinta"; // Error: Edad inválida
// proxy.nombre = 123;    // Error: Nombre debe ser texto
```

---

## Logging automático

```javascript
let registro = [];

function crearProxyConLog(objetivo) {
  return new Proxy(objetivo, {
    get(obj, prop) {
      registro.push(`${new Date().toISOString()} - GET ${prop}`);
      return obj[prop];
    },
    set(obj, prop, valor) {
      registro.push(`${new Date().toISOString()} - SET ${prop} = ${valor}`);
      obj[prop] = valor;
      return true;
    }
  });
}

let datos = { x: 10 };
let proxy = crearProxyConLog(datos);

proxy.x;         // Registra GET x
proxy.y = 20;    // Registra SET y = 20

console.log(registro);
// [ "2025-... - GET x", "2025-... - SET y = 20" ]
```

---

## Default values con Proxy

```javascript
function conValoresPorDefecto(objetivo, defaults) {
  return new Proxy(objetivo, {
    get(obj, prop) {
      if (prop in obj) {
        return obj[prop];
      }
      return defaults[prop];
    }
  });
}

let config = conValoresPorDefecto(
  { tema: "oscuro" },
  { idioma: "es", debug: false }
);

console.log(config.tema);   // "oscuro" — propio
console.log(config.idioma); // "es" — por defecto
console.log(config.debug);  // false — por defecto
```

---

## Trampas principales

| Trampa | Cuándo se activa |
|---|---|
| `get` | Lectura de propiedad |
| `set` | Escritura de propiedad |
| `has` | Operador `in` |
| `deleteProperty` | Operador `delete` |
| `apply` | Llamada a función |
| `construct` | Operador `new` |
| `ownKeys` | `Object.keys()`, `for...in` |
| `getPrototypeOf` | `Object.getPrototypeOf()` |

---

## Reflect

`Reflect` es un objeto con métodos que corresponden a las trampas de Proxy. Permite delegar la operación por defecto.

```javascript
let objetivo = { a: 1, b: 2 };

let proxy = new Proxy(objetivo, {
  get(obj, prop, receptor) {
    console.log(`GET ${prop}`);
    return Reflect.get(obj, prop, receptor);
  },
  set(obj, prop, valor, receptor) {
    console.log(`SET ${prop} = ${valor}`);
    return Reflect.set(obj, prop, valor, receptor);
  }
});

proxy.a;        // "GET a"
proxy.c = 10;   // "SET c = 10"
```

> **Regla:** siempre usa `Reflect` dentro de las trampas de Proxy. Garantiza que el comportamiento por defecto se mantenga correctamente.

---

## Proxy con funciones

```javascript
function crearProxyAsync(fn) {
  return new Proxy(fn, {
    apply(objetivo, thisArg, args) {
      console.log(`Llamada a ${objetivo.name} con:`, args);
      let resultado = Reflect.apply(objetivo, thisArg, args);
      console.log(`Resultado:`, resultado);
      return resultado;
    }
  });
}

let sumar = (a, b) => a + b;
let sumarConLog = crearProxyAsync(sumar);

console.log(sumarConLog(5, 3));
// "Llamada a sumar con: [5, 3]"
// "Resultado: 8"
// 8
```

---

## Proxy para arrays

```javascript
let numeros = [1, 2, 3];

let proxy = new Proxy(numeros, {
  get(obj, prop) {
    if (prop === "ultimo") {
      return obj[obj.length - 1];
    }
    if (prop === "primero") {
      return obj[0];
    }
    return Reflect.get(obj, prop);
  }
});

console.log(proxy.primero);  // 1
console.log(proxy.ultimo);   // 3
console.log(proxy.length);   // 3
```

---

## Privacidad con Proxy

```javascript
function crearPrivado(objeto, clavesPrivadas) {
  return new Proxy(objeto, {
    get(obj, prop) {
      if (clavesPrivadas.includes(prop)) {
        return undefined;
      }
      return Reflect.get(obj, prop);
    },
    set(obj, prop, valor) {
      if (clavesPrivadas.includes(prop)) {
        throw new Error(`No se puede modificar ${prop}`);
      }
      return Reflect.set(obj, prop, valor);
    },
    has(obj, prop) {
      if (clavesPrivadas.includes(prop)) {
        return false;
      }
      return Reflect.has(obj, prop);
    }
  });
}

let usuario = crearPrivado(
  { nombre: "Ana", saldo: 1000, _token: "abc123" },
  ["saldo", "_token"]
);

console.log(usuario.nombre);  // "Ana"
console.log(usuario.saldo);   // undefined — oculto
console.log("saldo" in usuario);  // false
```

---

## Resumen

| Objeto | Propósito |
|---|---|
| `Proxy` | Intercepta operaciones en un objeto |
| `Reflect` | Delega operaciones al comportamiento por defecto |

- Proxy permite validar, registrar, ocultar o modificar acceso a propiedades
- Las trampas cubren get, set, has, delete, apply, construct, ownKeys
- Siempre usa `Reflect` dentro de trampas para preservar el comportamiento estándar
- Proxy no tiene equivalente directo sin él — no hay polyfill completo
- Útil para ORMs, validación, caching, logging y sistemas reactivos

---

## Ejercicio

Crea un Proxy que registre en un arreglo cada vez que se accede a una propiedad de un objeto, incluyendo la propiedad consultada y la hora.

**Instrucciones paso a paso:**

1. Crea un objeto `objetivo = { a: 1, b: 2, c: 3 }`
2. Crea un `manipulador` con trampa `get`
3. En la trampa, guarda un objeto `{ propiedad, hora }` en un arreglo `accesos`
4. Retorna el valor usando `Reflect.get()`
5. Accede a `a`, `b`, `c` y verifica el registro

<details>
<summary>Mostrar solución</summary>

```javascript
let objetivo = { a: 1, b: 2, c: 3 };
let accesos = [];

let manipulador = {
  get(obj, prop, receptor) {
    if (prop !== "accesos") {
      accesos.push({
        propiedad: prop,
        hora: new Date().toISOString()
      });
    }
    return Reflect.get(obj, prop, receptor);
  }
};

let proxy = new Proxy(objetivo, manipulador);

console.log(proxy.a);  // 1
console.log(proxy.b);  // 2
console.log(proxy.a);  // 1 — segundo acceso
console.log(proxy.c);  // 3

console.log(accesos);
// [
//   { propiedad: "a", hora: "..." },
//   { propiedad: "b", hora: "..." },
//   { propiedad: "a", hora: "..." },
//   { propiedad: "c", hora: "..." }
// ]
```

</details>
