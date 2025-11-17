# 04 - Web: Bases de datos

## Tabla de contenido

- [Introducción](#introducción)
- [Relacionales vs. NoSQL](#relacionales-vs-nosql)
- [Consultas básicas](#consultas-básicas)
- [Relaciones y normalización](#relaciones-y-normalización)
- [Modelo entidad-relación](#modelo-entidad-relación)
- [Referencias](#referencias)

## Introducción

Las bases de datos almacenan, recuperan y mantienen la integridad de los datos. En la Web y aplicaciones modernas, elegir el modelo correcto (relacional o NoSQL) y usar buenas prácticas de modelado garantiza rendimiento, mantenibilidad y consistencia.

## Relacionales vs. NoSQL

Relacionales (SQL):

- Basadas en tablas con filas y columnas (ej. PostgreSQL, MySQL).
- Fuerte esquema (schema) y tipos estáticos por columna.
- Soportan transacciones ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad).
- Buenas para datos relacionales y consultas complejas (joins, agregaciones).

NoSQL (familias principales):

- Document stores (MongoDB, CouchDB): almacenan documentos JSON-like; flexibilidad de esquema.
- Key-Value stores (Redis, DynamoDB): valor simple por clave; alta velocidad.
- Columnar stores (Cassandra): diseñadas para escalabilidad en escritura/lectura a gran escala.
- Graph databases (Neo4j): para relaciones explícitas y consultas de grafos.

Comparativa:

- SQL ofrece garantías de consistencia y un lenguaje de consultas (SQL) potente.
- NoSQL ofrece flexibilidad de esquema y escala horizontal más sencilla en muchos casos.
- Elección depende del caso de uso: coherencia vs. escalamiento, relaciones complejas vs. datos semiestructurados.

## Consultas básicas

SQL (ejemplos):

```sql
-- Seleccionar columnas
SELECT id, name FROM users WHERE active = true;

-- JOIN entre tablas
SELECT u.name, o.total
FROM users u
JOIN orders o ON o.user_id = u.id
WHERE o.created_at > '2025-01-01';

-- Agregaciones
SELECT user_id, COUNT(*) as cnt FROM orders GROUP BY user_id;
```

NoSQL (MongoDB-like):

```js
// Buscar documentos
db.users.find({ active: true }, { name: 1, email: 1 })

// Agregación (pipeline)
db.orders.aggregate([
  { $match: { status: 'completed' } },
  { $group: { _id: '$user_id', total: { $sum: '$amount' } } }
]);
```

Consideraciones de consultas:

- Índices: esenciales para consultas rápidas (B-tree, hash, GIN, etc.).
- Optimización: evita SELECT * y planifica índices según consultas frecuentes.
- Caching: usar Redis o in-memory caches para reducir carga en la BD.

## Relaciones y normalización

Las relaciones permiten modelar dependencias entre entidades. En SQL, las relaciones se expresan con claves foráneas (FOREIGN KEY).

Normalización (1NF, 2NF, 3NF):

- 1NF: cada columna contiene valores atómicos.
- 2NF: eliminar dependencias parciales sobre una clave compuesta.
- 3NF: eliminar dependencias transitivas.

Objetivo: evitar redundancia y anomalías de actualización; sin embargo, a veces se desnormaliza por razones de rendimiento (lecturas más rápidas a costa de duplicación de datos).

En NoSQL, el modelado a menudo prefiere documentos anidados y duplicación controlada para lecturas rápidas. Se debe decidir entre normalizar (referencias) y denormalizar (embebido) según la carga de lectura/escritura.

## Modelo entidad-relación

El ER model es una técnica visual para diseñar el esquema de la base de datos:

- Entidades: objetos principales (User, Order, Product).
- Atributos: propiedades de entidades (name, price, email).
- Relaciones: cardinalidad (1:1, 1:N, N:M) entre entidades.

Ejemplo: Usuarios y Pedidos (1:N)

- User (id, name, email)
- Order (id, user_id, total, created_at)

Relaciones N:M usan tablas intermedias (join tables):

- Product (id, name)
- OrderProduct (order_id, product_id, quantity)

Herramientas de diagramado: draw.io, dbdiagram.io, MySQL Workbench, PgModeler.

## Referencias

- PostgreSQL: https://www.postgresql.org/docs/
- MongoDB docs: https://www.mongodb.com/docs/
- Redis docs: https://redis.io/documentation
- ER modeling: https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model
- Database normalization: https://en.wikipedia.org/wiki/Database_normalization
