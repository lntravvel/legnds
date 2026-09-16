import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Coins, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function FloatingEarningsButton() {
  const location = useLocation();
  const { lang, t, dir } = useLanguage();

  // Do not show button if user is already on the earnings page
  if (location.pathname === '/earnings') {
    return null;
  }

  return (
    <motion.aside
      aria-label="Floating Earnings Guide Link"
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-[4.85rem] sm:bottom-[5.35rem] left-4 sm:left-6 z-40"
    >
      <Link
        to="/earnings"
        title={t('افتح دليل النشاط والأرباح وسلم الرواتب لـ 30 مستوى', 'Open 30-Tier Earnings & Salary Guide', 'Открыть таблицу доходов', 'Deschide ghidul de salarii', 'Ouvrir le guide des salaires', 'Apri la guida ai compensi')}
        className="group relative flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#160b26]/95 via-[#1a1106]/95 to-[#0d041a]/95 border-2 border-amber-400/80 hover:border-yellow-300 shadow-[0_0_20px_rgba(251,191,36,0.55),0_0_40px_rgba(236,72,153,0.3)] backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer select-none"
      >
        {/* Constant Glowing Pulse & Ping Halo */}
        <span 
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400/40 via-yellow-400/50 to-pink-500/40 animate-ping pointer-events-none opacity-50" 
          style={{ animationDuration: '2.5s' }} 
        />
        <span 
          className="absolute inset-0 rounded-full bg-amber-400/15 animate-pulse pointer-events-none" 
          style={{ animationDuration: '1.8s' }} 
        />

        {/* 3D Golden Coin Icon */}
        <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 text-black shadow-[0_0_12px_rgba(251,191,36,0.8)] shrink-0 group-hover:rotate-12 transition-transform duration-300">
          <Coins size={15} className="text-black sm:w-4 sm:h-4" />
          <Sparkles size={9} className="absolute -top-1 -right-1 text-white animate-spin" style={{ animationDuration: '4s' }} />
        </div>

        {/* Text & Badges - Mobile Optimized */}
        <div className="flex flex-col text-start justify-center">
          <div className="flex items-center gap-1.5">
            <span className={`text-[11.5px] sm:text-[13px] font-black text-amber-300 tracking-tight leading-tight group-hover:text-yellow-200 transition-colors ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t('دليل الأرباح', 'Earnings Guide', 'Таблица доходов', 'Ghid salarii', 'Guide salaires', 'Guida compensi')}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
          </div>

          <span className="text-[9px] sm:text-[10px] font-mono font-bold text-pink-300 tracking-wider leading-none mt-0.5">
            30 LVS • $66K/MO 🔥
          </span>
        </div>

        {/* Small Arrow */}
        <div className={`shrink-0 text-amber-300/80 group-hover:text-amber-200 transition-transform duration-300 ${dir === 'rtl' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
          {dir === 'rtl' ? <ArrowLeft size={13} /> : <ArrowRight size={13} />}
        </div>
      </Link>
    </motion.aside>
  );
}
