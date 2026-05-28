---
title: Fechas
description: Objeto Date.
module: lenguajes/javascript
submodule: general
order: 8
---

Al completar esta guía podrás:

- Crear objetos Date de distintas formas
- Obtener y modificar componentes de una fecha
- Formatear fechas para mostrar al usuario
- Calcular diferencias entre fechas

---

## Creación de fechas

El objeto `Date` representa un momento en el tiempo.

```javascript
// Fecha y hora actual
let ahora = new Date();

// Fecha específica con string
let fecha = new Date("2025-01-15");

// Año, mes, día (el mes empieza en 0)
let especifica = new Date(2025, 0, 15);  // 15 de enero de 2025

// Incluyendo hora
let conHora = new Date(2025, 0, 15, 14, 30, 0);  // 14:30:00

// Timestamp (milisegundos desde 1970)
let desdeEpoch = new Date(0);  // 1 de enero de 1970
```

> **Importante:** el mes en JavaScript va de 0 (enero) a 11 (diciembre). Es una fuente común de errores.

```javascript
// Error común
let enero = new Date(2025, 1, 1);  // 1 de febrero, no enero
let correcto = new Date(2025, 0, 1);  // 1 de enero
```

---

## Formato ISO

El formato ISO 8601 (`YYYY-MM-DD`) es la forma recomendada para crear fechas desde strings.

```javascript
let fecha = new Date("2025-01-15T14:30:00Z");
// T separa fecha de hora
// Z indica UTC (tiempo universal)
```

Sin la `Z`, la fecha se interpreta en la zona horaria local:

```javascript
let local = new Date("2025-01-15");
let utc = new Date("2025-01-15T00:00:00Z");
```

> **Regla:** usa siempre el formato ISO `YYYY-MM-DD` para crear fechas desde strings. Es el único formato que JavaScript parsea de forma confiable.

---

## Métodos getter

Obtienen componentes individuales de la fecha.

```javascript
let fecha = new Date("2025-03-21T10:30:45");

console.log(fecha.getFullYear());   // 2025
console.log(fecha.getMonth());      // 2 (marzo — empieza en 0)
console.log(fecha.getDate());       // 21
console.log(fecha.getDay());        // 5 (viernes — 0 es domingo)
console.log(fecha.getHours());      // 10
console.log(fecha.getMinutes());    // 30
console.log(fecha.getSeconds());    // 45
console.log(fecha.getMilliseconds()); // 0
```

Versiones UTC:

```javascript
console.log(fecha.getUTCFullYear());
console.log(fecha.getUTCMonth());
console.log(fecha.getUTCDate());
```

---

## Métodos setter

Modifican componentes individuales.

```javascript
let fecha = new Date("2025-01-15");

fecha.setFullYear(2026);
console.log(fecha);  // 2026-01-15

fecha.setMonth(5);   // junio
console.log(fecha);  // 2026-06-15

fecha.setDate(1);
console.log(fecha);  // 2026-06-01
```

Los setters aceptan valores fuera de rango y ajustan automáticamente:

```javascript
let fecha = new Date("2025-01-15");
fecha.setMonth(12);  // 12 meses después de enero = enero del siguiente año
console.log(fecha.getFullYear());  // 2026
console.log(fecha.getMonth());     // 0 (enero)
```

---

## Timestamp

El timestamp es la representación de una fecha como milisegundos desde el 1 de enero de 1970 (epoch).

```javascript
let ahora = new Date();

console.log(ahora.getTime());       // 174309... (milisegundos)
console.log(Date.now());            // equivalente estático
```

Crear una fecha desde un timestamp:

```javascript
let inicioDelDia = new Date(Date.now());
```

Comparar fechas usando timestamps:

```javascript
let a = new Date("2025-01-15");
let b = new Date("2025-06-20");

console.log(a.getTime() < b.getTime());  // true
```

---

## Formateo

### toLocaleDateString

Formatea la fecha según la configuración regional.

```javascript
let fecha = new Date("2025-03-21");

console.log(fecha.toLocaleDateString("es-ES"));  // "21/3/2025"
console.log(fecha.toLocaleDateString("en-US"));  // "3/21/2025"

// Con opciones
let opciones = {
  year: "numeric",
  month: "long",
  day: "numeric"
};

console.log(fecha.toLocaleDateString("es-ES", opciones));
// "21 de marzo de 2025"

let conDia = {
  ...opciones,
  weekday: "long"
};

console.log(fecha.toLocaleDateString("es-ES", conDia));
// "viernes, 21 de marzo de 2025"
```

### toLocaleTimeString

Formatea solo la hora.

```javascript
let fecha = new Date("2025-03-21T14:30:00");

console.log(fecha.toLocaleTimeString("es-ES"));  // "14:30:00"

let opciones = {
  hour: "2-digit",
  minute: "2-digit"
};

console.log(fecha.toLocaleTimeString("es-ES", opciones));  // "14:30"
```

---

## Cálculos con fechas

### Diferencia en días

```javascript
function diasEntre(fecha1, fecha2) {
  let ms = Math.abs(fecha1.getTime() - fecha2.getTime());
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

let inicio = new Date("2025-01-01");
let fin = new Date("2025-12-31");

console.log(diasEntre(inicio, fin));  // 364
```

### Sumar días

```javascript
function sumarDias(fecha, dias) {
  let resultado = new Date(fecha);
  resultado.setDate(resultado.getDate() + dias);
  return resultado;
}

let hoy = new Date("2025-03-21");
console.log(sumarDias(hoy, 7));   // 2025-03-28
console.log(sumarDias(hoy, -7));  // 2025-03-14
```

---

## Resumen

| Método | Descripción |
|---|---|
| `new Date()` | Fecha y hora actual |
| `getFullYear()` | Año |
| `getMonth()` | Mes (0-11) |
| `getDate()` | Día del mes (1-31) |
| `getDay()` | Día de la semana (0-6) |
| `getHours()` | Hora (0-23) |
| `getTime()` | Timestamp en milisegundos |
| `Date.now()` | Timestamp actual (estático) |
| `toLocaleDateString()` | Fecha formateada según región |
| `setDate()` | Modifica el día del mes |

- El mes empieza en 0 (enero) y termina en 11 (diciembre)
- El día de la semana empieza en 0 (domingo)
- Usa timestamps para comparar fechas
- Usa `toLocaleDateString` para mostrar fechas al usuario
- Los setters ajustan valores fuera de rango automáticamente

---

## Ejercicio

Escribe una función que reciba una fecha y devuelva cuántos días faltan para fin de año.

**Instrucciones paso a paso:**

1. Crea una función `diasParaFinDeAño(fecha)`
2. Obtén el año de la fecha recibida con `getFullYear()`
3. Crea una fecha para el 31 de diciembre de ese año: `new Date(año, 11, 31)`
4. Calcula la diferencia en milisegundos entre ambas fechas
5. Convierte los milisegundos a días (dividiendo por `1000 * 60 * 60 * 24`)
6. Redondea con `Math.ceil()` para incluir el día parcial
7. Retorna el número de días

<details>
<summary>Mostrar solución</summary>

```javascript
function diasParaFinDeAño(fecha) {
  let año = fecha.getFullYear();
  let finDeAño = new Date(año, 11, 31);
  let diferencia = finDeAño.getTime() - fecha.getTime();
  return Math.ceil(diferencia / (1000 * 60 * 60 * 24));
}

let hoy = new Date("2025-03-21");
console.log(diasParaFinDeAño(hoy));  // 285

let comienzo = new Date("2025-01-01");
console.log(diasParaFinDeAño(comienzo));  // 364
```

</details>
