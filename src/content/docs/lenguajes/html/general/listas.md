---
title: Listas
description: ul, ol, li.
module: lenguajes/html
submodule: general
order: 20
---

Al completar esta guía podrás:

- Crear listas desordenadas con ul
- Crear listas ordenadas con ol
- Anidar listas dentro de listas
- Usar los atributos type, start y reversed

---

## Lista desordenada (ul)

Elementos sin orden específico, con viñetas:

```html
<ul>
  <li>Manzanas</li>
  <li>Peras</li>
  <li>Plátanos</li>
</ul>
```

---

## Lista ordenada (ol)

Elementos numerados:

```html
<ol>
  <li>Preparar los ingredientes</li>
  <li>Mezclar la harina con los huevos</li>
  <li>Hornear a 180°C por 30 minutos</li>
</ol>
```

---

## Listas anidadas

Listas dentro de listas:

```html
<ul>
  <li>Frutas
    <ul>
      <li>Manzana</li>
      <li>Pera</li>
      <li>Plátano</li>
    </ul>
  </li>
  <li>Verduras
    <ul>
      <li>Zanahoria</li>
      <li>Brócoli</li>
    </ul>
  </li>
</ul>
```

---

## Atributos de ol

```html
<!-- type: tipo de numeración -->
<ol type="1">  <!-- Números (defecto) -->
<ol type="A">  <!-- Letras mayúsculas -->
<ol type="a">  <!-- Letras minúsculas -->
<ol type="I">  <!-- Romanos mayúsculas -->
<ol type="i">  <!-- Romanos minúsculas -->

<!-- start: número inicial -->
<ol start="5">
  <li>Quinto elemento</li>
  <li>Sexto elemento</li>
</ol>

<!-- reversed: orden inverso -->
<ol reversed>
  <li>Primero (10)</li>
  <li>Segundo (9)</li>
  <li>Tercero (8)</li>
</ol>
```

---

## Lista de descripción (dl)

Pares término-definición:

```html
<dl>
  <dt>HTML</dt>
  <dd>Lenguaje de marcado para la web.</dd>

  <dt>CSS</dt>
  <dd>Lenguaje de estilos para presentación.</dd>

  <dt>JavaScript</dt>
  <dd>Lenguaje de programación del navegador.</dd>
</dl>
```

---

## Estilo de viñetas con CSS

```html
<ul style="list-style-type: disc;">   <!-- Círculo lleno (defecto) -->
<ul style="list-style-type: circle;"> <!-- Círculo vacío -->
<ul style="list-style-type: square;"> <!-- Cuadrado -->
<ul style="list-style-type: none;">   <!-- Sin viñeta -->
```

```html
<ol style="list-style-type: decimal;">       <!-- 1, 2, 3 -->
<ol style="list-style-type: lower-alpha;">   <!-- a, b, c -->
<ol style="list-style-type: upper-roman;">   <!-- I, II, III -->
```

---

## Listas en navegación

Combinadas con enlaces para menús:

```html
<nav>
  <ul style="list-style: none; padding: 0; display: flex; gap: 16px;">
    <li><a href="/">Inicio</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/contacto">Contacto</a></li>
  </ul>
</nav>
```

---

## Resumen

| Etiqueta | Tipo | Uso |
|---|---|---|
| `<ul>` | Desordenada | Viñetas, sin orden |
| `<ol>` | Ordenada | Numerada, secuencial |
| `<li>` | Elemento | Cada ítem de la lista |
| `<dl>` | Descripción | Término + definición |
| `<dt>` | Término | Término en dl |
| `<dd>` | Definición | Definición en dl |

---

## Ejercicio

Crea una receta de cocina usando: lista ordenada para los pasos, lista desordenada para los ingredientes, y lista anidada dentro de un ingrediente (ejemplo: "verduras" con sublista).

**Instrucciones paso a paso:**

1. Crea `listas.html`
2. Usa ul para ingredientes
3. Anida una sublista dentro de "Verduras"
4. Usa ol para los pasos de preparación
5. Abre en el navegador

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Listas HTML</title>
</head>
<body>
  <h1>Receta: Tortilla de patatas</h1>

  <h2>Ingredientes</h2>
  <ul>
    <li>4 huevos</li>
    <li>3 patatas medianas</li>
    <li>1 cebolla</li>
    <li>Aceite de oliva</li>
    <li>Sal</li>
    <li>Verduras (opcional)
      <ul>
        <li>Pimiento verde</li>
        <li>Calabacín</li>
      </ul>
    </li>
  </ul>

  <h2>Preparación</h2>
  <ol>
    <li>Pelar y cortar las patatas en rodajas finas.</li>
    <li>Freír las patatas en abundante aceite hasta que estén doradas.</li>
    <li>Batir los huevos en un bol y añadir sal.</li>
    <li>Mezclar las patatas con el huevo batido.</li>
    <li>Verter la mezcla en la sartén y cocinar 3 minutos por cada lado.</li>
  </ol>
</body>
</html>
```

</details>
