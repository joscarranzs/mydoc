# 04 - Web: Pruebas y calidad

## Tabla de contenido

- [Introducción](#introducción)
- [Concepto de testing](#concepto-de-testing)
- [Pruebas unitarias](#pruebas-unitarias)
- [Pruebas de integración](#pruebas-de-integración)
- [Prácticas de calidad](#prácticas-de-calidad)
- [Referencias](#referencias)

## Introducción

Testing y calidad aseguran que el software cumple su propósito y evita regresiones. Las pruebas van desde validaciones muy pequeñas e internas (unitarias) hasta escenarios reales que involucran varios servicios (integración y end-to-end).

## Concepto de testing

El testing reduce defectos y permite refactorizar con confianza. Tipos de pruebas clave:

- Unitarias: prueban una pequeña unidad de código en aislamiento.
- Integración: prueban la interacción entre componentes o servicios.
- End-to-end (E2E): simulan el flujo del usuario completo (por ejemplo con Playwright, Cypress).
- Testing de rendimiento: identifica cuellos de botella y límites.

Buenas prácticas:

- Automatiza pruebas con tu CI (GitHub Actions, GitLab CI).
- Prioriza cobertura en la lógica de negocio y endpoints críticos.

## Pruebas unitarias

Objetivo: verificar comportamiento de funciones o clases aisladas.

Herramientas comunes:

- JavaScript: Jest, Mocha + Chai
- Python: pytest, unittest
- Java: JUnit

Ejemplo (Jest — JavaScript):

```javascript
// sum.js
function sum(a, b) { return a + b; }
module.exports = sum;

// sum.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

Mocking:

- Aísla dependencias externas (DB, red) con mocks y stubs para testear sólo la unidad.
- En Jest: `jest.mock('./db')` o `sinon` en otros entornos.

## Pruebas de integración

Objetivo: validar que diferentes módulos funcionan juntos (DB, servicios, colas).

En ocasiones se usan bases de datos en memoria o test doubles (Docker containers con base de datos real) para mayor fidelidad.

Ejemplo (pytest en Python):

```python
def test_create_user(client, db):
    response = client.post('/users', json={'name': 'Alice'})
    assert response.status_code == 201
    assert db.query(User).filter_by(name='Alice').one()
```

Estrategias:

- Test containers: levantar servicios reales en contenedores para pruebas de integración.
- Fixtures: preparar y limpiar datos antes/después de pruebas.

## Prácticas de calidad

- Cobertura: mide cuánta parte del código está cubierta por tests; no es un objetivo en sí, prioriza pruebas efectivas.
- CI / Pre-commit: ejecutar tests y linters antes de submit PRs.
- Test automatizados: perf tests, contract tests (Pact) si hay microservicios.
- Review y flake-free tests: evita tests frágiles y asegura idempotencia.
- Observability: instrumenta tests con logs y metrics para depurar fallos en pipelines.

## Referencias

- Jest: https://jestjs.io/
- pytest: https://docs.pytest.org/
- Playwright / Cypress: https://playwright.dev/ https://www.cypress.io/
- Testcontainers: https://www.testcontainers.org/
