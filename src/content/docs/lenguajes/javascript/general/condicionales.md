---
title: Condicionales
description: if, else, switch.
module: lenguajes/javascript
submodule: general
order: 10
---

Al completar esta guía podrás:

- Escribir condiciones con `if`, `else if` y `else`
- Usar el operador ternario como alternativa compacta
- Implementar múltiples ramas con `switch`
- Combinar condiciones con operadores lógicos

---

## if

La estructura `if` ejecuta un bloque de código solo si la condición se evalúa como `true`.

```javascript
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
}
```

Si el bloque tiene una sola sentencia, puedes omitir las llaves:

```javascript
if (edad >= 18) console.log("Eres mayor de edad");
```

> **Convención:** usa siempre llaves, incluso para una sola línea. Mejora la legibilidad y previene errores al añadir sentencias después.

---

## if...else

Ejecuta un bloque cuando la condición es `true` y otro cuando es `false`.

```javascript
let temperatura = 30;

if (temperatura > 25) {
  console.log("Hace calor");
} else {
  console.log("No hace calor");
}
```

---

## if...else if...else

Evalúa múltiples condiciones en secuencia. La primera que sea `true` ejecuta su bloque y las restantes se ignoran.

```javascript
let nota = 85;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Aprobado");
} else if (nota >= 50) {
  console.log("Suficiente");
} else {
  console.log("Reprobado");
}
```

> **Regla:** el orden de las condiciones importa. Coloca las más específicas primero. Si `nota >= 90` estuviera después de `nota >= 70`, nunca se ejecutaría.

---

## Valores truthy y falsy en condiciones

JavaScript convierte cualquier valor a booleano en el contexto de una condición.

```javascript
// Valores que se comportan como false
if (false) { }
if (0) { }
if ("") { }
if (null) { }
if (undefined) { }
if (NaN) { }

// Valores que se comportan como true
if (1) { }
if ("texto") { }
if ([]) { }
if ({}) { }
```

```javascript
let nombre = "Ana";

if (nombre) {
  console.log(`Hola, ${nombre}`);  // Se ejecuta
}

let usuario;
if (usuario) {
  console.log("No se ejecuta");  // undefined es falsy
}
```

---

## Ternario

El operador ternario es una forma compacta de `if...else` que retorna un valor.

```javascript
let edad = 20;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
```

Estructura:

```
condición ? valorSiTrue : valorSiFalse
```

Es útil para asignaciones simples:

```javascript
let acceso = usuario.activo && usuario.edad >= 18 ? "Permitido" : "Denegado";
```

> **Regla:** usa ternario solo para expresiones simples. Si necesitas anidarlos o la lógica es compleja, usa `if...else`. El ternario anidado es difícil de leer.

```javascript
// Evita esto:
let tipo = valor > 0 ? "positivo" : valor < 0 ? "negativo" : "cero";

// Prefiere esto:
let tipo;
if (valor > 0) {
  tipo = "positivo";
} else if (valor < 0) {
  tipo = "negativo";
} else {
  tipo = "cero";
}
```

---

## switch

`switch` evalúa una expresión y ejecuta el bloque correspondiente al valor coincidente.

```javascript
let dia = 3;
let nombreDia;

switch (dia) {
  case 1:
    nombreDia = "Lunes";
    break;
  case 2:
    nombreDia = "Martes";
    break;
  case 3:
    nombreDia = "Miércoles";
    break;
  case 4:
    nombreDia = "Jueves";
    break;
  case 5:
    nombreDia = "Viernes";
    break;
  default:
    nombreDia = "Fin de semana";
}

console.log(nombreDia);  // "Miércoles"
```

La sentencia `break` es obligatoria para evitar la **caída** (*fall-through*) al siguiente caso.

### Fall-through intencional

Puedes agrupar casos que compartan la misma lógica:

```javascript
switch (dia) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Día laboral");
    break;
  case 6:
  case 7:
    console.log("Fin de semana");
    break;
  default:
    console.log("Día inválido");
}
```

> **Regla:** si usas fall-through intencional, documéntalo con un comentario para dejar claro que no es un error.

### Comparación estricta

