import { useState } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ParticleBackground } from './components/ParticleBackground';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { LinkHub } from './components/LinkHub';
import { AudioPlayer } from './components/AudioPlayer';
import { About } from './components/About';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { SuccessStories } from './components/SuccessStories';
import { FAQ } from './components/FAQ';
import { Team } from './components/Team';
import { PortalTeaser } from './components/PortalTeaser';
import { VideoGallery } from './components/VideoGallery';
import { Footer } from './components/Footer';
import { EntranceOverlay } from './components/EntranceOverlay';
import { LanguageProvider } from './i18n/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <ErrorBoundary>
    <LanguageProvider>
      <main className="relative min-h-[100dvh] w-full selection:bg-[var(--color-brand-primary)]/30 selection:text-white overflow-hidden flex flex-col items-center bg-[#02050A]">
        {/* Dramatic Cinematic Background (Handled by ParticleBackground) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#02050A]/70 via-[#02050A]/80 to-[#02050A] pointer-events-none" />

        <EntranceOverlay entered={entered} onEnter={() => setEntered(true)} />

        <ParticleBackground />
        
        {entered && <LanguageSelector />}
        
        <AudioPlayer play={entered} />
        
        <div className={`relative z-10 flex flex-col min-h-[100dvh] w-full overflow-y-auto overflow-x-hidden hide-scrollbar scroll-smooth transition-opacity duration-1000 ${entered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex-1 w-full flex flex-col pt-6 pb-24 gap-10 md:gap-20">
          <Hero />
          <Stats />
          <LinkHub />
          <About />
          <HowItWorks />
          <VideoGallery />
          <Features />
          <SuccessStories />
          <PortalTeaser />
          <FAQ />
          <Team />
        </div>
        
        <Footer />
      </div>
    </main>
    </LanguageProvider>
    </ErrorBoundary>
  );
}
