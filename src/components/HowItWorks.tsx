import { motion } from 'motion/react';
import { Send, Video, Trophy } from 'lucide-react';
import { useLanguage, Language } from '../i18n/LanguageContext';

const STEPS = [
  {
    id: 1,
    icon: Send,
    title: {
      ar: 'قدم طلبك الآن',
      en: 'Apply Now',
      ru: 'Подать заявку',
      ro: 'Aplică acum',
      fr: 'Postuler maintenant',
      it: 'Applica ora'
    },
    desc: {
      ar: 'أرسل بياناتك عبر الواتساب أو رابط وكالتنا على تانجو.',
      en: 'Send us your details via WhatsApp or our Tango link.',
      ru: 'Отправьте нам свои данные через WhatsApp или по ссылке Tango.',
      ro: 'Trimite-ne detaliile tale prin WhatsApp sau link-ul Tango.',
      fr: 'Envoyez-nous vos coordonnées via WhatsApp ou notre lien Tango.',
      it: 'Inviaci i tuoi dettagli tramite WhatsApp o il nostro link Tango.'
    }
  },
  {
    id: 2,
    icon: Video,
    title: {
      ar: 'ابدأ البث المباشر',
      en: 'Start Streaming',
      ru: 'Начать трансляцию',
      ro: 'Începe transmisiunea',
      fr: 'Commencer la diffusion',
      it: 'Inizia lo streaming'
    },
    desc: {
      ar: 'ابدأ البث، ابني جمهورك الخاص، واعرض مواهبك.',
      en: 'Go live, build your audience, and showcase your talent.',
      ru: 'Начинайте эфир, собирайте аудиторию и демонстрируйте свой талант.',
      ro: 'Fii live, construiește-ți audiența și arată-ți talentul.',
      fr: 'Passez en direct, développez votre audience et montrez votre talent.',
      it: 'Vai in diretta, costruisci il tuo pubblico e mostra il tuo talento.'
    }
  },
  {
    id: 3,
    icon: Trophy,
    title: {
      ar: 'حقق الأرباح والنجاح',
      en: 'Earn & Grow',
      ru: 'Зарабатывай и расти',
      ro: 'Câștigă și crește',
      fr: 'Gagnez et grandissez',
      it: 'Guadagna e cresci'
    },
    desc: {
      ar: 'احصل على أعلى أرباح، مكافآت حصرية، ودعم فني خاص.',
      en: 'Receive highest payouts, exclusive rewards, and VIP support.',
      ru: 'Получайте самые высокие выплаты, эксклюзивные награды и VIP-поддержку.',
      ro: 'Primește cele mai mari plăți, recompense exclusive și suport VIP.',
      fr: 'Recevez les gains les plus élevés, des récompenses exclusives et un support VIP.',
      it: 'Ricevi i pagamenti più alti, premi esclusivi e supporto VIP.'
    }
  }
];

export function HowItWorks() {
  const { lang, t, dir } = useLanguage();
  return (
    <section className="relative z-10 w-full px-5 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="w-full text-center mb-8"
      >
        <h2 className={`text-[22px] md:text-[26px] font-bold text-white tracking-wide mb-2 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t('كيف تبدأ معنا؟', 'How It Works', 'Как это работает', 'Cum funcționează', 'Comment ça marche', 'Come funziona')}
        </h2>
      </motion.div>

      <div className="relative flex flex-col gap-5 md:gap-8">
        {/* Vertical connecting line */}
        <div className={`absolute ${dir === 'rtl' ? 'right-[23px] md:right-[31px]' : 'left-[23px] md:left-[31px]'} top-4 bottom-4 w-px bg-gradient-to-b from-[var(--color-brand-primary)]/50 via-white/10 to-transparent`} />

        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, type: "spring", stiffness: 200, damping: 20 }}
              className="relative flex items-start gap-4 md:gap-6 group"
            >
              {/* Icon Circle */}
              <div className="relative z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0a0a0a] border-2 border-white/10 group-hover:border-[var(--color-brand-primary)]/50 transition-colors duration-500 shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-white/60 group-hover:text-[var(--color-brand-primary)] transition-colors duration-500" />
                
                {/* Step Number Badge */}
                <div className={`absolute -top-1 ${dir === 'rtl' ? '-left-1' : '-right-1'} w-5 h-5 md:w-6 md:h-6 rounded-full bg-[var(--color-brand-primary)] text-black text-[10px] md:text-xs font-bold flex items-center justify-center font-mono shadow-[0_0_10px_rgba(0,243,255,0.4)]`}>
                  {step.id}
                </div>
              </div>

              {/* Text Content */}
              <div className={`flex flex-col pt-0.5 md:pt-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                <h4 className={`text-[15px] md:text-[17px] font-bold text-white mb-1 tracking-wide ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                  {(step.title as Record<Language, string>)[lang]}
                </h4>
                <p className={`text-[12px] md:text-[13px] text-white/50 leading-relaxed font-medium ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                  {(step.desc as Record<Language, string>)[lang]}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
