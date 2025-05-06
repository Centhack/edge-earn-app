
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const VerifyEarnId = () => {
  const navigate = useNavigate();
  const [earnId, setEarnId] = useState("");
  const [showEarnId, setShowEarnId] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set default code to 202711
    if (earnId === "202711") {
      // Process the withdrawal
      const withdrawalData = JSON.parse(sessionStorage.getItem("withdrawalData") || "{}");
      const withdrawalAmount = Number(withdrawalData.amount || 0);
      
      // Update balance
      const currentBalance = Number(localStorage.getItem("earnedge_balance") || "145500");
      if (currentBalance >= withdrawalAmount) {
        const newBalance = currentBalance - withdrawalAmount;
        localStorage.setItem("earnedge_balance", newBalance.toString());
        
        // Add transaction to history
        const newTransaction = {
          id: `TXN${Math.floor(Math.random() * 1000000000)}`,
          type: "withdrawal",
          amount: withdrawalAmount.toString(),
          date: new Date().toISOString().split('T')[0],
          time: new Date().toTimeString().split(' ')[0],
          status: "completed"
        };
        
        const history = JSON.parse(localStorage.getItem("earnedge_transactions") || "[]");
        history.unshift(newTransaction);
        localStorage.setItem("earnedge_transactions", JSON.stringify(history));
        
        // Trigger balance update event
        window.dispatchEvent(new Event("balance-updated"));
        
        navigate("/withdrawal-success");
      } else {
        toast.error("Insufficient balance for this withdrawal.");
      }
    } else {
      toast.error("Invalid EARN ID. Please try again.");
    }
  };

  const toggleEarnIdVisibility = () => {
    setShowEarnId(!showEarnId);
  };

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
          <h1 className="text-2xl font-bold">Verify Your EARN ID</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Security Verification</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2 relative">
                <Label htmlFor="earnId">Enter Your EARN ID</Label>
                <div className="relative">
                  <Input 
                    id="earnId"
                    value={earnId}
                    onChange={(e) => setEarnId(e.target.value)}
                    placeholder="Your EARN ID"
                    type={showEarnId ? "text" : "password"}
                    required
                  />
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-0 top-0 h-full"
                    onClick={toggleEarnIdVisibility}
                  >
                    {showEarnId ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full mt-6"
              >
                WITHDRAW
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default VerifyEarnId;
