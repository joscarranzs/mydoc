---
title: FILOSOFÍA
module: vim
submodule: fundamentals/philosophy
---

Vim no es un editor de texto convencional. Su diseño parte de una premisa radical: **el teclado es más rápido que el ratón**, y la edición de texto debería ser una extensión del pensamiento, no una interrupción constante.

## Modal Editing

La mayoría de los editores operan en un solo modo: lo que tecleas aparece en el documento. Vim divide la edición en **modos** con responsabilidades distintas:

| Modo | Propósito |
|------|-----------|
| **Normal** | Navegar, manipular texto, ejecutar comandos |
| **Insert** | Escribir texto (como un editor normal) |
| **Visual** | Seleccionar texto |
| **Command-Line** | Ejecutar comandos Ex (`:w`, `:q`, `:s`) |

La clave está en que pasas la mayor parte del tiempo en **Normal mode**, no en Insert. Cada modo tiene su propio conjunto de comandos y solo deberías estar en Insert cuando realmente estés escribiendo contenido nuevo.

```vim
" Flujo típico en una sesión de Vim:
" 1. Navegas en Normal mode (j/k/h/l, w, b, gg, G)
" 2. Actúas sobre el texto (d, c, y, >)
" 3. Entras a Insert solo para escribir (i, a, o)
" 4. Vuelves a Normal con <Esc>
" 5. Repites
```

## Operadores + Movimientos

Vim separa la **acción** (operador) del **destino** (movimiento). Esta composición es la base de la eficiencia:

```vim
d    w        " Delete + word        → borra una palabra
c    $        " Change + end of line → cambia hasta el final
y    t(       " Yank + till '('      → copia hasta el paréntesis
>    ap       " Indent + a paragraph → indentar un párrafo
gU   iw       " Uppercase + inner word → poner en mayúsculas una palabra
```

Cada operador puede combinarse con cualquier movimiento, lo que genera cientos de comandos sin memorizar casos especiales.

### Operadores principales

| Operador | Acción |
|----------|--------|
| `d` | Delete (borrar) |
| `c` | Change (borrar e insertar) |
| `y` | Yank (copiar) |
| `>` | Indentar a la derecha |
| `<` | Indentar a la izquierda |
| `=` | Auto-indentar |
| `gq` | Formatear texto |
| `gU` | Convertir a mayúsculas |
| `gu` | Convertir a minúsculas |
| `g~` | Alternar mayúsculas/minúsculas |
| `!` | Filtrar con comando externo |

### Movimientos principales

| Movimiento | Destino |
|------------|---------|
| `w` / `b` | Palabra siguiente / anterior |
| `e` / `ge` | Final de palabra siguiente / anterior |
| `0` / `$` | Inicio / final de línea |
| `^` / `g_` | Primer / último carácter no blanco |
| `gg` / `G` | Inicio / final del archivo |
| `%` | Paréntesis/llave coincidente |
| `(` / `)` | Oración anterior / siguiente |
| `{` / `}` | Párrafo anterior / siguiente |
| `/patrón` | Siguiente coincidencia de patrón |
| `?patrón` | Anterior coincidencia de patrón |
| `n` / `N` | Repetir búsqueda |

## Counts (prefijos numéricos)

Casi cualquier comando en Normal mode acepta un número como prefijo para repetirlo:

```vim
3j        " Baja 3 líneas
5w        " Avanza 5 palabras
2dd       " Borra 2 líneas
4yy       " Copia 4 líneas
10<Esc>   " Espera: esto no funciona, los counts aplican a motions/operadores
```

Los counts se combinan con la composición operador+movimiento:

```vim
d3w       " Borra 3 palabras
c2j       " Cambia la línea actual y 2 más abajo (3 líneas)
y5}       " Copia 5 párrafos hacia adelante
>3j       " Indenta la línea actual y 3 más abajo
```

## Composición de comandos

La verdadera potencia de Vim surge de combinar estos conceptos en una gramática sencilla:

```
[count]  operador  [count]  movimiento
   │        │         │        │
   3        d         2        w    → "borra 2 palabras, 3 veces"
```

O con texto-objetos (que veremos más adelante):

```
[count]  operador  [count]  texto-objeto
   │        │         │        │
   2        c         1        ip   → "cambia 1 párrafo interior, 2 veces"
```

Esta gramática reducida —apenas una docena de operadores y una veintena de movimientos— genera cientos de comandos sin necesidad de memorización. No aprendes combinaciones de teclas: aprendes un **vocabulario**.

---

## Ejercicio: opera sobre este texto

Copia este bloque en Vim (pégalo con `:r !cat` o desde tu portapapeles con `"+p`) y realiza las operaciones indicadas:

```
Esta es la primera línea del ejercicio práctico.
Vim separa acción y destino: operador más movimiento.
Cada comando combina un verbo y un objeto.
Este párrafo servirá para probar la composición.
```

1. Coloca el cursor al inicio de la tercera línea. Presiona `d2w`. ¿Qué ocurre?
2. Coloca el cursor sobre "Vim" en la segunda línea. Presiona `c3w`. Escribe "Neovim" y pulsa `<Esc>`. Luego presiona `.` tres veces. ¿Qué pasó en cada repetición?
3. Colócate en la primera línea. Presiona `yyp`. ¿Qué hace?
4. Colócate en cualquier línea. Presiona `3dd`. ¿Qué se borra?

<details>
<summary><strong>Ver solución</strong></summary>

```
1. d2w sobre la tercera línea: borra "Cada comando" (2 palabras desde el cursor).
   El cursor queda sobre la "c" de "combina".
   Análisis: d (delete) + 2 (count) + w (palabra)

2. c3w cambia "Vim separa acción" por "Neovim".
   Luego presionar `.` repite el último cambio completo.
   Como el último cambio fue "c3w Neovim", cada `.` reemplaza
   las siguientes 3 palabras por "Neovim".
   Tras 3 repeticiones, las 3 palabras siguientes se convierten en "Neovim".

3. yy (copiar línea) + p (pegar debajo) duplica la primera línea al final.

4. 3dd borra 3 líneas completas desde la posición actual.
```

</details>
