import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import OurWork from "@/components/home/OurWork";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurWork />
      <Services />
    </>
  );
}