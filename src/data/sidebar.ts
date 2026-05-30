export interface Submodule {
  title: string;
  slug: string;
  description?: string;
}

export interface Subcategory {
  title: string;
  submodules: Submodule[];
}

export interface Module {
  title: string;
  slug: string;
  description: string;
  submodules?: Submodule[];
  subcategories?: Subcategory[];
}

export function getAllSubmodules(mod: Module): Submodule[] {
  if (mod.subcategories) {
    return mod.subcategories.flatMap((c) => c.submodules);
  }
  return mod.submodules ?? [];
}

export const sidebarData: Module[] = [
  {
    title: 'JavaScript',
    slug: 'lenguajes/javascript',
    description: 'Lenguaje de programación web por excelencia.',
    subcategories: [
      {
        title: 'Fundamentos',
        submodules: [
          { title: 'Introducción', slug: 'general/introduccion', description: 'Origen, evolución y características.' },
          { title: 'Sintaxis', slug: 'general/sintaxis', description: 'Estructura básica del código.' },
          { title: 'Tipos de datos', slug: 'general/tipos-de-datos', description: 'Primitivos y compuestos.' },
          { title: 'Operadores', slug: 'general/operadores', description: 'Aritméticos, lógicos, de comparación.' },
        ],
      },
      {
        title: 'Strings y Números',
        submodules: [
          { title: 'Strings', slug: 'general/strings', description: 'Manipulación de texto.' },
          { title: 'Números', slug: 'general/numeros', description: 'Operaciones numéricas.' },
          { title: 'Math', slug: 'general/math', description: 'Objeto matemático.' },
          { title: 'Fechas', slug: 'general/fechas', description: 'Objeto Date.' },
          { title: 'Temporal', slug: 'general/temporal', description: 'API moderna de fechas.' },
        ],
      },
      {
        title: 'Control de flujo',
        submodules: [
          { title: 'Condicionales', slug: 'general/condicionales', description: 'if, else, switch.' },
          { title: 'Bucles', slug: 'general/bucles', description: 'for, while, do-while.' },
          { title: 'Iteraciones', slug: 'general/iteraciones', description: 'for...of, for...in, forEach.' },
        ],
      },
      {
        title: 'Colecciones',
        submodules: [
          { title: 'Arrays', slug: 'general/arrays', description: 'Listas ordenadas de valores.' },
          { title: 'Objetos', slug: 'general/objetos', description: 'Pares clave-valor.' },
          { title: 'Sets', slug: 'general/sets', description: 'Colecciones de valores únicos.' },
          { title: 'Maps', slug: 'general/maps', description: 'Mapas clave-valor mejorados.' },
        ],
      },
      {
        title: 'Funciones',
        submodules: [
          { title: 'Funciones', slug: 'general/funciones', description: 'Declaración, parámetros, retorno.' },
          { title: 'Scope', slug: 'general/scope', description: 'Alcance de variables.' },
        ],
      },
      {
        title: 'Errores y depuración',
        submodules: [
          { title: 'Errores', slug: 'general/errores', description: 'Tipos de errores y manejo.' },
          { title: 'Depuración', slug: 'general/depuracion', description: 'Herramientas de debug.' },
        ],
      },
      {
        title: 'POO',
        submodules: [
          { title: 'Clases', slug: 'general/clases', description: 'Clases y herencia.' },
          { title: 'Funciones avanzadas', slug: 'general/funciones-avanzadas', description: 'Closures, currying, composition.' },
          { title: 'Objetos avanzados', slug: 'general/objetos-avanzados', description: 'Prototipos, descriptors.' },
          { title: 'Meta y Proxy', slug: 'general/meta-proxy', description: 'Reflect y Proxy.' },
          { title: 'Typed Arrays', slug: 'general/typed-arrays', description: 'Arrays de tipo fijo.' },
        ],
      },
      {
        title: 'Asíncrono y módulos',
        submodules: [
          { title: 'Asíncrono', slug: 'general/asincrono', description: 'Callbacks, promesas, async/await.' },
          { title: 'Módulos', slug: 'general/modulos', description: 'Import/export, ES Modules.' },
        ],
      },
      {
        title: 'DOM',
        submodules: [
          { title: 'HTML First', slug: 'general/html-first', description: 'Integración HTML/JS básica.' },
          { title: 'HTML DOM', slug: 'general/html-dom', description: 'Manipulación del DOM.' },
          { title: 'Navegación DOM', slug: 'general/navegacion-dom', description: 'Recorrer el árbol DOM.' },
          { title: 'Eventos HTML', slug: 'general/eventos-html', description: 'Event listeners.' },
          { title: 'Windows', slug: 'general/windows', description: 'Objeto window.' },
        ],
      },
      {
        title: 'APIs Web',
        submodules: [
          { title: 'Web API', slug: 'general/web-api', description: 'APIs del navegador.' },
          { title: 'AJAX', slug: 'general/ajax', description: 'Peticiones asíncronas.' },
          { title: 'JSON', slug: 'general/json', description: 'Intercambio de datos.' },
          { title: 'jQuery', slug: 'general/jquery', description: 'Librería de DOM.' },
          { title: 'Gráficos', slug: 'general/graficos', description: 'Canvas, SVG.' },
        ],
      },
      {
        title: 'Referencia',
        submodules: [
          { title: 'Guía de estilo', slug: 'general/guia-de-estilo', description: 'Convenciones de código.' },
          { title: 'Referencia', slug: 'general/referencia', description: 'API completa de JS.' },
          { title: 'Versiones', slug: 'general/versiones', description: 'Historial de ECMAScript.' },
          { title: 'Proyectos', slug: 'general/proyectos', description: 'Proyectos prácticos.' },
        ],
      },
    ],
  },
  {
    title: 'TypeScript',
    slug: 'lenguajes/typescript',
    description: 'JavaScript con tipos estáticos.',
    subcategories: [
      {
        title: 'Fundamentos',
        submodules: [
          { title: 'Introducción', slug: 'general/introduccion', description: 'Qué es TypeScript y por qué usarlo.' },
          { title: 'Primeros pasos', slug: 'general/primeros-pasos', description: 'Instalación y configuración inicial.' },
          { title: 'Tipos simples', slug: 'general/tipos-simples', description: 'Tipos primitivos en TypeScript.' },
          { title: 'Explícito e inferencia', slug: 'general/explicito-inferencia', description: 'Anotaciones y deducción de tipos.' },
          { title: 'Tipos especiales', slug: 'general/tipos-especiales', description: 'any, unknown, void, never.' },
        ],
      },
      {
        title: 'Tipos',
        submodules: [
          { title: 'Arrays', slug: 'general/arrays', description: 'Tipos para arreglos.' },
          { title: 'Tuplas', slug: 'general/tuplas', description: 'Arreglos de longitud fija.' },
          { title: 'Tipos objeto', slug: 'general/tipos-objeto', description: 'Estructuras con propiedades tipadas.' },
          { title: 'Enums', slug: 'general/enums', description: 'Conjuntos de valores nombrados.' },
          { title: 'Tipos unión', slug: 'general/tipos-union', description: 'Valores que pueden ser de varios tipos.' },
          { title: 'Tipos literales', slug: 'general/tipos-literales', description: 'Valores exactos como tipos.' },
        ],
      },
      {
        title: 'Estructuras',
        submodules: [
          { title: 'Alias e interfaces', slug: 'general/alias-interfaces', description: 'type vs interface.' },
          { title: 'Funciones', slug: 'general/funciones', description: 'Parámetros y retorno tipados.' },
          { title: 'Casting', slug: 'general/casting', description: 'Conversión de tipos.' },
          { title: 'Clases', slug: 'general/clases', description: 'POO con tipos en TypeScript.' },
          { title: 'Namespaces', slug: 'general/namespaces', description: 'Organización interna de código.' },
        ],
      },
      {
        title: 'Genéricos',
        submodules: [
          { title: 'Genéricos básicos', slug: 'general/genericos-basicos', description: 'Tipos parametrizados.' },
          { title: 'Tipos de utilidad', slug: 'general/tipos-utilidad', description: 'Partial, Required, Pick, Omit y más.' },
          { title: 'Keyof', slug: 'general/keyof', description: 'Operador de claves de tipo.' },
          { title: 'Tipos condicionales', slug: 'general/tipos-condicionales', description: 'Tipos que dependen de condiciones.' },
          { title: 'Tipos mapeados', slug: 'general/tipos-mapeados', description: 'Transformar tipos existentes.' },
        ],
      },
      {
        title: 'Avanzado',
        submodules: [
          { title: 'Tipos avanzados', slug: 'general/tipos-avanzados', description: 'Técnicas avanzadas de tipos.' },
          { title: 'Type Guards', slug: 'general/type-guards', description: 'Estrechar tipos en tiempo de ejecución.' },
          { title: 'Inferencia de tipos', slug: 'general/inferencia-tipos', description: 'Cómo TypeScript deduce tipos.' },
          { title: 'Firmas de índice', slug: 'general/firmas-indice', description: 'Propiedades dinámicas en objetos.' },
          { title: 'Fusión de declaraciones', slug: 'general/fusion-declaraciones', description: 'Combinar múltiples declaraciones.' },
        ],
      },
      {
        title: 'Configuración',
        submodules: [
          { title: 'Configuración', slug: 'general/configuracion', description: 'El archivo tsconfig.json.' },
          { title: 'Definitely Typed', slug: 'general/definitely-typed', description: 'Tipos para librerías JS.' },
          { title: 'Actualizaciones TS5', slug: 'general/actualizaciones-ts5', description: 'Novedades de TypeScript 5.' },
          { title: 'Null', slug: 'general/null', description: 'null, undefined y strictNullChecks.' },
        ],
      },
      {
        title: 'Entornos',
        submodules: [
          { title: 'Node.js', slug: 'general/nodejs', description: 'TypeScript en el servidor.' },
          { title: 'React', slug: 'general/react', description: 'TypeScript con React.' },
          { title: 'Herramientas', slug: 'general/herramientas', description: 'Linters, bundlers y testing.' },
          { title: 'Decoradores', slug: 'general/decoradores', description: 'Modificar clases y miembros.' },
        ],
      },
      {
        title: 'Práctico',
        submodules: [
          { title: 'Asíncrono', slug: 'general/asincrono', description: 'Promesas y async/await tipados.' },
          { title: 'Manejo de errores', slug: 'general/manejo-errores', description: 'Errores tipados y try/catch.' },
          { title: 'Mejores prácticas', slug: 'general/mejores-practicas', description: 'Buenas prácticas con TypeScript.' },
        ],
      },
      {
        title: 'Migración',
        submodules: [
          { title: 'JS Projects', slug: 'general/js-projects', description: 'Integrar TS en proyectos JS.' },
          { title: 'Migración', slug: 'general/migracion', description: 'Migrar de JS a TypeScript.' },
        ],
      },
    ],
  },
  {
    title: 'HTML',
    slug: 'lenguajes/html',
    description: 'Lenguaje de marcado para la web.',
    subcategories: [
      {
        title: 'Fundamentos',
        submodules: [
          { title: 'Inicio', slug: 'general/inicio', description: 'Visión general de HTML.' },
          { title: 'Introducción', slug: 'general/introduccion', description: 'Qué es HTML y su historia.' },
          { title: 'Editores', slug: 'general/editores', description: 'Editores de código recomendados.' },
          { title: 'Básico', slug: 'general/basico', description: 'Estructura básica de un documento HTML.' },
          { title: 'Elementos', slug: 'general/elementos', description: 'Etiquetas y elementos HTML.' },
          { title: 'Atributos', slug: 'general/atributos', description: 'Atributos de elementos HTML.' },
        ],
      },
      {
        title: 'Texto',
        submodules: [
          { title: 'Encabezados', slug: 'general/encabezados', description: 'h1 a h6.' },
          { title: 'Párrafos', slug: 'general/parrafos', description: 'Etiqueta p y saltos de línea.' },
          { title: 'Estilos', slug: 'general/estilos', description: 'El atributo style.' },
          { title: 'Formato', slug: 'general/formato', description: 'Negrita, cursiva, subrayado.' },
          { title: 'Citas', slug: 'general/citas', description: 'blockquote, q, cite.' },
          { title: 'Comentarios', slug: 'general/comentarios', description: 'Comentarios en HTML.' },
        ],
      },
      {
        title: 'Contenido',
        submodules: [
          { title: 'Colores', slug: 'general/colores', description: 'Nombres, RGB, HEX, HSL.' },
          { title: 'CSS', slug: 'general/css', description: 'Vinculación de estilos.' },
          { title: 'Enlaces', slug: 'general/enlaces', description: 'Hipervínculos con a.' },
          { title: 'Imágenes', slug: 'general/imagenes', description: 'img, src, alt.' },
          { title: 'Favicon', slug: 'general/favicon', description: 'Icono de página.' },
          { title: 'Título de página', slug: 'general/titulo-pagina', description: 'Etiqueta title.' },
        ],
      },
      {
        title: 'Estructura',
        submodules: [
          { title: 'Tablas', slug: 'general/tablas', description: 'table, tr, td, th.' },
          { title: 'Listas', slug: 'general/listas', description: 'ul, ol, li.' },
          { title: 'Block e inline', slug: 'general/block-inline', description: 'Elementos de bloque y en línea.' },
          { title: 'Div', slug: 'general/div', description: 'Contenedor genérico.' },
          { title: 'Clases', slug: 'general/clases', description: 'El atributo class.' },
          { title: 'Id', slug: 'general/id', description: 'El atributo id.' },
        ],
      },
      {
        title: 'Componentes',
        submodules: [
          { title: 'Botones', slug: 'general/botones', description: 'button y sus variantes.' },
          { title: 'Iframes', slug: 'general/iframes', description: 'Incrustar contenido externo.' },
          { title: 'JavaScript', slug: 'general/javascript', description: 'Script en HTML.' },
          { title: 'Rutas de archivos', slug: 'general/rutas-archivos', description: 'Rutas absolutas y relativas.' },
          { title: 'Head', slug: 'general/head', description: 'Meta, title, link.' },
          { title: 'Layout', slug: 'general/layout', description: 'Estructura de página.' },
        ],
      },
      {
        title: 'Diseño',
        submodules: [
          { title: 'Responsive', slug: 'general/responsive', description: 'Meta viewport.' },
          { title: 'Código de computadora', slug: 'general/codigo-computadora', description: 'code, pre, kbd.' },
          { title: 'Semántica', slug: 'general/semantica', description: 'header, nav, main, section.' },
          { title: 'Guía de estilo', slug: 'general/guia-estilo', description: 'Buenas prácticas HTML.' },
        ],
      },
      {
        title: 'Símbolos',
        submodules: [
          { title: 'Entidades', slug: 'general/entidades', description: 'Códigos de caracteres especiales.' },
          { title: 'Símbolos', slug: 'general/simbolos', description: 'Símbolos matemáticos y monetarios.' },
          { title: 'Emojis', slug: 'general/emojis', description: 'Emojis en HTML.' },
          { title: 'Conjuntos de caracteres', slug: 'general/conjuntos-caracteres', description: 'Charset y codificación.' },
          { title: 'Codificación URL', slug: 'general/codificacion-url', description: 'Porcentajes en URLs.' },
          { title: 'vs XHTML', slug: 'general/vs-xhtml', description: 'Diferencias con XHTML.' },
        ],
      },
      {
        title: 'Formularios',
        submodules: [
          { title: 'Formularios', slug: 'general/formularios', description: 'form, action, method.' },
          { title: 'Atributos de formulario', slug: 'general/atributos-formulario', description: 'target, novalidate, autocomplete.' },
          { title: 'Elementos de formulario', slug: 'general/elementos-formulario', description: 'input, select, textarea.' },
          { title: 'Tipos de input', slug: 'general/tipos-input', description: 'text, email, password, number.' },
          { title: 'Atributos de input', slug: 'general/atributos-input', description: 'placeholder, required, pattern.' },
          { title: 'Atributos de form input', slug: 'general/atributos-form-input', description: 'formaction, formmethod, formtarget.' },
        ],
      },
      {
        title: 'Gráficos',
        submodules: [
          { title: 'Canvas', slug: 'general/canvas', description: 'Dibujo con canvas.' },
          { title: 'SVG', slug: 'general/svg', description: 'Gráficos vectoriales.' },
        ],
      },
      {
        title: 'Multimedia',
        submodules: [
          { title: 'Media', slug: 'general/media', description: 'Elementos multimedia.' },
          { title: 'Video', slug: 'general/video', description: 'video y source.' },
          { title: 'Audio', slug: 'general/audio', description: 'audio y source.' },
          { title: 'Plugins', slug: 'general/plugins', description: 'object, embed.' },
          { title: 'YouTube', slug: 'general/youtube', description: 'Incrustar videos de YouTube.' },
        ],
      },
      {
        title: 'APIs',
        submodules: [
          { title: 'Web APIs', slug: 'general/web-apis', description: 'APIs del navegador en HTML.' },
          { title: 'Geolocalización', slug: 'general/geolocalizacion', description: 'API de geolocalización.' },
          { title: 'Drag and Drop', slug: 'general/drag-drop', description: 'Arrastrar y soltar.' },
          { title: 'Web Storage', slug: 'general/web-storage', description: 'localStorage y sessionStorage.' },
          { title: 'Web Workers', slug: 'general/web-workers', description: 'Trabajo en segundo plano.' },
          { title: 'SSE', slug: 'general/sse', description: 'Server-Sent Events.' },
        ],
      },
    ],
  },
  {
    title: 'CSS',
    slug: 'lenguajes/css',
    description: 'Lenguaje de estilos para la web.',
    submodules: [],
  },
  {
    title: 'Java',
    slug: 'lenguajes/java',
    description: 'Lenguaje orientado a objetos, multiplataforma.',
    submodules: [],
  },
  {
    title: 'C',
    slug: 'lenguajes/c',
    description: 'Lenguaje de bajo nivel, base de muchos sistemas.',
    submodules: [],
  },
  {
    title: 'Python',
    slug: 'lenguajes/python',
    description: 'Versátil, simple y poderoso.',
    submodules: [],
  },
  {
    title: 'Rust',
    slug: 'lenguajes/rust',
    description: 'Seguridad y rendimiento sin basura.',
    submodules: [],
  },
  {
    title: 'Lua',
    slug: 'lenguajes/lua',
    description: 'Pequeño, rápido y embebible.',
    submodules: [],
  },
  {
    title: 'VIM',
    slug: 'herramientas/vim',
    description: 'Editor de texto basado en terminal.',
    submodules: [
      { title: 'Introducción', slug: 'general/introduccion', description: 'Qué es VIM y por qué usarlo.' },
    ],
  },
  {
    title: 'Git',
    slug: 'herramientas/git',
    description: 'Sistema de control de versiones distribuido.',
    submodules: [
      { title: 'Introducción', slug: 'general/introduccion', description: 'Qué es Git y por qué usarlo.' },
    ],
  },
  {
    title: 'Linux',
    slug: 'sistemas/linux',
    description: 'Sistema operativo de código abierto.',
    submodules: [
      { title: 'Introducción', slug: 'general/introduccion', description: 'Qué es Linux y sus componentes.' },
    ],
  },
];
