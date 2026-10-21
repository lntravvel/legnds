import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, FileText, AlertCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function TermsPage() {
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
          <div className="w-10 h-10 rounded-xl bg-purple-400/10 border border-purple-400/30 flex items-center justify-center text-purple-300">
            <FileText size={20} />
          </div>
          <div>
            <h1 className={`text-xl sm:text-2xl font-bold text-white ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t('الشروط والأحكام', 'Terms and Conditions', 'Условия использования', 'Termeni și condiții', 'Conditions générales', 'Termini e condizioni')}
            </h1>
            <p className="text-xs text-white/50 font-mono mt-0.5">
              {t('آخر تحديث: أكتوبر 2026', 'Last updated: October 2026', 'Обновлено: Октябрь 2026', 'Ultima actualizare: Octombrie 2026', 'Dernière mise à jour : Octobre 2026', 'Ultimo aggiornamento: Ottobre 2026')}
            </p>
          </div>
        </div>

        <div className={`space-y-6 text-sm text-white/75 leading-relaxed ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">
              {t('1. طبيعة الخدمات', '1. Scope of Services', '1. Характер услуг', '1. Natura serviciilor', '1. Nature des services', '1. Natura dei servizi')}
            </h2>
            <p>
              {t(
                'وكالة الأساطير (Legends Agency) هي وكالة شريكة تقدم خدمات الدعم الفني، التدريب على جودة البث، والتوجيه لصناع المحتوى والمذيعين على تطبيق Xena Live. الوكالة ليست جهة توظيف ولا تقدم وظائف رسمية أو مخصصات شهرية ثابتة.',
                'Legends Agency is a partner agency providing technical support, broadcast quality training, and mentorship to creators on Xena Live. The agency is not an employer and does not offer formal employment or fixed monthly payments.',
                'Legends Agency — партнерское агентство, оказывающее техническую поддержку и консультации авторам на Xena Live.',
                'Agenția Legends este o agenție parteneră care oferă suport tehnic și instruire creatorilor pe Xena Live.',
                'Legends Agency est une agence partenaire fournissant un support technique et une formation aux créateurs sur Xena Live.',
                'Legends Agency è un\'agenzia partner che fornisce supporto tecnico e formazione ai creator su Xena Live.'
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">
              {t('2. الأهلية والسن القانوني (18+)', '2. Eligibility & Age (18+)', '2. Возрастной ценз (18+)', '2. Eligibilitate și vârstă (18+)', '2. Éligibilité et âge (18+)', '2. Idoneità ed età (18+)')}
            </h2>
            <p>
              {t(
                'الخدمة متاحة حصرياً للأفراد البالغين الذين أتموا 18 عاماً فأكثر. بتقديم طلبك، فإنك تقر وتضمن بأن عمرك 18 سنة على الأقل وتتحمل المسؤولية الكاملة عن صحة هذه البيانات.',
                'Services are strictly restricted to individuals aged 18 or older. By submitting your application, you warrant that you are at least 18 years old and bear full responsibility for the accuracy of this statement.',
                'Услуги доступны исключительно лицам от 18 лет и старше.',
                'Serviciile sunt disponibile exclusiv persoanelor cu vârsta de cel puțin 18 ani.',
                'Les services sont strictement réservés aux personnes âgées de 18 ans ou plus.',
                'I servizi sono riservati esclusivamente a persone di età pari o superiore a 18 anni.'
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">
              {t('3. الالتزام بسياسات منصة Xena Live', '3. Compliance with Xena Live Policies', '3. Соблюдение правил Xena Live', '3. Respectarea politicilor Xena Live', '3. Respect des règles Xena Live', '3. Rispetto delle regole Xena Live')}
            </h2>
            <p>
              {t(
                'يلتزم صانع المحتوى بالتقيد التام بجميع شروط الاستخدام وقواعد السلوك وإرشادات المجتمع الخاصة بتطبيق Xena Live. الوكالة لا تملك ولا تعد بتجاوز أي من قوانين المنصة، ولا تقدم أي استثناءات أو حماية خاصة ضد العقوبات الناتجة عن مخالفة سياسات التطبيق.',
                'Creators must strictly abide by all terms of use and community guidelines of Xena Live. The agency does not and cannot override platform policies, nor offer special protection against penalties resulting from policy violations.',
                'Авторы обязаны строго соблюдать правила сообщества Xena Live. Агентство не обещает обхода правил платформы.',
                'Creatorii trebuie să respecte cu strictețe regulile platformei Xena Live.',
                'Les créateurs doivent respecter rigoureusement les directives de la communauté Xena Live.',
                'I creator devono attenersi rigorosamente alle linee guida della community di Xena Live.'
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">
              {t('4. نظام المكافآت والعوائد', '4. Rewards & Earnings', '4. Вознаграждения', '4. Recompense', '4. Récompenses', '4. Compensi')}
            </h2>
            <p>
              {t(
                'نظام المكافآت يحدده تطبيق Xena Live حسب سياساته وشروطه، ويقوم فريق الإدارة بشرحه للمتقدم بعد التسجيل. لا توجد عوائد مالية مؤكدة، حيث تعتمد أي مكافآت أو عوائد على الجهد الفردي ونشاط البث وتفاعل المتابعين.',
                'The rewards system is determined by Xena Live per its platform policies and is explained after registration. There are no assured financial returns; rewards depend on personal effort, broadcasting activity, and audience engagement.',
                'Система вознаграждений определяется правилами Xena Live. Гарантированный доход отсутствует.',
                'Sistemul de recompense este stabilit de Xena Live. Nu există venituri garantate.',
                'Le système de récompenses est fixé par Xena Live. Il n\'y a aucun revenu garanti.',
                'Il sistema di compensi è regolato da Xena Live. Non sono previsti guadagni garantiti.'
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">
              {t('5. الاستقلالية القانونية والضريبية', '5. Independent Status', '5. Независимый статус', '5. Statut independent', '5. Statut indépendant', '5. Stato indipendente')}
            </h2>
            <p>
              {t(
                'يُعتبر صانع المحتوى متعاقداً مستقلاً بالكامل ويتحمل بمفرده كافة الالتزامات القانونية والضريبية المعمول بها في مكان إقامته.',
                'Creators act as independent contractors and are solely responsible for all legal and tax obligations applicable in their place of residence.',
                'Автор является независимым исполнителем и несет самостоятельную ответственность за налоговые и юридические обязательства.',
                'Creatorul este un colaborator independent și este singurul responsabil pentru obligațiile fiscale.',
                'Le créateur agit en tant qu\'indépendant et est seul responsable de ses obligations fiscales et légales.',
                'Il creator agisce come collaboratore indipendente ed è l\'unico responsabile per gli adempimenti fiscali.'
              )}
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
