import React, { useState } from 'react';
import {
  Search,
  BadgeCheck,
  X,
  ExternalLink,
  Check,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Tech Logo Components matching the exact screenshot design
const TechIcons: Record<string, React.ReactNode> = {
  python: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <path
        d="M11.927 2C6.983 2 7.29 4.143 7.29 4.143l.006 2.215h4.708v.665H5.438S2 6.626 2 11.583c0 4.956 3 4.752 3 4.752h1.792v-2.518s-.096-3 2.955-3h5.08s2.836.046 2.836-2.748V4.752S18.066 2 11.927 2zM9.48 3.51a.91.91 0 110 1.82.91.91 0 010-1.82z"
        fill="#387EB8"
      />
      <path
        d="M12.073 22c4.944 0 4.637-2.143 4.637-2.143l-.006-2.215H12v-.665h6.566s3.438.397 3.438-4.56c0-4.956-3-4.752-3-4.752h-1.792v2.518s.096 3-2.955 3H9.177s-2.836-.046-2.836 2.748v3.318S5.934 22 12.073 22zm2.447-1.51a.91.91 0 110-1.82.91.91 0 010 1.82z"
        fill="#FFE873"
      />
    </svg>
  ),
  java: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <path
        d="M9.5 16.5c2.5.5 5.5.5 7.5-.5M8 19c3 .5 6.5.5 9.5-.5M10 21.5c2 .5 4.5.5 6-.2"
        stroke="#E76F00"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.5 3c-1 2-2 3.5-1 5 1 1.5 2 2.5 1 4M15 3.5c-1 1.5-1.5 2.5-.5 4s1.5 2 .5 3.5"
        stroke="#E76F00"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 13.5c.5 3 2.5 4 6 4s6.5-1.5 6.5-4c0-2-1.5-2.5-4.5-3-3-.5-7.5-.5-8 3z"
        fill="#5382A1"
        fillOpacity="0.3"
        stroke="#5382A1"
        strokeWidth="1.2"
      />
    </svg>
  ),
  c: (
    <div className="w-5 h-5 rounded bg-blue-600/20 border border-blue-500/50 flex items-center justify-center font-mono font-extrabold text-[11px] text-blue-400 shrink-0">
      C
    </div>
  ),
  cpp: (
    <div className="w-6 h-5 rounded bg-pink-900/30 border border-pink-500/50 flex items-center justify-center font-mono font-bold text-[10px] text-pink-400 shrink-0 tracking-tighter">
      C++
    </div>
  ),
  javascript: (
    <div className="w-5 h-5 rounded bg-[#F7DF1E] flex items-end justify-end p-0.5 font-bold text-[10px] text-black shrink-0 leading-none">
      JS
    </div>
  ),
  typescript: (
    <div className="w-5 h-5 rounded bg-[#3178C6] flex items-end justify-end p-0.5 font-bold text-[10px] text-white shrink-0 leading-none">
      TS
    </div>
  ),
  html5: (
    <div className="w-5 h-5 rounded bg-orange-600/20 border border-orange-500/50 flex items-center justify-center font-extrabold text-[10px] text-orange-500 shrink-0">
      5
    </div>
  ),
  css3: (
    <div className="w-5 h-5 rounded bg-sky-600/20 border border-sky-500/50 flex items-center justify-center font-extrabold text-[10px] text-sky-400 shrink-0">
      3
    </div>
  ),
  react: (
    <svg className="w-5 h-5 shrink-0 animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#00D8FF" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" stroke="#00D8FF" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" stroke="#00D8FF" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.8" fill="#00D8FF" />
    </svg>
  ),
  nodejs: (
    <div className="w-5 h-5 rounded bg-emerald-950/40 border border-emerald-500/60 flex items-center justify-center font-bold text-[10px] text-emerald-400 shrink-0">
      JS
    </div>
  ),
  expressjs: (
    <div className="px-1.5 h-5 rounded bg-slate-900 border border-slate-700 flex items-center justify-center font-mono font-bold text-[11px] text-slate-200 shrink-0">
      ex
    </div>
  ),
  nextjs: (
    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center font-bold text-[10px] text-black shrink-0">
      N
    </div>
  ),
  restapis: (
    <svg className="w-4 h-4 text-slate-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  graphql: (
    <div className="w-5 h-5 rounded bg-pink-500/10 border border-pink-500/40 flex items-center justify-center text-pink-400 font-bold text-[10px] shrink-0">
      GQL
    </div>
  ),
  mysql: (
    <svg className="w-5 h-5 shrink-0 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3c-4.97 0-9 1.79-9 4v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4zm0 2c4.41 0 7 1.43 7 2s-2.59 2-7 2-7-1.43-7-2 2.59-2 7-2zm-7 5.25c1.47 1.05 4.07 1.75 7 1.75s5.53-.7 7-1.75V11c0 .72-2.59 2-7 2s-7-1.28-7-2v-.75zm0 4c1.47 1.05 4.07 1.75 7 1.75s5.53-.7 7-1.75V15c0 .72-2.59 2-7 2s-7-1.28-7-2v-.75zm0 4c1.47 1.05 4.07 1.75 7 1.75s5.53-.7 7-1.75V19c0 .72-2.59 2-7 2s-7-1.28-7-2v-.75z" />
    </svg>
  ),
  mongodb: (
    <div className="w-5 h-5 rounded bg-green-500/20 border border-green-500/50 flex items-center justify-center font-bold text-[10px] text-green-400 shrink-0">
      M
    </div>
  ),
  firebase: (
    <div className="w-5 h-5 rounded bg-amber-500/20 border border-amber-500/50 flex items-center justify-center font-bold text-[10px] text-amber-400 shrink-0">
      FB
    </div>
  ),
  socketio: (
    <div className="w-5 h-5 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center font-bold text-[9px] text-white shrink-0">
      ⚡
    </div>
  ),
  authentication: (
    <svg className="w-4 h-4 text-slate-200 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  tailwind: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5 1.08.27 1.86 1.06 2.71 1.94C14.6 11.83 16.14 13.4 20 13.4c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-1.08-.27-1.86-1.06-2.71-1.94C17.4 7.57 15.86 6 12 6zM4 13.4c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5 1.08.27 1.86 1.06 2.71 1.94C6.6 19.23 8.14 20.8 12 20.8c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-1.08-.27-1.86-1.06-2.71-1.94C9.4 14.97 7.86 13.4 4 13.4z"
        fill="#38BDF8"
      />
    </svg>
  ),
  docker: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#0db7ed">
      <path d="M13 5h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6 3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm9-3h2v2h-2zm0 3h2v2h-2zM4 8h2v2H4zm17.5 3c-.4 0-1.4.3-1.9.9-.4-.1-.8-.1-1.2-.1-3 0-5.5 2-6.2 4.7H1.5C1.2 16.5 1 17 1 17.5 1 19.4 2.6 21 4.5 21h12.8c4 0 7.4-2.8 7.7-6.8.6-.2 1.3-.7 1.5-1.4.2-.6-.1-1.3-.5-1.8z" />
    </svg>
  ),
  git: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#F05032">
      <path d="M21.6 10.9L13.1 2.4c-.8-.8-2.1-.8-2.9 0L8 4.6l3.7 3.7c.9-.3 1.9 0 2.6.7.7.7 1 1.7.7 2.6l3.6 3.6c.9-.3 1.9 0 2.6.7 1 1 1 2.6 0 3.6s-2.6 1-3.6 0c-.8-.8-1-2-.6-3l-3.3-3.3v6.7c.3.2.5.5.6.8.5 1.1.1 2.5-1 3-1.1.5-2.5.1-3-1-.5-1.1-.1-2.5 1-3 .3-.2.7-.3 1-.3V9.1c-.4 0-.8-.1-1.1-.3l-3.6 3.6c.3.9 0 1.9-.7 2.6-1 1-2.6 1-3.6 0s-1-2.6 0-3.6c.7-.7 1.7-1 2.6-.7l3.6-3.6-2.2-2.2L2.4 10.9c-.8.8-.8 2.1 0 2.9l8.5 8.5c.8.8 2.1.8 2.9 0l7.8-7.8c.8-.8.8-2.1 0-2.9v-.7z" />
    </svg>
  ),
  linux: (
    <div className="w-5 h-5 rounded bg-red-950/40 border border-red-500/50 flex items-center justify-center font-mono font-bold text-[10px] text-red-400 shrink-0">
      Deb
    </div>
  ),
  qgis: (
    <div className="w-5 h-5 rounded bg-green-900/40 border border-green-500/50 flex items-center justify-center font-bold text-[10px] text-green-400 shrink-0">
      GIS
    </div>
  ),
  reverseprompting: (
    <div className="w-5 h-5 rounded bg-purple-900/40 border border-purple-500/50 flex items-center justify-center text-purple-400 shrink-0">
      <Sparkles className="w-3.5 h-3.5" />
    </div>
  ),
  uideconstruction: (
    <div className="w-5 h-5 rounded bg-pink-900/40 border border-pink-500/50 flex items-center justify-center font-mono font-bold text-[10px] text-pink-400 shrink-0">
      UI
    </div>
  ),
  githubcopilot: (
    <div className="w-5 h-5 rounded bg-indigo-900/40 border border-indigo-500/50 flex items-center justify-center font-mono font-bold text-[10px] text-indigo-400 shrink-0">
      AI
    </div>
  ),
  schema3nf: (
    <div className="w-5 h-5 rounded bg-teal-900/40 border border-teal-500/50 flex items-center justify-center font-mono font-bold text-[9px] text-teal-400 shrink-0">
      3NF
    </div>
  ),
  btree: (
    <div className="w-5 h-5 rounded bg-cyan-900/40 border border-cyan-500/50 flex items-center justify-center font-mono font-bold text-[10px] text-cyan-400 shrink-0">
      IDX
    </div>
  ),
  validation: (
    <div className="w-5 h-5 rounded bg-emerald-900/40 border border-emerald-500/50 flex items-center justify-center font-mono font-bold text-[9px] text-emerald-400 shrink-0">
      Zod
    </div>
  ),
};

