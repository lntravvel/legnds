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
    growthGoal: 'quality', // quality | audience | support
    experience: 'beginner', // beginner | tiktok_bigo | xena_current
    deviceReady: 'yes', // yes | needs_help
    contentType: 'talk', // talk | gaming | talent
    name: '',
    phone: '',
    country: '',
    age: '',
    socialHandle: '',
    termsAccepted: false
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

    if (!formData.name.trim() || !formData.phone.trim() || !formData.country.trim() || !formData.age.trim()) {
      setValidationError(
        t(
          'يرجى ملء جميع الحقول المطلوبة (الاسم الكامل، رقم الواتساب، الدولة، العمر)',
          'Please fill all required fields (Full Name, WhatsApp, Country, Age)',
          'Заполните обязательные поля (Имя, WhatsApp, Страна, Возраст)',
          'Completează câmpurile obligatorii (Nume, WhatsApp, Țară, Vârstă)',
          'Veuillez remplir les champs obligatoires (Nom, WhatsApp, Pays, Âge)',
          'Compila i campi obbligatori (Nome, WhatsApp, Paese, Età)'
        )
      );
      return;
    }

    const ageNum = parseInt(formData.age, 10);
    if (isNaN(ageNum) || ageNum < 18) {
      setValidationError(
        t(
          'الانضمام متاح فقط لمن هم 18 سنة فأكثر.',
          'Joining is only available for individuals 18 years or older.',
          'Вступление доступно только лицам от 18 лет и старше.',
          'Înscrierea este permisă doar persoanelor cu vârsta de 18 ani sau mai mult.',
          'L\'inscription est réservée aux personnes de 18 ans et plus.',
          'L\'iscrizione è consentita solo a chi ha compiuto 18 anni o più.'
        )
      );
      return;
    }

    if (!formData.termsAccepted) {
      setValidationError(
        t(
          'يرجى تأكيد الإقرار بأن عمرك 18 سنة أو أكثر والموافقة على سياسات Xena Live.',
          'Please confirm that you are 18+ and agree to Xena Live policies.',
          'Пожалуйста, подтвердите, что вам исполнилось 18 лет, и согласие с правилами Xena Live.',
          'Vă rugăm să confirmați că aveți cel puțin 18 ani și sunteți de acord cu politicile Xena Live.',
          'Veuillez confirmer que vous avez 18 ans ou plus et accepter les règles de Xena Live.',
          'Conferma di avere almeno 18 anni e di accettare le regole di Xena Live.'
        )
      );
      return;
    }

    const goalMap: Record<string, string> = {
      quality: 'تطوير جودة البث والصوت والإضاءة',
      audience: 'بناء جمهور متفاعل واكتساب متابعين جدد',
      support: 'الحصول على دعم فني وتوجيه مستمر'
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
    const safeAge = clean(formData.age, 3);
    const safeHandle = clean(formData.socialHandle, 60);

    const message = [
      '🌟 *طلب انضمام جديد - وكالة الأساطير (Xena Live)* 🌟',
      '────────────────────────────',
      `👤 *الاسم:* ${safeName}`,
      `📱 *رقم الواتساب:* ${safePhone}`,
      `🌍 *الدولة وبلد الإقامة:* ${safeCountry}`,
      `🎂 *العمر (18+):* ${safeAge}`,
      safeHandle ? `🔗 *معرف الحساب / الآيدي:* ${safeHandle}` : null,
      '────────────────────────────',
      '📊 *معلومات المتقدم:*',
      `🎯 *الهدف من الانضمام:* ${goalMap[formData.growthGoal] || formData.growthGoal}`,
      `🎙️ *الخبرة السابقة:* ${expMap[formData.experience] || formData.experience}`,
      `🎭 *نوع المحتوى المقترح:* ${contentMap[formData.contentType] || formData.contentType}`,
      `📱 *جاهزية الهاتف والإنترنت:* ${formData.deviceReady === 'yes' ? 'جاهز تماماً بكاميرا وإنترنت مستقر ✅' : 'يحتاج نصائح للإعدادات ⚠️'}`,
      '✅ *إقرار:* المتقدم 18+ وموافق على سياسات تطبيق Xena Live',
      '────────────────────────────',
      'تم إرسال هذا الطلب عبر الموقع: https://legeends.com/apply'
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
              'حملة القبول مفتوحة الآن: دعم فني وتدريب وتطوير مستمر لصناع المحتوى البالغين على تطبيق Xena Live',
              'Registration Open: Technical support, training, and continuous mentorship for adult creators on Xena Live',
              'Регистрация открыта: Техподдержка, обучение и наставничество для совершеннолетних авторов на Xena Live',
              'Înscrieri deschise: Suport tehnic, instruire și îndrumare continuă pentru creatorii adulți pe Xena Live',
              'Inscriptions ouvertes : Support technique, formation et encadrement continu pour les créateurs adultes sur Xena Live',
              'Iscrizioni aperte: Supporto tecnico, formazione e tutoraggio continuo per creator maggiorenni su Xena Live'
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
            {t('وكالة شريكة على تطبيق XENA LIVE', 'XENA LIVE PARTNER AGENCY', 'АГЕНТСТВО-ПАРТНЕР XENA LIVE', 'AGENȚIE PARTENERĂ XENA LIVE', 'AGENCE PARTENAIRE XENA LIVE', 'AGENZIA PARTNER XENA LIVE')}
          </span>
        </div>

        {/* Agency Title */}
        <LegendsBrandTitle size="md" className="mb-3" />

        <h1 className={`text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tight ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t(
            'وكالة الأساطير | دعم وتوجيه صناع المحتوى على Xena Live',
            'Legends Agency | Support & Mentorship for Creators on Xena Live',
            'Legends Agency | Поддержка и развитие авторов на Xena Live',
            'Legends Agency | Suport și îndrumare pentru creatori pe Xena Live',
            'Legends Agency | Soutien et encadrement des créateurs sur Xena Live',
            'Legends Agency | Supporto e tutoraggio per i creatori su Xena Live'
          )}
        </h1>

        <p className={`text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed mb-8 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t(
            'نقدم الدعم الفني والتدريب على جودة البث والتوجيه المستمر لصناع المحتوى البالغين على تطبيق Xena Live، مع الالتزام الكامل بسياسات التطبيق.',
            'We provide technical support, streaming quality training, and continuous mentorship for adult creators on Xena Live, in full compliance with platform policies.',
            'Мы предоставляем техническую поддержку, обучение качеству трансляций и постоянное наставничество для совершеннолетних авторов на Xena Live в полном соответствии с правилами платформы.',
            'Oferim suport tehnic, instruire pentru calitatea transmisiunilor și îndrumare continuă pentru creatorii adulți pe Xena Live, în deplină conformitate cu politicile platformei.',
            'Nous offrons un support technique, une formation à la qualité de diffusion et un encadrement continu pour les créateurs adultes sur Xena Live, en totale conformité avec les règles.',
            'Offriamo supporto tecnico, formazione sulla qualità dello streaming e tutoraggio continuo per i creatori maggiorenni su Xena Live, nel pieno rispetto delle regole.'
          )}
        </p>

        {/* Quick Highlights Trio */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-2xl mx-auto mb-10">
          <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col items-center justify-center">
            <Coins className="w-5 h-5 text-cyan-400 mb-1" />
            <span className="text-xs sm:text-sm font-bold text-white leading-none">انضمام مجاني</span>
            <span className="text-[10px] text-white/50 mt-1 font-mono">بدون أي رسوم</span>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col items-center justify-center">
            <TrendingUp className="w-5 h-5 text-emerald-400 mb-1" />
            <span className="text-xs sm:text-sm font-bold text-white leading-none">تدريب وتطوير</span>
            <span className="text-[10px] text-white/50 mt-1 font-mono">جودة الصوت والإضاءة</span>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-purple-400 mb-1" />
            <span className="text-xs sm:text-sm font-bold text-white leading-none">دعم فني 24/7</span>
            <span className="text-[10px] text-white/50 mt-1 font-mono">متابعة مستمرة</span>
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
                تهانينا! أنت مؤهل للانضمام معنا 👑
              </h2>
              <p className="text-xs sm:text-sm text-emerald-200/80 max-w-md mx-auto mb-6 leading-relaxed">
                تم تجهيز بياناتك وتوجيهك إلى واتساب إدارة وكالة الأساطير للتواصل واستكمال الخطوات وتفعيل الدعم الفني.
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

              {/* STEP 1: CONTENT TYPE & GROWTH GOAL */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      1. ما هو نوع المحتوى الذي تقدمه أو تفضل تقديمه في البث؟ *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { id: 'talk', title: 'حوار ودردشة وتفاعل', desc: 'بث تفاعلي وتواصل مباشر' },
                        { id: 'gaming', title: 'ألعاب وبث مباشر', desc: 'ألعاب الهواتف والترفيه' },
                        { id: 'talent', title: 'مواهب وفنون ومنوعات', desc: 'موسيقى، فن، إبداع' }
                      ].map(opt => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleSelectOption('contentType', opt.id)}
                          className={`p-3.5 rounded-2xl border text-start transition-all cursor-pointer ${
                            formData.contentType === opt.id
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
                      2. ما هو هدفك الأساسي من الانضمام لوكالة الأساطير؟ *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { id: 'quality', title: 'تطوير جودة البث والصوت', desc: 'نصائح لضبط المايك والإضاءة' },
                        { id: 'audience', title: 'بناء جمهور متفاعل', desc: 'نصائح لزيادة المتابعين' },
                        { id: 'support', title: 'دعم فني وتوجيه 24/7', desc: 'استشارات تقنية ومتابعة' }
                      ].map(opt => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleSelectOption('growthGoal', opt.id)}
                          className={`p-3.5 rounded-2xl border text-start transition-all cursor-pointer ${
                            formData.growthGoal === opt.id
                              ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,243,255,0.25)]'
                              : 'bg-white/[0.03] border-white/10 text-white/70 hover:border-white/20'
                          }`}
                        >
                          <div className="font-bold text-xs sm:text-sm text-cyan-300">{opt.title}</div>
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

                  {/* Age (Mandatory 18+) */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-white/80 flex items-center gap-1.5">
                      <Clock size={13} className="text-pink-400" />
                      <span>العمر (18 سنة فأكثر) *</span>
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="مثال: 22"
                      min="18"
                      max="99"
                      required
                      inputMode="numeric"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 focus:border-pink-400 focus:bg-black/50 text-white text-sm outline-none transition-all placeholder:text-white/20"
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

                  {/* Mandatory Checkbox */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-white/85 select-none leading-relaxed">
                      <input
                        type="checkbox"
                        checked={formData.termsAccepted}
                        onChange={(e) => {
                          setFormData(prev => ({ ...prev, termsAccepted: e.target.checked }));
                          if (validationError) setValidationError('');
                        }}
                        required
                        className="mt-0.5 w-4 h-4 rounded border-white/30 bg-black/40 text-cyan-400 focus:ring-cyan-400 cursor-pointer shrink-0"
                      />
                      <span>أقر بأن عمري 18 سنة أو أكثر، وأنني أوافق على سياسات تطبيق Xena Live.</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-base flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      <BrandIcons.WhatsApp className="w-5 h-5 text-white" />
                      <span>إرسال طلب الانضمام عبر الواتساب</span>
                      <Send size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
                    </button>
                    <p className="text-[11px] text-center text-white/40 mt-2 font-mono">
                      🔒 سيتم استخدام بياناتك للتواصل معك بخصوص طلبك فقط.
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
          لماذا ينضم صناع المحتوى لوكالة الأساطير؟
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-300 mb-3">
              <Award size={20} />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5 font-arabic">تدريب على الصوت والإضاءة</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              إرشادات عملية ونصائح متخصصة لرفع جودة الصوت والكاميرا والإضاءة لتقديم بث مباشر جذاب واحترافي.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-3">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5 font-arabic">دعم فني سريع 24/7</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              فريق دعم فني متواجد لمساعدتك في أي عقبات تقنية أو استفسارات حول استخدام التطبيق وأدوات البث.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-3">
              <TrendingUp size={20} />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5 font-arabic">تطوير المحتوى والمتابعة</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              تحليل دوري لأدائك وتقديم أفكار مبتكرة وتوجيهات مستمرة لتنمية جمهورك وزيادة التفاعل.
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
          وكالة الأساطير (Legends Agency) هي شبكة إدارة وتطوير لصناع المحتوى والمذيعين على منصة Xena Live. الوكالة ليست جهة توظيف أو مشغل حكومي، ولا تقدم وظائف رسمية أو مخصصات شهرية ثابتة أو وعوداً بأرباح مؤكدة. المذيعون وصناع المحتوى هم متعاقدون مستقلون بالكامل (Independent Content Creators)، وتعتمد كافة العوائد والمكافآت التقديرية كلياً على الجهد والنشاط الفردي، وساعات البث الفعالة، والالتزام بسياسات وإرشادات مجتمع Xena Live، ومستوى الدعم والهدايا الافتراضية المستلمة من الجمهور داخل التطبيق. الخدمة متاحة للبالغين 18+ فقط، ويتحمل كل صانع محتوى المسؤولية القانونية والضريبية الكاملة عن نشاطه والتزامه بالأنظمة واللوائح المعمول بها في بلد إقامته.
        </p>
      </div>
    </div>
  );
}
