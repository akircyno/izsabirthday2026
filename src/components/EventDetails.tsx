import React from 'react';
import { motion } from 'framer-motion';
import venueSketch from '../assets/place.jpg';

export const EventDetails: React.FC = () => {
  return (
    <section className="w-full bg-[#f7f2ea] text-[#340813] py-16 px-4 border-b border-[#dfa85f]/30">
      <div className="max-w-[420px] mx-auto text-center">
        {/* Script Header */}
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-script text-4xl sm:text-5xl text-[#5c0f1c] mb-4"
        >
          Dearest Friends
        </motion.h2>

        {/* Invitation Message */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-xs uppercase tracking-[0.18em] text-[#521321] leading-relaxed mb-6 font-light"
        >
          I would be delighted to have you celebrate<br />
          my 21st birthday with me.
        </motion.p>

        {/* Celebrant Name: Izsa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mb-8"
        >
          <div className="w-12 h-[1px] bg-[#8b1e2c]/30 mx-auto mb-3" />
          <h3 className="font-serif italic text-3xl sm:text-4xl text-[#6e1327] tracking-wider font-light">
            Izsa
          </h3>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#8b1e2c]/80 mt-1.5 font-cinzel">
            Sunday, October 11, 2026 • 9:00 PM
          </p>
          <div className="w-12 h-[1px] bg-[#8b1e2c]/30 mx-auto mt-3" />
        </motion.div>

        {/* Architectural Venue Sketch */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative my-8 rounded-lg overflow-hidden border border-[#dfa85f]/60 p-2 bg-white shadow-lg"
        >
          <img
            src={venueSketch}
            alt="Viktor Brew + Bar Venue"
            className="w-full h-auto object-cover rounded filter contrast-[1.05] sepia-[15%]"
          />
          <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#8b1e2c]/70" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#8b1e2c]/70" />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#8b1e2c]/70" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#8b1e2c]/70" />
        </motion.div>

        {/* Venue Information */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-1.5"
        >
          <p className="font-serif text-base sm:text-lg font-medium text-[#420914] tracking-wider uppercase">
            Second Floor - Viktor Brew + Bar
          </p>
          <p className="text-xs uppercase tracking-[0.16em] text-[#5e1927] font-light">
            Subic Bay
          </p>
        </motion.div>
      </div>
    </section>
  );
};


