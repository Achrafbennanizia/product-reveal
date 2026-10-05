import { ProductCanvas } from "@/components/canvas/ProductCanvas";
import { Nav } from "@/components/Nav";
import { ScrollAssist } from "@/components/ScrollAssist";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Materials } from "@/components/sections/Materials";
import { Order } from "@/components/sections/Order";
import { Proof } from "@/components/sections/Proof";
import { Shift } from "@/components/sections/Shift";
import { System } from "@/components/sections/System";
import { ScrollProgressProvider } from "@/lib/scroll-progress";

export default function Home() {
  return (
    <ScrollProgressProvider>
      <SmoothScroll>
        <div className="atmosphere" aria-hidden />
        <div className="grain" aria-hidden />
        <ProductCanvas />
        <Nav />
        <ScrollAssist />
        <main id="main" tabIndex={-1} className="relative">
          <Hero />
          <Shift />
          <System />
          <Materials />
          <Proof />
          <Order />
        </main>
        <Footer />
      </SmoothScroll>
    </ScrollProgressProvider>
  );
}
