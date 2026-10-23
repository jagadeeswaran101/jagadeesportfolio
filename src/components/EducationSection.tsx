import React from 'react';
import { GraduationCap, Calendar, CheckCircle2, MapPin, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-100/70 dark:bg-[#030408] border-b border-slate-200 dark:border-white/5 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            EDUCATION
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Formal computer science education emphasizing core algorithms, software architecture, relational database management, and operating systems.
          </p>
        </div>

        {/* Education Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EDUCATION_DATA.map((edu) => (
            <div
              key={edu.id}
              className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0e18]/90 hover:border-emerald-500/50 backdrop-blur-md p-6 sm:p-8 space-y-6 transition-all duration-300 hover:-translate-y-1 shadow-lg dark:shadow-xl flex flex-col justify-between group overflow-hidden"
            >
              {/* Top Accent Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-500 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                {/* Meta Row */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300">
                      {edu.status}
                    </span>
                  </div>

                  {edu.grade && (
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                      {edu.grade}
                    </span>
                  )}
                </div>

                {/* Degree & Institution */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-100 dark:border-slate-800/80 my-2" />

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.description}
                </p>

                {/* Key Coursework / Highlights */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Core Coursework & Highlights:</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    {edu.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
