---
title: Asíncrono
description: Promesas y async/await tipados.
module: lenguajes/typescript
submodule: general
order: 35
---

Al completar esta guía podrás:

- Tipar promesas con Promise<T>
- Usar async/await con tipos explícitos
- Manejar errores en código asíncrono
- Tipar Promise.all y otras combinaciones

---

## Promise<T>

```typescript
function obtenerDatos(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Datos cargados"), 1000);
  });
}

// Uso con .then
obtenerDatos().then((datos) => {
  console.log(datos);  // datos: string
});
```

---

## async/await

```typescript
async function cargar(): Promise<string> {
  const datos = await obtenerDatos();
  return datos.toUpperCase();
}

// El tipo de retorno siempre es Promise<T>
const resultado = await cargar();
// resultado: string
```

---

## Tipar fetch

```typescript
interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

async function obtenerUsuario(id: number): Promise<Usuario> {
  const respuesta = await fetch(`https://api.ejemplo.com/usuarios/${id}`);

  if (!respuesta.ok) {
    throw new Error(`Error HTTP: ${respuesta.status}`);
  }

  const usuario: Usuario = await respuesta.json();
  return usuario;
}

// Uso
const usuario = await obtenerUsuario(1);
console.log(usuario.nombre);  // string
```

---

## Manejo de errores

```typescript
async function buscarUsuario(id: number): Promise<Usuario | null> {
  try {
    const usuario = await obtenerUsuario(id);
    return usuario;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    }
    return null;
  }
}
```

---

## Promise.all

```typescript
async function cargarVarios(): Promise<[Usuario, Producto[]]> {
  const [usuario, productos] = await Promise.all([
    obtenerUsuario(1),
    obtenerProductos(),
  ]);

  return [usuario, productos];
}

const [user, prods] = await cargarVarios();
// user: Usuario, prods: Producto[]
```

---

## Promise.allSettled

```typescript
interface Resultado {
  exito: boolean;
  valor?: string;
}

async function procesar(): Promise<Resultado[]> {
  const resultados = await Promise.allSettled([
    obtenerDatos(),
    obtenerDatosFallido(),
  ]);

  return resultados.map((r) => ({
    exito: r.status === "fulfilled",
    valor: r.status === "fulfilled" ? r.value : undefined,
  }));
}
```

---

## AsyncGenerator

```typescript
async function* generadorPaginado(
  paginas: number
): AsyncGenerator<Usuario[], void> {
  for (let i = 1; i <= paginas; i++) {
    const respuesta = await fetch(`/api/usuarios?pagina=${i}`);
    const usuarios: Usuario[] = await respuesta.json();
    yield usuarios;
  }
}

for await (const pagina of generadorPaginado(3)) {
  console.log(pagina.length, "usuarios");
}
```

---

## Fetch tipado genérico

```typescript
async function fetchJSON<T>(url: string): Promise<T> {
  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
  }

  return respuesta.json() as Promise<T>;
}

// Uso
const usuario = await fetchJSON<Usuario>("/api/usuario/1");
const productos = await fetchJSON<Producto[]>("/api/productos");
```

---

## Resumen

| API | Tipo |
|---|---|
| Promise | `Promise<T>` |
| async | `async fn(): Promise<T>` |
| await | `const valor: T = await promesa` |
| Promise.all | `Promise<[T, U]>` |
| Promise.allSettled | `PromiseSettledResult<T>[]` |
| AsyncGenerator | `AsyncGenerator<T, void>` |

---

## Ejercicio

Crea una función `obtenerUsuarios` que devuelva `Promise<Usuario[]>` usando fetch. Luego otra que muestre los nombres.

**Instrucciones paso a paso:**

1. `interface Usuario { id: number; name: string; email: string }`
2. `async function obtenerUsuarios(): Promise<Usuario[]>`
3. Usa `fetch("https://jsonplaceholder.typicode.com/users")`
4. Función `mostrarNombres()` que los imprima

<details>
<summary>Mostrar solución</summary>

```typescript
interface Usuario {
  id: number;
  name: string;
  email: string;
}

async function obtenerUsuarios(): Promise<Usuario[]> {
  const respuesta = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!respuesta.ok) {
    throw new Error(`Error HTTP: ${respuesta.status}`);
  }

  return respuesta.json();
}

async function mostrarNombres(): Promise<void> {
  try {
    const usuarios = await obtenerUsuarios();
    usuarios.forEach((u) => console.log(u.name));
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
  }
}

mostrarNombres();
// "Leanne Graham"
// "Ervin Howell"
// ...
```

</details>
