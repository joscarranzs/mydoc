---
title: "Estructuras de datos avanzadas"
module: fundamentos
submodule: estructuras-de-datos-avanzadas
order: 9
---
# Estructuras de datos avanzadas

## ¿Qué son las estructuras de datos avanzadas?

Las estructuras de datos básicas (arrays, listas, pilas, colas) resuelven una amplia variedad de problemas. No obstante, cuando se requiere organizar información con **relaciones jerárquicas**, **conexiones complejas** o **búsquedas ultrarrápidas**, se hace necesario emplear estructuras más especializadas.

Pueden considerarse como herramientas especializadas: del mismo modo que no se utiliza un martillo para apretar un tornillo, no resultaría adecuado emplear un array para representar el árbol genealógico de una familia o un grafo de rutas de navegación.

Las tres estructuras avanzadas fundamentales son los **árboles**, los **grafos** y las **tablas hash**.

## Árboles

Un **árbol** es una estructura jerárquica formada por **nodos** conectados mediante **aristas**. Posee un nodo especial denominado **raíz**, a partir del cual los nodos se ramifican hacia niveles inferiores.

```
              10          ← raíz (nivel 0)
             /  \
            /    \
           5      15      ← hijos de 10 (nivel 1)
          / \       \
         /   \       \
        3     7      20    ← hijos de 5 Y 15 (nivel 2)
```

### Vocabulario básico

| Término | Significado |
|---|---|
| **Raíz** | Nodo superior del que depende todo el árbol |
| **Nodo** | Cada elemento del árbol |
| **Arista** | Conexión entre dos nodos |
| **Padre** | Nodo que tiene hijos por debajo |
| **Hijo** | Nodo que depende directamente de otro |
| **Hermano** | Nodos que comparten el mismo padre |
| **Hoja** | Nodo sin hijos (extremo inferior) |
| **Altura** | Número de niveles desde la raíz hasta la hoja más lejana |

### Árbol binario

Cada nodo puede tener **como máximo dos hijos**: izquierdo y derecho.

```
         10
        /  \
       /    \
      5      15
     / \       \
    /   \       \
   3     7      20
```

Se utiliza en: expresiones matemáticas, códigos de Huffman, árboles de decisión.

### Árbol binario de búsqueda (BST)

Es un árbol binario con una regla adicional: el hijo izquierdo es **menor** que el padre, y el hijo derecho es **mayor**. Esta propiedad permite realizar búsquedas eficientes.

```
         10
        /  \
       /    \
      5      15
     / \       \
    /   \       \
   3     7      20
```

Para buscar un valor, se compara con la raíz. Si es menor, se desciende a la izquierda. Si es mayor, a la derecha. El proceso se repite hasta encontrar el valor o llegar a un nodo vacío.

```
FUNCION buscar(raiz, valor)
    SI (raiz == NULO) ENTONCES
        RETORNAR FALSO
    FIN SI
    SI (valor == raiz.valor) ENTONCES
        RETORNAR VERDADERO
    FIN SI
    SI (valor < raiz.valor) ENTONCES
        RETORNAR buscar(raiz.izquierdo, valor)
    SINO
        RETORNAR buscar(raiz.derecho, valor)
    FIN SI
FIN FUNCION
```

### Árbol n-ario

Cada nodo puede tener **más de dos hijos**, sin límite predefinido.

```
            Directorio Raíz
          /        |        \
         /         |         \
    Usuarios   Sistema     Archivos
      /    \        |          |
     /      \       |          |
   Ana    Pedro   Config    temp.txt
```

Se utiliza en: sistemas de archivos, estructura DOM del HTML, taxonomías y organigramas.

### Recorridos de árboles

```
FUNCION inorden(nodo)
    SI (nodo == NULO) ENTONCES RETORNAR FIN SI
    inorden(nodo.izquierdo)
    ESCRIBIR(nodo.valor)
    inorden(nodo.derecho)
FIN FUNCION
// En un BST, inorden devuelve los valores ordenados
```

| Recorrido | Orden | Aplicación |
|---|---|---|
| **Preorden** | raíz → izquierdo → derecho | Copiar árboles |
| **Inorden** | izquierdo → raíz → derecho | Obtener valores ordenados (BST) |
| **Postorden** | izquierdo → derecho → raíz | Eliminar árboles |
| **Por niveles** | nivel a nivel (BFS) | Búsqueda en anchura |

## Grafos

Un **grafo** es una estructura formada por **nodos** (o vértices) conectados mediante **aristas**. A diferencia de los árboles, los grafos **no poseen raíz** y pueden contener **ciclos**. Cualquier par de nodos puede estar conectado.

```
       A
      / \
     /   \
    B --- C
     \   /
      \ /
       D
```

### Vocabulario básico

