import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ParticleBackground } from './components/ParticleBackground';
import { AudioPlayer } from './components/AudioPlayer';
import { Footer } from './components/Footer';
import { EntranceOverlay } from './components/EntranceOverlay';
import { LanguageProvider } from './i18n/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';
import { Navbar } from './components/Navbar';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AIChat } from './components/AIChat';
import { SocialSection } from './components/SocialSection';
import { HomePage } from './pages/HomePage';
import { ComparisonPage } from './pages/ComparisonPage';
import { FastTrackPage } from './pages/FastTrackPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function MainLayout() {
  const [entered, setEntered] = useState(() => {
    // If user already visited or direct linked
    return sessionStorage.getItem('legends_entered') === 'true';
  });

  const handleEnter = () => {
    sessionStorage.setItem('legends_entered', 'true');
    setEntered(true);
  };

  return (
    <main className="relative min-h-[100dvh] w-full selection:bg-[var(--color-brand-primary)]/30 selection:text-white overflow-hidden flex flex-col items-center bg-[#02050A]">
      {/* Cinematic Ambient Background (Handled by ParticleBackground) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#02050A]/70 via-[#02050A]/80 to-[#02050A] pointer-events-none" />

      <EntranceOverlay entered={entered} onEnter={handleEnter} />

      <ParticleBackground />

      {entered && (
        <>
          <Navbar />
          <LanguageSelector />
          <AIChat />
          <WhatsAppButton />
        </>
      )}

      <AudioPlayer play={entered} />

      <div className={`relative z-10 flex flex-col min-h-[100dvh] w-full overflow-y-auto overflow-x-hidden hide-scrollbar scroll-smooth transition-opacity duration-1000 ${entered ? 'opacity-100' : 'opacity-0'}`}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/comparison" element={<ComparisonPage />} />
          <Route path="/fast-track" element={<FastTrackPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>

        <SocialSection />
        <Footer />
      </div>
    </main>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <LanguageProvider>
          <MainLayout />
        </LanguageProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
