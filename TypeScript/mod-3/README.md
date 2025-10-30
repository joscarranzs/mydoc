# Tipos básicos en TypeScript

TypeScript introduce un sistema de tipos estáticos que permite definir y trabajar con diferentes tipos de datos. A continuación, exploraremos los tipos básicos que ofrece TypeScript y cómo utilizarlos.

## 1. **Tipos primitivos**

### **`number`**
Representa números, ya sean enteros o de punto flotante.

**Ejemplo:**
```typescript
let edad: number = 25;
let altura: number = 1.75;
```

### **`string`**
Representa cadenas de texto.

**Ejemplo:**
```typescript
let nombre: string = "Juan";
let saludo: string = `Hola, ${nombre}`;
```

### **`boolean`**
Representa valores de verdadero o falso.

**Ejemplo:**
```typescript
let esActivo: boolean = true;
let esMayor: boolean = false;
```

### **`null` y `undefined`**
- `null`: Representa la ausencia intencional de un valor.
- `undefined`: Representa una variable que no ha sido inicializada.

**Ejemplo:**
```typescript
let valorNulo: null = null;
let valorIndefinido: undefined = undefined;
```

### **`any`**
Permite asignar cualquier tipo de valor. Se debe usar con precaución, ya que desactiva las comprobaciones de tipo.

**Ejemplo:**
```typescript
let variable: any = 42;
variable = "Ahora soy un string";
```

### **`unknown`**
Similar a `any`, pero más seguro. Obliga a realizar comprobaciones de tipo antes de usar el valor.

**Ejemplo:**
```typescript
let valorDesconocido: unknown = "Hola";
if (typeof valorDesconocido === "string") {
  console.log(valorDesconocido.toUpperCase());
}
```

## 2. **Tipos compuestos**

### **`array`**
Representa una lista de elementos del mismo tipo.

**Ejemplo:**
```typescript
let numeros: number[] = [1, 2, 3, 4];
let palabras: Array<string> = ["uno", "dos", "tres"];
```

### **`tuple`**
Representa un arreglo con un número fijo de elementos, donde cada uno tiene un tipo específico.

**Ejemplo:**
```typescript
let tupla: [string, number] = ["Juan", 30];
```

### **`enum`**
Permite definir un conjunto de constantes con nombre.

**Ejemplo:**
```typescript
enum Color {
  Rojo,
  Verde,
  Azul
}
let colorFavorito: Color = Color.Verde;
```

### **`object`**
Representa cualquier valor que no sea un tipo primitivo.

**Ejemplo:**
```typescript
let persona: { nombre: string; edad: number } = {
  nombre: "Ana",
  edad: 25
};
```

## 3. **Tipos especiales**

### **`void`**
Indica que una función no devuelve ningún valor.

**Ejemplo:**
```typescript
function saludar(): void {
  console.log("Hola");
}
```

### **`never`**
Indica que una función nunca finaliza correctamente (por ejemplo, lanza un error o entra en un bucle infinito).

**Ejemplo:**
```typescript
function error(mensaje: string): never {
  throw new Error(mensaje);
}
```

### **`union`**
Permite que una variable tenga más de un tipo.

**Ejemplo:**
```typescript
let id: string | number;
id = 123;
id = "ABC";
```

### **`type` y `interface`**
Permiten definir tipos personalizados.

**Ejemplo con `type`:**
```typescript
type Punto = {
  x: number;
  y: number;
};
let coordenada: Punto = { x: 10, y: 20 };
```

**Ejemplo con `interface`:**
```typescript
interface Persona {
  nombre: string;
  edad: number;
}
let usuario: Persona = { nombre: "Luis", edad: 30 };
```

---

Con estos tipos básicos, TypeScript proporciona una base sólida para escribir código más seguro, legible y fácil de mantener. ¡Explora y experimenta con ellos en tus proyectos!