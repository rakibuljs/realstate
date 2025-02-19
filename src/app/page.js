import About from "@/components/About";
import ClientSection from "@/components/client/ClientSection";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Faq from "@/components/faq/Faq";
import Feature from "@/components/feature/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Property from "@/components/property/Property";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <Property />
      <About />
      <CTA />
      <Faq />
      <ClientSection />
      <Contact />
      <Footer />
    </>
  );
};
export default HomePage;
