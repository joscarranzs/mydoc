
# 03 - Programación: Manejo de errores

## Tabla de contenido

- [Introducción](#introducción)
- [Excepciones](#excepciones)
- [Validación](#validación)
- [Flujos seguros](#flujos-seguros)
- [Referencias](#referencias)

## Introducción

El manejo de errores es crucial para construir software robusto y seguro. En este documento describimos excepciones, técnicas de validación de entrada y patrones para flujos seguros (transaccionalidad, idempotencia, fail-fast). También incluimos prácticas que reducen la superficie de fallo y facilitan la recuperación.

## Excepciones

Qué son:

- Errores que interrumpen el flujo normal y pueden ser capturados y manejados por el programa.

Principios:

- Captura local y maneja lo que puedas (close resources, normalizar inputs) y propaga lo que no puedas resolver.
- Evita capturar excepciones muy generales (por ejemplo `catch Exception`/`except:` sin filtrar) porque ocultan errores reales.
- Documenta qué excepciones lanza una API para que los consumidores sepan cómo recuperarse.

Ejemplos por lenguaje:

- Python:

```python
try:
    f = open('file.txt')
except FileNotFoundError:
    # handle
finally:
    f.close()
```

Context managers (`with open(...) as f:`) gestionan recursos de forma segura.

- Java:

```java
try {
    // ...
} catch (IOException e) {
    // recover
} finally {
    // release resources
}
```
	- Distinción checked/unchecked: decide si forzar manejo en compilación.

- Rust:

```rust
// Practica con Result<T, E> para retornos que puedan fallar
// El operador `?` permite propagar errores cómodamente
fn read_file(path: &str) -> Result<String, std::io::Error> {
    std::fs::read_to_string(path)
}
```

Buenas prácticas:

- No uses excepciones para control de flujo habitual.
- Limita el alcance del try/catch y maneja los recursos en `finally` o con context managers.
- En librerías públicas, devuelve errores que sean fáciles de manejar (tipos concretos, enums) en lugar de mensajes de texto libres.

## Validación

Objetivo:

- Rechazar entradas inválidas o inseguras lo antes posible (fail-fast) y con mensajes claros. La validación debe incluir formato, rango, permisos y límites.

Prácticas:

- Validar boundary conditions, tipos y length antes de procesar.
- Sanitizar entradas externas (URLs, JSON, formularios) para prevenir inyección y XSS.
- Validar datos en múltiples niveles: cliente (UX), servidor (seguridad) y base de datos (constraints).

Ejemplos:

- Validar un email con una función dedicada y normalizar a lowercase antes de comparar.
- Uso de esquemas (JSON Schema) para validar entradas estructuradas.

Herramientas:

- Python: pydantic, marshmallow para validación y parsing.
- Java: Hibernate Validator (Bean Validation).

## Flujos seguros

Patrones y estrategias:

- Fail-fast y validación: detecta errores temprano y reporta causas claras.
- Idempotencia: diseñar endpoints/operaciones para que repetir una operación (por ejemplo POST) no cause efectos secundarios duplicados (por ejemplo, con un idempotency key).
- Transacciones: agrupar operaciones que deben completarse todas o ninguna (DB transactions, 2PC cuando proceda).
- Retries y backoff: para operaciones transitorias (network calls), aplicar reintentos con backoff exponencial y límites.
- Circuit breaker: cortar las llamadas a dependencias degradadas para evitar colapsos en cascada.
- Timeouts: establecer límites de tiempo para evitar espera indefinida.

Operaciones críticas:

- Registrar fallos con contexto (logs estructurados) y propagar métricas/alertas.
- Usar técnicas de retry/queueing para cargas no críticas que deban reintentarse asincrónicamente.

Seguridad y resiliencia:

- Nunca exponer información sensible en mensajes de error.
- Aplicar validación y escapes antes de incluir datos en logs o respuestas.

## Referencias

### Libros (títulos)

- "Clean Code" — Robert C. Martin
- "Designing Data-Intensive Applications" — Martin Kleppmann (capítulos de resiliencia y tolerancia a fallos)

### Documentación oficial (vínculos)

- Python exceptions: https://docs.python.org/3/tutorial/errors.html
- Java exceptions: https://docs.oracle.com/javase/tutorial/essential/exceptions/
- Rust error handling: https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html
- Go error handling: https://go.dev/doc/effective_go#errors (Go uses explicit error returns rather than exceptions)
- JSON Schema: https://json-schema.org/

