---
title: Números
description: Operaciones numéricas.
module: lenguajes/javascript
submodule: general
order: 6
---

Al completar esta guía podrás:

- Trabajar con números enteros y decimales en JavaScript
- Identificar los valores numéricos especiales
- Aplicar conversiones entre tipos numéricos
- Controlar la precisión de operaciones decimales

---

## Escritura de números

JavaScript usa el tipo `number` para enteros y decimales.

```javascript
let entero = 42;
let decimal = 3.14;
let negativo = -10;
let notacion = 1.5e6;  // 1,500,000
let separador = 1_000_000;  // 1000000 — guion bajo como separador visual
```

> **Nota:** no existe un tipo específico para enteros. Todos los números son `number`, que sigue el estándar IEEE 754 para punto flotante de 64 bits.

---

## Precisión decimal

Los números decimales pueden tener problemas de precisión debido a la representación binaria.

```javascript
console.log(0.1 + 0.2);  // 0.30000000000000004 — no es 0.3
console.log(0.1 + 0.2 === 0.3);  // false
```

Para operaciones que requieren precisión exacta (como dinero):

```javascript
// Redondear al centavo más cercano
let total = (0.1 + 0.2) * 100;
console.log(Math.round(total) / 100);  // 0.3

// Fijar decimales
console.log((0.1 + 0.2).toFixed(2));  // "0.30"
```

> **Regla:** nunca hagas comparaciones directas con decimales. Usa un margen de error o redondea antes de comparar.

---

## Valores especiales

### Infinity

Representa el infinito matemático. Se obtiene al dividir por cero o al superar el límite numérico.

```javascript
console.log(1 / 0);   // Infinity
console.log(-1 / 0);  // -Infinity
console.log(Infinity > 1e308);  // true
```

### NaN (Not a Number)

Resultado de operaciones matemáticas inválidas.

```javascript
console.log(0 / 0);           // NaN
console.log("texto" * 2);    // NaN
console.log(Math.sqrt(-1));  // NaN
```

`NaN` tiene una propiedad peculiar: no es igual a nada, ni siquiera a sí mismo.

```javascript
console.log(NaN === NaN);  // false — única excepción en JavaScript
console.log(isNaN(NaN));   // true
console.log(Number.isNaN(NaN));  // true — versión más estricta
```

> **Regla:** usa `Number.isNaN()` en lugar de `isNaN()` para evitar falsos positivos. `isNaN("hola")` devuelve `true` porque convierte el argumento a número primero.

---

## Conversión a número

### Number()

Convierte cualquier valor a número.

```javascript
console.log(Number("123"));     // 123
console.log(Number("12.5"));    // 12.5
console.log(Number("texto"));   // NaN
console.log(Number(true));      // 1
console.log(Number(false));     // 0
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN
```

### parseInt y parseFloat

Convierten cadenas a números, ignorando caracteres no numéricos al final.

```javascript
console.log(parseInt("42"));        // 42
console.log(parseInt("42px"));      // 42 — ignora "px"
console.log(parseInt("1010", 2));   // 10 — binario a decimal
console.log(parseFloat("3.14cm"));  // 3.14 — ignora "cm"
```

### Operador unario +

Forma abreviada de convertir a número.

```javascript
let precio = "19.99";
let total = +precio * 1.16;
console.log(total);  // 23.1884
```

---

## Redondeo

| Función | Descripción | Ejemplo |
|---|---|---|
| `Math.round()` | Redondea al entero más cercano | `Math.round(4.5)` → 5 |
| `Math.floor()` | Redondea hacia abajo | `Math.floor(4.9)` → 4 |
| `Math.ceil()` | Redondea hacia arriba | `Math.ceil(4.1)` → 5 |
| `Math.trunc()` | Elimina la parte decimal | `Math.trunc(4.9)` → 4 |
| `toFixed()` | Fija decimales (retorna string) | `(4.567).toFixed(2)` → "4.57" |

```javascript
let num = 4.7;

console.log(Math.round(num));  // 5
console.log(Math.floor(num));  // 4
console.log(Math.ceil(num));   // 5
console.log(Math.trunc(num));  // 4
console.log(num.toFixed(0));   // "5"
```

> **Regla:** `toFixed()` retorna un string. Si necesitas un número, conviértelo con `Number()` o `parseFloat()`.

---

## Comprobaciones

### isInteger

Verifica si un valor es un entero.

```javascript
console.log(Number.isInteger(42));     // true
console.log(Number.isInteger(3.14));   // false
console.log(Number.isInteger("42"));   // false — no es number
```

### isFinite

Verifica si un valor es un número finito (no Infinity ni NaN).

```javascript
console.log(Number.isFinite(42));      // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN));     // false
```

---

## Límites numéricos

JavaScript puede representar números dentro de ciertos rangos.

```javascript
console.log(Number.MAX_VALUE);    // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);    // 5e-324 — el positivo más pequeño
console.log(Number.MAX_SAFE_INTEGER);   // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);   // -9007199254740991
```

Más allá de `MAX_SAFE_INTEGER`, las operaciones pierden precisión:

```javascript
console.log(9007199254740991 + 1);  // 9007199254740992
console.log(9007199254740991 + 2);  // 9007199254740992 — mismo resultado
```

Para números mayores, usa `BigInt`.

---

## Comparación segura con Object.is

`Object.is` compara dos valores de forma más precisa que `===` en casos especiales.

```javascript
console.log(Object.is(NaN, NaN));       // true — a diferencia de ===
console.log(Object.is(0, -0));          // false — distingue +0 de -0
console.log(Object.is(42, 42));         // true
```

---

## Resumen

- Los números en JavaScript siguen el estándar IEEE 754 (punto flotante de 64 bits)
- Los decimales pueden tener errores de precisión — usa `toFixed()` o `Math.round()` para controlarlos
- `NaN` no es igual a nada, ni siquiera a sí mismo
- `Infinity` se obtiene al dividir por cero
- `Number()` convierte valores a número; `parseInt()` y `parseFloat()` parsean cadenas
- `Number.isNaN()` es más confiable que `isNaN()`
- `Number.isInteger()` verifica si un valor es entero
- Para números mayores a `MAX_SAFE_INTEGER`, usa `BigInt`

---

## Ejercicio

Escribe una función que reciba un precio en cadena (ej. `"$19.99"`) y un porcentaje de descuento (ej. `15`), y devuelva el precio final redondeado a dos decimales.

**Instrucciones paso a paso:**

1. Crea una función `calcularDescuento(precioStr, porcentaje)`
2. Limpia el precio: elimina el símbolo `$` con `replace` y conviértelo a número
3. Calcula el descuento: `precio * (porcentaje / 100)`
4. Resta el descuento al precio original
5. Redondea el resultado a dos decimales con `Math.round()` multiplicando por 100
6. Retorna el precio final como número

<details>
<summary>Mostrar solución</summary>

```javascript
function calcularDescuento(precioStr, porcentaje) {
  let precio = parseFloat(precioStr.replace("$", ""));
  let descuento = precio * (porcentaje / 100);
  let precioFinal = precio - descuento;

  return Math.round(precioFinal * 100) / 100;
}

console.log(calcularDescuento("$19.99", 15));  // 16.99
console.log(calcularDescuento("$100.00", 25)); // 75
console.log(calcularDescuento("$9.99", 10));   // 8.99
```

</details>
