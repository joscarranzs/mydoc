---
title: PRIMEROS PASOS
module: vim
submodule: fundamentals/getting-started
---

Antes de escribir o editar, necesitas saber cómo abrir, navegar y salir de Vim. Esta guía cubre lo mínimo indispensable para no quedarte atascado.

## Abrir Vim

```bash
vim              # Abre Vim con un buffer vacío
vim archivo.txt  # Abre archivo.txt
vim *.js         # Abre todos los .js del directorio
vim +42 main.c   # Abre main.c y salta a la línea 42
vim +/main main.c  # Abre main.c y salta a la primera ocurrencia de "main"
vim -O archivo1.js archivo2.js  # Abre ambos en split vertical
```

## Salir de Vim

Esta es la primera habilidad que debes dominar:

```vim
:q              " Cerrar ventana actual
:q!             " Cerrar sin guardar (forzar)
:wq             " Guardar y cerrar
ZZ              " Guardar y cerrar (desde Normal)
:x              " Guardar y cerrar (solo si hay cambios)
ZQ              " Cerrar sin guardar (desde Normal)
:qa             " Cerrar todas las ventanas
:wqa            " Guardar todas y cerrar
:cq             " Salir con código de error (útil para git)
```

Si estás atascado y no sabes cómo salir:

```vim
<Esc>           " Asegurarte de estar en Normal
:q!             " Salir sin guardar
```

## Guardar archivos

```vim
:w              " Guardar (write)
:w nuevo.txt    " Guardar como (save as)
:w !sudo tee %  " Guardar como root (cuando olvidaste sudo)
:saveas nuevo.txt  " Guardar como y abrir el nuevo archivo
:up             " Guardar solo si hay cambios (update)
```

## Navegación básica mínima

Con estas teclas puedes moverte por cualquier archivo:

```vim
j              " Abajo
k              " Arriba
h              " Izquierda
l              " Derecha
gg             " Ir al inicio del archivo
G              " Ir al final del archivo
:n            " Ir a la línea n (ej: :42 → línea 42)
Ctrl-f         " Página siguiente
Ctrl-b         " Página anterior
```

## Edición básica mínima

```vim
i              " Entrar en Insert mode (antes del cursor)
a              " Entrar en Insert mode (después del cursor)
o              " Nueva línea debajo y entrar en Insert
<Esc>          " Volver a Normal mode
x              " Borrar carácter bajo el cursor
dd             " Borrar línea actual
yy             " Copiar línea actual
p              " Pegar después del cursor
u              " Deshacer (undo)
Ctrl-r         " Rehacer (redo)
```

## Tu primera sesión

Abre Vim y escribe un archivo paso a paso:

```bash
vim notas.txt
```

Estando dentro:

1. Presiona `i` para entrar en Insert mode
2. Escribe: `Mi primera sesión en Vim`
3. Presiona `<Esc>` para volver a Normal
4. Presiona `:wq` y `<Enter>` para guardar y salir

Comprueba que el archivo se creó:

```bash
cat notas.txt
```

## La tecla más importante: `<Esc>`

Si en cualquier momento no sabes en qué modo estás, presiona `<Esc>` hasta estar seguro de estar en Normal mode. Vim indica el modo actual en la esquina inferior izquierda:

```
-- INSERT --        → Insert mode
-- VISUAL --        → Visual mode
-- SELECT --        → Select mode
-- TERMINAL --      → Terminal mode
                    → Normal mode (sin indicador)
```

## Archivos múltiples por primera vez

```bash
vim a.txt b.txt
:ls              " Listar buffers
:b1              " Ir al buffer 1
:b2              " Ir al buffer 2
:bn              " Buffer siguiente
:bp              " Buffer anterior
:bd              " Cerrar buffer actual
```

---

## Ejercicio: abre, edita, guarda y repite

Copia este texto y pégalo en un archivo nuevo (`vim ejercicio.txt`, luego `"+p`):

```
Linea uno
linea dos
linea tres
Linea cuatro
linea CINCO
linea seis
```

Ahora realiza la siguiente secuencia de edición **sin usar el ratón**:

1. Colócate en la primera línea y presiona `A`. Añade " modificada" al final de la línea. Pulsa `<Esc>`.
2. Colócate sobre "tres". Presiona `dd`. ¿Qué línea se borró?
3. Presiona `p`. ¿Dónde apareció la línea borrada?
4. Colócate sobre "cinco". Presiona `gUiw`. ¿Qué cambió?
5. Presiona `:w` y `<Enter>` para guardar.
6. Presiona `:!cat %` y `<Enter>`. Muestra el contenido.
7. Presiona `:q` y `<Enter>` para salir.

<details>
<summary><strong>Ver solución</strong></summary>

```
1. A va al final de la línea y entra en Insert.
   Al escribir " modificada" y pulsar <Esc>, la línea queda:
   "Linea uno modificada"

2. dd borra la línea completa donde está el cursor:
   "linea tres"

3. p pega el contenido del registro (la línea borrada)
   debajo de la línea actual. Aparece después de "linea cuatro".
   La línea se movió, no se duplicó: la cortaste con dd y pegaste con p.

4. gUiw (GU uppercase + iw inner word) convierte "cinco" en "CINCO".
   El resultado final del archivo es:
   Linea uno modificada
   linea dos
   Linea cuatro
   linea tres
   linea CINCO
   linea seis

5. :w guarda los cambios en disco.

6. :!cat % ejecuta el comando externo cat sobre el archivo actual (%).
   Muestra el contenido en la terminal.

7. :q cierra la ventana.
```

</details>
