import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ar' | 'en' | 'ru' | 'ro' | 'fr' | 'it';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  dir: 'rtl' | 'ltr';
  t: (ar: string, en: string, ru: string, ro: string, fr: string, it: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('ar');

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang, dir]);

  const t = (ar: string, en: string, ru: string, ro: string, fr: string, it: string) => {
    switch (lang) {
      case 'ar': return ar;
      case 'en': return en;
      case 'ru': return ru;
      case 'ro': return ro;
      case 'fr': return fr;
      case 'it': return it;
      default: return ar;
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir, t }}>
      <div dir={dir} className={lang === 'ar' ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
