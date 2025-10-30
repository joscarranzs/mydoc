# Tipos avanzados en TypeScript

TypeScript no solo ofrece tipos básicos, sino que también proporciona herramientas avanzadas para modelar estructuras de datos complejas y escribir código más flexible y reutilizable. A continuación, exploraremos los tipos avanzados más importantes.

## 1. **Tipos genéricos**

Los genéricos permiten crear componentes reutilizables que funcionan con múltiples tipos en lugar de un único tipo.

**Ejemplo:**
```typescript
function identidad<T>(valor: T): T {
  return valor;
}

const numero = identidad<number>(42);
const texto = identidad<string>("Hola");
```

En este ejemplo, `T` es un parámetro de tipo que se resuelve en tiempo de compilación.

## 2. **Tipos condicionales**

Los tipos condicionales permiten definir tipos basados en una condición.

**Ejemplo:**
```typescript
type EsString<T> = T extends string ? true : false;

let resultado1: EsString<string>; // true
let resultado2: EsString<number>; // false
```

## 3. **Tipos mapeados**

Los tipos mapeados permiten transformar todos los atributos de un tipo.

**Ejemplo:**
```typescript
type Persona = {
  nombre: string;
  edad: number;
};

type Opcional<T> = {
  [K in keyof T]?: T[K];
};

type PersonaOpcional = Opcional<Persona>;
```

En este caso, `PersonaOpcional` convierte todos los atributos de `Persona` en opcionales.

## 4. **Uniones discriminadas**

Las uniones discriminadas son útiles para manejar múltiples tipos relacionados.

**Ejemplo:**
```typescript
type Circulo = {
  tipo: "circulo";
  radio: number;
};

type Rectangulo = {
  tipo: "rectangulo";
  ancho: number;
  alto: number;
};

type Figura = Circulo | Rectangulo;

function area(figura: Figura): number {
  switch (figura.tipo) {
    case "circulo":
      return Math.PI * figura.radio ** 2;
    case "rectangulo":
      return figura.ancho * figura.alto;
  }
}
```

## 5. **Intersecciones (`&`)**

Las intersecciones combinan múltiples tipos en uno solo.

**Ejemplo:**
```typescript
type A = { a: number };
type B = { b: string };

type C = A & B;

const objeto: C = { a: 1, b: "Hola" };
```

## 6. **`keyof` y `typeof`**

### **`keyof`**
Obtiene las claves de un tipo como un tipo de unión.

**Ejemplo:**
```typescript
type Persona = {
  nombre: string;
  edad: number;
};

type ClavesDePersona = keyof Persona; // "nombre" | "edad"
```

### **`typeof`**
Obtiene el tipo de una variable o expresión.

**Ejemplo:**
```typescript
const usuario = {
  nombre: "Juan",
  edad: 30
};

type TipoDeUsuario = typeof usuario; // { nombre: string; edad: number; }
```

## 7. **`infer`**

`infer` se utiliza dentro de tipos condicionales para extraer tipos.

**Ejemplo:**
```typescript
type Retorno<T> = T extends (...args: any[]) => infer R ? R : never;

function sumar(a: number, b: number): number {
  return a + b;
}

type TipoDeRetorno = Retorno<typeof sumar>; // number
```

## 8. **Tipos indexados**

Permiten acceder a un tipo específico dentro de un objeto o arreglo.

**Ejemplo:**
```typescript
type Persona = {
  nombre: string;
  edad: number;
};

type Edad = Persona["edad"]; // number
```

## 9. **Tipos utilitarios**

TypeScript incluye varios tipos utilitarios para tareas comunes.

### **`Partial`**
Convierte todos los atributos de un tipo en opcionales.

**Ejemplo:**
```typescript
type Persona = {
  nombre: string;
  edad: number;
};

type PersonaParcial = Partial<Persona>;
```

### **`Readonly`**
Convierte todos los atributos de un tipo en solo lectura.

**Ejemplo:**
```typescript
type PersonaSoloLectura = Readonly<Persona>;
```

### **`Pick`**
Selecciona un subconjunto de atributos de un tipo.

**Ejemplo:**
```typescript
type PersonaNombre = Pick<Persona, "nombre">;
```

### **`Record`**
Crea un tipo con un conjunto de claves y un tipo asociado.

**Ejemplo:**
```typescript
type Configuracion = Record<string, boolean>;
const opciones: Configuracion = {
  modoOscuro: true,
  notificaciones: false
};
```

---

Con estos tipos avanzados, TypeScript permite modelar estructuras de datos complejas y escribir código más robusto y reutilizable. ¡Experimenta con ellos para aprovechar al máximo el lenguaje!