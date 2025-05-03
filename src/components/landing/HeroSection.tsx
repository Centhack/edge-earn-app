
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-navy py-16 sm:py-24 md:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand-green/20 blur-3xl"></div>
        <div className="absolute -bottom-32 right-16 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 px-4 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="animate-slide-up">
            <div className="inline-flex items-center rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1 text-xs font-medium text-brand-green">
              <span className="mr-1.5 h-2 w-2 animate-pulse-green rounded-full bg-brand-green"></span>
              Launching May 2025
            </div>
            
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Your Investment 
              <span className="relative ml-2 text-brand-green">Edge</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Track investments, analyze markets, and maximize your earning potential with our comprehensive financial platform.
            </p>
            
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="bg-brand-green text-white hover:bg-brand-lightGreen">
                <Link to="/dashboard">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/markets">
                  Explore Markets
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <img 
              src="/public/lovable-uploads/5351f2e7-c6b8-4837-a3c4-379bba971eb3.png" 
              alt="EarnEdge Logo" 
              className="h-64 w-64 animate-slide-up rounded-lg opacity-90 md:h-80 md:w-80"
            />
            
            {/* Decorative elements around the logo */}
            <div className="absolute -right-20 bottom-10 h-40 w-40 animate-pulse-green rounded-full bg-brand-green/10 blur-2xl"></div>
            <div className="absolute -left-16 top-10 h-32 w-32 animate-pulse-green rounded-full bg-brand-green/10 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
