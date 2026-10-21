import { motion } from 'motion/react';
import { Check, X, ShieldAlert, Zap, TrendingUp, Sparkles, Award } from 'lucide-react';
import { useLanguage, Language } from '../i18n/LanguageContext';

interface ComparisonItem {
  id: string;
  icon: React.ElementType;
  title: Record<Language, string>;
  solo: Record<Language, string>;
  agency: Record<Language, string>;
}

const COMPARISONS: ComparisonItem[] = [
  {
    id: 'support',
    icon: Zap,
    title: {
      ar: 'سرعة الدعم والمساعدة التقنية',
      en: 'Technical Support & Assistance',
      ru: 'Скорость техподдержки',
      ro: 'Suport tehnic și asistență',
      fr: 'Support technique et assistance',
      it: 'Supporto tecnico e assistenza'
    },
    solo: {
      ar: 'انتظار أوقات طويلة للرد على المشاكل والاستفسارات التقنية',
      en: 'Long waiting times for replies to technical inquiries',
      ru: 'Долгое ожидание ответов на технические вопросы',
      ro: 'Timp îndelungat de așteptare pentru probleme tehnice',
      fr: 'Délais d\'attente prolongés pour les soucis techniques',
      it: 'Lunghi tempi di attesa per problemi tecnici'
    },
    agency: {
      ar: 'دعم فني سريع لمساعدتك في المشاكل التقنية وتوجيهك خطوة بخطوة',
      en: 'Fast technical support helping you with technical issues step by step',
      ru: 'Оперативная техподдержка и помощь в решении технических вопросов',
      ro: 'Suport tehnic rapid pentru a te ajuta pas cu pas cu problemele tehnice',
      fr: 'Support technique rapide pour vous aider pas à pas',
      it: 'Supporto tecnico rapido per aiutarti passo dopo passo'
    }
  },
  {
    id: 'exposure',
    icon: Sparkles,
    title: {
      ar: 'الظهور وتطوير البث',
      en: 'Discoverability & Growth',
      ru: 'Видимость и развитие эфира',
      ro: 'Vizibilitate și dezvoltare',
      fr: 'Visibilité et progression',
      it: 'Visibilità e crescita'
    },
    solo: {
      ar: 'ظهور عشوائي للبث وصعوبة في فهم خوارزميات التفاعل وجذب المتابعين',
      en: 'Random stream visibility and difficulty understanding engagement',
      ru: 'Случайные показы и сложности с привлечением аудитории',
      ro: 'Vizibilitate aleatorie și dificultăți în atragerea publicului',
      fr: 'Visibilité aléatoire et difficulté à fidéliser le public',
      it: 'Visibilità casuale e difficoltà ad attirare spettatori'
    },
    agency: {
      ar: 'نصائح وتوجيهات عملية لتحسين ظهور البث وزيادة تفاعل المتابعين',
      en: 'Practical tips and guidance to boost visibility and audience engagement',
      ru: 'Практические советы для улучшения видимости стрима и вовлеченности',
      ro: 'Sfaturi practice și îndrumare pentru creșterea vizibilității și interacțiunii',
      fr: 'Conseils pratiques pour améliorer la visibilité et l\'engagement',
      it: 'Consigli pratici per aumentare la visibilità e il coinvolgimento del pubblico'
    }
  },
  {
    id: 'coaching',
    icon: ShieldAlert,
    title: {
      ar: 'التدريب وتجهيز جودة البث',
      en: 'Coaching & Production Quality',
      ru: 'Обучение и настройка стрима',
      ro: 'Instruire și calitatea transmisiunii',
      fr: 'Coaching et qualité de diffusion',
      it: 'Coaching e qualità dello streaming'
    },
    solo: {
      ar: 'تجارب فردية وضياع الوقت في معرفة الإضاءة وإعدادات الصوت المناسبة',
      en: 'Trial and error alone, wasting time configuring audio, mic, and lighting',
      ru: 'Ошибки вслепую, трата времени на настройку звука, микрофона и света',
      ro: 'Încercări pe cont propriu, timp pierdut configurând sunetul și luminile',
      fr: 'Essais et erreurs seul, perte de temps sur la configuration du son et de la lumière',
      it: 'Tentativi ed errori da solo, tempo perso a calibrare audio, microfono e luci'
    },
    agency: {
      ar: 'إرشادات عملية لضبط المايك والإضاءة واحتراف التواصل مع المشاهدين',
      en: 'Actionable guidance on microphone, lighting, and viewer communication',
      ru: 'Практические рекомендации по настройке микрофона, света и общению со зрителями',
      ro: 'Îndrumare practică pentru microfon, iluminare și comunicarea cu spectatorii',
      fr: 'Conseils pratiques pour le micro, l\'éclairage et la communication avec le public',
      it: 'Linee guida pratiche per microfono, luci e comunicazione con gli spettatori'
    }
  }
];

