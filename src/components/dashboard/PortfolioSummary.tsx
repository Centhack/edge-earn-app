
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PortfolioSummary = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Available Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <h3 className="text-3xl font-bold">₦ 145,500.00</h3>
          <div className="mt-1 flex items-center">
            <span className="text-sm font-medium text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSummary;
