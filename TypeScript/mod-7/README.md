# TypeScript: Namespaces, Index Signatures y Declaration Merging

En este módulo exploraremos tres características avanzadas de TypeScript: **Namespaces**, **Index Signatures** y **Declaration Merging**. Estas herramientas permiten organizar y extender el código de manera eficiente.

---

## 1. **Namespaces**

Los **Namespaces** son una forma de organizar el código en TypeScript. Permiten agrupar funciones, interfaces, clases y constantes relacionadas dentro de un contenedor lógico.

### **Definición y uso**

**Ejemplo:**
```typescript
namespace Utilidades {
  export function saludar(nombre: string): string {
    return `Hola, ${nombre}`;
  }

  export const PI = 3.14159;

  export class Calculadora {
    static sumar(a: number, b: number): number {
      return a + b;
    }
  }
}

// Uso del namespace
console.log(Utilidades.saludar("Juan"));
console.log(Utilidades.PI);
console.log(Utilidades.Calculadora.sumar(5, 10));
```

### **Ventajas**
- Organización del código en proyectos grandes.
- Evita conflictos de nombres al encapsular las definiciones.

### **Desventajas**
- En proyectos modernos, los módulos de ES6 suelen ser preferidos sobre los namespaces.

---

## 2. **Index Signatures**

Las **Index Signatures** permiten definir tipos dinámicos para las claves de un objeto. Son útiles cuando no se conocen los nombres de las propiedades de antemano.

### **Definición y uso**

**Ejemplo:**
```typescript
type Diccionario = {
  [clave: string]: string;
};

const traducciones: Diccionario = {
  hola: "hello",
  mundo: "world",
};

console.log(traducciones["hola"]); // "hello"
```

### **Ejemplo con tipos mixtos**

**Ejemplo:**
```typescript
interface Configuracion {
  [clave: string]: string | number;
}

const configuracion: Configuracion = {
  puerto: 8080,
  modo: "producción",
};

console.log(configuracion["puerto"]); // 8080
```

### **Restricciones**
- Todas las propiedades del objeto deben cumplir con el tipo definido en la firma de índice.
- No se pueden mezclar propiedades con tipos incompatibles.

---

## 3. **Declaration Merging**

El **Declaration Merging** permite combinar múltiples declaraciones con el mismo nombre en una sola definición. Esto es útil para extender interfaces, clases o namespaces.

### **Merging de interfaces**

Cuando dos interfaces tienen el mismo nombre, TypeScript las combina automáticamente.

**Ejemplo:**
```typescript
interface Usuario {
  nombre: string;
}

interface Usuario {
  edad: number;
}

const usuario: Usuario = {
  nombre: "Ana",
  edad: 25,
};
```

### **Merging de namespaces**

Los namespaces también pueden combinarse.

**Ejemplo:**
```typescript
namespace Biblioteca {
  export const nombre = "Mi Biblioteca";
}

namespace Biblioteca {
  export function obtenerNombre(): string {
    return nombre;
  }
}

console.log(Biblioteca.obtenerNombre());
```

### **Extensión de clases**

Aunque las clases no admiten merging directamente, puedes usar interfaces para extenderlas.

**Ejemplo:**
```typescript
class Persona {
  nombre: string = "";
}

interface Persona {
  edad: number;
}

const persona: Persona = {
  nombre: "Luis",
  edad: 30,
};
```

### **Consideraciones**
- El merging puede ser confuso si no se documenta adecuadamente.
- Es útil para extender bibliotecas de terceros sin modificar su código fuente.

---

## Conclusión

Estas características avanzadas de TypeScript permiten organizar, extender y trabajar con estructuras dinámicas de manera eficiente. Aunque no siempre son necesarias en proyectos pequeños, son herramientas poderosas para proyectos grandes y colaborativos. ¡Experimenta con ellas para aprovechar al máximo TypeScript!