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
      ar: 'أرسل بياناتك عبر الواتساب أو رابط وكالتنا على تانجو في ثوانٍ وبدون تعقيد.',
      en: 'Send us your details via WhatsApp or our Tango link in seconds.',
      ru: 'Отправьте нам свои данные через WhatsApp или по ссылке Tango за пару секунд.',
      ro: 'Trimite-ne detaliile tale prin WhatsApp sau link-ul Tango în câteva secunde.',
      fr: 'Envoyez-nous vos coordonnées via WhatsApp ou notre lien Tango en quelques secondes.',
      it: 'Inviaci i tuoi dettagli tramite WhatsApp o il nostro link Tango in pochi secondi.'
    },
    color: '#00f3ff'
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
      ar: 'ابدأ البث مع دعم كامل، ابنِ جمهورك الخاص، واستفد من كوتشينج تحسين الصوت والإضاءة.',
      en: 'Go live with full agency backup, build your audience, and get pro gear coaching.',
      ru: 'Начинайте эфир с полной поддержкой, собирайте аудиторию и развивайтесь.',
      ro: 'Fii live cu sprijin complet, construiește-ți audiența și primește îndrumare.',
      fr: 'Passez en direct avec notre soutien, développez votre audience et progressez.',
      it: 'Vai in diretta con il nostro supporto completo e costruisci il tuo pubblico.'
    },
    color: '#38bdf8'
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
      ar: 'احصل على أعلى أرباح، مكافآت حصرية كاش، ودعم فني خاص على مدار الساعة.',
      en: 'Receive highest payouts, guaranteed cash target bonuses, and 24/7 VIP support.',
      ru: 'Получайте самые высокие выплаты, денежные бонусы и круглосуточную поддержку.',
      ro: 'Primește cele mai mari plăți, bonusuri în numerar și asistență VIP 24/7.',
      fr: 'Recevez les paiements les plus élevés, des bonus garantis et un support 24/7.',
      it: 'Ricevi i massimi pagamenti, bonus garantiti in contanti e supporto VIP 24/7.'
    },
    color: '#fbbf24'
  }
];

export function HowItWorks() {
  const { lang, t, dir } = useLanguage();

  return (
    <section className="relative z-10 w-full px-4 sm:px-6 max-w-3xl mx-auto">
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
            {t('آلية العمل', 'Simple Workflow', 'Как начать', 'Cum funcționează', 'Comment ça marche', 'Come funziona')}
          </span>
        </div>

        <h2 className={`text-[20px] sm:text-[24px] md:text-[26px] font-bold text-white tracking-wide mb-1.5 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t('كيف تبدأ رحلتك معنا؟', 'How It Works', 'Как это работает', 'Cum funcționează', 'Comment ça marche', 'Come funziona')}
        </h2>

        <p className={`text-[12.5px] sm:text-[14px] text-white/60 max-w-md mx-auto ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t(
            'ثلاث خطوات بسيطة ومباشرة لتنطلق في عالم البث المباشر الاحترافي وتحقق أعلى العوائد.',
            'Three direct steps to launch your professional streaming career and maximize revenue.',
            'Три простых шага, чтобы начать профессиональную карьеру и максимизировать доход.',
            'Trei pași simpli pentru a-ți lansa cariera de streamer profesionist.',
            'Trois étapes simples pour lancer votre carrière de diffuseur professionnel.',
            'Tre semplici passaggi per lanciare la tua carriera da streamer professionista.'
          )}
        </p>
      </motion.div>

      <div className="relative flex flex-col gap-4 sm:gap-6">
        {/* Vertical connecting line */}
        <div className={`absolute ${dir === 'rtl' ? 'right-[23px] sm:right-[27px]' : 'left-[23px] sm:left-[27px]'} top-6 bottom-6 w-px bg-gradient-to-b from-cyan-400/60 via-blue-500/20 to-transparent`} />

        {STEPS.map((step, idx) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.15, type: "spring", stiffness: 220, damping: 20 }}
              className="group relative flex items-start gap-3.5 sm:gap-5 p-3.5 sm:p-4 rounded-[20px] bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-cyan-400/30 backdrop-blur-xl transition-all duration-300"
            >
              {/* Icon Circle with Unified Ring */}
              <div 
                className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#040914] border shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm"
                style={{
                  borderColor: `${step.color}50`,
                  boxShadow: `0 0 15px ${step.color}20`
                }}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: step.color }} />
              </div>

              {/* Text Info */}
              <div className="flex flex-col flex-1 pt-1 text-start">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/[0.04] text-white/50 border border-white/5">
                    0{step.id}
                  </span>
                  <h3 className={`text-[14.5px] sm:text-[16px] font-bold text-white group-hover:text-cyan-100 transition-colors ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                    {step.title[lang]}
                  </h3>
                </div>

                <p className={`text-[12px] sm:text-[13px] text-white/60 leading-relaxed ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                  {step.desc[lang]}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
