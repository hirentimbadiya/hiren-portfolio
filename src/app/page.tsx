import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { OpenSource } from "@/components/OpenSource";
import { Hobbies } from "@/components/Hobbies";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <OpenSource />
      <Hobbies />
      <Contact />
    </>
  );
}
