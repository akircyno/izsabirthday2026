import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailOpen } from 'lucide-react';
import envelopeImg from '../assets/envelope-lace.jpg';
import { LetterModal } from './LetterModal';

export const PersonalMessageEnvelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-[#1a040a] via-[#24060d] to-[#170308] text-center border-b border-[#dfa85f]/25">
      <div className="max-w-[420px] mx-auto">
        {/* Section Header */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-cinzel text-[10px] tracking-[0.3em] text-[#dfa85f]/80 uppercase mb-2"
        >
          A Personal Note
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-script text-4xl sm:text-5xl text-[#fce0ad] mb-6"
        >
          From Izsa, With Love
        </motion.h2>

        {/* Clean Lace-Trimmed Envelope Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => setIsOpen(true)}
          className="relative max-w-[360px] mx-auto rounded-2xl overflow-hidden cursor-pointer shadow-[0_20px_45px_rgba(0,0,0,0.6)] border-2 border-[#dfa85f]/60 group bg-[#fffdf9] p-3 sm:p-4"
        >
          <div className="relative w-full overflow-hidden rounded-xl bg-[#fffdf9] flex flex-col items-center justify-center">
            {/* Corner Ornaments */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-[#8b1e2c]/40 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-[#8b1e2c]/40 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-[#8b1e2c]/40 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-[#8b1e2c]/40 pointer-events-none" />

            <img
              src={envelopeImg}
              alt="Lace trimmed personal letter envelope from Izsa"
              className="w-full h-auto object-contain group-hover:scale-103 transition-transform duration-500 py-2 px-1"
            />

            {/* Tap Prompt Button */}
            <div className="mt-2 mb-1 w-full text-center">
              <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#8b1e2c] to-[#a32839] text-[#fff1d6] shadow-md group-hover:brightness-110 transition-all border border-[#dfa85f]/40">
                <MailOpen className="w-3.5 h-3.5 text-[#fce0ad]" />
                <span className="font-cinzel text-xs uppercase tracking-[0.2em] font-medium">
                  Read My Letter
                </span>
              </div>
              <p className="text-[9px] text-[#8b1e2c]/80 tracking-widest mt-1.5 uppercase font-cinzel">
                Tap to unfold letter
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Unfolded Letter Modal */}
      <LetterModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};


