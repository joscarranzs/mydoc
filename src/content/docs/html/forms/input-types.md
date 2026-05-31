---
title: TIPOS DE INPUT
module: html
submodule: forms/input-types
---

El atributo `type` del elemento `<input>` determina su comportamiento, apariencia y el tipo de datos que acepta. HTML5 introdujo una docena de nuevos tipos que mejoran la experiencia de usuario en dispositivos táctiles y móviles.

## Tipos de texto y datos

| Tipo | Propósito | Teclado en móvil |
|------|-----------|------------------|
| `text` | Texto genérico (por defecto) | Teclado alfanumérico |
| `email` | Direcciones de correo | Teclado con @ y . |
| `password` | Contraseñas (oculta caracteres) | Teclado alfanumérico |
| `tel` | Números telefónicos | Teclado numérico |
| `url` | URLs | Teclado con / y .com |
| `search` | Campo de búsqueda | Teclado con lupa |
| `number` | Valores numéricos | Teclado numérico |

```html
<input type="text" placeholder="Nombre">
<input type="email" placeholder="correo@ejemplo.com">
<input type="password" placeholder="Contraseña">
<input type="tel" placeholder="+52 55 1234 5678">
<input type="url" placeholder="https://ejemplo.com">
<input type="search" placeholder="Buscar productos...">
<input type="number" min="1" max="100" step="1">
```

## Tipos de fecha y hora

| Tipo | Formato | Propósito |
|------|---------|-----------|
| `date` | YYYY-MM-DD | Fecha sin hora |
| `time` | HH:MM | Hora sin fecha |
| `datetime-local` | YYYY-MM-DDTHH:MM | Fecha y hora local |
| `month` | YYYY-MM | Mes y año |
| `week` | YYYY-WWW | Semana del año |

```html
<label>Fecha de nacimiento: <input type="date" name="fecha-nac"></label>
<label>Hora de la cita: <input type="time" name="hora-cita"></label>
<label>Fecha y hora: <input type="datetime-local" name="evento"></label>
<label>Mes: <input type="month" name="mes"></label>
<label>Semana: <input type="week" name="semana"></label>
```

## Tipos de selección

| Tipo | Propósito |
|------|-----------|
| `checkbox` | Casilla de verificación (múltiple selección) |
| `radio` | Botón de opción (selección única dentro de un grupo) |
| `file` | Selección de archivos |
| `color` | Selector de color |
| `range` | Control deslizante |

```html
<input type="checkbox" name="suscripcion" checked>
<input type="radio" name="genero" value="masculino">
<input type="file" name="documento" accept=".pdf,.doc">
<input type="color" name="color-fondo" value="#0066cc">
<input type="range" name="volumen" min="0" max="100" value="50">
```

### Checkbox y radio

Los checkbox permiten selección múltiple independiente. Los radio buttons agrupan opciones donde solo una puede seleccionarse (mismo atributo `name`):

```html
<fieldset>
  <legend>Intereses</legend>
  <label><input type="checkbox" name="intereses" value="html"> HTML</label>
  <label><input type="checkbox" name="intereses" value="css"> CSS</label>
  <label><input type="checkbox" name="intereses" value="js"> JavaScript</label>
</fieldset>

<fieldset>
  <legend>Experiencia</legend>
  <label><input type="radio" name="experiencia" value="basico"> Básico</label>
  <label><input type="radio" name="experiencia" value="intermedio"> Intermedio</label>
  <label><input type="radio" name="experiencia" value="avanzado"> Avanzado</label>
</fieldset>
```

## Tipos especiales

| Tipo | Propósito |
|------|-----------|
| `hidden` | Campo invisible para datos que deben enviarse sin intervención del usuario |
| `image` | Imagen que actúa como botón de envío |
| `button` | Botón genérico sin comportamiento predeterminado |
| `reset` | Restablece el formulario a sus valores iniciales |
| `submit` | Envía el formulario |

```html
<input type="hidden" name="token" value="abc123">
<input type="image" src="btn-enviar.png" alt="Enviar">
<input type="button" value="Abrir modal">
<input type="reset" value="Limpiar">
<input type="submit" value="Guardar">
```

---

## Ejercicio: formulario con tipos variados

Crea un formulario de perfil de usuario que incluya:

1. Nombre (text)
2. Correo electrónico (email)
3. Fecha de nacimiento (date)
4. Género (radio con tres opciones)
5. Intereses (checkbox con tres opciones)
6. Foto de perfil (file)
7. Color favorito (color)
8. Nivel de experiencia (range del 1 al 10)

<details>
<summary><strong>Ver solución</strong></summary>

```html
<form action="/perfil" method="post" enctype="multipart/form-data">
  <label>Nombre: <input type="text" name="nombre" required></label>
  <label>Email: <input type="email" name="email" required></label>
  <label>Fecha de nacimiento: <input type="date" name="fecha-nac"></label>

  <fieldset>
    <legend>Género</legend>
    <label><input type="radio" name="genero" value="masculino"> Masculino</label>
    <label><input type="radio" name="genero" value="femenino"> Femenino</label>
    <label><input type="radio" name="genero" value="otro"> Otro</label>
  </fieldset>

  <fieldset>
    <legend>Intereses</legend>
    <label><input type="checkbox" name="intereses" value="html"> HTML</label>
    <label><input type="checkbox" name="intereses" value="css"> CSS</label>
    <label><input type="checkbox" name="intereses" value="js"> JavaScript</label>
  </fieldset>

  <label>Foto de perfil: <input type="file" name="foto" accept="image/*"></label>
  <label>Color favorito: <input type="color" name="color-fav" value="#0066cc"></label>
  <label>Nivel de experiencia: <input type="range" name="nivel" min="1" max="10" value="5"></label>

  <button type="submit">Guardar perfil</button>
</form>
```

</details>
