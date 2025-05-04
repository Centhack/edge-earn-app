
import { useEffect, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Transaction {
  id: string;
  type: "withdrawal" | "loan" | "airtime" | "data";
  amount: string;
  date: string;
  time: string;
  status: "completed" | "pending" | "failed";
}

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  useEffect(() => {
    // Mock transaction data
    const mockTransactions = [
      {
        id: "TXN123456789",
        type: "withdrawal",
        amount: "15,000.00",
        date: "2025-05-02",
        time: "14:30:45",
        status: "completed"
      },
      {
        id: "TXN987654321",
        type: "loan",
        amount: "25,000.00",
        date: "2025-05-01",
        time: "09:15:22",
        status: "completed"
      },
      {
        id: "TXN456789123",
        type: "airtime",
        amount: "2,000.00",
        date: "2025-04-29",
        time: "17:45:10",
        status: "completed"
      },
      {
        id: "TXN789123456",
        type: "data",
        amount: "3,500.00",
        date: "2025-04-28",
        time: "11:20:35",
        status: "completed"
      }
    ] as Transaction[];
    
    setTransactions(mockTransactions);
  }, []);
  
  const getTypeIcon = (type: string) => {
    switch(type) {
      case "withdrawal":
        return "↓";
      case "loan":
        return "↑";
      case "airtime":
        return "✆";
      case "data":
        return "📱";
      default:
        return "-";
    }
  };
  
  return (
    <MainLayout>
      <div className="container px-4 py-8 md:px-8">
        <h1 className="mb-6 text-2xl font-bold">Transaction History</h1>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Transactions</CardTitle>
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
                        transaction.type === 'loan' ? 'bg-green-500' : 
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
                      <p className={`font-medium ${
                        transaction.type === 'withdrawal' || 
                        transaction.type === 'airtime' || 
                        transaction.type === 'data' ? 'text-red-500' : 'text-green-500'
                      }`}>
                        {transaction.type === 'loan' ? '+ ' : '- '}₦{transaction.amount}
                      </p>
                      <p className={`text-xs ${
                        transaction.status === 'completed' ? 'text-green-500' : 
                        transaction.status === 'pending' ? 'text-amber-500' : 'text-red-500'
                      }`}>
                        {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
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
