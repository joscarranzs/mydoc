---
title: LISTAS
module: html
submodule: content/lists
---

HTML define tres tipos de listas que cubren desde enumeraciones simples hasta glosarios terminológicos. Cada una tiene un propósito semántico distinto.

## Listas desordenadas

`<ul>` (unordered list) presenta elementos sin un orden numérico. Cada elemento se marca con `<li>`:

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

Por defecto, los navegadores muestran un disco como viñeta. CSS permite personalizarlo con la propiedad `list-style-type`.

## Listas ordenadas

`<ol>` (ordered list) presenta elementos en una secuencia numerada:

```html
<ol>
  <li>Instalar el editor de código</li>
  <li>Crear un archivo index.html</li>
  <li>Escribir la estructura básica</li>
  <li>Abrir en el navegador</li>
</ol>
```

### Atributos de `<ol>`

| Atributo | Valores | Efecto |
|----------|---------|--------|
| `type` | `1`, `A`, `a`, `I`, `i` | Estilo de numeración |
| `start` | Número | Valor inicial del contador |
| `reversed` | Booleano | Numeración descendente |

```html
<ol type="A">
  <li>Primera opción</li>
  <li>Segunda opción</li>
</ol>

<ol start="5">
  <li>Quinto elemento</li>
  <li>Sexto elemento</li>
</ol>

<ol reversed>
  <li>Tres</li>
  <li>Dos</li>
  <li>Uno</li>
</ol>
```

### El atributo `value` en `<li>`

Permite saltar o reiniciar la numeración en un elemento específico:

```html
<ol>
  <li>Paso 1</li>
  <li>Paso 2</li>
  <li value="10">Paso 10 (salta al 10)</li>
  <li>Paso 11</li>
</ol>
```

## Listas de definición

`<dl>` (description list) agrupa términos y sus descripciones, ideal para glosarios, metadatos o pares clave-valor:

```html
<dl>
  <dt>HTML</dt>
  <dd>Lenguaje de marcado para la estructura de páginas web.</dd>

  <dt>CSS</dt>
  <dd>Lenguaje de estilos para la presentación visual.</dd>

  <dt>JavaScript</dt>
  <dd>Lenguaje de programación para la interactividad.</dd>
</dl>
```

- `<dt>` (description term) — el término a definir.
- `<dd>` (description details) — la definición o descripción.

Un `<dt>` puede tener múltiples `<dd>`, y un `<dd>` puede pertenecer a múltiples `<dt>`:

```html
<dl>
  <dt>Color</dt>
  <dd>Rojo</dd>
  <dd>Verde</dd>
  <dd>Azul</dd>

  <dt>Madera</dt>
  <dt>Metal</dt>
  <dd>Materiales resistentes</dd>
</dl>
```

## Listas anidadas

Cualquier tipo de lista puede contener otra lista dentro de un `<li>`:

```html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend
    <ol>
      <li>Node.js</li>
      <li>Python</li>
      <li>Go</li>
    </ol>
  </li>
</ul>
```

## Accesibilidad en listas

Los lectores de pantalla anuncian el tipo de lista y el número total de elementos, permitiendo a los usuarios saltar de un elemento a otro con teclas específicas. Anidar listas correctamente preserva esta información.

---

## Ejercicio: receta con listas

Crea el HTML para una receta de cocina que incluya:

1. Una lista ordenada con los pasos de preparación (numeración normal)
2. Una lista desordenada con los ingredientes
3. Una lista de definición con tres términos culinarios

<details>
<summary><strong>Ver solución</strong></summary>

```html
<h1>Tortilla de patatas</h1>

<h2>Ingredientes</h2>
<ul>
  <li>4 patatas medianas</li>
  <li>5 huevos</li>
  <li>1 cebolla</li>
  <li>Aceite de oliva</li>
  <li>Sal al gusto</li>
</ul>

<h2>Preparación</h2>
<ol>
  <li>Pelar y cortar las patatas en rodajas finas.</li>
  <li>Picar la cebolla en juliana.</li>
  <li>Freír las patatas y la cebolla en aceite caliente hasta que estén doradas.</li>
  <li>Batir los huevos y mezclar con las patatas escurridas.</li>
  <li>Cocinar la mezcla en una sartén por ambos lados.</li>
  <li>Servir caliente o a temperatura ambiente.</li>
</ol>

<h2>Glosario</h2>
<dl>
  <dt>Juliana</dt>
  <dd>Corte de verduras en tiras finas y alargadas.</dd>

  <dt>Pochado</dt>
  <dd>Cocción lenta en aceite a baja temperatura.</dd>

  <dt>Gratinar</dt>
  <dd>Dorar la superficie de un plato al horno o con un soplete.</dd>
</dl>
```

</details>
