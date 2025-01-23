import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Header2 } from "@/sections/Header2";
import { Hero } from "@/sections/Hero";
import { Hero2 } from "@/sections/Hero2";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header2 />
      <Hero2 />
      {/* <Hero /> */}
      {/* <LogoTicker /> */}
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  )
}
