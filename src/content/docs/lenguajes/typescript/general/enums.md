---
title: Enums
description: Conjuntos de valores nombrados.
module: lenguajes/typescript
submodule: general
order: 9
---

Al completar esta guía podrás:

- Declarar enums numéricos y de string
- Acceder a valores y nombres de enum
- Usar const enum para optimización
- Decidir cuándo usar enums y cuándo evitarlos

---

## Enum numérico

Por defecto, los valores comienzan en 0 y se incrementan.

```typescript
enum Direccion {
  Norte,    // 0
  Sur,      // 1
  Este,     // 2
  Oeste,    // 3
}

let dir: Direccion = Direccion.Norte;
console.log(dir);           // 0
console.log(Direccion[0]);  // "Norte" — reverse mapping
```

---

## Valores personalizados

```typescript
enum Status {
  Inactivo = 0,
  Activo = 1,
  Pendiente = 2,
  Bloqueado = 3,
}

let estado: Status = Status.Activo;
console.log(estado);  // 1
```

---

## Enum de string

```typescript
enum Color {
  Rojo = "#FF0000",
  Verde = "#00FF00",
  Azul = "#0000FF",
}

let fondo: Color = Color.Azul;
console.log(fondo);  // "#0000FF"

// Los enums string no tienen reverse mapping
// Color["#0000FF"]  // Error
```

---

## Enum heterogéneo

Mezcla string y number (no recomendado).

```typescript
enum Mixto {
  Si = "SI",
  No = 0,
}
```

---

## const enum

Los `const enum` no generan código JavaScript. Los valores se inlinan en tiempo de compilación.

```typescript
const enum Talla {
  Chica = "S",
  Mediana = "M",
  Grande = "L",
}

let camiseta: Talla = Talla.Mediana;
// Compila directamente a: let camiseta = "M";
```

> **Regla:** usa `const enum` cuando el rendimiento sea crítico y no necesites reverse mapping. No funciona con --isolatedModules.

---

## Cuándo evitar enums

Muchos desarrolladores prefieren alternativas más predecibles:

```typescript
// Alternativa con unión de literales (recomendada)
type Direccion = "norte" | "sur" | "este" | "oeste";

let dir: Direccion = "norte";

// Alternativa con objeto + as const
const Status = {
  Activo: "activo",
  Inactivo: "inactivo",
} as const;

type Status = (typeof Status)[keyof typeof Status];
```

---

## Resumen

| Tipo | Valores | Reverse mapping | Código generado |
|---|---|---|---|
| Numérico | 0, 1, 2... | Sí | Objeto JS |
| String | Valor explícito | No | Objeto JS |
| Heterogéneo | Mixto | Parcial | Objeto JS |
| const enum | Cualquiera | No | Ninguno (inline) |

---

## Ejercicio

Declara un enum para días de la semana (lunes a viernes con valor 1-5). Crea una función que reciba el enum y devuelva si es día laboral (lunes a viernes) o fin de semana.

**Instrucciones paso a paso:**

1. Declara `enum Dia { Lunes = 1, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo }`
2. Crea función `esLaboral(dia: Dia): boolean` (lunes=1 a viernes=5)
3. Prueba con varios valores

<details>
<summary>Mostrar solución</summary>

```typescript
enum Dia {
  Lunes = 1,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sabado,
  Domingo,
}

function esLaboral(dia: Dia): boolean {
  return dia >= Dia.Lunes && dia <= Dia.Viernes;
}

console.log(esLaboral(Dia.Lunes));     // true
console.log(esLaboral(Dia.Viernes));   // true
console.log(esLaboral(Dia.Sabado));    // false
console.log(esLaboral(Dia.Domingo));   // false
```

</details>