export function Comparison() {
  const { lang, t } = useLanguage();

  return (
    <section className="relative z-10 w-full px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-center mb-7 sm:mb-9"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-400/30 backdrop-blur-md mb-2.5 shadow-[0_0_15px_rgba(0,243,255,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-cyan-300 uppercase font-semibold">
            {t('المقارنة الذكية', 'Smart Comparison', 'Умное сравнение', 'Comparație inteligentă', 'Comparaison intelligente', 'Confronto intelligente')}
          </span>
        </div>

        <h2 className={`text-[20px] sm:text-[25px] md:text-[28px] font-bold text-white tracking-wide mb-2 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t(
            'البث بمفردك ❌ مقابل البث مع وكالة الأساطير ✅',
            'Solo Streamer ❌ vs Legends Agency ✅',
            'Стриминг в одиночку ❌ против агентства Legends ✅',
            'Streamer solo ❌ vs Agenția Legends ✅',
            'Streameur solo ❌ vs Agence Legends ✅',
            'Streamer solitario ❌ vs Legends Agency ✅'
          )}
        </h2>

        <p className={`text-[12.5px] sm:text-[14px] text-white/60 max-w-lg mx-auto ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t(
            'لماذا يختار صناع المحتوى الانضمام إلينا بدلاً من البث المستقل؟ إليك أهم الفروقات والمزايا المهنية.',
            'Why do creators choose Legends Agency over going solo? Real, tangible advantages that support your journey.',
            'Почему авторы выбирают агентство Legends? Реальные преимущества, помогающие в вашем развитии.',
            'De ce aleg creatorii agenția Legends în locul independenței? Avantaje reale care îți sprijină parcursul.',
            'Pourquoi les créateurs choisissent l\'agence Legends ? Des avantages concrets qui soutiennent votre progression.',
            'Perché i creator scelgono Legends Agency? Vantaggi reali che supportano il tuo percorso.'
          )}
        </p>
      </motion.div>

      {/* Comparison Cards List */}
      <div className="flex flex-col gap-3.5 sm:gap-4">
        {COMPARISONS.map((item, idx) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="group relative overflow-hidden rounded-[20px] sm:rounded-[22px] bg-gradient-to-b from-white/[0.04] to-[#040813]/90 border border-white/[0.08] backdrop-blur-xl p-4 sm:p-5 hover:border-cyan-400/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
              {/* Feature Title Row */}
              <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-white/[0.06]">
                <div className="w-8 h-8 rounded-xl bg-cyan-950/70 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shadow-[0_0_10px_rgba(0,243,255,0.2)] shrink-0">
                  <Icon size={16} />
                </div>
                <h3 className={`text-[14px] sm:text-[15.5px] font-bold text-white tracking-wide ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                  {item.title[lang]}
                </h3>
              </div>

              {/* Two Column Comparison Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                {/* 1. Solo Streamer (Red / Negative) */}
                <div className="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-[15px] bg-red-950/15 border border-red-500/20 text-start">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                    <X size={12} strokeWidth={3} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] sm:text-[11px] font-bold text-red-400/90 uppercase font-mono tracking-wider mb-0.5">
                      {t('البث بمفردك', 'Solo Streamer', 'В одиночку', 'Pe cont propriu', 'En solo', 'Da solo')}
                    </span>
                    <p className={`text-[12px] sm:text-[12.5px] text-white/65 leading-relaxed ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                      {item.solo[lang]}
                    </p>
                  </div>
                </div>

                {/* 2. Legends Agency (Cyan-Gold / Dominant Positive) */}
                <div className="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-[15px] bg-cyan-950/30 border border-cyan-400/40 text-start shadow-[0_0_15px_rgba(0,243,255,0.1)] relative overflow-hidden group-hover:border-cyan-300/60 transition-colors">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl pointer-events-none" />
                  <div className="w-5 h-5 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5 shadow-[0_0_8px_rgba(0,243,255,0.4)]">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <div className="flex flex-col relative z-10">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[10px] sm:text-[11px] font-bold text-cyan-300 uppercase font-mono tracking-wider">
                        {t('مع وكالة الأساطير', 'With Legends Agency', 'С агентством Legends', 'Cu Agenția Legends', 'Avec l\'Agence Legends', 'Con Legends Agency')}
                      </span>
                      <span className="px-1.5 py-0.2 rounded-full bg-amber-400/20 text-amber-300 text-[8.5px] font-bold font-mono border border-amber-400/30">
                        VIP
                      </span>
                    </div>
                    <p className={`text-[12px] sm:text-[12.5px] text-cyan-100/90 font-medium leading-relaxed ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                      {item.agency[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
