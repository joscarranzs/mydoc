---
title: Clases
description: El atributo class.
module: lenguajes/html
submodule: general
order: 23
---

Al completar esta guía podrás:

- Usar el atributo class para aplicar estilos
- Asignar múltiples clases a un elemento
- Entender la diferencia entre class e id
- Usar clases para JavaScript

---

## Sintaxis

El atributo `class` asigna una o más clases a un elemento. Es la base para reutilizar estilos y seleccionar grupos de elementos:

```html
<p class="destacado">Este párrafo tiene estilo de clase.</p>
```

En CSS se seleccionan con un punto (`.`). Una clase puede reutilizarse en muchos elementos:

```css
.destacado {
  background: #e8f0fe;
  padding: 10px;
  border-left: 4px solid #1A73E8;
}
```

---

## Múltiples clases

Un elemento puede tener varias clases separadas por espacio. Esto permite mezclar estilos base y variantes:

```html
<p class="texto-grande color-azul margen-inferior">
  Párrafo con tres clases
</p>
```

```css
.texto-grande { font-size: 24px; }
.color-azul { color: #1A73E8; }
.margen-inferior { margin-bottom: 20px; }
```

---

## Clases reutilizables

Las clases están diseñadas para reutilizarse. Es una de las razones por las que `class` es más flexible que `id`:

```html
<ul>
  <li class="item">Elemento 1</li>
  <li class="item">Elemento 2</li>
  <li class="item">Elemento 3</li>
</ul>
```

```css
.item {
  padding: 8px;
  border-bottom: 1px solid #ddd;
  list-style: none;
}
```

---

## Combinación de clases

Las clases se combinan para crear variaciones sin duplicar estilos:

```html
<button class="btn btn-primario">Guardar</button>
<button class="btn btn-secundario">Cancelar</button>
<button class="btn btn-peligro">Eliminar</button>
```

```css
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
.btn-primario { background: #1A73E8; color: white; }
.btn-secundario { background: #ccc; color: #333; }
.btn-peligro { background: #d93025; color: white; }
```

---

## Clases en diferentes elementos

La misma clase funciona en distintos tipos de elemento. Eso facilita crear patrones visuales consistentes:

```html
<h2 class="resaltado">Título resaltado</h2>
<p class="resaltado">Párrafo resaltado</p>
<div class="resaltado">Div resaltado</div>
```

```css
.resaltado {
  background: #fef9e7;
  padding: 12px;
  border-radius: 4px;
}
```

---

## Clases con descendencia

Seleccionar elementos dentro de una clase ayuda a estilizar componentes completos sin afectar al resto de la página:

```css
.tarjeta {
  border: 1px solid #ddd;
  padding: 20px;
}
.tarjeta h2 {
  color: #1A73E8;
}
.tarjeta p {
  color: #555;
  line-height: 1.6;
}
```

```html
<div class="tarjeta">
  <h2>Título de tarjeta</h2>
  <p>Texto dentro de la tarjeta.</p>
</div>
```

---

## Clases para JavaScript

Las clases también se usan para seleccionar elementos con JavaScript. Esto es útil cuando necesitas actuar sobre varios elementos a la vez:

```html
<button class="btn-accion" data-id="1">Acción 1</button>
<button class="btn-accion" data-id="2">Acción 2</button>

<script>
  document.querySelectorAll('.btn-accion').forEach(boton => {
    boton.onclick = () => alert(`Botón ${boton.dataset.id} pulsado`);
  });
</script>
```

---

## classList (JavaScript)

`classList` permite agregar, quitar o alternar clases de forma dinámica sin reescribir el atributo completo:

```html
<div id="mensaje" class="alerta">Mensaje importante</div>
<button onclick="mostrar()">Mostrar</button>
<button onclick="ocultar()">Ocultar</button>

<script>
  function mostrar() {
    document.getElementById('mensaje').classList.remove('oculto');
  }
  function ocultar() {
    document.getElementById('mensaje').classList.add('oculto');
  }
</script>
```

```css
.oculto { display: none; }
.alerta { background: #fce8e6; padding: 16px; border-radius: 4px; }
```

---

## Resumen

Usa `class` cuando el estilo o el comportamiento debe repetirse en varios elementos.

| Característica | class | id |
|---|---|---|
| Sintaxis | `class="nombre"` | `id="nombre"` |
| CSS selector | `.nombre` | `#nombre` |
| Reutilizable | Sí | No (único) |
| Especificidad CSS | Baja | Alta |
| JavaScript | `getElementsByClassName` | `getElementById` |

---

## Ejercicio

Crea tres botones (Primario, Secundario, Peligro) usando clases combinadas. Luego una tarjeta con clase que use descendencia (h2 y p dentro de la tarjeta con estilos diferentes).

**Instrucciones paso a paso:**

1. Crea `clases.html`
2. Define clases .btn, .btn-primario, .btn-secundario, .btn-peligro
3. Crea tres botones con las clases combinadas
4. Crea una tarjeta con .tarjeta y estilos de descendencia

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Clases HTML</title>
  <style>
    .btn {
      padding: 10px 24px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      margin: 4px;
    }
    .btn-primario { background: #1A73E8; color: white; }
    .btn-secundario { background: #e8f0fe; color: #1A73E8; border: 1px solid #1A73E8; }
    .btn-peligro { background: #d93025; color: white; }

    .tarjeta {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      max-width: 400px;
      margin-top: 20px;
    }
    .tarjeta h2 { color: #1A73E8; margin-top: 0; }
    .tarjeta p { color: #555; line-height: 1.5; }
  </style>
</head>
<body>
  <h1>Clases en HTML</h1>

  <button class="btn btn-primario">Primario</button>
  <button class="btn btn-secundario">Secundario</button>
  <button class="btn btn-peligro">Peligro</button>

  <div class="tarjeta">
    <h2>Título de tarjeta</h2>
    <p>Este párrafo hereda estilos de descendencia de la clase tarjeta.</p>
  </div>
</body>
</html>
```

</details>
