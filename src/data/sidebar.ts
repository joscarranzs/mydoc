export interface SidebarTopic {
  title: string;
  slug: string;
}

export interface SidebarSubcategory {
  title: string;
  children: SidebarTopic[];
}

export interface SidebarModule {
  title: string;
  slug: string;
  subcategories: SidebarSubcategory[];
}

export const sidebarModules: SidebarModule[] = [
  {
    title: 'HTML',
    slug: 'html',
    subcategories: [
      {
        title: '1. Sintaxis y Fundamentos',
        children: [
          { title: 'INTRODUCCIÓN', slug: 'sintaxis/introduction' },
          { title: 'BÁSICO', slug: 'sintaxis/basic' },
          { title: 'ELEMENTOS', slug: 'sintaxis/elements' },
          { title: 'ATRIBUTOS', slug: 'sintaxis/attributes' },
          { title: 'ENTIDADES', slug: 'sintaxis/entities' },
          { title: 'COMENTARIOS', slug: 'sintaxis/comments' },
          { title: 'CHARSET', slug: 'sintaxis/charsets' },
          { title: 'RUTAS', slug: 'sintaxis/file-paths' },
        ],
      },
      {
        title: '2. Estructura del Documento',
        children: [
          { title: 'DOCTYPE', slug: 'estructura/doctype' },
          { title: 'HTML', slug: 'estructura/html-element' },
          { title: 'HEAD', slug: 'estructura/head' },
          { title: 'TITLE', slug: 'estructura/page-title' },
          { title: 'FAVICON', slug: 'estructura/favicon' },
          { title: 'BODY', slug: 'estructura/body-element' },
        ],
      },
      {
        title: '3. Contenido del Body',
        children: [
          { title: 'ENCABEZADOS', slug: 'contenido/headings' },
          { title: 'PÁRRAFOS', slug: 'contenido/paragraphs' },
          { title: 'FORMATO', slug: 'contenido/formatting' },
          { title: 'CITAS', slug: 'contenido/quotations' },
          { title: 'CÓDIGO DE COMPUTADORA', slug: 'contenido/computercode' },
          { title: 'ENLACES', slug: 'contenido/links' },
          { title: 'IMÁGENES', slug: 'contenido/images' },
          { title: 'LISTAS', slug: 'contenido/lists' },
          { title: 'TABLAS', slug: 'contenido/tables' },
          { title: 'BOTONES', slug: 'contenido/buttons' },
          { title: 'IFRAMES', slug: 'contenido/iframes' },
          { title: 'JAVASCRIPT', slug: 'contenido/javascript' },
        ],
      },
      {
        title: '4. Organización y Maquetación',
        children: [
          { title: 'BLOQUE Y EN LÍNEA', slug: 'organizacion/block-inline' },
          { title: 'DIV', slug: 'organizacion/div' },
          { title: 'CLASES', slug: 'organizacion/classes' },
          { title: 'ID', slug: 'organizacion/id' },
          { title: 'DISEÑO (LAYOUT)', slug: 'organizacion/layout' },
          { title: 'RESPONSIVO', slug: 'organizacion/responsive' },
          { title: 'SEMÁNTICA', slug: 'organizacion/semantics' },
          { title: 'HEADER', slug: 'organizacion/header' },
          { title: 'MAIN', slug: 'organizacion/main' },
          { title: 'SECTION', slug: 'organizacion/section' },
          { title: 'ARTICLE', slug: 'organizacion/article' },
          { title: 'ASIDE', slug: 'organizacion/aside' },
          { title: 'FOOTER', slug: 'organizacion/footer' },
          { title: 'GUÍA DE ESTILO', slug: 'organizacion/style-guide' },
        ],
      },
      {
        title: '5. Presentación',
        children: [
          { title: 'ESTILOS', slug: 'presentacion/styles' },
          { title: 'COLORES', slug: 'presentacion/colors' },
          { title: 'CSS', slug: 'presentacion/css' },
        ],
      },
      {
        title: '6. Formularios',
        children: [
          { title: 'FORMULARIOS', slug: 'formularios/forms' },
          { title: 'ELEMENTOS DE FORMULARIO', slug: 'formularios/form-elements' },
          { title: 'ATRIBUTOS DE FORMULARIO', slug: 'formularios/form-attributes' },
          { title: 'TIPOS DE INPUT', slug: 'formularios/input-types' },
          { title: 'ATRIBUTOS DE INPUT', slug: 'formularios/input-attributes' },
          { title: 'ATRIBUTOS DE FORM INPUT', slug: 'formularios/input-form-attributes' },
        ],
      },
      {
        title: '7. Multimedia',
        children: [
          { title: 'MULTIMEDIA', slug: 'multimedia/media' },
          { title: 'VIDEO', slug: 'multimedia/video' },
          { title: 'AUDIO', slug: 'multimedia/audio' },
          { title: 'YOUTUBE', slug: 'multimedia/youtube' },
          { title: 'PLUG-INS', slug: 'multimedia/plugins' },
        ],
      },
      {
        title: '8. Gráficos',
        children: [
          { title: 'CANVAS', slug: 'graficos/canvas' },
          { title: 'SVG', slug: 'graficos/svg' },
        ],
      },
      {
        title: '9. APIs del Navegador',
        children: [
          { title: 'WEB APIS', slug: 'apis/web-apis' },
          { title: 'GEOLOCALIZACIÓN', slug: 'apis/geolocation' },
          { title: 'ARRASTRAR Y SOLTAR', slug: 'apis/drag-drop' },
          { title: 'ALMACENAMIENTO WEB', slug: 'apis/web-storage' },
          { title: 'WEB WORKERS', slug: 'apis/web-workers' },
          { title: 'SSE', slug: 'apis/sse' },
        ],
      },
    ],
  },
  {
    title: 'CSS',
    slug: 'css',
    subcategories: [
      {
        title: '1. Sintaxis y Fundamentos',
        children: [
          { title: 'INTRODUCCIÓN', slug: 'sintaxis/intro' },
          { title: 'SINTAXIS', slug: 'sintaxis/syntax' },
          { title: 'SELECTORES', slug: 'sintaxis/selectors' },
          { title: 'CÓMO USAR CSS', slug: 'sintaxis/how-to' },
          { title: 'COMENTARIOS', slug: 'sintaxis/comments' },
          { title: 'UNIDADES', slug: 'sintaxis/units' },
          { title: 'HERENCIA', slug: 'sintaxis/inheritance' },
          { title: 'ESPECIFICIDAD', slug: 'sintaxis/specificity' },
        ],
      },
      {
        title: '2. Modelo de Caja',
        children: [
          { title: 'BOX MODEL', slug: 'modelo-caja/box-model' },
          { title: 'MARGINS', slug: 'modelo-caja/margins' },
          { title: 'PADDING', slug: 'modelo-caja/padding' },
          { title: 'BORDERS', slug: 'modelo-caja/borders' },
          { title: 'OUTLINE', slug: 'modelo-caja/outline' },
          { title: 'ALTO Y ANCHO', slug: 'modelo-caja/height-width' },
          { title: 'BOX SIZING', slug: 'modelo-caja/box-sizing' },
          { title: 'ESQUINAS REDONDEADAS', slug: 'modelo-caja/rounded-corners' },
        ],
      },
      {
        title: '3. Colores, Fondos y Efectos',
        children: [
          { title: 'COLORES', slug: 'colores/colors' },
          { title: 'BACKGROUNDS', slug: 'colores/backgrounds' },
          { title: 'GRADIENTES', slug: 'colores/gradients' },
          { title: 'SOMBRAS', slug: 'colores/shadows' },
          { title: 'OPACITY', slug: 'colores/opacity' },
          { title: 'BORDER IMAGES', slug: 'colores/border-images' },
          { title: 'MASKING', slug: 'colores/masking' },
        ],
      },
      {
        title: '4. Texto y Tipografía',
        children: [
          { title: 'TEXTO', slug: 'texto/text' },
          { title: 'FUENTES', slug: 'texto/fonts' },
          { title: 'ICONOS', slug: 'texto/icons' },
          { title: 'TEXT EFFECTS', slug: 'texto/text-effects' },
          { title: 'CUSTOM FONTS', slug: 'texto/custom-fonts' },
        ],
      },
      {
        title: '5. Layout y Posicionamiento',
        children: [
          { title: 'DISPLAY', slug: 'layout/display' },
          { title: 'POSITION', slug: 'layout/position' },
          { title: 'POSITION OFFSETS', slug: 'layout/position-offsets' },
          { title: 'Z-INDEX', slug: 'layout/zorder' },
          { title: 'OVERFLOW', slug: 'layout/overflow' },
          { title: 'FLOAT', slug: 'layout/float' },
          { title: 'INLINE-BLOCK', slug: 'layout/inline-block' },
          { title: 'ALINEACIÓN', slug: 'layout/align' },
          { title: 'COMBINADORES', slug: 'layout/combinators' },
          { title: 'MAX-WIDTH', slug: 'layout/max-width' },
          { title: 'COLUMNAS MÚLTIPLES', slug: 'layout/multiple-columns' },
          { title: 'WEBSITE LAYOUT', slug: 'layout/website-layout' },
        ],
      },
      {
        title: '6. Flexbox y Grid',
        children: [
          { title: 'FLEXBOX INTRO', slug: 'flexbox-grid/flexbox-intro' },
          { title: 'FLEX CONTAINER', slug: 'flexbox-grid/flex-container' },
          { title: 'FLEX ITEMS', slug: 'flexbox-grid/flex-items' },
          { title: 'FLEX RESPONSIVE', slug: 'flexbox-grid/flex-responsive' },
          { title: 'GRID INTRO', slug: 'flexbox-grid/grid-intro' },
          { title: 'GRID CONTAINER', slug: 'flexbox-grid/grid-container' },
          { title: 'GRID ITEMS', slug: 'flexbox-grid/grid-items' },
          { title: 'GRID 12-COLUMN LAYOUT', slug: 'flexbox-grid/grid-12-column' },
        ],
      },
      {
        title: '7. Componentes UI',
        children: [
          { title: 'ENLACES', slug: 'componentes/links' },
          { title: 'LISTAS', slug: 'componentes/lists' },
          { title: 'TABLAS', slug: 'componentes/tables' },
          { title: 'NAVEGACIÓN', slug: 'componentes/navigation' },
          { title: 'DROPDOWNS', slug: 'componentes/dropdowns' },
          { title: 'FORMULARIOS', slug: 'componentes/forms' },
          { title: 'BOTONES', slug: 'componentes/buttons' },
          { title: 'TOOLTIPS', slug: 'componentes/tooltips' },
          { title: 'PAGINACIÓN', slug: 'componentes/pagination' },
          { title: 'GALERÍA DE IMÁGENES', slug: 'componentes/image-gallery' },
          { title: 'SPRITES', slug: 'componentes/image-sprites' },
          { title: 'COUNTERS', slug: 'componentes/counters' },
        ],
      },
      {
        title: '8. Imágenes',
        children: [
          { title: 'ESTILOS DE IMAGEN', slug: 'imagenes/image-styling' },
          { title: 'MODAL DE IMAGEN', slug: 'imagenes/image-modal' },
          { title: 'CENTRADO DE IMAGEN', slug: 'imagenes/image-centering' },
          { title: 'FILTROS DE IMAGEN', slug: 'imagenes/image-filters' },
          { title: 'FORMAS DE IMAGEN', slug: 'imagenes/image-shapes' },
          { title: 'OBJECT-FIT', slug: 'imagenes/object-fit' },
          { title: 'OBJECT-POSITION', slug: 'imagenes/object-position' },
        ],
      },
      {
        title: '9. Animaciones y Transformaciones',
        children: [
          { title: '2D TRANSFORMS', slug: 'animaciones/2d-transforms' },
          { title: '3D TRANSFORMS', slug: 'animaciones/3d-transforms' },
          { title: 'TRANSITIONS', slug: 'animaciones/transitions' },
          { title: 'ANIMATIONS', slug: 'animaciones/animations' },
        ],
      },
      {
        title: '10. Pseudoclases y Selectores Avanzados',
        children: [
          { title: 'PSEUDO-CLASSES', slug: 'pseudoclases/pseudo-classes' },
          { title: 'PSEUDO-ELEMENTS', slug: 'pseudoclases/pseudo-elements' },
          { title: 'ATTRIBUTE SELECTORS', slug: 'pseudoclases/attribute-selectors' },
        ],
      },
      {
        title: '11. Responsive',
        children: [
          { title: 'MEDIA QUERIES', slug: 'responsive/media-queries' },
          { title: 'RWD INTRO', slug: 'responsive/rwd-intro' },
          { title: 'RWD VIEWPORT', slug: 'responsive/rwd-viewport' },
          { title: 'RWD GRID VIEW', slug: 'responsive/rwd-grid-view' },
          { title: 'RWD MEDIA QUERIES', slug: 'responsive/rwd-media-queries' },
          { title: 'RWD IMAGES', slug: 'responsive/rwd-images' },
          { title: 'RWD VIDEOS', slug: 'responsive/rwd-videos' },
          { title: 'RWD FRAMEWORKS', slug: 'responsive/rwd-frameworks' },
          { title: 'RWD TEMPLATES', slug: 'responsive/rwd-templates' },
        ],
      },
      {
        title: '12. Avanzado',
        children: [
          { title: 'USER INTERFACE', slug: 'avanzado/user-interface' },
          { title: 'VARIABLES', slug: 'avanzado/variables' },
          { title: '@PROPERTY', slug: 'avanzado/property' },
          { title: '@SUPPORTS', slug: 'avanzado/supports' },
        ],
      },
    ],
  },
  {
    title: 'JavaScript',
    slug: 'javascript',
    subcategories: [
      {
        title: '1. Sintaxis y Fundamentos',
        children: [
          { title: 'INTRODUCCIÓN', slug: 'sintaxis/intro' },
          { title: 'CÓMO USAR JS', slug: 'sintaxis/where-to' },
          { title: 'SINTAXIS', slug: 'sintaxis/syntax' },
        ],
      },
      {
        title: '2. Valores y Tipos',
        children: [
          { title: 'TIPOS DE DATOS', slug: 'valores/data-types' },
          { title: 'OPERADORES', slug: 'valores/operators' },
          { title: 'STRINGS', slug: 'valores/strings' },
          { title: 'NÚMEROS', slug: 'valores/numbers' },
          { title: 'MATH', slug: 'valores/math' },
        ],
      },
      {
        title: '3. Fechas',
        children: [
          { title: 'FECHAS', slug: 'fechas/dates' },
          { title: 'TEMPORAL', slug: 'fechas/temporal' },
        ],
      },
      {
        title: '4. Colecciones',
        children: [
          { title: 'ARRAYS', slug: 'colecciones/arrays' },
          { title: 'SETS', slug: 'colecciones/sets' },
          { title: 'MAPS', slug: 'colecciones/maps' },
          { title: 'ITERACIONES', slug: 'colecciones/iterations' },
        ],
      },
      {
        title: '5. Funciones y Control de Flujo',
        children: [
          { title: 'CONDICIONALES', slug: 'funciones/conditions' },
          { title: 'BUCLES', slug: 'funciones/loops' },
          { title: 'FUNCIONES', slug: 'funciones/functions' },
          { title: 'OBJETOS', slug: 'funciones/objects' },
          { title: 'ÁMBITO', slug: 'funciones/scope' },
          { title: 'CLASES', slug: 'funciones/classes' },
        ],
      },
      {
        title: '6. DOM y Eventos',
        children: [
          { title: 'DOM', slug: 'dom/dom' },
          { title: 'EVENTOS', slug: 'dom/events' },
          { title: 'NAVEGACIÓN DOM', slug: 'dom/dom-navigation' },
          { title: 'WINDOW', slug: 'dom/window' },
        ],
      },
      {
        title: '7. Asíncrono y APIs',
        children: [
          { title: 'ASÍNCRONO', slug: 'async/async' },
          { title: 'AJAX', slug: 'async/ajax' },
          { title: 'JSON', slug: 'async/json' },
          { title: 'WEB API', slug: 'async/web-api' },
          { title: 'GRÁFICOS', slug: 'async/graphics' },
        ],
      },
      {
        title: '8. Módulos y Metaprogramación',
        children: [
          { title: 'MÓDULOS', slug: 'avanzado/modules' },
          { title: 'META & PROXY', slug: 'avanzado/meta-proxy' },
          { title: 'TYPED ARRAYS', slug: 'avanzado/typed-arrays' },
        ],
      },
      {
        title: '9. Herramientas y Estilo',
        children: [
          { title: 'OUTPUT', slug: 'herramientas/output' },
          { title: 'GUÍA DE ESTILO', slug: 'herramientas/style-guide' },
          { title: 'VERSIONES', slug: 'herramientas/versions' },
          { title: 'PROYECTOS', slug: 'herramientas/projects' },
          { title: 'REFERENCIA', slug: 'herramientas/reference' },
        ],
      },
    ],
  },
];

