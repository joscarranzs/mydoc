---
title: Select
description: Menús desplegables.
module: lenguajes/html
submodule: general
order: 45
---

Al completar esta guía podrás:

- Crear menús desplegables con select y option
- Agrupar opciones con optgroup
- Usar selección múltiple
- Configurar valores por defecto

---

## Sintaxis básica

```html
<label for="pais">País:</label>
<select id="pais" name="pais">
  <option value="es">España</option>
  <option value="mx">México</option>
  <option value="ar">Argentina</option>
  <option value="co">Colombia</option>
</select>
```

---

## option

Cada `<option>` representa un elemento de la lista:

```html
<select name="color">
  <option value="rojo">Rojo</option>
  <option value="verde">Verde</option>
  <option value="azul">Azul</option>
</select>
```

- `value`: valor que se envía al servidor
- El texto entre etiquetas es lo que ve el usuario

---

## selected

Opción preseleccionada:

```html
<select name="pais">
  <option value="es" selected>España</option>
  <option value="mx">México</option>
  <option value="ar">Argentina</option>
</select>
```

---

## disabled

Opción deshabilitada (no seleccionable):

```html
<select name="producto">
  <option value="">Selecciona un producto</option>
  <option value="1">Laptop</option>
  <option value="2" disabled>Monitor (agotado)</option>
  <option value="3">Teclado</option>
</select>
```

---

## optgroup

Agrupa opciones visualmente:

```html
<select name="curso">
  <optgroup label="Frontend">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
  </optgroup>
  <optgroup label="Backend">
    <option value="python">Python</option>
    <option value="node">Node.js</option>
    <option value="php">PHP</option>
  </optgroup>
</select>
```

---

## multiple

Permite seleccionar varias opciones:

```html
<select name="habilidades" multiple size="4">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
  <option value="python">Python</option>
  <option value="sql">SQL</option>
</select>
```

Usa Ctrl+clic (Cmd+clic en Mac) para selección múltiple.

---

## size

Controla cuántas opciones se muestran sin abrir:

```html
<!-- Muestra 3 opciones visibles -->
<select name="ciudad" size="3">
  <option value="mad">Madrid</option>
  <option value="bcn">Barcelona</option>
  <option value="val">Valencia</option>
  <option value="sev">Sevilla</option>
</select>
```

---

## required

Campo obligatorio:

```html
<select name="pais" required>
  <option value="">Selecciona un país</option>
  <option value="es">España</option>
  <option value="mx">México</option>
</select>
```

La primera opción con valor vacío funciona como placeholder.

---

## Resumen

| Atributo | Descripción |
|---|---|
| `selected` | Opción preseleccionada |
| `disabled` | Opción o select deshabilitado |
| `multiple` | Selección múltiple |
| `size` | Opciones visibles |
| `required` | Campo obligatorio |
| `optgroup` | Agrupar opciones |

---

## Ejercicio

Crea un select con optgroup para categorías de productos (Electrónica, Ropa, Hogar). Incluye una opción por defecto deshabilitada como placeholder.

**Instrucciones paso a paso:**

1. Crea `select.html`
2. Usa select con required
3. Primera opción vacía como placeholder
4. Usa optgroup para categorías
5. Incluye 2-3 opciones por grupo

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Select HTML</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 400px; margin: 20px auto; }
    label, select { display: block; margin-top: 8px; }
    select { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
    button { margin-top: 16px; padding: 10px 24px; background: #1A73E8; color: white; border: none; border-radius: 4px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Select</h1>

  <form action="/procesar" method="post">
    <label for="producto">Producto:</label>
    <select id="producto" name="producto" required>
      <option value="" disabled selected>Selecciona un producto</option>

      <optgroup label="Electrónica">
        <option value="laptop">Laptop</option>
        <option value="monitor">Monitor</option>
        <option value="teclado">Teclado</option>
      </optgroup>

      <optgroup label="Ropa">
        <option value="camiseta">Camiseta</option>
        <option value="pantalon">Pantalón</option>
        <option value="chaqueta">Chaqueta</option>
      </optgroup>

      <optgroup label="Hogar">
        <option value="lampara">Lámpara</option>
        <option value="silla">Silla</option>
        <option value="mesa">Mesa</option>
      </optgroup>
    </select>

    <button type="submit">Enviar</button>
  </form>
</body>
</html>
```

</details>
