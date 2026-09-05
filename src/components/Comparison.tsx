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
      ar: 'سرعة الدعم وحل المشاكل',
      en: 'Support & Issue Resolution',
      ru: 'Поддержка и решение проблем',
      ro: 'Suport și rezolvarea problemelor',
      fr: 'Support et résolution des problèmes',
      it: 'Supporto e risoluzione dei problemi'
    },
    solo: {
      ar: 'انتظار أيام عبر الدعم الآلي، وخطر إغلاق الحساب دون سابق إنذار',
      en: 'Days of waiting via automated bots, risk of account ban without notice',
      ru: 'Дни ожидания через ботов, риск блокировки аккаунта без предупреждения',
      ro: 'Zile de așteptare prin roboți automați, risc de blocare a contului fără preaviz',
      fr: 'Des jours d\'attente via des bots, risque de bannissement sans préavis',
      it: 'Giorni di attesa tramite bot, rischio di ban dell\'account senza preavviso'
    },
    agency: {
      ar: 'خط مباشر 24/7 مع مسؤولي تانجو وزينا وحل فوري لأي بلاغ أو حظر في دقائق',
      en: 'Direct 24/7 hotline to Tango & Zeena officials; instant fix for bans in minutes',
      ru: 'Прямая связь 24/7 с администрацией Tango и Zeena, мгновенное снятие банов',
      ro: 'Linie directă 24/7 cu oficialii Tango și Zeena, rezolvare imediată în câteva minute',
      fr: 'Ligne directe 24/7 avec les responsables Tango & Zeena, déblocage en minutes',
      it: 'Linea diretta 24/7 con i funzionari Tango e Zeena, sblocco immediato in pochi minuti'
    }
  },
  {
    id: 'earnings',
    icon: TrendingUp,
    title: {
      ar: 'الأرباح والمكافآت الإضافية',
      en: 'Earnings & Bonus Rewards',
      ru: 'Доходы и бонусные выплаты',
      ro: 'Câștiguri și bonusuri',
      fr: 'Revenus et bonus supplémentaires',
      it: 'Guadagni e bonus aggiuntivi'
    },
    solo: {
      ar: 'أرباحك العادية من الهدايا فقط، بدون أي حوافز أو مكافآت إضافية',
      en: 'Standard gift earnings only, zero extra bonuses or performance cash',
      ru: 'Только стандартный доход от подарков, никаких дополнительных бонусов',
      ro: 'Doar câștiguri standard din cadouri, fără bonusuri suplimentare',
      fr: 'Revenus standard des cadeaux uniquement, aucun bonus supplémentaire',
      it: 'Solo guadagni standard dai regali, nessun bonus extra in denaro'
    },
    agency: {
      ar: 'أرباحك كاملة 100% + بونص شهري كاش إضافي من الوكالة عند تحقيق التارقت',
      en: '100% of your earnings + extra monthly cash bonuses paid directly by our agency',
      ru: '100% вашего дохода + дополнительный ежемесячный денежный бонус от агентства',
      ro: '100% din câștigurile tale + bonusuri lunare în numerar plătite de agenție',
      fr: '100% de vos gains + bonus mensuel supplémentaire en espèces payé par l\'agence',
      it: '100% dei tuoi guadagni + bonus mensile extra in contanti pagato dall\'agenzia'
    }
  },
  {
    id: 'exposure',
    icon: Sparkles,
    title: {
      ar: 'الانتشار ودعم الباتلز',
      en: 'Exposure & Battle Support',
      ru: 'Продвижение и поддержка в баттлах',
      ro: 'Promovare și suport în bătălii',
      fr: 'Visibilité et soutien en battle',
      it: 'Visibilità e supporto nelle battaglie'
    },
    solo: {
      ar: 'ظهور عشوائي للبث، صعوبة في جذب الداعمين، وغياب المساندة في التحديات',
      en: 'Random stream visibility, hard to attract top gifters, zero battle backup',
      ru: 'Случайные показы, трудно привлечь спонсоров, отсутствие поддержки в баттлах',
      ro: 'Vizibilitate aleatorie, greu de atras sponsori, zero sprijin în provocări',
      fr: 'Visibilité aléatoire, difficulté à attirer des donateurs, aucun soutien en direct',
      it: 'Visibilità casuale, difficile attrarre grandi donatori, nessun supporto nelle sfide'
    },
    agency: {
      ar: 'دعم لوجستي في الإكسبلور، وتواجد فريق داعمين للوكالة في جولاتك الرسمية',
      en: 'Explore page promotion, dedicated agency gifters backing you in official rounds',
      ru: 'Продвижение в рекомендации, команда поддержки агентства в ваших баттлах',
      ro: 'Promovare în pagina Explore, echipă dedicată de suporteri în rundele oficiale',
      fr: 'Promotion sur la page Explorer, équipe de soutien dédiée lors de vos battles',
      it: 'Promozione nella sezione Esplora, team di supporter dedicati nelle tue sfide'
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
      ar: 'تدريب مباشر من كبار المذيعين لضبط المايك والإضاءة واحتراف جذب الداعمين',
      en: '1-on-1 coaching from top broadcasters to optimize gear and hook whales',
      ru: 'Персональное обучение от топ-стримеров по настройке оборудования и удержанию аудитории',
      ro: 'Instruire 1-la-1 de la streameri de top pentru optimizarea echipamentului',
      fr: 'Coaching personnalisé par des diffuseurs d\'élite pour optimiser votre matériel',
      it: 'Coaching individuale da streamer d\'élite per ottimizzare l\'attrezzatura e intrattenere'
    }
  },
  {
    id: 'badges',
    icon: Award,
    title: {
      ar: 'التوثيق والشارات الرسمية',
      en: 'Official Verification & Badges',
      ru: 'Верификация и официальные значки',
      ro: 'Verificare oficială și insigne',
      fr: 'Vérification et badges officiels',
      it: 'Verifica e badge ufficiali'
    },
    solo: {
      ar: 'شروط معقدة وانتظار أشهر طويلة مع احتمال رفض التوثيق',
      en: 'Tough criteria and months of waiting with high chance of rejection',
      ru: 'Сложные требования и месяцы ожидания с высоким риском отказа',
      ro: 'Criterii dure și luni de așteptare cu risc mare de respingere',
      fr: 'Critères stricts et des mois d\'attente avec risque élevé de rejet',
      it: 'Criteri rigidi e mesi di attesa con alto rischio di rifiuto'
    },
    agency: {
      ar: 'أولوية قصوى في التوثيق ومنح الشارات المعتمدة لحسابك في وقت قياسي',
      en: 'Top priority verification and accredited agency badges fast-tracked to your profile',
      ru: 'Высший приоритет верификации и официальные значки в кратчайшие сроки',
      ro: 'Prioritate maximă la verificare și acordarea insignelor în timp record',
      fr: 'Priorité absolue pour la vérification et obtention des badges en un temps record',
      it: 'Massima priorità per la verifica e rilascio rapido dei badge ufficiali'
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
            'لماذا يختار كبار المذيعين الانضمام إلينا بدلاً من البث المستقل؟ إليك الفروقات الحقيقية بالأرقام والواقع.',
            'Why do elite broadcasters choose Legends Agency over going solo? Real, tangible advantages that redefine your career.',
            'Почему лучшие ведущие выбирают агентство Legends? Реальные преимущества, меняющие вашу карьеру.',
            'De ce aleg crainicii de elită agenția Legends în locul independenței? Avantaje reale care îți redefinesc cariera.',
            'Pourquoi les meilleurs créateurs choisissent l\'agence Legends ? Des avantages concrets qui transforment votre parcours.',
            'Perché le migliori emittenti scelgono Legends Agency? Vantaggi reali che trasformano la tua carriera.'
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
