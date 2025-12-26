
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skill from "@/components/sections/skill";
import Project from "@/components/sections/project";
import Contact from "@/components/sections/contact";


export default function Home() {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 bg-background">
        <Hero/>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
      </main>
    </div>
  );
}
