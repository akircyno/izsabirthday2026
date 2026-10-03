import { useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { RSVPData } from '../types';

interface RSVPFormProps {
  onRSVPSubmitted: (data: RSVPData) => void;
}

export const RSVPForm = ({ onRSVPSubmitted }: RSVPFormProps) => {
  const [formData, setFormData] = useState<RSVPData>({
    fullName: '',
    attending: 'yes',
    guestCount: 1,
    dietaryRestrictions: '',
    birthdayWish: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#dfa85f', '#fce0ad', '#8b1e2c', '#ffffff'],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    setIsSubmitting(true);
    const submission: RSVPData = {
      ...formData,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem('trizsa_21_rsvps') || '[]');
    localStorage.setItem('trizsa_21_rsvps', JSON.stringify([...existing, submission]));

    onRSVPSubmitted(submission);
    setIsSubmitting(false);
    setIsSubmitted(true);
    triggerConfetti();
  };

  return (
    <section id="rsvp-section" className="py-16 px-4 max-w-xl mx-auto">
      <div className="text-center mb-8">
        <span className="text-xs uppercase tracking-[0.3em] text-[#e5b985]/80 font-medium">
          Your Presence is Our Gift
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#fce0ad] font-normal tracking-wide mt-2">
          Kindly RSVP
        </h2>
        <p className="text-xs sm:text-sm text-[#d4c3b3] mt-2 font-light">
          Please let us know if you will be able to join us by October 5, 2026.
        </p>
        <div className="w-12 h-[1px] bg-[#dfa85f]/40 mx-auto mt-4" />
      </div>

      <div className="p-6 sm:p-10 rounded-3xl glass-card border border-[#dfa85f]/40 red-glow shadow-2xl">
        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#dfa85f]/20 border border-[#dfa85f] flex items-center justify-center mx-auto mb-4 gold-glow">
              <Check className="w-8 h-8 text-[#fce0ad]" />
            </div>
            <h3 className="font-serif text-2xl text-[#fce0ad] mb-2">
              Thank You, {formData.fullName}!
            </h3>
            <p className="text-sm text-[#d4c3b3] mb-6 font-light">
              {formData.attending === 'yes'
                ? 'Your response has been recorded! See you on October 11!'
                : 'Thank you for letting us know. You will be warmly missed!'}
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs uppercase text-[#e5b985] underline cursor-pointer"
            >
              Submit another response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/50 flex items-center gap-2 text-xs text-red-200">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#fce0ad] font-medium mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Maria Santos"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#1f060b]/80 border border-[#dfa85f]/30 text-[#f8ede3] text-sm focus:outline-none focus:border-[#dfa85f]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#fce0ad] font-medium mb-1.5">
                Will you be attending? *
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: 'yes' })}
                  className={`py-3 px-3 rounded-xl border text-xs sm:text-sm font-medium cursor-pointer ${
                    formData.attending === 'yes'
                      ? 'bg-[#8b1e2c] border-[#dfa85f] text-white shadow-lg red-glow'
                      : 'bg-[#1f060b]/60 border-white/10 text-[#d4c3b3]'
                  }`}
                >
                  Joyfully Accepts
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: 'no' })}
                  className={`py-3 px-3 rounded-xl border text-xs sm:text-sm font-medium cursor-pointer ${
                    formData.attending === 'no'
                      ? 'bg-[#3b1218] border-[#dfa85f] text-white shadow-lg'
                      : 'bg-[#1f060b]/60 border-white/10 text-[#d4c3b3]'
                  }`}
                >
                  Regretfully Declines
                </button>
              </div>
            </div>

            {formData.attending === 'yes' && (
              <>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#fce0ad] font-medium mb-1.5">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1f060b]/80 border border-[#dfa85f]/30 text-[#f8ede3] text-sm focus:outline-none focus:border-[#dfa85f]"
                  >
                    <option value={1}>1 Person</option>
                    <option value={2}>2 Persons (With +1)</option>
                    <option value={3}>3 Persons</option>
                    <option value={4}>4 Persons</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#fce0ad] font-medium mb-1.5">
                    Dietary Restrictions (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Seafood allergy, Vegetarian"
                    value={formData.dietaryRestrictions}
                    onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1f060b]/80 border border-[#dfa85f]/30 text-[#f8ede3] text-sm focus:outline-none focus:border-[#dfa85f]"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#fce0ad] font-medium mb-1.5">
                Message or Birthday Wish (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Leave a sweet greeting for Trizsa..."
                value={formData.birthdayWish}
                onChange={(e) => setFormData({ ...formData, birthdayWish: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#1f060b]/80 border border-[#dfa85f]/30 text-[#f8ede3] text-sm focus:outline-none focus:border-[#dfa85f] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#8b1e2c] via-[#ab283b] to-[#8b1e2c] border border-[#dfa85f]/50 text-white font-cinzel tracking-[0.2em] text-sm uppercase shadow-xl hover:shadow-[#8b1e2c]/60 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-[#fce0ad]" />
              <span>Confirm RSVP</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
