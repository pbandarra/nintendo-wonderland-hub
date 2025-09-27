import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Need Help? We're Here for You
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our Nintendo support consultants are ready to help you with any questions about consoles, games, or technical issues.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Support Options */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-gaming hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Calendar className="w-16 h-16 text-nintendo-blue mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Schedule a Consultation
                  </h3>
                  <p className="text-muted-foreground">
                    Book a personalized session with our Nintendo experts
                  </p>
                </div>
                
                <Button variant="gaming" size="lg" className="w-full mb-4">
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule Meeting
                </Button>
                
                <div className="text-sm text-muted-foreground text-center">
                  Available Monday-Friday, 9 AM - 6 PM PST
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-gaming hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Other Ways to Reach Us
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center p-4 rounded-lg bg-muted/50">
                    <Phone className="w-6 h-6 text-nintendo-red mr-4" />
                    <div>
                      <div className="font-semibold">Phone Support</div>
                      <div className="text-muted-foreground">1-800-255-3700</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 rounded-lg bg-muted/50">
                    <Mail className="w-6 h-6 text-nintendo-blue mr-4" />
                    <div>
                      <div className="font-semibold">Email Support</div>
                      <div className="text-muted-foreground">support@nintendo.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 rounded-lg bg-muted/50">
                    <MessageCircle className="w-6 h-6 text-nintendo-green mr-4" />
                    <div>
                      <div className="font-semibold">Live Chat</div>
                      <div className="text-muted-foreground">Available 24/7</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Your Nintendo Journey?
              </h3>
              <p className="text-white/80 mb-6 text-lg">
                Whether you're a first-time player or a seasoned gamer, we're here to help you make the most of your Nintendo experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  <Calendar className="mr-2 w-5 h-5" />
                  Book Your Free Consultation
                </Button>
                <Button variant="outline-hero" size="lg">
                  Browse Support Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;