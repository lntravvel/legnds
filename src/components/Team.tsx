import { motion } from 'motion/react';
import { Crown } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/team';
import { BrandIcons } from './BrandIcons';
import { useLanguage, Language } from '../i18n/LanguageContext';
import { AdminCrest, ADMIN_DOMINION_INFO } from './AdminCrest';

export function Team() {
  const { t, lang } = useLanguage();
  const topAdmins = TEAM_MEMBERS.slice(0, 4);
  const tariqAdmin = TEAM_MEMBERS.find((m) => m.id === 'admin-4');

  return (
    <section className="relative z-10 w-full px-5 flex flex-col items-center justify-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="w-full text-center mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/30 backdrop-blur-md mb-3 shadow-[0_0_15px_rgba(0,243,255,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[11px] font-mono tracking-widest text-cyan-300 uppercase font-semibold">
            {t('الإدارة العليا', 'Executive Board', 'Высшее руководство', 'Conducerea executivă', 'Direction générale', 'Direzione generale')}
          </span>
        </div>
        <h2 className={`text-[22px] md:text-[28px] font-bold text-white tracking-wide mb-1 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t('فريق الإدارة', 'Management Team', 'Команда управления', 'Echipa de management', 'Équipe de direction', 'Team di gestione')}
        </h2>
        <h3 className={`text-[15px] font-medium text-[var(--color-brand-primary)] ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t('رموز السيطرة والنفوذ خلف وكالة الأساطير', 'Commanders of Dominion behind Legends Agency', 'Командующие за агентством Легенды', 'Comandanții din spatele agenției Legends', 'Les commandants derrière l\'agence Legends', 'I comandanti dietro l\'agenzia Legends')}
        </h3>
      </motion.div>

      {/* Row 1: The 4 Primary Admins */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full mb-3 md:mb-4">
        {topAdmins.map((member, idx) => {
          const isOwner = member.id === 'owner';
          const info = ADMIN_DOMINION_INFO[member.id] || ADMIN_DOMINION_INFO['admin-1'];

          return (
            <motion.a
              key={member.id}
              href={member.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative flex flex-col items-center justify-between p-4 sm:p-5 md:p-6 backdrop-blur-xl rounded-[20px] md:rounded-[24px] transition-all duration-400 cursor-pointer overflow-hidden ${
                isOwner 
                  ? 'bg-gradient-to-b from-amber-500/[0.12] via-[#100d07]/80 to-[#070b12]/90 border-2 border-amber-400/60 hover:border-amber-300 hover:shadow-[0_15px_40px_rgba(251,191,36,0.35)] shadow-[0_0_25px_rgba(251,191,36,0.2)]'
                  : 'bg-gradient-to-b from-white/[0.06] via-[#0a101d]/75 to-[#040810]/90 border border-white/[0.1] hover:border-[var(--color-brand-primary)]/70 hover:bg-white/[0.08] hover:shadow-[0_12px_35px_rgba(0,243,255,0.22)]'
              }`}
            >
              {/* Top ambient color flare */}
              <div 
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity"
                style={{ backgroundColor: info.powerColor }}
              />

              {/* Special Royal Crowns on Both Sides of Abdullah's Card */}
              {isOwner && (
                <>
                  {/* Left Flank Crown */}
                  <motion.div
                    animate={{ rotate: [-6, 3, -6], y: [-3, 3, -3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -left-2 sm:-left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-[1px] shadow-[0_0_15px_rgba(251,191,36,0.65)] flex items-center justify-center z-20 pointer-events-none"
                    title="مالك الوكالة"
                  >
                    <div className="w-full h-full rounded-full bg-[#080d14] flex items-center justify-center">
                      <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 fill-amber-400/40" />
                    </div>
                  </motion.div>

                  {/* Right Flank Crown */}
                  <motion.div
                    animate={{ rotate: [6, -3, 6], y: [-3, 3, -3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="absolute -right-2 sm:-right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-[1px] shadow-[0_0_15px_rgba(251,191,36,0.65)] flex items-center justify-center z-20 pointer-events-none"
                    title="مالك الوكالة"
                  >
                    <div className="w-full h-full rounded-full bg-[#080d14] flex items-center justify-center">
                      <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 fill-amber-400/40" />
                    </div>
                  </motion.div>
                </>
              )}

              {/* Dominance Insignia Crest */}
              <div className="relative z-10 mb-2 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                <AdminCrest id={member.id} size="md" />
              </div>

              {/* Identity & Role */}
              <div className="relative z-10 flex flex-col items-center text-center w-full">
                <span className={`text-base md:text-lg font-extrabold mb-0.5 transition-colors flex items-center gap-1.5 ${
                  isOwner 
                    ? 'text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-200 to-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]' 
                    : 'text-white group-hover:text-cyan-200'
                }`}>
                  {member.name}
                </span>

                <span className={`text-[11px] md:text-[12px] font-semibold mb-2.5 ${
                  isOwner ? 'text-amber-300' : 'text-[var(--color-brand-primary)]'
                } ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                  {(member.role as Record<Language, string>)[lang]}
                </span>

                {/* Dominion Power Badge */}
                <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-[9px] sm:text-[10px] md:text-[11px] font-bold backdrop-blur-md transition-all duration-300 ${info.badgeBg} ${info.badgeText} shadow-[0_0_12px_rgba(0,0,0,0.5)] ${lang === 'ar' ? 'font-arabic' : 'font-mono tracking-wider'}`}>
                  <span>{lang === 'ar' ? info.titleAr : info.titleEn}</span>
                </div>

                {/* Tango Verification Indicator */}
                {member.url && member.url !== '#' && (
                  <div className="mt-3 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/5 text-[10px] text-white/60 group-hover:text-white group-hover:border-white/20 transition-all">
                    <BrandIcons.Tango className="w-3 h-3 text-[var(--color-brand-primary)]" />
                    <span className="font-mono">Tango VIP</span>
                  </div>
                )}
              </div>

              {/* Subtle bottom edge glow */}
              <div 
                className="absolute bottom-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-white/60 transition-all duration-500"
                style={{ 
                  boxShadow: `0 0 15px ${info.powerColor}` 
                }} 
              />
            </motion.a>
          );
        })}
      </div>

      {/* Row 2: Black Centered Card */}
      {tariqAdmin && (() => {
        const info = ADMIN_DOMINION_INFO[tariqAdmin.id] || ADMIN_DOMINION_INFO['admin-4'];

        return (
          <div className="w-full flex justify-center">
            <motion.a
              key={tariqAdmin.id}
              href={tariqAdmin.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.35, type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex flex-col items-center justify-between p-4 sm:p-5 md:p-6 bg-gradient-to-b from-rose-950/[0.15] via-[#10070b]/80 to-[#050508]/95 backdrop-blur-xl border border-rose-500/30 hover:border-rose-400/70 rounded-[20px] md:rounded-[24px] transition-all duration-400 hover:shadow-[0_12px_35px_rgba(244,63,94,0.25)] cursor-pointer w-full sm:w-2/3 md:w-1/3 overflow-hidden shadow-[0_0_20px_rgba(244,63,94,0.12)]"
            >
              {/* Ambient Crimson Flare */}
              <div 
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-30 group-hover:opacity-65 transition-opacity"
                style={{ backgroundColor: info.powerColor }}
              />

              {/* Dominance Insignia Crest */}
              <div className="relative z-10 mb-2 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                <AdminCrest id={tariqAdmin.id} size="md" />
              </div>

              {/* Identity & Role */}
              <div className="relative z-10 flex flex-col items-center text-center w-full">
                <span className="text-base md:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-rose-100 to-rose-300 drop-shadow-[0_0_12px_rgba(244,63,94,0.4)] mb-0.5 group-hover:text-rose-200 transition-colors font-mono tracking-wider">
                  {tariqAdmin.name}
                </span>

                <span className={`text-[11px] md:text-[12px] font-semibold text-rose-300/90 mb-2.5 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                  {(tariqAdmin.role as Record<Language, string>)[lang]}
                </span>

                {/* Dominion Power Badge */}
                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border text-[9px] sm:text-[10px] md:text-[11px] font-bold backdrop-blur-md transition-all duration-300 ${info.badgeBg} ${info.badgeText} shadow-[0_0_12px_rgba(0,0,0,0.5)] ${lang === 'ar' ? 'font-arabic' : 'font-mono tracking-wider'}`}>
                  <span>{lang === 'ar' ? info.titleAr : info.titleEn}</span>
                </div>
              </div>

              {/* Subtle bottom edge glow */}
              <div 
                className="absolute bottom-0 inset-x-8 h-[1.5px] bg-gradient-to-r from-transparent via-rose-400/0 group-hover:via-rose-400/80 to-transparent transition-all duration-500" 
                style={{ boxShadow: `0 0 15px ${info.powerColor}` }}
              />
            </motion.a>
          </div>
        );
      })()}
    </section>
  );
}

