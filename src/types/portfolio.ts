export interface Project {
  id: string;
  name: string;
  tagline: string;
  problemSolved: string;
  targetUsers: string;
  architecture: string;
  technologies: string[];
  backendTech?: string;
  database?: string;
  apiFunctionality?: string;
  securityControls?: string[];
  deploymentStatus: 'Live' | 'Prototype' | 'Award Winner' | 'Open Source';
  repositoryUrl?: string;
  liveDemoUrl?: string;
  myContribution: string;
  verifiedResults: string;
  limitations: string;
  category: 'Full-Stack & Web' | 'AI & Computer Vision' | 'Data & ML' | 'Systems & Algorithms';
}

export interface SkillItem {
  name: string;
  category: 'Backend' | 'Languages' | 'Databases' | 'DevOps & Tools' | 'Reverse Prompting';
  evidence: string;
  level?: 'Proficient' | 'Familiar';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: 'Internship' | 'Technical Role' | 'Self-Directed';
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  grade?: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  category: 'Award' | 'Cybersecurity' | 'AI & Tools' | 'Data Science' | 'Programming' | 'Development' | string;
  date?: string;
  credentialId?: string;
  description: string;
  driveFileName?: string;
  driveFolderUrl: string;
  verificationUrl?: string;
  isAward?: boolean;
}
