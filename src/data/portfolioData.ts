import {
  Project,
  SkillItem,
  ExperienceItem,
  EducationItem,
  AchievementItem,
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'JAGADEESWARAN C',
  title: 'Backend Developer & Systems Architect',
  location: 'Tiruppur, Tamil Nadu, India',
  email: 'jagadeeswaran2902@gmail.com',
  phone: '+91 9994198907',
  githubPrimary: 'https://github.com/jagadeeswaran101',
  githubSecondary: 'https://github.com/jagadees-vet',
  linkedin: 'https://www.linkedin.com/in/jagadeeswaran-c-8a2649353',
  education: {
    degree: 'B.Sc. Computer Science and Applications',
    college: 'VET Institute of Arts and Science (Co-Education) College, Thindal, Erode',
    duration: '2024 - 2027',
    status: 'Undergraduate (UG)',
    cgpa: '85.43',
  },
  resumePath: '/Jagadeeswaran_C_Resume.pdf',
  originalAssetPath: '/assets/aistudio/Resume_Final-pro__1__c6c2e2ee.pdf',
  driveFolderUrl: 'https://drive.google.com/drive/folders/19PCtb9lu7nibpmruILJSxJqTtbWq1fd3',
  intro:
    'Aspiring Backend Developer and Systems Architect focused on engineering robust RESTful APIs, relational databases, containerized workflows, and intelligent software systems. Skilled at deconstructing complex software requirements and visual designs through Reverse Prompt Engineering.',
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-dataglobal',
    role: 'Blockchain & Cybersecurity Intern',
    company: 'Dataglobal Technologies',
    type: 'Internship',
    period: 'Aug 12, 2025 – Sep 01, 2025',
    location: 'Tamil Nadu, India',
    description:
      'Gained practical immersion in Debian Linux systems administration, low-level networking, and cryptographic primitives supporting blockchain and cybersecurity operations.',
    responsibilities: [
      'Installed, configured, and administered Debian Linux environments, managing package dependencies, firewall rules, and user permission matrices via bash CLI.',
      'Studied decentralized consensus models, distributed state machines, and cryptographic hash chains.',
      'Applied asymmetric public-key cryptography, SHA-256 data hashing, and digital signature verification techniques as part of cybersecurity coursework.',
      'Documented security hardening procedures for containerized and virtualized server nodes.',
    ],
    technologies: ['Debian Linux', 'Bash Scripting', 'Cryptography', 'Blockchain', 'Network Security'],
  },
  {
    id: 'exp-qgate',
    role: 'Technical Operations & GIS Assistant',
    company: 'Q-Gate Infotech Private Limited',
    type: 'Internship',
    period: 'Jun 09, 2025 – Jul 08, 2025',
    location: 'Tamil Nadu, India',
    description:
      'Supported geospatial data operations and cross-functional project tracking to satisfy customer technical specifications.',
    responsibilities: [
      'Utilized QGIS geospatial software to organize, digitize, and quality-audit spatial datasets based on client requirements.',
      'Coordinated across cross-functional engineering and operational teams to monitor milestone resolution and status reports.',
      'Handled customer request workflows, ensuring rapid resolution and consistent data governance standards.',
      'Cultivated professional workplace communication, sprint coordination, and technical documentation acumen.',
    ],
    technologies: ['QGIS', 'Geospatial Analysis', 'Data Auditing', 'Technical Documentation', 'Team Collaboration'],
  },
  {
    id: 'exp-independent',
    role: 'Independent Backend & Systems Developer',
    company: 'Self-Directed Engineering',
    type: 'Self-Directed',
    period: '2024 – Present',
    location: 'Tiruppur, India',
    description:
      'Designing and building full-stack web applications, edge computer vision telemetry, and reverse prompt engineering architectures.',
    responsibilities: [
      'Architected and deployed production web applications (Benefit Finder, Employee Salary Prediction) live on Vercel with responsive TypeScript interfaces.',
      'Engineered SmartCampusSentinel: an edge virtual perimeter system utilizing Python and YOLOv8n to stream incident JSON alerts to an ESP32 microcontroller over hardware UART.',
      'Developed specialized Reverse Prompt Engineering methods to deconstruct AI outputs, system prompts, and UI/UX visual references into deterministic specifications.',
      'Implemented clean Git workflows across multiple GitHub organizations with modular architecture and typed data models.',
    ],
    technologies: ['Node.js', 'Express.js', 'TypeScript', 'React', 'Python', 'YOLOv8', 'MySQL', 'Git'],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-ug',
    degree: 'B.Sc. — Computer Science and Applications',
    institution: 'VET Institute of Arts and Science (Co-Education) College',
    period: '2024 – 2027',
    status: 'Active · Undergraduate (UG)',
    grade: 'CGPA: 85.43',
    location: 'Thindal, Erode, Tamil Nadu, India',
    description:
      'Pursuing a comprehensive curriculum encompassing computer architecture, software engineering, relational databases, data structures, and distributed systems.',
    highlights: [
      'Core Programming: Java, C, C++, and Python object-oriented design and algorithm implementation',
      'Database Systems: Relational data modeling, SQL queries, normalization (3NF), and ACID transactions',
      'Operating Systems: Linux process model, file permissions, shell programming, and memory allocation',
      'Web Technologies: Modern frontend frameworks, asynchronous JavaScript, and RESTful API principles',
      'Cybersecurity & Networking: TCP/IP protocols, threat analysis, and cryptographic fundamentals',
    ],
  },
  {
    id: 'edu-hsc',
    degree: 'Higher Secondary Certificate (HSC / Class XII)',
    institution: 'State Board of Tamil Nadu',
    period: 'Completed 2024',
    status: 'Graduated with Distinction',
    location: 'Tamil Nadu, India',
    description:
      'Completed secondary education with focused coursework in Mathematics, Computer Science, and Physical Sciences, establishing a strong foundation in analytical thinking and algorithmic problem-solving.',
    highlights: [
      'Advanced Mathematics: Calculus, linear algebra, and discrete probability',
      'Computer Science: C++ programming, procedural algorithms, and data representation',
      'Analytical reasoning and scientific methodology',
    ],
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'ach-sih',
    title: 'Smart India Hackathon — Second Prize',
    issuer: 'Ministry of Education / Institution (UG Semester-1)',
    category: 'Award',
    date: '2024 – 2025',
    description:
      'Won Second Prize for developing an innovative Vegetable Price Prediction project that utilizes historical market data analysis and machine learning to forecast wholesale and retail agricultural price fluctuations.',
    driveFolderUrl: 'https://drive.google.com/drive/folders/19PCtb9lu7nibpmruILJSxJqTtbWq1fd3',
    isAward: true,
  },
  {
    id: 'ach-symposium-venkateshwara',
    title: 'Inter-Collegiate Technical Symposium Recognition',
    issuer: 'Venkateshwara College of Arts & Science',
    category: 'Award',
    date: '2024 – 2025',
    description:
      'Recognized for outstanding technical contribution and paper presentation at the state-level inter-collegiate symposium.',
    driveFileName: 'Venkateshwara College certificate 1st year.pdf',
    driveFolderUrl: 'https://drive.google.com/drive/folders/19PCtb9lu7nibpmruILJSxJqTtbWq1fd3',
    isAward: true,
  },
  {
    id: 'ach-symposium-nantha',
    title: 'Inter-Collegiate Technical Competition Honor',
    issuer: 'Nantha Arts and Science College',
    category: 'Award',
    date: '2024 – 2025',
    description:
      'Awarded recognition certificate for active participation and technical problem solving during the inter-collegiate computer science symposium.',
    driveFileName: 'NANTHA college certificate 1st year.pdf',
    driveFolderUrl: 'https://drive.google.com/drive/folders/19PCtb9lu7nibpmruILJSxJqTtbWq1fd3',
    isAward: true,
  },
  {
    id: 'ach-symposium-gobi',
    title: 'State Level Technical Meet Recognition',
    issuer: 'Gobi Arts and Science College',
    category: 'Award',
    date: 'Sep 02, 2025',
    description:
      'Recognized for demonstrated aptitude in technical computing and software applications at the inter-collegiate symposium.',
    driveFileName: 'gobi arts and science College 02-Sep-2025.pdf',
    driveFolderUrl: 'https://drive.google.com/drive/folders/19PCtb9lu7nibpmruILJSxJqTtbWq1fd3',
    isAward: true,
  },
  {
    id: 'cert-cybersecurity',
    title: 'Cyber Security Analyst',
    issuer: 'Infosys Springboard',
    category: 'Cybersecurity',
    description:
      'Certified in cybersecurity fundamentals, threat modeling, vulnerability assessment, secure network architectures, and cryptographic defenses.',
    driveFileName: 'infosys jagadeeswaran cyber security.pdf',
    driveFolderUrl: 'https://drive.google.com/drive/folders/19PCtb9lu7nibpmruILJSxJqTtbWq1fd3',
  },
  {
    id: 'cert-copilot',
    title: 'GitHub Copilot Fundamentals',
    issuer: 'GitHub / Microsoft',
    credentialId: '8419434 / 8069577-1',
    category: 'AI & Tools',
    description:
      'Mastered AI-assisted software engineering, prompt crafting for code generation, test suite scaffolding, and modern GitHub developer workflows.',
    driveFileName: '8419434_GitHub_Copilot_Fundamentals_8069577-1 (1).pdf',
    driveFolderUrl: 'https://drive.google.com/drive/folders/19PCtb9lu7nibpmruILJSxJqTtbWq1fd3',
  },
  {
    id: 'cert-python-ai',
    title: 'Python for Data Science and AI',
    issuer: 'IBM SkillsBuild / Coursera',
    credentialId: '7TJ4CGQV7WIU',
    category: 'Data Science',
    description:
      'Comprehensive training in Python programming, NumPy matrix manipulation, Pandas dataframes, exploratory data analysis, and introductory machine learning.',
    driveFileName: 'Coursera 7TJ4CGQV7WIU_copy.pdf',
    driveFolderUrl: 'https://drive.google.com/drive/folders/19PCtb9lu7nibpmruILJSxJqTtbWq1fd3',
  },
  {
    id: 'cert-java',
    title: 'Java Programming Fundamentals',
    issuer: 'Mindluster / Academic Programs',
    category: 'Programming',
    description:
      'Mastered Object-Oriented Programming (OOP), encapsulation, inheritance, polymorphism, abstract classes, JVM memory architecture, and data structures.',
    driveFileName: 'Mindluster_Certificate (1).pdf',
    driveFolderUrl: 'https://drive.google.com/drive/folders/19PCtb9lu7nibpmruILJSxJqTtbWq1fd3',
  },
  {
    id: 'cert-powerbi',
    title: 'Power BI Data Analysis & Business Intelligence',
    issuer: 'Professional Certification Program',
    category: 'Data Science',
    description:
      'Trained in business analytics, data pipeline transformations, DAX formulas, relationship modeling, and interactive visual dashboard development.',
    driveFileName: 'JAGADEESWARAN C power BI.pdf',
    driveFolderUrl: 'https://drive.google.com/drive/folders/19PCtb9lu7nibpmruILJSxJqTtbWq1fd3',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  // Backend
  { name: 'Node.js', category: 'Backend', evidence: 'Server-side runtime for high-throughput APIs and async workers', level: 'Proficient' },
  { name: 'Express.js', category: 'Backend', evidence: 'Middleware pipelines, routing controllers, and custom error boundaries', level: 'Proficient' },
  { name: 'RESTful API Design', category: 'Backend', evidence: 'Resource modeling, JSON contracts, pagination, and status code discipline', level: 'Proficient' },
  { name: 'JWT & Authentication', category: 'Backend', evidence: 'Stateless JWT tokens, refresh token rotation, and RBAC route guards', level: 'Proficient' },
  { name: 'Server-Side Validation', category: 'Backend', evidence: 'Payload validation with Zod/Joi, sanitization, and type-safe guards', level: 'Proficient' },

  // Languages
  { name: 'JavaScript (ES6+)', category: 'Languages', evidence: 'Asynchronous event loop, Promises, closures, and modern DOM APIs', level: 'Proficient' },
  { name: 'TypeScript', category: 'Languages', evidence: 'Strong typing, generics, interfaces, and compile-time correctness', level: 'Proficient' },
  { name: 'Python', category: 'Languages', evidence: 'Data processing, OpenCV, PyTorch, and YOLO edge computer vision', level: 'Proficient' },
  { name: 'Java', category: 'Languages', evidence: 'Object-oriented programming, data structures, and memory management', level: 'Proficient' },
  { name: 'C & C++', category: 'Languages', evidence: 'Procedural algorithms, pointers, memory models, and systems coursework', level: 'Familiar' },
  { name: 'SQL', category: 'Languages', evidence: 'Complex JOINs, aggregations, schema design, and query optimization', level: 'Proficient' },

  // Databases
  { name: 'MySQL', category: 'Databases', evidence: 'Relational data modeling, foreign keys, ACID transactions, and InnoDB', level: 'Proficient' },
  { name: 'Schema Design (3NF)', category: 'Databases', evidence: 'Normalized database architectures, parent-child cascades, and constraints', level: 'Proficient' },
  { name: 'B-Tree Indexing', category: 'Databases', evidence: 'Compound index design, EXPLAIN plan inspection, avoiding full table scans', level: 'Familiar' },

  // DevOps & Tools
  { name: 'Docker', category: 'DevOps & Tools', evidence: 'Multi-stage builds, Alpine base images, and unprivileged container users', level: 'Proficient' },
  { name: 'Git & GitHub', category: 'DevOps & Tools', evidence: 'Branching models, atomic commits, pull requests, and multi-repo maintenance', level: 'Proficient' },
  { name: 'Debian Linux', category: 'DevOps & Tools', evidence: 'CLI administration, user permissions, networking, and shell scripts', level: 'Proficient' },
  { name: 'Vercel Deployment', category: 'DevOps & Tools', evidence: 'Continuous deployment, serverless routing, and environment management', level: 'Proficient' },

  // Reverse Prompting
  { name: 'Reverse Prompt Engineering', category: 'Reverse Prompting', evidence: 'Deconstructing AI outputs and layouts into deterministic prompts', level: 'Proficient' },
  { name: 'UI/UX Visual Deconstruction', category: 'Reverse Prompting', evidence: 'Translating design hierarchies into clean tokens and strict specifications', level: 'Proficient' },
  { name: 'System Prompt Optimization', category: 'Reverse Prompting', evidence: 'Structuring anti-slop rules, negative constraints, and precise contracts', level: 'Proficient' },
];

