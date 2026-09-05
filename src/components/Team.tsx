import { motion } from 'motion/react';
import { Crown, ShieldCheck, ExternalLink } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/team';
import { BrandIcons } from './BrandIcons';
import { useLanguage, Language } from '../i18n/LanguageContext';

export function Team() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative z-10 w-full px-4 sm:px-6 flex flex-col items-center justify-center max-w-5xl mx-auto">
      {/* Executive Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="w-full text-center mb-6 sm:mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-400/30 backdrop-blur-md mb-2.5 shadow-[0_0_15px_rgba(0,243,255,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-cyan-300 uppercase font-semibold">
            {t('الإدارة العليا', 'Executive Board', 'Высшее руководство', 'Conducerea executivă', 'Direction générale', 'Direzione generale')}
          </span>
        </div>
        
        <h2 className={`text-[20px] sm:text-[24px] md:text-[26px] font-bold text-white tracking-wide mb-1.5 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t('فريق الإدارة والقيادة', 'Leadership & Management', 'Команда управления', 'Echipa de conducere', 'Équipe de direction', 'Team di leadership')}
        </h2>
        
        <p className={`text-[12.5px] sm:text-[14px] text-white/60 max-w-md mx-auto ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t(
            'نخبة من القياديين لدعم ومتابعة صناع المحتوى على مدار الساعة',
            'Elite leaders dedicated to 24/7 creator management and growth',
            'Опытные лидеры для круглосуточной поддержки и развития авторов',
            'Lideri de elită dedicați sprijinirii creatorilor 24/7',
            'Des leaders dévoués à la gestion et à la croissance des créateurs 24/7',
            'Leader dedicati alla gestione e alla crescita dei creatori 24/7'
          )}
        </p>
      </motion.div>

      {/* Compact Streamlined Cards Grid: 5 across on desktop, 3 on tablet, 2 on mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3.5 w-full">
        {TEAM_MEMBERS.map((member, idx) => {
          const isOwner = member.id === 'owner';
          const hasLink = member.url && member.url !== '#';

          return (
            <motion.a
              key={member.id}
              href={hasLink ? member.url : undefined}
              target={hasLink ? "_blank" : undefined}
              rel={hasLink ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.06, type: "spring", stiffness: 220, damping: 20 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative flex flex-col items-center justify-between p-3.5 sm:p-4 rounded-[18px] sm:rounded-[20px] backdrop-blur-xl transition-all duration-300 overflow-hidden ${
                hasLink ? 'cursor-pointer' : 'cursor-default'
              } ${
                isOwner
                  ? 'bg-gradient-to-b from-amber-500/[0.08] via-[#0f0c08]/80 to-[#060910]/95 border border-amber-400/40 hover:border-amber-300/80 shadow-[0_4px_20px_rgba(251,191,36,0.12)] hover:shadow-[0_8px_30px_rgba(251,191,36,0.25)]'
                  : 'bg-gradient-to-b from-white/[0.04] via-[#080d18]/70 to-[#03060c]/90 border border-white/[0.08] hover:border-[var(--color-brand-primary)]/50 hover:bg-white/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_25px_rgba(0,243,255,0.15)]'
              }`}
            >
              {/* Subtle top ambient glow */}
              <div 
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full blur-xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: isOwner ? '#fbbf24' : '#00f3ff' }}
              />

              {/* Compact Avatar with Luxury Ring */}
              <div className="relative mb-2.5 mt-0.5">
                <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] transition-transform duration-300 group-hover:scale-105 ${
                  isOwner
                    ? 'bg-gradient-to-tr from-amber-500 via-amber-200 to-amber-600 shadow-[0_0_15px_rgba(251,191,36,0.35)]'
                    : 'bg-gradient-to-tr from-cyan-500 via-white/50 to-blue-600 shadow-[0_0_12px_rgba(0,243,255,0.25)]'
                }`}>
                  <img
                    src={member.avatar}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                {/* Founder Crown Badge */}
                {isOwner && (
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center shadow-[0_0_8px_rgba(251,191,36,0.6)] border border-[#060910]">
                    <Crown size={11} className="text-black fill-black" />
                  </div>
                )}

                {/* Verified Shield for Admins */}
                {!isOwner && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-4.5 h-4.5 rounded-full bg-cyan-950 border border-cyan-400 flex items-center justify-center shadow-[0_0_6px_rgba(0,243,255,0.4)]">
                    <ShieldCheck size={11} className="text-cyan-300" />
                  </div>
                )}
              </div>

              {/* Identity & Role */}
              <div className="flex flex-col items-center text-center w-full min-w-0 mb-2">
                <span className={`text-[13.5px] sm:text-[14.5px] font-extrabold tracking-wide truncate max-w-full ${
                  isOwner
                    ? 'text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-300 drop-shadow-[0_1px_4px_rgba(251,191,36,0.3)]'
                    : 'text-white group-hover:text-cyan-100 transition-colors'
                }`}>
                  {member.name}
                </span>

                <span className={`text-[10px] sm:text-[11px] font-semibold mt-0.5 ${
                  isOwner ? 'text-amber-300/90' : 'text-white/60 group-hover:text-cyan-300/80 transition-colors'
                } ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                  {(member.role as Record<Language, string>)[lang]}
                </span>
              </div>

              {/* Bottom Tango VIP Action Badge */}
              <div className="w-full pt-1">
                {hasLink ? (
                  <div className={`w-full flex items-center justify-center gap-1.5 py-1 px-2 rounded-full border transition-all text-[9.5px] sm:text-[10px] font-mono font-medium ${
                    isOwner
                      ? 'bg-amber-400/10 border-amber-400/30 text-amber-300 group-hover:bg-amber-400/20 group-hover:border-amber-400/50'
                      : 'bg-white/[0.04] border-white/10 text-white/70 group-hover:border-cyan-400/40 group-hover:text-cyan-200 group-hover:bg-cyan-950/30'
                  }`}>
                    <BrandIcons.Tango className="w-3 h-3 shrink-0" />
                    <span className="truncate">Tango VIP</span>
                    <ExternalLink size={9} className="opacity-60 group-hover:opacity-100 shrink-0" />
                  </div>
                ) : (
                  <div className="w-full flex items-center justify-center py-1 px-2 rounded-full bg-white/[0.03] border border-white/5 text-[9.5px] sm:text-[10px] font-mono text-white/40">
                    <span>LEGENDS</span>
                  </div>
                )}
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}


