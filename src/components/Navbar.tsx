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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-playfair font-bold text-brown">
            Ciudad Fernandina
          </a>
          
          {/* Mobile menu button */}
          <button
            className="lg:hidden text-brown"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {["Rooms", "Dining", "Experiences", "Location", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-charcoal hover:text-brown transition-colors font-inter"
                >
                  {item}
                </a>
              )
            )}
            <button className="bg-brown text-cream px-6 py-2 rounded hover:bg-brown/90 transition-colors font-inter">
              Book Now
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
            isMenuOpen ? "top-full opacity-100" : "-top-96 opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["Rooms", "Dining", "Experiences", "Location", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-charcoal hover:text-brown transition-colors font-inter"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}
            <button className="bg-brown text-cream px-6 py-2 rounded hover:bg-brown/90 transition-colors font-inter">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;