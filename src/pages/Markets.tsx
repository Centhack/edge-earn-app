
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const EarnEdgeChannel = () => {
  useEffect(() => {
    document.title = "EarnEdge Channel | EarnEdge";
  }, []);

  const handleJoinChannel = () => {
    window.open("https://whatsapp.com/channel/0029Vb4RhUPKLaHvcM9dbc0w", "_blank");
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8 md:px-8">
        <h1 className="mb-6 text-2xl font-bold">EarnEdge Channel</h1>
        
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Join Our WhatsApp Channel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Stay up-to-date with the latest earning opportunities, financial news, and exclusive tips by joining our official WhatsApp channel.
              </p>
              
              <div className="flex justify-center py-4">
                <img 
                  src="/lovable-uploads/ad44e4a1-9150-460d-91e2-330c173b5d9e.png"
                  alt="EarnEdge Logo" 
                  className="h-24 w-auto"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-center font-semibold text-lg">Benefits of joining:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Instant access to new earning opportunities</li>
                  <li>Financial tips and educational content</li>
                  <li>Community announcements and updates</li>
                  <li>Exclusive promotions for channel members</li>
                </ul>
              </div>
              
              <Button 
                onClick={handleJoinChannel} 
                className="w-full bg-brand-green text-white hover:bg-brand-lightGreen flex items-center justify-center gap-2"
              >
                Join WhatsApp Channel <ExternalLink size={16} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default EarnEdgeChannel;
