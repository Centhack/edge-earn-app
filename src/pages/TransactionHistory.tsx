
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Transaction {
  id: string;
  type: "withdrawal" | "loan" | "airtime" | "data";
  amount: string;
  date: string;
  time: string;
  status: "completed" | "pending" | "failed";
}

const TransactionHistory = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  useEffect(() => {
    // Get user transactions from localStorage
    const userTransactions = JSON.parse(localStorage.getItem("earnedge_transactions") || "[]");
    setTransactions(userTransactions);
  }, []);
  
  const getTypeIcon = (type: string) => {
    switch(type) {
      case "withdrawal":
        return "↓";
      case "airtime":
        return "✆";
      case "data":
        return "📱";
      default:
        return "-";
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  
  return (
    <MainLayout>
      <div className="container px-4 py-8 md:px-8">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleGoBack}
            className="mr-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Transaction History</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Your Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            {transactions.length > 0 ? (
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div 
                    key={transaction.id} 
                    className="flex items-center justify-between p-3 border rounded-md hover:bg-accent/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full text-white ${
                        transaction.type === 'withdrawal' ? 'bg-red-500' : 
                        transaction.type === 'airtime' ? 'bg-blue-500' : 'bg-purple-500'
                      }`}>
                        {getTypeIcon(transaction.type)}
                      </div>
                      <div>
                        <p className="font-medium capitalize">{transaction.type}</p>
                        <p className="text-xs text-muted-foreground">
                          {transaction.date} • {transaction.time}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-red-500">
                        - ₦{transaction.amount}
                      </p>
                      <p className="text-xs text-green-500">
                        Completed
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center py-6 text-muted-foreground">No transaction history available</p>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default TransactionHistory;
