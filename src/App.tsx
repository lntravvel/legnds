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
import { FloatingEarningsButton } from './components/FloatingEarningsButton';
import { SocialSection } from './components/SocialSection';
import { HomePage } from './pages/HomePage';
import { ComparisonPage } from './pages/ComparisonPage';
import { FastTrackPage } from './pages/FastTrackPage';
import { EarningsPage } from './pages/EarningsPage';
import { RewardsPage } from './pages/RewardsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { LandingApplyPage } from './pages/LandingApplyPage';
import { LuminaVisionSite } from './pages/LuminaVisionSite';
import { MonoformSite } from './pages/MonoformSite';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function MainLayout() {
  const location = useLocation();
  const isDirectLanding = ['/apply', '/join', '/landing'].includes(location.pathname);

  const [entered, setEntered] = useState(() => {
    // If user accesses ad landing page directly, immediately bypass entrance overlay for max conversion
    if (typeof window !== 'undefined') {
      const p = window.location.pathname;
      if (['/apply', '/join', '/landing'].includes(p)) return true;
    }
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

      {/* Do not show entrance overlay on ad landing pages */}
      {!isDirectLanding && <EntranceOverlay entered={entered} onEnter={handleEnter} />}

      <ParticleBackground />

      {(entered || isDirectLanding) && (
        <>
          <Navbar />
          <LanguageSelector />
          <AIChat />
          <WhatsAppButton />
          <FloatingEarningsButton />
        </>
      )}

      <AudioPlayer play={entered || isDirectLanding} />

      <div className={`relative z-10 flex flex-col min-h-[100dvh] w-full overflow-y-auto overflow-x-hidden hide-scrollbar scroll-smooth transition-opacity duration-1000 ${(entered || isDirectLanding) ? 'opacity-100' : 'opacity-0'}`}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apply" element={<LandingApplyPage />} />
          <Route path="/join" element={<LandingApplyPage />} />
          <Route path="/landing" element={<LandingApplyPage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/earnings" element={<EarningsPage />} />
          <Route path="/comparison" element={<ComparisonPage />} />
          <Route path="/fast-track" element={<FastTrackPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>

        <SocialSection />
        <Footer />
      </div>
    </main>
  );
}

export default function App() {
  const [siteMode, setSiteMode] = useState<'monoform' | 'lumina' | 'original'>('monoform');

  return (
    <ErrorBoundary key={siteMode}>
      <BrowserRouter>
        <LanguageProvider>
          {/* Floating Preview Mode Switcher (Localhost Testing Bar) */}
          <div
            dir="rtl"
            className="fixed bottom-4 left-4 z-[9999] flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-black/90 backdrop-blur-2xl border border-white/25 shadow-[0_10px_40px_rgba(0,0,0,0.9)]"
          >
            <button
              type="button"
              onClick={() => setSiteMode('monoform')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                siteMode === 'monoform'
                  ? 'bg-white text-black shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              ✦ تصميم AI Studio (GetLayers)
            </button>
            <button
              type="button"
              onClick={() => setSiteMode('lumina')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                siteMode === 'lumina'
                  ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              ✨ تصميم Lumina
            </button>
            <button
              type="button"
              onClick={() => setSiteMode('original')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                siteMode === 'original'
                  ? 'bg-cyan-500 text-black shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              🏛️ الموقع الأساسي الأصلي
            </button>
          </div>

          {siteMode === 'monoform' ? (
            <MonoformSite />
          ) : siteMode === 'lumina' ? (
            <LuminaVisionSite />
          ) : (
            <MainLayout />
          )}
        </LanguageProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
