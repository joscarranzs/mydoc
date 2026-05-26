---
title: "Estructuras de control"
module: fundamentos
submodule: estructuras-de-control
order: 5
---
# Estructuras de control

## ¿Qué son las estructuras de control?

Las **estructuras de control** determinan el flujo de ejecución de un programa. Sin ellas, el código se ejecutaría de forma estrictamente secuencial, línea por línea, de principio a fin, sin posibilidad de tomar decisiones o repetir bloques de código.

Puede entenderse un programa como una carretera. Las estructuras de control son las señales de tráfico: intersecciones que permiten decidir qué dirección tomar (decisiones), rotondas que permiten dar vueltas controladas (repeticiones) y tramos rectos (secuencia). Sin estas señales, solo sería posible avanzar en línea recta.

Existen tres categorías fundamentales de estructuras de control: **secuenciales**, **condicionales** y **repetitivas** (bucles).

## Estructuras secuenciales

Es el flujo más básico. El código se ejecuta línea por línea, de arriba abajo, en el orden en que está escrito. Cada instrucción espera a que la anterior termine antes de ejecutarse.

```
entrada = leer_teclado()
resultado = entrada * 2
ESCRIBIR(resultado)
```

No existen saltos, decisiones ni repeticiones. Es el comportamiento predeterminado de cualquier programa.

## Estructuras condicionales

Las estructuras condicionales permiten ejecutar un bloque de código únicamente si se cumple una condición determinada. Constituyen el mecanismo mediante el cual un programa toma decisiones.

### Si (if)

Evalúa una condición booleana. Si es verdadera, ejecuta el bloque asociado. Si es falsa, lo omite.

```
edad = 18

SI (edad >= 18) ENTONCES
    ESCRIBIR("Puedes votar")
FIN SI
```

Si `edad` fuese 15, el programa no mostraría ningún mensaje.

### Si-no (if-else)

Añade un camino alternativo que se ejecuta cuando la condición es falsa. Siempre se ejecuta uno de los dos bloques, nunca ambos.

```
edad = 15

SI (edad >= 18) ENTONCES
    ESCRIBIR("Puedes votar")
SINO
    ESCRIBIR("No puedes votar")
FIN SI
```

### Condiciones anidadas

Es posible encadenar múltiples condiciones para cubrir varios casos. El programa evalúa de arriba abajo y, en cuanto encuentra una condición verdadera, ejecuta el bloque correspondiente y abandona la estructura.

```
nota = 85

SI (nota >= 90) ENTONCES
    ESCRIBIR("Sobresaliente")
SINO SI (nota >= 70) ENTONCES
    ESCRIBIR("Notable")
SINO SI (nota >= 50) ENTONCES
    ESCRIBIR("Aprobado")
SINO
    ESCRIBIR("Suspenso")
FIN SI
```

### Según (switch / match)

Cuando se tienen múltiples condiciones basadas en un mismo valor, la estructura `según` resulta más legible que una cadena de `si` anidados.

```
según (dia) HACER
    CASO 1: ESCRIBIR("Lunes")
    CASO 2: ESCRIBIR("Martes")
    CASO 3: ESCRIBIR("Miércoles")
    CASO 4: ESCRIBIR("Jueves")
    CASO 5: ESCRIBIR("Viernes")
    CASO 6: ESCRIBIR("Sábado")
    CASO 7: ESCRIBIR("Domingo")
    DE OTRO MODO: ESCRIBIR("Día inválido")
fin_según
```

Cada `caso` representa un valor posible. La cláusula `defecto` captura cualquier valor no contemplado.

### Comparativa de condicionales

| Aspecto | Si (if) | Según (switch) |
|---|---|---|
| Condición | Cualquier expresión booleana | Un solo valor por comparación |
| Legibilidad | Mejor con rangos o lógica compleja | Mejor con muchos valores fijos |
| Flexibilidad | Alta (condiciones combinadas) | Baja (solo igualdad) |

## Estructuras repetitivas (bucles)

Los bucles permiten ejecutar un bloque de código múltiples veces sin tener que escribirlo repetidamente.

### Mientras (while)

Repite un bloque **mientras** una condición sea verdadera. Si la condición es falsa desde el inicio, el bloque no se ejecuta nunca.

```
contador = 1

MIENTRAS (contador <= 5) HACER
    ESCRIBIR(contador)
    contador = contador + 1
FIN MIENTRAS

// Salida: 1 2 3 4 5
```

Debe evitarse que la condición permanezca siempre verdadera, ya que esto genera un **bucle infinito**:

```
MIENTRAS (VERDADERO) HACER      // bucle infinito
    ESCRIBIR("Esto NO termina")
FIN MIENTRAS
```

### Hacer-mientras (do-while)

Similar a `mientras`, pero ejecuta el bloque **antes** de evaluar la condición. Esto garantiza que el bloque se ejecute al menos una vez.

```
contador = 1

HACER
    ESCRIBIR(contador)
    contador = contador + 1
MIENTRAS (contador <= 5)

// Salida: 1 2 3 4 5
```

