import React from 'react';

interface AdminCrestProps {
  id: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ADMIN_DOMINION_INFO: Record<string, {
  titleAr: string;
  titleEn: string;
  sigilNameAr: string;
  sigilNameEn: string;
  powerColor: string;
  borderGlow: string;
  badgeBg: string;
  badgeText: string;
}> = {
  owner: {
    titleAr: 'السيادة والعرش الملكي',
    titleEn: 'SUPREME SOVEREIGN',
    sigilNameAr: 'الصقر الإمبراطوري المتوج',
    sigilNameEn: 'Imperial Crowned Falcon',
    powerColor: '#fbbf24',
    borderGlow: 'rgba(251, 191, 36, 0.6)',
    badgeBg: 'bg-amber-950/70 border-amber-400/50',
    badgeText: 'text-amber-300'
  },
  'admin-1': {
    titleAr: 'صقر الهيمنة والاقتحام',
    titleEn: 'APEX VANGUARD',
    sigilNameAr: 'صقر السيطرة التكتيكي',
    sigilNameEn: 'Tactical Apex Falcon',
    powerColor: '#00f3ff',
    borderGlow: 'rgba(0, 243, 255, 0.55)',
    badgeBg: 'bg-cyan-950/70 border-cyan-400/50',
    badgeText: 'text-cyan-300'
  },
  'admin-2': {
    titleAr: 'درع النفوذ والسيطرة',
    titleEn: 'IRON OVERLORD',
    sigilNameAr: 'الدرع الفولاذي والأسد الملكي',
    sigilNameEn: 'Iron Aegis Lion',
    powerColor: '#10b981',
    borderGlow: 'rgba(16, 185, 129, 0.55)',
    badgeBg: 'bg-emerald-950/70 border-emerald-400/50',
    badgeText: 'text-emerald-300'
  },
  'admin-3': {
    titleAr: 'صاعقة القوة والريادة',
    titleEn: 'THUNDER DOMINION',
    sigilNameAr: 'صاعقة النفوذ الجوية',
    sigilNameEn: 'Storm Lightning Hawk',
    powerColor: '#a855f7',
    borderGlow: 'rgba(168, 85, 247, 0.55)',
    badgeBg: 'bg-purple-950/70 border-purple-400/50',
    badgeText: 'text-purple-300'
  },
  'admin-4': {
    titleAr: 'نصل الظل والسيطرة',
    titleEn: 'SHADOW OVERLORD',
    sigilNameAr: 'النصل الأسود الحاسم',
    sigilNameEn: 'Obsidian Damascus Blade',
    powerColor: '#f43f5e',
    borderGlow: 'rgba(244, 63, 94, 0.55)',
    badgeBg: 'bg-rose-950/70 border-rose-400/50',
    badgeText: 'text-rose-300'
  }
};

export function AdminCrest({ id, className = '', size = 'md' }: AdminCrestProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16 md:w-20 md:h-20',
    lg: 'w-24 h-24 md:w-28 md:h-28'
  }[size];

