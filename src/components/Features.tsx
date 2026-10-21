import { motion } from 'motion/react';
import { Headset, Mic, BarChart2, Rocket } from 'lucide-react';
import { useLanguage, Language } from '../i18n/LanguageContext';

const FEATURES = [
  {
    id: 1,
    icon: Headset,
    title: {
      ar: 'دعم فني خاص 24/7',
      en: '24/7 Technical Support',
      ru: 'Круглосуточная техподдержка',
      ro: 'Suport tehnic 24/7',
      fr: 'Support technique 24/7',
      it: 'Supporto tecnico 24/7'
    },
    desc: {
      ar: 'متابعة واستشارات لمساعدتك في أي عقبات تقنية تواجهك',
      en: 'Dedicated guidance to help you resolve technical hurdles',
      ru: 'Консультации и помощь в решении технических вопросов',
      ro: 'Asistență dedicată pentru rezolvarea problemelor tehnice',
      fr: 'Assistance dédiée pour résoudre les difficultés techniques',
      it: 'Assistenza dedicata per risolvere eventuali ostacoli tecnici'
    },
    bgImage: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=800&auto=format&fit=crop',
    color: '#00f3ff'
  },
  {
    id: 2,
    icon: Mic,
    title: {
      ar: 'تدريب على الصوت والإضاءة وتقديم المحتوى',
      en: 'Audio, Lighting & Presentation Training',
      ru: 'Обучение звуку, свету и подаче контента',
      ro: 'Instruire pentru sunet, lumini și prezentare',
      fr: 'Formation son, éclairage et présentation',
      it: 'Formazione su audio, luci e presentazione'
    },
    desc: {
      ar: 'ورش تدريبية ونصائح عملية لرفع جودة البث وجذب الجمهور',
      en: 'Practical workshops and tips to improve stream quality and engagement',
      ru: 'Практические советы и тренинги для улучшения качества эфира',
      ro: 'Workshop-uri practice și sfaturi pentru îmbunătățirea transmisiei',
      fr: 'Ateliers pratiques et conseils pour améliorer la qualité du direct',
      it: 'Workshop pratici e consigli per migliorare la qualità dello streaming'
    },
    bgImage: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop',
    color: '#fbbf24'
  },
  {
    id: 3,
    icon: BarChart2,
    title: {
      ar: 'متابعة وتقارير أداء دورية',
      en: 'Performance Reviews & Periodic Reports',
      ru: 'Регулярные отчеты и аналитика эффективности',
      ro: 'Monitorizare și rapoarte periodice de performanță',
      fr: 'Suivi et rapports périodiques de performance',
      it: 'Monitoraggio e report periodici sulle prestazioni'
    },
    desc: {
      ar: 'تحليل ساعات البث وتفاعل الجمهور لمساعدتك على التطوير المستمر',
      en: 'Analysis of broadcast hours and audience engagement for continuous growth',
      ru: 'Анализ часов эфира и вовлеченности аудитории для постоянного роста',
      ro: 'Analiza orelor de transmisie și interacțiunii pentru dezvoltare continuă',
      fr: 'Analyse des heures de direct et de l\'engagement pour une croissance continue',
      it: 'Analisi delle ore di trasmissione e del coinvolgimento per la crescita'
    },
    bgImage: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=800&auto=format&fit=crop',
    color: '#38bdf8'
  },
  {
    id: 4,
    icon: Rocket,
    title: {
      ar: 'نمو سريع وتطوير المحتوى',
      en: 'Content Growth & Reach',
      ru: 'Развитие контента и рост',
      ro: 'Creșterea conținutului și promovare',
      fr: 'Croissance et développement du contenu',
      it: 'Crescita e sviluppo dei contenuti'
    },
    desc: {
      ar: 'خطط مدروسة لدفع البث المباشر نحو التميز وجذب المتابعين',
      en: 'Targeted strategies pushing your stream toward excellence',
      ru: 'Стратегии для развития вашего эфира и привлечения аудитории',
      ro: 'Strategii clare care îți propulsează transmisia spre excelență',
      fr: 'Stratégies ciblées pour propulser votre direct vers l\'excellence',
      it: 'Strategie mirate per portare la tua diretta all\'eccellenza'
    },
    bgImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
    color: '#a855f7'
  },
];

