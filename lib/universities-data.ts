export interface University {
  slug: string;
  name: string;
  nameEn: string;
  city: string;
  province: string;
  country: string;
  founded: number;
  ranking: string;
  rankingSystem: string;
  students: string;
  internationalStudents: string;
  logo?: string;
  heroImage?: string;
  intro: string;
  presentation: {
    history: string;
    strengths: string[];
    campus: string;
  };
  programs: {
    licences: string[];
    masters: string[];
    popularDomains: string[];
  };
  admission: {
    diplomas: string[];
    languageRequirements: string[];
    documents: string[];
    applicationPeriod: string;
  };
  tuition: {
    min: number;
    max: number;
    currency: string;
    costOfLiving: string;
    costOfLivingDetail: string;
  };
  scholarships: {
    types: { name: string; description: string; coverage: string }[];
  };
  whyChoose: {
    advantages: string[];
    careerOpportunities: string[];
  };
  faq: { question: string; answer: string }[];
  metaDescription: string;
  keywords: string[];
}

export const universities: University[] = [
  {
    slug: 'universite-pekin-pku',
    name: 'Université de Pékin',
    nameEn: 'Peking University (PKU)',
    city: 'Pékin',
    province: 'Pékin',
    country: 'Chine',
    founded: 1898,
    ranking: '#17',
    rankingSystem: 'QS World University Rankings 2024',
    students: '45 000',
    internationalStudents: '6 000+',
    intro: `Étudier à l'Université de Pékin (PKU), c'est intégrer l'une des universités les plus prestigieuses au monde et la référence absolue de l'enseignement supérieur en Chine. Fondée en 1898, cette institution légendaire accueille chaque année des milliers d'étudiants internationaux désireux d'étudier en Chine dans un environnement académique d'exception. Classée dans le top 20 mondial par QS, l'Université de Pékin offre un accès privilégié aux réseaux professionnels chinois et internationaux les plus influents. Grâce aux nombreuses bourses Chine disponibles — notamment la bourse du gouvernement chinois (CSC) — il est possible de financer intégralement ses études à PKU. Scholarship Detective vous accompagne à chaque étape pour décrocher votre admission et obtenir votre bourse.`,
    presentation: {
      history: `L'Université de Pékin, fondée en 1898 sous le nom d'Université Impériale de la Capitale, est la première université nationale moderne de Chine. Surnommée "PKU" ou "Beida" (北大), elle a joué un rôle central dans les grands mouvements intellectuels et politiques chinois du XXe siècle. Son campus de 2,74 km², situé dans le district de Haidian, est classé parmi les plus beaux du monde, avec ses jardins historiques, ses lacs et son architecture mêlant tradition chinoise et modernité.`,
      strengths: [
        'Top 20 mondial (QS 2024) — meilleure université de Chine',
        'Excellence en sciences, droit, économie et médecine',
        'Réseau alumni parmi les plus influents d\'Asie',
        'Campus historique classé patrimoine culturel',
        '6 000+ étudiants internationaux de 100+ nationalités',
        'Centre de recherche de pointe dans 30+ domaines',
      ],
      campus: `Le campus principal de Pékin (Yanyuan) s'étend sur 274 hectares. Avec ses lacs, ses pavillons historiques et ses jardins impériaux, il est considéré comme l'un des plus beaux campus d'Asie. La bibliothèque universitaire, l'une des plus grandes de Chine, abrite plus de 10 millions d'ouvrages.`,
    },
    programs: {
      licences: ['Droit', 'Économie', 'Sciences politiques', 'Médecine', 'Biologie', 'Physique', 'Mathématiques', 'Langue et littérature chinoises', 'Histoire', 'Philosophie', 'Sciences informatiques', 'Finance'],
      masters: ['MBA International', 'Droit international', 'Sciences politiques', 'Médecine clinique', 'Intelligence artificielle', 'Finance quantitative', 'Relations internationales', 'Management des entreprises chinoises'],
      popularDomains: ['Droit & Sciences politiques', 'Économie & Finance', 'Médecine & Sciences de la vie', 'Informatique & IA', 'Lettres & Sciences humaines'],
    },
    admission: {
      diplomas: ['Baccalauréat ou équivalent pour la Licence', 'Licence ou équivalent pour le Master', 'Moyenne générale minimum 12/20 recommandée'],
      languageRequirements: [
        'Programmes en anglais : IELTS 6.5+ ou TOEFL iBT 90+',
        'Programmes en chinois : HSK 4 minimum (HSK 5 recommandé)',
        'Programmes francophones : niveau B2 français + notions de chinois',
      ],
      documents: [
        'Formulaire de candidature en ligne',
        'Relevés de notes officiels (traduits en anglais ou chinois)',
        'Diplômes certifiés et apostillés',
        '2 lettres de recommandation',
        'Lettre de motivation (statement of purpose)',
        'CV académique',
        'Passeport valide (min. 2 ans)',
        'Photo d\'identité',
        'Certificat médical (formulaire PKU)',
        'Justificatifs financiers si non-boursier',
      ],
      applicationPeriod: 'Novembre à mars pour la rentrée de septembre',
    },
    tuition: {
      min: 2600,
      max: 5500,
      currency: 'USD',
      costOfLiving: '600 – 1 200 €/mois',
      costOfLivingDetail: 'Pékin est une métropole moderne où le coût de la vie varie selon le quartier. Le logement en résidence universitaire (400–800 €/mois) est nettement moins cher que le privé. La nourriture, les transports et les loisirs restent accessibles.',
    },
    scholarships: {
      types: [
        {
          name: 'Bourse CSC (Gouvernement Chinois)',
          description: 'La bourse la plus complète, attribuée par le Conseil des Affaires d\'État. Couvre les frais de scolarité, le logement, l\'assurance maladie et verse une allocation mensuelle.',
          coverage: 'Prise en charge totale : frais de scolarité + logement + assurance + allocation 2 500–3 500 RMB/mois',
        },
        {
          name: 'Bourse PKU "Yenching Academy"',
          description: 'Programme d\'excellence de l\'Université de Pékin pour les étudiants en Master exceptionnels. Très sélective mais particulièrement prestigieuse.',
          coverage: 'Frais de scolarité + logement + allocation mensuelle',
        },
        {
          name: 'Bourse du Gouvernement de Pékin',
          description: 'Bourse provinciale pour les étudiants souhaitant étudier dans la capitale. Moins connue mais plus accessible que la CSC.',
          coverage: 'Frais de scolarité partiels ou totaux',
        },
        {
          name: 'Bourse PKU Internationale',
          description: 'Attribuée directement par l\'université aux meilleurs candidats internationaux.',
          coverage: 'Réduction de 30 à 100% des frais de scolarité',
        },
      ],
    },
    whyChoose: {
      advantages: [
        'Diplôme reconnu mondialement dans 180+ pays',
        'Accès au plus grand marché du monde depuis l\'intérieur',
        'Réseau alumni incluant des dirigeants d\'État, PDG et prix Nobel',
        'Programmes entièrement en anglais disponibles',
        'Environnement multiculturel avec 100+ nationalités représentées',
        'Opportunités de stage dans les plus grandes entreprises chinoises',
        'Coût des études inférieur aux universités américaines ou britanniques équivalentes',
      ],
      careerOpportunities: [
        'Carrières dans les multinationales présentes en Chine',
        'Entrepreneuriat dans l\'écosystème tech chinois (Alibaba, Tencent, Huawei)',
        'Diplomatie et relations internationales',
        'Recherche académique dans des laboratoires de classe mondiale',
        'Finance et consulting (BCG, McKinsey, Goldman Sachs Chine)',
      ],
    },
    faq: [
      {
        question: 'Comment étudier en Chine à l\'Université de Pékin ?',
        answer: 'Pour étudier en Chine à PKU, vous devez déposer votre dossier entre novembre et mars pour une rentrée en septembre. Il faut un baccalauréat (ou équivalent), un niveau d\'anglais IELTS 6.5+ ou HSK 4+ pour les programmes en chinois, et constituer un dossier complet. Scholarship Detective vous accompagne de A à Z dans cette démarche.',
      },
      {
        question: 'Quelles sont les bourses disponibles pour étudier à PKU ?',
        answer: 'Plusieurs bourses Chine sont accessibles : la bourse CSC (gouvernement chinois) qui couvre tout — scolarité, logement, assurance et allocation mensuelle — la bourse de l\'Université de Pékin, la bourse du gouvernement de Pékin, et la Yenching Academy pour les Masters. Scholarship Detective optimise votre dossier pour maximiser vos chances d\'obtention.',
      },
      {
        question: 'L\'Université de Pékin est-elle reconnue en France ?',
        answer: 'Oui, l\'Université de Pékin est pleinement reconnue en France et dans le monde entier. Classée #17 mondiale par QS, ses diplômes sont acceptés par les employeurs, les grandes écoles et les universités françaises pour une poursuite d\'études. C\'est l\'une des universités les plus réputées d\'Asie.',
      },
    ],
    metaDescription: 'Étudier à l\'Université de Pékin (PKU) — Top 17 mondial. Découvrez les programmes, conditions d\'admission, bourses CSC disponibles et comment Scholarship Detective vous accompagne.',
    keywords: ['université de pékin', 'PKU bourse', 'étudier en Chine Pékin', 'bourse CSC Chine', 'université en Chine top', 'admission PKU français'],
  },

  {
    slug: 'universite-tsinghua',
    name: 'Université Tsinghua',
    nameEn: 'Tsinghua University',
    city: 'Pékin',
    province: 'Pékin',
    country: 'Chine',
    founded: 1911,
    ranking: '#25',
    rankingSystem: 'QS World University Rankings 2024',
    students: '48 000',
    internationalStudents: '5 000+',
    intro: `L'Université Tsinghua est la référence mondiale en ingénierie, architecture et sciences technologiques en Chine. Fondée en 1911, cette institution d'élite est classée #25 mondiale par QS et forme les ingénieurs et technologues les plus brillants d'Asie. Étudier à Tsinghua, c'est rejoindre le berceau de l'innovation chinoise, là où sont nés les dirigeants des géants tech comme Huawei, Xiaomi et ByteDance. Les bourses Chine pour intégrer Tsinghua — notamment la bourse CSC et la bourse universitaire THSP — offrent une prise en charge complète. Scholarship Detective vous aide à construire un dossier de candidature compétitif pour accéder à cette université d'exception.`,
    presentation: {
      history: `Fondée en 1911 sur le site d'un ancien jardin impérial, l'Université Tsinghua (清华大学) est née de l'indemnisation Boxer versée par les États-Unis à la Chine. D'abord école préparatoire pour les étudiants partant étudier en Amérique, elle s'est transformée en université complète en 1925. Réputée comme "l'MIT chinois", Tsinghua domine les classements en ingénierie, sciences et technologie et a produit plus de présidents et PDG de Fortune 500 que n'importe quelle autre université asiatique.`,
      strengths: [
        'Top 25 mondial (QS 2024) — n°1 en Asie en ingénierie',
        'Leader mondial en intelligence artificielle et robotique',
        'Réseau alumni : Xi Jinping, dirigeants de Huawei, Xiaomi, ByteDance',
        'Campus de 442 hectares — le plus grand de Pékin',
        'Partenariats avec MIT, Stanford, ETH Zurich',
        'Budget R&D parmi les 10 premiers mondiaux',
      ],
      campus: `Le campus de Tsinghua s'étend sur 442 hectares dans le district de Haidian à Pékin. Il comprend des laboratoires de recherche ultramodernes, un musée universitaire, des installations sportives olympiques et des jardins historiques classés. La bibliothèque centrale est l'une des plus grandes et des mieux équipées de Chine.`,
    },
    programs: {
      licences: ['Génie civil', 'Informatique', 'Électronique', 'Architecture', 'Génie mécanique', 'Chimie', 'Mathématiques appliquées', 'Physique', 'Biologie', 'Management', 'Design industriel', 'Urbanisme'],
      masters: ['Intelligence artificielle', 'Architecture durable', 'Génie environnemental', 'MBA Tsinghua-INSEAD', 'Robotique', 'Énergie renouvelable', 'Sciences des données', 'Finance d\'entreprise'],
      popularDomains: ['Ingénierie & Technologie', 'Architecture & Design', 'Intelligence artificielle', 'Sciences de l\'environnement', 'Management & MBA'],
    },
    admission: {
      diplomas: ['Baccalauréat scientifique ou technologique pour la Licence', 'Licence en ingénierie ou sciences pour le Master', 'Excellents résultats académiques (mention Bien minimum recommandée)'],
      languageRequirements: [
        'Programmes en anglais : IELTS 6.5+ ou TOEFL iBT 90+',
        'Programmes en chinois : HSK 5 minimum',
        'Architecture & Design : portfolio obligatoire',
      ],
      documents: [
        'Formulaire de candidature en ligne (portail Tsinghua)',
        'Relevés de notes et diplômes officiels certifiés',
        '2 lettres de recommandation académiques',
        'Lettre de motivation détaillée',
        'Portfolio (pour Architecture, Design, Arts)',
        'CV académique et professionnel',
        'Passeport valide',
        'Photo d\'identité récente',
        'Certificat médical officiel',
        'Résultats IELTS/TOEFL officiels',
      ],
      applicationPeriod: 'Décembre à mars pour la rentrée de septembre',
    },
    tuition: {
      min: 2800,
      max: 6000,
      currency: 'USD',
      costOfLiving: '700 – 1 300 €/mois',
      costOfLivingDetail: 'Pékin offre un excellent rapport qualité-prix pour les étudiants. Le logement en résidence Tsinghua (500–900 €/mois) est confortable et sécurisé. La vie sur campus avec cantines, cafés et installations sportives réduit significativement les dépenses quotidiennes.',
    },
    scholarships: {
      types: [
        {
          name: 'Bourse CSC (Gouvernement Chinois)',
          description: 'La plus prisée pour intégrer Tsinghua. Couvre intégralement les études sans remboursement.',
          coverage: 'Scolarité + logement + assurance + allocation 2 500–3 500 RMB/mois',
        },
        {
          name: 'Bourse THSP (Tsinghua University Scholarship Program)',
          description: 'Bourse propre à Tsinghua pour les étudiants internationaux excellents. Très compétitive.',
          coverage: 'Frais de scolarité complets + allocation mensuelle',
        },
        {
          name: 'Bourse "Shui Mu Scholar"',
          description: 'Programme de bourses d\'excellence de Tsinghua pour les meilleurs étudiants internationaux en Master et Doctorat.',
          coverage: 'Prise en charge totale + accompagnement académique personnalisé',
        },
        {
          name: 'Bourse du Gouvernement de Pékin',
          description: 'Complément accessible aux étudiants en filières scientifiques et technologiques.',
          coverage: 'Frais de scolarité partiels',
        },
      ],
    },
    whyChoose: {
      advantages: [
        'Meilleure université technique d\'Asie selon QS 2024',
        'Accès direct à l\'écosystème tech de Zhongguancun — la "Silicon Valley chinoise"',
        'Programmes de recherche avec les laboratoires les plus financés du monde',
        'Diplôme reconnu par toutes les grandes entreprises mondiales',
        'Communauté internationale dynamique avec 100+ associations étudiantes',
        'Stage et emploi facilités par un réseau alumni de 300 000 personnes',
      ],
      careerOpportunities: [
        'Ingénieur chez Huawei, Alibaba, Tencent, ByteDance, SMIC',
        'Recherche et développement dans les laboratoires d\'IA de premier plan',
        'Architecture et urbanisme pour les projets d\'infrastructure asiatique',
        'Start-up dans l\'écosystème d\'innovation chinois',
        'Carrière internationale dans les cabinets d\'ingénierie globaux',
      ],
    },
    faq: [
      {
        question: 'Comment étudier en Chine à l\'Université Tsinghua ?',
        answer: 'Pour étudier en Chine à Tsinghua, candidatez entre décembre et mars via le portail en ligne officiel. Un excellent dossier académique est indispensable — Tsinghua est très sélective. IELTS 6.5+ requis pour les programmes en anglais. Scholarship Detective analyse votre profil et optimise votre dossier pour maximiser vos chances.',
      },
      {
        question: 'Quelles bourses sont disponibles pour Tsinghua ?',
        answer: 'Plusieurs bourses Chine s\'offrent à vous : la bourse CSC (prise en charge totale), la bourse THSP de Tsinghua, la bourse Shui Mu Scholar pour les Masters et Doctorats, et la bourse du gouvernement de Pékin. Scholarship Detective vous aide à identifier la bourse la plus adaptée à votre profil et à monter un dossier solide.',
      },
      {
        question: 'L\'Université Tsinghua est-elle reconnue internationalement ?',
        answer: 'Absolument. Tsinghua est classée #25 mondiale (QS 2024) et ses diplômes sont reconnus partout dans le monde. Elle figure dans le top 10 mondial en ingénierie et en sciences informatiques. Les employeurs français et européens valorisent fortement ce diplôme pour les postes techniques et managériaux.',
      },
    ],
    metaDescription: 'Étudier à l\'Université Tsinghua — Top 25 mondial, n°1 en ingénierie en Asie. Programmes, bourses CSC, conditions d\'admission et accompagnement Scholarship Detective.',
    keywords: ['université Tsinghua', 'bourse Tsinghua', 'étudier ingénierie Chine', 'CSC bourse Chine', 'admission Tsinghua français', 'école ingénieur Chine'],
  },

  {
    slug: 'universite-fudan-shanghai',
    name: 'Université Fudan',
    nameEn: 'Fudan University',
    city: 'Shanghai',
    province: 'Shanghai',
    country: 'Chine',
    founded: 1905,
    ranking: '#55',
    rankingSystem: 'QS World University Rankings 2024',
    students: '43 000',
    internationalStudents: '5 500+',
    intro: `Étudier à l'Université Fudan de Shanghai, c'est choisir l'une des universités les plus réputées d'Asie, implantée au cœur de la métropole économique la plus dynamique de Chine. Fondée en 1905, Fudan est classée #55 mondiale par QS et brille particulièrement en médecine, économie et sciences humaines. Étudier en Chine à Shanghai offre un avantage incomparable : vous êtes immergé dans le plus grand hub financier et commercial d'Asie, avec un accès direct aux multinationales, banques et cabinets de consulting internationaux. Les bourses Chine — CSC, gouvernement de Shanghai et bourses Fudan — permettent de financer intégralement votre cursus. Scholarship Detective vous guide à chaque étape de votre candidature.`,
    presentation: {
      history: `Fondée en 1905 par Ma Xiangbo, un intellectuel jésuite, l'Université Fudan est l'une des rares universités chinoises à avoir été fondée par des Chinois eux-mêmes. Son nom signifie "l'éclat incessant du soleil et de la lune", symbolisant l'excellence perpétuelle. Implantée à Shanghai, Fudan a su allier tradition académique chinoise et ouverture internationale pour devenir l'une des universités les plus cosmopolites d'Asie.`,
      strengths: [
        'Top 55 mondial (QS 2024) — 3e université de Chine',
        'N°1 en médecine et sciences de la santé en Chine',
        'Localisation à Shanghai — capitale économique asiatique',
        '5 500+ étudiants internationaux de 119 pays',
        'Centre médical universitaire Huashan classé n°1 en Chine',
        'Partenariats avec Harvard, Yale, Oxford et Sciences Po Paris',
      ],
      campus: `Fudan dispose de plusieurs campus à Shanghai. Le campus de Handan (principal) est situé dans le district de Yangpu. Le campus de Fenglin accueille la faculté de médecine. La localisation à Shanghai offre un accès direct aux quartiers d'affaires de Pudong et Jing'an, au réseau de transports ultra-développé et à une vie culturelle incomparable.`,
    },
    programs: {
      licences: ['Médecine clinique', 'Pharmacie', 'Économie', 'Finance', 'Management', 'Droit', 'Sciences politiques', 'Journalisme', 'Relations internationales', 'Biologie', 'Chimie', 'Informatique'],
      masters: ['Médecine clinique internationale', 'Finance internationale', 'MBA (Fudan-MIT)', 'Management interculturel', 'Relations internationales', 'Santé publique (MPH)', 'Droit des affaires', 'Sciences des données en finance'],
      popularDomains: ['Médecine & Sciences de la santé', 'Finance & Économie internationale', 'Management & MBA', 'Journalisme & Communication', 'Sciences politiques & Relations internationales'],
    },
    admission: {
      diplomas: ['Baccalauréat pour la Licence (mention Bien recommandée)', 'Licence pour le Master', 'Pour Médecine : excellents résultats en sciences obligatoires'],
      languageRequirements: [
        'Programmes en anglais : IELTS 6.5+ ou TOEFL iBT 90+',
        'Programmes en chinois : HSK 4 minimum (HSK 5 pour Médecine)',
        'Quelques programmes bilingues anglais-chinois disponibles',
      ],
      documents: [
        'Formulaire de candidature Fudan en ligne',
        'Relevés de notes officiels et diplômes certifiés',
        '2 lettres de recommandation (académiques ou professionnelles)',
        'Lettre de motivation personnalisée',
        'CV complet',
        'Passeport valide',
        'Résultats IELTS/TOEFL officiels',
        'Certificat médical (formulaire Fudan)',
        'Photo d\'identité récente',
        'Attestation financière si non-boursier',
      ],
      applicationPeriod: 'Novembre à avril pour la rentrée de septembre',
    },
    tuition: {
      min: 2400,
      max: 5500,
      currency: 'USD',
      costOfLiving: '800 – 1 500 €/mois',
      costOfLivingDetail: 'Shanghai est la ville la plus chère de Chine, mais reste bien moins onéreuse que Paris, Londres ou New York. Le logement en résidence universitaire (600–1 000 €/mois) est très bien situé. Les restaurants, transports en commun et loisirs restent accessibles, surtout avec une bourse.',
    },
    scholarships: {
      types: [
        {
          name: 'Bourse CSC (Gouvernement Chinois)',
          description: 'Financement intégral des études sans conditions de remboursement. La voie royale pour étudier à Fudan.',
          coverage: 'Scolarité + logement + assurance maladie + allocation 2 500–3 500 RMB/mois',
        },
        {
          name: 'Bourse du Gouvernement de Shanghai',
          description: 'Bourse spécifique à la municipalité de Shanghai, plus accessible que la CSC et cumulable avec d\'autres aides.',
          coverage: '10 000 à 40 000 RMB/an selon le niveau d\'études',
        },
        {
          name: 'Bourse Fudan Universiade',
          description: 'Bourse d\'excellence attribuée directement par Fudan aux meilleurs candidats internationaux.',
          coverage: 'Frais de scolarité complets + allocation mensuelle',
        },
        {
          name: 'Bourse Fudan Merit Award',
          description: 'Reconnaissance académique pour les étudiants déjà inscrits affichant d\'excellents résultats.',
          coverage: 'Réduction de 50 à 100% des frais de scolarité',
        },
      ],
    },
    whyChoose: {
      advantages: [
        'Diplôme reconnu mondialement, particulièrement en médecine et finance',
        'Shanghai : capitale mondiale des affaires et de la finance en Asie',
        'Partenariat Fudan-MIT et Fudan-Harvard pour certains programmes',
        'Centre médical Huashan — terrains de stage d\'excellence pour les étudiants en médecine',
        'Vie étudiante cosmopolite dans la ville la plus internationale de Chine',
        'Salaires de sortie parmi les plus élevés des universités chinoises',
      ],
      careerOpportunities: [
        'Médecine : hôpitaux universitaires de rang mondial à Shanghai et en Chine',
        'Finance : JPMorgan, Goldman Sachs, HSBC, banques chinoises (ICBC, CCB)',
        'Consulting : McKinsey Shanghai, BCG, Roland Berger',
        'Multinationales : Unilever, L\'Oréal, LVMH (toutes présentes à Shanghai)',
        'Entrepreneuriat dans l\'écosystème startup de Shanghai',
      ],
    },
    faq: [
      {
        question: 'Comment étudier en Chine à Shanghai à l\'Université Fudan ?',
        answer: 'Pour étudier en Chine à Fudan, déposez votre candidature entre novembre et avril via le portail officiel. Le dossier comprend relevés de notes, lettres de recommandation, lettre de motivation et résultats linguistiques. Scholarship Detective prend en charge la préparation complète de votre dossier pour maximiser vos chances.',
      },
      {
        question: 'Quelles bourses sont disponibles pour étudier à Fudan ?',
        answer: 'Plusieurs bourses Chine s\'offrent à vous pour Fudan : la bourse CSC (tout inclus), la bourse du gouvernement de Shanghai (10 000–40 000 RMB/an), la bourse Fudan Universiade et le Fudan Merit Award. Scholarship Detective vous conseille sur la stratégie de candidature la plus adaptée à votre profil.',
      },
      {
        question: 'L\'Université Fudan est-elle reconnue en France et en Europe ?',
        answer: 'Oui, Fudan est pleinement reconnue en France et dans toute l\'Europe. Classée #55 mondiale (QS 2024), ses diplômes sont acceptés pour les équivalences en France. En médecine, Fudan bénéficie d\'une reconnaissance internationale particulière. Les employeurs européens valorisent très fortement un diplôme de Fudan, notamment en finance et médecine.',
      },
    ],
    metaDescription: 'Étudier à l\'Université Fudan de Shanghai — Top 55 mondial. Médecine, finance, management. Bourses CSC disponibles. Accompagnement Scholarship Detective.',
    keywords: ['université Fudan Shanghai', 'étudier médecine Chine', 'bourse Fudan', 'CSC Shanghai', 'étudier finance Chine', 'admission Fudan français'],
  },

  {
    slug: 'universite-zhejiang',
    name: 'Université Zhejiang',
    nameEn: 'Zhejiang University',
    city: 'Hangzhou',
    province: 'Zhejiang',
    country: 'Chine',
    founded: 1897,
    ranking: '#67',
    rankingSystem: 'QS World University Rankings 2024',
    students: '58 000',
    internationalStudents: '7 000+',
    intro: `L'Université Zhejiang, fondée en 1897 à Hangzhou, est l'une des universités les plus complètes et les plus innovantes de Chine. Classée #67 mondiale par QS, elle se distingue par son excellence en sciences, ingénierie et agriculture, et par sa proximité avec l'un des écosystèmes technologiques les plus dynamiques du monde : Hangzhou, siège d'Alibaba et de centaines de startups de premier plan. Étudier en Chine à Zhejiang University, c'est profiter d'un campus magnifique au bord du lac de l'Ouest, d'une formation de classe mondiale et de bourses Chine accessibles. Scholarship Detective vous accompagne pour accéder à cet établissement d'exception.`,
    presentation: {
      history: `Fondée en 1897 sous le nom "Qiushi Academy" (Académie de la Vérité), l'Université Zhejiang est l'une des plus anciennes universités modernes de Chine. Implantée à Hangzhou — ville réputée comme "le paradis sur terre" dans la culture chinoise — elle a fusionné avec plusieurs grandes écoles dans les années 1990 pour devenir l'une des universités les plus complètes du pays. Son campus principal de Zijingang, ouvert en 2002, est reconnu comme l'un des plus beaux et des plus modernes de Chine.`,
      strengths: [
        'Top 67 mondial (QS 2024) — 4e université de Chine',
        'N°1 en agriculture, sciences de l\'environnement et génie chimique en Chine',
        'Proximité avec Alibaba, NetEase et l\'écosystème tech de Hangzhou',
        'Campus Zijingang parmi les plus beaux et modernes d\'Asie',
        '7 000+ étudiants internationaux issus de 140 pays',
        'Budget de recherche annuel dépassant 1 milliard d\'euros',
      ],
      campus: `L'Université Zhejiang dispose de plusieurs campus. Le campus principal de Zijingang, inauguré en 2002, s'étend sur 344 hectares et est équipé des infrastructures les plus modernes. Hangzhou, surnommée la Silicon Valley chinoise, offre un cadre de vie exceptionnel avec le lac de l'Ouest (Patrimoine UNESCO), un réseau de transports ultramoderne et un dynamisme économique sans pareil.`,
    },
    programs: {
      licences: ['Génie chimique', 'Agronomie', 'Biotechnologie', 'Sciences de l\'environnement', 'Informatique', 'Électronique', 'Architecture', 'Médecine', 'Management', 'Finance', 'Design industriel', 'Mathématiques'],
      masters: ['Intelligence artificielle appliquée', 'Biotechnologie médicale', 'Sciences de l\'environnement', 'Génie chimique avancé', 'Management de l\'innovation', 'Data Science', 'Architecture durable', 'Pharmacologie'],
      popularDomains: ['Sciences & Ingénierie', 'Agriculture & Biotechnologie', 'Informatique & IA', 'Sciences de l\'environnement', 'Médecine & Pharmacologie'],
    },
    admission: {
      diplomas: ['Baccalauréat pour la Licence', 'Licence pour le Master', 'Bon niveau académique général requis'],
      languageRequirements: [
        'Programmes en anglais : IELTS 6.0+ ou TOEFL iBT 85+',
        'Programmes en chinois : HSK 4 minimum',
        'Certains programmes acceptent les débutants en chinois avec cours préparatoires',
      ],
      documents: [
        'Formulaire de candidature en ligne ZJU',
        'Relevés de notes et diplômes officiels',
        '2 lettres de recommandation',
        'Lettre de motivation',
        'CV académique',
        'Passeport valide',
        'Photo d\'identité',
        'Certificat médical',
        'Résultats IELTS/TOEFL',
        'Preuve financière si non-boursier',
      ],
      applicationPeriod: 'Janvier à avril pour la rentrée de septembre',
    },
    tuition: {
      min: 2200,
      max: 4800,
      currency: 'USD',
      costOfLiving: '600 – 1 100 €/mois',
      costOfLivingDetail: 'Hangzhou offre un excellent rapport qualité de vie / coût de la vie. Moins chère que Pékin ou Shanghai, la ville dispose de toutes les infrastructures d\'une métropole moderne. Le logement en résidence ZJU (400–700 €/mois) est confortable et bien situé.',
    },
    scholarships: {
      types: [
        {
          name: 'Bourse CSC (Gouvernement Chinois)',
          description: 'Financement complet pour les meilleurs candidats, sans remboursement.',
          coverage: 'Scolarité + logement + assurance + allocation 2 500–3 000 RMB/mois',
        },
        {
          name: 'Bourse du Gouvernement de Zhejiang',
          description: 'Bourse provinciale accessible, idéale en complément ou alternative à la CSC.',
          coverage: '15 000 à 30 000 RMB/an',
        },
        {
          name: 'Bourse ZJU International Excellence',
          description: 'Bourse d\'excellence attribuée par l\'université aux meilleurs candidats internationaux.',
          coverage: 'Frais de scolarité complets + allocation mensuelle',
        },
        {
          name: 'Bourse ZJU Silk Road',
          description: 'Programme de bourses pour les étudiants des pays de la ceinture et route de la soie, incluant de nombreux pays d\'Afrique et d\'Europe de l\'Est.',
          coverage: 'Scolarité partielle ou totale',
        },
      ],
    },
    whyChoose: {
      advantages: [
        'Classée meilleure université de Chine en agriculture, génie chimique et environnement',
        'Hangzhou = capitale mondiale de l\'e-commerce (Alibaba, Ant Group)',
        'Campus Zijingang ultra-moderne avec équipements de recherche de pointe',
        'Frais de scolarité inférieurs à Pékin et Shanghai pour une qualité équivalente',
        'Programme d\'enseignement bilingue anglais/chinois étendu',
        'Fort taux d\'insertion professionnelle dans les entreprises tech chinoises',
      ],
      careerOpportunities: [
        'Postes R&D dans les entreprises tech de Hangzhou (Alibaba, NetEase, DJI)',
        'Agriculture et agroalimentaire : secteur en forte croissance en Chine',
        'Environnement et développement durable : priorité nationale en Chine',
        'Biotechnologie et pharmaceutique : marché chinois en expansion rapide',
        'Management international dans les entreprises de la Route de la Soie',
      ],
    },
    faq: [
      {
        question: 'Comment étudier en Chine à l\'Université Zhejiang à Hangzhou ?',
        answer: 'Pour étudier en Chine à ZJU, candidatez entre janvier et avril via le portail officiel. Le dossier inclut relevés de notes, lettres de recommandation, lettre de motivation et niveau d\'anglais (IELTS 6.0+). Scholarship Detective prépare et optimise votre candidature pour maximiser vos chances d\'admission et d\'obtention de bourse.',
      },
      {
        question: 'Quelles bourses sont accessibles pour l\'Université Zhejiang ?',
        answer: 'Plusieurs bourses Chine sont disponibles : la bourse CSC (prise en charge totale), la bourse du gouvernement de Zhejiang (15 000–30 000 RMB/an), la bourse ZJU International Excellence et la bourse Silk Road. Scholarship Detective analyse votre profil pour vous orienter vers la bourse la plus accessible.',
      },
      {
        question: 'L\'Université Zhejiang est-elle reconnue à l\'international ?',
        answer: 'Oui, l\'Université Zhejiang est classée #67 mondiale (QS 2024) et ses diplômes sont reconnus dans le monde entier. En France, les équivalences de diplômes ZJU sont admises par les universités et les employeurs. Elle figure dans le top 5 des universités chinoises et dans le top 100 mondial en ingénierie et sciences.',
      },
    ],
    metaDescription: 'Étudier à l\'Université Zhejiang (Hangzhou) — Top 67 mondial. Sciences, ingénierie, agriculture. Bourses CSC et ZJU disponibles. Accompagnement Scholarship Detective.',
    keywords: ['université Zhejiang', 'étudier Hangzhou Chine', 'bourse ZJU', 'CSC ingénierie Chine', 'admission Zhejiang français', 'étudier sciences Chine'],
  },
];

export function getUniversityBySlug(slug: string): University | undefined {
  return universities.find((u) => u.slug === slug);
}

export function getAllUniversitySlugs(): string[] {
  return universities.map((u) => u.slug);
}
