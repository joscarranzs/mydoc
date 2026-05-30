---
title: Proyectos
description: Ideas prácticas para aplicar JS.
module: lenguajes/javascript
submodule: general
order: 41
---

Al completar esta guía podrás:

- Aplicar los conceptos de JavaScript en proyectos reales
- Estructurar proyectos pequeños y medianos
- Practicar con ejercicios integradores

---

## 1. Calculadora

Una calculadora que realice operaciones básicas.

**Conceptos:** funciones, DOM, eventos, switch.

**Sugerencias:**

```javascript
function calcular(a, operacion, b) {
  switch (operacion) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Error";
    default: return "Operación no válida";
  }
}
```

**Ampliación:** interfaz con botones, historial de operaciones, teclado.

---

## 2. Lista de tareas (Todo App)

CRUD completo de tareas.

**Conceptos:** arrays, objetos, DOM, localStorage, eventos.

```javascript
let tareas = [];

function agregarTarea(texto) {
  tareas.push({ id: Date.now(), texto, completada: false });
  guardarEnStorage();
  renderizar();
}

function toggleCompletada(id) {
  let tarea = tareas.find(t => t.id === id);
  if (tarea) tarea.completada = !tarea.completada;
  guardarEnStorage();
  renderizar();
}

function eliminarTarea(id) {
  tareas = tareas.filter(t => t.id !== id);
  guardarEnStorage();
  renderizar();
}

function guardarEnStorage() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function cargarDeStorage() {
  let datos = localStorage.getItem("tareas");
  tareas = datos ? JSON.parse(datos) : [];
  renderizar();
}
```

**Ampliación:** categorías, filtros, arrastrar para reordenar.

---

## 3. Clima

Mostrar el clima actual de una ciudad usando una API pública.

**Conceptos:** fetch, async/await, JSON, DOM.

```javascript
async function obtenerClima(ciudad) {
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

  try {
    let respuesta = await fetch(url);
    let datos = await respuesta.json();
    mostrarClima(datos.current_weather);
  } catch (error) {
    mostrarError("No se pudo obtener el clima");
  }
}
```

**Ampliación:** geolocalización del navegador, pronóstico semanal, íconos.

---

## 4. Juego de memoria

Encontrar pares de cartas en un tablero.

**Conceptos:** arrays, setTimeout, eventos, manipulación DOM.

```javascript
let cartas = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊"];
let tablero = [...cartas, ...cartas];  // Duplicar para pares
let seleccionadas = [];
let bloqueado = false;

function manejarClick(indice) {
  if (bloqueado || seleccionadas.includes(indice)) return;

  seleccionadas.push(indice);
  mostrarCarta(indice);

  if (seleccionadas.length === 2) {
    bloqueado = true;
    setTimeout(verificarPar, 800);
  }
}

function verificarPar() {
  let [a, b] = seleccionadas;
  if (tablero[a] !== tablero[b]) {
    ocultarCarta(a);
    ocultarCarta(b);
  }
  seleccionadas = [];
  bloqueado = false;
}
```

**Ampliación:** contador de intentos, temporizador, niveles de dificultad.

---

## 5. Reloj mundial

Mostrar la hora actual de varias zonas horarias.

**Conceptos:** Date, setInterval, formateo.

```javascript
function actualizarRelojes() {
  let zonas = [
    { nombre: "CDMX", zona: "America/Mexico_City" },
    { nombre: "Madrid", zona: "Europe/Madrid" },
    { nombre: "Tokio", zona: "Asia/Tokyo" },
  ];

  zonas.forEach(z => {
    let hora = new Date().toLocaleTimeString("es-MX", {
      timeZone: z.zona,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    document.getElementById(z.nombre).textContent = hora;
  });
}

setInterval(actualizarRelojes, 1000);
```

**Ampliación:** permitir agregar/eliminar zonas, modo oscuro.

---

## 6. Conversor de unidades

Convertir entre unidades de longitud, temperatura, peso, etc.

**Conceptos:** objetos, funciones, formularios.

```javascript
const conversiones = {
  temperatura: {
    celsiusAFahrenheit: c => c * 9/5 + 32,
    fahrenheitACelsius: f => (f - 32) * 5/9,
    celsiusAKelvin: c => c + 273.15,
    kelvinACelsius: k => k - 273.15,
  },
  longitud: {
    metrosAPies: m => m * 3.281,
    piesAMetros: p => p / 3.281,
    kmAMillas: km => km * 0.621,
    millasAKm: mi => mi / 0.621,
  },
};
```

**Ampliación:** interfaz con selects dinámicos, más categorías.

---

## 7. Quiz interactivo

Preguntas de opción múltiple con puntuación.

**Conceptos:** arrays de objetos, funciones, manipulación DOM, estado.

