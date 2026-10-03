import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles } from 'lucide-react';


interface EnvelopeHeroProps {
  onOpen: () => void;
}

export const EnvelopeHero: React.FC<EnvelopeHeroProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#120306] overflow-hidden p-4">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#8b1e2c]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-[#dfa85f]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating sparkles background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#fce0ad]/40"
            initial={{
              x: `${(i * 9) % 100}vw`,
              y: `${(i * 13) % 100}vh`,
              scale: 0.5,
              opacity: 0.2,
            }}
            animate={{
              y: [`${(i * 13) % 100}vh`, `${((i * 13 + 30) % 100)}vh`],
              opacity: [0.2, 0.7, 0.2],
              scale: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 5 + (i % 5),
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md mx-auto text-center"
      >
        {/* Envelope Container Card */}
        <div className="relative p-8 sm:p-10 rounded-3xl glass-card border border-[#dfa85f]/40 red-glow shadow-2xl">
          {/* Top Vintage Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dfa85f]/10 border border-[#dfa85f]/30 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#fce0ad]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#fce0ad] font-cinzel">
              Exclusive Invitation
            </span>
          </div>

          <h2 className="text-xs uppercase tracking-[0.35em] text-[#d4c3b3] mb-2 font-medium">
            You Are Cordially Invited To Celebrate
          </h2>

          <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-wide gold-gradient-text my-4">
            Trizsa Reign
          </h1>

          <p className="font-script text-3xl sm:text-4xl text-[#f3d2c1] mb-6">
            Turning 21
          </p>

          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#dfa85f]/60 to-transparent mx-auto my-6" />

          <p className="text-xs text-[#d4c3b3]/80 tracking-widest uppercase mb-8">
            An Intimate Evening of Love & Celebration
            <br />
            <span className="text-[#fce0ad] font-medium mt-1 inline-block">
              October 11, 2026 • 9:00 PM
            </span>
          </p>

          {/* Interactive Wax Seal / Open Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleOpenInvitation}
            disabled={isOpening}
            className="group relative w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-[#8b1e2c] via-[#a32839] to-[#8b1e2c] border border-[#fce0ad]/40 text-[#fff] font-cinzel tracking-[0.2em] text-sm uppercase shadow-xl hover:shadow-[#8b1e2c]/50 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden cursor-pointer"
          >
            {/* Shimmer light effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <Mail className="w-4 h-4 text-[#fce0ad] group-hover:rotate-12 transition-transform duration-300" />
            <span>{isOpening ? 'Opening Invitation...' : 'Open Invitation'}</span>
            <Sparkles className="w-4 h-4 text-[#fce0ad]" />
          </motion.button>

          <p className="text-[11px] text-[#9c897f] mt-4 tracking-wider">
            Tap to open and play background music 🎵
          </p>
        </div>
      </motion.div>
    </div>
  );
};
