---
title: Conjuntos de caracteres
description: Charset y codificación.
module: lenguajes/html
submodule: general
order: 38
---

Al completar esta guía podrás:

- Configurar la codificación de caracteres en HTML
- Entender qué es UTF-8 y por qué usarlo
- Diferenciar entre ASCII, Latin-1 y UTF-8
- Solucionar problemas de caracteres mal mostrados

---

## Qué es charset

El charset (conjunto de caracteres) define cómo se representan los caracteres:

```html
<meta charset="UTF-8">
```

UTF-8 es la codificación recomendada para la web actual.

---

## UTF-8

UTF-8 puede representar cualquier carácter Unicode:

```html
<meta charset="UTF-8">
```

```html
<p>Caracteres en UTF-8: á é í ó ú ñ ü ¿ ¡</p>
<p>Emojis: 😊 👍 🚀</p>
<p>Símbolos: © ® € ∞</p>
<p>Chino: 你好</p>
<p>Árabe: مرحبا</p>
<p>Ruso: Привет</p>
```

---

## Sin UTF-8

Si falta el charset o se usa uno incorrecto:

```html
<!-- Sin charset: los caracteres especiales se ven mal -->
<html>
<head>
  <title>Página sin charset</title>
</head>
<body>
  <p>Español: áéíóúñ</p>
  <p>Emoji: 😊</p>
</body>
</html>
```

Resultado: `Ã¡Ã©Ã-Ã³ÃºÃ±` en lugar de `áéíóúñ`.

---

## ASCII

Primer estándar de codificación (1963):

```html
<!-- ASCII: solo 128 caracteres -->
<meta charset="US-ASCII">
```

Soporta: A-Z, a-z, 0-9, puntuación básica.
No soporta: acentos, ñ, emojis, símbolos.

---

## Latin-1 (ISO-8859-1)

Ampliación de ASCII para Europa Occidental:

```html
<!-- ISO-8859-1: soporta acentos europeos -->
<meta charset="ISO-8859-1">
```

Soporta: acentos, ñ, símbolos europeos.
No soporta: emojis, caracteres no latinos.

---

## Problemas comunes

```html
<!-- Problema: charset después de caracteres especiales -->
<head>
  <title>Página con acentos: áéíóú</title>
  <meta charset="UTF-8">
</head>

<!-- Solución: charset siempre primero en head -->
<head>
  <meta charset="UTF-8">
  <title>Página con acentos: áéíóú</title>
</head>
```

---

## Declaración en servidor

Además del meta tag, el servidor envía el charset en HTTP:

```
Content-Type: text/html; charset=UTF-8
```

Si hay conflicto entre el servidor y el meta, prevalece el del servidor.

---

## Verificar la codificación

```html
<!-- Cómo verificar el charset en el navegador -->
<!-- Chrome: Menú > Más herramientas > Codificación -->
<!-- Firefox: Menú > Codificación de texto -->
```

Si los caracteres se ven mal, verifica:
1. El meta charset está presente y es el primero en head
2. El archivo está guardado en UTF-8
3. El servidor envía el charset correcto

---

## Resumen

| Codificación | Caracteres | Soporta acentos | Soporta emojis |
|---|---|---|---|
| ASCII | 128 | No | No |
| Latin-1 (ISO-8859-1) | 256 | Sí (europeos) | No |
| UTF-8 | 1,112,064 | Sí | Sí |

---

## Ejercicio

Crea una página con charset ISO-8859-1 y observa que los emojis no se ven. Luego cambia a UTF-8 y verifica que funcionan correctamente.

**Instrucciones paso a paso:**

1. Crea `charset.html`
2. Primero usa `<meta charset="ISO-8859-1">`
3. Escribe texto con acentos y emojis
4. Cambia a `<meta charset="UTF-8">`
5. Observa la diferencia

<details>
<summary>Mostrar solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Cambia entre ISO-8859-1 y UTF-8 para ver la diferencia -->
  <meta charset="UTF-8">
  <title>Conjuntos de caracteres</title>
</head>
<body>
  <h1>Codificación de caracteres</h1>

  <h2>Español</h2>
  <p>á é í ó ú ñ ü ¿ ¡</p>

  <h2>Emojis</h2>
  <p>😊 👍 🚀 ❤ ✅</p>

  <h2>Símbolos</h2>
  <p>© ® € ∞ • ★</p>

  <h2>Otros idiomas</h2>
  <p>Chino: 你好</p>
  <p>Ruso: Привет</p>
  <p>Japonés: こんにちは</p>

  <p style="margin-top: 20px; color: #666;">
    <strong>Nota:</strong> Con ISO-8859-1 los emojis y caracteres
    no latinos se muestran incorrectamente. Con UTF-8 se ven bien.
  </p>
</body>
</html>
```

</details>
