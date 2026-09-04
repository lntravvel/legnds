<div align="center">
  <img src="public/assets/legends_eagle_clean.png" alt="Legends Agency Logo" width="120" height="120" />
  <h1>Legends Agency | وكالة الأساطير</h1>
  <p><strong>Where Digital Legends Are Born</strong></p>
  <p>Premium landing page for Legends Agency — the premier management network for top creators and live broadcasters on Tango & Zeena Live.</p>

  ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
</div>

---

## ✨ Features

- 🌐 **6 Languages** — Arabic, English, Russian, Romanian, French, Italian (with full RTL support)
- 🎬 **Cinematic Animations** — Moving star field, shooting stars, 3D eagle logo with wing-flap effect
- 🎵 **Background Music** — Ambient audio with smooth fade-in and auto-pause during video playback
- 📱 **Mobile-First** — Responsive design optimized for all screen sizes
- 🎥 **Video Gallery** — Embedded YouTube promotional videos
- ⭐ **Success Stories** — Infinite scrolling marquee of creator testimonials
- 🔗 **Link Hub** — All official agency links and social media in one place
- 🛡️ **Secure** — Origin-checked message handlers, security headers, and error boundaries

## 🚀 Quick Start

**Prerequisites:** [Node.js](https://nodejs.org/) (v18+)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

## 📦 Build

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

## 🗂️ Project Structure

```
src/
├── App.tsx                    # Root application component
├── main.tsx                   # Entry point
├── index.css                  # Global styles & Tailwind config
├── components/
│   ├── About.tsx              # About section
│   ├── AdminCrest.tsx         # SVG admin insignia crests
│   ├── AudioPlayer.tsx        # Background music player
│   ├── BrandIcons.tsx         # Social media brand SVG icons
│   ├── EntranceOverlay.tsx    # Entry screen overlay
│   ├── ErrorBoundary.tsx      # React error boundary
│   ├── FAQ.tsx                # Expandable FAQ accordion
│   ├── Features.tsx           # Feature cards grid
│   ├── Footer.tsx             # Site footer
│   ├── Hero.tsx               # Hero section with animated eagle
│   ├── HowItWorks.tsx         # Onboarding steps timeline
│   ├── LanguageSelector.tsx   # Language picker dropdown
│   ├── LegendsBrandTitle.tsx  # Brand typography component
│   ├── LinkHub.tsx            # Action links bento grid
│   ├── ParticleBackground.tsx # Canvas star field animation
│   ├── PortalTeaser.tsx       # Portal promo section
│   ├── Separator.tsx          # Animated divider
│   ├── Stats.tsx              # Statistics section
│   ├── SuccessStories.tsx     # Reviews marquee carousel
│   ├── Team.tsx               # Management team cards
│   └── VideoGallery.tsx       # YouTube video gallery
├── data/
│   ├── links.ts               # Agency links data
│   ├── reviews.ts             # Creator testimonials data
│   └── team.ts                # Team members data
└── i18n/
    └── LanguageContext.tsx     # Language context provider
```

## 🛡️ Security

- **postMessage validation** — Origin-checked event listeners for YouTube iframe communication
- **Error Boundary** — Graceful error handling with styled fallback UI
- **Security Headers** — X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, and Permissions-Policy via Vercel
- **TypeScript Strict Mode** — Full type safety with `strict: true`

## 🌍 Deployment

The project is configured for deployment on [Vercel](https://vercel.com):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 📄 License

All rights reserved © 2024-2026 Legends Agency.
