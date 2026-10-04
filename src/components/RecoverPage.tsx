import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2, Heart } from 'lucide-react';

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyXLYSxrikd2zC2hPJ19eC8O82rnUTEffWdO3RXBjWYUxoCBIXB0FzG4gH7ikw2ihCupw/exec';

const RSVP_KEYS = ['izsa_21_rsvps', 'trizsa_21_rsvps', 'rsvp_responses'];
const WISH_KEYS = ['izsa_21_wishes', 'trizsa_21_wishes', 'izsa_21_wishes_cache'];

function readAll<T>(keys: string[]): T[] {
  const seen = new Set<string>();
  const results: T[] = [];
  for (const key of keys) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      const parsed = JSON.parse(raw);
      const arr: T[] = Array.isArray(parsed) ? parsed : [parsed];
      for (const item of arr) {
        const id = (item as Record<string, string>).id || JSON.stringify(item);
        if (!seen.has(id)) { seen.add(id); results.push(item); }
      }
    } catch { /* skip corrupted keys */ }
  }
  return results;
}

type Status = 'loading' | 'sending' | 'done' | 'empty';

export function RecoverPage() {
  const [status, setStatus] = useState<Status>('loading');
  const [counts, setCounts] = useState({ rsvps: 0, wishes: 0 });

  useEffect(() => {
    const run = async () => {
      setStatus('loading');
      await new Promise(r => setTimeout(r, 800));

      const rsvps = readAll<Record<string, unknown>>(RSVP_KEYS);
      const wishes = readAll<Record<string, unknown>>(WISH_KEYS)
        .filter(w => w.message || w.birthdayWish);

      if (rsvps.length === 0 && wishes.length === 0) { setStatus('empty'); return; }

      setStatus('sending');
      setCounts({ rsvps: rsvps.length, wishes: wishes.length });
      const sends: Promise<unknown>[] = [];

      for (const r of rsvps) {
        sends.push(fetch(APPS_SCRIPT_URL, {
          method: 'POST', mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'submitRSVP',
            id: r.id || Date.now().toString(),
            fullName: r.fullName || r.name || 'Unknown Guest',
            attending: r.attending || 'yes',
            guestCount: r.guestCount || 1,
            additionalGuests: r.additionalGuests || [],
            submittedAt: r.submittedAt || r.timestamp || new Date().toISOString(),
            recoveredAt: new Date().toISOString(),
          }),
        }).catch(() => {}));
      }

      for (const w of wishes) {
        const rawDate = String(w.date || w.submittedAt || '');
        const niceDate = rawDate
          ? new Date(rawDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
          : new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        sends.push(fetch(APPS_SCRIPT_URL, {
          method: 'POST', mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'addWish',
            id: w.id || Date.now().toString(),
            name: w.name || 'Anonymous',
            message: w.message || w.birthdayWish || '',
            date: niceDate,
            recoveredAt: new Date().toISOString(),
          }),
        }).catch(() => {}));
      }

      await Promise.allSettled(sends);
      setStatus('done');
    };
    run();
  }, []);

  return (
    <div className="min-h-screen bg-[#120306] flex items-center justify-center px-6">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8b1e2c]/15 rounded-full blur-[140px] pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-[380px] w-full text-center space-y-6"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-20 h-20 rounded-full border-2 border-[#dfa85f]/50 flex items-center justify-center bg-[#22050c]/80 shadow-xl">
            {(status === 'loading' || status === 'sending') && <Loader2 className="w-8 h-8 text-[#dfa85f] animate-spin" />}
            {status === 'done'  && <CheckCircle className="w-8 h-8 text-[#7ed87e]" />}
            {status === 'empty' && <Heart className="w-8 h-8 text-[#dfa85f]" />}
          </div>
        </motion.div>

        <div className="space-y-3">
          <p className="font-cinzel text-[10px] tracking-[0.35em] text-[#dfa85f]/70 uppercase">
            Izsa's 21st Birthday
          </p>

          {(status === 'loading' || status === 'sending') && (
            <>
              <h1 className="font-script text-4xl text-[#fce0ad]">
                {status === 'loading' ? 'One moment…' : 'Sending…'}
              </h1>
              <p className="text-xs text-[#d4c3b3]/70 font-light leading-relaxed">
                Saving your response to the celebration records.
              </p>
            </>
          )}

          {status === 'done' && (
            <>
              <h1 className="font-script text-4xl text-[#fce0ad]">Thank You!</h1>
              <p className="text-xs text-[#d4c3b3]/80 font-light leading-relaxed">
                {counts.rsvps > 0 && counts.wishes > 0 && 'Your RSVP and birthday wish have been saved to the celebration archive.'}
                {counts.rsvps > 0 && counts.wishes === 0 && 'Your RSVP has been confirmed and saved.'}
                {counts.rsvps === 0 && counts.wishes > 0 && 'Your birthday wish has been saved.'}
              </p>
              <div className="pt-4">
                <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#8b1e2c] to-[#a32839] text-[#fff1d6] font-cinzel text-xs uppercase tracking-[0.2em] border border-[#dfa85f]/40 shadow-md hover:brightness-110 transition-all">
                  Back to Invitation
                </a>
              </div>
            </>
          )}

          {status === 'empty' && (
            <>
              <h1 className="font-script text-4xl text-[#fce0ad]">All Good!</h1>
              <p className="text-xs text-[#d4c3b3]/70 font-light leading-relaxed">
                No previous response found on this device. If you haven't RSVP'd yet, you can do so from the invitation.
              </p>
              <div className="pt-4">
                <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#8b1e2c] to-[#a32839] text-[#fff1d6] font-cinzel text-xs uppercase tracking-[0.2em] border border-[#dfa85f]/40 shadow-md hover:brightness-110 transition-all">
                  View Invitation
                </a>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
