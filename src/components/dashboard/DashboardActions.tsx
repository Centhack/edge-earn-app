
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import {
  Banknote,
  CreditCard,
  DollarSign,
  Wifi
} from "lucide-react";

const DashboardActions = () => {
  const handleAction = (action: string) => {
    toast.info(`${action} feature coming soon!`);
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
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardActions;
