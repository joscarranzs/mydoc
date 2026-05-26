---
title: "Funciones y procedimientos"
module: fundamentos
submodule: funciones-y-procedimientos
order: 6
---
# Funciones y procedimientos

## ¿Qué son las funciones y los procedimientos?

Las funciones y los procedimientos son **bloques de código reutilizables** identificados por un nombre. En lugar de escribir el mismo fragmento de código en múltiples lugares, se escribe una vez, se le asigna un nombre y se invoca cada vez que sea necesario.

Esta práctica se fundamenta en el principio DRY (Don't Repeat Yourself): cada pieza de conocimiento debe tener una representación única, inequívoca y autoritativa dentro del sistema. La reutilización mediante funciones y procedimientos reduce la duplicación, facilita el mantenimiento y mejora la legibilidad del código.

## Diferencia entre función y procedimiento

### Función

Una **función** es un bloque de código que recibe datos de entrada (parámetros), realiza una operación y **devuelve un resultado** mediante la instrucción `devolver` (o `return`).

```
funcion suma(a, b)
    devolver a + b
fin_funcion

resultado = suma(3, 5)   // resultado = 8
```

La función `suma` recibe dos números, los suma y devuelve el resultado. Quien invoca la función puede utilizar ese valor en una asignación, en una expresión o pasarlo a otra función.

```
funcion calcular_iva(precio)
    devolver precio * 0.21
fin_funcion

total_sin_iva = 100
iva = calcular_iva(total_sin_iva)        // 21
total_con_iva = total_sin_iva + iva      // 121
```

Cada llamada a `calcular_iva` evita repetir la fórmula. Si el porcentaje de IVA cambiase, solo sería necesario modificar un único lugar.

### Procedimiento

Un **procedimiento** (también denominado función void) es similar a una función, pero **no devuelve ningún valor**. Su propósito es ejecutar una secuencia de acciones y terminar.

```
procedimiento mostrar_bienvenida()
    mostrar("Bienvenido al sistema")
    mostrar("Versión 1.0")
fin_procedimiento

mostrar_bienvenida()   // ejecuta las acciones, no produce un valor
```

### Comparación

| Aspecto | Función | Procedimiento |
|---|---|---|
| Valor de retorno | Sí (con `devolver`) | No |
| Uso en expresiones | Sí: `total = calcular(5)` | No |
| Propósito | Calcular y retornar un resultado | Ejecutar una acción |
| Ejemplo | `raiz_cuadrada(9)` → `3` | `mostrar("Hola")` |

Numerosos lenguajes de programación no realizan esta distinción explícita: todo se denomina "función" y, cuando no retorna nada, se declara con la palabra clave `void`.

## Parámetros y argumentos

Aunque con frecuencia se utilizan como sinónimos, existe una diferencia conceptual:

- **Parámetro**: la variable definida en la declaración de la función (el "hueco" que espera un dato).
- **Argumento**: el valor concreto que se proporciona al invocar la función (el "relleno").

```
funcion saludar(nombre)        // 'nombre' es un parámetro
    mostrar("Hola, " + nombre)
fin_funcion

saludar("Ana")                 // "Ana" es un argumento
saludar("Pedro")               // "Pedro" es otro argumento
```

### Paso por valor y paso por referencia

Cuando se entrega un argumento a una función, el mecanismo de transferencia puede ser de dos tipos:

#### Paso por valor

Se transfiere una **copia** del valor original. La función opera sobre la copia; la variable original permanece inalterada.

```
funcion duplicar(x)
    x = x * 2
    devolver x
fin_funcion

numero = 5
resultado = duplicar(numero)    // resultado = 10
mostrar(numero)                 // 5 (el original no se modificó)
```

#### Paso por referencia

Se transfiere la **dirección de memoria** del dato original. La función opera directamente sobre el dato original, por lo que cualquier modificación persiste después de la llamada.

```
funcion duplicar_lista(lista)
    para cada elemento en lista hacer
        elemento = elemento * 2
    fin_para
fin_funcion

mis_numeros = [1, 2, 3]
duplicar_lista(mis_numeros)
mostrar(mis_numeros)            // [2, 4, 6] (se modificó la original)
```

| Tipo de dato | Paso por valor | Paso por referencia |
|---|---|---|
| Primitivos (número, texto, booleano) | Sí | No |
| Compuestos (listas, objetos) | No (en muchos lenguajes) | Sí |

### Parámetros por defecto

Es posible asignar valores predeterminados a los parámetros. Si quien invoca la función omite ese argumento, se emplea el valor por defecto.

```
funcion saludar(nombre = "invitado")
    mostrar("Hola, " + nombre)
fin_funcion

saludar("Ana")           // "Hola, Ana"
saludar()                // "Hola, invitado"
```

## Retorno de valores

La instrucción `devolver` (return) cumple dos funciones simultáneamente:

1. **Retorna un valor** al punto desde el cual se invocó la función.
2. **Finaliza la ejecución** de la función de forma inmediata.

```
funcion maximo(a, b)
    si (a > b) entonces
        devolver a      // si se cumple, la función termina aquí
    fin_si
    devolver b          // en caso contrario, retorna b
fin_funcion

mayor = maximo(10, 5)   // 10
```

Cualquier instrucción situada después de un `devolver` no se ejecuta.

```
funcion ejemplo()
    devolver 1
    mostrar("Esto nunca se ejecuta")   // código inalcanzable
fin_funcion
```

## Alcance de variables (scope)

El **alcance** (scope) determina desde qué regiones del código puede accederse a una variable. No todas las variables están disponibles en todas las partes del programa.

### Variable local

Declarada dentro de una función. Solo existe y es accesible dentro de esa función.

```
funcion calcular()
    x = 10          // 'x' es local a calcular()
    mostrar(x)      // funciona: imprime 10
fin_funcion

mostrar(x)          // error: 'x' no está definida en este ámbito
```

### Variable global

Declarada fuera de cualquier función. Está disponible en cualquier punto del programa.

```
x = 10              // variable global

funcion mostrar_x()
    mostrar(x)      // funciona: imprime 10
fin_funcion

funcion cambiar_x()
    x = 20          // modifica la variable global
fin_funcion

mostrar_x()         // 10
cambiar_x()
mostrar_x()         // 20
```

Las variables globales son accesibles pero conllevan riesgos: cualquier función puede modificarlas, lo que dificulta la trazabilidad de los cambios y puede introducir errores difíciles de depurar.

### Regla general del alcance

Las variables definidas en un ámbito exterior son visibles hacia el interior; las definidas en un ámbito interior no son visibles hacia el exterior.

```
global = "accesible desde cualquier parte"

funcion exterior()
    externa = "visible en exterior y sus funciones anidadas"

    funcion interior()
        interna = "solo visible dentro de interior"
        // aquí se puede acceder a: global, externa, interna
    fin_funcion

    // aquí se puede acceder a: global, externa
    // NO se puede acceder a: interna
fin_funcion

// aquí solo se puede acceder a: global
```

### Buenas prácticas con alcance

- Utilizar variables locales siempre que sea posible.
- Limitar el alcance al mínimo necesario.
- Evitar las variables globales; si son imprescindibles, documentarlas adecuadamente.
- Preferir el paso de datos como parámetros en lugar del uso de variables globales.

---

## Ejemplo

El siguiente pseudocódigo define funciones y procedimientos para gestionar las operaciones básicas de una calculadora:

```
INICIO
    // Definición de funciones
    funcion suma(a, b)
        devolver a + b
    fin_funcion

    funcion resta(a, b)
        devolver a - b
    fin_funcion

    // Procedimiento (no retorna valor)
    procedimiento mostrar_menu()
        mostrar("1. Sumar")
        mostrar("2. Restar")
        mostrar("3. Salir")
    fin_procedimiento

    // Procedimiento con parámetros
    procedimiento mostrar_resultado(operacion, valor)
        mostrar("Resultado de la " + operacion + ": " + valor)
    fin_procedimiento

    // Uso de funciones y procedimientos
    mostrar_menu()

    opcion = 1
    x = 15
    y = 7

    si (opcion == 1) entonces
        r = suma(x, y)
        mostrar_resultado("suma", r)
    si_no si (opcion == 2) entonces
        r = resta(x, y)
        mostrar_resultado("resta", r)
    fin_si

    mostrar("Programa finalizado")
FIN
```

**Salida esperada:**

```
1. Sumar
2. Restar
3. Salir
Resultado de la suma: 22
Programa finalizado
```

---

## Ejercicio

Escriba un programa en pseudocódigo que realice lo siguiente:

1. Defina una función `es_par(numero)` que devuelva `verdadero` si el número es par y `falso` en caso contrario (utilice el operador módulo `%`).
2. Defina un procedimiento `clasificar_numero(n)` que muestre `"El número X es par"` o `"El número X es impar"` según corresponda, invocando a la función `es_par`.
3. En el programa principal, declare una lista de números: `[3, 8, 15, 22, 37]`.
4. Recorra la lista con un bucle y, para cada número, invoque `clasificar_numero`.

A continuación, responda: ¿qué ventaja ofrece separar la lógica de verificación (`es_par`) de la lógica de presentación (`clasificar_numero`) en lugar de tenerlo todo en un único bloque?