| Término | Significado |
|---|---|
| **Vértice / Nodo** | Cada punto del grafo |
| **Arista** | Conexión entre dos nodos |
| **Ciclo** | Camino que comienza y termina en el mismo nodo |
| **Vecino** | Nodo conectado directamente a otro |
| **Peso** | Valor asociado a una arista (coste, distancia) |
| **Grado** | Número de aristas que conectan con un nodo |

### Tipos de grafos

#### Dirigido vs no dirigido

En un grafo **no dirigido**, las aristas son bidireccionales. En un grafo **dirigido** (dígrafo), las aristas poseen una dirección específica.

```
No dirigido:       Dirigido:
A --- B            A → B
|                  ↓
C                  C
```

- **No dirigido**: red de amistades en Facebook (la relación es mutua).
- **Dirigido**: Twitter (es posible seguir a alguien sin que esa persona siga al usuario).

#### Ponderado vs no ponderado

Un grafo **ponderado** asigna un peso (coste, distancia, tiempo) a cada arista. Un grafo **no ponderado** trata todas las aristas por igual.

```
Ponderado (distancias en km):

Madrid ---- Valencia (350 km)
   \              /
    \            /
     Barcelona (620 km desde Madrid, 350 km desde Valencia)
```

### Representación de grafos

```
// Matriz de adyacencia
//     A  B  C  D
//   A 0  1  1  0
//   B 1  0  0  1
//   C 1  0  0  1
//   D 0  1  1  0

matriz = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
]

// Lista de adyacencia
grafo = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "D"],
    "D": ["B", "C"]
}
```

| Representación | Ventaja | Desventaja |
|---|---|---|
| **Matriz de adyacencia** | Consultar conexión entre nodos es instantáneo | Ocupa mucha memoria en grafos grandes |
| **Lista de adyacencia** | Ocupa solo la memoria necesaria | Consultar conexión puede ser más lento |

### Recorrido BFS (Breadth First Search)

Explora el grafo por niveles, como una onda expansiva. Ideal para encontrar el **camino más corto** en un grafo no ponderado.

```
FUNCION bfs(grafo, inicio)
    visitados = conjunto_vacio()
    cola = []
    cola.encolar(inicio)
    visitados.añadir(inicio)

    MIENTRAS (NO cola.esta_vacia()) HACER
        nodo = cola.desencolar()
        ESCRIBIR(nodo)
        PARA CADA vecino en grafo[nodo] HACER
            SI (vecino NO está en visitados) ENTONCES
                cola.encolar(vecino)
                visitados.añadir(vecino)
            FIN SI
        FIN PARA
    FIN MIENTRAS
FIN FUNCION
```

```
BFS desde A:   →   A   B   C   D
                     \
                      \
                A → B → D
                 \   /
                  C
```

### Recorrido DFS (Depth First Search)

Explora en profundidad cada rama antes de retroceder. Ideal para explorar todas las posibilidades, como en un laberinto.

```
FUNCION dfs(grafo, inicio, visitados = conjunto_vacio())
    visitados.añadir(inicio)
    ESCRIBIR(nodo)
    PARA CADA vecino en grafo[inicio] HACER
        SI (vecino NO está en visitados) ENTONCES
            dfs(grafo, vecino, visitados)
        FIN SI
    FIN PARA
FIN FUNCION
```

```
DFS desde A:   →   A   B   D   C
                     \
                      \
                A → B → D
                     ↓
                     C
```

## Tablas hash

Una **tabla hash** es una estructura que asocia claves con valores (como un mapa o diccionario). Su implementación interna utiliza una **función hash** que convierte la clave en un índice numérico dentro de un array, logrando búsquedas prácticamente instantáneas.

### Funcionamiento

```
función hash(clave) → índice

hash("Ana")   → 3
hash("Pedro") → 7
hash("Luis")  → 3   // ¡Colisión! Mismo índice que "Ana"
```

```
Array interno:

Índice 0: [   ]
Índice 1: [   ]
Índice 2: [   ]
Índice 3: [("Ana", 25), ("Luis", 30)]   ← colisión: ambos enlazados
Índice 4: [   ]
Índice 5: [   ]
Índice 6: [   ]
Índice 7: [("Pedro", 30)]
Índice 8: [   ]
```

### Colisiones

Dos claves distintas pueden generar el mismo índice. Esto se denomina **colisión** y se resuelve mediante dos estrategias principales:

#### Encadenamiento

Cada casillero del array contiene una lista. Si dos claves producen el mismo índice, se almacenan ambas en la misma lista. Para recuperar un valor, se aplica el hash, se localiza el índice y se recorre la lista hasta encontrar la clave exacta.

#### Direccionamiento abierto

Si el índice calculado ya está ocupado, se busca secuencialmente el siguiente índice libre.