  // 1. ABDULLAH: Supreme Imperial Crowned Falcon (Distinct, Gold, Royal Dominance)
  if (id === 'owner') {
    return (
      <div className={`relative ${sizeClasses} ${className} flex items-center justify-center filter drop-shadow-[0_0_22px_rgba(251,191,36,0.65)] select-none`}>
        {/* Background rotating cosmic golden halo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-600/30 via-amber-400/15 to-transparent animate-spin" style={{ animationDuration: '24s' }} />
        
        <svg viewBox="0 0 120 120" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff2a8" />
              <stop offset="40%" stopColor="#fbbf24" />
              <stop offset="75%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            <linearGradient id="goldWingL" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <radialGradient id="goldCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#fbbf24" />
              <stop offset="90%" stopColor="#92400e" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>
            <radialGradient id="cyanSpark" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#00f3ff" />
              <stop offset="100%" stopColor="#0369a1" />
            </radialGradient>
          </defs>

          {/* Imperial Double Octagon Crest Seal */}
          <polygon 
            points="60,6 76,14 94,14 102,32 114,48 110,66 114,84 102,100 84,106 60,116 36,106 18,100 6,84 10,66 6,48 18,32 26,14 44,14" 
            fill="#090d14" 
            stroke="url(#goldGrad1)" 
            strokeWidth="1.8"
            strokeDasharray="2 1"
          />

          {/* Inner Golden Ring */}
          <circle cx="60" cy="62" r="42" stroke="url(#goldGrad1)" strokeWidth="1.2" strokeOpacity="0.7" />
          <circle cx="60" cy="62" r="38" stroke="#fbbf24" strokeWidth="0.8" strokeDasharray="3 3" />

          {/* Left Wing */}
          <path 
            d="M58 58 C50 42, 32 36, 18 42 C24 50, 32 54, 40 56 C26 56, 18 64, 24 72 C32 72, 42 68, 52 66 C42 74, 34 82, 40 88 C48 88, 54 78, 58 70 Z" 
            fill="url(#goldWingL)" 
            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
          />

          {/* Right Wing */}
          <path 
            d="M62 58 C70 42, 88 36, 102 42 C96 50, 88 54, 80 56 C94 56, 102 64, 96 72 C88 72, 78 68, 68 66 C78 74, 86 82, 80 88 C72 88, 66 78, 62 70 Z" 
            fill="url(#goldWingL)" 
            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
          />

          {/* Center Falcon Body & Sharp Tail Dagger */}
          <path 
            d="M60 48 L66 62 L64 88 L60 102 L56 88 L54 62 Z" 
            fill="url(#goldGrad1)" 
            stroke="#fef08a" 
            strokeWidth="0.8"
          />

          {/* Central Sovereign Heart Crystal */}
          <circle cx="60" cy="64" r="7.5" fill="url(#cyanSpark)" stroke="#ffffff" strokeWidth="1.2" />
          <circle cx="60" cy="64" r="3" fill="#ffffff" />

          {/* Grand Imperial 5-Spire Crown on Apex */}
          <g transform="translate(42, 10) scale(0.6)">
            {/* Crown Base */}
            <path d="M5 40 L55 40 L50 48 L10 48 Z" fill="url(#goldGrad1)" stroke="#ffe57f" strokeWidth="1" />
            {/* 5 Spikes with Jewels */}
            <polygon points="5,40 10,18 20,32 30,8 40,32 50,18 55,40" fill="url(#goldGrad1)" stroke="#ffffff" strokeWidth="1.2" />
            <circle cx="30" cy="7" r="3.5" fill="#00f3ff" stroke="#ffffff" strokeWidth="1" />
            <circle cx="10" cy="17" r="2.5" fill="#ef4444" stroke="#ffffff" strokeWidth="0.8" />
            <circle cx="50" cy="17" r="2.5" fill="#ef4444" stroke="#ffffff" strokeWidth="0.8" />
            <circle cx="20" cy="31" r="2" fill="#fbbf24" />
            <circle cx="40" cy="31" r="2" fill="#fbbf24" />
          </g>

          {/* Regal Star Flare */}
          <polygon points="60,60 62,64 66,64 63,67 64,71 60,68 56,71 57,67 54,64 58,64" fill="#ffffff" opacity="0.9" />
        </svg>
      </div>
    );
  }

  // 2. KHALED: Tactical Apex Vanguard Falcon (High-Tech Cyan Dominion)
  if (id === 'admin-1') {
    return (
      <div className={`relative ${sizeClasses} ${className} flex items-center justify-center filter drop-shadow-[0_0_20px_rgba(0,243,255,0.6)] select-none`}>
        <div className="absolute inset-0 rounded-full bg-cyan-500/10 animate-pulse" />
        
        <svg viewBox="0 0 120 120" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#38bdf8" />
              <stop offset="70%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#082f49" />
            </linearGradient>
            <linearGradient id="wingCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="50%" stopColor="#00f3ff" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
          </defs>

          {/* Cybernetic Shield Base */}
          <polygon 
            points="60,8 106,24 98,78 60,112 22,78 14,24" 
            fill="#06101c" 
            stroke="url(#cyanGrad)" 
            strokeWidth="1.8" 
          />
          <polygon 
            points="60,16 98,30 90,74 60,102 30,74 22,30" 
            fill="#020810" 
            stroke="#00f3ff" 
            strokeWidth="0.8" 
            strokeOpacity="0.6"
          />

          {/* Sweeping Razor Wings of Khaled */}
          <path 
            d="M58 52 L26 28 L36 44 L20 48 L34 60 L18 68 L42 74 L56 68 Z" 
            fill="url(#wingCyan)" 
            stroke="#ffffff" 
            strokeWidth="0.8"
          />
          <path 
            d="M62 52 L94 28 L84 44 L100 48 L86 60 L102 68 L78 74 L64 68 Z" 
            fill="url(#wingCyan)" 
            stroke="#ffffff" 
            strokeWidth="0.8"
          />

          {/* Tactical Falcon Head & Beak */}
          <polygon points="60,32 66,46 64,58 60,66 56,58 54,46" fill="#ffffff" />
          <polygon points="60,66 63,54 57,54" fill="#00f3ff" />
          <circle cx="58" cy="46" r="1.5" fill="#0284c7" />
          <circle cx="62" cy="46" r="1.5" fill="#0284c7" />

          {/* Central Dominion Chevron Matrix */}
          <polygon points="60,70 70,82 60,94 50,82" fill="#00f3ff" fillOpacity="0.8" stroke="#ffffff" strokeWidth="1" />
          <polygon points="60,76 66,82 60,88 54,82" fill="#ffffff" />

          {/* Radar Target Rings */}
          <circle cx="60" cy="82" r="16" stroke="#00f3ff" strokeWidth="0.6" strokeDasharray="2 2" />
        </svg>
      </div>
    );
  }

