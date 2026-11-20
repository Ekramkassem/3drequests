import React, { useState, useEffect } from 'react';
import { PageType, ProjectItem } from './types.ts';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './components/pages/HomePage.tsx';
import { ServicesPage } from './components/pages/ServicesPage.tsx';
import { PortfolioPage } from './components/pages/PortfolioPage.tsx';
import { AboutPage } from './components/pages/AboutPage.tsx';
import { ContactPage } from './components/pages/ContactPage.tsx';
import { ProjectDetailModal } from './components/ProjectDetailModal.tsx';
import { DesignRequestModal } from './components/DesignRequestModal.tsx';
import { StudioSplashScreen } from './components/StudioSplashScreen.tsx';
import { ScrollVideoBackground } from './components/ScrollVideoBackground.tsx';
import { MagneticCursor } from './components/ui/MagneticCursor.tsx';
import { CURATED_PROJECTS } from './data/studioData.ts';
import { motion, AnimatePresence } from 'framer-motion';

function resolveInitialPage(): PageType {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash.replace('#', '').toLowerCase() as PageType;
  if (['home', 'services', 'portfolio', 'about', 'contact'].includes(hash)) {
    return hash;
  }
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(resolveInitialPage);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isBriefingOpen, setIsBriefingOpen] = useState<boolean>(false);
  const [briefingType, setBriefingType] = useState<string | undefined>(undefined);
  const [briefingBudget, setBriefingBudget] = useState<string | undefined>(undefined);
  // Always show preloader on site load for 3 seconds to let all assets and 3D frames initialize
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [is3dReady, setIs3dReady] = useState<boolean>(false);

  // Synchronize hash in URL for pleasant bookmarking and browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase() as PageType;
      if (['home', 'services', 'portfolio', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBriefing = (type?: string, budget?: string) => {
    setBriefingType(type);
    setBriefingBudget(budget);
    setIsBriefingOpen(true);
  };

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleCommissionProject = (project: ProjectItem) => {
    setSelectedProject(null);
    setBriefingType(project.categoryLabel);
    setBriefingBudget('$750 – Studio Benchmark');
    setIsBriefingOpen(true);
  };

  const handleSplashComplete = () => {
    setShowSplash(false);
    try {
      sessionStorage.setItem('studio_intro_seen', 'true');
    } catch {
      // Ignore storage errors in restrictive environments
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#080808] text-[#fcfcfc] selection:bg-[#fe1e34] selection:text-white">
      {/* Global High-End Magnetic Cursor Follower */}
      <MagneticCursor />

      {/* Fixed Scroll-Scrubbed 3D Video Background */}
      <ScrollVideoBackground />

      {/* Minimal Brand-Aligned 3D Studio Entry Splash Transition */}
      {showSplash && (
        <StudioSplashScreen
          onComplete={handleSplashComplete}
          is3dReady={is3dReady}
        />
      )}

      {/* Sticky Global Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onRequestClick={() => handleOpenBriefing()}
      />

      {/* Main Exhibition Page Views with Cinematic Page Transitions */}
      <main className="relative z-10 flex-1 overflow-x-clip">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full"
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onRequestClick={handleOpenBriefing}
                onSelectProject={handleSelectProject}
                on3dReady={() => setIs3dReady(true)}
              />
            )}

            {currentPage === 'services' && (
              <ServicesPage
                onNavigate={handleNavigate}
                onRequestClick={handleOpenBriefing}
              />
            )}

            {currentPage === 'portfolio' && (
              <PortfolioPage
                onNavigate={handleNavigate}
                onSelectProject={handleSelectProject}
                onRequestClick={handleOpenBriefing}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                onNavigate={handleNavigate}
                onRequestClick={() => handleOpenBriefing()}
              />
            )}

            {currentPage === 'contact' && (
              <ContactPage
                onNavigate={handleNavigate}
                onRequestClick={handleOpenBriefing}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Studio Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestClick={() => handleOpenBriefing()}
        onReplayIntro={() => {
          window.scrollTo({ top: 0, behavior: 'instant' });
          setShowSplash(true);
        }}
      />

      {/* Dedicated Project Detail Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        allProjects={CURATED_PROJECTS}
        onClose={() => setSelectedProject(null)}
        onSelectProject={handleSelectProject}
        onRequestCommission={handleCommissionProject}
      />

      {/* 4-Step Design Request Creative Briefing Tool */}
      <DesignRequestModal
        isOpen={isBriefingOpen}
        onClose={() => setIsBriefingOpen(false)}
        preselectedType={briefingType}
        preselectedBudget={briefingBudget}
      />
    </div>
  );
}
