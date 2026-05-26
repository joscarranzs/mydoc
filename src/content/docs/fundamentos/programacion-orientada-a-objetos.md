---
title: "Programación orientada a objetos"
module: fundamentos
submodule: programacion-orientada-a-objetos
order: 7
---
# Programación orientada a objetos

## ¿Qué es la programación orientada a objetos?

La **programación orientada a objetos** (POO) es un paradigma de programación que organiza el código en torno a **objetos** que representan entidades del mundo real, en lugar de estructurarlo alrededor de funciones independientes y datos dispersos.

En este paradigma, los objetos poseen **atributos** (datos que describen su estado) y **métodos** (comportamientos que pueden ejecutar). La POO busca que el código sea más intuitivo, reutilizable y mantenible, modelando los problemas en términos de las entidades que los componen.

## Clases y objetos

### Clase

Una **clase** es una plantilla o molde que define la estructura y el comportamiento que tendrán los objetos de un determinado tipo. No constituye un objeto en sí misma, sino la especificación de cómo serán los objetos que se creen a partir de ella.

```
clase Coche
    atributos:
        marca
        modelo
        color
        velocidad

    metodos:
        funcion arrancar()
            // codigo para arrancar
        fin_funcion

        funcion acelerar(incremento)
            velocidad = velocidad + incremento
        fin_funcion
fin_clase
```

La clase `Coche` define que todo coche tendrá marca, modelo, color y velocidad, y podrá ejecutar las acciones de arrancar y acelerar. No obstante, la clase en sí no es un coche: es el plano conceptual a partir del cual se crearán coches concretos.

### Objeto

Un **objeto** es una instancia concreta de una clase. Es decir, un ejemplar real construido a partir del molde proporcionado por la clase.

```
coche1 = nuevo Coche()
coche1.marca = "Toyota"
coche1.modelo = "Corolla"
coche1.color = "Rojo"
coche1.arrancar()

coche2 = nuevo Coche()
coche2.marca = "Honda"
coche2.modelo = "Civic"
coche2.color = "Azul"
coche2.arrancar()
```

`coche1` y `coche2` son objetos distintos. Cada uno posee sus propios valores para los atributos, pero ambos comparten la estructura y los comportamientos definidos en la clase `Coche`.

| Clase (plantilla) | Objeto (instancia) |
|---|---|
| Plano de una casa | Una casa construida |
| Receta de cocina | Un pastel horneado |
| Definición de `Usuario` | "Ana", un usuario concreto |

```
clase Usuario
    atributos:
        nombre
        email
        edad

    metodos:
        funcion saludar()
            mostrar("Hola, soy " + nombre)
        fin_funcion
fin_clase

usuario1 = nuevo Usuario()
usuario1.nombre = "Ana"
usuario1.email = "ana@email.com"
usuario1.edad = 25
usuario1.saludar()          // "Hola, soy Ana"
```

## Atributos y métodos

Los objetos se componen de dos tipos de elementos:

### Atributos (propiedades)

Son las **características** del objeto. Definen su estado en un momento determinado.

```
clase Producto
    atributos:
        nombre
        precio
        stock
        categoria
fin_clase
```

Cada objeto `Producto` tendrá sus propios valores para `nombre`, `precio`, `stock` y `categoria`. Dos productos pueden compartir la misma estructura pero contener valores distintos.

### Métodos (comportamientos)

Son las **acciones** que el objeto puede ejecutar. Se trata de funciones que pertenecen al objeto y que, por lo general, operan sobre sus propios atributos.

```
clase Contador
    atributos:
        valor = 0

    metodos:
        funcion incrementar()
            valor = valor + 1
        fin_funcion

        funcion decrementar()
            valor = valor - 1
        fin_funcion

        funcion mostrar_valor()
            mostrar(valor)
        fin_funcion
fin_clase
```

## Los cuatro pilares de la POO

La programación orientada a objetos se fundamenta en cuatro principios fundamentales.

### 1. Herencia

La **herencia** permite que una clase derive de otra, heredando sus atributos y métodos. De este modo, es posible crear clases más específicas a partir de clases más generales, reutilizando el código existente.

```
clase Animal
    atributos:
        nombre
        edad

    metodos:
        funcion respirar()
            // todos los animales respiran
        fin_funcion
fin_clase

clase Perro hereda de Animal
    atributos:
        raza

    metodos:
        funcion ladrar()
            mostrar("Guau")
        fin_funcion
fin_clase

clase Gato hereda de Animal
    metodos:
        funcion maullar()
            mostrar("Miau")
        fin_funcion
fin_clase
```

`Perro` y `Gato` heredan de `Animal`: ambos disponen de `nombre`, `edad` y el método `respirar`, sin necesidad de definirlos nuevamente. Cada clase hija añade sus propios atributos y métodos específicos.

```
perro = nuevo Perro()
perro.nombre = "Rex"
perro.respirar()     // heredado de Animal
perro.ladrar()       // propio de Perro
```

### 2. Polimorfismo

El **polimorfismo** (del griego "muchas formas") permite que objetos de distintas clases respondan al mismo mensaje de formas diferentes. Esto posibilita escribir código que opere con cualquier objeto de una jerarquía sin importar su tipo concreto.

