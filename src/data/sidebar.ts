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
    submodules: [],
  },
  {
    title: 'HTML',
    slug: 'lenguajes/html',
    description: 'Lenguaje de marcado para la web.',
    submodules: [],
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
