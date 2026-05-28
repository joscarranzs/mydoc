---
title: Math
description: Objeto matemático.
module: lenguajes/javascript
submodule: general
order: 7
---

Al completar esta guía podrás:

- Usar el objeto Math para operaciones matemáticas comunes
- Generar números aleatorios en rangos específicos
- Aplicar funciones trigonométricas y logarítmicas
- Obtener valores máximos y mínimos de un conjunto

---

## El objeto Math

`Math` es un objeto global que proporciona funciones y constantes matemáticas. No es una clase, por lo que no se instancia con `new`.

```javascript
console.log(Math.PI);  // 3.141592653589793
console.log(Math.E);   // 2.718281828459045
```

---

## Redondeo

```javascript
let num = 4.7;

console.log(Math.round(num));  // 5 — redondeo estándar
console.log(Math.floor(num));  // 4 — hacia abajo
console.log(Math.ceil(num));   // 5 — hacia arriba
console.log(Math.trunc(num));  // 4 — elimina decimales
```

Diferencia entre `floor` y `trunc` con números negativos:

```javascript
console.log(Math.floor(-4.7));  // -5 — hacia abajo (menor)
console.log(Math.trunc(-4.7));  // -4 — elimina decimales
```

---

## Valor absoluto

```javascript
console.log(Math.abs(-5));    // 5
console.log(Math.abs(5));     // 5
console.log(Math.abs(-3.14)); // 3.14
```

---

## Potencias y raíces

```javascript
console.log(Math.pow(2, 3));    // 8 — 2³
console.log(Math.sqrt(16));     // 4 — raíz cuadrada
console.log(Math.cbrt(27));     // 3 — raíz cúbica
console.log(Math.hypot(3, 4));  // 5 — hipotenusa (raíz de 3² + 4²)
```

`Math.hypot` es útil para calcular distancias:

```javascript
let dx = 10 - 3;
let dy = 15 - 8;
console.log(Math.hypot(dx, dy));  // distancia entre dos puntos
```

---

## Máximo y mínimo

```javascript
console.log(Math.max(10, 5, 20, 8));    // 20
console.log(Math.min(10, 5, 20, 8));    // 5
```

Para usar con arreglos, aplica el operador de propagación:

```javascript
let numeros = [10, 5, 20, 8];
console.log(Math.max(...numeros));  // 20
console.log(Math.min(...numeros));  // 5
```

---

## Números aleatorios

`Math.random()` genera un número decimal entre 0 (incluido) y 1 (excluido).

```javascript
console.log(Math.random());  // 0.472836194723894 — ejemplo
```

### Entero aleatorio en un rango

```javascript
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(aleatorio(1, 10));  // Entero entre 1 y 10
console.log(aleatorio(0, 100)); // Entero entre 0 y 100
```

> **Regla:** usa `Math.floor()` en lugar de `Math.round()` con `random()`. `round` produce una distribución no uniforme en los extremos.

### Decimal aleatorio en un rango

```javascript
function aleatorioDecimal(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(aleatorioDecimal(5, 10));  // Decimal entre 5 y 10
```

---

## Funciones trigonométricas

Trabajan en radianes.

```javascript
console.log(Math.sin(Math.PI / 2));   // 1 — seno de 90°
console.log(Math.cos(0));            // 1 — coseno de 0°
console.log(Math.tan(Math.PI / 4));  // 0.999... — tangente de 45°

// Conversión entre grados y radianes
function gradosARadianes(grados) {
  return grados * (Math.PI / 180);
}

function radianesAGrados(radianes) {
  return radianes * (180 / Math.PI);
}
```

---

## Logaritmos y exponenciales

```javascript
console.log(Math.log(1));      // 0 — logaritmo natural
console.log(Math.log(10));     // 2.302...
console.log(Math.log10(100));  // 2 — logaritmo base 10
console.log(Math.log2(8));     // 3 — logaritmo base 2
console.log(Math.exp(1));      // 2.718... — e¹
```

---

## Otras funciones útiles

```javascript
console.log(Math.sign(-10));  // -1 — signo del número
console.log(Math.sign(0));    // 0
console.log(Math.sign(10));   // 1

console.log(Math.floor(10 / 3));  // 3 — división entera
```

---

## Resumen

| Función | Descripción |
|---|---|
| `Math.round()` | Redondea al entero más cercano |
| `Math.floor()` | Redondea hacia abajo |
| `Math.ceil()` | Redondea hacia arriba |
| `Math.trunc()` | Elimina decimales |
| `Math.abs()` | Valor absoluto |
| `Math.pow()` | Potencia |
| `Math.sqrt()` | Raíz cuadrada |
| `Math.hypot()` | Hipotenusa (distancia) |
| `Math.max()` | Valor máximo |
| `Math.min()` | Valor mínimo |
| `Math.random()` | Decimal entre 0 y 1 |
| `Math.sin()` | Seno (radianes) |
| `Math.cos()` | Coseno (radianes) |
| `Math.log()` | Logaritmo natural |
| `Math.log10()` | Logaritmo base 10 |
| `Math.sign()` | Signo del número |

- `Math` no se instancia, se usa directamente
- Las funciones trigonométricas trabajan en radianes
- `Math.random()` genera valores entre 0 y 1 (1 excluido)
- Distribución uniforme con `random` y `floor`

---

## Ejercicio

Escribe una función que simule el lanzamiento de un dado de 6 caras y devuelva el resultado.

**Instrucciones paso a paso:**

1. Crea una función `lanzarDado()`
2. Usa `Math.random()` para generar un decimal entre 0 y 1
3. Multiplica por 6 para obtener un decimal entre 0 y 6
4. Usa `Math.floor()` para obtener un entero entre 0 y 5
5. Suma 1 para obtener un entero entre 1 y 6
6. Retorna el resultado
7. Llama a la función varias veces y verifica que los resultados estén entre 1 y 6

<details>
<summary>Mostrar solución</summary>

```javascript
function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// Simular 10 lanzamientos
for (let i = 0; i < 10; i++) {
  console.log(`Lanzamiento ${i + 1}: ${lanzarDado()}`);
}
```

**Extensión:** función para dado de cualquier número de caras:

```javascript
function lanzarDado(caras) {
  return Math.floor(Math.random() * caras) + 1;
}

console.log(lanzarDado(20));  // Dado de 20 caras
console.log(lanzarDado(100)); // Dado de 100 caras
```

</details>
