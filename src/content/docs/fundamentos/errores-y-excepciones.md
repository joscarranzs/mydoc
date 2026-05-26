---
title: "Errores y excepciones"
module: fundamentos
submodule: errores-y-excepciones
order: 10
---
# Errores y excepciones

## ¿Qué son los errores y las excepciones?

Durante la ejecución de un programa pueden ocurrir situaciones imprevistas: archivos que no existen, conexiones que se pierden, datos con formato incorrecto o divisiones entre cero. El código debe estar preparado para **fallar de forma controlada**: detectar el problema, manejarlo si es posible y, en caso contrario, informar al usuario de manera clara.

Existen dos categorías principales: los **errores** y las **excepciones**. Aunque con frecuencia se utilizan como sinónimos, existe una diferencia conceptual importante entre ambos.

### Errores

Un **error** es un problema grave que impide que el programa continúe su ejecución. Generalmente se origina por bugs del programador o por condiciones del entorno que no pueden resolverse en tiempo de ejecución (falta de memoria, archivo crítico del sistema inexistente).

Cuando ocurre un error no manejado, el programa se detiene por completo y muestra un mensaje. No puede continuar porque algo fundamental está mal.

```
resultado = 10 / 0             // error: división por cero
elemento = lista[10]           // error: índice fuera de rango
ESCRIBIR(x)                     // error: variable no definida
```

### Excepciones

Una **excepción** es una situación anómala pero potencialmente recuperable. El programa puede detectarla y decidir cómo responder sin necesidad de detenerse por completo.

```
// Excepción: archivo no encontrado
// El programa puede solicitar otra ruta o crear el archivo

// Excepción: conexión perdida
// El programa puede reintentar la conexión

// Excepción: formato inválido
// El programa puede saltar ese dato y continuar con el siguiente
```

### Diferencias clave

| Aspecto | Error | Excepción |
|---|---|---|
| Gravedad | Grave, normalmente fatal | Leve o moderada, recuperable |
| Causa | Bug, falta de memoria, límite del sistema | Datos inválidos, red caída, archivo faltante |
| Recuperación | Generalmente no es posible | Sí, con el código adecuado |
| Origen | El programador o el sistema | El entorno o los datos de entrada |

## Tipos de errores

### Errores de sintaxis

Ocurren cuando el código no respeta las reglas gramaticales del lenguaje. El programa no puede compilarse ni interpretarse.

```
// Error: falta un paréntesis de cierre
ESCRIBIR("Hola"

// Error: estructura incorrecta
FUNCION suma a, b)
```

### Errores de lógica

El código es sintácticamente correcto pero produce un resultado distinto al esperado. No se genera ningún mensaje de error; simplemente el resultado es incorrecto. Son los errores más difíciles de detectar.

```
// Se pretendía calcular el promedio pero falta la división
FUNCION promedio(a, b, c)
    RETORNAR a + b + c    // error: no divide entre 3
FIN FUNCION
```

### Errores de ejecución (runtime)

Ocurren durante la ejecución del programa debido a condiciones imprevistas del entorno.

```
archivo = abrir("datos.txt")
contenido = LEER(archivo)          // error: el archivo no pudo abrirse

datos = descargar("https://api.ejemplo.com")   // error: servidor caído
```

## Manejo de excepciones

No es posible evitar que ocurran errores y excepciones, pero sí es posible controlar cómo responde el programa cuando se producen.

### Try-catch (intentar-capturar)

El bloque `intentar` (try) envuelve el código que puede fallar. El bloque `capturar` (catch) atrapa la excepción si ocurre y define cómo responder.

```
INTENTAR
    archivo = abrir("datos.txt")
    contenido = LEER(archivo)
    ESCRIBIR(contenido)
CAPTURAR (error)
    ESCRIBIR("No se pudo LEER el archivo: " + error)
FIN INTENTAR
```

Si el archivo se abre correctamente, el bloque `capturar` se omite. Si falla, la ejecución salta al bloque `capturar` y el programa continúa desde allí, en lugar de detenerse abruptamente.

### Captura de excepciones específicas

Es posible capturar diferentes tipos de excepción y responder de forma distinta para cada uno.

```
INTENTAR
    conexion = conectar_servidor("api.ejemplo.com")
    datos = descargar(conexion)
CAPTURAR (error_de_red)
    ESCRIBIR("Revise su conexión a internet")
CAPTURAR (error_de_autenticacion)
    ESCRIBIR("Credenciales inválidas")
CAPTURAR (error_general)
    ESCRIBIR("Error inesperado: " + error_general)
FIN INTENTAR
```

### Finally (finalmente)

El bloque `finalmente` (finally) se ejecuta **siempre**, haya ocurrido o no una excepción. Se utiliza para liberar recursos: cerrar archivos, liberar memoria, cerrar conexiones de red.

