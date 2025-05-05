
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import NewsCard from "@/components/news/NewsCard";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Function to get today's date in the format "May 5, 2025"
const getTodayDate = () => {
  const date = new Date();
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

// Function to get yesterday's date
const getYesterdayDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

// Function to get the day before yesterday
const getTwoDaysAgoDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 2);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

const testimonialData = [
  {
    id: 1,
    title: "Quick Withdrawal Process",
    source: "Emmanuel T.",
    date: getTodayDate(),
    summary: "I just withdrew ₦45,000 from my EarnEdge account, and it was processed within minutes! The transaction was smooth, and the funds are already in my bank account. Highly recommended for anyone looking for a reliable platform.",
    url: "#"
  },
  {
    id: 2,
    title: "Great Data Plans",
    source: "Chioma A.",
    date: getTodayDate(),
    summary: "I purchased the 10GB data plan for ₦12,000, and it was activated immediately. The data speed is excellent, and the process was hassle-free. EarnEdge offers the best data plans I've found so far!",
    url: "#"
  },
  {
    id: 3,
    title: "Airtime Top-up Made Easy",
    source: "Samuel O.",
    date: getYesterdayDate(),
    summary: "I've been using EarnEdge for airtime top-ups for my business, and it's been a game-changer. The rates are competitive, and the process is quick. Topped up ₦7,000 today and it was instant!",
    url: "#"
  },
  {
    id: 4,
    title: "Seamless Experience",
    source: "Grace M.",
    date: getYesterdayDate(),
    summary: "As a student, EarnEdge has been instrumental in helping me manage my finances. I withdrew ₦25,000 to my bank account yesterday and it reflected instantly. Their platform is simple and effective.",
    url: "#"
  },
  {
    id: 5,
    title: "Exceptional Support",
    source: "Ibrahim H.",
    date: getTwoDaysAgoDate(),
    summary: "When I had an issue with my data purchase, EarnEdge's support team was incredibly responsive. They resolved my problem within minutes through their Telegram support. This level of service is rare!",
    url: "#"
  },
];

const News = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Testimonials | EarnEdge";
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8 md:px-8">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleGoBack}
            className="mr-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">User Testimonials</h1>
        </div>
        
        <div className="space-y-6">
          {testimonialData.map((testimonial) => (
            <NewsCard
              key={testimonial.id}
              title={testimonial.title}
              source={testimonial.source}
              date={testimonial.date}
              summary={testimonial.summary}
              url={testimonial.url}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default News;