### Para (for)

Ejecuta un bloque un número determinado de veces. Está compuesto por tres partes: inicialización, condición y actualización.

```
PARA (i = 1; i <= 5; i = i + 1) HACER
    ESCRIBIR(i)
FIN PARA

// Salida: 1 2 3 4 5
```

- **Inicialización**: `i = 1` — se ejecuta una vez al comenzar.
- **Condición**: `i <= 5` — se evalúa antes de cada iteración.
- **Actualización**: `i = i + 1` — se ejecuta al final de cada iteración.

### Para-cada (for-each)

Variante del `para` que recorre todos los elementos de una colección sin necesidad de gestionar un índice manualmente.

```
numeros = [10, 20, 30, 40]

PARA CADA numero en numeros HACER
    ESCRIBIR(numero)
FIN PARA

// Salida: 10 20 30 40
```

### Comparativa de bucles

| Bucle | Cuándo utilizarlo | ¿Se ejecuta 0 veces? |
|---|---|---|
| `mientras` | Número de iteraciones desconocido | Sí |
| `hacer-mientras` | Se requiere al menos una ejecución | No (mínimo 1) |
| `para` | Número exacto de iteraciones conocido | Sí |
| `para-cada` | Recorrer todos los elementos de una colección | Sí (si está vacía) |

### Control de flujo dentro de bucles

Dos instrucciones permiten modificar el comportamiento estándar de un bucle:

- **Romper (break)**: finaliza el bucle inmediatamente, sin completar las iteraciones restantes.
- **Continuar (continue)**: salta el resto del bloque actual y pasa a la siguiente iteración.

```
// Romper: sale del bucle al llegar a 5
PARA (i = 1; i <= 10; i = i + 1) HACER
    SI (i == 5) ENTONCES
        ROMPER
    FIN SI
    ESCRIBIR(i)
FIN PARA
// Salida: 1 2 3 4

// Continuar: se salta el 3 pero continúa con el resto
PARA (i = 1; i <= 5; i = i + 1) HACER
    SI (i == 3) ENTONCES
        CONTINUAR
    FIN SI
    ESCRIBIR(i)
FIN PARA
// Salida: 1 2 4 5
```

### Bucles anidados

Es posible colocar un bucle dentro de otro. Esto resulta útil para recorrer estructuras bidimensionales como matrices o tablas.

```
PARA (i = 1; i <= 3; i = i + 1) HACER
    PARA (j = 1; j <= 3; j = j + 1) HACER
        ESCRIBIR(i * j)
    FIN PARA
FIN PARA

// Salida: 1 2 3 2 4 6 3 6 9
```

Por cada valor de `i`, el bucle interno `j` se ejecuta por completo. Si el bucle externo realiza 3 iteraciones y el interno 3, el total es de 9 ejecuciones del bloque interno.

---

## Ejemplo

El siguiente pseudocódigo integra estructuras secuenciales, condicionales y repetitivas para procesar las calificaciones de un grupo de estudiantes:

```
INICIO
    // Estructura secuencial
    ESCRIBIR("=== Sistema de calificaciones ===")

    // Estructura condicional
    estudiantes = ["Ana", "Carlos", "Maria"]
    notas = [85, 42, 73]

    PARA i = 0 hasta longitud(estudiantes) - 1 HACER
        nombre = estudiantes[i]
        nota = notas[i]

        // Condicional anidado para asignar calificación
        SI (nota >= 90) ENTONCES
            calificacion = "Sobresaliente"
        SINO SI (nota >= 70) ENTONCES
            calificacion = "Notable"
        SINO SI (nota >= 50) ENTONCES
            calificacion = "Aprobado"
        SINO
            calificacion = "Suspenso"
        FIN SI

        // Estructura condicional simple
        SI (nota < 50) ENTONCES
            ESCRIBIR(nombre + " debe recuperar")
        FIN SI

        ESCRIBIR(nombre + ": " + nota + " (" + calificacion + ")")
    FIN PARA

    ESCRIBIR("=== Proceso completado ===")
FIN
```

**Salida esperada:**

```
=== Sistema de calificaciones ===
Ana: 85 (Notable)
Carlos: 42 (Suspenso)
Carlos debe recuperar
Maria: 73 (Notable)
=== Proceso completado ===
```

---

## Ejercicio

Escriba un programa en pseudocódigo que realice lo siguiente:

1. Declare una variable `numero_secreto` con valor `7`.
2. Declare una variable `intento` con valor `0`.
3. Utilice un bucle `mientras` que se ejecute mientras `intento` sea distinto de `numero_secreto`.
4. Dentro del bucle, solicite al usuario que ingrese un número y lo almacene en `intento`.
5. Fuera del bucle, muestre el mensaje `"¡Acertaste!"`.
6. Modifique el programa para que, además, cuente cuántos intentos realizó el usuario y muestre ese número al final.

A continuación, responda: ¿qué ocurriría si se reemplazase `mientras` por `hacer-mientras` en este ejercicio? ¿Cambiaría el comportamiento del programa?
