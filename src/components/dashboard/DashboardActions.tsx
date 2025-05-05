
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { useNavigate } from "react-router-dom";
import {
  Banknote,
  CreditCard,
  Wifi,
  LogOut,
  Contact,
  History,
  Clock,
  Radio
} from "lucide-react";

const DashboardActions = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(() => {
    // Get balance from localStorage or use default
    const savedBalance = localStorage.getItem("earnedge_balance");
    return savedBalance ? Number(savedBalance) : 145500;
  });

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
      case "Channel":
        window.open("https://whatsapp.com/channel/0029Vb4RhUPKLaHvcM9dbc0w", "_blank");
        break;
      case "Airtime Top-up":
        navigate("/airtime-topup");
        break;
      case "Data Top-up":
        navigate("/data-topup");
        break;
      case "Minner":
        if (balance <= 0) {
          toast.success("Mining started! Your balance will be refilled to ₦145,500.00 in 24 hours.");
          
          // Set a timer to simulate mining for 24 hours (for demo, set to 10 seconds)
          setTimeout(() => {
            const newBalance = 145500;
            localStorage.setItem("earnedge_balance", newBalance.toString());
            window.dispatchEvent(new Event("balance-updated"));
            toast.success("Mining complete! Your balance has been refilled to ₦145,500.00");
          }, 10000); // In production, this would be 24 hours (86400000 ms)
        } else {
          toast.error("Mining is only available when your balance is ₦0.00");
        }
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
            onClick={() => handleAction("Channel")}
            className="flex h-auto flex-col items-center justify-center gap-2 p-4"
            variant="outline"
          >
            <Radio className="h-6 w-6" />
            <span>Channel</span>
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
            className="flex h-auto flex-col items-center justify-center gap-2 p-4"
            variant="outline"
          >
            <LogOut className="h-6 w-6" />
            <span>Logout</span>
          </Button>

          <Button
            onClick={() => handleAction("Minner")}
            className="flex h-auto flex-col items-center justify-center gap-2 p-4"
            variant={balance <= 0 ? "default" : "outline"}
            disabled={balance > 0}
          >
            <Clock className="h-6 w-6" />
            <span>Minner</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardActions;