export function getSidebarModule(slug: string): SidebarModule | undefined {
  return sidebarModules.find((m) => slug.startsWith(m.slug));
}

export function getAllSidebarTopics(): { title: string; fullSlug: string }[] {
  const topics: { title: string; fullSlug: string }[] = [];
  for (const module of sidebarModules) {
    for (const sub of module.subcategories) {
      for (const child of sub.children) {
        topics.push({ title: child.title, fullSlug: `${module.slug}/${child.slug}` });
      }
    }
  }
  return topics;
}

export function getAllSidebarTopicsForModule(moduleSlug: string): { title: string; fullSlug: string }[] {
  return getAllSidebarTopics().filter((t) => t.fullSlug.startsWith(moduleSlug));
}

export function getPrevNext(fullSlug: string): { prev: { title: string; fullSlug: string } | null; next: { title: string; fullSlug: string } | null } {
  const all = getAllSidebarTopics();
  const idx = all.findIndex((t) => t.fullSlug === fullSlug);
  if (idx === -1) return { prev: null, next: null };

  let prev = idx > 0 ? all[idx - 1] : null;
  let next = idx < all.length - 1 ? all[idx + 1] : null;

  if (!prev) {
    const modIdx = sidebarModules.findIndex((m) => fullSlug.startsWith(m.slug));
    if (modIdx > 0) {
      const prevModTopics = getAllSidebarTopicsForModule(sidebarModules[modIdx - 1].slug);
      prev = prevModTopics[prevModTopics.length - 1] ?? null;
    }
  }

  if (!next) {
    const modIdx = sidebarModules.findIndex((m) => fullSlug.startsWith(m.slug));
    if (modIdx >= 0 && modIdx < sidebarModules.length - 1) {
      const nextModTopics = getAllSidebarTopicsForModule(sidebarModules[modIdx + 1].slug);
      next = nextModTopics[0] ?? null;
    }
  }

  return { prev, next };
}
