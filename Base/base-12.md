# Estructuras avanzadas: pilas, colas, listas enlazadas, árboles y grafos

## Tabla de contenidos

- Introducción y por qué importan
- Pilas (Stacks)
- Colas (Queues) y Deques
- Listas enlazadas (singly, doubly, circular)
- Árboles (binary tree, BST, recorridos)
- Grafos (representaciones, BFS, DFS)
- Complejidad y casos de uso
- Ejemplos en TypeScript
- Ejercicios
- Sugerencias (recursos)

## Introducción y por qué importan

Las estructuras de datos son la base para organizar y acceder eficientemente a la información. Elegir la estructura correcta mejora el rendimiento y la claridad del código. Aquí veremos estructuras clásicas que aparecen con frecuencia en algoritmos, sistemas y aplicaciones web.

## Pilas (Stacks)

Una pila es una colección LIFO (Last-In, First-Out): el último elemento insertado es el primero en salir.

- Operaciones básicas: `push`, `pop`, `peek`, `isEmpty`.
- Uso típico: deshacer/rehacer, evaluación de expresiones, recorrido DFS.

Ejemplo conceptual (TypeScript):

```ts
class Stack<T> {
	private items: T[] = [];
	push(v: T) { this.items.push(v); }
	pop(): T | undefined { return this.items.pop(); }
	peek(): T | undefined { return this.items[this.items.length - 1]; }
	isEmpty() { return this.items.length === 0; }
}
```

## Colas (Queues) y Deques

Una cola es FIFO (First-In, First-Out): el primer elemento insertado es el primero en salir.

- Operaciones: `enqueue`, `dequeue`, `peek`.
- `Deque` (double-ended queue) permite operaciones en ambos extremos.
- Uso típico: colas de tareas, BFS en grafos, buffers.

Ejemplo simple:

```ts
class Queue<T> {
	private items: T[] = [];
	enqueue(v: T) { this.items.push(v); }
	dequeue(): T | undefined { return this.items.shift(); } // O usar índices para eficiencia
	peek() { return this.items[0]; }
}
```

## Listas enlazadas

Listas enlazadas almacenan nodos con referencia al siguiente (y opcionalmente al anterior).

- Singly linked list: nodos con `next`.
- Doubly linked list: nodos con `prev` y `next`.
- Circular lists: el último nodo apunta al primero.

Ventajas: inserciones y eliminaciones en tiempo constante si tenemos la referencia al nodo; desventajas: acceso indexado O(n).

Esqueleto de `SinglyLinkedList`:

```ts
class Node<T> { constructor(public value: T, public next: Node<T> | null = null) {} }
class SinglyLinkedList<T> {
	head: Node<T> | null = null;
	tail: Node<T> | null = null;
	append(v: T) {
		const n = new Node(v);
		if (!this.head) this.head = this.tail = n;
		else { this.tail!.next = n; this.tail = n; }
	}
	// ...insert, remove, find...
}
```

## Árboles

Un árbol es una estructura jerárquica de nodos. Un `Binary Tree` tiene a lo sumo dos hijos por nodo.

- `Binary Search Tree (BST)`: mantiene orden para búsquedas eficientes (O(h) donde h es la altura).
- Recorridos comunes: `in-order`, `pre-order`, `post-order`, `level-order` (BFS).

Ejemplo breve (BST insertion):

```ts
class TreeNode<T> { constructor(public val: T, public left: TreeNode<T> | null = null, public right: TreeNode<T> | null = null) {} }
function bstInsert(root: TreeNode<number> | null, v: number): TreeNode<number> {
	if (!root) return new TreeNode(v);
	if (v < root.val) root.left = bstInsert(root.left, v);
	else root.right = bstInsert(root.right, v);
	return root;
}
```

## Grafos

Un grafo G = (V, E) es un conjunto de vértices y aristas. Dos representaciones comunes:

- Matriz de adyacencia (O(V^2) espacio).
- Lista de adyacencia (espacio proporcional a V + E) — preferida para grafos dispersos.

Operaciones y algoritmos básicos:

- `BFS` (breadth-first search): recorrido por niveles, útil para encontrar caminos mínimos en grafos no ponderados.
- `DFS` (depth-first search): recorrido en profundidad, usado para componentes, orden topológico, detección de ciclos.
- Algoritmos adicionales: Dijkstra (caminos mínimos ponderados), Bellman-Ford, Floyd-Warshall, Kruskal/Prim (MST).

Ejemplo de BFS (lista de adyacencia):

```ts
function bfs(start: number, adj: Map<number, number[]>) {
	const q: number[] = [start];
	const visited = new Set<number>([start]);
	while (q.length) {
		const v = q.shift()!;
		console.log(v);
		for (const w of adj.get(v) || []) {
			if (!visited.has(w)) { visited.add(w); q.push(w); }
		}
	}
}
```

## Complejidad y casos de uso

- Pilas/colas: O(1) inserción/eliminación (amortizado si se usa arreglo con índices).
- Listas enlazadas: O(1) inserción/eliminación con referencia; O(n) acceso por índice.
- Árboles balanceados (AVL, Red-Black): operaciones O(log n).
- Grafos: dependiente de V y E; BFS/DFS O(V + E).

Elige la estructura según operaciones frecuentes: acceso aleatorio, inserciones frecuentes, búsquedas ordenadas, recorridos por niveles, etc.

## Ejemplos en TypeScript (resumen práctico)

```ts
// Stack y Queue ya mostrados arriba; ejemplo: eliminar duplicados con Set
function unique<T>(arr: T[]): T[] { return [...new Set(arr)]; }

// Lista enlazada: recorrer
function toArray<T>(list: SinglyLinkedList<T>) {
	const out: T[] = [];
	for (let node = list.head; node; node = node.next) out.push(node.value);
	return out;
}

// Grafo: construir lista de adyacencia
const adj = new Map<number, number[]>();
function addEdge(u: number, v: number) { adj.set(u, (adj.get(u) || []).concat(v)); }
```

## Ejercicios

1. Implementa `reverse()` para `SinglyLinkedList` que invierta la lista en sitio (O(n) tiempo, O(1) espacio extra).

2. Implementa `isBalanced(root)` para un árbol binario: devuelve si la diferencia de alturas entre subárboles de cualquier nodo es ≤ 1.

3. Dado un grafo representado con lista de adyacencia, implementa `hasPath(u, v)` usando BFS.

4. Escribe una función que convierta un `BST` en una lista enlazada ordenada (in-order) reutilizando nodos.

5. Implementa una `Deque` eficiente usando una `DoublyLinkedList`.

## Sugerencias (recursos)

- "Algorithms" de Sedgewick — colección clásica sobre estructuras y algoritmos.
- "Introduction to Algorithms" (CLRS) — referencia amplia y formal.
- Artículos y visualizadores interactivos: VisuAlgo, LeetCode Explore, HackerRank.
- MDN y documentación de bibliotecas cuando uses estructuras nativas (Map, Set, TypedArray).

---