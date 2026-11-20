import React from 'react';
import { PortfolioCategory, ProjectItem } from '../../types.ts';
import { soundFX } from '../../utils/soundFX.ts';
import { Sparkles, Layers, Box, Cpu, Flame, Disc3 } from 'lucide-react';

interface CategoryTileNavProps {
  categories: { id: PortfolioCategory; label: string; count: number; subtitle: string; icon: React.ReactNode }[];
  selectedCategory: PortfolioCategory;
  onSelectCategory: (cat: PortfolioCategory) => void;
}

export const CategoryTileNav: React.FC<CategoryTileNavProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="space-y-4">
      {/* Category Eyebrow & Guide */}
      <div className="flex items-center justify-between border-b border-[#262525] pb-3">
        <div className="flex items-center gap-2.5 text-[10px] font-mono tracking-[0.25em] text-[#b5b2b2] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34]" />
          <span>PORTFOLIO SECTOR EXPLORATION</span>
          <span aria-hidden="true" className="text-[#525252]">/</span>
          <span>DISCIPLINE ARCHIVE</span>
        </div>
        <span className="text-[10px] font-mono text-[#525252] hidden sm:inline uppercase">
          Select sector to filter gallery
        </span>
      </div>

      {/* Expressive Dimensional Category Panels (Flexible 9-Discipline Grid) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-2.5 sm:gap-3">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                soundFX.playSelect();
                onSelectCategory(cat.id);
              }}
              className={`group relative p-3.5 sm:p-4 rounded-[10px] border text-left transition-all duration-300 flex flex-col justify-between min-h-[96px] ${
                isActive
                  ? 'bg-[#181213] border-[#fe1e34] shadow-[0_0_20px_rgba(254,30,52,0.25)]'
                  : 'bg-[#100f10] border-[#222122] hover:border-[#444] hover:bg-[#151415]'
              }`}
            >
              {/* Top row: Icon & Count */}
              <div className="flex items-center justify-between w-full">
                <span className={`transition-colors ${isActive ? 'text-[#fe1e34]' : 'text-[#737373] group-hover:text-[#fcfcfc]'}`}>
                  {cat.icon}
                </span>

                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-[3px] ${
                    isActive ? 'bg-[#fe1e34] text-[#fcfcfc] font-bold' : 'bg-[#1a1a1a] text-[#8e8d8d]'
                  }`}
                >
                  {cat.count < 10 ? `0${cat.count}` : cat.count}
                </span>
              </div>

              {/* Bottom row: Title & Micro descriptor */}
              <div className="space-y-0.5 pt-2">
                <span
                  className={`block text-xs font-mono uppercase tracking-wide truncate font-semibold transition-colors ${
                    isActive ? 'text-[#fcfcfc]' : 'text-[#b5b2b2] group-hover:text-[#fcfcfc]'
                  }`}
                >
                  {cat.label}
                </span>
                <span className="block text-[9px] font-mono text-[#525252] truncate">
                  {cat.subtitle}
                </span>
              </div>

              {/* Active bottom crimson accent indicator line */}
              {isActive && (
                <div className="absolute -bottom-px left-3 right-3 h-[2px] bg-[#fe1e34] rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
