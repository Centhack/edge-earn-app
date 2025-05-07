
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

const AirtimeTopup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    network: "",
    phoneNumber: "",
    plan: "",
    earnId: ""
  });
  const [showEarnId, setShowEarnId] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verify the EARN ID (default code: 056281)
    if (formData.earnId === "056281") {
      // Get the plan amount (removing non-numeric characters)
      const planValue = Number(formData.plan.replace(/[^\d]/g, ""));
      
      // Update balance
      const currentBalance = Number(localStorage.getItem("earnedge_balance") || "145500");
      if (currentBalance >= planValue) {
        const newBalance = currentBalance - planValue;
        localStorage.setItem("earnedge_balance", newBalance.toString());
        
        // Add transaction to history
        const newTransaction = {
          id: `TXN${Math.floor(Math.random() * 1000000000)}`,
          type: "airtime",
          amount: planValue.toString(),
          date: new Date().toISOString().split('T')[0],
          time: new Date().toTimeString().split(' ')[0],
          status: "completed"
        };
        
        const history = JSON.parse(localStorage.getItem("earnedge_transactions") || "[]");
        history.unshift(newTransaction);
        localStorage.setItem("earnedge_transactions", JSON.stringify(history));
        
        // Trigger balance update event
        window.dispatchEvent(new Event("balance-updated"));
        
        toast.success(`Successfully purchased ₦${planValue} airtime for ${formData.phoneNumber}`);
        navigate("/dashboard");
      } else {
        toast.error("Insufficient balance for this purchase.");
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
          <h1 className="text-2xl font-bold">Airtime Top-up</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Purchase Airtime</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="network">Network Provider</Label>
                <Select 
                  value={formData.network} 
                  onValueChange={(value) => handleSelectChange("network", value)}
                  required
                >
                  <SelectTrigger id="network">
                    <SelectValue placeholder="Select network" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mtn">MTN</SelectItem>
                    <SelectItem value="airtel">AIRTEL</SelectItem>
                    <SelectItem value="glo">GLO</SelectItem>
                    <SelectItem value="9mobile">9MOBILE</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input 
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="plan">Airtime Plan</Label>
                <Select 
                  value={formData.plan} 
                  onValueChange={(value) => handleSelectChange("plan", value)}
                  required
                >
                  <SelectTrigger id="plan">
                    <SelectValue placeholder="Select airtime plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500">₦500</SelectItem>
                    <SelectItem value="1000">₦1,000</SelectItem>
                    <SelectItem value="2000">₦2,000</SelectItem>
                    <SelectItem value="5000">₦5,000</SelectItem>
                    <SelectItem value="7000">₦7,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 relative">
                <Label htmlFor="earnId">Your EARN ID</Label>
                <div className="relative">
                  <Input 
                    id="earnId"
                    name="earnId"
                    type={showEarnId ? "text" : "password"}
                    placeholder="Enter your EARN ID"
                    value={formData.earnId}
                    onChange={handleChange}
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
                PURCHASE AIRTIME
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default AirtimeTopup;
