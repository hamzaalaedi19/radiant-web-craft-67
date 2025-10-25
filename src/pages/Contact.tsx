import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 px-6 md:px-12 max-w-7xl mx-auto pb-20">
        <div className="space-y-12 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold">
            Contact<span className="text-accent">.</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold">Get In Touch</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-lg">contact@portfolio.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-lg">+44 123 456 7890</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-lg">London, UK</span>
                </div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div>
                <Input 
                  placeholder="Your Name" 
                  className="bg-secondary border-border focus:border-accent"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-secondary border-border focus:border-accent"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  rows={6}
                  className="bg-secondary border-border focus:border-accent resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-foreground font-medium"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
