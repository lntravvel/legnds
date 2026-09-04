import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
  hasGlow: boolean;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  life: number;
  maxLife: number;
}

const STAR_COLORS = [
  '#FFFFFF', // Diamond White
  '#E0F2FE', // Soft Ice Blue
  '#BAE6FD', // Sky Starlight
  '#FEF08A', // Soft Golden Starlight
  '#FBCFE8', // Soft Rose Starlight
];

type CelestialPhase = 'idle' | 'ar' | 'en';
type BurstSide = 'right' | 'left';

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [phase, setPhase] = useState<CelestialPhase>('idle');
  const [side, setSide] = useState<BurstSide>('right');

  // Cycle the sudden appearance of "الأساطير" and "LEGENDS" over the stars alternating right and left
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let isMounted = true;

    const runSequence = () => {
      if (!isMounted) return;
      // Step 1: Peaceful star drift interval (~10 seconds)
      setPhase('idle');
      timeoutId = setTimeout(() => {
        if (!isMounted) return;
        // Step 2: Sudden Arabic celestial burst on the RIGHT flank (3.5s)
        setSide('right');
        setPhase('ar');
        timeoutId = setTimeout(() => {
          if (!isMounted) return;
          // Step 3: Another peaceful star drift interval (~10 seconds)
          setPhase('idle');
          timeoutId = setTimeout(() => {
            if (!isMounted) return;
            // Step 4: Sudden English celestial burst on the LEFT flank (3.5s)
            setSide('left');
            setPhase('en');
            timeoutId = setTimeout(() => {
              runSequence();
            }, 3500);
          }, 10000);
        }, 3500);
      }, 10000);
    };

    runSequence();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

  // Moving Stars Canvas Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // High density moving star field (نجوم متحركة بكثرة)
    const isMobile = width < 768;
    const starCount = isMobile ? 65 : 240; // Drastically reduced for mobile performance
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      const size = Math.random() < 0.85 ? Math.random() * 1.5 + 0.5 : Math.random() * 2.2 + 1.2;
      const speedMultiplier = (size / 2.5) * 0.4 + 0.15;
      
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: -(Math.random() * 0.4 + 0.15) * speedMultiplier,
        vy: (Math.random() * 0.3 + 0.1) * speedMultiplier,
        size,
        baseAlpha: Math.random() * 0.65 + 0.25,
        twinkleSpeed: Math.random() * 0.04 + 0.015,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
        hasGlow: !isMobile && (size > 1.8 || Math.random() < 0.15), // Disable expensive glow on mobile
      });
    }

    // Dynamic shooting stars array
    const shootingStars: ShootingStar[] = [];
    let nextShootingStarTime = Date.now() + 1200;

    const spawnShootingStar = () => {
      // Less frequent shooting stars on mobile
      if (isMobile && Math.random() > 0.5) return;
      
      shootingStars.push({
        x: Math.random() * width * 1.2,
        y: Math.random() * (height * 0.45),
        length: Math.random() * 95 + 65,
        speed: Math.random() * 9 + 11,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.25,
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 25 + 30,
      });
    };

    let time = 0;
    let isPaused = false;

    const handleVisibilityChange = () => {
      isPaused = document.hidden;
      if (!isPaused) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (isPaused) return;
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Spawn shooting stars periodically
      const now = Date.now();
      if (now > nextShootingStarTime) {
        spawnShootingStar();
        nextShootingStarTime = now + Math.random() * 3000 + 2200;
      }

      // 1. Render and Move Abundant Stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < -10) star.x = width + 10;
        if (star.x > width + 10) star.x = -10;
        if (star.y > height + 10) star.y = -10;
        if (star.y < -10) star.y = height + 10;

        const twinkle = Math.sin(time * 50 * star.twinkleSpeed + star.twinkleOffset);
        const currentAlpha = Math.max(0.12, Math.min(1, star.baseAlpha + twinkle * 0.35));

        ctx.save();
        ctx.globalAlpha = currentAlpha;

        if (star.hasGlow) {
          ctx.shadowBlur = star.size * 4.5;
          ctx.shadowColor = star.color;
        }

        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Cross sparkle for bright stars
        if (star.size > 2.2) {
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 0.6;
          const flare = star.size * 2.5;
          ctx.beginPath();
          ctx.moveTo(star.x - flare, star.y);
          ctx.lineTo(star.x + flare, star.y);
          ctx.moveTo(star.x, star.y - flare);
          ctx.lineTo(star.x, star.y + flare);
          ctx.stroke();
        }

        ctx.restore();
      }

      // 2. Render and Animate Shooting Stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.life++;
        ss.x -= Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;

        const progress = ss.life / ss.maxLife;
        const currentOpacity = (1 - progress) * ss.opacity;

        if (progress >= 1 || ss.x < -100 || ss.y > height + 100) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = ss.x + Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;

        const gradient = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity})`);
        gradient.addColorStop(0.3, `rgba(0, 243, 255, ${currentOpacity * 0.85})`);
        gradient.addColorStop(1, 'rgba(0, 243, 255, 0)');

        ctx.save();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(0, 243, 255, 0.8)';
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#02050A]">
      {/* 1. High-Res Static Cosmic Wallpaper (صورة الخلفية الثابتة الماسية) */}
      <img
        src="https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=2560&auto=format&fit=crop"
        alt="Legends Cosmic Background"
        referrerPolicy="no-referrer"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-45 mix-blend-screen scale-105 select-none"
      />

      {/* 2. Deep Luxury Atmospheric Dark Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02050A]/85 via-[#02050A]/70 to-[#02050A] pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#02050A]/40 to-[#02050A]/95 pointer-events-none" />

      {/* 3. Abundant Moving Stars & Shooting Stars Canvas (النجوم المتحركة بكثرة) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* 4. CELESTIAL TITLE BURST: APPEARS ALTERNATELY ON RIGHT OR LEFT FLANKS, DELICATE & COMPACT ON MOBILE */}
      <div 
        className={`fixed z-15 pointer-events-none transition-all duration-700 top-[18%] sm:top-[24%] md:top-[28%] ${
          side === 'right' 
            ? 'right-2 sm:right-8 md:right-16 lg:right-24' 
            : 'left-2 sm:left-8 md:left-16 lg:left-24'
        }`}
      >
        <AnimatePresence mode="wait">
          {phase === 'ar' && (
            <motion.div
              key="celestial-ar"
              initial={{ 
                opacity: 0, 
                scale: 0.7,
                x: side === 'right' ? 20 : -20
              }}
              animate={{ 
                opacity: [0, 1, 0.95, 1], 
                scale: [0.7, 1, 0.96, 1],
                x: 0,
                y: [0, -4, 0]
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.85, 
                x: side === 'right' ? 15 : -15,
                transition: { duration: 0.5, ease: "easeIn" }
              }}
              transition={{ 
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative flex flex-col items-center justify-center text-center select-none max-w-[170px] sm:max-w-[220px] md:max-w-xs"
            >
              {/* Sudden Cosmic Flash Aura */}
              <motion.div 
                initial={{ scale: 0.1, opacity: 1 }}
                animate={{ scale: [0.1, 1.8, 2.5], opacity: [1, 0.6, 0] }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute w-16 h-16 sm:w-28 sm:h-28 rounded-full bg-cyan-400/30 blur-xl pointer-events-none"
              />

              {/* Shockwave Energy Ring */}
              <motion.div
                initial={{ scale: 0.2, opacity: 1 }}
                animate={{ scale: [0.2, 1.8], opacity: [1, 0] }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute w-20 h-20 sm:w-32 sm:h-32 rounded-full border border-cyan-300/70 shadow-[0_0_12px_#00f3ff] pointer-events-none"
              />

              {/* Constellation Header Badge */}
              <div className="flex items-center gap-1.5 mb-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-cyan-950/70 border border-cyan-400/40 backdrop-blur-md shadow-[0_0_12px_rgba(0,243,255,0.25)]">
                <div className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full overflow-hidden bg-[#030812] border border-cyan-300 p-0.5 shadow-[0_0_6px_#00f3ff]">
                  <img src="/assets/legends_eagle_clean.png" alt="Legends Emblem" className="w-full h-full object-contain" />
                </div>
                <span className="text-[9px] sm:text-[11px] tracking-[0.15em] font-arabic text-cyan-100 font-bold whitespace-nowrap">
                  وكـالـة الأساطـير
                </span>
                <Sparkles size={10} className="text-cyan-300 animate-spin" style={{ animationDuration: '8s' }} />
              </div>

              {/* Main Glowing Word "الأساطير" */}
              <h2 className="text-lg sm:text-2xl md:text-4xl font-extrabold font-arabic tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-300 drop-shadow-[0_0_15px_rgba(0,243,255,0.8)]">
                الأساطير
              </h2>

              {/* Starlight Halo Rays */}
              <div className="w-14 sm:w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-0.5 shadow-[0_0_8px_#00f3ff]" />
            </motion.div>
          )}

          {phase === 'en' && (
            <motion.div
              key="celestial-en"
              initial={{ 
                opacity: 0, 
                scale: 0.7,
                x: side === 'right' ? 20 : -20
              }}
              animate={{ 
                opacity: [0, 1, 0.95, 1], 
                scale: [0.7, 1, 0.96, 1],
                x: 0,
                y: [0, -4, 0]
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.85, 
                x: side === 'right' ? 15 : -15,
                transition: { duration: 0.5, ease: "easeIn" }
              }}
              transition={{ 
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative flex flex-col items-center justify-center text-center select-none max-w-[170px] sm:max-w-[220px] md:max-w-xs"
            >
              {/* Sudden Cosmic Flash Aura */}
              <motion.div 
                initial={{ scale: 0.1, opacity: 1 }}
                animate={{ scale: [0.1, 1.8, 2.5], opacity: [1, 0.6, 0] }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute w-16 h-16 sm:w-28 sm:h-28 rounded-full bg-cyan-400/30 blur-xl pointer-events-none"
              />

              {/* Shockwave Energy Ring */}
              <motion.div
                initial={{ scale: 0.2, opacity: 1 }}
                animate={{ scale: [0.2, 1.8], opacity: [1, 0] }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute w-20 h-20 sm:w-32 sm:h-32 rounded-full border border-cyan-300/70 shadow-[0_0_12px_#00f3ff] pointer-events-none"
              />

              {/* Constellation Header Badge */}
              <div className="flex items-center gap-1.5 mb-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-cyan-950/70 border border-cyan-400/40 backdrop-blur-md shadow-[0_0_12px_rgba(0,243,255,0.25)]">
                <div className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full overflow-hidden bg-[#030812] border border-cyan-300 p-0.5 shadow-[0_0_6px_#00f3ff]">
                  <img src="/assets/legends_eagle_clean.png" alt="Legends Emblem" className="w-full h-full object-contain" />
                </div>
                <span className="text-[8px] sm:text-[10px] tracking-[0.2em] font-mono text-cyan-200 uppercase font-bold whitespace-nowrap">
                  VIP AGENCY
                </span>
                <Sparkles size={10} className="text-cyan-300 animate-spin" style={{ animationDuration: '8s' }} />
              </div>

              {/* Main Glowing Word "LEGENDS" */}
              <h2 className="text-sm sm:text-xl md:text-3xl font-extrabold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-300 drop-shadow-[0_0_15px_rgba(0,243,255,0.8)] font-mono">
                LEGENDS
              </h2>

              {/* Starlight Halo Rays */}
              <div className="w-14 sm:w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-0.5 shadow-[0_0_8px_#00f3ff]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 5. Subtle Brand Ambient Vignettes */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-[var(--color-brand-primary)]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />
    </div>
  );
}
