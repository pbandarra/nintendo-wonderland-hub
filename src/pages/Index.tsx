import Hero from "@/components/Hero";
import History from "@/components/History";
import Consoles from "@/components/Consoles";
import Games from "@/components/Games";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <History />
      <Consoles />
      <Games />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
