
import { useEffect, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Member {
  id: number;
  name: string;
  joinDate: string;
  country: string;
  avatar?: string;
}

const Members = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [members, setMembers] = useState<Member[]>([]);
  
  useEffect(() => {
    // Mock member data
    const mockMembers = [
      {
        id: 1,
        name: "John Doe",
        joinDate: "May 5, 2025",
        country: "Nigeria",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1287&auto=format&fit=crop"
      },
      {
        id: 2,
        name: "Amaka Johnson",
        joinDate: "May 4, 2025",
        country: "Nigeria",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop"
      },
      {
        id: 3,
        name: "Michael Obi",
        joinDate: "May 4, 2025",
        country: "Nigeria"
      },
      {
        id: 4,
        name: "Sarah Ahmed",
        joinDate: "May 3, 2025",
        country: "Nigeria",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop"
      },
      {
        id: 5,
        name: "Daniel Thompson",
        joinDate: "May 3, 2025",
        country: "Nigeria",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop"
      },
      {
        id: 6,
        name: "Elizabeth Okoro",
        joinDate: "May 2, 2025",
        country: "Nigeria"
      },
      {
        id: 7,
        name: "Samuel Wilson",
        joinDate: "May 2, 2025",
        country: "Nigeria",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop"
      },
      {
        id: 8,
        name: "Janet Brown",
        joinDate: "May 1, 2025",
        country: "Nigeria"
      },
      {
        id: 9,
        name: "Anthony Joshua",
        joinDate: "May 1, 2025",
        country: "Nigeria"
      },
      {
        id: 10,
        name: "Linda Smith",
        joinDate: "April 30, 2025",
        country: "Nigeria",
        avatar: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1287&auto=format&fit=crop"
      }
    ];
    
    setMembers(mockMembers);
  }, []);
  
  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <MainLayout>
      <div className="container px-4 py-8 md:px-8">
        <h1 className="mb-6 text-2xl font-bold">EarnEdge Community Members</h1>
        
        <div className="mb-6">
          <Label htmlFor="search" className="mb-2 block">Search Members</Label>
          <Input
            id="search"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Members ({filteredMembers.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member) => (
                  <div 
                    key={member.id} 
                    className="flex items-center p-3 border rounded-md hover:bg-accent/50"
                  >
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-muted">
                      {member.avatar ? (
                        <img 
                          src={member.avatar} 
                          alt={member.name} 
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-primary/10 text-lg font-semibold text-primary">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{member.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        Joined: {member.joinDate} • {member.country}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center py-6 text-muted-foreground">No members found matching your search</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Members;
