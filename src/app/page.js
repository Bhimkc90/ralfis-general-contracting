import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import OurWork from "@/components/home/OurWork";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurWork />
      <Services />
      <WhyChooseUs />
      <Contact />
    </>
  );
}