```
hash("Ana") → 3 (ocupado)
hash("Ana") → probar 4 (ocupado)
hash("Ana") → probar 5 (libre) → se almacena aquí
```

### Operaciones

```
tabla = nueva_tabla_hash()

tabla.insertar("Ana", 25)
tabla.insertar("Pedro", 30)
tabla.insertar("Luis", 28)

edad = tabla.buscar("Ana")         // 25 (casi instantáneo)
tabla.insertar("Ana", 26)          // actualiza a 26
tabla.eliminar("Pedro")
existe = tabla.contiene("Luis")    // verdadero
```

### Comparativa

| Operación | Tabla hash (promedio) | Array | Lista |
|---|---|---|---|
| Buscar | Instantáneo | Lento (recorrer) | Lento (recorrer) |
| Insertar | Instantáneo | Instantáneo (al final) | Instantáneo (al final) |
| Eliminar | Instantáneo | Lento | Lento |
| Ordenado | No | Sí (por índice) | Sí (por inserción) |

### Aplicaciones de las tablas hash

- **Cachés**: almacenar resultados previamente calculados para evitar trabajo redundante.
- **Bases de datos**: los índices suelen implementarse internamente con tablas hash.
- **Compiladores**: gestionar la tabla de símbolos (variables y sus tipos).
- **Routers de red**: buscar rutas rápidamente por dirección IP.
- **Diccionarios y mapas**: en la mayoría de los lenguajes, su implementación interna es una tabla hash.

---

## Ejemplo

El siguiente pseudocódigo modela un sistema de archivos jerárquico utilizando un árbol n-ario y una tabla hash para búsqueda rápida de archivos:

```
INICIO
    // Árbol n-ario: sistema de archivos
    raiz = NUEVO Nodo("Raiz")

    documentos = NUEVO Nodo("Documentos")
    imagenes = NUEVO Nodo("Imagenes")

    raiz.agregar_hijo(documentos)
    raiz.agregar_hijo(imagenes)

    cv = NUEVO Nodo("CV.pdf")
    carta = NUEVO Nodo("Carta.pdf")
    documentos.agregar_hijo(cv)
    documentos.agregar_hijo(carta)

    foto1 = NUEVO Nodo("vacaciones.png")
    foto2 = NUEVO Nodo("familia.jpg")
    imagenes.agregar_hijo(foto1)
    imagenes.agregar_hijo(foto2)

    // Recorrido inorden del arbol
    ESCRIBIR("Estructura del sistema de archivos:")
    FUNCION mostrar_arbol(nodo, nivel = 0)
        PARA i = 1 hasta nivel HACER
            ESCRIBIR("  ")
        FIN PARA
        ESCRIBIR("|-- " + nodo.nombre)
        PARA CADA hijo en nodo.hijos HACER
            mostrar_arbol(hijo, nivel + 1)
        FIN PARA
    FIN FUNCION
    mostrar_arbol(raiz)

    // Tabla hash: busqueda rapida de archivos
    indice = nueva_tabla_hash()
    indice.insertar("CV.pdf", "/Documentos/CV.pdf")
    indice.insertar("Carta.pdf", "/Documentos/Carta.pdf")
    indice.insertar("vacaciones.png", "/Imagenes/vacaciones.png")

    busqueda = "CV.pdf"
    ruta = indice.buscar(busqueda)
    ESCRIBIR("Buscando '" + busqueda + "': " + ruta)
FIN
```

**Salida esperada:**

```
Estructura del sistema de archivos:
|-- Raiz
  |-- Documentos
    |-- CV.pdf
    |-- Carta.pdf
  |-- Imagenes
    |-- vacaciones.png
    |-- familia.jpg
Buscando 'CV.pdf': /Documentos/CV.pdf
```

---

## Ejercicio

1. Construya un **árbol binario de búsqueda** insertando los siguientes valores en este orden: `50, 30, 70, 20, 40, 60, 80`. Dibuje la estructura resultante.

2. Escriba el recorrido **inorden** del árbol. ¿Qué propiedad cumple el resultado?

3. Modele un **grafo no dirigido** con las siguientes ciudades y conexiones:
   - Madrid conecta con Barcelona y Valencia.
   - Barcelona conecta con Madrid y Zaragoza.
   - Valencia conecta con Madrid y Sevilla.
   - Zaragoza conecta solo con Barcelona.
   - Sevilla conecta solo con Valencia.

   Represente el grafo mediante lista de adyacencia.

4. Utilice el algoritmo BFS para encontrar el camino más corto desde Madrid hasta Sevilla. Enumere los nodos en orden de visita.

A continuación, responda: ¿qué estructura de datos utiliza BFS internamente para gestionar los nodos pendientes de visitar? ¿Por qué?
