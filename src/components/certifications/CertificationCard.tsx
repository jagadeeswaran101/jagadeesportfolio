import React, { useState } from 'react';
import {
  ExternalLink,
  Award,
  Calendar,
  CheckCircle2,
  Eye,
  FileCheck,
  Shield,
  Code2,
  Sparkles,
  Database,
  Briefcase,
  Layers,
} from 'lucide-react';
import { CertificationItem } from '../../data/certifications';

interface CertificationCardProps {
  cert: CertificationItem;
  onPreview?: (cert: CertificationItem) => void;
  isClone?: boolean;
  className?: string;
}

export const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'cybersecurity':
      return <Shield className="w-3 h-3 text-rose-500" />;
    case 'development':
      return <Code2 className="w-3 h-3 text-emerald-500" />;
    case 'ai / ml':
    case 'ai & tools':
      return <Sparkles className="w-3 h-3 text-purple-500" />;
    case 'data':
    case 'data science':
      return <Database className="w-3 h-3 text-sky-500" />;
    case 'professional':
      return <Briefcase className="w-3 h-3 text-amber-500" />;
    default:
      return <Layers className="w-3 h-3 text-slate-400" />;
  }
};

export const CertificationCard: React.FC<CertificationCardProps> = ({
  cert,
  onPreview,
  isClone = false,
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);

  const mainCategory = cert.categories[0] || 'Professional';

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0b0e18]/90 hover:border-emerald-500/60 dark:hover:border-emerald-400/50 backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl dark:shadow-black/40 ${className}`}
      aria-hidden={isClone}
    >
      {/* Top Accent Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-500 opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Card Content Top Container */}
      <div className="flex flex-col">
        {/* Certificate Preview Thumbnail Banner */}
        <div className="relative w-full h-44 bg-slate-100 dark:bg-slate-900 overflow-hidden border-b border-slate-200 dark:border-white/10 flex items-center justify-center">
          {cert.thumbnailUrl && !imageError ? (
            <img
              src={cert.thumbnailUrl}
              alt={`${cert.title} preview`}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                Verified Credential
              </div>
              <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                {cert.issuer}
              </div>
            </div>
          )}

          {/* Quick Preview Overlay Button on Hover */}
          {onPreview && !isClone && (
            <button
              onClick={() => onPreview(cert)}
              tabIndex={isClone ? -1 : 0}
              className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-[2px]"
              aria-label={`Preview ${cert.title}`}
            >
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-white/20 flex items-center gap-1.5 shadow-lg">
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
                <span>Quick View</span>
              </span>
            </button>
          )}

          {/* Category Badge Floated over thumbnail */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 dark:bg-slate-950/85 backdrop-blur-md text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-white/15 shadow-sm">
            {getCategoryIcon(mainCategory)}
            <span>{mainCategory}</span>
          </div>

          {/* Verification Status Pill */}
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
            <span>Verified</span>
          </div>
        </div>

        {/* Certificate Info Body */}
        <div className="p-5 space-y-3">
          {/* Metadata Row: Issuer & Date */}
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span className="font-semibold text-emerald-600 dark:text-emerald-400 truncate max-w-[200px]">
              {cert.issuer}
            </span>
            {cert.issueDate && (
              <span className="flex items-center gap-1 font-mono text-[11px] shrink-0">
                <Calendar className="w-3 h-3 text-slate-400" />
                <span>{cert.issueDate}</span>
              </span>
            )}
          </div>

          {/* Certificate Title */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug line-clamp-2 min-h-[3rem] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {cert.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 min-h-[2rem]">
            {cert.description}
          </p>

          {/* Credential ID or Archive File Badge */}
          {cert.credentialId ? (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-400">
              <span className="text-slate-400">ID:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                {cert.credentialId}
              </span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-400">
              <FileCheck className="w-3 h-3 text-emerald-500" />
              <span>Official Document</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-5 pt-0">
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
          {/* View Certificate Action Button */}
          <a
            href={cert.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isClone ? -1 : 0}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 transition-all duration-200 hover:scale-[1.02] active:scale-95"
          >
            <span>View Certificate</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Quick Preview or Verification Modal Trigger */}
          {onPreview && !isClone ? (
            <button
              onClick={() => onPreview(cert)}
              tabIndex={isClone ? -1 : 0}
              className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1 py-1 px-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Inspect</span>
            </button>
          ) : (
            cert.verificationUrl && (
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isClone ? -1 : 0}
                className="text-[11px] font-medium text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                Verify online
              </a>
            )
          )}
        </div>
      </div>
    </article>
  );
};
