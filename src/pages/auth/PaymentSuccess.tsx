
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { Eye, EyeOff } from "lucide-react";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const verificationCode = "056281";
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    // Add keyframes for confetti animation
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes floatHorizontal {
        0% { transform: translateX(0); }
        50% { transform: translateX(15px); }
        100% { transform: translateX(0); }
      }
      
      @keyframes confetti {
        0% { transform: translateY(0) rotate(0); opacity: 1; }
        100% { transform: translateY(100px) rotate(720deg); opacity: 0; }
      }
    `;
    document.head.appendChild(styleElement);
    
    // Store the verification code in localStorage
    localStorage.setItem("earnedge_code", verificationCode);
    
    // Simulate processing delay
    const timer = setTimeout(() => {
      toast.success("Payment confirmed!");
    }, 1500);
    
    return () => {
      clearTimeout(timer);
      document.head.removeChild(styleElement);
    };
  }, []);

  const handleGoBack = () => {
    navigate("/verify-code");
  };

  const toggleCodeVisibility = () => {
    setShowCode(!showCode);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-navy p-4">
      <div className="w-full max-w-md space-y-6 rounded-lg border border-brand-green/20 bg-secondary/20 p-8 backdrop-blur-sm">
        <div className="relative flex justify-center">
          {/* Left trumpet emoji with confetti */}
          <div className="absolute -left-2 top-0 text-4xl sm:text-5xl">
            🎺
            <div className="confetti-container absolute top-6 left-4">
              {Array.from({length: 10}).map((_, i) => (
                <div 
                  key={`left-${i}`}
                  className="absolute"
                  style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: ['#ff5252', '#ffeb3b', '#2196f3', '#4caf50', '#9c27b0'][i % 5],
                    left: `${Math.random() * 30}px`,
                    animation: `confetti ${0.5 + Math.random() * 1}s ease-out ${Math.random() * 0.5}s forwards`
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Right trumpet emoji with confetti */}
          <div className="absolute -right-2 top-0 text-4xl sm:text-5xl">
            🎺
            <div className="confetti-container absolute top-6 right-4">
              {Array.from({length: 10}).map((_, i) => (
                <div 
                  key={`right-${i}`}
                  className="absolute"
                  style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: ['#ff5252', '#ffeb3b', '#2196f3', '#4caf50', '#9c27b0'][i % 5],
                    right: `${Math.random() * 30}px`,
                    animation: `confetti ${0.5 + Math.random() * 1}s ease-out ${Math.random() * 0.5}s forwards`
                  }}
                />
              ))}
            </div>
          </div>
          
          <img
            src="/lovable-uploads/ad44e4a1-9150-460d-91e2-330c173b5d9e.png"
            alt="EarnEdge Logo"
            className="h-16 w-16"
            style={{
              animation: "floatHorizontal 4s ease-in-out infinite"
            }}
          />
        </div>
        
        {/* Checkmark symbol made with gradients and confetti effect */}
        <div className="relative flex justify-center mt-4 mb-2">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <path 
              d="M17,30 L25,38 L43,20" 
              fill="none" 
              stroke="#4caf50" 
              strokeWidth="5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <div className="confetti-container absolute">
            {Array.from({length: 15}).map((_, i) => (
              <div 
                key={`check-${i}`}
                className="absolute"
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: ['#ff5252', '#ffeb3b', '#2196f3', '#4caf50', '#9c27b0'][i % 5],
                  left: `${Math.random() * 60}px`,
                  top: `${Math.random() * 60}px`,
                  animation: `confetti ${0.8 + Math.random() * 1.2}s ease-out ${Math.random() * 0.5}s forwards`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="space-y-4 text-center">
          <h1 className="text-2xl font-bold text-brand-green">
            PAYMENT SUCCESSFUL
          </h1>
          <p className="text-lg">
            Your payment for your Earn ID has been confirmed successfully. Here is your CODE:
          </p>
          
          <div className="mx-auto my-6 flex w-fit justify-center rounded-md bg-brand-green/20 p-4 text-3xl font-bold tracking-widest text-brand-green relative">
            {showCode ? verificationCode : "******"}
            <button 
              onClick={toggleCodeVisibility} 
              className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 text-brand-green hover:text-brand-lightGreen"
            >
              {showCode ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          
          <Button
            onClick={handleGoBack}
            className="w-full bg-brand-green text-white hover:bg-brand-lightGreen mt-16"
          >
            GO BACK TO HOME PAGE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
