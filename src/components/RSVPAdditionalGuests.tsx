import React from 'react';
import { Users } from 'lucide-react';

interface RSVPAdditionalGuestsProps {
  guestCount: number;
  additionalGuests: string[];
  onChange: (index: number, value: string) => void;
  inputClass: string;
}

export const RSVPAdditionalGuests: React.FC<RSVPAdditionalGuestsProps> = ({
  guestCount,
  additionalGuests,
  onChange,
  inputClass,
}) => {
  if (guestCount <= 1) return null;

  return (
    <div className="p-4 rounded-xl bg-[#1b0308]/70 border border-[#dfa85f]/25 space-y-3.5">
      <div className="flex items-center gap-2 text-[#fce0ad]">
        <Users className="w-3.5 h-3.5 text-[#dfa85f]" />
        <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] font-medium">
          Accompanying Guest Names
        </span>
      </div>

      {Array.from({ length: guestCount - 1 }).map((_, idx) => (
        <div key={idx}>
          <label className="block text-[9px] uppercase tracking-[0.18em] text-[#d4c3b3]/85 font-cinzel mb-1">
            Guest {idx + 2} Full Name *
          </label>
          <input
            type="text"
            required
            placeholder={`e.g. Full Name of Guest ${idx + 2}`}
            value={additionalGuests[idx] || ''}
            onChange={(e) => onChange(idx, e.target.value)}
            className={inputClass}
          />
        </div>
      ))}
    </div>
  );
};
