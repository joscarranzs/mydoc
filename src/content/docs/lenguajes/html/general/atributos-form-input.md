---
title: Atributos de form input
description: formaction, formmethod, formtarget.
module: lenguajes/html
submodule: general
order: 46
---

Al completar esta guía podrás:

- Sobrescribir action con formaction
- Sobrescribir method con formmethod
- Sobrescribir target con formtarget
- Usar atributos en botones para múltiples acciones

---

## formaction

Sobrescribe el atributo action del formulario para un botón específico:

```html
<form action="/guardar" method="post">
  <input type="text" name="nombre" required>

  <!-- Envía a /guardar (action del form) -->
  <button type="submit">Guardar</button>

  <!-- Envía a /guardar-borrador (formaction) -->
  <button type="submit" formaction="/guardar-borrador">
    Guardar borrador
  </button>

  <!-- Envía a /previsualizar -->
  <button type="submit" formaction="/previsualizar">
    Previsualizar
  </button>
</form>
```

---

## formmethod

Sobrescribe el método HTTP del formulario:

```html
<form action="/procesar" method="post">
  <input type="text" name="busqueda" required>

  <!-- Envía con POST (defecto del form) -->
  <button type="submit">Buscar (POST)</button>

  <!-- Envía con GET (sobrescribe method) -->
  <button type="submit" formmethod="get">Buscar (GET)</button>

  <!-- Envía con POST a pesar del formmethod -->
  <button type="submit" formmethod="post">Buscar (POST explícito)</button>
</form>
```

---

## formtarget

Sobrescribe el atributo target del formulario:

```html
<form action="/resultados" target="_self">
  <input type="text" name="q" placeholder="Buscar..." required>

  <!-- Misma pestaña (target del form) -->
  <button type="submit">Buscar aquí</button>

  <!-- Nueva pestaña -->
  <button type="submit" formtarget="_blank">
    Buscar en nueva pestaña
  </button>

  <!-- Iframe -->
  <iframe name="visor" width="100%" height="200"></iframe>
  <button type="submit" formtarget="visor">
    Buscar en iframe
  </button>
</form>
```

---

## formnovalidate

Desactiva la validación para un botón específico:

```html
<form action="/procesar">
  <input type="email" required>

  <!-- Valida antes de enviar -->
  <button type="submit">Enviar (con validación)</button>

  <!-- No valida -->
  <button type="submit" formnovalidate>Guardar borrador</button>
</form>
```

---

## Formulario con múltiples acciones

```html
<form action="/publicar" method="post">
  <input type="text" name="titulo" placeholder="Título" required>
  <textarea name="contenido" placeholder="Contenido..." required></textarea>

  <!-- Botones con diferentes acciones -->
  <button type="submit">Publicar</button>
  <button type="submit" formaction="/guardar-borrador" formmethod="post">
    Guardar borrador
  </button>
  <button type="submit" formaction="/previsualizar" formtarget="_blank">
    Previsualizar
  </button>
  <button type="reset">Restablecer</button>
</form>
```

---

## Resumen

| Atributo | Sobrescribe | Ejemplo |
|---|---|---|
| `formaction` | action del form | `formaction="/otra-ruta"` |
| `formmethod` | method del form | `formmethod="get"` |
| `formtarget` | target del form | `formtarget="_blank"` |
| `formnovalidate` | Validación nativa | `formnovalidate` |

---

## Ejercicio

Crea un formulario con dos botones submit: uno que guarde con POST a /guardar, y otro que previsualice con GET a /previsualizar en nueva pestaña.

**Instrucciones paso a paso:**

1. Crea `atributos-form-input.html`
2. Form con action="/guardar" method="post"
3. Campo de texto para título
4. Botón "Guardar" (usa action y method del form)
5. Botón "Previsualizar" con formaction="/previsualizar", formmethod="get", formtarget="_blank"

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Atributos de form input</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 500px; margin: 20px auto; }
    label { display: block; margin-top: 12px; }
    input, textarea { width: 100%; padding: 8px; box-sizing: border-box; margin-top: 4px; border: 1px solid #ccc; border-radius: 4px; }
    textarea { min-height: 100px; resize: vertical; }
    .btn-group { margin-top: 16px; display: flex; gap: 8px; }
    button { padding: 10px 20px; border: none; border-radius: 4px; font-size: 16px; cursor: pointer; }
    .btn-guardar { background: #1A73E8; color: white; }
    .btn-preview { background: #e8f0fe; color: #1A73E8; }
    .btn-reset { background: #f1f3f4; color: #333; border: 1px solid #ccc; }
  </style>
</head>
<body>
  <h1>Atributos de form input</h1>

  <form action="/guardar" method="post">
    <label for="titulo">Título:</label>
    <input type="text" id="titulo" name="titulo" placeholder="Título del artículo" required>

    <label for="contenido">Contenido:</label>
    <textarea id="contenido" name="contenido" placeholder="Escribe tu contenido aquí..." required></textarea>

    <div class="btn-group">
      <button type="submit" class="btn-guardar">Guardar</button>
      <button
        type="submit"
        class="btn-preview"
        formaction="/previsualizar"
        formmethod="get"
        formtarget="_blank"
      >
        Previsualizar
      </button>
      <button type="reset" class="btn-reset">Restablecer</button>
    </div>
  </form>
</body>
</html>
```

</details>
