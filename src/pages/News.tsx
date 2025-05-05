
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import NewsCard from "@/components/news/NewsCard";

const testimonialData = [
  {
    id: 1,
    title: "Successful Withdrawal Experience",
    source: "John D.",
    date: "May 3, 2025",
    summary: "I was skeptical at first, but EarnEdge is legit! I successfully withdrew ₦50,000 to my bank account and it reflected instantly. Their platform is simple and effective.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1470&auto=format&fit=crop",
    url: "#"
  },
  {
    id: 2,
    title: "Airtime Purchase Made Easy",
    source: "Sarah M.",
    date: "May 2, 2025",
    summary: "I've been using EarnEdge for airtime top-ups, and it's been a game-changer. The rates are competitive, and the process is quick. Highly recommended for busy professionals!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1632&auto=format&fit=crop",
    url: "#"
  },
  {
    id: 3,
    title: "Reliable Data Plans",
    source: "Michael O.",
    date: "May 1, 2025",
    summary: "EarnEdge offers the most affordable data plans I've found. I purchased the 10GB plan for my business, and it lasted the entire period with excellent speed and coverage.",
    url: "#"
  },
  {
    id: 4,
    title: "Financial Freedom Through EarnEdge",
    source: "Amaka J.",
    date: "April 30, 2025",
    summary: "As a student, EarnEdge has been instrumental in helping me manage my finances. The withdrawal system is reliable, and I've recommended it to all my classmates.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1632&auto=format&fit=crop",
    url: "#"
  },
  {
    id: 5,
    title: "Best Customer Support Experience",
    source: "Daniel T.",
    date: "April 29, 2025",
    summary: "When I had an issue with my transaction, EarnEdge's support team was incredibly responsive. They resolved my problem within minutes. This level of service is rare!",
    url: "#"
  },
];

const News = () => {
  useEffect(() => {
    document.title = "Testimonials | EarnEdge";
  }, []);

  return (
    <MainLayout>
      <div className="container px-4 py-8 md:px-8">
        <h1 className="mb-6 text-2xl font-bold">User Testimonials</h1>
        
        <div className="space-y-6">
          {testimonialData.map((testimonial) => (
            <NewsCard
              key={testimonial.id}
              title={testimonial.title}
              source={testimonial.source}
              date={testimonial.date}
              summary={testimonial.summary}
              image={testimonial.image}
              url={testimonial.url}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default News;
