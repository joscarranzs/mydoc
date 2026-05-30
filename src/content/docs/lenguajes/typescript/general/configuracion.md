---
title: Configuración
description: El archivo tsconfig.json.
module: lenguajes/typescript
submodule: general
order: 27
---

Al completar esta guía podrás:

- Configurar tsconfig.json para diferentes entornos
- Entender las opciones más importantes
- Usar strict mode correctamente
- Configurar paths, target y module

---

## tsconfig.json básico

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
  "exclude": ["node_modules", "dist"]
}
```

---

## target

Define la versión de JavaScript de salida.

```json
{
  "compilerOptions": {
    "target": "ES5",      // Amplia compatibilidad
    "target": "ES2022",   // Características modernas
    "target": "ESNext"    // Últimas características
  }
}
```

| target | Compatibilidad |
|---|---|
| ES5 | Navegadores antiguos (IE11) |
| ES2015/ES6 | Navegadores modernos |
| ES2022 | Node.js 18+, navegadores recientes |
| ESNext | Experimental |

---

## module

Define el sistema de módulos de salida.

```json
{
  "compilerOptions": {
    "module": "CommonJS",  // Node.js tradicional
    "module": "ESNext",    // Navegador moderno
    "module": "Node16",    // Node.js con ESM
    "moduleResolution": "bundler" // Para bundlers
  }
}
```

---

## strict mode

Activa todas las verificaciones estrictas.

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

Equivale a activar individualmente:

```json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "noImplicitThis": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "alwaysStrict": true
  }
}
```

> **Regla:** siempre usa `strict: true` en proyectos nuevos.

---

## paths

Alias para imports.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@utils/*": ["src/utils/*"]
    }
  }
}
```

```typescript
// En lugar de:
// import { saludar } from "../../utils/helpers";

// Usas:
import { saludar } from "@utils/helpers";
```

---

## lib

Bibliotecas de tipos que incluir.

```json
{
  "compilerOptions": {
    "lib": ["ES2022", "DOM", "DOM.Iterable"]
  }
}
```

| lib | Incluye |
|---|---|
| ES2022 | Promise, Map, Set, etc. |
| DOM | document, window, HTMLElement |
| DOM.Iterable | forEach en NodeList, etc. |

---

## Otras opciones importantes

```json
{
  "compilerOptions": {
    "outDir": "./dist",          // Carpeta de salida
    "rootDir": "./src",          // Carpeta raíz de entrada
    "declaration": true,         // Genera .d.ts
    "declarationMap": true,      // Source maps para .d.ts
    "sourceMap": true,           // Source maps para depuración
    "removeComments": true,      // Elimina comentarios
    "noUnusedLocals": true,      // Error si hay variables sin usar
    "noUnusedParameters": true,  // Error si hay parámetros sin usar
    "esModuleInterop": true,     // Compatibilidad CommonJS/ESM
    "skipLibCheck": true,        // No verifica .d.ts de librerías
    "forceConsistentCasingInFileNames": true  // Nombres consistentes
  }
}
```

---

## Resumen

| Opción | Descripción |
|---|---|
| target | Versión JS de salida |
| module | Sistema de módulos |
| strict | Todas las verificaciones estrictas |
| paths | Alias para imports |
| lib | Bibliotecas de tipos |
| outDir/rootDir | Carpetas de entrada/salida |
| declaration | Generar archivos .d.ts |

---

## Ejercicio

Crea un tsconfig.json para un proyecto Node.js moderno con ESM, target ES2022 y paths para imports absolutos.

**Instrucciones paso a paso:**

1. target: ES2022
2. module: ESNext
3. strict: true
4. outDir: ./dist, rootDir: ./src
5. paths: @/* → src/*
6. esModuleInterop: true

<details>
<summary>Mostrar solución</summary>

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": true,
    "sourceMap": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

</details>