  // 3. HUSSAM: Iron Bastion Lion Aegis (Steadfast Dominion, Emerald & Steel)
  if (id === 'admin-2') {
    return (
      <div className={`relative ${sizeClasses} ${className} flex items-center justify-center filter drop-shadow-[0_0_20px_rgba(16,185,129,0.55)] select-none`}>
        <div className="absolute inset-0 rounded-full bg-emerald-500/10 animate-pulse" />

        <svg viewBox="0 0 120 120" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="emeraldSteel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a7f3d0" />
              <stop offset="35%" stopColor="#34d399" />
              <stop offset="75%" stopColor="#059669" />
              <stop offset="100%" stopColor="#064e3b" />
            </linearGradient>
            <linearGradient id="swordBlade" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>

          {/* Crossed Broadswords Behind Shield */}
          <g stroke="url(#swordBlade)" strokeWidth="2.5" strokeLinecap="round">
            {/* Sword 1 */}
            <line x1="20" y1="20" x2="100" y2="100" />
            {/* Hilt 1 */}
            <line x1="26" y1="14" x2="14" y2="26" stroke="#34d399" strokeWidth="3" />
            {/* Sword 2 */}
            <line x1="100" y1="20" x2="20" y2="100" />
            {/* Hilt 2 */}
            <line x1="94" y1="14" x2="106" y2="26" stroke="#34d399" strokeWidth="3" />
          </g>

          {/* Heavy Bastion Shield */}
          <path 
            d="M60 14 C82 14, 100 24, 100 48 C100 78, 76 98, 60 110 C44 98, 20 78, 20 48 C20 24, 38 14, 60 14 Z" 
            fill="#051a13" 
            stroke="url(#emeraldSteel)" 
            strokeWidth="2" 
          />
          <path 
            d="M60 22 C78 22, 92 30, 92 50 C92 74, 72 90, 60 100 C48 90, 28 74, 28 50 C28 30, 42 22, 60 22 Z" 
            fill="#03110d" 
            stroke="#10b981" 
            strokeWidth="1" 
            strokeOpacity="0.7"
          />

          {/* Roaring Royal Lion Crest Visage inside Shield */}
          <g fill="url(#emeraldSteel)">
            {/* Mane */}
            <path d="M60 32 C50 32, 42 38, 40 48 C36 54, 40 64, 46 68 C44 74, 52 78, 60 78 C68 78, 76 74, 74 68 C80 64, 84 54, 80 48 C78 38, 70 32, 60 32 Z" />
            {/* Face details */}
            <polygon points="60,42 54,54 66,54" fill="#ffffff" />
            <polygon points="60,60 56,54 64,54" fill="#047857" />
            {/* Eyes */}
            <circle cx="53" cy="48" r="2" fill="#34d399" />
            <circle cx="67" cy="48" r="2" fill="#34d399" />
            {/* Crown of Bastion */}
            <polygon points="48,34 52,24 60,30 68,24 72,34" fill="#a7f3d0" />
          </g>

          {/* Triple Defensive Energy Nodes */}
          <circle cx="60" cy="88" r="4" fill="#34d399" stroke="#ffffff" strokeWidth="1" />
          <circle cx="46" cy="74" r="3" fill="#10b981" />
          <circle cx="74" cy="74" r="3" fill="#10b981" />
        </svg>
      </div>
    );
  }

