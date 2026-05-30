---
title: Node.js
description: TypeScript en el servidor.
module: lenguajes/typescript
submodule: general
order: 31
---

Al completar esta guía podrás:

- Configurar TypeScript para Node.js
- Usar ts-node y tsx para ejecución directa
- Elegir entre ESM y CJS
- Instalar tipos para Node.js

---

## Configuración básica

```json
// tsconfig.json — para Node.js con ESM
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true
  },
  "include": ["src/**/*"]
}
```

```json
// package.json
{
  "type": "module",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "tsx watch src/index.ts"
  }
}
```

---

## tsx (ejecución directa)

La herramienta más moderna para ejecutar TypeScript en Node.js.

```bash
npm install --save-dev tsx

# Ejecutar directamente
npx tsx src/index.ts

# Modo watch
npx tsx watch src/index.ts
```

---

## ts-node

Alternativa más establecida.

```bash
npm install --save-dev ts-node

# Ejecutar
npx ts-node src/index.ts

# Con TypeScript ESM
npx ts-node --esm src/index.ts
```

---

## Tipos para Node.js

```bash
npm install --save-dev @types/node
```

```typescript
import * as fs from "fs";
import * as path from "path";
import { createServer, IncomingMessage, ServerResponse } from "http";

const datos = fs.readFileSync(path.join(__dirname, "datos.json"), "utf-8");
```

---

## Servidor HTTP básico

```typescript
import { createServer, IncomingMessage, ServerResponse } from "http";

const puerto = 3000;

const servidor = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ mensaje: "Hola TypeScript", ruta: req.url }));
  }
);

servidor.listen(puerto, () => {
  console.log(`Servidor en http://localhost:${puerto}`);
});
```

---

## ESM vs CommonJS

```typescript
// ESM (recomendado) — package.json: "type": "module"
import fs from "fs";
import { suma } from "./utils.js";

// CommonJS — package.json: "type": "commonjs"
// import fs from "fs";
// const fs = require("fs");
```

| Característica | ESM | CJS |
|---|---|---|
| Syntax | import/export | require/module.exports |
| Ámbito | Archivo | Archivo |
| Carga | Asíncrona | Síncrona |
| Tree-shaking | Sí | No |
| Uso moderno | Recomendado | Legacy |

---

## ️ Variables de entorno

```typescript
import { config } from "dotenv";

config();

const PORT: number = parseInt(process.env.PORT || "3000", 10);
const DB_URL: string = process.env.DB_URL || "localhost";

console.log(`Puerto: ${PORT}`);
```

---

## Resumen

| Herramienta | Uso |
|---|---|
| tsx | Ejecución directa moderna |
| ts-node | Ejecución directa tradicional |
| @types/node | Tipos para APIs de Node |
| ESM | Sistema de módulos moderno |
| dotenv | Variables de entorno |

---

## Ejercicio

Crea un servidor HTTP con TypeScript que responda con un JSON con la fecha actual y la URL solicitada.

**Instrucciones paso a paso:**

1. Configura package.json con "type": "module"
2. Configura tsconfig.json para Node.js
3. Crea un servidor con http.createServer
4. Responde con JSON: { fecha: new Date().toISOString(), url: req.url }
5. Ejecuta con tsx

<details>
<summary>Mostrar solución</summary>

```typescript
// src/index.ts
import { createServer, IncomingMessage, ServerResponse } from "http";

const PORT = 3000;

const server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        fecha: new Date().toISOString(),
        url: req.url,
        metodo: req.method,
      })
    );
  }
);

server.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
```

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true
  },
  "include": ["src/**/*"]
}
```

```bash
npx tsx src/index.ts
# Servidor en http://localhost:3000
```

</details>
