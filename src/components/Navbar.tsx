import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Gallery", id: "gallery" },
    { label: "About", id: "hotel-info" },
    { label: "Reviews", id: "testimonials" }
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-playfair font-bold text-cream">
            Ciudad Fernandina
          </a>
          
          <button
            className="lg:hidden text-cream"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-cream hover:text-white transition-colors font-inter font-medium text-shadow tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://www.booking.com/Share-ucGXwZ8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cream text-brown px-6 py-2 rounded hover:bg-cream/90 transition-colors font-inter font-medium"
            >
              Book Now
            </a>
          </div>
        </div>

        <div
          className={`lg:hidden absolute left-0 right-0 bg-brown shadow-lg transition-all duration-300 ${
            isMenuOpen ? "top-full opacity-100" : "-top-96 opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-cream hover:text-white transition-colors font-inter font-medium tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://www.booking.com/Share-ucGXwZ8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cream text-brown px-6 py-2 rounded hover:bg-cream/90 transition-colors font-inter text-center font-medium"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;