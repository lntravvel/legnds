import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage, Language } from '../i18n/LanguageContext';
import { REVIEWS, ReviewItem } from '../data/reviews';

function ReviewCard({ review, lang, dir }: { review: ReviewItem; lang: Language; dir: 'ltr' | 'rtl' }) {
  return (
    <div
      dir={dir}
      className="group relative w-[280px] sm:w-[320px] p-4 sm:p-4.5 rounded-[22px] sm:rounded-[24px] bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,0,128,0.15)] hover:bg-white/[0.05] shrink-0 flex flex-col justify-between"
    >
      {/* Subtle Brand Glow */}
      <div 
        className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-10 group-hover:opacity-25 blur-2xl transition-opacity duration-500 pointer-events-none"
        style={{ background: '#ff0080' }}
      />

      {/* Top Quote Icon */}
      <div className={`absolute top-3.5 ${dir === 'rtl' ? 'left-3.5' : 'right-3.5'} opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}>
        <Quote size={26} className={`text-[var(--color-brand-primary)] ${dir === 'rtl' ? '-scale-x-100' : ''}`} />
      </div>

      {/* Review Header with Avatar and Details */}
      <div className="relative z-10 flex items-center gap-3 mb-3">
        <div className="relative shrink-0">
          <img
            src={review.avatar}
            alt={review.name}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white/10 group-hover:border-[var(--color-brand-primary)] transition-colors duration-300 shadow-sm"
          />
          <div className="absolute -bottom-0.5 -right-0.5 bg-emerald-500 text-black rounded-full p-0.5 shadow-sm">
            <CheckCircle2 size={11} className="text-white fill-emerald-500" />
          </div>
        </div>

        <div className="flex flex-col min-w-0 flex-1">
          <h4 className="text-white font-bold text-[13.5px] sm:text-sm tracking-wide truncate group-hover:text-[var(--color-brand-primary)] transition-colors">
            {review.name}
          </h4>
          <span className="text-[11px] text-white/50 truncate font-mono">
            {review.handle}
          </span>
          <span className="text-[10.5px] font-medium text-white/70 truncate mt-0.5">
            {review.role[lang]}
          </span>
        </div>
      </div>

      {/* Rating Stars and Badges */}
      <div className="relative z-10 flex items-center justify-between mb-2.5 pb-2 border-b border-white/[0.06]">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, sIdx) => (
            <Star
              key={sIdx}
              size={12}
              className="text-amber-400 fill-amber-400 drop-shadow-[0_0_3px_rgba(251,191,36,0.3)]"
            />
          ))}
        </div>

        {/* Platform & Earnings Badge */}
        <div className="flex items-center gap-1.5">
          <span className="text-[9.5px] font-bold px-1.5 py-0.5 rounded-full border bg-pink-500/10 text-pink-400 border-pink-500/30">
            Xena Live
          </span>
          <span className="text-[9.5px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {review.earningsBadge}
          </span>
        </div>
      </div>

      {/* Comment Text */}
      <p className={`relative z-10 text-[12.5px] sm:text-[13px] leading-relaxed text-white/85 font-normal italic ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
        "{review.comment[lang]}"
      </p>
    </div>
  );
}

export function SuccessStories() {
  const { lang, t, dir } = useLanguage();

  return (
    <section className="relative z-10 w-full py-8 overflow-hidden">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="w-full text-center px-4 sm:px-6 max-w-4xl mx-auto mb-7"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-400/30 backdrop-blur-md mb-2.5 shadow-[0_0_15px_rgba(0,243,255,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-cyan-300 uppercase font-semibold">
            {t('آراء وتجارب الأبطال', 'Creator Testimonials', 'Отзывы наших авторов', 'Povești de succes', 'Témoignages des créateurs', 'Recensioni dei creatori')}
          </span>
        </div>

        <h2 className={`text-[20px] sm:text-[24px] md:text-[26px] font-bold text-white tracking-wide mb-1.5 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t('قصص نجاح أبطال وكالة الأساطير', 'Legends Agency Success Stories', 'Истории успеха агентства Legends', 'Poveștile de succes ale agenției Legends', 'Histoires de réussite de l\'agence Legends', 'Storie di successo dell\'agenzia Legends')}
        </h2>
        
        <p className={`text-[12.5px] sm:text-[14px] text-white/60 max-w-lg mx-auto ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {t(
            'نفتخر بدعم وتطوير نخبة المذيعين والمذيعات على زينا لايف لتحقيق أعلى العوائد والمكافآت الحصرية.',
            'Proud to empower top creators on Xena Live to maximize their earnings and exclusive bonuses.',
            'Гордимся поддержкой лучших авторов на Xena Live для достижения максимального дохода.',
            'Mândri să sprijinim creatorii de top pe Xena Live să își maximizeze veniturile.',
            'Fiers de soutenir nos créateurs sur Xena Live pour maximiser leurs revenus.',
            'Orgogliosi di supportare i migliori creator su Xena Live per massimizzare i loro guadagni.'
          )}
        </p>
      </motion.div>

      {/* Infinite Seamless Marquee: Two identical tracks moving leftward in continuous lockstep */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Soft Left & Right Edge Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-24 bg-gradient-to-r from-[var(--color-bg-dark)] via-[var(--color-bg-dark)]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-24 bg-gradient-to-l from-[var(--color-bg-dark)] via-[var(--color-bg-dark)]/90 to-transparent z-20 pointer-events-none" />

        {/* Container with dir="ltr" to enforce absolute leftward translation */}
        <div dir="ltr" className="marquee-wrapper flex overflow-hidden select-none w-full cursor-grab active:cursor-grabbing">
          {/* Track 1 */}
          <div className="flex shrink-0 items-stretch gap-3 sm:gap-4 pr-3 sm:pr-4 animate-marquee-track">
            {REVIEWS.map((review) => (
              <ReviewCard key={`track1-${review.id}`} review={review} lang={lang} dir={dir} />
            ))}
          </div>

          {/* Track 2 (Cloned for seamless infinite wrap-around) */}
          <div aria-hidden="true" className="flex shrink-0 items-stretch gap-3 sm:gap-4 pr-3 sm:pr-4 animate-marquee-track">
            {REVIEWS.map((review) => (
              <ReviewCard key={`track2-${review.id}`} review={review} lang={lang} dir={dir} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
