import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onSectionClick: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "Profil" },
    { id: "projects", label: "Projekte" },
    { id: "gallery", label: "Galerie" },
    { id: "inspiration", label: "Inspiration" },
    { id: "contact", label: "Kontakt" },
  ];

  const handleClick = (id: string) => {
    onSectionClick(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-b border-purple-500/20 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Kai Dombrowski
          </div>

          {/* Desktop-Menü */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className="hover:text-purple-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Menü öffnen">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 md:hidden flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="text-left text-sm hover:text-purple-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
