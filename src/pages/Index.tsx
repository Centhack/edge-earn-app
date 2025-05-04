
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-navy p-4">
      <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="flex flex-col items-center space-y-12 text-center">
          {/* Logo with animation */}
          <div className="w-full overflow-hidden">
            <img
              src="/lovable-uploads/ad44e4a1-9150-460d-91e2-330c173b5d9e.png"
              alt="EarnEdge Logo"
              className="h-24 w-auto mx-auto"
              style={{
                animation: "floatLogo 4s ease-in-out infinite"
              }}
            />
          </div>
          
          {/* Main heading in all caps and bold */}
          <h1 className="text-3xl font-extrabold uppercase tracking-wider sm:text-4xl md:text-5xl text-brand-green">
            UNLOCK YOUR EARNING POTENTIAL WITH EARNEDGE
          </h1>
          
          {/* Description text */}
          <p className="text-lg md:text-xl text-white/80">
            Discover smarter ways to earn, learn, and grow with opportunities tailored to you.
          </p>
          
          {/* Question */}
          <p className="text-xl md:text-2xl font-semibold text-white">
            Tired of missing out on real income opportunities?
          </p>
          
          {/* Detailed description */}
          <p className="text-lg md:text-xl text-white/80 max-w-3xl">
            Whether you're a student, freelancer, or side hustler, EarnEdge connects you 
            to curated earning avenues, skill-building tools, and insights—all in one powerful platform.
          </p>
          
          {/* Button with more spacing above it */}
          <div className="pt-8 md:pt-12">
            <Button asChild size="lg" className="bg-brand-green text-white hover:bg-brand-lightGreen text-xl px-8 py-6">
              <Link to="/signup">
                GET STARTED <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
