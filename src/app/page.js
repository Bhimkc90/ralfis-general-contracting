import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Services from "@/components/home/Services";
import OurWork from "@/components/home/OurWork";
import Contact from "@/components/home/Contact";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <OurWork />
      <Contact />
      <CallToAction />
      <Footer />
    </>
  );
}