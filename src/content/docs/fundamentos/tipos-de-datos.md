---
title: "Tipos de datos"
module: fundamentos
submodule: tipos-de-datos
order: 3
---
# Tipos de datos

## ¿Qué son los tipos de datos?

Cuando se declara una variable o constante, el valor que almacena pertenece a una categoría denominada **tipo de datos**. El tipo determina qué clase de valor puede contener la variable (números, texto, valores binarios, etc.) y qué operaciones pueden realizarse sobre él.

Los tipos de datos pueden entenderse como **moldes**: un molde para galletas posee una forma concreta y solo permite producir galletas de esa forma. De manera análoga, un tipo de datos define la "forma" del valor y restringe las operaciones válidas sobre él. Por ejemplo, no es posible dividir un texto entre dos, del mismo modo que no puede extraerse una galleta con forma de estrella de un molde circular.

Los tipos de datos se clasifican en dos grandes categorías: **primitivos** y **compuestos**.

## Tipos primitivos

Los tipos primitivos representan un único valor indivisible. Constituyen los componentes fundamentales con los que se construyen estructuras más complejas.

### Números enteros (integer)

Representan números sin parte decimal, positivos o negativos. Se utilizan para contar, indexar posiciones y medir cantidades discretas.

```
edad = 25
alumnos = 340
temperatura = -5
```

### Números decimales (float / double)

Representan números con parte decimal, también denominados de **coma flotante**. Se utilizan para mediciones, cálculos científicos, precios y estadísticas.

```
precio = 19.99
pi = 3.1416
porcentaje = 0.15
```

### Texto (string / char)

Una **cadena de texto** (string) es una secuencia de caracteres que puede incluir letras, números y símbolos. Un **carácter** (char) es un único símbolo. Se utilizan para nombres, descripciones, mensajes y cualquier tipo de información textual.

```
nombre = "Ana"
letra = 'A'
mensaje = "Hola, mundo"
```

### Booleano (boolean)

Admite únicamente dos valores: **verdadero** o **falso**. Es el tipo más simple, pero también uno de los más fundamentales, ya que constituye la base de la lógica en los programas. Se utiliza para condiciones, banderas y estados binarios como sí/no o encendido/apagado.

```
activo = VERDADERO
completado = FALSO
es_mayor = (18 >= 18)   // verdadero
```

### Comparación de tipos primitivos

| Tipo | Ejemplos | Almacenamiento | Mutabilidad |
|---|---|---|---|
| Entero | `25`, `-3`, `1000` | Stack (directo) | Inmutable |
| Decimal | `3.14`, `-0.5`, `99.99` | Stack (directo) | Inmutable |
| String | `"Hola"`, `"123"` | Stack (referencia al heap) | Inmutable |
| Booleano | `verdadero`, `falso` | Stack (directo) | Inmutable |

## Tipos compuestos

Los tipos compuestos agrupan varios valores dentro de una misma estructura. A diferencia de los primitivos, suelen almacenarse en el **heap** (montón), mientras que la variable conserva una **referencia** (dirección de memoria) que apunta a los datos reales.

### Arrays (listas ordenadas)

Un array es una colección ordenada de elementos, generalmente del mismo tipo. Cada elemento ocupa una posición denominada **índice**, que comienza en 0. Son ideales para listas homogéneas como temperaturas diarias, identificadores de usuarios o puntos en un gráfico.

```
numeros = [10, 20, 30, 40]
             0   1   2   3

numeros[0]         // 10 (primer elemento)
numeros[2]         // 30 (tercer elemento)
numeros[0] = 99    // se modifica el primer elemento
```

### Tuplas

Una tupla agrupa valores **de distintos tipos** en una estructura de tamaño **fijo** e **inmutable**. Una vez creada, no es posible modificar su tamaño ni sus valores. Se utilizan para coordenadas, pares clave-valor pequeños y datos que no deben alterarse.

```
persona = ("Ana", 25, "Madrid")
              str    int   str

persona[0]    // "Ana"
persona[1]    // 25
```

### Objetos y diccionarios (mapas)

Un objeto o diccionario asocia **claves** con **valores**. A diferencia del array, donde se accede por índice numérico, aquí se accede mediante un nombre descriptivo (la clave). Son ideales para representar entidades del mundo real: un usuario, un producto o un pedido.

```
usuario = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid"
}

usuario.nombre     // "Ana"
usuario.edad       // 25
```

### Comparación de tipos compuestos

| Tipo | Ordenado | Tamaño fijo | Tipos distintos | Acceso |
|---|---|---|---|---|
| Array | Sí | Variable | Generalmente no | Por índice numérico |
| Tupla | Sí | Sí | Sí | Por índice numérico |
| Objeto/Mapa | No | Variable | Sí | Por clave nominal |

