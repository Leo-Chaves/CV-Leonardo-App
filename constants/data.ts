export type Project = {
  name: string;
  description: string;
  technologies: string[];
};

export const summaryTechnologies = [
  'Java',
  'Spring Boot',
  'Vue',
  'React',
  'React Native',
  'Expo',
  'PostgreSQL',
  'Docker',
  'IA Local',
];

export const appTechnologies = [
  'React Native',
  'Expo',
  'Expo Router',
  'TypeScript',
  'JavaScript',
  'React Hooks',
  'Componentização',
  'StyleSheet',
  'Navegação por rotas',
  'Assets locais',
  'Publicação via Expo',
];

export const generalSkills = [
  'Java',
  'Spring Boot',
  'Vue.js',
  'Quasar',
  'React',
  'React Native',
  'PostgreSQL',
  'H2',
  'Docker',
  'Git/GitHub',
  'IA Local',
];

export const academicExperiences = [
  'Projetos com Java e Spring Boot',
  'Desenvolvimento frontend com Vue, React e React Native',
  'Estudos em Machine Learning e IA Local',
  'Computação Forense',
  'Desenvolvimento de aplicações mobile com Expo',
];

export const professionalActivities = [
  'Suporte técnico a usuários',
  'Atendimento e acompanhamento de chamados',
  'Apoio na resolução de problemas de software e hardware',
  'Configuração e manutenção de sistemas',
  'Participação em melhorias de processos internos',
];

export const developmentInternshipActivities = [
  'Estágio atual em desenvolvimento na DISSEN da UNICAP',
  'Apoio no desenvolvimento e manutenção de sistemas internos',
  'Construção de funcionalidades para aplicações web',
  'Colaboração com equipe técnica em demandas acadêmicas e institucionais',
  'Uso de tecnologias modernas para criar soluções digitais',
];

export const projects: Project[] = [
  {
    name: 'MedScope',
    description:
      'Sistema que consulta artigos científicos por CID e utiliza IA local para gerar resumos em português.',
    technologies: ['Java', 'Spring Boot', 'Vue', 'Ollama', 'PubMed', 'H2'],
  },
  {
    name: 'Consenso',
    description:
      'Sistema de apoio à mediação jurídica, com funcionalidades administrativas, autenticação e gerenciamento de usuários.',
    technologies: ['Java', 'Spring Boot', 'Vue', 'Quasar', 'PostgreSQL'],
  },
  {
    name: 'Controle de Faltas com QR Code',
    description:
      'Sistema acadêmico para registro de presença por horários, usando QR Code rotativo para validação.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Vue', 'Quasar'],
  },
  {
    name: 'Jogo da Forca de Filmes',
    description:
      'Jogo mobile nativo em React Native com tema de filmes, teclado virtual, controle de erros, vitória, derrota e sorteio aleatório.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'React Hooks'],
  },
];

export const movies = [
  'MATRIX',
  'TITANIC',
  'AVATAR',
  'GLADIADOR',
  'CORINGA',
  'INTERESTELAR',
  'BATMAN',
  'SUPERMAN',
  'HOMEM ARANHA',
  'VINGADORES',
  'PANTERA NEGRA',
  'HOMEM DE FERRO',
  'CAPITAO AMERICA',
  'DOUTOR ESTRANHO',
  'GUARDIOES DA GALAXIA',
  'STAR WARS',
  'HARRY POTTER',
  'SENHOR DOS ANEIS',
  'JURASSIC PARK',
  'TOY STORY',
  'PROCURANDO NEMO',
  'REI LEAO',
  'FROZEN',
  'SHREK',
  'KUNG FU PANDA',
  'VELOZES E FURIOSOS',
  'PIRATAS DO CARIBE',
  'DE VOLTA PARA O FUTURO',
  'O PODEROSO CHEFAO',
  'CLUBE DA LUTA',
];

export const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
