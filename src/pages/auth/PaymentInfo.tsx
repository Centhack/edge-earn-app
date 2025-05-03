
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const PaymentInfo = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState<string | null>(null);

  const paymentDetails = {
    amount: "NGN 7,100",
    accountNumber: "0305286778",
    bankName: "SMARTCASH PSB",
    accountName: "OBIAGERI OBIAJUNWA",
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    toast.success(`${field} copied to clipboard!`);
    
    setTimeout(() => {
      setCopied(null);
    }, 2000);
  };

  const handlePaymentMade = () => {
    // Show loading state for 3 seconds before navigating
    navigate("/payment-success");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-navy p-4">
      <div className="w-full max-w-md space-y-6 rounded-lg border border-brand-green/20 bg-secondary/20 p-8 backdrop-blur-sm">
        <div className="flex flex-col items-center space-y-2 text-center">
          <img
            src="/lovable-uploads/ad44e4a1-9150-460d-91e2-330c173b5d9e.png"
            alt="EarnEdge Logo"
            className="h-16 w-16"
          />
          <h1 className="text-2xl font-bold">Payment Information</h1>
          <p className="text-sm text-muted-foreground">
            In order for you to get your EARN ID kindly make a payment of NGN 7,100 to the account details below
          </p>
        </div>
        
        <div className="space-y-4 rounded-md border border-border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">AMOUNT</p>
              <p className="font-medium">{paymentDetails.amount}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => copyToClipboard(paymentDetails.amount, "Amount")}
              className="h-8 w-8"
            >
              <Copy className={copied === "Amount" ? "text-brand-green" : ""} size={16} />
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">ACCOUNT NUMBER</p>
              <p className="font-medium">{paymentDetails.accountNumber}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => copyToClipboard(paymentDetails.accountNumber, "Account Number")}
              className="h-8 w-8"
            >
              <Copy className={copied === "Account Number" ? "text-brand-green" : ""} size={16} />
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">BANK NAME</p>
              <p className="font-medium">{paymentDetails.bankName}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => copyToClipboard(paymentDetails.bankName, "Bank Name")}
              className="h-8 w-8"
            >
              <Copy className={copied === "Bank Name" ? "text-brand-green" : ""} size={16} />
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">ACCOUNT NAME</p>
              <p className="font-medium">{paymentDetails.accountName}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => copyToClipboard(paymentDetails.accountName, "Account Name")}
              className="h-8 w-8"
            >
              <Copy className={copied === "Account Name" ? "text-brand-green" : ""} size={16} />
            </Button>
          </div>
        </div>
        
        <Button
          onClick={handlePaymentMade}
          className="w-full bg-brand-green text-white hover:bg-brand-lightGreen"
        >
          PAYMENT MADE
        </Button>
      </div>
    </div>
  );
};

export default PaymentInfo;
