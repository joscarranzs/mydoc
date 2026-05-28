---
title: Temporal
description: API moderna de fechas.
module: lenguajes/javascript
submodule: general
order: 9
---

Al completar esta guía podrás:

- Diferenciar Temporal de Date
- Crear instancias de Temporal con zona horaria explícita
- Realizar operaciones aritméticas con fechas de forma precisa
- Obtener componentes individuales sin métodos getter

---

## Temporal vs Date

`Temporal` es la API moderna de fechas y horas propuesta para ECMAScript. Resuelve los problemas históricos de `Date`:

| Problema de Date | Solución en Temporal |
|---|---|
| Mes empieza en 0 | Mes empieza en 1 |
| Zona horaria implícita | Zona horaria explícita y configurable |
| Inmutabilidad | Todas las instancias son inmutables |
| Sin tipos especializados | Tipos separados: fecha, hora, duración |

> **Nota:** Temporal se encuentra en etapa de propuesta (stage 3). No está disponible en todos los entornos. Para usarlo hoy, necesitas un polyfill como `@js-temporal/polyfill`.

---

## Tipos principales

Temporal define varios tipos para representar conceptos distintos:

| Tipo | Representa | Ejemplo |
|---|---|---|
| `Temporal.PlainDate` | Fecha sin hora ni zona | `2025-03-21` |
| `Temporal.PlainTime` | Hora sin fecha ni zona | `14:30:00` |
| `Temporal.PlainDateTime` | Fecha y hora sin zona | `2025-03-21T14:30:00` |
| `Temporal.ZonedDateTime` | Fecha y hora con zona | `2025-03-21T14:30:00[America/Mexico_City]` |
| `Temporal.Duration` | Duración | `3 días, 5 horas` |
| `Temporal.Now` | Obtiene la fecha/hora actual | `Temporal.Now.plainDateISO()` |

---

## Creación

```javascript
// Fecha actual
let hoy = Temporal.Now.plainDateISO();
console.log(hoy.toString());  // "2025-03-21"

// Fecha específica
let fecha = Temporal.PlainDate.from("2025-06-15");
console.log(fecha.toString());  // "2025-06-15"

// Con componentes
let fecha2 = new Temporal.PlainDate(2025, 6, 15);
console.log(fecha2.toString());  // "2025-06-15"

// Fecha y hora
let fechaHora = Temporal.PlainDateTime.from("2025-06-15T14:30:00");
```

Los meses empiezan en **1**, no en 0:

```javascript
let enero = new Temporal.PlainDate(2025, 1, 1);  // 1 de enero
let diciembre = new Temporal.PlainDate(2025, 12, 1);  // 1 de diciembre
```

---

## Propiedades

Acceso directo a componentes sin métodos getter:

```javascript
let fecha = Temporal.PlainDate.from("2025-03-21");

console.log(fecha.year);         // 2025
console.log(fecha.month);        // 3
console.log(fecha.day);          // 21
console.log(fecha.dayOfWeek);    // 5 (viernes)
console.log(fecha.dayOfYear);    // 80
console.log(fecha.weekOfYear);   // 12
```

Para fechas con hora:

```javascript
let dt = Temporal.PlainDateTime.from("2025-03-21T14:30:45");

console.log(dt.hour);     // 14
console.log(dt.minute);   // 30
console.log(dt.second);   // 45
```

---

## Inmutabilidad

A diferencia de `Date`, todas las operaciones en Temporal devuelven una nueva instancia.

```javascript
let fecha = Temporal.PlainDate.from("2025-03-21");
let modificada = fecha.add({ days: 7 });

console.log(fecha.toString());      // "2025-03-21" — no cambia
console.log(modificada.toString()); // "2025-03-28"
```

---

## Aritmética

### add y subtract

```javascript
let fecha = Temporal.PlainDate.from("2025-01-15");

let masDias = fecha.add({ days: 10 });
console.log(masDias.toString());  // "2025-01-25"

let masMeses = fecha.add({ months: 3 });
console.log(masMeses.toString());  // "2025-04-15"

let menosDias = fecha.subtract({ days: 5 });
console.log(menosDias.toString());  // "2025-01-10"
```

Puedes combinar múltiples unidades:

```javascript
let resultado = fecha.add({
  years: 1,
  months: 2,
  days: 15
});
```

