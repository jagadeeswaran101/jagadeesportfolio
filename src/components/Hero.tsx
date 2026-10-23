import React from 'react';
import {
  MapPin,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-slate-50 dark:bg-[#030408] transition-colors duration-300 scroll-mt-20">
      {/* Background radial glow orbs & technical grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-tech-grid opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/60 dark:via-[#030408]/60 to-slate-50 dark:to-[#030408]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Identity */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span>Available for Backend & Systems Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                <span>{PERSONAL_INFO.location}</span>
                <span aria-hidden="true">·</span>
                <span>VET IAS (2024–2027)</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-emerald-600 dark:text-emerald-400 tracking-tight">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Introduction */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Engineering resilient server-side applications, relational database architectures, and containerized deployment workflows. Specialized in{' '}
              <strong className="text-slate-900 dark:text-white font-medium">Node.js, Express, REST APIs</strong>, and{' '}
              <strong className="text-slate-900 dark:text-white font-medium">Reverse Prompt Engineering</strong> to deconstruct complex visual interfaces into deterministic prompts.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#experience"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <span>View Experience & Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-[#0b0e18] border border-slate-200 dark:border-white/10 hover:border-emerald-500/60 hover:text-emerald-600 dark:hover:text-emerald-300 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap shadow-sm"
              >
                <Code2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <span>About & Skills</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social / Profiles with Hover Glow & Underlines */}
            <div className="flex items-center gap-4 pt-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-mono">PROFILES:</span>
              <a
                href={PERSONAL_INFO.githubPrimary}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                <Github className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                <span>github/jagadeeswaran101</span>
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-emerald-500 dark:bg-emerald-400 transition-all duration-200 group-hover:w-full" />
              </a>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-700">·</span>
              <a
                href={PERSONAL_INFO.githubSecondary}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                <Github className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                <span>github/jagadees-vet</span>
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-emerald-500 dark:bg-emerald-400 transition-all duration-200 group-hover:w-full" />
              </a>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-700">·</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                <span>LinkedIn</span>
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-emerald-500 dark:bg-emerald-400 transition-all duration-200 group-hover:w-full" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Profile Card & Quick Stats */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-[#0b0e18]/90 backdrop-blur-xl p-6 sm:p-8 space-y-6 shadow-xl dark:shadow-2xl overflow-hidden group hover:border-emerald-500/40 transition-colors duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-500" />

              {/* Header profile info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-sky-500/10 dark:from-emerald-500/20 dark:to-sky-500/20 border border-emerald-500/30 flex items-center justify-center p-1 shadow-inner group-hover:scale-105 transition-transform duration-200 overflow-hidden">
                  <img
                    src="/assets/aistudio/Untitled_Design_2_d8f41c32.png"
                    alt="Jagadeeswaran C"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">STATUS: ACTIVE UG STUDENT</div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Jagadeeswaran C</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">B.Sc. Computer Science @ VET IAS</p>
                </div>
              </div>

              {/* Fast Facts Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 space-y-1">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">ACADEMIC CGPA</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white font-mono">{PERSONAL_INFO.education.cgpa}</div>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">Class of 2027</div>
                </div>

                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 space-y-1">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">HACKATHON</div>
                  <div className="text-base font-bold text-amber-600 dark:text-amber-400 font-mono">2nd Prize</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Smart India Hackathon</div>
                </div>

                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 space-y-1">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">DEPLOYED WORK</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white font-mono">2 Live Apps</div>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">Vercel Production</div>
                </div>

                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 space-y-1">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">CERTIFICATIONS</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white font-mono">8+ Credentials</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Infosys, GitHub, IBM</div>
                </div>
              </div>

              {/* Bio Preview */}
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-[#06080e] font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <div className="text-slate-500 text-[11px]"># Key Focus Areas</div>
                <div className="text-emerald-600 dark:text-emerald-400">→ REST APIs & Node.js Microservices</div>
                <div className="text-sky-600 dark:text-sky-300">→ Reverse Prompt Engineering & UI Specs</div>
                <div className="text-teal-600 dark:text-teal-300">→ Relational Databases & 3NF Normalization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
