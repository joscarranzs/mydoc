---
title: Guía de estilo
description: Buenas prácticas HTML.
module: lenguajes/html
submodule: general
order: 34
---

Al completar esta guía podrás:

- Escribir HTML limpio y consistente
- Aplicar convenciones de nomenclatura
- Seguir buenas prácticas de accesibilidad
- Evitar errores comunes

---

## Declaración de tipo

Siempre usar `<!DOCTYPE html>` al inicio:

```html
<!DOCTYPE html>
<html lang="es">
```

Usar `lang="es"` para contenido en español.

---

## Codificación

Siempre incluir charset en el head:

```html
<meta charset="UTF-8">
```

Debe ser la primera etiqueta después de `<head>`.

---

## Minúsculas

Usar minúsculas para etiquetas y atributos:

```html
<!-- Correcto -->
<div class="contenedor">
<img src="foto.jpg" alt="Foto">

<!-- Incorrecto -->
<DIV CLASS="contenedor">
<IMG SRC="foto.jpg" ALT="Foto">
```

---

## Comillas

Usar comillas dobles en atributos:

```html
<!-- Correcto -->
<a href="pagina.html" class="enlace">Enlace</a>
<img src="foto.jpg" alt="Descripción">

<!-- Incorrecto -->
<a href='pagina.html' class=enlace>Enlace</a>
<img src=foto.jpg alt=Descripción>
```

---

## Cierre de etiquetas

Siempre cerrar las etiquetas que lo requieren:

```html
<!-- Correcto -->
<p>Texto del párrafo.</p>
<li>Elemento de lista</li>

<!-- Incorrecto -->
<p>Texto del párrafo.
<li>Elemento de lista
```

---

## Indentación

Usar 2 espacios por nivel de indentación:

```html
<!-- Correcto -->
<div>
  <h2>Título</h2>
  <p>
    Texto del párrafo
    <a href="#">enlace</a>.
  </p>
</div>

<!-- Incorrecto -->
<div>
    <h2>Título</h2>
    <p>
        Texto del párrafo
            <a href="#">enlace</a>.
    </p>
</div>
```

---

## Atributo alt en imágenes

Siempre incluir alt descriptivo:

```html
<!-- Correcto -->
<img src="logo.png" alt="Logo de la empresa">
<img src="separador.png" alt="">

<!-- Incorrecto -->
<img src="logo.png">
<img src="logo.png" alt="logo">
```

---

## Atributo for en labels

Vincular labels con inputs mediante for e id:

```html
<!-- Correcto -->
<label for="email">Correo electrónico:</label>
<input type="email" id="email" name="email">

<!-- Incorrecto -->
<label>Correo electrónico:</label>
<input type="email" name="email">
```

---

## type en botones

Especificar type en botones dentro de formularios:

```html
<!-- Correcto -->
<button type="submit">Enviar</button>
<button type="button" onclick="calcular()">Calcular</button>

<!-- Incorrecto -->
<button>Enviar</button>
```

---

## CSS y JavaScript externos

Prefiere archivos externos sobre inline:

```html
<!-- Correcto -->
<link rel="stylesheet" href="estilos.css">
<script src="app.js" defer></script>

<!-- Incorrecto -->
<style>body { color: red; }</style>
<script>alert('Hola');</script>
```

---

## Resumen

| Práctica | Recomendación |
|---|---|
| DOCTYPE | `<!DOCTYPE html>` |
| Codificación | `<meta charset="UTF-8">` |
| Etiquetas | Minúsculas |
| Atributos | Comillas dobles |
| Indentación | 2 espacios |
| Cierre | Siempre cerrar etiquetas |
| Alt | Siempre en imágenes |
| Labels | Vincular con for + id |

---

## Ejercicio

Corrige el siguiente HTML que contiene malas prácticas:

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<DIV id=principal>
<H1>Bienvenido</h1>
<IMG src=foto.jpg>
<P>Esto es un párrafo</p>
<button>Enviar</button>
</div>
</body>
</html>
```

Escribe la versión corregida siguiendo la guía de estilo.

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenido</title>
</head>
<body>
  <div id="principal">
    <h1>Bienvenido</h1>
    <img src="foto.jpg" alt="Foto de bienvenida">
    <p>Esto es un párrafo</p>
    <button type="button">Enviar</button>
  </div>
</body>
</html>
```

</details>
