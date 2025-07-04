import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md shadow-card' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            Md Tasneemul Hassan
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="nav" onClick={() => scrollToSection('home')}>
              Home
            </Button>
            <Button variant="nav" onClick={() => scrollToSection('about')}>
              About
            </Button>
            <Button variant="nav" onClick={() => scrollToSection('experience')}>
              Experience
            </Button>
            <Button variant="nav" onClick={() => scrollToSection('skills')}>
              Skills
            </Button>
            <Button variant="nav" onClick={() => scrollToSection('projects')}>
              Projects
            </Button>
            <Button variant="nav" onClick={() => scrollToSection('contact')}>
              Contact
            </Button>
          </div>

          <Button variant="hero" onClick={() => scrollToSection('contact')}>
            Hire Me
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;