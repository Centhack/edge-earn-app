
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import NewsCard from "@/components/news/NewsCard";

const newsData = [
  {
    id: 1,
    title: "Fed Signals Potential Rate Cuts as Inflation Eases",
    source: "Financial Times",
    date: "May 3, 2025",
    summary: "Federal Reserve officials hinted at potential interest rate cuts later this year as inflation shows signs of slowing down to target levels, according to minutes from the latest policy meeting.",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1470&auto=format&fit=crop",
    url: "#"
  },
  {
    id: 2,
    title: "Tech Stocks Rally Amid Bullish Earnings Reports",
    source: "The Wall Street Journal",
    date: "May 2, 2025",
    summary: "Major technology companies surpassed earnings expectations this quarter, driving a significant rally in tech stocks and pushing the Nasdaq to new heights.",
    image: "https://images.unsplash.com/photo-1642543348354-c5975bf1956b?q=80&w=1632&auto=format&fit=crop",
    url: "#"
  },
  {
    id: 3,
    title: "Global Markets React to New Trade Agreement",
    source: "Bloomberg",
    date: "May 1, 2025",
    summary: "Global markets showed positive movement following the announcement of a comprehensive trade agreement between major economies, potentially easing supply chain constraints.",
    url: "#"
  },
  {
    id: 4,
    title: "Crypto Market Recovers After Recent Regulatory Clarity",
    source: "CoinDesk",
    date: "April 30, 2025",
    summary: "The cryptocurrency market saw a strong recovery after regulatory authorities provided clearer guidelines on digital asset trading and institutional investments.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1632&auto=format&fit=crop",
    url: "#"
  },
  {
    id: 5,
    title: "Housing Market Shows Signs of Cooling as Mortgage Rates Rise",
    source: "CNBC",
    date: "April 29, 2025",
    summary: "Recent data indicates a cooling housing market as mortgage rates continue to climb, potentially signaling the end of the pandemic-era housing boom.",
    url: "#"
  },
];

const News = () => {
  useEffect(() => {
    document.title = "News | EarnEdge";
  }, []);

  return (
    <MainLayout>
      <div className="container px-4 py-8 md:px-8">
        <h1 className="mb-6 text-2xl font-bold">Financial News</h1>
        
        <div className="space-y-6">
          {newsData.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              source={news.source}
              date={news.date}
              summary={news.summary}
              image={news.image}
              url={news.url}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default News;
