
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PortfolioSummary = () => {
  const [balance, setBalance] = useState(() => {
    // Get balance from localStorage or use default
    const savedBalance = localStorage.getItem("earnedge_balance");
    return savedBalance ? Number(savedBalance) : 145500;
  });

  // Handle balance updates from other components
  useEffect(() => {
    const handleBalanceUpdate = () => {
      const savedBalance = localStorage.getItem("earnedge_balance");
      setBalance(savedBalance ? Number(savedBalance) : 145500);
    };

    // Listen for balance updates
    window.addEventListener("balance-updated", handleBalanceUpdate);
    
    return () => {
      window.removeEventListener("balance-updated", handleBalanceUpdate);
    };
  }, []);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Available Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <h3 className="text-3xl font-bold">₦ {balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSummary;
