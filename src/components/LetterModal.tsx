import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const LETTER_PARAGRAPHS = [
  'Dear Friends,',
  'Turning 21 is a special milestone, and as I step into this new chapter, I am overwhelmed with gratitude for each of you who has been part of my life.',
  'Every memory, conversation, and laugh we have shared has shaped who I am today. Having your love and support means more to me than words can say.',
  'For my 21st birthday, my only wish is to celebrate together with good food, great music, and the people closest to my heart.',
  'I cannot wait to celebrate this night with you.',
];

interface LetterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LetterModal: React.FC<LetterModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-[440px] max-h-[85vh] overflow-y-auto rounded-2xl bg-[#faf6ef] text-[#340813] p-8 sm:p-10 shadow-2xl border-2 border-[#dfa85f]/60 z-10 text-left"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#8b1e2c]/10 text-[#8b1e2c] flex items-center justify-center hover:bg-[#8b1e2c] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-6">
              <p className="font-cinzel text-[10px] uppercase tracking-[0.3em] text-[#8b1e2c]">
                Personal Letter
              </p>
              <h3 className="font-script text-3xl sm:text-4xl text-[#5c0f1c] mt-1">
                A Milestone Celebration
              </h3>
              <div className="w-16 h-[1px] bg-[#8b1e2c]/30 mx-auto mt-3" />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#4a1020] font-light leading-relaxed">
              {LETTER_PARAGRAPHS.map((p, i) => (
                <p key={i} className={i === 0 ? 'font-serif italic font-medium text-base text-[#5c0f1c]' : ''}>
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#8b1e2c]/20 text-right">
              <p className="font-script text-2xl text-[#8b1e2c]">With love,</p>
              <p className="font-serif text-lg text-[#5c0f1c] font-medium tracking-wide">Izsa</p>
              <p className="font-cinzel text-[9px] uppercase tracking-[0.2em] text-[#8b1e2c]/70 mt-1">
                October 11, 2026
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
