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
