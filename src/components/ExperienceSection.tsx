import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Assistant Director of R&D",
      organization: "BRAC University Electrical and Electronic Club (BUEEC)",
      period: "Dec 2024 – Present",
      type: "Leadership",
      description: "Leading research and development initiatives, mentoring students in technical projects."
    },
    {
      title: "Director",
      organization: "BRAC University Natural Sciences Club",
      period: "Dec 2024 – Apr 2025",
      type: "Leadership",
      description: "Directing club activities and scientific outreach programs."
    },
    {
      title: "Apprentice",
      organization: "Robotics Club of BRAC University",
      period: "Apr 2023 – Present",
      type: "Technical",
      description: "Advanced robotics training and project development."
    },
    {
      title: "Research Assistant",
      organization: "Allegheny College (USA)",
      period: "Sep 2021 – Dec 2021",
      type: "Research",
      description: "Electron Paramagnetic Resonance research collaboration."
    },
    {
      title: "Bronze Standard Awardee",
      organization: "The Duke of Edinburgh's International Award",
      period: "May 2023 – Sep 2023",
      type: "Achievement",
      description: "Completed community service, skills development, and adventurous journey components."
    },
    {
      title: "Editor-in-Chief",
      organization: "Tigers Cricket",
      period: "2020 – Dec 2022",
      type: "Media",
      description: "Led editorial team and content strategy for sports publication."
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Leadership': return 'bg-primary/10 text-primary';
      case 'Technical': return 'bg-accent/10 text-accent';
      case 'Research': return 'bg-purple-100 text-purple-700';
      case 'Achievement': return 'bg-green-100 text-green-700';
      case 'Media': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Experience & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A journey through leadership roles, research opportunities, and academic achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                      {exp.type}
                    </span>
                    <span className="text-text-secondary text-sm">{exp.period}</span>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">{exp.title}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{exp.organization}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notable Achievements */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">Notable Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "7th Rank - National High School Programming Contest",
              "Multiple Competition Finals",
              "Champion & Runner-Up Awards",
              "National Programming Camper"
            ].map((achievement, index) => (
              <div key={index} className="bg-gradient-accent text-accent-foreground p-4 rounded-lg text-center font-medium shadow-glow">
                {achievement}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;