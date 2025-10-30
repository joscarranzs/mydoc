# Manejo de errores en TypeScript

El manejo de errores es una parte esencial del desarrollo de software, ya que permite identificar y gestionar situaciones inesperadas en tiempo de ejecución. TypeScript, al ser un superconjunto de JavaScript, ofrece herramientas avanzadas para manejar errores de manera eficiente y segura.

---

## 1. **Errores en JavaScript y TypeScript**

En JavaScript, los errores se manejan utilizando bloques `try`, `catch` y `finally`. TypeScript extiende esta funcionalidad al proporcionar un sistema de tipos que ayuda a prevenir errores en tiempo de compilación.

**Ejemplo básico:**
```typescript
try {
  throw new Error("Algo salió mal");
} catch (error) {
  console.error("Error capturado:", error);
} finally {
  console.log("Esto siempre se ejecuta");
}
```

---

## 2. **Tipos de errores comunes**

### **Errores de sintaxis**
Ocurren cuando el código no sigue las reglas del lenguaje. TypeScript los detecta en tiempo de compilación.

**Ejemplo:**
```typescript
const numero: number = "texto"; // Error: Tipo 'string' no es asignable a tipo 'number'.
```

### **Errores en tiempo de ejecución**
Ocurren cuando el código se ejecuta y encuentra una situación inesperada.

**Ejemplo:**
```typescript
const lista = [1, 2, 3];
console.log(lista[5]); // undefined
```

---

## 3. **Manejo de errores con `try/catch`**

El bloque `try/catch` captura errores en tiempo de ejecución y permite manejarlos de manera controlada.

**Ejemplo:**
```typescript
function dividir(a: number, b: number): number {
  if (b === 0) {
    throw new Error("No se puede dividir entre cero");
  }
  return a / b;
}

try {
  console.log(dividir(10, 0));
} catch (error) {
  console.error("Error:", error.message);
}
```

---

## 4. **Errores personalizados**

Puedes crear tus propias clases de error para manejar casos específicos.

**Ejemplo:**
```typescript
class ErrorPersonalizado extends Error {
  constructor(mensaje: string) {
    super(mensaje);
    this.name = "ErrorPersonalizado";
  }
}

try {
  throw new ErrorPersonalizado("Este es un error personalizado");
} catch (error) {
  console.error(error.name + ": " + error.message);
}
```

---

## 5. **Uso de `never` para funciones que lanzan errores**

El tipo `never` se utiliza para funciones que nunca devuelven un valor, como aquellas que siempre lanzan un error.

**Ejemplo:**
```typescript
function lanzarError(mensaje: string): never {
  throw new Error(mensaje);
}

lanzarError("Error crítico");
```

---

## 6. **Validaciones y manejo preventivo**

Es una buena práctica validar los datos antes de procesarlos para evitar errores.

**Ejemplo:**
```typescript
function procesarTexto(texto?: string): void {
  if (!texto) {
    console.error("El texto es obligatorio");
    return;
  }
  console.log("Texto procesado:", texto);
}

procesarTexto();
procesarTexto("Hola mundo");
```

---

## 7. **Manejo de errores asincrónicos**

En operaciones asincrónicas, los errores se manejan con `try/catch` dentro de funciones `async` o con el método `.catch()` en promesas.

**Ejemplo con `async/await`:**
```typescript
async function obtenerDatos(): Promise<void> {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

obtenerDatos();
```

**Ejemplo con `.catch()`:**
```typescript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((respuesta) => respuesta.json())
  .then((datos) => console.log(datos))
  .catch((error) => console.error("Error al obtener datos:", error));
```

---

## 8. **Buenas prácticas en el manejo de errores**

1. **Valida los datos de entrada:** Asegúrate de que los datos sean correctos antes de procesarlos.
2. **Usa errores personalizados:** Crea clases de error específicas para casos particulares.
3. **Maneja los errores de manera centralizada:** Implementa un sistema de manejo de errores global en aplicaciones grandes.
4. **Evita capturar errores silenciosamente:** Siempre registra o maneja los errores de alguna manera.
5. **Documenta los errores esperados:** Asegúrate de que los desarrolladores sepan qué errores pueden ocurrir y cómo manejarlos.

---

Con estas herramientas y prácticas, puedes manejar errores de manera eficiente en tus proyectos TypeScript, mejorando la estabilidad y la experiencia del usuario. ¡Experimenta con estos conceptos para dominar el manejo de errores!