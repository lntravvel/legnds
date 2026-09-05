import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

interface AudioPlayerProps {
  play: boolean;
}

export function AudioPlayer({ play }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const { lang } = useLanguage();

  const startPlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.muted = false;
      audio.volume = 0;
      const promise = audio.play();
      if (promise !== undefined) {
        await promise;
        setIsPlaying(true);
        setIsMuted(false);
        setHasInteracted(true);

        // Smooth gentle fade-in to 0.35
        let vol = 0;
        const fade = setInterval(() => {
          if (audioRef.current && vol < 0.35) {
            vol += 0.03;
            audioRef.current.volume = Math.min(vol, 0.35);
          } else {
            clearInterval(fade);
          }
        }, 120);
      }
    } catch (err) {
      console.warn("Audio autoplay waiting for user interaction:", err);
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (play) {
      startPlayback();

      // In case browser policy blocked autoplay on first try, unlock on next click/tap
      const unlockOnUserAction = () => {
        if (audioRef.current && audioRef.current.paused) {
          startPlayback();
        }
      };

      window.addEventListener('pointerdown', unlockOnUserAction, { once: true });
      window.addEventListener('keydown', unlockOnUserAction, { once: true });

      return () => {
        window.removeEventListener('pointerdown', unlockOnUserAction);
        window.removeEventListener('keydown', unlockOnUserAction);
      };
    }
  }, [play]);

  // Pause music if embedded site videos (gallery) start playing
  useEffect(() => {
    const handlePause = () => {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    window.addEventListener('app:pause-bg-music', handlePause);

    const TRUSTED_ORIGINS = [
      'https://www.youtube.com',
      'https://youtube.com',
    ];

    const handleMessage = (e: MessageEvent) => {
      // Security: only accept messages from trusted origins
      if (!TRUSTED_ORIGINS.some(origin => e.origin.startsWith(origin))) {
        return;
      }
      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        if (data && (data.event === 'onStateChange' && data.info === 1)) {
          handlePause();
        }
      } catch {
        // Ignore non-json
      }
    };
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('app:pause-bg-music', handlePause);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.muted = false;
      audio.volume = 0.35;
      audio.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
      }).catch(console.warn);
    } else if (isMuted) {
      audio.muted = false;
      audio.volume = 0.35;
      setIsMuted(false);
      setIsPlaying(true);
    } else {
      audio.muted = true;
      setIsMuted(true);
      setIsPlaying(false);
    }
  };

  return (
    <>
      {/* Self-hosted High Fidelity Audio Element */}
      <audio
        ref={audioRef}
        preload="auto"
        loop
        playsInline
      >
        <source src="/audio/in-the-end.mp3" type="audio/mpeg" />
        <source src="/audio/bg-music.mp3" type="audio/mpeg" />
      </audio>

      <AnimatePresence>
        {play && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-5 sm:bottom-6 left-5 sm:left-6 z-40 flex items-center gap-2"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSound}
              className={`flex items-center justify-center p-3 rounded-full border backdrop-blur-xl transition-all cursor-pointer select-none shadow-[0_0_25px_rgba(0,243,255,0.25)] ${
                isPlaying && !isMuted
                  ? 'border-cyan-400/60 bg-black/75 text-cyan-300 hover:border-cyan-300 hover:shadow-[0_0_35px_rgba(0,243,255,0.5)]'
                  : 'border-amber-400/50 bg-black/80 text-amber-300 hover:border-amber-300 hover:shadow-[0_0_35px_rgba(251,191,36,0.4)] animate-pulse'
              }`}
              aria-label={isPlaying && !isMuted ? (lang === 'ar' ? 'كتم الموسيقى' : 'Mute Music') : (lang === 'ar' ? 'تشغيل الموسيقى' : 'Play Music')}
              title={isPlaying && !isMuted ? (lang === 'ar' ? 'كتم الموسيقى' : 'Mute Music') : (lang === 'ar' ? 'تشغيل الموسيقى' : 'Play Music')}
            >
              {/* Animated Equalizer Wave Bars when playing */}
              {isPlaying && !isMuted ? (
                <div className="flex items-center gap-0.5 h-4">
                  <motion.span
                    animate={{ height: ['4px', '16px', '6px', '14px', '4px'] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-0.5 bg-cyan-400 rounded-full"
                  />
                  <motion.span
                    animate={{ height: ['12px', '4px', '16px', '8px', '12px'] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
                    className="w-0.5 bg-cyan-300 rounded-full"
                  />
                  <motion.span
                    animate={{ height: ['6px', '14px', '4px', '16px', '6px'] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                    className="w-0.5 bg-cyan-400 rounded-full"
                  />
                </div>
              ) : (
                <VolumeX size={18} className="text-amber-400" />
              )}

              <Volume2 size={18} className={isPlaying && !isMuted ? 'text-cyan-300' : 'hidden'} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

