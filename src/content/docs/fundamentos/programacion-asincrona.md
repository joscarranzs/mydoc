---
title: "Programación asíncrona"
module: fundamentos
submodule: programacion-asincrona
order: 11
---
# Programación asíncrona

## ¿Qué es la programación asíncrona?

La **programación asíncrona** es un paradigma que permite que un programa realice múltiples tareas sin bloquearse esperando a que cada una de ellas termine. En lugar de ejecutar todo en secuencia estricta (una operación detrás de otra), es posible iniciar una operación, continuar ejecutando otro código y recibir el resultado cuando esté disponible.

Puede entenderse mediante la analogía de un restaurante. En un restaurante síncrono, el camarero toma el pedido, espera en la cocina a que se prepare, sirve la comida y luego atiende a la siguiente mesa. En un restaurante asíncrono, el camarero toma el pedido, lo entrega a la cocina, sigue atendiendo otras mesas y, cuando la comida está lista, la cocina le avisa para que la sirva.

### Programación síncrona (el problema)

En la programación **síncrona** tradicional, cada operación espera a que la anterior finalice. Si una tarea requiere 5 segundos, todo el programa permanece detenido durante ese intervalo.

```
funcion procesar_archivos()
    datos = leer_archivo_grande("datos.txt")   // tarda 3 segundos
    resultado = procesar(datos)                 // tarda 2 segundos
    guardar(resultado)                          // tarda 1 segundo
    mostrar("Todo listo")
fin_funcion

// Durante 6 segundos, el programa no ejecuta ninguna otra operación
```

Si esto fuese una aplicación de escritorio o una página web, la interfaz se congelaría durante esos segundos. El usuario no podría hacer clic, escribir ni interactuar con la aplicación.

### Programación asíncrona (la solución)

La programación asíncrona permite iniciar una operación larga y **seguir ejecutando otro código** mientras esa operación se completa en segundo plano.

```
funcion procesar_archivos()
    asíncrono leer_archivo_grande("datos.txt", funcion(resultado)
        // esta función se ejecuta cuando el archivo esté disponible
        procesar(resultado)
    fin_funcion)
    mostrar("Leyendo archivo...")   // se ejecuta inmediatamente, sin esperar
fin_funcion

// El programa sigue respondiendo durante la lectura del archivo
```

## Ventajas y desventajas

### Ventajas

- **Interfaz no bloqueada**: la aplicación sigue respondiendo a clics, teclado y animaciones.
- **Mejor uso de recursos**: mientras se espera una respuesta de red, el procesador puede atender otras tareas.
- **Mayor rendimiento**: varias operaciones pueden solaparse en el tiempo.
- **Escalabilidad**: un servidor puede atender miles de conexiones simultáneas con pocos recursos.

### Desventajas

- **Complejidad adicional**: el flujo del programa ya no es estrictamente lineal.
- **Depuración más compleja**: los errores pueden ocurrir en momentos impredecibles.
- **Infierno de callbacks**: el código puede volverse profundamente anidado si no se gestiona adecuadamente.
- **Orden no garantizado**: no es posible determinar a priori el orden en que finalizarán las operaciones.

## Técnicas de programación asíncrona

Existen tres enfoques principales, ordenados de menor a mayor nivel de abstracción.

### 1. Callbacks

Un **callback** es una función que se proporciona como argumento a otra función y se ejecuta cuando la operación asíncrona finaliza.

```
funcion descargar_archivo(url, al_terminar)
    resultado = descarga_real(url)
    al_terminar(resultado)
fin_funcion

// Uso:
descargar_archivo("https://ejemplo.com/datos.json", funcion(contenido)
    mostrar("Descarga completada: " + contenido)
fin_funcion)

mostrar("Descarga iniciada...")   // se ejecuta antes que el callback
```

| Ventajas | Desventajas |
|---|---|
| Concepto simple y universal | **Infierno de callbacks**: anidamiento excesivo |
| No requiere sintaxis especial | Código difícil de leer y mantener |

El infierno de callbacks ocurre cuando múltiples operaciones asíncronas se encadenan mediante anidamiento:

```
funcion_1(url, funcion(r1)
    funcion_2(r1, funcion(r2)
        funcion_3(r2, funcion(r3)
            funcion_4(r3, funcion(r4)
                mostrar("Terminado: " + r4)
            fin_funcion)
        fin_funcion)
    fin_funcion)
fin_funcion)
```

### 2. Promesas

Una **promesa** (promise) es un objeto que representa un valor que estará disponible en el futuro. Puede encontrarse en tres estados:

- **Pendiente**: la operación aún no ha finalizado.
- **Resuelta (fulfilled)**: la operación se completó con éxito.
- **Rechazada (rejected)**: la operación falló.

