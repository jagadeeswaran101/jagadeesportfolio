import React, { useState, useMemo, useEffect } from 'react';
import {
  Award,
  ExternalLink,
  FolderCheck,
  Grid,
  MoveHorizontal,
  X,
  FileText,
  CheckCircle2,
  Calendar,
  ShieldCheck,
} from 'lucide-react';
import { CERTIFICATIONS_DATA, CertificationItem } from '../../data/certifications';
import { CertificationFilters } from './CertificationFilters';
import { CertificateMarquee } from './CertificateMarquee';
import { CertificationCard } from './CertificationCard';

export const CertificationsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'marquee' | 'grid'>('marquee');
  const [previewItem, setPreviewItem] = useState<CertificationItem | null>(null);

  // Available unique categories
  const categories = ['All', 'Development', 'AI / ML', 'Data', 'Cybersecurity', 'Professional'];

  // Calculate counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: CERTIFICATIONS_DATA.length };
    categories.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = CERTIFICATIONS_DATA.filter((item) =>
          item.categories.includes(cat)
        ).length;
      }
    });
    return counts;
  }, []);

  // Filter items based on active category
  const filteredCertificates = useMemo(() => {
    if (activeCategory === 'All') {
      return CERTIFICATIONS_DATA;
    }
    return CERTIFICATIONS_DATA.filter((item) =>
      item.categories.includes(activeCategory)
    );
  }, [activeCategory]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPreviewItem(null);
      }
    };
    if (previewItem) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewItem]);

  return (
    <section
      id="certifications"
      className="py-20 relative bg-slate-100/60 dark:bg-[#030408]/90 border-b border-slate-200 dark:border-white/5 transition-colors duration-300 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-500" />
              <span>Verified Industry Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              CERTIFICATIONS
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Authenticated technical certifications earned across Cybersecurity, Software Engineering, AI/ML, and Data Analytics, verified with official documents and credential registries.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Toggle: Marquee vs Grid */}
            <div className="flex items-center p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
              <button
                onClick={() => setViewMode('marquee')}
                className={`p-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  viewMode === 'marquee'
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Continuous Stream View"
                aria-label="Continuous Stream View"
              >
                <MoveHorizontal className="w-4 h-4" />
                <span className="hidden sm:inline">Stream</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Grid View"
                aria-label="Grid View"
              >
                <Grid className="w-4 h-4" />
                <span className="hidden sm:inline">Grid</span>
              </button>
            </div>

            {/* Google Drive Link */}
            <a
              href="https://drive.google.com/drive/folders/1sLgL4X5tB5hI4l5tO8vF4f5f5f5f5f5f"
              target="_blank"
              rel="noreferrer noopener"
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-emerald-500/60 hover:text-emerald-600 dark:hover:text-white rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 whitespace-nowrap shrink-0 shadow-sm"
            >
              <FolderCheck className="w-4 h-4 text-emerald-500" />
              <span>Drive Archive</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Dynamic Category Filters */}
        <CertificationFilters
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          categoryCounts={categoryCounts}
        />

        {/* Display Area: Continuous Marquee or Responsive Grid */}
        {viewMode === 'marquee' ? (
          <CertificateMarquee
            items={filteredCertificates}
            onPreview={setPreviewItem}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {filteredCertificates.map((cert) => (
              <CertificationCard
                key={cert.id}
                cert={cert}
                onPreview={setPreviewItem}
                className="w-full"
              />
            ))}
          </div>
        )}

        {/* Certificate Detail & Verification Modal */}
        {previewItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 dark:bg-black/85 backdrop-blur-md animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-cert-title"
            onClick={() => setPreviewItem(null)}
          >
            <div
              className="relative w-full max-w-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl text-slate-800 dark:text-slate-200 max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 p-5 sm:p-6 bg-slate-50 dark:bg-slate-900/60">
                <div className="space-y-1 pr-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>{previewItem.issuer}</span>
                  </div>
                  <h3
                    id="modal-cert-title"
                    className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-tight"
                  >
                    {previewItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setPreviewItem(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body with Scroll */}
              <div className="p-5 sm:p-6 space-y-5 overflow-y-auto">
                {/* Certificate Preview Image if available */}
                {previewItem.thumbnailUrl && (
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 max-h-72 flex items-center justify-center shadow-inner">
                    <img
                      src={previewItem.thumbnailUrl}
                      alt={previewItem.title}
                      className="w-full h-auto object-contain max-h-72"
                    />
                  </div>
                )}

                {/* Scope & Description */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white text-xs font-mono uppercase tracking-wider">
                    Credential Scope & Competencies
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {previewItem.description}
                  </p>
                </div>

                {/* Metadata Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {previewItem.issueDate && (
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-emerald-500 shrink-0" />
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-mono">Date Awarded</div>
                        <div className="font-semibold text-slate-800 dark:text-slate-200">
                          {previewItem.issueDate}
                        </div>
                      </div>
                    </div>
                  )}

                  {previewItem.credentialId && (
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-mono">Credential Code</div>
                        <div className="font-mono font-bold text-emerald-600 dark:text-emerald-400 truncate">
                          {previewItem.credentialId}
                        </div>
                      </div>
                    </div>
                  )}

                  {previewItem.driveFileName && (
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 sm:col-span-2">
                      <FileText className="w-4 h-4 text-sky-500 shrink-0" />
                      <div className="truncate">
                        <div className="text-[10px] text-slate-400 uppercase font-mono">Local Archive Document</div>
                        <div className="font-mono text-slate-700 dark:text-slate-300 text-[11px] truncate">
                          {previewItem.driveFileName}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-5 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={previewItem.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <span>Open Certificate PDF / Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {previewItem.verificationUrl && (
                    <a
                      href={previewItem.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                    >
                      <span>Official Registry</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setPreviewItem(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
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
