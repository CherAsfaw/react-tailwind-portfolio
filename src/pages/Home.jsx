import React from 'react'
import ThemeToggle from '../components/ThemeToggle';
import StartBackground from "@/components/StartBackground";
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillSection from '../components/SkillSection';
import ProjectSection from '../components/ProjectSection';

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      <ThemeToggle />

      {/* Background Effect */}
      <StartBackground />

      {/* Nav Bar */}
      <Navbar />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection/>
      </main>
    </div>
  );
}

export default Home