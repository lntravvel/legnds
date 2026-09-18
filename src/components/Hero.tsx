import { motion } from 'motion/react';
import { BrandIcons } from './BrandIcons';
import { useLanguage } from '../i18n/LanguageContext';
import { LegendsBrandTitle } from './LegendsBrandTitle';
import { HeroVideo } from './HeroVideo';

const SHARDS = Array.from({ length: 20 }).map((_, i) => {
  const angle = (i / 20) * Math.PI * 2;
  const distance = 150 + Math.random() * 120;
  return {
    id: i,
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    rotate: (Math.random() - 0.5) * 500,
    scale: Math.random() * 0.7 + 0.3,
    clipPath: `polygon(${Math.random() * 100}% 0%, 100% ${Math.random() * 100}%, ${Math.random() * 100}% 100%, 0% ${Math.random() * 100}%)`
  };
});

function LegendsLogo() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center pt-2 sm:pt-4">
      <div className="relative mb-8 mt-4">
        {/* Intense Initial Flash Effect */}
        <motion.div
          initial={{ opacity: 1, scale: 0 }}
          animate={{ 
            opacity: [1, 1, 0], 
            scale: [0.5, 1.5, 2.5] 
          }}
          transition={{ 
            duration: 1.2, 
            times: [0, 0.2, 1], 
            ease: "easeOut" 
          }}
          className="absolute inset-0 rounded-full bg-white mix-blend-overlay z-20 pointer-events-none"
        />
        
        {/* Steady Neon Aura */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 0.6, 0.4], scale: [0.8, 1.1, 1] }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 blur-[40px] rounded-full bg-[var(--color-brand-primary)] opacity-40 z-0"
        />
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute inset-0 blur-3xl rounded-full bg-blue-600/30 opacity-40 z-0"
        />
        
        {/* Official Logo with high-intensity entry keyframes */}
        <motion.div 
          initial={{ scale: 0.3, opacity: 0, filter: 'brightness(3) blur(10px)' }}
          animate={{ 
            scale: [0.3, 1.15, 0.95, 1],
            opacity: [0, 1, 1, 1],
            filter: [
              'brightness(4) blur(15px) drop-shadow(0 0 0px rgba(0,243,255,0))', 
              'brightness(2) blur(0px) drop-shadow(0 0 80px rgba(0,243,255,1))', 
              'brightness(1) blur(0px) drop-shadow(0 0 15px rgba(0,243,255,0.6))',
              'brightness(1) blur(0px) drop-shadow(0 0 25px rgba(0,243,255,0.4))'
            ]
          }}
          transition={{
            duration: 1.4,
            times: [0, 0.3, 0.6, 1],
            ease: [0.25, 1, 0.5, 1]
          }}
          className="relative z-10 w-44 h-44 md:w-56 md:h-56 flex items-center justify-center"
        >
          {/* Shattering Glass Breakout Effect */}
          <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
            {SHARDS.map((shard) => (
              <motion.div
                key={shard.id}
                className="absolute w-24 h-24 bg-white/20 backdrop-blur-md border border-white/50"
                style={{ clipPath: shard.clipPath }}
                initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }}
                animate={{ 
                  x: shard.x, 
                  y: shard.y, 
                  rotate: shard.rotate, 
                  opacity: 0, 
                  scale: shard.scale 
                }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }} // Triggered at the punch impact
              />
            ))}
            {/* Impact Shockwave Ring */}
            <motion.div
              className="absolute w-full h-full rounded-full border-[3px] border-[var(--color-brand-primary)]"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 2.5, 3.5], opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            />
            {/* Bright Flash */}
            <motion.div
              className="absolute inset-0 bg-white rounded-full blur-md"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 1.5, 2], opacity: [0, 0.9, 0] }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            />
          </div>

          {/* Advanced Layered 3D Flapping Eagle - 100% Text Free, Full Tail Completely Visible */}
          <div className="relative w-48 h-38 md:w-56 md:h-44 flex items-center justify-center drop-shadow-[0_0_25px_rgba(0,243,255,0.6)]" style={{ perspective: '1200px' }}>
            <div className="relative w-full h-full" style={{ perspective: '1200px' }}>
              
              {/* BASE LAYER (Eagle Body & Full Tail) */}
              <motion.div
                className="absolute inset-0 z-10"
                style={{ 
                  clipPath: 'polygon(35% 0%, 65% 0%, 65% 100%, 35% 100%)' 
                }}
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src="/assets/legends_eagle_clean.png" className="w-full h-full object-contain" alt="Legends Eagle Body" style={{ imageRendering: 'auto' }} />
              </motion.div>

              {/* LEFT WING */}
              <motion.div
                className="absolute inset-0 z-20"
                style={{ 
                  clipPath: 'polygon(0% 0%, 45% 0%, 45% 100%, 0% 100%)',
                  transformOrigin: '42% 45%'
                }}
                animate={{ 
                  rotateY: [0, 50, -10, 0],
                  rotateZ: [0, -3, 1, 0],
                  y: [-2, 2, -2]
                }}
                transition={{ 
                  rotateY: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                  rotateZ: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <img src="/assets/legends_eagle_clean.png" className="w-full h-full object-contain" alt="Left Wing" style={{ imageRendering: 'auto' }} />
              </motion.div>

              {/* RIGHT WING */}
              <motion.div
                className="absolute inset-0 z-20"
                style={{ 
                  clipPath: 'polygon(55% 0%, 100% 0%, 100% 100%, 55% 100%)',
                  transformOrigin: '58% 45%'
                }}
                animate={{ 
                  rotateY: [0, -50, 10, 0],
                  rotateZ: [0, 3, -1, 0],
                  y: [-2, 2, -2]
                }}
                transition={{ 
                  rotateY: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                  rotateZ: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <img src="/assets/legends_eagle_clean.png" className="w-full h-full object-contain" alt="Right Wing" style={{ imageRendering: 'auto' }} />
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Brand Title Directly Beneath the Eagle */}
      <LegendsBrandTitle size="md" className="-mt-1 mb-6" />
    </div>
  );
}

function PartnerLogos() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center mt-2 mb-8">
      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4 font-semibold">
        {t('الوكالة والبرنامج الرسمي المعتمد', 'Official Accredited Program', 'Официальная аккредитованная программа', 'Program oficial acreditat', 'Programme officiel accrédité', 'Programma ufficiale accreditato')}
      </p>
      
      <div className="flex items-center justify-center">
        {/* Xena Live Official Partner */}
        <motion.div 
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2.5 transition-all duration-300 shadow-[0_0_35px_rgba(255,0,128,0.5)] rounded-[22px] sm:rounded-[26px] group"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[22px] sm:rounded-[26px] bg-white flex items-center justify-center shadow-[0_0_25px_rgba(255,0,128,0.45)] border-2 border-pink-500 p-2 sm:p-3 transition-transform duration-300 group-hover:scale-105">
             <BrandIcons.Xena className="w-full h-full" />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-950/60 border border-pink-500/40">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping" />
            <span className="text-[11.5px] font-mono text-pink-300 font-bold tracking-wider uppercase">XENA LIVE OFFICIAL</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Hero() {
  const { t, lang } = useLanguage();
  return (
    <header className="relative z-10 w-full flex flex-col items-center text-center">
      {/* Full-Bleed Video taking the Hero section completely (borderless, edge-to-edge) */}
      <HeroVideo />

      {/* Elegant Visual Transition between Video and Logo */}
      <div className="relative z-10 flex items-center justify-center w-full mt-4 mb-2 pointer-events-none" aria-hidden="true">
        <div className="w-32 sm:w-48 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </div>

      {/* Content Section positioned with generous breathing room underneath the video */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-3xl mx-auto pt-4 sm:pt-8 pb-4">
        <LegendsLogo />
        <PartnerLogos />
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full"
        >
          <h3 className={`text-[22px] md:text-[28px] leading-tight font-bold text-white mb-2 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t(
              'هنا تُصنع أساطير البث المباشر',
              'Where Digital Legends Are Born',
              'Здесь рождаются цифровые легенды',
              'Aici se nasc legendele digitale',
              'Où naissent les légendes numériques',
              'Dove nascono le leggende digitali'
            )}
          </h3>
          <p className={`text-[14px] md:text-[16px] text-white/60 leading-relaxed font-normal mt-4 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t(
              'انضم إلى شبكة النخبة من المذيعين وصناع المحتوى على زينا لايف. نحن نقدم إدارة من الدرجة الأولى ودعماً حصرياً على مدار الساعة.',
              'Join the elite network of broadcasters and creators on Xena Live. We provide top-tier management and 24/7 support.',
              'Присоединяйтесь к элитной сети ведущих на Xena Live. Мы обеспечиваем управление высшего уровня и круглосуточную поддержку.',
              'Alătură-te rețelei de elită a crainicilor pe Xena Live. Oferim management de top și suport 24/7.',
              'Rejoignez le réseau d\'élite des diffuseurs sur Xena Live. Nous offrons une gestion de premier plan et un support 24/7.',
              'Unisciti alla rete d\'élite di emittenti su Xena Live. Offriamo una gestione di alto livello e supporto 24/7.'
            )}
          </p>
        </motion.div>
      </div>
    </header>
  );
}
