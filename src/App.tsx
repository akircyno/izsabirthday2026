import { useState, useEffect } from 'react';
import { EnvelopeHero } from './components/EnvelopeHero';
import { MusicPlayer } from './components/MusicPlayer';
import { CelebrantSpotlight } from './components/CelebrantSpotlight';
import { Countdown } from './components/Countdown';
import { EventDetails } from './components/EventDetails';
import { DressCode } from './components/DressCode';
import { RSVPForm } from './components/RSVPForm';
import { WishesWall } from './components/WishesWall';
import { Footer } from './components/Footer';
import type { RSVPData, GuestWish } from './types';
import { Sparkles } from 'lucide-react';


function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [wishes, setWishes] = useState<GuestWish[]>([
    {
      id: '1',
      name: 'Ira',
      message: 'Happy 21st Birthday to my gorgeous girlfriend! May this year bring you all the joy, success, and love you deserve. I love you! ❤️✨',
      date: 'Today',
    },
    {
      id: '2',
      name: 'Family & Friends',
      message: 'Happy 21st Birthday Trizsa! Excited to celebrate this magical milestone with you! 🎉',
      date: 'Recent',
    },
  ]);

  useEffect(() => {
    const saved = localStorage.getItem('trizsa_21_wishes');
    if (saved) {
      try {
        setWishes(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved wishes:', e);
      }
    }
  }, []);

  const handleAddWish = (name: string, message: string) => {
    const newWish: GuestWish = {
      id: Date.now().toString(),
      name,
      message,
      date: 'Just now',
    };
    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem('trizsa_21_wishes', JSON.stringify(updated));
  };

  const handleRSVPSubmitted = (data: RSVPData) => {
    if (data.birthdayWish && data.birthdayWish.trim()) {
      handleAddWish(data.fullName, data.birthdayWish);
    }
  };

  return (
    <div className="min-h-screen bg-[#120306] text-[#f8ede3] font-sans relative selection:bg-[#8b1e2c] selection:text-white">
      {/* Intro Envelope Reveal Gate */}
      {!hasEntered && <EnvelopeHero onOpen={() => setHasEntered(true)} />}

      {/* Floating Music Player */}
      <MusicPlayer hasEntered={hasEntered} />

      {/* Ambient background glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8b1e2c]/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/3 right-10 w-[450px] h-[450px] bg-[#dfa85f]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Main Website Content */}
      <main className={`transition-opacity duration-1000 ${hasEntered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Main Header / Banner */}
        <section className="pt-20 pb-10 px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dfa85f]/15 border border-[#dfa85f]/30 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#fce0ad]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#fce0ad] font-cinzel">
              Intimate Birthday Celebration
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-7xl font-normal tracking-wide gold-gradient-text mb-3">
            Trizsa Reign
          </h1>
          <p className="font-script text-3xl sm:text-5xl text-[#f3d2c1]">
            Turning 21
          </p>

          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#dfa85f] to-transparent mx-auto my-6" />

          <p className="text-xs uppercase tracking-[0.3em] text-[#d4c3b3]">
            Sunday, October 11, 2026 • 9:00 PM
          </p>
        </section>

        {/* Live Countdown */}
        <Countdown />

        {/* Celebrant Spotlight */}
        <CelebrantSpotlight />

        {/* Event Details (Subic, Best Western Plus, Landmark) */}
        <EventDetails />

        {/* Dress Code (White, Beige, Red, Strictly No Black) */}
        <DressCode />

        {/* Easy RSVP Form */}
        <RSVPForm onRSVPSubmitted={handleRSVPSubmitted} />

        {/* Wishes & Guestbook Wall */}
        <WishesWall wishes={wishes} onAddWish={handleAddWish} />

        {/* Footer with playful boyfriend credit */}
        <Footer />
      </main>
    </div>
  );
}

export default App;

