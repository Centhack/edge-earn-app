
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, HelpCircle, Search, Settings, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProfileAvatar from "@/components/dashboard/ProfileAvatar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-brand-navy/95 backdrop-blur supports-[backdrop-filter]:bg-brand-navy/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo section */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/ad44e4a1-9150-460d-91e2-330c173b5d9e.png" 
            alt="EarnEdge Logo" 
            className="h-9 w-9" 
          />
          <span className="hidden text-xl font-bold text-white md:inline-block">EarnEdge</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <Link to="/dashboard" className="text-sm font-medium text-foreground/80 hover:text-foreground">
            Dashboard
          </Link>
          <Link to="/markets" className="text-sm font-medium text-foreground/80 hover:text-foreground">
            Markets
          </Link>
          <Link to="/news" className="text-sm font-medium text-foreground/80 hover:text-foreground">
            News
          </Link>
        </div>

        {/* Search and tools */}
        <div className="hidden items-center space-x-4 md:flex">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] bg-secondary pl-8"
            />
          </div>
          
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          
          <ProfileAvatar />
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 md:hidden">
          <ProfileAvatar />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="container md:hidden">
          <div className="space-y-4 px-4 py-5">
            <Link 
              to="/dashboard" 
              className="block text-base font-medium text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/markets" 
              className="block text-base font-medium text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Markets
            </Link>
            <Link 
              to="/news" 
              className="block text-base font-medium text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              News
            </Link>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full bg-secondary pl-8"
              />
            </div>
            <div className="flex space-x-2">
              <Button variant="secondary" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="secondary" size="icon">
                <HelpCircle className="h-5 w-5" />
              </Button>
              <Button variant="secondary" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
