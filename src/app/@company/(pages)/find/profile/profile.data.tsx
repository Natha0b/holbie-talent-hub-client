
interface Profile {
    jobName: string;
    kindJob: string;
    location: string;
    skills: string;
    icon: string;
  }
  
  const profiles: Profile[] = [
    {
      jobName: 'BackEnd',
      kindJob: 'On site',
      location: 'Bogota D.C',
      skills: 'english, technologies',
      icon: './backend.png',
    },
    {
      jobName: 'FrontEnd',
      kindJob: 'Remote',
      location: 'Medellin',
      skills: 'english, technologies',
      icon: ('./frontend.png'),
    },
    {
      jobName: 'Full Stack',
      kindJob: 'Remote',
      location: 'Cartagena',
      skills: 'english, technologies',
      icon: './fullstack.png',
    },
    {
      jobName: 'Other',
      kindJob: 'Remote',
      location: 'Cali',
      skills: 'english, technologies',
      icon: './others.png',
    },
  ];

const listOfCities = [
    'Bogota D.C',
    'Medellin',
    'Cartagena',
    'Barranquilla',
    'Cali',
    'Bucaramanga',
    'Pereira',
    'Santa Marta',
    'Villavicencio',
    'Cucuta',
    'Ibague',
    'Pasto',
    'Manizales',
    'Armenia',
    'Neiva',
    'Popayan',
    'Monteria',
    'Valledupar',
    'Sincelejo',
    'Tunja',
    'Riohacha',
    'Florencia',
    'Yopal',
    'Quibdo',
    'Mocoa',
    'San Jose del Guaviare',
    'Mitú',
    'Puerto Carreño',
    'Leticia',
];

const englishLevel = [
    'A0: Beginner',
    'A1-A2: Basic',
    'A2-B1: Pre-intermediate',
    'B1: Intermediate',
    'B2: Upper-intermediate',
    'C1-C2: Advanced',
];

const technologies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
];

const jobKind = [
    'Remote',
    'Onside',
    'Both',
];

export{ profiles, listOfCities, englishLevel, technologies, jobKind }