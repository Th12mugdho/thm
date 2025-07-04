import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-text-primary">About Me</h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
            </div>
            
            <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
              <p>
                I'm a first-year <strong>Electrical and Electronics Engineering</strong> student at 
                <strong> BRAC University</strong>, passionate about understanding how things work—from 
                simple light switches to smartphones.
              </p>
              
              <p>
                With hands-on experience in lab work and circuit design, I'm deeply interested in 
                electrical systems, automation, and communication technologies. My curiosity extends 
                to cutting-edge fields like <strong>robotics, machine learning, AI, VR, superconductivity, 
                and efficient engine design</strong>.
              </p>
              
              <p>
                Beyond academics, I'm actively involved in student clubs and competitions, combining 
                technical expertise with leadership and public speaking. I enjoy building electronics, 
                staying updated with emerging technologies, and engaging in engineering discussions.
              </p>
            </div>

            {/* Languages */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { lang: "English", level: "Professional" },
                  { lang: "Bengali", level: "Native" },
                  { lang: "Spanish", level: "Fluent" },
                  { lang: "Urdu", level: "Limited" },
                  { lang: "Hindi", level: "Limited" }
                ].map((item) => (
                  <span key={item.lang} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {item.lang} ({item.level})
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-text-primary">Education</h3>
            
            <div className="space-y-4">
              <Card className="shadow-card hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xl font-semibold text-text-primary">BRAC University</h4>
                        <p className="text-primary font-medium">Bachelor's in Electrical and Electronics Engineering</p>
                      </div>
                      <span className="text-text-secondary text-sm bg-accent/10 px-3 py-1 rounded-full">
                        2022 – Present
                      </span>
                    </div>
                    <p className="text-text-secondary">
                      Currently pursuing my degree with focus on robotics, automation, and emerging technologies.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xl font-semibold text-text-primary">Rajshahi University School</h4>
                        <p className="text-primary font-medium">HSC in Science</p>
                      </div>
                      <span className="text-text-secondary text-sm bg-accent/10 px-3 py-1 rounded-full">
                        2009 – 2022
                      </span>
                    </div>
                    <p className="text-text-secondary">
                      Strong foundation in science and mathematics, preparing for engineering studies.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;