### Diferencias entre primitivos y compuestos

| Aspecto | Primitivo | Compuesto |
|---|---|---|
| Contenido | Un solo valor | Varios valores agrupados |
| Ubicación en memoria | Stack (valor directo) | Heap (referencia) |
| Mutabilidad | Inmutable | Generalmente mutable |
| Tamaño | Fijo y pequeño | Variable y potencialmente grande |

## Conversión de tipos

En ocasiones se dispone de un valor de un tipo determinado pero se necesita tratarlo como otro. Por ejemplo, al leer un número desde un formulario web, este llega como texto, y para realizar una operación aritmética es necesario convertirlo a número. Este proceso recibe el nombre de **conversión de tipos** (type casting).

### Conversión implícita (coerción)

El lenguaje de programación convierte automáticamente un tipo a otro cuando la operación lo requiere. No se requiere intervención del programador.

```
resultado = 10 + "5"
// Comportamiento dependiente del lenguaje:
//   - En algunos lenguajes: "105" (se convierte el número a texto y se concatena)
//   - En otros:              15   (se convierte el texto a número y se suma)

total = 10 + 5.5        // 15.5
// El entero 10 se convierte implícitamente a decimal para poder sumar
```

La conversión implícita resulta cómoda, pero puede producir comportamientos inesperados si no se conoce la estrategia del lenguaje en uso.

### Conversión explícita (casting)

El programador controla cuándo y cómo se realiza la conversión, indicando explícitamente el tipo de destino. Esta práctica otorga control total sobre el resultado.

```
texto = "123"
numero = convertir_a_entero(texto)     // 123

decimal = 3.14
entero  = convertir_a_entero(decimal)  // 3 (se pierde la parte decimal)

numero = 42
texto  = convertir_a_texto(numero)     // "42"
```

### Riesgos en la conversión de tipos

- **Pérdida de precisión**: `3.14` convertido a entero produce `3`, eliminando la fracción decimal.
- **Desbordamiento**: un número demasiado grande para el tipo de destino produce resultados incorrectos.
- **Error de formato**: convertir `"Hola"` a número no es posible y genera un error.
- **Resultado inesperado**: `"10" + 5` puede producir `"105"` en lugar de `15` según el lenguaje.

### Conversión implícita vs. explícita

| Aspecto | Implícita | Explícita |
|---|---|---|
| Control | El lenguaje decide | El programador decide |
| Riesgo | Comportamientos inesperados | Pérdida consciente de datos |
| Claridad | Código más limpio | Código más verboso y explícito |

---

## Ejemplo

El siguiente pseudocódigo declara variables de distintos tipos, realiza una conversión y muestra los resultados:

```
INICIO
    // Tipos primitivos
    nombre = "Carlos"
    edad = 30
    altura = 1.75
    es_estudiante = VERDADERO

    ESCRIBIR "Nombre: " + nombre
    ESCRIBIR "Edad: " + edad
    ESCRIBIR "Altura: " + altura
    ESCRIBIR "¿Es estudiante?: " + es_estudiante

    // Tipo compuesto: array
    notas = [85, 92, 78]
    ESCRIBIR "Primera nota: " + notas[0]

    // Tipo compuesto: objeto
    alumno = {
        nombre: nombre,
        edad: edad,
        notas: notas
    }
    ESCRIBIR "El alumno " + alumno.nombre + " tiene " + alumno.edad + " años"

    // Conversión explícita
    texto_nota = convertir_a_texto(notas[0])
    ESCRIBIR "La primera nota como texto: " + texto_nota
FIN
```

**Salida esperada:**

```
Nombre: Carlos
Edad: 30
Altura: 1.75
¿Es estudiante?: VERDADERO
Primera nota: 85
El alumno Carlos tiene 30 años
La primera nota como texto: 85
```

---

## Ejercicio

Escriba un programa en pseudocódigo que realice lo siguiente:

1. Declare una variable `producto` de tipo texto con valor `"Laptop"`.
2. Declare una variable `precio` de tipo decimal con valor `999.99`.
3. Declare una variable `cantidad` de tipo entero con valor `3`.
4. Declare una variable `total` que sea igual a `precio * cantidad`.
5. Declare un objeto `pedido` que contenga `producto`, `cantidad` y `total`.
6. Muestre el valor de `pedido.producto` y `pedido.total`.
7. Convierta `total` a texto y concatenelo con el mensaje `"El total del pedido es: "`.

A continuación, responda: ¿qué ocurriría si se intentase ejecutar `precio * producto`? ¿Tendría sentido esa operación?
