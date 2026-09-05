import { motion } from 'motion/react';
import React from 'react';
import { AGENCY_LINKS, LinkItem } from '../data/links';
import { useLanguage } from '../i18n/LanguageContext';

function BentoCard({ link, index }: { link: LinkItem; index: number }) {
  const Icon = link.icon;
  const isPrimary = link.primary;
  const { lang, dir } = useLanguage();
  
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9, y: 25 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay: 0.15 + index * 0.06, 
        type: "spring",
        stiffness: 240,
        damping: 20
      }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`group relative overflow-hidden transition-all duration-300 flex ${
        isPrimary 
          ? 'col-span-2 flex-row items-center p-4 sm:p-5 rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#0c1020] via-[#080c18] to-[#04060d] border border-white/[0.12] hover:border-[var(--color-brand-primary)]/60 shadow-[0_8px_25px_rgba(0,0,0,0.5)]' 
          : 'col-span-1 flex-col items-start justify-between p-4 sm:p-5 rounded-[20px] sm:rounded-[22px] min-h-[110px] sm:min-h-[125px] bg-gradient-to-br from-[#0a0f1d] via-[#060a14] to-[#03050a] border border-white/[0.08] hover:border-white/25 hover:bg-[#0c1224]'
      } hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]`}
    >
      {/* Authentic Ambient Brand Spotlight */}
      <div 
        className="absolute -top-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full opacity-15 group-hover:opacity-25 blur-2xl transition-all duration-500 pointer-events-none z-0"
        style={{ background: link.brandColor }}
      />
      <div 
        className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 blur-xl transition-all duration-500 pointer-events-none z-0"
        style={{ background: link.brandColor }}
      />

      {/* Official Brand Watermark in Corner */}
      <div 
        className={`absolute pointer-events-none select-none z-0 transition-all duration-500 ${
          isPrimary 
            ? `${dir === 'rtl' ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 opacity-10 group-hover:opacity-20 group-hover:scale-105` 
            : `${dir === 'rtl' ? '-left-2' : '-right-2'} -bottom-2 w-16 h-16 sm:w-18 sm:h-18 opacity-10 group-hover:opacity-25 group-hover:scale-110 ${dir === 'rtl' ? '-rotate-12' : 'rotate-12'}`
        }`}
      >
        <Icon className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.08)]" />
      </div>

      {/* Subtle Hover Rim Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[18px] sm:rounded-[22px] border"
        style={{ borderColor: `${link.brandColor}50` }}
      />

      {isPrimary ? (
        <>
          {/* Primary Badge Icon */}
          <div 
            className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-[16px] sm:rounded-[18px] shrink-0 transition-all duration-300 group-hover:scale-105 z-10 shadow-md ${dir === 'rtl' ? 'ml-3.5' : 'mr-3.5'}`}
            style={{
              backgroundColor: `${link.brandColor}20`,
              border: `1.5px solid ${link.brandColor}60`,
              boxShadow: `0 0 20px ${link.brandColor}25`
            }}
          >
            <Icon className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-sm" />
          </div>

          <div className={`flex flex-col flex-1 relative z-10 justify-center ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
            <span className="text-[14.5px] sm:text-[16px] font-bold tracking-wide leading-tight mb-0.5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {link.title[lang]}
            </span>
            <span 
              className="text-[10.5px] sm:text-[11px] font-semibold tracking-wider uppercase opacity-85"
              style={{ color: link.brandColor }}
            >
              {link.id === 'tango-join' ? 'Official Tango Partner' : link.id === 'zena-join' ? 'Official Zena Partner' : 'Exclusive VIP Program'}
            </span>
          </div>

          {/* Action Arrow */}
          <div 
            className={`shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full text-white transition-all duration-300 transform z-10 shadow-sm ${dir === 'rtl' ? 'group-hover:-translate-x-1.5 -scale-x-100' : 'group-hover:translate-x-1.5'}`}
            style={{
              backgroundColor: `${link.brandColor}30`,
              border: `1px solid ${link.brandColor}60`
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </>
      ) : (
        <>
          {/* Social Platform Card Header */}
          <div className="relative flex items-center justify-between w-full mb-2 z-10">
            <div 
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-[13px] sm:rounded-[14px] backdrop-blur-md transition-all duration-300 group-hover:scale-105 shadow-sm shrink-0"
              style={{
                backgroundColor: `${link.brandColor}18`,
                border: `1px solid ${link.brandColor}40`,
                boxShadow: `0 3px 12px ${link.brandColor}18`
              }}
            >
              <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
            </div>

            {/* Launch Indicator */}
            <div 
              className={`flex items-center justify-center w-6 h-6 rounded-full bg-white/5 border border-white/10 text-white/40 group-hover:text-white group-hover:bg-white/15 transition-all duration-300 transform ${dir === 'rtl' ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'} group-hover:-translate-y-0.5`}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={dir === 'rtl' ? '-scale-x-100' : ''}>
                <path d="M5 19L19 5M10 5h9v9"/>
              </svg>
            </div>
          </div>

          {/* Card Title */}
          <div className="flex flex-col text-left rtl:text-right relative z-10 mt-auto">
            <span className="text-[13px] sm:text-[14px] font-bold tracking-normal leading-snug text-white group-hover:text-white transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              {link.title[lang]}
            </span>
          </div>
        </>
      )}
    </motion.a>
  );
}

export function LinkHub() {
  const { t, lang } = useLanguage();
  const primaryLinks = AGENCY_LINKS.filter((l) => l.primary);

  return (
    <section className="relative z-10 w-full px-4 sm:px-6 max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        className="w-full text-center mb-5"
      >
        <h2 className={`text-[20px] sm:text-[24px] font-bold text-white tracking-wide mb-1 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t('روابط الانضمام الرسمية', 'Official Agency Programs', 'Официальные программы агентства', 'Programele oficiale ale agenției', 'Programmes officiels de l\'agence', 'Programmi ufficiali dell\'agenzia')}
        </h2>
        <p className={`text-xs sm:text-[13px] text-white/50 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t(
            'اختر منصتك المفضلة وانضم مباشرة تحت مظلة وكالة الأساطير المعتمدة',
            'Choose your preferred platform and join officially under Legends Agency',
            'Выберите платформу и присоединяйтесь к агентству Legends',
            'Alege platforma preferată și alătură-te agenției Legends',
            'Choisissez votre plateforme et rejoignez officiellement Legends',
            'Scegli la tua piattaforma preferita ed entra in Legends Agency'
          )}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        {primaryLinks.map((link, idx) => (
          <BentoCard key={link.id} link={link} index={idx} />
        ))}
      </div>
    </section>
  );
}
