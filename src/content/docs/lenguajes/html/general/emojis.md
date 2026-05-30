---
title: Emojis
description: Emojis en HTML.
module: lenguajes/html
submodule: general
order: 37
---

Al completar esta guía podrás:

- Insertar emojis directamente en HTML
- Usar entidades hexadecimales para emojis
- Usar entidades decimales para emojis
- Ajustar el tamaño de emojis con CSS

---

## Emojis directos

Los emojis se pueden copiar y pegar directamente en el código HTML:

```html
<p>Me gusta programar en HTML 😊</p>
<p>Completado ✅ | Pendiente ❌</p>
<p>Contacto: 📧 correo@ejemplo.com 📞 123-456-789</p>
```

Siempre que el archivo esté guardado en UTF-8.

---

## Emojis con entidades hexadecimales

Formato: `&#xHEX;`

```html
<p>&#x1F600; — Cara sonriente 😀</p>
<p>&#x1F44D; — Pulgar arriba 👍</p>
<p>&#x2764;  — Corazón ❤</p>
<p>&#x1F4BB; — Computadora 💻</p>
<p>&#x1F4AC; — Globo de diálogo 💬</p>
```

---

## Emojis con entidades decimales

Formato: `&#DECIMAL;`

```html
<p>&#128512; — Cara sonriente 😀</p>
<p>&#128077; — Pulgar arriba 👍</p>
<p>&#128187; — Computadora 💻</p>
<p>&#128640; — Cohete 🚀</p>
<p>&#127758; — Tierra 🌍</p>
```

---

## Tamaño de emojis

Los emojis se comportan como texto y se pueden dimensionar con CSS:

```html
<p style="font-size: 24px;">Emoji normal: 😊</p>
<p style="font-size: 48px;">Emoji grande: 😊</p>
<p style="font-size: 72px;">Emoji enorme: 😊</p>
```

---

## Emojis en títulos y botones

```html
<h1>🎉 Bienvenido a mi sitio</h1>

<button type="button" style="font-size: 20px;">
  📥 Descargar
</button>

<button type="button" style="font-size: 20px;">
  🔔 Notificaciones
</button>
```

---

## Emojis comunes

| Emoji | Hex | Decimal | Significado |
|---|---|---|---|
| 😀 | `&#x1F600;` | `&#128512;` | Cara sonriente |
| 👍 | `&#x1F44D;` | `&#128077;` | Pulgar arriba |
| ❤ | `&#x2764;` | `&#10084;` | Corazón |
| ✅ | `&#x2705;` | `&#9989;` | Marca verde |
| ❌ | `&#x274C;` | `&#10060;` | Cruz roja |
| ⭐ | `&#x2B50;` | `&#11088;` | Estrella |
| 🔥 | `&#x1F525;` | `&#128293;` | Fuego |
| 💡 | `&#x1F4A1;` | `&#128161;` | Bombilla |
| 📚 | `&#x1F4DA;` | `&#128218;` | Libros |
| 🚀 | `&#x1F680;` | `&#128640;` | Cohete |

---

## Emojis decorativos vs semánticos

```html
<!-- Decorativo: oculto para lectores de pantalla -->
<p><span role="presentation" aria-hidden="true">😊</span> Todo bien</p>

<!-- Semántico: el emoji es parte del contenido -->
<p>El resultado es correcto ✅</p>

<!-- Con texto alternativo -->
<p role="img" aria-label="Cara sonriente">😊</p>
```

---

## Resumen

| Método | Ejemplo | Resultado |
|---|---|---|
| Directo | `😊` | 😊 |
| Hex | `&#x1F600;` | 😊 |
| Decimal | `&#128512;` | 😊 |

---

## Ejercicio

Crea una lista de tareas con emojis: completada ✅, pendiente ⏳, cancelada ❌. Agrega un título con emoji y un botón con emoji.

**Instrucciones paso a paso:**

1. Crea `emojis.html`
2. Usa emojis directos en el título
3. Crea una lista con emojis de estado
4. Agrega un botón con emoji

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Emojis en HTML</title>
  <style>
    body { font-family: Arial, sans-serif; }
    .tarea { margin: 8px 0; font-size: 18px; }
    .completada { color: #28a745; }
    .pendiente { color: #ffc107; }
    .cancelada { color: #dc3545; }
    button {
      font-size: 18px;
      padding: 10px 24px;
      border: none;
      border-radius: 4px;
      background: #1A73E8;
      color: white;
      cursor: pointer;
      margin-top: 16px;
    }
  </style>
</head>
<body>
  <h1>📋 Lista de tareas</h1>

  <div class="tarea completada">✅ Comprar víveres</div>
  <div class="tarea completada">✅ Hacer ejercicio</div>
  <div class="tarea pendiente">⏳ Leer capítulo 5</div>
  <div class="tarea pendiente">⏳ Escribir informe</div>
  <div class="tarea cancelada">❌ Reunión de las 3pm</div>

  <button type="button" onclick="alert('¡Tarea agregada! 📝')">
    ➕ Agregar tarea
  </button>
</body>
</html>
```

</details>
