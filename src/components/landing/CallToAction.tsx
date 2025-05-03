
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-gradient-navy py-16">
      <div className="container px-4 md:px-8">
        <div className="rounded-lg border border-brand-green/20 bg-secondary/20 p-8 backdrop-blur-sm">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Ready to gain your investment edge?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of investors who are already maximizing their potential with EarnEdge.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-brand-green text-white hover:bg-brand-lightGreen">
                <Link to="/dashboard">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
