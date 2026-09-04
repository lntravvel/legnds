import { motion } from 'motion/react';
import { Users, TrendingUp, DollarSign } from 'lucide-react';
import { useLanguage, Language } from '../i18n/LanguageContext';

const STATS = [
  { 
    id: 1, 
    label: {
      ar: 'مذيع نشط',
      en: 'Active Broadcasters',
      ru: 'Активные ведущие',
      ro: 'Crainici activi',
      fr: 'Diffuseurs actifs',
      it: 'Trasmettitori attivi'
    },
    value: '+500', 
    icon: Users 
  },
  { 
    id: 2, 
    label: {
      ar: 'مشاهدات شهرية',
      en: 'Monthly Views',
      ru: 'Ежемесячные просмотры',
      ro: 'Vizualizări lunare',
      fr: 'Vues mensuelles',
      it: 'Visualizzazioni mensili'
    },
    value: '10M+', 
    icon: TrendingUp 
  },
  { 
    id: 3, 
    label: {
      ar: 'أرباح قياسية',
      en: 'Top Earnings',
      ru: 'Рекордные доходы',
      ro: 'Câștiguri de top',
      fr: 'Revenus record',
      it: 'Guadagni record'
    },
    value: '$1M+', 
    icon: DollarSign 
  },
];

export function Stats() {
  const { lang, t } = useLanguage();
  return (
    <section className="relative z-10 w-full px-5 max-w-4xl mx-auto">
      <div className="grid grid-cols-3 gap-3 md:gap-6">
        {STATS.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, type: "spring", stiffness: 200, damping: 20 }}
              className="relative flex flex-col items-center justify-center p-4 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-[24px] hover:border-[var(--color-brand-primary)]/40 transition-colors duration-500 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <Icon size={24} className="text-[var(--color-brand-primary)] mb-2 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]" />
              
              <h4 className="text-xl sm:text-2xl font-black text-white tracking-wider mb-1 font-mono">
                {stat.value}
              </h4>
              
              <p className="text-[10px] sm:text-[11px] text-white/50 font-medium uppercase tracking-wider text-center h-8 flex items-center justify-center">
                {(stat.label as Record<Language, string>)[lang]}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
