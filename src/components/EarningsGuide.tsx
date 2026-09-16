import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coins, 
  Calendar, 
  Clock, 
  Gift, 
  CreditCard, 
  AlertTriangle, 
  Download, 
  Maximize2, 
  X, 
  Search, 
  TrendingUp, 
  Sparkles,
  ArrowRight,
  ArrowLeft,
  DollarSign
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { EARNING_TIERS, EarningTier } from '../data/earnings';

export function EarningsGuide() {
  const { lang, t, dir } = useLanguage();
  const [selectedLevel, setSelectedLevel] = useState<number>(5);
  const [tableSearch, setTableSearch] = useState<string>('');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  // Active tier for calculator
  const activeTier: EarningTier = useMemo(() => {
    return EARNING_TIERS.find((item) => item.level === selectedLevel) || EARNING_TIERS[0];
  }, [selectedLevel]);

  // Filtered table rows
  const filteredTiers = useMemo(() => {
    if (!tableSearch.trim()) return EARNING_TIERS;
    const q = tableSearch.toLowerCase();
    return EARNING_TIERS.filter((item) => {
      return (
        item.level.toString().includes(q) ||
        item.coins.toLocaleString().includes(q) ||
        item.totalSalaryUSD.toString().includes(q) ||
        item.baseSalaryUSD.toString().includes(q) ||
        item.bonusUSD.toString().includes(q)
      );
    });
  }, [tableSearch]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-10">
      {/* Header Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[30px] p-6 sm:p-10 bg-gradient-to-b from-[#0e0720] via-[#080c1a] to-[#02050f] border border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.15)] text-center flex flex-col items-center"
      >
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/40 text-pink-300 text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
          <Sparkles size={14} className="animate-spin text-pink-400" />
          <span>XENA LIVE • OFFICIAL SALARY GUIDE</span>
        </div>

        <h1 className={`text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide mb-3 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t(
            'دليل النشاط والمكافآت والسحب الرسمي',
            'Official Activity, Bonus & Withdrawal Guide',
            'Официальное руководство по доходам и выводу',
            'Ghidul oficial de activitate, bonusuri și retrageri',
            'Guide officiel d\'activité, primes et retraits',
            'Guida ufficiale su attività, bonus e prelievi'
          )}
        </h1>

        <p className={`text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed mb-6 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t(
            'كل ما تحتاج معرفته عن شروط الساعات الشهرية، احتساب اليوم الفعال، وسلم الرواتب لـ 30 مستوى مع أعلى بونص كاش حصري لمذيعي وكالة الأساطير.',
            'Everything you need to know about monthly broadcast targets, active day rules, and the 30-tier salary ladder with exclusive cash bonuses.',
            'Все условия: требования к часам, активные дни и 30 уровней выплат с эксклюзивными бонусами.',
            'Tot ce trebuie să știi despre orele de streaming, zilele active și grila de 30 de niveluri de salarii.',
            'Tout ce que vous devez savoir sur les heures de live, les jours actifs et la grille de 30 niveaux.',
            'Tutto ciò che devi sapere sulle ore di streaming, i giorni attivi e la scala di 30 livelli di guadagno.'
          )}
        </p>

        {/* Action Button: Preview & Download Poster */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setLightboxOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/50 text-pink-200 text-xs sm:text-sm font-bold transition-all shadow-[0_0_20px_rgba(236,72,153,0.3)] cursor-pointer"
          >
            <Maximize2 size={16} />
            <span>{t('عرض البوستر الرسمي عالي الدقة', 'View Official HD Infographic', 'Посмотреть официальный инфографик', 'Vezi infograficul HD', 'Voir l\'infographie HD', 'Visualizza infografica HD')}</span>
          </button>
          
          <a
            href="/assets/xena_earnings_guide.png"
            download="Xena_Live_Legends_Earnings_Guide.png"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 text-cyan-200 text-xs sm:text-sm font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
          >
            <Download size={16} />
            <span>{t('تحميل البوستر (HD PNG)', 'Download Poster (HD)', 'Скачать инфографик', 'Descarcă posterul (HD)', 'Télécharger le poster', 'Scarica poster (HD)')}</span>
          </a>
        </div>
      </motion.div>

      {/* 4 Essential Rule Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Active Days */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-cyan-400/30 backdrop-blur-md flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
              <Calendar size={20} />
            </div>
            <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase">10+ DAYS</span>
          </div>
          <div>
            <h3 className={`text-base font-bold text-white mb-1 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t('الأيام الفعالة للنشاط', 'Valid Active Days', 'Активные дни', 'Zile active valide', 'Jours actifs valides', 'Giorni attivi validi')}
            </h3>
            <p className={`text-xs text-white/70 leading-relaxed ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t(
                'يُحتسب اليوم كيوم نشاط صالح عند البث لمدة ساعة واحدة على الأقل. يجب تحقيق 10 أيام نشطة على الأقل شهرياً.',
                'A stream must last at least 1 full hour to count as a valid active day. Minimum 10 active days required per month.',
                'Стрим должен длиться не менее 1 часа, чтобы считаться активным днем. Минимум 10 дней в месяц.',
                'Un live trebuie să dureze cel puțin 1 oră pentru a fi considerat zi activă. Minim 10 zile/lună.',
                'Un live doit durer au moins 1 heure pour être validé. 10 jours minimum par mois.',
                'Una live deve durare almeno 1 ora per essere considerata valida. Minimo 10 giorni al mese.'
              )}
            </p>
          </div>
        </motion.div>

        {/* Card 2: Stream Hours */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-pink-400/30 backdrop-blur-md flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-300">
              <Clock size={20} />
            </div>
            <span className="text-[11px] font-mono font-bold text-pink-400 uppercase">15+ HOURS</span>
          </div>
          <div>
            <h3 className={`text-base font-bold text-white mb-1 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t('ساعات البث الفعلية', 'Minimum Broadcast Hours', 'Часы вещания', 'Ore de difuzare', 'Heures de live', 'Ore di trasmissione')}
            </h3>
            <p className={`text-xs text-white/70 leading-relaxed ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t(
                'يجب تحقيق 15 ساعة بث فعلي على الأقل خلال الشهر. تُحسب فقط ساعات البث المباشر الفعلية.',
                'You must achieve at least 15 hours of actual broadcasting during the calendar month.',
                'Необходимо набрать минимум 15 часов чистого эфирного времени за календарный месяц.',
                'Trebuie să acumulați cel puțin 15 ore de difuzare live pe lună.',
                'Vous devez cumuler au moins 15 heures de direct au cours du mois civil.',
                'Devi totalizzare almeno 15 ore di diretta effettiva durante il mese solare.'
              )}
            </p>
          </div>
        </motion.div>

        {/* Card 3: Agency Bonus */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-amber-400/30 backdrop-blur-md flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
              <Gift size={20} />
            </div>
            <span className="text-[11px] font-mono font-bold text-amber-400 uppercase">EXCLUSIVE BONUS</span>
          </div>
          <div>
            <h3 className={`text-base font-bold text-white mb-1 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t('أعلى بونص كاش شهري', 'Top Monthly Cash Bonus', 'Высший бонус наличными', 'Cel mai mare bonus', 'Bonus cash maximal', 'Miglior bonus in contanti')}
            </h3>
            <p className={`text-xs text-white/70 leading-relaxed ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t(
                'أعلى نسبة بونص حصرية لمذيعينا تصل إلى 9,272$ إضافية فوق الراتب الأساسي عند الالتزام بالشروط.',
                'The highest exclusive agency bonus in live streaming, adding up to $9,272 extra cash on top of base salary.',
                'Эксклюзивный агентский бонус до $9,272 сверх базовой зарплаты при выполнении нормативов.',
                'Cel mai mare bonus de agenție: până la 9.272$ în plus față de salariul de bază.',
                'Le bonus le plus élevé de l\'industrie : jusqu\'à 9 272$ de prime en plus de votre salaire de base.',
                'Il bonus di agenzia più alto del settore: fino a $9.272 in più oltre allo stipendio base.'
              )}
            </p>
          </div>
        </motion.div>

        {/* Card 4: Withdrawal Window */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-emerald-400/30 backdrop-blur-md flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
              <CreditCard size={20} />
            </div>
            <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase">7 - 11 MONTHLY</span>
          </div>
          <div>
            <h3 className={`text-base font-bold text-white mb-1 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t('مواعيد السحب اليدوي', 'Manual Withdrawal Window', 'Окно вывода средств', 'Perioada de retragere', 'Période de retrait', 'Finestra di prelievo')}
            </h3>
            <p className={`text-xs text-white/70 leading-relaxed ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t(
                'يفتح طلب السحب اليدوي من 7 إلى 11 من كل شهر ميلادي بنفس توقيت الوكالة مع دعم تحويل سريع ومباشر.',
                'Manual payout requests are submitted from the 7th to the 11th of every month with instant processing.',
                'Ручной вывод средств открыт с 7 по 11 число каждого месяца с гарантированной выплатой.',
                'Cererile manuale de retragere sunt deschise între 7 și 11 ale fiecărei luni.',
                'Les demandes manuelles de retrait sont ouvertes du 7 au 11 de chaque mois.',
                'Le richieste di prelievo manuale sono aperte dal 7 all\'11 di ogni mese.'
              )}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Interactive Live Earnings Calculator */}
      <section className="relative overflow-hidden rounded-[26px] p-6 sm:p-8 bg-gradient-to-b from-[#091024] via-[#050b18] to-[#02050e] border border-cyan-400/30 shadow-[0_0_40px_rgba(0,243,255,0.1)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold mb-2">
              <TrendingUp size={14} />
              <span>{t('حاسبة الأرباح التفاعلية', 'Interactive Earnings Calculator', 'Калькулятор доходов', 'Calculator de câștiguri', 'Calculateur de gains', 'Calcolatore guadagni')}</span>
            </div>
            <h2 className={`text-xl sm:text-2xl font-bold text-white ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t('اختر مستواك المستهدف واعرف أرباحك الصافية', 'Select Target Level to Calculate Earnings', 'Выберите целевой уровень', 'Alege nivelul dorit', 'Choisissez votre niveau cible', 'Scegli il tuo livello')}
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-xl border border-white/10">
            <span className="text-xs text-white/50">{t('المستوى المحدد:', 'Selected Level:', 'Уровень:', 'Nivel:', 'Niveau :', 'Livello:')}</span>
            <span className="text-lg font-bold text-cyan-400 font-mono">#{activeTier.level}</span>
          </div>
        </div>

        {/* Level Slider */}
        <div className="mb-8">
          <div className="flex justify-between items-center text-xs font-mono text-white/50 mb-2">
            <span>{t('مستوى 1 (250K كوينز)', 'Level 1 (250K Coins)', 'Уровень 1', 'Nivel 1', 'Niveau 1', 'Livello 1')}</span>
            <span>{t('مستوى 15 (35M كوينز)', 'Level 15 (35M Coins)', 'Уровень 15', 'Nivel 15', 'Niveau 15', 'Livello 15')}</span>
            <span>{t('مستوى 30 (750M كوينز)', 'Level 30 (750M Coins)', 'Уровень 30', 'Nivel 30', 'Niveau 30', 'Livello 30')}</span>
          </div>
          <input 
            type="range"
            min="1"
            max="30"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(Number(e.target.value))}
            className="w-full h-2.5 bg-cyan-950 rounded-lg appearance-none cursor-pointer accent-cyan-400 border border-cyan-400/30"
          />
        </div>

        {/* Calculation Result Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-6">
          {/* 1. Required Coins */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col">
            <span className="text-[11px] text-white/50 mb-1 flex items-center gap-1">
              <Coins size={12} className="text-amber-400" />
              {t('الكوينز (Coins)', 'Coins Required', 'Монеты', 'Monede', 'Pièces', 'Monete')}
            </span>
            <span className="text-base sm:text-lg font-bold font-mono text-white">
              {activeTier.coins.toLocaleString()}
            </span>
          </div>

          {/* 2. Crystals */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col">
            <span className="text-[11px] text-white/50 mb-1 flex items-center gap-1">
              <Sparkles size={12} className="text-cyan-400" />
              {t('الكريستال (Crystals)', 'Crystals', 'Кристаллы', 'Cristale', 'Cristaux', 'Cristalli')}
            </span>
            <span className="text-base sm:text-lg font-bold font-mono text-cyan-300">
              {activeTier.crystals.toLocaleString()}
            </span>
          </div>

          {/* 3. Base Salary */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col">
            <span className="text-[11px] text-white/50 mb-1 flex items-center gap-1">
              <DollarSign size={12} className="text-emerald-400" />
              {t('الراتب الأساسي', 'Base Salary', 'Базовая выплата', 'Salariu de bază', 'Salaire de base', 'Stipendio base')}
            </span>
            <span className="text-base sm:text-lg font-bold font-mono text-emerald-300">
              ${activeTier.baseSalaryUSD.toLocaleString()}
            </span>
          </div>

          {/* 4. Legends Agency Bonus */}
          <div className="p-4 rounded-xl bg-pink-950/20 border border-pink-500/30 flex flex-col">
            <span className="text-[11px] text-pink-300/80 mb-1 flex items-center gap-1">
              <Gift size={12} className="text-pink-400" />
              {t('بونص الوكالة', 'Agency Bonus', 'Бонус агентства', 'Bonus agenție', 'Prime d\'agence', 'Bonus agenzia')}
            </span>
            <span className="text-base sm:text-lg font-bold font-mono text-pink-300">
              +${activeTier.bonusUSD.toLocaleString()}
            </span>
          </div>

          {/* 5. Total Net Salary */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 p-4 rounded-xl bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-amber-900/30 border-2 border-amber-400/50 shadow-[0_0_20px_rgba(245,158,11,0.25)] flex flex-col justify-center">
            <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider mb-0.5">
              {t('إجمالي الراتب', 'Total Salary', 'Итоговая выплата', 'Total salariu', 'Salaire total', 'Totale stipendio')}
            </span>
            <span className="text-xl sm:text-2xl font-black font-mono text-yellow-300">
              ${activeTier.totalSalaryUSD.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Quick CTA to join this target */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <p className={`text-xs sm:text-sm text-white/70 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t(
              'حققت هذا التارقت أو تطمح للوصول إليه؟ انضم إلينا الآن لنمنحك الدعم والترويج الكامل للوصول لأعلى المستويات.',
              'Aiming for this milestone? Join Legends Agency now for priority promotion, battle backing, and instant bonus disbursement.',
              'Стремитесь к этому уровню? Вступайте в Legends Agency для полной поддержки.',
              'Țintești acest nivel? Alătură-te agenției Legends pentru suport maxim.',
              'Vous visez ce niveau ? Rejoignez l\'agence Legends pour un accompagnement complet.',
              'Punti a questo livello? Unisciti a Legends Agency per un supporto totale.'
            )}
          </p>
          <a
            href="https://wa.me/447460018974?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D8%A3%D8%B3%D8%A7%D8%B7%D9%8A%D8%B1%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D9%86%D8%B6%D9%85%D8%A7%D9%85%20%D9%84%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20%D8%B2%D9%8A%D9%86%D8%A7%20%D9%84%D8%A7%D9%8A%D9%81"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] cursor-pointer"
          >
            <span>{t('انضم الآن وابدأ التحصيل', 'Join Now & Start Earning', 'Присоединиться сейчас', 'Înscrie-te acum', 'Rejoindre maintenant', 'Iscriviti ora')}</span>
            {dir === 'rtl' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </a>
        </div>
      </section>

      {/* Full 30-Level Salary Table */}
      <section className="relative overflow-hidden rounded-[26px] p-6 sm:p-8 bg-gradient-to-b from-[#090b16] to-[#03040a] border border-white/10 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className={`text-xl sm:text-2xl font-bold text-white mb-1 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t('جدول الرواتب والمكافآت الكامل (30 مستوى)', 'Complete 30-Level Salary Table', 'Полная таблица выплат (30 уровней)', 'Tabelul complet al salariilor (30 niveluri)', 'Grille complète des salaires (30 niveaux)', 'Tabella salariale completa (30 livelli)')}
            </h2>
            <p className={`text-xs sm:text-sm text-white/60 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t('اضغط على أي مستوى لمعاينته في الحاسبة بالأعلى', 'Click any row to view it in the calculator above', 'Нажмите на строку для выбора', 'Apasă pe orice rând pentru a-l selecta', 'Cliquez sur une ligne pour la sélectionner', 'Clicca su una riga per selezionarla')}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search size={16} className={`absolute top-3 text-white/40 ${dir === 'rtl' ? 'right-3' : 'left-3'}`} />
            <input 
              type="text"
              placeholder={t('بحث عن مستوى أو مبلغ...', 'Search level or amount...', 'Поиск уровня или суммы...', 'Caută nivel sau sumă...', 'Rechercher un niveau...', 'Cerca livello o importo...')}
              value={tableSearch}
              onChange={(e) => setTableSearch(e.target.value)}
              className={`w-full bg-white/5 border border-white/10 rounded-xl py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/60 ${dir === 'rtl' ? 'pr-9 pl-3' : 'pl-9 pr-3'}`}
            />
          </div>
        </div>

        {/* Scrollable Table */}
        <div className="w-full overflow-x-auto rounded-xl border border-white/10 bg-black/20">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03] text-white/60 font-mono uppercase tracking-wider text-[11px]">
                <th className="p-3 text-center"># {t('المستوى', 'Level', 'Уровень', 'Nivel', 'Niveau', 'Livello')}</th>
                <th className="p-3 text-center">{t('العملات (Coins)', 'Coins', 'Монеты', 'Monede', 'Pièces', 'Monete')}</th>
                <th className="p-3 text-center">{t('الكريستال', 'Crystals', 'Кристаллы', 'Cristale', 'Cristaux', 'Cristalli')}</th>
                <th className="p-3 text-center">{t('الراتب الأساسي', 'Base ($)', 'Базовый ($)', 'Bază ($)', 'Base ($)', 'Base ($)')}</th>
                <th className="p-3 text-center">{t('البونص', 'Bonus ($)', 'Бонус ($)', 'Bonus ($)', 'Prime ($)', 'Bonus ($)')}</th>
                <th className="p-3 text-center text-amber-300 font-bold">{t('الراتب الإجمالي', 'Total ($)', 'Итого ($)', 'Total ($)', 'Total ($)', 'Totale ($)')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredTiers.map((tier) => {
                const isSelected = selectedLevel === tier.level;
                return (
                  <tr 
                    key={tier.level}
                    onClick={() => setSelectedLevel(tier.level)}
                    className={`cursor-pointer transition-colors font-mono ${
                      isSelected 
                        ? 'bg-cyan-500/15 text-cyan-200' 
                        : 'hover:bg-white/[0.03] text-white/80'
                    }`}
                  >
                    <td className="p-3 text-center font-bold">
                      <span className={`inline-block w-7 h-7 leading-7 rounded-lg text-xs ${isSelected ? 'bg-cyan-400 text-black font-extrabold' : 'bg-white/5 text-white/70'}`}>
                        {tier.level}
                      </span>
                    </td>
                    <td className="p-3 text-center font-semibold text-white">
                      {tier.coins.toLocaleString()}
                    </td>
                    <td className="p-3 text-center text-cyan-300">
                      {tier.crystals.toLocaleString()}
                    </td>
                    <td className="p-3 text-center text-emerald-300">
                      ${tier.baseSalaryUSD.toLocaleString()}
                    </td>
                    <td className="p-3 text-center text-pink-400 font-bold">
                      +${tier.bonusUSD.toLocaleString()}
                    </td>
                    <td className="p-3 text-center font-extrabold text-amber-300 text-sm">
                      ${tier.totalSalaryUSD.toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Crucial Notes Alert Section */}
      <section className="p-5 sm:p-6 rounded-2xl bg-amber-950/20 border border-amber-500/40 backdrop-blur-md flex flex-col sm:flex-row items-start gap-4 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
        <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400 shrink-0">
          <AlertTriangle size={24} />
        </div>
        <div className="flex-1">
          <h3 className={`text-base font-bold text-amber-300 mb-2 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t('ملاحظات وإرشادات مهمة لضمان استحقاق الأرباح والبونص', 'Crucial Guidelines for Bonus Eligibility', 'Важные правила для начисления бонусов', 'Instrucțiuni esențiale pentru bonus', 'Directives essentielles pour l\'éligibilité aux primes', 'Linee guida fondamentali per l\'ammissibilità al bonus')}
          </h3>
          <ul className={`space-y-1.5 text-xs text-white/80 list-disc list-inside leading-relaxed ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            <li>
              <strong className="text-amber-200">
                {t('شرط الأيام والساعات معاً:', 'Hours + Days Rule:', 'Условие часов и дней:', 'Regula zile + ore:', 'Règle jours + heures :', 'Regola giorni + ore:')}
              </strong>{' '}
              {t(
                'في حال عدم تحقيق شروط (10 أيام فعالة + 15 ساعة بث) معاً خلال الشهر، فلن يتم احتساب البونص الشهري الإضافي.',
                'Failing to achieve both conditions (10 active days + 15 hours) simultaneously will forfeit the monthly bonus.',
                'В случае невыполнения обоих условий (10 дней + 15 часов) бонус не начисляется.',
                'Neîndeplinirea ambelor condiții (10 zile + 15 ore) anulează bonusul lunar.',
                'Le non-respect des deux conditions (10 jours + 15 heures) annule la prime mensuelle.',
                'Il mancato raggiungimento di entrambe le condizioni (10 giorni + 15 ore) annulla il bonus mensile.'
              )}
            </li>
            <li>
              <strong className="text-amber-200">
                {t('رسوم التحويل:', 'Transfer Fees:', 'Комиссии вывода:', 'Comisioane de transfer:', 'Frais de transfert :', 'Commissioni di trasferimento:')}
              </strong>{' '}
              {t(
                'تختلف رسوم السحب حسب الطريقة أو البنك المستخدم ومبلغ الحوالة وفقاً للأنظمة المصرفية المتبعة.',
                'Withdrawal fees depend on the chosen payout provider, local bank, and transaction amount.',
                'Комиссии зависят от выбранного способа вывода, банка и суммы перевода.',
                'Comisioanele diferă în funcție de metoda aleasă și bancă.',
                'Les frais varient selon la méthode choisie et le montant.',
                'Le commissioni variano a seconda del metodo scelto e dell\'importo.'
              )}
            </li>
            <li>
              <strong className="text-amber-200">
                {t('نافذة السحب اليدوي:', 'Manual Window:', 'Сроки вывода:', 'Interval retragere:', 'Fenêtre de retrait :', 'Finestra di prelievo:')}
              </strong>{' '}
              {t(
                'السحب اليدوي متاح شهرياً من يوم 7 إلى يوم 11 بنفس توقيت الوكالة.',
                'Manual withdrawals are processed strictly between the 7th and 11th of each calendar month.',
                'Ручной вывод доступен строго с 7 по 11 число каждого месяца.',
                'Retragerile manuale se procesează strict între 7 și 11 ale fiecărei luni.',
                'Les retraits manuels s\'effectuent strictement du 7 au 11 de chaque mois.',
                'I prelievi manuali vengono elaborati rigorosamente dal 7 all\'11 di ogni mese.'
              )}
            </li>
            <li>
              <strong className="text-amber-200">
                {t('الاستلام النقدي المحلي:', 'Local Cash Pickup:', 'Местная выдача:', 'Preluare numerar:', 'Retrait espèces :', 'Ritiro contanti locale:')}
              </strong>{' '}
              {t(
                'يمكن استلام الأرباح نقداً في أي منطقة داخل البلد لمكاتب الصرافة المعتمدة (مثل سوريا، اليمن، العراق، ولبنان).',
                'Local cash collection is available across all registered exchange offices in countries like Syria, Yemen, Iraq, and Lebanon.',
                'Возможно получение наличных в сертифицированных офисах в таких странах, как Сирия, Йемен, Ирак и Ливан.',
                'Preluarea banilor gheață este disponibilă în birouri autorizate (Siria, Yemen, Irak, Liban).',
                'Le retrait en espèces est disponible dans les agences partenaires (Syrie, Yémen, Irak, Liban).',
                'Il ritiro di contanti è disponibile negli uffici di cambio autorizzati (Siria, Yemen, Iraq, Libano).'
              )}
            </li>
          </ul>
        </div>
      </section>

      {/* Infographic Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative max-w-2xl max-h-[90vh] w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <div className="w-full flex items-center justify-between pb-3 text-white">
                <span className="font-mono text-xs text-pink-300 font-bold uppercase tracking-wider">
                  XENA LIVE EARNINGS INFOGRAPHIC (HD)
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="/assets/xena_earnings_guide.png"
                    download="Xena_Live_Legends_Earnings_Guide.png"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                    title={t('تحميل', 'Download', 'Скачать', 'Descarcă', 'Télécharger', 'Scarica')}
                  >
                    <Download size={18} />
                  </a>
                  <button 
                    onClick={() => setLightboxOpen(false)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                    title={t('إغلاق', 'Close', 'Закрыть', 'Închide', 'Fermer', 'Chiudi')}
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="overflow-y-auto max-h-[80vh] rounded-2xl border border-white/20 shadow-2xl bg-black">
                <img 
                  src="/assets/xena_earnings_guide.png" 
                  alt="Xena Live Legends Agency Earnings and Activity Guide"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
