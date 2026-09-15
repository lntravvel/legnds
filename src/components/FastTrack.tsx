import { motion } from 'motion/react';
import { Send, ShieldCheck, Radio, Coins, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage, Language } from '../i18n/LanguageContext';

interface Milestone {
  id: number;
  timeBadge: Record<Language, string>;
  title: Record<Language, string>;
  desc: Record<Language, string>;
  icon: React.ElementType;
  accent: string;
}

const MILESTONES: Milestone[] = [
  {
    id: 1,
    timeBadge: {
      ar: 'الدقيقة 01',
      en: 'Minute 01',
      ru: 'Минута 01',
      ro: 'Minutul 01',
      fr: 'Minute 01',
      it: 'Minuto 01'
    },
    title: {
      ar: 'إرسال الـ ID والبيانات',
      en: 'Send ID & Details',
      ru: 'Отправка ID и данных',
      ro: 'Trimite ID-ul și datele',
      fr: 'Envoyer ID & coordonnées',
      it: 'Invia ID e dettagli'
    },
    desc: {
      ar: 'اضغط على رابط الانضمام أو أرسل حسابك عبر الواتساب في ثوانٍ معدودة وبدون أي تعقيد.',
      en: 'Click our agency invite link or message your ID on WhatsApp in seconds without paperwork.',
      ru: 'Нажмите ссылку для вступления или отправьте свой ID в WhatsApp за пару секунд.',
      ro: 'Apasă pe linkul de invitație sau trimite ID-ul pe WhatsApp în câteva secunde.',
      fr: 'Cliquez sur le lien d\'invitation ou envoyez votre ID sur WhatsApp en quelques secondes.',
      it: 'Clicca sul link di invito o invia il tuo ID su WhatsApp in pochi secondi senza complicazioni.'
    },
    icon: Send,
    accent: '#00f3ff'
  },
  {
    id: 2,
    timeBadge: {
      ar: 'الساعة 02',
      en: 'Hour 02',
      ru: 'Час 02',
      ro: 'Ora 02',
      fr: 'Heure 02',
      it: 'Ora 02'
    },
    title: {
      ar: 'الربط والاعتماد الرسمي',
      en: 'Official System Verification',
      ru: 'Официальное подтверждение',
      ro: 'Verificare oficială în sistem',
      fr: 'Validation officielle du compte',
      it: 'Verifica ufficiale del sistema'
    },
    desc: {
      ar: 'تفعيل حسابك في لوحة تحكم وكالة الأساطير وتعيين مدير دعم خاص لمرافقتك من اللحظة الأولى.',
      en: 'Your account links to the official agency portal and an assigned manager connects with you.',
      ru: 'Ваш аккаунт подключается к панели агентства, и с вами связывается персональный куратор.',
      ro: 'Contul tău este conectat la portalul agenției și un manager dedicat te contactează.',
      fr: 'Votre compte est lié au portail officiel et un gestionnaire dédié prend contact avec vous.',
      it: 'Il tuo account viene collegato al portale ufficiale e ti viene assegnato un manager dedicato.'
    },
    icon: ShieldCheck,
    accent: '#38bdf8'
  },
  {
    id: 3,
    timeBadge: {
      ar: 'اليوم 01',
      en: 'Day 01',
      ru: 'День 01',
      ro: 'Ziua 01',
      fr: 'Jour 01',
      it: 'Giorno 01'
    },
    title: {
      ar: 'التدريب وتجهيز أول بث مباشر',
      en: 'Coaching & First Live Broadcast',
      ru: 'Обучение и первый прямой эфир',
      ro: 'Instruire și prima transmisiune live',
      fr: 'Coaching et premier live officiel',
      it: 'Coaching e prima diretta ufficiale'
    },
    desc: {
      ar: 'جلسة توجيه سريعة لإعداد الإضاءة والصوت وتحديد توقيت البث الذهبي لحصد أعلى مشاهدات ودعم.',
      en: 'Quick gear and lighting coaching, scheduling prime-time broadcast for peak viewership.',
      ru: 'Быстрая настройка звука и света, выбор золотого времени эфира для максимального доната.',
      ro: 'Sesiune rapidă de configurare a sunetului și luminii, programarea orei de vârf.',
      fr: 'Session rapide de réglage audio/lumière et programmation du créneau horaire optimal.',
      it: 'Rapida sessione di calibrazione audio/luci e pianificazione negli orari di massimo ascolto.'
    },
    icon: Radio,
    accent: '#a855f7'
  },
  {
    id: 4,
    timeBadge: {
      ar: 'نهاية الشهر',
      en: 'Month End',
      ru: 'Конец месяца',
      ro: 'Sfârșitul lunii',
      fr: 'Fin du mois',
      it: 'Fine mese'
    },
    title: {
      ar: 'استلام الأرباح + البونص كاش',
      en: 'Receive Earnings + Cash Bonus',
      ru: 'Получение дохода + денежный бонус',
      ro: 'Încasare câștiguri + bonus în numerar',
      fr: 'Paiement des gains + bonus en espèces',
      it: 'Incasso guadagni + bonus in contanti'
    },
    desc: {
      ar: 'تحويل كامل أرباحك مع بونص التارقت الشهري المضمون من الوكالة فوراً وبدون أي اقتطاعات.',
      en: 'Withdraw 100% of your earnings plus guaranteed monthly agency target bonuses right on time.',
      ru: 'Вывод всех ваших доходов плюс гарантированный ежемесячный бонус от агентства точно в срок.',
      ro: 'Retragerea integrală a câștigurilor plus bonusul lunar garantat de la agenție.',
      fr: 'Retrait de 100% de vos revenus plus votre bonus d\'agence mensuel garanti sans retenue.',
      it: 'Prelievo del 100% dei tuoi guadagni più il bonus mensile garantito dall\'agenzia senza detrazioni.'
    },
    icon: Coins,
    accent: '#fbbf24'
  }
];

