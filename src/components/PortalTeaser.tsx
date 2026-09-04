import { motion } from 'motion/react';
import { Activity, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function PortalTeaser() {
  const { lang, t } = useLanguage();
  return (
    <section className="relative z-10 w-full px-5 flex flex-col justify-center max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="group relative overflow-hidden rounded-[28px] p-1 bg-gradient-to-br from-[var(--color-brand-primary)]/40 via-white/10 to-transparent hover:from-[var(--color-brand-primary)]/60 transition-colors duration-500 shadow-[0_10px_40px_rgba(0,243,255,0.15)]"
      >
        <div className="relative h-full w-full bg-[#040914]/90 backdrop-blur-xl rounded-[24px] p-5 sm:p-6 overflow-hidden border border-white/5">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-brand-primary)]/10 blur-[50px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600/10 blur-[40px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-brand-primary)]/20 to-transparent border border-[var(--color-brand-primary)]/30 text-[var(--color-brand-primary)] mb-5 shadow-[0_0_20px_rgba(0,243,255,0.2)]">
              <Activity size={28} />
            </div>
            
            <h2 className={`text-[20px] font-bold text-white tracking-wide mb-1 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t('لوحة التحكم الذكية للمذيعين', 'Smart Broadcaster Portal', 'Умный портал вещателя', 'Portalul inteligent pentru crainici', 'Portail de diffusion intelligent', 'Portale intelligente per emittenti')}
            </h2>
            
            <p className={`text-white/80 text-[13.5px] leading-relaxed font-medium mb-6 mt-3 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t(
                'بوناصاتك، دعمك، إحالاتك، دفعات نقاطك وديونك بنظرة واحدة. بمجرد ربط بروفايلك، ستظهر جميع إحصائياتك وصندوق الاستثمار بشفافية تامة.',
                'Track your bonuses, support, referrals, points payments, and debts at a glance. We provide full transparency for your earnings.',
                'Следите за своими бонусами, поддержкой, рефералами, выплатами баллов и долгами с одного взгляда. Мы обеспечиваем полную прозрачность ваших доходов.',
                'Urmăriți bonusurile, suportul, recomandările, plățile de puncte și datoriile dintr-o privire. Oferim transparență deplină pentru câștigurile dvs.',
                'Suivez vos bonus, votre support, vos parrainages, vos paiements de points et vos dettes d\'un seul coup d\'œil. Nous offrons une transparence totale sur vos revenus.',
                'Tieni traccia dei tuoi bonus, supporto, segnalazioni, pagamenti di punti e debiti a colpo d\'occhio. Offriamo piena trasparenza per i tuoi guadagni.'
              )}
            </p>

            <div className="grid grid-cols-3 gap-2 w-full mt-2">
              <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <TrendingUp size={18} className="text-green-400 mb-2" />
                <span className={`text-[10px] text-white/60 uppercase tracking-wider font-semibold ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                  {t('الأرباح', 'Revenue', 'Доход', 'Venituri', 'Revenus', 'Entrate')}
                </span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <Users size={18} className="text-blue-400 mb-2" />
                <span className={`text-[10px] text-white/60 uppercase tracking-wider font-semibold ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                  {t('الإحالات', 'Referrals', 'Рефералы', 'Recomandări', 'Parrainages', 'Referral')}
                </span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <ShieldCheck size={18} className="text-[var(--color-brand-primary)] mb-2" />
                <span className={`text-[10px] text-white/60 uppercase tracking-wider font-semibold ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                  {t('الأمان', 'Security', 'Безопасность', 'Securitate', 'Sécurité', 'Sicurezza')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
