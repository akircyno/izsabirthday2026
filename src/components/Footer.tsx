import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 px-4 text-center border-t border-white/10 bg-[#0d0205]">
      <div className="max-w-md mx-auto space-y-4">
        <div className="flex items-center justify-center gap-2 text-[#dfa85f]">
          <Sparkles className="w-4 h-4 text-[#fce0ad]" />
          <span className="font-serif text-lg tracking-wider text-[#fce0ad]">
            Trizsa Reign @ 21
          </span>
          <Sparkles className="w-4 h-4 text-[#fce0ad]" />
        </div>

        <p className="text-xs text-[#d4c3b3]/80 font-light">
          We can't wait to share this unforgettable night with you.
        </p>

        <div className="pt-2">
          <p className="text-[11px] text-[#e5b985]/70 tracking-wider inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1f060b] border border-[#dfa85f]/20">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-[#ff6b81] fill-[#ff6b81]" />
            <span>for Trizsa Reign's 21st Birthday Celebration ✨</span>
          </p>
        </div>


        <p className="text-[10px] text-[#6e5f58] tracking-widest uppercase pt-2">
          October 11, 2026 • Subic
        </p>
      </div>
    </footer>
  );
};
