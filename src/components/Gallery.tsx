import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      url: "/lovable-uploads/2c57d492-c40f-4252-8b29-2090f91dd6e7.png",
      title: "Luxurious Interior",
      description: "Elegant and spacious interior spaces with modern amenities",
      sizes: {
        sm: {
          webp: "/lovable-uploads/2c57d492-c40f-4252-8b29-2090f91dd6e7.png",
          jpg: "/lovable-uploads/2c57d492-c40f-4252-8b29-2090f91dd6e7.png",
        },
        lg: {
          webp: "/lovable-uploads/2c57d492-c40f-4252-8b29-2090f91dd6e7.png",
          jpg: "/lovable-uploads/2c57d492-c40f-4252-8b29-2090f91dd6e7.png",
        }
      }
    },
    {
      url: "/lovable-uploads/d5b22810-2aae-4385-b4d7-5c9463797e2e.png",
      title: "Heritage Courtyard",
      description: "Beautiful courtyard featuring historic statuary and fountains",
      sizes: {
        sm: {
          webp: "/lovable-uploads/d5b22810-2aae-4385-b4d7-5c9463797e2e.png",
          jpg: "/lovable-uploads/d5b22810-2aae-4385-b4d7-5c9463797e2e.png",
        },
        lg: {
          webp: "/lovable-uploads/d5b22810-2aae-4385-b4d7-5c9463797e2e.png",
          jpg: "/lovable-uploads/d5b22810-2aae-4385-b4d7-5c9463797e2e.png",
        }
      }
    },
    {
      url: "/lovable-uploads/d45c62e1-1fd2-464c-bda8-070678bcbb05.png",
      title: "Hotel Exterior",
      description: "Majestic colonial architecture with modern comforts",
      sizes: {
        sm: {
          webp: "/lovable-uploads/d45c62e1-1fd2-464c-bda8-070678bcbb05.png",
          jpg: "/lovable-uploads/d45c62e1-1fd2-464c-bda8-070678bcbb05.png",
        },
        lg: {
          webp: "/lovable-uploads/d45c62e1-1fd2-464c-bda8-070678bcbb05.png",
          jpg: "/lovable-uploads/d45c62e1-1fd2-464c-bda8-070678bcbb05.png",
        }
      }
    },
    {
      url: "/lovable-uploads/9d71f9a6-7efa-4a72-9854-e9016f1ee5aa.png",
      title: "Local Experience",
      description: "Traditional kalesa rides through historic streets",
      sizes: {
        sm: {
          webp: "/lovable-uploads/9d71f9a6-7efa-4a72-9854-e9016f1ee5aa.png",
          jpg: "/lovable-uploads/9d71f9a6-7efa-4a72-9854-e9016f1ee5aa.png",
        },
        lg: {
          webp: "/lovable-uploads/9d71f9a6-7efa-4a72-9854-e9016f1ee5aa.png",
          jpg: "/lovable-uploads/9d71f9a6-7efa-4a72-9854-e9016f1ee5aa.png",
        }
      }
    },
    {
      url: "/lovable-uploads/e58d6029-5724-412d-82af-b2d244b053b8.png",
      title: "Fine Dining",
      description: "Exquisite dining experience with local and international cuisine",
      sizes: {
        sm: {
          webp: "/lovable-uploads/e58d6029-5724-412d-82af-b2d244b053b8.png",
          jpg: "/lovable-uploads/e58d6029-5724-412d-82af-b2d244b053b8.png",
        },
        lg: {
          webp: "/lovable-uploads/e58d6029-5724-412d-82af-b2d244b053b8.png",
          jpg: "/lovable-uploads/e58d6029-5724-412d-82af-b2d244b053b8.png",
        }
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
                    {/* Large screen, high DPI */}
                    <source
                      type="image/webp"
                      media="(min-width: 1024px) and (-webkit-min-device-pixel-ratio: 2), 
                             (min-width: 1024px) and (min-resolution: 192dpi)"
                      srcSet={`${image.sizes.lg.webp} 2x`}
                    />
                    {/* Large screen, standard DPI */}
                    <source
                      type="image/webp"
                      media="(min-width: 1024px)"
                      srcSet={image.sizes.lg.webp}
                    />
                    {/* Small screen, high DPI */}
                    <source
                      type="image/webp"
                      media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
                      srcSet={`${image.sizes.sm.webp} 2x`}
                    />
                    {/* Small screen, standard DPI */}
                    <source
                      type="image/webp"
                      srcSet={image.sizes.sm.webp}
                    />
                    {/* Fallback image */}
                    <img
                      src={image.sizes.lg.jpg}
                      alt={image.title}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
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