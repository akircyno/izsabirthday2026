import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Countdown: React.FC = () => {
  // Target Date: October 11, 2026, 9:00 PM (21:00)
  const targetDate = new Date('2026-10-11T21:00:00+08:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-12 px-4">
      <div className="text-center mb-6">
        <span className="text-xs uppercase tracking-[0.3em] text-[#e5b985]/80 font-medium">
          Counting Down To The Magic
        </span>
      </div>

      <div className="grid grid-cols-4 gap-3 sm:gap-6">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl glass-card border border-[#dfa85f]/30 hover:border-[#dfa85f]/60 transition-all duration-300 group shadow-lg"
          >
            <span className="font-serif text-2xl sm:text-5xl font-semibold text-[#fce0ad] tracking-wider mb-1 group-hover:scale-105 transition-transform duration-300">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.2em] text-[#d4c3b3] font-light">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
