import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { LegendsBrandTitle } from './LegendsBrandTitle';

interface EntranceOverlayProps {
  entered: boolean;
  onEnter: () => void;
}

export function EntranceOverlay({ entered, onEnter }: EntranceOverlayProps) {
  const { lang, t } = useLanguage();

  return (
    <AnimatePresence>
      {!entered && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#02050A] cursor-pointer px-4"
          onClick={onEnter}
        >
          <motion.div 
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className={`text-[var(--color-brand-primary)] font-mono text-sm tracking-[0.3em] uppercase flex flex-col items-center gap-5 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}
          >
            {/* Animated 3D Flapping Legends Eagle - 100% Text Free, Full Tail */}
            <div className="relative w-40 h-32 sm:w-48 sm:h-38 md:w-56 md:h-44 flex items-center justify-center drop-shadow-[0_0_35px_rgba(0,243,255,0.7)]" style={{ perspective: '1200px' }}>
              <div className="relative w-full h-full" style={{ perspective: '1200px' }}>
                {/* BASE LAYER (Eagle Body & Full Tail) */}
                <motion.div
                  className="absolute inset-0 z-10"
                  style={{ clipPath: 'polygon(35% 0%, 65% 0%, 65% 100%, 35% 100%)' }}
                  animate={{ y: [-3, 3, -3] }}
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
                    y: [-3, 3, -3]
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
                    y: [-3, 3, -3]
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
            
            {/* Deluxe Brand Title with Emblem */}
            <LegendsBrandTitle size="md" showSubtitle={true} className="-mt-1 mb-2" />

            {/* Tap to enter button */}
            <div className="flex flex-col items-center gap-3 mt-1">
              <div className="w-12 h-12 border border-[var(--color-brand-primary)] rounded-full flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(0,243,255,0.5)]">
                <div className="w-2.5 h-2.5 bg-[var(--color-brand-primary)] rounded-full" />
              </div>
              <span className="text-xs sm:text-sm tracking-[0.25em] text-white/80 font-bold drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">
                {t('اضغط للدخول', 'Tap to Enter', 'Нажмите, чтобы войти', 'Apăsați برای a intra', 'Appuyez pour entrer', 'Tocca per entrare')}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
