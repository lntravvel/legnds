import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Strict requirements for seamless mobile autoplay without rejection
    video.defaultMuted = true;
    video.muted = true;
    video.play().catch(() => {});

    // IntersectionObserver: automatically pauses playback when scrolled off-screen
    // to preserve 100% of mobile GPU/CPU resources for zero scroll lag.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) {
      video.play().catch(() => {});
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative w-full max-w-2xl sm:max-w-3xl mb-4 group"
    >
      {/* Ambient Neon Backlight */}
      <div 
        className="absolute -inset-1 bg-gradient-to-r from-cyan-500/25 via-fuchsia-500/15 to-blue-600/25 rounded-2xl sm:rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Video Container Frame */}
      <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(0,243,255,0.2)] bg-[#05070c]">
        <video
          ref={videoRef}
          src="/assets/videos/drone_stage.mp4"
          poster="/assets/videos/drone_stage_poster.webp"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover select-none"
        />

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080e]/80 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 sm:top-4 sm:inset-x-4 flex items-center justify-between pointer-events-none z-10">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-cyan-500/30 text-[11px] sm:text-xs font-mono text-cyan-300 shadow-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-semibold tracking-wider uppercase">LEGENDS STAGE</span>
          </div>

          <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-mono text-white/70">
            <span>OFFICIAL ARENA</span>
          </div>
        </div>

        {/* Sound Toggle Button */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? 'تفعيل الصوت' : 'كتم الصوت'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs transition-all duration-200 active:scale-95 shadow-lg cursor-pointer"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-white/70" />
                <span className="text-[11px] font-medium text-white/80">{t('كتم', 'Muted', 'Без звука', 'Mut', 'Muet', 'Muto')}</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span className="text-[11px] font-medium text-cyan-300">{t('صوت', 'Sound', 'Звук', 'Sunet', 'Son', 'Audio')}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
