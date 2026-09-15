import { motion } from 'motion/react';
import { BrandIcons } from './BrandIcons';
import { useLanguage } from '../i18n/LanguageContext';

export function WhatsAppButton() {
  const { lang, t } = useLanguage();

  const message = lang === 'ar'
    ? 'السلام عليكم، أود الاستفسار عن الانضمام لوكالة الأساطير'
    : 'Hello, I would like to inquire about joining Legends Agency';

  const waUrl = `https://wa.me/447460018974?text=${encodeURIComponent(message)}`;

  return (
    <motion.aside
      aria-label="Quick WhatsApp Contact"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-40"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={t('تواصل سريع عبر واتساب الإدارة (24/7)', 'Chat with Agency WhatsApp (24/7)', 'Чат в WhatsApp (24/7)', 'Chat WhatsApp (24/7)', 'Chat WhatsApp (24/7)', 'Chat WhatsApp (24/7)')}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#06120b]/90 hover:bg-[#0a2012] border border-[#25D366]/40 hover:border-[#25D366] shadow-[0_8px_30px_rgba(37,211,102,0.35)] backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        aria-label={t('تواصل سريع عبر واتساب', 'Quick WhatsApp Chat', 'Чат в WhatsApp', 'Chat pe WhatsApp', 'Chat WhatsApp', 'Chat su WhatsApp')}
      >
        {/* Pulsing Emerald Halo */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-ping pointer-events-none opacity-60" style={{ animationDuration: '3s' }} />

        {/* WhatsApp Icon */}
        <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center shrink-0">
          <BrandIcons.WhatsApp className="w-full h-full drop-shadow-[0_0_8px_rgba(37,211,102,0.6)]" />
          {/* Online status green dot */}
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#06120b] animate-pulse" />
        </div>
      </a>
    </motion.aside>
  );
}
