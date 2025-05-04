
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import EarnEdgeChannel from "./pages/Markets";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import VerifyCode from "./pages/auth/VerifyCode";
import BuyEarnId from "./pages/auth/BuyEarnId";
import PaymentInfo from "./pages/auth/PaymentInfo";
import PaymentVerification from "./pages/auth/PaymentVerification";
import PaymentSuccess from "./pages/auth/PaymentSuccess";
import Withdrawal from "./pages/Withdrawal";
import VerifyEarnId from "./pages/VerifyEarnId";
import WithdrawalSuccess from "./pages/WithdrawalSuccess";
import TransactionHistory from "./pages/TransactionHistory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/buy-earn-id" element={<BuyEarnId />} />
          <Route path="/payment-info" element={<PaymentInfo />} />
          <Route path="/payment-verification" element={<PaymentVerification />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/landing" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/channel" element={<EarnEdgeChannel />} />
          <Route path="/news" element={<News />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/verify-earn-id" element={<VerifyEarnId />} />
          <Route path="/withdrawal-success" element={<WithdrawalSuccess />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
