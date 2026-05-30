---
title: React
description: TypeScript con React.
module: lenguajes/typescript
submodule: general
order: 32
---

Al completar esta guía podrás:

- Tipar componentes React con TypeScript
- Usar useState, useEffect y useRef con tipos
- Tipar event handlers y children
- Crear componentes genéricos

---

## Componente funcional

```typescript
interface Props {
  nombre: string;
  edad?: number;
}

function Saludo({ nombre, edad }: Props): JSX.Element {
  return (
    <div>
      <h1>Hola, {nombre}</h1>
      {edad && <p>Edad: {edad}</p>}
    </div>
  );
}

// Uso:
// <Saludo nombre="Ana" edad={30} />
```

---

## useState

```typescript
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState<number>(0);
  const [texto, setTexto] = useState<string>("");

  // Inferencia desde valor inicial
  const [activo, setActivo] = useState(false);  // boolean

  // Estado complejo
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  // usuario: Usuario | null
}
```

---

## useRef

```typescript
import { useRef } from "react";

function Formulario() {
  // Referencia a elemento DOM
  const inputRef = useRef<HTMLInputElement>(null);

  // Referencia a valor mutable
  const contadorRef = useRef<number>(0);

  const enfocar = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={enfocar}>Enfocar</button>
    </>
  );
}
```

---

## Event handlers

```typescript
function Formulario() {
  const manejarClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log("Clic en:", e.currentTarget);
  };

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("Valor:", e.target.value);
  };

  const manejarSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input onChange={manejarCambio} />
      <button onClick={manejarClick}>Enviar</button>
    </form>
  );
}
```

---

## Children

```typescript
interface Props {
  children: React.ReactNode;
  titulo: string;
}

function Card({ titulo, children }: Props): JSX.Element {
  return (
    <div className="card">
      <h2>{titulo}</h2>
      {children}
    </div>
  );
}

// <Card titulo="Título">
//   <p>Contenido del card</p>
// </Card>
```

---

## Componentes genéricos

```typescript
interface ListaProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function Lista<T>({ items, renderItem }: ListaProps<T>): JSX.Element {
  return <ul>{items.map(renderItem)}</ul>;
}

// Uso con tipos inferidos
// <Lista
//   items={[{ id: 1, nombre: "Ana" }]}
//   renderItem={(u) => <li>{u.nombre}</li>}
// />
```

---

## useEffect

```typescript
import { useState, useEffect } from "react";

function Datos() {
  const [datos, setDatos] = useState<unknown[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/datos")
      .then((res) => res.json())
      .then(setDatos)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  return <pre>{JSON.stringify(datos, null, 2)}</pre>;
}
```

---

## Resumen

| API | Tipo |
|---|---|
| Componente | `(props: Props) => JSX.Element` |
| useState | `useState<T>(valorInicial)` |
| useRef | `useRef<HTMLElement>(null)` |
| Eventos | `React.MouseEvent`, `React.ChangeEvent` |
| Children | `React.ReactNode` |
| Genéricos | `<T,>(props: Props<T>)` |

---

## Ejercicio

Crea un componente `InputText` tipado que reciba `label`, `value` y `onChange` con el tipo correcto.

**Instrucciones paso a paso:**

1. `interface Props { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }`
2. Renderiza un label y un input
3. Usa el componente en un formulario

<details>
<summary>Mostrar solución</summary>

```typescript
interface InputTextProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputText({ label, value, onChange }: InputTextProps): JSX.Element {
  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

// Uso:
function Formulario() {
  const [nombre, setNombre] = useState("");

  return (
    <form>
      <InputText label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
    </form>
  );
}
```

</details>
