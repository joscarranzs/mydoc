---
title: AYUDA Y DOCUMENTACIÓN
module: vim
submodule: fundamentals/help
---

Vim y Neovim incluyen un sistema de documentación extenso y navegable. Aprender a usarlo es más importante que memorizar comandos: la ayuda siempre está a un `:help` de distancia.

## El comando `:help`

```vim
:help            " Abre la ventana de ayuda principal
:help {topic}    " Abre la ayuda sobre un tema específico
:help usr_02.txt " Abre el manual de usuario, sección 2
:help index      " Lista completa de comandos (vimindex)
```

La ayuda se abre en una ventana dividida. Puedes navegarla como cualquier buffer:

```vim
Ctrl-w w         " Saltar entre ventanas
Ctrl-]           " Seguir un tag (enlace de ayuda)
Ctrl-o / Ctrl-i  " Volver / avanzar en el historial de tags
:q               " Cerrar la ventana de ayuda
```

## Temas de ayuda comunes

```vim
:help i_CTRL-R   " Ayuda sobre Ctrl-R en Insert mode (i_ = insert)
:help v_d        " Ayuda sobre d en Visual mode (v_ = visual)
:help :w         " Ayuda sobre el comando :w
:help 'number'   " Ayuda sobre la opción 'number'
:help function() " Ayuda sobre la función function()
:help -t         " Ayuda sobre flag de línea de comandos
:help 'list      " Ayuda sobre la opción list (con comillas simples)
:help gui        " Ayuda sobre interfaz gráfica
```

Los prefijos de los tags indican el contexto:

| Prefijo | Contexto | Ejemplo |
|---------|----------|---------|
| `i_` | Insert mode | `:help i_CTRL-R` |
| `v_` | Visual mode | `:help v_d` |
| `c_` | Command-Line mode | `:help c_CTRL-D` |
| `t_` | Terminal mode | `:help t_CTRL-\_CTRL-N` |
| `:` | Comando Ex | `:help :write` |
| `'` | Opción | `:help 'tabstop'` |
| `()` | Función | `:help strftime()` |
| `-` | Flag de CLI | `:help -o` |
| `*` | Evento de autocommand | `:help BufWritePre` |

## `:helpgrep`

Busca texto en toda la documentación. Abre el resultado en la quickfix list.

```vim
:helpgrep pattern
:helpgrep ex mode
:helpgrep text objects
:copen           " Abrir quickfix list
:cn / :cp       " Siguiente / anterior resultado
```

## Manual de usuario

La documentación de Vim incluye un tutorial estructurado: el **User Manual** (`usr_*.txt`). Son 45 secciones que cubren desde lo básico hasta temas avanzados:

```vim
:help usr_toc.txt   " Tabla de contenidos del manual
:help usr_01.txt    " Introducción
:help usr_02.txt    " Primeros pasos
:help usr_03.txt    " Movimiento
:help usr_04.txt    " Cambios pequeños
:help usr_05.txt    " Configuración
:help usr_06.txt    " Sintaxis highlighting
:help usr_07.txt    " Editar múltiples archivos
:help usr_20.txt    " Tipos de letra y colores
:help usr_40.txt    " Nuevos comandos
:help usr_41.txt    " Vimscript
```

## vimindex

Es la lista completa de todos los comandos de Vim/Neovim, organizados por modo:

```vim
:help index        " Abre el índice completo
```

Contiene:

- **insert-index** — comandos de Insert mode
- **normal-index** — comandos de Normal mode
- **visual-index** — comandos de Visual mode
- **ex-edit-index** — edición de línea de comandos
- **terminal-mode-index** — comandos de Terminal mode
- **ex-cmd-index** — comandos Ex (`:`)

## `:checkhealth` (Neovim)

Neovim incluye un sistema de diagnóstico que verifica el estado del editor, plugins, LSP y más:

```vim
:checkhealth            " Diagnóstico completo
:checkhealth lsp        " Solo LSP
:checkhealth telescope  " Solo Telescope
```

## `K` — Documentación contextual

Con el cursor sobre una palabra, presiona `K` para buscar documentación. Usa el programa definido en `keywordprg`:

```vim
" Por defecto: :help
" cursor sobre "word" → K abre :help word
" cursor sobre "strftime" → K abre :help strftime()
```

Puedes cambiar `keywordprg` para que use `man`, `pydoc` o `ri`:

```vim
:set keywordprg=man    " K abre el man de la palabra
:set keywordprg=pydoc  " K abre pydoc (Python)
:set keywordprg=ri     " K abre ri (Ruby)
```

## Tips de navegación en la ayuda

```vim
:help help.txt          " Cómo usar la ayuda
:help help-summary      " Resumen de convenciones
:help option-list       " Lista completa de opciones
:help function-list     " Lista de funciones Vimscript
:help feature-list      " Lista de características compiladas
```

La ayuda de Vim usa **tags** que se comportan como hipervínculos:

- `Ctrl-]` sobre una palabra entre `|` — saltar al tag
- `Ctrl-t` o `Ctrl-o` — volver atrás
- `:tag {tema}` — saltar directamente a un tag

---

## Ejercicio: encuentra la respuesta usando la ayuda

Abre Vim y, usando solo `:help`, responde las siguientes preguntas en el orden indicado. No vale buscar en Google ni mirar documentación externa.

1. Quieres saber cómo funciona `Ctrl-R` en Insert mode (insertar registros). Abre la ayuda con `:help i_CTRL-R`. ¿Qué hace `Ctrl-R Ctrl-W` dentro de Insert mode?
2. Usa `:helpgrep fold` y navega con `:cn` hasta encontrar qué opción controla el nivel mínimo de plegado.
3. Abre `:help usr_03.txt`. ¿Cuántas secciones principales tiene el capítulo de movimiento?
4. Coloca el cursor sobre la palabra `|i_CTRL-R|` y presiona `Ctrl-]`. ¿A dónde te llevó? Presiona `Ctrl-o` para volver.
5. Usa `K` (con el cursor sobre cualquier palabra como `'tabstop'`) para abrir la ayuda contextual.

<details>
<summary><strong>Ver solución</strong></summary>

```vim
:help i_CTRL-R
" Ctrl-R Ctrl-W inserta la palabra bajo el cursor en el
" lugar donde estás insertando.

:helpgrep foldlevel
:cn
" La opción foldlevel o foldlevelstart controla el nivel
" de plegado al abrir un archivo.

:help usr_03.txt
" El capítulo 03 cubre: 3.1 Word motion, 3.2 Moving to
" lines, 3.3 Parenthesis, 3.4 Other motions.

Ctrl-] sobre |i_CTRL-R| → salta al tag de ayuda de Ctrl-R
Ctrl-o → vuelve a la posición anterior en el historial.

K sobre 'tabstop' → abre :help 'tabstop'
" Muestra descripción, valores por defecto y ejemplos.
```

</details>
