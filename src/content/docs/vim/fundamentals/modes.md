---
title: MODOS
module: vim
submodule: fundamentals/modes
---

Vim es un editor **modal**. A diferencia de los editores convencionales donde todo lo que tecleas se inserta en el documento, Vim divide la interacción en modos. Cada modo tiene una función específica y su propio conjunto de comandos.

## Normal Mode

Es el modo por defecto y donde pasas la mayor parte del tiempo. Desde aquí navegas, manipulas texto y combinas operadores con movimientos.

```vim
" Navegación básica
j          " Baja una línea
k          " Sube una línea
h          " Izquierda
l          " Derecha
w          " Palabra siguiente
b          " Palabra anterior

" Manipulación
dd         " Borra la línea actual
yy         " Copia la línea actual
p          " Pega después del cursor
u          " Deshace el último cambio
```

Desde Normal mode puedes saltar a cualquier otro modo, pero siempre vuelves aquí con `<Esc>`.

## Insert Mode

Es el modo de escritura. Cuando estás en Insert, Vim se comporta como un editor normal: cada tecla que presionas aparece en el documento.

```
Pulsar i → entrar en Insert → escribir texto → <Esc> → Normal
```

Formas de entrar desde Normal:

| Comando | Dónde empieza la inserción |
|---------|---------------------------|
| `i` | Antes del cursor |
| `a` | Después del cursor |
| `I` | Al inicio de la línea (primer no blanco) |
| `A` | Al final de la línea |
| `o` | Nueva línea debajo |
| `O` | Nueva línea encima |
| `s` | Borra el carácter bajo el cursor y entra |
| `S` | Borra la línea y entra |
| `gi` | En la última posición donde insertaste |
| `c{motion}` | Borra según el movimiento y entra |
| `C` | Borra hasta el final de la línea y entra |
| `cc` | Borra la línea y entra |

Atajos útiles en Insert mode:

| Comando | Acción |
|---------|--------|
| `Ctrl-w` | Borra la palabra anterior |
| `Ctrl-u` | Borra hasta el inicio de la línea |
| `Ctrl-o` | Ejecuta un comando de Normal y vuelve |
| `Ctrl-r {reg}` | Inserta el contenido de un registro |
| `Ctrl-t` / `Ctrl-d` | Indenta / dedenta una línea |
| `Ctrl-e` / `Ctrl-y` | Inserta el carácter de abajo/arriba |
| `Ctrl-p` / `Ctrl-n` | Autocompletado de palabras |

```vim
" Ctrl-o desde Insert: ejecuta un comando y vuelve
" Sin salir de Insert, puedes:
"   Ctrl-o zz  → centrar la pantalla
"   Ctrl-o o   → abrir línea debajo y seguir insertando (¡recursivo!)
"   Ctrl-o :w  → guardar sin salir de Insert
```

## Visual Mode

Permite seleccionar texto para operar sobre él. Es similar al "seleccionar con el ratón" pero desde el teclado.

Tres variantes desde Normal:

| Comando | Tipo de selección |
|---------|------------------|
| `v` | Por carácter (charwise) |
| `V` | Por línea completa (linewise) |
| `Ctrl-v` | Por bloque rectangular (blockwise) |

Una vez seleccionado, puedes aplicar operadores:

```vim
v{motion}   " Seleccionas con un movimiento
d           " Borra la selección
y           " Copia la selección
c           " Cambia la selección
>           " Indenta
~           " Alterna mayúsculas
u           " Minúsculas
U           " Mayúsculas
r{char}     " Reemplaza toda la selección con {char}
```

Atajos en Visual:

| Comando | Acción |
|---------|--------|
| `o` | Mueve el cursor al otro extremo de la selección |
| `O` | (Block) mueve a la otra esquina en diagonal |
| `gv` | Re-selecciona la última selección |
| `Ctrl-g` | Cambia entre Visual y Select mode |

## Select Mode

Poco usado. Similar a Visual pero cualquier carácter que teclees reemplaza la selección.

```
gh          " Entrar en Select mode desde Normal
Ctrl-g      " Alternar entre Visual y Select
```

En Select mode, si presionas una letra, esta reemplaza el texto seleccionado y vuelves a Insert. Es el modo que imita el comportamiento de un editor convencional.

## Operator-Pending Mode

Es un estado transitorio: has presionado un operador (como `d`, `c`, `y`) pero aún no has completado el movimiento. Vim espera el destino:

```
d           ← esperando un movimiento
c           ← esperando un movimiento 
y           ← esperando un movimiento
gU          ← esperando un movimiento
```

