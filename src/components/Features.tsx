import { motion } from 'motion/react';
import { Headset, DollarSign, Award, Rocket } from 'lucide-react';
import { useLanguage, Language } from '../i18n/LanguageContext';

const FEATURES = [
  {
    id: 1,
    icon: Headset,
    title: {
      ar: 'دعم فني خاص',
      en: '24/7 VIP Support',
      ru: 'Круглосуточная VIP-поддержка',
      ro: 'Suport VIP 24/7',
      fr: 'Support VIP 24/7',
      it: 'Supporto VIP 24/7'
    },
    bgImage: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    icon: DollarSign,
    title: {
      ar: 'أعلى نسبة أرباح',
      en: 'Highest Revenue',
      ru: 'Самый высокий доход',
      ro: 'Cele mai mari venituri',
      fr: 'Revenus les plus élevés',
      it: 'Entrate più alte'
    },
    bgImage: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    icon: Award,
    title: {
      ar: 'شارات رسمية',
      en: 'Official Badges',
      ru: 'Официальные значки',
      ro: 'Insigne oficiale',
      fr: 'Badges officiels',
      it: 'Badge ufficiali'
    },
    bgImage: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 4,
    icon: Rocket,
    title: {
      ar: 'تطوير وتدريب',
      en: 'Rapid Growth',
      ru: 'Развитие и обучение',
      ro: 'Creștere rapidă',
      fr: 'Croissance rapide',
      it: 'Crescita rapida'
    },
    bgImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop'
  },
];

export function Features() {
  const { lang, dir } = useLanguage();
  return (
    <section className="relative z-10 w-full px-5 flex flex-col items-center justify-center max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 w-full">
        {FEATURES.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.05, rotateZ: idx % 2 === 0 ? 1 : -1 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 200, damping: 18 }}
              className="group relative flex flex-col items-start justify-between p-4 sm:p-5 bg-[#0a0a0a] border border-white/[0.08] hover:border-white/20 rounded-[20px] sm:rounded-[28px] overflow-hidden transition-all duration-500 hover:bg-[#111] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] aspect-square cursor-pointer"
            >
              {/* Background Image with Cinematic Depth */}
              <img 
                src={feature.bgImage}
                alt=""
                aria-hidden="true"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110 filter saturate-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] via-[#060a14]/80 to-[#060a14]/40 group-hover:from-[#060a14]/90 group-hover:via-[#060a14]/65 group-hover:to-[#060a14]/25 transition-all duration-500 pointer-events-none" />

              {/* Subtle hover glow matching BentoCard */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
              
              <div className="relative flex items-center justify-between w-full mb-4 z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-[18px] bg-white/10 backdrop-blur-md text-white/90 group-hover:bg-[var(--color-brand-primary)] group-hover:text-black transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] group-hover:scale-110 shrink-0 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                  <Icon size={24} />
                </div>
              </div>
              
              <div className={`flex flex-col relative z-10 mt-auto w-full ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                <span className="text-[15px] font-bold tracking-wide leading-tight mb-1 text-white group-hover:text-[var(--color-brand-primary)] transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {(feature.title as Record<Language, string>)[lang]}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
