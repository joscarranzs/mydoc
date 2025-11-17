# 04 - Web: Versionado y herramientas

## Tabla de contenido

- [Introducción](#introducción)
- [Git: commit, branch, merge](#git-commit-branch-merge)
- [Paquetería: npm, pip, etc.](#paquetería-npm-pip-etc)
- [Entornos de desarrollo](#entornos-de-desarrollo)
- [Referencias](#referencias)

## Introducción

Este documento resume herramientas esenciales para el desarrollo moderno: control de versiones con Git, la gestión de dependencias y paquetes (npm, pip), y cómo configurar entornos de desarrollo reproducibles (virtualenv, Docker, DevContainers).

## Git: commit, branch, merge

Conceptos clave:

- Commit: punto en la historia del proyecto que contiene cambios y un mensaje descriptivo.
- Branch: líneas de desarrollo paralelas — por ejemplo `main`, `feature/login`.
- Merge: combinar cambios de una rama a otra; puede haber conflictos que requieren resolución.

Flujo recomendado (Git flow simplificado):

1. Crear una rama para una tarea: `git checkout -b feature/mi-cambio`
2. Hacer commits atómicos y con mensajes claros: `git add . && git commit -m "feat(auth): support refresh tokens"`
3. Push a remoto y abrir PR: `git push -u origin feature/mi-cambio`
4. Rebase o merge según la política del repo antes de integrar en `main`.

Buenas prácticas:

- Mensajes de commit claros y en inglés si el repo lo requiere.
- Mantén ramas cortas y relacionadas a una sola tarea.
- Revisa cambios con code review y CI antes de merge.
- Evita merge commits innecesarios si tu equipo prefiere rebase interactivo para historiales lineales.

Comandos útiles:

```bash
git checkout -b feature/xyz
git add file.txt
git commit -m "fix: correct null pointer in handler"
git fetch origin
git rebase origin/main   # opcional para mantener historial lineal
git push origin feature/xyz
```

## Paquetería: npm, pip, etc.

NPM (Node.js): Usa `package.json` para dependencias. Comandos básicos:

```bash
npm init
npm install express --save
npm install --save-dev eslint
npm run lint
```

PIP (Python): Usa `requirements.txt`, `pipenv` o `poetry` para gestionar dependencias:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
# o con poetry
poetry init
poetry add requests
```

Buenas prácticas de paquetería:

- Usa lockfiles (`package-lock.json`, `poetry.lock`) para reproducibilidad.
- No subas dependencias compiladas o entornos virtuales al repositorio.
- Usa escáneres de vulnerabilidades en dependencias (`npm audit`, `pip-audit`).

## Entornos de desarrollo

Tipos de entornos y recomendaciones:

- Entornos locales: usa `.env` para configuración y `docker-compose` para servicios relacionados (DB, redis).
- Contenedores: Docker para reproducibilidad y paridad con producción.
- DevContainers: VSCode devcontainers para un entorno reproducible dentro del editor.
- CI: define pipelines que reproduzcan instalaciones y tests (GitHub Actions, CircleCI).

Ejemplo Docker Compose:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - '8080:8080'
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/app
  db:
    image: postgres:15
    environment:
      - POSTGRES_PASSWORD=secret
```

Buenas prácticas:

- Documenta cómo levantar el entorno en `README.md`.
- Mantén variables sensibles fuera del repo y usa secret managers.
- Añade pasos de lint/test en `pre-commit` o en pipelines CI.

## Referencias

- Pro Git book: https://git-scm.com/book/en/v2
- NPM docs: https://docs.npmjs.com/
- Poetry: https://python-poetry.org/
- Docker docs: https://docs.docker.com/
- VSCode Dev Containers: https://code.visualstudio.com/docs/remote/devcontainers
