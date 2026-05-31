---
title: WEB WORKERS
module: html
submodule: apis/web-workers
---

Web Workers permiten ejecutar JavaScript en un hilo secundario independiente del hilo principal de la interfaz de usuario. Esto evita que operaciones pesadas (cálculos, procesamiento de datos, cifrado) bloqueen la respuesta de la página.

```javascript
// main.js — hilo principal
const worker = new Worker('worker.js');

worker.postMessage({ data: [1, 2, 3, 4, 5] });

worker.onmessage = event => {
  console.log('Resultado del worker:', event.data);
};
```

```javascript
// worker.js — hilo secundario
self.onmessage = event => {
  const resultado = event.data.data.map(n => n * 2);
  self.postMessage(resultado);
};
```

## Cómo funciona

- El worker se ejecuta en un hilo separado. No tiene acceso al DOM, `window`, `document` ni `parent`.
- La comunicación entre el hilo principal y el worker se realiza mediante mensajes (`postMessage` y `onmessage`).
- Los mensajes se copian (no se comparten), usando el algoritmo de **structured clone**.

## Crear un worker

```javascript
// Worker desde un archivo externo (recomendado)
const worker = new Worker('js/procesador.js');

// Worker desde un blob (para código inline)
const codigo = `
  self.onmessage = function(e) {
    self.postMessage(e.data * 2);
  };
`;
const blob = new Blob([codigo], { type: 'application/javascript' });
const worker = new Worker(URL.createObjectURL(blob));
```

## Comunicación bidireccional

```javascript
// main.js
const worker = new Worker('worker.js');

worker.postMessage({ tipo: 'calcular', valores: [10, 20, 30] });

worker.onmessage = event => {
  document.getElementById('resultado').textContent = event.data;
};

worker.onerror = error => {
  console.error('Error en worker:', error.message);
};
```

```javascript
// worker.js
self.onmessage = event => {
  const { tipo, valores } = event.data;

  if (tipo === 'calcular') {
    const suma = valores.reduce((a, b) => a + b, 0);
    self.postMessage(suma);
  }
};
```

## Terminar un worker

```javascript
// Desde el hilo principal
worker.terminate();

// Desde el propio worker
self.close();
```

Un worker terminado no puede reiniciarse. Debe crearse una nueva instancia.

## Casos de uso típicos

- **Procesamiento de imágenes**: filtros, detección de bordes, compresión.
- **Cálculos matemáticos intensivos**: simulaciones, renderizado de fractales.
- **Análisis de datos**: procesamiento de grandes arrays, ordenamiento, búsqueda.
- **Cifrado y hash**: operaciones criptográficas sin bloquear la UI.
- **Compilación en el navegador**: transpilación de código (Babel, TypeScript).

## Limitaciones

- Sin acceso al DOM ni a `window`, `document`, `parent`.
- Sin acceso a `console` en algunos navegadores antiguos.
- El worker debe servirse desde el mismo origen que la página principal (misma política CORS).
- Los workers no pueden cargar scripts de forma síncrona (usan `importScripts`).
- Crear workers tiene un costo de memoria y tiempo de inicialización.

---

## Ejercicio: worker para números primos

Crea un worker que reciba un número `n` y devuelva un array con los primeros `n` números primos. El hilo principal debe mostrar el resultado en la página.

<details>
<summary><strong>Ver solución</strong></summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Calculadora de primos</title>
</head>
<body>
  <h1>Números primos</h1>
  <label>Cantidad: <input type="number" id="cantidad" value="10" min="1" max="100"></label>
  <button id="calcular">Calcular</button>
  <p id="resultado"></p>

  <script>
    const blob = new Blob([`
      self.onmessage = event => {
        const n = event.data;
        const primos = [];
        let num = 2;
        while (primos.length < n) {
          let esPrimo = true;
          for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) { esPrimo = false; break; }
          }
          if (esPrimo) primos.push(num);
          num++;
        }
        self.postMessage(primos);
      };
    `], { type: 'application/javascript' });

    document.getElementById('calcular').addEventListener('click', () => {
      const n = parseInt(document.getElementById('cantidad').value);
      const worker = new Worker(URL.createObjectURL(blob));

      worker.postMessage(n);
      worker.onmessage = event => {
        document.getElementById('resultado').textContent =
          'Primos: ' + event.data.join(', ');
        worker.terminate();
      };
    });
  </script>
</body>
</html>
```

</details>
