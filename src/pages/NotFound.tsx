
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page Not Found | EarnEdge";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-navy p-4">
      <div className="w-full max-w-md space-y-6 rounded-lg border border-brand-green/20 bg-secondary/20 p-8 backdrop-blur-sm text-center">
        <div className="flex flex-col items-center space-y-2">
          <img
            src="/lovable-uploads/ad44e4a1-9150-460d-91e2-330c173b5d9e.png"
            alt="EarnEdge Logo"
            className="h-20 w-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-amber-500">404</h1>
          <p className="text-xl text-white mb-4">Page Not Found</p>
          <p className="text-sm text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-brand-green text-white hover:bg-brand-lightGreen">
            <Link to="/">Return to Home</Link>
          </Button>
          <Button asChild variant="outline" className="mt-4">
            <Link to="/verify-code" className="w-full">
              Go to EARN ID Verification
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
