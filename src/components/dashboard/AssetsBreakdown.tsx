
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Legend, 
  Tooltip 
} from "recharts";

const assetData = [
  { name: "Stocks", value: 9200, color: "#3DD64A" },
  { name: "Crypto", value: 3100, color: "#4AE857" },
  { name: "ETFs", value: 1500, color: "#2AB036" },
  { name: "Cash", value: 700, color: "#198C25" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md border border-border bg-card p-2 shadow-sm">
        <p className="text-xs font-medium" style={{ color: payload[0].payload.color }}>
          {payload[0].name}
        </p>
        <p className="text-sm font-semibold">
          ${payload[0].value.toLocaleString()}
        </p>
        <p className="text-xs text-muted-foreground">
          {((payload[0].value / 14500) * 100).toFixed(1)}%
        </p>
      </div>
    );
  }
  return null;
};

const AssetsBreakdown = () => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Asset Allocation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={assetData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {assetData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                layout="vertical" 
                align="right"
                verticalAlign="middle"
                formatter={(value, entry: any) => {
                  return <span style={{ color: entry.color }}>{value}</span>;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {assetData.map((asset) => (
            <div key={asset.name} className="flex items-center justify-between rounded-md border border-border p-2">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: asset.color }}></div>
                <span className="ml-2 text-sm font-medium">{asset.name}</span>
              </div>
              <span className="text-sm font-medium">${asset.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AssetsBreakdown;