export interface SkillItem {
  id: string;
  name: string;
  level: 'Proficient' | 'Familiar';
  proficiencyPercent: number;
  iconKey: string;
  category: string;
  evidence: string;
  verifiedProject: string;
  projectHref: string;
  keyCompetencies: string[];
  verificationStamp: string;
}

export interface SkillGroup {
  id: string;
  indexNumber: string;
  categoryName: string;
  skills: SkillItem[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'programming-languages',
    indexNumber: '01',
    categoryName: 'PROGRAMMING LANGUAGES',
    skills: [
      {
        id: 'python',
        name: 'Python',
        level: 'Proficient',
        proficiencyPercent: 88,
        iconKey: 'python',
        category: 'Programming Languages',
        evidence: 'Data science pipelines, OpenCV image processing, and CPU-optimized YOLOv8 edge vision inference.',
        verifiedProject: 'Smart Perimeter Surveillance System',
        projectHref: '#experience',
        keyCompetencies: ['OpenCV 4.8', 'YOLOv8 Edge Tracking', 'Multithreaded Feeds'],
        verificationStamp: 'VERIFIED_PYTHON_VISION',
      },
      {
        id: 'java',
        name: 'Java',
        level: 'Proficient',
        proficiencyPercent: 85,
        iconKey: 'java',
        category: 'Programming Languages',
        evidence: 'Object-oriented programming, inheritance, polymorphism, Java Collections Framework, and JVM memory layout.',
        verifiedProject: 'B.Sc. Computer Science Core Academic Coursework (CGPA 85.43)',
        projectHref: '#education',
        keyCompetencies: ['OOP Architecture', 'Java Collections Framework', 'Exception Handling'],
        verificationStamp: 'VERIFIED_JAVA_OOP',
      },
      {
        id: 'c',
        name: 'C',
        level: 'Proficient',
        proficiencyPercent: 82,
        iconKey: 'c',
        category: 'Programming Languages',
        evidence: 'Procedural programming, pointer arithmetic, manual memory management, and data structures.',
        verifiedProject: 'Operating Systems & Algorithm Lab Coursework',
        projectHref: '#education',
        keyCompetencies: ['Pointer Arithmetic', 'Stack & Queue Structs', 'Memory Layout'],
        verificationStamp: 'VERIFIED_C_SYSTEMS',
      },
      {
        id: 'cpp',
        name: 'C++',
        level: 'Proficient',
        proficiencyPercent: 80,
        iconKey: 'cpp',
        category: 'Programming Languages',
        evidence: 'Object-oriented C++, STL algorithms, vector manipulation, and procedural optimization.',
        verifiedProject: 'Algorithms & Computational Problem Solving',
        projectHref: '#education',
        keyCompetencies: ['C++ Standard Template Library', 'Class Hierarchies', 'Computational Logic'],
        verificationStamp: 'VERIFIED_CPP_STL',
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        level: 'Proficient',
        proficiencyPercent: 92,
        iconKey: 'javascript',
        category: 'Programming Languages',
        evidence: 'Modern syntax, Promises, async/await closures, functional array methods, and browser DOM interfaces.',
        verifiedProject: 'Crime Incident Reporting & Dynamic Web Apps',
        projectHref: '#experience',
        keyCompetencies: ['ESNext Syntax', 'Async/Await & Promises', 'Closures & Scope'],
        verificationStamp: 'VERIFIED_JS_ENGINEERING',
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        level: 'Proficient',
        proficiencyPercent: 88,
        iconKey: 'typescript',
        category: 'Programming Languages',
        evidence: 'Compile-time type safety, complex generics, interfaces, strict null checks, and type narrowing.',
        verifiedProject: 'Production Portfolio & Type-Safe Microservices',
        projectHref: '#experience',
        keyCompetencies: ['Generics & Discriminated Unions', 'Strict Compiler Mode', 'Interface Contracts'],
        verificationStamp: 'VERIFIED_TS_STRICT',
      },
    ],
  },
  {
    id: 'frontend-fullstack',
    indexNumber: '02',
    categoryName: 'FRONTEND & FULL STACK',
    skills: [
      {
        id: 'html5',
        name: 'HTML5',
        level: 'Proficient',
        proficiencyPercent: 92,
        iconKey: 'html5',
        category: 'Frontend & Full Stack',
        evidence: 'Accessible semantic HTML elements (WCAG AA), WebGL 2D/3D canvases, and modern web APIs.',
        verifiedProject: 'Accessible Web Platform Interfaces',
        projectHref: '#experience',
        keyCompetencies: ['Semantic Markup', 'Accessibility (ARIA)', 'DOM Optimization'],
        verificationStamp: 'VERIFIED_HTML5_SEMANTICS',
      },
      {
        id: 'css3',
        name: 'CSS3',
        level: 'Proficient',
        proficiencyPercent: 90,
        iconKey: 'css3',
        category: 'Frontend & Full Stack',
        evidence: 'Modern Flexbox, CSS Grid systems, custom properties, responsive media queries, and keyframe animations.',
        verifiedProject: 'Responsive Layouts & Motion Design',
        projectHref: '#experience',
        keyCompetencies: ['CSS Grid & Flexbox', 'Custom Properties', 'Fluid Breakpoints'],
        verificationStamp: 'VERIFIED_CSS3_LAYOUTS',
      },
      {
        id: 'react',
        name: 'React',
        level: 'Proficient',
        proficiencyPercent: 90,
        iconKey: 'react',
        category: 'Frontend & Full Stack',
        evidence: 'Modern functional components, hooks architecture, reactive state, custom modals, and WebGL integration.',
        verifiedProject: 'Production Portfolio & Incident Web Portal',
        projectHref: '#experience',
        keyCompetencies: ['Hooks Architecture', 'Component Composition', 'Context & State'],
        verificationStamp: 'VERIFIED_REACT_ECOSYSTEM',
      },
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        level: 'Proficient',
        proficiencyPercent: 94,
        iconKey: 'tailwind',
        category: 'Frontend & Full Stack',
        evidence: 'Utility-first styling, design token systems, responsive breakpoints, dark midnight aesthetics, and CSS animations.',
        verifiedProject: 'Responsive UI Design Systems & Dark Mode',
        projectHref: '#experience',
        keyCompetencies: ['Responsive Breakpoints', 'Design Token System', 'Animations & Transitions'],
        verificationStamp: 'VERIFIED_TAILWIND_STYLING',
      },
      {
        id: 'nodejs-fs',
        name: 'Node.js',
        level: 'Proficient',
        proficiencyPercent: 92,
        iconKey: 'nodejs',
        category: 'Frontend & Full Stack',
        evidence: 'Asynchronous event loop execution, non-blocking I/O stream pipelines, and layered microservice controllers.',
        verifiedProject: 'Crime Incident Reporting Portal (Vercel Production)',
        projectHref: '#experience',
        keyCompetencies: ['Asynchronous Event Loop', 'Stream Pipelines', 'Error Boundary Middleware'],
        verificationStamp: 'VERIFIED_BACKEND_RUNTIME',
      },
      {
        id: 'express-fs',
        name: 'Express.js',
        level: 'Proficient',
        proficiencyPercent: 90,
        iconKey: 'expressjs',
        category: 'Frontend & Full Stack',
        evidence: 'Modular router trees, custom authentication middleware chains, and standardized HTTP status responses.',
        verifiedProject: 'RESTful Backend Microservices Architecture',
        projectHref: '#experience',
        keyCompetencies: ['Custom Middleware Chains', 'Router Modularity', 'Async Exception Catching'],
        verificationStamp: 'VERIFIED_API_FRAMEWORK',
      },
      {
        id: 'rest-apis-fs',
        name: 'REST APIs',
        level: 'Proficient',
        proficiencyPercent: 94,
        iconKey: 'restapis',
        category: 'Frontend & Full Stack',
        evidence: 'Resource-oriented URI design, stateless HTTP discipline (200, 201, 400, 401, 403, 429), and paginated JSON payloads.',
        verifiedProject: 'Public API Documentation & Production Endpoints',
        projectHref: '#experience',
        keyCompetencies: ['Stateless Semantics', 'Idempotent PUT/DELETE', 'Paginated JSON Payloads'],
        verificationStamp: 'VERIFIED_REST_DISCIPLINE',
      },
    ],
  },
  {
    id: 'backend-databases',
    indexNumber: '03',
    categoryName: 'BACKEND & DATABASES',
    skills: [
      {
        id: 'nodejs-be',
        name: 'Node.js',
        level: 'Proficient',
        proficiencyPercent: 92,
        iconKey: 'nodejs',
        category: 'Backend & Databases',
        evidence: 'High-throughput asynchronous runtime, non-blocking I/O controllers, and production microservice handlers.',
        verifiedProject: 'Crime Incident Reporting Portal (Vercel Production)',
        projectHref: '#experience',
        keyCompetencies: ['Asynchronous Event Loop', 'Stream Pipelines', 'Error Boundary Middleware'],
        verificationStamp: 'VERIFIED_BACKEND_RUNTIME',
      },
      {
        id: 'express-be',
        name: 'Express.js',
        level: 'Proficient',
        proficiencyPercent: 90,
        iconKey: 'expressjs',
        category: 'Backend & Databases',
        evidence: 'Layered controller-service-repository patterns, route security middleware, and HTTP error sanitization.',
        verifiedProject: 'RESTful Backend Microservices Architecture',
        projectHref: '#experience',
        keyCompetencies: ['Custom Middleware Chains', 'Router Modularity', 'Async Exception Catching'],
        verificationStamp: 'VERIFIED_API_FRAMEWORK',
      },
      {
        id: 'mysql',
        name: 'MySQL',
        level: 'Proficient',
        proficiencyPercent: 92,
        iconKey: 'mysql',
        category: 'Backend & Databases',
        evidence: 'InnoDB storage engine, ACID transaction guarantees, foreign-key cascades, and connection pool tuning.',
        verifiedProject: 'Relational Data Stores for Web Deployments',
        projectHref: '#experience',
        keyCompetencies: ['InnoDB Engine', 'ACID Compliance', 'Foreign Key Cascades'],
        verificationStamp: 'VERIFIED_MYSQL_ENGINE',
      },
      {
        id: 'schema3nf',
        name: 'Relational 3NF Design',
        level: 'Proficient',
        proficiencyPercent: 90,
        iconKey: 'schema3nf',
        category: 'Backend & Databases',
        evidence: 'Third Normal Form schema decomposition, eliminating attribute redundancy and preventing orphan records.',
        verifiedProject: 'Normalized Incident Reporting Schema',
        projectHref: '#experience',
        keyCompetencies: ['3NF Normalization', 'Entity-Relationship Mapping', 'Referential Integrity'],
        verificationStamp: 'VERIFIED_3NF_NORMALIZATION',
      },
      {
        id: 'btree',
        name: 'B-Tree Indexing',
        level: 'Proficient',
        proficiencyPercent: 82,
        iconKey: 'btree',
        category: 'Backend & Databases',
        evidence: 'Compound B-Tree index creation, EXPLAIN query plan analysis, and accelerating table range scans.',
        verifiedProject: 'Query Optimization & EXPLAIN Plans',
        projectHref: '#experience',
        keyCompetencies: ['Compound B-Tree Indexes', 'EXPLAIN Query Plans', 'Range Scan Optimization'],
        verificationStamp: 'VERIFIED_INDEXING_STRATEGY',
      },
      {
        id: 'rest-apis-be',
        name: 'REST APIs',
        level: 'Proficient',
        proficiencyPercent: 94,
        iconKey: 'restapis',
        category: 'Backend & Databases',
        evidence: 'Idempotent RESTful APIs with strict HTTP status code discipline and defensive validation pipelines.',
        verifiedProject: 'RESTful API Services & Production Endpoints',
        projectHref: '#experience',
        keyCompetencies: ['Stateless Semantics', 'Idempotent PUT/DELETE', 'Paginated JSON Payloads'],
        verificationStamp: 'VERIFIED_REST_DISCIPLINE',
      },
      {
        id: 'authentication',
        name: 'Authentication & RBAC',
        level: 'Proficient',
        proficiencyPercent: 88,
        iconKey: 'authentication',
        category: 'Backend & Databases',
        evidence: 'Stateless JWT tokens, refresh token rotation, HttpOnly cookies, and role-based route guards.',
        verifiedProject: 'Role-Based Authentication Module (SIH Hackathon)',
        projectHref: '#events',
        keyCompetencies: ['JWT Bearer Auth', 'Token Rotation', 'Password Hashing (bcrypt)'],
        verificationStamp: 'VERIFIED_SECURITY_RBAC',
      },
      {
        id: 'validation-zod',
        name: 'Server Validation (Zod)',
        level: 'Proficient',
        proficiencyPercent: 90,
        iconKey: 'validation',
        category: 'Backend & Databases',
        evidence: 'Input validation pipelines with Zod, schema casting, and fail-closed validation invariants.',
        verifiedProject: 'Defensive API Pipeline with Schema Casting',
        projectHref: '#experience',
        keyCompetencies: ['Zod Schema Parsing', 'Input Sanitization', 'Fail-Closed Guards'],
        verificationStamp: 'VERIFIED_DEFENSIVE_VALIDATION',
      },
    ],
  },
  {
    id: 'devops-tools',
    indexNumber: '04',
    categoryName: 'DEVOPS, TOOLS & SYSTEMS',
    skills: [
      {
        id: 'docker',
        name: 'Docker',
        level: 'Proficient',
        proficiencyPercent: 85,
        iconKey: 'docker',
        category: 'DevOps, Tools & Systems',
        evidence: 'Multi-stage Dockerfile architecture, Alpine Linux base images, and non-root user execution security.',
        verifiedProject: 'Containerized Backend Services with Non-Root Isolation',
        projectHref: '#experience',
        keyCompetencies: ['Multi-Stage Builds', 'Alpine Base Images', 'Non-Root Security Invariant'],
        verificationStamp: 'VERIFIED_CONTAINER_SECURITY',
      },
      {
        id: 'git',
        name: 'Git & GitHub',
        level: 'Proficient',
        proficiencyPercent: 92,
        iconKey: 'git',
        category: 'DevOps, Tools & Systems',
        evidence: 'Branch management, atomic commit conventions, pull request workflows, and multi-repository synchronization.',
        verifiedProject: 'github.com/jagadeeswaran101 (Primary) & jagadees-vet',
        projectHref: '#experience',
        keyCompetencies: ['Branching Strategies', 'Atomic Commits', 'Code Review & PRs'],
        verificationStamp: 'VERIFIED_GIT_WORKFLOW',
      },
      {
        id: 'linux',
        name: 'Debian Linux',
        level: 'Proficient',
        proficiencyPercent: 86,
        iconKey: 'linux',
        category: 'DevOps, Tools & Systems',
        evidence: 'Shell navigation, apt package management, UFW firewall rules, SSH security keys, and Bash automation.',
        verifiedProject: 'Dataglobal Technologies Internship (Cybersecurity & Linux)',
        projectHref: '#experience',
        keyCompetencies: ['Bash Shell Automation', 'User Permissions & SSH', 'Process Monitoring (systemd)'],
        verificationStamp: 'VERIFIED_LINUX_ADMIN',
      },
      {
        id: 'qgis',
        name: 'QGIS',
        level: 'Proficient',
        proficiencyPercent: 85,
        iconKey: 'qgis',
        category: 'DevOps, Tools & Systems',
        evidence: 'Geospatial dataset auditing, spatial coordination layers, and map digitizing for client deliverables.',
        verifiedProject: 'Q-Gate Infotech Internship (GIS Department)',
        projectHref: '#experience',
        keyCompetencies: ['Geospatial Auditing', 'Vector & Raster Layers', 'Spatial Data Quality Control'],
        verificationStamp: 'VERIFIED_GIS_OPERATIONS',
      },
    ],
  },
  {
    id: 'reverse-ai',
    indexNumber: '05',
    categoryName: 'REVERSE PROMPT ENGINEERING & AI',
    skills: [
      {
        id: 'reverse-prompting',
        name: 'Reverse Prompt Engineering',
        level: 'Proficient',
        proficiencyPercent: 95,
        iconKey: 'reverseprompting',
        category: 'Reverse Prompt Engineering & AI',
        evidence: 'Analyzing AI-generated codebases to extract underlying system prompts, invariants, and negative constraints.',
        verifiedProject: 'Specialized Prompt Engineering Methodology',
        projectHref: '#about',
        keyCompetencies: ['Prompt Topology Analysis', 'Negative Constraints', 'System Invariant Discovery'],
        verificationStamp: 'VERIFIED_PROMPT_ENGINEERING',
      },
      {
        id: 'ui-deconstruction',
        name: 'UI/UX Visual Deconstruction',
        level: 'Proficient',
        proficiencyPercent: 92,
        iconKey: 'uideconstruction',
        category: 'Reverse Prompt Engineering & AI',
        evidence: 'Extracting responsive layout grids, nested border-radius math, and 60-30-10 color budgets from visual prototypes.',
        verifiedProject: 'High-Precision UI Specification Generation',
        projectHref: '#about',
        keyCompetencies: ['Design Token Extraction', 'Nested Radius Math', 'Layout Hierarchy Mapping'],
        verificationStamp: 'VERIFIED_UI_DECONSTRUCTION',
      },
      {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        level: 'Proficient',
        proficiencyPercent: 90,
        iconKey: 'githubcopilot',
        category: 'Reverse Prompt Engineering & AI',
        evidence: 'AI-assisted code generation, unit test scaffolding, context window tuning, and developer velocity acceleration.',
        verifiedProject: 'GitHub Copilot Certification & Accelerated Development',
        projectHref: '#certifications',
        keyCompetencies: ['Prompt Formulation', 'Test Suite Generation', 'Context Window Tuning'],
        verificationStamp: 'VERIFIED_AI_PAIR_PROGRAMMING',
      },
    ],
  },
];

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [verifyingSkill, setVerifyingSkill] = useState<SkillItem | null>(null);

  // Filter skills based on search query
  const filteredGroups = SKILL_GROUPS.map((group) => {
    if (!searchQuery.trim()) return group;
    const q = searchQuery.toLowerCase();
    const matchedSkills = group.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.evidence.toLowerCase().includes(q) ||
        s.verifiedProject.toLowerCase().includes(q) ||
        s.keyCompetencies.some((k) => k.toLowerCase().includes(q))
    );

    if (matchedSkills.length > 0) {
      return {
        ...group,
        skills: matchedSkills,
      };
    }
    return null;
  }).filter(Boolean) as SkillGroup[];

  const totalSkillsCount = SKILL_GROUPS.reduce((acc, g) => acc + g.skills.length, 0);

  return (
    <section id="skills" className="relative scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header matching the exact screenshot design */}
        <div className="space-y-3">
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase font-sans">
              SKILLS
            </h2>
            {/* Cyan Accent Bar Underline matching screenshot */}
            <div className="w-10 h-1 bg-cyan-400 rounded-full" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Technologies, tools, and platforms I use to build modern software.
            </p>

            {/* Quick Filter Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search technologies..."
                className="w-full pl-9 pr-8 py-1.5 text-xs bg-white dark:bg-[#0b0e18] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Skill Groups Stack matching screenshot's "01 — CATEGORY_NAME" */}
        <div className="space-y-10">
          {filteredGroups.map((group) => (
            <div key={group.id} className="space-y-4">
              {/* Category Header: "01 — PROGRAMMING LANGUAGES" */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest font-semibold uppercase">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold">{group.indexNumber}</span>
                <span className="text-slate-400 dark:text-slate-500">—</span>
                <span className="text-slate-700 dark:text-slate-200">{group.categoryName}</span>
              </div>

              {/* Skills Pills Flow matching screenshot */}
              <div className="flex flex-wrap items-center gap-3">
                {group.skills.map((skill) => (
                  <button
                    key={skill.id}
                    onClick={() => setVerifyingSkill(skill)}
                    className="group relative inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white dark:bg-[#0b0e18]/90 border border-slate-200 dark:border-white/10 hover:border-cyan-500/60 dark:hover:border-cyan-400/60 hover:bg-slate-50 dark:hover:bg-[#111624] text-slate-900 dark:text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm dark:shadow-md shadow-slate-900/5 dark:shadow-black/40 cursor-pointer select-none"
                    title={`Click to verify ${skill.name} evidence`}
                  >
                    {/* Authentic Tech Icon */}
                    {TechIcons[skill.iconKey] || (
                      <div className="w-5 h-5 rounded bg-cyan-500/20 text-cyan-500 dark:text-cyan-400 flex items-center justify-center font-bold text-xs">
                        {skill.name.charAt(0)}
                      </div>
                    )}

                    {/* Skill Name */}
                    <span className="text-sm font-bold tracking-tight font-sans text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ===================== VERIFICATION SCREEN (MODAL) ===================== */}
        <AnimatePresence>
          {verifyingSkill && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 dark:bg-black/85 backdrop-blur-md overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="verify-skill-title"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-xl bg-white dark:bg-slate-950 border border-cyan-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl my-8 overflow-hidden text-slate-800 dark:text-slate-200"
              >
                {/* Top Cyan Accent Gradient Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-emerald-400 to-sky-400" />

                {/* Header */}
                <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3.5">
                    {/* Tech Icon Container */}
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner">
                      {TechIcons[verifyingSkill.iconKey] || (
                        <div className="w-6 h-6 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                          {verifyingSkill.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                        <BadgeCheck className="w-3.5 h-3.5 text-cyan-400" />
                        <span>VERIFIED COMPETENCY SCREEN</span>
                      </div>
                      <h3 id="verify-skill-title" className="text-2xl font-bold text-white tracking-tight">
                        {verifyingSkill.name}
                      </h3>
                      <p className="text-xs text-slate-400">
                        Category: <strong className="text-slate-200">{verifyingSkill.category}</strong>
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setVerifyingSkill(null)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
                    aria-label="Close verify screen"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {/* Status Banner */}
                  <div className="p-3.5 rounded-xl border border-cyan-500/40 bg-cyan-950/20 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span>STATUS: AUTHENTICATED & VERIFIED</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {verifyingSkill.verificationStamp}
                    </span>
                  </div>

                  {/* Proficiency Meter */}
                  <div className="p-4 rounded-xl border border-slate-800 bg-[#06080e] space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Proficiency Assessment:</span>
                      <span className="text-cyan-400 font-bold">{verifyingSkill.proficiencyPercent}% ({verifyingSkill.level})</span>
                    </div>
                    <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                        style={{ width: `${verifyingSkill.proficiencyPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Practical Evidence */}
                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider mb-1.5">
                      Verified Practical Application:
                    </h4>
                    <p className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-200 leading-relaxed text-xs sm:text-sm">
                      {verifyingSkill.evidence}
                    </p>
                  </div>

                  {/* Associated Project */}
                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider mb-1.5">
                      Implemented In Project / Coursework:
                    </h4>
                    <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/40 flex items-center justify-between gap-2">
                      <span className="text-white font-medium text-xs sm:text-sm">
                        {verifyingSkill.verifiedProject}
                      </span>
                      <a
                        href={verifyingSkill.projectHref}
                        onClick={() => setVerifyingSkill(null)}
                        className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-semibold shrink-0"
                      >
                        <span>View In Portfolio</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Key Invariants */}
                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider mb-1.5">
                      Demonstrated Invariants & Architectural Patterns:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {verifyingSkill.keyCompetencies.map((comp, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 p-2 rounded-lg bg-[#06080e] border border-slate-800/80 text-xs text-slate-300"
                        >
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-slate-500">
                    Jagadeeswaran C · B.Sc. Computer Science
                  </span>

                  <button
                    onClick={() => setVerifyingSkill(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
