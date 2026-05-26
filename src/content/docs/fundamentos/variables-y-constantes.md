---
title: "Variables y constantes"
module: fundamentos
submodule: variables-y-constantes
order: 2
---
# Variables y constantes

## ¿Qué es una variable?

Una **variable** es un identificador que se asigna a un valor almacenado en memoria, permitiendo referirse a dicho valor a lo largo del programa. En lugar de operar directamente con el dato, se utiliza su nombre simbólico.

Toda variable posee tres componentes fundamentales:

- **Nombre (identificador)**: la palabra que se utiliza para referirse al valor (por ejemplo, `edad`, `nombre`, `total`).
- **Valor**: el dato que contiene o al que hace referencia.
- **Dirección de memoria**: la ubicación física donde el sistema almacena el valor. El programador no necesita conocerla, pero el sistema la gestiona internamente.

El valor de una variable puede modificarse durante la ejecución del programa. A esta operación se le denomina **reasignación**.

```
// Ejemplo de variable con reasignación
edad = 25
edad = 26       // el valor cambia de 25 a 26
```

## ¿Qué es una constante?

Una **constante** es similar a una variable en cuanto a que posee un nombre asociado a un valor, con la diferencia fundamental de que **su valor no puede modificarse una vez definido**. Se utiliza para representar valores fijos que no deben cambiar durante la ejecución: el número Pi, el porcentaje de IVA, los días de la semana.

```
PI = 3.1416        // valor inmutable
IVA = 0.21         // no debe reasignarse
DIAS_SEMANA = 7    // convención: mayúsculas para constantes
```

Si se intenta modificar una constante, el programa debe impedirlo o generar una advertencia.

## Diferencias clave entre variables y constantes

| Aspecto | Variable | Constante |
|---|---|---|
| Reasignación | Permitida | No permitida |
| Uso típico | Datos que cambian durante la ejecución | Valores fijos conocidos en tiempo de escritura |
| Convención | minúscula o camelCase | MAYÚSCULAS (común en muchos lenguajes) |
| Momento de asignación | En cualquier punto del programa | Generalmente al declararla |

## Memoria y almacenamiento

Cada variable o constante que se declara ocupa un espacio en la **memoria RAM** durante la ejecución del programa. La RAM puede visualizarse como un conjunto de casilleros numerados, cada uno con una dirección única. Cuando se declara una variable, el sistema localiza un casillero disponible, lo asigna y almacena el valor en él.

```
Dirección   Contenido
1000        25              ← variable 'edad'
1001        3.1416          ← constante 'PI'
1002        "Ana"           ← variable 'nombre'
```

El sistema organiza la memoria en dos zonas principales:

- **Stack (pila)**: almacenamiento rápido y temporal para datos pequeños, como variables locales y llamadas a funciones. Su gestión es automática y su capacidad limitada.
- **Heap (montón)**: almacenamiento de mayor capacidad para datos cuya vida útil excede una función, como objetos o listas grandes. Su gestión puede ser manual o automática según el lenguaje.

```
x = 5                   // 'x' se almacena en el stack
lista = [1, 2, 3]       // la referencia a la lista está en el stack; los datos, en el heap
```

## Enfoques de asignación en memoria

Cuando se reasigna una variable, el comportamiento interno depende del lenguaje de programación.

### Enfoque de etiqueta movible (binding)

En lenguajes como Python, JavaScript o Rust, la variable actúa como una **etiqueta que apunta a un valor**. Al reasignar, la etiqueta se despega del valor anterior y se coloca sobre el nuevo. El valor anterior permanece intacto en memoria.

```
edad = 25       // la etiqueta 'edad' apunta al valor 25
edad = 26       // la etiqueta 'edad' ahora apunta al valor 26
                // el valor 25 sigue existiendo en su ubicación original
```

### Enfoque de caja en memoria

En lenguajes como C o C++, la variable **es** una ubicación fija de memoria. Al reasignar, el contenido de esa ubicación se sobrescribe directamente.

```
edad = 25       // se reserva un espacio fijo 'edad' con contenido 25
edad = 26       // se sobrescribe ese mismo espacio: el 25 se reemplaza por 26
```

## Mutabilidad e inmutabilidad

La **mutabilidad** determina si el contenido interno de un valor puede modificarse después de haber sido creado.

### Valores mutables

Un objeto **mutable** permite cambiar su contenido interno sin necesidad de crear uno nuevo. Son mutables las listas, los diccionarios, los conjuntos y los objetos en general.

```
lista = [1, 2, 3]
lista.append(4)                  // la lista ahora es [1, 2, 3, 4]
usuario.nombre = "Pedro"         // se modifica un atributo del objeto existente
```

### Valores inmutables

Un objeto **inmutable** no puede modificarse una vez creado. Si se requiere un valor diferente, es necesario construir un objeto nuevo. Son inmutables los números, las cadenas de texto, los booleanos y las tuplas.

```
saludo = "Hola"
saludo.upper()                   // devuelve "HOLA", pero 'saludo' sigue siendo "Hola"
saludo = saludo.upper()          // 'saludo' ahora apunta a una NUEVA cadena "HOLA"

x = 5
x = x + 1                        // no se modifica el 5; se crea un 6 y 'x' apunta al nuevo valor
```

### Importancia de la mutabilidad

- **Seguridad**: un valor inmutable no puede alterarse accidentalmente desde otra parte del código.
- **Claves de diccionario**: solo los tipos inmutables pueden utilizarse como claves, ya que una clave mutable podría perder su integridad.
- **Concurrencia**: en programas con múltiples hilos de ejecución, los datos inmutables eliminan el riesgo de modificaciones simultáneas no controladas.
- **Predicibilidad**: resulta más sencillo razonar sobre un programa cuando los datos no cambian de forma inesperada.

---

## Ejemplo

El siguiente pseudocódigo declara una variable y una constante, modifica la variable e intenta modificar la constante (lo cual debe producir un error):

```
INICIO
    // Declaración de variable
    edad = 25
    MOSTRAR "Edad inicial: " + edad

    // Reasignación de variable
    edad = 26
    MOSTRAR "Edad después de cumpleaños: " + edad

    // Declaración de constante
    PI = 3.1416
    MOSTRAR "Valor de PI: " + PI

    // Intento de reasignación de constante (PRODUCE ERROR)
    PI = 3.15       // ERROR: no se puede modificar una constante
FIN
```

**Salida esperada:**

```
Edad inicial: 25
Edad después de cumpleaños: 26
Valor de PI: 3.1416
Error: no se puede reasignar una constante
```

---

## Ejercicio

Escriba un programa en pseudocódigo que realice lo siguiente:

1. Declare una constante `IVA` con valor `0.21`.
2. Declare una variable `precio` con valor `100`.
3. Declare una variable `precio_final` que sea igual a `precio + (precio * IVA)`.
4. Muestre el valor de `precio_final`.
5. Intente reasignar `IVA` a `0.10` (esto debe causar un error).

A continuación, responda: ¿qué ventaja tiene declarar `IVA` como constante en lugar de como variable en un programa real de facturación?
