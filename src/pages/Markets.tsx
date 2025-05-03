
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import MarketOverview from "@/components/markets/MarketOverview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend 
} from "recharts";

const stocksData = [
  { name: 'Jan', SPX: 4700, DOW: 36800, NASDAQ: 15000 },
  { name: 'Feb', SPX: 4650, DOW: 36300, NASDAQ: 14800 },
  { name: 'Mar', SPX: 4800, DOW: 37200, NASDAQ: 15500 },
  { name: 'Apr', SPX: 4950, DOW: 38000, NASDAQ: 16000 },
  { name: 'May', SPX: 5200, DOW: 38500, NASDAQ: 16800 },
];

const Markets = () => {
  useEffect(() => {
    document.title = "Markets | EarnEdge";
  }, []);

  return (
    <MainLayout>
      <div className="container px-4 py-8 md:px-8">
        <h1 className="mb-6 text-2xl font-bold">Markets</h1>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <MarketOverview />
          </div>
          
          <div className="lg:col-span-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Market Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="indices">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="indices">Indices</TabsTrigger>
                    <TabsTrigger value="sectors">Sectors</TabsTrigger>
                    <TabsTrigger value="commodities">Commodities</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="indices" className="h-[350px] pt-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={stocksData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#243447" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#0A1929', border: '1px solid #243447' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="SPX" 
                          stroke="#3DD64A" 
                          strokeWidth={2} 
                          activeDot={{ r: 8 }} 
                          name="S&P 500"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="DOW" 
                          stroke="#4AE857" 
                          strokeWidth={2} 
                          name="Dow Jones"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="NASDAQ" 
                          stroke="#2AB036" 
                          strokeWidth={2} 
                          name="NASDAQ"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </TabsContent>
                  
                  <TabsContent value="sectors" className="h-[350px] flex items-center justify-center">
                    <p className="text-muted-foreground">Sector data coming soon...</p>
                  </TabsContent>
                  
                  <TabsContent value="commodities" className="h-[350px] flex items-center justify-center">
                    <p className="text-muted-foreground">Commodities data coming soon...</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Market Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-md border border-border bg-secondary/30 p-4">
                  <div className="text-sm font-medium text-muted-foreground">May 5, 2025</div>
                  <div className="mt-2 font-semibold">Fed Interest Rate Decision</div>
                  <div className="mt-1 text-sm text-muted-foreground">Expected: 4.75%</div>
                </div>
                <div className="rounded-md border border-border bg-secondary/30 p-4">
                  <div className="text-sm font-medium text-muted-foreground">May 8, 2025</div>
                  <div className="mt-2 font-semibold">Unemployment Rate</div>
                  <div className="mt-1 text-sm text-muted-foreground">Previous: 3.8%</div>
                </div>
                <div className="rounded-md border border-border bg-secondary/30 p-4">
                  <div className="text-sm font-medium text-muted-foreground">May 12, 2025</div>
                  <div className="mt-2 font-semibold">Consumer Price Index</div>
                  <div className="mt-1 text-sm text-muted-foreground">Expected: +0.3% m/m</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Markets;
