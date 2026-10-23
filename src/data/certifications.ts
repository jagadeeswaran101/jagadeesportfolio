export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  categories: string[];
  description: string;
  credentialId?: string;
  verificationUrl?: string;
  certificateUrl: string;
  thumbnailUrl?: string;
  driveFileName?: string;
  driveFolderUrl: string;
}

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-cybersecurity',
    title: 'Cyber Security Analyst',
    issuer: 'Infosys Springboard',
    issueDate: 'October 16, 2025',
    categories: ['Cybersecurity', 'Professional'],
    description:
      'Course completion credential covering enterprise cybersecurity fundamentals, cryptographic defenses, threat vector modeling, and secure systems architecture.',
    verificationUrl: 'https://verify.onwingspan.com',
    certificateUrl: '/assets/aistudio/infosys_jagadeeswaran_cyber_security_ae4e0ea7.pdf',
    thumbnailUrl: '/assets/certificates/cyber_security.png',
    driveFileName: 'infosys jagadeeswaran cyber security.pdf',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1sLgL4X5tB5hI4l5tO8vF4f5f5f5f5f5f',
  },
  {
    id: 'cert-copilot',
    title: 'GitHub Copilot Fundamentals',
    issuer: 'Simplilearn SkillUp · Powered by Microsoft',
    issueDate: '20th March 2025',
    categories: ['Development', 'AI / ML'],
    credentialId: '8069577',
    description:
      'Demonstrated professional initiative in AI-assisted developer workflows, generative code prompting, automated test drafting, and software velocity optimization.',
    certificateUrl: '/assets/aistudio/8419434_GitHub_Copilot_Fundamentals_8069577-1__1__fb74098f.pdf',
    thumbnailUrl: '/assets/certificates/github_copilot.png',
    driveFileName: '8419434_GitHub_Copilot_Fundamentals_8069577-1 (1).pdf',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1sLgL4X5tB5hI4l5tO8vF4f5f5f5f5f5f',
  },
  {
    id: 'cert-saylor',
    title: 'Saylor Academy Certificate',
    issuer: 'Saylor Academy',
    issueDate: 'July 11, 2025',
    categories: ['Professional'],
    credentialId: '8004874724JC',
    description:
      'Verified academic certificate of course achievement administered by Saylor Academy with authenticated credential verification code.',
    verificationUrl: 'https://learn.saylor.org/admin/tool/certificate/index.php?code=8004874724JC',
    certificateUrl:
      'https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1752240192/8004874724JC.pdf',
    thumbnailUrl: '/assets/certificates/saylor_preview.png',
    driveFileName: 'Saylor_Certificate_8004874724JC.pdf',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1sLgL4X5tB5hI4l5tO8vF4f5f5f5f5f5f',
  },
  {
    id: 'cert-tata-genai',
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Tata · Forage',
    issueDate: 'April 28th, 2026',
    categories: ['AI / ML', 'Data'],
    credentialId: 'HwJ4yfoNDyx3oKPRr',
    description:
      'Practical job simulation tasks in exploratory data analysis, AI delinquency risk prediction, business reporting, and data storytelling for collections strategies.',
    certificateUrl:
      '/assets/aistudio/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_pYZarFrFXWFovffQ9_1777368453169_completion_certificate_copy_e50c2a2e.pdf',
    thumbnailUrl: '/assets/certificates/tata_genai.png',
    driveFileName: 'Tata_GenAI_Job_Simulation.pdf',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1sLgL4X5tB5hI4l5tO8vF4f5f5f5f5f5f',
  },
  {
    id: 'cert-jpmorgan-swe',
    title: 'Software Engineering Job Simulation',
    issuer: 'JPMorgan Chase & Co. · Forage',
    issueDate: 'April 26th, 2026',
    categories: ['Development'],
    credentialId: 'PX3wbaMPB9z3heWpa',
    description:
      'Engineering simulation completing Kafka messaging integration, H2 database integration, REST API controller development, and system unit tests.',
    certificateUrl:
      '/assets/aistudio/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_pYZarFrFXWFovffQ9_1777191932799_completion_certificate_copy_64d75485.pdf',
    thumbnailUrl: '/assets/certificates/jpmorgan_swe.png',
    driveFileName: 'JPMorgan_Software_Engineering_Simulation.pdf',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1sLgL4X5tB5hI4l5tO8vF4f5f5f5f5f5f',
  },
  {
    id: 'cert-prompt-eng',
    title: 'Prompt Engineering',
    issuer: 'Infosys Springboard',
    issueDate: 'December 30, 2025',
    categories: ['AI / ML'],
    description:
      'Comprehensive study of prompt architecture, few-shot prompting patterns, generative LLM reasoning chains, and AI output structuring.',
    verificationUrl: 'https://verify.onwingspan.com',
    certificateUrl: '/assets/aistudio/1-3c4a8ea1-6945-48f3-89ab-2da6e05b9fdc_3f65b9c7.pdf',
    thumbnailUrl: '/assets/certificates/prompt_engineering.png',
    driveFileName: 'Infosys_Prompt_Engineering.pdf',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1sLgL4X5tB5hI4l5tO8vF4f5f5f5f5f5f',
  },
  {
    id: 'cert-mongodb',
    title: 'Introduction to MongoDB',
    issuer: 'MongoDB, Inc',
    issueDate: 'March 8, 2025',
    categories: ['Data', 'Development'],
    credentialId: 'MDBvklwscjw6q',
    description:
      'Official proof of completion covering NoSQL document data modeling, BSON data types, CRUD queries, indexing strategies, and aggregation pipelines.',
    certificateUrl:
      '/assets/aistudio/jagadeeswaran-c-d14fdeb0-17cc-4228-a342-c9d2ed89dea3-certificate_copy_47dbe001.pdf',
    thumbnailUrl: '/assets/certificates/mongodb.png',
    driveFileName: 'Introduction_to_MongoDB.pdf',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1sLgL4X5tB5hI4l5tO8vF4f5f5f5f5f5f',
  },
  {
    id: 'cert-coursera-excel',
    title: 'Introduction to Data Analysis using Microsoft Excel',
    issuer: 'Coursera Project Network',
    issueDate: 'June 10, 2025',
    categories: ['Data'],
    credentialId: '6BU7TZYU04WJ',
    verificationUrl: 'https://coursera.org/verify/6BU7TZYU04WJ',
    description:
      'Authorized project certificate covering analytical formulas, Pivot tables, statistical summaries, data visualization, and data cleanup workflows.',
    certificateUrl: '/assets/aistudio/Coursera_6BU7TZYU04WJ_copy_7d004490.pdf',
    thumbnailUrl: '/assets/certificates/coursera_excel.png',
    driveFileName: 'Coursera_Excel_Data_Analysis.pdf',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1sLgL4X5tB5hI4l5tO8vF4f5f5f5f5f5f',
  },
  {
    id: 'cert-web-fundamentals',
    title: 'Fundamentals of Web Development',
    issuer: 'Tamil Nadu Skill Development Corporation · Edunet IBM SkillsBuild',
    issueDate: 'November 17, 2025',
    categories: ['Development'],
    credentialId: 'NMO2526ABRU34598908274',
    description:
      'Government of Tamil Nadu Naan Mudhalvan scheme certificate in responsive web structure, modern semantic HTML5, CSS3, and JavaScript programming.',
    certificateUrl: '/assets/aistudio/NM_Certificate_5c7dbf9d.pdf',
    thumbnailUrl: '/assets/certificates/naan_mudhalvan_web.png',
    driveFileName: 'NM_Certificate_Web_Development.pdf',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1sLgL4X5tB5hI4l5tO8vF4f5f5f5f5f5f',
  },
  {
    id: 'cert-internship-elite',
    title: 'Certificate of Internship · Software Engineering Intern',
    issuer: 'Elite Billing',
    issueDate: 'June 26, 2026',
    categories: ['Development', 'Professional'],
    credentialId: '24CSA26',
    verificationUrl: 'https://elitebilling.in/verify',
    description:
      'Certificate recognizing technical commitment and engineering contributions across frontend and backend systems development at Elite Billing.',
    certificateUrl: '/assets/aistudio/24CSA26-internship-certificate_bedf5530.pdf',
    thumbnailUrl: '/assets/certificates/internship_elite_billing.png',
    driveFileName: '24CSA26-internship-certificate.pdf',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1sLgL4X5tB5hI4l5tO8vF4f5f5f5f5f5f',
  },
];
