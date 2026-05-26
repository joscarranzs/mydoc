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
FUNCION procesar_archivos()
    datos = leer_archivo_grande("datos.txt")   // tarda 3 segundos
    resultado = procesar(datos)                 // tarda 2 segundos
    guardar(resultado)                          // tarda 1 segundo
    ESCRIBIR("Todo listo")
FIN FUNCION

// Durante 6 segundos, el programa no ejecuta ninguna otra operación
```

Si esto fuese una aplicación de escritorio o una página web, la interfaz se congelaría durante esos segundos. El usuario no podría hacer clic, escribir ni interactuar con la aplicación.

### Programación asíncrona (la solución)

La programación asíncrona permite iniciar una operación larga y **seguir ejecutando otro código** mientras esa operación se completa en segundo plano.

```
FUNCION procesar_archivos()
    ASINCRONO leer_archivo_grande("datos.txt", FUNCION(resultado)
        // esta función se ejecuta cuando el archivo esté disponible
        procesar(resultado)
    FIN FUNCION)
    ESCRIBIR("Leyendo archivo...")   // se ejecuta inmediatamente, sin esperar
FIN FUNCION

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
FUNCION descargar_archivo(url, al_terminar)
    resultado = descarga_real(url)
    al_terminar(resultado)
FIN FUNCION

// Uso:
descargar_archivo("https://ejemplo.com/datos.json", funcion(contenido)
    ESCRIBIR("Descarga completada: " + contenido)
FIN FUNCION)

ESCRIBIR("Descarga iniciada...")   // se ejecuta antes que el callback
```

| Ventajas | Desventajas |
|---|---|
| Concepto simple y universal | **Infierno de callbacks**: anidamiento excesivo |
| No requiere sintaxis especial | Código difícil de leer y mantener |

El infierno de callbacks ocurre cuando múltiples operaciones asíncronas se encadenan mediante anidamiento:

```
funcion_1(url, FUNCION(r1)
    funcion_2(r1, FUNCION(r2)
        funcion_3(r2, FUNCION(r3)
            funcion_4(r3, FUNCION(r4)
                ESCRIBIR("Terminado: " + r4)
            FIN FUNCION)
        FIN FUNCION)
    FIN FUNCION)
FIN FUNCION)
```

### 2. Promesas

Una **promesa** (promise) es un objeto que representa un valor que estará disponible en el futuro. Puede encontrarse en tres estados:

- **Pendiente**: la operación aún no ha finalizado.
- **Resuelta (fulfilled)**: la operación se completó con éxito.
- **Rechazada (rejected)**: la operación falló.

```
FUNCION descargar(url)
    promesa = NUEVA Promesa(FUNCION(resolver, rechazar)
        resultado = descarga_real(url)
        SI (resultado.exitoso) ENTONCES
            resolver(resultado.datos)
        SINO
            rechazar("Error al descargar")
        FIN SI
    FIN FUNCION)
    RETORNAR promesa
FIN FUNCION

// Uso
descargar("https://ejemplo.com/datos.json")
    .entonces(FUNCION(datos)
        ESCRIBIR("Descargado: " + datos)
    FIN FUNCION)
    .capturar(FUNCION(error)
        ESCRIBIR("Error: " + error)
    FIN FUNCION)
```

El método `.entonces()` se ejecuta si la promesa se resuelve. `.capturar()` se ejecuta si se rechaza. Es posible encadenar varios `.entonces()` de forma lineal, sin anidamiento:

```
descargar("url1")
    .entonces(FUNCION(d1)
        RETORNAR procesar(d1)
    FIN FUNCION)
    .entonces(FUNCION(d2)
        RETORNAR guardar(d2)
    FIN FUNCION)
    .entonces(FUNCION(r)
        ESCRIBIR("Completado")
    FIN FUNCION)
    .capturar(FUNCION(e)
        ESCRIBIR("Error: " + e)
    FIN FUNCION)
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
FUNCION ASINCRONO obtener_valor()
    RETORNAR 42
