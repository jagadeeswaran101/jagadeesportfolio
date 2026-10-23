import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-[#07080c] py-12 text-slate-600 dark:text-slate-400 text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand with User's Uploaded Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <img
                src="/assets/aistudio/Untitled_Design_2_d8f41c32.png"
                alt="Jagadeeswaran C Logo"
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </div>
            <span className="font-bold text-slate-900 dark:text-white tracking-tight text-sm">
              {PERSONAL_INFO.name}
            </span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="text-slate-500 dark:text-slate-400">{PERSONAL_INFO.title}</span>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href={PERSONAL_INFO.githubPrimary}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              GitHub (Primary)
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Email
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All verified project code & documentation.
          </div>
          <div>
            Tiruppur, Tamil Nadu, India · VET Institute of Arts and Science
          </div>
        </div>
      </div>
    </footer>
  );
};
