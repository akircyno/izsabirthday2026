import React from 'react';
import { motion } from 'framer-motion';
import lettersSketch from '../assets/letters-sketch.jpg';
import giftSketch from '../assets/gift-sketch.jpg';

export const GiftEtiquette: React.FC = () => {
  return (
    <section className="w-full bg-[#fbf8f3] text-[#340813] py-16 px-4 border-b border-[#dfa85f]/30">
      <div className="max-w-[420px] mx-auto text-center">
        {/* Script Header */}
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-script text-4xl sm:text-5xl text-[#5c0f1c] mb-8"
        >
          Wishes & Notes
        </motion.h2>

        <div className="space-y-10">
          {/* Note 1: Presence */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Illustrated sketch illustration */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-3">
              <img
                src={lettersSketch}
                alt="Stacked letters with ribbon"
                className="w-full h-full object-contain mix-blend-multiply filter contrast-[1.05]"
              />
            </div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#521321] font-medium mb-1.5">
              Your Presence is Our Joy
            </p>
            <p className="text-xs text-[#6e2030] leading-relaxed max-w-xs font-light">
              Your presence, prayers, and heartfelt wishes are the most precious gift to celebrate this milestone.
            </p>
          </motion.div>

          <div className="w-16 h-[1px] bg-[#8b1e2c]/20 mx-auto" />

          {/* Note 2: Monetary Gift */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* Illustrated gift sketch */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-3">
              <img
                src={giftSketch}
                alt="Celebration gift box sketch"
                className="w-full h-full object-contain mix-blend-multiply filter contrast-[1.05]"
              />
            </div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#521321] font-medium mb-1.5">
              Monetary Gift
            </p>
            <p className="text-xs text-[#6e2030] leading-relaxed max-w-xs font-light">
              Should you wish to honor Izsa with a gift, a monetary envelope is warmly appreciated to help her begin her 21st chapter.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


