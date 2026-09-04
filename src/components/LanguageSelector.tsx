import { Globe } from 'lucide-react';
import { useLanguage, Language } from '../i18n/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: 'ar', name: 'العربية', flag: '🇦🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

export function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Click-away backdrop overlay when open */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-transparent" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      <div className="relative z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full hover:border-[var(--color-brand-primary)]/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer"
          aria-label="Change language"
        >
          <Globe size={18} className="text-[var(--color-brand-primary)]" />
          <span className="text-white text-sm font-medium">{currentLang.flag}</span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 w-40 bg-[#111]/95 backdrop-blur-xl border border-white/10 rounded-[16px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-50"
            >
              <div className="flex flex-col py-1.5">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-2.5 text-sm text-start transition-colors duration-200 cursor-pointer ${
                      lang === l.code ? 'bg-[var(--color-brand-primary)]/15 text-[var(--color-brand-primary)] font-bold' : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="text-base leading-none">{l.flag}</span>
                    <span className="font-medium">{l.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
