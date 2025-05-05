
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PortfolioSummary from "@/components/dashboard/PortfolioSummary";
import DashboardActions from "@/components/dashboard/DashboardActions";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    document.title = "Dashboard | EarnEdge";
    
    // Get the current hour to determine the appropriate greeting
    const currentHour = new Date().getHours();
    
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8 md:px-8">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleGoBack}
            className="mr-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">{greeting}</h1>
        </div>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-2">
            <PortfolioSummary />
          </div>
          <div className="col-span-1">
            <DashboardActions />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
