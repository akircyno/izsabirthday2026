import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-14 px-4 text-center bg-[#0c0204] text-[#d4c3b3]">
      <div className="max-w-[420px] mx-auto space-y-4">
        {/* Monogram / Crest */}
        <div className="w-12 h-12 rounded-full border border-[#dfa85f]/40 mx-auto flex items-center justify-center bg-[#1a0409]">
          <span className="font-script text-3xl text-[#fce0ad] select-none filter drop-shadow-[0_1px_6px_rgba(223,168,95,0.6)]">
            T
          </span>
        </div>

        <p className="font-script text-3xl sm:text-4xl text-[#fce0ad]">
          Izsa
        </p>

        <p className="text-xs text-[#d4c3b3]/80 font-light max-w-xs mx-auto leading-relaxed">
          Thank you for being part of my unforgettable 21st milestone celebration.
        </p>

        <div className="w-16 h-[1px] bg-[#dfa85f]/30 mx-auto pt-1" />

        <p className="text-[10px] uppercase tracking-[0.28em] text-[#dfa85f]/70 font-cinzel">
          October 11, 2026 • Subic Bay
        </p>
      </div>
    </footer>
  );
};

