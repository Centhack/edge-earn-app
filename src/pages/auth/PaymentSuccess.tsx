
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-navy p-4">
      <div className="w-full max-w-md space-y-6 rounded-lg border border-brand-green/20 bg-secondary/20 p-8 backdrop-blur-sm">
        <div className="flex items-center mb-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleGoBack}
            className="mr-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h2 className="text-xl font-semibold">Payment Status</h2>
        </div>
        
        <div className="flex justify-center">
          <img
            src="/lovable-uploads/ad44e4a1-9150-460d-91e2-330c173b5d9e.png"
            alt="Logo"
            className="h-16 w-16"
          />
        </div>
        
        <div className="space-y-4 text-center">
          <h1 className="text-2xl font-bold">
            Payment Processing
          </h1>
          <p className="text-lg">
            Your payment is still being processed. Please check back later for confirmation.
          </p>
          
          <Button
            onClick={() => navigate("/dashboard")}
            className="w-full bg-brand-green text-white hover:bg-brand-lightGreen mt-16"
          >
            BACK TO DASHBOARD
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
