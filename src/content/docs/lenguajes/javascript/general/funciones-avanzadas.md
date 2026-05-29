---
title: Funciones avanzadas
description: Closures, currying, composition.
module: lenguajes/javascript
submodule: general
order: 22
---

Al completar esta guía podrás:

- Aplicar closures para mantener estado privado
- Usar currying para transformar funciones
- Combinar funciones con composición
- Crear funciones de orden superior

---

## Closures avanzados

Un closure es una función que recuerda el scope donde fue creada.

### Estado privado

```javascript
function crearBanco(saldoInicial = 0) {
  let saldo = saldoInicial;

  return {
    depositar(monto) {
      if (monto > 0) {
        saldo += monto;
        return saldo;
      }
    },
    retirar(monto) {
      if (monto > 0 && monto <= saldo) {
        saldo -= monto;
        return saldo;
      }
    },
    obtenerSaldo() {
      return saldo;
    }
  };
}

let cuenta = crearBanco(1000);
cuenta.depositar(500);
console.log(cuenta.obtenerSaldo());  // 1500
// console.log(cuenta.saldo);  // undefined — privado real
```

### Memoización

Almacena resultados de llamadas anteriores para evitar recalcular.

```javascript
function memoizar(fn) {
  let cache = {};

  return function(...args) {
    let clave = JSON.stringify(args);

    if (cache[clave] !== undefined) {
      console.log("Cache hit");
      return cache[clave];
    }

    console.log("Calculando");
    let resultado = fn(...args);
    cache[clave] = resultado;
    return resultado;
  };
}

let factorial = memoizar(function(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5));  // Calculando, 120
console.log(factorial(5));  // Cache hit, 120
console.log(factorial(6));  // Calculando (5 está en cache), 720
```

---

## Currying

Transforma una función que recibe múltiples parámetros en una secuencia de funciones que reciben un parámetro cada una.

```javascript
// Función normal
function sumar(a, b, c) {
  return a + b + c;
}

// Versión curried
function sumarCurried(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(sumarCurried(1)(2)(3));  // 6

// Con arrow functions
let sumarCurried2 = a => b => c => a + b + c;
console.log(sumarCurried2(1)(2)(3));  // 6
```

### Aplicación parcial

Puedes fijar argumentos y reutilizar la función parcial.

```javascript
function crearSaludo(saludo) {
  return function(nombre) {
    return `${saludo}, ${nombre}`;
  };
}

let saludarFormal = crearSaludo("Estimado");
let saludarCasual = crearSaludo("Hola");

console.log(saludarFormal("Ana"));  // "Estimado, Ana"
console.log(saludarCasual("Luis")); // "Hola, Luis"
```

> **Regla:** el currying es útil cuando necesitas crear variaciones de una función con argumentos predefinidos.

---

## Composición de funciones

Combina funciones pequeñas para crear operaciones más complejas.

```javascript
let duplicar = x => x * 2;
let sumarUno = x => x + 1;
let alCuadrado = x => x * x;

function componer(...fns) {
  return function(valorInicial) {
    return fns.reduce((valor, fn) => fn(valor), valorInicial);
  };
}

let transformar = componer(duplicar, sumarUno, alCuadrado);
console.log(transformar(3));
// 1: 3 * 2 = 6
// 2: 6 + 1 = 7
// 3: 7 * 7 = 49
```

### pipe vs compose

```javascript
// Pipe — izquierda a derecha (natural)
let pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

// Compose — derecha a izquierda (matemático)
let compose = (...fns) => x => fns.reduceRight((v, fn) => fn(v), x);

let formato = pipe(
  x => x.trim(),
  x => x.toLowerCase(),
  x => x.charAt(0).toUpperCase() + x.slice(1)
);

console.log(formato("  HOLA MUNDO  "));  // "Hola mundo"
```

---

## Funciones de orden superior

Son funciones que reciben o retornan otras funciones.

### once

Garantiza que una función se ejecute solo una vez.

