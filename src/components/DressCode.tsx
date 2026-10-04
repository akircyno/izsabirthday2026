import React from 'react';
import { motion } from 'framer-motion';

export const DressCode: React.FC = () => {
  const allowedColors = [
    { name: 'Pure White', colorHex: '#FFFFFF', border: 'border-neutral-300' },
    { name: 'Champagne / Beige', colorHex: '#E8D9C5', border: 'border-[#dfa85f]/40' },
    { name: 'Velvet Wine', colorHex: '#8B1E2C', border: 'border-[#5c0f1c]/40' },
  ];

  return (
    <section className="w-full bg-[#f7f2ea] text-[#340813] py-16 px-4 border-b border-[#dfa85f]/30">
      <div className="max-w-[420px] mx-auto text-center">
        {/* Script Header */}
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-script text-4xl sm:text-5xl text-[#5c0f1c] mb-3"
        >
          Dress Code
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-xs uppercase tracking-[0.18em] text-[#5e1927] leading-relaxed mb-8 max-w-xs mx-auto font-light"
        >
          Semi-formal or elegant dinner attire in harmony with our palette.
        </motion.p>

        {/* Color Palette Swatches */}
        <div className="flex justify-center items-center gap-6 sm:gap-8 mb-10">
          {allowedColors.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center gap-2.5"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border shadow-md transition-transform hover:scale-105 ${item.border}`}
                style={{ backgroundColor: item.colorHex }}
              />
              <span className="text-[11px] sm:text-xs text-[#420914] font-serif tracking-wider text-center font-medium max-w-[85px] leading-tight">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Strictly No Black (Seamless Minimal Typography without container box) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-sm mx-auto text-center pt-2"
        >
          <div className="w-12 h-[1px] bg-[#8b1e2c]/25 mx-auto mb-3" />
          <p className="font-cinzel text-xs font-semibold text-[#8b1e2c] uppercase tracking-[0.25em] mb-1.5">
            Strictly No Black
          </p>
          <p className="text-xs text-[#5c1322] leading-relaxed font-light px-2">
            We kindly ask our guests to refrain from wearing black so the evening ambiance stays warm, cohesive, and luminous.
          </p>
          <div className="w-12 h-[1px] bg-[#8b1e2c]/25 mx-auto mt-3" />
        </motion.div>
      </div>
    </section>
  );
};



