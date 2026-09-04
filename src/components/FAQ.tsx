import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '../i18n/LanguageContext';

const FAQS = [
  {
    id: 1,
    question: {
      ar: 'من المؤهل للالتحاق بالوكالة؟',
      en: 'Who is eligible to join the agency?',
      ru: 'Кто может присоединиться к агентству?',
      ro: 'Cine este eligibil să se alăture agenției?',
      fr: 'Qui est admissible à rejoindre l\'agence ?',
      it: 'Chi può unirsi all\'agenzia?'
    },
    answer: {
      ar: 'نرحب بكافة صناع المحتوى الطموحين على منصة تانغو، سواء كنت في بداية مشوارك أو من كبار المحترفين. وكالتنا تحتضن مواهب من كافة أنحاء العالم.',
      en: 'We welcome all ambitious content creators on the Tango platform, whether you are just starting or are a top professional. Our agency embraces talents from all over the world.',
      ru: 'Мы приветствуем всех амбициозных создателей контента на платформе Tango, независимо от того, начинаете ли вы или являетесь ведущим профессионалом. Наше агентство объединяет таланты со всего мира.',
      ro: 'Salutăm toți creatorii de conținut ambițioși de pe platforma Tango, indiferent dacă sunteți la început sau un profesionist de top. Agenția noastră îmbrățișează talente din întreaga lume.',
      fr: 'Nous accueillons tous les créateurs de contenu ambitieux sur la plateforme Tango, que vous débutiez ou que vous soyez un professionnel de haut niveau. Notre agence accueille des talents du monde entier.',
      it: 'Diamo il benvenuto a tutti gli ambiziosi creatori di contenuti sulla piattaforma Tango, che tu stia iniziando o sia un professionista di alto livello. La nostra agenzia abbraccia talenti da tutto il mondo.'
    }
  },
  {
    id: 2,
    question: {
      ar: 'هل توجد أي رسوم للتسجيل؟',
      en: 'Are there any registration fees?',
      ru: 'Есть ли регистрационные сборы?',
      ro: 'Există taxe de înregistrare?',
      fr: 'Y a-t-il des frais d\'inscription ?',
      it: 'Ci sono costi di registrazione?'
    },
    answer: {
      ar: 'الالتحاق بنا مجاني بالكامل ولا يتطلب أي رسوم خفية. فلسفتنا هي الشراكة والنجاح المتبادل؛ نحن ننمو بنجاحك.',
      en: 'Joining us is completely free and requires no hidden fees. Our philosophy is partnership and mutual success; we grow with your success.',
      ru: 'Присоединение к нам абсолютно бесплатно и не требует скрытых платежей. Наша философия — партнерство и взаимный успех; мы растем вместе с вашим успехом.',
      ro: 'Alăturarea la noi este complet gratuită și nu necesită taxe ascunse. Filozofia noastră este parteneriatul și succesul reciproc; creștem odată cu succesul tău.',
      fr: 'Nous rejoindre est totalement gratuit et ne nécessite aucun frais caché. Notre philosophie est le partenariat et le succès mutuel ; nous grandissons avec votre succès.',
      it: 'Unirsi a noi è completamente gratuito e non richiede costi nascosti. La nostra filosofia è la partnership e il successo reciproco; cresciamo con il tuo successo.'
    }
  },
  {
    id: 3,
    question: {
      ar: 'كيف يتم استلام الأرباح؟',
      en: 'How do I receive my earnings?',
      ru: 'Как я получу свои доходы?',
      ro: 'Cum îmi primesc câștigurile?',
      fr: 'Comment vais-je recevoir mes gains ?',
      it: 'Come ricevo i miei guadagni?'
    },
    answer: {
      ar: 'تصلك أرباحك الأساسية مباشرة من تطبيق تانغو، بينما نقوم نحن بصرف مكافآتك الشهرية الإضافية بشكل منتظم ومضمون في موعدها.',
      en: 'You receive your base earnings directly from the Tango app, while we pay out your additional monthly bonuses regularly and securely on time.',
      ru: 'Вы получаете свой базовый доход непосредственно из приложения Tango, а мы регулярно и гарантированно выплачиваем ваши дополнительные ежемесячные бонусы в срок.',
      ro: 'Vă primiți câștigurile de bază direct din aplicația Tango, în timp ce noi vă plătim bonusurile lunare suplimentare în mod regulat și sigur la timp.',
      fr: 'Vous recevez vos gains de base directement depuis l\'application Tango, tandis que nous vous versons vos bonus mensuels supplémentaires régulièrement et en toute sécurité à temps.',
      it: 'Ricevi i tuoi guadagni di base direttamente dall\'app Tango, mentre noi paghiamo i tuoi bonus mensili aggiuntivi regolarmente e in modo sicuro in tempo.'
    }
  },
  {
    id: 4,
    question: {
      ar: 'ماذا يقدم لي فريق الدعم؟',
      en: 'What does the support team offer me?',
      ru: 'Что мне предлагает команда поддержки?',
      ro: 'Ce îmi oferă echipa de suport?',
      fr: 'Que m\'offre l\'équipe de support ?',
      it: 'Cosa mi offre il team di supporto?'
    },
    answer: {
      ar: 'نوفر لك توجيهاً مباشراً من نخبة المذيعين، حماية كاملة لحسابك، استجابة سريعة لأي مشكلة تقنية، بالإضافة لفرصة الانضمام لمجتمعنا العالمي.',
      en: 'We provide you with direct guidance from elite broadcasters, full protection for your account, fast response to any technical issue, plus the opportunity to join our global community.',
      ru: 'Мы предоставляем вам прямое руководство от элитных ведущих, полную защиту вашей учетной записи, быстрое реагирование на любую техническую проблему, а также возможность присоединиться к нашему глобальному сообществу.',
      ro: 'Vă oferim îndrumare directă de la radiodifuzori de elită, protecție completă pentru contul dvs., răspuns rapid la orice problemă tehnică, plus oportunitatea de a vă alătura comunității noastre globale.',
      fr: 'Nous vous offrons des conseils directs de diffuseurs d\'élite, une protection complète de votre compte, une réponse rapide à tout problème technique, ainsi que la possibilité de rejoindre notre communauté mondiale.',
      it: 'Ti forniamo una guida diretta da emittenti d\'élite, protezione completa per il tuo account, risposta rapida a qualsiasi problema tecnico, oltre all\'opportunità di unirti alla nostra comunità globale.'
    }
  },
  {
    id: 5,
    question: {
      ar: 'هل هناك شروط جزائية أو عقود ملزمة؟',
      en: 'Are there any penalty clauses or binding contracts?',
      ru: 'Есть ли какие-либо штрафные санкции или обязательные контракты?',
      ro: 'Există clauze penale sau contracte obligatorii?',
      fr: 'Y a-t-il des clauses pénales ou des contrats contraignants ?',
      it: 'Ci sono clausole penali o contratti vincolanti?'
    },
    answer: {
      ar: 'نحن لا نؤمن بالقيود الصارمة أو العقود المعقدة. المذيعون يستمرون معنا بفضل الثقة والراحة والنتائج الإيجابية التي يحققونها، وليس بالإجبار.',
      en: 'We don\'t believe in strict restrictions or complex contracts. Broadcasters stay with us because of the trust, comfort, and positive results they achieve, not by force.',
      ru: 'Мы не верим в строгие ограничения или сложные контракты. Ведущие остаются с нами благодаря доверию, комфорту и положительным результатам, которых они достигают, а не по принуждению.',
      ro: 'Nu credem în restricții stricte sau contracte complexe. Radiodifuzorii rămân cu noi datorită încrederii, confortului și rezultatelor pozitive pe care le obțin, nu prin forță.',
      fr: 'Nous ne croyons pas aux restrictions strictes ou aux contrats complexes. Les diffuseurs restent avec nous en raison de la confiance, du confort et des résultats positifs qu\'ils obtiennent, et non par la force.',
      it: 'Non crediamo in rigide restrizioni o contratti complessi. Le emittenti restano con noi grazie alla fiducia, al comfort e ai risultati positivi che ottengono, non per forza.'
    }
  }
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  const { lang, t, dir } = useLanguage();

  return (
    <section className="relative z-10 w-full px-5 flex flex-col items-center max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 w-full"
      >
        <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-brand-primary)] mb-2 font-semibold font-mono drop-shadow-[0_0_8px_rgba(0,243,255,0.4)]">
          FAQ
        </p>
        <h2 className={`text-[22px] md:text-[26px] font-bold text-white mb-2 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t('الأسئلة الشائعة', 'Frequently Asked Questions', 'Часто задаваемые вопросы', 'Întrebări frecvente', 'Questions fréquemment posées', 'Domande frequenti')}
        </h2>
        <p className={`text-white/60 text-[14px] max-w-sm mx-auto font-medium ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t('كل ما تحتاج لمعرفته حول الانضمام إلينا', 'Everything you need to know about joining us', 'Все, что вам нужно знать о присоединении к нам', 'Tot ce trebuie să știți despre alăturarea la noi', 'Tout ce que vous devez savoir pour nous rejoindre', 'Tutto quello che devi sapere su come unirti a noi')}
        </p>
      </motion.div>

      <div className="w-full space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openId === faq.id;

          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`w-full overflow-hidden rounded-[20px] border transition-all duration-300 ${
                isOpen 
                  ? 'bg-white/[0.08] border-[var(--color-brand-primary)]/40 shadow-[0_4px_20px_rgba(0,243,255,0.1)]' 
                  : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
              }`}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className={`w-full flex items-center justify-between p-5 cursor-pointer outline-none ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
              >
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${dir === 'rtl' ? 'ml-4' : 'mr-4'} ${
                    isOpen ? 'bg-[var(--color-brand-primary)] text-black' : 'bg-white/10 text-white'
                  }`}
                >
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </div>
                <h3 
                  className={`text-[15px] font-semibold transition-colors duration-300 flex-1 ${
                    isOpen ? 'text-white' : 'text-white/90'
                  } ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}
                >
                  {(faq.question as Record<Language, string>)[lang]}
                </h3>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className={`px-5 pb-5 pt-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                      <p 
                        className={`text-[14px] text-white/70 leading-relaxed border-t border-white/10 pt-4 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}
                      >
                        {(faq.answer as Record<Language, string>)[lang]}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