```javascript
function once(fn) {
  let ejecutado = false;

  return function(...args) {
    if (!ejecutado) {
      ejecutado = true;
      return fn(...args);
    }
  };
}

let inicializar = once(() => console.log("Inicializado"));

inicializar();  // "Inicializado"
inicializar();  // No hace nada
inicializar();  // No hace nada
```

### debounce

Retrasa la ejecución hasta que pase un tiempo sin nuevas llamadas.

```javascript
function debounce(fn, tiempo) {
  let timeout;

  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), tiempo);
  };
}

let buscar = debounce(texto => {
  console.log("Buscando:", texto);
}, 300);

buscar("a");
buscar("ab");
buscar("abc");
// Solo ejecuta "Buscando: abc" después de 300ms
```

### throttle

Ejecuta la función al menos una vez cada cierto tiempo.

```javascript
function throttle(fn, intervalo) {
  let ultima = 0;

  return function(...args) {
    let ahora = Date.now();
    if (ahora - ultima >= intervalo) {
      ultima = ahora;
      fn(...args);
    }
  };
}

let logScroll = throttle(() => console.log("Scrolling"), 1000);
window.addEventListener("scroll", logScroll);
```

---

## Recursión

Una función que se llama a sí misma.

```javascript
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Recursión de cola (optimizable)
function factorialTail(n, acumulador = 1) {
  if (n <= 1) return acumulador;
  return factorialTail(n - 1, n * acumulador);
}
```

---

## Partial application

Fija algunos argumentos de una función sin transformarla completamente.

```javascript
function parcial(fn, ...argsFijos) {
  return function(...argsRestantes) {
    return fn(...argsFijos, ...argsRestantes);
  };
}

function sumar(a, b, c) {
  return a + b + c;
}

let sumar5 = parcial(sumar, 5);
console.log(sumar5(3, 2));  // 10 — 5 + 3 + 2

let sumar5y3 = parcial(sumar, 5, 3);
console.log(sumar5y3(2));   // 10 — 5 + 3 + 2
```

---

## Resumen

| Técnica | Descripción |
|---|---|
| Closure | Función que recuerda su ámbito original |
| Memoización | Cachea resultados de llamadas previas |
| Currying | Transforma función multi-parámetro en cadena de funciones unarias |
| Composición | Combina funciones pequeñas para crear operaciones complejas |
| once | Ejecuta una función una sola vez |
| debounce | Ejecuta después de una pausa sin nuevas llamadas |
| throttle | Ejecuta a intervalos regulares |

- Los closures permiten crear datos privados y persistencia
- La composición favorece funciones pequeñas y reutilizables
- `debounce` y `throttle` optimizan eventos frecuentes
- La recursión es útil para estructuras de datos anidadas
- La aplicación parcial fija argumentos para crear funciones especializadas

---

## Ejercicio

Crea una función `componer` que reciba dos funciones y retorne una nueva función que aplique la primera y luego la segunda.

**Instrucciones paso a paso:**

1. Crea `componer(f, g)` que retorna `x => g(f(x))`
2. Crea `formatearTexto` componiendo:
   - `trim` → elimina espacios
   - `capitalizar` → primera letra mayúscula
3. Prueba con `"  hola mundo  "`

<details>
<summary>Mostrar solución</summary>

```javascript
function componer(f, g) {
  return function(x) {
    return g(f(x));
  };
}

let trim = str => str.trim();
let capitalizar = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

let formatearTexto = componer(trim, capitalizar);
console.log(formatearTexto("  hOLA  "));  // "Hola"

// Con pipe para múltiples funciones
let pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

let limpiar = pipe(
  str => str.trim(),
  str => str.toLowerCase(),
  str => str.replace(/\s+/g, " "),
  str => str.charAt(0).toUpperCase() + str.slice(1)
);

console.log(limpiar("  HOLA    MUNDO  "));  // "Hola mundo"
```

</details>
