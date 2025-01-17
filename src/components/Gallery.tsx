import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      url: "/lovable-uploads/a7c271dc-a4a9-44ef-8404-d21524eb96d1.png",
      title: "Hotel Exterior",
      description: "The majestic facade of Ciudad Fernandina",
    },
    {
      url: "/lovable-uploads/686dbd87-4e5d-4d51-8262-7861aeb594fe.png",
      title: "Luxury Suite",
      description: "Experience comfort in our well-appointed rooms",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-brown mb-12 text-center">
          Our Gallery
        </h2>
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-[16/9]">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                    <h3 className="text-2xl font-playfair text-white mb-2">
                      {image.title}
                    </h3>
                    <p className="text-white/90">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
};

export default Gallery;