export const PROJECTS: Project[] = [
  {
    id: 'benefit-finder',
    name: 'Benefit Finder',
    tagline: 'Life-stage government scheme, scholarship & subsidy discovery portal',
    problemSolved:
      'Finding relevant government welfare schemes, scholarships, and grants is confusing and fragmented for citizens. Benefit Finder streamlines discovery through a guided demographic matching workflow.',
    targetUsers: 'Students, young adults, low-income families, and senior citizens seeking verified financial aid and welfare programs.',
    architecture:
      'Single-page application featuring demographic filtering heuristics, structured category classification, and instant eligibility matching.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    backendTech: 'Client-side rules engine with structured JSON scheme definitions',
    database: 'Structured local catalog with demographic indexes',
    apiFunctionality: 'Dynamic eligibility calculation and filtered welfare program matching',
    securityControls: ['Client-side XSS protection via React DOM escaping', 'Sanitized inputs', 'HTTPS via Vercel'],
    deploymentStatus: 'Live',
    repositoryUrl: 'https://github.com/jagadeeswaran101/Benifits-finder',
    liveDemoUrl: 'https://benefit-finderby-jagadees.vercel.app/',
    myContribution:
      'Sole developer. Researched demographic criteria across central and state welfare initiatives, engineered the frontend discovery flow, and deployed live on Vercel.',
    verifiedResults: 'Live application actively accessible on Vercel delivering guided scholarship eligibility steps.',
    limitations: 'Currently runs on a client-side catalog; planned migration to backend Node.js API with automated scrapers.',
    category: 'Full-Stack & Web',
  },
  {
    id: 'employee-salary-prediction',
    name: 'Employee Salary Prediction Engine',
    tagline: 'Predictive compensation analytics engine across tech roles, age, and experience bands',
    problemSolved:
      'Job seekers and career switchers lack transparent compensation benchmarks that reflect experience multipliers, market demand factors, and role-specific baselines.',
    targetUsers: 'Software engineers, cybersecurity analysts, career changers, and tech hiring teams.',
    architecture:
      'Interactive calculation pipeline that factors role baselines (e.g. Cybersecurity, Software Engineering), experience scaling functions, and age adjustments into low, median, and high compensation bands.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    backendTech: 'Client-side predictive calculation engine with mathematical multipliers',
    database: 'In-memory benchmark matrix with localized compensation baselines',
    apiFunctionality: 'Real-time estimation of minSalary, avgSalary, and maxSalary with dynamic market demand scoring',
    securityControls: ['Strict number range validation', 'Client-side type guards', 'Zero external data exposure'],
    deploymentStatus: 'Live',
    repositoryUrl: 'https://github.com/jagadeeswaran101/Employee-Salary-Pridiction-BY-JAGADEESWARAN',
    liveDemoUrl: 'https://employee-salary-pridiction-by-jagad.vercel.app/',
    myContribution:
      'Designed and developed the application end-to-end; implemented formulaic compensation multipliers, validated input bounds, and deployed the live app on Vercel.',
    verifiedResults: 'Verified live deployment delivering instant multi-tier salary breakdowns with visual demand indicators.',
    limitations: 'Calculations utilize mathematical heuristics; planned integration with a Python ML regression microservice.',
    category: 'Data & ML',
  },
  {
    id: 'smart-campus-sentinel',
    name: 'Smart Campus Safety Sentinel',
    tagline: 'CPU-first edge computer vision virtual perimeter protection system',
    problemSolved:
      'Conventional security cameras record invasive raw footage that introduces severe privacy liabilities and requires high-bandwidth centralized storage. Campus facilities need perimeter intrusion alerts without raw video retention.',
    targetUsers: 'Educational institutions, restricted laboratory zones, and private facility perimeters.',
    architecture:
      'Edge architecture utilizing Ultralytics YOLOv8n optimized for CPU inference. Detects boundary crossings via bounding-box vector intersections, discards video frames immediately, and streams structured JSON alert events over serial baud to an ESP32 hardware actuator.',
    technologies: ['Python 3.11', 'Ultralytics YOLOv8n', 'PyTorch', 'OpenCV', 'ESP32 Hardware Serial', 'Linux'],
    backendTech: 'Python edge daemon with multithreaded camera capture and serial stream emitter',
    database: 'Stateless edge architecture (transient JSON alert events; zero video retention)',
    apiFunctionality: 'Serial UART JSON stream transmitting incident type, confidence score, and timestamp to microcontroller',
    securityControls: ['Privacy-by-design (zero raw video storage)', 'Edge-isolated computation', 'Air-gapped physical serial transmission'],
    deploymentStatus: 'Prototype',
    repositoryUrl: 'https://github.com/jagadeeswaran101/SmartCampusSentinel',
    myContribution:
      'Engineered the Python computer vision pipeline, tuned YOLOv8n for low-latency CPU inference, and implemented the serial communication protocol driving ESP32 physical alarm indicators.',
    verifiedResults: 'Tested and verified real-time perimeter tripwire detection operating at 24+ FPS on standard CPU hardware without GPU acceleration.',
    limitations: 'Serial bridge requires direct USB/UART connection; planned addition of authenticated MQTT over TLS.',
    category: 'AI & Computer Vision',
  },
  {
    id: 'vegetable-price-prediction',
    name: 'Vegetable Price Prediction Engine',
    tagline: 'Smart India Hackathon Award Winner — Agricultural market price forecasting',
    problemSolved:
      'Smallholder farmers and local vendors suffer from extreme agricultural price volatility caused by seasonal shifts, transport bottlenecks, and intermediary markups.',
    targetUsers: 'Farmers, agricultural cooperatives, market stall vendors, and procurement managers.',
    architecture:
      'Machine learning pipeline utilizing time-series features, seasonal indices, and regional market data to project upcoming price trajectories.',
    technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-Learn', 'Data Analysis'],
    backendTech: 'Model training pipeline with cross-validation and feature scaling',
    database: 'Historical agricultural mandi market pricing datasets',
    apiFunctionality: 'Predictive pricing queries based on commodity type, state, and harvest timeline',
    securityControls: ['Input data sanitization', 'Outlier filtering', 'Synthetic test split verification'],
    deploymentStatus: 'Award Winner',
    myContribution:
      'Core contributor for data preprocessing, regression modeling, and presentation of the solution during the hackathon.',
    verifiedResults: 'Awarded Second Prize in Smart India Hackathon (UG Semester-1, 2024–2025).',
    limitations: 'Offline model pipeline; next step is wrapping the trained models into an Express/FastAPI endpoint.',
    category: 'Data & ML',
  },
  {
    id: 'forage-jpmc-systems',
    name: 'JPMorgan Chase Systems Exploration',
    tagline: 'Enterprise data visualization and financial systems engineering',
    problemSolved:
      'Financial traders require real-time perspective data streams that compute bid/ask ratios and correlate asset movements without UI lag.',
    targetUsers: 'Quantitative analysts and financial system engineers.',
    architecture:
      'Modular client-server pipeline integrating streaming market feeds with Perspective charting components.',
    technologies: ['Python', 'TypeScript', 'Perspective API', 'Git'],
    deploymentStatus: 'Open Source',
    repositoryUrl: 'https://github.com/jagadeeswaran101/forage-midas10',
    myContribution: 'Implemented data feed interfaces, price ratio calculations, and real-time visualization graphs.',
    verifiedResults: 'Completed tasks within the J.P. Morgan Chase Advanced Software Engineering virtual experience.',
    limitations: 'Simulated market stream; demonstrates enterprise codebase navigation and data transformation.',
    category: 'Systems & Algorithms',
  },
  {
    id: 'java-core-systems',
    name: 'Core Java Systems & Algorithms',
    tagline: 'Foundational OOP, memory management, and data structure implementations',
    problemSolved:
      'Solid backend architecture requires deep fluency in object-oriented paradigms, concurrency basics, and algorithmic memory efficiency.',
    targetUsers: 'Developers studying clean object-oriented architecture and algorithm performance.',
    architecture: 'Standardized Java package structure implementing custom data structures and OOP patterns.',
    technologies: ['Java', 'OOP', 'Data Structures', 'Algorithms'],
    deploymentStatus: 'Open Source',
    repositoryUrl: 'https://github.com/jagadees-vet/java-programs',
    myContribution: 'Authored object-oriented implementations of core data structures, sorting algorithms, and inheritance patterns.',
    verifiedResults: 'Clean, verified repository of tested Java programs.',
    limitations: 'Standalone programs intended for foundational mastery rather than web services.',
    category: 'Systems & Algorithms',
  },
];
