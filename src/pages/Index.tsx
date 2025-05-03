
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import CallToAction from "@/components/landing/CallToAction";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user has already signed up
    const storedUser = localStorage.getItem("earnedge_user");
    
    // If not signed up, redirect to signup page
    if (!storedUser) {
      navigate("/signup");
    }
  }, [navigate]);
  
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <CallToAction />
    </MainLayout>
  );
};

export default Index;
