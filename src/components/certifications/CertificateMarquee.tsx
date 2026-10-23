import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { CertificationItem } from '../../data/certifications';
import { CertificationCard } from './CertificationCard';

interface CertificateMarqueeProps {
  items: CertificationItem[];
  speedSeconds?: number;
  onPreview?: (cert: CertificationItem) => void;
}

export const CertificateMarquee: React.FC<CertificateMarqueeProps> = ({
  items,
  speedSeconds = 45,
  onPreview,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // If there are very few items, repeat them to fill the screen width so the seamless loop has no gap
  const repeatedItems = items.length < 5 ? [...items, ...items, ...items] : items;

  // Manual scroll handler for accessibility and touch devices
  const scrollManual = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full space-y-4">
      {/* Controls Bar for Accessibility: Pause/Play & Manual Scroll */}
      <div className="flex items-center justify-between px-2 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors shadow-sm"
            aria-label={isPaused ? 'Resume auto scroll' : 'Pause auto scroll'}
            title={isPaused ? 'Resume auto scroll' : 'Pause auto scroll'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-500" /> : <Pause className="w-3.5 h-3.5 text-amber-500" />}
            <span className="font-medium text-[11px]">{isPaused ? 'Resume Scroll' : 'Pause Scroll'}</span>
          </button>
          <span className="hidden sm:inline text-[11px] text-slate-400">
            • Hovering over cards automatically pauses motion
          </span>
        </div>

        {/* Manual Arrow Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => scrollManual('left')}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors shadow-sm"
            aria-label="Scroll left"
            title="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollManual('right')}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors shadow-sm"
            aria-label="Scroll right"
            title="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Marquee Track Container with subtle fade edges */}
      <div
        ref={scrollContainerRef}
        className={`marquee-container relative w-full overflow-x-auto pb-4 pt-2 no-scrollbar ${
          isPaused ? 'marquee-paused' : ''
        }`}
        style={
          {
            '--marquee-duration': `${Math.max(25, items.length * 6)}s`,
          } as React.CSSProperties
        }
      >
        {/* Left and Right Fade Overlays for seamless visual entrance/exit on desktop */}
        <div className="hidden lg:block pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 dark:from-[#030408] to-transparent z-10" />
        <div className="hidden lg:block pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 dark:from-[#030408] to-transparent z-10" />

        <div className="animate-marquee-rtl flex gap-6 items-stretch">
          {/* Primary Track (interactive, keyboard navigable) */}
          <div className="flex gap-6 shrink-0">
            {repeatedItems.map((cert, index) => (
              <CertificationCard
                key={`primary-${cert.id}-${index}`}
                cert={cert}
                onPreview={onPreview}
                isClone={false}
                className="w-[320px] sm:w-[350px] shrink-0"
              />
            ))}
          </div>

          {/* Cloned Track for continuous seamless loop (cloned elements have tabIndex -1 and aria-hidden) */}
          <div className="flex gap-6 shrink-0" aria-hidden="true">
            {repeatedItems.map((cert, index) => (
              <CertificationCard
                key={`clone-${cert.id}-${index}`}
                cert={cert}
                isClone={true}
                className="w-[320px] sm:w-[350px] shrink-0 pointer-events-none sm:pointer-events-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
