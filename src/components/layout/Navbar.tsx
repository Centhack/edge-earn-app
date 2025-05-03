
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, HelpCircle, Search, Settings, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-brand-navy/95 backdrop-blur supports-[backdrop-filter]:bg-brand-navy/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo section */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/public/lovable-uploads/5351f2e7-c6b8-4837-a3c4-379bba971eb3.png" 
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
        </div>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
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
