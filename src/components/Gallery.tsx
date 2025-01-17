import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      url: "/lovable-uploads/8841fd59-0412-4220-adca-62a69cecfa0f.png",
      title: "Hotel Exterior",
      description: "Our beautiful Spanish colonial-style hotel facade",
      sizes: {
        sm: {
          webp: "/lovable-uploads/8841fd59-0412-4220-adca-62a69cecfa0f.png",
          jpg: "/lovable-uploads/8841fd59-0412-4220-adca-62a69cecfa0f.png",
        },
        lg: {
          webp: "/lovable-uploads/8841fd59-0412-4220-adca-62a69cecfa0f.png",
          jpg: "/lovable-uploads/8841fd59-0412-4220-adca-62a69cecfa0f.png",
        }
      }
    },
    {
      url: "/lovable-uploads/f7041d97-13d3-4ae7-8979-b038d94903ce.png",
      title: "Elegant Interior",
      description: "Spacious and well-appointed interior spaces",
      sizes: {
        sm: {
          webp: "/lovable-uploads/f7041d97-13d3-4ae7-8979-b038d94903ce.png",
          jpg: "/lovable-uploads/f7041d97-13d3-4ae7-8979-b038d94903ce.png",
        },
        lg: {
          webp: "/lovable-uploads/f7041d97-13d3-4ae7-8979-b038d94903ce.png",
          jpg: "/lovable-uploads/f7041d97-13d3-4ae7-8979-b038d94903ce.png",
        }
      }
    },
    {
      url: "/lovable-uploads/e9ab0742-8da3-4a1a-876d-b48196f1dbeb.png",
      title: "Heritage Courtyard",
      description: "Historic statuary and garden features in our courtyard",
      sizes: {
        sm: {
          webp: "/lovable-uploads/e9ab0742-8da3-4a1a-876d-b48196f1dbeb.png",
          jpg: "/lovable-uploads/e9ab0742-8da3-4a1a-876d-b48196f1dbeb.png",
        },
        lg: {
          webp: "/lovable-uploads/e9ab0742-8da3-4a1a-876d-b48196f1dbeb.png",
          jpg: "/lovable-uploads/e9ab0742-8da3-4a1a-876d-b48196f1dbeb.png",
        }
      }
    },
    {
      url: "/lovable-uploads/d1da7cb4-2943-4cfe-a02c-64f32b74b2db.png",
      title: "Fine Dining",
      description: "Exquisite dining experience with local and international cuisine",
      sizes: {
        sm: {
          webp: "/lovable-uploads/d1da7cb4-2943-4cfe-a02c-64f32b74b2db.png",
          jpg: "/lovable-uploads/d1da7cb4-2943-4cfe-a02c-64f32b74b2db.png",
        },
        lg: {
          webp: "/lovable-uploads/d1da7cb4-2943-4cfe-a02c-64f32b74b2db.png",
          jpg: "/lovable-uploads/d1da7cb4-2943-4cfe-a02c-64f32b74b2db.png",
        }
      }
    },
    {
      url: "/lovable-uploads/c5827887-3b59-4484-b37c-93291022cf75.png",
      title: "Local Experience",
      description: "Experience traditional kalesa rides through historic Vigan",
      sizes: {
        sm: {
          webp: "/lovable-uploads/c5827887-3b59-4484-b37c-93291022cf75.png",
          jpg: "/lovable-uploads/c5827887-3b59-4484-b37c-93291022cf75.png",
        },
        lg: {
          webp: "/lovable-uploads/c5827887-3b59-4484-b37c-93291022cf75.png",
          jpg: "/lovable-uploads/c5827887-3b59-4484-b37c-93291022cf75.png",
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
