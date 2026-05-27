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
    title: 'Lenguajes',
    slug: 'lenguajes',
    description: 'Lenguajes de programación y sus ecosistemas.',
    submodules: [
      { title: 'JavaScript', slug: 'javascript' },
      { title: 'TypeScript', slug: 'typescript' },
      { title: 'Python', slug: 'python' },
      { title: 'Java', slug: 'java' },
      { title: 'Rust', slug: 'rust' },
      { title: 'Lua', slug: 'lua' },
      { title: 'HTML', slug: 'html' },
      { title: 'CSS', slug: 'css' },
    ],
  },
  {
    title: 'Linux',
    slug: 'linux',
    description: 'Uso y administración del sistema operativo Linux.',
    submodules: [],
  },
  {
    title: 'Fundamentos',
    slug: 'fundamentos',
    description: 'Conceptos fundamentales de programación.',
    subcategories: [
      {
        title: 'Programming',
        submodules: [
          { title: 'Introducción a la programación', slug: 'introduccion-a-la-programacion', description: 'Qué es programar, origen, clasificación por paradigmas, compiladores e intérpretes.' },
          { title: 'Variables y constantes', slug: 'variables-y-constantes', description: 'Concepto, diferencias, almacenamiento en memoria, mutabilidad e inmutabilidad.' },
          { title: 'Tipos de datos', slug: 'tipos-de-datos', description: 'Primitivos y compuestos, almacenamiento en stack y heap, conversión de tipos.' },
          { title: 'Operadores y expresiones', slug: 'operadores-y-expresiones', description: 'Aritméticos, comparación, lógicos, asignación, precedencia y tablas de verdad.' },
          { title: 'Estructuras de control', slug: 'estructuras-de-control', description: 'Secuenciales, condicionales (if, switch) y bucles (while, for, for-each).' },
          { title: 'Funciones y procedimientos', slug: 'funciones-y-procedimientos', description: 'Declaración, parámetros, retorno, paso por valor y referencia, alcance de variables.' },
        ],
      },
      {
        title: 'Front-End',
        submodules: [],
      },
      {
        title: 'Back-End',
        submodules: [
          { title: 'Programación orientada a objetos', slug: 'programacion-orientada-a-objetos', description: 'Clases, objetos, herencia, polimorfismo, encapsulamiento y abstracción.' },
          { title: 'Estructuras de datos', slug: 'estructuras-de-datos', description: 'Arrays, matrices, listas, mapas, pilas (LIFO) y colas (FIFO) con diagramas.' },
          { title: 'Estructuras de datos avanzadas', slug: 'estructuras-de-datos-avanzadas', description: 'Árboles binarios, BST, grafos, tablas hash, colisiones y recorridos BFS/DFS.' },
          { title: 'Errores y excepciones', slug: 'errores-y-excepciones', description: 'Errores vs excepciones, try-catch, finally, lanzar excepciones propias y buenas prácticas.' },
          { title: 'Programación asíncrona', slug: 'programacion-asincrona', description: 'Callbacks, promesas, async/await, ejecución secuencial vs paralela y modelo de concurrencia.' },
        ],
      },
      {
        title: 'Database',
        submodules: [],
      },
    ],
  },
];
