import { motion } from 'motion/react';
import { Activity, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function PortalTeaser() {
  const { lang, t } = useLanguage();

  return (
    <section className="relative z-10 w-full px-4 sm:px-6 flex flex-col justify-center max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="group relative overflow-hidden rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 bg-gradient-to-b from-white/[0.04] via-[#050c1c]/90 to-[#02050e]/98 border border-white/[0.08] hover:border-cyan-400/40 backdrop-blur-2xl transition-all duration-400 shadow-[0_10px_40px_rgba(0,243,255,0.1)]"
      >
        {/* Decorative Background Glows */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-400/10 blur-[50px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-44 h-44 bg-blue-600/10 blur-[40px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Unified Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-400/30 backdrop-blur-md mb-3 shadow-[0_0_15px_rgba(0,243,255,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-cyan-300 uppercase font-semibold">
              {t('لوحة المذيعين الذكية', 'Smart Creator Portal', 'Портал создателя', 'Portal inteligent', 'Portail créateur', 'Portale creator')}
            </span>
          </div>
          
          <h2 className={`text-[19px] sm:text-[23px] md:text-[25px] font-bold text-white tracking-wide mb-2 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t('متابعة دورية لإحصائياتك وتطوير أدائك', 'Ongoing Tracking of Your Stream Stats & Performance', 'Отслеживание статистики и показателей вашего эфира', 'Monitorizare continuă a statisticilor și performanței', 'Suivi continu de vos statistiques et de vos performances', 'Monitoraggio continuo delle statistiche e delle prestazioni')}
          </h2>
          
          <p className={`text-white/70 text-[12.5px] sm:text-[13.5px] leading-relaxed max-w-xl mx-auto mb-5 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t(
              'ساعات البث الفعالة، تفاعل الجمهور، وملاحظات المشرفين بنظرة واحدة لمساعدتك على رفع جودة محتواك بانتظام.',
              'Broadcast hours, audience engagement, and supervisor insights at a glance to help you consistently elevate your content quality.',
              'Часы эфира, вовлеченность аудитории и рекомендации кураторов в одном месте.',
              'Orele de transmisie, implicarea publicului și recomandările supervizorilor dintr-o privire.',
              'Heures de diffusion, engagement du public et conseils des superviseurs en un coup d\'œil.',
              'Ore di diretta, coinvolgimento del pubblico e feedback dei supervisori a colpo d\'occhio.'
            )}
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full">
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <TrendingUp size={18} className="text-emerald-400 mb-1.5" />
              <span className={`text-[10.5px] text-white/70 uppercase tracking-wider font-semibold ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                {t('تقارير الأداء', 'Performance Reports', 'Отчеты об эфирах', 'Rapoarte de performanță', 'Rapports de performance', 'Report sulle prestazioni')}
              </span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <Users size={18} className="text-blue-400 mb-1.5" />
              <span className={`text-[10.5px] text-white/70 uppercase tracking-wider font-semibold ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                {t('تفاعل الجمهور', 'Audience Engagement', 'Аудитория', 'Implicarea publicului', 'Engagement du public', 'Coinvolgimento del pubblico')}
              </span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <ShieldCheck size={18} className="text-cyan-400 mb-1.5" />
              <span className={`text-[10.5px] text-white/70 uppercase tracking-wider font-semibold ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                {t('متابعة الحساب', 'Account Support', 'Поддержка аккаунта', 'Asistență cont', 'Assistance compte', 'Supporto account')}
              </span>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
