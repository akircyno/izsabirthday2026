import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import tmMonogramGold from '../assets/tm-monogram-gold.png';

interface EnvelopeHeroProps {
  onOpen: () => void;
}

export const EnvelopeHero: React.FC<EnvelopeHeroProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenInvitation = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden select-none"
      style={{
        background: `
          radial-gradient(ellipse at 50% 20%, #480c1d 0%, transparent 60%),
          radial-gradient(ellipse at 20% 75%, #300813 0%, transparent 55%),
          radial-gradient(ellipse at 80% 80%, #22050e 0%, transparent 55%),
          linear-gradient(170deg, #2b0710 0%, #150307 45%, #1d050c 75%, #110205 100%)
        `,
      }}
    >
      {/* Velvet drape fabric vertical fold lines & lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${8 + i * 12}%`,
              width: `${24 + (i % 3) * 12}px`,
              background: `linear-gradient(90deg, transparent 0%, rgba(200, 50, 80, 0.12) 30%, rgba(255, 120, 150, 0.08) 50%, rgba(10, 2, 5, 0.35) 100%)`,
              transform: `skewX(${-2 + (i % 4) * 1.2}deg)`,
              filter: 'blur(3px)',
            }}
          />
        ))}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <AnimatePresence mode="wait">
        {!isOpening ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, y: -20 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center w-full max-w-[380px] sm:max-w-[420px] px-6 text-center z-10"
          >
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="font-cinzel text-[9px] sm:text-[10px] tracking-[0.32em] text-[#fce0ad]/85 uppercase mb-3"
            >
              You are invited to the celebration of
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-script text-5xl sm:text-6xl text-white tracking-wide mb-1"
              style={{ textShadow: '0 2px 20px rgba(223, 168, 95, 0.45), 0 0 40px rgba(139, 30, 44, 0.6)' }}
            >
              Trizsa Reign
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="font-serif italic text-sm text-[#fce0ad]/75 tracking-wider mb-8"
            >
              Twenty-First Birthday Celebration
            </motion.p>

            {/* Realistic Luxury Stationery Envelope */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOpenInvitation}
              className="relative w-full max-w-[320px] sm:max-w-[350px] aspect-[1.48/1] cursor-pointer group"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.7)) drop-shadow(0 0 25px rgba(139,30,44,0.35))',
              }}
            >
              <div className="absolute inset-0 rounded-lg bg-[#f9f5ee] border border-[#dfa85f]/50 overflow-hidden shadow-inner">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 350 236"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="flapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fdfaf4" />
                      <stop offset="100%" stopColor="#ede6d8" />
                    </linearGradient>
                    <linearGradient id="sideGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e8dfd0" />
                      <stop offset="100%" stopColor="#f4ede1" />
                    </linearGradient>
                    <radialGradient id="sealGold" cx="35%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#ffecc7" />
                      <stop offset="40%" stopColor="#dca255" />
                      <stop offset="85%" stopColor="#966420" />
                      <stop offset="100%" stopColor="#67410c" />
                    </radialGradient>
                    <filter id="sealShadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000000" floodOpacity="0.45" />
                    </filter>
                  </defs>

                  <rect width="350" height="236" fill="#f4ece0" />
                  <path d="M0 236 L175 125 L350 236 Z" fill="#eae1d2" stroke="rgba(223,168,95,0.25)" strokeWidth="1" />
                  <path d="M0 0 L175 125 L0 236 Z" fill="url(#sideGrad)" stroke="rgba(223,168,95,0.2)" strokeWidth="0.75" />
                  <path d="M350 0 L175 125 L350 236 Z" fill="url(#sideGrad)" stroke="rgba(223,168,95,0.2)" strokeWidth="0.75" />
                  <path d="M0 0 L175 135 L350 0 Z" fill="url(#flapGrad)" stroke="rgba(223,168,95,0.4)" strokeWidth="1.2" />

                  {/* Wax Seal in Center */}
                  <g transform="translate(175, 135)" filter="url(#sealShadow)">
                    <circle r="36" fill="url(#sealGold)" />
                    <circle r="34" fill="none" stroke="rgba(255, 235, 180, 0.4)" strokeWidth="1.5" />
                    <circle r="27" fill="#c48e42" fillOpacity="0.4" />
                    <circle r="26" fill="none" stroke="rgba(110, 70, 15, 0.5)" strokeWidth="1.2" />
                    <image
                      href={tmMonogramGold}
                      x="-18"
                      y="-18"
                      width="36"
                      height="36"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </g>
                </svg>
              </div>
            </motion.div>

            {/* Click to Open CTA */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleOpenInvitation}
              className="mt-8 flex items-center justify-center gap-3 cursor-pointer group bg-transparent border-0 text-[#fce0ad]"
            >
              <span className="inline-block w-8 h-[1px] bg-gradient-to-r from-transparent to-[#dfa85f] transition-all duration-300 group-hover:w-12" />
              <span className="font-cinzel text-xs uppercase tracking-[0.3em] font-medium text-[#fce0ad] group-hover:text-white transition-colors">
                Click to Open
              </span>
              <span className="inline-block w-8 h-[1px] bg-gradient-to-l from-transparent to-[#dfa85f] transition-all duration-300 group-hover:w-12" />
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="opening"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, scale: 1.15 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center gap-4 z-20"
          >
            <motion.div
              animate={{ scale: [0.9, 1.1, 1], rotate: 360 }}
              transition={{ duration: 1.4, ease: 'easeInOut', repeat: Infinity }}
              className="w-14 h-14 rounded-full border-2 border-dashed border-[#dfa85f] flex items-center justify-center p-2.5 bg-[#20040b]/80"
            >
              <img src={tmMonogramGold} alt="TM Monogram" className="w-full h-full object-contain" />
            </motion.div>
            <p className="font-cinzel text-[#fce0ad] tracking-[0.25em] text-xs uppercase">
              Opening Invitation…
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
