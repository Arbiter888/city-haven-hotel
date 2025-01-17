import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      url: "/lovable-uploads/f1875fa0-753a-4682-9064-6e711c4e29a8.png",
      title: "Fine Dining",
      description: "Exquisite dining experience with local and international cuisine",
    },
    {
      url: "/lovable-uploads/e32826fb-6401-45ba-9502-a11024bd6727.png",
      title: "Luxurious Interior",
      description: "Elegant and spacious interior spaces with modern amenities",
    },
    {
      url: "/lovable-uploads/93972150-7456-45c0-9051-0cb5b47fe575.png",
      title: "Heritage Courtyard",
      description: "Beautiful courtyard featuring historic statuary and fountains",
    },
    {
      url: "/lovable-uploads/09c53088-db56-4b48-90a0-fb51898c5581.png",
      title: "Hotel Exterior",
      description: "Majestic colonial architecture with modern comforts",
    },
    {
      url: "/lovable-uploads/0c040402-0533-44c1-875a-29a3e9741fe6.png",
      title: "Local Experience",
      description: "Traditional kalesa rides through historic streets",
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
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
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