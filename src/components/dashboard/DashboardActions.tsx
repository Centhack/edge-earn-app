
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { useNavigate } from "react-router-dom";
import {
  Banknote,
  CreditCard,
  DollarSign,
  Wifi,
  LogOut,
  Contact,
  History
} from "lucide-react";

const DashboardActions = () => {
  const navigate = useNavigate();

  const handleAction = (action: string) => {
    switch(action) {
      case "Withdrawal":
        navigate("/withdrawal");
        break;
      case "Contact":
        window.open("https://t.me/AppVendor_001", "_blank");
        break;
      case "Logout":
        navigate("/signin");
        break;
      case "History":
        navigate("/transaction-history");
        break;
      default:
        toast.info(`${action} feature coming soon!`);
        break;
    }
  };

  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={() => handleAction("Withdrawal")}
            className="flex h-auto flex-col items-center justify-center gap-2 p-4"
            variant="outline"
          >
            <Banknote className="h-6 w-6" />
            <span>Withdrawal</span>
          </Button>
          
          <Button
            onClick={() => handleAction("Loan")}
            className="flex h-auto flex-col items-center justify-center gap-2 p-4"
            variant="outline"
          >
            <DollarSign className="h-6 w-6" />
            <span>Loan</span>
          </Button>
          
          <Button
            onClick={() => handleAction("Airtime Top-up")}
            className="flex h-auto flex-col items-center justify-center gap-2 p-4"
            variant="outline"
          >
            <Wifi className="h-6 w-6" />
            <span>Airtime Top-up</span>
          </Button>
          
          <Button
            onClick={() => handleAction("Data Top-up")}
            className="flex h-auto flex-col items-center justify-center gap-2 p-4"
            variant="outline"
          >
            <CreditCard className="h-6 w-6" />
            <span>Data Top-up</span>
          </Button>

          <Button
            onClick={() => handleAction("Contact")}
            className="flex h-auto flex-col items-center justify-center gap-2 p-4"
            variant="outline"
          >
            <Contact className="h-6 w-6" />
            <span>Contact</span>
          </Button>

          <Button
            onClick={() => handleAction("History")}
            className="flex h-auto flex-col items-center justify-center gap-2 p-4"
            variant="outline"
          >
            <History className="h-6 w-6" />
            <span>History</span>
          </Button>

          <Button
            onClick={() => handleAction("Logout")}
            className="flex h-auto col-span-2 flex-col items-center justify-center gap-2 p-4"
            variant="outline"
          >
            <LogOut className="h-6 w-6" />
            <span>Logout</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardActions;
