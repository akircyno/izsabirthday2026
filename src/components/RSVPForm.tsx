import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { RSVPData } from '../types';
import { RSVPFields } from './RSVPFields';
import { RSVPSuccessCard } from './RSVPSuccessCard';

interface RSVPFormProps {
  onRSVPSubmitted: (data: RSVPData) => void;
}

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-[#2b0811]/90 border border-[#dfa85f]/30 text-[#f8ede3] text-xs sm:text-sm focus:outline-none focus:border-[#dfa85f] placeholder:text-[#8a6870] font-light transition-colors';
const labelClass =
  'block text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#fce0ad]/90 font-cinzel mb-1.5';

export const RSVPForm: React.FC<RSVPFormProps> = ({ onRSVPSubmitted }) => {
  const [fullName, setFullName] = useState('');
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [guestCount, setGuestCount] = useState<number>(1);
  const [additionalGuests, setAdditionalGuests] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const triggerConfetti = () => {
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#dfa85f', '#ffecc7', '#8b1e2c', '#ffffff'],
    });
  };

  const handleGuestCountChange = (count: number) => {
    setGuestCount(count);
    const needed = Math.max(0, count - 1);
    setAdditionalGuests((prev) => {
      const updated = [...prev];
      while (updated.length < needed) updated.push('');
      return updated.slice(0, needed);
    });
  };

  const handleAdditionalGuestNameChange = (index: number, value: string) => {
    setAdditionalGuests((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (attending === 'yes' && guestCount > 1) {
      const emptyIndex = additionalGuests.findIndex((g) => !g.trim());
      if (emptyIndex !== -1) {
        setErrorMessage(
          `Please enter the full name for Accompanying Guest ${emptyIndex + 2}.`
        );
        return;
      }
    }

    setIsSubmitting(true);
    const submission: RSVPData = {
      fullName: fullName.trim(),
      attending,
      guestCount: attending === 'yes' ? guestCount : 0,
      additionalGuests: attending === 'yes' ? additionalGuests.map((g) => g.trim()) : [],
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem('izsa_21_rsvps') || '[]');
    localStorage.setItem('izsa_21_rsvps', JSON.stringify([...existing, submission]));
    onRSVPSubmitted(submission);
    setIsSubmitting(false);
    setIsSubmitted(true);
    triggerConfetti();
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setAdditionalGuests([]);
    setGuestCount(1);
  };

  return (
    <section id="rsvp-section" className="w-full py-16 px-4 bg-gradient-to-b from-[#170308] via-[#2a0610] to-[#1a040a] text-center border-b border-[#dfa85f]/25">
      <div className="max-w-[420px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-cinzel text-[10px] tracking-[0.3em] text-[#dfa85f]/80 uppercase mb-2"
        >
          Attendance Confirmation
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-script text-4xl sm:text-5xl text-[#fce0ad] mb-2"
        >
          I Look Forward to Seeing You
        </motion.h2>
        <p className="text-[11px] tracking-[0.2em] text-[#fce0ad] font-cinzel uppercase font-semibold mb-2">
          Kindly RSVP from October 4 to 6, 2026
        </p>
        <p className="text-xs text-[#d4c3b3]/85 font-light max-w-sm mx-auto leading-relaxed mb-8">
          Please kindly confirm your attendance between October 4 to 6 so I can finalize our venue & dinner reservation with the exact headcount (number of pax).
        </p>

        {isSubmitted ? (
          <RSVPSuccessCard
            fullName={fullName}
            attending={attending}
            onReset={handleReset}
          />
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-[#22050c]/90 border border-[#dfa85f]/30 shadow-2xl space-y-5 text-left">
            {errorMessage && (
              <div className="p-3 rounded-xl bg-[#8b1e2c]/30 border border-[#ff6b81]/40 flex items-center gap-2 text-xs text-[#ffd2d9]">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-[#ff6b81]" />
                <span>{errorMessage}</span>
              </div>
            )}

            <RSVPFields
              fullName={fullName}
              setFullName={setFullName}
              attending={attending}
              setAttending={setAttending}
              guestCount={guestCount}
              onGuestCountChange={handleGuestCountChange}
              additionalGuests={additionalGuests}
              onAdditionalGuestChange={handleAdditionalGuestNameChange}
              inputClass={inputClass}
              labelClass={labelClass}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#8b1e2c] via-[#a32839] to-[#8b1e2c] hover:brightness-110 text-[#fff1d6] font-cinzel tracking-[0.2em] text-xs uppercase transition-all cursor-pointer flex items-center justify-center gap-2 border border-[#dfa85f]/50 shadow-lg mt-2"
            >
              <Send className="w-3.5 h-3.5 text-[#fce0ad]" />
              <span>Confirm RSVP</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
