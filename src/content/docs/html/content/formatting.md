---
title: FORMATO
module: html
submodule: content/formatting
---

HTML proporciona elementos inline para marcar fragmentos de texto con significado semántico específico. Cada uno comunica algo sobre el contenido que envuelve, más allá de su apariencia visual.

## Énfasis e importancia

| Elemento | Significado | Apariencia por defecto |
|----------|-------------|------------------------|
| `<strong>` | Importancia fuerte, seriedad o urgencia | **Negrita** |
| `<em>` | Énfasis, cambio de tono en la lectura | *Cursiva* |
| `<b>` | Atención visual sin importancia semántica | **Negrita** (estilística) |
| `<i>` | Voz alternativa, términos técnicos, extranjerismos | *Cursiva* (estilística) |

```html
<p>
  <strong>Advertencia:</strong> No compartas tu contraseña con nadie.
</p>

<p>
  Esto es <em>muy importante</em> para el funcionamiento del sistema.
</p>

<p>
  El término <i>feedback</i> se usa ampliamente en la industria.
</p>

<p>
  Este producto es <b>nuevo</b> y <b>mejorado</b>.
</p>
```

La diferencia entre `<strong>`/`<em>` y `<b>`/`<i>` es semántica. Los primeros comunican significado; los segundos solo改变了 apariencia. Los lectores de pantalla cambian el tono de voz con `<strong>` y `<em>`, pero ignoran `<b>` e `<i>`.

## Marcado editorial

| Elemento | Significado |
|----------|-------------|
| `<mark>` | Texto resaltado, relevante en el contexto |
| `<small>` | Letra pequeña, notas legales, comentarios secundarios |
| `<ins>` | Texto insertado (ediciones, revisiones) |
| `<del>` | Texto eliminado |
| `<s>` | Texto tachado que ya no es correcto o relevante |

```html
<p>
  El evento se realizará el <del>15 de mayo</del> <ins>20 de mayo</ins> de 2026.
</p>

<p>
  <mark>Oferta válida hasta agotar existencias.</mark>
</p>

<p>
  Precio original: <s>$499</s> <strong>$349</strong>
</p>

<small>&copy; 2026 Todos los derechos reservados.</small>
```

## Subíndice y superíndice

Útiles para fórmulas científicas, notación matemática y referencias:

```html
<p>Fórmula del agua: H<sub>2</sub>O</p>
<p>Área: m<sup>2</sup></p>
<p>Nota al pie<sup><a href="#ref-1">[1]</a></sup></p>
```

## Abreviaturas

`<abbr>` marca una abreviatura o acrónimo. Combinado con `title`, proporciona la expansión al posar el cursor:

```html
<p>
  <abbr title="HyperText Markup Language">HTML</abbr> es el lenguaje estándar para la web.
</p>

<p>
  El <abbr title="Doctor">Dr.</abbr> Pérez atiende los lunes.
</p>
```

Los lectores de pantalla pueden anunciar la expansión automáticamente.

## Contacto

`<address>` marca información de contacto del autor o del documento:

```html
<address>
  Escrito por <a href="mailto:autor@ejemplo.com">Carlos Ruiz</a>.<br>
  Calle 42 #123, Ciudad de México<br>
  México
</address>
```

No confundir con direcciones físicas arbitrarias. `<address>` debe usarse solo para el contexto del documento actual.

---

## Ejercicio: formateo de una noticia

Formatea el siguiente fragmento de noticia usando los elementos apropiados:

"El precio del producto baja de 99 a 79 dolares. Esto es importante destacarlo. El IVA (Impuesto al Valor Agregado) no esta incluido. La oferta es valida hasta el 31 de diciembre de 2026. Nota: aplican restricciones."

<details>
<summary><strong>Ver solución</strong></summary>

```html
<p>
  El precio del producto baja de <del>$99</del> a <strong>$79</strong>.
  <em>Esto es importante destacarlo.</em>
  El <abbr title="Impuesto al Valor Agregado">IVA</abbr> no está incluido.
</p>
<p>
  <mark>Oferta válida hasta el 31 de diciembre de 2026.</mark>
</p>
<small>Nota: aplican restricciones.</small>
```

</details>
