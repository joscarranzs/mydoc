# Gráficos en la web: Canvas, SVG y WebGL — propiedades y cuándo usar cada uno

## Tabla de contenidos

- Canvas 2D (`<canvas>`): concepto, contexto, propiedades y rendimiento
- SVG: gráficos vectoriales, `viewBox`, `preserveAspectRatio`, DOM SVG
- WebGL / WebGPU: gráficos acelerados por GPU (3D, rendimiento)
- Comparación: cuándo usar Canvas vs SVG vs WebGL
- Escalas DPI (High-DPI / retina) y resolución
- Accesibilidad y alternativas (descripciones, fallback)
- Ejemplos básicos (Canvas y SVG)
- Ejercicios
- Recursos

## Canvas 2D (`<canvas>`)

`<canvas>` es un lienzo raster donde el autor dibuja píxel a píxel mediante una API JavaScript (2D context o WebGL).

Propiedades y conceptos clave:

- `width` y `height` del elemento (atributos) determinan el tamaño de la superficie en píxeles de dibujo. Si no se especifican, el canvas usa 300×150 por defecto.
- Estilos CSS (`width`/`height`) escalan la presentación, pero no cambian la resolución interna; para evitar blurring en pantallas HiDPI hay que ajustar el tamaño de la superficie (ver sección DPI).
- Contexto 2D: `const ctx = canvas.getContext('2d')` con métodos `fillRect`, `stroke`, `beginPath`, `arc`, `fillText`, `drawImage`, etc.
- Estado gráfico: trazos, fills, transforms, compositing global (`globalAlpha`, `globalCompositeOperation`).
- Rendimiento: Canvas es rápido para dibujo dinámico y escenas que cambian frecuentemente (animaciones, juegos 2D, visualizaciones). No retiene un DOM por elemento dibujado (es raster), por lo que interactuar por elemento es manual (hit testing).

Ejemplo mínimo:

```html
<canvas id="c" width="500" height="300"></canvas>
<script>
const c = document.getElementById('c');
const ctx = c.getContext('2d');
ctx.fillStyle = 'steelblue';
ctx.fillRect(10,10,100,50);
</script>
```

## SVG (Scalable Vector Graphics)

SVG es un formato vectorial basado en XML que define formas, rutas, texto y estilo. Cada forma es un nodo en el DOM SVG.

Propiedades clave:

- `viewBox="minX minY width height"` define el sistema de coordenadas y permite que el SVG sea escalable.
- `preserveAspectRatio` controla cómo se escala el contenido dentro de la caja.
- Soporte CSS y eventos: los elementos SVG pueden recibir estilos CSS y eventos DOM; son accesibles y manipulables como cualquier nodo.
- Ideal para iconos, gráficos que deben escalar sin pérdida, diagramas y casos donde necesitas interacción por elemento (tooltip, hover, accesibilidad).

Ejemplo SVG simple:

```html
<svg width="200" height="100" viewBox="0 0 200 100" role="img" aria-label="Gráfico ejemplo">
	<rect x="10" y="10" width="50" height="30" fill="tomato"></rect>
	<circle cx="120" cy="50" r="20" fill="teal"></circle>
	<text x="10" y="90" font-size="12">Texto SVG</text>
</svg>
```

## WebGL / WebGPU

WebGL (y la nueva API WebGPU) proporciona acceso a la GPU para renderizar gráficos 3D acelerados. Se usan para juegos 3D, visualizaciones complejas y técnicas que requieren gran throughput gráfico.

Notas:

- WebGL es más complejo: shaders (GLSL), buffers, texturas, pipeline gráfico.
- WebGPU es la evolución moderna con mejor control y rendimiento (API más parecida a Vulkan/Metal/DX12), pero su adopción/compatibilidad varía.
- Si necesitas 3D o efectos GPU (postprocessing, grandes escenas), WebGL/WebGPU son adecuados. Para 2D simple, Canvas o SVG suelen ser suficientes.

## Comparación: cuándo usar cada uno

- SVG: mejores para gráficos vectoriales, iconos, diagramas, cuando cada elemento necesita interacción y accesibilidad. Escala sin pérdida.
- Canvas: ideal para píxel-manipulación, animaciones 2D intensivas, juegos 2D, visualizaciones que actualizan rápidamente (no necesitas DOM por cada objeto).
- WebGL/WebGPU: gráficos 3D complejos, renderizado acelerado por GPU y escenarios con muchas entidades y efectos.

## Escalas DPI (High-DPI / Retina)

Problema común: canvas rasterizado se ve borroso en pantallas HiDPI si solo se define el tamaño CSS. Solución típica:

```js
const dpr = window.devicePixelRatio || 1;
canvas.width = cssWidth * dpr;
canvas.height = cssHeight * dpr;
canvas.style.width = cssWidth + 'px';
canvas.style.height = cssHeight + 'px';
ctx.scale(dpr, dpr);
```

SVG escala correctamente al cambiar tamaño CSS porque es vectorial y no pierde resolución.

## Accesibilidad y alternativas

- Proveer `role="img"` y `aria-label` o `aria-labelledby` para gráficos decorativos o informativos.
- Ofrecer descripciones alternativas en texto (adjuntar un `<figcaption>` o texto visible) para usuarios de screen readers.
- Para canvas dinámico, mantener una representación accesible del contenido (tabla, lista o descripción) sincronizada con el dibujo.

## Ejemplos básicos (Canvas y SVG)

Canvas: dibujar un círculo y texto

```html
<canvas id="c2" width="200" height="150"></canvas>
<script>
const c2 = document.getElementById('c2');
const ctx2 = c2.getContext('2d');
ctx2.fillStyle = '#ffcc00';
ctx2.beginPath();
ctx2.arc(100,75,40,0,Math.PI*2);
ctx2.fill();
ctx2.fillStyle = '#000';
ctx2.fillText('Hola', 85, 80);
</script>
```

SVG: gráfico con interactividad mínima

```html
<svg width="300" height="120" viewBox="0 0 300 120">
	<rect x="10" y="10" width="80" height="40" fill="#4CAF50"></rect>
	<circle id="dot" cx="200" cy="50" r="20" fill="#f44336"></circle>
	<script><![CDATA[
		document.getElementById('dot').addEventListener('click', function(){ alert('clic'); });
	]]></script>
</svg>
```

## Ejercicios

1. Crea un canvas y dibuja una gráfica de barras simple a partir de un array de números. Añade texto con valores.
2. Implementa la técnica DPI para canvas y demuestra la diferencia en pantallas retina.
3. Crea un icono SVG escalable y añade `title`/`desc` para accesibilidad.
4. Investiga un ejemplo básico de WebGL (renderizar un triángulo) y documenta los pasos principales (shaders, buffer, draw call).
5. Convierte una visualización simple de Canvas a SVG y describe las ventajas/desventajas.

## Recursos

- MDN: Canvas API, SVG, WebGL.
- WebGL Fundamentals: tutoriales sobre pipeline y shaders.
- Can I use: compatibilidad WebGL/WebGPU y características SVG.

---