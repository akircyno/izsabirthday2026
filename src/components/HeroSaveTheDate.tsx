import React from 'react';
import { motion } from 'framer-motion';

export const HeroSaveTheDate: React.FC = () => {
  return (
    <section className="relative w-full pt-16 pb-14 px-4 text-center overflow-hidden bg-gradient-to-b from-[#2d0711] via-[#20040b] to-[#170308] border-b border-[#dfa85f]/25">
      {/* Subtle velvet ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[360px] h-[360px] bg-[#8b1e2c]/25 rounded-full blur-[90px] pointer-events-none" />

      {/* Luxury Gold Framed Card */}
      <div className="max-w-[420px] mx-auto relative px-6 py-10 rounded-2xl border border-[#dfa85f]/30 bg-[#24060d]/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        {/* Corner Accents */}
        <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t border-l border-[#dfa85f]/60" />
        <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t border-r border-[#dfa85f]/60" />
        <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b border-l border-[#dfa85f]/60" />
        <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b border-r border-[#dfa85f]/60" />

        {/* Save the Date in Sweeping Calligraphy */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-script text-4xl sm:text-5xl text-[#fce0ad] mb-6 tracking-wide drop-shadow-md"
        >
          Save the Date
        </motion.p>

        {/* Monogram + Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="my-4 flex flex-col items-center gap-1"
        >
          {/* Cursive T monogram */}
          <span className="font-script text-8xl text-[#fce0ad] select-none leading-none filter drop-shadow-[0_2px_14px_rgba(223,168,95,0.8)]">
            T
          </span>

          {/* Script Name */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-script text-4xl sm:text-5xl text-white tracking-wide mb-1"
            style={{ textShadow: '0 2px 20px rgba(223,168,95,0.4)' }}
          >
            Trizsa Reign
          </motion.h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-cinzel text-[10px] tracking-[0.25em] text-[#e5b985] uppercase mb-4"
        >
          My Twenty-First Birthday
        </motion.p>

        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#dfa85f]/70 to-transparent mx-auto mb-4" />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-1"
        >
          <p className="font-serif text-lg sm:text-xl tracking-[0.2em] text-[#fce0ad] font-light">
            10 / 11 / 2026
          </p>
          <p className="text-[10px] tracking-[0.26em] text-[#d4c3b3]/80 uppercase font-light">
            Sunday • 8:00 PM • Subic Bay
          </p>
        </motion.div>
      </div>
    </section>
  );
};

