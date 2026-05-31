---
title: CONFIGURACIÓN MÍNIMA
module: vim
submodule: fundamentals/minimal-config
---

Vim y Neovim se configuran mediante un archivo que se carga al iniciar. En Vim es `~/.vimrc`; en Neovim es `~/.config/nvim/init.lua` (o `init.vim`). Esta guía cubre una configuración mínima funcional para empezar.

## Dónde va el archivo

### Vim

```bash
~/.vimrc          # Configuración de Vim
```

### Neovim

```bash
~/.config/nvim/init.lua    # Configuración en Lua (recomendado)
~/.config/nvim/init.vim    # Configuración en Vimscript
```

Puedes crear el directorio si no existe:

```bash
mkdir -p ~/.config/nvim
nvim ~/.config/nvim/init.lua
```

## Configuración mínima en Lua (Neovim)

Guarda esto en `~/.config/nvim/init.lua`:

```lua
-- Opciones básicas
vim.opt.number = true           -- Mostrar números de línea
vim.opt.relativenumber = true   -- Números relativos
vim.opt.tabstop = 4             -- Un tab = 4 espacios
vim.opt.shiftwidth = 4          -- Indentación de 4
vim.opt.expandtab = true        -- Tabs → espacios
vim.opt.smartindent = true      -- Indentación inteligente
vim.opt.wrap = false            -- No cortar líneas largas
vim.opt.ignorecase = true       -- Búsqueda sin distinguir mayúsculas
vim.opt.smartcase = true        -- ... a menos que uses mayúsculas
vim.opt.hlsearch = true         -- Resaltar búsquedas
vim.opt.incsearch = true        -- Búsqueda incremental
vim.opt.cursorline = true       -- Resaltar línea del cursor
vim.opt.mouse = 'a'             -- Activar ratón en todos los modos
vim.opt.termguicolors = true    -- Colores de 24 bits
vim.opt.splitbelow = true       -- Split horizontal abajo
vim.opt.splitright = true       -- Split vertical derecha
vim.opt.clipboard = 'unnamedplus' -- Portapapeles del sistema
vim.opt.swapfile = false        -- Sin archivos .swp
vim.opt.undofile = true         -- Historial persistente
vim.opt.updatetime = 300        -- Actualización rápida (ms)

-- Atajos básicos
vim.keymap.set('n', '<leader>w', '<cmd>w<CR>', { desc = 'Guardar' })
vim.keymap.set('n', '<leader>q', '<cmd>q<CR>', { desc = 'Cerrar' })
vim.keymap.set('n', '<leader>h', '<cmd>nohlsearch<CR>', { desc = 'Quitar resaltado' })
vim.keymap.set('n', '<Esc>', '<cmd>nohlsearch<CR>', { desc = 'Quitar resaltado con Esc' })

-- Leader key (espacio)
vim.g.mapleader = ' '
```

## Configuración mínima en Vimscript (Vim/Neovim)

Guarda esto en `~/.vimrc` (Vim) o `~/.config/nvim/init.vim` (Neovim):

```vim
" Opciones básicas
set number
set relativenumber
set tabstop=4
set shiftwidth=4
set expandtab
set smartindent
set nowrap
set ignorecase
set smartcase
set hlsearch
set incsearch
set cursorline
set mouse=a
set termguicolors
set splitbelow
set splitright
set clipboard=unnamedplus
set noswapfile
set undofile
set updatetime=300

" Atajos básicos
let mapleader = " "
nnoremap <leader>w :w<CR>
nnoremap <leader>q :q<CR>
nnoremap <leader>h :nohlsearch<CR>
nnoremap <Esc> :nohlsearch<CR>
```

## Explicación de cada opción

| Opción | Efecto |
|--------|--------|
| `number` | Muestra números de línea |
| `relativenumber` | Muestra números relativos (útiles con `5j`, `3dd`) |
| `tabstop=4` | Un carácter tab se muestra como 4 espacios |
| `shiftwidth=4` | Indentación de 4 espacios |
| `expandtab` | Convierte tabs en espacios |
| `smartindent` | Indenta automáticamente al crear nuevas líneas |
| `ignorecase` | Búsqueda sin distinguir mayúsculas/minúsculas |
| `smartcase` | Si escribes mayúscula, distingue; si no, ignora |
| `hlsearch` | Resalta todas las coincidencias de la búsqueda |
| `incsearch` | Muestra coincidencias mientras escribes el patrón |
| `cursorline` | Resalta la línea donde está el cursor |
| `mouse=a` | Permite usar el ratón en todos los modos |
| `termguicolors` | Activa colores verdadero (24-bit) |
| `splitbelow` | Los splits horizontales se abren abajo |
| `splitright` | Los splits verticales se abren a la derecha |
| `clipboard=unnamedplus` | Comparte el portapapeles con el sistema |
| `undofile` | Guarda el historial de cambios entre sesiones |
| `updatetime=300` | Actualiza cada 300ms (para LSP, git gutter) |

