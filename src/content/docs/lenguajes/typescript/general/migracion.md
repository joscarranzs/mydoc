---
title: Migración
description: Migrar de JS a TypeScript.
module: lenguajes/typescript
submodule: general
order: 39
---

Al completar esta guía podrás:

- Planificar una migración gradual de JS a TypeScript
- Configurar strict mode progresivamente
- Migrar archivos uno por uno
- Usar herramientas de migración

---

## Estrategia general

```
1. Configurar TypeScript con opciones laxas
2. Migrar archivos gradualmente
3. Endurecer configuración progresivamente
4. Eliminar any y JSDoc temporales
```

---

## Paso 1: Configuración inicial

```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": false,
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": false,
    "noEmit": true,
    "moduleResolution": "bundler",
    "esModuleInterop": true
  },
  "include": ["src/**/*"]
}
```

Configuración permisiva para empezar sin errores.

---

## Paso 2: allowJs y checkJs progresivo

```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": false,
    "noEmit": true,
    "strict": false
  }
}
```

```javascript
// @ts-check — activar gradualmente en archivos JS
```

Por ahora, solo renombramos archivos .js a .ts.

---

## Paso 3: Migrar archivos uno por uno

1. Renombrar `.js` a `.ts`
2. Añadir tipos básicos
3. Añadir `// @ts-nocheck` temporal si hay muchos errores
4. Eliminar `// @ts-nocheck` cuando esté estable

```typescript
// antes — usuario.js
function crearUsuario(nombre, edad) {
  return { nombre, edad };
}

// después — usuario.ts
interface Usuario {
  nombre: string;
  edad: number;
}

function crearUsuario(nombre: string, edad: number): Usuario {
  return { nombre, edad };
}
```

---

## Paso 4: Endurecer configuración

Progresivamente, activar opciones estrictas:

```json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "strict": true
  }
}
```

---

## strict mode progresivo

```json
// Fase 1 — sin strict
{ "strict": false }

// Fase 2 — solo noImplicitAny
{ "noImplicitAny": true }

// Fase 3 — añadir strictNullChecks
{ "noImplicitAny": true, "strictNullChecks": true }

// Fase 4 — strict completo
{ "strict": true }
```

---

## Herramientas de migración

### npx tsc --init

```bash
npx tsc --init
```

Genera tsconfig.json con configuración recomendada.

### ts-migrate

Herramienta de Airbnb para migración automatizada.

```bash
npx ts-migrate migrate src/
```

Añade tipos de forma aproximada y `any` donde no puede inferir.

---

## Patrones durante migración

```typescript
// Temporal: añadir any donde no hay tiempo de tipar
function procesar(datos: any): any {
  return datos;
}

// Eventualmente, reemplazar con tipos concretos
interface DatosProcesados {
  id: number;
  resultado: string;
}

function procesar(datos: DatosEntrada): DatosProcesados {
  return { id: datos.id, resultado: datos.nombre.toUpperCase() };
}
```

---

## Check list de migración

- [ ] `allowJs: true`
- [ ] `noEmit: true` (mientras se migra)
- [ ] Sin `strict` al inicio
- [ ] Migrar archivo por archivo
- [ ] Tests pasando después de cada migración
- [ ] `strictNullChecks` después de migrar archivos principales
- [ ] `strict: true` al final

---

## Resumen

| Fase | Acción |
|---|---|
| 1 | Configurar TS permisivo |
| 2 | allowJs + checkJs progresivo |
| 3 | Renombrar archivos .js → .ts |
| 4 | Añadir tipos gradualmente |
| 5 | Endurecer configuración |
| 6 | strict: true completo |

---

## Ejercicio

Simula la migración de un archivo JS a TS:

```javascript
// original.js
function sumar(a, b) {
  return a + b;
}
```

**Instrucciones paso a paso:**

1. Renombra a .ts
2. Añade tipos a parámetros y retorno
3. Activa noImplicitAny
4. Verifica que funciona correctamente

<details>
<summary>Mostrar solución</summary>

```typescript
// original.ts
function sumar(a: number, b: number): number {
  return a + b;
}

// Con noImplicitAny activo, parámetros sin tipo darían error
// Si algún parámetro se queda sin tipo, TS lo marcaría

console.log(sumar(3, 4));  // 7
// console.log(sumar("3", 4));  // Error en compilación
```

```json
// tsconfig.json (fase inicial)
{
  "compilerOptions": {
    "allowJs": true,
    "noImplicitAny": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}
```

</details>
