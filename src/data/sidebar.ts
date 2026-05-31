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
        title: '1. Fundamentos',
        children: [
          { title: 'INTRODUCCIÓN', slug: 'fundamentals/introduction' },
          { title: 'BÁSICO', slug: 'fundamentals/basic' },
          { title: 'ELEMENTOS', slug: 'fundamentals/elements' },
          { title: 'ATRIBUTOS', slug: 'fundamentals/attributes' },
          { title: 'ENTIDADES', slug: 'fundamentals/entities' },
          { title: 'COMENTARIOS', slug: 'fundamentals/comments' },
          { title: 'CHARSET', slug: 'fundamentals/charsets' },
          { title: 'RUTAS', slug: 'fundamentals/file-paths' },
        ],
      },
      {
        title: '2. Estructura del Documento',
        children: [
          { title: 'DOCTYPE', slug: 'structure/doctype' },
          { title: 'HTML', slug: 'structure/html-element' },
          { title: 'HEAD', slug: 'structure/head' },
          { title: 'TITLE', slug: 'structure/page-title' },
          { title: 'FAVICON', slug: 'structure/favicon' },
          { title: 'BODY', slug: 'structure/body-element' },
        ],
      },
      {
        title: '3. Contenido del Body',
        children: [
          { title: 'ENCABEZADOS', slug: 'content/headings' },
          { title: 'PÁRRAFOS', slug: 'content/paragraphs' },
          { title: 'FORMATO', slug: 'content/formatting' },
          { title: 'CITAS', slug: 'content/quotations' },
          { title: 'CÓDIGO DE COMPUTADORA', slug: 'content/computercode' },
          { title: 'ENLACES', slug: 'content/links' },
          { title: 'IMÁGENES', slug: 'content/images' },
          { title: 'LISTAS', slug: 'content/lists' },
          { title: 'TABLAS', slug: 'content/tables' },
          { title: 'BOTONES', slug: 'content/buttons' },
          { title: 'IFRAMES', slug: 'content/iframes' },
          { title: 'JAVASCRIPT', slug: 'content/javascript' },
        ],
      },
      {
        title: '4. Organización y Maquetación',
        children: [
          { title: 'BLOQUE Y EN LÍNEA', slug: 'organization/block-inline' },
          { title: 'DIV', slug: 'organization/div' },
          { title: 'CLASES', slug: 'organization/classes' },
          { title: 'ID', slug: 'organization/id' },
          { title: 'DISEÑO (LAYOUT)', slug: 'organization/layout' },
          { title: 'RESPONSIVO', slug: 'organization/responsive' },
          { title: 'SEMÁNTICA', slug: 'organization/semantics' },
          { title: 'HEADER', slug: 'organization/header' },
          { title: 'MAIN', slug: 'organization/main' },
          { title: 'SECTION', slug: 'organization/section' },
          { title: 'ARTICLE', slug: 'organization/article' },
          { title: 'ASIDE', slug: 'organization/aside' },
          { title: 'FOOTER', slug: 'organization/footer' },
          { title: 'GUÍA DE ESTILO', slug: 'organization/style-guide' },
        ],
      },
      {
        title: '5. Presentación',
        children: [
          { title: 'ESTILOS', slug: 'presentation/styles' },
          { title: 'COLORES', slug: 'presentation/colors' },
          { title: 'CSS', slug: 'presentation/css' },
        ],
      },
      {
        title: '6. Formularios',
        children: [
          { title: 'FORMULARIOS', slug: 'forms/forms' },
          { title: 'ELEMENTOS DE FORMULARIO', slug: 'forms/form-elements' },
          { title: 'ATRIBUTOS DE FORMULARIO', slug: 'forms/form-attributes' },
          { title: 'TIPOS DE INPUT', slug: 'forms/input-types' },
          { title: 'ATRIBUTOS DE INPUT', slug: 'forms/input-attributes' },
          { title: 'ATRIBUTOS DE FORM INPUT', slug: 'forms/input-form-attributes' },
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
          { title: 'CANVAS', slug: 'graphics/canvas' },
          { title: 'SVG', slug: 'graphics/svg' },
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
        title: '1. Fundamentos',
        children: [
          { title: 'INTRODUCCIÓN', slug: 'fundamentals/intro' },
          { title: 'SINTAXIS', slug: 'fundamentals/syntax' },
          { title: 'SELECTORES', slug: 'fundamentals/selectors' },
          { title: 'CÓMO USAR CSS', slug: 'fundamentals/how-to' },
          { title: 'COMENTARIOS', slug: 'fundamentals/comments' },
          { title: 'UNIDADES', slug: 'fundamentals/units' },
          { title: 'HERENCIA', slug: 'fundamentals/inheritance' },
          { title: 'ESPECIFICIDAD', slug: 'fundamentals/specificity' },
        ],
      },
      {
        title: '2. Modelo de Caja',
        children: [
          { title: 'BOX MODEL', slug: 'box-model/box-model' },
          { title: 'MARGINS', slug: 'box-model/margins' },
          { title: 'PADDING', slug: 'box-model/padding' },
          { title: 'BORDERS', slug: 'box-model/borders' },
          { title: 'OUTLINE', slug: 'box-model/outline' },
          { title: 'ALTO Y ANCHO', slug: 'box-model/height-width' },
          { title: 'BOX SIZING', slug: 'box-model/box-sizing' },
          { title: 'ESQUINAS REDONDEADAS', slug: 'box-model/rounded-corners' },
        ],
      },
      {
        title: '3. Colores, Fondos y Efectos',
        children: [
          { title: 'COLORES', slug: 'colors/colors' },
          { title: 'BACKGROUNDS', slug: 'colors/backgrounds' },
          { title: 'GRADIENTES', slug: 'colors/gradients' },
          { title: 'SOMBRAS', slug: 'colors/shadows' },
          { title: 'OPACITY', slug: 'colors/opacity' },
          { title: 'BORDER IMAGES', slug: 'colors/border-images' },
          { title: 'MASKING', slug: 'colors/masking' },
        ],
      },
      {
        title: '4. Texto y Tipografía',
        children: [
          { title: 'TEXTO', slug: 'typography/text' },
          { title: 'FUENTES', slug: 'typography/fonts' },
          { title: 'ICONOS', slug: 'typography/icons' },
          { title: 'TEXT EFFECTS', slug: 'typography/text-effects' },
          { title: 'CUSTOM FONTS', slug: 'typography/custom-fonts' },
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
          { title: 'ENLACES', slug: 'components/links' },
          { title: 'LISTAS', slug: 'components/lists' },
          { title: 'TABLAS', slug: 'components/tables' },
          { title: 'NAVEGACIÓN', slug: 'components/navigation' },
          { title: 'DROPDOWNS', slug: 'components/dropdowns' },
          { title: 'FORMULARIOS', slug: 'components/forms' },
          { title: 'BOTONES', slug: 'components/buttons' },
          { title: 'TOOLTIPS', slug: 'components/tooltips' },
          { title: 'PAGINACIÓN', slug: 'components/pagination' },
          { title: 'GALERÍA DE IMÁGENES', slug: 'components/image-gallery' },
          { title: 'SPRITES', slug: 'components/image-sprites' },
          { title: 'COUNTERS', slug: 'components/counters' },
        ],
      },
      {
        title: '8. Imágenes',
        children: [
          { title: 'ESTILOS DE IMAGEN', slug: 'images/image-styling' },
          { title: 'MODAL DE IMAGEN', slug: 'images/image-modal' },
          { title: 'CENTRADO DE IMAGEN', slug: 'images/image-centering' },
          { title: 'FILTROS DE IMAGEN', slug: 'images/image-filters' },
          { title: 'FORMAS DE IMAGEN', slug: 'images/image-shapes' },
          { title: 'OBJECT-FIT', slug: 'images/object-fit' },
          { title: 'OBJECT-POSITION', slug: 'images/object-position' },
        ],
      },
      {
        title: '9. Animaciones y Transformaciones',
        children: [
          { title: '2D TRANSFORMS', slug: 'animations/2d-transforms' },
          { title: '3D TRANSFORMS', slug: 'animations/3d-transforms' },
          { title: 'TRANSITIONS', slug: 'animations/transitions' },
          { title: 'ANIMATIONS', slug: 'animations/animations' },
        ],
      },
      {
        title: '10. Pseudoclases y Selectores Avanzados',
        children: [
          { title: 'PSEUDO-CLASSES', slug: 'pseudo-classes/pseudo-classes' },
          { title: 'PSEUDO-ELEMENTS', slug: 'pseudo-classes/pseudo-elements' },
          { title: 'ATTRIBUTE SELECTORS', slug: 'pseudo-classes/attribute-selectors' },
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
          { title: 'USER INTERFACE', slug: 'advanced/user-interface' },
          { title: 'VARIABLES', slug: 'advanced/variables' },
          { title: '@PROPERTY', slug: 'advanced/property' },
          { title: '@SUPPORTS', slug: 'advanced/supports' },
        ],
      },
    ],
  },
  {
    title: 'JavaScript',
    slug: 'javascript',
    subcategories: [
      {
        title: '1. Fundamentos',
        children: [
          { title: 'INTRODUCCIÓN', slug: 'fundamentals/intro' },
          { title: 'CÓMO USAR JS', slug: 'fundamentals/where-to' },
          { title: 'SINTAXIS', slug: 'fundamentals/syntax' },
        ],
      },
      {
        title: '2. Valores y Tipos',
        children: [
          { title: 'TIPOS DE DATOS', slug: 'values/data-types' },
          { title: 'OPERADORES', slug: 'values/operators' },
          { title: 'STRINGS', slug: 'values/strings' },
          { title: 'NÚMEROS', slug: 'values/numbers' },
          { title: 'MATH', slug: 'values/math' },
        ],
      },
      {
        title: '3. Fechas',
        children: [
          { title: 'FECHAS', slug: 'dates/dates' },
          { title: 'TEMPORAL', slug: 'dates/temporal' },
        ],
      },
      {
        title: '4. Colecciones',
        children: [
          { title: 'ARRAYS', slug: 'collections/arrays' },
          { title: 'SETS', slug: 'collections/sets' },
          { title: 'MAPS', slug: 'collections/maps' },
          { title: 'ITERACIONES', slug: 'collections/iterations' },
        ],
      },
      {
        title: '5. Funciones y Control de Flujo',
        children: [
          { title: 'CONDICIONALES', slug: 'functions/conditions' },
          { title: 'BUCLES', slug: 'functions/loops' },
          { title: 'FUNCIONES', slug: 'functions/functions' },
          { title: 'OBJETOS', slug: 'functions/objects' },
          { title: 'ÁMBITO', slug: 'functions/scope' },
          { title: 'CLASES', slug: 'functions/classes' },
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
          { title: 'MÓDULOS', slug: 'advanced/modules' },
          { title: 'META & PROXY', slug: 'advanced/meta-proxy' },
          { title: 'TYPED ARRAYS', slug: 'advanced/typed-arrays' },
        ],
      },
      {
        title: '9. Herramientas y Estilo',
        children: [
          { title: 'OUTPUT', slug: 'tools/output' },
          { title: 'GUÍA DE ESTILO', slug: 'tools/style-guide' },
          { title: 'VERSIONES', slug: 'tools/versions' },
          { title: 'PROYECTOS', slug: 'tools/projects' },
          { title: 'REFERENCIA', slug: 'tools/reference' },
        ],
      },
    ],
  },
  {
    title: 'TypeScript',
    slug: 'typescript',
    subcategories: [
      {
        title: '1. Fundamentos',
        children: [
          { title: 'INTRODUCCIÓN', slug: 'fundamentals/intro' },
          { title: 'PRIMEROS PASOS', slug: 'fundamentals/get-started' },
          { title: 'TIPOS SIMPLES', slug: 'fundamentals/simple-types' },
        ],
      },
      {
        title: '2. Tipos Especiales e Inferencia',
        children: [
          { title: 'TIPOS ESPECIALES', slug: 'special-types/special-types' },
          { title: 'EXPLÍCITO E INFERENCIA', slug: 'special-types/explicit-inference' },
          { title: 'TIPOS LITERALES', slug: 'special-types/literal-types' },
          { title: 'TIPOS UNIÓN', slug: 'special-types/union-types' },
          { title: 'NULL', slug: 'special-types/null' },
        ],
      },
      {
        title: '3. Estructuras de Datos',
        children: [
          { title: 'ARRAYS', slug: 'structures/arrays' },
          { title: 'TUPLAS', slug: 'structures/tuples' },
          { title: 'ENUMS', slug: 'structures/enums' },
        ],
      },
      {
        title: '4. Objetos, Interfaces y Funciones',
        children: [
          { title: 'TIPOS DE OBJETO', slug: 'objects/object-types' },
          { title: 'ALIAS E INTERFACES', slug: 'objects/aliases-interfaces' },
          { title: 'FUNCIONES', slug: 'objects/functions' },
          { title: 'CLASES', slug: 'objects/classes' },
          { title: 'CASTING', slug: 'objects/casting' },
        ],
      },
      {
        title: '5. Genéricos y Utilidades',
        children: [
          { title: 'GENÉRICOS BÁSICOS', slug: 'generics/basic-generics' },
          { title: 'TIPOS UTILIDAD', slug: 'generics/utility-types' },
          { title: 'KEYOF', slug: 'generics/keyof' },
          { title: 'TYPE GUARDS', slug: 'generics/type-guards' },
        ],
      },
      {
        title: '6. Tipos Avanzados',
        children: [
          { title: 'TIPOS AVANZADOS', slug: 'advanced/advanced-types' },
          { title: 'TIPOS CONDICIONALES', slug: 'advanced/conditional-types' },
          { title: 'TIPOS MAPEADOS', slug: 'advanced/mapped-types' },
          { title: 'INFERENCIA DE TIPOS', slug: 'advanced/type-inference' },
          { title: 'FIRMAS DE ÍNDICE', slug: 'advanced/index-signatures' },
        ],
      },
      {
        title: '7. Organización y Asincronía',
        children: [
          { title: 'NAMESPACES', slug: 'organization/namespaces' },
          { title: 'FUSIÓN DE DECLARACIONES', slug: 'organization/declaration-merging' },
          { title: 'DECORADORES', slug: 'organization/decorators' },
          { title: 'ASÍNCRONO', slug: 'organization/async' },
        ],
      },
      {
        title: '8. Configuración y Ecosistema',
        children: [
          { title: 'CONFIGURACIÓN', slug: 'configuration/configuration' },
          { title: 'NODE.JS', slug: 'configuration/nodejs' },
          { title: 'REACT', slug: 'configuration/react' },
          { title: 'HERRAMIENTAS', slug: 'configuration/tooling' },
          { title: 'DEFINITELY TYPED', slug: 'configuration/definitely-typed' },
          { title: 'ACTUALIZACIONES TS5', slug: 'configuration/ts5-updates' },
        ],
      },
      {
        title: '9. Proyectos y Prácticas',
        children: [
          { title: 'PROYECTOS JS', slug: 'projects/js-projects' },
          { title: 'MIGRACIÓN', slug: 'projects/migration' },
          { title: 'MANEJO DE ERRORES', slug: 'projects/error-handling' },
          { title: 'MEJORES PRÁCTICAS', slug: 'projects/best-practices' },
        ],
      },
    ],
  },
  {
    title: 'Python',
    slug: 'python',
    subcategories: [
      {
        title: '1. Fundamentos',
        children: [
          { title: 'INTRODUCCIÓN', slug: 'fundamentals/intro' },
          { title: 'PRIMEROS PASOS', slug: 'fundamentals/get-started' },
          { title: 'SINTAXIS', slug: 'fundamentals/syntax' },
        ],
      },
      {
        title: '2. Valores y Operaciones',
        children: [
          { title: 'VARIABLES', slug: 'values/variables' },
          { title: 'TIPOS DE DATOS', slug: 'values/data-types' },
          { title: 'NÚMEROS', slug: 'values/numbers' },
          { title: 'CASTING', slug: 'values/casting' },
          { title: 'STRINGS', slug: 'values/strings' },
          { title: 'BOOLEANOS', slug: 'values/booleans' },
          { title: 'OPERADORES', slug: 'values/operators' },
          { title: 'FORMATEO STRINGS', slug: 'values/string-formatting' },
          { title: 'NONE', slug: 'values/none' },
          { title: 'INPUT', slug: 'values/input' },
        ],
      },
      {
        title: '3. Colecciones',
        children: [
          { title: 'LISTAS', slug: 'collections/lists' },
          { title: 'TUPLAS', slug: 'collections/tuples' },
          { title: 'SETS', slug: 'collections/sets' },
          { title: 'DICCIONARIOS', slug: 'collections/dictionaries' },
          { title: 'ARRAYS', slug: 'collections/arrays' },
          { title: 'ITERADORES', slug: 'collections/iterators' },
        ],
      },
      {
        title: '4. Control de Flujo',
        children: [
          { title: 'CONDICIONALES', slug: 'control-flow/conditions' },
          { title: 'MATCH', slug: 'control-flow/match' },
          { title: 'BUCLES WHILE', slug: 'control-flow/while-loops' },
          { title: 'BUCLES FOR', slug: 'control-flow/for-loops' },
        ],
      },
      {
        title: '5. Funciones y Módulos',
        children: [
          { title: 'COMENTARIOS', slug: 'functions/comments' },
          { title: 'OUTPUT', slug: 'functions/output' },
          { title: 'FUNCIONES', slug: 'functions/functions' },
          { title: 'RANGE', slug: 'functions/range' },
          { title: 'MATH', slug: 'functions/math' },
          { title: 'MÓDULOS', slug: 'functions/modules' },
          { title: 'PIP', slug: 'functions/pip' },
          { title: 'VIRTUALENV', slug: 'functions/virtualenv' },
        ],
      },
      {
        title: '6. Fechas, JSON y Regex',
        children: [
          { title: 'FECHAS', slug: 'dates/dates' },
          { title: 'JSON', slug: 'dates/json' },
          { title: 'REGEX', slug: 'dates/regex' },
        ],
      },
      {
        title: '7. Errores y Archivos',
        children: [
          { title: 'TRY EXCEPT', slug: 'errors/try-except' },
          { title: 'MANEJO DE ARCHIVOS', slug: 'errors/file-handling' },
          { title: 'LEER ARCHIVOS', slug: 'errors/read-files' },
          { title: 'ESCRIBIR ARCHIVOS', slug: 'errors/write-files' },
          { title: 'ELIMINAR ARCHIVOS', slug: 'errors/delete-files' },
        ],
      },
      {
        title: '8. POO (Programación Orientada a Objetos)',
        children: [
          { title: 'OOP', slug: 'oop/oop' },
          { title: 'CLASES Y OBJETOS', slug: 'oop/classes-objects' },
          { title: 'MÉTODO INIT', slug: 'oop/init-method' },
          { title: 'PARÁMETRO SELF', slug: 'oop/self-parameter' },
          { title: 'PROPIEDADES', slug: 'oop/properties' },
          { title: 'MÉTODOS', slug: 'oop/methods' },
          { title: 'HERENCIA', slug: 'oop/inheritance' },
          { title: 'POLIMORFISMO', slug: 'oop/polymorphism' },
          { title: 'ENCAPSULACIÓN', slug: 'oop/encapsulation' },
          { title: 'CLASES ANIDADAS', slug: 'oop/inner-classes' },
        ],
      },
      {
        title: '9. Bibliotecas',
        children: [
          { title: 'NUMPY', slug: 'libraries/numpy' },
          { title: 'PANDAS', slug: 'libraries/pandas' },
          { title: 'SCIPY', slug: 'libraries/scipy' },
          { title: 'DJANGO', slug: 'libraries/django' },
          { title: 'MATPLOTLIB', slug: 'libraries/matplotlib' },
        ],
      },
      {
        title: '10. Bases de Datos y Ciencia de Datos',
        children: [
          { title: 'MYSQL', slug: 'databases/mysql' },
          { title: 'MONGODB', slug: 'databases/mongodb' },
          { title: 'MACHINE LEARNING', slug: 'databases/machine-learning' },
          { title: 'ESTRUCTURAS DE DATOS', slug: 'databases/dsa' },
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