  // 4. JUMALI: Thunder Dominion Gryphon (Electric Violet & Lightning Storm)
  if (id === 'admin-3') {
    return (
      <div className={`relative ${sizeClasses} ${className} flex items-center justify-center filter drop-shadow-[0_0_20px_rgba(168,85,247,0.6)] select-none`}>
        <div className="absolute inset-0 rounded-full bg-purple-500/10 animate-pulse" />

        <svg viewBox="0 0 120 120" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="purpleThunder" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3e8ff" />
              <stop offset="35%" stopColor="#c084fc" />
              <stop offset="70%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#4c1d95" />
            </linearGradient>
            <linearGradient id="lightningGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
          </defs>

          {/* Diamond Force Matrix */}
          <polygon 
            points="60,8 112,60 60,112 8,60" 
            fill="#0f071c" 
            stroke="url(#purpleThunder)" 
            strokeWidth="2" 
          />
          <polygon 
            points="60,18 102,60 60,102 18,60" 
            fill="#07020d" 
            stroke="#a855f7" 
            strokeWidth="0.9" 
            strokeDasharray="4 2"
          />

          {/* Dual Crossing Lightning Bolts */}
          <polygon 
            points="58,16 66,16 54,54 68,54 44,96 52,62 38,62" 
            fill="url(#lightningGold)" 
            filter="drop-shadow(0 0 8px #eab308)"
          />
          <polygon 
            points="62,16 54,16 66,54 52,54 76,96 68,62 82,62" 
            fill="url(#lightningGold)" 
            opacity="0.65"
          />

          {/* Thunder Gryphon Wings */}
          <path 
            d="M56 46 C42 34, 24 38, 14 48 C22 54, 30 56, 40 56 C28 62, 22 72, 30 78 C38 74, 46 66, 54 60 Z" 
            fill="url(#purpleThunder)" 
            stroke="#ffffff" 
            strokeWidth="0.8"
          />
          <path 
            d="M64 46 C78 34, 96 38, 106 48 C98 54, 90 56, 80 56 C92 62, 98 72, 90 78 C82 74, 74 66, 66 60 Z" 
            fill="url(#purpleThunder)" 
            stroke="#ffffff" 
            strokeWidth="0.8"
          />

          {/* Central High-Voltage Core Sphere */}
          <circle cx="60" cy="60" r="9" fill="#2e1065" stroke="#c084fc" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="4.5" fill="#facc15" />
          <circle cx="60" cy="60" r="1.5" fill="#ffffff" />
        </svg>
      </div>
    );
  }

  // 5. BLACK: Shadow Warlord Twin Damascus Blades & Dark Dominion Sigil
  return (
    <div className={`relative ${sizeClasses} ${className} flex items-center justify-center filter drop-shadow-[0_0_22px_rgba(244,63,94,0.6)] select-none`}>
      <div className="absolute inset-0 rounded-full bg-rose-600/10 animate-pulse" />

      <svg viewBox="0 0 120 120" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="roseBlack" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fecdd3" />
            <stop offset="35%" stopColor="#f43f5e" />
            <stop offset="70%" stopColor="#be123c" />
            <stop offset="100%" stopColor="#4c0519" />
          </linearGradient>
          <linearGradient id="damascusSteel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#cbd5e1" />
            <stop offset="80%" stopColor="#475569" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>

        {/* Spiked Gothic Shadow Shield Ring */}
        <circle cx="60" cy="60" r="48" fill="#0a050b" stroke="url(#roseBlack)" strokeWidth="2" />
        <circle cx="60" cy="60" r="42" stroke="#f43f5e" strokeWidth="0.8" strokeDasharray="6 3" />

        {/* Twin Crossed Damascus Katana Blades */}
        <g stroke="url(#damascusSteel)" strokeWidth="3" strokeLinecap="round">
          {/* Blade 1 */}
          <line x1="22" y1="22" x2="98" y2="98" />
          {/* Edge glow 1 */}
          <line x1="26" y1="24" x2="96" y2="94" stroke="#f43f5e" strokeWidth="1" />
          {/* Blade 2 */}
          <line x1="98" y1="22" x2="22" y2="98" />
          {/* Edge glow 2 */}
          <line x1="94" y1="24" x2="24" y2="94" stroke="#f43f5e" strokeWidth="1" />
        </g>

        {/* Shadow Mask / Hawk Crest Face of Black */}
        <path 
          d="M60 30 L76 44 L70 66 L60 84 L50 66 L44 44 Z" 
          fill="#180c14" 
          stroke="url(#roseBlack)" 
          strokeWidth="1.8" 
        />

        {/* Sharp Winged Helm Crest */}
        <polygon points="60,20 68,34 60,30 52,34" fill="#f43f5e" />
        <polygon points="44,44 32,36 42,52" fill="url(#damascusSteel)" />
        <polygon points="76,44 88,36 78,52" fill="url(#damascusSteel)" />

        {/* Glowing Crimson/Cyan Piercing Visor Eyes */}
        <polygon points="48,50 56,54 50,56" fill="#f43f5e" filter="drop-shadow(0 0 4px #f43f5e)" />
        <polygon points="72,50 64,54 70,56" fill="#f43f5e" filter="drop-shadow(0 0 4px #f43f5e)" />
        <circle cx="53" cy="53" r="1" fill="#ffffff" />
        <circle cx="67" cy="53" r="1" fill="#ffffff" />

        {/* Central Blood Dagger Rune */}
        <polygon points="60,62 64,72 60,82 56,72" fill="#ffffff" stroke="#f43f5e" strokeWidth="0.8" />
      </svg>
    </div>
  );
}
