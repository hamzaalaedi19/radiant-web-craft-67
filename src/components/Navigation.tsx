import { Link, useLocation } from "react-router-dom";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 flex items-center justify-between animate-fade-in">
      <div className="flex items-center gap-8">
        <div className="w-12 h-1 bg-accent" />
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-base font-medium transition-colors hover:text-accent ${
                  isActive(item.path) ? "text-accent" : "text-nav-inactive"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex items-center gap-4">
        <a 
          href="mailto:contact@portfolio.com" 
          className="hidden lg:block text-sm text-muted-foreground hover:text-accent transition-colors"
        >
          Email: <span className="text-accent">contact@portfolio.com</span>
        </a>
        <Button
          variant="outline"
          size="sm"
          className="hover:bg-accent hover:text-background transition-colors"
          asChild
        >
          <Link to="/login">Login</Link>
        </Button>
        <Button
          variant="default"
          size="sm"
          className="bg-accent hover:bg-accent/90 text-background transition-colors"
          asChild
        >
          <Link to="/register">Register</Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-secondary hover:text-accent transition-colors"
        >
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
