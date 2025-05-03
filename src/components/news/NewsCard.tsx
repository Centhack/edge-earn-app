
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsCardProps {
  title: string;
  source: string;
  date: string;
  summary: string;
  image?: string;
  url: string;
}

const NewsCard = ({ title, source, date, summary, image, url }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:border-brand-green/50 hover:shadow-md">
      <div className="flex flex-col sm:flex-row">
        {image && (
          <div className="h-48 sm:h-auto sm:w-1/3">
            <img 
              src={image} 
              alt={title} 
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <CardContent className={`flex flex-1 flex-col p-4 ${image ? 'sm:w-2/3' : 'w-full'}`}>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">{source}</span>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          <h3 className="mb-2 text-lg font-semibold">{title}</h3>
          <p className="mb-4 flex-1 text-sm text-muted-foreground">{summary}</p>
          <div className="mt-auto">
            <Button variant="outline" size="sm" asChild>
              <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                Read More 
                <ExternalLink className="ml-1 h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default NewsCard;
