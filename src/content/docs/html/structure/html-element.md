---
title: HTML
module: html
submodule: structure/html-element
---

El elemento `<html>` es la raíz de todo documento HTML. Envuelve todo el contenido de la página y es el primer elemento después del DOCTYPE. Ningún otro elemento está por encima de él en la jerarquía del DOM.

```html
<!DOCTYPE html>
<html lang="es">
  ...
</html>
```

## El atributo `lang`

El atributo más importante de `<html>` es `lang`. Define el idioma principal del documento y tiene implicaciones directas en:

- **Accesibilidad**: los lectores de pantalla activan la voz y el diccionario de pronunciación correctos.
- **SEO**: los motores de búsqueda identifican el público objetivo del contenido.
- **Navegadores**: el corrector ortográfico, el separador de sílabas y las reglas de hiphenación se ajustan al idioma.
- **Traducción automática**: las herramientas de traducción detectan el idioma base.

```html
<html lang="es">   <!-- Español -->
<html lang="en">   <!-- Inglés -->
<html lang="fr">   <!-- Francés -->
<html lang="de">   <!-- Alemán -->
<html lang="ja">   <!-- Japonés -->
<html lang="zh-CN"><!-- Chino simplificado -->
```

El valor debe ser un código de idioma válido según el estándar **BCP 47**. Puede incluir un subtag regional cuando sea necesario (`lang="pt-BR"` para portugués brasileño, `lang="en-US"` para inglés estadounidense).

## El atributo `dir`

Define la dirección del texto: `ltr` (left-to-right, por defecto) o `rtl` (right-to-left, para idiomas como árabe o hebreo).

```html
<html lang="ar" dir="rtl">
```

Aunque puede declararse en elementos individuales, establecerlo en `<html>` proporciona un valor por defecto para todo el documento.

## Consideraciones técnicas

- `<html>` no requiere atributos obligatorios, pero incluir `lang` es una buena práctica universal.
- Solo debe haber un elemento `<html>` por documento.
- El elemento `<html>` puede tener atributos de eventos globales (`onload`, `onerror`) aunque es más común asignarlos a `<body>` o `window`.
- Los navegadores insertan `<html>` implícitamente si el analizador lo encuentra ausente, pero confiar en ese comportamiento es una mala práctica.

## Atributos opcionales y prefijos

`<html>` puede incluir el atributo `xmlns` para compatibilidad con XHTML y el prefijo `manifest` (ahora obsoleto) para aplicaciones offline:

```html
<html xmlns="http://www.w3.org/1999/xhtml" lang="es">

<!-- Obsoleto: application cache ya no es parte del estándar -->
<html manifest="app.appcache">
```

En la práctica, la forma moderna y suficiente es:

```html
<!DOCTYPE html>
<html lang="es">
```

---

## Ejercicio: configuración regional correcta

Crea un documento HTML que represente una página bilingüe donde:

1. El idioma principal del documento sea inglés
2. Un párrafo específico esté en español usando el atributo `lang` correspondiente
3. El documento use dirección `ltr`

<details>
<summary><strong>Ver solución</strong></summary>

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bilingual page</title>
</head>
<body>

  <h1>Welcome to our site</h1>
  <p>This content is in English, the main language of the document.</p>

  <p lang="es">Bienvenido a nuestro sitio. Este párrafo está en español y los lectores de pantalla lo pronunciarán correctamente.</p>

</body>
</html>
```

</details>
