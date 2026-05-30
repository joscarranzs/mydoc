---
title: Primeros pasos
description: Instalación y configuración inicial.
module: lenguajes/typescript
submodule: general
order: 2
---

Al completar esta guía podrás:

- Instalar TypeScript en tu sistema
- Crear y compilar tu primer archivo
- Configurar tsconfig.json básico
- Usar el compilador en modo vigilancia

---

## Instalación

```bash
# Instalación global (recomendada para aprender)
npm install -g typescript

# Instalación local en proyecto
npm install --save-dev typescript

# Verificar instalación
tsc --version
```

---

## Primer archivo

```typescript
// index.ts
let nombre: string = "TypeScript";
let version: number = 5.4;

console.log(`Hola ${nombre} versión ${version}`);
```

```bash
tsc index.ts      # Genera index.js
node index.js     # "Hola TypeScript versión 5.4"
```

El archivo JavaScript generado elimina los tipos:

```javascript
// index.js (generado)
let nombre = "TypeScript";
let version = 5.4;
console.log(`Hola ${nombre} versión ${version}`);
```

---

## Modo vigilancia

```bash
# Recompila automáticamente al guardar
tsc --watch
```

---

## tsconfig.json

El archivo de configuración central de TypeScript.

```bash
# Generar archivo por defecto
tsc --init
```

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

Con esta estructura de proyecto:

```
proyecto/
├── src/
│   └── index.ts
├── dist/
│   └── index.js
├── tsconfig.json
└── package.json
```

```bash
tsc                # Compila todo según tsconfig
node dist/index.js # Ejecuta el resultado
```

---

## Opciones básicas

| Opción | Descripción |
|---|---|
| `target` | Versión JS de salida (ES5, ES2022, ESNext) |
| `module` | Sistema de módulos (CommonJS, ESNext) |
| `strict` | Activa todas las verificaciones estrictas |
| `outDir` | Carpeta de salida para JS compilado |
| `rootDir` | Carpeta raíz de los archivos TS |
| `sourceMap` | Genera mapas para depuración |

---

## Primer proyecto

```typescript
// src/index.ts
function saludar(nombre: string): string {
  return `¡Hola, ${nombre}!`;
}

let usuario = "Ana";
console.log(saludar(usuario));
```

```bash
tsc                     # Compila todo
node dist/index.js      # ¡Hola, Ana!
```

---

## Resumen

| Concepto | Descripción |
|---|---|
| Instalación | `npm install -g typescript` |
| Compilar | `tsc archivo.ts` |
| Vigilancia | `tsc --watch` |
| Configuración | `tsc --init` genera tsconfig.json |
| outDir | Carpeta de salida del JS compilado |
| strict | Modo estricto con todas las verificaciones |

---

## Ejercicio

Crea un proyecto TypeScript con configuración básica: compila desde `src/` a `dist/`.

**Instrucciones paso a paso:**

1. Crea las carpetas `src/` y `dist/`
2. Ejecuta `tsc --init` para generar tsconfig.json
3. Configura `outDir: "./dist"` y `rootDir: "./src"`
4. Crea `src/saludo.ts` con una función que salude
5. Compila con `tsc` y ejecuta el resultado

<details>
<summary>Mostrar solución</summary>

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "sourceMap": true
  },
  "include": ["src/**/*"]
}
```

```typescript
// src/saludo.ts
function despedir(nombre: string): string {
  return `¡Hasta luego, ${nombre}!`;
}

console.log(despedir("Carlos"));
```

```bash
tsc
node dist/saludo.js  # ¡Hasta luego, Carlos!
```

</details>
