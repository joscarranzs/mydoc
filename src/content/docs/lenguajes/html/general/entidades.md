---
title: Entidades
description: Códigos de caracteres especiales.
module: lenguajes/html
submodule: general
order: 35
---

Al completar esta guía podrás:

- Usar entidades HTML para caracteres especiales
- Escapar caracteres reservados como < y >
- Mostrar espacios, símbolos y acentos
- Conocer las entidades más comunes

---

## Qué son las entidades

Las entidades HTML representan caracteres que no se pueden escribir directamente:

```html
<p>El símbolo &lt; se usa para abrir etiquetas HTML.</p>
<p>El símbolo &gt; se usa para cerrar etiquetas HTML.</p>
```

Formato: `&nombre;` o `&#código;`

---

## Caracteres reservados

```html
<p>&lt;  — menor que (<)</p>
<p>&gt;  — mayor que (>)</p>
<p>&amp; — ampersand (&)</p>
<p>&quot; — comilla doble (")</p>
<p>&apos; — comilla simple (')</p>
```

---

## Espacios

```html
<p>Dos espacios: &nbsp;&nbsp; entre palabras.</p>
<p>Espacio delgado: &thinsp; entre caracteres.</p>
<p>Espacio de ancho cero: &#8203; <!-- invisible --></p>
```

---

## Acentos y diacríticos

```html
<p>&aacute; — á</p>
<p>&eacute; — é</p>
<p>&iacute; — í</p>
<p>&oacute; — ó</p>
<p>&uacute; — ú</p>
<p>&ntilde; — ñ</p>
<p>&uuml; — ü</p>
```

---

## Símbolos comunes

```html
<p>&copy;  — Copyright</p>
<p>&reg;  — Marca registrada</p>
<p>&trade; — Marca comercial</p>
<p>&euro; — Euro</p>
<p>&pound; — Libra</p>
<p>&yen;  — Yen</p>
<p>&sect; — Sección</p>
<p>&para; — Párrafo</p>
```

---

## Entidades numéricas

Usan el código Unicode del carácter:

```html
<p>&#60;  — < (60 en decimal)</p>
<p>&#62;  — > (62 en decimal)</p>
<p>&#38;  — & (38 en decimal)</p>
<p>&#169; — © (169 en decimal)</p>
<p>&#174; — ® (174 en decimal)</p>
```

---

## Entidades hexadecimales

```html
<p>&#x3C;  — < (3C en hex)</p>
<p>&#x3E;  — > (3E en hex)</p>
<p>&#x26;  — & (26 en hex)</p>
<p>&#xA9;  — © (A9 en hex)</p>
<p>&#xAE;  — ® (AE en hex)</p>
```

---

## Tabla de entidades esenciales

| Carácter | Entidad | Decimal | Hex |
|---|---|---|---|
| < | `&lt;` | `&#60;` | `&#x3C;` |
| > | `&gt;` | `&#62;` | `&#x3E;` |
| & | `&amp;` | `&#38;` | `&#x26;` |
| " | `&quot;` | `&#34;` | `&#x22;` |
| ' | `&apos;` | `&#39;` | `&#x27;` |
| espacio | `&nbsp;` | `&#160;` | `&#xA0;` |
| © | `&copy;` | `&#169;` | `&#xA9;` |
| ® | `&reg;` | `&#174;` | `&#xAE;` |
| € | `&euro;` | `&#8364;` | `&#x20AC;` |
| ñ | `&ntilde;` | `&#241;` | `&#xF1;` |

---

## Resumen

| Tipo | Formato | Ejemplo |
|---|---|---|
| Nombre | `&nombre;` | `&amp;` = & |
| Decimal | `&#código;` | `&#38;` = & |
| Hex | `&#xcódigo;` | `&#x26;` = & |

---

## Ejercicio

Crea un párrafo que muestre: el uso de &lt;h1&gt; en HTML, el símbolo de copyright, y el carácter ñ usando entidades.

**Instrucciones paso a paso:**

1. Crea `entidades.html`
2. Usa &lt; y &gt; para mostrar etiquetas
3. Usa &copy; para copyright
4. Usa &ntilde; para la ñ

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Entidades HTML</title>
</head>
<body>
  <h1>Entidades HTML</h1>

  <p>
    Para crear un encabezado usamos la etiqueta
    <code>&lt;h1&gt;</code>.
  </p>

  <p>
    &copy; 2024 Mi sitio web. Todos los derechos reservados.
  </p>

  <p>
    La letra &ntilde; se usa en espa&ntilde;ol.
  </p>
</body>
</html>
```

</details>
