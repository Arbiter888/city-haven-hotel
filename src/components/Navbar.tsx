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
            {["Rooms", "Dining", "Experiences", "Gallery", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-cream hover:text-white transition-colors font-inter font-medium text-shadow"
                >
                  {item}
                </a>
              )
            )}
            <button className="bg-cream text-brown px-6 py-2 rounded hover:bg-cream/90 transition-colors font-inter">
              Book Now
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden absolute left-0 right-0 bg-brown shadow-lg transition-all duration-300 ${
            isMenuOpen ? "top-full opacity-100" : "-top-96 opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["Rooms", "Dining", "Experiences", "Gallery", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-cream hover:text-white transition-colors font-inter"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}
            <button className="bg-cream text-brown px-6 py-2 rounded hover:bg-cream/90 transition-colors font-inter">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;