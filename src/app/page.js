import { HeroSection } from "@/components/hero-section";
import { EnergyChallenge } from "@/components/EnergyChallenge";
import { AboutSection } from "@/components/AboutSection";
import { Differentiators } from "@/components/differentiators";
import { ServiceSection } from "@/components/ServiceSection";
import { SuccessStories } from "@/components/SuccessStories";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EnergyChallenge/>
      <AboutSection/>
      <Differentiators/>
      <ServiceSection/>
      <SuccessStories/>
      <Testimonials/>
      {/* <CTA/> */}
      {/* <Footer/> */}
    </main>
  );
}
