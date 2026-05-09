"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { Certificates } from "@/components/Certificates";
import { GithubActivity } from "@/components/GithubActivity";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <About imageSrc="/images/MyHeadShot-min.png" />
      <Experience />
      <Projects />
      <Skills />
      <GithubActivity />
      <Services />
      <Certificates />
      <Education />
      <Testimonials />
      <Contact />
    </main>
  );
}
