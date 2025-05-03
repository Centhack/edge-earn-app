
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const VerifyCode = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const savedCode = localStorage.getItem("earnedge_code");

  const handleNumberClick = (number: string) => {
    if (verificationCode.length < 6) {
      setVerificationCode(prev => prev + number);
    }
  };

  const handleBackspace = () => {
    setVerificationCode(prev => prev.slice(0, -1));
  };

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
            src="/lovable-uploads/ad44e4a1-9150-460d-91e2-330c173b5d9e.png"
            alt="EarnEdge Logo"
            className="h-20 w-auto mb-4"
          />
          <h1 className="text-3xl font-bold">Enter EARN ID</h1>
          <p className="text-sm text-muted-foreground">
            Please enter your 6-digit EARN ID to access the dashboard
          </p>
        </div>
        
        <div className="space-y-6">
          {/* Display the entered code */}
          <div className="flex justify-center">
            <div className="flex gap-2">
              {[...Array(6)].map((_, index) => (
                <div 
                  key={index}
                  className={`flex h-14 w-12 items-center justify-center rounded-md border ${
                    verificationCode[index] ? "border-brand-green bg-brand-green/10" : "border-brand-green/40"
                  } text-2xl font-bold`}
                >
                  {verificationCode[index] || ""}
                </div>
              ))}
            </div>
          </div>
          
          {/* Number pad */}
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
              <Button
                key={number}
                onClick={() => handleNumberClick(number.toString())}
                variant="outline"
                className="h-14 text-xl font-bold hover:bg-brand-green/10"
              >
                {number}
              </Button>
            ))}
            <Button
              onClick={handleBackspace}
              variant="outline"
              className="h-14 text-xl font-bold hover:bg-destructive/10"
            >
              ←
            </Button>
            <Button
              onClick={() => handleNumberClick("0")}
              variant="outline"
              className="h-14 text-xl font-bold hover:bg-brand-green/10"
            >
              0
            </Button>
            <Button
              disabled={verificationCode.length !== 6}
              onClick={handleVerification}
              variant="outline"
              className="h-14 text-xl font-bold hover:bg-brand-green/10 disabled:opacity-50"
            >
              ✓
            </Button>
          </div>
          
          <div className="flex flex-col space-y-4 mt-6">
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
  );
};

export default VerifyCode;
