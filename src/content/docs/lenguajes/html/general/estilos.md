---
title: Estilos
description: El atributo style.
module: lenguajes/html
submodule: general
order: 9
---

Al completar esta guía podrás:

- Aplicar estilos inline con el atributo `style`
- Conocer las propiedades CSS más comunes
- Diferenciar estilos inline de externos
- Usar la etiqueta `<style>` en el head

---

## Atributo style

Aplica estilos CSS directamente a un elemento. Es rápido para pruebas o ajustes puntuales, pero no conviene usarlo como solución principal en proyectos grandes:

```html
<p style="color: blue;">Texto azul</p>
<p style="font-size: 20px;">Texto grande</p>
<p style="background: yellow;">Fondo amarillo</p>
```

Se usa `propiedad: valor;` y se separan con punto y coma. Cada regla modifica una propiedad visual del elemento.

---

## Propiedades comunes

Estas son algunas propiedades que vas a usar con frecuencia al dar formato rápido a contenido HTML:

```html
<p style="color: red;">Color del texto</p>
<p style="background: lightgray;">Color de fondo</p>
<p style="font-size: 24px;">Tamaño de fuente</p>
<p style="font-weight: bold;">Texto en negrita</p>
<p style="text-align: center;">Texto centrado</p>
<p style="font-family: Arial, sans-serif;">Tipo de letra</p>
```

---

## Múltiples propiedades

Cuando un elemento necesita varios ajustes visuales, puedes escribirlos en una sola declaración style:

```html
<p style="
  color: white;
  background: #1A73E8;
  padding: 10px;
  border-radius: 4px;
  font-size: 18px;
  text-align: center;
">
  Botón de ejemplo
</p>
```

---

## Colores

CSS admite varios formatos de color. Los más comunes son nombres, RGB, HEX y HSL:

```html
<p style="color: red;">Nombre del color</p>
<p style="color: rgb(255, 0, 0);">RGB</p>
<p style="color: #FF0000;">HEX</p>
<p style="color: hsl(0, 100%, 50%);">HSL</p>
<p style="color: rgba(255, 0, 0, 0.5);">RGB con transparencia</p>

<!-- Fondo -->
<p style="background: #f0f0f0; color: #333;">Fondo claro, texto oscuro</p>
```

---

## Bordes y márgenes

Estas propiedades controlan el espacio y el contorno de un elemento. Son clave para construir bloques visuales legibles:

```html
<p style="border: 1px solid black;">Borde sólido negro</p>
<p style="border: 2px dashed red;">Borde discontinuo rojo</p>
<p style="border: 3px dotted blue;">Borde punteado azul</p>
<p style="border-radius: 8px;">Esquinas redondeadas</p>
<p style="margin: 20px;">Margen externo de 20px</p>
<p style="padding: 10px;">Relleno interno de 10px</p>
```

---

## Etiqueta style

Para estilos que afectan a múltiples elementos, es mejor usar la etiqueta `<style>` dentro del `<head>`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Estilos</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f9f9f9;
    }
    h1 {
      color: #1A73E8;
      text-align: center;
    }
    .destacado {
      background: #e8f0fe;
      padding: 10px;
      border-left: 4px solid #1A73E8;
    }
  </style>
</head>
<body>
  <h1>Estilos CSS</h1>
  <p class="destacado">Este párrafo usa una clase.</p>
  <p>Este párrafo tiene estilo por etiqueta.</p>
</body>
</html>
```

---

## Inline vs etiqueta style

El estilo inline solo afecta a un elemento. La etiqueta `<style>` puede afectar a varios elementos a la vez:

```html
<!-- Inline: afecta solo un elemento -->
<p style="color: red;">Solo este es rojo</p>

<!-- Etiqueta style: afecta todos los elementos del mismo tipo -->
<style>
  p { color: blue; }
</style>
<p>Todos los párrafos azules</p>
```

Inline tiene mayor prioridad (especificidad) que la etiqueta `style`, por eso sobrescribe reglas más generales.

---

## Unidades

Las unidades determinan cómo se calculan tamaños y proporciones. Algunas son absolutas y otras relativas al contexto:

```html
<p style="font-size: 16px;">px: píxeles</p>
<p style="font-size: 1.5em;">em: relativo al padre</p>
<p style="font-size: 1.5rem;">rem: relativo a la raíz</p>
<p style="width: 50%;">%: porcentaje del contenedor</p>
<p style="width: 100vw;">vw: porcentaje del viewport</p>
<p style="height: 50vh;">vh: altura del viewport</p>
```

---

## Resumen

| Método | Ámbito | Prioridad |
|---|---|---|
| `style` inline | Un elemento | Más alta |
| `<style>` en head | Toda la página | Media |
| Archivo CSS externo | Todo el sitio | Más baja |

---

## Ejercicio

Crea una tarjeta con estilo inline: título azul (#1A73E8), fondo gris claro (#f0f0f0), padding de 20px, borde redondeado de 8px, texto centrado.

**Instrucciones paso a paso:**

1. Crea `estilos.html`
2. Crea un `<div>` con estilo inline para la tarjeta
3. Dentro del div, agrega un `<h2>` azul y un `<p>` con texto centrado
4. Abre en el navegador

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Estilos inline</title>
</head>
<body>
  <div style="
    background: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    max-width: 400px;
    margin: 50px auto;
  ">
    <h2 style="color: #1A73E8;">Tarjeta de ejemplo</h2>
    <p style="color: #333; font-size: 16px;">
      Esta tarjeta usa solo estilos inline.
    </p>
  </div>
</body>
</html>
```

</details>
