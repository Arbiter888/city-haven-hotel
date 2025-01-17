import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Gallery />
      <Testimonials />
    </div>
  );
};

export default Index;