import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Scale, Zap } from 'lucide-react';
import { EarningsGuide } from '../components/EarningsGuide';
import { useLanguage } from '../i18n/LanguageContext';

export function EarningsPage() {
  const { lang, t, dir } = useLanguage();

  return (
    <div className="w-full flex flex-col items-center pt-20 pb-16">
      {/* Top Breadcrumb Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl px-4 sm:px-6 mb-4 flex items-center justify-between"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-950/30 text-xs font-semibold text-white/80 hover:text-cyan-200 transition-all cursor-pointer"
        >
          {dir === 'rtl' ? <ArrowRight size={13} /> : <ArrowLeft size={13} />}
          <span>{t('العودة للرئيسية', 'Back to Home', 'Назад на главную', 'Înapoi acasă', 'Retour à l\'accueil', 'Torna alla home')}</span>
        </Link>

        {/* Quick links to Comparison & Fast Track */}
        <div className="flex items-center gap-3">
          <Link
            to="/comparison"
            className="inline-flex items-center gap-1.5 text-xs text-cyan-300/80 hover:text-cyan-200 transition-colors font-mono"
          >
            <Scale size={12} />
            <span>{t('المقارنة الذكية', 'Comparison', 'Сравнение', 'Comparație', 'Comparatif', 'Confronto')}</span>
          </Link>

          <span className="text-white/20">|</span>

          <Link
            to="/fast-track"
            className="inline-flex items-center gap-1.5 text-xs text-purple-300/80 hover:text-purple-200 transition-colors font-mono"
          >
            <Zap size={12} />
            <span>{t('المسار السريع', 'Fast Track', 'Быстрый старт', 'Fast Track', 'Parcours rapide', 'Fast Track')}</span>
            {dir === 'rtl' ? <ArrowLeft size={12} /> : <ArrowRight size={12} />}
          </Link>
        </div>
      </motion.div>

      {/* Main Earnings Guide Component */}
      <EarningsGuide />
    </div>
  );
}
