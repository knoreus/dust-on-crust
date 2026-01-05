'use client';

import { motion } from 'framer-motion';

export type HeroVariant = 'steev' | 'lawsuits' | 'zen' | 'art';

interface DigitalHeroProps {
  variant: HeroVariant;
}

// STEEV - Terminal escape/work escape theme
function SteevHero() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-acid/10 via-deep to-neon-blue/5" />

      {/* Terminal grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Clock/time element */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-[15%] right-[20%] w-32 h-32 md:w-48 md:h-48 border-2 border-acid/20 rounded-full"
      >
        <div className="absolute top-1/2 left-1/2 w-1 h-12 md:h-16 bg-acid/40 origin-bottom -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 w-0.5 h-16 md:h-20 bg-acid/20 origin-bottom -translate-x-1/2 rotate-90" />
      </motion.div>

      {/* Terminal text elements */}
      <div className="absolute top-[25%] left-[10%] font-mono text-xs md:text-sm text-acid/30 uppercase tracking-wider">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          {'>'} ESCAPE_PROTOCOL_INITIATED
        </motion.div>
      </div>

      <div className="absolute bottom-[30%] right-[15%] font-mono text-[10px] text-neon-blue/20 uppercase">
        <div>STATUS: POWDER_ALERT</div>
        <div>DESTINATION: SNOQUALMIE</div>
        <div>ETA: 45_MIN</div>
      </div>

      {/* Speedometer/gauge */}
      <div className="absolute bottom-[20%] left-[15%] w-24 h-24 md:w-32 md:h-32 border border-acid/10 rounded-full flex items-center justify-center">
        <div className="w-16 h-16 md:w-24 md:h-24 border border-acid/20 rounded-full flex items-center justify-center">
          <motion.div
            animate={{ rotate: [0, 120, 60, 90] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            className="w-0.5 h-8 md:h-10 bg-acid/50 origin-bottom"
          />
        </div>
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] pointer-events-none" />
    </div>
  );
}

// Oregon Lawsuits - Legal/corporate warning theme
function LawsuitsHero() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient - warning colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-deep to-red-500/5" />

      {/* Legal document lines */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute left-[10%] right-[10%] h-px bg-white/5"
            style={{ top: `${10 + i * 4}%` }}
          />
        ))}
      </div>

      {/* Warning stripes */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(234,179,8,0.1)_10px,rgba(234,179,8,0.1)_20px)]" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(234,179,8,0.1)_10px,rgba(234,179,8,0.1)_20px)]" />

      {/* Scales of justice icon */}
      <div className="absolute top-[20%] right-[15%] opacity-20">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-yellow-500">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M12 3v18M3 7l3 9h6l3-9M15 7l3 9h6l3-9M12 3l-9 4M12 3l9 4" />
        </svg>
      </div>

      {/* Document stamp effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
        animate={{ opacity: 0.15, scale: 1, rotate: -15 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="absolute top-[40%] left-[20%] border-4 border-red-500 px-6 py-3 font-headline text-2xl md:text-4xl text-red-500 uppercase tracking-wider"
      >
        LITIGATION
      </motion.div>

      {/* Legal text */}
      <div className="absolute bottom-[25%] left-[10%] font-mono text-[8px] md:text-[10px] text-white/20 max-w-xs leading-relaxed">
        WHEREAS the ski industry of Oregon has historically remained locally owned and operated,
        and WHEREAS corporate entities have expressed interest in acquisition...
      </div>

      {/* Redacted blocks */}
      <div className="absolute top-[60%] right-[20%] space-y-2">
        <div className="w-32 h-3 bg-white/10" />
        <div className="w-24 h-3 bg-white/10" />
        <div className="w-28 h-3 bg-white/10" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
    </div>
  );
}

