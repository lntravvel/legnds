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
      ar: 'أرسل بياناتك عبر نموذج الانضمام أو رابط وكالتنا على زينا لايف في ثوانٍ وبدون تعقيد.',
      en: 'Submit your details via the application form or our agency link on Xena Live.',
      ru: 'Отправьте нам свои данные через форму заявки или по ссылке агентства.',
      ro: 'Trimite detaliile tale prin formularul de înscriere sau link-ul agenției.',
      fr: 'Envoyez vos coordonnées via le formulaire d\'inscription ou le lien de l\'agence.',
      it: 'Invia i tuoi dati tramite il modulo di candidatura o il link dell\'agenzia.'
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
      ar: 'ابدأ البث مع دعم كامل، ابنِ جمهورك الخاص، واستفد من نصائح تحسين الصوت والإضاءة.',
      en: 'Go live with full agency backup, build your audience, and get stream gear tips.',
      ru: 'Начинайте эфир с полной поддержкой, собирайте аудиторию и улучшайте стрим.',
      ro: 'Fii live cu sprijin complet, construiește-ți audiența și primește sfaturi tehnice.',
      fr: 'Passez en direct avec notre soutien, développez votre audience et progressez.',
      it: 'Vai in diretta con il nostro supporto completo e migliora il tuo streaming.'
    },
    color: '#38bdf8'
  },
  {
    id: 3,
    icon: Trophy,
    title: {
      ar: 'طوّر محتواك',
      en: 'Develop Your Content',
      ru: 'Развивайте контент',
      ro: 'Dezvoltă-ți conținutul',
      fr: 'Développez votre contenu',
      it: 'Sviluppa i tuoi contenuti'
    },
    desc: {
      ar: 'استفد من التوجيه المستمر، ومتابعة الأداء الدورية، والدعم الفني لتحسين جودة محتواك.',
      en: 'Benefit from ongoing mentorship, periodic performance reviews, and technical support.',
      ru: 'Получайте постоянное наставничество, регулярные отчеты и техническую поддержку.',
      ro: 'Beneficiază de îndrumare continuă, evaluări periodice și suport tehnic dedicat.',
      fr: 'Bénéficiez d\'un encadrement continu, de rapports périodiques et d\'un support technique.',
      it: 'Approfitta del tutoraggio continuo, dei report periodici e del supporto tecnico.'
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
            'ثلاث خطوات بسيطة ومباشرة لتنطلق في عالم البث المباشر الاحترافي وتطور مهاراتك.',
            'Three direct steps to launch your professional streaming career and develop your skills.',
            'Три простых шага, чтобы начать профессиональную карьеру и развить навыки.',
            'Trei pași simpli pentru a-ți lansa cariera și a-ți dezvolta abilitățile.',
            'Trois étapes simples pour lancer votre carrière et développer vos compétences.',
            'Tre semplici passaggi per lanciare la tua carriera e sviluppare le tue competenze.'
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
