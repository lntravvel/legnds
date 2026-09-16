export interface EarningTier {
  level: number;
  coins: number;
  crystals: number;
  baseSalaryUSD: number;
  bonusUSD: number;
  totalSalaryUSD: number;
}

export interface WithdrawalMethod {
  countryCode: string;
  country: {
    ar: string;
    en: string;
    ru: string;
    ro: string;
    fr: string;
    it: string;
  };
  flag: string;
  methods: string[];
}

export const ACTIVITY_RULES = {
  minHoursMonth: 15,
  minDaysMonth: 10,
  minHoursPerActiveDay: 1,
  withdrawalWindow: '7 - 11',
};

export const EARNING_TIERS: EarningTier[] = [
  { level: 1, coins: 250000, crystals: 50000, baseSalaryUSD: 21, bonusUSD: 3, totalSalaryUSD: 24 },
  { level: 2, coins: 500000, crystals: 100000, baseSalaryUSD: 41, bonusUSD: 7, totalSalaryUSD: 48 },
  { level: 3, coins: 1000000, crystals: 200000, baseSalaryUSD: 81, bonusUSD: 13, totalSalaryUSD: 94 },
  { level: 4, coins: 1500000, crystals: 300000, baseSalaryUSD: 117, bonusUSD: 19, totalSalaryUSD: 136 },
  { level: 5, coins: 2500000, crystals: 500000, baseSalaryUSD: 194, bonusUSD: 31, totalSalaryUSD: 225 },
  { level: 6, coins: 3500000, crystals: 700000, baseSalaryUSD: 273, bonusUSD: 44, totalSalaryUSD: 317 },
  { level: 7, coins: 5000000, crystals: 1000000, baseSalaryUSD: 390, bonusUSD: 63, totalSalaryUSD: 453 },
  { level: 8, coins: 7500000, crystals: 1500000, baseSalaryUSD: 579, bonusUSD: 93, totalSalaryUSD: 672 },
  { level: 9, coins: 10000000, crystals: 2000000, baseSalaryUSD: 771, bonusUSD: 124, totalSalaryUSD: 895 },
  { level: 10, coins: 12500000, crystals: 2500000, baseSalaryUSD: 965, bonusUSD: 155, totalSalaryUSD: 1120 },
  { level: 11, coins: 15000000, crystals: 3000000, baseSalaryUSD: 1157, bonusUSD: 186, totalSalaryUSD: 1343 },
  { level: 12, coins: 20000000, crystals: 4000000, baseSalaryUSD: 1529, bonusUSD: 246, totalSalaryUSD: 1775 },
  { level: 13, coins: 25000000, crystals: 5000000, baseSalaryUSD: 1911, bonusUSD: 308, totalSalaryUSD: 2219 },
  { level: 14, coins: 30000000, crystals: 6000000, baseSalaryUSD: 2293, bonusUSD: 369, totalSalaryUSD: 2662 },
  { level: 15, coins: 35000000, crystals: 7000000, baseSalaryUSD: 2675, bonusUSD: 431, totalSalaryUSD: 3106 },
  { level: 16, coins: 40000000, crystals: 8000000, baseSalaryUSD: 3057, bonusUSD: 493, totalSalaryUSD: 3550 },
  { level: 17, coins: 45000000, crystals: 9000000, baseSalaryUSD: 3440, bonusUSD: 554, totalSalaryUSD: 3994 },
  { level: 18, coins: 50000000, crystals: 10000000, baseSalaryUSD: 3821, bonusUSD: 616, totalSalaryUSD: 4437 },
  { level: 19, coins: 75000000, crystals: 15000000, baseSalaryUSD: 5732, bonusUSD: 924, totalSalaryUSD: 6656 },
  { level: 20, coins: 100000000, crystals: 20000000, baseSalaryUSD: 7644, bonusUSD: 1231, totalSalaryUSD: 8875 },
  { level: 21, coins: 125000000, crystals: 25000000, baseSalaryUSD: 9554, bonusUSD: 1539, totalSalaryUSD: 11093 },
  { level: 22, coins: 150000000, crystals: 30000000, baseSalaryUSD: 11465, bonusUSD: 1847, totalSalaryUSD: 13312 },
  { level: 23, coins: 200000000, crystals: 40000000, baseSalaryUSD: 15287, bonusUSD: 2463, totalSalaryUSD: 17750 },
  { level: 24, coins: 250000000, crystals: 50000000, baseSalaryUSD: 19109, bonusUSD: 3079, totalSalaryUSD: 22188 },
  { level: 25, coins: 300000000, crystals: 60000000, baseSalaryUSD: 22930, bonusUSD: 3694, totalSalaryUSD: 26624 },
  { level: 26, coins: 350000000, crystals: 70000000, baseSalaryUSD: 22752, bonusUSD: 4310, totalSalaryUSD: 31062 },
  { level: 27, coins: 450000000, crystals: 80000000, baseSalaryUSD: 30574, bonusUSD: 4926, totalSalaryUSD: 35500 },
  { level: 28, coins: 490000000, crystals: 80000000, baseSalaryUSD: 30574, bonusUSD: 5566, totalSalaryUSD: 33500 },
  { level: 29, coins: 500000000, crystals: 100000000, baseSalaryUSD: 38369, bonusUSD: 6182, totalSalaryUSD: 44551 },
  { level: 30, coins: 750000000, crystals: 150000000, baseSalaryUSD: 57552, bonusUSD: 9272, totalSalaryUSD: 66824 },
];

