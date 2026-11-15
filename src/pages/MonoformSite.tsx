import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Volume2,
  VolumeX,
  ArrowUpRight,
  Check,
  Sparkles,
  Globe,
  Send,
  X,
  ShieldCheck,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Cpu,
  Activity,
  QrCode,
} from 'lucide-react';
import { BrandIcons } from '../components/BrandIcons';
import { AIChat } from '../components/AIChat';

// ============================================================================
// ALL 5 YOUTUBE VIDEOS FROM ORIGINAL SITE (src/components/VideoGallery.tsx)
// ============================================================================
interface YoutubeShowreelItem {
  id: string;
  code: string;
  tagEn: string;
  tagAr: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  views: string;
  poster: string;
}

const YOUTUBE_VIDEOS: YoutubeShowreelItem[] = [
  {
    id: 'a5I-eEkg2zM',
    code: 'EP · 01',
    tagEn: 'Official Showreel',
    tagAr: 'البرومو الرسمي',
    titleEn: 'Legends Studio 01',
    titleAr: 'انطلاقة الأساطير 01',
    descEn: 'Official agency showreel & creator production',
    descAr: 'العرض الرسمي لمنظومة إدارة وتوثيق صناع المحتوى',
    views: '48.5K',
    poster: '/assets/streamers/legends_host_1.webp',
  },
  {
    id: 'mby0aMdDG2w',
    code: 'EP · 02',
    tagEn: 'VIP Verification',
    tagAr: 'توثيق وعقود VIP',
    titleEn: 'VIP Broadcasters 02',
    titleAr: 'نجوم البث المباشر 02',
    descEn: 'Official agency verification & monthly growth tiers',
    descAr: 'ترقية الحسابات الرسمية وتفعيل شارات الوكالة المعتمدة',
    views: '62.1K',
    poster: '/assets/streamers/legends_host_4.webp',
  },
  {
    id: 'aUA1wO2q_Xk',
    code: 'EP · 03',
    tagEn: 'PK Championships',
    tagAr: 'أقوى تحديات PK',
    titleEn: 'Global Battles 03',
    titleAr: 'بطولات وتحديات 03',
    descEn: 'Record-breaking PK events across MENA',
    descAr: 'تنظيم أقوى الجولات الرسمية وتصدر الترتيب اليومي',
    views: '91.4K',
    poster: '/assets/streamers/legends_host_6.webp',
  },
  {
    id: 'zO-wIu-HnFg',
    code: 'EP · 04',
    tagEn: 'Creator Growth',
    tagAr: 'تطوير المذيعين',
    titleEn: 'Growth System 04',
    titleAr: 'منظومة النجاح 04',
    descEn: 'Structured broadcasting schedules & official agency mentorship',
    descAr: 'تنظيم ساعات البث وتحقيق مستويات التميز الرسمية بإشراف الوكالة',
    views: '54.8K',
    poster: '/assets/streamers/legends_host_2.webp',
  },
  {
    id: 'MO8rRIei8go',
    code: 'EP · 05',
    tagEn: 'Star Management',
    tagAr: 'صناعة النجوم',
    titleEn: 'Legends Stars 05',
    titleAr: 'نخبة الأساطير 05',
    descEn: 'Next-gen talent management on Xena, Tango & Bigo',
    descAr: 'إدارة حسابات المذيعين وحمايتها وتوثيق العقود الرسمية',
    views: '77.2K',
    poster: '/assets/streamers/legends_host_7.webp',
  },
  {
    id: 'OxYL4yLhhcs',
    code: 'EP · 06',
    tagEn: 'Exclusive Spotlight',
    tagAr: 'تألق نجوم الوكالة',
    titleEn: 'Legends Spotlight 06',
    titleAr: 'إبداع الأساطير 06',
    descEn: 'Official agency broadcast highlights & top creators',
    descAr: 'أقوى لحظات البث المباشر وتألق مذيعي وكالة الأساطير',
    views: '84.6K',
    poster: '/assets/streamers/legends_host_5.webp',
  },
  {
    id: 'Fykwnnekw-U',
    code: 'EP · 07',
    tagEn: 'Creator Success',
    tagAr: 'قصص نجاح الأساطير',
    titleEn: 'Legends Mastery 07',
    titleAr: 'احتراف اللايف 07',
    descEn: 'Official creator milestones & top tier achievements',
    descAr: 'تحقيق أعلى التارجتات وتوثيق نجوم البث المباشر',
    views: '93.8K',
    poster: '/assets/streamers/legends_host_8.webp',
  },
];

// ============================================================================
// CRISP VECTOR LOGOS FOR SNAPCHAT & TELEGRAM + PURE LOGO SOCIAL ORBS
// ============================================================================
const CrispSnapchatIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="16" fill="#FFFC00" />
    <path
      d="M32 13C24.5 13 20 17.8 20 24.8C20 26.8 20.3 28.6 20.7 30C20.9 30.6 20.5 31.1 19.9 31.3C18.4 31.8 16.5 32.1 15.6 32.9C15.1 33.4 15.1 34.3 15.7 34.9C16.7 35.8 19.2 36.6 20.6 37.3C21.1 37.6 21.3 38.2 21 38.8C19.8 41.3 17.5 43.7 14.3 44.7C13.6 44.9 13.4 45.8 14 46.3C15.8 47.9 18.8 48.6 21.5 48.8C22.2 48.9 22.7 49.4 23.1 49.9C24.4 51.3 27.5 52.5 32 52.5C36.5 52.5 39.6 51.3 40.9 49.9C41.3 49.4 41.8 48.9 42.5 48.8C45.2 48.6 48.2 47.9 50 46.3C50.6 45.8 50.4 44.9 49.7 44.7C46.5 43.7 44.2 41.3 43 38.8C42.7 38.2 42.9 37.6 43.4 37.3C44.8 36.6 47.3 35.8 48.3 34.9C48.9 34.3 48.9 33.4 48.4 32.9C47.5 32.1 45.6 31.8 44.1 31.3C43.5 31.1 43.1 30.6 43.3 30C43.7 28.6 44 26.8 44 24.8C44 17.8 39.5 13 32 13Z"
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="2.8"
      strokeLinejoin="round"
    />
  </svg>
);

const CrispTelegramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="16" fill="url(#tg-grad)" />
    <defs>
      <linearGradient id="tg-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#37BBFE" />
        <stop offset="1" stopColor="#007DBB" />
      </linearGradient>
    </defs>
    <path
      d="M47.6 18.2L14.2 31.1C11.9 32 11.9 33.3 13.8 33.9L22.4 36.6L42.2 24.1C43.1 23.5 44 23.8 43.3 24.5L27.2 39L26.6 48.1C27.5 48.1 28.1 47.7 28.7 47.1L33.1 42.8L42.2 49.5C43.9 50.4 45.1 49.9 45.5 47.9L51.3 20.5C51.9 18.1 50.3 17.1 47.6 18.2Z"
      fill="#FFFFFF"
    />
  </svg>
);

const CrispYouTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="16" fill="#FF0000" />
    <path
      d="M50.8 23.3C50.3 21.3 48.7 19.7 46.7 19.2C43.1 18.2 32 18.2 32 18.2C32 18.2 20.9 18.2 17.3 19.2C15.3 19.7 13.7 21.3 13.2 23.3C12.2 26.9 12.2 32 12.2 32C12.2 32 12.2 37.1 13.2 40.7C13.7 42.7 15.3 44.3 17.3 44.8C20.9 45.8 32 45.8 32 45.8C32 45.8 43.1 45.8 46.7 44.8C48.7 44.3 50.3 42.7 50.8 40.7C51.8 37.1 51.8 32 51.8 32C51.8 32 51.8 26.9 50.8 23.3Z"
      fill="#FFFFFF"
    />
    <path d="M28 38.2V25.8L38.8 32L28 38.2Z" fill="#FF0000" />
  </svg>
);

interface SocialChannelItem {
  id: string;
  nameAr: string;
  nameEn: string;
  handle: string;
  url: string;
  brandColor: string;
  Icon: React.FC<{ className?: string }>;
}

const SOCIAL_CHANNELS: SocialChannelItem[] = [
  {
    id: 'whatsapp',
    nameAr: 'واتساب',
    nameEn: 'WhatsApp',
    handle: '24/7 VIP',
    url: 'https://wa.me/201069560025',
    brandColor: '#25D366',
    Icon: BrandIcons.WhatsApp,
  },
  {
    id: 'telegram',
    nameAr: 'تيليجرام',
    nameEn: 'Telegram',
    handle: '@legeends1agency',
    url: 'https://t.me/legeends1agency',
    brandColor: '#2AABEE',
    Icon: CrispTelegramIcon,
  },
  {
    id: 'youtube',
    nameAr: 'يوتيوب',
    nameEn: 'YouTube',
    handle: 'Legends Shorts',
    url: 'https://www.youtube.com/shorts/Fykwnnekw-U',
    brandColor: '#FF0000',
    Icon: CrispYouTubeIcon,
  },
  {
    id: 'tiktok',
    nameAr: 'تيك توك',
    nameEn: 'TikTok',
    handle: '@legends.1.agency',
    url: 'https://www.tiktok.com/@legends.1.agency',
    brandColor: '#00F2FE',
    Icon: BrandIcons.TikTok,
  },
  {
    id: 'instagram',
    nameAr: 'انستجرام',
    nameEn: 'Instagram',
    handle: '@legends_agenccy',
    url: 'https://www.instagram.com/legends_agenccy/',
    brandColor: '#E1306C',
    Icon: BrandIcons.Instagram,
  },
  {
    id: 'snapchat',
    nameAr: 'سناب شات',
    nameEn: 'Snapchat',
    handle: '@legeendsagency',
    url: 'https://www.snapchat.com/@legeendsagency?locale=ar_OM&sid=7d0e9b4004a840f8a3621e7d64bc2ed6&share_id=DFZAt4TKTYSB_Ardk9GSug&invite_id=Os8h6A2y',
    brandColor: '#FFFC00',
    Icon: CrispSnapchatIcon,
  },
  {
    id: 'facebook',
    nameAr: 'فيسبوك',
    nameEn: 'Facebook',
    handle: 'Legends Agency',
    url: 'https://www.facebook.com/share/18K86fqxqd/?mibextid=wwXIfr',
    brandColor: '#1877F2',
    Icon: BrandIcons.Facebook,
  },
];

// ============================================================================
// ALL 10 OFFICIAL UPLOADED LEGENDS AGENCY LIVE STREAMER PHOTOS
// ============================================================================
export type PlatformId = 'xena' | 'tango' | 'bigo';

interface LiveCreatorCard {
  id: string;
  labelAr: string;
  labelEn: string;
  viewers: string;
  platformId: PlatformId;
  image: string;
  x: number;
  y: number;
  zOffset: number;
}

const LIVE_CREATORS: LiveCreatorCard[] = [
  {
    id: 'live-1',
    labelAr: 'استوديو وكالة الأساطير الرسمي',
    labelEn: 'Official Legends Agency Studio',
    viewers: '42.8K',
    platformId: 'xena',
    image: '/assets/streamers/legends_host_1.webp',
    x: -33,
    y: -21,
    zOffset: 0.0,
  },
  {
    id: 'live-2',
    labelAr: 'بث صوتي ومرئي — استوديو الأساطير',
    labelEn: 'Legends Pro Broadcast Setup',
    viewers: '36.4K',
    platformId: 'bigo',
    image: '/assets/streamers/legends_host_2.webp',
    x: 33,
    y: -19,
    zOffset: 0.08,
  },
  {
    id: 'live-3',
    labelAr: 'مذيعة معتمدة — زينا لايف',
    labelEn: 'Verified Host — Xena Live',
    viewers: '28.9K',
    platformId: 'xena',
    image: '/assets/streamers/legends_host_3.webp',
    x: -35,
    y: 20,
    zOffset: 0.16,
  },
  {
    id: 'live-4',
    labelAr: 'بث مباشر تفاعلي — وكالة الأساطير',
    labelEn: 'Interactive Live — Legends Agency',
    viewers: '51.2K',
    platformId: 'bigo',
    image: '/assets/streamers/legends_host_4.webp',
    x: 34,
    y: 21,
    zOffset: 0.24,
  },
  {
    id: 'live-5',
    labelAr: 'استوديو البث الاحترافي — بيجو لايف',
    labelEn: 'Pro Creator Studio — Bigo Live',
    viewers: '33.7K',
    platformId: 'bigo',
    image: '/assets/streamers/legends_host_5.webp',
    x: -23,
    y: -27,
    zOffset: 0.32,
  },
  {
    id: 'live-6',
    labelAr: 'تحدي PK مباشر — تانجو والأساطير',
    labelEn: 'Live PK Match — Tango & Legends',
    viewers: '64.5K',
    platformId: 'tango',
    image: '/assets/streamers/legends_host_6.webp',
    x: 24,
    y: -25,
    zOffset: 0.40,
  },
  {
    id: 'live-7',
    labelAr: 'نجمة البث المباشر — تانجو لايف',
    labelEn: 'Top Broadcaster — Tango Live',
    viewers: '47.1K',
    platformId: 'tango',
    image: '/assets/streamers/legends_host_7.webp',
    x: -25,
    y: 26,
    zOffset: 0.48,
  },
  {
    id: 'live-8',
    labelAr: 'تصدر الترتيب اليومي — تانجو لايف',
    labelEn: 'Daily Top Ranking — Tango Live',
    viewers: '29.6K',
    platformId: 'tango',
    image: '/assets/streamers/legends_host_8.webp',
    x: 26,
    y: 25,
    zOffset: 0.56,
  },
  {
    id: 'live-9',
    labelAr: 'إدارة وتوثيق النجوم — زينا لايف',
    labelEn: 'VIP Talent Management — Xena Live',
    viewers: '38.3K',
    platformId: 'xena',
    image: '/assets/streamers/legends_host_9.webp',
    x: -31,
    y: 2,
    zOffset: 0.64,
  },
  {
    id: 'live-10',
    labelAr: 'نخبة مذيعات وكالة الأساطير',
    labelEn: 'Legends Agency Elite Broadcasters',
    viewers: '72.0K',
    platformId: 'xena',
    image: '/assets/streamers/legends_host_10.webp',
    x: 31,
    y: -2,
    zOffset: 0.72,
  },
];

// ============================================================================
// SUPPORTED PLATFORMS WITH COMPLETE DEDICATED PAGE DATA
// ============================================================================
interface PlatformTier {
  levelAr: string;
  levelEn: string;
  hoursAr: string;
  hoursEn: string;
  targetAr: string;
  payoutAr: string;
  payoutEn: string;
}

interface PlatformInfo {
  id: PlatformId;
  nameEn: string;
  nameAr: string;
  shortAr: string;
  creatorsCountAr: string;
  creatorsCountEn: string;
  badgeEn: string;
  badgeAr: string;
  accentColor: string;
  accentGlow: string;
  cardHeadlineEn: string;
  cardHeadlineAr: string;
  promptPillEn: string;
  promptPillAr: string;
  heroTitleAr: string;
  heroTitleEn: string;
  heroDescAr: string;
  heroDescEn: string;
  featuresAr: { title: string; desc: string }[];
  featuresEn: { title: string; desc: string }[];
  requirementsAr: string[];
  requirementsEn: string[];
  tiers: PlatformTier[];
  LogoComponent: React.FC<{ className?: string }>;
  streamerImg: string;
}

