---
title: ESTILOS
module: html
submodule: presentation/styles
---

HTML ofrece tres mecanismos para aplicar estilos a un documento. Cada uno tiene un caso de uso específico y un nivel distinto de prioridad en la cascada CSS.

## Estilos en línea (inline)

Se aplican directamente sobre un elemento mediante el atributo `style`:

```html
<p style="color: blue; font-size: 1.2rem; margin-bottom: 1rem;">
  Este párrafo tiene estilos en línea.
</p>
```

**Ventajas**: máxima especificidad, útil para prototipado rápido o valores dinámicos desde JavaScript.  
**Desventajas**: mezcla contenido con presentación, difícil de mantener, no reutilizable.

Los estilos en línea deben reservarse para casos excepcionales: valores que cambian por interacción del usuario o correcciones puntuales que no justifican una clase nueva.

## Estilos embebidos (bloque `<style>`)

Se declaran dentro del `<head>` del documento:

```html
<head>
  <style>
    body { font-family: system-ui, sans-serif; line-height: 1.6; }
    .destacado { color: #0066cc; font-weight: 600; }
    .error { color: #cc0000; background: #ffeeee; padding: 0.5rem; border-radius: 4px; }
  </style>
</head>
```

**Ventajas**: separa estilos del contenido en el mismo archivo, sin dependencias externas.  
**Desventajas**: no se comparte entre páginas, aumenta el peso del documento.

Útil para páginas únicas, prototipos o estilos críticos que deben cargarse sin esperar una hoja externa (_critical CSS_).

## Estilos externos (archivo `.css`)

Se enlazan mediante `<link rel="stylesheet">`:

```html
<head>
  <link rel="stylesheet" href="css/estilos.css">
</head>
```

**Ventajas**: separación total de responsabilidades, caché del navegador, reutilización entre páginas, mantenibilidad.  
**Desventajas**: requiere una petición HTTP adicional.

Es el método recomendado para cualquier proyecto que conste de más de una página.

## Prioridad en la cascada

Cuando múltiples mecanismos definen la misma propiedad, el navegador aplica este orden (de menor a mayor prioridad):

1. Estilos de agente de usuario (navegador)
2. Estilos externos (`<link>`)
3. Estilos embebidos (`<style>`)
4. Estilos en línea (`style=""`)
5. `!important` (cualquier origen)

```html
<head>
  <style>
    p { color: green; } /* Embebido */
  </style>
  <link rel="stylesheet" href="externo.css"> <!-- Externo: p { color: blue; } -->
</head>
<body>
  <p style="color: red;">Este texto será rojo (inline gana)</p>
</body>
```

El atributo `style` proporciona la forma más directa de aplicar estilos, pero también la menos mantenible. En proyectos reales, el flujo de trabajo estándar es:

1. Escribir CSS en archivos externos.
2. Usar clases (`class`) para seleccionar elementos.
3. Reservar `style` para interacciones dinámicas desde JavaScript.

---

## Ejercicio: tres formas de aplicar estilos

Crea un documento HTML que demuestre los tres métodos de aplicación de estilos:

1. Un `<h1>` con estilo en línea (color rojo)
2. Un `<p>` con estilo embebido (clase `destacado` con fondo amarillo)
3. Un `<p>` con estilo externo (clase `externo` que defina un borde)

<details>
<summary><strong>Ver solución</strong></summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Métodos de estilo</title>

  <style>
    .destacado {
      background: #fff3cd;
      padding: 1rem;
      border-radius: 4px;
      font-weight: 500;
    }
  </style>

  <link rel="stylesheet" href="css/estilos.css">
</head>
<body>

  <h1 style="color: #cc0000;">Este título es rojo (inline)</h1>

  <p class="destacado">Este párrafo usa estilo embebido.</p>

  <p class="externo">Este párrafo toma sus estilos de un archivo CSS externo.</p>

</body>
</html>
```

</details>