Mientras estás en este modo, puedes usar comandos especiales:

| Comando | Acción |
|---------|--------|
| `v` | Forzar operación charwise |
| `V` | Forzar operación linewise |
| `Ctrl-v` | Forzar operación blockwise |

## Command-Line Mode

Es el modo donde escribes comandos Ex (los que empiezan con `:`). También se usa para búsquedas (`/` y `?`).

```
:            ← entras con : desde Normal
/            ← entras con / para búsqueda hacia adelante
?            ← entras con ? para búsqueda hacia atrás
```

Atajos en Command-Line:

| Comando | Acción |
|---------|--------|
| `Ctrl-b` / `Ctrl-e` | Inicio / final de la línea |
| `Ctrl-w` | Borra palabra anterior |
| `Ctrl-u` | Borra toda la línea |
| `Ctrl-r {reg}` | Inserta registro |
| `Ctrl-d` | Lista completados disponibles |
| `Tab` | Autocompletar |
| `Ctrl-p` / `Ctrl-n` | Historial de comandos |
| `Ctrl-f` | Abre la ventana de historial (q:) |
| `Ctrl-c` / `Esc` | Cancela y vuelve a Normal |

## Ex Mode

Es como Command-Line pero persistente: todas las líneas que escribes se interpretan como comandos Ex.

```
gQ           " Entrar en Ex mode desde Normal
:visual      " Volver a Normal mode
```

Es un modo heredado del antiguo ed (editor de línea). Rara vez se usa hoy en día.

## Terminal Mode

Disponible en Neovim y Vim 8+. Cuando abres un terminal dentro de Vim, entras en Terminal mode.

```vim
:terminal    " Abre una terminal dividida
:tab term    " Terminal en nueva pestaña
```

En Terminal mode, todo se envía al proceso de la terminal. Para volver a Normal:

```
Ctrl-\ Ctrl-n    " Sale de Terminal a Normal mode
Ctrl-\ Ctrl-o    " Ejecuta un comando de Normal y vuelve
```

---

## Ejercicio: recorre los modos con texto real

Copia este código en Vim y realiza la secuencia paso a paso:

```python
def saludar(nombre):
    mensaje = "Hola, " + nombre
    return mensaje

usuarios = ["Ana", "Luis", "Sara"]
for u in usuarios:
    print(saludar(u))
```

1. **Normal → Insert → Normal**: Colócate sobre `mensaje` en la línea 2. Presiona `ciw`, escribe `saludo`, pulsa `<Esc>`. ¿Qué cambió?
2. **Normal → Visual → operación**: Colócate al inicio de `usuarios`. Presiona `V` (Visual line), luego `j` para bajar una línea, luego `d`. ¿Qué se borró?
3. **Normal → Visual Block**: Colócate sobre la primera `H` de `"Hola, "`. Presiona `<Ctrl-v>`, baja con `j` dos líneas, presiona `I` (mayúscula), escribe `# `, pulsa `<Esc>`. ¿Qué pasó?
4. **Normal → Command-Line**: Estando en Normal, presiona `:w` y `<Enter>`. ¿Qué ocurre? Luego escribe `:!python %` y `<Enter>`.
5. **Operator-Pending**: Estando en Normal, presiona `d` (sin soltar) y luego `}`. ¿Qué borró?

<details>
<summary><strong>Ver solución</strong></summary>

```
1. ciw (change inner word) borra "mensaje" y entra en Insert.
   Al escribir "saludo" y pulsar <Esc>, la línea queda:
   saludo = "Hola, " + nombre
   Se usó: Normal → Insert (vía c motion) → Normal.

2. V selecciona la línea completa de "usuarios".
   j extiende la selección a la línea siguiente (for u...).
   d borra ambas líneas. El cursor queda sobre "    print".

3. Ctrl-v inicia Visual Block. j selecciona 3 líneas.
   I (mayúscula) entra en Insert en modo bloque.
   "# " se inserta al inicio de cada línea seleccionada:
   # usuarios = ["Ana", "Luis", "Sara"]
   # for u in usuarios:
   #     print(saludar(u))
   Nota: con Ctrl-v I, solo ves el cambio en la primera línea
   hasta que pulsas <Esc>.

4. :w guarda el archivo. :!python % ejecuta el script con Python.
   La salida se muestra en la terminal y Vim dice
   "Press ENTER or type command to continue".

5. d (operador delete) + } (movimiento: hasta el siguiente párrafo)
   borra todo desde el cursor hasta el final del párrafo actual.
```

</details>