```
funcion descargar(url)
    promesa = nueva Promesa(funcion(resolver, rechazar)
        resultado = descarga_real(url)
        si (resultado.exitoso) entonces
            resolver(resultado.datos)
        si_no
            rechazar("Error al descargar")
        fin_si
    fin_funcion)
    devolver promesa
fin_funcion

// Uso
descargar("https://ejemplo.com/datos.json")
    .entonces(funcion(datos)
        mostrar("Descargado: " + datos)
    fin_funcion)
    .capturar(funcion(error)
        mostrar("Error: " + error)
    fin_funcion)
```

El método `.entonces()` se ejecuta si la promesa se resuelve. `.capturar()` se ejecuta si se rechaza. Es posible encadenar varios `.entonces()` de forma lineal, sin anidamiento:

```
descargar("url1")
    .entonces(funcion(d1)
        devolver procesar(d1)
    fin_funcion)
    .entonces(funcion(d2)
        devolver guardar(d2)
    fin_funcion)
    .entonces(funcion(r)
        mostrar("Completado")
    fin_funcion)
    .capturar(funcion(e)
        mostrar("Error: " + e)
    fin_funcion)
```

| Ventajas | Desventajas |
|---|---|
| Elimina el anidamiento del infierno de callbacks | Curva de aprendizaje inicial |
| Manejo de errores unificado | Sintaxis más verbosa que código síncrono |
| Permite ejecución en paralelo | Puede derivar en infierno de promesas |

### 3. Asíncrono / esperar

`asíncrono/esperar` (async/await) es una capa de abstracción sobre las promesas. Permite escribir código asíncrono que **se lee como si fuera síncrono**, sin bloquear la ejecución del programa.

#### La palabra clave `asíncrono`

Anteponer `asíncrono` a una función transforma automáticamente su valor de retorno en una promesa. Toda función marcada como `asíncrono` devuelve implícitamente una promesa, independientemente de lo que contenga su bloque.

```
funcion asíncrono obtener_valor()
    devolver 42
fin_funcion

// Aunque devuelva un número literal, el resultado envuelto es una promesa
promesa = obtener_valor()          // promesa (no 42 directamente)
promesa.entonces(funcion(v)
    mostrar(v)                     // 42
fin_funcion)
```

#### La palabra clave `esperar`

`esperar` (await) solo puede utilizarse dentro de una función marcada como `asíncrono`. Su función es detener la ejecución de la función **sin bloquear el programa**, hasta que la promesa indicada se resuelva. Mientras la promesa está pendiente, el programa puede atender otras tareas.

```
funcion asíncrono procesar_archivos()
    intentar
        datos = esperar descargar("https://ejemplo.com/datos.json")
        resultado = procesar(datos)
        esperar guardar(resultado)
        mostrar("Todo listo")
    capturar (error)
        mostrar("Error: " + error)
    fin_intentar
fin_funcion

procesar_archivos()
mostrar("Esto se ejecuta inmediatamente")   // no espera a procesar_archivos
```

#### Errores comunes

| Error | Código incorrecto | Código correcto |
|---|---|---|
| Olvidar `asíncrono` en la función | `funcion obtener() { esperar ... }` | `funcion asíncrono obtener() { esperar ... }` |
| Olvidar `esperar` al invocar | `datos = descargar(url)` (devuelve promesa, no el valor) | `datos = esperar descargar(url)` |
| Usar `esperar` fuera de una función asíncrona | `esperar descargar(url)` en ámbito global | Envolver en `funcion asíncrono` |
| No capturar errores | `datos = esperar descargar(url)` sin `intentar` | Envolver en `intentar/capturar` |

```
// Ejemplo del error más frecuente
funcion asíncrono ejemplo()
    promesa = descargar("url")       // falta 'esperar': promesa, no el valor
    datos = esperar descargar("url") // correcto: 'datos' contiene el valor real
fin_funcion
```

#### Flujo interno

```
Llamada a función asíncrona:

   programa principal                 función asíncrona
        │                                   │
        ├── llama a funcion() ─────────────►│
        │                                   ├── encuentra "esperar"
        │   ┌──── "esperar" pausa ──────────┤
        │   │   la función sin              │
        │   │   bloquear el                 │
        │   │   programa                    │
        │   │                               │
        │   │   (el programa                │
        │   │   sigue ejecutando            │
        │   │   otras tareas)               │
        │   │                               │
        │   │                   promesa ────►│ se resuelve
        │   │◄──── reanuda ─────────────────┤
        │   │                               ├── continúa después de "esperar"
        │   │                               │
        │   │◄──── devuelve resultado ──────┤
        │                                   │
```

| Ventajas | Desventajas |
|---|---|
| Código lineal y legible | Requiere soporte nativo del lenguaje |
| Manejo de errores con `intentar/capturar` | Si se omite `esperar`, se obtiene una promesa en lugar del valor |
| No bloqueante internamente | Depende de la comprensión de promesas subyacente |
| Elimina por completo el anidamiento | No puede usarse en ámbitos no asíncronos |

### Comparativa de técnicas