export const WITHDRAWAL_COUNTRIES: WithdrawalMethod[] = [
  {
    countryCode: 'SA',
    country: {
      ar: 'المملكة العربية السعودية',
      en: 'Saudi Arabia',
      ru: 'Саудовская Аравия',
      ro: 'Arabia Saudită',
      fr: 'Arabie Saoudite',
      it: 'Arabia Saudita',
    },
    flag: '🇸🇦',
    methods: ['Bank Transfer', 'USDT (TRC20)'],
  },
  {
    countryCode: 'EG',
    country: {
      ar: 'مصر',
      en: 'Egypt',
      ru: 'Египет',
      ro: 'Egipt',
      fr: 'Égypte',
      it: 'Egitto',
    },
    flag: '🇪🇬',
    methods: ['Vodafone Cash', 'InstaPay', 'Bank Transfer', 'USDT (TRC20)'],
  },
  {
    countryCode: 'AE',
    country: {
      ar: 'الإمارات العربية المتحدة',
      en: 'United Arab Emirates',
      ru: 'ОАЭ',
      ro: 'Emiratele Arabe Unite',
      fr: 'Émirats arabes unis',
      it: 'Emirati Arabi Uniti',
    },
    flag: '🇦🇪',
    methods: ['Bank Transfer', 'USDT (TRC20)'],
  },
  {
    countryCode: 'IQ',
    country: {
      ar: 'العراق',
      en: 'Iraq',
      ru: 'Ирак',
      ro: 'Irak',
      fr: 'Irak',
      it: 'Iraq',
    },
    flag: '🇮🇶',
    methods: ['Zain Cash', 'USDT (TRC20)', 'Local Exchange Offices (مكاتب صرافة معتمدة)'],
  },
  {
    countryCode: 'DZ',
    country: {
      ar: 'الجزائر',
      en: 'Algeria',
      ru: 'Алжир',
      ro: 'Algeria',
      fr: 'Algérie',
      it: 'Algeria',
    },
    flag: '🇩🇿',
    methods: ['Post Office (بريد الجزائر CCP)', 'USDT (TRC20)'],
  },
  {
    countryCode: 'MA',
    country: {
      ar: 'المغرب',
      en: 'Morocco',
      ru: 'Марокко',
      ro: 'Maroc',
      fr: 'Maroc',
      it: 'Marocco',
    },
    flag: '🇲🇦',
    methods: ['Wafa Cash', 'Cash Plus', 'USDT (TRC20)'],
  },
  {
    countryCode: 'TN',
    country: {
      ar: 'تونس',
      en: 'Tunisia',
      ru: 'Тунис',
      ro: 'Tunisia',
      fr: 'Tunisie',
      it: 'Tunisia',
    },
    flag: '🇹🇳',
    methods: ['Post Office (البريد التونسي)', 'USDT (TRC20)'],
  },
  {
    countryCode: 'JO',
    country: {
      ar: 'الأردن',
      en: 'Jordan',
      ru: 'Иордания',
      ro: 'Iordania',
      fr: 'Jordanie',
      it: 'Giordania',
    },
    flag: '🇯🇴',
    methods: ['Zain Cash', 'USDT (TRC20)', 'Local Exchange Offices'],
  },
  {
    countryCode: 'KW',
    country: {
      ar: 'الكويت',
      en: 'Kuwait',
      ru: 'Кувейт',
      ro: 'Kuweit',
      fr: 'Koweït',
      it: 'Kuwait',
    },
    flag: '🇰🇼',
    methods: ['Bank Transfer', 'USDT (TRC20)'],
  },
  {
    countryCode: 'QA',
    country: {
      ar: 'قطر',
      en: 'Qatar',
      ru: 'Катар',
      ro: 'Qatar',
      fr: 'Qatar',
      it: 'Qatar',
    },
    flag: '🇶🇦',
    methods: ['Bank Transfer', 'USDT (TRC20)'],
  },
  {
    countryCode: 'BH',
    country: {
      ar: 'البحرين',
      en: 'Bahrain',
      ru: 'Бахрейн',
      ro: 'Bahrain',
      fr: 'Bahreïn',
      it: 'Bahrein',
    },
    flag: '🇧🇭',
    methods: ['Bank Transfer', 'USDT (TRC20)'],
  },
  {
    countryCode: 'OM',
    country: {
      ar: 'سلطنة عمان',
      en: 'Oman',
      ru: 'Оман',
      ro: 'Oman',
      fr: 'Oman',
      it: 'Oman',
    },
    flag: '🇴🇲',
    methods: ['Bank Transfer', 'USDT (TRC20)'],
  },
  {
    countryCode: 'LB',
    country: {
      ar: 'لبنان',
      en: 'Lebanon',
      ru: 'Ливан',
      ro: 'Liban',
      fr: 'Liban',
      it: 'Libano',
    },
    flag: '🇱🇧',
    methods: ['Cash Offices (Whish / OMT)', 'USDT (TRC20)'],
  },
  {
    countryCode: 'PS',
    country: {
      ar: 'فلسطين',
      en: 'Palestine',
      ru: 'Палестина',
      ro: 'Palestina',
      fr: 'Palestine',
      it: 'Palestina',
    },
    flag: '🇵🇸',
    methods: ['Exchange Offices', 'USDT (TRC20)'],
  },
  {
    countryCode: 'SY',
    country: {
      ar: 'سوريا',
      en: 'Syria',
      ru: 'Сирия',
      ro: 'Siria',
      fr: 'Syrie',
      it: 'Siria',
    },
    flag: '🇸🇾',
    methods: ['Local Exchange Offices (مكاتب صرافة معتمدة بكافة المحافظات)', 'USDT (TRC20)'],
  },
  {
    countryCode: 'YE',
    country: {
      ar: 'اليمن',
      en: 'Yemen',
      ru: 'Йемен',
      ro: 'Yemen',
      fr: 'Yémen',
      it: 'Yemen',
    },
    flag: '🇾🇪',
    methods: ['Exchange Offices (الكريمي ومكاتب الصرافة)', 'USDT (TRC20)'],
  },
  {
    countryCode: 'LY',
    country: {
      ar: 'ليبيا',
      en: 'Libya',
      ru: 'Ливия',
      ro: 'Libia',
      fr: 'Libye',
      it: 'Libia',
    },
    flag: '🇱🇾',
    methods: ['Cash Offices', 'USDT (TRC20)'],
  },
  {
    countryCode: 'SD',
    country: {
      ar: 'السودان',
      en: 'Sudan',
      ru: 'Судан',
      ro: 'Sudan',
      fr: 'Soudan',
      it: 'Sudan',
    },
    flag: '🇸🇩',
    methods: ['Exchange Offices / Bank of Khartoum', 'USDT (TRC20)'],
  },
];
