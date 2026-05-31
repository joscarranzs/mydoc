---
title: ID
module: html
submodule: organization/id
---

El atributo `id` asigna un identificador único a un elemento. A diferencia de `class`, un `id` no puede repetirse en el mismo documento.

```html
<main id="contenido-principal">
  <h1 id="titulo-pagina">Bienvenido</h1>
</main>
```

## Características fundamentales

- **Único**: cada `id` debe ser distinto dentro del mismo documento. Si se repite, el HTML no es válido y el comportamiento de CSS y JavaScript se vuelve impredecible.
- **Sensible a mayúsculas**: `id="Principal"` e `id="principal"` son distintos.
- **Sin espacios**: los ID no pueden contener espacios. Usar guiones para separar palabras.
- **No debe comenzar con número**: aunque HTML5 lo permite, puede causar problemas con selectores CSS y queries de JavaScript.

## Usos principales

### Anclas de navegación

Los ID permiten crear enlaces internos que desplazan la página hasta el elemento destino:

```html
<nav>
  <a href="#instalacion">Ir a instalación</a>
  <a href="#configuracion">Ir a configuración</a>
</nav>

<h2 id="instalacion">Instalación</h2>
<p>Instrucciones de instalación...</p>

<h2 id="configuracion">Configuración</h2>
<p>Instrucciones de configuración...</p>
```

### JavaScript

Los ID son la forma más rápida de seleccionar un elemento:

```javascript
const main = document.getElementById('contenido-principal');
const titulo = document.querySelector('#titulo-pagina');
```

### CSS

El selector de ID tiene una especificidad muy alta (0,1,0,0), superando a cualquier cantidad de clases:

```css
#cerrar-sesion { display: none; }
/* Especificidad: 0,1,0,0 — difícil de sobrescribir */
```

## ID vs. clases

| Aspecto | `id` | `class` |
|---------|------|---------|
| Unicidad | Único por documento | Múltiples elementos |
| Especificidad CSS | Muy alta (0,1,0,0) | Baja (0,0,1,0 por clase) |
| JavaScript | `getElementById()` | `getElementsByClassName()` |
| Anclas | Sí (con #) | No |
| Múltiples valores | No (un solo ID) | Sí (separados por espacio) |

## Buenas prácticas

- Usar `id` para **anclas de navegación** y **relaciones específicas** (como `<label for="email">`).
- Preferir `class` para **estilos**, ya que las clases son reutilizables y tienen menor especificidad.
- Evitar usar `id` solo por conveniencia en CSS. Una clase es más mantenible y menos propensa a conflictos de especificidad.

---

## Ejercicio: formulario con etiquetas vinculadas

Crea un formulario de inicio de sesión con tres campos (email, contraseña, recordar sesión) donde cada `<label>` esté correctamente vinculada a su `<input>` mediante el atributo `for` y el `id` del input.

<details>
<summary><strong>Ver solución</strong></summary>

```html
<form action="/login" method="post">
  <div>
    <label for="email">Correo electrónico</label>
    <input type="email" id="email" name="email" required>
  </div>

  <div>
    <label for="password">Contraseña</label>
    <input type="password" id="password" name="password" required>
  </div>

  <div>
    <label for="recordar">
      <input type="checkbox" id="recordar" name="recordar">
      Recordar sesión
    </label>
  </div>

  <button type="submit">Iniciar sesión</button>
</form>
```

</details>
