
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  InputOTP, 
  InputOTPGroup, 
  InputOTPSlot 
} from "@/components/ui/input-otp";
import { toast } from "@/components/ui/sonner";

const VerifyCode = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const savedCode = localStorage.getItem("earnedge_code");

  const handleVerification = () => {
    // In a real app, we would verify against a backend
    // For demo, we'll check if the code matches the one from the success page
    // or allow access with code "056281"
    if (savedCode && verificationCode === savedCode) {
      toast.success("Code verified successfully!");
      window.location.href = "/dashboard";
    } else if (verificationCode === "056281") {
      toast.success("Code verified successfully!");
      window.location.href = "/dashboard";
    } else {
      toast.error("Invalid code. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-navy p-4">
      <div className="w-full max-w-md space-y-6 rounded-lg border border-brand-green/20 bg-secondary/20 p-8 backdrop-blur-sm">
        <div className="flex flex-col items-center space-y-2 text-center">
          <img
            src="/public/lovable-uploads/d4bcf0d6-cb1a-4e20-b671-e36f6556c6f1.png"
            alt="EarnEdge Logo"
            className="h-20 w-auto mb-4"
          />
          <h1 className="text-3xl font-bold">Enter EARN ID</h1>
          <p className="text-sm text-muted-foreground">
            Please enter your 6-digit EARN ID to access the dashboard
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-col items-center space-y-4">
            <InputOTP 
              maxLength={6}
              value={verificationCode}
              onChange={setVerificationCode}
              render={({ slots }) => (
                <InputOTPGroup className="gap-2">
                  {slots.map((slot, index) => (
                    <InputOTPSlot 
                      key={index} 
                      index={index} 
                      className="h-14 w-12 border-brand-green/40 text-lg"
                    />
                  ))}
                </InputOTPGroup>
              )}
            />
            
            <div className="mt-8 flex w-full flex-col space-y-4">
              <Button
                onClick={handleVerification}
                className="w-full bg-brand-green text-white hover:bg-brand-lightGreen"
                disabled={verificationCode.length !== 6}
              >
                Verify Code
              </Button>
              
              <Button asChild variant="outline">
                <Link to="/buy-earn-id" className="w-full">
                  BUY EARN ID
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
