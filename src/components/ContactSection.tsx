import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities in electrical engineering and robotics
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-card hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">Email</h3>
                      <a href="mailto:tasneemulhassan12@gmail.com" className="text-primary hover:text-primary-glow transition-colors">
                        tasneemulhassan12@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">LinkedIn</h3>
                      <a href="https://www.linkedin.com/in/tasneemulhassan12" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-glow transition-colors">
                        linkedin.com/in/tasneemulhassan12
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                      <Github className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">GitHub</h3>
                      <a href="https://github.com/Th12mugdho" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-glow transition-colors">
                        github.com/Th12mugdho
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Info</h3>
                  <div className="space-y-2 text-text-secondary">
                    <p><strong>Location:</strong> Dhaka, Bangladesh</p>
                    <p><strong>University:</strong> BRAC University</p>
                    <p><strong>Field:</strong> Electrical & Electronics Engineering</p>
                    <p><strong>Status:</strong> Available for collaborations</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <Card className="shadow-elegant bg-gradient-hero text-hero-text">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
                      <p className="text-hero-text/80 leading-relaxed">
                        Whether you're interested in robotics projects, research collaborations, 
                        or discussing the latest in electrical engineering, I'd love to hear from you.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">I'm available for:</h4>
                      <ul className="space-y-2 text-hero-text/90">
                        <li>• Research collaborations</li>
                        <li>• Technical consulting</li>
                        <li>• Robotics projects</li>
                        <li>• Speaking engagements</li>
                        <li>• Mentorship opportunities</li>
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button variant="accent" size="lg" asChild>
                        <a href="mailto:tasneemulhassan12@gmail.com">
                          <Mail className="w-5 h-5" />
                          Send Email
                        </a>
                      </Button>
                      <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                        <a href="https://www.linkedin.com/in/tasneemulhassan12" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-5 h-5" />
                          Connect on LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">Follow My Journey</h3>
                  <div className="space-y-3">
                    <a href="https://www.facebook.com/tasneemulhassan12" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-text-secondary hover:text-primary transition-colors">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">f</span>
                      </div>
                      <span>Facebook</span>
                    </a>
                    <a href="https://www.linkedin.com/in/tasneemulhassan12" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-text-secondary hover:text-primary transition-colors">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Linkedin className="w-4 h-4 text-primary" />
                      </div>
                      <span>LinkedIn</span>
                    </a>
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

export default ContactSection;