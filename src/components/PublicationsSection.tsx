import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PublicationsSection = () => {
  const publications = [
    {
      title: "Biologically Inspired Network Design",
      subtitle: "Research Publication",
      description: "In this research, we proposed a novel perceptron architecture—Biceptron—inspired by Hebbian learning and brain criticality theory. Unlike conventional models that rely on backpropagation, our network learns solely through forward passes, better mimicking biological neural processes. This architecture eliminates the need for gradient descent and separate training phases, allowing weights to stabilize naturally through repetition. We demonstrated its effectiveness through identity mapping and simple image classification tasks, achieving 100% accuracy in both cases. The work was presented at the 2024 IEEE International Conference on ICT (ICICT) in Dhaka. URL : https://ieeexplore.ieee.org/document/10839663",
      technologies: ["Machine Learning", "Neural Networks", "Research", "Python"],
      link: "#",
      featured: true
    }
  ];

  return (
    <section id="publications" className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Research & Publications</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Academic research contributions and scholarly publications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {publications.map((publication, index) => (
            <Card key={index} className={`shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 ${
              publication.featured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-white to-primary/5' : ''
            }`}>
              <CardContent className="">
                <div className="space-y-4">
                  {publication.featured && (
                    <span className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Featured Research
                    </span>
                  )}
                  
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">{publication.title}</h3>
                    <p className="text-primary font-medium mb-4">{publication.subtitle}</p>
                    <div className="text-text-secondary leading-relaxed">
                      {publication.description.includes('URL :') ? (
                        <>
                          {publication.description.split('URL :')[0]}
                          URL : <a 
                            href={publication.description.split('URL :')[1].trim()} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium"
                          >
                            {publication.description.split('URL :')[1].trim()}
                          </a>
                        </>
                      ) : (
                        publication.description
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {publication.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {publication.link !== "#" && (
                    <div className="pt-4">
                      <Button variant="hero" asChild>
                        <a href={publication.link} target="_blank" rel="noopener noreferrer">
                          View Publication →
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;