---
title: Manejo de errores
description: Errores tipados y try/catch.
module: lenguajes/typescript
submodule: general
order: 36
---

Al completar esta guía podrás:

- Manejar errores con try/catch tipado
- Crear clases de error personalizadas
- Aplicar el patrón Result para errores predecibles
- Usar never en funciones de error

---

## try/catch con unknown

En TypeScript, `catch` por defecto tipa el error como `unknown`.

```typescript
try {
  JSON.parse("no válido");
} catch (error) {
  // error: unknown — no se puede acceder a propiedades sin verificar
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log("Error desconocido:", error);
  }
}
```

---

## Clases de error personalizadas

```typescript
class ErrorRed extends Error {
  constructor(
    message: string,
    public codigo: number
  ) {
    super(message);
    this.name = "ErrorRed";
  }
}

class ErrorValidacion extends Error {
  constructor(
    message: string,
    public campo: string
  ) {
    super(message);
    this.name = "ErrorValidacion";
  }
}

function procesarUsuario(datos: unknown): void {
  if (!datos || typeof datos !== "object") {
    throw new ErrorValidacion("Datos inválidos", "usuario");
  }
}
```

---

## Manejo con instanceof

```typescript
async function obtenerDatos(): Promise<void> {
  try {
    const respuesta = await fetch("/api/datos");
    if (!respuesta.ok) {
      throw new ErrorRed(
        `Error HTTP: ${respuesta.status}`,
        respuesta.status
      );
    }
  } catch (error) {
    if (error instanceof ErrorRed) {
      console.error(`Red [${error.codigo}]: ${error.message}`);
    } else if (error instanceof ErrorValidacion) {
      console.error(`Validación [${error.campo}]: ${error.message}`);
    } else if (error instanceof Error) {
      console.error("Error general:", error.message);
    } else {
      console.error("Error desconocido");
    }
  }
}
```

---

## Patrón Result

Para operaciones donde los errores son valores esperados, no excepciones.

```typescript
type ResultadoOk<T> = { exito: true; valor: T };
type ResultadoError = { exito: false; error: string };
type Resultado<T> = ResultadoOk<T> | ResultadoError;

function dividir(a: number, b: number): Resultado<number> {
  if (b === 0) {
    return { exito: false, error: "División por cero" };
  }
  return { exito: true, valor: a / b };
}

function procesarDivision(a: number, b: number): void {
  const resultado = dividir(a, b);

  if (resultado.exito) {
    console.log("Resultado:", resultado.valor);
  } else {
    console.error("Error:", resultado.error);
  }
}
```

---

## never con errores

```typescript
function errorFatal(mensaje: string): never {
  throw new Error(mensaje);
}

function procesar(valor: string | number): string {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }
  if (typeof valor === "number") {
    return valor.toFixed(2);
  }

  // Si llegamos aquí, hay un caso no cubierto
  return errorFatal("Tipo no soportado");
}
```

---

## try/catch en async

```typescript
async function fetchSeguro<T>(url: string): Promise<Resultado<T>> {
  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      return { exito: false, error: `HTTP ${respuesta.status}` };
    }
    const datos: T = await respuesta.json();
    return { exito: true, valor: datos };
  } catch (error) {
    if (error instanceof Error) {
      return { exito: false, error: error.message };
    }
    return { exito: false, error: "Error desconocido" };
  }
}
```

---

## Resumen

| Técnica | Descripción |
|---|---|
| catch unknown | Siempre verificar tipo del error |
| Clases personalizadas | Errores específicos del dominio |
| instanceof | Identificar tipo de error |
| Patrón Result | Errores como valores (sin throw) |
| never | Funciones que siempre lanzan error |

---

## Ejercicio

Crea una clase `ErrorAutenticacion` con código de error y un manejador que identifique el tipo de error.

**Instrucciones paso a paso:**

1. `class ErrorAutenticacion extends Error { constructor(msg: string, public codigo: number) { super(msg) } }`
2. Función `iniciarSesion(usuario: string, pass: string): void` que lance el error si credenciales inválidas
3. try/catch con instanceof

<details>
<summary>Mostrar solución</summary>

```typescript
class ErrorAutenticacion extends Error {
  constructor(
    message: string,
    public codigo: number
  ) {
    super(message);
    this.name = "ErrorAutenticacion";
  }
}

function iniciarSesion(usuario: string, password: string): void {
  if (!usuario || !password) {
    throw new ErrorAutenticacion("Credenciales requeridas", 400);
  }

  if (usuario !== "admin" || password !== "1234") {
    throw new ErrorAutenticacion("Credenciales inválidas", 401);
  }

  console.log("Inicio de sesión exitoso");
}

try {
  iniciarSesion("admin", "incorrecto");
} catch (error) {
  if (error instanceof ErrorAutenticacion) {
    console.log(`Error [${error.codigo}]: ${error.message}`);
    // "Error [401]: Credenciales inválidas"
  } else if (error instanceof Error) {
    console.log("Error general:", error.message);
  }
}
```

</details>
