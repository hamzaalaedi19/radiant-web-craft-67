import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-7xl w-full">
        <div className="space-y-8 md:space-y-12 animate-fade-in">
          <h1 className="text-hero text-hero-text">
            Hello<span className="text-accent">.</span>
            <br />
            I am
            <br />
            <span className="text-foreground">Steven</span>
          </h1>
          
          <div className="flex items-start justify-between gap-8 flex-wrap">
            <div className="space-y-2 max-w-md">
              <p className="text-subtitle text-foreground">
                Front-end Developer
              </p>
              <p className="text-subtitle text-foreground">
                with 7 years experience
              </p>
              <p className="text-subtitle text-foreground">
                based in London
              </p>
            </div>
            
            <Button
              variant="default"
              size="icon"
              onClick={scrollToNext}
              className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-accent hover:bg-accent/90 hover:scale-110 transition-all duration-300 animate-float cursor-pointer"
            >
              <ArrowRight className="h-8 w-8 md:h-10 md:w-10" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 animate-pulse-slow">
        <span className="text-sm text-accent font-medium">Scroll</span>
        <div className="w-24 h-0.5 bg-accent" />
      </div>
    </section>
  );
};

export default Hero;
