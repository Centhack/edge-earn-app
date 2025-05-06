
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X, Telegram } from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleTelegramSupport = () => {
    window.open("https://t.me/AppVendor_001", "_blank");
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
        
        <div className="flex flex-col items-center space-y-6">
          <div className="flex justify-center">
            <div className="h-32 w-32 rounded-full bg-red-500 flex items-center justify-center">
              <X className="h-20 w-20 text-white" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-amber-500 text-center">
            PAYMENT NOT CONFIRMED!
          </h1>
          
          <p className="text-lg text-center">
            Proceed to your bank app to complete this transfer
          </p>
          
          <p className="text-lg text-center">
            Your payment wasn't confirmed. Contact us for help
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="w-full bg-transparent border-2 border-gray-500 hover:bg-gray-700 flex items-center gap-2 rounded-md"
              >
                <span className="text-lg">FEE NOT CONFIRMED</span>
                <div className="ml-auto">
                  <Telegram className="h-5 w-5" />
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-secondary/95 backdrop-blur-sm border border-brand-green/20">
              <DialogHeader>
                <DialogTitle>Contact Support</DialogTitle>
                <DialogDescription>
                  Get help from our support team on Telegram
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col space-y-4">
                <p>
                  Our support team is ready to help you resolve any payment issues.
                </p>
                <Button
                  onClick={handleTelegramSupport}
                  className="w-full bg-brand-green text-white hover:bg-brand-lightGreen flex items-center gap-2"
                >
                  <Telegram className="h-5 w-5" />
                  Chat with Support on Telegram
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <Button
            onClick={() => navigate("/dashboard")}
            className="w-full bg-brand-green text-white hover:bg-brand-lightGreen"
          >
            BACK TO DASHBOARD
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
