---
title: Input atributos
description: Atributos de input.
module: lenguajes/html
submodule: general
order: 44
---

Al completar esta guía podrás:

- Usar atributos de validación en inputs
- Configurar min, max, step y pattern
- Usar list y datalist para sugerencias
- Aplicar atributos de formulario avanzados

---

## Atributos de validación

```html
<form>
  <input type="text" required>          <!-- Obligatorio -->
  <input type="text" readonly>          <!-- Solo lectura -->
  <input type="text" disabled>          <!-- Deshabilitado -->
  <input type="text" minlength="3">     <!-- Mínimo caracteres -->
  <input type="text" maxlength="10">    <!-- Máximo caracteres -->
  <input type="number" min="0">         <!-- Valor mínimo -->
  <input type="number" max="100">       <!-- Valor máximo -->
  <input type="number" step="5">        <!-- Incremento -->
</form>
```

---

## pattern

Expresión regular para validar:

```html
<!-- Solo letras (sin números) -->
<input type="text" pattern="[A-Za-záéíóúñÑ ]+" title="Solo letras">

<!-- Código postal de 5 dígitos -->
<input type="text" pattern="[0-9]{5}" title="Código postal de 5 dígitos">

<!-- Teléfono: 9 dígitos -->
<input type="tel" pattern="[0-9]{9}" title="9 dígitos">

<!-- URL personalizada -->
<input type="text" pattern="https?://.+" title="URL válida">
```

---

## form

Vincular un input a un formulario sin estar dentro de él:

```html
<form id="form-principal" action="/procesar" method="post">
  <button type="submit">Enviar</button>
</form>

<!-- Estos inputs están fuera del form pero vinculados -->
<input type="text" name="nombre" form="form-principal" required>
<input type="email" name="email" form="form-principal" required>
```

---

## formaction, formmethod

Sobrescribir action y method del formulario:

```html
<form action="/normal" method="post">
  <input type="text" name="busqueda">
  <button type="submit">Buscar normal</button>
  <button type="submit" formaction="/avanzado" formmethod="get">
    Búsqueda avanzada
  </button>
</form>
```

---

## list y datalist

Sugerencias predefinidas (autocompletar personalizado):

```html
<label for="pais">País:</label>
<input type="text" id="pais" name="pais" list="paises">
<datalist id="paises">
  <option value="España">
  <option value="México">
  <option value="Argentina">
  <option value="Colombia">
  <option value="Chile">
  <option value="Perú">
</datalist>
```

---

## accept

Restringir tipos de archivo en file input:

```html
<!-- Solo imágenes -->
<input type="file" accept="image/*">

<!-- Solo PDF -->
<input type="file" accept=".pdf">

<!-- Múltiples tipos -->
<input type="file" accept="image/png, image/jpeg, .pdf">

<!-- Sin restricción -->
<input type="file">
```

---

## multiple

Permite seleccionar múltiples valores:

```html
<!-- Múltiples archivos -->
<input type="file" multiple>

<!-- Múltiples correos -->
<input type="email" multiple>
```

---

## autocomplete

Controla el autocompletado del navegador:

```html
<form autocomplete="on">
  <input type="text" name="nombre" autocomplete="given-name">
  <input type="text" name="apellido" autocomplete="family-name">
  <input type="email" name="email" autocomplete="email">
  <input type="password" name="pass" autocomplete="current-password">

  <!-- Desactivar autocompletado para campos específicos -->
  <input type="text" name="codigo" autocomplete="off">
</form>
```

---

## Resumen

| Atributo | Ejemplo | Descripción |
|---|---|---|
| `required` | `required` | Campo obligatorio |
| `pattern` | `pattern="[0-9]{5}"` | Validación por regex |
| `min` / `max` | `min="0" max="100"` | Rango numérico |
| `step` | `step="5"` | Incremento |
| `list` | `list="ids"` | Vincular datalist |
| `accept` | `accept="image/*"` | Tipos de archivo |
| `multiple` | `multiple` | Selección múltiple |

---

## Ejercicio

Crea un formulario con: input type text con pattern para solo letras, input number con min/max, input con datalist para sugerencias, y file con accept imagen.

**Instrucciones paso a paso:**

1. Crea `input-atributos.html`
2. Usa pattern en un campo de nombre
3. Usa min/max/step en un campo de edad
4. Usa list + datalist para país
5. Usa accept en file input

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Atributos de input</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 400px; margin: 20px auto; }
    label { display: block; margin-top: 12px; }
    input { width: 100%; padding: 8px; box-sizing: border-box; margin-top: 4px; border: 1px solid #ccc; border-radius: 4px; }
    button { margin-top: 16px; padding: 10px 24px; background: #1A73E8; color: white; border: none; border-radius: 4px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Atributos de input</h1>

  <form action="/procesar" method="post">
    <label for="nombre">Nombre (solo letras):</label>
    <input type="text" id="nombre" name="nombre"
      pattern="[A-Za-záéíóúñÑ ]+"
      title="Solo letras"
      placeholder="Ej: Juan Pérez"
      required>

    <label for="edad">Edad (0-120):</label>
    <input type="number" id="edad" name="edad"
      min="0" max="120" step="1" value="18">

    <label for="pais">País:</label>
    <input type="text" id="pais" name="pais" list="paises" placeholder="Selecciona o escribe">
    <datalist id="paises">
      <option value="España">
      <option value="México">
      <option value="Argentina">
      <option value="Colombia">
    </datalist>

    <label for="foto">Foto de perfil:</label>
    <input type="file" id="foto" name="foto" accept="image/*">

    <button type="submit">Enviar</button>
  </form>
</body>
</html>
```

</details>