// Zen and the Art of Bailing - Mountain/meditation theme
function ZenHero() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient - snow/mountain colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-deep to-neon-purple/5" />

      {/* Mountain silhouettes */}
      <svg
        viewBox="0 0 1440 600"
        fill="none"
        className="absolute bottom-0 left-0 w-full h-auto"
        preserveAspectRatio="none"
      >
        {/* Far mountain range */}
        <path
          d="M0 600 L0 350 L200 200 L400 300 L600 150 L800 280 L1000 100 L1200 250 L1440 180 L1440 600 Z"
          fill="url(#zenMountain1)"
        />
        {/* Near mountain range */}
        <path
          d="M0 600 L0 420 L150 320 L350 400 L500 280 L700 380 L900 220 L1100 350 L1300 280 L1440 340 L1440 600 Z"
          fill="url(#zenMountain2)"
        />
        <defs>
          <linearGradient id="zenMountain1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="zenMountain2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#BC13FE" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>

      {/* Enso (zen circle) */}
      <motion.div
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-[15%] left-1/2 -translate-x-1/2"
      >
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-white">
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="502"
            initial={{ strokeDashoffset: 502 }}
            animate={{ strokeDashoffset: 50 }}
            transition={{ duration: 2, delay: 0.5 }}
            opacity="0.2"
          />
        </svg>
      </motion.div>

      {/* Falling snow particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: `${Math.random() * 100}%`,
              y: -10,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: '110%',
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
          />
        ))}
      </div>

      {/* Zen text */}
      <div className="absolute bottom-[30%] right-[10%] font-mono text-[10px] text-white/20 uppercase tracking-widest">
        <div>Breathe</div>
        <div>Release</div>
        <div>Return</div>
      </div>
    </div>
  );
}

// T. Leaf Art - Gallery/artistic theme
function ArtHero() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient - artistic pink/purple */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-deep to-neon-purple/10" />

      {/* Gallery wall grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(188,19,254,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(188,19,254,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Frame elements */}
      <div className="absolute top-[15%] left-[10%] w-32 h-40 border-2 border-white/10">
        <div className="absolute inset-2 border border-neon-purple/20" />
      </div>
      <div className="absolute top-[20%] right-[15%] w-24 h-24 border-2 border-white/10 rotate-3">
        <div className="absolute inset-2 border border-neon-pink/20" />
      </div>
      <div className="absolute bottom-[25%] left-[25%] w-28 h-36 border-2 border-white/10 -rotate-2">
        <div className="absolute inset-2 border border-acid/20" />
      </div>

      {/* Paint splatter effects */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-[30%] right-[30%] w-40 h-40 rounded-full bg-neon-pink/10 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-[40%] left-[20%] w-32 h-32 rounded-full bg-neon-purple/10 blur-2xl"
      />
      <div className="absolute top-[50%] right-[10%] w-24 h-24 rounded-full bg-acid/5 blur-xl" />

      {/* Artistic splatter shapes */}
      <div className="absolute top-[40%] left-[40%] w-16 h-16 bg-neon-pink/20 rounded-full transform scale-x-150 rotate-45 blur-sm" />
      <div className="absolute bottom-[35%] right-[35%] w-12 h-12 bg-neon-purple/15 rounded-full transform scale-y-150 -rotate-30 blur-sm" />

      {/* "3 Things" preview */}
      <div className="absolute bottom-[20%] right-[10%] font-headline text-6xl md:text-8xl text-white/5">
        3
      </div>

      {/* Art gallery label */}
      <div className="absolute bottom-[15%] left-[10%] font-mono text-[10px] text-neon-pink/40 uppercase tracking-widest">
        <div className="border-b border-neon-pink/20 pb-1 mb-1">Artist: T. Leaf</div>
        <div>Medium: Digital Rage</div>
      </div>
    </div>
  );
}

export function DigitalHero({ variant }: DigitalHeroProps) {
  const heroes = {
    steev: <SteevHero />,
    lawsuits: <LawsuitsHero />,
    zen: <ZenHero />,
    art: <ArtHero />,
  };

  return heroes[variant] || <SteevHero />;
}
