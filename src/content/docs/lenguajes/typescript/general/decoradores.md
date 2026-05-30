---
title: Decoradores
description: Modificar clases y miembros.
module: lenguajes/typescript
submodule: general
order: 34
---

Al completar esta guía podrás:

- Declarar decoradores de clase y método
- Usar decoradores de propiedad y parámetro
- Configurar decoradores experimentales y modernos
- Aplicar metadata con decoradores

---

## Decoradores modernos (TS 5.0+)

TypeScript 5.0 implementa los decoradores del estándar ECMAScript.

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "experimentalDecorators": false
  }
}
```

---

## Decorador de clase

Recibe el constructor y puede reemplazarlo o extenderlo.

```typescript
function sellado(constructor: Function): void {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sellado
class Configuracion {
  version: string = "1.0";
}

// No se pueden añadir propiedades nuevas a la clase
```

```typescript
function conLog(constructor: Function): void {
  console.log(`Clase creada: ${constructor.name}`);
}

@conLog
class Usuario {
  constructor(public nombre: string) {}
}
// "Clase creada: Usuario"
```

---

## Decorador de método

Modifica el descriptor de la propiedad.

```typescript
function soloLectura(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  descriptor.writable = false;
  return descriptor;
}

class Logger {
  @soloLectura
  metodo(): void {
    console.log("Este método no se puede sobrescribir");
  }
}
```

```typescript
function medirTiempo(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const metodoOriginal = descriptor.value;

  descriptor.value = function (...args: unknown[]) {
    const inicio = performance.now();
    const resultado = metodoOriginal.apply(this, args);
    const fin = performance.now();
    console.log(`${propertyKey}: ${fin - inicio}ms`);
    return resultado;
  };

  return descriptor;
}

class Analisis {
  @medirTiempo
  procesar(datos: number[]): number {
    return datos.reduce((a, b) => a + b, 0);
  }
}
```

---

## Decorador de propiedad

```typescript
function mayuscula(
  target: Object,
  propertyKey: string
): void {
  let valor: string;

  const getter = () => valor;
  const setter = (nuevo: string) => {
    valor = nuevo.toUpperCase();
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}

class Producto {
  @mayuscula
  nombre: string = "";
}

const p = new Producto();
p.nombre = "laptop";
console.log(p.nombre);  // "LAPTOP"
```

---

## Decoradores experimentales

Habilitados con `experimentalDecorators: true` en tsconfig.

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

```typescript
function log(parametro?: string) {
  return function (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): void {
    const original = descriptor.value;
    descriptor.value = function (...args: unknown[]) {
      console.log(`Llamando a ${propertyKey}`, parametro || "");
      return original.apply(this, args);
    };
  };
}

class Servicio {
  @log("servicio-usuarios")
  obtenerUsuarios(): void {
    console.log("Obteniendo usuarios...");
  }
}
```

---

## Decorador de parámetro (experimental)

```typescript
function inyectar(target: Object, propertyKey: string, parameterIndex: number): void {
  console.log(`Parámetro ${parameterIndex} de ${propertyKey} decorado`);
}

class Servicio {
  obtener(@inyectar id: number): void {
    console.log(id);
  }
}
```

---

## Resumen

| Tipo | Target | Uso |
|---|---|---|
| Clase | Constructor | Sellado, registro, inyección |
| Método | PropertyDescriptor | Logging, medición, validación |
| Propiedad | Propiedad | Transformación de valores |
| Parámetro | Índice | Inyección de dependencias |

---

## Ejercicio

Crea un decorador de método `@registrarLlamadas` que cuente cuántas veces se llama un método y lo muestre en consola.

**Instrucciones paso a paso:**

1. Crea el decorador que reemplace el método original
2. Usa un contador en el closure
3. Cada llamada incrementa el contador y lo muestra
4. Aplícalo a un método de prueba

<details>
<summary>Mostrar solución</summary>

```typescript
function registrarLlamadas(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  let contador = 0;
  const metodoOriginal = descriptor.value;

  descriptor.value = function (...args: unknown[]) {
    contador++;
    console.log(`${propertyKey} llamada #${contador}`);
    return metodoOriginal.apply(this, args);
  };

  return descriptor;
}

class Calculadora {
  @registrarLlamadas
  sumar(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculadora();
calc.sumar(1, 2);  // "sumar llamada #1"
calc.sumar(3, 4);  // "sumar llamada #2"
calc.sumar(5, 6);  // "sumar llamada #3"
```

</details>
