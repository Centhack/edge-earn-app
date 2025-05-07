
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { Copy } from "lucide-react";

const PaymentInfo = () => {
  const navigate = useNavigate();

  const handlePaymentMade = () => {
    navigate("/payment-verification");
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
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
                animation: "floatHorizontal 4s ease-in-out infinite"
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
            <div className="grid grid-cols-3 gap-2 items-center">
              <div className="text-muted-foreground col-span-1">Amount:</div>
              <div className="font-medium text-brand-green text-right col-span-1">₦ 7,100.00</div>
              <div className="col-span-1"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 items-center">
              <div className="text-muted-foreground col-span-1">Bank Name:</div>
              <div className="font-medium text-right col-span-1">First Bank</div>
              <div className="flex justify-end col-span-1">
                <button onClick={() => handleCopy("First Bank", "Bank name")} className="text-brand-green hover:text-brand-lightGreen">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 items-center">
              <div className="text-muted-foreground col-span-1">Account Number:</div>
              <div className="font-medium text-right col-span-1">3141258976</div>
              <div className="flex justify-end col-span-1">
                <button onClick={() => handleCopy("3141258976", "Account number")} className="text-brand-green hover:text-brand-lightGreen">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 items-center">
              <div className="text-muted-foreground col-span-1">Account Name:</div>
              <div className="font-medium text-right col-span-1">EarnEdge Technologies</div>
              <div className="flex justify-end col-span-1">
                <button onClick={() => handleCopy("EarnEdge Technologies", "Account name")} className="text-brand-green hover:text-brand-lightGreen">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="mt-20 pt-6">
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
