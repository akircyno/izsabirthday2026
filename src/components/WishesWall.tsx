import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send } from 'lucide-react';
import type { GuestWish } from '../types';



interface WishesWallProps {
  wishes: GuestWish[];
  onAddWish: (name: string, message: string) => void;
}

export const WishesWall: React.FC<WishesWallProps> = ({ wishes, onAddWish }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [likedIds, setLikedIds] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    onAddWish(name, message);
    setName('');
    setMessage('');
  };

  const toggleLike = (id: string) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-[0.3em] text-[#e5b985]/80 font-medium">
          Love & Greetings
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#fce0ad] font-normal tracking-wide mt-2">
          Wishes for Trizsa
        </h2>
        <p className="text-xs sm:text-sm text-[#d4c3b3] mt-2 font-light">
          Leave your heartfelt 21st birthday messages and love for the celebrant.
        </p>
        <div className="w-12 h-[1px] bg-[#dfa85f]/40 mx-auto mt-4" />
      </div>

      {/* Leave A Wish Quick Input */}
      <div className="mb-12 max-w-xl mx-auto p-6 rounded-3xl glass-card border border-[#dfa85f]/30">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#1f060b]/80 border border-[#dfa85f]/30 text-[#f8ede3] text-sm focus:outline-none focus:border-[#dfa85f]"
            />
          </div>
          <div>
            <textarea
              rows={2}
              placeholder="Write a sweet birthday wish..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#1f060b]/80 border border-[#dfa85f]/30 text-[#f8ede3] text-sm focus:outline-none focus:border-[#dfa85f] resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-xl bg-[#8b1e2c] hover:bg-[#a32839] border border-[#dfa85f]/40 text-[#fce0ad] text-xs uppercase tracking-widest font-medium transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send Birthday Wish</span>
          </button>
        </form>
      </div>

      {/* Wishes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {wishes.map((wish, index) => {
          const isLiked = likedIds.includes(wish.id);
          return (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              className="p-5 rounded-2xl glass-card border border-[#dfa85f]/20 flex flex-col justify-between hover:border-[#dfa85f]/50 transition-all shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif text-base text-[#fce0ad] font-medium truncate">
                    {wish.name}
                  </span>
                  <span className="text-[10px] text-[#9c897f]">
                    {wish.date}
                  </span>
                </div>
                <p className="text-xs text-[#d4c3b3] leading-relaxed font-light italic">
                  "{wish.message}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[10px] text-[#dfa85f]/70 uppercase tracking-wider">
                  21st Birthday Wish
                </span>
                <button
                  onClick={() => toggleLike(wish.id)}
                  className={`flex items-center gap-1 transition-colors cursor-pointer ${
                    isLiked ? 'text-[#ff6b81]' : 'text-[#8a7a72] hover:text-[#ff6b81]'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-[#ff6b81]' : ''}`} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
