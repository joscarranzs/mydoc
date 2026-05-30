---
title: Referencia
description: API completa de JS.
module: lenguajes/javascript
submodule: general
order: 39
---

Al completar esta guía podrás:

- Consultar rápidamente los métodos y propiedades esenciales
- Identificar la API correcta para cada tarea
- Usar esta referencia como guía rápida

---

## Tipos

```javascript
typeof valor         // "string", "number", "boolean", "object", "undefined", "function", "bigint", "symbol"
valor instanceof Clase  // true si valor es instancia de Clase
Number.isInteger(n)     // true si n es entero
Number.isNaN(n)         // true si n es NaN
Array.isArray(arr)      // true si arr es arreglo
```

---

## Strings

```javascript
str.length                  // Longitud
str[index]                  // Carácter en posición
str.toUpperCase()           // Mayúsculas
str.toLowerCase()           // Minúsculas
str.includes(sub)           // Contiene sub?
str.indexOf(sub)            // Primera posición de sub
str.slice(inicio, fin)      // Extrae entre índices
str.substring(inicio, fin)  // Extrae (sin negativos)
str.replace(a, b)           // Reemplaza primera ocurrencia
str.replaceAll(a, b)        // Reemplaza todas
str.split(sep)              // Divide en arreglo
str.trim()                  // Elimina espacios extremos
str.startsWith(sub)         // Empieza con sub?
str.endsWith(sub)           // Termina con sub?
str.repeat(n)               // Repite n veces
str.padStart(n, c)          // Rellena al inicio
str.padEnd(n, c)            // Rellena al final
```

---

## Números

```javascript
Number(n)                   // Convierte a número
parseInt(str, base)         // Entero desde string
parseFloat(str)             // Decimal desde string
n.toFixed(d)                // String con d decimales
n.toPrecision(d)            // String con d dígitos significativos
Math.round(n)               // Redondea
Math.floor(n)               // Redondea abajo
Math.ceil(n)                // Redondea arriba
Math.trunc(n)               // Elimina decimales
Math.abs(n)                 // Valor absoluto
Math.pow(base, exp)         // Potencia
Math.sqrt(n)                // Raíz cuadrada
Math.random()               // Aleatorio [0, 1)
Math.max(...nums)           // Máximo
Math.min(...nums)           // Mínimo
```

---

## Fechas

```javascript
new Date()                  // Fecha actual
new Date(año, mes-1, día)  // Fecha específica
date.getFullYear()          // Año
date.getMonth()             // Mes (0-11)
date.getDate()              // Día (1-31)
date.getDay()               // Día semana (0-6)
date.getHours()             // Hora (0-23)
date.getMinutes()           // Minutos
date.getSeconds()           // Segundos
date.getTime()              // Timestamp (ms)
date.toLocaleDateString()   // Fecha formateada
date.toISOString()          // ISO 8601
Date.now()                  // Timestamp actual
```

---

## Arreglos

```javascript
arr.push(valor)             // Agrega al final
arr.pop()                   // Elimina del final
arr.unshift(valor)          // Agrega al inicio
arr.shift()                 // Elimina del inicio
arr[index]                  // Acceso por índice
arr.length                  // Longitud
arr.includes(valor)         // Contiene valor?
arr.indexOf(valor)          // Índice de valor
arr.find(fn)                // Primer elemento que cumple
arr.findIndex(fn)           // Índice del primero que cumple
arr.filter(fn)              // Nuevo arreglo filtrado
arr.map(fn)                 // Nuevo arreglo transformado
arr.reduce(fn, init)        // Valor acumulado
arr.sort(fn)                // Ordena (muta)
arr.slice(inicio, fin)      // Extrae (no muta)
arr.splice(inicio, n)       // Elimina/inserta (muta)
arr.flat(n)                 // Aplana
arr.flatMap(fn)             // Mapa + aplanado
arr.some(fn)                // Alguno cumple?
arr.every(fn)               // Todos cumplen?
arr.forEach(fn)             // Itera (no retorna)
[...arr]                    // Spread (copia)
```

---

## Objetos

```javascript
Object.keys(obj)            // Arreglo de claves
Object.values(obj)          // Arreglo de valores
Object.entries(obj)         // Arreglo de [clave, valor]
Object.fromEntries(entries) // Objeto desde pares
Object.assign(dest, src)    // Copia propiedades
{ ...obj }                  // Spread
Object.freeze(obj)          // Inmutable
Object.seal(obj)            // No agregar/eliminar
"clave" in obj              // Existe (propia o heredada)?
obj.hasOwnProperty("clave") // Solo propia?
delete obj.clave            // Eliminar propiedad
```

---

## Set y Map

```javascript
// Set
new Set(iterable)           // Crear
set.add(valor)              // Agregar
set.has(valor)              // Existe?
set.delete(valor)           // Eliminar
set.size                    // Tamaño
set.clear()                 // Vaciar
[...set]                    // Convertir a arreglo

// Map
new Map(entries)            // Crear
map.set(clave, valor)       // Asignar
map.get(clave)              // Obtener
map.has(clave)              // Existe?
map.delete(clave)           // Eliminar
map.size                    // Tamaño
map.clear()                 // Vaciar
map.keys()                  // Iterador claves
map.values()                // Iterador valores
map.entries()               // Iterador [clave, valor]
```

---

## Promesas y async

```javascript
new Promise((resolve, reject) => {})
promesa.then(fn, fn)
promesa.catch(fn)
promesa.finally(fn)
Promise.all([p1, p2])       // Espera todas (falla rápido)
Promise.allSettled([p1])    // Espera todas (nunca falla)
Promise.race([p1, p2])      // La primera en resolverse
Promise.any([p1, p2])       // La primera exitosa

async function fn() {}
let valor = await promesa;
```

---

## DOM

```javascript
document.getElementById(id)
document.querySelector(selector)
document.querySelectorAll(selector)
document.createElement(tag)
element.textContent
element.innerHTML
element.setAttribute(n, v)
element.getAttribute(n)
element.classList.add("c")
element.classList.remove("c")
element.classList.toggle("c")
element.style.propiedad
element.addEventListener(event, fn)
element.removeEventListener(event, fn)
element.remove()
parent.appendChild(child)
parent.prepend(child)
parent.insertBefore(child, ref)
e.target           // Elemento que originó el evento
e.currentTarget    // Elemento del listener
e.preventDefault() // Detiene comportamiento por defecto
```

---

## Window

```javascript
setTimeout(fn, ms)
setInterval(fn, ms)
clearTimeout(id)
clearInterval(id)
location.href
location.assign(url)
location.replace(url)
location.reload()
history.back()
history.forward()
localStorage.getItem(key)
localStorage.setItem(key, val)
sessionStorage.getItem(key)
sessionStorage.setItem(key, val)
fetch(url, options)
JSON.stringify(val)
JSON.parse(str)
```

---

## console

```javascript
console.log(valor)
console.error(valor)
console.warn(valor)
console.table(arr)
console.time("id") / console.timeEnd("id")
console.group("label") / console.groupEnd()
console.assert(cond, msg)
```
