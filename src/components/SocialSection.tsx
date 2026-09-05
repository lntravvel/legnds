import { motion } from 'motion/react';
import { AGENCY_LINKS } from '../data/links';
import { useLanguage } from '../i18n/LanguageContext';
import { ExternalLink } from 'lucide-react';

export function SocialSection() {
  const { lang, t } = useLanguage();

  // Only take social links (non-primary)
  const socialLinks = AGENCY_LINKS.filter(l => !l.primary);

  return (
    <section className="relative z-10 w-full px-4 sm:px-6 max-w-4xl mx-auto my-4 sm:my-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        className="w-full flex flex-col items-center text-center p-5 sm:p-6 rounded-[24px] bg-gradient-to-b from-white/[0.03] to-[#040813]/90 border border-white/[0.08] backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
      >
        {/* Header */}
        <div className="mb-4">
          <span className="text-[10.5px] sm:text-[11px] font-mono tracking-widest text-cyan-300 uppercase font-semibold">
            {t('منصاتنا الرسمية', 'Official Social Channels', 'Официальные соцсети', 'Rețele sociale oficiale', 'Réseaux sociaux officiels', 'Canali social ufficiali')}
          </span>
          <h3 className={`text-[17px] sm:text-[20px] font-bold text-white tracking-wide mt-1 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t('تابع وتواصل مع وكالة الأساطير', 'Follow & Connect With Legends', 'Следите за новостями агентства', 'Urmărește și conectează-te cu Legends', 'Suivez et contactez l\'Agence Legends', 'Segui e connettiti con Legends')}
          </h3>
        </div>

        {/* Social Platforms Row: responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 w-full">
          {socialLinks.map((link, idx) => {
            const Icon = link.icon;

            return (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex flex-col items-center justify-center p-3 sm:p-3.5 rounded-[18px] bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Brand glow on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-15 blur-xl transition-opacity pointer-events-none"
                  style={{ backgroundColor: link.brandColor }}
                />

                {/* Brand Icon */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 mb-2 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Icon className="w-full h-full object-contain" />
                </div>

                {/* Name */}
                <span className="text-[12px] sm:text-[12.5px] font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {link.title[lang]}
                </span>

                {/* Subtle external link icon */}
                <span className="mt-1 opacity-40 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={10} className="text-white/60" />
                </span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
