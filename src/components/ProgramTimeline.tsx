import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export const ProgramTimeline: React.FC = () => {
  const targetDate = new Date('2026-10-11T20:00:00+08:00').getTime();

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
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  const timelineItems = [
    {
      time: '7:45 PM',
      title: 'Guests Arrival',
      detail: 'Please arrive 15 minutes early',
    },
    {
      time: '8:00 PM',
      title: 'Dinner Celebration',
      detail: 'Start of dinner & program festivities',
    },
    {
      time: '12:00 AM',
      title: 'After Party',
      detail: 'Music, toasts & late night revelry',
    },
  ];

  return (
    <section className="relative w-full py-16 px-4 bg-gradient-to-b from-[#170308] via-[#24060d] to-[#1a040a] text-center border-b border-[#dfa85f]/25">
      <div className="max-w-[420px] mx-auto">
        {/* Scalloped Lace / Doily Styled Card */}
        <div className="relative px-6 sm:px-8 py-10 rounded-2xl bg-[#faf6ef] text-[#340813] shadow-[0_20px_60px_rgba(0,0,0,0.6)] border-4 border-double border-[#d4a373]/50">
          
          {/* Header: Celebration Timeline */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-script text-4xl sm:text-5xl text-[#5c0f1c] mb-1"
          >
            Celebration Timeline
          </motion.h2>

          <p className="text-[10px] uppercase tracking-[0.25em] text-[#8b1e2c]/75 font-cinzel mb-8">
            Sunday, October 11, 2026
          </p>

          {/* Timeline List */}
          <div className="space-y-6 mb-10 text-center">
            {timelineItems.map((item, idx) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="font-serif italic text-2xl sm:text-3xl text-[#8b1e2c] font-light leading-none">
                  {item.time}
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-[#4a1020] font-medium mt-1.5">
                  {item.title}
                </span>
                <span className="text-[11px] text-[#7a2839] font-light mt-0.5 italic">
                  {item.detail}
                </span>
                {idx < timelineItems.length - 1 && (
                  <div className="w-8 h-[1px] bg-[#8b1e2c]/20 my-3" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Divider with Clock Icon */}
          <div className="relative flex items-center justify-center my-8">
            <div className="w-full h-[1px] bg-[#8b1e2c]/20" />
            <span className="px-3 bg-[#faf6ef] text-[#8b1e2c]">
              <Clock className="w-4 h-4" />
            </span>
            <div className="w-full h-[1px] bg-[#8b1e2c]/20" />
          </div>

          {/* Live Countdown section */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#8b1e2c]/75 font-cinzel mb-4">
              Counting Down To The Celebration
            </p>

            <div className="grid grid-cols-4 gap-2 bg-[#f3ede1] rounded-xl p-3 border border-[#dfa85f]/30">
              {timeUnits.map((unit) => (
                <div key={unit.label} className="flex flex-col items-center">
                  <span className="font-serif text-2xl sm:text-3xl font-medium text-[#5c0f1c] leading-tight">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.2em] text-[#8b1e2c]/70 font-cinzel">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

