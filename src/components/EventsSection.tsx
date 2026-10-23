import React, { useState } from 'react';
import {
  Trophy,
  Calendar,
  ExternalLink,
  MapPin,
  Linkedin,
  FolderCheck,
  CheckCircle2,
  X,
  FileText,
  Sparkles,
  Layers,
  Award,
  Building,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export interface TechEvent {
  id: string;
  title: string;
  organizer: string;
  date: string;
  location: string;
  category: 'Hackathon' | 'Tech Symposium' | 'Workshop & Immersion' | 'Technical Competition';
  isFeatured: boolean;
  takeaway: string;
  technologies: string[];
  linkedinUrl: string;
  driveFileName?: string;
  driveFolderUrl: string;
  awardBadge?: string;
}

const EVENTS_DATA: TechEvent[] = [
  {
    id: 'event-sih',
    title: 'Smart India Hackathon (SIH) — Second Prize Winner',
    organizer: 'Ministry of Education & Institution Innovation Council',
    date: 'Academic Year 2024–2025',
    location: 'Tamil Nadu, India',
    category: 'Hackathon',
    isFeatured: true,
    awardBadge: '2nd Prize Winner',
    takeaway:
      'Engineered an agricultural market forecasting platform analyzing wholesale price volatility using historical dataset patterns and regression models under strict 36-hour sprint constraints.',
    technologies: ['Machine Learning', 'Python', 'Market Data Analysis', 'Rapid Prototyping'],
    linkedinUrl: `${PERSONAL_INFO.linkedin}`,
    driveFolderUrl: PERSONAL_INFO.driveFolderUrl,
  },
  {
    id: 'event-venkateshwara',
    title: 'State-Level Technical Symposium & Paper Presentation',
    organizer: 'Venkateshwara College of Engineering & Technology',
    date: 'Academic Year 2024–2025',
    location: 'Tamil Nadu, India',
    category: 'Tech Symposium',
    isFeatured: true,
    awardBadge: 'Honorable Recognition',
    takeaway:
      'Presented technical concepts on modern backend architecture and distributed data integrity, competing alongside engineering students across the state.',
    technologies: ['Systems Architecture', 'Technical Presentation', 'Competitive Computing'],
    linkedinUrl: `${PERSONAL_INFO.linkedin}`,
    driveFileName: 'Venkateshwara College certificate 1st year.pdf',
    driveFolderUrl: PERSONAL_INFO.driveFolderUrl,
  },
  {
    id: 'event-nantha',
    title: 'Inter-Collegiate Computer Science Meet & Coding Challenge',
    organizer: 'Nantha Arts and Science College',
    date: 'Academic Year 2024–2025',
    location: 'Erode, Tamil Nadu, India',
    category: 'Technical Competition',
    isFeatured: true,
    awardBadge: 'Recognition Award',
    takeaway:
      'Demonstrated algorithm design and algorithmic problem-solving in structured computing events under competitive time limits.',
    technologies: ['Algorithm Design', 'Data Structures', 'Problem Solving'],
    linkedinUrl: `${PERSONAL_INFO.linkedin}`,
    driveFileName: 'NANTHA college certificate 1st year.pdf',
    driveFolderUrl: PERSONAL_INFO.driveFolderUrl,
  },
  {
    id: 'event-gobi',
    title: 'State-Level Technical Symposium on Software Applications',
    organizer: 'Gobi Arts & Science College',
    date: 'Sep 02, 2025',
    location: 'Gobichettipalayam, Tamil Nadu, India',
    category: 'Tech Symposium',
    isFeatured: true,
    awardBadge: 'Merit Certificate',
    takeaway:
      'Participated in advanced software development challenges, evaluating relational database schemas and algorithmic efficiency against collegiate peers.',
    technologies: ['Database Design', 'Software Engineering', 'Technical Computing'],
    linkedinUrl: `${PERSONAL_INFO.linkedin}`,
    driveFileName: 'gobi arts and science College 02-Sep-2025.pdf',
    driveFolderUrl: PERSONAL_INFO.driveFolderUrl,
  },
  {
    id: 'event-dataglobal-immersion',
    title: 'Cybersecurity & Debian Linux Systems Immersion',
    organizer: 'Dataglobal Technologies',
    date: 'Aug 12, 2025 – Sep 01, 2025',
    location: 'Tamil Nadu, India',
    category: 'Workshop & Immersion',
    isFeatured: false,
    takeaway:
      'Intensive hands-on practical immersion in Debian Linux server administration, cryptographic hash primitives (SHA-256), and network security hardening.',
    technologies: ['Debian Linux', 'Bash Automation', 'Cryptography', 'Network Security'],
    linkedinUrl: `${PERSONAL_INFO.linkedin}`,
    driveFolderUrl: PERSONAL_INFO.driveFolderUrl,
  },
  {
    id: 'event-qgate-gis',
    title: 'Geospatial Data Operations & GIS Technical Workshop',
    organizer: 'Q-Gate Infotech Private Limited',
    date: 'Jun 09, 2025 – Jul 08, 2025',
    location: 'Tamil Nadu, India',
    category: 'Workshop & Immersion',
    isFeatured: false,
    takeaway:
      'Hands-on technical sessions applying QGIS software to digitize, layer, and quality-audit spatial datasets according to stringent enterprise requirements.',
    technologies: ['QGIS', 'Geospatial Layers', 'Quality Assurance', 'Client Sprints'],
    linkedinUrl: `${PERSONAL_INFO.linkedin}`,
    driveFolderUrl: PERSONAL_INFO.driveFolderUrl,
  },
];

export const EventsSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TechEvent | null>(null);

  const featuredEvents = EVENTS_DATA.filter((e) => e.isFeatured);
  const secondaryEvents = EVENTS_DATA.filter((e) => !e.isFeatured);

  return (
    <section id="events" className="py-20 relative bg-slate-50 dark:bg-[#06080e]/95 border-b border-slate-200 dark:border-white/5 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold tracking-wider uppercase flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Industry & Tech Events</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              EVENTS & HACKATHONS
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Hackathon victories, state-level technical symposiums, and industrial immersions grounded in verified academic and LinkedIn milestones.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-amber-500/60 hover:text-amber-600 dark:hover:text-white rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap shrink-0 shadow-sm"
          >
            <Linkedin className="w-4 h-4 text-sky-500" />
            <span>Connect on LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Featured Events (Large Highlight Cards) */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Featured Major Events & Competitions</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredEvents.map((evt) => (
              <div
                key={evt.id}
                className="relative rounded-2xl border border-slate-200 dark:border-amber-500/30 bg-white dark:bg-[#0d1017]/90 hover:border-amber-500/60 backdrop-blur-md p-6 sm:p-8 space-y-5 transition-all duration-300 hover:-translate-y-1 shadow-lg dark:shadow-xl flex flex-col justify-between group overflow-hidden"
              >
                {/* Top Accent Gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-400 opacity-70 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Category & Badge Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <span className="inline-flex items-center gap-1.5 font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-200 dark:border-amber-500/20">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>{evt.category}</span>
                    </span>

                    {evt.awardBadge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 font-semibold text-[11px]">
                        {evt.awardBadge}
                      </span>
                    )}
                  </div>

                  {/* Title & Organizer */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                      {evt.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{evt.organizer}</span>
                    </p>
                    <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        <span>{evt.date}</span>
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{evt.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Summary / Key Takeaway */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                    {evt.takeaway}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {evt.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedEvent(evt)}
                    className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Event Details</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <a
                    href={evt.linkedinUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-sky-500" />
                    <span>View Post on LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Events & Industrial Immersions (Compact Grid) */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400">
            <Layers className="w-4 h-4 text-emerald-500" />
            <span>Industrial Immersions & Technical Workshops</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryEvents.map((evt) => (
              <div
                key={evt.id}
                className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0e18]/90 hover:border-emerald-500/50 backdrop-blur-md p-6 space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-md dark:shadow-xl flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{evt.category}</span>
                    <span className="text-slate-500 dark:text-slate-400">{evt.date}</span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                    {evt.title}
                  </h4>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>{evt.organizer}</span>
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {evt.takeaway}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {evt.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={evt.linkedinUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 dark:bg-black/85 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl text-slate-800 dark:text-slate-200">
              <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold uppercase flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>{selectedEvent.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedEvent.title}</h3>
                  <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2 pt-1">
                    <span>{selectedEvent.organizer}</span>
                    <span>·</span>
                    <span>{selectedEvent.date}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-xs font-mono uppercase tracking-wider mb-1">
                    Event Overview & Deliverable
                  </h4>
                  <p>{selectedEvent.takeaway}</p>
                </div>

                {selectedEvent.driveFileName && (
                  <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-xs flex items-center gap-2">
                    <FileText className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 truncate">{selectedEvent.driveFileName}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <a
                  href={selectedEvent.linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>View Post on LinkedIn</span>
                </a>

                <button
                  onClick={() => setSelectedEvent(null)}
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
