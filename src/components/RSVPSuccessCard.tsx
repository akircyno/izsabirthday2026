import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface RSVPSuccessCardProps {
  fullName: string;
  attending: 'yes' | 'no';
  onReset: () => void;
}

export const RSVPSuccessCard: React.FC<RSVPSuccessCardProps> = ({
  fullName,
  attending,
  onReset,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-8 rounded-2xl bg-[#24060d] border border-[#dfa85f]/40 shadow-xl text-center"
    >
      <div className="w-12 h-12 rounded-full border border-[#dfa85f] flex items-center justify-center mx-auto mb-4 text-[#fce0ad]">
        <Check className="w-6 h-6" />
      </div>
      <h3 className="font-serif italic text-2xl text-[#fce0ad] mb-2">
        RSVP Received
      </h3>
      <p className="text-xs text-[#d4c3b3] font-light leading-relaxed mb-6">
        {attending === 'yes'
          ? `Thank you, ${fullName}! I can't wait to celebrate my 21st birthday with you.`
          : `Thank you for letting me know, ${fullName}. You will be warmly missed!`}
      </p>
      <button
        onClick={onReset}
        className="text-[10px] uppercase font-cinzel tracking-[0.2em] text-[#dfa85f] hover:underline cursor-pointer"
      >
        Submit Another RSVP
      </button>
    </motion.div>
  );
};
