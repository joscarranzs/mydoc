# 03 - Programación: Paradigma funcional

## Tabla de contenido

- [Introducción](#introducción)
- [Funciones puras](#funciones-puras)
- [Inmutabilidad](#inmutabilidad)
- [Composición de funciones](#composición-de-funciones)
- [Ejemplos](#ejemplos)
- [Ventajas y desventajas](#ventajas-y-desventajas)
- [Referencias](#referencias)

## Introducción

El paradigma funcional enfatiza el uso de funciones puras, inmutabilidad y composición. En lugar de cambiar el estado, el programa describe transformaciones de datos mediante funciones. Lenguajes funcionales puros como Haskell promueven estas ideas, pero muchas prácticas son aplicables en JavaScript, Python o Scala.

## Funciones puras

Una función es pura si su resultado depende únicamente de sus argumentos y no produce efectos secundarios observables (no modifica variables globales ni realiza E/S). Ventajas:

- Fácil de razonar y testear (una entrada produce siempre la misma salida).
- Preferible para cálculo y transformaciones, facilita memoización y paralelización.

Ejemplos de impureza vs pureza:

- Impura: lee o modifica una variable global, escribe en disco, imprime.
- Pura: solo usa sus argumentos y devuelve un resultado.

## Inmutabilidad

La inmutabilidad significa que los valores no cambian una vez creados. Operaciones que parecen modificar retornan nuevos valores. Beneficios:

- Evita errores por aliasing y efectos inesperados.
- Facilita concurrencia y reasoning sobre el estado.

Estrategias:

- Usar tipos inmutables o estructuras persistentes.
- Prefijar nombres con copy-update (por ejemplo en Python) o usar objetos inmutables (tuplas, frozenset).

## Composición de funciones

Componer funciones es encadenar transformaciones para crear nuevas funciones: f ∘ g (f después de g). Composición y funciones de orden superior (map, filter, reduce) son ingredientes centrales para construir pipelines de transformación declarativos.

Patrones:

- Map: aplicar una función a cada elemento.
- Filter: seleccionar elementos que cumplan un predicado.
- Fold/Reduce: reducir una colección a un acumulado.

## Ejemplos

- JavaScript — función pura e inmutabilidad básica

```javascript
// función pura
const square = x => x * x;

// inmutabilidad por copia
const arr = [1, 2, 3];
const arr2 = [...arr, 4]; // arr no cambia
```

- Python — map/filter/reduce

```python
from functools import reduce

def square(x):
	return x * x

nums = [1, 2, 3]
out = list(map(square, nums))  # [1, 4, 9]
evens = list(filter(lambda x: x % 2 == 0, nums))
sum_all = reduce(lambda a, b: a + b, nums, 0)
```

- Haskell — composición y pipelines

```haskell
-- Compose two functions
let f = map (^2) . filter (> 0)
f [1, -2, 3] -- [1,9]
```

## Ventajas y desventajas

Ventajas:

- Programas más fáciles de razonar y testear.
- Menos bugs relacionados con estado compartido; mejor paralelo.
- Elegante composición y abstracción.

Desventajas:

- Algunas tareas (I/O, interacción con hardware) requieren efectos — se gestionan con monads o abstracciones.
- A veces el rendimiento por copia de estructuras grandes debe optimizarse (estructuras persistentes ayudan aquí).

## Referencias

### Libros

- "Learn You a Haskell for Great Good!" — Miran Lipovača
- "Functional Programming in Scala" — Paul Chiusano and Rúnar Bjarnason

### Documentación y recursos

- Haskell: https://www.haskell.org/documentation/
- MDN functional concepts (JS): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
- Python functional tools: https://docs.python.org/3/library/functools.html

