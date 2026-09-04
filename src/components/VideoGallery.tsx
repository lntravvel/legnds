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
    <section className="relative z-10 w-full px-5 flex flex-col items-center justify-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="w-full text-center mb-6"
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-brand-primary)]/20 to-transparent border border-[var(--color-brand-primary)]/30 text-[var(--color-brand-primary)] mb-4 shadow-[0_0_20px_rgba(0,243,255,0.2)]">
          <Play size={24} className="ml-1" />
        </div>
        <h2 className={`text-[20px] md:text-[24px] font-bold text-white tracking-wide mb-1 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t('أحدث الفيديوهات الإعلانية', 'Featured Promos', 'Рекомендуемые промо', 'Promotii recomandate', 'Promotions en vedette', 'Promozioni in primo piano')}
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 w-full max-w-4xl mx-auto">
        {VIDEOS.map((vid, idx) => (
          <motion.div
            key={vid.id}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 200, damping: 20 }}
            onPointerDown={() => {
              window.dispatchEvent(new CustomEvent('app:pause-bg-music'));
            }}
            onClick={() => {
              window.dispatchEvent(new CustomEvent('app:pause-bg-music'));
            }}
            className="group relative flex flex-col items-center p-1.5 bg-[#0a0a0a] border border-white/[0.08] hover:border-[var(--color-brand-primary)]/50 rounded-[16px] md:rounded-[24px] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,243,255,0.15)] aspect-[9/16] overflow-hidden"
          >
             <iframe
                src={`https://www.youtube.com/embed/${vid.ytId}?enablejsapi=1&rel=0&modestbranding=1&playsinline=1`}
                title={vid.title}
                loading="lazy"
                className="w-full h-full rounded-[12px] sm:rounded-[16px] border-none bg-black pointer-events-auto"
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
