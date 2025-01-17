import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: "/lovable-uploads/b106133c-691f-4cb4-8aa7-4596b643ee1b.png",
      title: "Fine Dining",
      description: "Exquisite dining experience with local and international cuisine",
    },
    {
      url: "/lovable-uploads/82232ddb-c395-4a9a-b0e9-0ceb181449fe.png",
      title: "Luxurious Interior",
      description: "Elegant and spacious interior spaces with modern amenities",
    },
    {
      url: "/lovable-uploads/9fd46ac6-4acb-4a23-aa3b-aa5c74c910e3.png",
      title: "Heritage Courtyard",
      description: "Beautiful courtyard featuring historic statuary and fountains",
    },
    {
      url: "/lovable-uploads/8f23cdee-4b4d-420a-bf7a-813f01ae93ac.png",
      title: "Hotel Exterior",
      description: "Majestic colonial architecture with modern comforts",
    },
    {
      url: "/lovable-uploads/909eeeae-cb05-43c6-b4ca-3c4dd9e92fe3.png",
      title: "Local Experience",
      description: "Traditional kalesa rides through historic streets",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-brown mb-12 text-center">
          Our Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-playfair text-white mb-2">
                    {image.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].title}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-2xl font-playfair text-white mb-2">
                  {images[selectedImage].title}
                </h3>
                <p className="text-white/90">
                  {images[selectedImage].description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;