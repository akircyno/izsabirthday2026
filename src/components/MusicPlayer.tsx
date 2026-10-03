import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';


interface MusicPlayerProps {
  hasEntered: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ hasEntered }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(() => {
    // Elegant royalty free romantic background piano music
    const sound = new Audio('https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-112199.mp3');
    sound.loop = true;
    sound.volume = 0.5;
    return sound;
  });

  useEffect(() => {
    if (hasEntered) {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.log('Audio autoplay prevented, awaiting user interaction:', e);
      });
    }

    return () => {
      audio.pause();
    };
  }, [hasEntered, audio]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <button
        onClick={toggleMusic}
        className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full border transition-all duration-500 shadow-2xl backdrop-blur-xl ${
          isPlaying
            ? 'bg-[#3b0b14]/80 border-[#dfa85f]/60 text-[#fce0ad] gold-glow'
            : 'bg-[#1a0509]/80 border-[#ffffff]/20 text-[#a89f91]'
        }`}
        title={isPlaying ? 'Mute Music' : 'Play Romantic Music'}
      >
        {isPlaying ? (
          <>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#dfa85f] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e5b985]"></span>
            </span>
            <Volume2 className="w-4 h-4 animate-bounce text-[#fce0ad]" />
            <span className="text-xs tracking-wider uppercase font-medium hidden sm:inline-block">
              Playing Romance
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-[#a89f91]" />
            <span className="text-xs tracking-wider uppercase font-medium hidden sm:inline-block">
              Music Muted
            </span>
          </>
        )}
      </button>
    </div>
  );
};
