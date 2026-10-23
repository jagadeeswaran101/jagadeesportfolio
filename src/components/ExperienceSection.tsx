import React, { useState } from 'react';
import { Briefcase, Building, Calendar, MapPin, CheckCircle2, ExternalLink, Github, ArrowUpRight, Layers } from 'lucide-react';
import { EXPERIENCE_DATA, PROJECTS } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [activeProjectModal, setActiveProjectModal] = useState<any | null>(null);

  // Separate internships from general experience
  const internships = EXPERIENCE_DATA.filter((e) => e.type === 'Internship');

  return (
    <section id="experience" className="py-20 relative bg-slate-50 dark:bg-[#06080e]/95 border-b border-slate-200 dark:border-white/5 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Professional Background & Internships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            EXPERIENCE
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Professional background spanning cybersecurity and Linux systems administration, technical geospatial data operations, and independent production software engineering.
          </p>
        </div>

        {/* Subsection 1: Dedicated Internship Details */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800/80 pb-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Building className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Internship Details
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Verified technical internships and practical organizational contributions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {internships.map((internship) => (
              <div
                key={internship.id}
                className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0e18]/90 hover:border-emerald-500/50 backdrop-blur-md p-6 sm:p-8 space-y-6 transition-all duration-300 hover:-translate-y-1 shadow-lg dark:shadow-xl flex flex-col justify-between group overflow-hidden"
              >
                {/* Top Accent Gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                        Verified Internship
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight pt-1">
                        {internship.role}
                      </h4>
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        <span>{internship.company}</span>
                      </p>
                    </div>

                    <div className="text-right space-y-1">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded-md">
                        <Calendar className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                        <span>{internship.period}</span>
                      </div>
                      <div className="flex items-center justify-end gap-1 text-xs text-slate-500 dark:text-slate-400">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{internship.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                    {internship.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Key Responsibilities & Deliverables:
                    </div>
                    <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                      {internship.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-2">Technologies Used:</div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {internship.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subsection 2: Independent Systems & Applied Engineering */}
        <div id="projects" className="space-y-8 pt-4 scroll-mt-20">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800/80 pb-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-600 dark:text-sky-400">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Independent Systems Engineering & Deployed Work
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Self-directed microservices, live Vercel deployments, and edge computer vision prototypes
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0e18]/90 hover:border-emerald-500/50 backdrop-blur-md p-6 space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-md dark:shadow-xl flex flex-col justify-between group overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">{proj.category}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        proj.deploymentStatus === 'Live'
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                          : proj.deploymentStatus === 'Award Winner'
                          ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {proj.deploymentStatus}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                    {proj.name}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {proj.problemSolved}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {proj.technologies.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveProjectModal(proj)}
                    className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1 transition-colors"
                  >
                    <span>View Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {proj.repositoryUrl && (
                      <a
                        href={proj.repositoryUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-colors"
                        title="View GitHub Repository"
                        aria-label={`View GitHub repository for ${proj.name}`}
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {proj.liveDemoUrl && (
                      <a
                        href={proj.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded transition-colors whitespace-nowrap"
                      >
                        <span>Live</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Architecture / Spec inspection */}
        {activeProjectModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 dark:bg-black/85 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl text-slate-800 dark:text-slate-200">
              <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <div>
                  <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                    {activeProjectModal.category} · {activeProjectModal.deploymentStatus}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">{activeProjectModal.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{activeProjectModal.tagline}</p>
                </div>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <div>
                  <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-1">Architecture Overview</div>
                  <p>{activeProjectModal.architecture}</p>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-1">
                  <div className="text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 font-semibold">Documented Contribution</div>
                  <p className="text-xs text-slate-700 dark:text-slate-200">{activeProjectModal.myContribution}</p>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-1">Verified Results</div>
                  <p>{activeProjectModal.verifiedResults}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                {activeProjectModal.liveDemoUrl && (
                  <a
                    href={activeProjectModal.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg"
                  >
                    <span>Open Live Application</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-4 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