```javascript
const preguntas = [
  {
    pregunta: "¿Cuál es el resultado de 2 + '2'?",
    opciones: ["4", "22", "Error", "undefined"],
    correcta: 1,
  },
  {
    pregunta: "¿Cuál método NO muta el arreglo original?",
    opciones: ["push", "sort", "map", "splice"],
    correcta: 2,
  },
];

let indiceActual = 0;
let puntuacion = 0;

function mostrarPregunta() {
  let p = preguntas[indiceActual];
  // Renderizar pregunta y opciones
}

function responder(opcionSeleccionada) {
  if (opcionSeleccionada === preguntas[indiceActual].correcta) {
    puntuacion++;
  }
  indiceActual++;
  if (indiceActual < preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
}
```

**Ampliación:** temporizador por pregunta, mezclar preguntas, categorías.

---

## 8. Editor de notas markdown

Escribir texto con formato básico lado a lado con la vista previa.

**Conceptos:** eventos de teclado, innerHTML, replace, sanitización.

```javascript
function convertirMarkdown(texto) {
  return texto
    .replace(/^### (.+)/gm, "<h3>$1</h3>")
    .replace(/^## (.+)/gm, "<h2>$1</h2>")
    .replace(/^# (.+)/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^\- (.+)/gm, "<li>$1</li>")
    .replace(/\n/g, "<br>");
}

textarea.addEventListener("input", () => {
  vistaPrevia.innerHTML = convertirMarkdown(textarea.value);
});
```

**Ampliación:** exportar a HTML, almacenamiento automático, atajos de teclado.

---

## 9. Galería de imágenes con búsqueda

Mostrar imágenes desde una API y filtrar por texto.

**Conceptos:** fetch, async/await, filter, renderizado dinámico.

```javascript
let imagenes = [];

async function cargarImagenes() {
  let respuesta = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=50");
  imagenes = await respuesta.json();
  renderizar(imagenes);
}

function buscar(texto) {
  let filtradas = imagenes.filter(img =>
    img.title.toLowerCase().includes(texto.toLowerCase())
  );
  renderizar(filtradas);
}

function renderizar(lista) {
  let contenedor = document.getElementById("galeria");
  contenedor.innerHTML = lista.map(img => `
    <div class="imagen">
      <img src="${img.thumbnailUrl}" alt="${img.title}">
      <p>${img.title}</p>
    </div>
  `).join("");
}
```

**Ampliación:** paginación, lazy loading, lightbox.

---

## 10. Cronómetro

Cronómetro con inicio, pausa y reinicio.

**Conceptos:** setInterval, Date, formateo.

```javascript
let inicio = 0;
let intervalo = null;
let corriendo = false;

function iniciar() {
  if (corriendo) return;
  corriendo = true;
  inicio = Date.now() - (inicio || 0);

  intervalo = setInterval(() => {
    let transcurrido = Date.now() - inicio;
    document.getElementById("display").textContent = formatear(transcurrido);
  }, 10);
}

function pausar() {
  if (!corriendo) return;
  corriendo = false;
  clearInterval(intervalo);
}

function reiniciar() {
  pausar();
  inicio = 0;
  document.getElementById("display").textContent = "00:00.00";
}

function formatear(ms) {
  let total = Math.floor(ms / 10);
  let minutos = Math.floor(total / 6000);
  let segundos = Math.floor((total % 6000) / 100);
  let centesimas = total % 100;
  return `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}.${String(centesimas).padStart(2, "0")}`;
}
```

---

## Organización del proyecto

Para proyectos más grandes, estructura tu código en archivos separados:

```
proyecto/
├── index.html
├── style.css
├── js/
│   ├── app.js          // Punto de entrada
│   ├── api.js          // Llamadas a API
│   ├── storage.js      // Manejo de localStorage
│   ├── ui.js           // Renderizado DOM
│   └── utils.js        // Funciones auxiliares
└── README.md
```

```html
<!-- index.html -->
<script type="module" src="js/app.js"></script>
```

```javascript
// app.js
import { cargarTareas } from "./storage.js";
import { renderizar } from "./ui.js";

cargarTareas();
renderizar();
```

---

## Consejos generales

- Empieza con una funcionalidad mínima y ve agregando
- Separa lógica de presentación
- Usa funciones pequeñas con una sola responsabilidad
- Mantén el estado en un solo lugar (no distribuido en el DOM)
- Usa `const` para valores que no cambian
- Comienza sin framework, luego agrega si es necesario
- Prueba en varios navegadores
- Usa la consola del navegador para depurar

---

## Resumen

| Proyecto | Conceptos clave |
|---|---|
| Calculadora | DOM, eventos, switch |
| Todo App | CRUD, localStorage, arrays |
| Clima | fetch, async/await, API |
| Memoria | setTimeout, eventos, lógica |
| Reloj mundial | Date, setInterval, timezone |
| Conversor | Objetos, funciones |
| Quiz | Estado, arrays, DOM |
| Markdown | replace, eventos teclado |
| Galería | fetch, filter, renderizado |
| Cronómetro | setInterval, Date, formateo |

- Cada proyecto refuerza conceptos específicos
- Empieza simple y amplía progresivamente
- La práctica constante es la mejor forma de aprender
