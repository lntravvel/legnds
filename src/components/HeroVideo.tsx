import { useEffect, useRef, useState } from 'react';
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
    <div className="relative w-full overflow-hidden bg-transparent select-none flex items-center justify-center">
      {/* 100% full-frame video with ZERO zoom, with silky feathered edges that dissolve seamlessly into space */}
      <video
        ref={videoRef}
        src="/assets/videos/drone_stage.mp4"
        poster="/assets/videos/drone_stage_poster.webp"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 50%, #000 55%, rgba(0,0,0,0.8) 70%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 85% 75% at 50% 50%, #000 55%, rgba(0,0,0,0.8) 70%, transparent 100%)',
        }}
        className="w-full h-auto aspect-video max-h-[720px] object-contain object-center pointer-events-none mix-blend-screen"
      />

      {/* Silky Edge Dissolves: completely eliminating any hard rectangular cuts on all 4 borders */}
      <div 
        className="absolute top-0 inset-x-0 h-10 sm:h-16 bg-gradient-to-b from-[#02050A]/70 via-[#02050A]/20 to-transparent pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 inset-x-0 h-14 sm:h-24 bg-gradient-to-t from-[#02050A]/85 via-[#02050A]/30 to-transparent pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute inset-y-0 left-0 w-10 sm:w-20 bg-gradient-to-r from-[#02050A]/70 via-[#02050A]/20 to-transparent pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute inset-y-0 right-0 w-10 sm:w-20 bg-gradient-to-l from-[#02050A]/70 via-[#02050A]/20 to-transparent pointer-events-none" 
        aria-hidden="true"
      />

      {/* Sound Toggle Button */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 z-20">
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? 'تفعيل الصوت' : 'كتم الصوت'}
          className="flex items-center gap-2 px-4 py-2.5 sm:px-4 sm:py-2.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs transition-all duration-200 active:scale-95 shadow-2xl cursor-pointer min-h-[44px]"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-white/70" />
              <span className="text-[11px] sm:text-xs font-medium text-white/90">{t('كتم', 'Muted', 'Без звука', 'Mut', 'Muet', 'Muto')}</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-medium text-cyan-300">{t('صوت', 'Sound', 'Звук', 'Sunet', 'Son', 'Audio')}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