| Aspecto | Callbacks | Promesas | Asíncrono/esperar |
|---|---|---|---|
| Legibilidad | Mala (anidamiento) | Buena (encadenamiento) | Excelente (lineal) |
| Manejo de errores | Individual | Unificado (`.capturar()`) | `intentar/capturar` |
| Curva de aprendizaje | Baja | Media | Media-alta |
| Riesgo principal | Infierno de callbacks | Infierno de promesas | Olvidar `esperar` |

## Ejecución secuencial vs paralela

Con `asíncrono/esperar` es posible lanzar varias operaciones en paralelo para reducir el tiempo total de ejecución:

```
// Secuencial: las operaciones se ejecutan una detrás de otra
funcion asíncrono secuencial()
    a = esperar descargar("url1")
    b = esperar descargar("url2")
    c = esperar descargar("url3")
    devolver [a, b, c]
fin_funcion
// Tiempo total: suma de los 3 tiempos individuales

// Paralelo: las operaciones se ejecutan simultáneamente
funcion asíncrono paralelo()
    p1 = descargar("url1")     // inicia inmediatamente
    p2 = descargar("url2")     // inicia inmediatamente
    p3 = descargar("url3")     // inicia inmediatamente

    a = esperar p1
    b = esperar p2
    c = esperar p3
    devolver [a, b, c]
fin_funcion
// Tiempo total: el mayor de los 3 tiempos individuales
```

## Asincronía vs hilos

| Aspecto | Hilos | Asincronía (bucle de eventos) |
|---|---|---|
| Ejecución | Simultánea real (múltiples núcleos) | Concurrente pero no simultánea (un solo hilo) |
| Recursos | Pesados (cada hilo consume memoria) | Ligeros (un solo hilo gestiona todo) |
| Complejidad | Alta (sincronización, condiciones de carrera) | Media |
| Ideal para | Cómputo intensivo (CPU-bound) | Operaciones de E/S (I/O-bound) |

La asincronía es óptima para operaciones de **entrada/salida** (red, archivos, bases de datos), donde la mayor parte del tiempo se invierte esperando. Los hilos son más adecuados para tareas que requieren **cálculo intensivo** (procesamiento de imágenes, renderizado 3D, compresión).

---

## Ejemplo

El siguiente pseudocódigo simula la descarga y procesamiento de archivos utilizando `asíncrono/esperar`:

```
INICIO
    funcion asíncrono descargar_archivo(nombre, tiempo)
        mostrar("Iniciando descarga de " + nombre)
        // Simula una descarga que toma 'tiempo' segundos
        esperar(tiempo)
        contenido = "Contenido de " + nombre
        mostrar(nombre + " descargado")
        devolver contenido
    fin_funcion

    funcion asíncrono procesar_archivos()
        intentar
            // Descargas en paralelo
            p1 = descargar_archivo("foto.jpg", 2)
            p2 = descargar_archivo("documento.pdf", 3)
            p3 = descargar_archivo("video.mp4", 4)

            foto = esperar p1
            doc = esperar p2
            video = esperar p3

            mostrar("Todos los archivos descargados")
            mostrar("Procesando: " + foto)
            mostrar("Procesando: " + doc)
            mostrar("Procesando: " + video)
            mostrar("Proceso completado")
        capturar (error)
            mostrar("Error durante la descarga: " + error)
        fin_intentar
    fin_funcion

    mostrar("Inicio del programa")
    procesar_archivos()
    mostrar("El programa continúa mientras se descargan los archivos")
FIN
```

**Salida esperada:**

```
Inicio del programa
Iniciando descarga de foto.jpg
Iniciando descarga de documento.pdf
Iniciando descarga de video.mp4
El programa continúa mientras se descargan los archivos
foto.jpg descargado
documento.pdf descargado
video.mp4 descargado
Todos los archivos descargados
Procesando: Contenido de foto.jpg
Procesando: Contenido de documento.pdf
Procesando: Contenido de video.mp4
Proceso completado
```

---

## Ejercicio

Escriba un programa en pseudocódigo que simule la consulta de datos desde tres fuentes diferentes:

1. Defina una función asíncrona `consultar_api(url, tiempo)` que:
   - Muestre `"Consultando: {url}"`.
   - Espere `tiempo` segundos (simule la latencia de red).
   - Devuelva `"Datos de {url}"`.

2. En una función `asíncrono obtener_datos_completos()`:
   - Lance las tres consultas **en paralelo**:
     - `"https://api.usuarios.com"` con 2 segundos
     - `"https://api.pedidos.com"` con 3 segundos
     - `"https://api.productos.com"` con 1 segundo
   - Espere a que todas finalicen.
   - Muestre cada resultado.
   - Capture cualquier error con `intentar/capturar`.

3. En el programa principal, invoque `obtener_datos_completos()` y muestre `"Solicitudes iniciadas..."` inmediatamente después.

A continuación, responda: ¿cuál es el tiempo total estimado de ejecución de las tres consultas? ¿Sería diferente si se ejecutasen de forma secuencial? ¿Cuál sería la diferencia?
