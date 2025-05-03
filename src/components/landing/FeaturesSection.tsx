
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart3, Newspaper, Shield } from "lucide-react";

const features = [
  {
    title: "Portfolio Tracking",
    description: "Track all your investments in one place with real-time updates and performance metrics.",
    icon: <TrendingUp className="h-10 w-10 text-brand-green" />,
    route: "/dashboard"
  },
  {
    title: "Market Analysis",
    description: "Access comprehensive market data, charts, and trends to make informed investment decisions.",
    icon: <BarChart3 className="h-10 w-10 text-brand-green" />,
    route: "/markets"
  },
  {
    title: "Financial News",
    description: "Stay updated with the latest financial news and analysis from trusted sources.",
    icon: <Newspaper className="h-10 w-10 text-brand-green" />,
    route: "/news"
  },
  {
    title: "Secure Platform",
    description: "Industry-leading security measures to protect your financial data and investments.",
    icon: <Shield className="h-10 w-10 text-brand-green" />,
    route: "#"
  }
];

const FeaturesSection = () => {
  return (
    <section className="bg-brand-navy py-16">
      <div className="container px-4 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Powerful Features</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Everything you need to track, analyze, and optimize your investment portfolio.
          </p>
        </div>
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-border/50 transition-all duration-200 hover:border-brand-green/50"
            >
              <CardHeader className="bg-secondary/30 pb-6">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
