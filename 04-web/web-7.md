# 04 - Web: Infraestructura

## Tabla de contenido

- [Introducción](#introducción)
- [Deploy](#deploy)
- [Servidores y hosting](#servidores-y-hosting)
- [Variables de entorno](#variables-de-entorno)
- [Logs y monitoreo](#logs-y-monitoreo)
- [Referencias](#referencias)

## Introducción

La infraestructura web cubre despliegue, servidores, configuración de entornos y observabilidad. Un buen diseño operativo hace que las aplicaciones sean más fiables, seguras y fáciles de mantener.

## Deploy

Estrategias de despliegue:

- Blue/Green: mantener dos entornos (blue y green) para cambiar tráfico con riesgo mínimo.
- Rolling updates: actualizar instancias por lotes para disponibilidad continua.
- Canary releases: lanzar cambios a una parte de usuarios para pruebas en producción.
- Immutable infrastructure: regenerar instancias en lugar de parchearlas.

Herramientas y plataformas comunes:

- Plataformas PaaS: Heroku, Vercel, Netlify.
- Orquestación: Kubernetes para contenedores.
- CI/CD: GitHub Actions, GitLab CI, Jenkins para automatizar build/test/deploy.

Buenas prácticas:

- Automatiza despliegues con pipelines y pruebas — no hagas deploys manuales en producción.
- Usa feature flags para controlar funcionalidades en caliente.
- Mantén un rollback plan y prueba las restauraciones.

## Servidores y hosting

Opciones de hosting:

- Servidores dedicados o VPS (Linode, DigitalOcean) — mayor control, responsabilidad de mantenimiento.
- Nube pública (AWS, Azure, GCP) — escalabilidad y servicios gestionados.
- Serverless — funciones como servicio para cargas variables y micro-servicios.

Redundancia y escalabilidad:

- Load balancers y autoscaling para gestionar picos de tráfico.
- Separar responsabilidades: web servers, app servers, bases de datos y caches.
- Considera almacenamiento compartido o block storage para almacenar datos persistentes.

## Variables de entorno

Las variables de entorno (`ENV`) almacenan configuraciones que varían por entorno (dev/stage/prod): claves, URIs, flags.

Recomendaciones:

- Nunca guardes secretos en el repo; usa secret managers (AWS Secrets Manager, Vault, GitHub Secrets).
- Documenta todas las variables necesarias y provee valores por defecto o ejemplos en `.env.example`.
- Diferencia entre config y secret; token y credenciales siempre deben estar cifrados o en secret manager.

Ejemplo (.env):

```
DATABASE_URL=postgres://user:pass@db:5432/app
API_KEY=xxxxxxxxxxxxx
NODE_ENV=production
```

## Logs y monitoreo

Observability es crucial para detectar y resolver problemas rápidamente.

Componentes:

- Logs: recolecta logs estructurados (JSON) y envíalos a un central (ELK, Splunk, Datadog).
- Monitoring: metrics (CPU, memory, request latencies) con Prometheus/Grafana.
- Tracing: distribuye trazas para entender latencia y flujos con Zipkin, Jaeger, or OpenTelemetry.

Buenas prácticas de logs:

- Emite logs estructurados y con niveles (DEBUG, INFO, WARN, ERROR).
- Incluye correlación de requests (request-id) para rastrear trazas en sistemas distribuidos.
- No loggees secretos; asegúrate de redaction para evitar filtraciones.

Alertas:

- Configura alertas en métricas clave (latency, error rate, saturation).
- Evita alert fatigue — define umbrales razonables y usa runbooks para respuestas.

## Referencias

- Kubernetes docs: https://kubernetes.io/docs/
- GitHub Actions: https://docs.github.com/en/actions
- OpenTelemetry: https://opentelemetry.io/
- ELK stack: https://www.elastic.co/what-is/elk-stack
- Prometheus: https://prometheus.io/docs/introduction/overview/