FIN FUNCION

// Aunque devuelva un número literal, el resultado envuelto es una promesa
promesa = obtener_valor()          // promesa (no 42 directamente)
promesa.entonces(FUNCION(v)
    ESCRIBIR(v)                     // 42
FIN FUNCION)
```

#### La palabra clave `esperar`

`esperar` (await) solo puede utilizarse dentro de una función marcada como `asíncrono`. Su función es detener la ejecución de la función **sin bloquear el programa**, hasta que la promesa indicada se resuelva. Mientras la promesa está pendiente, el programa puede atender otras tareas.

```
FUNCION ASINCRONO procesar_archivos()
    INTENTAR
        datos = ESPERAR descargar("https://ejemplo.com/datos.json")
        resultado = procesar(datos)
        ESPERAR guardar(resultado)
        ESCRIBIR("Todo listo")
    CAPTURAR (error)
        ESCRIBIR("Error: " + error)
    FIN INTENTAR
FIN FUNCION

procesar_archivos()
ESCRIBIR("Esto se ejecuta inmediatamente")   // no espera a procesar_archivos
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
FUNCION ASINCRONO ejemplo()
    promesa = descargar("url")       // falta 'esperar': promesa, no el valor
    datos = ESPERAR descargar("url") // correcto: 'datos' contiene el valor real
FIN FUNCION
```

#### Flujo interno

```
Llamada a función asíncrona:

   programa principal                 función asíncrona
        │                                   │
        ├── llama a FUNCION() ─────────────►│
        │                                   ├── encuentra "ESPERAR"
        │   ┌──── "ESPERAR" pausa ──────────┤
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
        │   │                               ├── continúa después de "ESPERAR"
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
FUNCION ASINCRONO secuencial()
    a = ESPERAR descargar("url1")
    b = ESPERAR descargar("url2")
    c = ESPERAR descargar("url3")
    RETORNAR [a, b, c]
FIN FUNCION
// Tiempo total: suma de los 3 tiempos individuales

// Paralelo: las operaciones se ejecutan simultáneamente
FUNCION ASINCRONO paralelo()
    p1 = descargar("url1")     // inicia inmediatamente
    p2 = descargar("url2")     // inicia inmediatamente
    p3 = descargar("url3")     // inicia inmediatamente

    a = ESPERAR p1
    b = ESPERAR p2
    c = ESPERAR p3
    RETORNAR [a, b, c]
FIN FUNCION
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
    FUNCION ASINCRONO descargar_archivo(nombre, tiempo)
        ESCRIBIR("Iniciando descarga de " + nombre)
        // Simula una descarga que toma 'tiempo' segundos
        ESPERAR(tiempo)
        contenido = "Contenido de " + nombre
        ESCRIBIR(nombre + " descargado")
        RETORNAR contenido
    FIN FUNCION

    FUNCION ASINCRONO procesar_archivos()
        INTENTAR
            // Descargas en paralelo
            p1 = descargar_archivo("foto.jpg", 2)
            p2 = descargar_archivo("documento.pdf", 3)
            p3 = descargar_archivo("video.mp4", 4)

            foto = ESPERAR p1
            doc = ESPERAR p2
            video = ESPERAR p3

            ESCRIBIR("Todos los archivos descargados")
            ESCRIBIR("Procesando: " + foto)
            ESCRIBIR("Procesando: " + doc)
            ESCRIBIR("Procesando: " + video)
            ESCRIBIR("Proceso completado")
        CAPTURAR (error)
            ESCRIBIR("Error durante la descarga: " + error)
        FIN INTENTAR
    FIN FUNCION

    ESCRIBIR("Inicio del programa")
    procesar_archivos()
    ESCRIBIR("El programa continúa MIENTRAS se descargan los archivos")
FIN
```

**Salida esperada:**

```
Inicio del programa
Iniciando descarga de foto.jpg
Iniciando descarga de documento.pdf
Iniciando descarga de video.mp4
El programa continúa MIENTRAS se descargan los archivos
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
