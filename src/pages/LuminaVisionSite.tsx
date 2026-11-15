import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Play,
  Pause,
  Download,
  ExternalLink,
  Globe,
  Sparkles,
  ShieldCheck,
  Mic,
  Video,
  Trophy,
  CheckCircle2,
  User,
  Phone,
  Clock,
  Layers,
  ChevronDown,
  Send,
  Zap,
  Headphones,
  BarChart3,
  Crown,
} from 'lucide-react';
import { BrandIcons } from '../components/BrandIcons';
import { useLanguage, Language } from '../i18n/LanguageContext';
import { XENA_UNION_JOIN_URL, getXenaStoreUrl } from '../data/links';
import { TEAM_MEMBERS } from '../data/team';

const HERO_VIDEO_URL = '/assets/videos/drone_stage.mp4';

export type PlatformKey = 'xena' | 'tango' | 'bigo';

interface PlatformConfig {
  id: PlatformKey;
  nameAr: string;
  nameEn: string;
  taglineAr: string;
  taglineEn: string;
  descAr: string;
  descEn: string;
  accentHex: string;
  secondaryHex: string;
  badgeText: string;
  streamTypesAr: string[];
  streamTypesEn: string[];
  perksAr: string[];
  perksEn: string[];
  downloadUrl: string;
  unionUrl?: string;
  Icon: React.ElementType;
}

const PLATFORMS_DATA: Record<PlatformKey, PlatformConfig> = {
  xena: {
    id: 'xena',
    nameAr: 'زينا لايف',
    nameEn: 'Xena Live',
    taglineAr: 'أقوى مجتمع غرف صوتية وتفاعل جماعي في الشرق الأوسط',
    taglineEn: 'Premier Voice Rooms & Interactive Party Community',
    descAr:
      'مثالي لصناع المحتوى الذين يفضلون البث الصوتي بدون كاميرا، المسابقات التفاعلية، وتكوين غرف دردشة نشطة على مدار الساعة مع دعم مباشر من إدارة وكالة الأساطير.',
    descEn:
      'Ideal for creators who prefer camera-free voice broadcasting, interactive events, and vibrant 24/7 audio rooms backed by Legends Agency.',
    accentHex: '#ec4899',
    secondaryHex: '#a855f7',
    badgeText: 'VOICE & PARTY ECOSYSTEM',
    streamTypesAr: ['غرف صوتية جماعية', 'جولات وتحديات PK', 'فعاليات ومسابقات صوتية'],
    streamTypesEn: ['Group Voice Rooms', 'PK Challenges', 'Interactive Audio Events'],
    perksAr: [
      'انضمام فوري عبر كود الوكالة المباشر',
      'تدريب كامل على إدارة الغرف الصوتية وجذب المتابعين',
      'دعم فني وتوجيه مستمر 24/7 من مشرفي زينا لايف',
    ],
    perksEn: [
      'Instant onboarding via direct agency union link',
      'Full training on voice room management & audience engagement',
      '24/7 technical support & guidance from Xena supervisors',
    ],
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.xparty.androidapp',
    unionUrl: XENA_UNION_JOIN_URL,
    Icon: BrandIcons.Xena,
  },
  tango: {
    id: 'tango',
    nameAr: 'تانجو لايف',
    nameEn: 'Tango Live',
    taglineAr: 'منصة البث المرئي الحر والانتشار العالمي السريع',
    taglineEn: 'Global Video Live-Streaming & High-Engagement Battles',
    descAr:
      'الخيار الأول لمذيعي الفيديو والحوار المباشر والمواهب الذين يبحثون عن جمهور عالمي واسع، تفاعل لحظي قوي، وتوجيه احترافي لإعدادات الكاميرا والإضاءة.',
    descEn:
      'The top choice for video broadcasters, talk hosts, and talents looking for global reach, intense live battles, and studio lighting coaching.',
    accentHex: '#f43f5e',
    secondaryHex: '#9333ea',
    badgeText: 'GLOBAL VIDEO STREAMING',
    streamTypesAr: ['بث فيديو مباشر HD', 'تحديات ثنائية وجماعية', 'عروض مواهب ودردشة'],
    streamTypesEn: ['HD Video Streams', 'Multi-Host Battles', 'Talent & Lifestyle Shows'],
    perksAr: [
      'إرشادات احترافية لضبط زوايا الكاميرا والإضاءة والصوت',
      'خطط تطوير محتوى لزيادة التفاعل وبناء قاعدة جماهيرية',
      'متابعة شخصية من فريق الإدارة لحل أي عقبات تقنية',
    ],
    perksEn: [
      'Pro coaching on camera angles, lighting, and audio clarity',
      'Content growth strategies to build a loyal fanbase',
      'Dedicated management follow-up and technical assistance',
    ],
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.sgiggle.production',
    Icon: BrandIcons.Tango,
  },
  bigo: {
    id: 'bigo',
    nameAr: 'بيجو لايف',
    nameEn: 'Bigo Live',
    taglineAr: 'العملاق العالمي للبث الاحترافي والألعاب والمواهب',
    taglineEn: 'Worldwide Pro Broadcasting, Gaming & Creator Network',
    descAr:
      'منصة عالمية ضخمة تجمع بين بث الفيديو الاحترافي، بث الألعاب، والغرف المتعددة، مع نظام مستويات متطور وتدريب شامل من وكالة الأساطير.',
    descEn:
      'A massive global platform combining pro video streams, gaming broadcasts, and multi-guest rooms with structured mentorship.',
    accentHex: '#00f3ff',
    secondaryHex: '#3b82f6',
    badgeText: 'PRO CREATOR & GAMING HUB',
    streamTypesAr: ['بث فيديو وغرف متعددة', 'بث ألعاب وترفيه', 'مسابقات وعائلات'],
    streamTypesEn: ['Video & Multi-Guest Rooms', 'Gaming Broadcasts', 'Global Creator Events'],
    perksAr: [
      'تأهيل شامل للمذيعين الجدد والمحترفين على نظام بيجو',
      'مراجعات أداء دورية ونصائح لتطوير أسلوب التقديم',
      'مجتمع متكامل ودعم فني سريع على مدار الساعة',
    ],
    perksEn: [
      'Comprehensive onboarding for new and experienced Bigo hosts',
      'Periodic performance reviews and presentation coaching',
      'Supportive creator community and 24/7 technical help',
    ],
    downloadUrl: 'https://play.google.com/store/apps/details?id=sg.bigo.live',
    Icon: BrandIcons.Bigo,
  },
};

const ECOSYSTEM_BRANDS = [
  { name: 'Xena Live', type: 'xena' },
  { name: 'Tango Live', type: 'tango' },
  { name: 'Bigo Live', type: 'bigo' },
  { name: 'Google', type: 'google' },
  { name: 'Cust.io', type: 'cust' },
  { name: 'Hummel', type: 'hummel' },
  { name: 'Copper', type: 'copper' },
  { name: 'Tesla', type: 'tesla' },
];

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'ar', label: 'AR' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'ro', label: 'RO' },
  { code: 'fr', label: 'FR' },
  { code: 'it', label: 'IT' },
];

const VIDEOS = [
  { id: '1', ytId: 'mby0aMdDG2w', titleAr: 'أسرار النجاح في البث المباشر', titleEn: 'Live Streaming Mastery', tag: 'XENA • TANGO • BIGO' },
  { id: '2', ytId: 'aUA1wO2q_Xk', titleAr: 'كيف تطور محتواك وتجذب الجمهور', titleEn: 'Audience Growth Strategies', tag: 'CREATOR COACHING' },
  { id: '3', ytId: 'zO-wIu-HnFg', titleAr: 'جولة داخل منظومة وكالة الأساطير', titleEn: 'Inside Legends Agency', tag: 'LEGENDS ECOSYSTEM' },
  { id: '4', ytId: 'a5I-eEkg2zM', titleAr: 'خطوات الانطلاق للمذيع الجديد', titleEn: 'New Broadcaster Launchpad', tag: 'FAST ONBOARDING' },
];