`switch` usa comparación estricta (`===`), no débil:

```javascript
let valor = "5";

switch (valor) {
  case 5:
    console.log("Número");  // No se ejecuta — "5" !== 5
    break;
  case "5":
    console.log("String");  // Se ejecuta
    break;
}
```

---

## if vs switch

Usa `if` cuando:

- Las condiciones involucran comparaciones (<, >, rangos)
- Las condiciones son booleanas compuestas (&&, ||)
- Necesitas evaluar expresiones complejas

Usa `switch` cuando:

- Comparas una misma variable contra múltiples valores concretos
- Los valores son discretos (números enteros, strings)
- La estructura de múltiples `else if` se vuelve repetitiva

```javascript
// switch es más claro que múltiples else if
if (comando === "iniciar") { }
else if (comando === "detener") { }
else if (comando === "pausar") { }
else if (comando === "reanudar") { }

// vs
switch (comando) {
  case "iniciar": break;
  case "detener": break;
  case "pausar": break;
  case "reanudar": break;
}
```

---

## Condiciones anidadas

Puedes anidar condicionales dentro de otros, pero el código profundo es difícil de seguir.

```javascript
// Difícil de leer
if (usuario.activo) {
  if (usuario.edad >= 18) {
    if (usuario.suscripcion === "premium") {
      console.log("Acceso completo");
    }
  }
}
```

Refactoriza combinando condiciones con operadores lógicos:

```javascript
// Más legible
if (usuario.activo && usuario.edad >= 18 && usuario.suscripcion === "premium") {
  console.log("Acceso completo");
}
```

> **Regla:** si anidas más de dos niveles, refactoriza. Extrae la lógica a funciones o combina condiciones.

---

## Early return

En funciones, puedes usar `return` para evitar el anidamiento innecesario.

```javascript
function procesar(usuario) {
  if (!usuario) {
    return "Usuario requerido";
  }

  if (!usuario.activo) {
    return "Usuario inactivo";
  }

  if (usuario.edad < 18) {
    return "Debe ser mayor de edad";
  }

  return "Acceso concedido";
}
```

Cada validación fallida retorna inmediatamente, evitando el anidamiento.

---

## Resumen

| Estructura | Uso |
|---|---|
| `if` | Una condición simple |
| `if...else` | Dos caminos posibles |
| `if...else if...else` | Múltiples condiciones en secuencia |
| Ternario | Asignación condicional compacta |
| `switch` | Múltiples valores discretos |

- Usa llaves siempre, incluso para una sola línea
- Ordena las condiciones de más específica a más general
- Prefiere `&&` y `||` sobre anidamiento profundo
- `switch` usa comparación estricta (`===`)
- Usa `break` en cada caso de `switch` (a menos que el fall-through sea intencional)
- Early return evita anidamiento en funciones

---

## Ejercicio

Escribe una función que reciba una calificación numérica (0-100) y devuelva la letra correspondiente:

| Rango | Letra |
|---|---|
| 90-100 | A |
| 80-89 | B |
| 70-79 | C |
| 60-69 | D |
| 0-59 | F |

**Instrucciones paso a paso:**

1. Crea una función `calificacionLetra(puntos)`
2. Valida que `puntos` esté entre 0 y 100; si no, retorna `"Inválido"`
3. Usa `if...else if...else` para determinar la letra según los rangos
4. Retorna la letra correspondiente
5. Prueba con: 95, 82, 73, 64, 50, -5, 105

<details>
<summary>Mostrar solución</summary>

```javascript
function calificacionLetra(puntos) {
  if (puntos < 0 || puntos > 100) {
    return "Inválido";
  }

  if (puntos >= 90) {
    return "A";
  } else if (puntos >= 80) {
    return "B";
  } else if (puntos >= 70) {
    return "C";
  } else if (puntos >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(calificacionLetra(95));   // A
console.log(calificacionLetra(82));   // B
console.log(calificacionLetra(73));   // C
console.log(calificacionLetra(64));   // D
console.log(calificacionLetra(50));   // F
console.log(calificacionLetra(-5));   // Inválido
console.log(calificacionLetra(105));  // Inválido
```

</details>