export function Features() {
  const { lang, t } = useLanguage();

  return (
    <section className="relative z-10 w-full px-4 sm:px-6 flex flex-col items-center justify-center max-w-4xl mx-auto">
      {/* Unified Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        className="w-full text-center mb-6 sm:mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-400/30 backdrop-blur-md mb-2.5 shadow-[0_0_15px_rgba(0,243,255,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-cyan-300 uppercase font-semibold">
            {t('مميزات الوكالة', 'Agency Advantages', 'Преимущества агентства', 'Avantajele agenției', 'Avantages de l\'agence', 'Vantaggi dell\'agenzia')}
          </span>
        </div>

        <h2 className={`text-[20px] sm:text-[24px] md:text-[26px] font-bold text-white tracking-wide mb-1.5 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t('لماذا تختار وكالة الأساطير؟', 'Why Choose Legends Agency?', 'Почему выбирают агентство Legends?', 'De ce să alegi agenția Legends?', 'Pourquoi choisir l\'Agence Legends ?', 'Perché scegliere Legends Agency?')}
        </h2>

        <p className={`text-[12.5px] sm:text-[14px] text-white/60 max-w-md mx-auto ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t(
            'منظومة متكاملة تضمن للمذيع التركيز على إبداعه وترك كل التعقيدات الإدارية والتقنية علينا.',
            'A complete ecosystem allowing creators to focus on their art while we manage the rest.',
            'Комплексная система, позволяющая авторам сосредоточиться на творчестве.',
            'Un ecosistem complet care permite creatorilor să se concentreze pe conținut.',
            'Un écosystème complet permettant aux créateurs de se concentrer sur leur contenu.',
            'Un ecosistema completo che permette ai creator di concentrarsi sui loro contenuti.'
          )}
        </p>
      </motion.div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full">
        {FEATURES.map((feature, idx) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.08, type: "spring", stiffness: 220, damping: 20 }}
              className="group relative flex flex-col items-start justify-between p-4 sm:p-5 bg-gradient-to-b from-white/[0.04] via-[#070d18]/85 to-[#03060d]/95 border border-white/[0.08] hover:border-cyan-400/40 rounded-[20px] sm:rounded-[24px] overflow-hidden transition-all duration-400 shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer min-h-[170px] sm:min-h-[190px]"
            >
              {/* Background Image with Cinematic Depth */}
              <img 
                src={feature.bgImage}
                alt=""
                aria-hidden="true"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-35 transition-all duration-700 group-hover:scale-105 filter saturate-125 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02050c] via-[#040916]/85 to-[#040916]/50 pointer-events-none" />

              {/* Ambient Glow */}
              <div 
                className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: feature.color }}
              />

              {/* Icon Container */}
              <div 
                className="w-10 h-10 rounded-[14px] flex items-center justify-center shrink-0 mb-3 relative z-10 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                style={{
                  backgroundColor: `${feature.color}18`,
                  border: `1px solid ${feature.color}45`,
                  color: feature.color
                }}
              >
                <Icon size={20} />
              </div>

              {/* Title & Desc */}
              <div className="relative z-10 w-full text-start">
                <h3 className={`text-[13.5px] sm:text-[15px] font-bold text-white mb-1 group-hover:text-cyan-100 transition-colors leading-tight ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                  {feature.title[lang]}
                </h3>
                <p className={`text-[10.5px] sm:text-[11.5px] text-white/60 leading-relaxed line-clamp-2 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                  {feature.desc[lang]}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
