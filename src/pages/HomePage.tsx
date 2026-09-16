import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Scale, Zap, Coins, ArrowRight, ArrowLeft } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { LinkHub } from '../components/LinkHub';
import { About } from '../components/About';
import { Features } from '../components/Features';
import { VideoGallery } from '../components/VideoGallery';
import { HowItWorks } from '../components/HowItWorks';
import { SuccessStories } from '../components/SuccessStories';
import { PortalTeaser } from '../components/PortalTeaser';
import { FAQ } from '../components/FAQ';
import { Team } from '../components/Team';
import { useLanguage } from '../i18n/LanguageContext';

export function HomePage() {
  const { lang, t, dir } = useLanguage();

  return (
    <div className="flex-1 w-full flex flex-col pt-6 pb-24 gap-10 md:gap-20">
      <Hero />
      <Stats />
      <LinkHub />
      <About />

      {/* Interactive Hub Teasers to Dedicated Subpages */}
      <section className="relative z-10 w-full px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 w-full">
          {/* 1. Earnings & Salary Guide Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-[24px] bg-gradient-to-b from-white/[0.04] via-[#1a071c]/90 to-[#0c0210]/98 border border-white/[0.08] hover:border-pink-500/50 backdrop-blur-xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Expressive Background: High-End Crypto & Wealth Glow */}
            <img 
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop"
              alt="Earnings & Salary Guide"
              aria-hidden="true"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-30 group-hover:opacity-45 transition-all duration-700 group-hover:scale-105 filter saturate-150 contrast-125 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0210] via-[#120418]/80 to-[#08020e]/40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-36 h-36 bg-pink-500/15 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="w-11 h-11 rounded-[16px] bg-pink-950/80 border border-pink-500/40 flex items-center justify-center text-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                <Coins size={22} />
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-pink-950/70 border border-pink-500/40 text-pink-300 text-[10px] font-mono font-bold backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping" />
                <span>UP TO $66K/MO</span>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className={`text-[17px] sm:text-[18px] font-bold text-white mb-1.5 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                {t('دليل الأرباح والرواتب: 30 مستوى', 'Earnings & Salary: 30-Tier Ladder', 'Доходы и зарплаты: 30 уровней', 'Ghid de câștiguri: 30 de niveluri', 'Guide des gains : 30 niveaux', 'Guida ai guadagni: 30 livelli')}
              </h3>
              <p className={`text-[12.5px] sm:text-[13px] text-white/70 leading-relaxed mb-5 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                {t(
                  'جدول مفصل حتى 66,824$ شهرياً، حاسبة أرباح تفاعلية، قواعد الساعات الشهرية، ووسائل السحب بكافة الدول.',
                  'Full ladder up to $66,824/mo, interactive calculator, monthly hours rules, and approved payout channels.',
                  'Таблица выплат до $66,824/мес, калькулятор и способы вывода.',
                  'Grilă până la 66.824$/lună, calculator interactiv și metode de retragere.',
                  'Grille jusqu\'à 66 824$/mois, calculateur interactif et retraits.',
                  'Scala fino a $66.824/mese, calcolatore interattivo e prelievi.'
                )}
              </p>
            </div>

            <Link
              to="/earnings"
              className="relative z-10 inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-pink-500/15 border border-pink-500/40 hover:bg-pink-500/25 text-pink-200 text-xs font-bold transition-all shadow-sm group-hover:border-pink-300"
            >
              <span>{t('عرض جدول الرواتب والسحب', 'View Earnings & Payouts', 'Смотреть таблицу', 'Vezi grila de salarii', 'Voir la grille', 'Vedi la tabella')}</span>
              {dir === 'rtl' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
            </Link>
          </motion.div>

          {/* 2. Comparison Page Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.05 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-[24px] bg-gradient-to-b from-white/[0.04] via-[#060e1d]/90 to-[#02050e]/98 border border-white/[0.08] hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Expressive Background: High-End Pro Studio Streaming & Broadcast Mic */}
            <img 
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop"
              alt="Professional Streaming Studio"
              aria-hidden="true"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-30 group-hover:opacity-45 transition-all duration-700 group-hover:scale-105 filter saturate-150 contrast-125 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-[#040c1a]/80 to-[#030814]/40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-400/15 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="w-11 h-11 rounded-[16px] bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                <Scale size={22} />
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 text-[10px] font-mono font-bold backdrop-blur-md">
                <span className="text-red-400">❌ SOLO</span>
                <span className="text-white/40">VS</span>
                <span className="text-emerald-400">✅ VIP</span>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className={`text-[17px] sm:text-[18px] font-bold text-white mb-1.5 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                {t('المقارنة الذكية: منفرداً vs الأساطير', 'Solo vs Legends Agency Comparison', 'Сравнение: В одиночку против Legends', 'Comparație: Solo vs Agenția Legends', 'Comparatif : Solo vs Agence Legends', 'Confronto: Da solo vs Legends Agency')}
              </h3>
              <p className={`text-[12.5px] sm:text-[13px] text-white/70 leading-relaxed mb-5 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                {t(
                  'جدول مفصل بالأرقام يوضح لماذا يربح مذيعو الأساطير أضعاف البث المستقل في الدعم والبونص والانتشار وفك الحظر.',
                  'Detailed side-by-side data showing why Legends creators multiply their earnings, battle support, and account immunity.',
                  'Подробная таблица, показывающая преимущества стриминга с агентством Legends.',
                  'Date detaliate care arată de ce creatorii Legends își multiplică veniturile.',
                  'Données détaillées expliquant pourquoi nos créateurs multiplient leurs revenus.',
                  'Dati dettagliati che mostrano perché i nostri creator moltiplicano i loro guadagni.'
                )}
              </p>
            </div>

            <Link
              to="/comparison"
              className="relative z-10 inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-cyan-400/15 border border-cyan-400/40 hover:bg-cyan-400/25 text-cyan-200 text-xs font-bold transition-all shadow-sm group-hover:border-cyan-300"
            >
              <span>{t('افتح جدول المقارنة الكامل', 'Open Full Comparison', 'Открыть сравнение', 'Deschide comparația', 'Voir le comparatif', 'Apri il confronto')}</span>
              {dir === 'rtl' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
            </Link>
          </motion.div>

          {/* 3. Fast Track Page Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-[24px] bg-gradient-to-b from-white/[0.04] via-[#10071c]/90 to-[#07020e]/98 border border-white/[0.08] hover:border-purple-400/50 backdrop-blur-xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Expressive Background: High-Velocity Rocket Launch Into Space (24H Takeoff to the Top) */}
            <img 
              src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=1000&auto=format&fit=crop"
              alt="Fast Track 24H Launch"
              aria-hidden="true"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-35 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105 filter saturate-150 contrast-125 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07020e] via-[#0e051a]/80 to-[#0b0314]/40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-36 h-36 bg-purple-400/15 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="w-11 h-11 rounded-[16px] bg-purple-950/80 border border-purple-400/40 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <Zap size={22} />
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-950/70 border border-purple-400/40 text-purple-300 text-[10px] font-mono font-bold backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                <span>24H FAST TRACK</span>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className={`text-[17px] sm:text-[18px] font-bold text-white mb-1.5 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                {t('المسار السريع: كيف تصبح أسطورة خلال 24 ساعة؟', 'Fast Track: Become a Legend in 24h', 'Быстрый старт: Как стать легендой?', 'Fast Track: Cum devii o legendă?', 'Parcours rapide : Devenir une légende', 'Fast Track: Come diventare una leggenda?')}
              </h3>
              <p className={`text-[12.5px] sm:text-[13px] text-white/70 leading-relaxed mb-5 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                {t(
                  'من إرسال الـ ID في الدقيقة الأولى حتى استلام أول كاش بونص، خطة إقلاع صاروخية واضحة تنقلك للقمة.',
                  'From sending your ID in minute 1 to receiving your first cash bonus, an explosive roadmap to reaching the top.',
                  'От первой минуты до первого бонуса: четкий пошаговый план выхода на вершину.',
                  'De la minutul 1 până la primul bonus: pași clari care te duc în top.',
                  'De la première minute au premier bonus : un guide étape par étape vers le sommet.',
                  'Dal primo minuto al primo bonus: passaggi chiari per raggiungere la vetta.'
                )}
              </p>
            </div>

            <Link
              to="/fast-track"
              className="relative z-10 inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-purple-400/15 border border-purple-400/40 hover:bg-purple-400/25 text-purple-200 text-xs font-bold transition-all shadow-sm group-hover:border-purple-300"
            >
              <span>{t('عرض مسار الـ 24 ساعة', 'View 24h Roadmap', 'Смотреть план', 'Vezi protocolul', 'Voir le parcours', 'Visualizza il percorso')}</span>
              {dir === 'rtl' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
            </Link>
          </motion.div>
        </div>
      </section>

      <Features />
      <VideoGallery />
      <HowItWorks />
      <SuccessStories />
      <PortalTeaser />
      <FAQ />
      <Team />
    </div>
  );
}
