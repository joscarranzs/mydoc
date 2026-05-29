---
title: Typed Arrays
description: Arrays de tipo fijo.
module: lenguajes/javascript
submodule: general
order: 25
---

Al completar esta guía podrás:

- Crear TypedArrays para datos numéricos
- Elegir el tipo adecuado según el rango y precisión
- Leer y escribir datos binarios con ArrayBuffer
- Aplicar TypedArrays en casos de rendimiento

---

## ¿Qué son?

Los TypedArrays son arreglos que solo contienen un tipo específico de número. Trabajan sobre un `ArrayBuffer` (memoria contigua) y ofrecen mejor rendimiento que los arreglos normales para datos numéricos.

```javascript
// Arreglo normal — cualquier tipo, cualquier tamaño
let normal = [1, 2, 3];

// TypedArray — solo enteros de 8 bits sin signo
let tipado = new Uint8Array([1, 2, 3]);
```

---

## Tipos disponibles

| Tipo | Rango | Tamaño | Descripción |
|---|---|---|---|
| `Int8Array` | -128 a 127 | 1 byte | Entero con signo |
| `Uint8Array` | 0 a 255 | 1 byte | Entero sin signo |
| `Uint8ClampedArray` | 0 a 255 | 1 byte | Satura (útil para Canvas) |
| `Int16Array` | -32768 a 32767 | 2 bytes | Entero corto con signo |
| `Uint16Array` | 0 a 65535 | 2 bytes | Entero corto sin signo |
| `Int32Array` | -2³¹ a 2³¹-1 | 4 bytes | Entero con signo |
| `Uint32Array` | 0 a 2³²-1 | 4 bytes | Entero sin signo |
| `Float32Array` | ±1.4e-45 a ±3.4e38 | 4 bytes | Flotante simple precisión |
| `Float64Array` | ±5e-324 a ±1.8e308 | 8 bytes | Flotante doble precisión |
| `BigInt64Array` | -2⁶³ a 2⁶³-1 | 8 bytes | Entero grande con signo |
| `BigUint64Array` | 0 a 2⁶⁴-1 | 8 bytes | Entero grande sin signo |

---

## Creación

### Con tamaño fijo

```javascript
let buffer = new ArrayBuffer(16);  // 16 bytes
let vista = new Uint8Array(buffer);

console.log(vista.length);  // 16 — 16 elementos de 1 byte
console.log(vista.byteLength);  // 16
```

### Desde un arreglo

```javascript
let enteros = new Uint8Array([10, 20, 30, 40]);
console.log(enteros);  // Uint8Array(4) [10, 20, 30, 40]
```

### Con valor por defecto

```javascript
let ceros = new Float32Array(5);
console.log(ceros);  // Float32Array(5) [0, 0, 0, 0, 0]
```

---

## Comportamiento de límites

Los TypedArrays truncan o saturan los valores fuera de rango.

```javascript
let bytes = new Uint8Array(3);
bytes[0] = 255;
bytes[1] = 300;   // Truncado a 44 (300 - 256)
bytes[2] = -10;   // Truncado a 246 (256 - 10)

console.log(bytes);  // Uint8Array(3) [255, 44, 246]
```

Uint8ClampedArray satura en lugar de truncar:

```javascript
let clamped = new Uint8ClampedArray(3);
clamped[0] = 255;
clamped[1] = 300;   // Saturado a 255
clamped[2] = -10;   // Saturado a 0

console.log(clamped);  // Uint8ClampedArray(3) [255, 255, 0]
```

---

## Métodos

Los TypedArrays tienen métodos similares a los arreglos normales.

```javascript
let arr = new Uint8Array([10, 20, 30, 40, 50]);

console.log(arr.length);      // 5
console.log(arr[0]);          // 10
console.log(arr.includes(30)); // true
console.log(arr.indexOf(40)); // 3

arr.set([100, 200], 2);       // Reemplaza desde índice 2
console.log(arr);  // Uint8Array(5) [10, 20, 100, 200, 50]

let sub = arr.subarray(1, 3);
console.log(sub);  // Uint8Array(2) [20, 100]
```

> **Nota:** `subarray()` crea una vista sobre el mismo buffer — no es una copia. Modificar `sub` afecta al original.

