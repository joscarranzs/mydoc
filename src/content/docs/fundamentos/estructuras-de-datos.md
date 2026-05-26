---
title: "Estructuras de datos"
module: fundamentos
submodule: estructuras-de-datos
order: 8
---
# Estructuras de datos

## ¿Qué son las estructuras de datos?

Las **estructuras de datos** son formas especializadas de organizar y almacenar información en una computadora para poder utilizarla de manera eficiente. Cada estructura presenta ventajas y desventajas según la operación que se desee realizar: algunas son rápidas para buscar, otras para insertar, otras para acceder por posición.

Puede entenderse mediante una analogía con una caja de herramientas: si se colocan todos los elementos sueltos en una caja, encontrar el destornillador adecuado requiere tiempo. Si se utiliza un organizador con separadores, se localiza al instante. Las estructuras de datos funcionan como esos organizadores: cada una está diseñada para un tipo de uso particular.

Las estructuras fundamentales que se presentan a continuación son: **arrays**, **matrices**, **listas**, **mapas**, **pilas** y **colas**.

## Arrays (vectores unidimensionales)

Un **array** es una colección ordenada de elementos del mismo tipo, almacenados en posiciones contiguas de memoria. Cada elemento se accede mediante un **índice** numérico que comienza en 0.

```
     +----+----+----+----+----+
     | 10 | 20 | 30 | 40 | 50 |
     +----+----+----+----+----+
indice: 0    1    2    3    4
```

```
numeros = [10, 20, 30, 40, 50]

numeros[0]   // 10
numeros[3]   // 40
numeros[1] = 25   // modifica el segundo elemento
```

### Características

- **Acceso directo**: cualquier posición se alcanza de forma instantánea, independientemente del tamaño.
- **Tamaño fijo**: en muchos lenguajes, una vez creado, no es posible añadir o eliminar elementos.
- **Homogéneo**: todos los elementos pertenecen al mismo tipo.

### Operaciones

| Operación | Sintaxis | Velocidad |
|---|---|---|
| Acceder por índice | `arr[i]` | Instantánea |
| Modificar por índice | `arr[i] = x` | Instantánea |
| Recorrer completo | Bucle `para` | Proporcional al tamaño |
| Buscar un valor | Recorrer hasta encontrar | Proporcional al tamaño |

### Cuándo utilizar un array

- Se conoce de antemano la cantidad de elementos.
- Se requiere acceso rápido por posición.
- Los datos son homogéneos.

## Matrices (vectores bidimensionales)

Una **matriz** es un array de arrays. Puede visualizarse como una tabla con filas y columnas. Cada elemento se accede mediante dos índices: `[fila][columna]`.

```
         Col 0   Col 1   Col 2
         +-------+-------+-------+
Fila 0   |   1   |   2   |   3   |
         +-------+-------+-------+
Fila 1   |   4   |   5   |   6   |
         +-------+-------+-------+
Fila 2   |   7   |   8   |   9   |
         +-------+-------+-------+
```

```
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

matriz[0][1]   // 2 (fila 0, columna 1)
matriz[2][2]   // 9 (fila 2, columna 2)
```

### Recorrido de una matriz

Requiere bucles anidados: uno para las filas y otro para las columnas.

```
para (i = 0; i < 3; i = i + 1) hacer
    para (j = 0; j < 3; j = j + 1) hacer
        mostrar(matriz[i][j])
    fin_para
fin_para
```

### Cuándo utilizar una matriz

- Tablas de datos (horarios, asientos, puntuaciones).
- Imágenes digitales (cada píxel es una celda).
- Juegos de tablero (ajedrez, buscaminas, tres en raya).

## Listas

Las **listas** son similares a los arrays, pero con **tamaño dinámico**. Pueden crecer y reducirse según las necesidades del programa, lo que las hace más flexibles que los arrays.

```
lista = [10, 20, 30]        // tamaño 3
lista.añadir(40)             // tamaño 4: [10, 20, 30, 40]
lista.quitar(0)              // tamaño 3: [20, 30, 40]
```

### Array vs Lista

| Aspecto | Array | Lista |
|---|---|---|
| Tamaño | Fijo (generalmente) | Dinámico |
| Memoria | Contigua, pre-asignada | Se reasigna al crecer |
| Flexibilidad | Baja | Alta |
| Rendimiento | Ligero y rápido | Puede ser más lento al redimensionar |

### Operaciones comunes

```
lista = [1, 2, 3]

lista.añadir(4)               // [1, 2, 3, 4]
lista.insertar(1, 99)         // [1, 99, 2, 3, 4]
lista.eliminar(2)             // [1, 99, 3, 4]
lista.eliminar_en(0)          // [99, 3, 4]
indice = lista.buscar(3)      // 1
existe = lista.contiene(99)   // verdadero
```

## Mapas y diccionarios

Un **mapa** o **diccionario** asocia **claves** con **valores**. A diferencia de los arrays, donde se accede por índice numérico, aquí se accede mediante una clave que puede ser texto, un número o cualquier otro tipo inmutable.

```
clave     valor
+----------+---------+
| "España" | "Madrid" |
+----------+---------+
| "Francia"| "París"  |
+----------+---------+
| "Italia" | "Roma"   |
+----------+---------+

capitales["España"]    // "Madrid"
```

### Características

- **Clave única**: no puede haber dos entradas con la misma clave.
- **Acceso por clave**: no existen índices numéricos.
- **Búsqueda rápida**: localizar un valor por su clave es muy eficiente.

### Operaciones comunes

