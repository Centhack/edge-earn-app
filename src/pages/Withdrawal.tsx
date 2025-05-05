
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

const Withdrawal = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
    amount: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store withdrawal data in session storage to use later
    sessionStorage.setItem("withdrawalData", JSON.stringify(formData));
    navigate("/verify-earn-id");
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
          <h1 className="text-2xl font-bold">Withdrawal Request</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Enter Your Bank Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="accountName">Account Name</Label>
                <Input 
                  id="accountName"
                  name="accountName"
                  placeholder="Enter your account name"
                  value={formData.accountName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="accountNumber">Account Number</Label>
                <Input 
                  id="accountNumber"
                  name="accountNumber"
                  placeholder="Enter your account number"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bankName">Bank Name</Label>
                <Input 
                  id="bankName"
                  name="bankName"
                  placeholder="Enter your bank name"
                  value={formData.bankName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input 
                  id="amount"
                  name="amount"
                  type="number"
                  placeholder="Enter amount to withdraw"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full mt-6"
              >
                PROCEED
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Withdrawal;
