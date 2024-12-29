"use client";

import Contact from "./components/Contact";
import Hero from "@/app/components/Hero";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);
  return (
    <main>
      <Navbar/>
      <Hero />
      <Projects />
      <Skills />
     <Contact />
     <About />
      
    </main>
  );
}
