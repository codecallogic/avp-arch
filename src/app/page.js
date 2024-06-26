"use client"
import { useParallax } from 'react-scroll-parallax'

//// LIBS
import SVG from "@/app/_libs/svg";

//// COMPONENTS
import Nav from "@/app/_components/nav"
import Hero from "@/app/_components/hero"
import SectionOne from "@/app/_components/sectionOne"
import SectionTwo from "@/app/_components/sectionTwo"
import Footer from "@/app/_components/footer"

export default function Home() {

  const { ref: parallaxOne }                  = useParallax({ speed: 35 });
  
  return (
    <>
    <main className="flex flex-col">
      <div
        className="-mt-[120px]"
        ref={parallaxOne}
      >
        <Hero />
        <SectionOne />
        <SectionTwo />
      </div>
      <div
      >
      <Footer />
      </div>
    </main>
    </>
  );
}
