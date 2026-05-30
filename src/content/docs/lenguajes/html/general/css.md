---
title: CSS
description: Vinculación de estilos.
module: lenguajes/html
submodule: general
order: 14
---

Al completar esta guía podrás:

- Vincular CSS externo con link
- Usar la etiqueta style en el head
- Aplicar estilos inline
- Entender el orden de precedencia de CSS

---

## CSS externo

La forma más recomendada: archivo `.css` separado vinculado con `<link>`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>CSS externo</title>
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <h1>Bienvenido</h1>
  <p>Este documento usa CSS externo.</p>
</body>
</html>
```

```css
/* estilos.css */
body {
  font-family: Arial, sans-serif;
  background: #f9f9f9;
  color: #333;
}

h1 {
  color: #1A73E8;
  text-align: center;
}
```

---

## Múltiples archivos CSS

Se pueden vincular varios archivos:

```html
<link rel="stylesheet" href="reset.css">
<link rel="stylesheet" href="estilos.css">
<link rel="stylesheet" href="componentes.css">
```

El orden importa: los estilos del último archivo prevalecen en caso de conflicto.

---

## CSS interno

Con la etiqueta `<style>` dentro del `<head>`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>CSS interno</title>
  <style>
    body {
      background: #f0f0f0;
    }
    h1 {
      color: #1A73E8;
      font-size: 32px;
    }
    .destacado {
      background: #e8f0fe;
      padding: 10px;
    }
  </style>
</head>
<body>
  <h1>CSS interno</h1>
  <p class="destacado">Este párrafo usa una clase definida en el style.</p>
</body>
</html>
```

---

## CSS inline

Con el atributo `style` directamente en el elemento:

```html
<p style="color: red; font-size: 18px;">Estilo inline</p>
```

Tiene la máxima prioridad, pero es difícil de mantener.

---

## Precedencia

Cuando hay conflictos, CSS aplica según esta jerarquía:

```html
<head>
  <style>
    p { color: blue; }       /* 1. Etiqueta en style */
  </style>
  <link rel="stylesheet" href="estilos.css">
</head>
```

```css
/* estilos.css */
p { color: green; }          /* 2. Externo (misma especificidad, este gana por orden) */
```

```html
<p style="color: red;">     /* 3. Inline (gana) */
  ¿De qué color soy?
</p>
```

Prioridad (de menor a mayor):
1. Estilo de navegador por defecto
2. CSS externo o interno
3. CSS inline
4. `!important` (máxima prioridad)

---

## @import

Otra forma de incluir CSS desde otro archivo CSS:

```css
/* estilos.css */
@import url('reset.css');
@import url('componentes.css');

body {
  font-family: Arial, sans-serif;
}
```

Menos recomendado que `<link>` porque ralentiza la carga.

---

## Buenas prácticas

```html
<!-- Orden recomendado en el head -->
<meta charset="UTF-8">
<title>Título</title>

<!-- Primero reset/normalize -->
<link rel="stylesheet" href="reset.css">

<!-- Luego estilos principales -->
<link rel="stylesheet" href="estilos.css">

<!-- Por último estilos específicos -->
<link rel="stylesheet" href="pagina-inicio.css">
```

---

## Resumen

| Método | Sintaxis | Uso recomendado |
|---|---|---|
| Externo | `<link rel="stylesheet" href="...">` | Producción, reutilizable |
| Interno | `<style>...</style>` | Páginas pequeñas, prototipos |
| Inline | `style="..."` | Excepciones, pruebas rápidas |

---

## Ejercicio

Crea un archivo HTML que vincule un archivo CSS externo. El CSS debe definir el color del body, el tamaño del h1 y un fondo para la clase .tarjeta. El HTML debe usar la clase tarjeta en un div.

**Instrucciones paso a paso:**

1. Crea `index.html` y `estilos.css`
2. En `estilos.css`, define body, h1 y .tarjeta
3. En `index.html`, vincula estilos.css con link
4. Usa la clase tarjeta en un div

<details>
<summary>Mostrar solución</summary>

```css
/* estilos.css */
body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  color: #333;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #1A73E8;
  text-align: center;
}

.tarjeta {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  max-width: 600px;
  margin: 20px auto;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>CSS externo</title>
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <h1>CSS Externo</h1>
  <div class="tarjeta">
    <h2>Tarjeta de ejemplo</h2>
    <p>Este div usa la clase .tarjeta definida en estilos.css.</p>
  </div>
</body>
</html>
```

</details>
