
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PortfolioSummary from "@/components/dashboard/PortfolioSummary";
import AssetsBreakdown from "@/components/dashboard/AssetsBreakdown";
import TopHoldings from "@/components/dashboard/TopHoldings";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | EarnEdge";
  }, []);

  return (
    <MainLayout>
      <div className="container px-4 py-8 md:px-8">
        <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-2">
            <PortfolioSummary />
          </div>
          <div className="col-span-1">
            <AssetsBreakdown />
          </div>
        </div>
        
        <div className="mt-6">
          <TopHoldings />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
