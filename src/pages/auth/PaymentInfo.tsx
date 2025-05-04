
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PaymentInfo = () => {
  const navigate = useNavigate();

  const handlePaymentMade = () => {
    navigate("/payment-verification");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-navy p-4">
      <div className="w-full max-w-md space-y-8 rounded-lg border border-brand-green/20 bg-secondary/20 p-8 backdrop-blur-sm">
        <div className="flex flex-col items-center space-y-4 text-center mt-4">
          <div className="w-full overflow-hidden">
            <img
              src="/lovable-uploads/ad44e4a1-9150-460d-91e2-330c173b5d9e.png"
              alt="EarnEdge Logo"
              className="h-20 w-auto mx-auto"
              style={{
                animation: "floatLogo 4s ease-in-out infinite"
              }}
            />
          </div>
          <h1 className="text-3xl font-bold">Payment Information</h1>
          <p className="text-lg text-muted-foreground">
            In order for you to get your EARN ID kindly make a payment of 7,100 to the account details below
          </p>
        </div>
        
        <Card className="border border-brand-green/30 bg-brand-green/5 p-6 mt-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="text-muted-foreground">Bank Name:</div>
              <div className="font-medium text-right">First Bank</div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="text-muted-foreground">Account Number:</div>
              <div className="font-medium text-right">3141258976</div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="text-muted-foreground">Account Name:</div>
              <div className="font-medium text-right">EarnEdge Technologies</div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="text-muted-foreground">Amount:</div>
              <div className="font-medium text-brand-green text-right">₦ 7,100.00</div>
            </div>
          </div>
        </Card>
        
        <div className="mt-14 pt-6">
          <Button 
            onClick={handlePaymentMade}
            className="w-full bg-brand-green text-white hover:bg-brand-lightGreen text-lg py-6"
          >
            PAYMENT MADE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
