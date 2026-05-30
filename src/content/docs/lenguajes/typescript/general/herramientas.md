---
title: Herramientas
description: Linters, bundlers y testing.
module: lenguajes/typescript
submodule: general
order: 33
---

Al completar esta guía podrás:

- Configurar ESLint para TypeScript
- Usar Prettier para formateo
- Elegir un bundler (esbuild, SWC)
- Configurar testing con Vitest

---

## ESLint con TypeScript

```bash
npm install --save-dev eslint @eslint/js typescript-eslint
```

```typescript
// eslint.config.js (ESLint flat config)
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "error",
    },
  }
);
```

Reglas comunes:

```json
{
  "rules": {
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "error"
  }
}
```

---

## Prettier

```bash
npm install --save-dev prettier eslint-config-prettier
```

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

```json
// eslint.config.js
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  ...tseslint.configs.recommended,
  eslintConfigPrettier,  // Desactiva reglas conflictivas
);
```

---

## esbuild

Bundler ultrarrápido escrito en Go.

```bash
npm install --save-dev esbuild
```

```typescript
// build.ts
import esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  outfile: "dist/bundle.js",
  platform: "node",
  target: "node18",
});
```

---

## SWC

Alternativa a esbuild, también en Rust.

```bash
npm install --save-dev @swc/core @swc/cli
```

```json
// .swcrc
{
  "jsc": {
    "target": "es2022",
    "parser": {
      "syntax": "typescript"
    }
  }
}
```

```bash
npx swc src -d dist
```

---

## Vitest

Framework de testing rápido.

```bash
npm install --save-dev vitest
```

```typescript
// src/suma.ts
export function suma(a: number, b: number): number {
  return a + b;
}
```

```typescript
// src/__tests__/suma.test.ts
import { describe, it, expect } from "vitest";
import { suma } from "../suma";

describe("suma", () => {
  it("suma dos números positivos", () => {
    expect(suma(2, 3)).toBe(5);
  });

  it("suma números negativos", () => {
    expect(suma(-1, -2)).toBe(-3);
  });
});
```

```bash
npx vitest          # Una vez
npx vitest --watch  # Modo vigilancia
```

---

## tsc watch

```bash
# Compilación en modo vigilancia
tsc --watch
```

Útil combinado con `concurrently`:

```json
{
  "scripts": {
    "dev": "concurrently \"tsc --watch\" \"node --watch dist/index.js\""
  }
}
```

---

## Resumen

| Herramienta | Uso |
|---|---|
| typescript-eslint | Linting para TypeScript |
| Prettier | Formateo de código |
| esbuild / SWC | Bundlers ultrarrápidos |
| Vitest | Testing unitario |
| tsc --watch | Compilación en modo vigilancia |

---

## Ejercicio

Configura Vitest para probar una función TypeScript que valide emails.

**Instrucciones paso a paso:**

1. Crea `src/validar.ts` con función `validarEmail(email: string): boolean`
2. Crea `src/__tests__/validar.test.ts`
3. Escribe tests: email válido, email sin @, email sin dominio
4. Ejecuta `npx vitest`

<details>
<summary>Mostrar solución</summary>

```typescript
// src/validar.ts
export function validarEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

```typescript
// src/__tests__/validar.test.ts
import { describe, it, expect } from "vitest";
import { validarEmail } from "../validar";

describe("validarEmail", () => {
  it("acepta emails válidos", () => {
    expect(validarEmail("usuario@ejemplo.com")).toBe(true);
    expect(validarEmail("ana@empresa.co")).toBe(true);
  });

  it("rechaza emails sin @", () => {
    expect(validarEmail("usuario")).toBe(false);
  });

  it("rechaza emails sin dominio", () => {
    expect(validarEmail("usuario@")).toBe(false);
    expect(validarEmail("@dominio")).toBe(false);
  });
});
```

```bash
npx vitest
```

</details>
