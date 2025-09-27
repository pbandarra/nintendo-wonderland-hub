import { Button } from "@/components/ui/button";
import { ArrowRight, GamepadIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-nintendo-yellow rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-nintendo-green rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-40 w-40 h-40 bg-nintendo-purple rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <GamepadIcon className="w-20 h-20 text-white animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
            Nintendo
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Experience the world of Nintendo gaming with legendary consoles, 
            iconic characters, and unforgettable adventures that bring joy to millions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Explore Consoles
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline-hero" size="lg">
              View Games
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;