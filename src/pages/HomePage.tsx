import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Scale, Zap, Coins, ArrowRight, ArrowLeft } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { About } from '../components/About';
import { Features } from '../components/Features';
import { VideoGallery } from '../components/VideoGallery';
import { HowItWorks } from '../components/HowItWorks';
import { PortalTeaser } from '../components/PortalTeaser';
import { FAQ } from '../components/FAQ';
import { Team } from '../components/Team';
import { ApplicationForm } from '../components/ApplicationForm';
import { useLanguage } from '../i18n/LanguageContext';

export function HomePage() {
  const { lang, t, dir } = useLanguage();

  return (
    <div className="flex-1 w-full flex flex-col pt-0 pb-24 gap-10 md:gap-20">
      <Hero />
      <Stats />
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
              loading="lazy"
              decoding="async"
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
                <span>XENA REWARDS</span>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className={`text-[17px] sm:text-[18px] font-bold text-white mb-1.5 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                {t('نظام المكافآت على Xena Live', 'Rewards Policy on Xena Live', 'Система вознаграждений Xena Live', 'Sistemul de recompense Xena Live', 'Système de récompenses Xena Live', 'Sistema di ricompense Xena Live')}
              </h3>
              <p className={`text-[12.5px] sm:text-[13px] text-white/70 leading-relaxed mb-5 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                {t(
                  'نظام المكافآت يحدده تطبيق Xena Live حسب سياساته وشروطه، ويقوم فريق الإدارة بشرحه للمتقدم بعد التسجيل. لا توجد أي مخصصات شهرية ثابتة أو عوائد مؤكدة.',
                  'The rewards system is determined by Xena Live according to its platform policies and explained after registration. No fixed allocations or assured returns.',
                  'Система вознаграждений определяется Xena Live по официальным правилам и разъясняется после регистрации. Нет фиксированных зарплат или гарантированного дохода.',
                  'Sistemul de recompense este stabilit de Xena Live conform politicilor sale oficiale. Nu există salarii fixe sau venituri garantate.',
                  'Le système de récompenses est fixé par Xena Live selon ses règles officielles. Aucun salaire fixe ni revenu garanti.',
                  'Il sistema di ricompense è stabilito da Xena Live secondo le sue politiche ufficiali. Non ci sono stipendi fissi o rendimenti garantiti.'
                )}
              </p>
            </div>

            <Link
              to="/earnings"
              className="relative z-10 inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-pink-500/15 border border-pink-500/40 hover:bg-pink-500/25 text-pink-200 text-xs font-bold transition-all shadow-sm group-hover:border-pink-300"
            >
              <span>{t('عرض تفاصيل نظام المكافآت', 'View Rewards Policy', 'Подробнее о вознаграждениях', 'Vezi detalii recompense', 'Voir les récompenses', 'Vedi i dettagli')}</span>
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
              loading="lazy"
              decoding="async"
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
                  'مقارنة واضحة توضح الفروقات والمزايا التي يحصل عليها صناع المحتوى مع وكالة الأساطير في الدعم الفني، التدريب، وتطوير البث.',
                  'A clear comparison showing the advantages creators receive with Legends Agency in technical support, coaching, and growth.',
                  'Наглядное сравнение преимуществ авторов с агентством Legends в техподдержке, обучении и развитии.',
                  'O comparație clară care arată avantajele oferite de Agenția Legends în suport tehnic și instruire.',
                  'Un comparatif clair montrant les avantages offerts par l\'Agence Legends.',
                  'Un confronto chiaro che mostra i vantaggi offerti da Legends Agency.'
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
              loading="lazy"
              decoding="async"
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
                  'من إرسال بياناتك في الدقيقة الأولى حتى انطلاق أول بث مباشر بنجاح، خطوات واضحة ومباشرة لتنطلق بثقة.',
                  'From sending your details in minute 1 to launching your live broadcast, clear and direct milestones to launch with confidence.',
                  'От первого обращения до запуска эфира: четкие и понятные шаги для уверенного старта.',
                  'De la primul mesaj până la lansarea transmisiei: pași clari pentru un start de încredere.',
                  'Du premier contact jusqu\'au lancement de votre live : des étapes claires pour démarrer en confiance.',
                  'Dal primo messaggio al lancio della tua diretta: passaggi chiari per iniziare con sicurezza.'
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
      <PortalTeaser />
      <FAQ />
      <Team />
      <ApplicationForm />
    </div>
  );
}
