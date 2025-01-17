import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      url: "/lovable-uploads/178148c6-20cf-4bdc-bfa2-258cd2315d33.png",
      title: "Hotel Exterior",
      description: "The majestic facade of Ciudad Fernandina",
      sizes: {
        sm: "/lovable-uploads/178148c6-20cf-4bdc-bfa2-258cd2315d33.png?w=640",
        md: "/lovable-uploads/178148c6-20cf-4bdc-bfa2-258cd2315d33.png?w=1024",
        lg: "/lovable-uploads/178148c6-20cf-4bdc-bfa2-258cd2315d33.png?w=1920",
      }
    },
    {
      url: "/lovable-uploads/a97c7a7d-ffdd-4784-bce9-1f1013df055d.png",
      title: "Luxury Suite",
      description: "Experience comfort in our well-appointed rooms",
      sizes: {
        sm: "/lovable-uploads/a97c7a7d-ffdd-4784-bce9-1f1013df055d.png?w=640",
        md: "/lovable-uploads/a97c7a7d-ffdd-4784-bce9-1f1013df055d.png?w=1024",
        lg: "/lovable-uploads/a97c7a7d-ffdd-4784-bce9-1f1013df055d.png?w=1920",
      }
    },
    {
      url: "/lovable-uploads/e4abbb19-2535-4e66-bf83-e690b7314fc3.png",
      title: "Garden Courtyard",
      description: "Our beautiful courtyard featuring historic statuary",
      sizes: {
        sm: "/lovable-uploads/e4abbb19-2535-4e66-bf83-e690b7314fc3.png?w=640",
        md: "/lovable-uploads/e4abbb19-2535-4e66-bf83-e690b7314fc3.png?w=1024",
        lg: "/lovable-uploads/e4abbb19-2535-4e66-bf83-e690b7314fc3.png?w=1920",
      }
    },
    {
      url: "/lovable-uploads/a0689743-0307-4878-a049-7c94b6e1a900.png",
      title: "Dining Experience",
      description: "Savor delicious meals in our elegant dining room",
      sizes: {
        sm: "/lovable-uploads/a0689743-0307-4878-a049-7c94b6e1a900.png?w=640",
        md: "/lovable-uploads/a0689743-0307-4878-a049-7c94b6e1a900.png?w=1024",
        lg: "/lovable-uploads/a0689743-0307-4878-a049-7c94b6e1a900.png?w=1920",
      }
    },
    {
      url: "/lovable-uploads/3dc3e571-2958-42c9-ae51-877b6882b60f.png",
      title: "Local Experience",
      description: "Take a traditional kalesa ride through historic streets",
      sizes: {
        sm: "/lovable-uploads/3dc3e571-2958-42c9-ae51-877b6882b60f.png?w=640",
        md: "/lovable-uploads/3dc3e571-2958-42c9-ae51-877b6882b60f.png?w=1024",
        lg: "/lovable-uploads/3dc3e571-2958-42c9-ae51-877b6882b60f.png?w=1920",
      }
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
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet={image.sizes.lg}
                    />
                    <source
                      media="(min-width: 640px)"
                      srcSet={image.sizes.md}
                    />
                    <img
                      src={image.sizes.sm}
                      alt={image.title}
                      className="w-full h-full object-cover transform-gpu"
                      style={{
                        imageRendering: "auto",
                        backfaceVisibility: "hidden",
                      }}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </picture>
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