
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const verificationCode = "056281";

  useEffect(() => {
    // Store the verification code in localStorage
    localStorage.setItem("earnedge_code", verificationCode);
    
    // Simulate processing delay
    const timer = setTimeout(() => {
      toast.success("Payment confirmed!");
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleGoBack = () => {
    navigate("/verify-code");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-navy p-4">
      <div className="w-full max-w-md space-y-6 rounded-lg border border-brand-green/20 bg-secondary/20 p-8 backdrop-blur-sm">
        <div className="relative flex justify-center">
          {/* Left trumpet emoji */}
          <div className="absolute -left-2 top-0 text-4xl sm:text-5xl">🎺</div>
          
          {/* Right trumpet emoji */}
          <div className="absolute -right-2 top-0 text-4xl sm:text-5xl">🎺</div>
          
          <img
            src="/public/lovable-uploads/d4bcf0d6-cb1a-4e20-b671-e36f6556c6f1.png"
            alt="EarnEdge Logo"
            className="h-16 w-16 animate-bounce"
          />
        </div>
        
        <div className="mt-16 space-y-4 text-center">
          <h1 className="text-2xl font-bold text-brand-green">
            WELCOME TO EarnEdge!
          </h1>
          <p className="text-lg">
            Your payment for your Earn ID has been confirmed successfully. Here is your CODE:
          </p>
          
          <div className="mx-auto my-6 flex w-fit animate-pulse justify-center rounded-md bg-brand-green/20 p-4 text-3xl font-bold tracking-widest text-brand-green">
            {verificationCode}
          </div>
          
          <Button
            onClick={handleGoBack}
            className="w-full bg-brand-green text-white hover:bg-brand-lightGreen"
          >
            GO BACK TO HOME PAGE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
