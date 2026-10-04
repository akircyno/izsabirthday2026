import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send } from 'lucide-react';
import type { GuestWish } from '../types';

interface WishesWallProps {
  wishes: GuestWish[];
  onAddWish: (name: string, message: string) => void;
}

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-[#2b0811]/90 border border-[#dfa85f]/30 text-[#f8ede3] text-xs sm:text-sm focus:outline-none focus:border-[#dfa85f] placeholder:text-[#8a6870] font-light transition-colors';

export const WishesWall: React.FC<WishesWallProps> = ({ wishes, onAddWish }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [likedIds, setLikedIds] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    const author = name.trim() || 'A Warm Guest';
    onAddWish(author, message.trim());
    setName('');
    setMessage('');
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
          Leave a message or greeting for Izsa's 21st birthday.
        </p>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 rounded-2xl bg-[#22050c]/80 border border-[#dfa85f]/30 shadow-xl space-y-3 text-left mb-8">
          <input
            type="text"
            placeholder="Your Name (Optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
          <textarea
            rows={3}
            placeholder="Write a warm birthday wish for Izsa..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClass} resize-none`}
            required
          />
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#8b1e2c] to-[#a32839] hover:brightness-110 text-[#fff1d6] font-cinzel text-xs uppercase tracking-[0.2em] font-medium transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#dfa85f]/40 shadow-md"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send Birthday Wish</span>
          </button>
        </form>

        {/* Wishes List */}
        {wishes.length === 0 ? (
          <div className="py-8 px-4 rounded-xl border border-dashed border-[#dfa85f]/30 text-center">
            <p className="text-xs text-[#dfa85f]/80 font-serif italic">
              Be the first to leave a warm birthday greeting for Izsa!
            </p>
          </div>
        ) : (
          <div className="space-y-3 text-left">
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
                    <span className="text-[10px] text-[#dfa85f]/60 font-cinzel">{wish.date}</span>
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
