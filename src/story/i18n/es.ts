import type { I18nStrings } from './en';

const es: I18nStrings = {
  visibility: {
    public: 'Código abierto',
    private: 'Repositorio privado',
    nda: 'Bajo NDA',
  },
  talkKind: {
    talk: 'Charla',
    article: 'Artículo',
    podcast: 'Podcast',
    video: 'Vídeo',
    book: 'Libro',
  },
  hero: {
    availableForWork: 'Disponible para trabajar',
    scrollCue: 'Desplázate — el show empieza ↓',
  },
  numbers: {
    actLabel: 'En cifras',
    yearsShipping: (n) => {
      const pr = new Intl.PluralRules('es');
      return pr.select(n) === 'one' ? 'año programando' : 'años programando';
    },
    commits: (n) => {
      const pr = new Intl.PluralRules('es');
      return pr.select(n) === 'one' ? 'commit' : 'commits';
    },
    clients: (n) => {
      const pr = new Intl.PluralRules('es');
      return pr.select(n) === 'one' ? 'cliente' : 'clientes';
    },
    repositories: (n) => {
      const pr = new Intl.PluralRules('es');
      return pr.select(n) === 'one' ? 'repositorio' : 'repositorios';
    },
    icebergHigh: 'de este trabajo vive en repos privados. GitHub solo muestra la punta del iceberg.',
    icebergLow: 'de este trabajo vive en repos privados — la parte que GitHub nunca muestra.',
    publicLabel: 'Público',
    privateLabel: 'Privado',
  },
  clientsSection: {
    actLabel: 'Quién confió en mí para producción',
    ndaTag: 'NDA',
    publicTag: 'Público',
  },
  timeline: {
    actLabel: 'El camino',
    now: 'hoy',
    clientsPrefix: 'Clientes:',
    at: '@',
  },
  work: {
    actLabel: 'Proyectos destacados',
    forPrefix: 'para',
    screenshot: (title) => `${title} — captura de pantalla`,
    redactedTitle: 'Código y detalles bajo NDA',
    redactedSourceCode: 'código fuente',
    redactedRepoUrl: 'url del repo interno',
    redactedArchitecture: 'diagrama de arquitectura',
    seeItLive: 'Verlo en vivo ↗',
    viewSource: 'Ver código ↗',
  },
  accolades: {
    actLabel: 'Reconocimientos',
    certified: 'Certificaciones',
    verify: 'Verificar ↗',
  },
  pressTour: {
    actLabel: 'Gira de prensa',
  },
  activity: {
    actLabelActivity: 'Cada commit cuenta',
    actLabelPlatforms: 'Dónde vive el código',
    contributions: (n) => {
      const pr = new Intl.PluralRules('es');
      return pr.select(n) === 'one' ? 'contribución' : 'contribuciones';
    },
    commitsPerDay: (year) => `Commits por día en ${year}`,
    contributionHeatmap: (year) => `Mapa de contribuciones de ${year}`,
    imported: '✓ importado',
    selfReported: 'auto-reportado',
    repos: (n) => {
      const pr = new Intl.PluralRules('es');
      return pr.select(n) === 'one' ? 'repo' : 'repos';
    },
    repositoriesLabel: 'repositorios',
  },
  training: {
    actLabel: 'Formación',
    languagesHeader: 'Idiomas',
  },
  behindTheScenes: {
    actLabel: 'Tras las cámaras',
  },
  critics: {
    actLabel: 'La crítica',
  },
  footer: {
    thatsAWrap: 'Fin de la función',
    madeWith: 'Hecho con Starring — código abierto',
    terms: 'Términos',
    privacy: 'Privacidad',
  },
} satisfies I18nStrings;

export default es;