```
clase Animal
    funcion hacer_sonido()
        // cada animal lo implementa a su manera
    fin_funcion
fin_clase

clase Perro hereda de Animal
    funcion hacer_sonido()
        mostrar("Guau")
    fin_funcion
fin_clase

clase Gato hereda de Animal
    funcion hacer_sonido()
        mostrar("Miau")
    fin_funcion
fin_clase
```

```
animales = [nuevo Perro(), nuevo Gato()]

para cada animal en animales hacer
    animal.hacer_sonido()   // cada uno responde con su propia implementacion
fin_para
// Salida: Guau  Miau
```

### 3. Encapsulamiento

El **encapsulamiento** consiste en ocultar los detalles internos de un objeto y exponer únicamente una interfaz controlada. El objeto protege sus datos y solo permite acceder a ellos o modificarlos a través de sus métodos públicos.

```
clase CuentaBancaria
    privado:
        saldo          // no accesible desde el exterior

    publico:
        funcion depositar(cantidad)
            si (cantidad > 0) entonces
                saldo = saldo + cantidad
            fin_si
        fin_funcion

        funcion retirar(cantidad)
            si (cantidad <= saldo) entonces
                saldo = saldo - cantidad
            fin_si
        fin_funcion

        funcion consultar_saldo()
            devolver saldo
        fin_funcion
fin_clase
```

No es posible modificar `saldo` directamente desde el exterior:

```
cuenta.saldo = 1000000   // error: saldo es privado
cuenta.depositar(500)    // correcto: se accede a traves del metodo publico
```

**Beneficios del encapsulamiento:**

- **Protección**: evita que los datos internos se modifiquen de forma incorrecta o no autorizada.
- **Flexibilidad**: es posible modificar la implementación interna sin afectar al código que utiliza la clase.
- **Mantenibilidad**: se reduce el acoplamiento entre componentes del sistema.

### 4. Abstracción

La **abstracción** consiste en modelar únicamente los aspectos relevantes de una entidad para el problema en cuestión, ignorando los detalles innecesarios. Se conserva la interfaz esencial y se oculta la complejidad interna.

```
clase EmailServicio
    funcion enviar_email(destino, asunto, cuerpo)
        // 1. Conectar al servidor SMTP (complejidad oculta)
        // 2. Autenticarse (complejidad oculta)
        // 3. Formatear el mensaje (complejidad oculta)
        // 4. Enviar (complejidad oculta)
    fin_funcion
fin_clase

// Quien utiliza la clase solo necesita esto:
email = nuevo EmailServicio()
email.enviar_email("ana@email.com", "Hola", "¿Como estas?")
```

### Comparativa de los cuatro pilares

| Pilar | Función | Analogía |
|---|---|---|
| **Herencia** | Reutilizar código entre clases | Un hijo hereda rasgos de sus padres |
| **Polimorfismo** | Misma interfaz, distinto comportamiento | El mismo botón "encender" funciona en TV, radio y microondas |
| **Encapsulamiento** | Proteger datos internos | Cajero automático: solo se permite operaciones autorizadas |
| **Abstracción** | Ocultar complejidad innecesaria | Conducir un coche sin conocer el funcionamiento del motor |

---

## Ejemplo

El siguiente pseudocódigo modela un sistema básico de gestión de biblioteca utilizando los principios de la POO:

```
clase Libro
    atributos:
        titulo
        autor
        disponible = verdadero

    metodos:
        funcion prestar()
            si (disponible) entonces
                disponible = falso
                mostrar("Libro prestado: " + titulo)
            si_no
                mostrar("El libro no esta disponible")
            fin_si
        fin_funcion

        funcion devolver()
            disponible = verdadero
            mostrar("Libro devuelto: " + titulo)
        fin_funcion
fin_clase

// Programa principal
INICIO
    libro1 = nuevo Libro()
    libro1.titulo = "Cien anios de soledad"
    libro1.autor = "Gabriel Garcia Marquez"

    libro2 = nuevo Libro()
    libro2.titulo = "1984"
    libro2.autor = "George Orwell"

    libro1.prestar()      // "Libro prestado: Cien anios de soledad"
    libro1.prestar()      // "El libro no esta disponible"
    libro1.devolver()     // "Libro devuelto: Cien anios de soledad"
    libro2.prestar()      // "Libro prestado: 1984"
FIN
```

**Salida esperada:**

```
Libro prestado: Cien anios de soledad
El libro no esta disponible
Libro devuelto: Cien anios de soledad
Libro prestado: 1984
```

---

## Ejercicio

Modele un sistema de vehículos utilizando los principios de la POO en pseudocódigo:

1. Defina una clase `Vehiculo` con los atributos `marca`, `modelo` y `velocidad` (iniciada en 0). Incluya un método `acelerar(cantidad)` que incremente la velocidad y un método `mostrar_velocidad()` que la muestre.

2. Defina una clase `Bicicleta` que **herede** de `Vehiculo`. Sobrescriba el método `acelerar(cantidad)` para que la velocidad aumente la mitad de lo que aumenta en un vehículo genérico (por ejemplo, si `cantidad` es 10, la bicicleta solo acelera 5).

3. En el programa principal, cree un objeto de `Vehiculo` y uno de `Bicicleta`, acelere ambos con la misma cantidad y muestre sus velocidades.

A continuación, responda: ¿qué pilar de la POO se está aplicando al sobrescribir el método `acelerar` en `Bicicleta`? ¿Por qué?
