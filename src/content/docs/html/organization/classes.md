---
title: CLASES
module: html
submodule: organization/classes
---

El atributo `class` asigna uno o más nombres de clase a un elemento. Es el mecanismo principal para aplicar estilos CSS y seleccionar elementos desde JavaScript.

```html
<p class="destacado">Este párrafo tiene una clase.</p>
```

## Múltiples clases

Un elemento puede tener varias clases separadas por espacio. Cada clase añade un conjunto de estilos independiente, lo que permite composición y reutilización:

```html
<p class="texto destacado mayuscula">
  Párrafo con tres clases aplicadas.
</p>
```

```css
.texto { font-size: 1rem; }
.destacado { color: #0066cc; font-weight: bold; }
.mayuscula { text-transform: uppercase; }
```

Las clases se combinan sin conflicto. Si dos clases definen la misma propiedad, gana la que tenga mayor especificidad o la declarada después en el CSS.

## Convenciones de nomenclatura

Un nombre de clase debe ser descriptivo y comunicar el propósito o el contenido, no la apariencia:

```css
/* Mal: describe la apariencia */
.rojo { color: red; }
.grande { font-size: 24px; }

/* Bien: describe el propósito */
.error { color: red; }
.titulo-principal { font-size: 24px; }

/* Bien: metodologia BEM */
.card__title { font-size: 1.25rem; }
.card__body { padding: 1rem; }
.card__button--primary { background: #0066cc; }
```

Buenas prácticas generales:
- Usar guiones (`-`) para separar palabras (`clase-ejemplo`).
- Preferir nombres cortos pero significativos.
- Evitar nombres basados en el color, tamaño o posición.
- Ser consistente en todo el proyecto.

## Clases y especificidad CSS

Cada clase añade un nivel de especificidad (0,1,0). Múltiples clases incrementan la especificidad:

```css
/* Especificidad: 0,1,0 */
.boton { background: blue; }

/* Especificidad: 0,2,0 */
.boton.primario { background: green; }

/* Especificidad: 0,1,1 */
.boton[disabled] { background: gray; }
```

A mayor especificidad, mayor prioridad. Una clase suplementaria permite refinar sin usar `!important`.

## Clases desde JavaScript

`classList` es la API moderna para manipular clases:

```javascript
const el = document.querySelector('.mi-elemento');

el.classList.add('activo');
el.classList.remove('inactivo');
el.classList.toggle('visible');
el.classList.replace('antiguo', 'nuevo');
el.contains('activo'); // true / false
```

---

## Ejercicio: componentes con clases

Crea el HTML para una lista de tres elementos de navegación donde cada `<li>` tenga:

1. La clase `nav-item` (compartida por todos)
2. El primer elemento con la clase `activo`
3. El segundo elemento con la clase `deshabilitado`
4. El tercer elemento con las clases `nav-item` y `externo`

<details>
<summary><strong>Ver solución</strong></summary>

```html
<nav>
  <ul>
    <li class="nav-item activo"><a href="/">Inicio</a></li>
    <li class="nav-item deshabilitado"><a>Blog</a></li>
    <li class="nav-item externo"><a href="https://ejemplo.com" target="_blank">Tutoriales</a></li>
  </ul>
</nav>
```

</details>
