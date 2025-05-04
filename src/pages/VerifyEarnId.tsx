
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const VerifyEarnId = () => {
  const navigate = useNavigate();
  const [earnId, setEarnId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo, accept any input as valid
    navigate("/withdrawal-success");
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
              <div className="space-y-2">
                <Label htmlFor="earnId">Enter Your EARN ID</Label>
                <Input 
                  id="earnId"
                  value={earnId}
                  onChange={(e) => setEarnId(e.target.value)}
                  placeholder="Your EARN ID"
                  required
                />
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