const PLATFORMS: PlatformInfo[] = [
  {
    id: 'xena',
    nameEn: 'Xena Live',
    nameAr: 'زينا لايف (Xena Live)',
    shortAr: 'زينا لايف',
    creatorsCountAr: '+2,000 مذيع ومذيعة',
    creatorsCountEn: '2,000+ Active Hosts',
    badgeEn: 'Voice Rooms & PK',
    badgeAr: 'غرف صوتية وتحديات PK',
    accentColor: '#ec4899',
    accentGlow: 'rgba(236, 72, 153, 0.35)',
    cardHeadlineEn: 'Dominate Voice Rooms & Official PKs on Xena Live.',
    cardHeadlineAr: 'تصدر الغرف الصوتية والجولات الرسمية في زينا لايف.',
    promptPillEn: 'Official Contracts · PK Coordination · VIP Support',
    promptPillAr: 'عقود رسمية · تنسيق PK · دعم وتصدر',
    heroTitleAr: 'وكالة الأساطير المعتمدة في تطبيق زينا لايف (Xena Live)',
    heroTitleEn: 'Official Legends Agency Hub for Xena Live Creators',
    heroDescAr:
      'انضم إلى أقوى منظومة إدارة مذيعين وغرف صوتية في الشرق الأوسط على تطبيق Xena Live. نوفر لك كود وكالة رسمي معتمد، حماية كاملة للحساب، جدولة جولات PK احترافية، ومتابعة مستمرة لتطوير أدائك بأمان تام.',
    heroDescEn:
      'Join the premier creator agency on Xena Live across MENA. Get instant official agency verification, account protection, scheduled PK tournaments, and dedicated creator support.',
    featuresAr: [
      {
        title: 'توثيق رسمي فوري بالوكالة',
        desc: 'ربط حسابك مباشرة بكود وكالة الأساطير الرسمي في زينا لايف وتفعيل شارة المذيع المعتمد خلال دقائق.',
      },
      {
        title: 'دعم وتصدر الغرف الصوتية',
        desc: 'خطة تشغيل احترافية لغرفتك الصوتية مع دعم متبادل وتنظيم فعاليات ومسابقات ترفع تفاعل الغرفة.',
      },
      {
        title: 'جدولة تحديات PK الرسمية',
        desc: 'تنسيق جولات وتحديات PK يومية وأسبوعية مع أقوى المذيعين لرفع التفاعل والوصول لأعلى المستويات.',
      },
      {
        title: 'إدارة ومتابعة احترافية 100%',
        desc: 'فريق دعم فني وإداري متخصص لمتابعة حسابك وحمايته وتطوير جدول بثك وفق سياسات المنصة.',
      },
    ],
    featuresEn: [
      {
        title: 'Instant Official Verification',
        desc: 'Direct linking to Legends Agency official code with verified host badge activation.',
      },
      {
        title: 'Voice Room Growth Engine',
        desc: 'Strategic scheduling, interactive events, and agency traffic to scale your room.',
      },
      {
        title: 'Official PK Tournaments',
        desc: 'Daily and weekly PK battles coordinated by dedicated account managers.',
      },
      {
        title: '100% Verified Management',
        desc: 'Dedicated technical support and transparent tracking aligned with official platform policies.',
      },
    ],
    requirementsAr: [
      'العمر 18 سنة فأكثر مع جدية والتزام بتحقيق التارجت الشهري.',
      'الالتزام بعدد ساعات بث لا يقل عن 2 إلى 3 ساعات يومياً (أو 40 ساعة شهرياً).',
      'تقديم محتوى حواري أو ترفيهي راقٍ يتوافق مع سياسات زينا لايف.',
      'ألا يكون الحساب مربوطاً بوكالة أخرى حالياً (أو إمكانية إنشاء حساب جديد معنا).',
    ],
    requirementsEn: [
      'Age 18+ with commitment to monthly broadcasting milestones.',
      'Minimum 2–3 hours daily streaming across 15–20 active days per month.',
      'Engaging, policy-compliant voice or interactive content.',
      'Account must be unbound or ready for fresh official registration.',
    ],
    tiers: [
      {
        levelAr: 'المستوى الأساسي (Starter)',
        levelEn: 'Starter Tier',
        hoursAr: '40 ساعة / 18 يوم',
        hoursEn: '40 hrs / 18 days',
        targetAr: 'نشاط تأسيسي',
        payoutAr: 'تفعيل الشارة + متابعة وإرشاد أسبوعي',
        payoutEn: 'Badge Activation + Weekly Coaching',
      },
      {
        levelAr: 'المستوى الاحترافي (Pro Host)',
        levelEn: 'Pro Host Tier',
        hoursAr: '55 ساعة / 20 يوم',
        hoursEn: '55 hrs / 20 days',
        targetAr: 'نشاط متقدم',
        payoutAr: 'إدارة غرفة صوتية + جدولة PK رسمية',
        payoutEn: 'Room Management + Official PK Scheduling',
      },
      {
        levelAr: 'نخبة الأساطير (VIP Star)',
        levelEn: 'VIP Star Tier',
        hoursAr: '70 ساعة / 22 يوم',
        hoursEn: '70 hrs / 22 days',
        targetAr: 'مستوى النخبة',
        payoutAr: 'أولوية الترويج والتصدر + دعم VIP كامل',
        payoutEn: 'Priority Explore + Full VIP Support',
      },
    ],
    LogoComponent: BrandIcons.Xena,
    streamerImg: '/assets/streamers/legends_host_1.webp',
  },
  {
    id: 'tango',
    nameEn: 'Tango Live',
    nameAr: 'تانجو لايف (Tango Live)',
    shortAr: 'تانجو لايف',
    creatorsCountAr: '+10,000 مذيع وصانع محتوى',
    creatorsCountEn: '10,000+ Video Creators',
    badgeEn: 'Global Video Stream',
    badgeAr: 'بث مرئي عالمي وتصدر',
    accentColor: '#a855f7',
    accentGlow: 'rgba(168, 85, 247, 0.35)',
    cardHeadlineEn: 'Scale Your Global Video Presence on Tango Live.',
    cardHeadlineAr: 'وسّع انتشارك العالمي وتصدر البث المباشر في تانجو لايف.',
    promptPillEn: 'Global Audience · Explore Boost · VIP Account Management',
    promptPillAr: 'جمهور عالمي · تصدر الاكسبلور · إدارة حسابات VIP',
    heroTitleAr: 'وكالة الأساطير الرسمية لمذيعي وصناع محتوى تانجو لايف (Tango Live)',
    heroTitleEn: 'Official Legends Agency for Tango Live Broadcasters',
    heroDescAr:
      'وسّع حضورك العالمي عبر تطبيق Tango Live مع وكالة الأساطير. نمنحك تفعيل الحساب الاحترافي، تأهيل وتدريب متقدم للمذيعين الجدد على بناء جمهور تفاعلي، وحماية كاملة لحسابك على مدار الساعة.',
    heroDescEn:
      'Scale your global live video presence on Tango Live with Legends Agency. Enjoy professional onboarding, audience growth strategies, and dedicated technical support.',
    featuresAr: [
      {
        title: 'تفعيل حساب مذيع رسمي بمزايا خاصة',
        desc: 'فتح ميزات البث المتقدمة والظهور في الصفحة الرئيسية (Explore) لجذب مشاهدين ومتابعين من كل العالم.',
      },
      {
        title: 'برامج تطوير ونمو المذيعين',
        desc: 'خطط متابعة أسبوعية وتوجيه احترافي لرفع جودة البث وزيادة التفاعل مع وكالة الأساطير.',
      },
      {
        title: 'حماية الحساب والدعم الفني المباشر',
        desc: 'فريق مختص لحل أي مشكلة تقنية أو حظر طارئ والتواصل المباشر مع إدارة تطبيق Tango Live.',
      },
      {
        title: 'متابعة وإدارة تشغيلية 24/7',
        desc: 'دعم مستمر لتطوير جدول البث وتحسين التفاعل وضمان التزام الحساب بسياسات المنصة الرسمية.',
      },
    ],
    featuresEn: [
      {
        title: 'Premium Broadcaster Activation',
        desc: 'Unlock global Explore visibility and premium monetization tools from day one.',
      },
      {
        title: 'Creator Growth Programs',
        desc: 'Dedicated milestones and agency recognition programs for active Tango broadcasters.',
      },
      {
        title: 'Direct Account Protection',
        desc: 'Dedicated escalation channel with Tango management to protect your broadcaster account.',
      },
      {
        title: '24/7 Operational Support',
        desc: 'Daily guidance to optimize your stream quality, audience engagement, and schedule.',
      },
    ],
    requirementsAr: [
      'العمر 18 سنة فأكثر مع امتلاك هاتف ذكي بكاميرا واضحة واتصال إنترنت مستقر.',
      'القدرة على تقديم بث مرئي تفاعلي (حوار، مواهب، ترفيه، أو تحديات).',
      'الالتزام ببث منتظم لبناء قاعدة متابعين وداعمين دائمين في التطبيق.',
      'الالتزام التام بمعايير المجتمع وسياسات البث الآمن في تانجو لايف.',
    ],
    requirementsEn: [
      'Age 18+ with a clear smartphone camera and stable internet connection.',
      'Ability to host interactive video broadcasts (talk, talent, entertainment).',
      'Consistent streaming schedule to build loyal supporters.',
      'Full compliance with Tango Live community guidelines.',
    ],
    tiers: [
      {
        levelAr: 'انطلاقة المذيع (Rising Host)',
        levelEn: 'Rising Host',
        hoursAr: '35 ساعة / 15 يوم',
        hoursEn: '35 hrs / 15 days',
        targetAr: 'شريحة البداية',
        payoutAr: 'تفعيل الحساب + تأهيل وتدريب تفاعلي',
        payoutEn: 'Account Activation + Onboarding Coaching',
      },
      {
        levelAr: 'مذيع متقدم (Elite Streamer)',
        levelEn: 'Elite Streamer',
        hoursAr: '50 ساعة / 20 يوم',
        hoursEn: '50 hrs / 20 days',
        targetAr: 'شريحة الاحتراف',
        payoutAr: 'أولوية الظهور في Explore + متابعة أسبوعية',
        payoutEn: 'Explore Priority + Weekly Review',
      },
      {
        levelAr: 'نجم تانجو (Tango Legend)',
        levelEn: 'Tango Legend',
        hoursAr: '65 ساعة / 22 يوم',
        hoursEn: '65 hrs / 22 days',
        targetAr: 'شريحة النخبة',
        payoutAr: 'دعم ترويجي VIP + مدير حساب مخصص',
        payoutEn: 'VIP Promotion + Dedicated Manager',
      },
    ],
    LogoComponent: BrandIcons.Tango,
    streamerImg: '/assets/streamers/legends_host_7.webp',
  },
  {
    id: 'bigo',
    nameEn: 'Bigo Live',
    nameAr: 'بيجو لايف (Bigo Live)',
    shortAr: 'بيجو لايف',
    creatorsCountAr: '+1,500 مذيع ومذيعة',
    creatorsCountEn: '1,500+ Official Hosts',
    badgeEn: 'Official Agency Hub',
    badgeAr: 'توثيق رسمي ودعم عالمي',
    accentColor: '#00d2ff',
    accentGlow: 'rgba(0, 210, 255, 0.35)',
    cardHeadlineEn: 'Official Host Verification & Global PKs on Bigo Live.',
    cardHeadlineAr: 'توثيق رسمي للمذيعين وإدارة احترافية للفعاليات في بيجو لايف.',
    promptPillEn: 'Official Verification + Audition Prep + Global PKs',
    promptPillAr: 'توثيق رسمي + تأهيل القبول + بطولات عالمية',
    heroTitleAr: 'وكالة الأساطير المعتمدة لمذيعي بيجو لايف (Bigo Live)',
    heroTitleEn: 'Official Legends Agency Host Hub on Bigo Live',
    heroDescAr:
      'انضم إلى نخبة المذيعين المعتمدين في تطبيق Bigo Live مع وكالة الأساطير. نوفر لك التأهيل الكامل لاجتياز اختبار القبول الرسمي، جدولة ساعات البث الاحترافية، وترشيحك للمشاركة في المسابقات والفعاليات الرسمية الكبرى.',
    heroDescEn:
      'Join verified creators on Bigo Live with Legends Agency. Get full audition preparation, structured streaming schedules, and official event invitations.',
    featuresAr: [
      {
        title: 'توثيق رسمي للمذيعين بالوكالة',
        desc: 'تفعيل حسابك كمذيع معتمد داخل منظومة بيجو لايف مع متابعة مستمرة لمؤشرات الأداء وساعات البث.',
      },
      {
        title: 'اختبار قبول وتفعيل سريع (Audition)',
        desc: 'تجهيزك لاجتياز فيديو القبول الرسمي في بيجو لايف بنجاح من المرة الأولى وتفعيل الحساب فوراً.',
      },
      {
        title: 'ترشيح للحفلات والفعاليات الرسمية',
        desc: 'إدراج مذيعي الوكالة في بطولات بيجو الإقليمية والعالمية لزيادة الشهرة وتعزيز التفاعل.',
      },
      {
        title: 'إدارة حسابات متكاملة 24/7',
        desc: 'متابعة يومية لساعات البث وتوفير تقارير أداء دقيقة لضمان تطور مستمر لحسابك.',
      },
    ],
    requirementsAr: [
      'العمر 18 سنة فأكثر واجتياز فيديو التعريف القصير الخاص بتوثيق المذيع.',
      'الالتزام بجدول البث الشهري المعتمد للعقود الرسمية (من 30 إلى 44 ساعة شهرياً).',
      'حساب بيجو لايف جديد أو غير مسجل في وكالة أخرى خلال آخر 3 أشهر.',
      'التفاعل الإيجابي مع المتابعين والالتزام بقوانين البث المعتمدة في Bigo Live.',
    ],
    featuresEn: [
      {
        title: 'Official Host Verification',
        desc: 'Step-by-step guidance to verify your Bigo Live broadcaster profile seamlessly.',
      },
      {
        title: 'Fast-Track Audition Approval',
        desc: 'Full guidance to pass your Bigo Live host audition and activate your contract.',
      },
      {
        title: 'Official Regional & Global Events',
        desc: 'Priority registration in official Bigo Live PK battles and gala events.',
      },
      {
        title: '24/7 Dedicated Management',
        desc: 'Daily tracking of your streaming hours and growth milestones.',
      },
    ],
    requirementsEn: [
      'Age 18+ and completion of a short host verification audition clip.',
      'Commitment to official contract hours (30 to 44+ hours across 15–20 days).',
      'New Bigo account or unbound from any other agency.',
      'Active viewer engagement and strict adherence to Bigo rules.',
    ],
    tiers: [
      {
        levelAr: 'المستوى الأول (Tier S1)',
        levelEn: 'Tier S1',
        hoursAr: '30 ساعة / 15 يوم',
        hoursEn: '30 hrs / 15 days',
        targetAr: 'نشاط تأسيسي',
        payoutAr: 'توثيق رسمي + تأهيل Audition كامل',
        payoutEn: 'Official Verification + Audition Prep',
      },
      {
        levelAr: 'المستوى المتقدم (Tier S2)',
        levelEn: 'Tier S2',
        hoursAr: '40 ساعة / 20 يوم',
        hoursEn: '40 hrs / 20 days',
        targetAr: 'نشاط متقدم',
        payoutAr: 'جدولة PK إقليمية + تقارير أداء',
        payoutEn: 'Regional PKs + Performance Reports',
      },
      {
        levelAr: 'نخبة المحترفين (Star Pro)',
        levelEn: 'Star Pro',
        hoursAr: '44 ساعة / 20 يوم',
        hoursEn: '44 hrs / 20 days',
        targetAr: 'مستوى النخبة',
        payoutAr: 'ترشيح للفعاليات الرسمية + رعاية VIP',
        payoutEn: 'Official Gala Invites + VIP Management',
      },
    ],
    LogoComponent: BrandIcons.Bigo,
    streamerImg: '/assets/streamers/legends_host_2.webp',
  },
];

// ============================================================================
// MATH HELPERS FOR ULTRA-SMOOTH SCROLL SCRUBBING
// ============================================================================
function clamp(val: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, val));
}

function rangeProgress(p: number, start: number, end: number) {
  return clamp((p - start) / (end - start), 0, 1);
}

function smoothstep(min: number, max: number, value: number) {
  const x = clamp((value - min) / (max - min), 0, 1);
  return x * x * (3 - 2 * x);
}

