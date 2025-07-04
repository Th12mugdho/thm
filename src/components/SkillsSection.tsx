import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: [
        "Robotics Careers",
        "AI in Agriculture", 
        "Computer Vision for Robotics",
        "Circuit Design & Analysis",
        "Electrical Systems",
        "Automation & Control",
        "Programming & Development"
      ]
    },
    {
      title: "Research & Development",
      skills: [
        "Electron Paramagnetic Resonance",
        "Biologically Inspired Network Design",
        "Research Methodology",
        "Technical Writing",
        "Data Analysis",
        "Laboratory Techniques",
        "Scientific Communication"
      ]
    },
    {
      title: "Leadership & Soft Skills",
      skills: [
        "Department Supervision",
        "Public Speaking",
        "Team Leadership",
        "Event Management",
        "Content Creation",
        "Cross-cultural Communication",
        "Project Management"
      ]
    }
  ];

  const certifications = [
    "Biologically Inspired Network Design",
    "Basics of Computer Vision for Robotics", 
    "Introduction to Responsible AI",
    "Speak Bold: Unlocking Communication Power",
    "Future of Robotics Careers"
  ];

  return (
    <section id="skills" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A comprehensive skill set spanning technical expertise, research capabilities, and leadership experience
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-4 text-center">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-text-secondary">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-primary rounded-full flex-shrink-0"></div>
                    <span className="text-text-primary font-medium">{cert}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interest Areas */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">Areas of Interest</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Robotics", "Machine Learning", "Artificial Intelligence", "Virtual Reality",
              "Superconductivity", "Efficient Engine Design", "Automation", "IoT",
              "Renewable Energy", "Smart Grids", "Communication Systems", "Signal Processing"
            ].map((interest, index) => (
              <span key={index} className="bg-gradient-accent text-accent-foreground px-4 py-2 rounded-full font-medium shadow-glow">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;