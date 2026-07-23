// ============================================================================
// ARCHIVO DE DATOS DEL PORTAFOLIO
// ============================================================================
// Este es el ÚNICO archivo que necesitas editar para personalizar tu portafolio
// con tu propia información. Los componentes en src/components/ solo leen estos
// datos, así que puedes cambiar todo aquí sin tocar ningún componente.
//
// Ver README.md -> "Cómo editar tu portafolio" para ejemplos guiados.
// ============================================================================

import profilePlaceholder from '../assets/images/profile-placeholder.svg'
import projectPlaceholder from '../assets/images/project-placeholder.svg'

// ----------------------------------------------------------------------------
// PERFIL: información principal que aparece en la sección Hero
// ----------------------------------------------------------------------------
export const profileData = {
  name: 'Mónica Liliana Betancur',
  title: 'Estudiante de Ingeniería de Sistemas',
  tagline: 'Tenacidad',
  location: 'Envigado, Colombia',
  // Para usar tu propia foto: reemplaza el archivo en src/assets/images/profile-placeholder.svg
  // (o agrega tu foto, ej. profile.jpg, e impórtala arriba y úsala aquí).
  photo: profilePlaceholder,
}

// ----------------------------------------------------------------------------
// REDES SOCIALES Y CONTACTO: se usan en el Hero, la sección Contacto y el Footer
// ----------------------------------------------------------------------------
export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/liliana-betancur/',
  github: 'https://github.com/MonicaLilianaBetancur',
  email: 'liliana.betan@hotmail.com',
}

// ----------------------------------------------------------------------------
// SOBRE MÍ: párrafo de presentación
// ----------------------------------------------------------------------------
export const aboutData = {
  paragraph:
    'Gerente Comercial con 22 años de trayectoria liderando estrategias comerciales de alto impacto ' +
    'en los sectores asegurador, bancario, garantías crediticias y salud corporativa. Amplia experiencia ' +
    'liderando equipos de hasta 50 personas a nivel nacional, gestionando portafolios estratégicos de alto ' +
    'valor y desarrollando relaciones institucionales con una base amplia de clientes corporativos en los ' +
    'sectores financiero, cooperativo y solidario. Combino visión estratégica, orientación a resultados y ' +
    'habilidades de relacionamiento institucional, con liderazgo en la construcción de CRM comercial desde ' +
    'cero, implementación de CRM institucional y renovación de plataformas web corporativas. Actualmente ' +
    'curso Ingeniería de Sistemas, consolidando un perfil híbrido entre negocio y tecnología.',
}

// ----------------------------------------------------------------------------
// HABILIDADES: lista simple de objetos {name, icon}.
// El icono es un emoji para no depender de imágenes externas ni librerías.
// Agrega o quita objetos de este array para actualizar la sección.
// ----------------------------------------------------------------------------
export const skillsData = [
  { name: 'Python', icon: '🐍' },
  { name: 'Git y GitHub', icon: '🔧' },
  { name: 'VS Code', icon: '💻' },
  { name: 'Excel / Pandas', icon: '📊' },
  { name: 'Análisis de datos', icon: '📈' },
  { name: 'Liderazgo de equipos', icon: '🤝' },
  { name: 'CRM', icon: '🗂️' },
  { name: 'Negociación', icon: '🤝' },
  { name: 'Visión estratégica', icon: '🎯' },
]

// ----------------------------------------------------------------------------
// PROYECTOS: cada objeto es una tarjeta en la sección Proyectos.
// Para agregar un proyecto nuevo, copia un objeto del array y edita sus valores.
// Para quitar uno, simplemente elimina su objeto del array.
// Sección dejada vacía intencionalmente: se irá llenando con los proyectos
// del semestre a medida que avancen.
// ----------------------------------------------------------------------------
export const projectsData = []

// ----------------------------------------------------------------------------
// EXPERIENCIA Y EDUCACIÓN: timeline unificado, ordenado del más reciente al más
// antiguo. El campo "type" ('work' | 'education') controla el color del badge.
// ----------------------------------------------------------------------------
export const experienceData = [
  {
    id: 1,
    type: 'education',
    role: 'Ingeniería de Sistemas',
    place: 'Institución Universitaria CEIPA',
    period: 'En curso (2° año)',
    description: 'Visión tecnológica aplicada a la gestión de negocios.',
  },
  {
    id: 2,
    type: 'work',
    role: 'Gerente de Relacionamiento – Clientes Preferenciales',
    place: 'COLMÉDICOS | Medicina Laboral y Salud Corporativa B2B',
    period: 'Julio 2025 - Actualidad',
    description:
      'Gestión de relacionamiento con clientes corporativos preferenciales en el sector de salud laboral.',
  },
  {
    id: 3,
    type: 'education',
    role: 'Especialización en Finanzas Corporativas',
    place: 'Universidad EIA',
    period: '2018',
    description: '',
  },
  {
    id: 4,
    type: 'education',
    role: 'Administración de Empresas',
    place: 'Universidad Pontificia Bolivariana (UPB)',
    period: '2017',
    description: '',
  },
  {
    id: 5,
    type: 'education',
    role: 'Tecnóloga en Análisis de Costos y Presupuestos',
    place: 'Instituto Tecnológico Metropolitano (ITM)',
    period: '2004',
    description: '',
  },
]

// ----------------------------------------------------------------------------
// CONTACTO: se usa en la sección Contacto (formulario -> mailto) y el Footer.
// ----------------------------------------------------------------------------
export const contactData = {
  email: 'liliana.betan@hotmail.com',
  phone: '+57 316 748 8167',
  availability: 'Disponible para proyectos de práctica y oportunidades que integren negocio y tecnología',
}
