---
title: vs XHTML
description: Diferencias con XHTML.
module: lenguajes/html
submodule: general
order: 40
---

Al completar esta guía podrás:

- Entender qué es XHTML
- Diferenciar HTML5 de XHTML
- Conocer las reglas estrictas de XHTML
- Decidir cuándo usar cada uno

---

## Qué es XHTML

XHTML (eXtensible HyperText Markup Language) es HTML reformulado como XML:

```xhtml
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Página XHTML</title>
</head>
<body>
  <p>Esto es XHTML.</p>
</body>
</html>
```

---

## Reglas estrictas

XHTML es más estricto que HTML:

```xhtml
<!-- HTML: permitido -->
<br>
<img src="foto.jpg">
<p>Párrafo sin cerrar
<li>Elemento sin cerrar

<!-- XHTML: obligatorio -->
<br />
<img src="foto.jpg" alt="" />
<p>Párrafo cerrado</p>
<li>Elemento cerrado</li>
```

---

## Etiquetas siempre deben cerrarse

```xhtml
<!-- Correcto en XHTML -->
<br />
<hr />
<img src="foto.jpg" alt="" />
<input type="text" />

<!-- Incorrecto en XHTML -->
<br>
<hr>
<img src="foto.jpg" alt="">
```

---

## Atributos en minúsculas y con comillas

```xhtml
<!-- Correcto en XHTML -->
<div class="contenedor" id="principal">
  <input type="text" disabled="disabled" />
</div>

<!-- Incorrecto en XHTML -->
<DIV CLASS=contenedor ID=principal>
  <INPUT TYPE=TEXT DISABLED>
</DIV>
```

---

## Anidamiento correcto

```xhtml
<!-- Correcto en XHTML -->
<p><strong>Texto en negrita</strong></p>

<!-- Incorrecto en XHTML -->
<p><strong>Texto en negrita</p></strong>
```

---

## xmlns

XHTML requiere el atributo xmlns en html:

```xhtml
<html xmlns="http://www.w3.org/1999/xhtml">
```

HTML5 no lo requiere.

---

## application/xhtml+xml

XHTML se sirve como XML:

```html
<!-- Servido como application/xhtml+xml -->
<!-- Si hay un error XML, el navegador muestra página en blanco -->
```

HTML5 se sirve como `text/html`.

---

## Comparación

| Característica | HTML5 | XHTML |
|---|---|---|
| Sintaxis | Flexible | Estricta (XML) |
| Cierre de etiquetas | Opcional en vacías | Obligatorio |
| Atributos | Minúscula, sin comillas opcional | Minúscula, comillas obligatorias |
| xmlns | No obligatorio | Obligatorio |
| Tipo MIME | text/html | application/xhtml+xml |
| Error handling | Tolerante | Error = página en blanco |
| Uso actual | Estándar web | Nicho (dispositivos, XML) |

---

## Cuándo usar cada uno

```html
<!-- HTML5: uso general en web -->
<!DOCTYPE html>
<html lang="es">
...
</html>

<!-- XHTML: cuando se necesita integración XML -->
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
...
</html>
```

Usa HTML5 para desarrollo web general.
Usa XHTML si trabajas con XML, RSS, o sistemas legacy.

---

## Resumen

| Aspecto | HTML5 | XHTML |
|---|---|---|
| Cierre de vacíos | Opcional | Obligatorio (/>) |
| Atributos booleanos | disabled | disabled="disabled" |
| Minúsculas | Recomendado | Obligatorio |
| Tolerancia a errores | Alta | Ninguna |

---

## Ejercicio

Convierte este HTML a XHTML válido:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo</title>
</head>
<body>
  <h1>Título
  <br>
  <img src="foto.jpg" alt="Foto">
  <input type="text" disabled>
  <p>Texto <strong>importante</p>
</body>
</html>
```

**Instrucciones paso a paso:**

1. Crea `vs-xhtml.html`
2. Agrega xmlns al html
3. Cierra todas las etiquetas
4. Añade / a los elementos vacíos
5. Usa disabled="disabled"

<details>
<summary>Mostrar solución</summary>

```xhtml
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Ejemplo XHTML</title>
</head>
<body>
  <h1>Título</h1>
  <br />
  <img src="foto.jpg" alt="Foto" />
  <input type="text" disabled="disabled" />
  <p>Texto <strong>importante</strong></p>
</body>
</html>
```

</details>
