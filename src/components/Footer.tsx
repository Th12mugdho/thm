const Footer = () => {
  return (
    <footer className="bg-hero-bg text-hero-text py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-hero-text/80">
              © 2024 Md Tasneemul Hassan. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="mailto:tasneemulhassan12@gmail.com" className="text-hero-text/80 hover:text-accent transition-colors">
              Email
            </a>
            <a href="https://www.linkedin.com/in/tasneemulhassan12" target="_blank" rel="noopener noreferrer" className="text-hero-text/80 hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="https://www.facebook.com/tasneemulhassan12" target="_blank" rel="noopener noreferrer" className="text-hero-text/80 hover:text-accent transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;