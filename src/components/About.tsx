import { motion } from 'motion/react';
import { Shield, Sparkles, TrendingUp, Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function About() {
  const { t, lang } = useLanguage();

  const badges = [
    {
      icon: Shield,
      text: {
        ar: 'حماية وحصانة الحسابات',
        en: 'Account Protection & Safety',
        ru: 'Защита и безопасность аккаунтов',
        ro: 'Protecția și siguranța conturilor',
        fr: 'Protection et sécurité des comptes',
        it: 'Protezione e sicurezza degli account'
      },
      color: '#00f3ff'
    },
    {
      icon: TrendingUp,
      text: {
        ar: 'أعلى بونصات كاش شهرية',
        en: 'Highest Monthly Cash Bonuses',
        ru: 'Высшие денежные бонусы',
        ro: 'Cele mai mari bonusuri lunare',
        fr: 'Bonus mensuels les plus élevés',
        it: 'I più alti bonus mensili'
      },
      color: '#fbbf24'
    },
    {
      icon: Award,
      text: {
        ar: 'كوتشينج وصناعة النجوم',
        en: 'Star Coaching & Growth',
        ru: 'Коучинг и развитие звезд',
        ro: 'Coaching și promovare de elită',
        fr: 'Coaching et création de stars',
        it: 'Coaching e crescita da star'
      },
      color: '#a855f7'
    }
  ];

  return (
    <section className="relative z-10 w-full px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        className="group relative overflow-hidden rounded-[22px] sm:rounded-[26px] p-4 sm:p-5 md:p-6 bg-gradient-to-b from-white/[0.04] via-[#050b18]/85 to-[#02050c]/98 backdrop-blur-2xl border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
      >
        {/* Background Cinematic Studio Image */}
        <img 
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-all duration-700 group-hover:scale-105 filter saturate-125 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02050c] via-[#040916]/85 to-[#040916]/50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Compact Content Container */}
        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-400/35 backdrop-blur-md mb-2 shadow-[0_0_12px_rgba(0,243,255,0.15)]">
            <Sparkles size={11} className="text-cyan-300" />
            <span className="text-[10px] font-mono tracking-widest text-cyan-200 uppercase font-bold">
              {lang === 'ar' ? 'نبذة عن الوكالة' : 'ABOUT LEGENDS'}
            </span>
          </div>

          {/* Headline */}
          <h2 className={`text-[18px] sm:text-[21px] md:text-[23px] font-bold text-white tracking-wide mb-2 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t(
              'وكالة الأساطير — المنظومة الأقوى لإدارة وتطوير المذيعين',
              'Legends Agency — The Premier Broadcaster Network',
              'Агентство Legends — Сеть №1 для авторов прямых эфиров',
              'Agenția Legends — Rețeaua Premieră pentru Streameri',
              'Agence Legends — Le Premier Réseau de Gestion de Créateurs',
              'Legends Agency — La Rete Leader per Emittenti Live'
            )}
          </h2>

          {/* Concise Narrative */}
          <p className={`text-white/70 text-[12.5px] sm:text-[13.5px] leading-relaxed max-w-2xl mx-auto mb-4 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t(
              'الشبكة الرسمية الرائدة لإدارة وتطوير صناع المحتوى على زينا لايف في الشرق الأوسط. نوفر الحماية التقنية الشاملة، العلاقات المباشرة مع إدارة التطبيق، وأعلى نسبة بونصات كاش في المنطقة.',
              'The leading accredited network managing top creators on Zeena Live in MENA. We combine full account immunity, direct platform relations, and the region\'s highest cash bonus share.',
              'Ведущая аккредитованная сеть для топ-авторов Zeena Live. Полная защита аккаунтов, прямая связь с платформой и максимальные денежные бонусы.',
              'Rețeaua principală acreditată pentru creatorii de top pe Zeena Live. Protecție completă, relații directe și cele mai mari bonusuri.',
              'Le premier réseau accrédité pour les créateurs d\'élite sur Zeena Live. Protection complète, relations directes et bonus maximaux.',
              'La rete leader accreditata per i migliori creator su Zeena Live. Protezione totale, rapporti diretti e massimi bonus in denaro.'
            )}
          </p>

          {/* 3 Compact Horizontal Bento Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 w-full">
            {badges.map((item, bIdx) => {
              const Icon = item.icon;

              return (
                <div
                  key={bIdx}
                  className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-white/20 transition-all text-start"
                >
                  <div 
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${item.color}18`,
                      border: `1px solid ${item.color}40`,
                      color: item.color
                    }}
                  >
                    <Icon size={14} />
                  </div>
                  <span className={`text-[11.5px] sm:text-[12px] font-semibold text-white/85 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                    {item.text[lang]}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Minimal Bottom Bar */}
          <div className="mt-3.5 pt-2.5 border-t border-white/[0.05] flex items-center justify-center gap-3 sm:gap-5 text-white/45 text-[10px] sm:text-[10.5px] font-mono">
            <div className="flex items-center gap-1 text-pink-300/80">
              <CheckCircle2 size={11} className="text-pink-400" />
              <span>OFFICIAL ACCREDITED</span>
            </div>
            <span>•</span>
            <span>24/7 VIP SUPPORT</span>
            <span>•</span>
            <span className="text-pink-300/90 font-bold">ZEENA LIVE OFFICIAL</span>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
