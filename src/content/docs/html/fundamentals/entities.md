---
title: ENTIDADES
module: html
submodule: fundamentals/entities
---

Ciertos caracteres tienen un significado especial en HTML. Los signos `<` y `>`, por ejemplo, delimitan etiquetas, y el ampersand `&` inicia una entidad. Para representar estos caracteres como texto literal sin que el navegador los interprete como marcado, se usan las **entidades HTML**: secuencias que comienzan con `&` y terminan con `;`.

## Entidades nombradas vs. numéricas

Una entidad puede escribirse con un nombre mnemotécnico o con su valor numérico Unicode:

```html
<p>
  &lt;html&gt; se escribe con las entidades &amp;lt; y &amp;gt;
</p>
<p>
  Lo mismo pero en numérico: &#60;html&#62;
</p>
```

Ambas formas producen el mismo resultado visual. Las entidades nombradas son más legibles; las numéricas cubren cualquier carácter Unicode, incluso aquellos sin nombre asignado.

## Entidades de uso frecuente

| Carácter | Descripción        | Entidad nombrada | Numérico   |
|----------|--------------------|------------------|------------|
| `<`      | Menor que          | `&lt;`           | `&#60;`    |
| `>`      | Mayor que          | `&gt;`           | `&#62;`    |
| `&`      | Ampersand          | `&amp;`          | `&#38;`    |
| `"`      | Comilla doble      | `&quot;`         | `&#34;`    |
| `'`      | Comilla simple     | `&apos;`         | `&#39;`    |
| ` `      | Espacio duro       | `&nbsp;`         | `&#160;`   |
| `©`      | Copyright          | `&copy;`         | `&#169;`   |
| `®`      | Marca registrada   | `&reg;`          | `&#174;`   |
| `™`      | Marca comercial    | `&trade;`        | `&#8482;`  |
| `€`      | Euro               | `&euro;`         | `&#8364;`  |
| `→`      | Flecha derecha     | `&rarr;`         | `&#8594;`  |
| `✓`      | Marca de verificación | `&check;`     | `&#10003;` |

## Espacio duro (non-breaking space)

`&nbsp;` impide que el navegador divida una línea en ese punto. Es útil para evitar rupturas visualmente incorrectas:

```html
<!-- Sin &nbsp;: "42" puede quedar solo al inicio de la línea -->
<p>El ganador obtuvo 42 puntos.</p>

<!-- Con &nbsp;: "42" y "puntos" permanecen juntos -->
<p>El ganador obtuvo 42&nbsp;puntos.</p>
```

Usar `&nbsp;` como sustituto del margen o padding es una mala práctica. Su propósito es tipográfico, no de maquetación.

## Cuándo escapar caracteres

No todo carácter especial necesita entidad. El guion, el punto y la coma se pueden escribir directamente si el documento está codificado en UTF-8 (como debería estar). La regla práctica es:

- **Siempre escapar** `<`, `>` y `&` cuando aparezcan como texto literal y no como marcado.
- **Escapar** `"` dentro de valores de atributos delimitados por comillas dobles.
- **No escapar** caracteres acentuados, eñes o símbolos comunes si el documento usa UTF-8.

```html
<!-- Incorrecto: el navegador interpreta "<" como inicio de etiqueta -->
<p>El tag <br> inicia un salto de línea.</p>

<!-- Correcto: entidad para "<" -->
<p>El tag &lt;br&gt; inicia un salto de línea.</p>

<!-- Correcto con UTF-8: no necesita entidad -->
<p>Visitamos São Paulo y la recepción fue óptima. © 2026</p>
```

---

## Ejercicio: pie de página con entidades

Escribe un `<footer>` que contenga:

1. El símbolo de copyright seguido del año: © 2026
2. Un texto que diga: Tecnología & Diseño (con el ampersand correctamente escapado)
3. Una nota legal que use &lt; y &gt; para mostrar un ejemplo de sintaxis HTML
4. Un espacio duro entre el número y la palabra "km²" para evitar ruptura de línea

<details>
<summary><strong>Ver solución</strong></summary>

```html
<footer>
  <p>&copy; 2026 &mdash; Tecnología &amp; Diseño</p>
  <p>Todo código debe escribirse dentro de las etiquetas &lt;body&gt;&lt;/body&gt;.</p>
  <p>Superficie cubierta: 12&nbsp;km²</p>
</footer>
```

</details>