const ROADMAP_STEPS = [
  {
    num: '01',
    titleAr: 'اختر منصتك المفضلة',
    titleEn: 'Select Your Platform',
    descAr: 'حدد التطبيق الذي يناسب أسلوبك (زينا لايف للصوتي، تانجو لايف للفيديو، أو بيجو لايف للبث الشامل والألعاب) أو اجمع بين أكثر من منصة.',
    descEn: 'Choose the app that fits your style (Xena Live for voice, Tango Live for video, or Bigo Live for pro/gaming) or apply for multiple.',
    detailAr: 'فريقنا يساعدك في اختيار المنصة الأنسب لشخصيتك ونوع المحتوى الذي تحب تقديمه بدون أي رسوم.',
    detailEn: 'Our team helps you pick the best platform for your personality and content type completely free.',
    Icon: Layers,
  },
  {
    num: '02',
    titleAr: 'إعداد الحساب وتجهيز الاستوديو',
    titleEn: 'Account Setup & Studio Prep',
    descAr: 'نرشدك خطوة بخطوة في ربط حسابك بالوكالة وضبط إعدادات الصوت والإضاءة والكاميرا لتبدأ بأفضل مظهر.',
    descEn: 'Step-by-step guidance to link your account and optimize your microphone, lighting, and camera settings.',
    detailAr: 'حتى لو كنت تبدأ من هاتفك فقط، نقدم لك نصائح عملية تجعل جودة بثك احترافية وواضحة.',
    detailEn: 'Even if starting with just your smartphone, we give you practical tips for crystal-clear quality.',
    Icon: Headphones,
  },
  {
    num: '03',
    titleAr: 'التدريب وتطوير المحتوى',
    titleEn: 'Coaching & Content Growth',
    descAr: 'أفكار متجددة لإدارة الحوار، التحديات، وجذب المتابعين المتفاعلين مع الالتزام الكامل بسياسات كل تطبيق.',
    descEn: 'Fresh ideas for engaging conversations, PK challenges, and audience building while respecting platform rules.',
    detailAr: 'متابعة مستمرة لمساعدتك في تجاوز رهبة البدايات وبناء حضور قوي ومميز.',
    detailEn: 'Ongoing mentorship to help you build confidence and a strong, distinctive presence.',
    Icon: Sparkles,
  },
  {
    num: '04',
    titleAr: 'دعم فني ومتابعة 24/7',
    titleEn: '24/7 Support & Analytics',
    descAr: 'فريق الإدارة والمشرفين متواجدون دائماً للرد على استفساراتك التقنية وشرح نظام المكافآت الخاص بكل تطبيق.',
    descEn: 'Management and supervisors are always available to answer technical questions and explain platform reward systems.',
    detailAr: 'تواصل مباشر وسريع عبر الواتساب مع مدير الوكالة والمشرفين المختصين.',
    detailEn: 'Direct, fast communication via WhatsApp with agency leadership and supervisors.',
    Icon: BarChart3,
  },
];

