import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Linkedin, Sparkles, Zap, Code } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-accent rounded-full animate-particle-float"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-primary-glow rounded-full animate-particle-float" style={{animationDelay: '5s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent-glow rounded-full animate-particle-float" style={{animationDelay: '10s'}}></div>
        <div className="absolute top-60 right-20 w-6 h-6 bg-accent/30 rounded-full animate-particle-float" style={{animationDelay: '15s'}}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-32 left-16 w-32 h-32 border-2 border-accent/30 rotate-45 animate-float"></div>
        <div className="absolute bottom-40 right-16 w-24 h-24 border-2 border-primary-glow/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent/10 rotate-12 animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(64, 224, 208, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(64, 224, 208, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="text-hero-text space-y-8 animate-slide-in-left">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Available for Collaborations</span>
          </div>

          <div className="space-y-4">
            <p className="text-accent text-lg font-semibold tracking-wide uppercase">
              Aspiring Electrical Engineer
            </p>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              MD TASNEEMUL
              <span className="block gradient-text text-6xl lg:text-8xl">
                HASSAN
              </span>
            </h1>
            
            {/* Animated Underline */}
            <div className="w-32 h-1 bg-gradient-accent rounded-full animate-glow-pulse"></div>
          </div>
          
          {/* Enhanced Description */}
          <div className="space-y-4">
            <p className="text-xl text-hero-text/90 max-w-lg leading-relaxed">
              Researcher | Robotics Enthusiast | Passionate about AI, VR, and innovative engineering solutions
            </p>
            
            {/* Skill Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="glass-effect px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>AI & ML</span>
              </span>
              <span className="glass-effect px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                <Zap className="w-4 h-4 text-primary-glow" />
                <span>Robotics</span>
              </span>
              <span className="glass-effect px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                <Code className="w-4 h-4 text-accent" />
                <span>Research</span>
              </span>
            </div>
          </div>

          {/* Enhanced Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <Button 
              variant="accent" 
              size="lg" 
              className="group relative overflow-hidden"
              onClick={() => scrollToSection('contact')}
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Mail className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Get In Touch</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-effect hover:bg-white/20 group"
              asChild
            >
              <a href="https://www.linkedin.com/in/tasneemulhassan12" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Right Content - Enhanced Portrait */}
        <div className="relative animate-slide-in-right">
          <div className="relative w-full max-w-md mx-auto">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg shadow-glow animate-glow-pulse aspect-square">
              <img
                src={heroPortrait}
                alt="Md Tasneemul Hassan"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent/30 rounded-lg -z-10 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-primary/20 rounded-lg -z-20 blur-sm animate-float" style={{animationDelay: '1s'}}></div>
            
            {/* Floating Info Cards */}
            <div className="absolute -left-8 top-16 glass-effect p-3 rounded-lg animate-float" style={{animationDelay: '2s'}}>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">BRAC University</p>
                  <p className="text-xs text-white/80">EEE Student</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-8 bottom-16 glass-effect p-3 rounded-lg animate-float" style={{animationDelay: '3s'}}>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-glow rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Research</p>
                  <p className="text-xs text-white/80">Assistant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-hero-text/60 animate-scale-in">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center space-y-2 hover:text-accent transition-all duration-300 group"
        >
          <span className="text-sm font-medium">Scroll down</span>
          <div className="w-6 h-10 border-2 border-hero-text/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
          </div>
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;