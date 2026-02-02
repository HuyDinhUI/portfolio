"use client";

import Kanflow from "../projects/Kanflow";
import Lumina from "../projects/Lumina";
import Section from "../ui/section";

const Project = () => {
  return (
    <Section id="project" classname="min-h-screen z-2 bg-white overflow-hidden">
      <Kanflow />
      <Lumina />
    </Section>
  );
};

export default Project;
