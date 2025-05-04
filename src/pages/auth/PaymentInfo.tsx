import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const PaymentInfo = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Format card number with spaces after every 4 digits
    const value = e.target.value.replace(/\D/g, '').substring(0, 16);
    const formattedValue = value.replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(formattedValue);
  };

  const handleExpiryDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Format expiry date as MM/YY
    let value = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (value.length > 2) {
      value = value.substring(0, 2) + '/' + value.substring(2);
    }
    setExpiryDate(value);
  };

  const handleCvv = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(e.target.value.replace(/\D/g, '').substring(0, 3));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      navigate("/payment-verification");
    }, 1500);
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
          <h1 className="text-3xl font-bold">Payment Information</h1>
          <p className="text-sm text-muted-foreground">
            Enter your payment details below to buy EARN ID
          </p>
        </div>
        
        <Card className="border-none bg-transparent shadow-none">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name on Card</Label>
              <Input
                id="name"
                placeholder="John Doe"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                placeholder="XXXX XXXX XXXX XXXX"
                value={cardNumber}
                onChange={handleCardNumber}
                maxLength={19}
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input
                  id="expiryDate"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={handleExpiryDate}
                  maxLength={5}
                  required
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  placeholder="XXX"
                  value={cvv}
                  onChange={handleCvv}
                  maxLength={3}
                  required
                />
              </div>
            </div>
            
            <Button disabled={isLoading} className="w-full bg-brand-green text-white hover:bg-brand-lightGreen">
              {isLoading ? (
                <>
                  Processing...
                </>
              ) : (
                "Confirm Payment"
              )}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default PaymentInfo;
