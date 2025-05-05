
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

const VerifyEarnId = () => {
  const navigate = useNavigate();
  const [earnId, setEarnId] = useState("");
  const [showEarnId, setShowEarnId] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set default code to 056281
    if (earnId === "056281") {
      navigate("/withdrawal-success");
    } else {
      toast.error("Invalid EARN ID. Please try again.");
    }
  };

  const toggleEarnIdVisibility = () => {
    setShowEarnId(!showEarnId);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8 md:px-8">
        <h1 className="mb-6 text-2xl font-bold">Verify Your EARN ID</h1>
        
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
