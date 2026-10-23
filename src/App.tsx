/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EventsSection } from './components/EventsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import Particles from './components/Particles';
import GlowCursor from './components/GlowCursor';

function PortfolioApp() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#030408] text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-700 dark:selection:text-emerald-200 overflow-x-hidden transition-colors duration-300">
      {/* Background Layer 1: Full-Website Theme-Aware Particles Background Animation */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Particles
          particleColors={
            isDark
              ? ['#ffffff', '#4f8cff', '#2dd4bf', '#10b981']
              : ['#0284c7', '#0d9488', '#10b981', '#64748b']
          }
          particleCount={isDark ? 140 : 90}
          particleSpread={10}
          speed={0.12}
          particleBaseSize={isDark ? 90 : 70}
          sizeRandomness={1}
          shape="circle"
          glow={isDark ? 0.4 : 0.2}
          twinkle={isDark ? 0.3 : 0.15}
          connections={true}
          connectionDistance={115}
          moveParticlesOnHover={true}
          hoverEffect="parallax"
          particleHoverFactor={0.7}
          hoverRadius={140}
          clickBurst={true}
          intro={true}
          opacity={isDark ? 0.75 : 0.45}
          lightMode={!isDark}
        />
      </div>

      {/* Background/Foreground Layer 2: Full-Website GlowCursor Live Pointer Animation */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <GlowCursor
          color={isDark ? '#10b981' : '#0d9488'}
          secondaryColor={isDark ? '#38bdf8' : '#0284c7'}
          intensity={isDark ? 1.5 : 1.2}
          trailWidth={4}
          linger={1.3}
          glow={isDark ? 1.3 : 0.9}
          hotspot={0.85}
          followSpeed={0.7}
          clickBurst={true}
          theme={isDark ? 'dark' : 'light'}
          blendMode={isDark ? 'screen' : 'normal'}
        />
      </div>

      {/* Foreground Content Layer 3+: Navigation, Clean Sections, Interactive Controls */}
      <div className="relative z-10 flex flex-col min-h-screen pointer-events-auto">
        {/* Navigation Bar with User's Logo, Theme Toggle and no Field section */}
        <Navbar />

        {/* Main Content Sections without Field section and without duplicate content */}
        <main className="flex-1">
          {/* Section 1: Home (Hero) */}
          <Hero />

          {/* Section 2: About (Conversational narrative & authentic skills matrix) */}
          <About />

          {/* Section 3: Experience (Internship details & verified deployed systems) */}
          <ExperienceSection />

          {/* Section 4: Education (B.Sc. CS & HSC academic credentials) */}
          <EducationSection />

          {/* Section 5: Events & Hackathons (Industry & Tech Events grounded in LinkedIn content) */}
          <EventsSection />

          {/* Section 6: Certifications (Interactive category filter tabs & Drive verification) */}
          <CertificatesSection />

          {/* Section 7: Contact (Direct channels, verified profile links & dispatch form) */}
          <ContactSection />
        </main>

        {/* Footer with personal logo */}
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
