import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { title: "Главная", path: "/" },
    { title: "О нас", path: "/about" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Lovable
            </span>
          </Link>
          
          <div className="hidden sm:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-gray-700 hover:text-purple-600 transition-colors px-3 py-2 rounded-md text-sm font-medium",
                  location.pathname === item.path && "text-purple-600"
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;