import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export const CelebrantSpotlight: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 px-4 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#dfa85f]/10 border border-[#dfa85f]/25 mb-4">
          <Heart className="w-3.5 h-3.5 text-[#e5b985] fill-[#e5b985]/30" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#e5b985]">
            The Celebrant
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#fce0ad] font-normal tracking-wide mb-2">
          Trizsa Reign
        </h2>
        
        <p className="font-script text-2xl sm:text-3xl text-[#d4a373] mb-8">
          Chapter 21 • A Night to Remember
        </p>

        {/* Elegant Portrait Frame */}
        <div className="relative mx-auto w-64 h-80 sm:w-72 sm:h-96 rounded-3xl p-2.5 bg-gradient-to-b from-[#dfa85f]/40 via-[#8b1e2c]/30 to-[#dfa85f]/40 red-glow shadow-2xl">
          <div className="w-full h-full rounded-2xl overflow-hidden bg-[#1f060b] border border-[#dfa85f]/30 flex flex-col items-center justify-center relative group">
            {/* Elegant placeholder when picture is to be followed up */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#120306] via-transparent to-transparent z-10" />
            
            <div className="z-20 text-center p-6 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#360d16] border border-[#dfa85f]/50 flex items-center justify-center mb-4 gold-glow">
                <Sparkles className="w-8 h-8 text-[#fce0ad] animate-pulse" />
              </div>
              <p className="font-serif text-xl text-[#fce0ad] font-medium tracking-wider mb-1">
                Trizsa Reign
              </p>
              <span className="text-xs uppercase tracking-[0.2em] text-[#d4c3b3]/80">
                21st Birthday Queen
              </span>
              <p className="text-[11px] text-[#e5b985]/70 italic mt-4 max-w-[180px] leading-relaxed">
                "Here's to a lifetime of love, laughter, and unforgettable moments."
              </p>
            </div>

            {/* Corner Decorative Accents */}
            <div className="absolute top-3 left-3 text-[#dfa85f]/60 text-xs">✦</div>
            <div className="absolute top-3 right-3 text-[#dfa85f]/60 text-xs">✦</div>
            <div className="absolute bottom-3 left-3 text-[#dfa85f]/60 text-xs">✦</div>
            <div className="absolute bottom-3 right-3 text-[#dfa85f]/60 text-xs">✦</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
