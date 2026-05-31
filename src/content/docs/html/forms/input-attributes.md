---
title: ATRIBUTOS DE INPUT
module: html
submodule: forms/input-attributes
---

Los elementos `<input>` aceptan una amplia variedad de atributos que controlan su validación, comportamiento y apariencia. La mayoría también aplican a `<textarea>` y `<select>`.

## Atributos de identidad y envío

| Atributo | Propósito |
|----------|-----------|
| `name` | Nombre del campo enviado al servidor como clave. Sin `name`, el campo no se envía. |
| `id` | Identificador único para vincular con `<label for="">`. |
| `value` | Valor por defecto del campo. |

```html
<input type="text" name="usuario" id="usuario" value="Invitado">
```

## Atributos de validación

| Atributo | Tipos compatibles | Comportamiento |
|----------|-------------------|----------------|
| `required` | Todos excepto `hidden` | El campo debe tener valor para enviar el formulario |
| `minlength` | text, search, url, tel, email, password | Mínimo de caracteres |
| `maxlength` | text, search, url, tel, email, password | Máximo de caracteres |
| `min` | number, range, date, time, datetime-local, month, week | Valor mínimo |
| `max` | number, range, date, time, datetime-local, month, week | Valor máximo |
| `step` | number, range, date, time, datetime-local, month, week | Incremento permitido |
| `pattern` | text, search, url, tel, email, password | Expresión regular que debe cumplir el valor |

```html
<input type="text" name="usuario" required minlength="3" maxlength="20" pattern="[a-zA-Z0-9_]+">
<input type="number" name="edad" min="18" max="120" step="1">
<input type="password" name="clave" required minlength="8">
```

### `pattern` con expresiones regulares

```html
<!-- Código postal de 5 dígitos -->
<input type="text" name="cp" pattern="[0-9]{5}" placeholder="12345">

<!-- Solo letras y espacios -->
<input type="text" name="nombre" pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ ]+">
```

Si el valor no cumple con el patrón, el navegador muestra un mensaje de error automático. El mensaje puede personalizarse con `title`.

## Atributos de comportamiento

| Atributo | Propósito |
|----------|-----------|
| `placeholder` | Texto de ejemplo dentro del campo (desaparece al escribir) |
| `readonly` | El campo se muestra pero no puede modificarse |
| `disabled` | El campo no puede modificarse ni enviarse |
| `autofocus` | El campo recibe el foco al cargar la página |
| `autocomplete` | Controla el autocompletado individual del campo |
| `tabindex` | Orden de navegación por teclado |
| `inputmode` | Tipo de teclado virtual en dispositivos móviles |

```html
<input type="text" placeholder="Nombre de usuario">
<input type="email" value="correo@ejemplo.com" readonly>
<input type="text" disabled value="No editable">
<input type="text" autofocus>
<input type="text" autocomplete="off">
<input type="text" inputmode="numeric" pattern="[0-9]*">
```

### readonly vs. disabled

| Aspecto | `readonly` | `disabled` |
|---------|------------|------------|
| Apariencia | Normal, pero no editable | Atenuada, no interactivo |
| Envío de datos | Se envía al servidor | No se envía |
| Foco por teclado | Sí | No |
| JavaScript | `el.value` puede modificarse | `el.value` no se modifica |

## Atributos para la experiencia de usuario

| Atributo | Propósito |
|----------|-----------|
| `size` | Ancho visible del campo en caracteres |
| `spellcheck` | Habilita o deshabilita el corrector ortográfico |
| `multiple` | Permite selección múltiple (file, email) |

```html
<input type="text" size="30" spellcheck="true">
<input type="file" name="documentos" multiple>
```

---

## Ejercicio: campo de contraseña con validaciones

Crea un campo de contraseña que:

1. Sea obligatorio
2. Mínimo 8 caracteres, máximo 64
3. Deba contener al menos una mayúscula, un número y un carácter especial
4. Muestre un placeholder descriptivo
5. Incluya un mensaje de ayuda en el atributo `title`

<details>
<summary><strong>Ver solución</strong></summary>

```html
<label for="password">Contraseña:</label>
<input
  type="password"
  id="password"
  name="password"
  required
  minlength="8"
  maxlength="64"
  pattern="(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}"
  placeholder="Mín. 8 caracteres"
  title="Debe contener al menos una mayúscula, un número y un carácter especial (!@#$%^&*)"
  autocomplete="new-password"
>
```

</details>
