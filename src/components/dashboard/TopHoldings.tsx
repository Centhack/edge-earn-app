
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const holdingsData = [
  { 
    name: "AAPL",
    fullName: "Apple Inc.",
    shares: 10,
    price: 175.35,
    change: 2.45,
    changePercent: 1.42,
    value: 1753.50
  },
  { 
    name: "MSFT",
    fullName: "Microsoft Corp.",
    shares: 8,
    price: 326.70,
    change: 4.20,
    changePercent: 1.30,
    value: 2613.60
  },
  { 
    name: "GOOGL",
    fullName: "Alphabet Inc.",
    shares: 5,
    price: 132.60,
    change: -1.30,
    changePercent: -0.97,
    value: 663.00
  },
  { 
    name: "AMZN",
    fullName: "Amazon.com Inc.",
    shares: 12,
    price: 159.75,
    change: 0.45,
    changePercent: 0.28,
    value: 1917.00
  },
  { 
    name: "TSLA",
    fullName: "Tesla Inc.",
    shares: 6,
    price: 182.35,
    change: -3.40,
    changePercent: -1.83,
    value: 1094.10
  }
];

const TopHoldings = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Top Holdings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="pb-2 text-left text-sm font-medium text-muted-foreground">Symbol</th>
                <th className="pb-2 text-right text-sm font-medium text-muted-foreground">Price</th>
                <th className="pb-2 text-right text-sm font-medium text-muted-foreground">Change</th>
                <th className="pb-2 text-right text-sm font-medium text-muted-foreground">Value</th>
              </tr>
            </thead>
            <tbody>
              {holdingsData.map((holding) => (
                <tr key={holding.name} className="border-b border-border/30 last:border-0">
                  <td className="py-3">
                    <div>
                      <div className="font-medium">{holding.name}</div>
                      <div className="text-xs text-muted-foreground">{holding.fullName}</div>
                    </div>
                  </td>
                  <td className="py-3 text-right">
                    <div className="font-medium">${holding.price.toFixed(2)}</div>
                    <div className="text-xs text-muted-foreground">{holding.shares} shares</div>
                  </td>
                  <td className="py-3 text-right">
                    <div className={`flex items-center justify-end ${holding.change >= 0 ? 'text-brand-green' : 'text-destructive'}`}>
                      {holding.change >= 0 ? (
                        <ArrowUpRight className="mr-0.5 h-3 w-3" />
                      ) : (
                        <ArrowDownRight className="mr-0.5 h-3 w-3" />
                      )}
                      <span>{Math.abs(holding.changePercent).toFixed(2)}%</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {holding.change >= 0 ? '+' : ''}{holding.change.toFixed(2)}
                    </div>
                  </td>
                  <td className="py-3 text-right">
                    <div className="font-medium">${holding.value.toFixed(2)}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopHoldings;
