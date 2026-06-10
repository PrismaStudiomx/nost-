import Hero from "@/components/Hero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PerformanceBadge from "@/components/PerformanceBadge";
import FeaturedCollection from "@/components/FeaturedCollection";
import BrandStory from "@/components/BrandStory";
import WhyItConverts from "@/components/WhyItConverts";

export default function HomePage() {
  return (
    <>
      

      <Hero />

      <FeaturedCollection />

      <BrandStory />
      
      <WhyItConverts />

      <PerformanceBadge />

      
    </>
  );
}