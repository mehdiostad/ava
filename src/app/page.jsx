"use client";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import Footer from "../components/Footer";
import Thoughts from "../components/Thoughts";
import AboutUs from "../components/AboutUs";
import Services from "@/components/Services";
import DigitalPlatform from "@/components/DigitalPlatform";
import OurMission from "@/components/OurMission";
import Projects from "@/components/Projects";

export default function Home() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="flex flex-col">
      <Services/>
      <DigitalPlatform/>
      <Projects/>
      <OurMission/>
      <Thoughts />
      <AboutUs />
      <Footer />

    </div>
     
  
  );
}
