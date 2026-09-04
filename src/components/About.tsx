import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export function About() {
  const { t, lang, dir } = useLanguage();
  return (
    <section className="relative z-10 w-full px-5 flex flex-col justify-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="group relative overflow-hidden rounded-[24px] md:rounded-[28px] p-5 sm:p-7 md:p-8 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-500 hover:shadow-[0_15px_50px_rgba(0,243,255,0.05)] hover:bg-white/[0.06] cursor-pointer max-w-3xl mx-auto w-full"
      >
        {/* Background Image with Cinematic Depth */}
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105 filter saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] via-[#060a14]/85 to-[#060a14]/40 group-hover:from-[#060a14]/90 group-hover:via-[#060a14]/70 group-hover:to-[#060a14]/25 transition-all duration-500 pointer-events-none" />

        {/* Subtle hover glow matching the Bento system */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="flex flex-col items-center text-center space-y-4 relative z-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-[20px] bg-white/5 text-[var(--color-brand-primary)] shadow-inner border border-white/5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-all duration-500">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4"/>
              <path d="M12 8h.01"/>
            </svg>
          </div>
          
          <div>
            <h2 className={`text-[20px] font-bold text-white tracking-wide mb-1 group-hover:text-[var(--color-brand-primary)] transition-colors ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t('من نحن؟', 'Who Are We?', 'Кто мы?', 'Cine suntem?', 'Qui sommes-nous ?', 'Chi siamo?')}
            </h2>
          </div>
          
          <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-brand-primary)]/50 to-transparent rounded-full my-1 opacity-50 group-hover:opacity-100 transition-opacity" />
          
          <p className={`text-white/80 leading-relaxed text-[14px] sm:text-[15px] font-medium ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t(
              'نحن وكالة الأساطير، الشبكة الرائدة لإدارة وتطوير صُناع المحتوى والمذيعين في الشرق الأوسط. نمكّن المواهب من الوصول لأقصى إمكاناتهم، مع توفير دعم حصري، إدارة احترافية، وأعلى نسبة أرباح.',
              'Legends Agency is the premier management network for top creators and live broadcasters in the MENA region. We empower talents to reach their full potential, providing exclusive tools, dedicated management, and maximum revenue.',
              'Агентство Legends — это ведущая сеть управления для лучших авторов и ведущих прямых эфиров в регионе MENA. Мы помогаем талантам полностью раскрыть свой потенциал, предоставляя эксклюзивные инструменты, профессиональное управление и максимальный доход.',
              'Agenția Legends este rețeaua principală de management pentru creatorii de top și transmisiunile live din regiunea MENA. Împuternicim talentele să-și atingă potențialul maxim, oferind instrumente exclusive, management dedicat și venituri maxime.',
              'L\'Agence Legends est le premier réseau de gestion pour les meilleurs créateurs et diffuseurs en direct de la région MENA. Nous aidons les talents à atteindre leur plein potentiel en leur fournissant des outils exclusifs, une gestion dédiée et des revenus maximaux.',
              'Legends Agency è la principale rete di gestione per i migliori creatori e conduttori di trasmissioni in diretta nella regione MENA. Aiutiamo i talenti a raggiungere il loro pieno potenziale, fornendo strumenti esclusivi, gestione dedicata e massime entrate.'
            )}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
