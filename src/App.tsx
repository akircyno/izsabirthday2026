import { useState } from 'react';
import { EnvelopeHero } from './components/EnvelopeHero';
import { HeroSaveTheDate } from './components/HeroSaveTheDate';
import { EventDetails } from './components/EventDetails';
import { ProgramTimeline } from './components/ProgramTimeline';
import { DressCode } from './components/DressCode';
import { GiftEtiquette } from './components/GiftEtiquette';
import { PersonalMessageEnvelope } from './components/PersonalMessageEnvelope';
import { RSVPForm } from './components/RSVPForm';
import { WishesWall } from './components/WishesWall';
import { MusicPlayer } from './components/MusicPlayer';
import { Footer } from './components/Footer';
import { RecoverPage } from './components/RecoverPage';
import type { RSVPData } from './types';

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  // Simple hash-based routing — no react-router needed
  if (window.location.pathname === '/recover' || window.location.hash === '#/recover') {
    return <RecoverPage />;
  }

  const handleRSVPSubmitted = (_data: RSVPData) => {
    // RSVP is recorded in Google Sheets via Apps Script
  };

  return (
    <div className="min-h-screen bg-[#120306] text-[#f8ede3] font-sans relative selection:bg-[#8b1e2c] selection:text-[#fff1d6]">
      {/* Intro Envelope Reveal Gate */}
      {!hasEntered && <EnvelopeHero onOpen={() => setHasEntered(true)} />}

      {/* Floating Music Player */}
      <MusicPlayer hasEntered={hasEntered} />

      {/* Ambient background glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#8b1e2c]/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/3 right-10 w-[500px] h-[500px] bg-[#dfa85f]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Main Website Content - Mobile-first Editorial Column */}
      <main
        className={`transition-opacity duration-1000 ${
          hasEntered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } max-w-[480px] mx-auto min-h-screen bg-[#150307] shadow-[0_0_80px_rgba(0,0,0,0.8)] border-x border-[#dfa85f]/20`}
      >
        {/* Card 1: Save the Date & Royal Monogram Crest (Trizsa Reign) */}
        <HeroSaveTheDate />

        {/* Card 2: Dearest Family & Friends & Venue Sketch (Izsa) */}
        <EventDetails />

        {/* Card 3: Celebration Timeline & Live Countdown */}
        <ProgramTimeline />

        {/* Card 4: Dress Code & Palette Guide */}
        <DressCode />

        {/* Card 5: Wishes & Gift Etiquette */}
        <GiftEtiquette />

        {/* Card 6: Personal Letter Envelope from Izsa */}
        <PersonalMessageEnvelope />

        {/* Card 7: RSVP Form with Dynamic Accompanying Guest Inputs */}
        <RSVPForm onRSVPSubmitted={handleRSVPSubmitted} />

        {/* Card 8: Celebration Guestbook / Wishes for Izsa */}
        <WishesWall />

        {/* Card 9: Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App;


