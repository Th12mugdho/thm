import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Linkedin } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden">
      {/* Background Geometric Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary-glow rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-hero-text space-y-6">
          <div className="space-y-2">
            <p className="text-accent text-lg font-medium">Aspiring Electrical Engineer</p>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              MD TASNEEMUL
              <span className="block text-accent">HASSAN</span>
            </h1>
          </div>
          
          <p className="text-xl text-hero-text/80 max-w-lg">
            Researcher | Robotics Enthusiast | Passionate about AI, VR, and innovative engineering solutions
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="accent" size="lg">
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
          </div>
        </div>

        {/* Right Content - Portrait */}
        <div className="relative">
          <div className="relative w-full max-w-md mx-auto">
            <img
              src={heroPortrait}
              alt="Md Tasneemul Hassan"
              className="w-full h-auto rounded-2xl shadow-glow"
            />
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-hero-text/60">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center space-y-2 hover:text-accent transition-colors"
        >
          <span className="text-sm">Scroll down</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;