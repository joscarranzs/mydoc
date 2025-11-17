# 04 - Web: Frontend — Arquitectura

## Tabla de contenido

- [Introducción](#introducción)
- [Componentes](#componentes)
- [Estado (concepto)](#estado-concepto)
- [SPA vs. MPA](#spa-vs-mpa)
- [Fetching de datos](#fetching-de-datos)
- [Referencias](#referencias)

## Introducción

La arquitectura frontend describe cómo organizas UI en piezas, cómo gestionas el estado y cómo obtienes datos. En aplicaciones modernas, los patrones de arquitectura influyen directamente en mantenibilidad, rendimiento y experiencia de usuario.

## Componentes

Un componente es una unidad autocontenida de UI que agrupa estructura, estilo y comportamiento. Existen varias aproximaciones:

- Web Components (estándar): `customElements`, Shadow DOM, templates. Funcionan en cualquier entorno que soporte web standards.
- Componentes de librerías/frameworks (React, Vue, Svelte, Angular): patrones para declarar y componer componentes.

Patrones y buenas prácticas:

- Componentes pequeños y cohesivos — una sola responsabilidad por componente.
- Composición por encima de la herencia — pasar componentes como hijos o propiedades.
- Separación entre componentes de presentación y contenedores (o hooks/stores) — los primeros se centran en la UI, los segundos en la lógica y datos.

## Estado (concepto)

El estado representa datos que determinan la UI en un momento dado. Tipos de estado:

- Estado local: dentro de un componente (por ejemplo, un input o modal abierto).
- Estado compartido (global): entre múltiples componentes (por ejemplo, usuario logueado, carrito de compras).
- Estado derivado: calculado a partir de otros estados (evitar duplicación de la fuente de la verdad).
- Estado del servidor: datos que provienen de la API y tienen su propia caducidad y sincronización.

Gestión de estado:

- Local: useState (React), reactive () (Vue), o variables locales.
- Global: context + reducers, Redux, Zustand, pinia, o soluciones basadas en GraphQL (Apollo cache).
- Sincronización: estrategias como cache-then-network, stale-while-revalidate (SWR), y invalidaciones por tags (RTK Query).

Consideraciones:

- Mantén la mínima cantidad de estado posible; deriva datos cuando sea práctico.
- Evita mutaciones directas — usa patrones inmutables para evitar efectos colaterales.

## SPA vs. MPA

SPA (Single Page Application)

- Carga inicial de una página — luego se actualiza la UI dinámicamente sin recargar toda la página.
- Ventajas: experiencia fluida, transiciones rápidas, interacciones complejas del lado cliente.
- Desventajas: SEO si no hay renderado del lado servidor, tamaño inicial mayor, más complejidad JavaScript.

MPA (Multi-Page Application)

- Cada navegación solicita un documento nuevo (HTML) desde el servidor.
- Ventajas: SEO sencillo, menor complejidad inicial, carga progresiva.
- Desventajas: experiencia menos fluida entre páginas, más round-trips al servidor.

Soluciones híbridas

- SSR (Server-Side Rendering): renderiza contenido en el servidor para mejorar SEO y percepción; luego hidrata en el cliente.
- SSG (Static Site Generation): genera HTML en build time (ej. Next.js, Gatsby) para páginas estáticas.

## Fetching de datos

Formas comunes de obtener datos del backend:

- HTTP REST: endpoints por recurso y CRUD. Usa fetch / axios para consultas y mutaciones.
- GraphQL: consultas declarativas que piden exactamente los campos requeridos.
- WebSocket / Server-Sent Events: para datos en tiempo real.

Patrones de fetching:

- Fetch en carga de componente (useEffect / mounted).
- Centralizar fetching en hooks o servicios para facilitar testing y cache.
- Caching y deduplicación: librerías como SWR, React Query o Apollo Cache ayudan a evitar peticiones duplicadas y a normalizar el estado del cliente.

Buenas prácticas:

- Manejar estados de carga, éxito y error (loading, data, error) en la UI.
- Retries y backoff en requests fallidos.
- Uso responsable de paginación e infinite-scroll para grandes listas.

Ejemplo (fetch básico):

```javascript
async function fetchUsers() {
  const res = await fetch('/api/users');
  if (!res.ok) throw new Error('Network error');
  return res.json();
}

// En un componente React
useEffect(() => {
  let mounted = true;
  fetchUsers().then(data => { if (mounted) setUsers(data); });
  return () => { mounted = false; };
}, []);
```

## Referencias

- React docs: https://reactjs.org/docs/getting-started.html
- Next.js: https://nextjs.org/ (SSR/SSG patterns)
- React Query / TanStack Query: https://tanstack.com/query/latest
- SWR: https://swr.vercel.app/
- GraphQL: https://graphql.org/
- Web components: https://developer.mozilla.org/en-US/docs/Web/Web_Components