```
archivo = NULO
INTENTAR
    archivo = abrir("datos.txt")
    contenido = LEER(archivo)
    procesar(contenido)
CAPTURAR (error)
    ESCRIBIR("Error al procesar el archivo")
FINALMENTE
    SI (archivo != NULO) ENTONCES
        cerrar(archivo)       // siempre se cierra, incluso si hubo error
    FIN SI
FIN INTENTAR
```

### Throw (lanzar)

Es posible **lanzar** excepciones propias cuando se detecta una situación anómala en el código. Esto permite comunicar al llamante que algo no ha funcionado correctamente.

```
FUNCION retirar_dinero(saldo, cantidad)
    SI (cantidad > saldo) ENTONCES
        LANZAR NUEVA Excepcion("Saldo insuficiente")
    FIN SI
    saldo = saldo - cantidad
    RETORNAR saldo
FIN FUNCION

// Quien llama maneja la excepción
INTENTAR
    nuevo_saldo = retirar_dinero(100, 200)
CAPTURAR (error)
    ESCRIBIR("No se pudo retirar: " + error)
FIN INTENTAR
```

Lanzar excepciones propias constituye un mecanismo para indicar: "esto no debería ocurrir y quien me invoque debe estar preparado para manejarlo".

### Buenas prácticas

| Correcto | Incorrecto |
|---|---|
| Capturar excepciones específicas | Capturar siempre `Excepcion` genérica |
| Liberar recursos en `finalmente` | Dejar archivos o conexiones abiertos |
| Lanzar excepciones con mensajes descriptivos | Lanzar excepciones sin contexto |
| Usar excepciones solo para casos excepcionales | Usar excepciones para control de flujo normal |
| Documentar las excepciones que lanza cada función | Capturar excepciones y no hacer nada (catch vacío) |

---

## Ejemplo

El siguiente pseudocódigo gestiona la lectura de la edad de un usuario desde un archivo, manejando todos los posibles escenarios de error:

```
INICIO
    FUNCION leer_edad(ruta)
        archivo = NULO
        INTENTAR
            archivo = abrir(ruta)
            linea = leer_linea(archivo)
            edad = convertir_a_entero(linea)

            SI (edad < 0 O edad > 150) ENTONCES
                LANZAR NUEVA Excepcion("Edad fuera de rango")
            FIN SI

            RETORNAR edad

        CAPTURAR (error_de_archivo)
            ESCRIBIR("No se encontró el archivo: " + ruta)
            RETORNAR -1

        CAPTURAR (error_de_formato)
            ESCRIBIR("El archivo NO contiene un número válido")
            RETORNAR -1

        CAPTURAR (error)
            ESCRIBIR("Error inesperado: " + error)
            RETORNAR -1

        FINALMENTE
            SI (archivo != NULO) ENTONCES
                cerrar(archivo)
            FIN SI
        FIN INTENTAR
    FIN FUNCION

    // Programa principal
    edad = leer_edad("usuario.txt")
    SI (edad >= 0) ENTONCES
        ESCRIBIR("Edad del usuario: " + edad)
    SINO
        ESCRIBIR("No se pudo determinar la edad")
    FIN SI
FIN
```

**Escenarios cubiertos:**

| Escenario | Comportamiento |
|---|---|
| Archivo existe y contiene un número válido entre 0 y 150 | Devuelve la edad |
| Archivo no existe | Captura `error_de_archivo`, muestra mensaje, devuelve -1 |
| Archivo contiene texto no numérico | Captura `error_de_formato`, muestra mensaje, devuelve -1 |
| Edad fuera de rango (negativa o > 150) | Lanza excepción propia, capturada por `error`, devuelve -1 |
| Cualquier otro error inesperado | Capturado por `error` genérico, muestra mensaje, devuelve -1 |
| En todos los casos | El bloque `finalmente` cierra el archivo |

---

## Ejercicio

Escriba un programa en pseudocódigo que realice las siguientes operaciones con manejo de excepciones:

1. Defina una función `dividir_seguro(a, b)` que intente dividir `a` entre `b`. Si `b` es igual a 0, lance una excepción con el mensaje `"No es posible dividir por cero"`. En caso contrario, devuelva el resultado de la división.

2. En el programa principal, solicite al usuario dos números (simule la entrada con variables `x = 10` e `y = 0`).

3. Invoque `dividir_seguro(x, y)` dentro de un bloque `intentar`-`capturar`. Si la división se realiza correctamente, muestre el resultado. Si se lanza una excepción, muestre el mensaje de error.

4. Agregue un bloque `finalmente` que muestre `"Operación finalizada"` independientemente del resultado.

5. Modifique el programa para que, en lugar de usar valores fijos, el segundo número pueda ser `2` (para probar el caso exitoso). Ejecute ambos casos.

A continuación, responda: ¿qué ventaja tiene utilizar excepciones en lugar de un `si` simple que verifique si `b == 0` y devuelva un valor especial como `-1`?
