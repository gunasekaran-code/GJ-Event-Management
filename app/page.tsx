import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { BehindTheScenes } from "@/components/sections/BehindTheScenes";
import { Testimonials } from "@/components/sections/Testimonials";
import { VideoCTA } from "@/components/sections/VideoCTA";
import {Founders} from "@/components/sections/Founders";
import { Reach } from "@/components/sections/Reach";
import { OurTeam } from "@/components/sections/OurTeam";
import { Reach1 } from "@/components/sections/Reach1";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FAQ } from "@/components/sections/FAQ";
import { ClientMarquee } from "@/components/sections/ClientMarquee";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <BehindTheScenes />
        <Testimonials />
        <VideoCTA/>
        <Founders/>
        <Reach />
        <OurTeam />
        <Reach1 />
        <BlogPreview />
        <FAQ />
        <ClientMarquee />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
