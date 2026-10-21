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
      ar: 'نرحب بكافة صناع المحتوى الطموحين على منصة زينا لايف، سواء كنت في بداية مشوارك أو من كبار المحترفين. وكالتنا تحتضن مواهب من كافة أنحاء العالم.',
      en: 'We welcome all ambitious content creators on the Xena Live platform, whether you are just starting or are a top professional. Our agency embraces talents from all over the world.',
      ru: 'Мы приветствуем всех амбициозных создателей контента на платформе Xena Live, независимо от того, начинаете ли вы или являетесь ведущим профессионалом. Наше агентство объединяет таланты со всего мира.',
      ro: 'Salutăm toți creatorii de conținut ambițioși de pe platforma Xena Live, indiferent dacă sunteți la început sau un profesionist de top. Agenția noastră îmbrățișează talente din întreaga lume.',
      fr: 'Nous accueillons tous les créateurs de contenu ambitieux sur la plateforme Xena Live, que vous débutiez ou que vous soyez un professionnel de haut niveau. Notre agence accueille des talents du monde entier.',
      it: 'Diamo il benvenuto a tutti gli ambiziosi creatori di contenuti sulla piattaforma Xena Live, che tu stia iniziando o sia un professionista di alto livello. La nostra agenzia abbraccia talenti da tutto il mondo.'
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
      ar: 'حسب نظام تطبيق Xena Live الرسمي، ويوضحه فريق الإدارة بعد التسجيل.',
      en: 'According to Xena Live platform guidelines, explained by the management team after registration.',
      ru: 'В соответствии с официальными правилами Xena Live, подробно объясняется администрацией после регистрации.',
      ro: 'Conform sistemului oficial Xena Live, explicat de echipa de conducere după înregistrare.',
      fr: 'Selon le système officiel de l\'application Xena Live, expliqué par l\'équipe après inscription.',
      it: 'Secondo il sistema ufficiale dell\'app Xena Live, spiegato dal team di gestione dopo la registrazione.'
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
      ar: 'نوفر لك توجيهاً مستمراً لتحسين جودة البث، دعماً فنياً سريعاً للمشاكل التقنية، وإرشادات للالتزام بسياسات التطبيق.',
      en: 'We provide you with ongoing mentorship to improve stream quality, fast technical support, and guidance on platform policies.',
      ru: 'Мы предоставляем наставничество для улучшения качества эфира, оперативную техподдержку и рекомендации по правилам платформы.',
      ro: 'Vă oferim îndrumare continuă pentru îmbunătățirea transmisiunii, suport tehnic rapid și îndrumare privind politicile platformei.',
      fr: 'Nous vous offrons un encadrement continu pour améliorer la diffusion, un support technique rapide et des conseils sur les règles.',
      it: 'Ti forniamo tutoraggio continuo per migliorare la qualità dello streaming, supporto tecnico rapido e linee guida sulle regole.'
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
    <section className="relative z-10 w-full px-4 sm:px-6 flex flex-col items-center max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        className="w-full text-center mb-6 sm:mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-400/30 backdrop-blur-md mb-2.5 shadow-[0_0_15px_rgba(0,243,255,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-cyan-300 uppercase font-semibold">
            {t('الأسئلة الشائعة', 'Frequently Asked Questions', 'Частые вопросы', 'Întrebări frecvente', 'FAQ', 'Domande frequenti')}
          </span>
        </div>

        <h2 className={`text-[20px] sm:text-[24px] md:text-[26px] font-bold text-white tracking-wide mb-1.5 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t('الأسئلة الشائعة وإجاباتها', 'Common Questions & Answers', 'Часто задаваемые вопросы', 'Întrebări frecvente și răspunsuri', 'Questions fréquemment posées', 'Domande frequenti e risposte')}
        </h2>

        <p className={`text-[12.5px] sm:text-[14px] text-white/60 max-w-md mx-auto ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t(
            'إجابات مباشرة ودقيقة لكل ما يهمك حول شروط الانضمام، الدعم الفني، والتطوير المستمر.',
            'Direct and transparent answers regarding requirements, technical support, and continuous growth.',
            'Прямые ответы обо всех условиях вступления, техподдержке и развитии.',
            'Răspunsuri directe despre condițiile de aderare, suportul tehnic și dezvoltare.',
            'Des réponses claires sur les conditions d\'adhésion, le support technique et le développement.',
            'Risposte dirette sulle condizioni di adesione, supporto tecnico e sviluppo.'
          )}
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
