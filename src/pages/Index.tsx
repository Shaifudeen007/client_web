import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import LabsSection from "@/components/LabsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Nav from "@/components/Nav";
import Awards from "@/components/Awards";
import Testimonials from "@/components/Testimonials";
import Quote from "@/components/Quote";
import Loader from "@/components/Loader";
import Laptop from "@/components/Laptop";
import Hyperspeed from "@/components/Hyperspeed";

const Index: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* 🚀 GLOBAL HYPERSPEED BACKGROUND */}
          <div className="fixed inset-0 z-0">
            <Hyperspeed
              effectOptions={{
                distortion: "turbulentDistortion",
                fovSpeedUp: 120,
                speedUp: 1.5,
              }}
            />
          </div>

          {/* 🌑 DARK READABILITY LAYER */}
          <div className="fixed inset-0 bg-black/70 z-10 pointer-events-none" />

          {/* 🌍 WEBSITE CONTENT */}
          <main className="relative z-20">
            <Nav />
            <HeroSection />
            <About />
            <WorkSection />
            <LabsSection />
            <Awards />
            <Testimonials />
            <Laptop />
            <Quote />
            <ContactSection />
            <Footer />
          </main>
        </>
      )}
    </>
  );
};

export default Index;