// ============================================================================
// APPLE-GRADE 3D GLASS MEDALLION EMBLEM FOR LEGENDS OFFICIAL LOGO
// ============================================================================
function LegendsProEmblem3D({
  className = 'w-44 h-44',
  rotationDeg = 0,
  glowIntensity = 1,
  showOrbital = true,
}: {
  className?: string;
  rotationDeg?: number;
  glowIntensity?: number;
  showOrbital?: boolean;
}) {
  const rad = (rotationDeg * Math.PI) / 180;
  const tiltY = Math.sin(rad) * 15;
  const tiltX = Math.cos(rad * 0.7) * 9;

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ perspective: '1200px' }}
    >
      {/* Volumetric Gold & Cyan Halo */}
      <div
        className="pointer-events-none absolute inset-4 rounded-full blur-2xl"
        style={{
          opacity: 0.7 * glowIntensity,
          background:
            'radial-gradient(circle, rgba(245,158,11,0.45) 0%, rgba(0,210,255,0.35) 55%, transparent 78%)',
        }}
      />

      {/* Precision Gyroscopic Outer Ring */}
      {showOrbital && (
        <div
          className="pointer-events-none absolute inset-0 rounded-full border border-cyan-400/25"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(68deg) rotateZ(${rotationDeg}deg)`,
          }}
        >
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#00d2ff]" />
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_15px_#f59e0b]" />
        </div>
      )}

      {showOrbital && (
        <div
          className="pointer-events-none absolute inset-3 rounded-full border border-amber-400/20"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(68deg) rotateX(22deg) rotateZ(${-rotationDeg * 0.8}deg)`,
          }}
        />
      )}

      {/* 3D Tilting Medallion Core */}
      <div
        className="relative w-full h-full flex items-center justify-center will-change-transform"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${tiltY}deg) rotateX(${tiltX}deg)`,
        }}
      >
        <div
          className="absolute inset-5 rounded-full bg-gradient-to-b from-white/[0.08] to-black/95 border border-white/[0.15] shadow-[0_20px_50px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-xl"
          style={{ transform: 'translateZ(-8px)' }}
        />

        <img
          src="/assets/legends_official_3d.webp"
          alt="Legends Agency Official Logo"
          className="relative w-[90%] h-[90%] object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.9)]"
          style={{ transform: 'translateZ(18px)' }}
        />
      </div>
    </div>
  );
}

// ============================================================================
// DYNAMIC 3D REVOLVING ORBITAL ECOSYSTEM ENGINE (Phase 3 — "مميزات الوكالة")
// - Nodes physically orbit in 3D space as you scroll (`scrollProgress`),
//   plus 3D mouse-move tilt & GPU-accelerated radar rings!
// ============================================================================
function InteractiveEcosystemCommandHub({
  isAr,
  scrollProgress,
  activePlatformId,
  onSelectPlatform,
  onOpenPlatformPage,
}: {
  isAr: boolean;
  scrollProgress: number;
  activePlatformId: PlatformId;
  onSelectPlatform: (id: PlatformId) => void;
  onOpenPlatformPage: (id: PlatformId) => void;
}) {
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const [manualSelection, setManualSelection] = useState(false);

  // Scroll-scrubbed progress inside Phase 3 [0.30 -> 0.54]
  const localEcoP = rangeProgress(scrollProgress, 0.3, 0.54);

  // Auto-highlight platform as user scrolls through Phase 3 unless manually clicked
  const scrollDrivenPlatformId: PlatformId =
    localEcoP < 0.34 ? 'xena' : localEcoP < 0.67 ? 'tango' : 'bigo';
  const effectivePlatformId = manualSelection ? activePlatformId : scrollDrivenPlatformId;

  const activePlatform = PLATFORMS.find((pl) => pl.id === effectivePlatformId) || PLATFORMS[0];
  const ActiveLogo = activePlatform.LogoComponent;

  // Dynamic orbital angle driven smoothly by scroll wheel!
  const dynamicOrbitDeg = localEcoP * 300;

  const nodes: {
    id: PlatformId;
    baseAngleDeg: number;
    statAr: string;
    statEn: string;
    subAr: string;
    subEn: string;
    metricCode: string;
  }[] = [
    {
      id: 'xena',
      baseAngleDeg: -90,
      statAr: '+2,000 مذيع ومذيعة',
      statEn: '2,000+ Active Hosts',
      subAr: 'غرف صوتية وتحديات PK يومية',
      subEn: 'Voice Rooms & Daily PKs',
      metricCode: 'SYS · XENA · +2,000',
    },
    {
      id: 'tango',
      baseAngleDeg: 30,
      statAr: '+10,000 مذيع وصانع محتوى',
      statEn: '10,000+ Video Creators',
      subAr: 'بث مرئي عالمي وتصدر الاكسبلور',
      subEn: 'Global Video & Explore Reach',
      metricCode: 'SYS · TANGO · +10,000',
    },
    {
      id: 'bigo',
      baseAngleDeg: 150,
      statAr: '+1,500 مذيع ومذيعة',
      statEn: '1,500+ Official Hosts',
      subAr: 'توثيق رسمي + دعم وجولات عالمية',
      subEn: 'Official Onboarding + Global PKs',
      metricCode: 'SYS · BIGO · +1,500',
    },
  ];

  // Calculate live 2D/3D coordinates for each orbiting node
  const radiusPx = 152;
  const computedNodes = nodes.map((node) => {
    const currentAngleDeg = node.baseAngleDeg + dynamicOrbitDeg;
    const rad = (currentAngleDeg * Math.PI) / 180;
    const x = Math.cos(rad) * radiusPx;
    const y = Math.sin(rad) * radiusPx * 0.86; // Slight 3D elliptical perspective
    const z = Math.sin(rad) * 42; // Nodes in front pop closer in 3D Z-space
    return {
      ...node,
      x,
      y,
      z,
      svgX: 250 + x,
      svgY: 250 + y,
    };
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouseTilt({ x: -ny * 9, y: nx * 11 });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-2 sm:gap-5 lg:gap-8"
    >
      {/* LEFT / RIGHT COLUMN: INTERACTIVE HOLOGRAPHIC TELEMETRY & FEATURE CARDS */}
      <div
        dir={isAr ? 'rtl' : 'ltr'}
        style={{
          transform: `perspective(1200px) rotateX(${mouseTilt.x * 0.35}deg) rotateY(${
            mouseTilt.y * 0.35
          }deg)`,
        }}
        className="lg:col-span-5 space-y-2 sm:space-y-4 bg-[#08090f]/95 backdrop-blur-2xl p-3 sm:p-6 md:p-7 rounded-[20px] sm:rounded-[28px] border border-white/[0.12] shadow-[0_25px_90px_rgba(0,0,0,0.95)] transition-transform duration-200 will-change-transform relative overflow-hidden"
      >
        {/* Top Tech Telemetry Scanner Bar */}
        <div
          className="pointer-events-none absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${activePlatform.accentColor}, #00d2ff, transparent)`,
          }}
        />

        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.12] text-[9.5px] sm:text-[11px] font-medium text-cyan-300">
            <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span>
              {isAr ? 'منظومة وكالة الأساطير التفاعلية' : 'Interactive Legends Core Engine'}
            </span>
          </div>
          <span className="text-[9.5px] sm:text-[10px] font-mono text-emerald-400 flex items-center gap-1 shrink-0">
            <Activity className="w-3 h-3 animate-pulse" />
            <span>{isAr ? activePlatform.creatorsCountAr : activePlatform.creatorsCountEn}</span>
          </span>
        </div>

        {/* Interactive Platform Switcher Tabs */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-0.5">
          {PLATFORMS.map((pl) => {
            const Icon = pl.LogoComponent;
            const isSelected = pl.id === effectivePlatformId;
            return (
              <button
                key={pl.id}
                type="button"
                onClick={() => {
                  setManualSelection(true);
                  onSelectPlatform(pl.id);
                }}
                className={`p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl border flex items-center gap-1.5 sm:gap-2 transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-[0_0_25px_rgba(0,210,255,0.35)] scale-[1.02] font-bold'
                    : 'bg-white/[0.04] hover:bg-white/[0.1] text-white/80 border-white/[0.08]'
                }`}
              >
                <div className="w-4.5 h-4.5 sm:w-6 sm:h-6 rounded-lg overflow-hidden shrink-0">
                  <Icon className="w-full h-full" />
                </div>
                <div className="min-w-0 text-start">
                  <div className="text-[10.5px] sm:text-xs truncate leading-tight">
                    {pl.nameEn.split(' ')[0]}
                  </div>
                  <div
                    className={`text-[8.5px] sm:text-[9px] font-mono truncate ${
                      isSelected ? 'text-black/75' : 'text-cyan-300/80'
                    }`}
                  >
                    {pl.id === 'tango' ? '+10,000' : pl.id === 'xena' ? '+2,000' : '+1,500'}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Platform Live Interactive Details */}
        <div className="p-2.5 sm:p-4 rounded-2xl bg-black/80 border border-white/[0.1] space-y-2 sm:space-y-3.5 relative overflow-hidden">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 p-0.5 bg-black shrink-0">
                <ActiveLogo className="w-full h-full rounded-lg sm:rounded-xl" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-lg font-bold text-white truncate">
                  {isAr ? activePlatform.nameAr : activePlatform.nameEn}
                </h3>
                <span className="text-[10px] sm:text-xs text-cyan-300 block truncate">
                  {isAr ? activePlatform.badgeAr : activePlatform.badgeEn}
                </span>
              </div>
            </div>
            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[9.5px] sm:text-[10px] font-bold text-emerald-300 shrink-0">
              {isAr ? activePlatform.creatorsCountAr : activePlatform.creatorsCountEn}
            </span>
          </div>

          {/* 4 Interactive Feature Modules with Hover Glow */}
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            {activePlatform.featuresAr.map((feat, i) => (
              <div
                key={i}
                style={{
                  transform: `translate3d(0, ${Math.sin(localEcoP * Math.PI * 2 + i) * 2}px, 0)`,
                }}
                className="group p-2 sm:p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.07] hover:border-cyan-400/40 transition-all duration-300 text-[10px] sm:text-[11px]"
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                    {isAr ? feat.title : activePlatform.featuresEn[i].title}
                  </span>
                  <span className="text-[9px] font-mono text-white/35 hidden sm:inline">0{i + 1}</span>
                </div>
                <div className="text-white/60 line-clamp-1 sm:line-clamp-2 leading-snug sm:leading-relaxed">
                  {isAr ? feat.desc : activePlatform.featuresEn[i].desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Action Button to Open Dedicated Platform Page */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenPlatformPage(activePlatform.id)}
            className="flex-1 py-2 sm:py-3.5 px-4 rounded-xl sm:rounded-2xl bg-white hover:bg-cyan-300 text-black font-bold text-xs sm:text-sm transition cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <span>
              {isAr
                ? `افتح صفحة ${activePlatform.shortAr} واستمارة التقديم`
                : `Open ${activePlatform.nameEn} Page & Apply`}
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* RIGHT COLUMN: 3D REVOLVING ORBITAL REACTOR WITH ANIMATED LASER CONDUITS */}
      <div
        className="lg:col-span-7 relative h-[185px] sm:h-[360px] lg:h-[460px] flex items-center justify-center"
        style={{ perspective: '1400px' }}
      >
        <div
          className="relative w-full h-full flex items-center justify-center will-change-transform transition-transform duration-150 scale-[0.52] sm:scale-90 lg:scale-100"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${mouseTilt.x}deg) rotateY(${mouseTilt.y}deg)`,
          }}
        >
          {/* SVG Animated Radar Rings, Sweeping Scanner Beam & Live Energy Conduits */}
          <svg
            viewBox="0 0 500 500"
            className="pointer-events-none absolute w-[420px] sm:w-[460px] h-[420px] sm:h-[460px]"
          >
            <defs>
              <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(0, 210, 255, 0.32)" />
                <stop offset="50%" stopColor="rgba(245, 158, 11, 0.14)" />
                <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
              </radialGradient>
            </defs>

            {/* Ambient Reactor Core Glow */}
            <circle cx="250" cy="250" r="220" fill="url(#core-glow)" />

            {/* Counter-Rotating Precision Telemetry Rings */}
            <g
              style={{
                transformOrigin: '250px 250px',
                transform: `rotate(${dynamicOrbitDeg * 0.6}deg)`,
              }}
            >
              <circle
                cx="250"
                cy="250"
                r="190"
                fill="none"
                stroke="rgba(0,210,255,0.16)"
                strokeWidth="1"
                strokeDasharray="3 9"
              />
              <circle
                cx="250"
                cy="250"
                r="152"
                fill="none"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="1.2"
                strokeDasharray="12 8"
              />
            </g>

            <g
              style={{
                transformOrigin: '250px 250px',
                transform: `rotate(${-dynamicOrbitDeg * 0.9}deg)`,
              }}
            >
              <circle
                cx="250"
                cy="250"
                r="112"
                fill="none"
                stroke="rgba(245,158,11,0.22)"
                strokeWidth="1.2"
                strokeDasharray="6 10"
              />
            </g>

            {/* Dynamic Energy Beams Tracking the Live Orbiting Nodes! */}
            {computedNodes.map((cn) => {
              const isSelected = effectivePlatformId === cn.id;
              const strokeCol =
                cn.id === 'xena' ? '#ec4899' : cn.id === 'tango' ? '#a855f7' : '#00d2ff';
              const pulseRatio = (localEcoP * 4) % 1;
              return (
                <g key={cn.id}>
                  <line
                    x1="250"
                    y1="250"
                    x2={cn.svgX}
                    y2={cn.svgY}
                    stroke={isSelected ? strokeCol : 'rgba(255,255,255,0.22)'}
                    strokeWidth={isSelected ? '2.8' : '1.4'}
                    strokeDasharray={isSelected ? 'none' : '5 5'}
                  />
                  {/* Travelling Data Packet Pulse along the Conduit */}
                  <circle
                    cx={250 + (cn.svgX - 250) * pulseRatio}
                    cy={250 + (cn.svgY - 250) * pulseRatio}
                    r={isSelected ? '4.5' : '3'}
                    fill={strokeCol}
                  />
                </g>
              );
            })}
          </svg>

          {/* Central Machined 3D Legends Hub Medallion */}
          <div
            className="relative z-20 flex flex-col items-center"
            style={{ transform: 'translateZ(25px)' }}
          >
            <LegendsProEmblem3D
              className="w-36 h-36 sm:w-44 sm:h-44"
              rotationDeg={scrollProgress * 420}
              glowIntensity={1.35}
            />
            <div className="mt-1 px-3.5 py-1 rounded-full bg-black/90 border border-cyan-400/30 text-[10px] font-mono text-cyan-300 shadow-[0_0_20px_rgba(0,210,255,0.3)]">
              LEGENDS · +13,500 HOSTS
            </div>
          </div>

          {/* 3 Live Orbiting Platform Nodes in 3D Space */}
          {computedNodes.map((node) => {
            const pl = PLATFORMS.find((p) => p.id === node.id)!;
            const NodeLogo = pl.LogoComponent;
            const isSelected = effectivePlatformId === node.id;

            return (
              <div
                key={node.id}
                onClick={() => {
                  setManualSelection(true);
                  onSelectPlatform(node.id);
                }}
                onDoubleClick={() => onOpenPlatformPage(node.id)}
                style={{
                  transform: `translate3d(${node.x}px, ${node.y}px, ${
                    node.z + (isSelected ? 35 : 0)
                  }px) scale(${isSelected ? 1.08 : 0.95})`,
                  zIndex: Math.round(30 + node.z),
                }}
                className={`absolute w-44 sm:w-52 p-3 rounded-2xl backdrop-blur-2xl border transition-shadow duration-300 cursor-pointer select-none will-change-transform ${
                  isSelected
                    ? 'bg-[#10121c]/95 border-cyan-400/60 shadow-[0_15px_50px_rgba(0,210,255,0.35)]'
                    : 'bg-[#08090f]/90 border-white/15 hover:border-white/35 shadow-[0_15px_35px_rgba(0,0,0,0.9)]'
                }`}
              >
                <div className="flex items-center justify-between gap-1.5 mb-1">
                  <span className="text-[9px] font-mono text-cyan-400/80">{node.metricCode}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg overflow-hidden border border-white/20 shrink-0">
                      <NodeLogo className="w-full h-full" />
                    </div>
                    <span className="text-xs font-bold text-white">{pl.nameEn}</span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenPlatformPage(node.id);
                    }}
                    className="px-2 py-0.5 rounded-md bg-white/10 hover:bg-white hover:text-black text-[10px] font-semibold text-cyan-300 transition"
                  >
                    {isAr ? 'شرح وتقديم' : 'Open'}
                  </button>
                </div>
                <div dir={isAr ? 'rtl' : 'ltr'} className="text-[11px] font-bold text-emerald-300">
                  {isAr ? node.statAr : node.statEn}
                </div>
                <div dir={isAr ? 'rtl' : 'ltr'} className="text-[10px] text-white/60 truncate">
                  {isAr ? node.subAr : node.subEn}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT: APPLE-BLACK 3D SCROLL STAGE + DEDICATED APP PAGES
// ============================================================================
export function MonoformSite() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const isAr = lang === 'ar';

  // Dedicated Platform Page View (`null` = Main 3D Scroll Stage, `'xena' | 'tango' | 'bigo'` = Full Dedicated Page)
  const [activeAppPage, setActiveAppPage] = useState<PlatformId | null>(null);

  // Active platform selected in the Phase 3 Interactive Ecosystem Hub
  const [hubPlatform, setHubPlatform] = useState<PlatformId>('xena');

  // Responsive viewport detection for mobile harmony (`< 640px`)
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );

  // Smooth-damped scroll progress `p` in [0, 1] + velocity `vel`
  const [p, setP] = useState(0);
  const [vel, setVel] = useState(0);
  const targetPRef = useRef(0);
  const currentPRef = useRef(0);

  // Hero stage video sound state
  const [heroMuted, setHeroMuted] = useState(true);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const cubeVideoRef = useRef<HTMLVideoElement | null>(null);

  // Active playing YouTube video ID in Phase 4 Rail
  const [playingYoutubeId, setPlayingYoutubeId] = useState<string | null>(null);

  // Application Modal, Official QR Modal & Dedicated Page Form State
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [selectedApps, setSelectedApps] = useState<string[]>(['Xena Live', 'Tango Live', 'Bigo Live']);
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('22');
  const [experience, setExperience] = useState('خبير / لدي خبرة سابقة');
  const [notes, setNotes] = useState('');

  // High-Efficiency 120fps Butter-Smooth Scroll Engine (Zero mobile lag + zero dead scroll!)
  useEffect(() => {
    let rafId: number | null = null;
    let lastMobileState = window.innerWidth < 640;

    const syncVideoPlayback = (progress: number) => {
      const heroVid = heroVideoRef.current;
      if (heroVid) {
        if (progress > 0.095 && !heroVid.paused) {
          heroVid.pause();
        } else if (progress <= 0.095 && heroVid.paused) {
          heroVid.play().catch(() => {});
        }
      }
      const cubeVid = cubeVideoRef.current;
      if (cubeVid) {
        if ((progress < 0.002 || progress > 0.37) && !cubeVid.paused) {
          cubeVid.pause();
        } else if (progress >= 0.002 && progress <= 0.37 && cubeVid.paused) {
          cubeVid.play().catch(() => {});
        }
      }
    };

    const tick = () => {
      const target = targetPRef.current;
      const current = currentPRef.current;
      const diff = target - current;
      const isTouchViewport = window.innerWidth < 768;

      // On mobile touch, native OS momentum already smooths scrollY — use fast 0.55 tracking for zero finger lag!
      // On desktop mouse wheel, use crisp 0.28 damping so wheel steps glide without sluggishness.
      const lerpFactor = isTouchViewport ? 0.55 : 0.28;
      const settleThreshold = isTouchViewport ? 0.00045 : 0.0002;

      if (Math.abs(diff) > settleThreshold) {
        const next = current + diff * lerpFactor;
        currentPRef.current = next;
        setP(next);
        setVel(diff);
        syncVideoPlayback(next);
        rafId = requestAnimationFrame(tick);
      } else {
        currentPRef.current = target;
        setP(target);
        setVel(0);
        syncVideoPlayback(target);
        rafId = null;
      }
    };

    const wakeScrollLoop = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      targetPRef.current = clamp(window.scrollY / maxScroll, 0, 1);
      if (rafId === null) {
        rafId = requestAnimationFrame(tick);
      }
    };

    const handleResize = () => {
      const nextMobile = window.innerWidth < 640;
      if (nextMobile !== lastMobileState) {
        lastMobileState = nextMobile;
        setIsMobile(nextMobile);
      }
      wakeScrollLoop();
    };

    window.addEventListener('scroll', wakeScrollLoop, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    wakeScrollLoop();

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', wakeScrollLoop);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrubToProgress = (targetProgress: number) => {
    if (activeAppPage !== null) {
      setActiveAppPage(null);
      setTimeout(() => {
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        window.scrollTo({
          top: targetProgress * maxScroll,
          behavior: 'smooth',
        });
      }, 60);
      return;
    }
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({
      top: targetProgress * maxScroll,
      behavior: 'smooth',
    });
  };

  const openDedicatedPlatformPage = (platformId: PlatformId) => {
    const found = PLATFORMS.find((pl) => pl.id === platformId);
    if (found) {
      setSelectedApps([found.nameEn]);
    }
    setActiveAppPage(platformId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleHeroSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !heroMuted;
    if (heroVideoRef.current) heroVideoRef.current.muted = nextMuted;
    if (cubeVideoRef.current) cubeVideoRef.current.muted = nextMuted;
    setHeroMuted(nextMuted);
  };

  const toggleAppSelection = (appName: string) => {
    setSelectedApps((prev) =>
      prev.includes(appName)
        ? prev.length > 1
          ? prev.filter((a) => a !== appName)
          : prev
        : [...prev, appName]
    );
  };

  const handleWhatsAppSubmit = (e: React.FormEvent, overrideAppName?: string) => {
    e.preventDefault();
    const chosenAppsLine = overrideAppName || selectedApps.join(' + ');
    const messageLines = [
      `📱 التطبيق المطلوب للتقديم: ${chosenAppsLine}`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `✨ طلب انضمام رسمي — وكالة الأساطير (Legends Agency)`,
      `👤 الاسم: ${fullName || 'غير محدد'}`,
      `🎂 العمر: ${age || '18+'}`,
      `🌍 الدولة: ${country || 'غير محدد'}`,
      `📞 رقم الواتساب: ${phone || 'غير محدد'}`,
      `🎙️ الخبرة في البث: ${experience}`,
      notes ? `📝 آيدي الحساب / ملاحظات: ${notes}` : '',
    ].filter(Boolean);

    const encoded = encodeURIComponent(messageLines.join('\n'));
    window.open(`https://wa.me/201069560025?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  // ==========================================================================
  // ZERO-GAP PHASE TIMELINE CALCULATIONS:
  // Every single 1% of scroll [0.00 -> 1.00] drives continuous, overlapping 3D motion
  // with ZERO empty dead zones between Hero, Apps, Ecosystem, Videos, Streamers, and Finale!
  // ==========================================================================
  // Phase 1 [0.00 -> 0.08]: Full-Screen Landscape Hero Video recedes immediately on first scroll
  const heroStageOpacity = 1 - smoothstep(0.003, 0.08, p);
  const heroStageScale = 1 - smoothstep(0.0, 0.08, p) * 0.12;

  // Phase 2 [0.003 -> 0.36]: 3D 4-Sided Rotating Box materializes immediately & rotates continuously!
  const cubeEnterProgress = smoothstep(0.003, 0.08, p);
  const cubeRotationProgress = rangeProgress(p, 0.03, 0.32);
  const cubeRotateY = -cubeRotationProgress * 270;
  const cubeRotateX = Math.sin(cubeRotationProgress * Math.PI * 2) * 5;
  const cubeRotateZ = Math.sin(cubeRotationProgress * Math.PI) * -2;

  // Seamless Overlapping Crossfade from 3D Box to Interactive Ecosystem Command Hub
  const boxExitProgress = smoothstep(0.3, 0.36, p);
  const cubeStageOpacity = clamp(cubeEnterProgress - boxExitProgress, 0, 1);

  // Phase 3: Interactive Ecosystem Command Hub [0.30 -> 0.55]
  const particleStageEnter = smoothstep(0.3, 0.36, p);
  const particleStageExit = smoothstep(0.49, 0.55, p);
  const particleStageOpacity = clamp(particleStageEnter - particleStageExit, 0, 1);

  // Phase 4: 3D Coverflow YouTube Video Deck + Interactive Social Media Dock [0.49 -> 0.77]
  const railEnter = smoothstep(0.49, 0.55, p);
  const railExit = smoothstep(0.71, 0.77, p);
  const railOpacity = clamp(railEnter - railExit, 0, 1);
  const railSlideProgress = rangeProgress(p, 0.5, 0.74);

  // Phase 5: 3D Camera Fly-Through of 10 Real Live Streamers [0.71 -> 0.95]
  const flyEnter = smoothstep(0.71, 0.77, p);
  const flyExit = smoothstep(0.89, 0.95, p);
  const flyOpacity = clamp(flyEnter - flyExit, 0, 1);
  const flyProgress = rangeProgress(p, 0.71, 0.93);

  // Phase 6: Finale Card [0.89 -> 1.00]
  const finaleEnter = smoothstep(0.89, 0.95, p);

  const velocitySkew = clamp(vel * 110, -4, 4);

  const currentPlatformPageData = activeAppPage
    ? PLATFORMS.find((pl) => pl.id === activeAppPage) || null
    : null;

  return (
    <div dir="ltr" className="relative w-full bg-[#000000] text-[#f5f5f7] font-sans select-none">
      {/* =====================================================================
          1. APPLE-STYLE FIXED TOP GLASS NAVBAR WITH MODERN TECH ACCENTS
         ===================================================================== */}
      <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-[150] w-max max-w-[96vw]">
        <nav className="flex items-center gap-1 sm:gap-1.5 bg-[#0a0b10]/90 backdrop-blur-2xl text-[#f5f5f7] rounded-full p-1 sm:p-1.5 px-2 sm:px-2.5 shadow-[0_14px_45px_rgba(0,0,0,0.9),0_0_25px_rgba(0,210,255,0.1)] border border-white/[0.14] overflow-x-auto max-w-[96vw]">
          <button
            type="button"
            onClick={() => scrubToProgress(0)}
            className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 flex items-center justify-center rounded-full bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.12] transition cursor-pointer p-1"
            title="وكالة الأساطير — Legends Agency"
          >
            <img
              src="/assets/legends_official_3d.webp"
              alt="Legends Official Logo"
              className="w-full h-full object-contain"
            />
          </button>

          <div className="h-4 w-[1px] bg-white/[0.1] mx-0.5 hidden sm:block shrink-0" />

          <button
            type="button"
            onClick={() => scrubToProgress(0)}
            className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10.5px] sm:text-xs font-medium rounded-full transition cursor-pointer shrink-0 ${
              activeAppPage === null && p < 0.06
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-white/75 hover:text-white hover:bg-white/[0.08]'
            }`}
          >
            {isAr ? 'الرئيسية' : 'Home'}
          </button>

          <button
            type="button"
            onClick={() => scrubToProgress(0.13)}
            className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10.5px] sm:text-xs font-medium rounded-full transition cursor-pointer shrink-0 ${
              activeAppPage === null && p >= 0.06 && p < 0.33
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-white/75 hover:text-white hover:bg-white/[0.08]'
            }`}
          >
            {isAr ? 'التطبيقات' : 'Apps'}
          </button>

          <button
            type="button"
            onClick={() => scrubToProgress(0.41)}
            className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10.5px] sm:text-xs font-medium rounded-full transition cursor-pointer hidden md:inline-block shrink-0 ${
              activeAppPage === null && p >= 0.33 && p < 0.52
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-white/75 hover:text-white hover:bg-white/[0.08]'
            }`}
          >
            {isAr ? 'مميزات الوكالة' : 'Ecosystem'}
          </button>

          <button
            type="button"
            onClick={() => scrubToProgress(0.61)}
            className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10.5px] sm:text-xs font-medium rounded-full transition cursor-pointer shrink-0 ${
              activeAppPage === null && p >= 0.52 && p < 0.74
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-white/75 hover:text-white hover:bg-white/[0.08]'
            }`}
          >
            {isAr ? 'الأكاديمية' : 'Academy'}
          </button>

          <button
            type="button"
            onClick={() => scrubToProgress(0.82)}
            className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10.5px] sm:text-xs font-medium rounded-full transition cursor-pointer hidden lg:inline-block shrink-0 ${
              activeAppPage === null && p >= 0.74 && p < 0.91
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-white/75 hover:text-white hover:bg-white/[0.08]'
            }`}
          >
            {isAr ? 'نجوم اللايف' : 'Live Stars'}
          </button>

          <div className="h-4 w-[1px] bg-white/[0.12] mx-0.5 hidden sm:block shrink-0" />

          {/* Dedicated App Page Shortcuts (Xena / Tango / Bigo) */}
          {PLATFORMS.map((pl) => {
            const Icon = pl.LogoComponent;
            const isCurrentAppPage = activeAppPage === pl.id;
            return (
              <button
                key={pl.id}
                type="button"
                onClick={() => openDedicatedPlatformPage(pl.id)}
                className={`px-2 sm:px-2.5 py-1 text-[10.5px] sm:text-[11px] font-semibold rounded-full transition cursor-pointer flex items-center gap-1 sm:gap-1.5 border shrink-0 ${
                  isCurrentAppPage
                    ? 'bg-gradient-to-r from-amber-400 to-cyan-300 text-black border-white shadow-[0_0_20px_rgba(0,210,255,0.4)]'
                    : 'bg-white/[0.05] hover:bg-white/[0.12] text-white/90 border-white/[0.08]'
                }`}
                title={isAr ? `صفحة وشرح وتقديم ${pl.nameAr}` : `${pl.nameEn} Dedicated Page`}
              >
                <div className="w-4 h-4 rounded-full overflow-hidden shrink-0">
                  <Icon className="w-full h-full" />
                </div>
                <span className="hidden sm:inline">
                  {isAr ? pl.shortAr : pl.nameEn.split(' ')[0]}
                </span>
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => setLang(isAr ? 'en' : 'ar')}
            className="px-2 sm:px-2.5 py-1 text-[10.5px] sm:text-[11px] font-bold rounded-full bg-white/[0.08] hover:bg-white/[0.16] text-white/90 transition cursor-pointer flex items-center gap-1 shrink-0"
          >
            <Globe className="w-3 h-3 text-cyan-400" />
            <span>{isAr ? 'EN' : 'عربي'}</span>
          </button>

          <button
            type="button"
            onClick={() => setApplyModalOpen(true)}
            className="ml-0.5 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#f5f5f7] text-black text-[10.5px] sm:text-xs font-bold hover:bg-cyan-300 transition cursor-pointer shadow-sm shrink-0"
          >
            {isAr ? 'انضم الآن' : 'Apply'}
          </button>
        </nav>
      </header>

      {/* =====================================================================
          2. ORIGINAL SITE AI ASSISTANT WINDOW (`<AIChat />`) +
             CIRCULAR FLOATING WHATSAPP BUTTON (`مدور بس مش مستطيل`)
         ===================================================================== */}
      <div className="relative z-[170]">
        <AIChat />
      </div>

      <a
        href={`https://wa.me/201069560025?text=${encodeURIComponent(
          'السلام عليكم، أرغب في الاستفسار والانضمام لوكالة الأساطير الرسمية (Legends Agency)'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isAr ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
        title={isAr ? 'تواصل مباشر عبر واتساب الوكالة (24/7)' : 'Contact Agency on WhatsApp (24/7)'}
        style={{
          transform: `translate3d(0, ${p > 0.01 || activeAppPage ? '0px' : '4px'}, 0) scale(${
            1 + Math.min(0.14, Math.abs(vel) * 2.2)
          })`,
        }}
        className="fixed bottom-3.5 right-4 sm:right-6 z-[165] group flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#07160e]/95 hover:bg-[#0d281a] border border-[#25D366]/60 hover:border-[#25D366] shadow-[0_10px_35px_rgba(37,211,102,0.45)] backdrop-blur-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        {/* Pulsing Emerald Halo */}
        <span
          className="pointer-events-none absolute -inset-1 rounded-full bg-[#25D366]/25 animate-ping opacity-70"
          style={{ animationDuration: '2.8s' }}
        />
        {/* WhatsApp SVG Icon */}
        <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
          <BrandIcons.WhatsApp className="w-full h-full drop-shadow-[0_0_10px_rgba(37,211,102,0.7)]" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#07160e] animate-pulse" />
        </div>
      </a>

      {/* =====================================================================
          VIEW MODE A: DEDICATED FULL PAGE FOR EACH APPLICATION
         ===================================================================== */}
      {currentPlatformPageData ? (
        <div
          dir={isAr ? 'rtl' : 'ltr'}
          className="relative min-h-screen w-full bg-[#000000] text-[#f5f5f7] pt-24 pb-24 px-4 sm:px-8 md:px-14 overflow-x-hidden"
        >
          <div
            className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full blur-[150px] opacity-35"
            style={{
              background: `radial-gradient(circle, ${currentPlatformPageData.accentColor} 0%, transparent 70%)`,
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto space-y-12">
            {/* Top Back Bar & Quick Switcher between the 3 App Pages */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.1]">
              <button
                type="button"
                onClick={() => setActiveAppPage(null)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.12] text-xs sm:text-sm font-semibold text-white transition cursor-pointer"
              >
                {isAr ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                <span>{isAr ? 'العودة للمنصة التفاعلية 3D' : 'Back to 3D Interactive Stage'}</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="text-xs text-white/50 hidden sm:inline">
                  {isAr ? 'التنقل السريع بين صفحات التطبيقات:' : 'Switch App Page:'}
                </span>
                {PLATFORMS.map((pl) => {
                  const Icon = pl.LogoComponent;
                  const active = pl.id === currentPlatformPageData.id;
                  return (
                    <button
                      key={pl.id}
                      type="button"
                      onClick={() => openDedicatedPlatformPage(pl.id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 border transition cursor-pointer ${
                        active
                          ? 'bg-white text-black border-white shadow-md'
                          : 'bg-white/[0.05] text-white/75 border-white/[0.1] hover:bg-white/[0.12]'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full overflow-hidden">
                        <Icon className="w-full h-full" />
                      </div>
                      <span>{pl.nameEn}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* HERO BANNER OF THE DEDICATED APP PAGE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0a0a0d] border border-white/[0.1] rounded-[32px] p-6 sm:p-10 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.95)]">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-xs text-cyan-300">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>
                    {isAr
                      ? `الوكيل الرسمي المعتمد — ${currentPlatformPageData.nameAr}`
                      : `Official Verified Agency — ${currentPlatformPageData.nameEn}`}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                  {isAr ? currentPlatformPageData.heroTitleAr : currentPlatformPageData.heroTitleEn}
                </h1>

                <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                  {isAr ? currentPlatformPageData.heroDescAr : currentPlatformPageData.heroDescEn}
                </p>

                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-2">
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                    <div className="text-[11px] sm:text-xs text-white/50">
                      {isAr ? 'عدد المذيعين بالوكالة' : 'Agency Creators'}
                    </div>
                    <div className="text-sm sm:text-lg font-bold text-amber-300 mt-0.5">
                      {isAr
                        ? currentPlatformPageData.creatorsCountAr
                        : currentPlatformPageData.creatorsCountEn}
                    </div>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                    <div className="text-[11px] sm:text-xs text-white/50">
                      {isAr ? 'حماية وتوثيق الحساب' : 'Account Protection'}
                    </div>
                    <div className="text-sm sm:text-lg font-bold text-emerald-400 mt-0.5">
                      100% Verified
                    </div>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                    <div className="text-[11px] sm:text-xs text-white/50">
                      {isAr ? 'الدعم الفني والإدارة' : 'Creator Support'}
                    </div>
                    <div className="text-sm sm:text-lg font-bold text-cyan-300 mt-0.5">
                      24/7 VIP Desk
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-sm aspect-[4/4.3] rounded-[28px] overflow-hidden border border-white/[0.15] shadow-2xl bg-black">
                  <img
                    src={currentPlatformPageData.streamerImg}
                    alt={currentPlatformPageData.nameEn}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full overflow-hidden">
                        <currentPlatformPageData.LogoComponent className="w-full h-full" />
                      </div>
                      <span className="text-xs font-bold text-white">
                        {currentPlatformPageData.nameEn}
                      </span>
                    </div>
                    <img
                      src="/assets/legends_official_3d.webp"
                      alt="Legends"
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15">
                    <div className="text-xs text-amber-300 font-semibold mb-0.5">
                      {isAr ? currentPlatformPageData.badgeAr : currentPlatformPageData.badgeEn}
                    </div>
                    <div className="text-sm font-bold text-white">
                      {isAr
                        ? currentPlatformPageData.cardHeadlineAr
                        : currentPlatformPageData.cardHeadlineEn}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 PILLARS OF PROFESSIONAL EXPLANATION */}
            <div className="space-y-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                  {isAr ? 'الدليل الاحترافي الشامل' : 'COMPREHENSIVE GUIDE'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {isAr
                    ? `لماذا تنضم إلى ${currentPlatformPageData.shortAr} عبر وكالة الأساطير؟`
                    : `Why Join ${currentPlatformPageData.nameEn} with Legends Agency?`}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {(isAr
                  ? currentPlatformPageData.featuresAr
                  : currentPlatformPageData.featuresEn
                ).map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-[24px] bg-[#0a0a0d] border border-white/[0.09] hover:border-white/[0.2] transition space-y-2.5"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-cyan-300 font-mono font-bold text-sm">
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-white">{feat.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* GROWTH TIERS & REQUIREMENTS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-[28px] bg-[#0a0a0d] border border-white/[0.1] space-y-5">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-xl font-bold text-white">
                    {isAr
                      ? `مستويات التطوير والالتزام في ${currentPlatformPageData.shortAr}`
                      : `${currentPlatformPageData.nameEn} Growth & Activity Levels`}
                  </h3>
                </div>

                <div className="space-y-3">
                  {currentPlatformPageData.tiers.map((tier, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <div className="text-sm font-bold text-white">
                          {isAr ? tier.levelAr : tier.levelEn}
                        </div>
                        <div className="text-xs text-white/55 mt-0.5">
                          {isAr ? `الساعات المطلوبة: ${tier.hoursAr}` : `Hours: ${tier.hoursEn}`} ·{' '}
                          <span className="text-cyan-300">{tier.targetAr}</span>
                        </div>
                      </div>
                      <div className="px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-xs font-bold text-emerald-300 shrink-0">
                        {isAr ? tier.payoutAr : tier.payoutEn}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 rounded-[28px] bg-[#0a0a0d] border border-white/[0.1] space-y-5">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white">
                    {isAr ? 'شروط القبول والتوثيق' : 'Onboarding Requirements'}
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {(isAr
                    ? currentPlatformPageData.requirementsAr
                    : currentPlatformPageData.requirementsEn
                  ).map((req, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-white/80 leading-relaxed"
                    >
                      <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* EMBEDDED APPLICATION FORM SPECIFIC TO THIS PLATFORM */}
            <div
              id="platform-apply-form"
              className="p-6 sm:p-10 md:p-12 rounded-[32px] bg-gradient-to-b from-[#111218] to-[#08080c] border border-white/[0.15] shadow-[0_30px_100px_rgba(0,0,0,0.95)]"
            >
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.1]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/20 p-0.5 bg-black shrink-0">
                      <currentPlatformPageData.LogoComponent className="w-full h-full rounded-xl" />
                    </div>
                    <div>
                      <span className="text-xs text-cyan-300 font-semibold">
                        {isAr ? 'تسجيل مباشر ومعتمد' : 'Direct Official Registration'}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">
                        {isAr
                          ? `استمارة التقديم في ${currentPlatformPageData.nameAr}`
                          : `Apply Now for ${currentPlatformPageData.nameEn}`}
                      </h3>
                    </div>
                  </div>
                  <img
                    src="/assets/legends_official_3d.webp"
                    alt="Legends"
                    className="w-14 h-14 object-contain hidden sm:block"
                  />
                </div>

                <form
                  onSubmit={(e) => handleWhatsAppSubmit(e, currentPlatformPageData.nameEn)}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1.5">
                        {isAr ? 'الاسم بالكامل أو اللقب الفني *' : 'Full Name / Stage Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder={isAr ? 'مثال: سارة أحمد' : 'e.g. Sara Ahmed'}
                        className="w-full px-4 py-3.5 rounded-2xl bg-black/80 border border-white/[0.14] text-white text-sm placeholder:text-white/35 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1.5">
                        {isAr ? 'رقم الواتساب للتواصل المباشر *' : 'WhatsApp Phone Number *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+20 10..."
                        className="w-full px-4 py-3.5 rounded-2xl bg-black/80 border border-white/[0.14] text-white text-sm placeholder:text-white/35 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1.5">
                        {isAr ? 'الدولة / المدينة *' : 'Country / City *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder={isAr ? 'مصر، السعودية، الإمارات، المغرب...' : 'Country'}
                        className="w-full px-4 py-3.5 rounded-2xl bg-black/80 border border-white/[0.14] text-white text-sm placeholder:text-white/35 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1.5">
                        {isAr ? 'العمر (18 سنة فأكثر) *' : 'Age (18+) *'}
                      </label>
                      <input
                        type="number"
                        min={18}
                        max={70}
                        required
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-2xl bg-black/80 border border-white/[0.14] text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1.5">
                        {isAr ? 'الخبرة السابقة في البث المباشر' : 'Streaming Experience'}
                      </label>
                      <select
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#0d0e14] border border-white/[0.14] text-white text-sm focus:outline-none focus:border-cyan-400"
                      >
                        <option value="خبير / لدي خبرة سابقة">
                          {isAr ? 'لدي خبرة سابقة في البث المباشر' : 'Experienced Broadcaster'}
                        </option>
                        <option value="مبتدئ / أرغب بالتدريب والبدء">
                          {isAr ? 'مبتدئ وأرغب بالتدريب والبدء فوراً' : 'Beginner — Ready to Train'}
                        </option>
                        <option value="مذيع حالي وأرغب بالنقل لوكالة الأساطير">
                          {isAr ? 'مذيع حالي وأرغب بالانضمام لوكالة الأساطير' : 'Transferring Host'}
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1.5">
                        {isAr
                          ? `آيدي الحساب في ${currentPlatformPageData.shortAr} (إن وجد)`
                          : `${currentPlatformPageData.nameEn} Account ID (Optional)`}
                      </label>
                      <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder={isAr ? 'اكتب الآيدي أو أي ملاحظات...' : 'Your ID or notes...'}
                        className="w-full px-4 py-3.5 rounded-2xl bg-black/80 border border-white/[0.14] text-white text-sm placeholder:text-white/35 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-white/60">
                      {isAr
                        ? `سيتم إرسال طلبك مباشرة إلى إدارة ${currentPlatformPageData.shortAr} في وكالة الأساطير عبر واتساب.`
                        : `Your application will be sent directly to our ${currentPlatformPageData.nameEn} desk via WhatsApp.`}
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-cyan-300 text-black font-bold text-sm transition cursor-pointer flex items-center justify-center gap-2 shadow-xl"
                    >
                      <Send className="w-4 h-4" />
                      <span>
                        {isAr
                          ? `إرسال طلب التقديم في ${currentPlatformPageData.shortAr}`
                          : `Submit ${currentPlatformPageData.nameEn} Application`}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ===================================================================
           VIEW MODE B: MAIN 3D SCROLL-SCRUBBED INTERACTIVE STAGE (APPLE BLACK)
           =================================================================== */
        <>
          {/* COMPACT ZERO-GAP SCROLL RUNWAY (460svh on mobile / 580vh on desktop) */}
          <div className="w-full h-[460svh] sm:h-[580vh] pointer-events-none" />

          <div className="fixed inset-0 w-screen h-[100dvh] overflow-hidden bg-[#000000]">
            {/* Ambient Modern Tech Cyber-Grid & Laser Horizon Accent across the entire site */}
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(rgba(0, 210, 255, 0.22) 1px, transparent 1px), radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
                backgroundSize: '36px 36px, 18px 18px',
                backgroundPosition: '0 0, 9px 9px',
              }}
            />

            {/* ===============================================================
                STAGE LAYER A: PHASE 1 — FULL-SCREEN LANDSCAPE HERO VIDEO
                (p = 0.00 -> 0.08)
                - NO 3D Box blocking the Hero!
                - Video fills the entire Hero in landscape widescreen!
                - Full clear title "وكالة الأساطير لصناعة النجوم" prominently displayed!
               =============================================================== */}
            <div
              style={{
                opacity: heroStageOpacity,
                visibility: heroStageOpacity <= 0.005 ? 'hidden' : 'visible',
                transform: `scale(${heroStageScale})`,
                pointerEvents: p < 0.05 ? 'auto' : 'none',
                zIndex: 35,
              }}
              className="absolute inset-0 w-full h-full p-2 sm:p-5 md:p-7 flex items-center justify-center will-change-transform"
            >
              <div className="relative w-full h-full rounded-[26px] sm:rounded-[32px] overflow-hidden border border-white/[0.16] shadow-[0_40px_140px_rgba(0,0,0,1)] flex flex-col justify-between p-4 sm:p-10 md:p-14 bg-black">
                {/* FULL-BLEED LANDSCAPE HERO VIDEO */}
                <video
                  ref={heroVideoRef}
                  src="/assets/videos/drone_stage.mp4"
                  poster="/assets/videos/drone_stage_poster.webp"
                  autoPlay
                  loop
                  muted={heroMuted}
                  playsInline
                  className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-85 scale-[1.02]"
                />

                {/* Cinematic Apple-Pro Dark Vignette so text is 100% crystal clear */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.38) 45%, rgba(0,0,0,0.88) 100%)',
                  }}
                />

                {/* Subtle Tech HUD Corner Brackets */}
                <div className="pointer-events-none absolute top-4 left-4 w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-lg" />
                <div className="pointer-events-none absolute top-4 right-4 w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-lg" />
                <div className="pointer-events-none absolute bottom-4 left-4 w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-lg" />
                <div className="pointer-events-none absolute bottom-4 right-4 w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-r-2 border-cyan-400/50 rounded-br-lg" />

                {/* TOP BAR INSIDE LANDSCAPE VIDEO HERO */}
                <div className="relative z-20 flex items-center justify-between gap-2 pt-11 sm:pt-6">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/70 backdrop-blur-xl border border-white/15 text-[10px] sm:text-xs text-cyan-300 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                    <span className="font-semibold truncate">
                      {isAr
                        ? 'الوكيل الرسمي المعتمد — Xena Live · Tango Live · Bigo Live'
                        : 'Official Verified Agency — Xena · Tango · Bigo'}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={toggleHeroSound}
                    className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-black/70 hover:bg-white hover:text-black backdrop-blur-xl border border-white/20 text-xs font-bold text-white flex items-center gap-2 transition cursor-pointer shadow-lg shrink-0"
                  >
                    {heroMuted ? (
                      <>
                        <VolumeX className="w-4 h-4 text-cyan-300" />
                        <span className="hidden sm:inline">
                          {isAr ? 'تشغيل صوت العرض' : 'Unmute Showreel'}
                        </span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4 text-emerald-400" />
                        <span className="hidden sm:inline">
                          {isAr ? 'الصوت يعمل' : 'Sound On'}
                        </span>
                      </>
                    )}
                  </button>
                </div>

                {/* CENTER FULL UNOBSTRUCTED HEADLINE OVER LANDSCAPE VIDEO */}
                <div
                  dir={isAr ? 'rtl' : 'ltr'}
                  className="relative z-20 my-auto max-w-4xl mx-auto text-center space-y-3.5 sm:space-y-5 px-1 sm:px-2"
                >
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-amber-300">
                    <span>LEGENDS AGENCY · MENA & GLOBAL</span>
                  </div>

                  <h1 className="text-[28px] sm:text-[60px] md:text-[80px] font-extrabold tracking-tight leading-[1.08] drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)]">
                    <span className="block bg-gradient-to-r from-white via-cyan-200 to-amber-200 bg-clip-text text-transparent">
                      {isAr ? 'وكالة الأساطير لصناعة النجوم' : 'Legends Agency for Star Creation'}
                    </span>
                  </h1>

                  <p className="text-white/90 text-xs sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
                    {isAr
                      ? 'توثيق رسمي معتمد، إدارة حسابات احترافية، تنسيق جولات PK، وحماية ودعم فني متكامل على مدار الساعة في أقوى منصات البث العالمية.'
                      : 'Verified host onboarding, professional account management, PK coordination, and 24/7 creator protection across global live platforms.'}
                  </p>

                  <div className="pt-1 sm:pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => setApplyModalOpen(true)}
                      className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-cyan-300 text-black text-xs sm:text-sm font-bold shadow-[0_0_35px_rgba(255,255,255,0.35)] transition cursor-pointer flex items-center gap-2"
                    >
                      <span>{isAr ? 'قدّم طلب الانضمام الرسمي' : 'Apply for Official Contract'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrubToProgress(0.13)}
                      className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-black/70 hover:bg-white/15 backdrop-blur-xl border border-white/25 text-white text-xs sm:text-sm font-semibold transition cursor-pointer"
                    >
                      {isAr ? 'استعراض التطبيقات 3D ↓' : 'Explore 3D Apps ↓'}
                    </button>
                  </div>
                </div>

                {/* BOTTOM BAR OF LANDSCAPE HERO: DIRECT PORTALS TO THE 3 DEDICATED APP PAGES */}
                <div className="relative z-20 pt-3 sm:pt-4 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="flex items-center -space-x-2 shrink-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-black overflow-hidden bg-black">
                        <BrandIcons.Tango className="w-full h-full" />
                      </div>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-black overflow-hidden bg-black">
                        <BrandIcons.Xena className="w-full h-full" />
                      </div>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-black overflow-hidden bg-black">
                        <BrandIcons.Bigo className="w-full h-full" />
                      </div>
                    </div>
                    <span className="text-[11px] sm:text-sm font-semibold text-white text-center sm:text-start">
                      {isAr
                        ? 'تانجو لايف +10,000 · زينا لايف +2,000 · بيجو لايف +1,500 مذيع'
                        : 'Tango 10,000+ · Xena 2,000+ · Bigo 1,500+ Creators'}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                    {PLATFORMS.map((pl) => {
                      const Icon = pl.LogoComponent;
                      return (
                        <button
                          key={pl.id}
                          type="button"
                          onClick={() => openDedicatedPlatformPage(pl.id)}
                          className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-black/75 hover:bg-white hover:text-black backdrop-blur-xl border border-white/20 text-[11px] sm:text-xs font-bold text-white flex items-center gap-1.5 sm:gap-2 transition cursor-pointer"
                        >
                          <div className="w-4 h-4 rounded-full overflow-hidden shrink-0">
                            <Icon className="w-full h-full" />
                          </div>
                          <span>{isAr ? `صفحة ${pl.shortAr}` : pl.nameEn}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* ===============================================================
                STAGE LAYER B: PHASE 2 — 3D 4-SIDED ROTATING BOX APPEARS ON SCROLL!
                (p = 0.003 -> 0.36)
                - Appears immediately when scrolling down from the Hero with ZERO gap!
                - Rotates cleanly through all 4 faces as you scroll!
               =============================================================== */}
            <div
              style={{
                opacity: cubeStageOpacity,
                visibility: cubeStageOpacity <= 0.005 ? 'hidden' : 'visible',
                transform: `scale(${
                  0.84 + cubeEnterProgress * 0.16 - boxExitProgress * 0.18
                }) translate3d(0, ${(1 - cubeEnterProgress) * 48 - boxExitProgress * 36}px, 0)`,
                pointerEvents: p >= 0.04 && p < 0.34 ? 'auto' : 'none',
                zIndex: 30,
              }}
              className="absolute inset-0 w-full h-full flex items-center justify-center will-change-transform"
            >
              {/* HIGH-CONTRAST ARCHITECTURAL BACKGROUND AROUND THE 3D BOX */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 flex flex-col justify-between py-16 sm:py-24 px-4 sm:px-8">
                <div className="w-full max-w-6xl mx-auto flex items-center justify-between border-b border-white/[0.1] pb-3 sm:pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[10px] sm:text-sm font-mono uppercase tracking-[0.18em] text-white/85">
                      LEGENDS 3D APPLICATION CUBE
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-sm font-semibold text-cyan-300 hidden sm:inline">
                    {isAr
                      ? 'اضغط على أي تطبيق لفتح صفحته الكاملة واستمارة التقديم'
                      : 'Click any platform to open its full guide & application'}
                  </span>
                </div>

                {/* High-Contrast Architectural Watermark Band */}
                <div
                  className="whitespace-nowrap flex items-center will-change-transform my-auto"
                  style={{
                    transform: `translate3d(${16 - cubeRotationProgress * 120}vw, 0, 0)`,
                  }}
                >
                  <span className="text-[42px] sm:text-[88px] md:text-[112px] font-bold tracking-[-0.03em] bg-gradient-to-r from-white/25 via-cyan-300/35 to-amber-300/25 bg-clip-text text-transparent">
                    XENA LIVE · TANGO LIVE · BIGO LIVE · LEGENDS AGENCY
                  </span>
                </div>

                {/* Left & Right Live Streamer Studio Cards */}
                <div
                  style={{
                    transform: `translate3d(-34vw, ${-10 + cubeRotationProgress * 20}px, 0) rotate(-4deg)`,
                  }}
                  className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-56 rounded-3xl overflow-hidden border border-white/[0.16] shadow-[0_25px_70px_rgba(0,0,0,0.95)] bg-[#0a0a0d] flex-col will-change-transform pointer-events-auto cursor-pointer hover:border-cyan-400/50 transition"
                  onClick={() => openDedicatedPlatformPage('tango')}
                >
                  <div className="relative w-full aspect-[4/4.4] overflow-hidden">
                    <img loading="lazy" decoding="async"
                      src="/assets/streamers/legends_host_7.webp"
                      alt="Tango Live Streamer"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[9px] font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      +10,000 مذيع
                    </span>
                  </div>
                  <div
                    dir="rtl"
                    className="p-3 bg-[#0a0a0d] border-t border-white/[0.1] flex items-center justify-between"
                  >
                    <span className="text-xs font-bold text-white">صفحة تانجو لايف ←</span>
                    <div className="w-5 h-5 rounded-full overflow-hidden shrink-0">
                      <BrandIcons.Tango className="w-full h-full" />
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    transform: `translate3d(34vw, ${10 - cubeRotationProgress * 20}px, 0) rotate(4deg)`,
                  }}
                  className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-56 rounded-3xl overflow-hidden border border-white/[0.16] shadow-[0_25px_70px_rgba(0,0,0,0.95)] bg-[#0a0a0d] flex-col will-change-transform pointer-events-auto cursor-pointer hover:border-cyan-400/50 transition"
                  onClick={() => openDedicatedPlatformPage('bigo')}
                >
                  <div className="relative w-full aspect-[4/4.4] overflow-hidden">
                    <img loading="lazy" decoding="async"
                      src="/assets/streamers/legends_host_4.webp"
                      alt="Bigo Live Streamer"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[9px] font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      +1,500 مذيع
                    </span>
                  </div>
                  <div
                    dir="rtl"
                    className="p-3 bg-[#0a0a0d] border-t border-white/[0.1] flex items-center justify-between"
                  >
                    <span className="text-xs font-bold text-white">صفحة بيجو لايف ←</span>
                    <div className="w-5 h-5 rounded-full overflow-hidden shrink-0">
                      <BrandIcons.Bigo className="w-full h-full" />
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-6xl mx-auto flex items-center justify-between border-t border-white/[0.1] pt-3 sm:pt-4 text-[10px] sm:text-xs text-white/60">
                  <span>TANGO +10,000 · XENA +2,000 · BIGO +1,500</span>
                  <span>100% OFFICIAL VERIFIED AGENCY</span>
                </div>
              </div>

              {/* THE 4-SIDED 3D ROTATING BOX (`الصندوق الثلاثي الأبعاد`) */}
              <div
                className="relative z-30 flex flex-col items-center justify-center pointer-events-auto scale-[0.84] sm:scale-100"
                style={{
                  perspective: '1600px',
                }}
              >
                <div
                  className="relative w-[300px] h-[395px] will-change-transform"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `translateZ(-150px) rotateX(${cubeRotateX}deg) rotateZ(${cubeRotateZ}deg) rotateY(${cubeRotateY}deg)`,
                  }}
                >
                  {/* FACE 1 (0deg): CLEAN UNOBSTRUCTED SHOWREEL VIDEO */}
                  <div
                    style={{
                      transform: 'rotateY(0deg) translateZ(150px)',
                      backfaceVisibility: 'hidden',
                    }}
                    className="absolute inset-0 rounded-[28px] overflow-hidden bg-[#050507] border border-white/25 shadow-[0_30px_90px_rgba(0,0,0,0.95)] flex flex-col justify-between p-5"
                  >
                    <video
                      ref={cubeVideoRef}
                      preload="none"
                      src="/assets/videos/drone_stage.mp4"
                      poster="/assets/videos/drone_stage_poster.webp"
                      autoPlay
                      loop
                      muted={heroMuted}
                      playsInline
                      className="pointer-events-none absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/45" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-bold text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>LEGENDS 3D BOX</span>
                      </span>
                      <button
                        type="button"
                        onClick={toggleHeroSound}
                        className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition cursor-pointer"
                      >
                        {heroMuted ? (
                          <VolumeX className="w-3.5 h-3.5" />
                        ) : (
                          <Volume2 className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <div className="relative z-10 my-auto" />

                    <div className="relative z-10 bg-black/75 backdrop-blur-xl p-3.5 rounded-2xl border border-white/15">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center -space-x-1.5">
                          <div className="w-5 h-5 rounded-full border border-white/40 overflow-hidden bg-black">
                            <BrandIcons.Xena className="w-full h-full" />
                          </div>
                          <div className="w-5 h-5 rounded-full border border-white/40 overflow-hidden bg-black">
                            <BrandIcons.Tango className="w-full h-full" />
                          </div>
                          <div className="w-5 h-5 rounded-full border border-white/40 overflow-hidden bg-black">
                            <BrandIcons.Bigo className="w-full h-full" />
                          </div>
                        </div>
                        <span className="text-[10px] text-cyan-300 font-semibold">
                          {isAr ? 'استمر بالنزول لتدوير الصندوق ↻' : 'Scroll to rotate ↻'}
                        </span>
                      </div>
                      <div
                        dir={isAr ? 'rtl' : 'ltr'}
                        className="text-xs sm:text-sm font-bold text-white leading-snug"
                      >
                        {isAr
                          ? 'وكالة الأساطير لصناعة النجوم'
                          : 'Legends Agency for Star Creation'}
                      </div>
                    </div>
                  </div>

                  {/* FACE 2 (90deg): XENA LIVE + DIRECT BUTTON TO XENA PAGE */}
                  <div
                    style={{
                      transform: 'rotateY(90deg) translateZ(150px)',
                      backfaceVisibility: 'hidden',
                    }}
                    className="absolute inset-0 rounded-[28px] overflow-hidden bg-[#0a0812] border border-pink-500/40 shadow-[0_30px_90px_rgba(0,0,0,0.95)] flex flex-col justify-between p-5"
                  >
                    <img loading="lazy" decoding="async"
                      src={PLATFORMS[0].streamerImg}
                      alt="Xena Live Studio"
                      className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-80"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/45" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full overflow-hidden">
                          <BrandIcons.Xena className="w-full h-full" />
                        </div>
                        <span>Xena Live</span>
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-pink-600 text-[9px] font-bold text-white">
                        {isAr ? '+2,000 مذيع' : '2,000+ Hosts'}
                      </span>
                    </div>

                    <div className="relative z-10 my-auto flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl p-1 bg-black/65 backdrop-blur-md border border-white/25 shadow-2xl">
                        <BrandIcons.Xena className="w-full h-full rounded-xl" />
                      </div>
                    </div>

                    <div
                      dir={isAr ? 'rtl' : 'ltr'}
                      className="relative z-10 space-y-2 bg-black/80 backdrop-blur-xl p-3.5 rounded-2xl border border-white/15"
                    >
                      <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                        {isAr ? PLATFORMS[0].cardHeadlineAr : PLATFORMS[0].cardHeadlineEn}
                      </h3>
                      <button
                        type="button"
                        onClick={() => openDedicatedPlatformPage('xena')}
                        className="w-full py-2 rounded-xl bg-white hover:bg-pink-200 text-black font-bold text-xs transition cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <span>{isAr ? 'شرح وتقديم زينا لايف' : 'Xena Live Page & Apply'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* FACE 3 (180deg): TANGO LIVE + DIRECT BUTTON TO TANGO PAGE */}
                  <div
                    style={{
                      transform: 'rotateY(180deg) translateZ(150px)',
                      backfaceVisibility: 'hidden',
                    }}
                    className="absolute inset-0 rounded-[28px] overflow-hidden bg-[#0a0814] border border-purple-400/40 shadow-[0_30px_90px_rgba(0,0,0,0.95)] flex flex-col justify-between p-5"
                  >
                    <img loading="lazy" decoding="async"
                      src={PLATFORMS[1].streamerImg}
                      alt="Tango Live Streamer"
                      className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-80"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/45" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full overflow-hidden">
                          <BrandIcons.Tango className="w-full h-full" />
                        </div>
                        <span>Tango Live</span>
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-600 text-[9px] font-bold text-white">
                        {isAr ? '+10,000 مذيع' : '10,000+ Hosts'}
                      </span>
                    </div>

                    <div className="relative z-10 my-auto flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl p-1 bg-black/65 backdrop-blur-md border border-white/25 shadow-2xl">
                        <BrandIcons.Tango className="w-full h-full rounded-xl" />
                      </div>
                    </div>

                    <div
                      dir={isAr ? 'rtl' : 'ltr'}
                      className="relative z-10 space-y-2 bg-black/80 backdrop-blur-xl p-3.5 rounded-2xl border border-white/15"
                    >
                      <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                        {isAr ? PLATFORMS[1].cardHeadlineAr : PLATFORMS[1].cardHeadlineEn}
                      </h3>
                      <button
                        type="button"
                        onClick={() => openDedicatedPlatformPage('tango')}
                        className="w-full py-2 rounded-xl bg-white hover:bg-purple-200 text-black font-bold text-xs transition cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <span>{isAr ? 'شرح وتقديم تانجو لايف' : 'Tango Live Page & Apply'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* FACE 4 (270deg): BIGO LIVE + DIRECT BUTTON TO BIGO PAGE */}
                  <div
                    style={{
                      transform: 'rotateY(270deg) translateZ(150px)',
                      backfaceVisibility: 'hidden',
                    }}
                    className="absolute inset-0 rounded-[28px] overflow-hidden bg-[#070b14] border border-cyan-400/40 shadow-[0_30px_90px_rgba(0,0,0,0.95)] flex flex-col justify-between p-5"
                  >
                    <img loading="lazy" decoding="async"
                      src={PLATFORMS[2].streamerImg}
                      alt="Bigo Live Streamer"
                      className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-80"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/45" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full overflow-hidden">
                          <BrandIcons.Bigo className="w-full h-full" />
                        </div>
                        <span>Bigo Live</span>
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-600 text-[9px] font-bold text-white">
                        {isAr ? '+1,500 مذيع' : '1,500+ Hosts'}
                      </span>
                    </div>

                    <div className="relative z-10 my-auto flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl p-1 bg-black/65 backdrop-blur-md border border-white/25 shadow-2xl">
                        <BrandIcons.Bigo className="w-full h-full rounded-xl" />
                      </div>
                    </div>

                    <div
                      dir={isAr ? 'rtl' : 'ltr'}
                      className="relative z-10 space-y-2 bg-black/80 backdrop-blur-xl p-3.5 rounded-2xl border border-white/15"
                    >
                      <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                        {isAr ? PLATFORMS[2].cardHeadlineAr : PLATFORMS[2].cardHeadlineEn}
                      </h3>
                      <button
                        type="button"
                        onClick={() => openDedicatedPlatformPage('bigo')}
                        className="w-full py-2 rounded-xl bg-white hover:bg-cyan-200 text-black font-bold text-xs transition cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <span>{isAr ? 'شرح وتقديم بيجو لايف' : 'Bigo Live Page & Apply'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Interactive Face Selector Pills under the 3D Spinning Box */}
                <div className="mt-5 sm:mt-7 flex items-center gap-1 sm:gap-1.5 bg-[#0c0c10]/95 backdrop-blur-2xl px-2.5 sm:px-3 py-1.5 rounded-full border border-white/15 shadow-2xl">
                  {[
                    { label: isAr ? '1. استوديو الأساطير' : '1. Studio', target: 0.03 },
                    { label: '2. Xena Live', target: 0.125 },
                    { label: '3. Tango Live', target: 0.22 },
                    { label: '4. Bigo Live', target: 0.315 },
                  ].map((face, idx) => {
                    const activeFace = Math.round(cubeRotationProgress * 3) === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => scrubToProgress(face.target)}
                        className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold transition cursor-pointer ${
                          activeFace
                            ? 'bg-white text-black shadow-sm'
                            : 'text-white/65 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {face.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ===============================================================
                STAGE LAYER C: PHASE 3 — DYNAMIC 3D ORBITAL ECOSYSTEM ENGINE
                (p = 0.30 -> 0.55)
                - overflow-hidden so mobile touch scroll is NEVER trapped inside a nested box!
               =============================================================== */}
            <div
              style={{
                opacity: particleStageOpacity,
                visibility: particleStageOpacity <= 0.005 ? 'hidden' : 'visible',
                transform: `scale(${0.92 + particleStageEnter * 0.08})`,
                pointerEvents: particleStageOpacity > 0.4 ? 'auto' : 'none',
                zIndex: 50,
              }}
              className="absolute inset-0 flex flex-col justify-center pt-12 sm:pt-14 pb-4 sm:pb-8 px-3 sm:px-8 md:px-14 will-change-transform bg-[#000000]/90 overflow-hidden"
            >
              <InteractiveEcosystemCommandHub
                isAr={isAr}
                scrollProgress={p}
                activePlatformId={hubPlatform}
                onSelectPlatform={setHubPlatform}
                onOpenPlatformPage={openDedicatedPlatformPage}
              />
            </div>

            {/* ===============================================================
                STAGE LAYER D: PHASE 4 — 3D INTERACTIVE COVERFLOW REEL DECK
                + INTERACTIVE SOCIAL MEDIA DOCK DIRECTLY UNDER THE VIDEOS!
                (p = 0.49 -> 0.77)
               =============================================================== */}
            <div
              style={{
                opacity: railOpacity,
                visibility: railOpacity <= 0.005 ? 'hidden' : 'visible',
                pointerEvents: railOpacity > 0.35 ? 'auto' : 'none',
                zIndex: 60,
              }}
              className="absolute inset-0 flex flex-col items-center justify-between pt-14 sm:pt-16 pb-4 sm:pb-6 px-3 sm:px-8 overflow-hidden bg-[#000000]"
            >
              {/* Subtle Apple-Pro Studio Spotlight */}
              <div
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[130px] opacity-55"
                style={{
                  background:
                    'radial-gradient(circle, rgba(255, 255, 255, 0.14) 0%, rgba(0, 210, 255, 0.18) 50%, transparent 100%)',
                }}
              />

              {/* Top Header + Interactive Reel Selector Pills */}
              <div
                className="relative z-20 w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 sm:pt-2 will-change-transform"
                style={{
                  transform: `translate3d(0, ${(1 - railEnter) * 20}px, 0)`,
                }}
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center p-1 shrink-0">
                    <img
                      src="/assets/legends_official_3d.webp"
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div dir={isAr ? 'rtl' : 'ltr'}>
                    <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-widest text-cyan-300">
                      {isAr ? 'الأكاديمية المرئية · 7 عروض رسمية' : 'Legends Academy · 7 Official Reels'}
                    </div>
                    <h2 className="text-sm sm:text-xl font-bold text-white">
                      {isAr ? 'فيديوهات وكالة الأساطير الرسمية' : 'Legends Official Video Reels'}
                    </h2>
                  </div>
                </div>

                {/* Chic Glass Selector Pills for the 7 Videos */}
                <div className="flex items-center gap-1 sm:gap-1.5 bg-[#0c0c10]/95 backdrop-blur-xl p-1 rounded-full border border-white/15 shadow-xl">
                  {YOUTUBE_VIDEOS.map((vid, idx) => {
                    const continuousActiveIdx = railSlideProgress * (YOUTUBE_VIDEOS.length - 1);
                    const isFocused = Math.round(continuousActiveIdx) === idx;
                    const targetPForCard = 0.5 + (idx / (YOUTUBE_VIDEOS.length - 1)) * 0.24;
                    return (
                      <button
                        key={vid.id}
                        type="button"
                        onClick={() => scrubToProgress(targetPForCard)}
                        className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                          isFocused
                            ? 'bg-white text-black shadow-md'
                            : 'text-white/60 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        0{idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3D COVERFLOW CYLINDRICAL STAGE */}
              <div
                className="relative z-20 my-auto w-full max-w-6xl h-[270px] sm:h-[360px] flex items-center justify-center"
                style={{ perspective: '1500px' }}
              >
                {YOUTUBE_VIDEOS.map((video, idx) => {
                  const continuousActiveIdx = railSlideProgress * (YOUTUBE_VIDEOS.length - 1);
                  const rel = idx - continuousActiveIdx;
                  const absRel = Math.abs(rel);
                  const isCenter = absRel < 0.45;
                  const isPlaying = playingYoutubeId === video.id;

                  const translateX = rel * (isMobile ? 128 : 186);
                  const translateZ = Math.cos(clamp(rel, -2.5, 2.5) * 0.6) * (isMobile ? 80 : 105) - 65;
                  const translateY = absRel * 10;
                  const rotateY = clamp(rel * -32, -62, 62);
                  const rotateZ = rel * 2.3 + velocitySkew * 0.25;
                  const cardScale = clamp(1.04 - absRel * 0.13, 0.7, 1.04);
                  const cardOpacity = clamp(1 - absRel * 0.25, 0.18, 1);
                  const zIndex = Math.round(60 - absRel * 15);
                  const targetPForCard = 0.5 + (idx / (YOUTUBE_VIDEOS.length - 1)) * 0.24;

                  return (
                    <div
                      key={video.id}
                      onClick={() => {
                        if (!isCenter) {
                          scrubToProgress(targetPForCard);
                        } else if (!isPlaying) {
                          setPlayingYoutubeId(video.id);
                        }
                      }}
                      style={{
                        transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${cardScale})`,
                        opacity: cardOpacity,
                        zIndex,
                      }}
                      className={`absolute w-[154px] sm:w-[212px] aspect-[9/16] rounded-[22px] sm:rounded-[26px] p-1 sm:p-1.5 transition-shadow duration-300 cursor-pointer will-change-transform select-none ${
                        isCenter
                          ? 'bg-gradient-to-b from-white/40 via-cyan-400/30 to-amber-400/25 shadow-[0_25px_80px_rgba(0,210,255,0.28)]'
                          : 'bg-white/[0.07] hover:bg-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)]'
                      }`}
                    >
                      <div className="relative w-full h-full rounded-[18px] sm:rounded-[20px] overflow-hidden bg-[#050508] border border-white/15 flex flex-col justify-between">
                        {isPlaying ? (
                          <>
                            {/* Local Studio Backdrop underneath the iframe so it's never blank while loading */}
                            <img loading="lazy" decoding="async"
                              src={video.poster}
                              alt=""
                              aria-hidden="true"
                              className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-50"
                            />
                            <iframe
                              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&playsinline=1`}
                              title={video.titleEn}
                              loading="lazy"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              className="relative z-10 w-full h-full border-0 bg-transparent pointer-events-auto"
                            />
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPlayingYoutubeId(null);
                              }}
                              className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/75 hover:bg-red-600 text-white border border-white/20 flex items-center justify-center transition cursor-pointer"
                              title="إغلاق الفيديو"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </>
                        ) : (
                          <div className="relative w-full h-full overflow-hidden group">
                            {/* Guaranteed Local Studio Poster Base Layer (Never blocked by CSP or network) */}
                            <img loading="lazy" decoding="async"
                              src={video.poster}
                              alt={video.titleAr}
                              className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-110"
                            />
                            {/* YouTube Official Thumbnail Layer on Top */}
                            <img
                              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                              alt={video.titleAr}
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                              className="relative z-10 w-full h-full object-cover scale-[1.85] group-hover:scale-[1.98] transition-transform duration-700 filter brightness-90 contrast-110"
                            />
                            <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black via-black/25 to-black/65" />

                            <div className="absolute top-2.5 left-2.5 right-2.5 z-30 flex items-center justify-between">
                              <span className="px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[8.5px] sm:text-[9px] font-mono text-white flex items-center gap-1">
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    isCenter ? 'bg-cyan-400 animate-ping' : 'bg-white/40'
                                  }`}
                                />
                                <span>0{idx + 1} / 0{YOUTUBE_VIDEOS.length}</span>
                              </span>
                              <img
                                src="/assets/legends_official_3d.webp"
                                alt=""
                                className="w-4 h-4 sm:w-5 sm:h-5 object-contain drop-shadow"
                              />
                            </div>

                            <div className="absolute inset-0 z-30 flex items-center justify-center">
                              <div
                                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-xl border flex items-center justify-center transition-all duration-300 ${
                                  isCenter
                                    ? 'bg-white text-black border-white scale-105 shadow-[0_0_30px_rgba(255,255,255,0.6)] group-hover:scale-115'
                                    : 'bg-black/60 text-white border-white/25 group-hover:bg-white group-hover:text-black'
                                }`}
                              >
                                <Play className="w-4 h-4 fill-current ml-0.5" />
                              </div>
                            </div>

                            <div
                              dir={isAr ? 'rtl' : 'ltr'}
                              className="absolute bottom-2 left-2 right-2 z-30 p-2 sm:p-2.5 rounded-xl bg-black/75 backdrop-blur-xl border border-white/15 flex items-center justify-between gap-1.5"
                            >
                              <div className="min-w-0">
                                <div className="text-[8.5px] sm:text-[9px] text-cyan-300 font-medium truncate">
                                  {isAr ? video.tagAr : video.tagEn}
                                </div>
                                <div className="text-[10.5px] sm:text-xs font-bold text-white truncate">
                                  {isAr ? video.titleAr : video.titleEn}
                                </div>
                              </div>

                              <div className="flex items-end gap-0.5 h-3 shrink-0 px-0.5">
                                <span className="w-0.5 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                <span className="w-0.5 h-3 bg-white rounded-full animate-pulse" />
                                <span className="w-0.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* =============================================================
                  PURE INTERACTIVE FLOATING 3D SOCIAL LOGOS (NO CARDS!) +
                  OFFICIAL QR CODE ORB — Appears one-by-one when scrolling down
                  with the mouse wheel, AND disappears one-by-one when scrolling
                  further down to the next section!
                 ============================================================= */}
              <div
                className="relative z-30 w-full max-w-5xl mx-auto pt-1 pb-1 flex flex-col items-center gap-2"
                style={{ perspective: '1200px' }}
              >
                <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-7 md:gap-9">
                  {SOCIAL_CHANNELS.map((soc, idx) => {
                    const SocIcon = soc.Icon;
                    // Staggered 3D Entrance on Scroll Down + Staggered 3D Exit as you scroll further down!
                    const enterP = smoothstep(0.495 + idx * 0.006, 0.545 + idx * 0.006, p);
                    const exitP = smoothstep(0.695 + idx * 0.006, 0.748 + idx * 0.006, p);
                    const logoVis = clamp(enterP - exitP, 0, 1);

                    const waveY =
                      (1 - enterP) * 52 -
                      exitP * 60 +
                      Math.sin(railSlideProgress * Math.PI * 2.5 + idx * 0.85) * 5;
                    const waveZ =
                      -(1 - logoVis) * 130 +
                      Math.cos(railSlideProgress * Math.PI * 2 + idx * 0.7) * 16;
                    const rotateY = (1 - enterP) * -65 + exitP * 65;
                    const rotateZ = Math.sin(railSlideProgress * Math.PI * 2 + idx) * 4;

                    return (
                      <a
                        key={soc.id}
                        href={soc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          transform: `translate3d(0, ${waveY}px, ${waveZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${
                            0.2 + logoVis * 0.8
                          })`,
                          opacity: logoVis,
                        }}
                        className="group relative flex flex-col items-center justify-center cursor-pointer select-none transition-transform duration-300 hover:scale-125 will-change-transform"
                        title={`${isAr ? soc.nameAr : soc.nameEn} (${soc.handle})`}
                      >
                        {/* Ambient Brand Glow Aura Behind Pure Logo */}
                        <span
                          className="pointer-events-none absolute -inset-2.5 sm:-inset-3 rounded-full blur-xl opacity-45 group-hover:opacity-95 transition-opacity duration-300"
                          style={{
                            background: `radial-gradient(circle, ${soc.brandColor} 0%, transparent 70%)`,
                          }}
                        />

                        {/* Subtle Rotating Tech Ring on Hover */}
                        <span
                          className="pointer-events-none absolute -inset-1.5 sm:-inset-2 rounded-full border border-dashed opacity-0 group-hover:opacity-80 group-hover:animate-spin transition-opacity duration-300"
                          style={{
                            borderColor: soc.brandColor,
                            animationDuration: '8s',
                          }}
                        />

                        {/* Pure Floating Platform Logo (No Card Box) */}
                        <div
                          className="relative w-10 h-10 sm:w-13 sm:h-13 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1.5"
                          style={{
                            filter: `drop-shadow(0 10px 22px ${soc.brandColor}80)`,
                          }}
                        >
                          <SocIcon className="w-full h-full object-contain" />
                        </div>

                        {/* Floating Label + Handle Pill Below Pure Icon */}
                        <span className="mt-1 text-[10px] sm:text-[11px] font-bold text-white/85 group-hover:text-white tracking-wide transition-colors">
                          {isAr ? soc.nameAr : soc.nameEn}
                        </span>
                        <span
                          dir="ltr"
                          className="hidden sm:block text-[9px] font-mono text-cyan-300/80 opacity-0 group-hover:opacity-100 transition-opacity -mt-0.5"
                        >
                          {soc.handle}
                        </span>
                      </a>
                    );
                  })}

                  {/* Official All-Platforms QR Code Floating Trigger Orb (Also enters & exits with scroll!) */}
                  {(() => {
                    const qrIdx = SOCIAL_CHANNELS.length;
                    const enterP = smoothstep(0.495 + qrIdx * 0.006, 0.545 + qrIdx * 0.006, p);
                    const exitP = smoothstep(0.695 + qrIdx * 0.006, 0.748 + qrIdx * 0.006, p);
                    const qrVis = clamp(enterP - exitP, 0, 1);
                    const qrY =
                      (1 - enterP) * 52 -
                      exitP * 60 +
                      Math.sin(railSlideProgress * Math.PI * 2.5 + qrIdx * 0.85) * 5;
                    const qrZ = -(1 - qrVis) * 130 + 15;
                    const qrRotY = (1 - enterP) * -65 + exitP * 65;

                    return (
                      <button
                        type="button"
                        onClick={() => setQrModalOpen(true)}
                        style={{
                          transform: `translate3d(0, ${qrY}px, ${qrZ}px) rotateY(${qrRotY}deg) scale(${
                            0.2 + qrVis * 0.8
                          })`,
                          opacity: qrVis,
                        }}
                        className="group relative flex flex-col items-center justify-center cursor-pointer select-none transition-transform duration-300 hover:scale-125 will-change-transform"
                        title={
                          isAr
                            ? 'امسح الكيو آر الرسمي لجميع منصات الوكالة'
                            : 'Scan Official All-Platforms QR Code'
                        }
                      >
                        <span
                          className="pointer-events-none absolute -inset-2.5 sm:-inset-3 rounded-full blur-xl opacity-55 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
                          }}
                        />
                        <div className="relative w-10 h-10 sm:w-13 sm:h-13 rounded-2xl p-1 bg-gradient-to-br from-amber-300 via-amber-500 to-cyan-400 shadow-[0_10px_28px_rgba(245,158,11,0.55)] transition-transform duration-300 group-hover:-translate-y-1.5 flex items-center justify-center overflow-hidden">
                          <img loading="lazy" decoding="async"
                            src="/assets/legends_qr_official.webp"
                            alt="Legends Agency Official QR"
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                        <span className="mt-1 text-[10px] sm:text-[11px] font-bold text-amber-300 group-hover:text-white tracking-wide flex items-center gap-1">
                          <QrCode className="w-3 h-3" />
                          <span>{isAr ? 'رمز QR' : 'QR Code'}</span>
                        </span>
                      </button>
                    );
                  })()}
                </div>
              </div>
            </div>

            {/* ===============================================================
                STAGE LAYER E: PHASE 5 — 3D CAMERA FLY-THROUGH OF 10 REAL LIVE STREAMERS
                (p = 0.71 -> 0.95)
               =============================================================== */}
            <div
              style={{
                opacity: flyOpacity,
                visibility: flyOpacity <= 0.005 ? 'hidden' : 'visible',
                pointerEvents: flyOpacity > 0.4 ? 'auto' : 'none',
                perspective: '1100px',
                zIndex: 70,
              }}
              className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#000000]"
            >
              {LIVE_CREATORS.map((creator) => {
                const localP = clamp(0.22 + flyProgress * 1.15 - creator.zOffset * 0.55, 0, 1);
                const translateZ = -850 + localP * 1450;
                const cardOpacity =
                  smoothstep(0.0, 0.16, localP) * (1 - smoothstep(0.84, 1.0, localP));
                const PlatformLogo =
                  creator.platformId === 'xena'
                    ? BrandIcons.Xena
                    : creator.platformId === 'tango'
                    ? BrandIcons.Tango
                    : BrandIcons.Bigo;

                return (
                  <div
                    key={creator.id}
                    onClick={() => openDedicatedPlatformPage(creator.platformId)}
                    style={{
                      transform: `translate3d(${creator.x}vw, ${creator.y}vh, ${translateZ}px)`,
                      opacity: cardOpacity,
                    }}
                    className="absolute w-40 sm:w-64 rounded-2xl overflow-hidden border border-white/15 bg-[#09090d] shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col will-change-transform cursor-pointer"
                  >
                    <div className="relative w-full aspect-[4/4.3] overflow-hidden bg-black">
                      <img
                        src={creator.image}
                        alt={creator.labelAr}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/15">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[8.5px] sm:text-[9px] font-bold text-white tracking-wider">
                          LIVE
                        </span>
                      </div>
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-[8.5px] sm:text-[9px] text-cyan-300 font-mono">
                        {creator.viewers}
                      </div>
                    </div>

                    <div
                      dir={isAr ? 'rtl' : 'ltr'}
                      className="p-2 sm:p-3 bg-[#09090d] border-t border-white/10 flex items-center justify-between gap-2"
                    >
                      <span className="text-[10px] sm:text-[11px] font-medium text-white/90 truncate">
                        {isAr ? creator.labelAr : creator.labelEn}
                      </span>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden shrink-0 border border-white/20">
                        <PlatformLogo className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Center Converging Finale Portal Card */}
              <div
                style={{
                  transform: `translate3d(0, 0, ${-600 + flyProgress * 600}px) scale(${
                    0.45 + flyProgress * 0.55
                  })`,
                }}
                className="relative z-20 w-[290px] sm:w-[500px] h-[200px] sm:h-[300px] rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 border border-white/20 bg-[#08080c] shadow-[0_0_120px_rgba(0,0,0,0.95)] flex items-center justify-between overflow-hidden will-change-transform"
              >
                <div className="relative z-10">
                  <div className="text-[10px] sm:text-xs text-amber-300 mb-1.5 sm:mb-2 font-mono uppercase tracking-wider">
                    LEGENDS AGENCY
                  </div>
                  <h3 className="text-2xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
                    {isAr ? 'اصنع نجوميتك' : 'Build beyond'}
                    <span className="block text-white/50 mt-1">
                      {isAr ? 'مع الأساطير' : 'all limits'}
                    </span>
                  </h3>
                </div>
                <div className="relative z-10">
                  <LegendsProEmblem3D
                    className="w-28 h-28 sm:w-48 sm:h-48"
                    rotationDeg={flyProgress * 360}
                    showOrbital={false}
                  />
                </div>
              </div>
            </div>

            {/* ===============================================================
                STAGE LAYER F: PHASE 6 — APPLE-BLACK FINALE & DEDICATED APP PORTALS
                (p = 0.88 -> 1.00)
               =============================================================== */}
            <div
              style={{
                opacity: finaleEnter,
                visibility: finaleEnter <= 0.005 ? 'hidden' : 'visible',
                pointerEvents: finaleEnter > 0.5 ? 'auto' : 'none',
                zIndex: 80,
              }}
              className="absolute inset-0 bg-[#000000] p-2 sm:p-6 md:p-9 flex items-center justify-center"
            >
              <div className="relative w-full h-full rounded-[26px] sm:rounded-[32px] overflow-hidden border border-white/15 p-5 sm:p-12 md:p-16 flex flex-col justify-between bg-[#07070a] shadow-[0_30px_100px_rgba(0,0,0,1)]">
                <div className="relative z-20 my-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 pt-8 sm:pt-0">
                  <div dir={isAr ? 'rtl' : 'ltr'} className="lg:col-span-7 space-y-4 sm:space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-[10.5px] sm:text-xs text-amber-300">
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <span>
                        {isAr
                          ? 'الوكيل الرسمي — تانجو (+10,000) · زينا (+2,000) · بيجو (+1,500)'
                          : 'Official #1 Agency — Tango (10K+) · Xena (2K+) · Bigo (1.5K+)'}
                      </span>
                    </div>
                    <h2 className="text-[32px] sm:text-[60px] md:text-[74px] font-bold tracking-[-0.035em] leading-[1.02]">
                      <span className="block text-white">
                        {isAr ? 'وكالة الأساطير' : 'Legends Agency'}
                      </span>
                      <span className="block text-white/45 mt-1">
                        {isAr ? 'لصناعة النجوم' : 'for Star Creation'}
                      </span>
                    </h2>
                    <p className="text-white/75 text-xs sm:text-base max-w-xl leading-relaxed">
                      {isAr
                        ? 'اختر التطبيق المناسب لك لتصفح الدليل الشامل لنظام التطوير والالتزام وتعبئة استمارة التقديم المعتمدة، أو قدّم طلبك المباشر الآن.'
                        : 'Select your preferred platform below to view its full guide and application form, or apply directly now.'}
                    </p>
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                      <button
                        type="button"
                        onClick={() => setApplyModalOpen(true)}
                        className="px-5 sm:px-7 py-3 sm:py-4 rounded-full bg-white text-black text-xs sm:text-sm font-bold hover:bg-cyan-300 transition shadow-xl cursor-pointer flex items-center gap-2"
                      >
                        <img
                          src="/assets/legends_official_3d.webp"
                          alt=""
                          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                        />
                        <span>{isAr ? 'افتح استمارة التقديم الموحدة' : 'Open Application Form'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setQrModalOpen(true)}
                        className="px-4 sm:px-5 py-3 sm:py-4 rounded-full bg-amber-400/15 hover:bg-amber-400 hover:text-black border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold transition shadow-xl cursor-pointer flex items-center gap-2"
                      >
                        <QrCode className="w-4 h-4" />
                        <span>{isAr ? 'امسح QR كافة المنصات الرسمية' : 'Scan All-Platforms QR'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex items-center justify-center lg:justify-end gap-4 sm:gap-5">
                    {/* Interactive Official QR Code Preview Card in Finale */}
                    <button
                      type="button"
                      onClick={() => setQrModalOpen(true)}
                      className="group relative w-32 sm:w-52 rounded-[20px] sm:rounded-[24px] p-1 sm:p-1.5 bg-gradient-to-b from-amber-300/60 via-amber-500/30 to-cyan-400/30 shadow-[0_20px_60px_rgba(245,158,11,0.3)] hover:scale-105 transition-transform duration-300 cursor-pointer"
                      title={isAr ? 'اضغط لتكبير رمز QR الرسمي' : 'Click to enlarge official QR code'}
                    >
                      <div className="relative rounded-[16px] sm:rounded-[20px] overflow-hidden bg-[#05070e]">
                        <img loading="lazy" decoding="async"
                          src="/assets/legends_qr_official.webp"
                          alt="Legends Official QR Code"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </button>

                    <LegendsProEmblem3D
                      className="w-32 h-32 sm:w-56 sm:h-56"
                      rotationDeg={p * 360}
                      glowIntensity={1.3}
                    />
                  </div>
                </div>

                {/* Bottom Bar with Direct Links to Each Dedicated App Page */}
                <div className="relative z-20 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    {PLATFORMS.map((pl) => {
                      const IconComp = pl.LogoComponent;
                      return (
                        <button
                          key={pl.id}
                          type="button"
                          onClick={() => openDedicatedPlatformPage(pl.id)}
                          className="px-4 py-2.5 rounded-full bg-white/[0.06] hover:bg-white hover:text-black border border-white/15 text-xs font-bold text-white flex items-center gap-2 transition cursor-pointer"
                        >
                          <div className="w-5 h-5 rounded-full overflow-hidden shrink-0">
                            <IconComp className="w-full h-full" />
                          </div>
                          <span>
                            {isAr
                              ? `صفحة وشرح وتقديم ${pl.shortAr}`
                              : `${pl.nameEn} Guide & Apply`}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      );
                    })}
                  </div>
                  <button
                    type="button"
                    onClick={() => scrubToProgress(0)}
                    className="text-xs text-white/60 hover:text-white transition cursor-pointer"
                  >
                    {isAr ? '↑ العودة للرئيسية' : '↑ Back to top'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* =====================================================================
          INTERACTIVE MULTI-PLATFORM APPLICATION MODAL
         ===================================================================== */}
      {applyModalOpen && (
        <div
          dir="rtl"
          className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="relative w-full max-w-2xl rounded-[32px] bg-[#0a0a0f] border border-white/15 p-6 sm:p-9 shadow-[0_30px_100px_rgba(0,0,0,1)] my-8">
            <button
              type="button"
              onClick={() => setApplyModalOpen(false)}
              className="absolute top-5 left-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-6 flex items-center gap-3.5">
              <img
                src="/assets/legends_official_3d.webp"
                alt="Legends Agency"
                className="w-16 h-16 object-contain"
              />
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-amber-300 text-xs font-medium mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>استمارة الانضمام المعتمدة — وكالة الأساطير</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  اختر التطبيقات وقدّم طلبك الآن
                </h3>
              </div>
            </div>

            <form onSubmit={(e) => handleWhatsAppSubmit(e)} className="space-y-5">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-2.5">
                  1. اختر تطبيق البث المطلوب (أو افتح الصفحة المستقلة لكل تطبيق):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PLATFORMS.map((app) => {
                    const isSelected = selectedApps.includes(app.nameEn);
                    const AppLogo = app.LogoComponent;
                    return (
                      <div
                        key={app.id}
                        className={`p-3 rounded-2xl border transition-all flex flex-col justify-between gap-2 ${
                          isSelected
                            ? 'bg-white/[0.1] border-white shadow-[0_0_25px_rgba(255,255,255,0.15)]'
                            : 'bg-white/[0.03] border-white/10'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleAppSelection(app.nameEn)}
                          className="w-full text-right flex items-center justify-between cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/20 shrink-0">
                              <AppLogo className="w-full h-full" />
                            </div>
                            <div>
                              <div className="text-xs sm:text-sm font-bold text-white">
                                {app.nameEn}
                              </div>
                              <div className="text-[10px] text-white/60">{app.badgeAr}</div>
                            </div>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                              isSelected
                                ? 'bg-white text-black border-white'
                                : 'border-white/30 text-transparent'
                            }`}
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setApplyModalOpen(false);
                            openDedicatedPlatformPage(app.id);
                          }}
                          className="w-full py-1 rounded-lg bg-white/[0.06] hover:bg-white hover:text-black text-[10px] font-semibold text-cyan-300 transition cursor-pointer"
                        >
                          فتح صفحة شرح {app.shortAr} ↗
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    الاسم بالكامل أو اللقب الفني
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="مثال: سارة أحمد"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm placeholder:text-white/35 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    الدولة / المدينة
                  </label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="مصر، السعودية، الإمارات..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm placeholder:text-white/35 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    رقم الواتساب للتواصل
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+20 10..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm placeholder:text-white/35 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    الخبرة السابقة
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#12131a] border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400"
                  >
                    <option value="خبير / لدي خبرة سابقة">لدي خبرة سابقة في البث المباشر</option>
                    <option value="مبتدئ / أرغب بالتدريب والبدء">مبتدئ وأرغب بالتدريب والبدء</option>
                    <option value="مذيع حالي وأرغب بالنقل لوكالة الأساطير">
                      مذيع حالي وأرغب بالانضمام لوكالة الأساطير
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">
                  آيدي الحساب (ID) أو ملاحظات إضافية (اختياري)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="اكتب الآيدي الخاص بك أو أي استفسار..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm placeholder:text-white/35 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-white/75">
                  التطبيقات المختارة:{' '}
                  <span className="font-bold text-white">{selectedApps.join(' + ')}</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-cyan-300 text-black font-bold text-sm transition cursor-pointer flex items-center justify-center gap-2 shadow-xl"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال الطلب عبر واتساب الآن</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================================
          OFFICIAL ALL-PLATFORMS QR CODE MODAL (`/assets/legends_qr_official.webp`)
         ===================================================================== */}
      {qrModalOpen && (
        <div
          dir={isAr ? 'rtl' : 'ltr'}
          onClick={() => setQrModalOpen(false)}
          className="fixed inset-0 z-[210] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-[32px] bg-[#060810] border border-amber-400/40 p-5 sm:p-6 shadow-[0_30px_100px_rgba(245,158,11,0.3)] flex flex-col items-center gap-4"
          >
            <button
              type="button"
              onClick={() => setQrModalOpen(false)}
              className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-1 pt-1">
              <div className="text-[11px] font-mono uppercase tracking-widest text-amber-300">
                LEGENDS AGENCY · OFFICIAL QR
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {isAr
                  ? 'امسح للوصول المباشر لكافة المنصات الرسمية'
                  : 'Scan for Direct Access to All Official Platforms'}
              </h3>
            </div>

            <div className="w-full rounded-[24px] overflow-hidden border border-amber-400/30 shadow-2xl bg-[#04060c]">
              <img loading="lazy" decoding="async"
                src="/assets/legends_qr_official.webp"
                alt="Legends Agency Official QR Code"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Pure Floating Social Logos Row inside QR Modal as well */}
            <div className="w-full pt-2 flex items-center justify-center gap-4 flex-wrap">
              {SOCIAL_CHANNELS.map((soc) => {
                const SocIcon = soc.Icon;
                return (
                  <a
                    key={soc.id}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center hover:scale-125 transition-transform"
                    title={`${isAr ? soc.nameAr : soc.nameEn} (${soc.handle})`}
                    style={{
                      filter: `drop-shadow(0 6px 14px ${soc.brandColor}80)`,
                    }}
                  >
                    <SocIcon className="w-full h-full object-contain" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MonoformSite;
