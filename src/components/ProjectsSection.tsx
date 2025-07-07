import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "MechaHex",
      subtitle: "Interactive Robotics-Themed Web Project",
      description: "A hexapod robot simulation project showcasing design and control logic in a browser-based experience. Features interactive controls, realistic physics simulation, and educational content about robotics principles.",
      technologies: ["JavaScript", "WebGL", "Robotics", "Simulation"],
      link: "https://electro121.github.io/MechaHex/?fbclid=IwZXh0bgNhZW0CMTEAAR3dwWaEZ6b2sOVHxkyT0CRYG-MKMJrj7DeRAWT0ZRm6kLs2Bufr2fMBAGY_aem__j6oLC7KGjI2zmz1sen3kQ",
      featured: true
    },
    {
      title: "BUEEC R&D Projects",
      subtitle: "Student Club Technical Projects",
      description: "Leading multiple research and development initiatives at BRAC University Electrical and Electronic Club, focusing on practical applications of EEE principles.",
      technologies: ["Electronics", "Circuit Design", "Project Management", "Leadership"],
      link: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Showcasing innovative technical projects and development work
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 ${
              project.featured ? 'ring-2 ring-accent/20 bg-gradient-to-br from-white to-accent/5' : ''
            }`}>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {project.featured && (
                    <span className="bg-gradient-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Featured
                    </span>
                  )}
                  
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">{project.title}</h3>
                    <p className="text-primary font-medium mb-4">{project.subtitle}</p>
                    <p className="text-text-secondary leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link !== "#" && (
                    <div className="pt-4">
                      <Button variant="hero" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project →
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero text-hero-text p-8 rounded-2xl shadow-glow">
            <h3 className="text-2xl font-bold mb-4">Want to see more of my work?</h3>
            <p className="text-hero-text/80 mb-6">
              I'm constantly working on new projects and research. Let's connect to discuss potential collaborations!
            </p>
            <Button variant="accent" size="lg">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;