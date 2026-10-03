import React from 'react';
import { motion } from 'framer-motion';
import { Ban } from 'lucide-react';


export const DressCode: React.FC = () => {
  const allowedColors = [
    { name: 'White', colorHex: '#FFFFFF', desc: 'Crisp & Pure' },
    { name: 'Beige / Champagne', colorHex: '#E8D8C8', desc: 'Warm & Elegant' },
    { name: 'Wine / Red', colorHex: '#8B1E2C', desc: 'Bold & Romantic' },
  ];

  return (
    <section className="relative py-12 sm:py-16 px-4 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-[#e5b985]/80 font-medium">
          Attire Guide
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#fce0ad] font-normal tracking-wide mt-2">
          Dress Code & Palette
        </h2>
        <p className="text-xs sm:text-sm text-[#d4c3b3] mt-2 max-w-md mx-auto font-light">
          We would love to see you in our celebration colors. Semi-formal / Elegant dinner attire.
        </p>
        <div className="w-12 h-[1px] bg-[#dfa85f]/40 mx-auto mt-4 mb-8" />

        {/* Swatches Container */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-xl mx-auto mb-8">
          {allowedColors.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-4 rounded-2xl glass-card border border-[#dfa85f]/25 flex flex-col items-center group hover:border-[#dfa85f]/60 transition-all shadow-md"
            >
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white/40 shadow-inner mb-3 group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: item.colorHex }}
              />
              <span className="font-serif text-sm sm:text-base text-[#fce0ad] font-medium">
                {item.name}
              </span>
              <span className="text-[10px] sm:text-xs text-[#d4c3b3]/70 font-light mt-0.5">
                {item.desc}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Strictly No Black Warning Banner */}
        <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#2a0408]/90 border border-[#c93b4d]/50 red-glow text-left max-w-md mx-auto">
          <div className="p-2 rounded-xl bg-[#8b1e2c]/40 text-[#ff808f] shrink-0">
            <Ban className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-semibold text-[#ffb3ba] tracking-wide">
              Kindly Note: Strictly No Black
            </p>
            <p className="text-[11px] text-[#d4c3b3]/80 mt-0.5">
              Please avoid wearing black attire to keep the ambiance warm and vibrant.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
