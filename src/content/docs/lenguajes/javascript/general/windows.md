---
title: Windows
description: Objeto window.
module: lenguajes/javascript
submodule: general
order: 32
---

Al completar esta guía podrás:

- Usar el objeto window para controlar la ventana del navegador
- Manejar timers con setTimeout y setInterval
- Acceder a información de la URL y navegación
- Almacenar datos en localStorage y sessionStorage

---

## El objeto window

`window` es el objeto global en el navegador. Todas las variables globales y funciones están en `window`.

```javascript
window.console.log("Hola");
window.alert("Mensaje");

// Se puede omitir window
console.log("Hola");
alert("Mensaje");
```

---

## Diálogos

```javascript
// Alerta
alert("Esto es una alerta");

// Confirmación — retorna boolean
let confirmar = confirm("¿Estás seguro?");
console.log(confirmar);  // true o false

// Prompt — retorna string o null
let nombre = prompt("¿Cuál es tu nombre?");
console.log(nombre);  // "Ana" o null si cancela
```

> **Regla:** usa `confirm` y `prompt` solo para prototipos o herramientas internas. En producción, usa modales HTML personalizados.

---

## Timers

### setTimeout

Ejecuta una función después de un tiempo.

```javascript
let timeout = setTimeout(() => {
  console.log("Ejecutado después de 2 segundos");
}, 2000);

// Cancelar antes de que se ejecute
clearTimeout(timeout);
```

### setInterval

Ejecuta una función repetidamente cada cierto tiempo.

```javascript
let contador = 0;
let intervalo = setInterval(() => {
  contador++;
  console.log(`Tick ${contador}`);

  if (contador >= 5) {
    clearInterval(intervalo);
    console.log("Intervalo detenido");
  }
}, 1000);
```

---

## Location

`window.location` proporciona información sobre la URL actual y permite navegar.

```javascript
// URL actual completa
console.log(location.href);         // "https://ejemplo.com/pagina?id=1"
console.log(location.protocol);     // "https:"
console.log(location.hostname);     // "ejemplo.com"
console.log(location.port);         // "443"
console.log(location.pathname);     // "/pagina"
console.log(location.search);       // "?id=1"
console.log(location.hash);         // "#seccion"

// Navegar
location.href = "https://otro.com";   // Redirige
location.assign("https://otro.com");  // Redirige (historial guardado)
location.replace("https://otro.com"); // Redirige (sin historial)
location.reload();                    // Recarga la página
```

---

## History

`window.history` permite navegar en el historial del navegador.

```javascript
history.back();     // Página anterior
history.forward();  // Página siguiente
history.go(-2);     // Retrocede 2 páginas
history.go(1);      // Avanza 1 página

console.log(history.length);  // Cantidad de entradas en el historial
```

---

## Screen

`window.screen` proporciona información sobre la pantalla del usuario.

```javascript
console.log(screen.width);      // Ancho total
console.log(screen.height);     // Alto total
console.log(screen.availWidth);  // Ancho disponible
console.log(screen.availHeight); // Alto disponible
console.log(screen.colorDepth); // Profundidad de color
```

---

## innerWidth y innerHeight

Tamaño del área visible de la ventana (viewport).

```javascript
console.log(window.innerWidth);   // Ancho del viewport
console.log(window.innerHeight);  // Alto del viewport

// scrollX y scrollY — desplazamiento actual
console.log(window.scrollX);  // Pixeles scroll horizontal
console.log(window.scrollY);  // Pixeles scroll vertical

// Scroll suave
window.scrollTo({
  top: 0,
  behavior: "smooth"
});
```

---

## localStorage y sessionStorage

### localStorage

Los datos persisten incluso después de cerrar el navegador.

```javascript
// Guardar
localStorage.setItem("nombre", "Ana");
localStorage.setItem("edad", "30");

// Leer
console.log(localStorage.getItem("nombre"));  // "Ana"
console.log(localStorage.getItem("edad"));    // "30"

// Eliminar uno
localStorage.removeItem("edad");

// Eliminar todos
localStorage.clear();

// Almacenar objetos
let usuario = { nombre: "Ana", edad: 30 };
localStorage.setItem("usuario", JSON.stringify(usuario));

let recuperado = JSON.parse(localStorage.getItem("usuario"));
console.log(recuperado.nombre);  // "Ana"
```

### sessionStorage

Los datos persisten solo durante la sesión (se borran al cerrar la pestaña).

```javascript
sessionStorage.setItem("temporal", "valor");
console.log(sessionStorage.getItem("temporal"));  // "valor"
```

---

## open y close

```javascript
// Abrir ventana
let ventana = window.open("https://ejemplo.com", "nombreVentana", "width=600,height=400");

// Cerrar ventana abierta por script
ventana.close();

// Verificar si está cerrada
console.log(ventana.closed);
```

---

## Resumen

| Objeto | Propósito |
|---|---|
| `window` | Objeto global del navegador |
| `location` | URL actual y navegación |
| `history` | Historial de navegación |
| `screen` | Información de la pantalla |
| `localStorage` | Almacenamiento persistente |
| `sessionStorage` | Almacenamiento de sesión |

- `alert`, `confirm`, `prompt` son métodos de `window`
- `setTimeout` y `setInterval` ejecutan código con retraso
- `localStorage` persiste datos; `sessionStorage` dura solo la sesión
- Almacena objetos en localStorage con `JSON.stringify`/`JSON.parse`
- `window.open` abre ventanas; `window.close` las cierra

---

## Ejercicio

Crea un contador de visitas que se almacene en `localStorage`. Cada vez que se recarga la página, debe incrementar y mostrar el número de visitas.

**Instrucciones paso a paso:**

1. Lee `localStorage.getItem("visitas")`
2. Si no existe, inicializa en 0
3. Convierte a número y suma 1
4. Guarda el nuevo valor
5. Muestra en consola o en un elemento HTML

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
  <body>
    <p>Has visitado esta página <span id="contador"></span> veces.</p>

    <script>
      let visitas = parseInt(localStorage.getItem("visitas")) || 0;
      visitas++;
      localStorage.setItem("visitas", visitas);

      document.getElementById("contador").textContent = visitas;
    </script>
  </body>
</html>
```

</details>
