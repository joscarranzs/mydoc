# Formularios en HTML: elementos, atributos, propiedades y validación

## Tabla de contenidos

- El elemento `form` y atributos principales (`action`, `method`, `enctype`, `autocomplete`, `novalidate`)
- Controles de formulario: `input`, `textarea`, `select`, `button`, `fieldset`, `legend`, `label`
- Tipos de `input` y atributos relevantes (`type`, `name`, `value`, `placeholder`, `required`, `pattern`, `min`, `max`, `step`)
- Propiedades DOM y objetos útiles: `FormData`, `HTMLFormElement`, `validity`, `checkValidity()`
- Eventos de formulario: `submit`, `input`, `change`, `invalid`
- Validación: Constraint Validation API y mensajes personalizados
- Buenas prácticas y accesibilidad (labels, `for`, `aria-*`, error handling)
- Ejemplos
- Ejercicios
- Recursos

## El elemento `form` y atributos principales

El `form` agrupa controles que se envían como una unidad. Atributos clave:

- `action`: URL donde se envía el formulario.
- `method`: `get` o `post` (GET añade datos a la URL; POST envía en el cuerpo).
- `enctype`: tipo de codificación; p. ej. `application/x-www-form-urlencoded` (por defecto), `multipart/form-data` (necesario para archivos), `text/plain`.
- `autocomplete`: `on`/`off` para sugerencias del navegador.
- `novalidate`: omite validación nativa en el envío.

Ejemplo:

```html
<form action="/submit" method="post" enctype="multipart/form-data">
	<!-- controles aquí -->
</form>
```

## Controles de formulario y elementos relacionados

- `input`: el elemento más versátil; tipos como `text`, `email`, `password`, `number`, `checkbox`, `radio`, `file`, `date`, `tel`, `url`, `search`, `hidden`.
- `textarea`: área de texto multilínea.
- `select` y `option`: listas desplegables; `select multiple` permite selección múltiple.
- `button`: `type="submit"`, `type="button"`, `type="reset"`.
- `fieldset` y `legend`: agrupar controles relacionados y etiquetarlos.
- `label`: etiqueta asociada a un control (usa `for` con el `id` del control o anida el control dentro del `label`).

Ejemplo básico:

```html
<label for="email">Email</label>
<input id="email" name="email" type="email" required>
```

## Tipos de `input` y atributos importantes

- `required`: obliga a completar el campo.
- `placeholder`: texto de ayuda dentro del control.
- `pattern`: expresión regular para validar el valor (`pattern="[A-Za-z]+"`).
- `min`/`max`/`step`: para valores numéricos o fechas.
- `accept`: en `input type="file"` para filtrar tipos MIME.
- `multiple`: permite múltiples ficheros o selección en `select`.

## Propiedades y APIs útiles (DOM)

- `FormData(form)`: construye pares clave/valor listos para enviar vía `fetch` o `XMLHttpRequest`.

```js
const form = document.querySelector('form');
const data = new FormData(form);
fetch(form.action, { method: form.method, body: data });
```

- `HTMLFormElement` tiene métodos y propiedades: `form.elements`, `reset()`, `submit()` (programático).
- Constraint Validation API:
	- `input.checkValidity()` — devuelve `true` si pasa la validación.
	- `input.validationMessage` — mensaje por defecto del navegador.
	- `input.setCustomValidity('mensaje')` — establecer mensaje personalizado (debe limpiarse con `''` cuando se resuelva).

Ejemplo de validación programática:

```js
form.addEventListener('submit', (e) => {
	if (!form.checkValidity()) {
		e.preventDefault();
		// mostrar UI de errores
	}
});
```

## Eventos importantes

- `submit`: disparado al enviar el formulario; se puede prevenir con `e.preventDefault()`.
- `input`: cada vez que cambia el valor de un control (en tiempo real).
- `change`: cuando un control pierde el foco tras cambiar (útil en select, checkbox).
- `invalid`: se dispara cuando un campo falla validación nativa (puede usarse para mostrar mensajes accesibles).

Ejemplo de manejar `invalid`:

```js
form.addEventListener('invalid', (e) => {
	e.preventDefault();
	const el = e.target;
	// mostrar mensaje accesible junto al control
}, true); // useCapture true para atrapar desde inputs
```

## Validación: Constraint Validation API y mensajes personalizados

- El navegador hace validación básica (required, type=email, pattern, min/max).
- Para mensajes personalizados:

```js
const email = document.getElementById('email');
email.addEventListener('input', () => {
	if (email.validity.typeMismatch) email.setCustomValidity('Introduce un correo válido');
	else email.setCustomValidity('');
});
```

Recuerda resetear `setCustomValidity('')` cuando el problema se corrija.

## Buenas prácticas y accesibilidad

- Asocia siempre `label` a cada control — facilita la interacción y lectura por screen readers.
- Usa `aria-describedby` para referenciar mensajes de error o pistas.
- Usa `fieldset` y `legend` para grupos de controles relacionados (por ejemplo, opciones de pago).
- Evita placeholders como sustituto de labels (no accesible ni persistente).
- Mantén el foco visible cuando haya errores y mueve el foco al primer error importante.

## Ejemplos completos

Formulario con validación y subida de ficheros:

```html
<form id="contact" action="/submit" method="post" enctype="multipart/form-data">
	<fieldset>
		<legend>Contacto</legend>
		<label for="name">Nombre</label>
		<input id="name" name="name" type="text" required>

		<label for="email">Email</label>
		<input id="email" name="email" type="email" required>

		<label for="resume">CV (pdf)</label>
		<input id="resume" name="resume" type="file" accept="application/pdf">

		<button type="submit">Enviar</button>
	</fieldset>
</form>

<script>
const form = document.getElementById('contact');
form.addEventListener('submit', (e) => {
	if (!form.checkValidity()) {
		e.preventDefault();
		// lógica de mostrar errores
	} else {
		// enviar via fetch con FormData si se desea
		// e.preventDefault();
		// const data = new FormData(form);
		// fetch(...)
	}
});
</script>
```

## Ejercicios

1. Crea un formulario de registro con `name`, `email`, `password`, `birthdate` y `avatar` (file). Añade validación nativa y muestra mensajes de error accesibles.
2. Implementa envío por `fetch` usando `FormData`, mostrando un spinner mientras se envía.
3. Añade una comprobación de fuerza de contraseña (client-side) y usa `setCustomValidity` para prevenir envío si la contraseña es débil.
4. Crea un grupo de `radio` dentro de un `fieldset` con `legend` y asegúrate de que es accesible.
5. Muestra cómo resetear un formulario con `form.reset()` y qué efectos tiene sobre `FormData`.

## Recursos

- MDN: `form`, `input`, `FormData`, Constraint Validation API.
- web.dev: forms performance and UX patterns.
- WAI-ARIA Authoring Practices: accessibility patterns for forms.

---