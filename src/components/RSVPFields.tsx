import React from 'react';
import { RSVPAdditionalGuests } from './RSVPAdditionalGuests';

interface RSVPFieldsProps {
  fullName: string;
  setFullName: (val: string) => void;
  attending: 'yes' | 'no';
  setAttending: (val: 'yes' | 'no') => void;
  guestCount: number;
  onGuestCountChange: (count: number) => void;
  additionalGuests: string[];
  onAdditionalGuestChange: (index: number, val: string) => void;
  inputClass: string;
  labelClass: string;
}

export const RSVPFields: React.FC<RSVPFieldsProps> = ({
  fullName,
  setFullName,
  attending,
  setAttending,
  guestCount,
  onGuestCountChange,
  additionalGuests,
  onAdditionalGuestChange,
  inputClass,
  labelClass,
}) => {
  return (
    <>
      <div>
        <label className={labelClass}>Your Full Name *</label>
        <input
          type="text"
          required
          placeholder="e.g. Maria Santos"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Will you be joining us? *</label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setAttending('yes')}
            className={`py-2.5 px-3 rounded-xl border text-xs font-cinzel tracking-wider uppercase cursor-pointer transition-all ${
              attending === 'yes'
                ? 'bg-[#8b1e2c] border-[#dfa85f] text-[#fff1d6] shadow-md font-medium'
                : 'bg-transparent border-[#dfa85f]/25 text-[#d4c3b3]'
            }`}
          >
            Joyfully Accept
          </button>
          <button
            type="button"
            onClick={() => setAttending('no')}
            className={`py-2.5 px-3 rounded-xl border text-xs font-cinzel tracking-wider uppercase cursor-pointer transition-all ${
              attending === 'no'
                ? 'bg-[#4a0d18] border-[#dfa85f] text-[#fff1d6] shadow-md font-medium'
                : 'bg-transparent border-[#dfa85f]/25 text-[#d4c3b3]'
            }`}
          >
            Regretfully Decline
          </button>
        </div>
      </div>

      {attending === 'yes' && (
        <>
          <div>
            <label className={labelClass}>Number of Guests</label>
            <select
              value={guestCount}
              onChange={(e) => onGuestCountChange(Number(e.target.value))}
              className={inputClass}
            >
              <option value={1} className="bg-[#1f050b] text-[#f8ede3]">1 Person (Solo)</option>
              <option value={2} className="bg-[#1f050b] text-[#f8ede3]">2 Persons (You + 1 Guest)</option>
              <option value={3} className="bg-[#1f050b] text-[#f8ede3]">3 Persons (You + 2 Guests)</option>
              <option value={4} className="bg-[#1f050b] text-[#f8ede3]">4 Persons (You + 3 Guests)</option>
            </select>
          </div>

          <RSVPAdditionalGuests
            guestCount={guestCount}
            additionalGuests={additionalGuests}
            onChange={onAdditionalGuestChange}
            inputClass={inputClass}
          />
        </>
      )}
    </>
  );
};
