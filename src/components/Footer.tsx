import { motion } from 'motion/react';
import { BrandIcons } from './BrandIcons';
import { useLanguage } from '../i18n/LanguageContext';
import { LegendsBrandTitle } from './LegendsBrandTitle';

export function Footer() {
  const { lang, t } = useLanguage();
  return (
    <footer className="relative z-10 w-full mt-10 bg-black/40 backdrop-blur-3xl border-t border-white/5 pt-16 pb-[calc(env(safe-area-inset-bottom)+3rem)] overflow-hidden">
      
      {/* Background ambient glow in footer */}
      <div className="absolute inset-x-0 bottom-0 h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[var(--color-brand-primary)]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-xl mx-auto px-5 flex flex-col items-center text-center gap-10">
        
        {/* Majestic Animated Logo (Square removed, Soft celestial aura identical to Hero, Falcon lifted with full tail) */}
        <div className="relative inline-block">
          {/* Glowing Circular Pulse Behind Logo (Outside overflow container to eliminate any square borders) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-[radial-gradient(circle,_rgba(0,243,255,0.3)_0%,_rgba(0,100,255,0.12)_45%,_transparent_70%)] blur-2xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative w-48 h-38 md:w-56 md:h-44 flex items-center justify-center drop-shadow-[0_0_25px_rgba(0,243,255,0.5)]" style={{ perspective: '1200px' }}>
            <div className="relative w-full h-full" style={{ perspective: '1200px' }}>
              {/* BASE LAYER (Eagle Body & Full Tail) */}
              <motion.div
                className="absolute inset-0 z-10"
                style={{ clipPath: 'polygon(35% 0%, 65% 0%, 65% 100%, 35% 100%)' }}
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src="/assets/legends_eagle_clean.png" className="w-full h-full object-contain" alt="Legends Logo Body" style={{ imageRendering: 'auto' }} />
              </motion.div>

              {/* LEFT WING */}
              <motion.div
                className="absolute inset-0 z-20"
                style={{ 
                  clipPath: 'polygon(0% 0%, 45% 0%, 45% 100%, 0% 100%)',
                  transformOrigin: '42% 45%'
                }}
                animate={{ 
                  rotateY: [0, 50, -10, 0],
                  rotateZ: [0, -3, 1, 0],
                  y: [-2, 2, -2]
                }}
                transition={{ 
                  rotateY: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                  rotateZ: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <img src="/assets/legends_eagle_clean.png" className="w-full h-full object-contain" alt="Left Wing" style={{ imageRendering: 'auto' }} />
              </motion.div>

              {/* RIGHT WING */}
              <motion.div
                className="absolute inset-0 z-20"
                style={{ 
                  clipPath: 'polygon(55% 0%, 100% 0%, 100% 100%, 55% 100%)',
                  transformOrigin: '58% 45%'
                }}
                animate={{ 
                  rotateY: [0, -50, 10, 0],
                  rotateZ: [0, 3, -1, 0],
                  y: [-2, 2, -2]
                }}
                transition={{ 
                  rotateY: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                  rotateZ: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <img src="/assets/legends_eagle_clean.png" className="w-full h-full object-contain" alt="Right Wing" style={{ imageRendering: 'auto' }} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Deluxe Brand Title Directly Under Eagle */}
        <div className="flex flex-col items-center relative z-10 -mt-2">
          <LegendsBrandTitle size="sm" showSubtitle={false} className="mb-2" />
          <p className={`text-white/50 text-[13px] max-w-xs leading-relaxed mt-2 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t(
              'ندعم ونمكن صناع المحتوى والمذيعين في جميع أنحاء منطقة الشرق الأوسط وشمال أفريقيا والعالم.',
              'Empowering digital creators and broadcasters across the MENA region and the world.',
              'Поддержка и расширение возможностей создателей цифрового контента и вещателей в регионе MENA и по всему миру.',
              'Susținerea și abilitarea creatorilor de conținut digital și a radiodifuzorilor din regiunea MENA și din întreaga lume.',
              'Soutenir et responsabiliser les créateurs de contenu numérique et les diffuseurs dans la région MENA et dans le monde entier.',
              'Supportare e potenziare i creatori di contenuti digitali e le emittenti nella regione MENA e in tutto il mondo.'
            )}
          </p>
        </div>

        {/* Partners & Socials - Always Glowing */}
        <div className="flex flex-col items-center relative z-10 w-full pt-8 border-t border-white/5">
          <h4 className={`text-white/50 font-mono text-[10px] tracking-[0.2em] uppercase mb-5 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t('شركاء رسميون', 'Official Partners', 'Официальные партнеры', 'Parteneri oficiali', 'Partenaires officiels', 'Partner ufficiali')}
          </h4>
          <div className="flex gap-6">
            <div className="w-13 h-13 rounded-[16px] bg-white flex items-center justify-center p-2.5 border border-[var(--color-brand-primary)] shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all duration-300 hover:scale-105">
              <BrandIcons.Tango className="w-full h-full" />
            </div>
            <div className="w-13 h-13 rounded-[16px] bg-white flex items-center justify-center p-2.5 border border-pink-500 shadow-[0_0_15px_rgba(255,0,128,0.4)] transition-all duration-300 hover:scale-105">
              <BrandIcons.Zeena className="w-full h-full" />
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-12 pt-6 border-t border-white/5 text-center flex flex-col items-center justify-center gap-3 max-w-xl mx-auto px-5 relative z-10">
        <p className="text-[var(--color-brand-primary)]/50 text-[10px] font-mono tracking-[0.2em] uppercase">
          SYS.CORE // {new Date().getFullYear()} LEGENDS AGENCY ALL RIGHTS RESERVED
        </p>
        <div className="flex items-center gap-2 text-white/30 text-[10px] font-mono">
          <span>SECURE CONNECTION</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)] animate-pulse shadow-[0_0_8px_rgba(0,243,255,0.8)]" />
        </div>
      </div>
    </footer>
  );
}
