
# 03 - Programación: Funciones

## Tabla de contenido

- [Introducción](#introducción)
- [Parámetros](#parámetros)
- [Argumentos](#argumentos)
- [Retorno](#retorno)
- [Referencias](#referencias)

## Introducción

Una función (procedimiento, subrutina) es una unidad de código que recibe entradas, realiza una tarea y opcionalmente devuelve un resultado. Las funciones encapsulan lógica, favorecen la reutilización y facilitan pruebas. En esta página se describen parámetros (definición de la función), argumentos (valores pasados al invocar) y la semántica de retorno.

## Parámetros

Definición: los parámetros son nombres que declara la función para recibir valores cuando se llame. Existen múltiples tipos de parámetros:

- Posicionales: orden fijo. Ej.: `def f(x, y)`.
- Nombrados / keyword: reciben argumento por nombre, no por posición (`f(x=1, y=2)`).
- Opcionales / con valor por defecto: `def f(x, y=10)` — `y` tiene valor por defecto si no se pasa.
- Varargs (rest parameters): aceptan cantidad variable de argumentos (Python `*args`, Java varargs `...`).
- Keyword args / kwargs: aceptan pares nombre=valor arbitrarios (Python `**kwargs`).
- Parámetros por referencia vs por valor: depende del lenguaje — en C pasan por valor; en C++ se pueden pasar por referencia (`&`) o por puntero; en Python, las variables son referencias a objetos.

Ejemplo (Python):

```python
def add(a, b=0, *extras, **kw):
    print("extras", extras)
    print("kw", kw)
    return a + b + sum(extras)
```

Notas importantes:

- Evitar valores mutables como valores por defecto en Python (`def f(x, lst=[]): ...`) porque se comparte la misma lista entre llamadas.
- Los parámetros tipados (type annotations) no alteran semántica en tiempo de ejecución en Python, pero sirven para documentación y herramientas (mypy).

## Argumentos

Definición: los argumentos son los valores reales pasados cuando se invoca la función. Pueden ser literales, variables, expresiones o el resultado de otra función.

- Posicional vs nombrado: `f(1,2)` vs `f(b=2,a=1)`.
- Expresiones: `f(x+1, g(y))`.
- Evaluación: el orden de evaluación de argumentos puede variar por lenguaje; en muchos lenguajes evalúa de izquierda a derecha.

Ejemplo (JavaScript):

```javascript
function g(a, b) { return a + b; }
g(1, 2) // 3
```

Semántica y side-effects:

- Pasar mutable objects: si una función modifica un objeto recibido, el cambio es visible fuera en lenguajes con semántica de referencia.
- Evitar funciones que muten sus argumentos a menos que la mutación sea la responsabilidad claramente documentada.

## Retorno

Comportamiento: una función puede devolver uno o varios valores (según lenguaje) o nada (`void`, `None`).

- Un único valor: `return x`.
- Múltiples valores: Python puede retornar tuplas `return a, b`; otros lenguajes usan estructuras o objetos para devolver múltiples datos.
- Excepciones vs valores de error: usar excepciones para casos excepcionales; return codes para flujos habituales (depende del estilo del proyecto).

Buenas prácticas:

- Siempre documentar lo que devuelve la función y sus posibles excepciones.
- Preferir outputs claros y consistentes; evita devolver varios tipos diferentes desde la misma función.

Ejemplo (Rust):

```rust
fn div_mod(a: i32, b: i32) -> Option<(i32, i32)> {
    if b == 0 { None } else { Some((a/b, a % b)) }
}
```

## Referencias

### Libros (títulos)

- "Structure and Interpretation of Computer Programs" — Harold Abelson, Gerald Jay Sussman
- "Clean Code" — Robert C. Martin

### Documentación oficial (vínculos)

- Python functions: https://docs.python.org/3/tutorial/controlflow.html#defining-functions
- Java methods: https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html
- C functions: https://en.cppreference.com/w/c/language/function
- Rust functions: https://doc.rust-lang.org/book/ch03-03-how-functions-work.html

