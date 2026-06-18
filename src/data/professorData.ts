import profileImage from './profile.png'
import coverImage from './cover.png'
import cvPdf from './cv.pdf'
import pactPdf from './paper - pact2018 EN.pdf'
import sblpPdf from './paper - sblp2018 EN.pdf'
import cgoPdf from './paper - cgo2017 EN.pdf'
import lgbtqPdf from './paper - lgbtq video games archive EN.pdf'
import brasnamPdf from './paper - brasnam2015 PTBR.pdf'
import quantifyingPdf from './paper - quantifying contamination in programs EN.pdf'
import operatorFusionPdf from './operator_fusion.pdf'
import dissertationPdf from './masters - dissertation_english EN.pdf'
import bachelorPoc1Pdf from './bachelor - final coursework 2 PTBR.pdf'
import bachelorPoc2Pdf from './bachelor - final coursework PTBR.pdf'
import bachelorTransdisciplinarityPdf from './bachelor - computing and interdisciplinarity PTBR.pdf'
import bachelorAcoPdf from './bachelor - natural computing work PTBR.pdf'
import mastersRegisterColoringPdf from './masters - register coloring NP complete PTBR.pdf'
import mastersBoruvkaPdf from './masters - work in graphs (boruvka) PTBR.pdf'

export const professorData = {
  name: 'Pedro Ramos',
  profileImageUrl: profileImage,
  coverImageUrl: coverImage,
  cvUrl: cvPdf,
  email: 'pramos.costar@gmail.com',
  office: {
    building: 'Department of Computer Science',
    room: 'Main Campus',
    campus: 'PUC Minas University',
  },
  socials: {
    linkedin: 'https://www.linkedin.com/in/phramos07',
    github: 'https://github.com/phramos07',
    scholar: '#', // Not provided in CV
  },
  education: [
    {
      degree: 'MSc., Computer Science',
      institution: 'Federal University of Minas Gerais (UFMG)',
      period: '2016 - 2018',
      location: 'Brazil',
    },
    {
      degree: 'BSc., Software Engineering (1 year)',
      institution: 'University of East London (UEL)',
      period: '2013 - 2014',
      location: 'United Kingdom',
    },
    {
      degree: 'BSc., Computer Science',
      institution: 'Federal University of Minas Gerais (UFMG)',
      period: '2011 - 2016',
      location: 'Brazil',
    },
  ],
  work: [
    {
      title: 'Co-Owner',
      organization: 'PodCodar (NPO)',
      period: 'Jan 2024 - Present · Part-time · Remote',
      responsibilities: [
        'Helping out new members with their first steps in tech',
        'Teaching raw coding skills in the era of AI',
        'Carrying out simulated tech interviews (raw code interviews and system design)',
        'Giving extensive feedback for candidates that wish to enter I.T.',
        'Teaching Golang whenever possible',
      ],
    },
    {
      title: 'Compilers Professor',
      organization: 'PUC Minas University',
      period: 'Sep 2023 - Today',
      responsibilities: [
        'Teaching compilers, operating systems and parallel computing',
        'Familiarity with bytecode (js, python and LLVM’s), virtualization, optimization, lattice theory, flow analysis',
        'Expertise in OS principles, system calls, POSIX commands, and distributed systems',
        'Foundation on CUDA and OpenMP',
        'Project: Smart Contracts security analysis - finding tainted flow statically and dynamically',
        'Project: Operator Fusion in every ML Model using reinforcement learning',
      ],
    },
    {
      title: 'Sr. Consultant',
      organization: 'Microsoft',
      period: 'Sep 2023 - Apr 2024',
      responsibilities: [
        'Multicloud solutions using AKS + Cosmos DB',
        'Development using Java 17',
      ],
    },
    {
      title: 'Summer Professor',
      organization: 'Éstiam - École supérieure des technologies de l’information',
      period: 'Aug 2023',
      responsibilities: [
        'One week hands-on course on Golang and Concurrency Patterns in Paris, France',
      ],
    },
    {
      title: 'Software Engineer',
      organization: 'Paradigm',
      period: 'May 2022 - Feb 2023',
      responsibilities: [
        'Crypto ecosystem (DeFi) development',
        'Go & Python development',
        'Requests to Starknet/Cairo (L2) and Ethereum/Solidity (L1)',
      ],
    },
    {
      title: 'Software Specialist',
      organization: 'Trybe',
      period: 'Jul 2021 - May 2022',
      responsibilities: [
        'Taught groups of up to 150 students remotely in live coding sessions',
        'Tech stack: NodeJS, Express, Infra, Docker, HTTP, REST, JWT, ORM, SQL, Mongo, Deployment, Heroku, Github Actions',
      ],
    },
    {
      title: 'Software Engineer',
      organization: 'B2W',
      period: 'Mar 2021 - Jul 2021',
      responsibilities: [
        'Working for the largest e-commerce of Latin America',
        'DDD web backend in Go with high concurrency',
      ],
    },
    {
      title: 'Software Engineer',
      organization: 'TremTec',
      period: 'Apr 2020 - Oct 2020',
      responsibilities: [
        'Software factory start-up environment',
        'Python3 web-crawler ETL development',
      ],
    },
    {
      title: 'Software Engineer',
      organization: 'Take Blip',
      period: 'Sep 2019 - Apr 2020',
      responsibilities: [
        'Chatbots development in Node and .netcore',
        'Hosted and managed in Azure',
      ],
    },
    {
      title: 'Software Engineer (Mid-level)',
      organization: 'SmarttBot',
      period: 'Aug 2018 - Aug 2019',
      responsibilities: [
        'Python & Go development for Daytrading',
        'Developing highly efficient and responsive software',
      ],
    },
    {
      title: 'Algorithms Tutor',
      organization: 'Private Practice',
      period: 'Aug 2017 - Today',
      responsibilities: [
        'Teaching algorithms, data structures, complexity, databases, programming languages, and compilers',
      ],
    },
    {
      title: 'Algorithms and Data Structures II Professor',
      organization: 'UFMG',
      period: 'Aug 2017 - Dec 2017',
      responsibilities: [
        'Teaching Sorting, Trees, Queues, Stacks, and Graphs',
      ],
    },
    {
      title: 'Fullstack Engineer (Entry-level)',
      organization: 'dti digital technologies',
      period: 'Feb 2018 - Jul 2018',
      responsibilities: [
        'Software factory environment',
        'Junior Dev role focusing on Angular and .net core',
      ],
    },
    {
      title: 'Compilers Engineer (Internship)',
      organization: 'LG Electronics',
      period: '2016 - 2018',
      responsibilities: [
        'Implemented TaskMiner, a source-to-source compiler for task parallelism in C/C++',
        'Addressed challenges in profit estimation, recursive depth bounding, and memory region limiting',
        'Utilized Python, LLVM, C/C++, Bash, and Static Analyses',
      ],
    },
    {
      title: 'Research Assistant',
      organization: 'Compilers Laboratory at UFMG (LAC)',
      period: 'Sep 2015 - Feb 2018',
      responsibilities: [
        'Carried out academic activities: tutoring, teaching, and researching',
        'Worked on pointer disambiguation analysis and compilers’ data-flow static analyses',
      ],
    },
    {
      title: 'Software Developer Intern',
      organization: 'Synergia / JPF',
      period: '2014 - 2015',
      responsibilities: [
        'Java Spring, Hibernate, JUnit, TDD Culture (Synergia)',
        'PHP, Yii Framework, MySQL (JPF)',
      ],
    },
  ],
  publications: [
    {
      title: 'Automatic Annotation of Tasks in Structured Code',
      authors: 'RAMOS, P., SOUZA, G., DIVINO, C., ARAUJO, G., LEOBAS, G. and PEREIRA, F.',
      venue: 'PACT 2018',
      description:
        'Describes TaskMiner, a source-to-source compiler that inserts OpenMP pragmas for task parallelism into C/C++ programs without human intervention, approximating memory region ranges, bounding recursive tasks, and estimating task profitability.',
      link: pactPdf,
    },
    {
      title: 'TaskMiner: Automatic Identification of Tasks',
      authors: 'RAMOS, P., SOUZA, G., LEOBAS, G. and PEREIRA, F.',
      venue: 'SBLP 2018',
      description:
        'Presents TaskMiner, a tool that automatically finds task parallelism in C code by solving irregular parallelism challenges such as memory range analysis, spurious dependency removal, and parallelism cost assessment, inserting OpenMP annotations via LLVM optimizations.',
      link: sblpPdf,
    },
    {
      title: 'Pointer Disambiguation via Strict Inequalities',
      authors: 'MAALEJ, M., GONNORD, L., PEREIRA, F., PAISANTE, V. and RAMOS, P.',
      venue: 'CGO 2017',
      description:
        'Uses abstract interpretation to build strict less-than relations between pointers, showing that if a pointer is strictly less than another they cannot alias; implemented in LLVM with linear-time analysis up to six times more precise than existing techniques.',
      link: cgoPdf,
    },
    {
      title: 'Queer Identities in Video Games: Data Visualization for a Quantitative Analysis of Representation',
      authors: 'BRAGANÇA, L., UTSCH, S., RAMOS, P., TENORIO, J. and CALDEIRA, P.',
      venue: 'SBGames 2017',
      description:
        'Proposes a quantitative analysis of LGBTQ representation in video games using interactive visualizations built on the LGBTQ Game Archive dataset, examining trends in character identities, genre distribution, and intersections across sexualities and gender identities from the 1980s to the 2010s.',
      link: lgbtqPdf,
    },
    {
      title: 'Uma Análise da Polaridade Expressa nas Manchetes de Notícias Brasileiras',
      authors: 'RAMOS, P., REIS, J. and BENEVENUTO, F.',
      venue: 'BraSNAM 2015',
      description:
        'Analyzes 59,510 news headlines from eight major Brazilian newspapers over three months in 2015, extracting polarity features to investigate strategies used by online news websites and how headline sentiment is impacted by specific events.',
      link: brasnamPdf,
    },
  ],
  academicWorks: [
    {
      title: 'Automatic Mining of Tasks in Structured Programs',
      authors: 'Pedro Henrique Ramos Costa',
      type: "Master's Dissertation",
      institution: 'Federal University of Minas Gerais (UFMG)',
      period: '2018',
      advisors: 'Advisor: Fernando Magno Quintão Pereira',
      description:
        'Describes the design and implementation of static analyses and code generation techniques to annotate programs with OpenMP pragmas for task parallelism, implemented in TaskMiner with up to four-fold speedups on a 12-core machine at zero programming cost.',
      link: dissertationPdf,
    },
    {
      title: 'Paralelização Automática de Laços Irregulares',
      authors: 'Pedro Ramos',
      type: 'Undergraduate Research Report (POC II)',
      institution: 'Federal University of Minas Gerais (UFMG)',
      period: '2016',
      advisors: 'Advisor: Fernando M. Q. Pereira',
      description:
        'Introduces Task Miner, a static analysis algorithm that extracts task parallelism from irregular loops by finding "helices"—code fragments inside loops that do not create inter-iteration dependencies and can be parallelized as tasks.',
      link: bachelorPoc2Pdf,
    },
    {
      title: 'Análise de Sentimento em Notícias Nacionais',
      authors: 'Pedro Henrique Ramos Costa',
      type: 'Undergraduate Monograph (POC I)',
      institution: 'Federal University of Minas Gerais (UFMG)',
      period: '2015',
      advisors: 'Advisor: Fabrício Benevenuto · Co-advisor: Julio Reis',
      description:
        'Applies sentiment analysis methods to Brazilian news headlines collected from eight major newspapers over three months, using SentiStrength and iFeel to measure polarity distributions, temporal trends, and entity associations at moments of extreme sentiment.',
      link: bachelorPoc1Pdf,
    },
    {
      title: 'Alocação de Registradores em Síntese de Hardware Específico via Coloração de Vértices com Pesos',
      authors: 'Pedro Ramos',
      type: 'Graduate Course Report',
      institution: 'Federal University of Minas Gerais (UFMG)',
      period: '2017',
      advisors: 'Course: Projeto e Análise de Algoritmos',
      description:
        'Studies register allocation in application-specific hardware synthesis modeled as weighted vertex coloring (NP-Hard), presenting a baseline heuristic and a hybrid metaheuristic based on evolutionary algorithms tested on generated graphs and SPEC CPU 2006 interval graphs.',
      link: mastersRegisterColoringPdf,
    },
    {
      title: 'Algoritmo de Borůvka em Paralelo',
      authors: 'Marcus Rodrigues and Pedro Ramos',
      type: 'Graduate Course Report',
      institution: 'Federal University of Minas Gerais (UFMG)',
      period: '2017',
      advisors: 'Course: Teoria dos Grafos',
      description:
        'Discusses minimum spanning tree algorithms with focus on Borůvka\'s algorithm and develops a parallel implementation, comparing it with Prim and Kruskal approaches for finding minimum-weight spanning trees in connected undirected graphs.',
      link: mastersBoruvkaPdf,
    },
    {
      title: 'A Transdisciplinaridade e a Ciência da Computação',
      authors: 'Pedro Ramos',
      type: 'Article Proposal',
      institution: 'Federal University of Minas Gerais (UFMG)',
      period: '2016',
      advisors: 'Course: Transdisciplinaridade e Estudos Avançados (CAD068)',
      description:
        'Proposes an article discussing transdisciplinarity in computer science, synthesizing bibliographic material on how transdisciplinary methods complement traditional scientific approaches and encourage openness to new forms of understanding.',
      link: bachelorTransdisciplinarityPdf,
    },
    {
      title: 'Otimização por Colônia de Formigas',
      authors: 'Pedro Ramos',
      type: 'Undergraduate Practical Work',
      institution: 'Federal University of Minas Gerais (UFMG)',
      period: '2015',
      advisors: 'Course: Computação Natural',
      description:
        'Implements the Ant Colony Optimization (ACO) metaheuristic in Python to solve the Longest Path problem on weighted directed graphs, modeling pheromone trails and colony behavior to converge on near-optimal paths.',
      link: bachelorAcoPdf,
    },
    {
      title: 'Gaps in Operator Fusion for Deep Learning Systems: The Trade-off Between Compilation and Execution of Unfused Operations',
      authors: 'Pedro Ramos and Leonardo Kamei',
      type: 'Research Manuscript',
      institution: 'PUC Minas University',
      period: '2024',
      description:
        'Formalizes the trade-off between compilation time and execution efficiency in operator fusion for ML compilers (PyTorch 2, XLA, TVM) using a cost model T(n) = T_C + n·T_X, and proposes an alternative fusion ordering to reduce time-to-first-batch.',
      link: operatorFusionPdf,
    },
  ],
  projects: [
    {
      name: 'Taskminer',
      description: 'A tool for automatic mining of task parallelism in C programs, written in C++ inside the LLVM infrastructure.',
    },
    {
      name: 'Visualizing the LGBTQ VG Archive',
      description: 'Data visualization framework for visualizing the LGBTQ VG Archive.',
      link: 'http://homepages.dcc.ufmg.br/~pedroramos/LGBTQ/page/',
    },
    {
      name: 'Quantifying Contamination in Programs',
      description:
        'Aliasing-sensitive algorithm to quantify contamination in programs by tainted flow analysis, relating contamination to Shannon\'s mutual information and comparing alias analysis precision.',
      link: quantifyingPdf,
      linkLabel: 'View PDF →',
    },
    {
      name: 'Operator Fusion',
      description:
        'Framework modeling the compilation vs. execution trade-off in ML operator fusion across PyTorch 2, XLA, and TVM backends, with benchmarks and backend selection by usage regime.',
      link: operatorFusionPdf,
      linkLabel: 'View PDF →',
    },
  ],
}
