
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const marketIndices = [
  { 
    name: "S&P 500",
    value: 5234.10,
    change: 34.56,
    changePercent: 0.67,
    trending: true
  },
  { 
    name: "Nasdaq",
    value: 16789.23,
    change: 145.78,
    changePercent: 0.88,
    trending: true
  },
  { 
    name: "Dow Jones",
    value: 38456.67,
    change: -89.12,
    changePercent: -0.23,
    trending: false
  },
  { 
    name: "Russell 2000",
    value: 2134.45,
    change: 12.34,
    changePercent: 0.59,
    trending: false
  }
];

const cryptoMarkets = [
  { 
    name: "Bitcoin",
    symbol: "BTC",
    value: 63245.67,
    change: 1245.89,
    changePercent: 2.01,
    trending: true
  },
  { 
    name: "Ethereum",
    symbol: "ETH",
    value: 3567.23,
    change: 87.45,
    changePercent: 2.52,
    trending: true
  },
  { 
    name: "Solana",
    symbol: "SOL",
    value: 137.89,
    change: -5.67,
    changePercent: -3.95,
    trending: true
  },
  { 
    name: "Cardano",
    symbol: "ADA",
    value: 0.45,
    change: 0.02,
    changePercent: 4.65,
    trending: false
  }
];

const MarketOverview = () => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Market Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="stocks">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="stocks">Stocks</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
          </TabsList>
          
          <TabsContent value="stocks" className="pt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {marketIndices.map((index) => (
                <div 
                  key={index.name}
                  className="flex flex-col rounded-md border border-border bg-secondary/30 p-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{index.name}</span>
                    {index.trending && (
                      <span className="rounded bg-brand-green/20 px-1.5 py-0.5 text-xs font-medium text-brand-green">
                        Trending
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-1">
                    <div className="text-lg font-semibold">${index.value.toLocaleString()}</div>
                    <div className={`flex items-center ${index.change >= 0 ? 'text-brand-green' : 'text-destructive'}`}>
                      {index.change >= 0 ? (
                        <ArrowUpRight className="mr-0.5 h-3 w-3" />
                      ) : (
                        <ArrowDownRight className="mr-0.5 h-3 w-3" />
                      )}
                      <span className="text-sm">
                        {index.change >= 0 ? '+' : ''}{index.change.toFixed(2)} ({Math.abs(index.changePercent).toFixed(2)}%)
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="crypto" className="pt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {cryptoMarkets.map((crypto) => (
                <div 
                  key={crypto.name}
                  className="flex flex-col rounded-md border border-border bg-secondary/30 p-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium">{crypto.name}</span>
                      <span className="ml-1.5 text-xs text-muted-foreground">{crypto.symbol}</span>
                    </div>
                    {crypto.trending && (
                      <span className="rounded bg-brand-green/20 px-1.5 py-0.5 text-xs font-medium text-brand-green">
                        Trending
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-1">
                    <div className="text-lg font-semibold">
                      ${crypto.value >= 1 ? crypto.value.toLocaleString() : crypto.value.toFixed(2)}
                    </div>
                    <div className={`flex items-center ${crypto.change >= 0 ? 'text-brand-green' : 'text-destructive'}`}>
                      {crypto.change >= 0 ? (
                        <ArrowUpRight className="mr-0.5 h-3 w-3" />
                      ) : (
                        <ArrowDownRight className="mr-0.5 h-3 w-3" />
                      )}
                      <span className="text-sm">
                        {crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)} ({Math.abs(crypto.changePercent).toFixed(2)}%)
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MarketOverview;
