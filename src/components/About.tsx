import { motion } from 'motion/react';
import { Shield, Sparkles, TrendingUp, Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function About() {
  const { t, lang } = useLanguage();

  const badges = [
    {
      icon: Shield,
      text: {
        ar: 'دعم فني واستشارات تقنية',
        en: 'Technical Support & Guidance',
        ru: 'Техподдержка и консультации',
        ro: 'Suport tehnic și îndrumare',
        fr: 'Support technique et conseils',
        it: 'Supporto tecnico e consulenza'
      },
      color: '#00f3ff'
    },
    {
      icon: TrendingUp,
      text: {
        ar: 'تدريب على جودة البث والصوت',
        en: 'Stream Quality & Audio Training',
        ru: 'Обучение качеству звука и эфира',
        ro: 'Instruire pentru calitatea transmisiei',
        fr: 'Formation à la qualité de diffusion',
        it: 'Formazione sulla qualità dello streaming'
      },
      color: '#fbbf24'
    },
    {
      icon: Award,
      text: {
        ar: 'توجيه ومتابعة مستمرة',
        en: 'Continuous Mentorship & Growth',
        ru: 'Наставничество и развитие',
        ro: 'Îndrumare și dezvoltare continuă',
        fr: 'Mentorat et développement continu',
        it: 'Tutoraggio e crescita continua'
      },
      color: '#a855f7'
    }
  ];

  return (
    <section className="relative z-10 w-full px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        className="group relative overflow-hidden rounded-[22px] sm:rounded-[26px] p-4 sm:p-5 md:p-6 bg-gradient-to-b from-white/[0.04] via-[#050b18]/85 to-[#02050c]/98 backdrop-blur-2xl border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
      >
        {/* Background Cinematic Studio Image */}
        <img 
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-all duration-700 group-hover:scale-105 filter saturate-125 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02050c] via-[#040916]/85 to-[#040916]/50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Compact Content Container */}
        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-400/35 backdrop-blur-md mb-2 shadow-[0_0_12px_rgba(0,243,255,0.15)]">
            <Sparkles size={11} className="text-cyan-300" />
            <span className="text-[10px] font-mono tracking-widest text-cyan-200 uppercase font-bold">
              {lang === 'ar' ? 'نبذة عن الوكالة' : 'ABOUT LEGENDS'}
            </span>
          </div>

          {/* Headline */}
          <h2 className={`text-[18px] sm:text-[21px] md:text-[23px] font-bold text-white tracking-wide mb-2 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t(
              'وكالة الأساطير — دعم وتوجيه صناع المحتوى على Xena Live',
              'Legends Agency — Support & Mentorship for Creators on Xena Live',
              'Legends Agency — Поддержка и развитие авторов на Xena Live',
              'Legends Agency — Suport și îndrumare pentru creatori pe Xena Live',
              'Legends Agency — Soutien et encadrement des créateurs sur Xena Live',
              'Legends Agency — Supporto e tutoraggio per i creatori su Xena Live'
            )}
          </h2>

          {/* Concise Narrative */}
          <p className={`text-white/70 text-[12.5px] sm:text-[13.5px] leading-relaxed max-w-2xl mx-auto mb-4 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t(
              'نقدم الدعم الفني والتدريب على جودة البث والتوجيه المستمر لصناع المحتوى البالغين على تطبيق Xena Live، مع الالتزام الكامل بسياسات التطبيق.',
              'We provide technical support, streaming quality training, and continuous mentorship for adult creators on Xena Live, in full compliance with platform policies.',
              'Мы предоставляем техническую поддержку, обучение качеству трансляций и постоянное наставничество для совершеннолетних авторов на Xena Live в полном соответствии с правилами платформы.',
              'Oferim suport tehnic, instruire pentru calitatea transmisiunilor și îndrumare continuă pentru creatorii adulți pe Xena Live, în deplină conformitate cu politicile platformei.',
              'Nous offrons un support technique, une formation à la qualité de diffusion et un encadrement continu pour les créateurs adultes sur Xena Live, en totale conformité avec les règles.',
              'Offriamo supporto tecnico, formazione sulla qualità dello streaming e tutoraggio continuo per i creatori maggiorenni su Xena Live, nel pieno rispetto delle regole.'
            )}
          </p>

          {/* 3 Compact Horizontal Bento Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 w-full">
            {badges.map((item, bIdx) => {
              const Icon = item.icon;

              return (
                <div
                  key={bIdx}
                  className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-white/20 transition-all text-start"
                >
                  <div 
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${item.color}18`,
                      border: `1px solid ${item.color}40`,
                      color: item.color
                    }}
                  >
                    <Icon size={14} />
                  </div>
                  <span className={`text-[11.5px] sm:text-[12px] font-semibold text-white/85 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                    {item.text[lang]}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Minimal Bottom Bar */}
          <div className="mt-3.5 pt-2.5 border-t border-white/[0.05] flex items-center justify-center gap-3 sm:gap-5 text-white/45 text-[10px] sm:text-[10.5px] font-mono">
            <div className="flex items-center gap-1 text-pink-300/80">
              <CheckCircle2 size={11} className="text-pink-400" />
              <span>{t('وكالة شريكة', 'PARTNER AGENCY', 'ПАРТНЕРСКОЕ АГЕНТСТВО', 'AGENȚIE PARTENERĂ', 'AGENCE PARTENAIRE', 'AGENZIA PARTNER')}</span>
            </div>
            <span>•</span>
            <span>24/7 SUPPORT</span>
            <span>•</span>
            <span className="text-pink-300/90 font-bold">XENA LIVE</span>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
