---
title: jQuery
description: Librería de DOM.
module: lenguajes/javascript
submodule: general
order: 36
---

Al completar esta guía podrás:

- Seleccionar elementos con sintaxis CSS
- Manipular el DOM con métodos jQuery
- Asignar eventos de forma multiplataforma
- Hacer peticiones AJAX con jQuery

---

## ¿Qué es jQuery?

jQuery es una librería que simplifica la manipulación del DOM, el manejo de eventos y las peticiones AJAX. Fue dominante antes de que los navegadores modernos estandarizaran estas APIs.

> **Nota:** hoy en día, el JavaScript nativo (`querySelector`, `fetch`, `classList`) cubre la mayoría de los casos de uso de jQuery. Solo se recomienda jQuery para mantener proyectos heredados.

---

## Inclusión

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```

---

## Selectores

jQuery usa selectores CSS para seleccionar elementos.

```javascript
// Por id
$("#titulo");

// Por clase
$(".item");

// Por etiqueta
$("p");

// Selector compuesto
$("ul li.activo");

// Múltiples
$("h1, h2, p");
```

---

## Manipulación del DOM

```javascript
// Contenido
$("#demo").text("Nuevo texto");           // textContent
$("#demo").html("<strong>Nuevo</strong>"); // innerHTML
$("#demo").val("valor");                  // value para inputs

// Atributos
$("#enlace").attr("href", "https://ejemplo.com");
$("#enlace").removeAttr("target");

// Clases
$("#elemento").addClass("destacado");
$("#elemento").removeClass("oculto");
$("#elemento").toggleClass("visible");
$("#elemento").hasClass("activo");

// Estilos
$("#elemento").css("color", "red");
$("#elemento").css({
  color: "white",
  backgroundColor: "#1A73E8"
});
```

---

## Eventos

```javascript
// Click
$("#boton").click(function() {
  console.log("Clickeado");
});

// Múltiples eventos
$("#campo").on("keyup change", function() {
  console.log($(this).val());
});

// Delegación
$("#lista").on("click", "li", function() {
  console.log($(this).text());
});

// Evento único
$("#boton").one("click", function() {
  console.log("Esto solo se ejecuta una vez");
});
```

---

## Efectos

```javascript
// Mostrar/Ocultar
$("#elemento").hide(400);
$("#elemento").show(400);
$("#elemento").toggle(400);

// Desvanecer
$("#elemento").fadeIn(400);
$("#elemento").fadeOut(400);
$("#elemento").fadeToggle(400);

// Deslizar
$("#elemento").slideUp(400);
$("#elemento").slideDown(400);
$("#elemento").slideToggle(400);

// Animación personalizada
$("#elemento").animate({
  opacity: 0.5,
  marginLeft: "50px"
}, 500);
```

---

## AJAX con jQuery

```javascript
// GET
$.get("https://api.ejemplo.com/datos", function(data) {
  console.log(data);
});

// GET con parámetros
$.get("https://api.ejemplo.com/usuarios", { q: "Ana" }, function(data) {
  console.log(data);
});

// POST
$.post("https://api.ejemplo.com/usuarios", {
  nombre: "Ana",
  edad: 30
}, function(data) {
  console.log("Creado:", data);
});

// AJAX completo
$.ajax({
  url: "https://api.ejemplo.com/usuarios",
  method: "POST",
  contentType: "application/json",
  data: JSON.stringify({ nombre: "Ana" }),
  success: function(response) {
    console.log(response);
  },
  error: function(xhr, status, error) {
    console.log("Error:", error);
  }
});
```

---

## $(document).ready

Ejecuta código cuando el DOM esté listo, sin esperar imágenes ni estilos.

```javascript
$(document).ready(function() {
  console.log("DOM listo");
});

// Forma abreviada
$(function() {
  console.log("DOM listo");
});
```

---

## Encadenamiento

La mayoría de los métodos jQuery retornan el mismo objeto, permitiendo encadenar.

```javascript
$("#elemento")
  .addClass("destacado")
  .css("color", "red")
  .slideDown(400)
  .text("Nuevo contenido");
```

---

## jQuery vs JavaScript nativo

| Operación | jQuery | Nativo |
|---|---|---|
| Seleccionar | `$(".item")` | `document.querySelectorAll(".item")` |
| Texto | `$el.text("texto")` | `el.textContent = "texto"` |
| Clase | `$el.addClass("x")` | `el.classList.add("x")` |
| Evento | `$el.on("click", fn)` | `el.addEventListener("click", fn)` |
| AJAX | `$.get(url, fn)` | `fetch(url).then(fn)` |
| Ocultar | `$el.hide()` | `el.style.display = "none"` |

> **Regla:** en proyectos nuevos, usa JavaScript nativo. jQuery solo es necesario para mantener proyectos existentes.

---

## Resumen

- jQuery simplifica selección, manipulación, eventos y AJAX
- Usa `$()` para seleccionar elementos con selectores CSS
- Los métodos jQuery retornan el mismo objeto (encadenamiento)
- `$(document).ready()` ejecuta código cuando el DOM está listo
- Hoy JavaScript nativo cubre la mayoría de los casos de jQuery
- jQuery sigue siendo útil en proyectos heredados

---

## Ejercicio

Usando jQuery, agrega un evento click a un botón que oculte un párrafo con una animación de 400ms.

**Instrucciones paso a paso:**

1. Incluye jQuery desde CDN
2. Crea un botón con id `"ocultar"` y un párrafo con id `"texto"`
3. Usa `$(document).ready()` para esperar el DOM
4. Asigna `click` al botón
5. Dentro, usa `$("#texto").hide(400)` para ocultar con animación

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  </head>
  <body>
    <p id="texto">Este texto se ocultará con animación</p>
    <button id="ocultar">Ocultar</button>

    <script>
      $(document).ready(function() {
        $("#ocultar").click(function() {
          $("#texto").hide(400);
        });
      });
    </script>
  </body>
</html>
```

</details>
