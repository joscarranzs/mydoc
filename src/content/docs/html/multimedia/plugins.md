---
title: PLUG-INS
module: html
submodule: multimedia/plugins
---

Históricamente, los navegadores dependían de plugins externos para reproducir contenido multimedia. Con la madurez de HTML5, la mayoría de estos plugins han quedado obsoletos y no deben usarse en proyectos nuevos.

## El elemento `<object>`

`<object>` fue el mecanismo genérico para incrustar contenido externo manejado por un plugin: applets Java, controles ActiveX, PDFs y reproductores Flash.

```html
<object data="documento.pdf" type="application/pdf" width="600" height="400">
  <p>Tu navegador no puede mostrar el PDF. <a href="documento.pdf">Descargar documento</a>.</p>
</object>
```

Aunque `<object>` sigue siendo válido, su uso moderno se limita a casos muy específicos como la visualización de PDFs en navegadores que no lo soportan nativamente.

## El elemento `<embed>`

`<embed>` es un elemento más simple y antiguo para incrustar contenido:

```html
<embed src="animacion.swf" type="application/x-shockwave-flash" width="400" height="300">
```

Flash quedó oficialmente descontinuado en 2020 y los principales navegadores lo han eliminado. `<embed>` no debe usarse en proyectos nuevos.

## Alternativas modernas

| Función | Plugin antiguo | Alternativa moderna |
|---------|---------------|-------------------|
| Video | Flash (`<object>`) | `<video>` con `<source>` |
| Audio | Flash, QuickTime | `<audio>` con `<source>` |
| PDF | Adobe Reader plugin | `<iframe>` o bibliotecas JS (PDF.js) |
| Animaciones | Flash | CSS animations, `<canvas>`, WebGL |
| Mapas | Google Maps plugin | `<iframe>` con Google Maps embed |
| Contenido 3D | Unity Web Player, Flash | WebGL, Three.js, `<model-viewer>` |

## Cuándo usar `<object>` hoy

- **PDFs**: como fallback para navegadores sin visor nativo.
- **SVG**: aunque `<img>` y `<svg>` inline son preferibles, `<object>` permite scripts dentro del SVG.
- **Contenido legacy**: solo si es estrictamente necesario mantener compatibilidad con sistemas antiguos.

```html
<!-- PDF con fallback -->
<object data="manual.pdf" type="application/pdf" width="100%" height="600">
  <p>No se puede mostrar el PDF. <a href="manual.pdf">Descargar manual</a>.</p>
</object>

<!-- SVG con scripts embebidos -->
<object data="grafico-interactivo.svg" type="image/svg+xml" width="400" height="300">
  <img src="grafico-estatico.png" alt="Gráfico">
</object>
```

## Buenas prácticas

- No usar Flash, Silverlight, Java applets ni ActiveX en proyectos nuevos.
- Preferir elementos HTML5 nativos (`<video>`, `<audio>`, `<canvas>`) sobre plugins.
- Si necesitas mostrar PDFs, considera `<iframe>` o la biblioteca PDF.js de Mozilla.
- Los plugins son un riesgo de seguridad: cada plugin adicional expande la superficie de ataque del navegador.

---

## Ejercicio: migrar un plugin a HTML5

Dado el siguiente HTML legacy, sugiere la alternativa moderna:

```html
<object data="presentacion.swf" type="application/x-shockwave-flash" width="640" height="360">
  <param name="movie" value="presentacion.swf">
  <param name="quality" value="high">
</object>
```

<details>
<summary><strong>Ver solución</strong></summary>

Reemplazar por `<video>` con formato moderno. El contenido Flash debe convertirse a MP4/WebM:

```html
<video controls width="640" height="360" poster="presentacion-poster.jpg">
  <source src="presentacion.mp4" type="video/mp4">
  <source src="presentacion.webm" type="video/webm">
  <p>Tu navegador no soporta video HTML5. <a href="presentacion.mp4">Descargar presentación</a>.</p>
</video>
```

</details>
