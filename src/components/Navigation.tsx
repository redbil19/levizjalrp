import { useState } from "react";
import { NavLink } from "./NavLink";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBiografiOpen, setIsBiografiOpen] = useState(false);

  const biografiLinks = [
    { name: "Elez Ismaili", path: "/biografi/elez-ismaili" },
    { name: "Sead Ramadani", path: "/biografi/sead-ramadani" },
    { name: "Pellumb Vorpsi", path: "/biografi/pellumb-vorpsi" },
    { name: "Virtyt Sokoli", path: "/biografi/virtyt-sokoli" },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="Lidhja e Re e Prizrenit" className="h-16 w-16 object-contain" />
            <span className="font-bold text-lg hidden sm:block text-foreground">
              Lidhja e Re e Prizrenit
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              Kryesore
            </NavLink>
            <NavLink
              to="/programi"
              className="text-foreground hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              Programi
            </NavLink>
            
            {/* Biografi Dropdown */}
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
                Biografi
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {biografiLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className="block px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    activeClassName="bg-accent text-accent-foreground"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink
              to="/kontakti"
              className="text-foreground hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              Kontakti
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              Kryesore
            </NavLink>
            <NavLink
              to="/programi"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              Programi
            </NavLink>
            
            {/* Mobile Biografi Dropdown */}
            <div>
              <button
                onClick={() => setIsBiografiOpen(!isBiografiOpen)}
                className="flex items-center gap-1 py-2 text-foreground hover:text-primary transition-colors font-medium w-full"
              >
                Biografi
                <ChevronDown className={`w-4 h-4 transition-transform ${isBiografiOpen ? 'rotate-180' : ''}`} />
              </button>
              {isBiografiOpen && (
                <div className="pl-4 space-y-2">
                  {biografiLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 text-sm text-foreground hover:text-primary transition-colors"
                      activeClassName="text-primary"
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/kontakti"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              Kontakti
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
