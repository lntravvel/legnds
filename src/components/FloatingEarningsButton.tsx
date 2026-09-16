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
      className="fixed bottom-5 sm:bottom-6 left-5 sm:left-6 z-40"
    >
      <Link
        to="/earnings"
        title={t('افتح دليل النشاط والأرباح وسلم الرواتب لـ 30 مستوى', 'Open 30-Tier Earnings & Salary Guide', 'Открыть таблицу доходов', 'Deschide ghidul de salarii', 'Ouvrir le guide des salaires', 'Apri la guida ai compensi')}
        className="group relative flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#140a24]/95 via-[#1a1005]/95 to-[#0b0416]/95 border-2 border-amber-400/70 hover:border-yellow-300 shadow-[0_0_25px_rgba(251,191,36,0.45),0_0_50px_rgba(236,72,153,0.25)] backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      >
        {/* Constant Glowing Pulse & Ping Rings */}
        <span 
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400/30 via-yellow-400/40 to-pink-500/30 animate-ping pointer-events-none opacity-60" 
          style={{ animationDuration: '2.5s' }} 
        />
        <span 
          className="absolute inset-0 rounded-full bg-amber-400/15 animate-pulse pointer-events-none" 
          style={{ animationDuration: '1.8s' }} 
        />

        {/* Golden Coin Icon with Active Halo */}
        <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 text-black shadow-[0_0_15px_rgba(251,191,36,0.8)] shrink-0 group-hover:rotate-12 transition-transform duration-300">
          <Coins size={18} className="text-black" />
          <Sparkles size={10} className="absolute -top-1 -right-1 text-white animate-spin" style={{ animationDuration: '4s' }} />
        </div>

        {/* Text Details */}
        <div className="flex flex-col text-start justify-center">
          <div className="flex items-center gap-1.5">
            <span className={`text-[12px] sm:text-[13px] font-black text-amber-300 tracking-tight leading-tight group-hover:text-yellow-200 transition-colors ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t('دليل الأرباح والرواتب', 'Earnings & Salary', 'Таблица доходов', 'Ghid de salarii', 'Guide salaires', 'Guida compensi')}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
          </div>

          <span className="text-[9.5px] sm:text-[10px] font-mono font-bold text-pink-300 tracking-wider leading-none mt-0.5">
            30 LEVELS • $66K/MO
          </span>
        </div>

        {/* Small Arrow */}
        <div className={`shrink-0 text-amber-300/80 group-hover:text-amber-200 transition-transform duration-300 ${dir === 'rtl' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
          {dir === 'rtl' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
        </div>
      </Link>
    </motion.aside>
  );
}
