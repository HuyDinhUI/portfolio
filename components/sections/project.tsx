"use client";

import Kanflow from "../projects/Kanflow";
import Lumina from "../projects/Lumina";
import Section from "../ui/section";

const Project = () => {
  return (
    <Section id="project" classname="flex justify-center min-h-screen z-2 bg-white overflow-hidden">
      <div className="w-[min(1100px,90vw)]">
        <Kanflow />
        <Lumina />
      </div>
    </Section>
  );
};

export default Project;
