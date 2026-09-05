import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const VIDEOS = [
  { id: '1', ytId: 'a5I-eEkg2zM', title: 'Legends Agency Promo 1' },
  { id: '2', ytId: 'E1dF3-EDgs0', title: 'Legends Agency Promo 2' },
  { id: '3', ytId: 'HSfahqlYMFI', title: 'Legends Agency Promo 3' },
  { id: '4', ytId: 'MO8rRIei8go', title: 'Legends Agency Promo 4' }
];

export function VideoGallery() {
  const { lang, t } = useLanguage();

  return (
    <section className="relative z-10 w-full px-4 sm:px-6 flex flex-col items-center justify-center max-w-4xl mx-auto">
      {/* Unified Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        className="w-full text-center mb-6 sm:mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-400/30 backdrop-blur-md mb-2.5 shadow-[0_0_15px_rgba(0,243,255,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-cyan-300 uppercase font-semibold">
            {t('الفيديوهات الرسمية', 'Official Media', 'Официальные медиа', 'Media oficială', 'Médias officiels', 'Media ufficiali')}
          </span>
        </div>

        <h2 className={`text-[20px] sm:text-[24px] md:text-[26px] font-bold text-white tracking-wide mb-1.5 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t('أحدث الفيديوهات الإعلانية', 'Featured Promos & Campaigns', 'Рекомендуемые промо-ролики', 'Promoții recomandate', 'Promotions officielles', 'Promozioni in primo piano')}
        </h2>

        <p className={`text-[12.5px] sm:text-[14px] text-white/60 max-w-md mx-auto ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t(
            'شاهد عروضنا الترويجية وبطولات الدعم الكبرى لصناع المحتوى في وكالتنا.',
            'Watch our promotional spotlights and major official agency broadcast highlights.',
            'Смотрите промо-ролики и яркие моменты эфиров наших авторов.',
            'Urmărește promoțiile noastre și cele mai importante momente ale transmisiunilor.',
            'Regardez nos vidéos promotionnelles et les moments forts de nos créateurs.',
            'Guarda i nostri promo e i momenti salienti delle trasmissioni dei nostri creator.'
          )}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mx-auto">
        {VIDEOS.map((vid, idx) => (
          <motion.div
            key={vid.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: idx * 0.08, type: "spring", stiffness: 220, damping: 20 }}
            onPointerDown={() => {
              window.dispatchEvent(new CustomEvent('app:pause-bg-music'));
            }}
            onClick={() => {
              window.dispatchEvent(new CustomEvent('app:pause-bg-music'));
            }}
            className="group relative flex flex-col items-center p-1.5 bg-[#070d18] border border-white/[0.08] hover:border-cyan-400/50 rounded-[18px] sm:rounded-[22px] transition-all duration-400 hover:shadow-[0_10px_30px_rgba(0,243,255,0.2)] aspect-[9/16] overflow-hidden"
          >
            <iframe
              src={`https://www.youtube.com/embed/${vid.ytId}?enablejsapi=1&rel=0&modestbranding=1&playsinline=1`}
              title={vid.title}
              loading="lazy"
              className="w-full h-full rounded-[14px] sm:rounded-[18px] border-none bg-black pointer-events-auto"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
