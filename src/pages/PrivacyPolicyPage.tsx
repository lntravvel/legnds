import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Shield, Lock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function PrivacyPolicyPage() {
  const { lang, t, dir } = useLanguage();

  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center pt-24 pb-20 px-4 sm:px-6">
      {/* Top Breadcrumb Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl mb-6 flex items-center justify-between"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-950/30 text-xs font-semibold text-white/80 hover:text-cyan-200 transition-all cursor-pointer"
        >
          {dir === 'rtl' ? <ArrowRight size={13} /> : <ArrowLeft size={13} />}
          <span>{t('العودة للرئيسية', 'Back to Home', 'Назад на главную', 'Înapoi acasă', 'Retour à l\'accueil', 'Torna alla home')}</span>
        </Link>
      </motion.div>

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-3xl rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 bg-gradient-to-b from-white/[0.05] via-[#080d1a]/95 to-[#04060c]/98 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
      >
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
            <Lock size={20} />
          </div>
          <div>
            <h1 className={`text-xl sm:text-2xl font-bold text-white ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t('سياسة الخصوصية', 'Privacy Policy', 'Политика конфиденциальности', 'Politica de confidențialitate', 'Politique de confidentialité', 'Informativa sulla privacy')}
            </h1>
            <p className="text-xs text-white/50 font-mono mt-0.5">
              {t('آخر تحديث: أكتوبر 2026', 'Last updated: October 2026', 'Обновлено: Октябрь 2026', 'Ultima actualizare: Octombrie 2026', 'Dernière mise à jour : Octobre 2026', 'Ultimo aggiornamento: Ottobre 2026')}
            </p>
          </div>
        </div>

        <div className={`space-y-6 text-sm text-white/75 leading-relaxed ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">
              {t('1. مقدمة والتزام', '1. Introduction', '1. Введение', '1. Introducere', '1. Introduction', '1. Introduzione')}
            </h2>
            <p>
              {t(
                'نحن في وكالة الأساطير (Legends Agency) نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيفية تعاملنا مع المعلومات التي تقدمها لنا عند استخدام موقع legeends.com أو التقدم بطلب الانضمام كصانع محتوى.',
                'At Legends Agency, we respect your privacy and are committed to protecting your personal data. This policy explains how we handle the information you provide when using legeends.com or applying as a creator.',
                'В Legends Agency мы уважаем вашу конфиденциальность и стремимся защищать персональные данные.',
                'La Agenția Legends respectăm confidențialitatea dvs. și ne angajăm să vă protejăm datele.',
                'Chez Legends Agency, nous respectons votre vie privée et protégeons vos données.',
                'In Legends Agency rispettiamo la tua privacy e proteggiamo i tuoi dati.'
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">
              {t('2. البيانات التي نجمعها', '2. Data We Collect', '2. Собираемые данные', '2. Date colectate', '2. Données collectées', '2. Dati raccolti')}
            </h2>
            <p>
              {t(
                'عند ملء نموذج طلب الانضمام أو التواصل معنا عبر الواتساب، قد نقوم بجمع المعلومات التالية: الاسم أو اسم الشهرة، رقم هاتف الواتساب، دولة الإقامة، العمر (للتأكد من بلوغ السن القانوني 18+)، ومستوى الخبرة أو معرف الحساب.',
                'When you fill out the application form or contact us via WhatsApp, we may collect: name/streamer name, WhatsApp phone number, country of residence, age (to verify 18+ requirement), and experience level or account handle.',
                'Мы собираем только необходимые контактные данные для рассмотрения заявки и проверки возраста 18+.',
                'Colectăm doar datele necesare pentru cerere și verificarea vârstei 18+.',
                'Nous collectons uniquement les informations nécessaires au traitement de la candidature.',
                'Raccogliamo solo le informazioni necessarie per la candidatura.'
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">
              {t('3. الغرض من استخدام البيانات', '3. Purpose of Use', '3. Цели использования', '3. Scopul utilizării', '3. Utilisation des données', '3. Scopo dell\'utilizzo')}
            </h2>
            <p>
              {t(
                'تُستخدم البيانات المقدمة فقط للتواصل معك بخصوص طلبك، وتقديم الدعم الفني، والتأكد من مطابقة شروط السن وسياسات تطبيق Xena Live. نحن لا نقوم ببيع أو تأجير أو مشاركة بياناتك الشخصية مع أي أطراف ثالثة لأغراض تسويقية.',
                'Your data is used solely to contact you regarding your application, provide technical guidance, and verify age compliance with Xena Live policies. We never sell, rent, or share your data with third parties for marketing purposes.',
                'Данные используются исключительно для связи с вами по вашей заявке и техподдержки.',
                'Datele sunt folosite exclusiv pentru a vă contacta în legătură cu cererea și suportul tehnic.',
                'Les données sont utilisées uniquement pour vous contacter au sujet de votre candidature.',
                'I dati sono utilizzati esclusivamente per contattarti in merito alla tua richiesta.'
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">
              {t('4. شرط السن القانوني (18+)', '4. Age Requirement (18+)', '4. Возрастное ограничение (18+)', '4. Limită de vârstă (18+)', '4. Limite d\'âge (18+)', '4. Requisito di età (18+)')}
            </h2>
            <p>
              {t(
                'خدمات الدعم والإدارة لدينا موجهة حصرياً للبالغين الذين تبلغ أعمارهم 18 عاماً فأكثر. لا نقبل ولا نقوم بجمع أي معلومات من أي شخص يقل عمره عن 18 عاماً.',
                'Our support and management services are exclusively for adults aged 18 and older. We do not accept or collect data from anyone under 18.',
                'Наши услуги предназначены исключительно для лиц от 18 лет и старше.',
                'Serviciile noastre sunt destinate exclusiv adulților de cel puțin 18 ani.',
                'Nos services s\'adressent exclusivement aux personnes majeures de 18 ans et plus.',
                'I nostri servizi sono riservati esclusivamente ai maggiorenni di 18 anni o più.'
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">
              {t('5. التواصل والاستفسار', '5. Contact Us', '5. Контакты', '5. Contact', '5. Contact', '5. Contatti')}
            </h2>
            <p>
              {t(
                'إذا كانت لديك أي استفسارات بخصوص سياسة الخصوصية، يمكنك التواصل معنا مباشرة عبر واتساب الإدارة: +44 7460 018974.',
                'If you have any questions about this privacy policy, contact management directly on WhatsApp: +44 7460 018974.',
                'По любым вопросам конфиденциальности свяжитесь с руководством в WhatsApp: +44 7460 018974.',
                'Pentru întrebări despre confidențialitate, contactați conducerea pe WhatsApp: +44 7460 018974.',
                'Pour toute question sur la confidentialité, contactez la direction sur WhatsApp : +44 7460 018974.',
                'Per domande sulla privacy, contatta la gestione su WhatsApp: +44 7460 018974.'
              )}
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