function EcosystemLogo({ type }: { type: string }) {
  switch (type) {
    case 'xena':
      return <BrandIcons.Xena className="h-[15px] w-[15px] rounded-sm" />;
    case 'tango':
      return <BrandIcons.Tango className="h-[15px] w-[15px] rounded-sm" />;
    case 'bigo':
      return <BrandIcons.Bigo className="h-[15px] w-[15px] rounded-sm" />;
    case 'google':
      return (
        <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor">
          <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 15.65 5 12c0-3.65 3.36-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81Z" />
        </svg>
      );
    case 'cust':
      return (
        <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      );
    case 'hummel':
      return (
        <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M4 7l8 5 8-5M4 13l8 5 8-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'copper':
      return (
        <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor">
          <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
        </svg>
      );
    case 'tesla':
      return (
        <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor">
          <path d="M12 5.5c3.5 0 6.8.6 9.5 1.8.5-.9.8-1.5.8-1.5C19 4.3 15.6 3.6 12 3.6S5 4.3 1.7 5.8c0 0 .3.6.8 1.5 2.7-1.2 6-1.8 9.5-1.8zm0 2.5c-2.6 0-5.2.4-7.4 1.2l1.2 1.8c1.5-.5 3.3-.8 5-.9L12 20.4l1.2-10.3c1.7.1 3.5.4 5 .9l1.2-1.8c-2.2-.8-4.8-1.2-7.4-1.2z" />
        </svg>
      );
    default:
      return null;
  }
}

/**
 * Reusable Orbital Conic-Gradient Button per Lumina Vision Spec
 */
function LuminaOrbitalButton({
  children,
  onClick,
  type = 'button',
  className = '',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center rounded-full p-[2.5px] overflow-hidden cursor-pointer transition-transform active:scale-95 ${className}`}
    >
      {/* 10x (1000%) Rotating Conic-Gradient Orbital Source */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 w-[1000%] aspect-square -translate-x-1/2 -translate-y-1/2 animate-[spin_6s_linear_infinite]"
        style={{
          background:
            'conic-gradient(from 0deg, #3b82f6, #a855f7, #ec4899, #f8a170, #eab308, #3b82f6)',
        }}
      />
      {/* Frosted Glass Capsule Inner */}
      <span
        className="relative z-10 inline-flex items-center justify-center gap-3 rounded-full py-[14px] px-[26.5px] text-white text-[12px] font-bold uppercase tracking-wider [text-shadow:none] w-full"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          boxShadow: 'inset 0 0 22px rgba(255, 255, 255, 0.35)',
          textShadow: 'none',
        }}
      >
        {children}
      </span>
    </button>
  );
}

export function LuminaVisionSite() {
  const { t, lang, setLang, dir } = useLanguage();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activePlatform, setActivePlatform] = useState<PlatformKey>('xena');
  const [matcherChoice, setMatcherChoice] = useState<'voice' | 'video' | 'pro' | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [storeInfo] = useState(() => getXenaStoreUrl());

  // Interactive Application Studio State
  const [selectedFormPlatforms, setSelectedFormPlatforms] = useState<PlatformKey[]>(['xena']);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: '',
    age: '',
    experience: 'beginner',
    socialHandle: '',
    termsAccepted: false,
  });
  const [formError, setFormError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mouse spotlight tracking
  const [mousePos, setMousePos] = useState({ x: 600, y: 300 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const currentPlatform = PLATFORMS_DATA[activePlatform];
  const ActivePlatformIcon = currentPlatform.Icon;

  const toggleVideo = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play().catch(() => {});
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const cycleLanguage = () => {
    const idx = LANGUAGES.findIndex((l) => l.code === lang);
    const next = LANGUAGES[(idx + 1) % LANGUAGES.length];
    setLang(next.code);
  };

  const selectPlatformAndScrollToApply = (pKey: PlatformKey) => {
    setActivePlatform(pKey);
    setSelectedFormPlatforms((prev) => (prev.includes(pKey) ? prev : [pKey, ...prev]));
    const el = document.getElementById('lumina-apply');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFormPlatform = (pKey: PlatformKey) => {
    setSelectedFormPlatforms((prev) => {
      if (prev.includes(pKey)) {
        if (prev.length === 1) return prev;
        return prev.filter((k) => k !== pKey);
      }
      return [...prev, pKey];
    });
    if (formError) setFormError('');
  };

  const handleMatcherSelect = (choice: 'voice' | 'video' | 'pro') => {
    setMatcherChoice(choice);
    if (choice === 'voice') setActivePlatform('xena');
    if (choice === 'video') setActivePlatform('tango');
    if (choice === 'pro') setActivePlatform('bigo');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFormPlatforms.length === 0) {
      setFormError(t('يرجى اختيار تطبيق واحد على الأقل', 'Please select at least one platform', 'Выберите платформу', 'Selectați o platformă', 'Choisissez une plateforme', 'Seleziona una piattaforma'));
      return;
    }
    if (!formData.name.trim() || !formData.phone.trim() || !formData.country.trim() || !formData.age.trim()) {
      setFormError(
        t(
          'يرجى ملء جميع الحقول الأساسية (الاسم، الواتساب، الدولة، العمر)',
          'Please fill in all required fields (Name, WhatsApp, Country, Age)',
          'Заполните все обязательные поля',
          'Completați toate câmpurile obligatorii',
          'Veuillez remplir tous les champs obligatoires',
          'Compila tutti i campi obbligatori'
        )
      );
      return;
    }
    const ageNum = parseInt(formData.age, 10);
    if (isNaN(ageNum) || ageNum < 18) {
      setFormError(
        t(
          'الانضمام متاح فقط لمن هم 18 سنة فأكثر.',
          'Joining is only available for individuals 18 years or older.',
          'Вступление доступно только лицам от 18 лет и старше.',
          'Înscrierea este permisă doar persoanelor 18+.',
          'Inscription réservée aux 18 ans et plus.',
          'Iscrizione riservata ai maggiorenni 18+.'
        )
      );
      return;
    }
    if (!formData.termsAccepted) {
      setFormError(
        t(
          'يرجى الموافقة على إقرار السن (18+) وسياسات المنصة المختارة.',
          'Please confirm you are 18+ and accept platform policies.',
          'Подтвердите возраст 18+ и правила платформы.',
          'Confirmați vârsta 18+ și politicile.',
          'Confirmez avoir 18+ ans.',
          'Conferma di avere 18+ anni.'
        )
      );
      return;
    }

    const platformNames = selectedFormPlatforms
      .map((k) => `${PLATFORMS_DATA[k].nameAr} (${PLATFORMS_DATA[k].nameEn})`)
      .join(' + ');

    const expLabels: Record<string, string> = {
      beginner: 'مذيع جديد (أول مرة)',
      experienced: 'خبرة سابقة في البث المباشر',
      active_host: 'مذيع حالي على زينا / تانجو / بيجو',
    };

    const clean = (s: string, max = 60) => s.replace(/[\r\n\t]/g, ' ').trim().slice(0, max);

    const msg = [
      '🌟 *طلب انضمام جديد - وكالة الأساطير (Legends Agency)* 🌟',
      '────────────────────────────',
      `📲 *التطبيق المطلوب للتقديم:* ${platformNames}`,
      '────────────────────────────',
      `👤 *الاسم:* ${clean(formData.name)}`,
      `📱 *رقم الواتساب:* ${clean(formData.phone, 25)}`,
      `🌍 *الدولة / الإقامة:* ${clean(formData.country, 40)}`,
      `🎂 *العمر (18+):* ${clean(formData.age, 3)}`,
      `🎙️ *الخبرة:* ${expLabels[formData.experience] || formData.experience}`,
      formData.socialHandle ? `🔗 *الآيدي / الحساب:* ${clean(formData.socialHandle)}` : null,
      '✅ *إقرار:* المتقدم 18+ وموافق على سياسات المنصة',
      '────────────────────────────',
      'تم الإرسال عبر واجهة Lumina التفاعلية - وكالة الأساطير',
    ]
      .filter(Boolean)
      .join('\n');

    setIsSubmitted(true);
    const waUrl = `https://wa.me/447460018974?text=${encodeURIComponent(msg)}`;
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 350);
  };

  const tickerItems = [...ECOSYSTEM_BRANDS, ...ECOSYSTEM_BRANDS, ...ECOSYSTEM_BRANDS];

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#020306] text-white overflow-x-hidden selection:bg-pink-500/30 selection:text-white"
    >
      {/* Interactive Global Ambient Mouse Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-500"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, ${currentPlatform.accentHex}14, transparent 70%)`,
        }}
      />

      {/* =====================================================================
          SECTION 1: LUMINA VISION CINEMATIC INTERACTIVE HERO
      ===================================================================== */}
      <section
        id="lumina-hero"
        dir="ltr"
        className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-black px-6 sm:px-10 lg:px-[70px] pt-7 pb-6"
      >
        {/* Background Video anchored strictly to RIGHT SIDE per Lumina spec */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            ref={videoRef}
            src={HERO_VIDEO_URL}
            autoPlay
            loop
            muted
            playsInline
            style={{
              opacity: 1,
              transformOrigin: 'right center',
              transform: 'scale(1.3)',
              objectFit: 'cover',
              objectPosition: 'right center',
              filter: 'brightness(1.1) contrast(1.1)',
            }}
            className="w-full h-full"
          />

          {/* Text Protection: Deep left-aligned black-to-transparent overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.15) 85%)',
            }}
          />

          {/* Dynamic Platform Color Aura */}
          <div
            className="absolute -left-24 top-1/4 w-[480px] h-[480px] rounded-full blur-[150px] opacity-25 transition-colors duration-700"
            style={{ backgroundColor: currentPlatform.accentHex }}
          />

          {/* Bottom Seamless Transition */}
          <div
            className="absolute inset-x-0 bottom-0 h-36"
            style={{
              background: 'linear-gradient(to top, #020306 0%, rgba(2,3,6,0) 100%)',
            }}
          />
        </div>

        {/* [LAYER 1: TOP NAVIGATION] */}
        <header className="relative z-20 w-full flex items-center justify-between pt-1">
          {/* Logo (Left) */}
          <a href="#lumina-hero" className="flex items-center gap-3.5 group">
            <div
              className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
              style={{ borderColor: `${currentPlatform.accentHex}66` }}
            >
              <BrandIcons.LuminaNode className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-white/95 font-sans">
              LEGENDS AGENCY
            </span>
          </a>

          {/* Links (Center-Right): ml-auto mr-12 */}
          <nav className="hidden lg:flex items-center gap-7 ml-auto mr-12">
            <a href="#lumina-hero" className="text-[0.85rem] font-normal text-white/60 hover:text-white transition-colors">
              {t('الرئيسية', 'Home', 'Главная', 'Acasă', 'Accueil', 'Home')}
            </a>
            <a href="#lumina-platforms" className="text-[0.85rem] font-normal text-white/60 hover:text-white transition-colors">
              {t('المنصات الثلاث', 'Platforms', 'Платформы', 'Platforme', 'Plateformes', 'Piattaforme')}
            </a>
            <a href="#lumina-roadmap" className="text-[0.85rem] font-normal text-white/60 hover:text-white transition-colors">
              {t('كيف نبدأ', 'How It Works', 'Как начать', 'Cum începi', 'Comment démarrer', 'Come iniziare')}
            </a>
            <a href="#lumina-media" className="text-[0.85rem] font-normal text-white/60 hover:text-white transition-colors">
              {t('الفيديوهات', 'Photos & Media', 'Медиа', 'Media', 'Médias', 'Media')}
            </a>
            <a href="#lumina-crew" className="text-[0.85rem] font-normal text-white/60 hover:text-white transition-colors">
              {t('فريق الإدارة', 'Crew', 'Команда', 'Echipa', 'Équipe', 'Team')}
            </a>
            <a href="#lumina-apply" className="text-[0.85rem] font-normal text-white/60 hover:text-white transition-colors">
              {t('قدّم طلبك', 'Contact', 'Контакт', 'Contact', 'Contact', 'Contatti')}
            </a>
          </nav>

          {/* Far Right: Language Switcher + 52px Frosted Play Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={cycleLanguage}
              className="h-10 px-3.5 rounded-full bg-white/[0.08] backdrop-blur-[12px] border border-white/20 flex items-center gap-1.5 text-white/85 hover:text-white hover:bg-white/[0.15] text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>{lang.toUpperCase()}</span>
            </button>

            <button
              type="button"
              onClick={toggleVideo}
              aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
              title={isPlaying ? 'Pause Video' : 'Play Video'}
              className="w-[52px] h-[52px] rounded-full bg-white/[0.08] backdrop-blur-[12px] border border-white/25 flex items-center justify-center text-white hover:bg-white/[0.16] hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
            </button>
          </div>
        </header>

        {/* [LAYER 2: MIDDLE INTERACTIVE HERO GRID] */}
        <div className="relative z-20 my-auto py-8 lg:-translate-y-[6%] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Lumina Vision Hero Copy + Interactive Platform Switcher */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Element 1 (Tag): 9px bold uppercase, 0.4em tracking, 12px vertical gap */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15 backdrop-blur-md mb-[12px]">
              <span
                className="w-2 h-2 rounded-full animate-ping"
                style={{ backgroundColor: currentPlatform.accentHex }}
              />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/90 font-sans">
                INITIALIZE VISION • {currentPlatform.badgeText}
              </span>
            </div>

            {/* Element 2 (Heading): 80px bold sans-serif, line-height 1.0, tracking tight, 16px vertical gap */}
            <h1
              dir={lang === 'ar' ? 'rtl' : 'ltr'}
              className={`text-4xl sm:text-6xl lg:text-[76px] font-bold text-white leading-[1.05] tracking-tight mb-[16px] text-left ${
                lang === 'ar' ? 'font-arabic' : 'font-sans'
              }`}
            >
              {t(
                'وكالة الأساطير للبث المباشر',
                'Intelligence Unbound',
                'Creators Unbound',
                'Creators Unbound',
                'Creators Unbound',
                'Creators Unbound'
              )}
            </h1>

            {/* Element 3 (Subheading): 16px regular weight, 60% white, max-w 430px, 30px vertical gap */}
            <p
              dir={lang === 'ar' ? 'rtl' : 'ltr'}
              className={`text-[16px] font-normal text-white/60 max-w-[430px] leading-relaxed mb-[24px] text-left ${
                lang === 'ar' ? 'font-arabic' : 'font-sans'
              }`}
            >
              {t(
                'منظومة تفاعلية متكاملة لدعم وتدريب وتوجيه صناع المحتوى البالغين (18+) على أقوى 3 تطبيقات عالمية: زينا لايف، تانجو لايف، وبيجو لايف.',
                'Interactive multi-platform agency empowering adult creators (18+) across Xena Live, Tango Live, and Bigo Live with 24/7 support and coaching.',
                'Интерактивное мультиплатформенное агентство для авторов (18+) на Xena Live, Tango Live и Bigo Live.',
                'Agenție interactivă multi-platformă pentru creatori (18+) pe Xena Live, Tango Live și Bigo Live.',
                'Agence interactive multi-plateforme pour les créateurs (18+) sur Xena Live, Tango Live et Bigo Live.',
                'Agenzia interattiva multi-piattaforma per creator (18+) su Xena Live, Tango Live e Bigo Live.'
              )}
            </p>

            {/* INTERACTIVE PLATFORM SWITCHER TABS */}
            <div className="mb-[28px] w-full max-w-xl">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/45 mb-2.5">
                {t(
                  'اضغط على أي تطبيق لمعاينة مميزاته والتقديم عليه فوراً:',
                  'CLICK A PLATFORM TO INTERACT & PREVIEW PERKS:',
                  'ВЫБЕРИТЕ ПЛАТФОРМУ:',
                  'SELECTEAZĂ PLATFORMA:',
                  'SÉLECTIONNEZ UNE PLATEFORME :',
                  'SELEZIONA UNA PIATTAFORMA:'
                )}
              </div>
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {(['xena', 'tango', 'bigo'] as PlatformKey[]).map((key) => {
                  const p = PLATFORMS_DATA[key];
                  const Icon = p.Icon;
                  const isActive = activePlatform === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActivePlatform(key)}
                      className={`group relative flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl border backdrop-blur-2xl transition-all duration-300 cursor-pointer text-left ${
                        isActive
                          ? 'bg-white/[0.16] border-white/40 scale-[1.03] shadow-[0_0_30px_rgba(255,255,255,0.12)]'
                          : 'bg-white/[0.04] border-white/10 hover:bg-white/[0.09] hover:border-white/25 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <div className="w-9 h-9 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 shadow">
                        <Icon className="w-full h-full" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-white truncate">
                          {lang === 'ar' ? p.nameAr : p.nameEn}
                        </div>
                        <div
                          className="text-[9px] font-mono font-bold uppercase tracking-wider truncate"
                          style={{ color: p.accentHex }}
                        >
                          {isActive ? '● ACTIVE' : p.nameEn}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Element 4 (Primary Orbital Button + Secondary Quick Action) */}
            <div className="flex flex-wrap items-center gap-4">
              <LuminaOrbitalButton onClick={() => selectPlatformAndScrollToApply(activePlatform)}>
                <span className="[text-shadow:none]">
                  {t(
                    `قدّم الآن على ${currentPlatform.nameAr}`,
                    `APPLY FOR ${currentPlatform.nameEn.toUpperCase()}`,
                    `ПОДАТЬ ЗАЯВКУ В ${currentPlatform.nameEn.toUpperCase()}`,
                    `APLICĂ PENTRU ${currentPlatform.nameEn.toUpperCase()}`,
                    `POSTULER SUR ${currentPlatform.nameEn.toUpperCase()}`,
                    `CANDIDATI SU ${currentPlatform.nameEn.toUpperCase()}`
                  )}
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-[5px]" />
              </LuminaOrbitalButton>

              <a
                href="#lumina-platforms"
                className="inline-flex items-center gap-2 rounded-full py-[14px] px-6 bg-white/[0.06] hover:bg-white/[0.14] border border-white/20 backdrop-blur-xl text-white text-[12px] font-bold uppercase tracking-wider transition-all [text-shadow:none]"
              >
                <span>{t('مقارنة التطبيقات الثلاثة', 'Compare All 3 Apps', 'Сравнить приложения', 'Compară aplicațiile', 'Comparer les 3 apps', 'Confronta le 3 app')}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Interactive Frosted Glass HUD Card for Selected Platform */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlatform}
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                dir={dir}
                className="relative rounded-[28px] p-6 sm:p-7 bg-black/55 backdrop-blur-[40px] border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden"
              >
                {/* Top Glow Bar */}
                <div
                  className="absolute top-0 inset-x-0 h-1.5"
                  style={{
                    background: `linear-gradient(to right, ${currentPlatform.accentHex}, ${currentPlatform.secondaryHex})`,
                  }}
                />

                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-white p-2 flex items-center justify-center shadow-lg shrink-0">
                      <ActivePlatformIcon className="w-full h-full" />
                    </div>
                    <div>
                      <span
                        className="text-[10px] font-mono font-bold uppercase tracking-widest block mb-0.5"
                        style={{ color: currentPlatform.accentHex }}
                      >
                        {currentPlatform.badgeText}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">
                        {lang === 'ar' ? currentPlatform.nameAr : currentPlatform.nameEn}
                      </h2>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-[10px] font-mono text-white/80">
                    18+ VERIFIED
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-5">
                  {lang === 'ar' ? currentPlatform.descAr : currentPlatform.descEn}
                </p>

                {/* Stream Types Pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {(lang === 'ar' ? currentPlatform.streamTypesAr : currentPlatform.streamTypesEn).map(
                    (st, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/[0.07] border border-white/15 text-[11px] font-medium text-white/90"
                      >
                        ✦ {st}
                      </span>
                    )
                  )}
                </div>

                {/* Agency Perks on this Platform */}
                <div className="space-y-2.5 mb-6 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="text-[11px] font-bold text-white/60 uppercase tracking-wider mb-1">
                    {t('ماذا تقدم لك الوكالة في هذا التطبيق؟', 'What Legends Agency Provides:', 'Что дает агентство:', 'Ce oferă agenția:', 'Ce que fournit l’agence :', 'Cosa offre l’agenzia:')}
                  </div>
                  {(lang === 'ar' ? currentPlatform.perksAr : currentPlatform.perksEn).map((perk, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-white/85">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: currentPlatform.accentHex }}
                      />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                {/* Card Interactive Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => selectPlatformAndScrollToApply(currentPlatform.id)}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs text-white flex items-center justify-center gap-2 transition-all cursor-pointer hover:opacity-95 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${currentPlatform.accentHex}, ${currentPlatform.secondaryHex})`,
                    }}
                  >
                    <span>
                      {t(
                        `تقديم طلب على ${currentPlatform.nameAr}`,
                        `Apply on ${currentPlatform.nameEn}`,
                        `Подать заявку в ${currentPlatform.nameEn}`,
                        `Aplică pe ${currentPlatform.nameEn}`,
                        `Postuler sur ${currentPlatform.nameEn}`,
                        `Candidati su ${currentPlatform.nameEn}`
                      )}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {currentPlatform.unionUrl ? (
                    <a
                      href={currentPlatform.unionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                    >
                      <span>{t('انضم بكود الوكالة المباشر', 'Direct Agency Union', 'Прямой вход по коду', 'Link direct agenție', 'Lien direct agence', 'Link diretto agenzia')}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>
                  ) : (
                    <a
                      href={currentPlatform.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{t(`تحميل ${currentPlatform.nameAr}`, `Download ${currentPlatform.nameEn}`, 'Скачать', 'Descarcă', 'Télécharger', 'Scarica')}</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* [LAYER 3: BOTTOM ELEMENTS] - Ecosystem Label & Infinite Grayscale Ticker */}
        <div className="relative z-20 w-full pt-2">
          <p className="text-center text-[9px] font-bold uppercase tracking-[0.6em] text-white/25 mb-3.5 font-sans">
            AUTO-AUTOMATION & STREAMING ECOSYSTEM • XENA • TANGO • BIGO
          </p>

          <div className="relative w-full overflow-hidden py-1.5 mask-linear-fade">
            <motion.div
              animate={{ x: ['0%', '-33.333%'] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="flex items-center gap-12 sm:gap-16 w-max"
            >
              {tickerItems.map((brand, idx) => (
                <div
                  key={`${brand.name}-${idx}`}
                  className="flex items-center gap-2.5 grayscale opacity-55 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
                >
                  <EcosystemLogo type={brand.type} />
                  <span className="text-[11px] font-semibold tracking-wider text-white font-sans">
                    {brand.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: INTERACTIVE PLATFORM MATCHER & 3-APP SHOWCASE
      ===================================================================== */}
      <section
        id="lumina-platforms"
        dir={dir}
        className="relative z-20 w-full px-6 sm:px-10 lg:px-[70px] py-20 sm:py-24 max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/80 font-sans">
              MULTI-PLATFORM ECOSYSTEM
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            {t(
              'ثلاث منصات عالمية.. وكالة واحدة تدعمك',
              'Three Global Platforms. One Agency Behind You.',
              'Три мировые платформы — одно агентство',
              'Trei platforme globale. O singură agenție.',
              'Trois plateformes mondiales. Une seule agence.',
              'Tre piattaforme globali. Un’unica agenzia.'
            )}
          </h2>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed">
            {t(
              'لا نقتصر على تطبيق واحد؛ أياً كان أسلوبك في البث المباشر (صوتي، فيديو، أو ألعاب ومواهب)، يمكنك اختيار التطبيق المناسب لك أو التقديم عليها جميعاً.',
              'Whether you prefer voice rooms, live video chatting, or gaming & talent shows, pick the platform that matches your style.',
              'Выбирайте голосовые комнаты, видео-стримы или игровые трансляции.',
              'Indiferent dacă preferi camere vocale, video live sau gaming, alege platforma potrivită.',
              'Que vous préfériez les salons vocaux, la vidéo en direct ou le gaming, choisissez votre plateforme.',
              'Che tu preferisca stanze vocali, video live o gaming, scegli la piattaforma adatta a te.'
            )}
          </p>
        </div>

        {/* Interactive Smart Matcher Bar ("أي تطبيق يناسبك أكثر؟") */}
        <div className="mb-12 p-5 sm:p-6 rounded-[28px] bg-white/[0.04] backdrop-blur-[40px] border border-white/15">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-400 block mb-1">
                INTERACTIVE PLATFORM MATCHER
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {t(
                  'محتار تبدأ على أي تطبيق؟ اختر أسلوب البث المفضل لديك لترشيح المنصة الأنسب:',
                  'Not sure which app fits you best? Click your preferred streaming style:',
                  'Не знаете, с чего начать? Выберите свой стиль:',
                  'Nu știi ce aplicație ți se potrivește? Alege stilul tău:',
                  'Vous hésitez ? Choisissez votre style de diffusion :',
                  'Non sai quale app scegliere? Seleziona il tuo stile:'
                )}
              </h3>
            </div>
            {matcherChoice && (
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
                {t(
                  `الترشيح الأنسب لك: ${currentPlatform.nameAr} ✨`,
                  `Best Match: ${currentPlatform.nameEn} ✨`,
                  `Рекомендация: ${currentPlatform.nameEn} ✨`,
                  `Recomandare: ${currentPlatform.nameEn} ✨`,
                  `Recommandé : ${currentPlatform.nameEn} ✨`,
                  `Consigliato: ${currentPlatform.nameEn} ✨`
                )}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => handleMatcherSelect('voice')}
              className={`flex items-center gap-3.5 p-4 rounded-2xl border text-start transition-all cursor-pointer ${
                matcherChoice === 'voice'
                  ? 'bg-pink-500/20 border-pink-400 shadow-[0_0_25px_rgba(236,72,153,0.25)]'
                  : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.07]'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-300 shrink-0">
                <Mic className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  {t('بث صوتي ودردشة بدون كاميرا', 'Voice Rooms (No Camera)', 'Голосовые комнаты', 'Camere vocale (fără cameră)', 'Salons vocaux (sans caméra)', 'Stanze vocali (senza fotocamera)')}
                </div>
                <div className="text-[11px] text-white/55 mt-0.5">
                  {t('يرشح لك: زينا لايف (Xena Live)', 'Recommends: Xena Live', 'Xena Live', 'Xena Live', 'Xena Live', 'Xena Live')}
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleMatcherSelect('video')}
              className={`flex items-center gap-3.5 p-4 rounded-2xl border text-start transition-all cursor-pointer ${
                matcherChoice === 'video'
                  ? 'bg-rose-500/20 border-rose-400 shadow-[0_0_25px_rgba(244,63,94,0.25)]'
                  : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.07]'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300 shrink-0">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  {t('بث فيديو مباشر وتفاعل عالمي سريع', 'Live Video & Fast Global Reach', 'Видео-стримы и баттлы', 'Video live și acoperire globală', 'Vidéo live et audience mondiale', 'Video live e pubblico globale')}
                </div>
                <div className="text-[11px] text-white/55 mt-0.5">
                  {t('يرشح لك: تانجو لايف (Tango Live)', 'Recommends: Tango Live', 'Tango Live', 'Tango Live', 'Tango Live', 'Tango Live')}
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleMatcherSelect('pro')}
              className={`flex items-center gap-3.5 p-4 rounded-2xl border text-start transition-all cursor-pointer ${
                matcherChoice === 'pro'
                  ? 'bg-cyan-500/20 border-cyan-400 shadow-[0_0_25px_rgba(0,243,255,0.25)]'
                  : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.07]'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  {t('بث احترافي شامل وألعاب ومواهب', 'Pro Streams, Gaming & Talents', 'Про-стримы и игры', 'Streaming pro & gaming', 'Streaming pro & gaming', 'Streaming pro e gaming')}
                </div>
                <div className="text-[11px] text-white/55 mt-0.5">
                  {t('يرشح لك: بيجو لايف (Bigo Live)', 'Recommends: Bigo Live', 'Bigo Live', 'Bigo Live', 'Bigo Live', 'Bigo Live')}
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* 3 Interactive Platform Glass Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {(['xena', 'tango', 'bigo'] as PlatformKey[]).map((key) => {
            const p = PLATFORMS_DATA[key];
            const Icon = p.Icon;
            const isHighlighted = activePlatform === key;
            return (
              <motion.div
                key={key}
                whileHover={{ y: -6 }}
                onClick={() => setActivePlatform(key)}
                className={`group relative rounded-[28px] p-6 sm:p-7 backdrop-blur-[40px] border transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden ${
                  isHighlighted
                    ? 'bg-white/[0.09] border-white/35 shadow-[0_20px_60px_rgba(0,0,0,0.8)]'
                    : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/25'
                }`}
              >
                <div
                  className="absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                  style={{ backgroundColor: p.accentHex }}
                />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-white p-2 flex items-center justify-center shadow-md">
                      <Icon className="w-full h-full" />
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border"
                      style={{
                        color: p.accentHex,
                        borderColor: `${p.accentHex}55`,
                        backgroundColor: `${p.accentHex}15`,
                      }}
                    >
                      {p.nameEn}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1.5">
                    {lang === 'ar' ? p.nameAr : p.nameEn}
                  </h3>
                  <p className="text-xs font-semibold text-white/80 mb-3">
                    {lang === 'ar' ? p.taglineAr : p.taglineEn}
                  </p>
                  <p className="text-xs text-white/60 leading-relaxed mb-5">
                    {lang === 'ar' ? p.descAr : p.descEn}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                    {(lang === 'ar' ? p.perksAr : p.perksEn).map((perk, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: p.accentHex }} />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      selectPlatformAndScrollToApply(p.id);
                    }}
                    className="w-full py-3 px-4 rounded-full bg-white/[0.14] hover:bg-white/[0.24] border border-white/25 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>
                      {t(
                        `اختيار ${p.nameAr} للتقديم`,
                        `Select ${p.nameEn} & Apply`,
                        `Выбрать ${p.nameEn}`,
                        `Selectează ${p.nameEn}`,
                        `Choisir ${p.nameEn}`,
                        `Scegli ${p.nameEn}`
                      )}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={p.id === 'xena' ? storeInfo.url : p.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 py-2.5 px-3 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-white/70 hover:text-white text-[11px] font-medium flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Download className="w-3 h-3" />
                      <span>{t('تحميل التطبيق', 'Download App', 'Скачать', 'Descarcă', 'Télécharger', 'Scarica')}</span>
                    </a>
                    {p.unionUrl && (
                      <a
                        href={p.unionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 py-2.5 px-3 rounded-full bg-pink-500/15 hover:bg-pink-500/25 border border-pink-400/30 text-pink-200 text-[11px] font-medium flex items-center justify-center gap-1.5 transition-all"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>{t('رابط الوكالة', 'Union Link', 'Код агентства', 'Link agenție', 'Lien agence', 'Link agenzia')}</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: INTERACTIVE ROADMAP STEPPER (HOW IT WORKS)
      ===================================================================== */}
      <section
        id="lumina-roadmap"
        dir={dir}
        className="relative z-20 w-full px-6 sm:px-10 lg:px-[70px] py-16 sm:py-20 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md mb-3">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/80 font-sans">
                INTERACTIVE LAUNCH PROTOCOL
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t(
                'خطوات الانضمام لوكالة الأساطير',
                'How Your Journey Starts',
                'Как начать работу с нами',
                'Pașii de înscriere în agenție',
                'Comment rejoindre l’agence',
                'Come iniziare con noi'
              )}
            </h2>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              {t(
                'اضغط على أي خطوة لاستعراض كيف يرافقك فريقنا من لحظة اختيار التطبيق وحتى احتراف البث المباشر.',
                'Click any milestone to explore how our team guides you from choosing your platform to mastering live broadcasts.',
                'Нажмите на любой шаг, чтобы узнать подробности.',
                'Apasă pe orice pas pentru a vedea detaliile.',
                'Cliquez sur une étape pour découvrir notre accompagnement.',
                'Clicca su qualsiasi passaggio per scoprire i dettagli.'
              )}
            </p>

            {/* Active Step Interactive Detail Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-6 rounded-[24px] bg-white/[0.06] backdrop-blur-[40px] border border-white/20 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded-lg bg-blue-500/20 border border-blue-400/40 text-blue-300 font-mono text-xs font-bold">
                    STEP {ROADMAP_STEPS[activeStep].num}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {lang === 'ar'
                      ? ROADMAP_STEPS[activeStep].titleAr
                      : ROADMAP_STEPS[activeStep].titleEn}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-3">
                  {lang === 'ar'
                    ? ROADMAP_STEPS[activeStep].descAr
                    : ROADMAP_STEPS[activeStep].descEn}
                </p>
                <p className="text-xs text-cyan-300/90 bg-cyan-950/40 border border-cyan-400/25 rounded-xl p-3">
                  💡{' '}
                  {lang === 'ar'
                    ? ROADMAP_STEPS[activeStep].detailAr
                    : ROADMAP_STEPS[activeStep].detailEn}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ROADMAP_STEPS.map((st, idx) => {
              const Icon = st.Icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={st.num}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-[24px] border text-start transition-all duration-300 cursor-pointer backdrop-blur-[30px] ${
                    isSelected
                      ? 'bg-white/[0.12] border-white/40 scale-[1.02] shadow-[0_15px_40px_rgba(0,0,0,0.6)]'
                      : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.07] opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-white/[0.08] border border-white/20 flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-mono font-bold text-white/25">{st.num}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {lang === 'ar' ? st.titleAr : st.titleEn}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {lang === 'ar' ? st.descAr : st.descEn}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: LUMINA INTERACTIVE MEDIA REEL
      ===================================================================== */}
      <section
        id="lumina-media"
        dir={dir}
        className="relative z-20 w-full px-6 sm:px-10 lg:px-[70px] py-16 sm:py-20 max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md mb-3">
              <Play className="w-3 h-3 text-pink-400 fill-pink-400" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/80 font-sans">
                CINEMATIC MEDIA REEL
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {t('معرض الفيديوهات التفاعلي', 'Interactive Media Highlights', 'Видео галерея', 'Galerie video', 'Galerie vidéo', 'Galleria video')}
            </h2>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {VIDEOS.map((v, idx) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setActiveVideoIdx(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  activeVideoIdx === idx
                    ? 'bg-white text-black border-white'
                    : 'bg-white/[0.05] text-white/70 border-white/15 hover:bg-white/[0.12]'
                }`}
              >
                0{idx + 1} • {lang === 'ar' ? v.titleAr : v.titleEn}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Featured Interactive Video Player */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[32px] overflow-hidden bg-black border border-white/25 shadow-[0_25px_70px_rgba(0,0,0,0.9)]">
              <iframe
                key={VIDEOS[activeVideoIdx].ytId}
                src={`https://www.youtube.com/embed/${VIDEOS[activeVideoIdx].ytId}?rel=0&modestbranding=1&playsinline=1`}
                title={VIDEOS[activeVideoIdx].titleEn}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>

          {/* Interactive Playlist Cards */}
          <div className="lg:col-span-7 space-y-3.5">
            {VIDEOS.map((v, idx) => {
              const isSelected = activeVideoIdx === idx;
              return (
                <div
                  key={v.id}
                  onClick={() => setActiveVideoIdx(idx)}
                  className={`flex items-center justify-between gap-4 p-5 rounded-[24px] border backdrop-blur-[30px] transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white/[0.12] border-white/40 shadow-lg'
                      : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.07]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* 52px Frosted Glass Play Button per Lumina spec */}
                    <div
                      className={`w-[52px] h-[52px] rounded-full backdrop-blur-[12px] border flex items-center justify-center shrink-0 transition-all ${
                        isSelected
                          ? 'bg-white text-black border-white'
                          : 'bg-white/[0.08] text-white border-white/25'
                      }`}
                    >
                      <Play className={`w-4 h-4 ${isSelected ? 'fill-black' : 'fill-white'}`} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/45 block mb-1">
                        {v.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {lang === 'ar' ? v.titleAr : v.titleEn}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-white/50 hidden sm:inline">
                    {isSelected ? 'PLAYING NOW ●' : 'WATCH REEL →'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: EXECUTIVE CREW & INTERACTIVE FAQ
      ===================================================================== */}
      <section
        id="lumina-crew"
        dir={dir}
        className="relative z-20 w-full px-6 sm:px-10 lg:px-[70px] py-16 sm:py-20 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Crew Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md mb-3">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/80 font-sans">
                EXECUTIVE CREW
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              {t('فريق الإدارة والإشراف المباشر', 'Leadership & Management Crew', 'Команда управления', 'Echipa de conducere', 'Équipe de direction', 'Team di gestione')}
            </h2>

            <div className="space-y-4">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.id}
                  className="p-5 rounded-[24px] bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 backdrop-blur-[30px] flex items-center justify-between gap-4 transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-2xl object-cover border border-white/20"
                    />
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 block mb-0.5">
                        LEGENDS EXECUTIVE
                      </span>
                      <h3 className="text-lg font-bold text-white">{member.name}</h3>
                      <p className="text-xs text-white/60">{member.role[lang]}</p>
                    </div>
                  </div>

                  <a
                    href={member.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full bg-white/[0.1] hover:bg-white hover:text-black border border-white/20 text-white text-xs font-bold flex items-center gap-2 transition-all"
                  >
                    <span>{t('تواصل مباشر', 'Connect', 'Связаться', 'Contact', 'Contacter', 'Contatta')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive FAQ Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/80 font-sans">
                TRANSPARENCY & FAQ
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              {t('الأسئلة الشائعة ونظام العمل', 'Frequently Asked Questions', 'Частые вопросы', 'Întrebări frecvente', 'Questions fréquentes', 'Domande frequenti')}
            </h2>

            <div className="space-y-3">
              {[
                {
                  q: t('ما هي التطبيقات المتاحة للتقديم في وكالة الأساطير؟', 'Which apps can I apply for with Legends Agency?', 'Какие приложения доступны?', 'Ce aplicații sunt disponibile?', 'Quelles applications sont disponibles ?', 'Quali app sono disponibili?'),
                  a: t(
                    'يمكنك التقديم للعمل معنا على زينا لايف (Xena Live)، تانجو لايف (Tango Live)، وبيجو لايف (Bigo Live). يمكنك اختيار تطبيق واحد أو أكثر في استمارة التقديم أدناه.',
                    'You can apply for Xena Live, Tango Live, and Bigo Live. You may choose one or multiple platforms in the application studio below.',
                    'Вы можете подать заявку на Xena Live, Tango Live и Bigo Live.',
                    'Poți aplica pentru Xena Live, Tango Live și Bigo Live.',
                    'Vous pouvez postuler pour Xena Live, Tango Live et Bigo Live.',
                    'Puoi candidarti per Xena Live, Tango Live e Bigo Live.'
                  ),
                },
                {
                  q: t('من المؤهل للالتحاق بالوكالة؟', 'Who is eligible to join the agency?', 'Кто может вступить?', 'Cine este eligibil?', 'Qui est éligible ?', 'Chi può candidarsi?'),
                  a: t(
                    'نرحب بصناع المحتوى البالغين (18 سنة فأكثر) سواء كنت مبتدئاً أو لديك خبرة سابقة، مع الالتزام الكامل بسياسات وإرشادات كل تطبيق.',
                    'We welcome adult content creators (18 years or older), whether beginners or experienced hosts, with full compliance with platform policies.',
                    'Мы приглашаем совершеннолетних авторов (18+), как новичков, так и опытных ведущих.',
                    'Primim creatori adulți (18+), atât începători, cât și avansați.',
                    'Nous accueillons les créateurs adultes (18+), débutants ou expérimentés.',
                    'Accogliamo creator maggiorenni (18+), principianti o esperti.'
                  ),
                },
                {
                  q: t('كيف يعمل نظام المكافآت؟', 'How does the rewards system work?', 'Как работает система вознаграждений?', 'Cum funcționează sistemul de recompense?', 'Comment fonctionne le système de récompenses ?', 'Come funziona il sistema di ricompense?'),
                  a: t(
                    'نظام المكافآت يحدده كل تطبيق (زينا لايف / تانجو لايف / بيجو لايف) حسب سياساته وشروطه الرسمية، ويقوم فريق الإدارة بشرحه للمتقدم بالتفصيل بعد التسجيل. لا توجد أي مخصصات ثابتة أو عوائد مؤكدة.',
                    'The rewards system is governed by each platform (Xena, Tango, Bigo) according to its policies, and our team explains it after registration. No fixed allocations or assured returns.',
                    'Система вознаграждений определяется правилами выбранной платформы и разъясняется после регистрации.',
                    'Sistemul de recompense este stabilit de fiecare platformă și explicat după înregistrare.',
                    'Le système de récompenses dépend de chaque plateforme et est expliqué après inscription.',
                    'Il sistema di ricompense è stabilito da ciascuna piattaforma e spiegato dopo la registrazione.'
                  ),
                },
                {
                  q: t('هل الانضمام للوكالة مجاني؟', 'Is joining the agency free?', 'Вступление бесплатное?', 'Înscrierea este gratuită?', 'L’inscription est-elle gratuite ?', 'L’iscrizione è gratuita?'),
                  a: t(
                    'نعم، الانضمام والتدريب والدعم الفني مجاني 100% ولا نطلب أي رسوم تسجيل من المتقدمين.',
                    'Yes, joining, coaching, and technical support are 100% free with zero registration fees.',
                    'Да, вступление и обучение полностью бесплатны.',
                    'Da, înscrierea și suportul sunt 100% gratuite.',
                    'Oui, l’inscription et l’accompagnement sont 100% gratuits.',
                    'Sì, l’iscrizione e il supporto sono gratuiti al 100%.'
                  ),
                },
              ].map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-start font-bold text-xs sm:text-sm text-white cursor-pointer"
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-white/60 transition-transform ${
                          isOpen ? 'rotate-180 text-white' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs text-white/65 leading-relaxed border-t border-white/10 pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: INTERACTIVE APPLICATION STUDIO & LIVE CREATOR PASS
      ===================================================================== */}
      <section
        id="lumina-apply"
        dir={dir}
        className="relative z-20 w-full px-6 sm:px-10 lg:px-[70px] py-20 max-w-7xl mx-auto"
      >
        <div className="rounded-[36px] p-6 sm:p-10 lg:p-12 bg-white/[0.04] backdrop-blur-[40px] border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.9)] relative overflow-hidden">
          {/* Ambient Glow */}
          <div
            className="absolute -top-32 -left-32 w-80 h-80 rounded-full blur-[120px] opacity-25 pointer-events-none"
            style={{ backgroundColor: currentPlatform.accentHex }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-bold mb-3">
                <span>🔞</span>
                <span>{t('الخدمة متاحة للبالغين 18+ فقط', 'Service for Adults 18+ Only', 'Только 18+', 'Doar 18+', '18+ uniquement', 'Solo 18+')}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">
                {t('استوديو تقديم طلب الانضمام', 'Interactive Application Studio', 'Анкета вступления', 'Studio de înscriere', 'Studio de candidature', 'Studio di candidatura')}
              </h2>
              <p className="text-xs sm:text-sm text-white/60 mb-6">
                {t(
                  'اختر التطبيق أو التطبيقات المطلوبة للتقديم (زينا لايف / تانجو لايف / بيجو لايف) وستظهر فوراً في بطاقة طلبك المرسلة للإدارة.',
                  'Select one or more platforms (Xena Live / Tango Live / Bigo Live) and your choice will be clearly included in your application.',
                  'Выберите одну или несколько платформ (Xena / Tango / Bigo).',
                  'Selectează una sau mai multe platforme (Xena / Tango / Bigo).',
                  'Sélectionnez une ou plusieurs plateformes (Xena / Tango / Bigo).',
                  'Seleziona una o più piattaforme (Xena / Tango / Bigo).'
                )}
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-3xl bg-emerald-950/40 border border-emerald-400/40 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t('تم تجهيز طلبك بنجاح!', 'Application Ready!', 'Заявка готова!', 'Aplicație pregătită!', 'Candidature prête !', 'Candidatura pronta!')}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 mb-5">
                    {t(
                      'تم فتح تطبيق الواتساب مع تحديد التطبيق المختار وجميع بياناتك. يمكنك أيضاً الضغط أدناه لإعادة الإرسال.',
                      'WhatsApp has been opened with your selected platform(s) and details.',
                      'WhatsApp открыт с вашими данными.',
                      'WhatsApp a fost deschis cu datele tale.',
                      'WhatsApp a été ouvert avec vos données.',
                      'WhatsApp è stato aperto con i tuoi dati.'
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-white/60 hover:text-white underline cursor-pointer"
                  >
                    {t('تعديل الطلب أو التقديم على تطبيق آخر', 'Edit application', 'Изменить', 'Modifică', 'Modifier', 'Modifica')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  {formError && (
                    <div className="p-3.5 rounded-xl bg-red-950/70 border border-red-500/40 text-red-200 text-xs sm:text-sm text-center font-medium">
                      {formError}
                    </div>
                  )}

                  {/* Step 1: Multi-Platform Selector */}
                  <div>
                    <label className="flex items-center justify-between text-xs sm:text-sm font-bold text-white mb-2.5">
                      <span className="flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-cyan-400" />
                        <span>
                          {t(
                            '1. اختر التطبيق المطلوب للتقديم (واحد أو أكثر) *',
                            '1. Select Platform(s) to Apply For *',
                            '1. Выберите приложение *',
                            '1. Selectează aplicația *',
                            '1. Choisissez la plateforme *',
                            '1. Seleziona l’app *'
                          )}
                        </span>
                      </span>
                      <span className="text-[11px] font-mono text-cyan-300">
                        {selectedFormPlatforms.length} SELECTED
                      </span>
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {(['xena', 'tango', 'bigo'] as PlatformKey[]).map((key) => {
                        const p = PLATFORMS_DATA[key];
                        const Icon = p.Icon;
                        const isSelected = selectedFormPlatforms.includes(key);
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => toggleFormPlatform(key)}
                            className={`flex items-center gap-3 p-3.5 rounded-2xl border text-start transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-white/[0.15] border-white/50 shadow-[0_0_25px_rgba(255,255,255,0.12)] scale-[1.01]'
                                : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.07] opacity-70 hover:opacity-100'
                            }`}
                          >
                            <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0">
                              <Icon className="w-full h-full" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs sm:text-sm font-bold text-white truncate">
                                  {lang === 'ar' ? p.nameAr : p.nameEn}
                                </span>
                                <span
                                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold border ${
                                    isSelected
                                      ? 'bg-emerald-400 border-emerald-300 text-black'
                                      : 'border-white/25 text-transparent'
                                  }`}
                                >
                                  ✓
                                </span>
                              </div>
                              <span
                                className="text-[9px] font-mono font-bold uppercase tracking-wider"
                                style={{ color: p.accentHex }}
                              >
                                {p.nameEn}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Personal Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-white/80 mb-1.5">
                        <User className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{t('الاسم أو اسم الشهرة *', 'Name or Nickname *', 'Имя или никнейм *', 'Nume sau poreclă *', 'Nom ou pseudo *', 'Nome o nickname *')}</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => {
                          setFormData((p) => ({ ...p, name: e.target.value }));
                          if (formError) setFormError('');
                        }}
                        placeholder={t('الاسم أو اسم الشهرة', 'Your Name or Nickname', 'Имя', 'Nume', 'Nom', 'Nome')}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 focus:border-white/50 text-white text-sm outline-none transition-all placeholder:text-white/25"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-white/80 mb-1.5">
                        <Phone className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{t('رقم الواتساب (مع رمز الدولة) *', 'WhatsApp Number *', 'Номер WhatsApp *', 'Număr WhatsApp *', 'Numéro WhatsApp *', 'Numero WhatsApp *')}</span>
                      </label>
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData((p) => ({ ...p, phone: e.target.value }));
                          if (formError) setFormError('');
                        }}
                        placeholder="+968 xxxxxxxx / +966 xxxxxxxx"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 focus:border-white/50 text-white text-sm outline-none transition-all placeholder:text-white/25"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-white/80 mb-1.5">
                        <Globe className="w-3.5 h-3.5 text-purple-400" />
                        <span>{t('الدولة / بلد الإقامة *', 'Country *', 'Страна *', 'Țara *', 'Pays *', 'Paese *')}</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => {
                          setFormData((p) => ({ ...p, country: e.target.value }));
                          if (formError) setFormError('');
                        }}
                        placeholder={t('مثال: السعودية، الإمارات، الكويت...', 'e.g. Saudi Arabia, UAE, Kuwait...', 'Страна', 'Țara', 'Pays', 'Paese')}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 focus:border-white/50 text-white text-sm outline-none transition-all placeholder:text-white/25"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-white/80 mb-1.5">
                        <Clock className="w-3.5 h-3.5 text-pink-400" />
                        <span>{t('العمر (18 سنة فأكثر) *', 'Age (18+ only) *', 'Возраст (18+) *', 'Vârstă (18+) *', 'Âge (18+) *', 'Età (18+) *')}</span>
                      </label>
                      <input
                        type="number"
                        min="18"
                        max="99"
                        required
                        value={formData.age}
                        onChange={(e) => {
                          setFormData((p) => ({ ...p, age: e.target.value }));
                          if (formError) setFormError('');
                        }}
                        placeholder="22"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 focus:border-white/50 text-white text-sm outline-none transition-all placeholder:text-white/25"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/80 mb-1.5">
                        {t('الخبرة السابقة', 'Streaming Experience', 'Опыт', 'Experiență', 'Expérience', 'Esperienza')}
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData((p) => ({ ...p, experience: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0e17] border border-white/15 text-white text-sm outline-none"
                      >
                        <option value="beginner">{t('مذيع جديد (أول مرة)', 'Beginner (First time)', 'Новичок', 'Începător', 'Débutant', 'Principiante')}</option>
                        <option value="experienced">{t('خبرة سابقة في البث المباشر', 'Previous Experience', 'С опытом', 'Cu experiență', 'Expérimenté', 'Con esperienza')}</option>
                        <option value="active_host">{t('مذيع حالي على زينا / تانجو / بيجو', 'Current Host on Xena / Tango / Bigo', 'Текущий ведущий', 'Gazdă actuală', 'Diffuseur actuel', 'Host attuale')}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/80 mb-1.5">
                        {t('الآيدي في التطبيق أو حسابك (اختياري)', 'App ID or Social Handle (Optional)', 'ID (необязательно)', 'ID (opțional)', 'ID (facultatif)', 'ID (opzionale)')}
                      </label>
                      <input
                        type="text"
                        value={formData.socialHandle}
                        onChange={(e) => setFormData((p) => ({ ...p, socialHandle: e.target.value }))}
                        placeholder="ID / @username"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 focus:border-white/50 text-white text-sm outline-none transition-all placeholder:text-white/25"
                      />
                    </div>
                  </div>

                  {/* Mandatory 18+ Checkbox */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/15">
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-white/85 select-none">
                      <input
                        type="checkbox"
                        required
                        checked={formData.termsAccepted}
                        onChange={(e) => {
                          setFormData((p) => ({ ...p, termsAccepted: e.target.checked }));
                          if (formError) setFormError('');
                        }}
                        className="mt-0.5 w-4 h-4 rounded accent-pink-500 cursor-pointer shrink-0"
                      />
                      <span>
                        {t(
                          'أقر بأن عمري 18 سنة أو أكثر، وأنني أوافق على سياسات المنصة المختارة.',
                          'I confirm that I am 18 years or older, and I agree to the selected platform policies.',
                          'Я подтверждаю, что мне 18 лет или больше, и согласен с правилами.',
                          'Confirm că am 18 ani sau mai mult și sunt de acord cu politicile.',
                          'Je certifie avoir 18 ans ou plus et j’accepte les règles.',
                          'Confermo di avere 18 anni o più e accetto le regole.'
                        )}
                      </span>
                    </label>
                  </div>

                  {/* Orbital Submit Button */}
                  <div className="pt-2">
                    <LuminaOrbitalButton type="submit" className="w-full">
                      <BrandIcons.WhatsApp className="w-4 h-4" />
                      <span className="[text-shadow:none]">
                        {t('قدّم طلب الانضمام الآن', 'SUBMIT APPLICATION VIA WHATSAPP', 'ОТПРАВИТЬ ЗАЯВКУ', 'TRIMITE CEREREA', 'ENVOYER LA CANDIDATURE', 'INVIA CANDIDATURA')}
                      </span>
                      <Send className="w-4 h-4" />
                    </LuminaOrbitalButton>
                    <p className="text-[11px] text-center text-white/40 mt-2.5 font-mono">
                      🔒 {t('سيتم استخدام بياناتك للتواصل معك بخصوص طلبك فقط.', 'Your data will only be used to contact you regarding your application.', 'Данные используются только для связи по заявке.', 'Datele sunt folosite doar pentru contact.', 'Données utilisées uniquement pour votre demande.', 'Dati usati solo per ricontattarti.')}
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Live Interactive Creator Pass Preview */}
            <div className="lg:col-span-5">
              <div className="sticky top-8">
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/45 mb-3 text-center">
                  LIVE CREATOR PASS PREVIEW • معاينة بطاقة طلبك الحية
                </div>

                {/* Orbital Border Card */}
                <div className="relative rounded-[30px] p-[2px] overflow-hidden">
                  <div
                    className="pointer-events-none absolute top-1/2 left-1/2 w-[300%] aspect-square -translate-x-1/2 -translate-y-1/2 animate-[spin_8s_linear_infinite] opacity-75"
                    style={{
                      background:
                        'conic-gradient(from 0deg, #3b82f6, #a855f7, #ec4899, #f8a170, #eab308, #3b82f6)',
                    }}
                  />

                  <div className="relative z-10 rounded-[28px] bg-[#060810]/95 backdrop-blur-2xl p-6 sm:p-7">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-400/40 flex items-center justify-center">
                          <BrandIcons.LuminaNode className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                            LEGENDS AGENCY
                          </div>
                          <div className="text-[9px] font-mono text-white/45">CREATOR APPLICATION PASS</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[10px] font-mono font-bold">
                        18+ VERIFIED
                      </span>
                    </div>

                    {/* Selected Platforms on Pass */}
                    <div className="mb-5">
                      <div className="text-[10px] font-mono uppercase text-white/45 mb-2">
                        {t('التطبيقات المختارة في الطلب:', 'SELECTED PLATFORM(S):', 'ВЫБРАННЫЕ ПЛАТФОРМЫ:', 'PLATFORME SELECTATE:', 'PLATEFORMES CHOISIES :', 'PIATTAFORME SCELTE:')}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedFormPlatforms.map((k) => {
                          const p = PLATFORMS_DATA[k];
                          const Icon = p.Icon;
                          return (
                            <div
                              key={k}
                              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.08] border border-white/20"
                            >
                              <div className="w-5 h-5 rounded-md bg-white p-0.5 flex items-center justify-center">
                                <Icon className="w-full h-full" />
                              </div>
                              <span className="text-xs font-bold text-white">
                                {lang === 'ar' ? p.nameAr : p.nameEn}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Live Applicant Info */}
                    <div className="space-y-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-white/50">{t('الاسم:', 'Applicant:', 'Имя:', 'Nume:', 'Nom :', 'Nome:')}</span>
                        <span className="font-bold text-white">
                          {formData.name.trim() || t('يظهر اسمك هنا...', 'Your Name...', 'Ваше имя...', 'Numele tău...', 'Votre nom...', 'Il tuo nome...')}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/50">{t('الدولة:', 'Country:', 'Страна:', 'Țara:', 'Pays :', 'Paese:')}</span>
                        <span className="font-bold text-white">
                          {formData.country.trim() || '—'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/50">{t('العمر:', 'Age:', 'Возраст:', 'Vârstă:', 'Âge :', 'Età:')}</span>
                        <span className="font-bold text-white">
                          {formData.age.trim() ? `${formData.age} (18+)` : '18+'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/50">{t('حالة الطلب:', 'Status:', 'Статус:', 'Status:', 'Statut :', 'Stato:')}</span>
                        <span className="text-cyan-300 font-mono font-bold">READY FOR WHATSAPP</span>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/35">
                      <span>LEGENDS VISION ID</span>
                      <span>XENA • TANGO • BIGO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          LUMINA FOOTER
      ===================================================================== */}
      <footer
        dir={dir}
        className="relative z-20 w-full px-6 sm:px-10 lg:px-[70px] py-10 border-t border-white/10 bg-black/80 text-xs text-white/50"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-400/30 flex items-center justify-center">
              <BrandIcons.LuminaNode className="w-4 h-4" />
            </div>
            <span className="font-bold tracking-[0.3em] text-white text-[10px] uppercase font-sans">
              LEGENDS AGENCY • XENA • TANGO • BIGO
            </span>
          </div>

          <div className="text-center">
            {t(
              'ندعم صناع المحتوى البالغين (18+ فقط) على تطبيقات زينا لايف، تانجو لايف، وبيجو لايف.',
              'Supporting adult content creators (18+ only) across Xena Live, Tango Live, and Bigo Live.',
              'Поддержка совершеннолетних авторов (18+) на Xena Live, Tango Live и Bigo Live.',
              'Sprijinim creatorii adulți (18+) pe Xena Live, Tango Live și Bigo Live.',
              'Accompagnement des créateurs adultes (18+) sur Xena Live, Tango Live et Bigo Live.',
              'Supporto per creator maggiorenni (18+) su Xena Live, Tango Live e Bigo Live.'
            )}
          </div>

          <div className="font-mono text-[11px] text-white/40">
            © {new Date().getFullYear()} LEGENDS AGENCY
          </div>
        </div>
      </footer>
    </div>
  );
}
