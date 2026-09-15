import { Language } from '../i18n/LanguageContext';

export interface ReviewItem {
  id: number;
  name: string;
  handle: string;
  role: Record<Language, string>;
  platform: 'Zeena Live';
  avatar: string;
  rating: number;
  earningsBadge: string;
  comment: Record<Language, string>;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: 1,
    name: 'Sarah Al-Mansoor',
    handle: '@sarah_live',
    role: {
      ar: 'مذيعة ماسية - زينا لايف',
      en: 'Diamond Broadcaster - Zeena Live',
      ru: 'Бриллиантовый ведущий - Zeena Live',
      ro: 'Crainic Diamant - Zeena Live',
      fr: 'Diffuseur Diamant - Zeena Live',
      it: 'Emittente Diamante - Zeena Live'
    },
    platform: 'Zeena Live',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    earningsBadge: '+$8,500/mo',
    comment: {
      ar: 'انضمامي للوكالة كان أفضل قرار مهني! الدعم الفني مستمر 24 ساعة بدون توقف، وأرباحي تضاعفت 3 مرات في أول شهرين.',
      en: 'Joining this agency was my best career decision! 24/7 non-stop technical support, and my revenue tripled in the first two months.',
      ru: 'Вступление в это агентство было лучшим карьерным решением! Круглосуточная техподдержка и утроение дохода за первые два месяца.',
      ro: 'Alăturarea acestei agenții a fost cea mai bună decizie din carieră! Suport tehnic 24/7 și veniturile mi s-au triplat în primele două luni.',
      fr: 'Rejoindre cette agence a été la meilleure décision de ma carrière ! Un support technique 24/7 et mes revenus ont triplé en deux mois.',
      it: 'Unirmi a questa agenzia è stata la migliore decisione della mia carriera! Supporto tecnico 24/7 e entrate triplicate nei primi due mesi.'
    }
  },
  {
    id: 2,
    name: 'كريم المصري',
    handle: '@kareem_live',
    role: {
      ar: 'مذيع مسابقات وباتلز',
      en: 'Battles & Host Broadcaster',
      ru: 'Ведущий баттлов и шоу',
      ro: 'Crainic de bătălii și concursuri',
      fr: 'Animateur de battles & concours',
      it: 'Conduttore di battaglie e gare'
    },
    platform: 'Zeena Live',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    earningsBadge: 'VIP Tier',
    comment: {
      ar: 'الشفافية الكاملة في الحسابات والدفع بالموعد المحدد بدون أي تأخير، فريق محترف جداً ويقف بجانب المذيع في كل لحظة.',
      en: 'Full financial transparency and on-time payouts without any delays. An extremely professional team standing by your side.',
      ru: 'Полная финансовая прозрачность и своевременные выплаты без задержек. Очень профессиональная команда, готовая поддержать в любой момент.',
      ro: 'Transparență financiară totală și plăți la timp, fără întârzieri. O echipă extrem de profesionistă alături de tine.',
      fr: 'Transparence financière totale et paiements ponctuels sans aucun retard. Une équipe extrêmement professionnelle à vos côtés.',
      it: 'Piena trasparenza finanziaria e pagamenti puntuali senza alcun ritardo. Un team estremamente professionale sempre al tuo fianco.'
    }
  },
  {
    id: 3,
    name: 'Elena Rostova',
    handle: '@elena_music',
    role: {
      ar: 'مغنية ومذيعة لايف',
      en: 'Live Singer & Streamer',
      ru: 'Певица и стример',
      ro: 'Cântăreață și streamer live',
      fr: 'Chanteuse et streameuse live',
      it: 'Cantante e streamer dal vivo'
    },
    platform: 'Zeena Live',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    earningsBadge: 'Top 5 Agency',
    comment: {
      ar: 'فريق الإدارة ساعدني في ضبط إعدادات المايك والإضاءة للوصول للمستوى الماسي. وكالة فوق الممتازة!',
      en: 'Management helped me optimize my microphone and lighting to reach Diamond tier. Undisputedly the best agency!',
      ru: 'Руководство помогло мне настроить микрофон и освещение, чтобы достичь уровня Diamond. Бесспорно лучшее агентство!',
      ro: 'Echipa m-a ajutat să-mi optimizez microfonul și luminile pentru a atinge nivelul Diamond. Fără îndoială cea mai bună agenție!',
      fr: 'La direction m\'a aidé à optimiser mon micro et mon éclairage pour atteindre le niveau Diamant. La meilleure agence !',
      it: 'La direzione mi ha aiutato a calibrare microfono e luci per raggiungere il livello Diamond. Senza dubbio la migliore agenzia!'
    }
  },
  {
    id: 4,
    name: 'عمر الشمري',
    handle: '@omar_ksa',
    role: {
      ar: 'مذيع حواري ومسابقات',
      en: 'Talk Show & Creator',
      ru: 'Ведущий ток-шоу',
      ro: 'Crainic de talk-show',
      fr: 'Animateur de talk-show',
      it: 'Conduttore di talk show'
    },
    platform: 'Zeena Live',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    earningsBadge: '+$6,200/mo',
    comment: {
      ar: 'تطوير حقيقي للبث، ما في وكالة بتقدم نصائح وبونصات إضافية مثل وكالة الأساطير. استلمت مكافأة التارقت فوراً.',
      en: 'Real stream development! No other agency offers coaching and extra bonuses like Legends. Got my target bonus instantly.',
      ru: 'Настоящее развитие эфиров! Ни одно другое агентство не предлагает таких советов и бонусов, как Legends. Получил бонус сразу.',
      ro: 'Dezvoltare reală a streamului! Nicio altă agenție nu oferă instruire și bonusuri precum Legends. Am primit bonusul imediat.',
      fr: 'Un véritable développement du stream ! Aucune agence n\'offre autant de conseils et bonus que Legends. Bonus reçu instantanément.',
      it: 'Vero sviluppo delle dirette! Nessun\'altra agenzia offre consigli e bonus come Legends. Ho ricevuto il bonus all\'istante.'
    }
  },
  {
    id: 5,
    name: 'Nour Benali',
    handle: '@nour_voice',
    role: {
      ar: 'نجمة غرف الصوت - زينا لايف',
      en: 'Voice Room Star - Zena Live',
      ru: 'Звезда голосовых комнат - Zena',
      ro: 'Vedetă camere audio - Zena Live',
      fr: 'Star des salons audio - Zena Live',
      it: 'Star delle stanze vocali - Zena'
    },
    platform: 'Zeena Live',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    earningsBadge: 'Zena Star',
    comment: {
      ar: 'برنامج زينا لايف مع الوكالة رائع جداً، المسابقات الأسبوعية حماسية ومكافآتها فورية ومضمونة بدون أي خصم.',
      en: 'Zena Live program with the agency is fantastic! The weekly competitions are exciting and rewards are instant.',
      ru: 'Программа Zena Live с агентством потрясающая! Еженедельные конкурсы захватывающие, а награды мгновенные.',
      ro: 'Programul Zena Live cu agenția este fantastic! Competițiile săptămânale sunt captivante, iar recompensele sunt instantanee.',
      fr: 'Le programme Zena Live avec l\'agence est fantastique ! Les concours hebdomadaires sont passionnants et les récompenses instantanées.',
      it: 'Il programma Zena Live con l\'agenzia è fantastico! Le competizioni settimanali sono entusiasmanti e i premi immediati.'
    }
  },
  {
    id: 6,
    name: 'فهد الدوسري',
    handle: '@fahad_battle',
    role: {
      ar: 'مذيع باتلز زينا لايف',
      en: 'Zeena Battle Master',
      ru: 'Мастер баттлов Zeena',
      ro: 'Maestru de bătălii Zeena',
      fr: 'Maître des battles Zeena',
      it: 'Maestro delle battaglie Zeena'
    },
    platform: 'Zeena Live',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    earningsBadge: '+$11,000/mo',
    comment: {
      ar: 'دعم فني في جولات الدعم والمسابقات على زينا لايف لا يوصف، إدارة واعية وواقفين مع المذيع في كل تحدي.',
      en: 'Unbelievable support during Zeena Live official competitions! The management stands firmly behind the streamer in every round.',
      ru: 'Невероятная поддержка во время официальных баттлов Zeena Live! Руководство твердо стоит за ведущего в каждом раунде.',
      ro: 'Sprijin incredibil în timpul bătăliilor oficiale Zeena Live! Conducerea este alături de streamer în fiecare rundă.',
      fr: 'Un soutien incroyable pendant les battles officielles sur Zeena Live ! La direction soutient le créateur à chaque instant.',
      it: 'Supporto incredibile durante le battaglie ufficiali di Zeena Live! La direzione è sempre al fianco dello streamer in ogni sfida.'
    }
  },
  {
    id: 7,
    name: 'Matteo Rossi',
    handle: '@matteo_live',
    role: {
      ar: 'مذيع ألعاب وموسيقى',
      en: 'Gamer & Music Broadcaster',
      ru: 'Геймер и музыкальный стример',
      ro: 'Gamer și crainic muzical',
      fr: 'Gamer & diffuseur musical',
      it: 'Gamer e streamer musicale'
    },
    platform: 'Zeena Live',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    earningsBadge: 'Verified VIP',
    comment: {
      ar: 'أفضل معاملة واحترام شفته من وكالة بث مباشر. الدعم متوفر بلغات متعددة والتحويلات المالية دقيقة وسريعة.',
      en: 'The highest level of respect and support I have ever experienced. Multilingual support and rapid, precise payments.',
      ru: 'Высочайший уровень уважения и поддержки. Многоязычная поддержка и быстрые, точные денежные переводы.',
      ro: 'Cel mai înalt nivel de respect și sprijin pe care l-am experimentat vreodată. Suport multilingv și plăți rapide și precise.',
      fr: 'Le plus haut niveau de respect et de soutien que j\'aie jamais connu. Support multilingue et virements rapides.',
      it: 'Il massimo livello di rispetto e supporto che abbia mai sperimentato. Supporto multilingue e pagamenti rapidi e precisi.'
    }
  },
  {
    id: 8,
    name: 'ياسمين خليل',
    handle: '@yasmin_star',
    role: {
      ar: 'مذيعة ولايف كوتش',
      en: 'Top Broadcaster & Host',
      ru: 'Топ-ведущая и лайф-коуч',
      ro: 'Crainic de top și gazdă',
      fr: 'Streameuse de premier plan',
      it: 'Top streamer e conduttrice'
    },
    platform: 'Zeena Live',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    earningsBadge: 'Official Badge',
    comment: {
      ar: 'حصلت على الشارة الرسمية بفضل توثيق الوكالة في أسبوعين فقط! زادت ثقة المتابعين وتضاعف عدد الداعمين.',
      en: 'I received my official verification badge in just two weeks thanks to the agency! Follower trust soared and gifts doubled.',
      ru: 'Получила официальный значок верификации всего за две недели благодаря агентству! Доверие выросло, подарки удвоились.',
      ro: 'Am primit insigna oficială de verificare în doar două săptămâni datorită agenției! Încrederea a crescut și darurile s-au dublat.',
      fr: 'J\'ai reçu mon badge officiel en seulement deux semaines grâce à l\'agence ! La confiance a grimpé et les cadeaux ont doublé.',
      it: 'Ho ottenuto il badge ufficiale in sole due settimane grazie all\'agenzia! La fiducia è cresciuta e i doni sono raddoppiati.'
    }
  },
  {
    id: 9,
    name: 'حسام طارق',
    handle: '@hossam_iq',
    role: {
      ar: 'مذيع كوميدي ومواهب',
      en: 'Comedy & Talent Streamer',
      ru: 'Комедийный стример',
      ro: 'Comediant și streamer de talente',
      fr: 'Comédien et streameur de talent',
      it: 'Comico e streamer di talenti'
    },
    platform: 'Zeena Live',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    earningsBadge: '+$5,400/mo',
    comment: {
      ar: 'أعلى نسبة أرباح في الشرق الأوسط بدون منازع، غير مكافآت التارقت الشهرية اللي بتنزل في وقتها بالظبط.',
      en: 'Undisputedly the highest revenue share in MENA, in addition to generous monthly target bonuses paid right on time.',
      ru: 'Бесспорно самая высокая доля дохода на Ближнем Востоке, плюс щедрые ежемесячные бонусы, выплачиваемые вовремя.',
      ro: 'Incontestabil cea mai mare cotă de venit din MENA, plus bonusuri lunare generoase plătite la timp.',
      fr: 'Sans conteste la part de revenus la plus élevée dans la région MENA, en plus des bonus mensuels versés à temps.',
      it: 'Indiscutibilmente la quota di entrate più alta del MENA, oltre a generosi bonus mensili pagati sempre puntualmente.'
    }
  },
  {
    id: 10,
    name: 'Sophie Laurent',
    handle: '@sophie_paris',
    role: {
      ar: 'مذيعة فنون وتصميم',
      en: 'Art & Lifestyle Broadcaster',
      ru: 'Ведущая о стиле жизни и искусстве',
      ro: 'Crainic de artă și stil de viață',
      fr: 'Créatrice Art & Mode de vie',
      it: 'Creatrice di arte e lifestyle'
    },
    platform: 'Zeena Live',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    earningsBadge: 'Diamond Tier',
    comment: {
      ar: 'فريق عمل احترافي يهتم بكل مذيع وكأنه الشريك الوحيد. الشفافية والمتابعة اليومية سر نجاح هذه الوكالة.',
      en: 'A dedicated team that cares for every creator like their only partner. Daily check-ins and pure transparency.',
      ru: 'Преданная команда, заботящаяся о каждом авторе как о единственном партнере. Ежедневная поддержка и прозрачность.',
      ro: 'O echipă dedicată care are grijă de fiecare creator ca de un partener unic. Verificări zilnice și transparență pură.',
      fr: 'Une équipe formidable qui prend soin de chaque créateur. Le suivi quotidien et la transparence font toute la différence.',
      it: 'Un team dedicato che si prende cura di ogni creatore come se fosse l\'unico partner. Trasparenza e supporto costante.'
    }
  },
  {
    id: 11,
    name: 'ماجد الزهراني',
    handle: '@majed_live',
    role: {
      ar: 'مذيع فعاليات ومسابقات',
      en: 'Event Host & Broadcaster',
      ru: 'Ведущий мероприятий',
      ro: 'Gazdă de evenimente și crainic',
      fr: 'Animateur d\'événements',
      it: 'Conduttore di eventi'
    },
    platform: 'Zeena Live',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    earningsBadge: '+$9,300/mo',
    comment: {
      ar: 'لوحة التحكم واضحة وكل نقطة وبونص محسوب بدقة تامة. وكالة تجمع بين الأمانة والاحترافية العالية.',
      en: 'The creator portal is crystal clear; every point and bonus is calculated with absolute precision and honesty.',
      ru: 'Панель управления прозрачна; каждый балл и бонус рассчитывается с абсолютной точностью и честностью.',
      ro: 'Portalul este incredibil de clar; fiecare punct și bonus este calculat cu o precizie și onestitate desăvârșită.',
      fr: 'Le portail est limpide ; chaque point et bonus est calculé avec une précision et une honnêteté exemplaires.',
      it: 'Il portale è chiarissimo; ogni punto e bonus è calcolato con assoluta precisione e massima onestà.'
    }
  },
  {
    id: 12,
    name: 'Andrei Popescu',
    handle: '@andrei_stream',
    role: {
      ar: 'مذيع محترف وبطل تحديات',
      en: 'Pro Streamer & Competitor',
      ru: 'Про-стример и участник челленджей',
      ro: 'Streamer Pro și concurent',
      fr: 'Streameur Pro & compétiteur',
      it: 'Streamer Pro e concorrente'
    },
    platform: 'Zeena Live',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    earningsBadge: 'Top Tier Pro',
    comment: {
      ar: 'وكالة رائدة تقدم دعماً حقيقياً وفرص نمو غير محدودة على زينا لايف. أنصح كل مذيع طموح بالانضمام فوراً.',
      en: 'A premier agency offering genuine support and boundless growth opportunities on Zeena Live. Highly recommended for all ambitious creators.',
      ru: 'Ведущее агентство, предлагающее реальную поддержку и безграничные возможности роста на Zeena Live. Рекомендую всем!',
      ro: 'O agenție de top care oferă suport real și oportunități nelimitate de creștere pe Zeena Live. O recomand tuturor creatorilor ambițioși.',
      fr: 'Une agence de premier plan offrant un soutien réel et des opportunités immenses sur Zeena Live. Recommandée à tous les créateurs.',
      it: 'Un\'agenzia leader che offre un supporto concreto e illimitate opportunità di crescita su Zeena Live. Consigliata a tutti i creatori!'
    }
  },
  {
    id: 13,
    name: 'ريما العبدالله',
    handle: '@rima_talks',
    role: {
      ar: 'مذيعة حوارية واجتماعية',
      en: 'Social & Podcast Host',
      ru: 'Ведущая подкастов и эфиров',
      ro: 'Gazdă de podcast și social',
      fr: 'Animatrice de podcasts',
      it: 'Conduttrice di podcast'
    },
    platform: 'Zeena Live',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    earningsBadge: 'Zena Elite',
    comment: {
      ar: 'التدريب والتوجيه اللي أخذته من كابتن الوكالة نقل طريقة تقديمي لمستوى احترافي عالي وزادت أرقامي بشكل مذهل.',
      en: 'The coaching and mentorship from the agency coach elevated my presentation skills to a high professional level.',
      ru: 'Обучение и наставничество от куратора агентства подняли мои эфиры на высокий профессиональный уровень.',
      ro: 'Instruirea și îndrumarea de la mentorul agenției au ridicat abilitățile mele de prezentare la un nivel profesionist.',
      fr: 'Le coaching et le mentorat de l\'agence ont élevé mes compétences à un niveau hautement professionnel.',
      it: 'Il coaching e la guida ricevuti dall\'agenzia hanno portato le mie capacità di conduzione a un livello professionale straordinario.'
    }
  },
  {
    id: 14,
    name: 'خالد بوعلام',
    handle: '@khaled_algerie',
    role: {
      ar: 'مذيع صاعد في زينا لايف',
      en: 'Rising Star - Zeena Live',
      ru: 'Восходящая звезда - Zeena Live',
      ro: 'Stea în ascensiune - Zeena Live',
      fr: 'Étoile montante - Zeena Live',
      it: 'Astro nascente - Zeena Live'
    },
    platform: 'Zeena Live',
    avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    earningsBadge: '+$4,200/mo',
    comment: {
      ar: 'خلال 3 أسابيع فقط حققت التارقت واستلمت بونص الانضمام كاملاً. الشفافية والوفاء بالوعود 100%.',
      en: 'Within just 3 weeks I reached my target and received the full sign-up bonus. 100% honesty and promise fulfillment.',
      ru: 'Всего за 3 недели я достиг цели и получил полный приветственный бонус. 100% честность и выполнение обещаний.',
      ro: 'În doar 3 săptămâni am atins obiectivul și am primit bonusul complet de înscriere. 100% onestitate și promisiuni respectate.',
      fr: 'En seulement 3 semaines, j\'ai atteint mon objectif et reçu l\'intégralité du bonus de bienvenue. 100% d\'honnêteté.',
      it: 'In sole 3 settimane ho raggiunto il mio target e ricevuto il bonus di benvenuto per intero. 100% onestà e serietà.'
    }
  },
  {
    id: 15,
    name: 'زينب الموسوي',
    handle: '@zainab_voice',
    role: {
      ar: 'مذيعة غرف ومسابقات - زينا',
      en: 'Host & Events - Zena Live',
      ru: 'Ведущая шоу и комнат - Zena',
      ro: 'Crainic de concursuri - Zena Live',
      fr: 'Animatrice de salons - Zena Live',
      it: 'Conduttrice di stanze - Zena'
    },
    platform: 'Zeena Live',
    avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    earningsBadge: 'Top Host',
    comment: {
      ar: 'أجواء عائلية راقية في الوكالة، كل المذيعين يدعمون بعض والإدارة تتابع كل التفاصيل وتوفر كل احتياجاتنا.',
      en: 'A prestigious, welcoming family atmosphere. Creators support each other and management pays attention to every single detail.',
      ru: 'Престижная семейная атмосфера в агентстве. Все авторы поддерживают друг друга, а руководство следит за каждой деталью.',
      ro: 'O atmosferă de familie prestigioasă în agenție. Creatorii se sprijină reciproc, iar conducerea este atentă la fiecare detaliu.',
      fr: 'Une ambiance familiale prestigieuse. Les créateurs se soutiennent mutuellement et l\'équipe est attentive à tout.',
      it: 'Una prestigiosa atmosfera di famiglia nell\'agenzia. I creatori si sostengono a vicenda e il management segue ogni singolo dettaglio.'
    }
  }
];