---

## ArrayBuffer

Un `ArrayBuffer` es un bloque de memoria contigua. Los TypedArrays son vistas sobre ese bloque.

```javascript
// Crear buffer de 8 bytes
let buffer = new ArrayBuffer(8);

// Dos vistas sobre el mismo buffer
let vista8 = new Uint8Array(buffer);
let vista16 = new Uint16Array(buffer);

vista16[0] = 1000;

console.log(vista8[0]);  // 232 — parte baja del entero de 16 bits
console.log(vista8[1]);  // 3 — parte alta del entero de 16 bits
```

---

## DataView

`DataView` permite leer y escribir múltiples tipos en un buffer con control de endianness.

```javascript
let buffer = new ArrayBuffer(8);
let vista = new DataView(buffer);

vista.setInt32(0, 42, true);     // little-endian
vista.setFloat32(4, 3.14, true); // little-endian

console.log(vista.getInt32(0, true));   // 42
console.log(vista.getFloat32(4, true)); // 3.14
```

> **Regla:** usa `DataView` cuando necesites mezclar tipos de datos en un mismo buffer o controlar el orden de bytes.

---

## Canvas y TypedArrays

Los TypedArrays se usan internamente en Canvas para manipular píxeles.

```javascript
let canvas = document.getElementById("miCanvas");
let ctx = canvas.getContext("2d");
let imageData = ctx.getImageData(0, 0, 100, 100);

// imageData.data es un Uint8ClampedArray
let pixeles = imageData.data;

// Volver todos los píxeles rojos
for (let i = 0; i < pixeles.length; i += 4) {
  pixeles[i] = 255;      // R
  pixeles[i + 1] = 0;    // G
  pixeles[i + 2] = 0;    // B
  pixeles[i + 3] = 255;  // A
}

ctx.putImageData(imageData, 0, 0);
```

---

## Rendimiento

Los TypedArrays son más rápidos que los arreglos normales para operaciones numéricas intensivas.

```javascript
let tamaño = 1000000;

let normal = new Array(tamaño);
let tipado = new Float64Array(tamaño);

// Llenar ambos
for (let i = 0; i < tamaño; i++) {
  normal[i] = i;
  tipado[i] = i;
}

console.time("normal");
let sumaNormal = normal.reduce((a, b) => a + b, 0);
console.timeEnd("normal");

console.time("tipado");
let sumaTipado = tipado.reduce((a, b) => a + b, 0);
console.timeEnd("tipado");
```

---

## Resumen

| API | Propósito |
|---|---|
| `ArrayBuffer` | Bloque de memoria contigua |
| `TypedArray` | Vista de tipo fijo sobre un buffer |
| `DataView` | Vista con control de tipo y endianness |

- Los TypedArrays solo almacenan un tipo numérico
- Valores fuera de rango se truncan (o saturan con Uint8Clamped)
- `subarray()` crea una vista sobre el mismo buffer
- Útiles para audio, video, Canvas, WebGL y operaciones numéricas intensivas
- Ofrecen mejor rendimiento que arreglos normales para datos numéricos

---

## Ejercicio

Crea un `Uint8Array` de 5 elementos con valores `[10, 20, 30, 40, 50]`. Luego, escribe una función que reciba el TypedArray y retorne la suma de todos sus elementos.

**Instrucciones paso a paso:**

1. Crea `let datos = new Uint8Array([10, 20, 30, 40, 50])`
2. Define `sumarTyped(arr)` que itere y sume
3. Calcula el promedio dividiendo por `arr.length`
4. Prueba la función
5. Intenta asignar un valor fuera de rango (255 + 1) y observa

<details>
<summary>Mostrar solución</summary>

```javascript
let datos = new Uint8Array([10, 20, 30, 40, 50]);

function sumarTyped(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}

console.log(sumarTyped(datos));  // 150
console.log(sumarTyped(datos) / datos.length);  // 30

// Intento de valor fuera de rango
datos[0] = 300;
console.log(datos[0]);  // 44 — truncado (300 - 256)
```

**Con reduce:**

```javascript
function sumarTyped(arr) {
  return arr.reduce((suma, val) => suma + val, 0);
}
```

</details>
