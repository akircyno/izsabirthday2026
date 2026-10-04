import React, { useEffect, useState, useRef } from 'react';
import { VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  hasEntered: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ hasEntered }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/audio/bg-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.45;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (hasEntered && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => {
          console.log('Autoplay blocked by browser policy:', e);
          setIsPlaying(false);
        });
    }
  }, [hasEntered]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log('Play error:', e));
    }
  };

  if (!hasEntered) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-[#dfa85f]/60 bg-[#24060d]/90 text-[#fce0ad] shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md hover:scale-110 transition-all cursor-pointer"
      >
        {/* Spinning Vinyl Texture when playing */}
        {isPlaying && (
          <div className="absolute inset-0 rounded-full border border-dashed border-[#dfa85f]/40 animate-spin [animation-duration:8s] pointer-events-none" />
        )}

        {isPlaying ? (
          <div className="flex items-center gap-0.5 text-[#dfa85f]">
            <span className="w-1 h-3.5 bg-[#dfa85f] rounded-full animate-pulse" />
            <span className="w-1 h-5 bg-[#dfa85f] rounded-full animate-pulse [animation-delay:0.2s]" />
            <span className="w-1 h-2.5 bg-[#dfa85f] rounded-full animate-pulse [animation-delay:0.4s]" />
          </div>
        ) : (
          <VolumeX className="w-5 h-5 text-[#dfa85f]/70" />
        )}
      </button>
    </div>
  );
};
