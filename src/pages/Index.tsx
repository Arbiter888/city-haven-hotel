import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import HotelInfo from "@/components/HotelInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Gallery />
      <HotelInfo />
      <Testimonials />
    </div>
  );
};

export default Index;