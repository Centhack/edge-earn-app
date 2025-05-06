
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-brand-navy py-8">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img 
                src="/public/lovable-uploads/5351f2e7-c6b8-4837-a3c4-379bba971eb3.png" 
                alt="Logo" 
                className="h-8 w-8" 
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              &nbsp;
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">&nbsp;</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
                  &nbsp;
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">&nbsp;</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
                  &nbsp;
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">&nbsp;</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
                  &nbsp;
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