export function FastTrack() {
  const { lang, t, dir } = useLanguage();

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
            {t('المسار السريع', 'Fast Track Protocol', 'Быстрый старт', 'Protocolul rapid', 'Parcours rapide', 'Percorso rapido')}
          </span>
        </div>

        <h2 className={`text-[20px] sm:text-[25px] md:text-[28px] font-bold text-white tracking-wide mb-2 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t(
            'كيف تصبح أسطورة خلال 24 ساعة؟',
            'How to Become a Legend in 24 Hours',
            'Как стать легендой за 24 часа?',
            'Cum devii o legendă în 24 de ore?',
            'Comment devenir une légende en 24h ?',
            'Come diventare una leggenda in 24 ore?'
          )}
        </h2>

        <p className={`text-[12.5px] sm:text-[14px] text-white/60 max-w-md mx-auto ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t(
            'خطوات واضحة وسريعة من لحظة تواصلك الأولى حتى استلام أول دفعة بونص كاش لحسابك.',
            'Clear, rapid milestones from your initial message to receiving your first cash bonus.',
            'Четкие и быстрые шаги от первого обращения до получения первого денежного бонуса.',
            'Pași clari și rapizi de la primul mesaj până la primirea primului bonus în numerar.',
            'Des étapes simples et rapides, du premier contact jusqu\'à votre premier bonus.',
            'Passaggi chiari e rapidi dal primo messaggio fino alla ricezione del tuo primo bonus.'
          )}
        </p>
      </motion.div>

      {/* Futuristic Timeline Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full">
        {MILESTONES.map((step, idx) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.08, type: "spring", stiffness: 220, damping: 20 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-[22px] bg-gradient-to-b from-white/[0.04] via-[#050a16]/80 to-[#02050c]/95 border border-white/[0.08] hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Top ambient color glow */}
              <div 
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full blur-2xl pointer-events-none opacity-15 group-hover:opacity-35 transition-opacity"
                style={{ backgroundColor: step.accent }}
              />

              {/* Step Header */}
              <div className="flex items-center justify-between mb-3 relative z-10">
                {/* Time Badge */}
                <div 
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase border backdrop-blur-md"
                  style={{
                    backgroundColor: `${step.accent}15`,
                    borderColor: `${step.accent}40`,
                    color: step.accent
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: step.accent }} />
                  <span>{step.timeBadge[lang]}</span>
                </div>

                {/* Step Number & Icon */}
                <div 
                  className="w-10 h-10 rounded-[14px] flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 shadow-sm"
                  style={{
                    backgroundColor: `${step.accent}18`,
                    borderColor: `${step.accent}50`,
                    color: step.accent
                  }}
                >
                  <Icon size={18} />
                </div>
              </div>

              {/* Title & Description */}
              <div className={`flex flex-col relative z-10 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                <h3 className={`text-[15px] sm:text-[16px] font-bold text-white mb-1.5 tracking-wide group-hover:text-cyan-200 transition-colors ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                  {step.title[lang]}
                </h3>
                <p className={`text-[12px] sm:text-[12.5px] text-white/60 leading-relaxed ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                  {step.desc[lang]}
                </p>
              </div>

              {/* Bottom Subtle Step Indicator */}
              <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[10.5px] font-mono text-white/30 group-hover:text-cyan-300/60 transition-colors">
                <span>PHASE 0{step.id}</span>
                <div className="flex items-center gap-1">
                  <span>READY</span>
                  {dir === 'rtl' ? <ArrowLeft size={11} /> : <ArrowRight size={11} />}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Launch Action Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-5 p-4 sm:p-5 rounded-[22px] bg-gradient-to-r from-cyan-950/60 via-[#071326]/80 to-blue-950/60 border border-cyan-400/40 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_0_25px_rgba(0,243,255,0.12)] text-center sm:text-start"
      >
        <div className="flex flex-col">
          <span className={`text-[14px] sm:text-[15.5px] font-bold text-white ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t('جاهز لبدء رحلتك كصانع محتوى محترف؟', 'Ready to start your professional streaming journey?', 'Готовы начать карьеру профессионального ведущего?', 'Ești gata să începi cariera de streamer profesionist?', 'Prêt à lancer votre carrière de diffuseur professionnel ?', 'Pronto per iniziare la tua carriera da streamer professionista?')}
          </span>
          <span className={`text-[11.5px] text-white/60 mt-0.5 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t('تواصل مع فريق القبول الآن وسيتم الرد عليك في أقل من 5 دقائق', 'Contact our admissions team now; response in under 5 minutes', 'Свяжитесь с нашей командой, ответ менее чем за 5 минут', 'Contactează echipa noastră, răspuns în mai puțin de 5 minute', 'Contactez notre équipe, réponse en moins de 5 minutes', 'Contatta il nostro team, risposta in meno di 5 minuti')}
          </span>
        </div>

        <a
          href="https://wa.me/447460018974"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-bold text-[12.5px] sm:text-[13px] shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all transform hover:scale-105 active:scale-95"
        >
          {t('ابدأ الآن عبر واتساب', 'Apply Now via WhatsApp', 'Подать заявку через WhatsApp', 'Aplică acum pe WhatsApp', 'Postuler via WhatsApp', 'Inizia ora su WhatsApp')}
        </a>
      </motion.div>
    </section>
  );
}
