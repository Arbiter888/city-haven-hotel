import { useEffect, useState } from "react";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50 animate-fade-in">
      <a
        href="https://www.booking.com/Share-ucGXwZ8"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#003580] text-white px-6 py-3 rounded-full hover:bg-[#003580]/90 transition-colors font-inter flex items-center justify-center shadow-lg hover:shadow-xl"
      >
        Book on Booking.com
      </a>
      <button className="bg-cream text-brown px-6 py-3 rounded-full hover:bg-cream/90 transition-colors font-inter shadow-lg hover:shadow-xl">
        Contact Us
      </button>
    </div>
  );
};

export default FloatingButtons;