```
diccionario = {}

diccionario["nombre"] = "Ana"
diccionario["edad"] = 25
diccionario["ciudad"] = "Madrid"

nombre = diccionario["nombre"]           // "Ana"
tiene_edad = "edad" en diccionario       // verdadero
eliminar diccionario["ciudad"]
```

### Cuándo utilizar un mapa

- Se necesita buscar rápidamente por un identificador (DNI, email, nombre de usuario).
- Los datos no tienen un orden natural por posición.
- Las claves poseen significado semántico ("nombre", "edad").

## Pilas (stack)

Una **pila** es una estructura **LIFO** (Last In, First Out): el último elemento en entrar es el primero en salir.

```
        tope
         |
         v
    +-----+
    | 30 |   ← sale primero (pop)
    +-----+
    | 20 |
    +-----+
    | 10 |   ← entró primero
    +-----+
```

```
pila = []

pila.apilar(10)       // [10]
pila.apilar(20)       // [10, 20]
pila.apilar(30)       // [10, 20, 30]

elemento = pila.desapilar()    // 30, pila: [10, 20]
elemento = pila.desapilar()    // 20, pila: [10]
tope = pila.tope()             // 10 (sin quitarlo)
```

| Operación | Descripción |
|---|---|
| `apilar(x)` | Añade x al tope |
| `desapilar()` | Quita y devuelve el tope |
| `tope()` | Consulta el tope sin quitarlo |
| `esta_vacia()` | Verifica si está vacía |

### Aplicaciones de las pilas

- **Historial del navegador**: el botón "atrás" desapila la página actual.
- **Deshacer/rehacer**: Ctrl+Z desapila la última acción en un editor de texto.
- **Llamadas a funciones**: el sistema operativo utiliza una pila para gestionar la vuelta de funciones.
- **Evaluación de expresiones**: los compiladores emplean pilas para procesar operaciones matemáticas.

## Colas (queue)

Una **cola** es una estructura **FIFO** (First In, First Out): el primer elemento en entrar es el primero en salir.

```
   salida (dequeue)          entrada (enqueue)
        |                        |
        v                        v
   +------+------+------+------+------+
<--|  10  |  20  |  30  |  40  |  50  |<--
   +------+------+------+------+------+
       ↑
     frente
```

```
cola = []

cola.encolar(10)          // [10]
cola.encolar(20)          // [10, 20]
cola.encolar(30)          // [10, 20, 30]

elemento = cola.desencolar()    // 10, cola: [20, 30]
elemento = cola.desencolar()    // 20, cola: [30]
frente = cola.frente()          // 30 (sin quitarlo)
```

| Operación | Descripción |
|---|---|
| `encolar(x)` | Añade x al final |
| `desencolar()` | Quita y devuelve el primero |
| `frente()` | Consulta el primero sin quitarlo |
| `esta_vacia()` | Verifica si está vacía |

### Aplicaciones de las colas

- **Impresión de documentos**: los trabajos se encolan y se imprimen en orden de llegada.
- **Búfer de datos**: cuando un productor genera datos más rápido de lo que un consumidor los procesa.
- **Servidores web**: las peticiones entrantes se encolan y procesan por orden.
- **BFS (búsqueda en anchura)**: exploración de grafos nivel por nivel.

## Comparativa general

| Estructura | Orden | Inserción | Eliminación | Uso típico |
|---|---|---|---|---|
| Array | Por índice | Fija | Fija | Datos de tamaño conocido |
| Lista | Por inserción | Al final: rápida | Por valor/índice | Colecciones dinámicas |
| Mapa | Por clave | Por clave | Por clave | Búsquedas por identificador |
| Pila | LIFO | Al tope | Del tope | Historial, deshacer |
| Cola | FIFO | Al final | Del frente | Turnos, búferes |

---

## Ejemplo

El siguiente pseudocódigo emplea un array, una pila y una cola para simular un sistema de atención al cliente:

```
INICIO
    // Array: clientes registrados
    clientes = ["Ana", "Carlos", "Maria", "Pedro"]

    // Pila: historial de llamadas atendidas
    historial = []

    // Cola: clientes en espera
    espera = []

    // Encolar clientes en espera
    para cada cliente en clientes hacer
        espera.encolar(cliente)
    fin_para

    // Atender clientes en orden FIFO
    mientras NO espera.esta_vacia() hacer
        actual = espera.desencolar()
        mostrar("Atendiendo a: " + actual)
        historial.apilar(actual)
    fin_mientras

    // Mostrar historial (LIFO: ultimo atendido primero)
    mostrar("Historial de atencion (ultimo primero):")
    mientras NO historial.esta_vacia() hacer
        mostrar(historial.desapilar())
    fin_mientras
FIN
```

**Salida esperada:**

```
Atendiendo a: Ana
Atendiendo a: Carlos
Atendiendo a: Maria
Atendiendo a: Pedro
Historial de atencion (ultimo primero):
Pedro
Maria
Carlos
Ana
```

---

## Ejercicio

Escriba un programa en pseudocódigo que implemente un sistema de navegación web simple:

1. Utilice una **pila** llamada `historial` para almacenar las páginas visitadas.
2. Simule la visita a tres páginas: `"google.com"`, `"github.com"` y `"stackoverflow.com"`, apilando cada una.
3. Muestre la página actual (el tope de la pila) sin quitarla.
4. Simule la acción "atrás": desapile la página actual y muestre la nueva página actual.
5. Muestre el estado final de la pila.

A continuación, amplíe el programa para que también utilice una **cola** llamada `descargas` que almacene archivos pendientes de descarga (`"doc.pdf"`, `"image.png"`, `"video.mp4"`). Procese las descargas en orden FIFO, mostrando cada una al ser procesada.

Responda: ¿por qué el historial de navegación utiliza una pila y no una cola?
