import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const PaymentVerification = () => {
  // Keep countdown state but don't display it visibly
  const [countdown, setCountdown] = useState(13);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Verifying Payment | EarnEdge";
    
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/payment-success");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-navy p-4">
      <div className="w-full max-w-md space-y-8 rounded-lg border border-brand-green/20 bg-secondary/20 p-8 backdrop-blur-sm">
        <div className="flex justify-center">
          <img
            src="/lovable-uploads/ad44e4a1-9150-460d-91e2-330c173b5d9e.png"
            alt="EarnEdge Logo"
            className="h-20 w-auto"
            style={{
              animation: "floatLogo 4s ease-in-out infinite"
            }}
          />
        </div>
        
        <div className="mt-6 space-y-6 text-center">
          <div className="flex flex-col items-center space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-brand-green" />
            <h1 className="text-xl font-bold text-white">Verifying Payment...</h1>
            <p className="text-lg text-gray-300">
              Dear valid user, hold for few moment, while we proceed and validiate your payment
            </p>
            {/* Countdown not visible but still working */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentVerification;
