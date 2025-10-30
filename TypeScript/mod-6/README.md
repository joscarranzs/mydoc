# Programación asincrónica en TypeScript

La programación asincrónica es fundamental para manejar operaciones que toman tiempo, como solicitudes a servidores, lectura de archivos o temporizadores, sin bloquear la ejecución del programa. TypeScript, al ser un superconjunto de JavaScript, ofrece herramientas avanzadas para trabajar con asincronía, como `Promises`, `async/await` y `Observables`.

## 1. **Promises**

Una `Promise` representa un valor que puede estar disponible ahora, en el futuro o nunca. Es una forma de manejar operaciones asincrónicas.

**Ejemplo básico:**
```typescript
const promesa = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("Operación completada");
  }, 2000);
});

promesa.then((resultado) => {
  console.log(resultado);
}).catch((error) => {
  console.error(error);
});
```

## 2. **`async` y `await`**

`async` y `await` son una forma más sencilla y legible de trabajar con código asincrónico. Una función marcada como `async` siempre devuelve una `Promise`.

**Ejemplo:**
```typescript
async function obtenerDatos(): Promise<string> {
  const datos = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Datos obtenidos");
    }, 2000);
  });

  return datos;
}

obtenerDatos().then((resultado) => console.log(resultado));
```

## 3. **Manejo de errores en código asincrónico**

Es importante manejar los errores en operaciones asincrónicas para evitar fallos inesperados.

**Con `try/catch`:**
```typescript
async function procesarDatos(): Promise<void> {
  try {
    const datos = await obtenerDatos();
    console.log(datos);
  } catch (error) {
    console.error("Error al procesar los datos:", error);
  }
}

procesarDatos();
```

## 4. **Paralelismo con `Promise.all`**

`Promise.all` permite ejecutar múltiples promesas en paralelo y esperar a que todas se resuelvan.

**Ejemplo:**
```typescript
async function ejecutarEnParalelo(): Promise<void> {
  const [resultado1, resultado2] = await Promise.all([
    new Promise((resolve) => setTimeout(() => resolve("Resultado 1"), 1000)),
    new Promise((resolve) => setTimeout(() => resolve("Resultado 2"), 2000))
  ]);

  console.log(resultado1, resultado2);
}

ejecutarEnParalelo();
```

## 5. **`setTimeout` y `setInterval`**

Estas funciones permiten ejecutar código después de un tiempo o de manera repetitiva.

**Ejemplo con `setTimeout`:**
```typescript
setTimeout(() => {
  console.log("Esto se ejecuta después de 2 segundos");
}, 2000);
```

**Ejemplo con `setInterval`:**
```typescript
const intervalo = setInterval(() => {
  console.log("Esto se ejecuta cada segundo");
}, 1000);

setTimeout(() => clearInterval(intervalo), 5000); // Detiene el intervalo después de 5 segundos
```

## 6. **`Observable` (con RxJS)**

Los `Observables` son una herramienta poderosa para manejar flujos de datos asincrónicos. Aunque no son nativos de TypeScript, se utilizan comúnmente con la biblioteca RxJS.

**Ejemplo básico:**
```typescript
import { Observable } from "rxjs";

const observable = new Observable<string>((subscriber) => {
  subscriber.next("Primer valor");
  setTimeout(() => subscriber.next("Segundo valor"), 1000);
  setTimeout(() => subscriber.complete(), 2000);
});

observable.subscribe({
  next: (valor) => console.log(valor),
  complete: () => console.log("Observable completado"),
});
```

## 7. **Ejemplo práctico: Llamadas a una API**

Un caso común de programación asincrónica es realizar solicitudes a una API.

**Ejemplo:**
```typescript
async function obtenerUsuarios(): Promise<void> {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await respuesta.json();
    console.log(usuarios);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
  }
}

obtenerUsuarios();
```

## 8. **Buenas prácticas en programación asincrónica**

- **Evita el anidamiento excesivo:** Utiliza `async/await` en lugar de múltiples `.then()`.
- **Maneja los errores:** Siempre utiliza `try/catch` o `.catch()` para manejar errores.
- **Optimiza el paralelismo:** Usa `Promise.all` para ejecutar tareas independientes en paralelo.
- **Cancela operaciones innecesarias:** En flujos complejos, considera usar `Observables` para manejar la cancelación de tareas.

---

Con estas herramientas y conceptos, puedes manejar operaciones asincrónicas de manera eficiente en TypeScript, mejorando la experiencia del usuario y la calidad del código. ¡Experimenta con estos ejemplos en tus proyectos!