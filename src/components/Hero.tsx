import { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/lovable-uploads/a7c271dc-a4a9-44ef-8404-d21524eb96d1.png",
      title: "Welcome to Ciudad Fernandina",
      subtitle: "Experience luxury in historic Vigan",
    },
    {
      image: "/lovable-uploads/686dbd87-4e5d-4d51-8262-7861aeb594fe.png",
      title: "Heritage Meets Luxury",
      subtitle: "A timeless stay in the heart of Vigan",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/20" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="space-y-6 animate-fade-up">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl font-inter text-white/90">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href="https://www.booking.com/Share-ucGXwZ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#003580] text-white px-8 py-3 rounded hover:bg-[#003580]/90 transition-colors font-inter flex items-center justify-center"
                >
                  Book on Booking.com
                </a>
                <button className="bg-cream text-brown px-8 py-3 rounded hover:bg-cream/90 transition-colors font-inter">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-full text-white"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-full text-white"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? "bg-white w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;