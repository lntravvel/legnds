import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Scale, Zap, Home, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Navbar() {
  const location = useLocation();
  const { lang, t, dir } = useLanguage();
  const path = location.pathname;

  const navLinks = [
    {
      to: '/',
      label: t('الرئيسية', 'Home', 'Главная', 'Acasă', 'Accueil', 'Home'),
      icon: Home
    },
    {
      to: '/comparison',
      label: t('المقارنة الذكية', 'Comparison', 'Сравнение', 'Comparație', 'Comparaison', 'Confronto'),
      icon: Scale
    },
    {
      to: '/fast-track',
      label: t('المسار السريع', 'Fast Track', 'Быстрый старт', 'Fast Track', 'Parcours rapide', 'Fast Track'),
      icon: Zap
    }
  ];

  return (
    <nav className="fixed top-4 left-4 sm:left-6 z-50">
      <div className="flex items-center gap-1 sm:gap-2 p-1.5 rounded-full bg-[#070d1a]/85 backdrop-blur-2xl border border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.6)]">
        {/* If on subpage, show back button */}
        {path !== '/' && (
          <Link
            to="/"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/20 transition-all cursor-pointer"
            title={t('العودة للرئيسية', 'Back to Home', 'Назад', 'Înapoi', 'Retour', 'Torna indietro')}
          >
            {dir === 'rtl' ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
          </Link>
        )}

        {/* Navigation Tabs */}
        {navLinks.map((link) => {
          const isActive = path === link.to;
          const Icon = link.icon;

          return (
            <Link
              key={link.to}
              to={link.to}
              title={link.label}
              className={`relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer select-none ${
                isActive
                  ? 'text-cyan-300 shadow-[0_0_12px_rgba(0,243,255,0.2)]'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="navbar-active-pill"
                  className="absolute inset-0 rounded-full bg-cyan-950/80 border border-cyan-400/50 -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <Icon size={14} className={isActive ? 'text-cyan-300' : 'opacity-70'} />
              <span className={`hidden sm:inline ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
