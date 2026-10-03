import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  User, 
  Phone, 
  Globe, 
  Video, 
  Clock, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  ChevronRight, 
  ChevronLeft,
  Flame,
  ArrowRight,
  ArrowLeft,
  Smartphone,
  Coins,
  AlertTriangle
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { BrandIcons } from '../components/BrandIcons';
import { LegendsBrandTitle } from '../components/LegendsBrandTitle';

export function LandingApplyPage() {
  const { t, lang, dir } = useLanguage();

  // Multi-step Qualification state
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form & Qualification Data
  const [formData, setFormData] = useState({
    commitment: 'part-time', // part-time | full-time | pro
    incomeGoal: 'mid', // starter | mid | elite
    experience: 'beginner', // beginner | tiktok_bigo | xena_current
    deviceReady: 'yes', // yes | needs_help
    contentType: 'talk', // talk | gaming | talent
    name: '',
    phone: '',
    country: '',
    socialHandle: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleSelectOption = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (validationError) setValidationError('');
  };

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    } else if (step === 2) {
      setStep(3);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    if (step === 3) setStep(2);
    else if (step === 2) setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.country.trim()) {
      setValidationError(
        t(
          'يرجى ملء جميع الحقول المطلوبة (الاسم الكامل، رقم الواتساب، الدولة)',
          'Please fill all required fields (Full Name, WhatsApp, Country)',
          'Заполните обязательные поля (Имя, WhatsApp, Страна)',
          'Completează câmpurile obligatorii (Nume, WhatsApp, Țară)',
          'Veuillez remplir les champs obligatoires (Nom, WhatsApp, Pays)',
          'Compila i campi obbligatori (Nome, WhatsApp, Paese)'
        )
      );
      return;
    }

    // Map values to human readable text
    const commitmentMap: Record<string, string> = {
      'part-time': t('دوام جزئي (2 - 3 ساعات يومياً)', 'Part-time (2-3 hours/day)', 'Частичная занятость (2-3 ч)', 'Part-time (2-3 ore)', 'Temps partiel (2-3h)', 'Part-time (2-3 ore)'),
      'full-time': t('دوام كامل (4 - 6 ساعات يومياً)', 'Full-time (4-6 hours/day)', 'Полная занятость (4-6 ч)', 'Full-time (4-6 ore)', 'Temps plein (4-6h)', 'Full-time (4-6 ore)'),
      'pro': t('بث احترافي مستمر (+6 ساعات)', 'Pro Streaming (+6 hours)', 'Профессиональный стриминг (+6 ч)', 'Streaming Pro (+6 ore)', 'Streaming Pro (+6h)', 'Streaming Pro (+6 ore)')
    };

    const goalMap: Record<string, string> = {
      starter: '$500 - $1,500 (مستوى النشاط الأساسي)',
      mid: '$2,000 - $8,000 (مستوى النشاط المتقدم)',
      elite: '+$10,000+ (مستوى نخبة الأساطير)'
    };

    const expMap: Record<string, string> = {
      beginner: t('مذيع جديد (متحمس للتعلم والبدء)', 'Beginner (Motivated to start)', 'Новичок', 'Începător', 'Débutant', 'Principiante'),
      tiktok_bigo: t('خبرة سابقة على تيك توك / بيجو لايف', 'Experience on TikTok / Bigo', 'Опыт в TikTok / Bigo', 'Experiență pe TikTok / Bigo', 'Expérience sur TikTok / Bigo', 'Esperienza su TikTok / Bigo'),
      xena_current: t('مذيع حالي على زينا لايف', 'Current host on Xena Live', 'Ведущий на Xena Live', 'Gazdă pe Xena Live', 'Diffuseur sur Xena Live', 'Host su Xena Live')
    };

    const contentMap: Record<string, string> = {
      talk: t('حوار وتفاعل ودردشة وتحديات', 'Chatting, Q&A & Battles', 'Общение и баттлы', 'Chat & bătălii', 'Discussion & battles', 'Chat & sfide'),
      gaming: t('بث ألعاب وتسلية', 'Gaming & Entertainment', 'Игры и развлечения', 'Gaming', 'Jeux & divertissement', 'Gaming'),
      talent: t('مواهب وموسيقى وفن', 'Talent, Music & Arts', 'Музыка и таланты', 'Talent & Muzică', 'Talent & Musique', 'Talento & Musica')
    };

    // Sanitize
    const clean = (val: string, max = 80) => val.replace(/[\r\n\t]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
    const safeName = clean(formData.name, 50);
    const safePhone = clean(formData.phone, 25);
    const safeCountry = clean(formData.country, 40);
    const safeHandle = clean(formData.socialHandle, 60);

    const message = [
      '🔥 *طلب تأهيل وانضمام رسمي - وكالة الأساطير (Xena Live)* 🔥',
      '────────────────────────────',
      `👤 *الاسم:* ${safeName}`,
      `📱 *رقم الواتساب:* ${safePhone}`,
      `🌍 *الدولة وبلد الإقامة:* ${safeCountry}`,
      safeHandle ? `🔗 *معرف الحساب / الآيدي:* ${safeHandle}` : null,
      '────────────────────────────',
      '📊 *نتائج مسار الفلترة والتأهيل:*',
      `⏱️ *مستوى التفرغ:* ${commitmentMap[formData.commitment] || formData.commitment}`,
      `🎯 *المستوى المالي المستهدف من النشاط:* ${goalMap[formData.incomeGoal] || formData.incomeGoal}`,
      `🎙️ *الخبرة السابقة:* ${expMap[formData.experience] || formData.experience}`,
      `🎭 *نوع المحتوى المقترح:* ${contentMap[formData.contentType] || formData.contentType}`,
      `📱 *جاهزية الهاتف والإنترنت:* ${formData.deviceReady === 'yes' ? 'جاهز تماماً بكاميرا وإنترنت مستقر ✅' : 'يحتاج توجيه فني من الوكالة ⚠️'}`,
      '────────────────────────────',
      '✅ تم اجتياز اختبار التأهيل عبر صفحة الإعلانات: https://legeends.com/apply'
    ].filter(Boolean).join('\n');

    setIsSubmitted(true);

    const waUrl = `https://wa.me/447460018974?text=${encodeURIComponent(message)}`;
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <div className="flex-1 w-full flex flex-col pt-4 pb-20 overflow-x-hidden">
      {/* 1. TOP ANNOUNCEMENT BANNER */}
      <div className="w-full bg-gradient-to-r from-pink-950/60 via-purple-900/50 to-pink-950/60 border-b border-pink-500/20 py-2.5 px-4 text-center">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-pink-200">
          <Flame className="w-4 h-4 text-pink-400 animate-pulse shrink-0" />
          <span>
            {t(
              'حملة القبول الحصرية مفتوحة الآن: بونص تحفيزي إضافي لصناع المحتوى يصل إلى $66,000 حسب النشاط والتارقت',
              'Exclusive Registration Open: Creator activity bonuses up to $66,000 based on targets',
              'Регистрация открыта: Бонусы за активность до $66,000 при выполнении нормативов',
              'Înscrieri deschise: Bonusuri de activitate de până la 66.000 $ conform obiectivelor',
              'Inscriptions ouvertes : Primes d\'activité jusqu\'à 66 000 $ selon les objectifs',
              'Iscrizioni aperte: Bonus di attività fino a $66.000 in base agli obiettivi'
            )}
          </span>
        </div>
      </div>

      {/* 2. HERO HEADER SECTION */}
      <header className="relative z-10 w-full px-4 sm:px-6 max-w-4xl mx-auto pt-6 sm:pt-10 text-center">
        {/* Partner Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-pink-950/60 border border-pink-500/40 text-pink-300 shadow-[0_0_20px_rgba(236,72,153,0.3)] mb-5">
          <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center p-0.5">
            <BrandIcons.Xena className="w-full h-full" />
          </div>
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase">
            XENA LIVE OFFICIAL ACCREDITED AGENCY
          </span>
        </div>

        {/* Agency Title */}
        <LegendsBrandTitle size="md" className="mb-3" />

        <h1 className={`text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tight ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t(
            'حوّل شغفك بالبث المباشر إلى عوائد ومكافآت قياسية',
            'Turn Your Live Streaming Passion Into Record Creator Rewards',
            'Превратите стримы в рекордные вознаграждения',
            'Transformă streamingul în recompense record de creator',
            'Transformez vos lives en récompenses records',
            'Trasforma i tuoi live in ricompense da record'
          )}
        </h1>

        <p className={`text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed mb-8 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t(
            'وكالة الأساطير تمنحك عقد الإدارة الرسمي المعتمد لصناع المحتوى على زينا لايف: احتفظ بـ 100% من أرباح هداياك، واحصل على بونص كاش تحفيزي إضافي عند تحقيق مستويات النشاط، مع دعم فني 24/7 وحماية كاملة لحسابك.',
            'Legends Agency provides official creator management on Xena Live: Keep 100% of your gift earnings, earn extra cash performance bonuses upon reaching activity tiers, with 24/7 VIP support and account immunity.',
            'Официальное управление для создателей контента на Xena Live: 100% доходов от подарков ваши + бонусы за активность и поддержка 24/7.',
            'Management oficial pentru creatori pe Xena Live: Păstrează 100% din cadouri + bonusuri la atingerea obiectivelor și suport 24/7.',
            'Gestion officielle pour créateurs sur Xena Live : 100% de vos cadeaux + primes d\'activité et support 24/7.',
            'Gestione ufficiale per creator su Xena Live: 100% dei regali + bonus di attività e supporto 24/7.'
          )}
        </p>

        {/* Quick Highlights Trio */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-2xl mx-auto mb-10">
          <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col items-center justify-center">
            <Coins className="w-5 h-5 text-amber-400 mb-1" />
            <span className="text-xs sm:text-sm font-bold text-white leading-none">100% مجاناً</span>
            <span className="text-[10px] text-white/50 mt-1 font-mono">بدون أي رسوم</span>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col items-center justify-center">
            <TrendingUp className="w-5 h-5 text-emerald-400 mb-1" />
            <span className="text-xs sm:text-sm font-bold text-white leading-none">بونص كاش</span>
            <span className="text-[10px] text-white/50 mt-1 font-mono">حتى $66,000</span>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-cyan-400 mb-1" />
            <span className="text-xs sm:text-sm font-bold text-white leading-none">حماية وفك حظر</span>
            <span className="text-[10px] text-white/50 mt-1 font-mono">دعم رسمي 24/7</span>
          </div>
        </div>
      </header>

      {/* 3. INTERACTIVE QUALIFICATION FUNNEL (مسار الفلترة والتأهيل المباشر) */}
      <section className="relative z-10 w-full px-4 sm:px-6 max-w-2xl mx-auto mb-16">
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-white/[0.06] via-[#080d1a]/95 to-[#04060c]/98 border-2 border-cyan-500/30 shadow-[0_10px_50px_rgba(0,243,255,0.15)] backdrop-blur-2xl p-5 sm:p-8 overflow-hidden">
          {/* Funnel Progress Indicator */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-white/60 mb-2">
              <span>{t('مسار تقييم وتأهيل المذيع', 'Broadcaster Qualification Test', 'Тест квалификации', 'Test calificare', 'Test de qualification', 'Test di qualificazione')}</span>
              <span className="text-cyan-400">
                {step === 1 && '33% (الخطوة 1 من 3)'}
                {step === 2 && '66% (الخطوة 2 من 3)'}
                {step === 3 && '100% (تأكيد القبول)'}
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 via-pink-500 to-emerald-400 transition-all duration-500"
                style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}
              />
            </div>
          </div>

          {/* SUCCESS VIEW */}
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 px-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 mx-auto mb-4 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                <CheckCircle2 size={36} />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white mb-2 font-arabic">
                تهانينا! أنت مؤهل بنسبة 100% للانضمام 👑
              </h2>
              <p className="text-xs sm:text-sm text-emerald-200/80 max-w-md mx-auto mb-6 leading-relaxed">
                تم تجهيز تقرير تأهيلك بالكامل وتوجيهك إلى واتساب إدارة وكالة الأساطير الرسمي لاعتماد حسابك وتفعيل الدعم الفوري.
              </p>
              <a
                href={`https://wa.me/447460018974`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-sm shadow-[0_0_25px_rgba(37,211,102,0.4)] transition-all"
              >
                <BrandIcons.WhatsApp className="w-4 h-4 text-black" />
                <span>فتح الواتساب للمتابعة المباشرة</span>
              </a>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {validationError && (
                <div className="p-3 rounded-xl bg-red-950/70 border border-red-500/40 text-red-300 text-xs sm:text-sm text-center font-medium">
                  {validationError}
                </div>
              )}

              {/* STEP 1: COMMITMENT & FINANCIAL GOAL */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      1. كم ساعة تستطيع التفرغ للبث المباشر يومياً؟ *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { id: 'part-time', title: 'ساعتان - 3 ساعات', desc: 'دوام جزئي إضافي' },
                        { id: 'full-time', title: '4 - 6 ساعات', desc: 'دوام كامل جاد' },
                        { id: 'pro', title: '+6 ساعات يومياً', desc: 'احتراف وتصدر القمة' }
                      ].map(opt => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleSelectOption('commitment', opt.id)}
                          className={`p-3.5 rounded-2xl border text-start transition-all cursor-pointer ${
                            formData.commitment === opt.id
                              ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,243,255,0.25)]'
                              : 'bg-white/[0.03] border-white/10 text-white/70 hover:border-white/20'
                          }`}
                        >
                          <div className="font-bold text-xs sm:text-sm">{opt.title}</div>
                          <div className="text-[10px] text-white/50 mt-0.5">{opt.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      2. ما هو مستوى العوائد التقديرية الذي تطمح للوصول إليه من نشاط البث؟ *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { id: 'starter', title: '$500 - $1,500', desc: 'مستوى النشاط الأساسي' },
                        { id: 'mid', title: '$2,000 - $8,000', desc: 'مستوى النشاط المتقدم' },
                        { id: 'elite', title: '+$10,000+', desc: 'مستوى نخبة الأساطير 🔥' }
                      ].map(opt => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleSelectOption('incomeGoal', opt.id)}
                          className={`p-3.5 rounded-2xl border text-start transition-all cursor-pointer ${
                            formData.incomeGoal === opt.id
                              ? 'bg-amber-950/60 border-amber-400 text-white shadow-[0_0_15px_rgba(251,191,36,0.25)]'
                              : 'bg-white/[0.03] border-white/10 text-white/70 hover:border-white/20'
                          }`}
                        >
                          <div className="font-bold text-xs sm:text-sm text-amber-300">{opt.title}</div>
                          <div className="text-[10px] text-white/50 mt-0.5">{opt.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,243,255,0.3)] transition-all cursor-pointer"
                  >
                    <span>متابعة الخطوة التالية (تقييم الخبرة)</span>
                    {dir === 'rtl' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                  </button>
                </motion.div>
              )}

              {/* STEP 2: EXPERIENCE & HARDWARE READINESS */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      3. هل سبق لك البث المباشر على منصات أخرى؟ *
                    </label>
                    <div className="space-y-2">
                      {[
                        { id: 'beginner', title: 'مبتدئ تماماً (أبحث عن وكالة تدربني وتأخذ بيدي خطوة بخطوة)' },
                        { id: 'tiktok_bigo', title: 'لدي خبرة سابقة على تيك توك لايف / بيجو لايف / تطبيقات أخرى' },
                        { id: 'xena_current', title: 'أنا مذيع حالي على تطبيق زينا لايف (Xena Live) وأريد الانضمام لوكالتكم' }
                      ].map(opt => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleSelectOption('experience', opt.id)}
                          className={`w-full p-3 rounded-xl border text-start transition-all cursor-pointer text-xs sm:text-sm font-medium ${
                            formData.experience === opt.id
                              ? 'bg-purple-950/60 border-purple-400 text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.25)]'
                              : 'bg-white/[0.03] border-white/10 text-white/70 hover:border-white/20'
                          }`}
                        >
                          {opt.title}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      4. هل تمتلك هاتفاً ذكياً بكاميرا واضحة وإنترنت مستقر؟ *
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => handleSelectOption('deviceReady', 'yes')}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer font-bold text-xs sm:text-sm ${
                          formData.deviceReady === 'yes'
                            ? 'bg-emerald-950/60 border-emerald-400 text-emerald-300'
                            : 'bg-white/[0.03] border-white/10 text-white/70'
                        }`}
                      >
                        نعم، جاهز تماماً للبدء ✅
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSelectOption('deviceReady', 'needs_help')}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer font-bold text-xs sm:text-sm ${
                          formData.deviceReady === 'needs_help'
                            ? 'bg-amber-950/60 border-amber-400 text-amber-300'
                            : 'bg-white/[0.03] border-white/10 text-white/70'
                        }`}
                      >
                        أحتاج نصائح لاختيار الإضاءة والمايك
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 text-xs font-semibold"
                    >
                      الرجوع
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(236,72,153,0.3)] transition-all cursor-pointer"
                    >
                      <span>المتابعة إلى تأكيد البيانات والقبول</span>
                      {dir === 'rtl' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: CONTACT INFORMATION & SUBMIT */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-400/30 text-cyan-200 text-xs flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>ممتاز! بياناتك مطابقة لشروط القبول. اكتب معلومات التواصل ليتم تأكيد تسجيلك:</span>
                  </div>

                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-white/80 flex items-center gap-1.5">
                      <User size={13} className="text-cyan-400" />
                      <span>الاسم الكامل أو اسم الشهرة *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="مثال: أحمد محمد أو Alex"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 focus:border-cyan-400 focus:bg-black/50 text-white text-sm outline-none transition-all placeholder:text-white/20"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-white/80 flex items-center gap-1.5">
                      <Phone size={13} className="text-emerald-400" />
                      <span>رقم الواتساب (مع رمز الدولة) *</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+968 xxxxxxxx أو +966 xxxxxxxx"
                      required
                      dir="ltr"
                      inputMode="tel"
                      autoComplete="tel"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 focus:border-emerald-400 focus:bg-black/50 text-white text-sm outline-none transition-all placeholder:text-white/20"
                    />
                  </div>

                  {/* Country */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-white/80 flex items-center gap-1.5">
                      <Globe size={13} className="text-purple-400" />
                      <span>الدولة وبلد الإقامة *</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="مثال: سلطنة عمان، السعودية، مصر، المغرب..."
                      required
                      autoComplete="country-name"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 focus:border-purple-400 focus:bg-black/50 text-white text-sm outline-none transition-all placeholder:text-white/20"
                    />
                  </div>

                  {/* Social Handle (Optional) */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-white/80 flex items-center gap-1.5">
                      <Smartphone size={13} className="text-pink-400" />
                      <span>معرف حسابك على تيك توك / انستجرام / زينا (اختياري)</span>
                    </label>
                    <input
                      type="text"
                      name="socialHandle"
                      value={formData.socialHandle}
                      onChange={handleInputChange}
                      placeholder="@username أو رقم الـ ID"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 focus:border-pink-400 focus:bg-black/50 text-white text-sm outline-none transition-all placeholder:text-white/20"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-base flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      <BrandIcons.WhatsApp className="w-5 h-5 text-white" />
                      <span>إرسال تقرير التأهيل واستلام العقد عبر الواتساب</span>
                      <Send size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
                    </button>
                    <p className="text-[11px] text-center text-white/40 mt-2 font-mono">
                      🔒 معلوماتك مشفرة ومحمية، وسيتم فتح محادثة فورية مع إدارة القبول لوكالة الأساطير.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="w-full py-2 text-center text-xs text-white/50 hover:text-white"
                  >
                    تعديل الإجابات السابقة
                  </button>
                </motion.div>
              )}
            </form>
          )}
        </div>
      </section>

      {/* 4. WHY LEGENDS AGENCY? (VALUE STACK) */}
      <section className="relative z-10 w-full px-4 sm:px-6 max-w-4xl mx-auto mb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-white mb-8 font-arabic">
          لماذا ينضم كبار المذيعين وصناع المحتوى لوكالة الأساطير؟
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-300 mb-3">
              <Award size={20} />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5 font-arabic">عقد رسمي وبونص كاش</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              تحصل على كامل أرباحك من التطبيق 100% بدون أي استقطاع، بالإضافة إلى سلم بونص كاش شهري من الوكالة يصل حتى $66,000.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-3">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5 font-arabic">حصانة وفك حظر 24/7</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              خط ساخن ومباشر مع مسؤولي ومطوري تطبيق Xena Live لحماية حسابك من البلاغات الكيدية وفك الحظر فورياً.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-3">
              <TrendingUp size={20} />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5 font-arabic">تدريب ودعم جولات</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              مشرفون محترفون معك يومياً لتنسيق الجولات الرسمية وجذب الداعمين وتجهيز الإضاءة والمايك للوصول إلى الإكسبلور.
            </p>
          </div>
        </div>
      </section>

      {/* 5. DIRECT FAST ACTION FOOTER */}
      <footer className="relative z-10 w-full px-4 text-center">
        <p className="text-xs text-white/50 mb-3">
          لديك استفسار سريع قبل التقديم؟
        </p>
        <a
          href="https://wa.me/447460018974?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D9%88%D8%B5%D9%84%D8%AA%20%D9%85%D9%86%20%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86%20%D9%88%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%A7%D9%86%D8%B6%D9%85%D8%A7%D9%85%20%D9%84%D9%88%D9%83%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D8%A3%D8%B3%D8%A7%D8%B7%D9%8A%D8%B1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs text-[#25D366] hover:underline font-mono font-bold"
        >
          <BrandIcons.WhatsApp className="w-3.5 h-3.5" />
          <span>تواصل مباشرة عبر واتساب الإدارة: +44 7460 018974</span>
        </a>
      </footer>

      {/* 6. REGULATORY & EARNINGS LEGAL DISCLAIMER */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center">
        <div className="flex items-center justify-center gap-2 mb-2.5 text-amber-300 font-bold font-mono text-xs uppercase tracking-wider">
          <AlertTriangle size={15} className="text-amber-400 shrink-0" />
          <span>إخلاء مسؤولية قانوني وتنظيمي (Legal & Earnings Disclaimer)</span>
        </div>
        <p className="text-[11px] sm:text-xs text-white/50 leading-relaxed max-w-3xl mx-auto">
          وكالة الأساطير (Legends Agency) هي شبكة إدارة وتطوير معتمدة لصناع المحتوى والمذيعين على منصة Xena Live. الوكالة ليست جهة توظيف أو مشغل حكومي، ولا تقدم وظائف رسمية أو رواتب شهرية ثابتة أو وعوداً بأرباح مضمونة. المذيعون وصناع المحتوى هم متعاقدون مستقلون بالكامل (Independent Content Creators)، وتعتمد كافة العوائد المالية والمكافآت التقديرية كلياً على الجهد والنشاط الفردي، وساعات البث الفعالة، والالتزام بسياسات وإرشادات مجتمع Xena Live، ومستوى الدعم والهدايا الافتراضية المستلمة من الجمهور داخل التطبيق. يتحمل كل صانع محتوى المسؤولية القانونية والضريبية الكاملة عن نشاطه والتزامه بالأنظمة واللوائح المعمول بها في بلد إقامة صانع المحتوى.
        </p>
      </div>
    </div>
  );
}