## La tecla Leader

La tecla `<leader>` es un prefijo para atajos personalizados. Por convención se usa la barra espaciadora:

```lua
vim.g.mapleader = ' '
```

Con la configuración anterior, puedes hacer:

```
<Space>w    → Guardar
<Space>q    → Cerrar ventana
<Space>h    → Quitar resaltado de búsqueda
```

## Temas (colorschemes)

Los temas más populares para Neovim:

```lua
-- Instalar con :Lazy y poner en init.lua
vim.cmd.colorscheme('catppuccin')
vim.cmd.colorscheme('tokyonight')
vim.cmd.colorscheme('gruvbox')
vim.cmd.colorscheme('kanagawa')
```

Para ver el tema actual:

```vim
:colorscheme        " Muestra el nombre
:colorscheme {nom}  " Cambia temporalmente
```

## Recargar la configuración

```vim
:source $MYVIMRC     " Recargar init.vim o .vimrc (Vimscript)
:luafile %          " Ejecutar init.lua como Lua (Neovim)
:edit $MYVIMRC      " Abrir el archivo de configuración
```

---

## Ejercicio: configura y prueba en vivo

Crea o modifica tu `init.lua` (Neovim) o `.vimrc` (Vim) con estas opciones y **prueba cada una inmediatamente** después de añadirla:

```lua
-- Añade esto a tu init.lua de a una opción por vez
vim.opt.number = true
vim.opt.relativenumber = true
vim.opt.tabstop = 2
vim.opt.shiftwidth = 2
vim.opt.expandtab = true
vim.opt.incsearch = true
vim.opt.hlsearch = true
vim.opt.clipboard = 'unnamedplus'
vim.opt.swapfile = false
vim.opt.undofile = true
vim.g.mapleader = ' '
vim.keymap.set('n', '<leader>w', '<cmd>w<CR>')
vim.keymap.set('n', '<leader>q', '<cmd>q<CR>')
vim.keymap.set('n', '<leader>h', '<cmd>nohlsearch<CR>')
```

Después de cada opción que agregues, **recarga la configuración** y **prueba**:

1. Añade `number` y `relativenumber`. Recarga con `:luafile %`. ¿Cómo cambió la numeración?
2. Añade `tabstop=2`, `shiftwidth=2`, `expandtab`. Recarga. Presiona `i`, luego `<Tab>` unas veces. ¿Cuántos espacios inserta?
3. Añade `incsearch` y `hlsearch`. Recarga. Escribe `/vim` y pulsa `<Enter>`. ¿Qué ves?
4. Añade `clipboard='unnamedplus'`. Recarga. Copia una línea con `yy`, luego pega fuera de Vim con `Ctrl-v`. ¿Funciona?
5. Añade `<leader>w`. Recarga. Presiona `<Space>w`. ¿Qué ocurre?
6. Añade `<leader>h`. Recarga. Escribe `/algo` y pulsa `<Enter>`. Luego presiona `<Space>h`. ¿Qué cambió?

<details>
<summary><strong>Ver solución</strong></summary>

```
1. Al recargar aparecen números absolutos a la izquierda
   y números relativos a la derecha (# de líneas hacia arriba/abajo).
   Prueba: 5j baja 5 líneas porque ves la distancia.

2. <Tab> inserta 2 espacios en lugar de un carácter tab real.
   El cursor avanza 2 posiciones.

3. Al escribir /vim, Vim resalta todas las ocurrencias de "vim"
   mientras escribes (incsearch) y las mantiene resaltadas (hlsearch).
   Usa :nohlsearch o <Space>h para quitar el resaltado.

4. Con clipboard=unnamedplus, yy copia al portapapeles del sistema
   (+ registros). Ctrl-v (o Cmd-v) fuera de Vim pega la línea.

5. <Space>w ejecuta :w (guardar). Ves "escrito" en la línea de estado.

6. <Space>h ejecuta :nohlsearch. El resaltado amarillo de la búsqueda
   desaparece hasta la próxima búsqueda.
```

</details>
