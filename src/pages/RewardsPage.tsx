import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, ShieldAlert, Sparkles, MessageCircle, UserPlus } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { BrandIcons } from '../components/BrandIcons';

export function RewardsPage() {
  const { lang, t, dir } = useLanguage();

  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center pt-24 pb-20 px-4 sm:px-6">
      {/* Top Breadcrumb Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl mb-6 flex items-center justify-between"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-950/30 text-xs font-semibold text-white/80 hover:text-cyan-200 transition-all cursor-pointer"
        >
          {dir === 'rtl' ? <ArrowRight size={13} /> : <ArrowLeft size={13} />}
          <span>{t('العودة للرئيسية', 'Back to Home', 'Назад на главную', 'Înapoi acasă', 'Retour à l\'accueil', 'Torna alla home')}</span>
        </Link>
      </motion.div>

      {/* Main Clean Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-2xl rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 bg-gradient-to-b from-white/[0.06] via-[#090d1a]/95 to-[#04060c]/98 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl text-center overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500" />
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-950/60 border border-pink-500/30 text-pink-300 text-xs font-mono mb-4 shadow-sm">
          <Sparkles size={12} className="text-pink-400" />
          <span className="font-bold tracking-wider uppercase">
            {t('تطبيق XENA LIVE', 'XENA LIVE APP', 'ПРИЛОЖЕНИЕ XENA LIVE', 'APLICAȚIA XENA LIVE', 'APPLICATION XENA LIVE', 'APP XENA LIVE')}
          </span>
        </div>

        {/* Title */}
        <h1 className={`text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t('نظام المكافآت', 'Rewards Policy', 'Система вознаграждений', 'Sistemul de recompense', 'Système de récompenses', 'Sistema di ricompense')}
        </h1>

        {/* Core Statement */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-white/90 text-sm sm:text-base leading-relaxed mb-6">
          <p className={`${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t(
              'نظام المكافآت يحدده تطبيق Xena Live حسب سياساته وشروطه، ويقوم فريق الإدارة بشرحه للمتقدم بعد التسجيل. لا توجد أي مخصصات شهرية ثابتة أو عوائد مؤكدة.',
              'The rewards system is determined by Xena Live according to its platform policies, and the management team explains it to applicants after registration. There are no fixed allocations or assured returns.',
              'Система вознаграждений определяется приложением Xena Live в соответствии с его официальными правилами и разъясняется администрацией после регистрации. Фиксированных зарплат и гарантированных выплат не предусмотрено.',
              'Sistemul de recompense este stabilit de aplicația Xena Live conform politicilor sale oficiale și este explicat de echipa de conducere după înregistrare. Nu există salarii fixe sau venituri garantate.',
              'Le système de récompenses est fixé par l\'application Xena Live selon ses règles officielles et expliqué par l\'équipe de direction après inscription. Aucun salaire fixe ni revenu garanti.',
              'Il sistema di ricompense è stabilito dall\'applicazione Xena Live secondo le sue politiche ufficiali e viene illustrato dal team di gestione dopo la registrazione. Non sono previsti stipendi fissi né rendimenti garantiti.'
            )}
          </p>
        </div>

        {/* Clarification Points */}
        <div className="space-y-2.5 text-xs sm:text-sm text-white/60 mb-8 text-start max-w-lg mx-auto">
          <div className="flex items-start gap-2">
            <span className="text-cyan-400 mt-0.5">•</span>
            <span>{t('كافة الحوافز والمكافآت خاضعة لنشاط صانع المحتوى والتزامه بسياسات التطبيق.', 'All incentives are subject to creator activity and platform policy compliance.', 'Все поощрения зависят от активности автора и соблюдения правил платформы.', 'Toate recompensele depind de activitatea creatorului și respectarea politicilor.', 'Toutes les récompenses dépendent de l\'activité et du respect des règles.', 'Tutti gli incentivi dipendono dall\'attività del creator e dal rispetto delle regole.')}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-cyan-400 mt-0.5">•</span>
            <span>{t('الانضمام متاح للبالغين 18+ فقط، وبشكل مجاني بالكامل بدون أي رسوم.', 'Joining is strictly for adults 18+, completely free without registration fees.', 'Участие строго для совершеннолетних 18+, полностью бесплатно.', 'Înscrierea este strict pentru adulți 18+, complet gratuită fără taxe.', 'Inscription réservée aux adultes 18+, totalement gratuite sans frais.', 'Iscrizione riservata esclusivamente ai maggiorenni 18+, del tutto gratuita.')}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/#apply-form"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-bold text-sm shadow-[0_0_25px_rgba(0,243,255,0.3)] transition-all cursor-pointer"
          >
            <UserPlus size={16} />
            <span>{t('قدّم طلب الانضمام', 'Submit Application', 'Подать заявку', 'Aplică acum', 'Postuler', 'Candidati')}</span>
          </Link>

          <a
            href="https://wa.me/447460018974"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-sm font-semibold transition-all cursor-pointer"
          >
            <BrandIcons.WhatsApp className="w-4 h-4 text-emerald-400" />
            <span>{t('تواصل مع الإدارة', 'Contact Management', 'Связаться с руководством', 'Contactează conducerea', 'Contacter la direction', 'Contatta la gestione')}</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
