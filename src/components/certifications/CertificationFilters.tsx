import React from 'react';
import { getCategoryIcon } from './CertificationCard';

interface CertificationFiltersProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  categoryCounts: Record<string, number>;
}

export const CertificationFilters: React.FC<CertificationFiltersProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  return (
    <div
      role="tablist"
      aria-label="Filter certificates by domain"
      className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white/90 dark:bg-[#0b0e18]/90 border border-slate-200 dark:border-white/10 rounded-2xl backdrop-blur-md shadow-sm max-w-full overflow-x-auto"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;
        const count = categoryCounts[category] || 0;

        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(category)}
            className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              isActive
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20 scale-[1.02]'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            {category !== 'All' && (
              <span className={isActive ? 'brightness-200' : ''}>
                {getCategoryIcon(category)}
              </span>
            )}
            <span>{category}</span>
            <span
              className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                isActive
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