### Duración entre fechas

```javascript
let inicio = Temporal.PlainDate.from("2025-01-01");
let fin = Temporal.PlainDate.from("2025-12-31");

let duracion = inicio.until(fin);
console.log(duracion.days);  // 364

let duracion2 = fin.since(inicio);
console.log(duracion2.days);  // 364 — equivalente
```

---

## Zona horaria

`Temporal.ZonedDateTime` maneja zonas horarias de forma explícita.

```javascript
let ahora = Temporal.Now.zonedDateTimeISO();
console.log(ahora.toString());
// "2025-03-21T14:30:00-06:00[America/Mexico_City]"

let enLondres = ahora.withTimeZone("Europe/London");
console.log(enLondres.toString());
// "2025-03-21T20:30:00+00:00[Europe/London]"
```

---

## Comparación

Temporal soporta comparación directa con métodos dedicados:

```javascript
let a = Temporal.PlainDate.from("2025-01-15");
let b = Temporal.PlainDate.from("2025-06-20");

console.log(Temporal.PlainDate.compare(a, b));  // -1 (a es anterior)
console.log(Temporal.PlainDate.compare(b, a));  // 1 (b es posterior)
console.log(Temporal.PlainDate.compare(a, a));  // 0 (iguales)
```

También métodos de instancia:

```javascript
console.log(a.equals(b));   // false
console.log(a.equals(a));   // true
```

---

## Formateo

Temporal se integra con `Intl.DateTimeFormat` para formateo localizado.

```javascript
let fecha = Temporal.PlainDate.from("2025-03-21");

let formateador = new Intl.DateTimeFormat("es-ES", {
  year: "numeric",
  month: "long",
  day: "numeric"
});

console.log(formateador.format(fecha));  // "21 de marzo de 2025"
```

---

## Validación

Temporal valida fechas automáticamente al crearlas:

```javascript
try {
  let invalida = new Temporal.PlainDate(2025, 2, 30);
  // RangeError: fecha inválida — febrero no tiene 30 días
} catch (e) {
  console.log("Fecha inválida:", e.message);
}
```

---

## Resumen

| Característica | Date | Temporal |
|---|---|---|
| Meses | 0-11 | 1-12 |
| Inmutabilidad | No | Sí |
| Zona horaria | Implícita (local) | Explícita |
| Aritmética | Con cálculos manuales | `add()`, `subtract()` |
| Componentes | `getMonth()`, `getDate()` | `.month`, `.day` |
| Comparación | Timestamps | `.compare()`, `.equals()` |
| Estado | Estándar | Propuesta (stage 3) |

- Temporal usa meses de 1 a 12, no de 0 a 11
- Todas las operaciones devuelven nuevas instancias
- `Temporal.PlainDate` para fechas, `Temporal.ZonedDateTime` para fechas con zona horaria
- Usa `add()` y `subtract()` con objetos `{ years, months, days }`
- `until()` y `since()` calculan la duración entre dos fechas

---

## Ejercicio

Escribe una función que reciba un año y devuelva un arreglo con todas las fechas de los viernes 13 de ese año.

**Instrucciones paso a paso:**

1. Crea una función `viernes13(año)`
2. Inicializa un arreglo vacío para los resultados
3. Itera sobre los meses del 1 al 12
4. Para cada mes, crea un `Temporal.PlainDate(año, mes, 13)`
5. Verifica si `dayOfWeek === 5` (viernes)
6. Si es viernes, agrega la fecha al arreglo
7. Retorna el arreglo

<details>
<summary>Mostrar solución</summary>

```javascript
function viernes13(año) {
  let resultados = [];

  for (let mes = 1; mes <= 12; mes++) {
    let fecha = new Temporal.PlainDate(año, mes, 13);

    if (fecha.dayOfWeek === 5) {
      resultados.push(fecha.toString());
    }
  }

  return resultados;
}

// Ejemplo
console.log(viernes13(2025));
// ["2025-06-13"]

console.log(viernes13(2024));
// ["2024-09-13", "2024-12-13"]
```

**Nota:** para ejecutar este código necesitas el polyfill de Temporal:

```bash
npm install @js-temporal/polyfill
```

```javascript
import { Temporal } from "@js-temporal/polyfill";
```

</details>
