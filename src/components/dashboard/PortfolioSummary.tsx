
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const portfolioData = [
  { date: "May 1", value: 12400 },
  { date: "May 2", value: 12800 },
  { date: "May 3", value: 12750 },
  { date: "May 4", value: 13100 },
  { date: "May 5", value: 13400 },
  { date: "May 6", value: 13200 },
  { date: "May 7", value: 13500 },
  { date: "May 8", value: 13800 },
  { date: "May 9", value: 14200 },
  { date: "May 10", value: 14500 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md border border-border bg-card p-2 shadow-sm">
        <p className="text-xs font-medium">{label}</p>
        <p className="text-sm font-semibold text-brand-green">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const PortfolioSummary = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Portfolio Value</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <h3 className="text-3xl font-bold">$14,500.00</h3>
          <div className="mt-1 flex items-center">
            <span className="text-sm font-medium text-brand-green">+$2,100.00 (16.9%)</span>
            <span className="ml-2 text-xs text-muted-foreground">All time</span>
          </div>
        </div>
        
        <Tabs defaultValue="1m" className="mt-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="1d">1D</TabsTrigger>
            <TabsTrigger value="1w">1W</TabsTrigger>
            <TabsTrigger value="1m">1M</TabsTrigger>
            <TabsTrigger value="3m">3M</TabsTrigger>
            <TabsTrigger value="1y">1Y</TabsTrigger>
          </TabsList>
          <TabsContent value="1m" className="h-[280px] pt-4 chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={portfolioData}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3DD64A" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3DD64A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#243447" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#94A3B8' }} 
                />
                <YAxis 
                  domain={["dataMin - 500", "dataMax + 500"]} 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#94A3B8' }}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3DD64A"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="1d">
            <div className="h-[280px] flex items-center justify-center">
              <p className="text-muted-foreground">Daily chart data loading...</p>
            </div>
          </TabsContent>
          <TabsContent value="1w">
            <div className="h-[280px] flex items-center justify-center">
              <p className="text-muted-foreground">Weekly chart data loading...</p>
            </div>
          </TabsContent>
          <TabsContent value="3m">
            <div className="h-[280px] flex items-center justify-center">
              <p className="text-muted-foreground">3-month chart data loading...</p>
            </div>
          </TabsContent>
          <TabsContent value="1y">
            <div className="h-[280px] flex items-center justify-center">
              <p className="text-muted-foreground">Yearly chart data loading...</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PortfolioSummary;
