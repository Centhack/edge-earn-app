
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";

const WithdrawalSuccess = () => {
  const navigate = useNavigate();
  const [withdrawalData, setWithdrawalData] = useState<any>(null);
  const [transactionRef] = useState(`TXN${Math.floor(Math.random() * 1000000000)}`);
  const [timestamp] = useState(new Date());
  
  useEffect(() => {
    const data = sessionStorage.getItem("withdrawalData");
    if (data) {
      setWithdrawalData(JSON.parse(data));
    }
  }, []);
  
  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  
  const formattedDate = timestamp.toLocaleDateString();
  const formattedTime = timestamp.toLocaleTimeString();
  
  return (
    <MainLayout>
      <div className="container px-4 py-8 md:px-8">
        <div className="flex items-center mb-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleGoBack}
            className="mr-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Withdrawal</h1>
        </div>

        <h2 className="mb-6 text-xl font-bold text-center text-green-500">WITHDRAWAL SUCCESSFUL</h2>
        
        <div className="flex justify-center mb-8">
          <div className="flex items-center justify-center bg-green-500 rounded-full w-20 h-20">
            <Check className="h-10 w-10 text-white" />
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Transfer Receipt</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {withdrawalData && (
              <>
                <div className="flex justify-between">
                  <span className="font-medium">Account Name:</span>
                  <span>{withdrawalData.accountName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Account Number:</span>
                  <span>{withdrawalData.accountNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Bank:</span>
                  <span>{withdrawalData.bankName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Amount:</span>
                  <span>₦{withdrawalData.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Date:</span>
                  <span>{formattedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Time:</span>
                  <span>{formattedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Status:</span>
                  <span className="text-green-500">Completed</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Reference:</span>
                  <span>{transactionRef}</span>
                </div>
              </>
            )}
            
            <Button 
              onClick={handleBackToDashboard} 
              className="w-full mt-10"
            >
              BACK TO DASHBOARD
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default WithdrawalSuccess;
