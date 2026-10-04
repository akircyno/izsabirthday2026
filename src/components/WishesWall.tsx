import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send, Loader2, RefreshCw } from 'lucide-react';
import type { GuestWish } from '../types';

// Safely format any date string — avoids showing raw GMT strings from Sheets
function formatWishDate(raw: string): string {
  if (!raw || raw === 'Just now') return raw;
  try {
    const d = new Date(raw);
    if (isNaN(d.getTime())) return raw; // if unparseable, return as-is
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return raw;
  }
}

// Google Apps Script Web App — doGet returns all wishes, doPost adds a new one
const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyXLYSxrikd2zC2hPJ19eC8O82rnUTEffWdO3RXBjWYUxoCBIXB0FzG4gH7ikw2ihCupw/exec';

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-[#2b0811]/90 border border-[#dfa85f]/30 text-[#f8ede3] text-xs sm:text-sm focus:outline-none focus:border-[#dfa85f] placeholder:text-[#8a6870] font-light transition-colors';

export const WishesWall: React.FC = () => {
  const [wishes, setWishes] = useState<GuestWish[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [loadError, setLoadError] = useState(false);

  // ── Fetch all wishes from Google Sheets via Apps Script ──────────────────
  const fetchWishes = useCallback(async () => {
    setIsLoading(true);
    setLoadError(false);
    try {
      const res = await fetch(`${APPS_SCRIPT_URL}?action=getWishes`, {
        method: 'GET',
        mode: 'cors',
      });
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      if (data.success && Array.isArray(data.wishes)) {
        setWishes(data.wishes);
        localStorage.setItem('izsa_21_wishes_cache', JSON.stringify(data.wishes));
      }
    } catch {
      // Fall back to local cache if network fails
      const cache = localStorage.getItem('izsa_21_wishes_cache');
      if (cache) {
        try { setWishes(JSON.parse(cache)); } catch { /* ignore */ }
      }
      setLoadError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => { fetchWishes(); }, [fetchWishes]);

  // ── Submit a new wish ─────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setIsSubmitting(true);

    const newWish: GuestWish = {
      id: Date.now().toString(),
      name: name.trim() || 'Anonymous',
      message: message.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    };

    // Optimistically show in UI immediately
    setWishes((prev) => [newWish, ...prev]);
    setName('');
    setMessage('');
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 3000);

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'addWish',
          id: newWish.id,
          name: newWish.name,
          message: newWish.message,
          date: new Date().toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric',
          }),
        }),
      });
      // Re-fetch after a short delay to get server-confirmed list
      setTimeout(() => fetchWishes(), 2500);
    } catch {
      console.warn('Could not sync wish to Google Sheets');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleLike = (id: string) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-[#1a040a] via-[#24060d] to-[#120306] text-center border-b border-[#dfa85f]/25">
      <div className="max-w-[420px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-cinzel text-[10px] tracking-[0.3em] text-[#dfa85f]/80 uppercase mb-2"
        >
          Celebration Guestbook
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-script text-4xl sm:text-5xl text-[#fce0ad] mb-2"
        >
          Wishes for Izsa
        </motion.h2>
        <p className="text-xs text-[#d4c3b3]/75 font-light mb-8">
          Leave a message or greeting for my 21st birthday.
        </p>

        {/* ── Input Form ──────────────────────────────────────────────────── */}
        <form
          onSubmit={handleSubmit}
          className="p-5 sm:p-6 rounded-2xl bg-[#22050c]/80 border border-[#dfa85f]/30 shadow-xl space-y-3 text-left mb-8"
        >
          {submitSuccess && (
            <div className="p-3 rounded-xl bg-[#2a6e1e]/30 border border-[#7ed87e]/40 text-xs text-[#b8f0b8] text-center">
              🎉 Your wish was sent! Thank you!
            </div>
          )}
          <input
            type="text"
            placeholder="Your Name (Optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
          <textarea
            rows={3}
            placeholder="Write a warm birthday wish for me..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClass} resize-none`}
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#8b1e2c] to-[#a32839] hover:brightness-110 text-[#fff1d6] font-cinzel text-xs uppercase tracking-[0.2em] font-medium transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#dfa85f]/40 shadow-md disabled:opacity-60"
          >
            {isSubmitting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
            <span>{isSubmitting ? 'Sending…' : 'Send Birthday Wish'}</span>
          </button>
        </form>

        {/* ── Wishes List ─────────────────────────────────────────────────── */}
        {isLoading ? (
          <div className="py-10 flex flex-col items-center gap-3 text-[#dfa85f]/60">
            <Loader2 className="w-5 h-5 animate-spin" />
            <p className="text-xs font-cinzel tracking-widest uppercase">Loading wishes…</p>
          </div>
        ) : wishes.length === 0 ? (
          <div className="py-8 px-4 rounded-xl border border-dashed border-[#dfa85f]/30 text-center space-y-3">
            <p className="text-xs text-[#dfa85f]/80 font-serif italic">
              Be the first to leave a warm birthday greeting for me!
            </p>
            {loadError && (
              <button
                onClick={fetchWishes}
                className="inline-flex items-center gap-1.5 text-[10px] text-[#dfa85f]/60 hover:text-[#dfa85f] transition-colors font-cinzel uppercase tracking-widest cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" /> Retry
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-3 text-left">
            {loadError && (
              <div className="flex items-center justify-between mb-2 px-1">
                <p className="text-[10px] text-[#dfa85f]/50 italic">Showing cached wishes</p>
                <button
                  onClick={fetchWishes}
                  className="inline-flex items-center gap-1 text-[10px] text-[#dfa85f]/60 hover:text-[#dfa85f] transition-colors font-cinzel uppercase tracking-widest cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" /> Refresh
                </button>
              </div>
            )}
            {wishes.map((wish, index) => {
              const isLiked = likedIds.includes(wish.id);
              return (
                <motion.div
                  key={wish.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-[#22050c]/60 border border-[#dfa85f]/20 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-serif text-sm sm:text-base text-[#fce0ad] font-medium">
                      {wish.name}
                    </span>
                    <span className="text-[10px] text-[#dfa85f]/60 font-cinzel">{formatWishDate(wish.date)}</span>
                  </div>
                  <p className="text-xs text-[#ebdcd1] leading-relaxed font-light mb-2">
                    "{wish.message}"
                  </p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => toggleLike(wish.id)}
                      className={`flex items-center gap-1.5 text-xs transition-colors cursor-pointer ${
                        isLiked ? 'text-[#ff6b81]' : 'text-[#a68b82] hover:text-[#ff6b81]'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-[#ff6b81]' : ''}`} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
