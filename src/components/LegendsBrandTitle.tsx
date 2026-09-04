import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { Sparkles } from 'lucide-react';

interface LegendsBrandTitleProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export function LegendsBrandTitle({ 
  size = 'md', 
  showSubtitle = true,
  className = '' 
}: LegendsBrandTitleProps) {
  const { t, lang } = useLanguage();

  const titleSizes = {
    sm: {
      ar: 'text-xl sm:text-2xl',
      en: 'text-[11px] sm:text-xs tracking-[0.35em]',
      badge: 'text-[8.5px] sm:text-[9px]',
      gap: 'gap-1'
    },
    md: {
      ar: 'text-2xl sm:text-3xl md:text-4xl',
      en: 'text-xs sm:text-sm tracking-[0.4em]',
      badge: 'text-[9.5px] sm:text-[10px]',
      gap: 'gap-1.5'
    },
    lg: {
      ar: 'text-3xl sm:text-4xl md:text-5xl',
      en: 'text-xs sm:text-sm md:text-base tracking-[0.45em]',
      badge: 'text-[10px] sm:text-[10.5px]',
      gap: 'gap-2'
    }
  };

  const currentSize = titleSizes[size];

  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      
      {/* Top Floating Cyber Ribbon / Agency Badge */}
      <motion.div 
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-2 mb-1.5 px-3 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-400/30 backdrop-blur-md shadow-[0_0_15px_rgba(0,243,255,0.2)]"
      >
        <Sparkles size={11} className="text-cyan-300 animate-spin" style={{ animationDuration: '9s' }} />
        <span className={`${currentSize.badge} tracking-[0.2em] font-mono text-cyan-200 font-bold uppercase`}>
          {lang === 'ar' ? 'وكـالـة الأساطـيـر الرسمـيـة' : 'OFFICIAL LEGENDS AGENCY'}
        </span>
        <Sparkles size={11} className="text-cyan-300 animate-spin" style={{ animationDuration: '9s' }} />
      </motion.div>

      {/* Main Distinctive Typography Container */}
      <div className="relative group flex flex-col items-center justify-center py-1">
        
        {/* Subtle Ambient Cosmic Glow Behind Title */}
        <div className="absolute -inset-x-8 -inset-y-4 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent blur-xl pointer-events-none rounded-full" />

        {/* 1. The Arabic Majesty: "الأَسَاطِـيـر" */}
        <div className="relative z-10">
          <h1 
            className={`${currentSize.ar} font-black font-arabic leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-400 drop-shadow-[0_0_25px_rgba(0,243,255,0.85)] drop-shadow-[0_4px_10px_rgba(0,0,0,0.95)]`}
            style={{ textShadow: '0 0 40px rgba(0, 243, 255, 0.45)' }}
          >
            {lang === 'ar' ? 'الأَسَاطِـيـر' : 'LEGENDS'}
          </h1>
        </div>

        {/* 2. Cyber Laser Divider with Diamond Core */}
        <div className="relative z-10 flex items-center justify-center gap-2 w-full max-w-[280px] sm:max-w-[360px] my-1.5">
          <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-cyan-400 to-cyan-200 shadow-[0_0_8px_#00f3ff]" />
          <div className="w-2 h-2 rotate-45 bg-cyan-300 shadow-[0_0_10px_#00f3ff]" />
          <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-200 shadow-[0_0_8px_#00f3ff]" />
        </div>

        {/* 3. The English VIP Sub-brand: "— L E G E N D S —" */}
        <div className="relative z-10">
          <h2 
            className={`${currentSize.en} font-extrabold uppercase font-sans text-cyan-300 drop-shadow-[0_0_15px_rgba(0,243,255,0.9)]`}
            style={{ textShadow: '0 0 20px rgba(0, 243, 255, 0.7)' }}
          >
            {lang === 'ar' ? '◆  L E G E N D S  ◆' : '◆  الأَسَاطِـيـر  ◆'}
          </h2>
        </div>

      </div>

      {/* Royal Subtitle Pill Badge */}
      {showSubtitle && (
        <motion.div 
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="mt-2.5 inline-flex items-center gap-2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-950/60 via-cyan-900/40 to-cyan-950/60 border border-cyan-400/40 shadow-[0_0_20px_rgba(0,243,255,0.25)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.25em] font-mono text-cyan-200 uppercase font-bold">
            {lang === 'ar' ? 'الـوكـالـة الـرسـمـيـة الأولـى' : 'OFFICIAL VIP AGENCY'}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping" />
        </motion.div>
      )}

    </div>
  );
}

